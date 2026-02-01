import { AurosDocsLayout } from "@/components/AurosDocsLayout";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "API Reference | Auros",
  description: "Complete API documentation for Auros job search tracker endpoints",
};

export default function ApiReferencePage() {
  return (
    <AurosDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>API Reference</h1>

        <p className="lead">
          Complete REST API documentation for Auros. The API is served by FastAPI with automatic
          OpenAPI documentation available at <code>/docs</code>.
        </p>

        <hr />

        <h2>Base URL</h2>

        <pre className="overflow-x-auto rounded-lg bg-muted/50 p-4 text-sm">
          http://localhost:8008
        </pre>

        <h2>Authentication</h2>

        <p>
          All endpoints support optional API key authentication via the <code>X-API-Key</code>{" "}
          header. Authentication is only required if <code>API_KEY</code> is set in environment
          variables.
        </p>

        <CopyableCodeBlock
          language="bash"
          code={`# With API key (if configured)
curl -H "X-API-Key: your-secret-key" http://localhost:8008/jobs

# Without API key (if API_KEY env var not set)
curl http://localhost:8008/jobs`}
        />

        <h2>Jobs</h2>

        <h3>List Jobs</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            GET
          </span>
          <code className="text-sm">/jobs</code>
        </div>

        <p>Retrieve jobs with optional filtering and pagination.</p>

        <h4>Query Parameters</h4>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">status</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Filter by status: new, bookmarked, applied, hidden
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">company_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">Filter by company ID</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">min_score</td>
                <td className="px-4 py-3">float</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Minimum match score (0.0-1.0)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">query</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Search job titles (case-insensitive, partial match)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">limit</td>
                <td className="px-4 py-3">int</td>
                <td className="px-4 py-3 text-muted-foreground">Max results (default: 100)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">offset</td>
                <td className="px-4 py-3">int</td>
                <td className="px-4 py-3 text-muted-foreground">Skip N results (default: 0)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Response</h4>

        <CopyableCodeBlock
          language="json"
          code={`{
  "jobs": [
    {
      "id": "job_abc123",
      "company_id": "stripe",
      "title": "Principal Technical Program Manager, AI Platform",
      "primary_function": "TPM",
      "url": "https://stripe.com/jobs/...",
      "yoe_min": 10,
      "yoe_max": 15,
      "yoe_source": "extracted",
      "salary_min": 250000,
      "salary_max": 320000,
      "salary_source": "jd",
      "salary_confidence": 1.0,
      "salary_estimated": false,
      "work_mode": "hybrid",
      "location": "San Francisco, CA",
      "match_score": 0.92,
      "status": "new",
      "first_seen": "2024-02-01T06:00:00Z",
      "last_seen": "2024-02-01T12:00:00Z"
    }
  ],
  "total": 47
}`}
        />

        <h3>Get Job Details</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            GET
          </span>
          <code className="text-sm">/jobs/&#123;id&#125;</code>
        </div>

        <p>Retrieve full details for a single job, including raw description.</p>

        <h4>Response</h4>

        <CopyableCodeBlock
          language="json"
          code={`{
  "id": "job_abc123",
  "company_id": "stripe",
  "title": "Principal Technical Program Manager, AI Platform",
  "primary_function": "TPM",
  "url": "https://stripe.com/jobs/...",
  "yoe_min": 10,
  "yoe_max": 15,
  "yoe_source": "extracted",
  "salary_min": 250000,
  "salary_max": 320000,
  "salary_source": "jd",
  "salary_confidence": 1.0,
  "salary_estimated": false,
  "work_mode": "hybrid",
  "location": "San Francisco, CA",
  "match_score": 0.92,
  "raw_description": "Full job description text...",
  "status": "new",
  "first_seen": "2024-02-01T06:00:00Z",
  "last_seen": "2024-02-01T12:00:00Z"
}`}
        />

        <h3>Update Job Status</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            PATCH
          </span>
          <code className="text-sm">/jobs/&#123;id&#125;/status</code>
        </div>

        <p>Update the status of a job (bookmark, mark as applied, hide).</p>

        <h4>Request Body</h4>

        <CopyableCodeBlock
          language="json"
          code={`{
  "status": "bookmarked"
}`}
        />

        <h4>Valid Status Values</h4>

        <ul>
          <li>
            <code>new</code> - Default state for newly discovered jobs
          </li>
          <li>
            <code>bookmarked</code> - Saved for later review
          </li>
          <li>
            <code>applied</code> - Application submitted
          </li>
          <li>
            <code>hidden</code> - Dismissed from view
          </li>
        </ul>

        <h3>Export Jobs CSV</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            GET
          </span>
          <code className="text-sm">/jobs/export/csv</code>
        </div>

        <p>Download all jobs as a CSV file. Exports all jobs in the database.</p>

        <h4>Response</h4>

        <p>
          Returns <code>text/csv</code> with <code>Content-Disposition: attachment;
          filename=auros-jobs.csv</code> header.
        </p>

        <h4>CSV Columns</h4>

        <p>
          <code>company_id</code>, <code>title</code>, <code>url</code>, <code>location</code>,{" "}
          <code>work_mode</code>, <code>match_score</code>, <code>salary_min</code>,{" "}
          <code>salary_max</code>, <code>salary_source</code>, <code>status</code>,{" "}
          <code>first_seen</code>, <code>last_seen</code>
        </p>

        <hr />

        <h2>Search</h2>

        <h3>Trigger Scan</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            POST
          </span>
          <code className="text-sm">/search/trigger</code>
        </div>

        <p>
          Trigger a manual scan of all enabled companies. Returns immediately; scan runs in
          background.
        </p>

        <h4>Response</h4>

        <CopyableCodeBlock
          language="json"
          code={`// When scan starts
{ "status": "started" }

// When scan already running
{ "status": "running" }`}
        />

        <h3>Stop Scan</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            POST
          </span>
          <code className="text-sm">/search/stop</code>
        </div>

        <p>Stop any running scan. Cancels background tasks and resets scan state.</p>

        <h4>Response</h4>

        <CopyableCodeBlock
          language="json"
          code={`{
  "status": "stopped",
  "tasks_cancelled": 1
}`}
        />

        <h3>Get Scan Status</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            GET
          </span>
          <code className="text-sm">/search/status</code>
        </div>

        <p>Get the status of the current scan (from scan_state table).</p>

        <h4>Response</h4>

        <CopyableCodeBlock
          language="json"
          code={`{
  "status": "idle",           // idle | running | completed | cancelled
  "started_at": null,         // ISO timestamp or null
  "completed_at": null,       // ISO timestamp or null
  "companies_scanned": 0,
  "jobs_found": 0,
  "jobs_new": 0,
  "errors": []                // Array of error strings
}`}
        />

        <hr />

        <h2>Companies</h2>

        <h3>List Companies</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            GET
          </span>
          <code className="text-sm">/companies</code>
        </div>

        <p>List all configured companies with their scrape status.</p>

        <h4>Response</h4>

        <CopyableCodeBlock
          language="json"
          code={`[
  {
    "id": "stripe",
    "name": "Stripe",
    "careers_url": "https://stripe.com/jobs",
    "tier": 2,
    "enabled": true,
    "last_scraped": "2024-02-01T12:00:00Z",
    "scrape_status": "success"
  },
  {
    "id": "airbnb",
    "name": "Airbnb",
    "careers_url": "https://careers.airbnb.com",
    "tier": 2,
    "enabled": true,
    "last_scraped": "2024-02-01T12:01:30Z",
    "scrape_status": "success"
  }
]`}
        />

        <h3>Update Company</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            PATCH
          </span>
          <code className="text-sm">/companies/&#123;id&#125;</code>
        </div>

        <p>Enable or disable a company for scanning.</p>

        <h4>Request Body</h4>

        <CopyableCodeBlock
          language="json"
          code={`{
  "enabled": false
}`}
        />

        <hr />

        <h2>System</h2>

        <h3>Health Check</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            GET
          </span>
          <code className="text-sm">/health</code>
        </div>

        <p>Check health of all system components.</p>

        <h4>Response</h4>

        <CopyableCodeBlock
          language="json"
          code={`{
  "db": "ok",           // ok | error
  "ollama": "ok",       // ok | error | timeout | unknown
  "slack": "disabled"   // disabled | configured
}`}
        />

        <h3>Dashboard Stats</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            GET
          </span>
          <code className="text-sm">/stats</code>
        </div>

        <p>Get aggregated statistics for the dashboard.</p>

        <h4>Response</h4>

        <CopyableCodeBlock
          language="json"
          code={`{
  "total_jobs": 127,
  "new_jobs": 23,
  "bookmarked": 8,
  "applied": 3,
  "hidden": 15,
  "by_company": {
    "stripe": 18,
    "airbnb": 12,
    "datadog": 15
  },
  "score_buckets": {
    "0-49": 50,
    "50-69": 35,
    "70-79": 25,
    "80-89": 12,
    "90-100": 5
  },
  "new_jobs_by_day": {
    "2024-02-01": 8,
    "2024-01-31": 5,
    "2024-01-30": 10
  },
  "last_scan": "2024-02-01T12:03:45Z"
}`}
        />

        <h3>Prometheus Metrics</h3>

        <div className="not-prose my-4 flex items-center gap-2">
          <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            GET
          </span>
          <code className="text-sm">/metrics</code>
        </div>

        <p>
          Exposes Prometheus metrics for monitoring. Returns metrics in Prometheus text format.
        </p>

        <h4>Available Metrics</h4>

        <ul>
          <li>
            <code>auros_http_requests_total</code> - Total HTTP requests by method, path, status
          </li>
          <li>
            <code>auros_http_request_duration_seconds</code> - HTTP request latency histogram
          </li>
          <li>
            <code>auros_http_requests_in_progress</code> - Currently in-progress requests
          </li>
          <li>
            <code>auros_scans_running</code> - Number of scans currently running
          </li>
          <li>
            <code>auros_scans_total</code> - Total scans started
          </li>
          <li>
            <code>auros_scrape_errors_total</code> - Total scraping errors by source
          </li>
          <li>
            <code>auros_jobs_found_total</code> - Total jobs found during scans
          </li>
          <li>
            <code>auros_jobs_new_total</code> - Total new jobs added during scans
          </li>
        </ul>

        <hr />

        <h2>Error Responses</h2>

        <p>All endpoints return standard error format:</p>

        <CopyableCodeBlock
          language="json"
          code={`{
  "detail": "Job not found",
  "status_code": 404
}`}
        />

        <h3>Common Status Codes</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Code</th>
                <th className="px-4 py-3 text-left font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">200</td>
                <td className="px-4 py-3 text-muted-foreground">Success</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">201</td>
                <td className="px-4 py-3 text-muted-foreground">Created (scan triggered)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">400</td>
                <td className="px-4 py-3 text-muted-foreground">Invalid request body</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">404</td>
                <td className="px-4 py-3 text-muted-foreground">Resource not found</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">409</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Conflict (scan already running)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">500</td>
                <td className="px-4 py-3 text-muted-foreground">Internal server error</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">503</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Service unavailable (Ollama down)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>OpenAPI Documentation</h2>

        <p>
          Interactive API documentation is available at{" "}
          <code>http://localhost:8000/docs</code> (Swagger UI) and{" "}
          <code>http://localhost:8000/redoc</code> (ReDoc).
        </p>
      </article>
    </AurosDocsLayout>
  );
}
