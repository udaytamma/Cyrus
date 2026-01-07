import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Daily Digest | Email Assistant",
  description: "Consolidated email summaries with AI-generated highlights.",
};

export default function DailyDigestPage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Daily Digest</h1>

        <p className="lead">
          The Daily Digest feature provides a consolidated view of your emails, organized by category with AI-generated summaries.
        </p>

        <hr />

        <h2>Overview</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│                    DIGEST GENERATION FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐    │
│   │   Fetch     │───▶│ Categorize  │───▶│  Group by       │    │
│   │   Emails    │    │   Each      │    │  Category       │    │
│   └─────────────┘    └─────────────┘    └────────┬────────┘    │
│                                                   │              │
│                                                   ▼              │
│                      ┌─────────────┐    ┌─────────────────┐    │
│                      │   Render    │◀───│   Generate      │    │
│                      │   Digest    │    │   Summaries     │    │
│                      └─────────────┘    └─────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Digest Structure</h2>

        <h3>Categories Section</h3>

        <p>
          Emails grouped by type:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`📋 Need-Action (3)
├── Meeting invite from John
├── Urgent: Project deadline
└── Please review PR #42

📖 FYI (5)
├── Monthly report published
├── System maintenance notice
└── ...

📰 Newsletter (4)
├── TechCrunch Daily
├── Morning Brew
└── ...`}
        </pre>

        <h3>Newsletter Summaries</h3>

        <p>
          Each newsletter gets an AI-generated summary:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`📰 TechCrunch Daily
Summary: Today's top stories include Apple's new AI features,
startup funding rounds, and regulatory updates in the EU.
Key topics: AI, Startups, Regulation

📰 Morning Brew
Summary: Market updates show tech stocks rising, with focus
on Q4 earnings reports and holiday shopping trends.
Key topics: Markets, Retail, Tech`}
        </pre>

        <hr />

        <h2>Generation Process</h2>

        <h3>1. Fetch Emails</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def fetch_emails(max_count: int = 10) -> list[dict]:
    """Fetch recent unread emails from Gmail."""
    query = "is:unread newer_than:1d"

    results = gmail_service.users().messages().list(
        userId='me',
        q=query,
        maxResults=max_count,
    ).execute()

    messages = results.get('messages', [])
    return [get_message_details(msg['id']) for msg in messages]`}
        </pre>

        <h3>2. Categorize Each Email</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def process_emails(emails: list[dict]) -> dict[str, list]:
    """Categorize emails and group by category."""
    categorized = {
        'Need-Action': [],
        'FYI': [],
        'Newsletter': [],
        'Promotional': [],
        'Social': [],
    }

    for email in emails:
        category = categorize_email(email)
        categorized[category].append(email)

    return categorized`}
        </pre>

        <h3>3. Generate Summaries</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def generate_category_summary(category: str, emails: list[dict]) -> str:
    """Generate AI summary for a category."""
    if not emails:
        return "No emails in this category."

    email_list = "\\n".join([
        f"- {email['subject']} (from {email['from']})"
        for email in emails[:5]  # Limit for prompt size
    ])

    prompt = f"""
    Summarize these {category} emails in 2-3 sentences:

    {email_list}

    Focus on key action items or themes.
    """

    response = gemini_client.generate_content(prompt)
    return response.text`}
        </pre>

        <h3>4. Newsletter Highlights</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def extract_newsletter_highlights(email: dict) -> dict:
    """Extract key points from newsletter."""
    prompt = f"""
    Extract key highlights from this newsletter:

    Subject: {email['subject']}
    Content: {email['body'][:1000]}

    Return:
    - 2-3 sentence summary
    - Top 3 topics covered
    """

    response = gemini_client.generate_content(prompt)
    return parse_highlights(response.text)`}
        </pre>

        <hr />

        <h2>Web Interface</h2>

        <h3>Digest View</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────┐
│  📧 Email Digest                    [Refresh]   │
│  Generated: Dec 22, 2024 at 9:30 AM             │
├─────────────────────────────────────────────────┤
│                                                 │
│  📋 Need-Action (3)                             │
│  ┌─────────────────────────────────────────┐   │
│  │ 📌 Meeting: Q4 Review                   │   │
│  │    From: manager@company.com            │   │
│  │    Action: Accept/Decline by EOD        │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  📖 FYI (5)                                     │
│  ┌─────────────────────────────────────────┐   │
│  │ Summary: 5 informational emails about   │   │
│  │ project updates and system notices.     │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  📰 Newsletter (4)                              │
│  ┌─────────────────────────────────────────┐   │
│  │ 🗞️ TechCrunch Daily                     │   │
│  │ AI advances, startup news, EU tech laws │   │
│  │                                          │   │
│  │ 🗞️ Morning Brew                         │   │
│  │ Market rally continues, retail outlook  │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
└─────────────────────────────────────────────────┘`}
        </pre>

        <h3>Refresh Functionality</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// script.js
async function refreshDigest() {
    const button = document.getElementById('refresh-btn');
    button.disabled = true;
    button.textContent = 'Refreshing...';

    try {
        const response = await fetch('/api/refresh', { method: 'POST' });
        if (response.ok) {
            location.reload();
        }
    } finally {
        button.disabled = false;
        button.textContent = 'Refresh';
    }
}`}
        </pre>

        <hr />

        <h2>Data Persistence</h2>

        <h3>Digest Storage</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def save_digest(digest_data: dict) -> None:
    """Save digest to JSON file."""
    path = Path('data/digest/latest.json')

    with open(path, 'w') as f:
        json.dump({
            'generated_at': datetime.now().isoformat(),
            'data': digest_data,
        }, f, indent=2)`}
        </pre>

        <h3>Cache Integration</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│                      CACHE INTEGRATION                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────┐          ┌─────────────────┐                  │
│   │ New Request │─────────▶│  Digest Fresh?  │                  │
│   └─────────────┘          └────────┬────────┘                  │
│                                     │                            │
│                            Yes      │      No                    │
│                            ┌────────┴────────┐                  │
│                            │                 │                   │
│                            ▼                 ▼                   │
│                     ┌───────────┐     ┌───────────┐             │
│                     │  Return   │     │ Regenerate│             │
│                     │  Cached   │     │           │             │
│                     └───────────┘     └─────┬─────┘             │
│                            ▲                │                    │
│                            │                ▼                    │
│                            │         ┌───────────┐              │
│                            └─────────│   Save    │              │
│                                      │ to Cache  │              │
│                                      └───────────┘              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Performance</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">First run (10 emails)</td>
                <td className="px-4 py-3">13-20 seconds</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Cached run</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">5-8 seconds</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Page load</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">&lt; 1 second</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Optimization Tips</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Reduce Email Count</div>
            <p className="text-sm text-muted-foreground">Fetch only what you need to process</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Enable Caching</div>
            <p className="text-sm text-muted-foreground">Avoid redundant API calls</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Batch Processing</div>
            <p className="text-sm text-muted-foreground">Process emails in parallel</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Limit Summaries</div>
            <p className="text-sm text-muted-foreground">Only summarize newsletters</p>
          </div>
        </div>

        <hr />

        <h2>Configuration</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "gmail_settings": {
    "max_emails_to_fetch": 10,
    "search_query": "is:unread newer_than:1d"
  },
  "digest_settings": {
    "include_promotional": false,
    "include_social": false,
    "newsletter_summary_length": 100
  }
}`}
        </pre>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/email-assistant/ai-categorization"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">AI Categorization →</div>
            <div className="text-sm text-muted-foreground">How email classification works</div>
          </Link>
          <Link
            href="/docs/email-assistant/metrics-dashboard"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Metrics Dashboard →</div>
            <div className="text-sm text-muted-foreground">Observability and tracking</div>
          </Link>
          <Link
            href="/docs/email-assistant/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">System design overview</div>
          </Link>
          <Link
            href="/docs/email-assistant/caching"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Caching →</div>
            <div className="text-sm text-muted-foreground">LRU cache implementation</div>
          </Link>
        </div>
      </article>
    </EmailAssistantDocsLayout>
  );
}
