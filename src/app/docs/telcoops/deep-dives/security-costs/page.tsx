import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Security and Cost Controls | TelcoOps",
  description: "Security posture, privacy considerations, and cost controls for TelcoOps.",
};

export default function TelcoOpsSecurityCostsPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Security and Cost Controls</h1>

        <p className="lead">
          TelcoOps is a demo platform, but the design anticipates production constraints around data privacy, AI governance, and cost
          management. This section outlines the expected controls for a full rollout.
        </p>

        <h2>Data Privacy</h2>

        <ul>
          <li><strong>No PII in MVP</strong>: Synthetic alert data contains no subscriber information.</li>
          <li><strong>Tenant boundaries</strong>: Tenant ID fields exist in the schema for multi-tenant expansion.</li>
          <li><strong>LLM safety</strong>: Prompts avoid direct remediation commands and focus on hypothesis generation.</li>
        </ul>

        <h2>LLM Governance</h2>

        <ul>
          <li><strong>Prompt audit trail</strong>: Every LLM request and response is stored in the RCA artifact.</li>
          <li><strong>Provider abstraction</strong>: Switch between hosted and self-hosted LLMs without code changes.</li>
          <li><strong>Baseline fallback</strong>: Avoids dependency on LLM availability for RCA output.</li>
        </ul>

        <h2>Cost Controls</h2>

        <ul>
          <li><strong>Alert sampling</strong>: Only a sample of alerts is included in LLM prompts.</li>
          <li><strong>RAG top-k</strong>: Retrieval limited to a small number of chunks.</li>
          <li><strong>Provider selection</strong>: Gemini for managed pricing; Tele-LLM for fixed cost self-hosting.</li>
        </ul>

        <h2>Recommended Production Enhancements</h2>

        <ul>
          <li>Encrypt RCA artifacts at rest.</li>
          <li>Add redaction for sensitive alert fields.</li>
          <li>Enforce API token gates for write and metrics endpoints.</li>
          <li>Introduce usage budgets and per-tenant quotas.</li>
        </ul>

        <h2>Access Control Stub</h2>

        <p>
          The API supports an optional <code>API_TOKEN</code> environment variable. When set, write and metrics endpoints require
          an <code>X-API-Key</code> or Bearer token header.
        </p>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/deep-dives/deployment" className="text-primary hover:underline">Deployment strategy</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
