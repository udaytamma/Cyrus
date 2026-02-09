import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Executive Overview | TelcoOps",
  description: "Principal TPM-level executive overview for the TelcoOps incident RCA platform.",
};

export default function TelcoOpsExecutiveOverviewPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Executive Overview</h1>

        <p className="lead">
          TelcoOps is a telecom operations RCA platform that turns high-volume alert noise into structured incident narratives.
          The MVP demonstrates how a modern NOC can move from raw alerts to decision-ready RCA in minutes, with a baseline
          comparator and a governed LLM workflow.
        </p>

        <h2>Business Problem</h2>

        <p>
          In telecom operations, incident resolution time is driven less by detection and more by evidence triage. When alerts arrive
          in bursts across multiple network layers, teams must reconcile conflicting signals, identify the likely root cause, and
          communicate a consistent narrative to stakeholders. Current processes are manual and inconsistent, leading to:
        </p>

        <ul>
          <li><strong>Longer MTTR</strong> due to delayed RCA and repeated hypothesis resets.</li>
          <li><strong>Inconsistent postmortems</strong> because evidence is scattered across tools.</li>
          <li><strong>Reduced trust</strong> from leadership and customer teams when RCA changes mid-incident.</li>
        </ul>

        <h2>Program Thesis</h2>

        <p>
          TelcoOps provides a structured incident workflow with two parallel RCA engines: a deterministic baseline and a contextual
          LLM RCA enhanced by RAG. This dual-track design makes the LLM output auditable and comparable, reducing adoption risk while
          accelerating time-to-insight.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Decision Axis</th>
                <th className="px-4 py-3 text-left font-semibold">Baseline RCA</th>
                <th className="px-4 py-3 text-left font-semibold">LLM RCA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Speed</td>
                <td className="px-4 py-3">Instant, deterministic</td>
                <td className="px-4 py-3">Fast, dependent on model latency</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Explainability</td>
                <td className="px-4 py-3">Rule-driven, auditable</td>
                <td className="px-4 py-3">Contextual with evidence sourcing</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Coverage</td>
                <td className="px-4 py-3">Limited to known patterns</td>
                <td className="px-4 py-3">Handles novel correlations</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Incident Lifecycle</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart LR
    A["Raw Alerts<br/>(100s per event)"] --> C["Incident<br/>Correlator"]
    C --> I["Incident"]
    I --> B["Baseline RCA<br/>(ms)"]
    I --> L["LLM RCA<br/>(seconds)"]
    B --> R["Human Review<br/>(accept/reject)"]
    L --> R
    R --> AU["Audit Trail"]

    style A fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#1c1917
    style C fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#1c1917
    style I fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#1c1917
    style B fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#1c1917
    style L fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#1c1917
    style R fill:#fef9c3,stroke:#ca8a04,stroke-width:2px,color:#1c1917
    style AU fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px,color:#1c1917`}
          />
        </div>

        <h2>Target Outcomes</h2>

        <ul>
          <li><strong>Reduce time-to-RCA hypothesis</strong> from 15-30 minutes (manual benchmark) to seconds (baseline) or single-digit seconds (LLM).</li>
          <li><strong>Standardize post-incident reporting</strong> with structured RCA artifacts, confidence scores, and human review audit trail.</li>
          <li><strong>Measure decision quality</strong> with precision, recall, and wrong-but-confident rate across 50 evaluation scenarios.</li>
          <li><strong>Enable safe AI adoption</strong> through baseline comparison, human-in-the-loop review, and stored LLM request/response trails.</li>
        </ul>

        <h2>Primary Stakeholders</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Stakeholder</th>
                <th className="px-4 py-3 text-left font-semibold">Primary Need</th>
                <th className="px-4 py-3 text-left font-semibold">TelcoOps Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">NOC Lead</td>
                <td className="px-4 py-3">Fast triage and ownership</td>
                <td className="px-4 py-3">Condensed incident summary and hypothesis list</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Incident Commander</td>
                <td className="px-4 py-3">Consistent RCA narrative</td>
                <td className="px-4 py-3">Baseline + LLM side-by-side evidence</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Network Engineering</td>
                <td className="px-4 py-3">Actionable signals</td>
                <td className="px-4 py-3">Structured evidence and impact scope</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Customer Support</td>
                <td className="px-4 py-3">Clear updates</td>
                <td className="px-4 py-3">Single narrative to communicate to customers</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Measured vs Targeted Success Metrics</h2>

        <p>
          The MVP focuses on measurable operational improvements rather than broad AI claims. The values below represent what the demo
          system surfaces directly and the targets for a productionized rollout.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">MVP Observable</th>
                <th className="px-4 py-3 text-left font-semibold">Production Target</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Time to RCA hypothesis</td>
                <td className="px-4 py-3">Measured: milliseconds (baseline), seconds (LLM) via duration_ms</td>
                <td className="px-4 py-3">&lt; 10 minutes for P1 incidents</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Decision quality</td>
                <td className="px-4 py-3">Precision, recall, wrong-but-confident rate from 50 evaluation scenarios</td>
                <td className="px-4 py-3">Wrong-but-confident &lt; 5%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Evidence completeness</td>
                <td className="px-4 py-3">Alert + RAG context captured with confidence scores</td>
                <td className="px-4 py-3">90% of incidents with structured evidence pack</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RCA consistency</td>
                <td className="px-4 py-3">Baseline vs LLM diff visible, semantic similarity scored</td>
                <td className="px-4 py-3">Reduce RCA narrative drift by 50%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Human review rate</td>
                <td className="px-4 py-3">Accept/reject decisions logged to audit trail</td>
                <td className="px-4 py-3">100% of RCA artifacts reviewed before action</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Governance and Risk Controls</h2>

        <ul>
          <li><strong>Human-in-the-loop review</strong>: All RCA artifacts default to pending_review. Operators accept or reject with notes, logged to audit trail.</li>
          <li><strong>LLM audit trail</strong>: Request and response payloads are stored with the incident.</li>
          <li><strong>Baseline fallback</strong>: When LLM is unavailable, baseline RCA remains reliable.</li>
          <li><strong>Wrong-but-confident tracking</strong>: High confidence + low accuracy cases are surfaced on the observability dashboard.</li>
          <li><strong>Config-driven provider</strong>: Switch between Gemini and Tele-LLM without code changes.</li>
          <li><strong>Three-tier token system</strong>: Separate API, admin, and metrics tokens protect write, destructive, and observability endpoints.</li>
        </ul>

        <h2>Go-to-Market for an Internal NOC Team</h2>

        <ol>
          <li><strong>Phase 1 (MVP)</strong>: Run in parallel with existing NOC workflow for select incidents.</li>
          <li><strong>Phase 2 (Pilot)</strong>: Extend to additional incident types with calibrated confidence thresholds.</li>
          <li><strong>Phase 3 (Scale)</strong>: Integrate live telemetry and automate evidence ingestion.</li>
        </ol>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/tpm-execution-strategy" className="text-primary hover:underline">TPM Execution Strategy</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
