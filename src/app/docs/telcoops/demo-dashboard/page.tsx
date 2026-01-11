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
          <li><strong>Scenario Builder</strong>: Configure incident type, alert volume, noise rate, and seed.</li>
          <li><strong>Incident Queue</strong>: Compact list of correlated incidents from the latest run.</li>
          <li><strong>Incident Summary</strong>: Selected incident metadata and severity.</li>
          <li><strong>RCA Output</strong>: Baseline RCA and LLM RCA rendered side by side for comparison.</li>
        </ul>

        <h2>Recommended Demo Flow</h2>

        <ol>
          <li>Generate a scenario using the default network degradation config.</li>
          <li>Select the latest incident from the queue.</li>
          <li>Click <strong>Run RCA</strong> to execute baseline and LLM RCA in parallel.</li>
          <li>Compare hypotheses, evidence, and confidence meters across both outputs.</li>
          <li>Open the LLM response page to inspect request and response artifacts.</li>
        </ol>

        <h2>LLM Response Viewer</h2>

        <p>
          The dashboard includes a separate page to view the LLM request and response in a structured format. This enables
          auditability and makes it easier to validate prompt structure and evidence grounding.
        </p>

        <h2>Operational Guardrails in the UI</h2>

        <ul>
          <li><strong>Clear Incidents</strong>: Reset the queue between demo runs.</li>
          <li><strong>Baseline always visible</strong>: LLM output is never shown without a baseline reference.</li>
          <li><strong>Confidence meters</strong>: Each hypothesis surfaces a confidence level and explanation.</li>
        </ul>

        <h2>Common Demo Pitfalls</h2>

        <ul>
          <li>Ensure the API is running before launching the UI.</li>
          <li>If LLM RCA fails, verify the provider settings and API keys.</li>
          <li>Clear incidents between scenarios to avoid mixing alert batches.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/testing-validation" className="text-primary hover:underline">Testing and validation</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
