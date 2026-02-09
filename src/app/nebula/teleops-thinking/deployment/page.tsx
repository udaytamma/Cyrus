"use client";

import { TeleOpsThinkingLayout } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsDeploymentPage() {
  return (
    <TeleOpsThinkingLayout
      title="Deployment"
      description="Deployment strategies for local demo and Cloud Run environments"
      currentSection="deployment"
    >
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-4">Deployment</h1>
        <p className="text-muted-foreground mb-6">
          TelcoOps is optimized for a local demo but is structured to deploy cleanly to Cloud Run for external demos. This section
          outlines the deployment options and configuration requirements.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Local Demo</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>Run FastAPI with Uvicorn on port 8000.</li>
          <li>Run Streamlit UI on port 8501.</li>
          <li>Use local SQLite database <code className="bg-muted px-1 rounded">teleops.db</code>.</li>
          <li>Audit log at <code className="bg-muted px-1 rounded">storage/audit_log.jsonl</code>.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Cloud Run (Recommended)</h2>
        <ol className="text-muted-foreground space-y-2 mb-4 list-decimal pl-5">
          <li>Containerize the API service with Uvicorn entrypoint.</li>
          <li>Deploy to Cloud Run with environment variables configured.</li>
          <li>Use Gemini as the LLM provider for hosted inference.</li>
        </ol>

        <h3 className="text-base font-semibold text-foreground mt-6 mb-2">Environment Variables</h3>
        <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto mb-4 text-muted-foreground">{`LLM_PROVIDER=gemini
GEMINI_API_KEY=your_key_here
DATABASE_URL=sqlite:///./teleops.db`}</pre>

        <p className="text-muted-foreground mb-4">
          Note: Cloud Run&apos;s filesystem is ephemeral. SQLite is fine for a short-lived demo, but any restart will wipe data.
          For a persistent demo, switch to a managed Postgres instance (Cloud SQL) and update <code className="bg-muted px-1 rounded">DATABASE_URL</code>.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Hosting the UI</h2>
        <p className="text-muted-foreground mb-4">
          Streamlit can be deployed separately or run locally while pointing to the Cloud Run API endpoint. For a production demo,
          consider containerizing the UI and exposing it behind a lightweight auth layer.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Scaling Considerations</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>Move from SQLite to Postgres for concurrency.</li>
          <li>Use a managed vector store for larger RAG corpora.</li>
          <li>Add queue-based RCA processing for high throughput.</li>
        </ul>
      </div>
    </TeleOpsThinkingLayout>
  );
}
