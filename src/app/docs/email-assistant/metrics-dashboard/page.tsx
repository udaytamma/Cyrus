import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Metrics Dashboard | Email Assistant",
  description: "Comprehensive observability and tracking for email processing.",
};

export default function MetricsDashboardPage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Metrics Dashboard</h1>

        <p className="lead">
          The Email Assistant includes a comprehensive metrics dashboard for tracking performance, API usage, and errors with SQLite persistence.
        </p>

        <hr />

        <h2>Overview</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│                    METRICS ARCHITECTURE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────────────┐    ┌──────────────────┐                  │
│   │ Email Processing │───▶│ Metrics Collector│                  │
│   └──────────────────┘    └────────┬─────────┘                  │
│                                    │                             │
│                                    ▼                             │
│                           ┌───────────────┐                     │
│                           │    SQLite     │                     │
│                           │   Database    │                     │
│                           └───────┬───────┘                     │
│                                   │                              │
│                                   ▼                              │
│                          ┌───────────────┐                      │
│                          │ API Endpoints │                      │
│                          └───────┬───────┘                      │
│                                  │                               │
│                                  ▼                               │
│                         ┌───────────────┐                       │
│                         │ Web Dashboard │                       │
│                         └───────────────┘                       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Tracked Metrics</h2>

        <h3>Performance Metrics</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Periods</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Total Emails Processed</td>
                <td className="px-4 py-3 text-muted-foreground">Count of processed emails</td>
                <td className="px-4 py-3 text-muted-foreground">24h, 7d, All</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Average Execution Time</td>
                <td className="px-4 py-3 text-muted-foreground">Script execution duration</td>
                <td className="px-4 py-3 text-muted-foreground">24h, 7d, All</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Cache Hit Rate</td>
                <td className="px-4 py-3 text-muted-foreground">Percentage of cache hits</td>
                <td className="px-4 py-3 text-muted-foreground">24h, 7d, All</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Success Rate</td>
                <td className="px-4 py-3 text-muted-foreground">Percentage of successful runs</td>
                <td className="px-4 py-3 text-muted-foreground">24h, 7d, All</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>API Metrics</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Periods</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">API Calls Made</td>
                <td className="px-4 py-3 text-muted-foreground">Number of Gemini API calls</td>
                <td className="px-4 py-3 text-muted-foreground">24h, 7d, All</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Average Response Time</td>
                <td className="px-4 py-3 text-muted-foreground">API call latency</td>
                <td className="px-4 py-3 text-muted-foreground">24h, 7d, All</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Estimated API Cost</td>
                <td className="px-4 py-3 text-muted-foreground">Cost at $0.01/call</td>
                <td className="px-4 py-3 text-muted-foreground">24h, 7d, All</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>System Metrics</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Periods</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Script Run Count</td>
                <td className="px-4 py-3 text-muted-foreground">Number of executions</td>
                <td className="px-4 py-3 text-muted-foreground">24h, 7d, All</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Error Count</td>
                <td className="px-4 py-3 text-muted-foreground">Errors in period</td>
                <td className="px-4 py-3 text-muted-foreground">24h, 7d, All</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Cache Utilization</td>
                <td className="px-4 py-3 text-muted-foreground">Current vs max size</td>
                <td className="px-4 py-3 text-muted-foreground">Current</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Recent Errors</td>
                <td className="px-4 py-3 text-muted-foreground">Last 10 errors</td>
                <td className="px-4 py-3 text-muted-foreground">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Dashboard Interface</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│  📊 Metrics Dashboard                                        │
├─────────────────────────────────────────────────────────────┤
│  [Last 24 Hours] [Last 7 Days] [All Time]                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │
│  │ 📧 45        │ │ 🎯 98.2%     │ │ 📡 127       │         │
│  │ Emails       │ │ Success Rate │ │ API Calls    │         │
│  │ Processed    │ │              │ │              │         │
│  └──────────────┘ └──────────────┘ └──────────────┘         │
│                                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │
│  │ ⚡ 8.2s      │ │ 💾 87.5%     │ │ 💰 $1.27     │         │
│  │ Avg Time     │ │ Cache Hit    │ │ Est. Cost    │         │
│  └──────────────┘ └──────────────┘ └──────────────┘         │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  📊 Emails by Category (All Time)                           │
│                                                              │
│  Need-Action   ████████████████████  45%                    │
│  FYI           ██████████████        30%                    │
│  Newsletter    ████████              15%                    │
│  Promotional   ███                   7%                     │
│  Social        █                     3%                     │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  ⚠️ Recent Errors                                            │
│                                                              │
│  2024-12-22 09:15:23 | gemini_utils | APIError              │
│  Rate limit exceeded, retrying...                           │
│                                                              │
│  2024-12-21 14:30:45 | email_utils | ConnectionError        │
│  Failed to connect to Gmail API                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Implementation</h2>

        <h3>Metrics Collection</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# metrics_utils.py

import sqlite3
from datetime import datetime

class MetricsTracker:
    def __init__(self, db_path: str = 'data/metrics/metrics.db'):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        """Initialize SQLite database."""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute('''
                CREATE TABLE IF NOT EXISTS metrics (
                    id INTEGER PRIMARY KEY,
                    timestamp TEXT NOT NULL,
                    metric_type TEXT NOT NULL,
                    value REAL NOT NULL,
                    metadata TEXT
                )
            ''')

    def record(self, metric_type: str, value: float, metadata: dict = None):
        """Record a metric."""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute(
                'INSERT INTO metrics (timestamp, metric_type, value, metadata) VALUES (?, ?, ?, ?)',
                (datetime.now().isoformat(), metric_type, value, json.dumps(metadata))
            )`}
        </pre>

        <h3>Recording Metrics</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# During email processing
metrics = MetricsTracker()

# Record execution time
start = time.time()
process_emails()
elapsed = time.time() - start
metrics.record('execution_time', elapsed)

# Record API call
metrics.record('api_call', 1, {'model': 'gemini-2.5-flash-lite'})

# Record cache hit
metrics.record('cache_hit', 1 if cached else 0)

# Record error
metrics.record('error', 1, {'type': 'APIError', 'message': str(e)})`}
        </pre>

        <h3>API Endpoints</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# server.py

@app.route('/api/metrics')
def get_metrics():
    """Get all metrics."""
    period = request.args.get('period', '24h')

    metrics = {
        'emails_processed': get_count('email_processed', period),
        'api_calls': get_count('api_call', period),
        'cache_hit_rate': get_rate('cache_hit', period),
        'avg_execution_time': get_average('execution_time', period),
        'success_rate': get_rate('success', period),
        'estimated_cost': get_count('api_call', period) * 0.01,
    }

    return jsonify(metrics)

@app.route('/api/errors')
def get_errors():
    """Get recent errors."""
    errors = get_recent('error', limit=10)
    return jsonify(errors)`}
        </pre>

        <hr />

        <h2>Querying Metrics</h2>

        <h3>By Time Period</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def get_count(metric_type: str, period: str) -> int:
    """Get metric count for period."""
    cutoff = get_period_cutoff(period)

    with sqlite3.connect(db_path) as conn:
        result = conn.execute('''
            SELECT COUNT(*) FROM metrics
            WHERE metric_type = ? AND timestamp > ?
        ''', (metric_type, cutoff.isoformat()))

        return result.fetchone()[0]

def get_period_cutoff(period: str) -> datetime:
    """Get datetime cutoff for period."""
    now = datetime.now()

    if period == '24h':
        return now - timedelta(hours=24)
    elif period == '7d':
        return now - timedelta(days=7)
    else:
        return datetime.min  # All time`}
        </pre>

        <h3>Aggregations</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def get_average(metric_type: str, period: str) -> float:
    """Get average value for period."""
    cutoff = get_period_cutoff(period)

    with sqlite3.connect(db_path) as conn:
        result = conn.execute('''
            SELECT AVG(value) FROM metrics
            WHERE metric_type = ? AND timestamp > ?
        ''', (metric_type, cutoff.isoformat()))

        return result.fetchone()[0] or 0.0

def get_rate(metric_type: str, period: str) -> float:
    """Get success/hit rate for period."""
    cutoff = get_period_cutoff(period)

    with sqlite3.connect(db_path) as conn:
        result = conn.execute('''
            SELECT AVG(value) * 100 FROM metrics
            WHERE metric_type = ? AND timestamp > ?
        ''', (metric_type, cutoff.isoformat()))

        return result.fetchone()[0] or 0.0`}
        </pre>

        <hr />

        <h2>Error Tracking</h2>

        <h3>Error Recording</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def record_error(error: Exception, module: str):
    """Record error with context."""
    metrics.record('error', 1, {
        'type': type(error).__name__,
        'message': str(error),
        'module': module,
        'traceback': traceback.format_exc(),
    })`}
        </pre>

        <h3>Error Display</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def get_recent_errors(limit: int = 10) -> list[dict]:
    """Get recent errors for display."""
    with sqlite3.connect(db_path) as conn:
        result = conn.execute('''
            SELECT timestamp, metadata FROM metrics
            WHERE metric_type = 'error'
            ORDER BY timestamp DESC
            LIMIT ?
        ''', (limit,))

        return [
            {
                'timestamp': row[0],
                **json.loads(row[1])
            }
            for row in result.fetchall()
        ]`}
        </pre>

        <hr />

        <h2>Cost Estimation</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Pricing: $0.01 per API call (approximate)
API_COST_PER_CALL = 0.01

def get_estimated_cost(period: str) -> float:
    """Calculate estimated API cost."""
    api_calls = get_count('api_call', period)
    return api_calls * API_COST_PER_CALL`}
        </pre>

        <hr />

        <h2>Dashboard Tabs</h2>

        <h3>Frontend Implementation</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// script.js

const periods = ['24h', '7d', 'all'];
let currentPeriod = '24h';

async function loadMetrics(period) {
    currentPeriod = period;
    updateTabStyles();

    const response = await fetch(\`/api/metrics?period=\${period}\`);
    const metrics = await response.json();

    updateDashboard(metrics);
}

function updateDashboard(metrics) {
    document.getElementById('emails-count').textContent = metrics.emails_processed;
    document.getElementById('api-calls').textContent = metrics.api_calls;
    document.getElementById('success-rate').textContent = \`\${metrics.success_rate.toFixed(1)}%\`;
    document.getElementById('avg-time').textContent = \`\${metrics.avg_execution_time.toFixed(1)}s\`;
    document.getElementById('cache-rate').textContent = \`\${metrics.cache_hit_rate.toFixed(1)}%\`;
    document.getElementById('est-cost').textContent = \`$\${metrics.estimated_cost.toFixed(2)}\`;
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
            href="/docs/email-assistant/daily-digest"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Daily Digest →</div>
            <div className="text-sm text-muted-foreground">Email summaries and highlights</div>
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
