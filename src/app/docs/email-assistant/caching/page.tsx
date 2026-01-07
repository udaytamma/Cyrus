import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Caching | Email Assistant",
  description: "LRU cache implementation for API efficiency in the Email Assistant.",
};

export default function CachingPage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Caching Strategy</h1>

        <p className="lead">
          The Email Assistant implements intelligent caching to minimize API costs and improve response times through a two-layer caching system.
        </p>

        <hr />

        <h2>Overview</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│                       CACHING FLOW                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────┐          ┌─────────────┐                          │
│   │  Email  │─────────▶│  Cache Hit? │                          │
│   └─────────┘          └──────┬──────┘                          │
│                               │                                  │
│                    Yes        │        No                        │
│                    ┌──────────┴──────────┐                      │
│                    │                     │                       │
│                    ▼                     ▼                       │
│            ┌─────────────┐       ┌─────────────┐                │
│            │   Return    │       │ Call Gemini │                │
│            │   Cached    │       │     API     │                │
│            └──────┬──────┘       └──────┬──────┘                │
│                   │                     │                        │
│                   │                     ▼                        │
│                   │              ┌─────────────┐                │
│                   │              │   Cache     │                │
│                   │              │   Result    │                │
│                   │              └──────┬──────┘                │
│                   │                     │                        │
│                   └──────────┬──────────┘                       │
│                              │                                   │
│                              ▼                                   │
│                       ┌─────────────┐                           │
│                       │   Return    │                           │
│                       │   Result    │                           │
│                       └─────────────┘                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>LRU Cache Implementation</h2>

        <h3>Cache Configuration</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`from functools import lru_cache
from hashlib import md5

# Cache size: 1000 emails
CACHE_SIZE = 1000

@lru_cache(maxsize=CACHE_SIZE)
def get_cached_category(email_hash: str) -> dict:
    """Retrieve cached categorization result."""
    pass`}
        </pre>

        <h3>Email Hashing</h3>

        <p>
          Emails are hashed based on content that affects categorization:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def hash_email(email: dict) -> str:
    """Generate cache key from email content.

    Uses subject + sender + first 500 chars of body.
    """
    content = f"{email['subject']}|{email['from']}|{email['body'][:500]}"
    return md5(content.encode()).hexdigest()`}
        </pre>

        <hr />

        <h2>Cache Layers</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Layer 1: In-Memory LRU Cache</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><strong>Scope:</strong> Single script execution</li>
              <li><strong>Size:</strong> 1000 entries</li>
              <li><strong>TTL:</strong> Session duration</li>
              <li><strong>Use Case:</strong> Repeated analysis of same emails</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Layer 2: File-Based Cache</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><strong>Scope:</strong> Persistent across runs</li>
              <li><strong>Location:</strong> data/cache/</li>
              <li><strong>TTL:</strong> 24 hours</li>
              <li><strong>Use Case:</strong> Daily digest consistency</li>
            </ul>
          </div>
        </div>

        <h3>File-Based Cache Implementation</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import json
from pathlib import Path
from datetime import datetime, timedelta

CACHE_DIR = Path("data/cache")
CACHE_TTL = timedelta(hours=24)

def load_file_cache(email_hash: str) -> dict | None:
    """Load cached result from file."""
    cache_file = CACHE_DIR / f"{email_hash}.json"

    if not cache_file.exists():
        return None

    data = json.loads(cache_file.read_text())
    cached_at = datetime.fromisoformat(data["cached_at"])

    if datetime.now() - cached_at > CACHE_TTL:
        cache_file.unlink()  # Expired
        return None

    return data["result"]

def save_file_cache(email_hash: str, result: dict) -> None:
    """Save result to file cache."""
    CACHE_DIR.mkdir(parents=True, exist_ok=True)

    cache_file = CACHE_DIR / f"{email_hash}.json"
    cache_file.write_text(json.dumps({
        "cached_at": datetime.now().isoformat(),
        "result": result
    }))`}
        </pre>

        <hr />

        <h2>Cache Statistics</h2>

        <h3>Tracking Hit Rate</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class CacheStats:
    """Track cache performance metrics."""

    def __init__(self):
        self.hits = 0
        self.misses = 0

    def record_hit(self):
        self.hits += 1

    def record_miss(self):
        self.misses += 1

    @property
    def hit_rate(self) -> float:
        total = self.hits + self.misses
        return (self.hits / total * 100) if total > 0 else 0

    def report(self) -> dict:
        return {
            "hits": self.hits,
            "misses": self.misses,
            "hit_rate": f"{self.hit_rate:.1f}%"
        }`}
        </pre>

        <h3>Metrics Dashboard Integration</h3>

        <p>
          Cache metrics are exposed via the <code>/api/metrics</code> endpoint:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "cache": {
    "hits": 127,
    "misses": 18,
    "hit_rate": "87.6%",
    "memory_entries": 145,
    "file_entries": 892
  }
}`}
        </pre>

        <hr />

        <h2>Cache Invalidation</h2>

        <h3>Automatic Invalidation</h3>

        <ul>
          <li><strong>TTL Expiry:</strong> File cache entries expire after 24 hours</li>
          <li><strong>LRU Eviction:</strong> Memory cache evicts least-recently-used when full</li>
          <li><strong>Content Change:</strong> Different email content generates different hash</li>
        </ul>

        <h3>Manual Invalidation</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def clear_cache():
    """Clear all cache layers."""
    # Clear memory cache
    get_cached_category.cache_clear()

    # Clear file cache
    for cache_file in CACHE_DIR.glob("*.json"):
        cache_file.unlink()`}
        </pre>

        <hr />

        <h2>Best Practices</h2>

        <h3>1. Hash Stability</h3>

        <p>
          Ensure hash inputs are normalized:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def normalize_email(email: dict) -> dict:
    """Normalize email for consistent hashing."""
    return {
        "subject": email["subject"].strip().lower(),
        "from": email["from"].strip().lower(),
        "body": " ".join(email["body"].split())[:500]
    }`}
        </pre>

        <h3>2. Cache Warming</h3>

        <p>
          Pre-populate cache for known senders:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`PRIORITY_SENDERS = ["boss@company.com", "client@important.com"]

def warm_cache(emails: list[dict]):
    """Pre-cache emails from priority senders."""
    priority_emails = [
        e for e in emails
        if e["from"] in PRIORITY_SENDERS
    ]
    for email in priority_emails:
        categorize_email(email)  # Populates cache`}
        </pre>

        <h3>3. Cache Monitoring</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import logging

logger = logging.getLogger(__name__)

def log_cache_performance():
    """Log cache statistics periodically."""
    stats = cache_stats.report()
    logger.info(f"Cache performance: {stats}")

    if stats["hit_rate"] < 50:
        logger.warning("Low cache hit rate - consider increasing cache size")`}
        </pre>

        <hr />

        <h2>Cost Impact</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Scenario</th>
                <th className="px-4 py-3 text-left font-semibold">API Calls</th>
                <th className="px-4 py-3 text-left font-semibold">Estimated Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No caching</td>
                <td className="px-4 py-3">50/run</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">~$0.10</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">With caching (80% hit)</td>
                <td className="px-4 py-3">10/run</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">~$0.02</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Monthly savings</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">~$2.40</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/email-assistant/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">System design overview</div>
          </Link>
          <Link
            href="/docs/email-assistant/metrics-dashboard"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Metrics Dashboard →</div>
            <div className="text-sm text-muted-foreground">Observability and tracking</div>
          </Link>
          <Link
            href="/docs/email-assistant/api-endpoints"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Endpoints →</div>
            <div className="text-sm text-muted-foreground">REST API documentation</div>
          </Link>
          <Link
            href="/docs/email-assistant/ai-categorization"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">AI Categorization →</div>
            <div className="text-sm text-muted-foreground">How email classification works</div>
          </Link>
        </div>
      </article>
    </EmailAssistantDocsLayout>
  );
}
