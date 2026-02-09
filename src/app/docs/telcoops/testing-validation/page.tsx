import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Testing and Performance | TelcoOps",
  description: "Testing strategy, semantic evaluation, decision quality metrics, and performance targets for TelcoOps.",
};

export default function TelcoOpsTestingValidationPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Testing and Performance</h1>

        <p className="lead">
          TelcoOps uses a layered validation approach: 17 test files for core logic, preflight checks for integration sanity,
          and a semantic evaluation pipeline that scores RCA quality across 50 scenarios with decision quality metrics.
        </p>

        <h2>Unit Test Coverage (17 Test Files)</h2>

        <ul>
          <li><strong>Scenario generator</strong>: Ensures deterministic output with seeded randomness across 11 incident types.</li>
          <li><strong>Correlation engine</strong>: Validates incident creation thresholds and windowing.</li>
          <li><strong>RCA engine</strong>: Baseline rules (11 patterns), LLM response parsing, duration tracking.</li>
          <li><strong>Review workflow</strong>: Accept/reject endpoints, audit trail logging.</li>
          <li><strong>API endpoints</strong>: Confirms request handling, error codes, response schemas, and token authentication.</li>
        </ul>

        <h2>Run the Tests</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm">python scripts/run_tests.py</pre>

        <p>
          The test runner emits coverage and JUnit artifacts to <code>storage/</code>, which are surfaced in the Observability
          dashboard.
        </p>

        <h2>Preflight Checks</h2>

        <p>
          Preflight validates RAG initialization, LLM configuration, API health, and UI readiness. It is the fastest way to detect
          misconfigurations before a demo.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm">python scripts/preflight.py</pre>

        <h2>Semantic Evaluation Pipeline</h2>

        <p>
          The evaluation harness runs 50 scenarios across 11 incident types with deterministic seeds. Each RCA hypothesis is scored
          against ground truth using <strong>semantic cosine similarity</strong> (sentence-transformers/all-MiniLM-L6-v2), replacing
          the earlier string-matching approach that penalized paraphrased but correct outputs.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm">python scripts/evaluate.py --write-json storage/evaluation_results.json</pre>

        <h3>Decision Quality Metrics</h3>

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
                <td className="px-4 py-3 font-medium">Wrong-but-confident</td>
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

        <h3>Validation Layers</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    subgraph L1["Layer 1: Unit Tests"]
        direction LR
        T1["17 Test Files"]
        T2["80%+ Coverage"]
        T3["100% Pass Rate"]
    end

    subgraph L2["Layer 2: Preflight"]
        direction LR
        P1["RAG Init"]
        P2["LLM Config"]
        P3["API Health"]
    end

    subgraph L3["Layer 3: Semantic Evaluation"]
        direction LR
        E1["50 Scenarios"]
        E2["Cosine Similarity"]
        E3["Quality Metrics"]
    end

    subgraph L4["Layer 4: Human Review"]
        direction LR
        H1["Accept/Reject"]
        H2["Audit Trail"]
        H3["Decision Quality"]
    end

    L1 --> L2 --> L3 --> L4

    style L1 fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#1c1917
    style L2 fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px,color:#1c1917
    style L3 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#1c1917
    style L4 fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#1c1917`}
          />
        </div>

        <h2>Coverage Targets</h2>

        <ul>
          <li><strong>Coverage target</strong>: 80%+ (current runs exceed target).</li>
          <li><strong>Pass rate target</strong>: 90%+ (current runs are 100%).</li>
        </ul>

        <h2>Validation Gates</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Gate</th>
                <th className="px-4 py-3 text-left font-semibold">Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RCA parse rate</td>
                <td className="px-4 py-3">LLM response must parse as JSON.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Baseline availability</td>
                <td className="px-4 py-3">Baseline RCA must succeed even if LLM fails.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Incident consistency</td>
                <td className="px-4 py-3">Latest-run correlation only, no stale incidents.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Wrong-but-confident rate</td>
                <td className="px-4 py-3">Under 5% for green status on observability dashboard.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Review audit trail</td>
                <td className="px-4 py-3">All accept/reject decisions logged to storage/audit_log.jsonl.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Manual Validation Checklist</h2>

        <ol>
          <li>Generate a scenario with default settings.</li>
          <li>Confirm an incident appears in the queue.</li>
          <li>Run RCA and inspect baseline and LLM outputs.</li>
          <li>Accept or reject an RCA hypothesis and verify audit log entry.</li>
          <li>Verify LLM request/response artifacts load.</li>
          <li>Open Observability and confirm decision quality metrics display.</li>
        </ol>

        <hr />

        <p className="text-sm text-muted-foreground">
          Back to: <Link href="/docs/telcoops" className="text-primary hover:underline">TelcoOps</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
