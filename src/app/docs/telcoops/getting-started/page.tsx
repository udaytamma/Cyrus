import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Getting Started | TelcoOps",
  description: "Local and cloud setup guide for the TelcoOps demo platform.",
};

export default function TelcoOpsGettingStartedPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Getting Started</h1>

        <p className="lead">
          Run TelcoOps locally in under 10 minutes. This setup runs the FastAPI control plane and Streamlit ops console on your
          machine with an optional LLM provider configuration.
        </p>

        <h2>Prerequisites</h2>

        <ul>
          <li>Python 3.11 or 3.12</li>
          <li>Git</li>
          <li>Optional: Gemini API key for hosted LLM</li>
          <li>Optional: API token for write endpoints</li>
        </ul>

        <h2>Quick Start (Local)</h2>

        <ol>
          <li>
            <strong>Clone and install dependencies</strong>
            <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`git clone https://github.com/udaytamma/teleops.git
cd teleops
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt`}</pre>
          </li>
          <li>
            <strong>Initialize the database</strong>
            <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`python -m teleops.init_db`}</pre>
          </li>
          <li>
            <strong>Start the API server</strong>
            <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`uvicorn teleops.api.app:app --reload --port 8000`}</pre>
          </li>
          <li>
            <strong>Start the UI</strong>
            <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`streamlit run ui/streamlit_app/app.py --server.port 8501`}</pre>
          </li>
        </ol>

        <p>
          Open the UI at <code>http://127.0.0.1:8501</code> and the API at <code>http://127.0.0.1:8000</code>.
        </p>

        <h2>Environment Configuration</h2>

        <p>Copy the environment template and choose your LLM provider:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`cp .env.example .env

# LLM provider options
LLM_PROVIDER=gemini | local_telellm | hosted_telellm
LLM_MODEL=gemini-2.5-flash
GEMINI_API_KEY=your_key_here

# Tele-LLM (OpenAI-compatible)
LLM_BASE_URL=http://localhost:8001/v1
LLM_API_KEY=optional_key

# Optional API token for write/metrics endpoints
API_TOKEN=your_token_here`}</pre>

        <p>
          To point the Streamlit UI to a hosted API (Cloud Run), set <code>TELEOPS_API_URL</code> before starting the UI:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`export TELEOPS_API_URL=https://YOUR_CLOUD_RUN_URL`}</pre>

        <h2>Cloud Demo (GCP Cloud Run)</h2>

        <p>
          For a hosted demo, deploy the FastAPI service to Cloud Run and point the UI to the Cloud Run endpoint. Gemini is the
          recommended provider for Cloud Run because it runs over HTTP without local GPU requirements.
        </p>

        <ul>
          <li>Build a container with <code>uvicorn teleops.api.app:app</code>.</li>
          <li>Set <code>LLM_PROVIDER=gemini</code> and <code>GEMINI_API_KEY</code>.</li>
          <li>Expose the API URL in the UI configuration.</li>
        </ul>

        <h2>Verify the Setup</h2>

        <p>Generate a scenario and ensure incidents appear:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`curl -X POST http://127.0.0.1:8000/generate \
  -H "Content-Type: application/json" \
  -d '{"incident_type":"network_degradation","alert_rate_per_min":20,"duration_min":10,"noise_rate_per_min":5}'`}</pre>

        <p>
          You should see at least one correlated incident in the UI, ready for baseline and LLM RCA.
        </p>

        <h2>Run Tests and Evaluation</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`python scripts/run_tests.py
python scripts/evaluate.py --write-json storage/evaluation_results.json`}</pre>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/architecture" className="text-primary hover:underline">Architecture overview</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
