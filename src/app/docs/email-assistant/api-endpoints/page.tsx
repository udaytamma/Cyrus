import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "API Endpoints | Email Assistant",
  description: "Flask API reference for the Email Assistant web interface.",
};

export default function ApiEndpointsPage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>API Endpoints</h1>

        <p className="lead">
          The Email Assistant web interface exposes several API endpoints for data retrieval and control.
        </p>

        <hr />

        <h2>Base URL</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`http://localhost:8001`}
        </pre>

        <hr />

        <h2>Page Endpoints</h2>

        <h3>GET /</h3>

        <p>Main digest page.</p>

        <div className="not-prose my-4 rounded-lg border border-border bg-card p-4">
          <div className="text-sm font-semibold">Response</div>
          <div className="text-sm text-muted-foreground">HTML page with email digest</div>
        </div>

        <h3>GET /tests</h3>

        <p>Test results page.</p>

        <div className="not-prose my-4 rounded-lg border border-border bg-card p-4">
          <div className="text-sm font-semibold">Response</div>
          <div className="text-sm text-muted-foreground">HTML page with test execution results</div>
        </div>

        <hr />

        <h2>API Endpoints</h2>

        <h3>GET /api/digest</h3>

        <p>Get current digest data.</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Response
{
  "generated_at": "2024-12-22T09:30:00",
  "categories": {
    "Need-Action": [
      {
        "id": "msg_123",
        "subject": "Meeting invite",
        "from": "john@example.com",
        "date": "2024-12-22",
        "snippet": "Please join..."
      }
    ],
    "FYI": [...],
    "Newsletter": [...],
    "Promotional": [...],
    "Social": [...]
  },
  "summaries": {
    "Need-Action": "3 emails requiring response...",
    "Newsletter": "Highlights from tech newsletters..."
  },
  "stats": {
    "total_emails": 15,
    "api_calls": 12,
    "execution_time": 8.5
  }
}`}
        </pre>

        <h3>POST /api/refresh</h3>

        <p>Trigger email processing refresh.</p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
            <div className="mb-2 font-semibold text-green-600 dark:text-green-400">Success</div>
            <pre className="text-xs overflow-x-auto">
{`{
  "status": "success",
  "message": "Digest refreshed",
  "execution_time": 12.3
}`}
            </pre>
          </div>
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4">
            <div className="mb-2 font-semibold text-yellow-600 dark:text-yellow-400">Busy (409)</div>
            <pre className="text-xs overflow-x-auto">
{`{
  "status": "busy",
  "message": "Refresh already in progress"
}`}
            </pre>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Error (500)</div>
            <pre className="text-xs overflow-x-auto">
{`{
  "status": "error",
  "message": "Failed to refresh: API error"
}`}
            </pre>
          </div>
        </div>

        <h3>GET /api/status</h3>

        <p>Check if refresh script is running.</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Response
{
  "running": false,
  "last_run": "2024-12-22T09:30:00",
  "lock_file_exists": false
}`}
        </pre>

        <h3>GET /api/metrics</h3>

        <p>Get performance metrics.</p>

        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">period</td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3 text-muted-foreground">24h</td>
                <td className="px-4 py-3 text-muted-foreground">Time period: 24h, 7d, all</td>
              </tr>
            </tbody>
          </table>
        </div>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Response
{
  "period": "24h",
  "metrics": {
    "emails_processed": 45,
    "api_calls": 127,
    "cache_hit_rate": 87.5,
    "avg_execution_time": 8.2,
    "success_rate": 98.2,
    "estimated_cost": 1.27,
    "script_run_count": 12,
    "error_count": 2
  },
  "category_breakdown": {
    "Need-Action": 15,
    "FYI": 12,
    "Newsletter": 10,
    "Promotional": 5,
    "Social": 3
  }
}`}
        </pre>

        <h3>GET /api/errors</h3>

        <p>Get recent errors.</p>

        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">limit</td>
                <td className="px-4 py-3 text-muted-foreground">int</td>
                <td className="px-4 py-3 text-muted-foreground">10</td>
                <td className="px-4 py-3 text-muted-foreground">Maximum errors to return</td>
              </tr>
            </tbody>
          </table>
        </div>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Response
{
  "errors": [
    {
      "timestamp": "2024-12-22T09:15:23",
      "module": "gemini_utils",
      "error_type": "RateLimitError",
      "message": "API rate limit exceeded",
      "traceback": "..."
    },
    {
      "timestamp": "2024-12-21T14:30:45",
      "module": "email_utils",
      "error_type": "ConnectionError",
      "message": "Failed to connect to Gmail API"
    }
  ]
}`}
        </pre>

        <hr />

        <h2>Test Endpoints</h2>

        <h3>POST /api/tests/run</h3>

        <p>Run test suite.</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Request
{
  "suite": "basic"  // basic, extended, comprehensive
}

// Response
{
  "status": "success",
  "suite": "basic",
  "results": {
    "passed": 18,
    "failed": 2,
    "skipped": 0,
    "total": 20,
    "duration": 15.3
  },
  "failures": [
    {
      "test": "test_api_rate_limit",
      "message": "Expected retry, got immediate failure"
    }
  ]
}`}
        </pre>

        <h3>GET /api/tests/results</h3>

        <p>Get latest test results.</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Response
{
  "last_run": "2024-12-22T10:00:00",
  "suite": "comprehensive",
  "results": {
    "passed": 53,
    "failed": 2,
    "skipped": 0,
    "total": 55,
    "duration": 45.7
  }
}`}
        </pre>

        <hr />

        <h2>Implementation</h2>

        <h3>Flask Server</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# server.py

from flask import Flask, jsonify, request, render_template
import subprocess
import json

app = Flask(__name__)

@app.route('/')
def index():
    """Render main digest page."""
    digest = load_digest()
    return render_template('digest.html', digest=digest)

@app.route('/api/digest')
def get_digest():
    """API: Get digest data."""
    digest = load_digest()
    return jsonify(digest)

@app.route('/api/refresh', methods=['POST'])
def refresh():
    """API: Trigger refresh."""
    if is_script_running():
        return jsonify({'status': 'busy', 'message': 'Already running'}), 409

    try:
        result = subprocess.run(
            ['python', 'src/main.py'],
            capture_output=True,
            timeout=120,
        )

        if result.returncode == 0:
            return jsonify({'status': 'success', 'message': 'Refreshed'})
        else:
            return jsonify({
                'status': 'error',
                'message': result.stderr.decode()
            }), 500

    except subprocess.TimeoutExpired:
        return jsonify({
            'status': 'error',
            'message': 'Script timed out'
        }), 504

@app.route('/api/status')
def status():
    """API: Check script status."""
    return jsonify({
        'running': is_script_running(),
        'last_run': get_last_run_time(),
        'lock_file_exists': Path('script.lock').exists(),
    })

@app.route('/api/metrics')
def metrics():
    """API: Get metrics."""
    period = request.args.get('period', '24h')
    metrics_data = get_metrics_for_period(period)
    return jsonify(metrics_data)

@app.route('/api/errors')
def errors():
    """API: Get recent errors."""
    limit = request.args.get('limit', 10, type=int)
    errors = get_recent_errors(limit)
    return jsonify({'errors': errors})`}
        </pre>

        <h3>Error Handling</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def server_error(e):
    return jsonify({'error': 'Internal server error'}), 500

@app.errorhandler(Exception)
def handle_exception(e):
    logger.exception(f"Unhandled exception: {e}")
    return jsonify({'error': str(e)}), 500`}
        </pre>

        <hr />

        <h2>Usage Examples</h2>

        <h3>cURL</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Get digest
curl http://localhost:8001/api/digest

# Trigger refresh
curl -X POST http://localhost:8001/api/refresh

# Get metrics for 7 days
curl "http://localhost:8001/api/metrics?period=7d"

# Get recent errors
curl "http://localhost:8001/api/errors?limit=5"`}
        </pre>

        <h3>JavaScript</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Fetch digest
const digest = await fetch('/api/digest').then(r => r.json());

// Refresh
const result = await fetch('/api/refresh', { method: 'POST' })
  .then(r => r.json());

// Get metrics
const metrics = await fetch('/api/metrics?period=24h')
  .then(r => r.json());`}
        </pre>

        <h3>Python</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import requests

# Get digest
response = requests.get('http://localhost:8001/api/digest')
digest = response.json()

# Refresh
response = requests.post('http://localhost:8001/api/refresh')
result = response.json()

# Get metrics
response = requests.get('http://localhost:8001/api/metrics', params={'period': '7d'})
metrics = response.json()`}
        </pre>

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
            href="/docs/email-assistant/caching"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Caching →</div>
            <div className="text-sm text-muted-foreground">LRU cache implementation</div>
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
            <div className="text-sm text-muted-foreground">Test suite documentation</div>
          </Link>
        </div>
      </article>
    </EmailAssistantDocsLayout>
  );
}
