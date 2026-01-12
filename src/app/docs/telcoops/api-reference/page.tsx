import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "API Reference | TelcoOps",
  description: "REST API endpoints for generating incidents and RCA artifacts in TelcoOps.",
};

export default function TelcoOpsApiReferencePage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>API Reference</h1>

        <p className="lead">
          TelcoOps exposes a small, focused API for scenario generation, incident correlation, and RCA generation. The API is
          designed to be simple enough for a demo UI but structured for future automation.
        </p>

        <h2>Base URL</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm">http://127.0.0.1:8000</pre>

        <p className="text-sm text-muted-foreground mt-2">
          Interactive API documentation available at <code>/docs</code> (Swagger) and <code>/redoc</code> (ReDoc).
        </p>

        <h2>Endpoints</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Method</th>
                <th className="px-4 py-3 text-left font-semibold">Path</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/generate</td>
                <td className="px-4 py-3">Generate synthetic alerts and correlate incidents.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/alerts</td>
                <td className="px-4 py-3">List all alerts.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/incidents</td>
                <td className="px-4 py-3">List all incidents.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/incidents/{"{incident_id}"}/alerts</td>
                <td className="px-4 py-3">List alerts for a specific incident.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/reset</td>
                <td className="px-4 py-3">Clear alerts, incidents, and RCA artifacts.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/rca/{"{incident_id}"}/baseline</td>
                <td className="px-4 py-3">Generate baseline RCA using pattern-matching rules.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/rca/{"{incident_id}"}/llm</td>
                <td className="px-4 py-3">Generate LLM RCA using RAG context.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/rca/{"{incident_id}"}/latest</td>
                <td className="px-4 py-3">Fetch latest RCA artifact.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/metrics/overview</td>
                <td className="px-4 py-3">Counts, KPIs, test results, and evaluation summary.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/health</td>
                <td className="px-4 py-3">Health check endpoint for monitoring.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/integrations/servicenow/incidents</td>
                <td className="px-4 py-3">Mock ServiceNow incident payloads.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/integrations/jira/issues</td>
                <td className="px-4 py-3">Mock Jira issue payloads.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/integrations/servicenow/webhook</td>
                <td className="px-4 py-3">Accept ServiceNow webhook payloads.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/integrations/jira/webhook</td>
                <td className="px-4 py-3">Accept Jira webhook payloads.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Generate Scenario</h2>

        <p>Generates synthetic alerts and correlates them into incidents. All parameters are validated with Pydantic.</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`POST /generate
Content-Type: application/json

{
  "incident_type": "dns_outage",    // Required: one of 11 scenario types
  "alert_rate_per_min": 20,         // 1-100, default: 20
  "duration_min": 10,               // 1-60, default: 10
  "noise_rate_per_min": 5,          // 0-50, default: 5
  "seed": 42                        // Optional: for reproducibility
}`}</pre>

        <h3>Supported Incident Types</h3>

        <div className="not-prose my-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <code className="bg-muted px-2 py-1 rounded">network_degradation</code>
          <code className="bg-muted px-2 py-1 rounded">dns_outage</code>
          <code className="bg-muted px-2 py-1 rounded">bgp_flap</code>
          <code className="bg-muted px-2 py-1 rounded">fiber_cut</code>
          <code className="bg-muted px-2 py-1 rounded">router_freeze</code>
          <code className="bg-muted px-2 py-1 rounded">isp_peering_congestion</code>
          <code className="bg-muted px-2 py-1 rounded">ddos_edge</code>
          <code className="bg-muted px-2 py-1 rounded">mpls_vpn_leak</code>
          <code className="bg-muted px-2 py-1 rounded">cdn_cache_stampede</code>
          <code className="bg-muted px-2 py-1 rounded">firewall_rule_misconfig</code>
          <code className="bg-muted px-2 py-1 rounded">database_latency_spike</code>
        </div>

        <p>Response includes alert count, incident summary, and ground truth metadata.</p>

        <h2>Generate Baseline RCA</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`POST /rca/{incident_id}/baseline`}</pre>

        <p>
          Returns hypothesis and confidence score based on pattern-matching rules. The baseline analyzes
          incident summary and alert types to select the most appropriate hypothesis from 11 predefined patterns.
        </p>

        <h3>Example Response</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`{
  "incident_summary": "DNS servers are reporting failures",
  "hypotheses": ["authoritative DNS cluster outage in region-east"],
  "confidence_scores": {
    "authoritative DNS cluster outage in region-east": 0.60
  },
  "evidence": {
    "alerts": "DNS-related alerts: servfail spikes, NXDOMAIN increases",
    "match_count": 3
  },
  "generated_at": "2026-01-11T10:15:32Z",
  "model": "baseline-rules"
}`}</pre>

        <h2>Generate LLM RCA</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`POST /rca/{incident_id}/llm`}</pre>

        <p>
          LLM RCA uses the incident payload, a sample of alerts (up to 20), and RAG context from the runbook corpus.
          If the LLM fails, the API returns a 502 with the underlying error.
        </p>

        <h2>Fetch Latest RCA</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`GET /rca/{incident_id}/latest?source=llm|baseline|any`}</pre>

        <h2>Integration Webhooks</h2>

        <h3>ServiceNow Webhook</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`POST /integrations/servicenow/webhook
Content-Type: application/json

{
  "sys_id": "abc123def456",                    // Required: ServiceNow record ID
  "number": "INC0012345",                      // Required: Incident number
  "short_description": "Network outage",       // Required: Brief description
  "priority": 2,                               // Optional: 1-5 (1=Critical), default: 3
  "state": "In Progress"                       // Optional: Incident state, default: "New"
}`}</pre>

        <h3>Jira Webhook</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`POST /integrations/jira/webhook
Content-Type: application/json

{
  "issue_key": "OPS-123",                      // Required: Jira issue key
  "summary": "DNS resolution failures",        // Required: Issue summary
  "priority": "High",                          // Optional: Priority name, default: "Medium"
  "status": "In Progress"                      // Optional: Issue status, default: "Open"
}`}</pre>

        <p>
          Webhook events are appended to <code>storage/integration_events.jsonl</code> for audit logging.
        </p>

        <h2>Error Codes</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Code</th>
                <th className="px-4 py-3 text-left font-semibold">Meaning</th>
                <th className="px-4 py-3 text-left font-semibold">Common Causes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">401</td>
                <td className="px-4 py-3">Unauthorized</td>
                <td className="px-4 py-3">Missing or invalid API token (if configured)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">404</td>
                <td className="px-4 py-3">Not Found</td>
                <td className="px-4 py-3">Incident or RCA artifact not found</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">422</td>
                <td className="px-4 py-3">Validation Error</td>
                <td className="px-4 py-3">Invalid request payload (missing required fields, out of range)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">502</td>
                <td className="px-4 py-3">Bad Gateway</td>
                <td className="px-4 py-3">LLM or RAG failure during RCA generation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Auth (Optional)</h2>

        <p>
          If <code>API_TOKEN</code> is set, write and metrics endpoints require <code>X-API-Key</code> or a Bearer token:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`X-API-Key: your_token_here
Authorization: Bearer your_token_here`}</pre>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/demo-dashboard" className="text-primary hover:underline">Demo dashboard</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
