import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "LLM and RAG Pipeline | TelcoOps",
  description: "Deep dive into LLM integration and retrieval-augmented generation in TelcoOps.",
};

export default function TelcoOpsLlmRagPipelinePage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>LLM and RAG Pipeline</h1>

        <p className="lead">
          TelcoOps uses a provider-agnostic LLM client and a lightweight RAG pipeline built on LlamaIndex. The goal is to keep the
          LLM layer swappable while enforcing structured RCA outputs.
        </p>

        <h2>Provider Abstraction</h2>

        <ul>
          <li><strong>Gemini</strong>: Hosted model for Cloud Run demos (timeout: 120s).</li>
          <li><strong>Tele-LLM</strong>: OpenAI-compatible endpoints for local or self-hosted inference (timeout: 60s).</li>
          <li><strong>Configuration</strong>: Controlled via <code>LLM_PROVIDER</code>, <code>LLM_MODEL</code>, <code>LLM_BASE_URL</code>, and <code>LLM_TIMEOUT_SECONDS</code>.</li>
        </ul>

        <h2>Prompt Structure</h2>

        <p>
          The prompt is a structured JSON document containing instructions, schema, incident data, alerts, and RAG context.
          This ensures predictable output formatting and makes post-processing reliable.
        </p>

        <h3>Full Prompt Example</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`{
  "instruction": "You are a telecom operations RCA assistant. Return only valid JSON following the schema below. Do not wrap the JSON in markdown or code fences.",

  "schema": {
    "incident_summary": "string",
    "hypotheses": ["string"],
    "confidence_scores": {"hypothesis": 0.0},
    "evidence": {"key": "value"},
    "generated_at": "ISO-8601 timestamp",
    "model": "string"
  },

  "incident": {
    "id": "inc-abc123",
    "start_time": "2026-01-11T10:00:00Z",
    "severity": "critical",
    "summary": "Network degradation on backbone",
    "impact_scope": {"affected_customers": 1500}
  },

  "alerts_sample": [
    {
      "timestamp": "2026-01-11T10:01:00Z",
      "source_system": "net-snmp",
      "host": "core-router-1",
      "alert_type": "packet_loss",
      "severity": "critical",
      "message": "core-router-1 reports degraded network performance"
    }
    // ... up to 20 alerts
  ],

  "rag_context": [
    "From runbook: For packet loss on core routers, check interface errors with 'show interface counters'. Apply QoS policy if congestion detected.",
    "From runbook: Link congestion typically causes cascading latency spikes. Reroute traffic before investigating root cause."
  ],

  "constraints": [
    "Do not invent remediation commands.",
    "If uncertain, include lower confidence score."
  ]
}`}</pre>

        <h3>Expected LLM Response</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`{
  "incident_summary": "Network degradation affecting backbone infrastructure",
  "hypotheses": [
    "link congestion on core-router-1 causing packet loss"
  ],
  "confidence_scores": {
    "link congestion on core-router-1 causing packet loss": 0.78
  },
  "evidence": {
    "alert_patterns": "20 packet_loss alerts from core-router-1 in 10 min window",
    "runbook_match": "QoS policy recommendation from backbone-troubleshooting.md"
  },
  "generated_at": "2026-01-11T10:15:32Z",
  "model": "gemini-1.5-flash"
}`}</pre>

        <h2>JSON Parsing Guardrails</h2>

        <p>
          The LLM client uses a multi-strategy approach to extract valid JSON from responses:
        </p>

        <ol>
          <li><strong>Direct parse</strong>: Attempt <code>json.loads(content)</code> on raw response</li>
          <li><strong>Fenced extraction</strong>: Extract JSON from <code>```json ... ```</code> code blocks</li>
          <li><strong>Brace extraction</strong>: Find first <code>{`{`}</code> to last <code>{`}`}</code> and parse that substring</li>
          <li><strong>Error</strong>: If all strategies fail, raise <code>LLMClientError</code> with explicit message</li>
        </ol>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`def _parse_json_response(content: str) -> dict[str, Any]:
    # Strategy 1: Direct parse
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        pass

    # Strategy 2: Extract from code fence
    fence_match = re.search(r"\`\`\`json\\s*(\\{.*?\\})\\s*\`\`\`", content, re.DOTALL)
    if fence_match:
        return json.loads(fence_match.group(1))

    # Strategy 3: Find brace boundaries
    brace_start = content.find("{")
    brace_end = content.rfind("}")
    if brace_start != -1 and brace_end != -1 and brace_end > brace_start:
        return json.loads(content[brace_start:brace_end + 1])

    raise LLMClientError("LLM response was not valid JSON")`}</pre>

        <h2>RAG Workflow</h2>

        <ol>
          <li>Load runbook corpus from <code>docs/rag_corpus</code>.</li>
          <li>Embed documents using MiniLM (sentence-transformers/all-MiniLM-L6-v2).</li>
          <li>Persist the index under <code>storage/rag_index</code>.</li>
          <li>Retrieve top-k nodes for each incident query (default k=4).</li>
        </ol>

        <h3>RAG Corpus Structure</h3>

        <p>
          The RAG corpus should contain markdown documents organized by topic. Each document provides operational
          runbook context that helps the LLM generate accurate RCA hypotheses.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`docs/rag_corpus/                          # 12 MSO-oriented runbooks (~1200 lines)
├── hfc-network-troubleshooting.md        # CMTS, DOCSIS, HFC plant, RF issues
├── dns-resolver-operations.md            # Residential DNS, CDN steering, NXDOMAIN
├── bgp-peering-transit.md                # IX peering, transit providers, route leaks
├── optical-transport-headend.md          # Fiber rings, DWDM, headend connectivity
├── security-edge-incidents.md            # DDoS, CPE exploits, amplification
├── oss-bss-performance.md                # Provisioning, billing, activation systems
├── video-cdn-delivery.md                 # VOD, cache, ABR streaming
├── mpls-vpn-enterprise.md                # L3VPN, Metro-E, VRF leaks
├── voip-telephony.md                     # SIP, E911, MTA, call quality
├── iptv-linear-channels.md               # QAM, multicast, STB, EPG
├── wifi-managed-services.md              # xFi pods, hotspots, RADIUS
└── weather-disaster-recovery.md          # Ice storms, floods, hurricanes`}</pre>

        <h4>Example Runbook Document (MSO-Oriented)</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`# HFC Network & CMTS Troubleshooting Guide

## CMTS Linecard Failure

### Symptoms
- cmts_offline, docsis_error, modem_offline alerts
- "CMTS linecard offline on cmts-hub01"
- "Mass modem offline event: 500+ modems in node group NG-456"

### Root Cause Indicators
1. **CMTS Hardware Failure**
   - Linecard CPU >90%, memory exhaustion
   - Upstream/downstream channel flapping
   - Multiple modems going offline simultaneously

2. **RF Plant Issues**
   - SNR degradation (<25dB downstream, <20dB upstream)
   - High uncorrectable errors (FEC failures)
   - Ingress noise spikes (5-42MHz range)

### Diagnostic Steps
1. Check CMTS linecard status: \`show linecard status\`
2. Verify downstream/upstream channel health
3. Review RF levels: \`show cable interface spectrum\`
4. Check node power status via SCADA/HFC monitoring

### Remediation
- Immediate: Failover to standby linecard, isolate affected node
- Long-term: Proactive sweep testing, node splitting for capacity`}</pre>

        <h2>Evidence Packaging</h2>

        <p>
          LLM RCA evidence is stored as a JSON bundle containing:
        </p>

        <ul>
          <li><strong>llm_evidence</strong>: Evidence extracted by the LLM</li>
          <li><strong>llm_request</strong>: Full request payload sent to LLM (incident, alerts, RAG context)</li>
          <li><strong>llm_response</strong>: Raw response from LLM</li>
        </ul>

        <p>
          This enables full audit trail and debugging of LLM decisions.
        </p>

        <h2>Configuration Options</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">LLM_PROVIDER</td>
                <td className="px-4 py-3 font-mono text-xs">local_telellm</td>
                <td className="px-4 py-3">Provider: local_telellm, hosted_telellm, gemini</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">LLM_MODEL</td>
                <td className="px-4 py-3 font-mono text-xs">tele-llm-3b</td>
                <td className="px-4 py-3">Model name (e.g., gemini-1.5-flash)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">LLM_TIMEOUT_SECONDS</td>
                <td className="px-4 py-3 font-mono text-xs">60.0</td>
                <td className="px-4 py-3">Timeout for OpenAI-compatible requests</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">GEMINI_TIMEOUT_SECONDS</td>
                <td className="px-4 py-3 font-mono text-xs">120.0</td>
                <td className="px-4 py-3">Timeout for Gemini requests</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">RAG_CORPUS_DIR</td>
                <td className="px-4 py-3 font-mono text-xs">./docs/rag_corpus</td>
                <td className="px-4 py-3">Directory containing runbook markdown files</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">RAG_TOP_K</td>
                <td className="px-4 py-3 font-mono text-xs">4</td>
                <td className="px-4 py-3">Number of RAG nodes to retrieve per query</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Failure Modes</h2>

        <ul>
          <li><strong>RAG index missing</strong>: Build index on first run. Log warning if corpus empty.</li>
          <li><strong>LLM response not JSON</strong>: Return 502 with explicit error. Log full response for debugging.</li>
          <li><strong>Provider misconfiguration</strong>: Preflight script detects missing API keys.</li>
          <li><strong>Timeout exceeded</strong>: Return 502 with timeout error. Consider increasing timeout for complex incidents.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/deep-dives/scenario-generation" className="text-primary hover:underline">Scenario generation</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
