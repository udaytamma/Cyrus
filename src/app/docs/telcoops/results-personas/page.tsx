import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Results and Personas | TelcoOps",
  description: "Operational impact narrative and persona-specific value for TelcoOps.",
};

export default function TelcoOpsResultsPersonasPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Results and Personas</h1>

        <p className="lead">
          TelcoOps is positioned as an operational accelerator. The goal is not to replace human judgment but to make RCA faster,
          more consistent, and easier to audit. This section documents expected outcomes and the user personas it enables.
        </p>

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
                <td className="px-4 py-3">Triage alerts and assign ownership.</td>
                <td className="px-4 py-3">Alert flood, unclear correlation.</td>
                <td className="px-4 py-3">Incident grouping and hypothesis hints.</td>
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
                <td className="px-4 py-3">Standardized RCA artifacts and metrics.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Operational Outcomes</h2>

        <ul>
          <li><strong>Faster RCA formation</strong>: Hypotheses generated immediately after correlation.</li>
          <li><strong>Consistent reporting</strong>: RCA artifacts stored with timestamp, model, and evidence.</li>
          <li><strong>Audit-ready workflows</strong>: Baseline and LLM outputs available side by side.</li>
        </ul>

        <h2>Metrics to Track</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Definition</th>
                <th className="px-4 py-3 text-left font-semibold">Target Direction</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Time to first RCA</td>
                <td className="px-4 py-3">Minutes from incident correlation to RCA hypothesis.</td>
                <td className="px-4 py-3">Decrease</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RCA confidence alignment</td>
                <td className="px-4 py-3">Baseline vs LLM hypothesis overlap.</td>
                <td className="px-4 py-3">Increase</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Evidence completeness</td>
                <td className="px-4 py-3">Incidents with structured evidence attached.</td>
                <td className="px-4 py-3">Increase</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Executive Narrative</h2>

        <p>
          TelcoOps reframes RCA as a structured, auditable workflow rather than an ad-hoc exercise. The value for leadership is
          predictable incident handling, reduced variance in postmortems, and a clear roadmap for AI-assisted operations.
        </p>

        <h2>Demo Scenarios</h2>

        <ol>
          <li><strong>Network degradation incident</strong>: Show how alert noise is correlated into a single incident with RCA output.</li>
          <li><strong>LLM vs baseline comparison</strong>: Highlight how RAG context improves evidence richness.</li>
          <li><strong>Audit trail review</strong>: Inspect stored prompt and response artifacts for accountability.</li>
        </ol>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/getting-started" className="text-primary hover:underline">Getting started</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
