import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "AI Categorization | Email Assistant",
  description: "How Gemini AI categorizes your emails intelligently.",
};

export default function AiCategorizationPage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>AI Categorization</h1>

        <p className="lead">
          The Email Assistant uses Google Gemini AI to intelligently categorize incoming emails, helping you focus on what matters most.
        </p>

        <hr />

        <h2>How It Works</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart LR
    Email["Email"] --> Extract["Extract Metadata"]
    Extract --> Build["Build Prompt"]
    Build --> Gemini["Gemini AI"]
    Gemini --> Response["Response"]
    Response --> Parse["Parse Category"]
    Parse --> Store["Store Result"]

    style Email fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style Extract fill:#fef3c7,stroke:#f59e0b
    style Build fill:#d1fae5,stroke:#10b981
    style Gemini fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style Response fill:#fee2e2,stroke:#ef4444
    style Parse fill:#fef3c7,stroke:#f59e0b
    style Store fill:#e0e7ff,stroke:#6366f1,stroke-width:2px`}
          />
        </div>

        <hr />

        <h2>Email Categories</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Category</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-red-600 dark:text-red-400">Need-Action</td>
                <td className="px-4 py-3 text-muted-foreground">Requires your response</td>
                <td className="px-4 py-3 text-muted-foreground">Meeting invites, direct questions</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-blue-600 dark:text-blue-400">FYI</td>
                <td className="px-4 py-3 text-muted-foreground">Informational only</td>
                <td className="px-4 py-3 text-muted-foreground">Status updates, notifications</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-green-600 dark:text-green-400">Newsletter</td>
                <td className="px-4 py-3 text-muted-foreground">Subscriptions</td>
                <td className="px-4 py-3 text-muted-foreground">Daily digests, weekly updates</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-yellow-600 dark:text-yellow-400">Promotional</td>
                <td className="px-4 py-3 text-muted-foreground">Marketing content</td>
                <td className="px-4 py-3 text-muted-foreground">Sales, offers, advertisements</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-purple-600 dark:text-purple-400">Social</td>
                <td className="px-4 py-3 text-muted-foreground">Social networks</td>
                <td className="px-4 py-3 text-muted-foreground">LinkedIn, Twitter notifications</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Categorization Logic</h2>

        <h3>Input Processing</h3>

        <p>
          The system extracts key information from each email:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`email_data = {
    'subject': email['subject'],
    'from': email['from'],
    'snippet': email['snippet'],  # First 100 chars
    'date': email['date'],
}`}
        </pre>

        <h3>AI Prompt</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`CATEGORIZATION_PROMPT = """
Analyze this email and categorize it:

From: {from_address}
Subject: {subject}
Preview: {snippet}

Categories:
1. NEED_ACTION - Requires response or action
2. FYI - Informational, no action needed
3. NEWSLETTER - Subscription content
4. PROMOTIONAL - Marketing/sales
5. SOCIAL - Social network notifications

Return ONLY the category name.
"""`}
        </pre>

        <h3>Response Parsing</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def parse_category(response: str) -> str:
    """Parse Gemini response to category."""
    response = response.strip().upper()

    categories = {
        'NEED_ACTION': 'Need-Action',
        'FYI': 'FYI',
        'NEWSLETTER': 'Newsletter',
        'PROMOTIONAL': 'Promotional',
        'SOCIAL': 'Social',
    }

    for key, value in categories.items():
        if key in response:
            return value

    return 'FYI'  # Default fallback`}
        </pre>

        <hr />

        <h2>Gemini Configuration</h2>

        <h3>Model Settings</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "api_settings": {
    "gemini_model": "gemini-2.5-flash-lite",
    "requests_per_minute": 30,
    "max_retries": 3,
    "timeout_seconds": 30
  }
}`}
        </pre>

        <h3>Rate Limiting</h3>

        <p>
          The system respects API rate limits with a sliding window approach:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class RateLimiter:
    def __init__(self, requests_per_minute: int = 30):
        self.requests_per_minute = requests_per_minute
        self.request_times = []

    def wait_if_needed(self):
        """Wait if rate limit would be exceeded."""
        now = time.time()
        minute_ago = now - 60

        # Remove old requests
        self.request_times = [t for t in self.request_times if t > minute_ago]

        if len(self.request_times) >= self.requests_per_minute:
            sleep_time = self.request_times[0] - minute_ago
            time.sleep(sleep_time)

        self.request_times.append(now)`}
        </pre>

        <hr />

        <h2>Caching</h2>

        <p>
          Categorization results are cached to minimize API calls:
        </p>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    NewEmail["New Email"] --> InCache{"In Cache?"}

    InCache -->|Yes| ReturnCached["Return Cached"]
    InCache -->|No| CallGemini["Call Gemini"]

    CallGemini --> CacheResult["Cache Result"]
    CacheResult --> ReturnCategory["Return Category"]

    style NewEmail fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style InCache fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style ReturnCached fill:#d1fae5,stroke:#10b981
    style CallGemini fill:#fce7f3,stroke:#ec4899
    style CacheResult fill:#fee2e2,stroke:#ef4444
    style ReturnCategory fill:#d1fae5,stroke:#10b981`}
          />
        </div>

        <h3>Cache Configuration</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "cache_settings": {
    "enabled": true,
    "max_cached_emails": 30,
    "cache_expiry_hours": 24
  }
}`}
        </pre>

        <h3>Cache Benefits</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">First Run</th>
                <th className="px-4 py-3 text-left font-semibold">Cached Run</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">API Calls</td>
                <td className="px-4 py-3">10-15</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">0-3</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Time</td>
                <td className="px-4 py-3">13-20 sec</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">5-8 sec</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Cost</td>
                <td className="px-4 py-3">~$0.10</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">~$0.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Error Handling</h2>

        <h3>Retry Logic</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def categorize_with_retry(email: dict, max_retries: int = 3) -> str:
    """Categorize email with retry on failure."""
    for attempt in range(max_retries):
        try:
            return call_gemini_api(email)
        except RateLimitError:
            wait_time = 2 ** attempt  # Exponential backoff
            time.sleep(wait_time)
        except APIError as e:
            logger.error(f"API error: {e}")
            if attempt == max_retries - 1:
                return 'FYI'  # Default on failure

    return 'FYI'`}
        </pre>

        <h3>Fallback Behavior</h3>

        <p>
          If Gemini API fails:
        </p>

        <div className="not-prose my-6">
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Log the error for debugging</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Return default category (<code className="rounded bg-muted px-1.5 py-0.5">FYI</code>)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>Continue processing other emails</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">4</span>
              <span>Report error in metrics dashboard</span>
            </li>
          </ol>
        </div>

        <hr />

        <h2>Accuracy Improvements</h2>

        <h3>Tips for Better Categorization</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Complete Metadata</div>
            <p className="text-sm text-muted-foreground">Ensure subject and snippet are available for best results</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Consistent Senders</div>
            <p className="text-sm text-muted-foreground">Known senders improve categorization accuracy</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Clean Inbox</div>
            <p className="text-sm text-muted-foreground">Reduce spam before processing for better results</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Tune Prompts</div>
            <p className="text-sm text-muted-foreground">Adjust prompts for your specific use case</p>
          </div>
        </div>

        <h3>Common Misclassifications</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Situation</th>
                <th className="px-4 py-3 text-left font-semibold">Expected</th>
                <th className="px-4 py-3 text-left font-semibold">Common Mistake</th>
                <th className="px-4 py-3 text-left font-semibold">Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Meeting invite</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Need-Action</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">FYI</td>
                <td className="px-4 py-3 text-muted-foreground">Check for invite keyword</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Bill reminder</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Need-Action</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">Newsletter</td>
                <td className="px-4 py-3 text-muted-foreground">Check sender domain</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Product update</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Newsletter</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">Promotional</td>
                <td className="px-4 py-3 text-muted-foreground">Check subject patterns</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Metrics</h2>

        <p>
          Track categorization performance in the dashboard:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Tracked metrics
metrics.record_api_call(
    model='gemini-2.5-flash-lite',
    latency=elapsed_time,
    success=True,
    category=result,
)`}
        </pre>

        <p>
          Available metrics in the dashboard:
        </p>

        <ul>
          <li>API calls made</li>
          <li>Response times</li>
          <li>Category distribution</li>
          <li>Error rates</li>
        </ul>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
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
            href="/docs/email-assistant/caching"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Caching →</div>
            <div className="text-sm text-muted-foreground">LRU cache implementation</div>
          </Link>
          <Link
            href="/docs/email-assistant/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">System design overview</div>
          </Link>
        </div>
      </article>
    </EmailAssistantDocsLayout>
  );
}
