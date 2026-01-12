import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Getting Started | Email Assistant",
  description: "Quick start guide for setting up and running the Email Assistant.",
};

export default function GettingStartedPage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Getting Started</h1>

        <p className="lead">
          This guide will help you set up the Email Assistant on your local machine, including Gmail API configuration and Gemini AI integration.
        </p>

        <hr />

        <h2>Prerequisites</h2>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-border bg-gradient-to-br from-blue-500/10 to-transparent p-4">
            <div className="text-2xl mb-2">&#128013;</div>
            <div className="font-semibold">Python 3.11+</div>
            <div className="text-xs text-muted-foreground">Application runtime</div>
          </div>
          <div className="rounded-lg border border-border bg-gradient-to-br from-red-500/10 to-transparent p-4">
            <div className="text-2xl mb-2">&#9993;</div>
            <div className="font-semibold">Gmail Account</div>
            <div className="text-xs text-muted-foreground">Personal or Workspace</div>
          </div>
          <div className="rounded-lg border border-border bg-gradient-to-br from-yellow-500/10 to-transparent p-4">
            <div className="text-2xl mb-2">&#9729;</div>
            <div className="font-semibold">Google Cloud</div>
            <div className="text-xs text-muted-foreground">Gmail API access</div>
          </div>
          <div className="rounded-lg border border-border bg-gradient-to-br from-purple-500/10 to-transparent p-4">
            <div className="text-2xl mb-2">&#10024;</div>
            <div className="font-semibold">Gemini API Key</div>
            <div className="text-xs text-muted-foreground">AI categorization</div>
          </div>
        </div>

        <hr />

        <h2>Installation</h2>

        <div className="not-prose my-6 space-y-6">
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                <span className="font-semibold">Clone Repository</span>
              </div>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
{`git clone https://github.com/udaytamma/AiEmailAssistant.git
cd AiEmailAssistant`}
            </pre>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                <span className="font-semibold">Create Virtual Environment</span>
              </div>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
{`python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\\Scripts\\activate`}
            </pre>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
                <span className="font-semibold">Install Dependencies</span>
              </div>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
{`# Core dependencies
pip install -r requirements.txt

# For development and testing
pip install -r requirements-dev.txt`}
            </pre>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">4</span>
                <span className="font-semibold">Configure Gmail API</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <div className="text-sm font-semibold mb-2">Create Google Cloud Project</div>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>Go to <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Cloud Console</a></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>Create a new project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span>Enable <strong className="text-foreground">Gmail API</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <span>Enable <strong className="text-foreground">Google Calendar API</strong> (optional)</span>
                  </li>
                </ol>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2">Create OAuth Credentials</div>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>Go to <strong className="text-foreground">APIs &amp; Services</strong> &gt; <strong className="text-foreground">Credentials</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>Click <strong className="text-foreground">Create Credentials</strong> &gt; <strong className="text-foreground">OAuth client ID</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span>Select <strong className="text-foreground">Desktop app</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <span>Download <code className="rounded bg-muted px-1.5 py-0.5">credentials.json</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">5.</span>
                    <span>Place in project root directory</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">5</span>
                <span className="font-semibold">Set Gemini API Key</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-3">
                Get your key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google AI Studio</a>.
              </p>
              <pre className="rounded bg-muted p-3 text-sm overflow-x-auto">
{`export GOOGLE_API_KEY='your_api_key_here'

# Add to shell profile for persistence
echo 'export GOOGLE_API_KEY="your_api_key_here"' >> ~/.bashrc
source ~/.bashrc`}
              </pre>
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">6</span>
                <span className="font-semibold">Create Directories</span>
              </div>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
{`mkdir -p data/cache data/digest data/metrics data/test_results logs config`}
            </pre>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">7</span>
                <span className="font-semibold">Configure Application</span>
              </div>
            </div>
            <div className="p-4">
              <pre className="rounded bg-muted p-3 text-sm overflow-x-auto mb-3">
{`cp config/config.example.json config/config.json`}
              </pre>
              <p className="text-sm text-muted-foreground mb-2">Edit <code className="rounded bg-muted px-1.5 py-0.5">config/config.json</code>:</p>
              <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`{
  "api_settings": {
    "gemini_model": "gemini-2.5-flash-lite",
    "requests_per_minute": 30,
    "max_retries": 3,
    "timeout_seconds": 30
  },
  "gmail_settings": {
    "max_emails_to_fetch": 10,
    "search_query": "is:unread newer_than:1d"
  },
  "cache_settings": {
    "enabled": true,
    "max_cached_emails": 30,
    "cache_expiry_hours": 24
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        <hr />

        <h2>Running the Application</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-gradient-to-br from-green-500/10 to-transparent p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">&#9000;</span>
              <span className="font-semibold">CLI Mode</span>
            </div>
            <pre className="rounded bg-muted p-3 text-sm overflow-x-auto mb-2">
{`python src/main.py`}
            </pre>
            <p className="text-sm text-muted-foreground">
              Processes emails and generates digest via command line
            </p>
          </div>
          <div className="rounded-lg border border-border bg-gradient-to-br from-blue-500/10 to-transparent p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">&#127760;</span>
              <span className="font-semibold">Web Interface</span>
            </div>
            <pre className="rounded bg-muted p-3 text-sm overflow-x-auto mb-2">
{`python src/web/server.py`}
            </pre>
            <p className="text-sm text-muted-foreground">
              Opens at <code className="rounded bg-muted px-1.5 py-0.5">http://localhost:8001</code>
            </p>
          </div>
        </div>

        <h3>First Run Authentication</h3>

        <div className="not-prose my-4 rounded-lg border border-border bg-gradient-to-r from-indigo-500/5 to-transparent p-4">
          <p className="text-sm text-muted-foreground mb-3">On first run, you will be prompted to authenticate:</p>
          <ol className="space-y-2 text-sm">
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Browser opens automatically</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Sign in with your Google account</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>Grant permissions for Gmail access</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">4</span>
              <span>Token saved to <code className="rounded bg-muted px-1.5 py-0.5">token.json</code></span>
            </li>
          </ol>
        </div>

        <hr />

        <h2>Project Structure</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`emailAssistant/
├── src/
│   ├── main.py              # CLI entry point
│   ├── utils/               # Utility modules
│   │   ├── email_utils.py   # Gmail API operations
│   │   ├── gemini_utils.py  # Gemini AI operations
│   │   ├── display_utils.py # Digest generation
│   │   ├── logger_utils.py  # Logging configuration
│   │   └── metrics_utils.py # Metrics tracking (SQLite)
│   ├── core/                # Core modules
│   │   ├── config_manager.py
│   │   └── cache_manager.py
│   └── web/                 # Web interface
│       ├── server.py        # Flask server
│       ├── templates/       # HTML templates
│       └── static/          # CSS and JavaScript
├── config/
│   └── config.json          # Configuration
├── data/
│   ├── cache/               # Email cache
│   ├── digest/              # Digest data
│   └── metrics/             # SQLite database
├── logs/
│   └── email_assistant.log
├── tests/                   # Test suite
└── requirements.txt`}
        </pre>

        <hr />

        <h2>Troubleshooting</h2>

        <div className="not-prose my-6 space-y-3">
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">&quot;No digest data available&quot;</div>
            <p className="mb-2 text-sm text-muted-foreground">Run the main script first to generate digest data:</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`python src/main.py`}
            </pre>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">&quot;Lock file stuck&quot;</div>
            <p className="mb-2 text-sm text-muted-foreground">If the Refreshing button will not reset:</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`rm script.lock`}
            </pre>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">&quot;credentials.json not found&quot;</div>
            <p className="text-sm text-muted-foreground">
              Download from Google Cloud Console and place in project root directory.
            </p>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">&quot;GOOGLE_API_KEY not set&quot;</div>
            <p className="mb-2 text-sm text-muted-foreground">Export the environment variable:</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`export GOOGLE_API_KEY='your_key_here'`}
            </pre>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Port Conflict</div>
            <p className="mb-2 text-sm text-muted-foreground">Kill the process using port 8001:</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`lsof -i :8001
kill -9 <PID>`}
            </pre>
          </div>
        </div>

        <hr />

        <h2>Security Notes</h2>

        <div className="not-prose my-6 rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">&#128274;</span>
            <span className="font-semibold text-red-600 dark:text-red-400">Never Commit These Files</span>
          </div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="text-red-500">&#10007;</span>
              <code className="rounded bg-muted px-1.5 py-0.5">credentials.json</code> - OAuth credentials
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">&#10007;</span>
              <code className="rounded bg-muted px-1.5 py-0.5">token.json</code> - Access token
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">&#10007;</span>
              <code className="rounded bg-muted px-1.5 py-0.5">config/config.json</code> - May contain sensitive data
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">&#10007;</span>
              <code className="rounded bg-muted px-1.5 py-0.5">data/</code> - Contains personal email data
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">&#10007;</span>
              <code className="rounded bg-muted px-1.5 py-0.5">.env</code> - Environment variables
            </li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            These are protected by <code className="rounded bg-muted px-1.5 py-0.5">.gitignore</code>.
          </p>
        </div>

        <hr />

        <h2>Next Steps</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/email-assistant/ai-categorization"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">AI Categorization →</div>
            <div className="text-sm text-muted-foreground">How email classification works</div>
          </Link>
          <Link
            href="/docs/email-assistant/daily-digest"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Daily Digest →</div>
            <div className="text-sm text-muted-foreground">Email summaries and highlights</div>
          </Link>
          <Link
            href="/docs/email-assistant/metrics-dashboard"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Metrics Dashboard →</div>
            <div className="text-sm text-muted-foreground">Observability and tracking</div>
          </Link>
          <Link
            href="/docs/email-assistant/testing"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Testing →</div>
            <div className="text-sm text-muted-foreground">Run the test suite</div>
          </Link>
        </div>
      </article>
    </EmailAssistantDocsLayout>
  );
}
