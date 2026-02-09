import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Failure Modes | TelcoOps",
  description: "Known failure scenarios, current mitigations, and identified gaps.",
};

export default function TelcoOpsFailureModesPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Failure Modes</h1>

        <p className="lead">
          Known failure scenarios, current mitigations, and identified gaps. Documenting what can go wrong is as important
          as documenting what works -- it demonstrates operational maturity and builds stakeholder trust.
        </p>

        <hr />

        <h2>1. LLM Hallucination in RCA Hypothesis</h2>

        <h3>Scenario</h3>
        <p>
          The LLM generates a plausible but incorrect root cause hypothesis. For example, a fiber cut is misdiagnosed as a
          DNS outage because the prompt context includes DNS-related alert noise.
        </p>

        <h3>Blast Radius</h3>
        <p>
          If the hallucinated hypothesis is accepted and acted upon, the remediation team pursues the wrong root cause.
          The actual incident continues unresolved, extending MTTR by the time spent on the wrong path.
        </p>

        <h3>Current Mitigations</h3>
        <ul>
          <li><strong>Baseline comparison</strong>: Deterministic baseline RCA always runs alongside LLM, providing a reference point.</li>
          <li><strong>Confidence scoring</strong>: Each hypothesis includes a confidence score. Low confidence signals uncertainty.</li>
          <li><strong>Human review gate</strong>: All RCA artifacts default to <code>pending_review</code>. Operators must explicitly accept.</li>
          <li><strong>Wrong-but-confident tracking</strong>: The evaluation pipeline tracks cases where confidence is high (&gt;0.7) but accuracy is low (&lt;0.5 similarity). This metric is surfaced on the Observability dashboard.</li>
        </ul>

        <h3>Gaps (Phase 2)</h3>
        <ul>
          <li>No automated hallucination detection (e.g., cross-referencing hypothesis against alert evidence).</li>
          <li>No feedback loop where rejected hypotheses improve future prompts.</li>
        </ul>

        <hr />

        <h2>2. RAG Corpus Gap (Novel Incident Type)</h2>

        <h3>Scenario</h3>
        <p>
          An incident type not covered by the 12 MSO-oriented runbooks in the RAG corpus. The LLM receives irrelevant
          context, producing a generic or misleading hypothesis.
        </p>

        <h3>Current Mitigations</h3>
        <ul>
          <li><strong>Baseline fallback</strong>: The baseline RCA covers 11 pattern-matching rules and is always available.</li>
          <li><strong>Confidence drop</strong>: When RAG context is weak, LLM confidence scores tend to drop, signaling novelty.</li>
          <li><strong>Top-k limiting</strong>: RAG retrieves only 4 chunks, reducing noise from irrelevant documents.</li>
        </ul>

        <h3>Gaps</h3>
        <ul>
          <li>No automated detection of corpus coverage gaps.</li>
          <li>No mechanism to expand the corpus based on incident patterns.</li>
        </ul>

        <hr />

        <h2>3. Correlation Threshold Misconfiguration</h2>

        <h3>Scenario</h3>
        <p>
          The alert correlation threshold (minimum alerts to form an incident) is set incorrectly.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Threshold</th>
                <th className="px-4 py-3 text-left font-semibold">Effect</th>
                <th className="px-4 py-3 text-left font-semibold">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">min_alerts = 5</td>
                <td className="px-4 py-3">Noise alerts form spurious incidents (~50% false incidents)</td>
                <td className="px-4 py-3"><span className="text-red-600 dark:text-red-400 font-semibold">High</span></td>
              </tr>
              <tr className="border-b border-border bg-green-500/5">
                <td className="px-4 py-3 font-mono">min_alerts = 10 (default)</td>
                <td className="px-4 py-3">Correct behavior -- noise filtered, real incidents captured</td>
                <td className="px-4 py-3"><span className="text-green-600 dark:text-green-400 font-semibold">Low</span></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">min_alerts = 50</td>
                <td className="px-4 py-3">Most real incidents missed (~80% under-detection)</td>
                <td className="px-4 py-3"><span className="text-red-600 dark:text-red-400 font-semibold">High</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Current Mitigations</h3>
        <ul>
          <li><strong>Deterministic seed</strong>: Same seed always produces same alerts, enabling regression testing of threshold changes.</li>
          <li><strong>Configurable per-scenario</strong>: Alert rates and noise rates are adjustable in the generation request.</li>
        </ul>

        <h3>Gaps</h3>
        <ul>
          <li>No threshold validation or guardrails in the API.</li>
          <li>No monitoring for incident creation rate anomalies.</li>
        </ul>

        <hr />

        <h2>4. LLM Provider Failure (Timeout / Rate Limit)</h2>

        <h3>Scenario</h3>
        <p>
          The LLM provider (Gemini or Tele-LLM) times out, rate-limits, or returns an error. The LLM RCA endpoint fails
          with a 502 error.
        </p>

        <h3>Current Mitigations</h3>
        <ul>
          <li><strong>Baseline always available</strong>: Baseline RCA has no external dependency and always succeeds.</li>
          <li><strong>Configurable timeouts</strong>: Gemini timeout is 120s, Tele-LLM timeout is 60s. Both are configurable via environment variables.</li>
          <li><strong>Clear error response</strong>: 502 with the underlying error message, not a silent failure.</li>
          <li><strong>Provider abstraction</strong>: Switching from Gemini to Tele-LLM (or vice versa) requires only an environment variable change.</li>
        </ul>

        <h3>Gaps</h3>
        <ul>
          <li>No circuit breaker pattern (repeated failures continue hitting the provider).</li>
          <li>No automatic fallback from Gemini to Tele-LLM on failure.</li>
          <li>No retry with exponential backoff.</li>
        </ul>

        <hr />

        <h2>5. Wrong-but-Confident RCA Output</h2>

        <h3>Scenario</h3>
        <p>
          The LLM produces a hypothesis with high confidence (&gt;0.7) but the hypothesis is actually wrong
          (semantic similarity &lt;0.5 against ground truth). This is the most dangerous failure mode because
          operators may trust the high confidence score.
        </p>

        <h3>Current Mitigations</h3>
        <ul>
          <li><strong>Explicit metric</strong>: The evaluation pipeline computes wrong-but-confident rate as a first-class quality metric.</li>
          <li><strong>Dashboard visibility</strong>: Wrong-but-confident rate is displayed on the Observability dashboard with color-coded risk levels (green &lt;5%, amber &lt;15%, red &gt;15%).</li>
          <li><strong>Confidence calibration</strong>: Average confidence for correct vs incorrect predictions is tracked to detect miscalibration.</li>
          <li><strong>Human review</strong>: Regardless of confidence, all hypotheses require human acceptance.</li>
        </ul>

        <h3>Gaps</h3>
        <ul>
          <li>No automated alerting when wrong-but-confident rate spikes.</li>
          <li>No confidence recalibration mechanism.</li>
          <li>No escalation trigger for high-confidence low-accuracy scenarios.</li>
        </ul>

        <hr />

        <h2>Detection and Mitigation Flow</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    INC["Incident Created"] --> BL["Baseline RCA"]
    INC --> LLM["LLM RCA"]

    LLM --> CHK{"Confidence<br/>vs Accuracy?"}
    CHK -->|"High conf + High acc"| OK["Valid Hypothesis"]
    CHK -->|"Low conf"| WARN["Low Confidence<br/>Warning"]
    CHK -->|"High conf + Low acc"| WBC["Wrong-but-Confident<br/>Alert"]

    OK --> REV["Human Review Gate"]
    WARN --> REV
    WBC --> REV

    BL --> REV

    REV -->|"Accept"| AUDIT["Audit Trail"]
    REV -->|"Reject"| FB["Feedback Loop<br/>(Phase 2)"]

    style INC fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px,color:#1c1917
    style WBC fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#1c1917
    style OK fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#1c1917
    style WARN fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#1c1917
    style REV fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#1c1917
    style AUDIT fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#1c1917
    style FB fill:#f3e8ff,stroke:#9333ea,stroke-width:2px,color:#1c1917`}
          />
        </div>

        <h2>Component Failure Matrix</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Failure Mode</th>
                <th className="px-4 py-3 text-left font-semibold">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3">LLM provider</td><td className="px-4 py-3">Timeout / error</td><td className="px-4 py-3">502 returned, baseline still available</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">RAG index</td><td className="px-4 py-3">Fails to load</td><td className="px-4 py-3">LLM runs without context, confidence drops</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">SQLite</td><td className="px-4 py-3">Corruption / lock</td><td className="px-4 py-3">Delete and recreate (demo data is synthetic)</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Audit log</td><td className="px-4 py-3">Write failure</td><td className="px-4 py-3">Review still recorded in DB, audit log is supplementary</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Streamlit UI</td><td className="px-4 py-3">Crash / disconnect</td><td className="px-4 py-3">API continues independently, restart UI</td></tr>
            </tbody>
          </table>
        </div>

        <hr />

        <div className="not-prose my-6 rounded-lg border-2 border-blue-500/30 bg-blue-500/5 p-4">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Summary</p>
          <div className="text-sm space-y-1">
            <p><strong>Known &amp; Mitigated:</strong> LLM hallucination (baseline + review), provider failure (baseline fallback), correlation threshold (deterministic seeds).</p>
            <p><strong>Known &amp; Monitored:</strong> Wrong-but-confident rate (dashboard metric), RAG corpus gaps (confidence drop signal).</p>
            <p><strong>Known Gaps (Phase 2):</strong> Circuit breaker, automated hallucination detection, feedback loop, confidence recalibration.</p>
          </div>
        </div>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/results-personas" className="text-primary hover:underline">Results &amp; Personas</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
