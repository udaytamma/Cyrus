import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Demo + Results | TelcoOps",
  description: "One-page demo story with KPIs, baseline vs LLM results, and improvement notes.",
};

export default function TelcoOpsDemoResultsPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Demo + Results</h1>

        <p className="lead">
          This page is a one-page narrative of the TeleOps demo, including KPIs, baseline vs LLM comparison, and improvement
          notes.
        </p>

        <h2>Story (60–90 seconds)</h2>

        <ol>
          <li>Generate a scenario from the Scenario Builder (e.g., DNS outage).</li>
          <li>Show correlated incidents and alert samples.</li>
          <li>Run baseline RCA vs LLM RCA side-by-side.</li>
          <li>Open Observability to show KPIs, coverage, and evaluation scores.</li>
        </ol>

        <h2>KPIs Snapshot (Latest Run)</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Test pass rate</td>
                <td className="px-4 py-3">100%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Coverage</td>
                <td className="px-4 py-3">87%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Baseline RCA avg (synthetic)</td>
                <td className="px-4 py-3">1.00</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">LLM RCA avg (synthetic)</td>
                <td className="px-4 py-3">0.44</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Manual label avg</td>
                <td className="px-4 py-3">0.44</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Before/After (Baseline vs LLM)</h2>

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
                <td className="px-4 py-3">Deterministic</td>
                <td className="px-4 py-3">Variable</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Specificity</td>
                <td className="px-4 py-3">High (pattern-matched)</td>
                <td className="px-4 py-3">Medium (needs more grounding)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">RAG Evidence</td>
                <td className="px-4 py-3">None</td>
                <td className="px-4 py-3">Provided in output</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Confidence</td>
                <td className="px-4 py-3">Fixed</td>
                <td className="px-4 py-3">Adaptive</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Why LLM Scores Lag (Short Analysis)</h2>

        <ul>
          <li>Prompt generality: LLM returns generic hypotheses instead of exact strings.</li>
          <li>RAG depth: the corpus is minimal and not scenario-specific.</li>
          <li>Similarity scoring: paraphrases are penalized in strict matching.</li>
          <li>Run count: limited runs reduce statistical stability.</li>
        </ul>

        <h2>Improvements Planned</h2>

        <ul>
          <li>Expand RAG corpus with scenario-specific runbooks.</li>
          <li>Add structured slots in the prompt (device, interface, symptom).</li>
          <li>Use semantic similarity scoring for evaluation.</li>
          <li>Increase evaluation runs to 20–50.</li>
        </ul>

        <h2>Screenshots (Drop-in)</h2>

        <ul>
          <li>TeleOps Console</li>
          <li>RCA Comparison</li>
          <li>Observability Dashboard</li>
        </ul>

        <h2>Demo Video/GIF</h2>

        <p>
          Use the assets in the demo video package:{" "}
          <Link href="/docs/telcoops/demo-video-assets" className="text-primary hover:underline">
            demo video assets
          </Link>
          .
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
