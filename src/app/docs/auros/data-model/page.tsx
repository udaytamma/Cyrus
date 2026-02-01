import { AurosDocsLayout } from "@/components/AurosDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "Data Model | Auros",
  description: "Database schema and entity relationships for Auros job search tracker",
};

export default function DataModelPage() {
  return (
    <AurosDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Data Model</h1>

        <p className="lead">
          Auros uses SQLite with async SQLAlchemy for persistence. The schema consists of four
          main tables: companies, jobs, scan_logs, and scan_state.
        </p>

        <hr />

        <h2>Entity Relationship Diagram</h2>

        <MermaidDiagram
          chart={`erDiagram
    COMPANIES ||--o{ JOBS : "has"
    COMPANIES ||--o{ SCAN_LOGS : "scanned in"

    COMPANIES {
        string id PK "e.g., stripe"
        string name "Display name"
        string careers_url "Careers page URL"
        int tier "1=Mag7, 2=Top50, 3=Top100"
        bool enabled "Include in scans"
        datetime last_scraped "Last successful scrape"
        string scrape_status "success|failed|blocked"
    }

    JOBS {
        string id PK "UUID"
        string company_id FK "References companies"
        string title "Job title"
        string primary_function "TPM|PM|Platform|SRE|AI-ML"
        string url UK "Unique job URL"
        int yoe_min "Min years experience"
        int yoe_max "Max years experience"
        string yoe_source "extracted|inferred"
        int salary_min "Min salary (USD)"
        int salary_max "Max salary (USD)"
        string salary_source "jd|ai"
        float salary_confidence "0.0-1.0"
        bool salary_estimated "AI estimated flag"
        string work_mode "remote|hybrid|onsite"
        string location "City, State"
        float match_score "0.0-1.0 (nullable)"
        text raw_description "Full JD text"
        string status "new|bookmarked|applied|hidden"
        datetime first_seen "First discovered"
        datetime last_seen "Last seen in scan"
        bool notified "Slack alert sent"
    }

    SCAN_LOGS {
        string id PK "UUID"
        datetime started_at "Scan start time"
        datetime completed_at "Scan end time"
        int companies_scanned "Count of companies"
        int jobs_found "Total jobs found"
        int jobs_new "New jobs added"
        json errors "Array of error messages"
    }

    SCAN_STATE {
        string id PK "singleton: current"
        string status "idle|scanning|completed|cancelled"
        datetime started_at "Current scan start"
        datetime completed_at "Current scan end"
        int companies_scanned "Progress count"
        int jobs_found "Jobs found so far"
        int jobs_new "New jobs so far"
        json errors "Errors encountered"
    }`}
        />

        <h2>Table: companies</h2>

        <p>
          Stores the list of companies to scrape. The MVP includes 10 companies; more can be added
          via API or configuration.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Column</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Constraints</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">id</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">PRIMARY KEY</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Slug identifier (e.g., &quot;stripe&quot;)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">name</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NOT NULL</td>
                <td className="px-4 py-3 text-muted-foreground">Display name</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">careers_url</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NOT NULL</td>
                <td className="px-4 py-3 text-muted-foreground">Base URL for careers page</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">tier</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">DEFAULT 2</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Company tier for scoring (1=Mag7, 2=Top50, 3=Top100)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">enabled</td>
                <td className="px-4 py-3">BOOLEAN</td>
                <td className="px-4 py-3">DEFAULT TRUE</td>
                <td className="px-4 py-3 text-muted-foreground">Include in scheduled scans</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">last_scraped</td>
                <td className="px-4 py-3">DATETIME</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">Timestamp of last scrape</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">scrape_status</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Last scrape result: success, failed, blocked
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Default Companies (MVP)</h3>

        <CopyableCodeBlock
          language="python"
          title="api/data/companies.py"
          code={`DEFAULT_COMPANIES = [
    {"id": "stripe", "name": "Stripe", "careers_url": "https://stripe.com/jobs", "tier": 2},
    {"id": "airbnb", "name": "Airbnb", "careers_url": "https://careers.airbnb.com/", "tier": 2},
    {"id": "datadog", "name": "Datadog", "careers_url": "https://careers.datadoghq.com/", "tier": 2},
    {"id": "atlassian", "name": "Atlassian", "careers_url": "https://www.atlassian.com/company/careers", "tier": 2},
    {"id": "cloudflare", "name": "Cloudflare", "careers_url": "https://www.cloudflare.com/careers/jobs/", "tier": 2},
    {"id": "gitlab", "name": "GitLab", "careers_url": "https://about.gitlab.com/jobs/all-jobs/", "tier": 2},
    {"id": "hashicorp", "name": "HashiCorp", "careers_url": "https://www.hashicorp.com/careers", "tier": 2},
    {"id": "workday", "name": "Workday", "careers_url": "https://workday.wd5.myworkdayjobs.com/Workday", "tier": 2},
    {"id": "servicenow", "name": "ServiceNow", "careers_url": "https://careers.servicenow.com/", "tier": 2},
    {"id": "snowflake", "name": "Snowflake", "careers_url": "https://careers.snowflake.com/", "tier": 2},
]`}
        />

        <h2>Table: jobs</h2>

        <p>Stores all discovered job postings with extracted fields and scoring data.</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Column</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Constraints</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">id</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">PRIMARY KEY</td>
                <td className="px-4 py-3 text-muted-foreground">UUID</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">company_id</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">FOREIGN KEY</td>
                <td className="px-4 py-3 text-muted-foreground">References companies.id</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">title</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NOT NULL</td>
                <td className="px-4 py-3 text-muted-foreground">Job title</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">primary_function</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">
                  TPM, PM, Platform, SRE, AI-ML, Other
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">url</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">UNIQUE, NOT NULL</td>
                <td className="px-4 py-3 text-muted-foreground">Direct link to job posting</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">yoe_min</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">Minimum years of experience</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">yoe_max</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">Maximum years of experience</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">yoe_source</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">
                  extracted (from JD) or inferred (by LLM)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">salary_min</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">Minimum salary in USD</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">salary_max</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">Maximum salary in USD</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">salary_source</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">jd (extracted) or ai (estimated)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">salary_confidence</td>
                <td className="px-4 py-3">REAL</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">
                  0.0-1.0, must be &gt;0.60 to display
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">salary_estimated</td>
                <td className="px-4 py-3">BOOLEAN</td>
                <td className="px-4 py-3">DEFAULT FALSE</td>
                <td className="px-4 py-3 text-muted-foreground">
                  True if salary was AI-estimated
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">work_mode</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">remote, hybrid, onsite</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">location</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">City, State or Remote</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">match_score</td>
                <td className="px-4 py-3">REAL</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">
                  0.0-1.0 relevance score
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">raw_description</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">Full job description text</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">status</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">DEFAULT &apos;new&apos;</td>
                <td className="px-4 py-3 text-muted-foreground">
                  new, bookmarked, applied, hidden
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">first_seen</td>
                <td className="px-4 py-3">DATETIME</td>
                <td className="px-4 py-3">DEFAULT NOW</td>
                <td className="px-4 py-3 text-muted-foreground">First discovery timestamp</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">last_seen</td>
                <td className="px-4 py-3">DATETIME</td>
                <td className="px-4 py-3">DEFAULT NOW</td>
                <td className="px-4 py-3 text-muted-foreground">Last seen in a scan</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">notified</td>
                <td className="px-4 py-3">BOOLEAN</td>
                <td className="px-4 py-3">DEFAULT FALSE</td>
                <td className="px-4 py-3 text-muted-foreground">Slack notification sent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Indexes</h3>

        <CopyableCodeBlock
          language="sql"
          code={`-- Primary lookup patterns
CREATE INDEX idx_jobs_company ON jobs(company_id);
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_score ON jobs(match_score DESC);
CREATE INDEX idx_jobs_first_seen ON jobs(first_seen DESC);

-- Composite for filtered queries
CREATE INDEX idx_jobs_status_score ON jobs(status, match_score DESC);`}
        />

        <h2>Table: scan_logs</h2>

        <p>Audit trail for all scan executions with success/error counts.</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Column</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Constraints</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">id</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">PRIMARY KEY</td>
                <td className="px-4 py-3 text-muted-foreground">UUID</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">started_at</td>
                <td className="px-4 py-3">DATETIME</td>
                <td className="px-4 py-3">NOT NULL</td>
                <td className="px-4 py-3 text-muted-foreground">Scan start timestamp</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">completed_at</td>
                <td className="px-4 py-3">DATETIME</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Scan completion (null if running)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">companies_scanned</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NOT NULL</td>
                <td className="px-4 py-3 text-muted-foreground">Count of companies processed</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">jobs_found</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NOT NULL</td>
                <td className="px-4 py-3 text-muted-foreground">Total jobs found</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">jobs_new</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NOT NULL</td>
                <td className="px-4 py-3 text-muted-foreground">New jobs added this scan</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">errors</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">JSON array of error messages</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Table: scan_state</h2>

        <p>
          Singleton table tracking the current scan status. Used by the UI to display real-time
          scan progress. Unlike scan_logs which stores history, this table maintains only the
          current/latest scan state.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Column</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Constraints</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">id</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">PRIMARY KEY</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Singleton key: &quot;current&quot;
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">status</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NOT NULL, DEFAULT &apos;idle&apos;</td>
                <td className="px-4 py-3 text-muted-foreground">
                  idle, scanning, completed, cancelled
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">started_at</td>
                <td className="px-4 py-3">DATETIME</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">When current scan started</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">completed_at</td>
                <td className="px-4 py-3">DATETIME</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">When current scan finished</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">companies_scanned</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">Companies processed so far</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">jobs_found</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">Total jobs found so far</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">jobs_new</td>
                <td className="px-4 py-3">INTEGER</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">New jobs added so far</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">errors</td>
                <td className="px-4 py-3">TEXT</td>
                <td className="px-4 py-3">NULLABLE</td>
                <td className="px-4 py-3 text-muted-foreground">JSON array of errors encountered</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>SQLAlchemy Models</h2>

        <CopyableCodeBlock
          language="python"
          title="api/models.py"
          code={`from datetime import datetime
from sqlalchemy import Boolean, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


class Base(DeclarativeBase):
    pass


class Company(Base):
    __tablename__ = "companies"

    id: Mapped[str] = mapped_column(String(50), primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    careers_url: Mapped[str] = mapped_column(String(500), nullable=False)
    tier: Mapped[int] = mapped_column(Integer, default=2)
    enabled: Mapped[bool] = mapped_column(Boolean, default=True)
    last_scraped: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    scrape_status: Mapped[str | None] = mapped_column(String(20), nullable=True)

    jobs: Mapped[list["Job"]] = relationship(back_populates="company")


class Job(Base):
    __tablename__ = "jobs"

    id: Mapped[str] = mapped_column(String(36), primary_key=True)
    company_id: Mapped[str] = mapped_column(ForeignKey("companies.id"), nullable=False)
    title: Mapped[str] = mapped_column(String(500), nullable=False)
    primary_function: Mapped[str | None] = mapped_column(String(20), nullable=True)
    url: Mapped[str] = mapped_column(String(1000), unique=True, nullable=False)
    yoe_min: Mapped[int | None] = mapped_column(Integer, nullable=True)
    yoe_max: Mapped[int | None] = mapped_column(Integer, nullable=True)
    yoe_source: Mapped[str | None] = mapped_column(String(20), nullable=True)
    salary_min: Mapped[int | None] = mapped_column(Integer, nullable=True)
    salary_max: Mapped[int | None] = mapped_column(Integer, nullable=True)
    salary_source: Mapped[str | None] = mapped_column(String(10), nullable=True)
    salary_confidence: Mapped[float | None] = mapped_column(Float, nullable=True)
    salary_estimated: Mapped[bool] = mapped_column(Boolean, default=False)
    work_mode: Mapped[str | None] = mapped_column(String(20), nullable=True)
    location: Mapped[str | None] = mapped_column(String(200), nullable=True)
    match_score: Mapped[float | None] = mapped_column(Float, nullable=True)
    raw_description: Mapped[str | None] = mapped_column(Text, nullable=True)
    status: Mapped[str] = mapped_column(String(20), default="new")
    first_seen: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    last_seen: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    notified: Mapped[bool] = mapped_column(Boolean, default=False)

    company: Mapped["Company"] = relationship(back_populates="jobs")


class ScanLog(Base):
    __tablename__ = "scan_logs"

    id: Mapped[str] = mapped_column(String(36), primary_key=True)
    started_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    companies_scanned: Mapped[int | None] = mapped_column(Integer, nullable=True)
    jobs_found: Mapped[int | None] = mapped_column(Integer, nullable=True)
    jobs_new: Mapped[int | None] = mapped_column(Integer, nullable=True)
    errors: Mapped[str | None] = mapped_column(Text, nullable=True)  # JSON


class ScanState(Base):
    __tablename__ = "scan_state"

    id: Mapped[str] = mapped_column(String, primary_key=True)  # "current"
    status: Mapped[str] = mapped_column(String, nullable=False, default="idle")
    started_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    companies_scanned: Mapped[int | None] = mapped_column(Integer, nullable=True)
    jobs_found: Mapped[int | None] = mapped_column(Integer, nullable=True)
    jobs_new: Mapped[int | None] = mapped_column(Integer, nullable=True)
    errors: Mapped[str | None] = mapped_column(Text, nullable=True)  # JSON`}
        />

        <h2>Deduplication Strategy</h2>

        <p>
          Jobs are deduplicated by URL only. The <code>url</code> column has a UNIQUE constraint.
          When a scan finds an existing URL:
        </p>

        <ul>
          <li>Update <code>last_seen</code> timestamp</li>
          <li>Preserve <code>first_seen</code>, <code>status</code>, and <code>notified</code></li>
          <li>Do not re-trigger Slack notification</li>
        </ul>

        <p>
          This simple approach avoids false positives from title variations (e.g., &quot;Principal
          TPM&quot; vs &quot;Principal Technical Program Manager&quot;).
        </p>
      </article>
    </AurosDocsLayout>
  );
}
