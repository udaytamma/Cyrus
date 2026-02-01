import { AurosDocsLayout } from "@/components/AurosDocsLayout";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "Getting Started | Auros",
  description: "Prerequisites, installation, and first run guide for Auros job search tracker",
};

export default function GettingStartedPage() {
  return (
    <AurosDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Getting Started</h1>

        <p className="lead">
          Set up Auros on your local machine in under 10 minutes. This guide covers prerequisites,
          installation, configuration, and running your first job scan.
        </p>

        <hr />

        <h2>Prerequisites</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                <th className="px-4 py-3 text-left font-semibold">Version</th>
                <th className="px-4 py-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Python</td>
                <td className="px-4 py-3">3.11+</td>
                <td className="px-4 py-3 text-muted-foreground">Required for async SQLAlchemy</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Node.js</td>
                <td className="px-4 py-3">18+</td>
                <td className="px-4 py-3 text-muted-foreground">For React dashboard (Vite)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Ollama</td>
                <td className="px-4 py-3">Latest</td>
                <td className="px-4 py-3 text-muted-foreground">Local LLM runtime</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Slack Workspace</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3 text-muted-foreground">With Incoming Webhook configured</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Step 1: Install Ollama</h2>

        <p>
          Ollama runs LLMs locally. Install it from{" "}
          <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer">
            ollama.ai
          </a>{" "}
          or via Homebrew:
        </p>

        <CopyableCodeBlock language="bash" code={`brew install ollama`} />

        <p>Start the Ollama service:</p>

        <CopyableCodeBlock language="bash" code={`ollama serve`} />

        <p>Pull the Qwen 2.5 Coder model (7B parameters, ~4GB):</p>

        <CopyableCodeBlock language="bash" code={`ollama pull qwen2.5-coder:7b`} />

        <p>Verify it works:</p>

        <CopyableCodeBlock
          language="bash"
          code={`curl http://localhost:11434/api/generate -d '{
  "model": "qwen2.5-coder:7b",
  "prompt": "Hello",
  "stream": false
}'`}
        />

        <h2>Step 2: Clone Repository</h2>

        <CopyableCodeBlock
          language="bash"
          code={`git clone https://github.com/udaytamma/Auros.git
cd Auros`}
        />

        <h2>Step 3: Set Up Python Backend</h2>

        <p>Create and activate a virtual environment:</p>

        <CopyableCodeBlock
          language="bash"
          code={`python3 -m venv .venv
source .venv/bin/activate`}
        />

        <p>Install dependencies:</p>

        <CopyableCodeBlock language="bash" code={`pip install -r requirements.txt`} />

        <p>Install Playwright browsers:</p>

        <CopyableCodeBlock language="bash" code={`playwright install chromium`} />

        <h2>Step 4: Configure Environment</h2>

        <p>Copy the example environment file:</p>

        <CopyableCodeBlock language="bash" code={`cp .env.example .env`} />

        <p>Edit <code>.env</code> with your settings:</p>

        <CopyableCodeBlock
          language="bash"
          title=".env"
          code={`# Ollama Configuration
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5-coder:7b

# Slack Webhook (get from Slack App settings)
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL

# Database
DATABASE_URL=sqlite+aiosqlite:///./data/auros.db

# Scheduler (CT timezone)
SCAN_SCHEDULE_HOURS=6,12,18
SCAN_TIMEZONE=America/Chicago

# Rate Limiting
SCRAPE_DELAY_MIN=5
SCRAPE_DELAY_MAX=10

# Thresholds
SLACK_MIN_SCORE=0.70
MIN_SALARY_CONFIDENCE=0.60`}
        />

        <h3>Get Slack Webhook URL</h3>

        <ol>
          <li>
            Go to{" "}
            <a href="https://api.slack.com/apps" target="_blank" rel="noopener noreferrer">
              api.slack.com/apps
            </a>
          </li>
          <li>Create a new app (or use existing)</li>
          <li>Enable Incoming Webhooks</li>
          <li>Add a webhook to your workspace, select a channel</li>
          <li>Copy the webhook URL to <code>.env</code></li>
        </ol>

        <h2>Step 5: Initialize Database</h2>

        <p>Create the data directory:</p>

        <CopyableCodeBlock
          language="bash"
          code={`mkdir -p data`}
        />

        <p>The database is automatically initialized when the server starts using Alembic migrations.</p>

        <h2>Step 6: Start the Backend</h2>

        <CopyableCodeBlock
          language="bash"
          code={`uvicorn api.main:app --reload --port 8000`}
        />

        <p>Verify the API is running:</p>

        <CopyableCodeBlock language="bash" code={`curl http://localhost:8008/health`} />

        <p>Expected response:</p>

        <pre className="overflow-x-auto rounded-lg bg-muted/50 p-4 text-sm">
          {`{
  "db": "ok",
  "ollama": "ok",
  "slack": "disabled"
}`}
        </pre>

        <h2>Step 7: Build React Dashboard</h2>

        <p>Build the frontend (single-server architecture - UI is served from FastAPI):</p>

        <CopyableCodeBlock
          language="bash"
          code={`cd ui
npm install
npm run build`}
        />

        <p>
          Open <a href="http://localhost:8008">http://localhost:8008</a> in your browser.
          The UI is served directly from the FastAPI server.
        </p>

        <h2>Step 8: Run Your First Scan</h2>

        <p>Trigger a manual scan via the API:</p>

        <CopyableCodeBlock
          language="bash"
          code={`curl -X POST http://localhost:8008/search/trigger`}
        />

        <p>Or click the Trigger Scan button in the dashboard header.</p>

        <p>Check scan status:</p>

        <CopyableCodeBlock language="bash" code={`curl http://localhost:8008/search/status`} />

        <p>
          The scan will process all 10 companies, extracting job postings. This takes 2-5 minutes
          depending on page complexity and rate limiting.
        </p>

        <h2>Verify Everything Works</h2>

        <div className="not-prose my-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                1
              </div>
              <div>
                <div className="font-medium">Health check passes</div>
                <div className="text-sm text-muted-foreground">
                  <code>curl localhost:8008/health</code> returns all components healthy
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                2
              </div>
              <div>
                <div className="font-medium">Dashboard loads</div>
                <div className="text-sm text-muted-foreground">
                  UI at localhost:8008 shows empty job table
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                3
              </div>
              <div>
                <div className="font-medium">Manual scan completes</div>
                <div className="text-sm text-muted-foreground">
                  Jobs appear in dashboard after triggering scan
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                4
              </div>
              <div>
                <div className="font-medium">Slack notification received</div>
                <div className="text-sm text-muted-foreground">
                  Jobs with score &gt;= 0.70 trigger Slack alerts
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Next Steps</h2>

        <ul>
          <li>
            <strong>Configure companies:</strong> Edit <code>api/data/companies.py</code> or use the
            Companies API to add/remove targets
          </li>
          <li>
            <strong>Adjust scoring weights:</strong> Modify <code>api/services/scorer.py</code> to
            tune relevance factors
          </li>
          <li>
            <strong>Enable scheduled scans:</strong> The scheduler runs automatically when the app
            starts
          </li>
          <li>
            <strong>Export data:</strong> Use <code>GET /jobs/export/csv</code> to download all jobs
          </li>
        </ul>

        <h2>Troubleshooting</h2>

        <h3>Ollama not responding</h3>
        <p>
          Ensure <code>ollama serve</code> is running and the model is pulled. Check{" "}
          <code>curl localhost:11434/api/tags</code> to list available models.
        </p>

        <h3>Playwright errors</h3>
        <p>
          Run <code>playwright install chromium</code> to ensure browsers are installed. Some
          corporate networks may block headless browsers.
        </p>

        <h3>Slack notifications not arriving</h3>
        <p>
          Verify the webhook URL is correct. Test with:{" "}
          <code>curl -X POST -d &apos;&#123;&quot;text&quot;:&quot;test&quot;&#125;&apos; YOUR_WEBHOOK_URL</code>
        </p>

        <h3>Database errors</h3>
        <p>
          Delete <code>data/auros.db</code> and re-run the init script to start fresh.
        </p>
      </article>
    </AurosDocsLayout>
  );
}
