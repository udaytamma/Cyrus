import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Results and Personas | TelcoOps",
  description: "Evaluation results, honest assessment, and persona-specific value for TelcoOps.",
};

export default function TelcoOpsResultsPersonasPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Results and Personas</h1>

        <p className="lead">
          Evaluation results from 50 synthetic scenarios, an honest assessment of what is and is not proven,
          and the user personas TelcoOps enables.
        </p>

        <hr />

        <h2>Evaluation Results</h2>

        <p>
          Scoring method: <strong>semantic cosine similarity</strong> using sentence-transformers/all-MiniLM-L6-v2.
          50 evaluation scenarios across 11 incident types with deterministic seeds.
        </p>

        <h3>Evaluation Pipeline</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart LR
    GEN["50 Scenarios<br/>11 Types"] --> BL["Baseline RCA"]
    GEN --> LLM["LLM RCA"]
    BL --> EMB["Embed Hypotheses<br/>MiniLM-L6-v2"]
    LLM --> EMB
    EMB --> COS["Cosine Similarity<br/>vs Ground Truth"]
    COS --> MET["Quality Metrics"]
    MET --> P["Precision"]
    MET --> R["Recall"]
    MET --> WBC["Wrong-but-<br/>Confident Rate"]
    MET --> CC["Confidence<br/>Calibration"]

    style GEN fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px,color:#1c1917
    style EMB fill:#f3e8ff,stroke:#9333ea,stroke-width:2px,color:#1c1917
    style COS fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#1c1917
    style MET fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#1c1917`}
          />
        </div>

        <h3>Baseline vs LLM Comparison</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                <th className="px-4 py-3 text-left font-semibold">Baseline</th>
                <th className="px-4 py-3 text-left font-semibold">LLM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Consistency</td>
                <td className="px-4 py-3">Deterministic (same input = same output)</td>
                <td className="px-4 py-3">Variable (non-deterministic)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Specificity</td>
                <td className="px-4 py-3">High (pattern-matched to 11 rules)</td>
                <td className="px-4 py-3">Medium (depends on RAG context quality)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">RAG Evidence</td>
                <td className="px-4 py-3">None</td>
                <td className="px-4 py-3">Provided (top-4 runbook chunks)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Confidence</td>
                <td className="px-4 py-3">Fixed (0.52-0.70 per rule)</td>
                <td className="px-4 py-3">Adaptive (model-generated)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Failure mode</td>
                <td className="px-4 py-3">Cannot handle novel incidents</td>
                <td className="px-4 py-3">May hallucinate on weak RAG context</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Decision Quality Metrics</h3>

        <p>
          These metrics are computed from the 50-scenario evaluation pipeline and surfaced on the Observability dashboard.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Definition</th>
                <th className="px-4 py-3 text-left font-semibold">Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Precision</td>
                <td className="px-4 py-3">Correct identifications / total attempted</td>
                <td className="px-4 py-3">Similarity &gt;= 0.75 = correct</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Recall</td>
                <td className="px-4 py-3">Correct identifications / total scenarios</td>
                <td className="px-4 py-3">Same threshold</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Wrong-but-confident rate</td>
                <td className="px-4 py-3">High confidence (&gt;0.7) + low accuracy (&lt;0.5)</td>
                <td className="px-4 py-3">&lt;5% green, &lt;15% amber, &gt;15% red</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Confidence calibration</td>
                <td className="px-4 py-3">Avg confidence for correct vs incorrect predictions</td>
                <td className="px-4 py-3">Gap &gt; 0.1 = well-calibrated</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Time to Actionable Context</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Method</th>
                <th className="px-4 py-3 text-left font-semibold">Time</th>
                <th className="px-4 py-3 text-left font-semibold">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Manual triage (industry benchmark)</td>
                <td className="px-4 py-3">15-30 minutes median</td>
                <td className="px-4 py-3">Telecom NOC benchmarks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Baseline RCA</td>
                <td className="px-4 py-3">Milliseconds</td>
                <td className="px-4 py-3">Measured (duration_ms on artifact)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM RCA</td>
                <td className="px-4 py-3">Seconds (varies by provider)</td>
                <td className="px-4 py-3">Measured (duration_ms on artifact)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Honest Assessment</h2>

        <div className="not-prose my-6 rounded-lg border border-border p-6">
          <div className="mb-4">
            <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">What This Proves</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
              <li>End-to-end architecture works: alerts to incidents to RCA to review</li>
              <li>Dual-track RCA (baseline + LLM) is functional and auditable</li>
              <li>Semantic evaluation automated across 50 scenarios, 11 incident types</li>
              <li>Human-in-the-loop review with audit trail is operational</li>
              <li>Decision quality metrics (precision, recall, wrong-but-confident) are computed</li>
              <li>Time-to-context is measured and compared against manual benchmarks</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">What This Does NOT Prove</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
              <li>Performance under real production traffic (synthetic data only)</li>
              <li>Detection accuracy on real-world incidents (vs synthetic ground truth)</li>
              <li>ML model performance (not yet implemented -- LLM + rules only)</li>
              <li>Operational readiness (no real incidents, no real operator feedback)</li>
              <li>Scale beyond single-instance SQLite</li>
            </ul>
          </div>
        </div>

        <h3>Remaining Improvements</h3>

        <ul>
          <li>Expand RAG corpus with scenario-specific runbooks.</li>
          <li>Add structured slots in the prompt (device, interface, symptom).</li>
          <li>Implement feedback loop: rejected hypotheses improve future prompts.</li>
          <li>Add automated hallucination detection cross-referencing hypothesis against alert evidence.</li>
        </ul>

        <hr />

        <h2>Personas</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Persona</th>
                <th className="px-4 py-3 text-left font-semibold">Responsibilities</th>
                <th className="px-4 py-3 text-left font-semibold">Pain Points</th>
                <th className="px-4 py-3 text-left font-semibold">TelcoOps Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Incident Commander</td>
                <td className="px-4 py-3">Coordinate response, communicate status.</td>
                <td className="px-4 py-3">Conflicting RCA narratives, late updates.</td>
                <td className="px-4 py-3">Single RCA narrative with confidence and evidence.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">NOC Analyst</td>
                <td className="px-4 py-3">Triage alerts, accept/reject RCA.</td>
                <td className="px-4 py-3">Alert flood, unclear correlation.</td>
                <td className="px-4 py-3">Incident grouping, hypothesis review, audit trail.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Network Engineer</td>
                <td className="px-4 py-3">Resolve technical root cause.</td>
                <td className="px-4 py-3">Scattered evidence, manual runbook search.</td>
                <td className="px-4 py-3">RAG-backed evidence and structured RCA output.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Executive Sponsor</td>
                <td className="px-4 py-3">Track reliability and customer impact.</td>
                <td className="px-4 py-3">Inconsistent postmortems, unclear ROI.</td>
                <td className="px-4 py-3">Standardized RCA artifacts, quality metrics, acceptance rates.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Executive Narrative</h2>

        <p>
          TelcoOps reframes RCA as a structured, auditable workflow rather than an ad-hoc exercise. The value for leadership is
          predictable incident handling, reduced variance in postmortems, measurable decision quality, and a clear roadmap
          for AI-assisted operations with human oversight at every critical decision point.
        </p>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/ai-ml-roadmap" className="text-primary hover:underline">AI/ML Roadmap</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
