import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Design Document | TelcoOps",
  description: "End-to-end design document for the TelcoOps RCA platform.",
};

export default function TelcoOpsDesignDocumentPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Design Document</h1>

        <p className="lead">
          This design document captures the complete system intent for TelcoOps, including goals, assumptions, architecture, data
          models, API contracts, and operational constraints.
        </p>

        <h2>Problem Statement</h2>

        <p>
          Telecom NOCs struggle to transform alert floods into clear RCA narratives. Existing tooling surfaces alerts but does not
          provide a unified, evidence-based RCA output, slowing response and increasing inconsistency.
        </p>

        <h2>Goals</h2>

        <ul>
          <li>Provide a repeatable incident workflow from alert ingestion to RCA narrative.</li>
          <li>Enable LLM RCA without sacrificing auditability or baseline reliability.</li>
          <li>Keep local demo setup friction low.</li>
        </ul>

        <h2>Non-Goals</h2>

        <ul>
          <li>Production-grade telemetry ingestion and alert normalization.</li>
          <li>Automated remediation or ticketing integrations.</li>
          <li>Multi-tenant RBAC and enterprise security layers.</li>
        </ul>

        <h2>Architecture Summary</h2>

        <p>
          TelcoOps uses a FastAPI control plane, a SQLite data store, and a Streamlit UI. RCA is executed in two modes: a deterministic
          baseline and a configurable LLM path augmented by RAG context.
        </p>

        <h2>Data Model</h2>

        <ul>
          <li><strong>Alert</strong>: Raw alert payloads with tags and metadata.</li>
          <li><strong>Incident</strong>: Correlated alerts with summary and severity.</li>
          <li><strong>RCA Artifact</strong>: Hypotheses, confidence scores, and evidence (including LLM request/response).</li>
        </ul>

        <h2>RCA Workflow</h2>

        <ol>
          <li>Generate synthetic alerts for the scenario.</li>
          <li>Correlate alerts into a single incident based on tag and time window.</li>
          <li>Run baseline RCA to establish deterministic hypotheses.</li>
          <li>Run LLM RCA with RAG context and store outputs.</li>
        </ol>

        <h2>RAG Design</h2>

        <p>
          RAG uses LlamaIndex with MiniLM embeddings. Documents are loaded from a runbook corpus and indexed locally. The RAG context is
          injected into the LLM prompt as supporting evidence.
        </p>

        <h2>API Contracts</h2>

        <ul>
          <li><code>/generate</code>: Scenario generation and incident correlation.</li>
          <li><code>/rca/{'{incident_id}'}/baseline</code>: Baseline RCA.</li>
          <li><code>/rca/{'{incident_id}'}/llm</code>: LLM RCA.</li>
          <li><code>/rca/{'{incident_id}'}/latest</code>: Latest RCA artifact retrieval.</li>
        </ul>

        <h2>Security and Privacy</h2>

        <ul>
          <li>LLM requests and responses are stored in the RCA artifact for auditability.</li>
          <li>No PII is used in the MVP. Production rollout would require data masking and tenant isolation.</li>
        </ul>

        <h2>Scaling Plan</h2>

        <ul>
          <li>Replace SQLite with Postgres for concurrent writes.</li>
          <li>Introduce message queues for alert ingestion and RCA job processing.</li>
          <li>Add caching and RAG persistence for larger runbook corpora.</li>
        </ul>

        <h2>Open Questions</h2>

        <ul>
          <li>How should RCA confidence be calibrated against real incident outcomes?</li>
          <li>What alert taxonomies are most reliable for correlation at scale?</li>
          <li>Which runbook sources provide the highest signal for RAG?</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/deep-dives/data-model" className="text-primary hover:underline">Deep dive: data model</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
