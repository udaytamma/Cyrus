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
                <td className="px-4 py-3 text-muted-foreground">Application runtime</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Gmail Account</td>
                <td className="px-4 py-3">Personal or Workspace</td>
                <td className="px-4 py-3 text-muted-foreground">Email source</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Google Cloud Project</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3 text-muted-foreground">Gmail API access</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Gemini API Key</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3 text-muted-foreground">AI categorization</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Installation</h2>

        <h3>Step 1: Clone Repository</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`git clone https://github.com/udaytamma/emailAssistant.git
cd emailAssistant`}
        </pre>

        <h3>Step 2: Create Virtual Environment</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\\Scripts\\activate`}
        </pre>

        <h3>Step 3: Install Dependencies</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Core dependencies
pip install -r requirements.txt

# For development and testing
pip install -r requirements-dev.txt`}
        </pre>

        <h3>Step 4: Configure Gmail API</h3>

        <h4>Create Google Cloud Project</h4>

        <div className="not-prose my-6">
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Go to <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Cloud Console</a></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Create a new project</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>Enable <strong>Gmail API</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">4</span>
              <span>Enable <strong>Google Calendar API</strong> (optional)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">5</span>
              <span>Enable <strong>Google Tasks API</strong> (optional)</span>
            </li>
          </ol>
        </div>

        <h4>Create OAuth Credentials</h4>

        <div className="not-prose my-6">
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Go to <strong>APIs &amp; Services</strong> &gt; <strong>Credentials</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Click <strong>Create Credentials</strong> &gt; <strong>OAuth client ID</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>Select <strong>Desktop app</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">4</span>
              <span>Download <code className="rounded bg-muted px-1.5 py-0.5">credentials.json</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">5</span>
              <span>Place in project root directory</span>
            </li>
          </ol>
        </div>

        <h3>Step 5: Set Gemini API Key</h3>

        <p>
          Get your key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a>.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`export GOOGLE_API_KEY='your_api_key_here'

# Add to shell profile for persistence
echo 'export GOOGLE_API_KEY="your_api_key_here"' >> ~/.bashrc
source ~/.bashrc`}
        </pre>

        <h3>Step 6: Create Directories</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`mkdir -p data/cache data/digest data/metrics data/test_results logs config`}
        </pre>

        <h3>Step 7: Configure Application</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`cp config/config.example.json config/config.json`}
        </pre>

        <p>
          Edit <code>config/config.json</code>:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
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

        <hr />

        <h2>Running the Application</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">CLI Mode</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`python src/main.py`}
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              Processes emails and generates digest via command line
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Web Interface</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`python src/web/server.py`}
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              Opens at <code className="rounded bg-muted px-1.5 py-0.5">http://localhost:8001</code>
            </p>
          </div>
        </div>

        <h3>First Run Authentication</h3>

        <p>
          On first run, you will be prompted to authenticate:
        </p>

        <div className="not-prose my-6">
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Browser opens automatically</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Sign in with your Google account</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>Grant permissions for Gmail access</span>
            </li>
            <li className="flex items-start gap-3">
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

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">&quot;No digest data available&quot;</div>
            <p className="mb-2 text-sm text-muted-foreground">Run the main script first to generate digest data:</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`python src/main.py`}
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">&quot;Lock file stuck&quot;</div>
            <p className="mb-2 text-sm text-muted-foreground">If the Refreshing button will not reset:</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`rm script.lock`}
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">&quot;credentials.json not found&quot;</div>
            <p className="text-sm text-muted-foreground">
              Download from Google Cloud Console and place in project root directory.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">&quot;GOOGLE_API_KEY not set&quot;</div>
            <p className="mb-2 text-sm text-muted-foreground">Export the environment variable:</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`export GOOGLE_API_KEY='your_key_here'`}
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Port Conflict</div>
            <p className="mb-2 text-sm text-muted-foreground">Kill the process using port 8001:</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`lsof -i :8001
kill -9 <PID>`}
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Import Errors</div>
            <p className="mb-2 text-sm text-muted-foreground">Ensure virtual environment is activated:</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`cd /path/to/emailAssistant
source .venv/bin/activate
pip install -r requirements.txt`}
            </pre>
          </div>
        </div>

        <hr />

        <h2>Security Notes</h2>

        <div className="not-prose my-6 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
          <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Never Commit These Files</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><code className="rounded bg-muted px-1.5 py-0.5">credentials.json</code> - OAuth credentials</li>
            <li><code className="rounded bg-muted px-1.5 py-0.5">token.json</code> - Access token</li>
            <li><code className="rounded bg-muted px-1.5 py-0.5">config/config.json</code> - May contain sensitive data</li>
            <li><code className="rounded bg-muted px-1.5 py-0.5">data/</code> - Contains personal email data</li>
            <li><code className="rounded bg-muted px-1.5 py-0.5">.env</code> - Environment variables</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            These are protected by <code className="rounded bg-muted px-1.5 py-0.5">.gitignore</code>.
          </p>
        </div>

        <hr />

        <h2>Next Steps</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/email-assistant/ai-categorization"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">AI Categorization →</div>
            <div className="text-sm text-muted-foreground">How email classification works</div>
          </Link>
          <Link
            href="/docs/email-assistant/daily-digest"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Daily Digest →</div>
            <div className="text-sm text-muted-foreground">Email summaries and highlights</div>
          </Link>
          <Link
            href="/docs/email-assistant/metrics-dashboard"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Metrics Dashboard →</div>
            <div className="text-sm text-muted-foreground">Observability and tracking</div>
          </Link>
          <Link
            href="/docs/email-assistant/testing"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Testing →</div>
            <div className="text-sm text-muted-foreground">Run the test suite</div>
          </Link>
        </div>
      </article>
    </EmailAssistantDocsLayout>
  );
}
