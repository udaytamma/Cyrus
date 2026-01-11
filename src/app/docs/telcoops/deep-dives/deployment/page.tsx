import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Deployment | TelcoOps",
  description: "Deployment strategies for local demo and Cloud Run environments.",
};

export default function TelcoOpsDeploymentPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Deployment</h1>

        <p className="lead">
          TelcoOps is optimized for a local demo but is structured to deploy cleanly to Cloud Run for external demos. This section
          outlines the deployment options and configuration requirements.
        </p>

        <h2>Local Demo</h2>

        <ul>
          <li>Run FastAPI with Uvicorn on port 8000.</li>
          <li>Run Streamlit UI on port 8501.</li>
          <li>Use local SQLite database <code>teleops.db</code>.</li>
        </ul>

        <h2>Cloud Run (Recommended)</h2>

        <ol>
          <li>Containerize the API service with Uvicorn entrypoint.</li>
          <li>Deploy to Cloud Run with environment variables configured.</li>
          <li>Use Gemini for hosted inference.</li>
        </ol>

        <h3>Environment Variables</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`LLM_PROVIDER=gemini
LLM_MODEL=gemini-2.5-flash
GEMINI_API_KEY=your_key_here
DATABASE_URL=sqlite:///./teleops.db`}</pre>

        <h2>Hosting the UI</h2>

        <p>
          Streamlit can be deployed separately or run locally while pointing to the Cloud Run API endpoint. For a production demo,
          consider containerizing the UI and exposing it behind a lightweight auth layer.
        </p>

        <h2>Scaling Considerations</h2>

        <ul>
          <li>Move from SQLite to Postgres for concurrency.</li>
          <li>Use a managed vector store for larger RAG corpora.</li>
          <li>Add queue-based RCA processing for high throughput.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops" className="text-primary hover:underline">Back to overview</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
