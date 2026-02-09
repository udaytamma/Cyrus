"use client";

import { TeleOpsThinkingLayout } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsObservabilitySlosPage() {
  return (
    <TeleOpsThinkingLayout
      title="Observability and SLOs"
      description="Operational metrics, logging, and reliability targets for TelcoOps"
      currentSection="observability-slos"
    >
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-4">Observability and SLOs</h1>
        <p className="text-muted-foreground mb-6">
          TelcoOps is a demo platform, but it is structured to support production-grade observability. This section defines the
          minimum metrics, logs, and SLOs required for a real rollout.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Key Metrics</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Metric</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Definition</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">RCA latency (duration_ms)</td><td className="px-4 py-3">Time from RCA request to response, measured via perf_counter and stored on each artifact.</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">LLM parse rate</td><td className="px-4 py-3">Percentage of LLM responses that parse as valid JSON.</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">Incident throughput</td><td className="px-4 py-3">Incidents created per scenario run.</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">Decision quality</td><td className="px-4 py-3">Precision, recall, wrong-but-confident rate from evaluation pipeline.</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">Review acceptance rate</td><td className="px-4 py-3">Percentage of RCA hypotheses accepted vs rejected by human reviewers.</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">Time to context</td><td className="px-4 py-3">Median time to actionable RCA hypothesis (baseline and LLM), compared to manual benchmark.</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">Error rate</td><td className="px-4 py-3">HTTP 5xx responses across RCA endpoints.</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">Test coverage</td><td className="px-4 py-3">Coverage percentage reported by the test runner (17 test files).</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Log Events</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li><strong className="text-foreground">Scenario generation</strong>: seed, alert counts, noise rate.</li>
          <li><strong className="text-foreground">Correlation</strong>: incident count, filtered alert batches.</li>
          <li><strong className="text-foreground">LLM RCA</strong>: model name, response parse outcome, latency (duration_ms).</li>
          <li><strong className="text-foreground">Review events</strong>: decision (accept/reject), reviewer, artifact_id (audit_log.jsonl).</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Proposed SLOs</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li><strong className="text-foreground">RCA availability</strong>: 99.5% for baseline RCA endpoint.</li>
          <li><strong className="text-foreground">LLM RCA success</strong>: 98% JSON parse success rate.</li>
          <li><strong className="text-foreground">Latency</strong>: P95 under 10 seconds for LLM RCA.</li>
          <li><strong className="text-foreground">Wrong-but-confident rate</strong>: Under 5% (high confidence + low accuracy).</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Alerting Triggers</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>LLM parse failures spike above 2%.</li>
          <li>RCA endpoint error rates exceed 1%.</li>
          <li>RAG index fails to load on startup.</li>
          <li>Wrong-but-confident rate exceeds 15% (review needed).</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Observability Dashboard</h2>
        <p className="text-muted-foreground mb-4">
          The Streamlit Observability page reads from <code className="bg-muted px-1 rounded">/metrics/overview</code>, which aggregates
          counts, KPIs, test results, evaluation quality metrics, human review status, and time-to-context data.
        </p>
      </div>
    </TeleOpsThinkingLayout>
  );
}
