"use client";

import { TeleOpsThinkingLayout } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsDesignDocumentPage() {
  return (
    <TeleOpsThinkingLayout
      title="Design Document"
      description="End-to-end design document for the TelcoOps RCA platform"
      currentSection="design-document"
    >
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-4">Design Document</h1>
        <p className="text-muted-foreground mb-6">
          This design document captures the complete system intent for TelcoOps, including goals, assumptions, architecture, data
          models, API contracts, and operational constraints.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Problem Statement</h2>
        <p className="text-muted-foreground mb-4">
          Telecom NOCs struggle to transform alert floods into clear RCA narratives. Existing tooling surfaces alerts but does not
          provide a unified, evidence-based RCA output, slowing response and increasing inconsistency.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Goals</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>Provide a repeatable incident workflow from alert ingestion to RCA narrative.</li>
          <li>Enable LLM RCA without sacrificing auditability or baseline reliability.</li>
          <li>Keep local demo setup friction low.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Non-Goals</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>Production-grade telemetry ingestion and alert normalization.</li>
          <li>Automated remediation or ticketing integrations.</li>
          <li>Multi-tenant RBAC and enterprise security layers.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Architecture Summary</h2>
        <p className="text-muted-foreground mb-4">
          TelcoOps uses a FastAPI control plane, a SQLite data store, and a Streamlit UI. RCA is executed in two modes: a deterministic
          baseline and a configurable LLM path augmented by RAG context.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Data Model</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li><strong className="text-foreground">Alert</strong>: Raw alert payloads with tags and metadata.</li>
          <li><strong className="text-foreground">Incident</strong>: Correlated alerts with summary and severity.</li>
          <li><strong className="text-foreground">RCA Artifact</strong>: Hypotheses, confidence scores, evidence, review status, and timing.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">RCA Workflow</h2>
        <ol className="text-muted-foreground space-y-2 mb-4 list-decimal pl-5">
          <li>Generate synthetic alerts for the scenario.</li>
          <li>Correlate alerts into a single incident based on tag and time window.</li>
          <li>Run baseline RCA to establish deterministic hypotheses.</li>
          <li>Run LLM RCA with RAG context and store outputs.</li>
          <li>Human reviewer accepts or rejects the hypothesis (audit trail logged).</li>
        </ol>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">RAG Design</h2>
        <p className="text-muted-foreground mb-4">
          RAG uses LlamaIndex with sentence-transformers/all-MiniLM-L6-v2 embeddings. Documents are loaded from a runbook corpus
          (12 MSO-oriented runbooks) and indexed locally. The RAG context (top-4 results) is injected into the LLM prompt as
          supporting evidence.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">API Contracts</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li><code className="bg-muted px-1 rounded">/generate</code>: Scenario generation and incident correlation.</li>
          <li><code className="bg-muted px-1 rounded">/rca/{"{incident_id}"}/baseline</code>: Baseline RCA with timing.</li>
          <li><code className="bg-muted px-1 rounded">/rca/{"{incident_id}"}/llm</code>: LLM RCA with timing.</li>
          <li><code className="bg-muted px-1 rounded">/rca/{"{incident_id}"}/latest</code>: Latest RCA artifact retrieval.</li>
          <li><code className="bg-muted px-1 rounded">/rca/{"{artifact_id}"}/review</code>: Accept/reject RCA hypothesis.</li>
          <li><code className="bg-muted px-1 rounded">/audit/rca</code>: Review audit log.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Security and Privacy</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>LLM requests and responses are stored in the RCA artifact for auditability.</li>
          <li>No PII is used in the MVP. Production rollout would require data masking and tenant isolation.</li>
          <li>Three-tier token system: api_token, admin_token, metrics_token.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Scaling Plan</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>Replace SQLite with Postgres for concurrent writes.</li>
          <li>Introduce message queues for alert ingestion and RCA job processing.</li>
          <li>Add caching and RAG persistence for larger runbook corpora.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Open Questions</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>How should RCA confidence be calibrated against real incident outcomes?</li>
          <li>What alert taxonomies are most reliable for correlation at scale?</li>
          <li>Which runbook sources provide the highest signal for RAG?</li>
        </ul>
      </div>
    </TeleOpsThinkingLayout>
  );
}
