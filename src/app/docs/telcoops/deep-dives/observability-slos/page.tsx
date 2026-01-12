import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Observability and SLOs | TelcoOps",
  description: "Operational metrics, logging, and reliability targets for TelcoOps.",
};

export default function TelcoOpsObservabilitySlosPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Observability and SLOs</h1>

        <p className="lead">
          TelcoOps is a demo platform, but it is structured to support production-grade observability. This section defines the
          minimum metrics, logs, and SLOs required for a real rollout.
        </p>

        <h2>Key Metrics</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RCA latency</td>
                <td className="px-4 py-3">Time from RCA request to response (baseline vs LLM).</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM parse rate</td>
                <td className="px-4 py-3">Percentage of LLM responses that parse as JSON.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Incident throughput</td>
                <td className="px-4 py-3">Incidents created per scenario run.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Error rate</td>
                <td className="px-4 py-3">HTTP 5xx responses across RCA endpoints.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Test coverage</td>
                <td className="px-4 py-3">Coverage percentage reported by the test runner.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Evaluation score</td>
                <td className="px-4 py-3">Baseline vs LLM RCA score averages.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Log Events</h2>

        <ul>
          <li><strong>Scenario generation</strong>: seed, alert counts, noise rate.</li>
          <li><strong>Correlation</strong>: incident count, filtered alert batches.</li>
          <li><strong>LLM RCA</strong>: model name, response parse outcome, latency.</li>
        </ul>

        <h2>Proposed SLOs</h2>

        <ul>
          <li><strong>RCA availability</strong>: 99.5% for baseline RCA endpoint.</li>
          <li><strong>LLM RCA success</strong>: 98% JSON parse success rate.</li>
          <li><strong>Latency</strong>: P95 under 10 seconds for LLM RCA.</li>
        </ul>

        <h2>Alerting Triggers</h2>

        <ul>
          <li>LLM parse failures spike above 2%.</li>
          <li>RCA endpoint error rates exceed 1%.</li>
          <li>RAG index fails to load on startup.</li>
        </ul>

        <h2>Observability Dashboard</h2>

        <p>
          The Streamlit Observability page reads from <code>/metrics/overview</code>, which aggregates counts, KPIs, test results,
          and evaluation summaries from <code>storage/</code>.
        </p>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/deep-dives/security-costs" className="text-primary hover:underline">Security and cost controls</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
