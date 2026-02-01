import { AurosDocsLayout } from "@/components/AurosDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Build Phases | Auros",
  description: "Phased implementation plan with deliverables for Auros job search tracker",
};

export default function BuildPhasesPage() {
  return (
    <AurosDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Build Phases</h1>

        <p className="lead">
          Auros MVP is built in 6 phases, each delivering a working increment. This page details
          the deliverables, files, and acceptance criteria for each phase.
        </p>

        <hr />

        <h2>Phase Overview</h2>

        <MermaidDiagram
          chart={`flowchart LR
    P1["Phase 1<br/>Core Infra"]
    P2["Phase 2<br/>Scraper + LLM"]
    P3["Phase 3<br/>Salary + Dedupe"]
    P4["Phase 4<br/>Scheduler + Slack"]
    P5["Phase 5<br/>UI + Charts"]
    P6["Phase 6<br/>Polish"]

    P1 --> P2 --> P3 --> P4 --> P5 --> P6

    style P1 fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style P2 fill:#fef3c7,stroke:#d97706,stroke-width:2px
    style P3 fill:#fef3c7,stroke:#d97706,stroke-width:2px
    style P4 fill:#dbeafe,stroke:#2563eb,stroke-width:2px
    style P5 fill:#dbeafe,stroke:#2563eb,stroke-width:2px
    style P6 fill:#d1fae5,stroke:#059669,stroke-width:2px`}
        />

        <hr />

        <h2>Phase 1: Core Infrastructure</h2>

        <div className="not-prose my-4">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Foundation
          </span>
        </div>

        <p>
          Establish project structure, database, configuration, and basic API. No business logic
          yet.
        </p>

        <h3>Deliverables</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">File</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/main.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  FastAPI app with lifespan, CORS, routers
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/config.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Pydantic Settings with .env loading
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/db.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Async SQLAlchemy engine and session factory
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/models.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  SQLAlchemy ORM models (Company, Job, ScanLog)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/schemas.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Pydantic request/response schemas
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/data/companies.py</td>
                <td className="px-4 py-3 text-muted-foreground">Default company list (10 MVP)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">.env.example</td>
                <td className="px-4 py-3 text-muted-foreground">Environment variable template</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">requirements.txt</td>
                <td className="px-4 py-3 text-muted-foreground">Python dependencies</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Acceptance Criteria</h3>

        <ul>
          <li>
            <code>uvicorn api.main:app</code> starts without error
          </li>
          <li>
            <code>GET /health</code> returns <code>&#123;&quot;status&quot;: &quot;healthy&quot;&#125;</code>
          </li>
          <li>SQLite database file created on startup</li>
          <li>Tables created with correct schema</li>
        </ul>

        <hr />

        <h2>Phase 2: Scraper + LLM</h2>

        <div className="not-prose my-4">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            Core Processing
          </span>
        </div>

        <p>Implement Playwright scraping, Ollama integration, and match scoring.</p>

        <h3>Deliverables</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">File</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/services/scraper.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Playwright browser, page scraping, job extraction
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/services/llm.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Ollama client, extraction prompt, response parsing
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/services/scorer.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Match scoring algorithm with configurable weights
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/routers/search.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Manual trigger endpoint, scan status
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Acceptance Criteria</h3>

        <ul>
          <li>Scraper successfully loads all 10 company career pages</li>
          <li>Job listings extracted as structured data</li>
          <li>LLM extracts fields from job descriptions</li>
          <li>Match scores calculated and stored</li>
          <li>Rate limiting (5-10s) between requests</li>
        </ul>

        <hr />

        <h2>Phase 3: Salary + Dedupe</h2>

        <div className="not-prose my-4">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
            Data Quality
          </span>
        </div>

        <p>Add salary extraction/estimation with confidence gating and URL-based deduplication.</p>

        <h3>Deliverables</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">File</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/services/salary.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Regex extraction, LLM estimation, confidence gating
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/services/scraper.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  (Updated) URL-based deduplication logic
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Acceptance Criteria</h3>

        <ul>
          <li>Salary extracted from JD when present (source: jd, confidence: 1.0)</li>
          <li>LLM estimation with confidence score when salary not in JD</li>
          <li>
            Salary omitted when confidence &lt;= 0.60
          </li>
          <li>Duplicate URLs update last_seen instead of creating new records</li>
          <li>salary_source and salary_confidence populated correctly</li>
        </ul>

        <hr />

        <h2>Phase 4: Scheduler + Slack</h2>

        <div className="not-prose my-4">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Automation
          </span>
        </div>

        <p>
          Add APScheduler for automated scans and Slack webhook notifications for high-score
          matches.
        </p>

        <h3>Deliverables</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">File</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/scheduler/jobs.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  APScheduler setup, CronTrigger for 6/12/18 CT
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/services/slack.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Webhook client, message formatting
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/main.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  (Updated) Scheduler start/stop in lifespan
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Acceptance Criteria</h3>

        <ul>
          <li>Scheduler starts with app and shuts down cleanly</li>
          <li>Scans trigger at configured times (6am, 12pm, 6pm CT)</li>
          <li>Slack notification sent for jobs with score &gt;= 0.70</li>
          <li>notified flag set to prevent duplicate alerts</li>
          <li>Manual trigger still works via API</li>
        </ul>

        <hr />

        <h2>Phase 5: UI + Charts</h2>

        <div className="not-prose my-4">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Frontend
          </span>
        </div>

        <p>Build React dashboard with job table, filters, charts, and status management.</p>

        <h3>Deliverables</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">File</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ui/src/pages/Dashboard.tsx</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Main dashboard with stats, charts, table
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ui/src/components/JobTable.tsx</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Sortable table with job rows
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ui/src/components/FilterBar.tsx</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Filter by company, score, status, mode
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ui/src/components/Charts.tsx</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Jobs by company, score histogram, daily trend
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ui/src/components/StatusBadge.tsx</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Status indicator component
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ui/src/components/SalaryCell.tsx</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Salary display with source tooltip
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ui/src/hooks/useJobs.ts</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Data fetching and filtering hook
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ui/src/api/client.ts</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Fetch wrapper for API calls
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/routers/jobs.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Job CRUD endpoints with filters
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">api/routers/export.py</td>
                <td className="px-4 py-3 text-muted-foreground">CSV export endpoint</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Acceptance Criteria</h3>

        <ul>
          <li>Dashboard loads and displays jobs from API</li>
          <li>Filters work for company, score, status, work mode</li>
          <li>Charts render correctly with data</li>
          <li>Status updates (bookmark/apply/hide) persist to database</li>
          <li>CSV export downloads all filtered jobs</li>
          <li>Trigger Scan button works from UI</li>
        </ul>

        <hr />

        <h2>Phase 6: Polish</h2>

        <div className="not-prose my-4">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
            Release Ready
          </span>
        </div>

        <p>Add tests, documentation, and final quality checks.</p>

        <h3>Deliverables</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">File</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">tests/test_scraper.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Scraper sanity tests (mock pages)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">tests/test_llm.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  LLM extraction tests (mock responses)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">tests/test_api.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  API endpoint tests (FastAPI TestClient)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">tests/test_scorer.py</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Match scoring unit tests
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">README.md</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Project overview, setup guide, usage
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">.env.example</td>
                <td className="px-4 py-3 text-muted-foreground">
                  (Updated) Complete with all variables
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Acceptance Criteria</h3>

        <ul>
          <li>
            <code>pytest tests/</code> passes with &gt;70% coverage
          </li>
          <li>Health check includes all components</li>
          <li>README documents setup, configuration, and usage</li>
          <li>.env.example includes all required variables</li>
          <li>No critical warnings from linters</li>
        </ul>

        <hr />

        <h2>Dependency Graph</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph Phase1["Phase 1: Core Infra"]
        MAIN["main.py"]
        CONFIG["config.py"]
        DB["db.py"]
        MODELS["models.py"]
        SCHEMAS["schemas.py"]
    end

    subgraph Phase2["Phase 2: Scraper + LLM"]
        SCRAPER["scraper.py"]
        LLM["llm.py"]
        SCORER["scorer.py"]
        RSEARCH["routers/search.py"]
    end

    subgraph Phase3["Phase 3: Salary + Dedupe"]
        SALARY["salary.py"]
    end

    subgraph Phase4["Phase 4: Scheduler + Slack"]
        SCHED["scheduler/jobs.py"]
        SLACK["slack.py"]
    end

    subgraph Phase5["Phase 5: UI"]
        DASHBOARD["Dashboard.tsx"]
        TABLE["JobTable.tsx"]
        CHARTS["Charts.tsx"]
        RJOBS["routers/jobs.py"]
    end

    subgraph Phase6["Phase 6: Polish"]
        TESTS["tests/"]
        README["README.md"]
    end

    CONFIG --> MAIN
    DB --> MODELS
    MODELS --> SCHEMAS
    SCHEMAS --> MAIN

    MAIN --> SCRAPER
    SCRAPER --> LLM
    LLM --> SCORER
    SCORER --> RSEARCH

    LLM --> SALARY
    SCRAPER --> SALARY

    RSEARCH --> SCHED
    SCORER --> SLACK

    RJOBS --> DASHBOARD
    DASHBOARD --> TABLE
    DASHBOARD --> CHARTS

    SCRAPER --> TESTS
    LLM --> TESTS
    SCORER --> TESTS

    style MAIN fill:#e0e7ff,stroke:#6366f1
    style SCRAPER fill:#fef3c7,stroke:#d97706
    style LLM fill:#fef3c7,stroke:#d97706
    style SCHED fill:#dbeafe,stroke:#2563eb
    style DASHBOARD fill:#dbeafe,stroke:#2563eb
    style TESTS fill:#d1fae5,stroke:#059669`}
        />

        <h2>Risk Mitigation</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Risk</th>
                <th className="px-4 py-3 text-left font-semibold">Phase</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Scrape instability</td>
                <td className="px-4 py-3">Phase 2</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Start with 10 known-clean sites; add scrape_status tracking
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM extraction errors</td>
                <td className="px-4 py-3">Phase 2</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Fallback values; store raw_description for manual review
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Salary guess quality</td>
                <td className="px-4 py-3">Phase 3</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Confidence threshold (0.60); display &quot;—&quot; if uncertain
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Scoring drift</td>
                <td className="px-4 py-3">Phase 2+</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Allow manual relevance override; weekly review
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Slack rate limits</td>
                <td className="px-4 py-3">Phase 4</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Batch notifications; only alert for score &gt;= 0.70
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </AurosDocsLayout>
  );
}
