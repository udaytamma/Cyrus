import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Getting Started | AI Ingredient Scanner",
  description: "Quick start guide for setting up and running the AI Ingredient Scanner backend and mobile app.",
};

export default function GettingStartedPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Getting Started</h1>

        <p className="lead">
          This guide walks you through setting up and running the AI Ingredient Scanner on your local machine, including both the backend services and optional mobile app.
        </p>

        <hr />

        <h2>Prerequisites</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                <th className="px-4 py-3 text-left font-semibold">Version</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Python</td>
                <td className="px-4 py-3">3.11+</td>
                <td className="px-4 py-3 text-muted-foreground">Backend runtime</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Node.js</td>
                <td className="px-4 py-3">18+</td>
                <td className="px-4 py-3 text-muted-foreground">Mobile app (optional)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Google Cloud API Key</td>
                <td className="px-4 py-3">Gemini</td>
                <td className="px-4 py-3 text-muted-foreground">AI model access</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Qdrant Cloud</td>
                <td className="px-4 py-3">Free tier</td>
                <td className="px-4 py-3 text-muted-foreground">Vector database</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Backend Setup</h2>

        <h3>Step 1: Clone the Repository</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`git clone https://github.com/udaytamma/IngredientScanner.git
cd IngredientScanner`}
        </pre>

        <h3>Step 2: Create Virtual Environment</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`python3 -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate`}
        </pre>

        <h3>Step 3: Install Dependencies</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`pip install -r requirements.txt`}
        </pre>

        <h3>Step 4: Configure Environment Variables</h3>

        <p>
          Create a <code>.env</code> file in the project root with the following configuration:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Required
GOOGLE_API_KEY=your_gemini_api_key
QDRANT_URL=your_qdrant_cloud_url
QDRANT_API_KEY=your_qdrant_api_key

# Optional (for enhanced features)
REDIS_URL=your_redis_connection_string
LANGCHAIN_API_KEY=your_langsmith_api_key`}
        </pre>

        <div className="not-prose my-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
          <div className="mb-2 font-semibold text-primary">Getting API Keys</div>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Google Gemini:</strong>{" "}
              <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google AI Studio
              </a>
            </li>
            <li>
              <strong>Qdrant Cloud:</strong>{" "}
              <a href="https://cloud.qdrant.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Qdrant Cloud Console
              </a>{" "}
              (free tier available)
            </li>
            <li>
              <strong>LangSmith:</strong>{" "}
              <a href="https://smith.langchain.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                LangSmith Console
              </a>{" "}
              (optional, for observability)
            </li>
          </ul>
        </div>

        <h3>Step 5: Verify Connections</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`python test_connections.py`}
        </pre>

        <h3>Step 6: Run the Application</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Option A: Streamlit Web Interface</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`streamlit run app.py`}
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              Opens at <code>http://localhost:8501</code>
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Option B: REST API</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`uvicorn api:app --host 0.0.0.0 --port 8000`}
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              API available at <code>http://localhost:8000</code>
            </p>
          </div>
        </div>

        <hr />

        <h2>Mobile App Quick Start</h2>

        <p>
          For detailed mobile setup instructions, see the{" "}
          <Link href="/docs/ingredient-scanner/mobile-setup" className="text-primary hover:underline">
            Mobile App Setup Guide
          </Link>.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`cd mobile
npm install

# Update API URL in src/services/api.ts with your machine's IP
npx expo start

# Scan QR code with Expo Go app on your phone`}
        </pre>

        <hr />

        <h2>Your First Analysis</h2>

        <div className="not-prose my-6">
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Open the Streamlit interface at <code className="rounded bg-muted px-1.5 py-0.5">http://localhost:8501</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Enter a product name (optional but helpful for context)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>Paste an ingredient list from any food or cosmetic product</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">4</span>
              <span>Configure your profile: select allergies and skin type</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">5</span>
              <span>Click <strong>Analyze</strong> to start the multi-agent workflow</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">6</span>
              <span>Review your personalized safety report with recommendations</span>
            </li>
          </ol>
        </div>

        <hr />

        <h2>Project Structure</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`IngredientScanner/
├── app.py                  # Streamlit web interface
├── api.py                  # FastAPI REST endpoints
├── graph.py                # LangGraph workflow orchestration
├── agents/                 # AI agents
│   ├── supervisor.py       # Workflow routing
│   ├── research.py         # Ingredient research (Qdrant + Google)
│   ├── analysis.py         # Safety report generation
│   └── critic.py           # Quality validation (5-gate)
├── tools/                  # Utility tools
│   ├── ingredient_lookup.py
│   ├── grounded_search.py
│   ├── safety_scorer.py
│   └── allergen_matcher.py
├── prompts/                # LLM prompt templates
├── config/                 # Configuration files
├── mobile/                 # React Native Expo app
└── tests/                  # Test suite (191 tests)`}
        </pre>

        <hr />

        <h2>Troubleshooting</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">"Cannot connect to Qdrant"</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Verify your <code>QDRANT_URL</code> and <code>QDRANT_API_KEY</code> are correct</li>
              <li>Check your network connection and firewall settings</li>
              <li>Ensure the Qdrant cluster is running in the cloud console</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">"API key not valid"</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Ensure <code>GOOGLE_API_KEY</code> is set correctly in <code>.env</code></li>
              <li>Verify the key has Gemini API access enabled in Google AI Studio</li>
              <li>Check for any trailing whitespace in the key</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">"Module not found"</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Ensure your virtual environment is activated</li>
              <li>Run <code>pip install -r requirements.txt</code> again</li>
              <li>Check Python version is 3.11 or higher</li>
            </ul>
          </div>
        </div>

        <hr />

        <h2>Next Steps</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture Overview →</div>
            <div className="text-sm text-muted-foreground">Multi-agent workflow and tech stack</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/api-reference"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Reference →</div>
            <div className="text-sm text-muted-foreground">REST endpoints for integration</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/mobile-setup"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Mobile App Setup →</div>
            <div className="text-sm text-muted-foreground">React Native Expo configuration</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/agents"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Agent Details →</div>
            <div className="text-sm text-muted-foreground">Research, Analysis, and Critic agents</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
