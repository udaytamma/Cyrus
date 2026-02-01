import { AurosDocsLayout } from "@/components/AurosDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Architecture | Auros",
  description: "System architecture and design diagrams for Auros job search tracker",
};

export default function ArchitecturePage() {
  return (
    <AurosDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Architecture</h1>

        <p className="lead">
          Auros follows a modular architecture with clear separation between scraping, AI
          processing, persistence, and presentation layers. All components run locally with no
          external cloud dependencies except Slack notifications.
        </p>

        <hr />

        <h2>System Overview</h2>

        <p>
          The system consists of four main layers: triggers (scheduler + manual), scraping
          (Playwright), AI processing (Ollama), and output (SQLite + React + Slack).
        </p>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph Triggers["Trigger Layer"]
        SCHED["APScheduler<br/>CronTrigger"]
        MANUAL["Manual Trigger<br/>API Endpoint"]
    end

    subgraph Scraper["Scraping Layer"]
        PW["Playwright<br/>Headless Browser"]
        RATE["Rate Limiter<br/>5-10s random delay"]
        COMPANIES["Company Registry<br/>10 MVP companies"]
    end

    subgraph AI["AI Processing Layer"]
        OLLAMA["Ollama Server<br/>localhost:11434"]
        QWEN["Qwen 2.5 Coder<br/>7B parameters"]
        EXTRACT["Extraction Pipeline"]
        SALARY["Salary Estimator"]
        SCORER["Match Scorer"]
    end

    subgraph Storage["Persistence Layer"]
        SQLITE["SQLite Database<br/>async SQLAlchemy"]
        JOBS["jobs table"]
        LOGS["scan_logs table"]
        COMP["companies table"]
    end

    subgraph Output["Output Layer"]
        SLACK["Slack Webhook"]
        REACT["React Dashboard<br/>Vite + TypeScript"]
        API["FastAPI<br/>REST Endpoints"]
    end

    SCHED --> PW
    MANUAL --> API
    API --> PW
    COMPANIES --> PW
    PW --> RATE
    RATE --> |HTML| EXTRACT
    EXTRACT --> OLLAMA
    OLLAMA --> QWEN
    QWEN --> |JSON| SALARY
    SALARY --> SCORER
    SCORER --> SQLITE
    SQLITE --> JOBS
    SQLITE --> LOGS
    SQLITE --> COMP
    SQLITE --> |score >= 0.70| SLACK
    SQLITE --> REACT
    API --> SQLITE

    style SCHED fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style MANUAL fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style OLLAMA fill:#fef3c7,stroke:#d97706,stroke-width:2px
    style QWEN fill:#fef3c7,stroke:#d97706,stroke-width:2px
    style SQLITE fill:#d1fae5,stroke:#059669,stroke-width:2px
    style SLACK fill:#fee2e2,stroke:#dc2626,stroke-width:2px
    style REACT fill:#dbeafe,stroke:#2563eb,stroke-width:2px`}
        />

        <h2>Data Flow Pipeline</h2>

        <p>
          Each scan follows a sequential pipeline: trigger → scrape → extract → score → persist →
          notify. The pipeline processes jobs immediately (not batched) for real-time results.
        </p>

        <MermaidDiagram
          chart={`sequenceDiagram
    participant T as Trigger
    participant S as Scraper
    participant O as Ollama
    participant D as Database
    participant N as Slack

    T->>S: Start scan
    loop For each company
        S->>S: Load careers page
        S->>S: Wait 5-10s (rate limit)
        S->>S: Extract job listings
        loop For each job
            S->>O: Send job description
            O->>O: Extract fields (title, YOE, salary, mode)
            O->>O: Calculate match score
            O-->>S: Return structured JSON
            S->>D: Check URL exists (dedupe)
            alt New job
                S->>D: Insert job record
                alt score >= 0.70
                    D->>N: Send Slack notification
                end
            else Existing job
                S->>D: Update last_seen timestamp
            end
        end
    end
    S->>D: Write scan_log record
    S-->>T: Scan complete`}
        />

        <h2>Component Architecture</h2>

        <h3>Backend (FastAPI)</h3>

        <p>
          The backend is organized into routers (API endpoints), services (business logic), and
          models (data structures). The FastAPI lifespan manages scheduler startup and shutdown.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
    subgraph API["FastAPI Application"]
        MAIN["main.py<br/>Lifespan + CORS"]

        subgraph Routers
            RJOBS["jobs.py<br/>CRUD + filters"]
            RSEARCH["search.py<br/>trigger + status"]
            RCOMP["companies.py<br/>list + toggle"]
            REXPORT["export.py<br/>CSV download"]
        end

        subgraph Services
            SCRAPER["scraper.py<br/>Playwright"]
            LLM["llm.py<br/>Ollama client"]
            SCORER["scorer.py<br/>match scoring"]
            SALARY["salary.py<br/>extraction + estimation"]
            SSLACK["slack.py<br/>webhook client"]
        end

        subgraph Data
            CONFIG["config.py<br/>Pydantic Settings"]
            MODELS["models.py<br/>SQLAlchemy ORM"]
            SCHEMAS["schemas.py<br/>Request/Response"]
            DB["db.py<br/>Session factory"]
        end
    end

    MAIN --> Routers
    Routers --> Services
    Services --> Data

    style MAIN fill:#e0e7ff,stroke:#6366f1
    style SCRAPER fill:#fef3c7,stroke:#d97706
    style LLM fill:#fef3c7,stroke:#d97706
    style CONFIG fill:#d1fae5,stroke:#059669`}
        />

        <h3>Frontend (React + Vite)</h3>

        <p>
          The React dashboard is a single-page application with a job table, filter controls, charts,
          and status management. Uses standard hooks for data fetching and state.
        </p>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph Dashboard["Dashboard Page"]
        HEADER["Header<br/>Last scan + Trigger button"]
        STATS["Stats Row<br/>Total, New, Bookmarked, Applied"]
        CHARTS["Charts Row<br/>By company, Score histogram, Daily trend"]
        FILTERS["Filter Bar<br/>Company, Score, Status, Mode"]
        TABLE["Job Table<br/>Sortable columns"]
    end

    subgraph Components
        JOBROW["JobRow<br/>Single job entry"]
        BADGE["StatusBadge<br/>Status indicator"]
        SALCELL["SalaryCell<br/>Value + source tooltip"]
        ACTIONS["ActionButtons<br/>Bookmark, Apply, Hide"]
    end

    subgraph Hooks
        USEJOBS["useJobs<br/>Fetch + filter jobs"]
        USESTATS["useStats<br/>Dashboard metrics"]
    end

    subgraph API["API Client"]
        CLIENT["client.ts<br/>Fetch wrapper"]
    end

    HEADER --> USESTATS
    STATS --> USESTATS
    CHARTS --> USEJOBS
    FILTERS --> USEJOBS
    TABLE --> USEJOBS
    TABLE --> JOBROW
    JOBROW --> BADGE
    JOBROW --> SALCELL
    JOBROW --> ACTIONS
    USEJOBS --> CLIENT
    USESTATS --> CLIENT

    style HEADER fill:#dbeafe,stroke:#2563eb
    style TABLE fill:#dbeafe,stroke:#2563eb
    style USEJOBS fill:#e0e7ff,stroke:#6366f1`}
        />

        <h2>Salary Confidence Flow</h2>

        <p>
          Salary data goes through a confidence-gated pipeline. JD extraction is trusted (confidence
          1.0), AI estimation requires confidence &gt; 0.60 to be displayed.
        </p>

        <MermaidDiagram
          chart={`flowchart TB
    START["Job Description<br/>Raw Text"] --> REGEX["Regex Parse<br/>$XXXk - $YYYk pattern"]

    REGEX --> |Found| JD_FOUND["salary_source: jd<br/>confidence: 1.0"]
    REGEX --> |Not Found| LLM["Ask Ollama<br/>Estimate salary range"]

    LLM --> RESPONSE["LLM Response<br/>salary + confidence"]

    RESPONSE --> CHECK{confidence > 0.60?}

    CHECK --> |Yes| AI_OK["salary_source: ai<br/>Show in UI"]
    CHECK --> |No| OMIT["salary: NULL<br/>Omit from display"]

    JD_FOUND --> SAVE["Save to jobs table"]
    AI_OK --> SAVE
    OMIT --> SAVE

    style START fill:#f3f4f6,stroke:#6b7280
    style JD_FOUND fill:#d1fae5,stroke:#059669
    style AI_OK fill:#fef3c7,stroke:#d97706
    style OMIT fill:#fee2e2,stroke:#dc2626
    style CHECK fill:#e0e7ff,stroke:#6366f1`}
        />

        <h2>Match Scoring Algorithm</h2>

        <p>
          Jobs are scored 0.0-1.0 based on five weighted factors. The algorithm prioritizes title
          match and AI/ML keywords for Principal TPM targeting.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
    subgraph Inputs["Extracted Fields"]
        TITLE["Job Title"]
        DESC["Description"]
        YOE["YOE Range"]
        COMP["Company Tier"]
        MODE["Work Mode"]
    end

    subgraph Scoring["Score Components"]
        S1["Title Match<br/>Weight: 0.30"]
        S2["AI/ML Keywords<br/>Weight: 0.25"]
        S3["YOE Fit<br/>Weight: 0.20"]
        S4["Company Tier<br/>Weight: 0.15"]
        S5["Work Mode<br/>Weight: 0.10"]
    end

    subgraph Output["Final Score"]
        TOTAL["Weighted Sum<br/>0.0 - 1.0"]
        THRESHOLD["Alert Threshold<br/>>= 0.70"]
    end

    TITLE --> S1
    DESC --> S2
    YOE --> S3
    COMP --> S4
    MODE --> S5

    S1 --> TOTAL
    S2 --> TOTAL
    S3 --> TOTAL
    S4 --> TOTAL
    S5 --> TOTAL
    TOTAL --> THRESHOLD

    style S1 fill:#dbeafe,stroke:#2563eb
    style S2 fill:#dbeafe,stroke:#2563eb
    style TOTAL fill:#d1fae5,stroke:#059669
    style THRESHOLD fill:#fef3c7,stroke:#d97706`}
        />

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Factor</th>
                <th className="px-4 py-3 text-left font-semibold">Weight</th>
                <th className="px-4 py-3 text-left font-semibold">Score Logic</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Title Match</td>
                <td className="px-4 py-3">0.30</td>
                <td className="px-4 py-3 text-muted-foreground">
                  1.0 for Principal TPM/PM, 0.8 for Senior TPM/PM, 0.5 for Staff, 0.3 for others
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">AI/ML Keywords</td>
                <td className="px-4 py-3">0.25</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Count of AI, ML, LLM, Platform, Infrastructure keywords / max expected
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">YOE Fit</td>
                <td className="px-4 py-3">0.20</td>
                <td className="px-4 py-3 text-muted-foreground">
                  1.0 if 8-15 years overlaps job range, decreasing for partial overlap
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Company Tier</td>
                <td className="px-4 py-3">0.15</td>
                <td className="px-4 py-3 text-muted-foreground">
                  1.0 for Tier 1 (Mag7), 0.8 for Tier 2 (Top 50), 0.6 for Tier 3
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Work Mode</td>
                <td className="px-4 py-3">0.10</td>
                <td className="px-4 py-3 text-muted-foreground">
                  1.0 for Remote, 0.8 for Hybrid, 0.5 for Onsite (configurable)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Scheduler Configuration</h2>

        <p>
          APScheduler runs within the FastAPI lifespan, triggering scans at configured times in
          Central Time. Manual triggers use the same scan function.
        </p>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph Scheduler["APScheduler"]
        CRON["CronTrigger<br/>hour=6,12,18<br/>timezone=America/Chicago"]
        JOB["scan_all_companies()"]
    end

    subgraph Lifespan["FastAPI Lifespan"]
        STARTUP["startup<br/>scheduler.start()"]
        RUNNING["App Running"]
        SHUTDOWN["shutdown<br/>scheduler.shutdown()"]
    end

    subgraph Manual["Manual Trigger"]
        ENDPOINT["POST /search/trigger"]
        ASYNC["asyncio.create_task()"]
    end

    STARTUP --> CRON
    CRON --> JOB
    RUNNING --> SHUTDOWN
    ENDPOINT --> ASYNC
    ASYNC --> JOB

    style CRON fill:#e0e7ff,stroke:#6366f1
    style STARTUP fill:#d1fae5,stroke:#059669
    style SHUTDOWN fill:#fee2e2,stroke:#dc2626
    style ENDPOINT fill:#dbeafe,stroke:#2563eb`}
        />

        <h2>Technology Stack</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Layer</th>
                <th className="px-4 py-3 text-left font-semibold">Technology</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">API Framework</td>
                <td className="px-4 py-3">FastAPI 0.115+</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Async REST API with automatic OpenAPI docs
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Database</td>
                <td className="px-4 py-3">SQLite + aiosqlite</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Local file-based, async driver for non-blocking I/O
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ORM</td>
                <td className="px-4 py-3">SQLAlchemy 2.0+</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Async SQLAlchemy with Mapped types
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Scraping</td>
                <td className="px-4 py-3">Playwright</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Headless Chromium for JS-rendered pages
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM Runtime</td>
                <td className="px-4 py-3">Ollama</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Local model serving, no API costs
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM Model</td>
                <td className="px-4 py-3">Qwen 2.5 Coder 7B</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Optimized for structured extraction
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Scheduler</td>
                <td className="px-4 py-3">APScheduler 3.10+</td>
                <td className="px-4 py-3 text-muted-foreground">
                  In-process cron-style scheduling
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Frontend</td>
                <td className="px-4 py-3">React 18 + Vite</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Fast dev server, TypeScript support
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Notifications</td>
                <td className="px-4 py-3">Slack Webhooks</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Simple HTTP POST, no SDK required
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Config</td>
                <td className="px-4 py-3">Pydantic Settings</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Type-safe .env loading with validation
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Directory Structure</h2>

        <pre className="overflow-x-auto rounded-lg bg-muted/50 p-4 text-sm">
          {`Auros/
├── api/                          # FastAPI backend
│   ├── main.py                   # App + lifespan
│   ├── config.py                 # Pydantic Settings
│   ├── db.py                     # Session factory
│   ├── models.py                 # SQLAlchemy ORM
│   ├── schemas.py                # Request/Response
│   ├── routers/
│   │   ├── jobs.py               # Job CRUD
│   │   ├── search.py             # Trigger + status
│   │   ├── companies.py          # Company management
│   │   └── export.py             # CSV export
│   ├── services/
│   │   ├── scraper.py            # Playwright scraper
│   │   ├── llm.py                # Ollama client
│   │   ├── scorer.py             # Match scoring
│   │   ├── salary.py             # Salary extraction
│   │   └── slack.py              # Webhook client
│   ├── scheduler/
│   │   └── jobs.py               # APScheduler config
│   └── data/
│       └── companies.py          # Default company list
├── ui/                           # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── api/
│   ├── package.json
│   └── vite.config.ts
├── data/
│   └── auros.db                  # SQLite database
├── tests/
├── requirements.txt
├── .env.example
└── README.md`}
        </pre>
      </article>
    </AurosDocsLayout>
  );
}
