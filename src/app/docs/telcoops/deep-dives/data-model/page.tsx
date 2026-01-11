import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Data Model | TelcoOps",
  description: "Detailed data model for alerts, incidents, and RCA artifacts in TelcoOps.",
};

export default function TelcoOpsDataModelPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Data Model</h1>

        <p className="lead">
          TelcoOps persists alerts, incidents, and RCA artifacts in a relational schema optimized for quick demo workflows. The models
          are intentionally compact but capture the core evidence required for RCA auditability.
        </p>

        <h2>Entity Overview</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Entity</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Key Fields</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Alert</td>
                <td className="px-4 py-3">Raw telemetry events used for correlation.</td>
                <td className="px-4 py-3">source_system, host, service, severity, tags</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Incident</td>
                <td className="px-4 py-3">Correlated alert group with summary metadata.</td>
                <td className="px-4 py-3">related_alert_ids, summary, severity, status</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RCA Artifact</td>
                <td className="px-4 py-3">Structured RCA output with evidence.</td>
                <td className="px-4 py-3">hypotheses, confidence_scores, evidence, llm_model</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Alert Schema</h2>

        <ul>
          <li><strong>id</strong>: UUID primary key.</li>
          <li><strong>timestamp</strong>: UTC timestamp for alert occurrence.</li>
          <li><strong>source_system</strong>: Source of the alert (SNMP, k8s, db, etc).</li>
          <li><strong>tags</strong>: JSON tags used by correlation rules.</li>
          <li><strong>raw_payload</strong>: Original alert payload for forensic review.</li>
        </ul>

        <h2>Incident Schema</h2>

        <ul>
          <li><strong>related_alert_ids</strong>: JSON list of alert IDs in the incident.</li>
          <li><strong>summary</strong>: Human-readable incident summary.</li>
          <li><strong>impact_scope</strong>: Domain impacted (network, edge, backbone).</li>
        </ul>

        <h2>RCA Artifact Schema</h2>

        <ul>
          <li><strong>hypotheses</strong>: Ordered list of root cause hypotheses.</li>
          <li><strong>confidence_scores</strong>: Map of hypothesis to confidence value.</li>
          <li><strong>evidence</strong>: JSON payload with LLM request and response.</li>
          <li><strong>llm_model</strong>: Provider and model name (baseline-rules, gemini-2.5-flash, tele-llm).</li>
        </ul>

        <h2>Example Incident Payload</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`{
  "id": "7e5f4f34-7bcb-4e9e-9b9b-3f9ef1f1f6c1",
  "start_time": "2026-01-05T18:00:00Z",
  "end_time": "2026-01-05T18:08:00Z",
  "severity": "critical",
  "status": "open",
  "summary": "Correlated incident for tag: network_degradation",
  "related_alert_ids": ["..."]
}`}</pre>

        <h2>Design Choices</h2>

        <ul>
          <li><strong>JSON for list fields</strong>: Keeps schema flexible without join tables for MVP.</li>
          <li><strong>Single RCA table</strong>: Baseline and LLM RCA stored in the same schema for easy comparison.</li>
          <li><strong>Tenant fields</strong>: Present but not enforced in MVP, reserved for multi-tenant expansion.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/deep-dives/correlation-rca" className="text-primary hover:underline">Correlation and RCA logic</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
