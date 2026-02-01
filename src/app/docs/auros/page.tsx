import { AurosDocsLayout } from "@/components/AurosDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import Link from "next/link";

export const metadata = {
  title: "Auros | AI-Powered Job Search Tracker",
  description:
    "Local-first AI job search tool that scrapes career pages, extracts job details with LLM, ranks by relevance, and sends Slack alerts.",
};

export default function AurosOverviewPage() {
  return (
    <AurosDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Auros: AI-Powered Job Search Tracker</h1>

        <p className="lead">
          A local-first AI job search tool that scrapes career pages from top tech companies, extracts
          job details using LLM, ranks postings by relevance to Principal/Senior TPM/PM roles, and
          sends Slack alerts for high-scoring matches.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="https://github.com/udaytamma/Auros"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <span className="text-2xl">📦</span>
            <div>
              <div className="font-semibold text-foreground">Source Code</div>
              <div className="text-sm text-muted-foreground">GitHub Repository</div>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
            <span className="text-2xl">🚧</span>
            <div>
              <div className="font-semibold text-foreground">In Development</div>
              <div className="text-sm text-muted-foreground">MVP build in progress</div>
            </div>
          </div>
        </div>

        <hr />

        <h2>What It Does</h2>

        <p>
          Auros automates the tedious process of monitoring job postings across multiple company
          career pages. Instead of manually checking 10+ websites daily, Auros:
        </p>

        <ul>
          <li>
            <strong>Scrapes</strong> career pages from a curated list of 10 top tech companies using
            Playwright
          </li>
          <li>
            <strong>Extracts</strong> job details (title, YOE, salary, location, work mode) using Qwen
            2.5 Coder via Ollama
          </li>
          <li>
            <strong>Scores</strong> each posting based on relevance to your target profile (Principal
            TPM, AI/ML, Platform)
          </li>
          <li>
            <strong>Alerts</strong> you via Slack when high-scoring matches (≥0.70) are found
          </li>
          <li>
            <strong>Displays</strong> all jobs in a React dashboard with filtering, status tracking,
            and CSV export
          </li>
        </ul>

        <h2>Key Features</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🔍</span>
              <span className="font-semibold">Playwright Scraping</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Headless browser scraping handles JavaScript-rendered career pages with configurable
              5-10 second delays between requests.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <span className="font-semibold">Local LLM Extraction</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Qwen 2.5 Coder via Ollama extracts structured data from job descriptions - title, YOE,
              salary, work mode, and key requirements.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">📊</span>
              <span className="font-semibold">Match Scoring</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Weighted scoring algorithm ranks jobs by title match (0.30), AI/ML keywords (0.25), YOE
              fit (0.20), company tier (0.15), and work mode (0.10).
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">💰</span>
              <span className="font-semibold">Salary Confidence Gating</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Salary data extracted from JD or estimated by AI. Only shown if confidence &gt; 0.60 -
              prevents displaying garbage estimates.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🔔</span>
              <span className="font-semibold">Slack Notifications</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Real-time Slack alerts for jobs scoring ≥0.70. Includes company, title, match score,
              salary, YOE, and direct link to JD.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">📈</span>
              <span className="font-semibold">Dashboard with Charts</span>
            </div>
            <p className="text-sm text-muted-foreground">
              React dashboard with job table, filters, status tracking (bookmarked/applied/hidden),
              charts (by company, score distribution), and CSV export.
            </p>
          </div>
        </div>

        <h2>Architecture Preview</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph Triggers["Triggers"]
        SCHED["APScheduler<br/>6am/12pm/6pm CT"]
        MANUAL["Manual Trigger<br/>POST /search/trigger"]
    end

    subgraph Scraper["Scraper Layer"]
        PW["Playwright Browser"]
        RATE["Rate Limiter<br/>5-10s delay"]
    end

    subgraph AI["AI Processing"]
        OLLAMA["Ollama<br/>Qwen 2.5 Coder"]
        EXTRACT["Job Extraction"]
        SALARY["Salary Estimation"]
        SCORE["Match Scoring"]
    end

    subgraph Storage["Persistence"]
        SQLITE["SQLite<br/>async SQLAlchemy"]
        DEDUPE["URL Dedupe"]
    end

    subgraph Output["Output"]
        SLACK["Slack Webhook<br/>score >= 0.70"]
        UI["React Dashboard"]
    end

    SCHED --> PW
    MANUAL --> PW
    PW --> RATE
    RATE --> |Raw HTML| OLLAMA
    OLLAMA --> EXTRACT
    EXTRACT --> SALARY
    SALARY --> SCORE
    SCORE --> DEDUPE
    DEDUPE --> SQLITE
    SQLITE --> SLACK
    SQLITE --> UI

    style SCHED fill:#e0e7ff,stroke:#6366f1
    style MANUAL fill:#e0e7ff,stroke:#6366f1
    style OLLAMA fill:#fef3c7,stroke:#d97706
    style SQLITE fill:#d1fae5,stroke:#059669
    style SLACK fill:#fee2e2,stroke:#dc2626
    style UI fill:#dbeafe,stroke:#2563eb`}
        />

        <h2>Target Companies (MVP)</h2>

        <p>
          Starting with 10 companies known for stable, scrape-friendly career pages. The list is
          editable in both configuration and UI:
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Company</th>
                <th className="px-4 py-3 text-left font-semibold">Tier</th>
                <th className="px-4 py-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Stripe</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Clean React-based careers page</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Airbnb</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Stable Greenhouse integration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Datadog</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Lever-based, well-structured</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Atlassian</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Custom careers site</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Cloudflare</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Greenhouse-based</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">GitLab</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Remote-first, clear structure</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">HashiCorp</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Greenhouse integration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Workday</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Uses own Workday Recruiting</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ServiceNow</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Clean job listing pages</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Snowflake</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Top 50
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Greenhouse-based</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Project Metrics</h2>

        <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">10</div>
            <div className="text-sm text-muted-foreground">MVP Companies</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">3x/day</div>
            <div className="text-sm text-muted-foreground">Scan Frequency</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">≥0.70</div>
            <div className="text-sm text-muted-foreground">Alert Threshold</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">&gt;0.60</div>
            <div className="text-sm text-muted-foreground">Salary Confidence</div>
          </div>
        </div>

        <h2>Core Rules</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Rule</th>
                <th className="px-4 py-3 text-left font-semibold">Value</th>
                <th className="px-4 py-3 text-left font-semibold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Deduplication</td>
                <td className="px-4 py-3">URL only</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Simple, reliable - same URL = same job
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Schedule</td>
                <td className="px-4 py-3">6am, 12pm, 6pm CT</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Configurable via APScheduler + manual trigger
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Slack Alerts</td>
                <td className="px-4 py-3">score ≥ 0.70</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Avoid notification fatigue from low-relevance jobs
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Salary Display</td>
                <td className="px-4 py-3">confidence &gt; 0.60</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Omit if LLM is uncertain - no garbage estimates
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Rate Limiting</td>
                <td className="px-4 py-3">5-10s delay</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Avoid triggering anti-scraping measures
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM Timing</td>
                <td className="px-4 py-3">Immediate per job</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Real-time enrichment, not batched nightly
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/auros/getting-started"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Getting Started →</div>
            <div className="text-sm text-muted-foreground">
              Prerequisites, installation, and first run
            </div>
          </Link>
          <Link
            href="/docs/auros/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">
              System design with detailed diagrams
            </div>
          </Link>
          <Link
            href="/docs/auros/api-reference"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Reference →</div>
            <div className="text-sm text-muted-foreground">
              All endpoints with request/response schemas
            </div>
          </Link>
          <Link
            href="/docs/auros/data-model"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Data Model →</div>
            <div className="text-sm text-muted-foreground">
              Database schema and entity relationships
            </div>
          </Link>
          <Link
            href="/docs/auros/ai-pipeline"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">AI Pipeline →</div>
            <div className="text-sm text-muted-foreground">
              LLM extraction, scoring, and confidence gating
            </div>
          </Link>
          <Link
            href="/docs/auros/build-phases"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Build Phases →</div>
            <div className="text-sm text-muted-foreground">
              Phased implementation plan with deliverables
            </div>
          </Link>
        </div>
      </article>
    </AurosDocsLayout>
  );
}
