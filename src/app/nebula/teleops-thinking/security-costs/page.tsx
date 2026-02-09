"use client";

import { TeleOpsThinkingLayout } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsSecurityCostsPage() {
  return (
    <TeleOpsThinkingLayout
      title="Security and Cost Controls"
      description="Security posture, privacy considerations, and cost controls for TelcoOps"
      currentSection="security-costs"
    >
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-4">Security and Cost Controls</h1>
        <p className="text-muted-foreground mb-6">
          TelcoOps is a demo platform, but the design anticipates production constraints around data privacy, AI governance, and cost
          management. This section outlines the expected controls for a full rollout.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Data Privacy</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li><strong className="text-foreground">No PII in MVP</strong>: Synthetic alert data contains no subscriber information.</li>
          <li><strong className="text-foreground">Tenant boundaries</strong>: Tenant ID fields exist in the schema for multi-tenant expansion.</li>
          <li><strong className="text-foreground">LLM safety</strong>: Prompts avoid direct remediation commands and focus on hypothesis generation.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">LLM Governance</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li><strong className="text-foreground">Prompt audit trail</strong>: Every LLM request and response is stored in the RCA artifact.</li>
          <li><strong className="text-foreground">Review audit log</strong>: All accept/reject decisions logged to storage/audit_log.jsonl.</li>
          <li><strong className="text-foreground">Provider abstraction</strong>: Switch between hosted and self-hosted LLMs without code changes.</li>
          <li><strong className="text-foreground">Baseline fallback</strong>: Avoids dependency on LLM availability for RCA output.</li>
          <li><strong className="text-foreground">Human review gate</strong>: All RCA artifacts default to pending_review status.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Cost Controls</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li><strong className="text-foreground">Alert sampling</strong>: Only up to 20 alerts included in LLM prompts.</li>
          <li><strong className="text-foreground">RAG top-k</strong>: Retrieval limited to 4 chunks per query.</li>
          <li><strong className="text-foreground">Provider selection</strong>: Gemini for managed pricing (120s timeout); Tele-LLM for fixed cost self-hosting (60s timeout).</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Access Control</h2>
        <p className="text-muted-foreground mb-4">Three-tier token system:</p>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li><strong className="text-foreground">API_TOKEN</strong>: Protects write endpoints (generate, RCA, review).</li>
          <li><strong className="text-foreground">ADMIN_TOKEN</strong>: Protects destructive endpoints (reset, webhook ingestion).</li>
          <li><strong className="text-foreground">METRICS_TOKEN</strong>: Protects metrics and audit endpoints.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Recommended Production Enhancements</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>Encrypt RCA artifacts at rest.</li>
          <li>Add redaction for sensitive alert fields.</li>
          <li>Enforce API token gates for all write and metrics endpoints.</li>
          <li>Introduce usage budgets and per-tenant quotas.</li>
        </ul>
      </div>
    </TeleOpsThinkingLayout>
  );
}
