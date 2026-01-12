import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Testing and Validation | TelcoOps",
  description: "Testing strategy, evaluation scripts, and validation gates for TelcoOps.",
};

export default function TelcoOpsTestingValidationPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Testing and Validation</h1>

        <p className="lead">
          TelcoOps uses a layered validation approach: unit tests for core logic, preflight checks for integration sanity, and an
          evaluation script to compare baseline vs LLM RCA quality over deterministic scenarios.
        </p>

        <h2>Unit Test Coverage</h2>

        <ul>
          <li><strong>Scenario generator</strong>: Ensures deterministic output with seeded randomness.</li>
          <li><strong>Correlation engine</strong>: Validates incident creation thresholds and windowing.</li>
          <li><strong>API endpoints</strong>: Confirms request handling, error codes, and response schemas.</li>
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

        <h2>Evaluation Script</h2>

        <p>
          The evaluation harness runs deterministic scenarios and compares baseline RCA against LLM output. This provides a repeatable
          sanity check for model regressions and prompt changes.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm">python scripts/evaluate.py --write-json storage/evaluation_results.json</pre>

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
            </tbody>
          </table>
        </div>

        <h2>Manual Validation Checklist</h2>

        <ol>
          <li>Generate a scenario with default settings.</li>
          <li>Confirm an incident appears in the queue.</li>
          <li>Run RCA and inspect baseline and LLM outputs.</li>
          <li>Verify LLM request/response artifacts load.</li>
        </ol>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/design-document" className="text-primary hover:underline">Design document</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
