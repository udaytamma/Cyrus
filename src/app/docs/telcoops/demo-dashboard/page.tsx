import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Demo Dashboard | TelcoOps",
  description: "How to use the Streamlit demo dashboard for TelcoOps RCA workflows.",
};

export default function TelcoOpsDemoDashboardPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Demo Dashboard</h1>

        <p className="lead">
          The Streamlit dashboard is the primary demo surface for TelcoOps. It guides the user through scenario generation, incident
          selection, and RCA comparison with side-by-side baseline and LLM outputs.
        </p>

        <h2>Primary Panels</h2>

        <ul>
          <li><strong>Scenario Builder</strong>: Configure incident type (11 types), alert volume, noise rate, and seed.</li>
          <li><strong>Incident Queue</strong>: Compact list of correlated incidents from the latest run.</li>
          <li><strong>Incident Summary</strong>: Selected incident metadata and severity.</li>
          <li><strong>RCA Output</strong>: Baseline RCA and LLM RCA rendered side by side for comparison.</li>
          <li><strong>Hypothesis Review</strong>: Accept or reject RCA hypotheses with reviewer notes, logged to audit trail.</li>
          <li><strong>Observability</strong>: KPIs, decision quality metrics, time-to-context, review acceptance rates, and evaluation scores.</li>
        </ul>

        <h2>Recommended Demo Flow (3 Minutes)</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Time</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
                <th className="px-4 py-3 text-left font-semibold">Talking Point</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">0:00-0:30</td>
                <td className="px-4 py-3">Show Scenario Builder and Incident Queue</td>
                <td className="px-4 py-3">TelcoOps turns noisy alerts into incidents with RCA.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">0:30-1:00</td>
                <td className="px-4 py-3">Generate a DNS outage scenario with default rates</td>
                <td className="px-4 py-3">Point to incident queue populating with correlated incidents.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">1:00-1:30</td>
                <td className="px-4 py-3">Run RCA (baseline + LLM)</td>
                <td className="px-4 py-3">Call out hypotheses, confidence scores, and evidence grounding.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">1:30-2:00</td>
                <td className="px-4 py-3">Review hypothesis: accept or reject with notes</td>
                <td className="px-4 py-3">Human-in-the-loop: no RCA is accepted without operator decision.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">2:00-2:30</td>
                <td className="px-4 py-3">Open Observability dashboard</td>
                <td className="px-4 py-3">Show decision quality metrics, time-to-context, review KPIs.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">2:30-3:00</td>
                <td className="px-4 py-3">Wrap</td>
                <td className="px-4 py-3">11 incident types, semantic evaluation, full audit trail. Next: richer RAG and real integrations.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>LLM Response Viewer</h2>

        <p>
          The dashboard includes a separate page to view the LLM request and response in a structured format. This enables
          auditability and makes it easier to validate prompt structure and evidence grounding.
        </p>

        <h2>Hypothesis Review Flow</h2>

        <p>
          After RCA generation, each hypothesis enters pending_review status. The Incident Generator page provides accept/reject
          controls for each RCA artifact. Reviewers must provide their name and can add optional notes. Decisions are logged to
          <code>storage/audit_log.jsonl</code> and surfaced in Observability metrics.
        </p>

        <h2>Observability Dashboard Sections</h2>

        <ul>
          <li><strong>KPI summary</strong>: Incident count, RCA artifact count, alert volume.</li>
          <li><strong>Decision quality</strong>: Precision, recall, wrong-but-confident rate from evaluation pipeline.</li>
          <li><strong>Time-to-context</strong>: Measured duration_ms for baseline and LLM RCA vs manual benchmark.</li>
          <li><strong>Human review KPIs</strong>: Acceptance rate, rejection rate, pending count.</li>
          <li><strong>Test coverage</strong>: Pass rate and coverage across 17 test files.</li>
        </ul>

        <h2>Operational Guardrails in the UI</h2>

        <ul>
          <li><strong>Clear Incidents</strong>: Reset the queue between demo runs.</li>
          <li><strong>Baseline always visible</strong>: LLM output is never shown without a baseline reference.</li>
          <li><strong>Review required</strong>: RCA artifacts are flagged as pending_review until accepted or rejected.</li>
          <li><strong>Confidence meters</strong>: Each hypothesis surfaces a confidence level and explanation.</li>
        </ul>

        <h2>Common Demo Pitfalls</h2>

        <ul>
          <li>Ensure the API is running before launching the UI.</li>
          <li>If LLM RCA fails, verify the provider settings and API keys.</li>
          <li>Clear incidents between scenarios to avoid mixing alert batches.</li>
        </ul>

        <h2>Recording Guide</h2>

        <ul>
          <li>Record at 1920x1080, 30 fps, UI zoom 100%.</li>
          <li>Follow the 3-minute demo flow above.</li>
          <li>Capture key screenshots: Scenario Builder, RCA comparison, Hypothesis Review, Observability dashboard.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/testing-validation" className="text-primary hover:underline">Testing and Performance</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
