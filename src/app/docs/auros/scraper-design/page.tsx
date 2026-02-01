import { AurosDocsLayout } from "@/components/AurosDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "Scraper Design | Auros",
  description: "Playwright-based career page scraping architecture for Auros job search tracker",
};

export default function ScraperDesignPage() {
  return (
    <AurosDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Scraper Design</h1>

        <p className="lead">
          Auros uses Playwright for headless browser automation to scrape career pages from target
          companies. This design prioritizes reliability, rate limiting, and graceful error handling.
        </p>

        <hr />

        <h2>Scraper Architecture</h2>

        <p>
          The scraper operates as an async service that processes companies sequentially with
          configurable delays between requests.
        </p>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph Trigger["Trigger Layer"]
        SCHED[APScheduler]
        API[Manual API Call]
    end

    subgraph Orchestrator["Scraper Orchestrator"]
        QUEUE[Company Queue]
        RATE[Rate Limiter]
        RETRY[Retry Handler]
    end

    subgraph Browser["Playwright Browser"]
        CONTEXT[Browser Context]
        PAGE[Page Instance]
        WAIT[Smart Wait]
    end

    subgraph Parser["Content Parser"]
        DETECT[Page Type Detector]
        EXTRACT[Job Extractor]
        CLEAN[Data Cleaner]
    end

    subgraph Output["Output"]
        LLM[LLM Pipeline]
        DB[(SQLite)]
        LOG[Scan Log]
    end

    SCHED --> QUEUE
    API --> QUEUE
    QUEUE --> RATE
    RATE --> CONTEXT
    CONTEXT --> PAGE
    PAGE --> WAIT
    WAIT --> DETECT
    DETECT --> EXTRACT
    EXTRACT --> CLEAN
    CLEAN --> LLM
    LLM --> DB
    RETRY --> RATE
    PAGE -.->|Error| RETRY
    QUEUE --> LOG`}
        />

        <h2>Core Components</h2>

        <h3>1. Rate Limiter</h3>

        <p>
          Configurable delays between requests prevent IP blocking and respect server resources.
        </p>

        <CopyableCodeBlock
          language="python"
          title="services/scraper.py - Rate Limiter"
          code={`import asyncio
import random
from config import settings

class RateLimiter:
    """Enforces delays between scraping requests."""

    def __init__(
        self,
        min_delay: float = None,
        max_delay: float = None
    ):
        self.min_delay = min_delay or settings.SCRAPE_DELAY_MIN
        self.max_delay = max_delay or settings.SCRAPE_DELAY_MAX
        self.last_request_time = 0

    async def wait(self) -> float:
        """Wait for a random delay within configured bounds."""
        delay = random.uniform(self.min_delay, self.max_delay)
        elapsed = asyncio.get_event_loop().time() - self.last_request_time

        if elapsed < delay:
            await asyncio.sleep(delay - elapsed)

        self.last_request_time = asyncio.get_event_loop().time()
        return delay`}
        />

        <h3>2. Browser Manager</h3>

        <p>
          Manages Playwright browser lifecycle with context isolation per company.
        </p>

        <CopyableCodeBlock
          language="python"
          title="services/scraper.py - Browser Manager"
          code={`from playwright.async_api import async_playwright, Browser, BrowserContext
from contextlib import asynccontextmanager

class BrowserManager:
    """Manages Playwright browser instances."""

    def __init__(self):
        self.browser: Browser | None = None
        self.playwright = None

    async def start(self):
        """Initialize Playwright and launch browser."""
        self.playwright = await async_playwright().start()
        self.browser = await self.playwright.chromium.launch(
            headless=True,
            args=[
                "--disable-blink-features=AutomationControlled",
                "--disable-dev-shm-usage",
                "--no-sandbox",
            ]
        )

    async def stop(self):
        """Clean up browser resources."""
        if self.browser:
            await self.browser.close()
        if self.playwright:
            await self.playwright.stop()

    @asynccontextmanager
    async def new_context(self):
        """Create isolated browser context for a scraping session."""
        context = await self.browser.new_context(
            viewport={"width": 1920, "height": 1080},
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/120.0.0.0 Safari/537.36"
            ),
            java_script_enabled=True,
        )
        try:
            yield context
        finally:
            await context.close()`}
        />

        <h3>3. Page Scraper</h3>

        <p>
          Handles individual page navigation with smart waiting and content extraction.
        </p>

        <CopyableCodeBlock
          language="python"
          title="services/scraper.py - Page Scraper"
          code={`from playwright.async_api import Page, TimeoutError as PlaywrightTimeout
from dataclasses import dataclass
from typing import Optional
import logging

logger = logging.getLogger(__name__)

@dataclass
class ScrapedJob:
    """Raw job data extracted from career page."""
    title: str
    url: str
    company_id: str
    raw_description: str
    location: Optional[str] = None

class PageScraper:
    """Scrapes job listings from a single career page."""

    # Common selectors for job listings across career sites
    JOB_SELECTORS = [
        '[data-testid="job-listing"]',
        '.job-listing',
        '.careers-job',
        '.position-card',
        'article[class*="job"]',
        'div[class*="opening"]',
        'li[class*="position"]',
    ]

    TITLE_SELECTORS = [
        'h2', 'h3', 'h4',
        '[class*="title"]',
        '[class*="name"]',
        'a[href*="job"]',
        'a[href*="career"]',
    ]

    async def scrape_career_page(
        self,
        page: Page,
        company_id: str,
        careers_url: str,
        timeout: int = 30000
    ) -> list[ScrapedJob]:
        """
        Navigate to careers page and extract job listings.

        Args:
            page: Playwright page instance
            company_id: Company identifier
            careers_url: URL of the careers page
            timeout: Page load timeout in milliseconds

        Returns:
            List of scraped job data
        """
        jobs = []

        try:
            # Navigate with page load wait (not networkidle - modern SPAs never idle)
            await page.goto(
                careers_url,
                wait_until="load",
                timeout=60000
            )

            # Wait for JS to render dynamic content
            await asyncio.sleep(3)

            # Try each selector pattern
            for selector in self.JOB_SELECTORS:
                elements = await page.query_selector_all(selector)
                if elements:
                    logger.info(
                        f"Found {len(elements)} jobs using selector: {selector}"
                    )
                    break
            else:
                # Fallback: look for any links containing job-related keywords
                elements = await page.query_selector_all(
                    'a[href*="job"], a[href*="position"], a[href*="career"]'
                )

            # Extract job data from each element
            for element in elements:
                job = await self._extract_job_data(
                    element, page, company_id
                )
                if job:
                    jobs.append(job)

        except PlaywrightTimeout:
            logger.warning(f"Timeout loading {careers_url}")
        except Exception as e:
            logger.error(f"Error scraping {careers_url}: {e}")

        return jobs

    async def _extract_job_data(
        self,
        element,
        page: Page,
        company_id: str
    ) -> Optional[ScrapedJob]:
        """Extract job data from a listing element."""
        try:
            # Find title
            title = None
            for selector in self.TITLE_SELECTORS:
                title_el = await element.query_selector(selector)
                if title_el:
                    title = await title_el.inner_text()
                    break

            if not title:
                return None

            # Find URL
            link = await element.query_selector('a')
            href = await link.get_attribute('href') if link else None

            if not href:
                return None

            # Make URL absolute
            if href.startswith('/'):
                base_url = page.url.split('/')[0:3]
                href = '/'.join(base_url) + href

            # Get description (may need to click through)
            description = await element.inner_text()

            # Find location if visible
            location = None
            loc_el = await element.query_selector(
                '[class*="location"], [class*="city"]'
            )
            if loc_el:
                location = await loc_el.inner_text()

            return ScrapedJob(
                title=title.strip(),
                url=href,
                company_id=company_id,
                raw_description=description.strip(),
                location=location.strip() if location else None
            )

        except Exception as e:
            logger.debug(f"Failed to extract job: {e}")
            return None`}
        />

        <h2>Scraping Flow</h2>

        <MermaidDiagram
          chart={`sequenceDiagram
    participant S as Scheduler
    participant O as Orchestrator
    participant R as RateLimiter
    participant B as Browser
    participant P as Page
    participant D as Database

    S->>O: trigger_scan()
    O->>O: Load enabled companies

    loop For each company
        O->>R: wait()
        R-->>O: delay completed
        O->>B: new_context()
        B->>P: new_page()
        P->>P: goto(careers_url, wait_until=load)
        P->>P: sleep(3) for JS rendering
        P->>P: query_selector_all(jobs)

        loop For each job
            P->>P: extract_job_data()
            P-->>O: ScrapedJob
        end

        O->>D: check_existing(url)

        alt New job
            O->>D: insert_job()
        else Existing job
            O->>D: update_last_seen()
        end

        B->>B: close_context()
    end

    O->>D: create_scan_log()
    O-->>S: ScanResult`}
        />

        <h2>Company-Specific Strategies</h2>

        <p>
          Different career sites require different scraping strategies. The scraper uses a
          registry pattern to apply company-specific logic.
        </p>

        <CopyableCodeBlock
          language="python"
          title="services/scraper.py - Strategy Registry"
          code={`from typing import Protocol, Dict, Type
from abc import abstractmethod

class ScraperStrategy(Protocol):
    """Protocol for company-specific scraping strategies."""

    @abstractmethod
    async def scrape(self, page: Page) -> list[ScrapedJob]:
        """Scrape jobs from the career page."""
        ...

class GreenhouseStrategy:
    """Strategy for Greenhouse-powered career pages."""

    async def scrape(self, page: Page) -> list[ScrapedJob]:
        # Greenhouse uses consistent selectors
        await page.wait_for_selector('.opening')
        elements = await page.query_selector_all('.opening')

        jobs = []
        for el in elements:
            title = await el.query_selector('a')
            location = await el.query_selector('.location')

            if title:
                jobs.append(ScrapedJob(
                    title=await title.inner_text(),
                    url=await title.get_attribute('href'),
                    raw_description=await el.inner_text(),
                    location=await location.inner_text() if location else None
                ))
        return jobs

class LeverStrategy:
    """Strategy for Lever-powered career pages."""

    async def scrape(self, page: Page) -> list[ScrapedJob]:
        await page.wait_for_selector('.posting')
        elements = await page.query_selector_all('.posting')

        jobs = []
        for el in elements:
            title = await el.query_selector('.posting-title h5')
            location = await el.query_selector('.posting-categories .location')
            link = await el.query_selector('a.posting-title')

            if title and link:
                jobs.append(ScrapedJob(
                    title=await title.inner_text(),
                    url=await link.get_attribute('href'),
                    raw_description=await el.inner_text(),
                    location=await location.inner_text() if location else None
                ))
        return jobs

class WorkdayStrategy:
    """Strategy for Workday-powered career pages."""

    async def scrape(self, page: Page) -> list[ScrapedJob]:
        # Workday has heavy JS rendering
        await page.wait_for_selector('[data-automation-id="jobTitle"]')
        elements = await page.query_selector_all(
            '[data-automation-id="job-posting-item"]'
        )

        jobs = []
        for el in elements:
            title = await el.query_selector('[data-automation-id="jobTitle"]')
            location = await el.query_selector('[data-automation-id="location"]')
            link = await el.query_selector('a')

            if title and link:
                jobs.append(ScrapedJob(
                    title=await title.inner_text(),
                    url=await link.get_attribute('href'),
                    raw_description=await el.inner_text(),
                    location=await location.inner_text() if location else None
                ))
        return jobs

# Strategy registry
STRATEGY_REGISTRY: Dict[str, Type[ScraperStrategy]] = {
    "greenhouse": GreenhouseStrategy,
    "lever": LeverStrategy,
    "workday": WorkdayStrategy,
}`}
        />

        <h2>Error Handling</h2>

        <MermaidDiagram
          chart={`flowchart TD
    START[Start Scrape] --> NAV[Navigate to URL]
    NAV --> CHECK{Page Loaded?}

    CHECK -->|Yes| WAIT[Wait for Content]
    CHECK -->|Timeout| RETRY{Retries Left?}

    RETRY -->|Yes| DELAY[Exponential Backoff]
    DELAY --> NAV
    RETRY -->|No| LOG_FAIL[Log Failure]

    WAIT --> CONTENT{Content Found?}
    CONTENT -->|Yes| EXTRACT[Extract Jobs]
    CONTENT -->|No| FALLBACK[Try Fallback Selectors]

    FALLBACK --> FOUND{Jobs Found?}
    FOUND -->|Yes| EXTRACT
    FOUND -->|No| LOG_EMPTY[Log Empty Result]

    EXTRACT --> VALIDATE{Valid Data?}
    VALIDATE -->|Yes| SAVE[Save to Pipeline]
    VALIDATE -->|No| SKIP[Skip Invalid]

    LOG_FAIL --> END[End]
    LOG_EMPTY --> END
    SAVE --> END
    SKIP --> EXTRACT`}
        />

        <CopyableCodeBlock
          language="python"
          title="services/scraper.py - Retry Handler"
          code={`import asyncio
from dataclasses import dataclass
from typing import Callable, TypeVar
from functools import wraps

T = TypeVar('T')

@dataclass
class RetryConfig:
    """Configuration for retry behavior."""
    max_retries: int = 3
    base_delay: float = 1.0
    max_delay: float = 30.0
    exponential_base: float = 2.0

class RetryHandler:
    """Handles retries with exponential backoff."""

    def __init__(self, config: RetryConfig = None):
        self.config = config or RetryConfig()

    def calculate_delay(self, attempt: int) -> float:
        """Calculate delay for given attempt number."""
        delay = self.config.base_delay * (
            self.config.exponential_base ** attempt
        )
        return min(delay, self.config.max_delay)

    async def execute(
        self,
        func: Callable[..., T],
        *args,
        **kwargs
    ) -> T:
        """Execute function with retry logic."""
        last_error = None

        for attempt in range(self.config.max_retries + 1):
            try:
                return await func(*args, **kwargs)
            except Exception as e:
                last_error = e

                if attempt < self.config.max_retries:
                    delay = self.calculate_delay(attempt)
                    logger.warning(
                        f"Attempt {attempt + 1} failed: {e}. "
                        f"Retrying in {delay:.1f}s"
                    )
                    await asyncio.sleep(delay)

        raise last_error

def with_retry(config: RetryConfig = None):
    """Decorator for automatic retry on failure."""
    handler = RetryHandler(config)

    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            return await handler.execute(func, *args, **kwargs)
        return wrapper

    return decorator`}
        />

        <h2>Deduplication</h2>

        <p>
          Jobs are deduplicated by URL only. The scraper checks existing URLs before inserting
          new jobs and updates <code>last_seen</code> for existing entries.
        </p>

        <CopyableCodeBlock
          language="python"
          title="services/scraper.py - Deduplication"
          code={`from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from models import Job
from datetime import datetime

class JobDeduplicator:
    """Handles job deduplication by URL."""

    async def process_jobs(
        self,
        session: AsyncSession,
        scraped_jobs: list[ScrapedJob]
    ) -> tuple[list[ScrapedJob], int]:
        """
        Filter out existing jobs and update last_seen.

        Returns:
            Tuple of (new_jobs, updated_count)
        """
        new_jobs = []
        updated_count = 0

        for scraped in scraped_jobs:
            # Check if URL exists
            result = await session.execute(
                select(Job).where(Job.url == scraped.url)
            )
            existing = result.scalar_one_or_none()

            if existing:
                # Update last_seen timestamp
                existing.last_seen = datetime.utcnow()
                updated_count += 1
            else:
                # New job - add to list for LLM processing
                new_jobs.append(scraped)

        await session.commit()
        return new_jobs, updated_count`}
        />

        <h2>Scan Orchestrator</h2>

        <p>
          The orchestrator coordinates the entire scan process, managing browser lifecycle,
          rate limiting, and logging.
        </p>

        <CopyableCodeBlock
          language="python"
          title="services/scraper.py - Scan Orchestrator"
          code={`from dataclasses import dataclass
from datetime import datetime
from typing import Optional
import uuid

@dataclass
class ScanResult:
    """Result of a complete scan operation."""
    scan_id: str
    started_at: datetime
    completed_at: Optional[datetime]
    companies_scanned: int
    jobs_found: int
    jobs_new: int
    errors: list[str]

class ScanOrchestrator:
    """Coordinates the complete scanning process."""

    def __init__(
        self,
        browser_manager: BrowserManager,
        rate_limiter: RateLimiter,
        page_scraper: PageScraper,
        deduplicator: JobDeduplicator,
        llm_pipeline,  # LLM processing service
        session_factory,  # Database session factory
    ):
        self.browser = browser_manager
        self.rate_limiter = rate_limiter
        self.scraper = page_scraper
        self.deduplicator = deduplicator
        self.llm = llm_pipeline
        self.session_factory = session_factory
        self._current_scan: Optional[ScanResult] = None

    @property
    def is_running(self) -> bool:
        """Check if a scan is currently in progress."""
        return (
            self._current_scan is not None
            and self._current_scan.completed_at is None
        )

    async def run_scan(self) -> ScanResult:
        """Execute a full scan of all enabled companies."""
        if self.is_running:
            raise RuntimeError("Scan already in progress")

        scan = ScanResult(
            scan_id=str(uuid.uuid4()),
            started_at=datetime.utcnow(),
            completed_at=None,
            companies_scanned=0,
            jobs_found=0,
            jobs_new=0,
            errors=[]
        )
        self._current_scan = scan

        try:
            await self.browser.start()

            async with self.session_factory() as session:
                # Get enabled companies
                companies = await self._get_enabled_companies(session)

                for company in companies:
                    try:
                        # Rate limit
                        await self.rate_limiter.wait()

                        # Scrape company
                        async with self.browser.new_context() as context:
                            page = await context.new_page()
                            scraped = await self.scraper.scrape_career_page(
                                page=page,
                                company_id=company.id,
                                careers_url=company.careers_url
                            )

                        scan.jobs_found += len(scraped)

                        # Deduplicate
                        new_jobs, _ = await self.deduplicator.process_jobs(
                            session, scraped
                        )

                        # Process new jobs through LLM
                        for job in new_jobs:
                            await self.llm.process_job(session, job)

                        scan.jobs_new += len(new_jobs)
                        scan.companies_scanned += 1

                        # Update company last_scraped
                        company.last_scraped = datetime.utcnow()
                        await session.commit()

                    except Exception as e:
                        scan.errors.append(f"{company.name}: {str(e)}")
                        logger.error(f"Error scanning {company.name}: {e}")

                # Log scan result
                await self._save_scan_log(session, scan)

        finally:
            await self.browser.stop()
            scan.completed_at = datetime.utcnow()

        self._current_scan = None
        return scan

    async def _get_enabled_companies(self, session):
        """Fetch all enabled companies."""
        result = await session.execute(
            select(Company).where(Company.enabled == True)
        )
        return result.scalars().all()

    async def _save_scan_log(self, session, scan: ScanResult):
        """Persist scan log to database."""
        import json
        log = ScanLog(
            id=scan.scan_id,
            started_at=scan.started_at,
            completed_at=scan.completed_at,
            companies_scanned=scan.companies_scanned,
            jobs_found=scan.jobs_found,
            jobs_new=scan.jobs_new,
            errors=json.dumps(scan.errors)
        )
        session.add(log)
        await session.commit()`}
        />

        <h2>Configuration</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Setting</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">SCRAPE_DELAY_MIN</td>
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3 text-muted-foreground">Minimum seconds between requests</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">SCRAPE_DELAY_MAX</td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3 text-muted-foreground">Maximum seconds between requests</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">PAGE_TIMEOUT</td>
                <td className="px-4 py-3">30000</td>
                <td className="px-4 py-3 text-muted-foreground">Page load timeout in milliseconds</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">MAX_RETRIES</td>
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3 text-muted-foreground">Maximum retry attempts per page</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">HEADLESS</td>
                <td className="px-4 py-3">true</td>
                <td className="px-4 py-3 text-muted-foreground">Run browser in headless mode</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Anti-Detection Measures</h2>

        <p>
          The scraper implements several measures to avoid detection and blocking:
        </p>

        <ul>
          <li>
            <strong>Realistic User-Agent:</strong> Uses a current Chrome user-agent string
          </li>
          <li>
            <strong>Random Delays:</strong> Variable wait times between requests
          </li>
          <li>
            <strong>Context Isolation:</strong> Fresh browser context per company
          </li>
          <li>
            <strong>Automation Flags:</strong> Disables automation detection features
          </li>
          <li>
            <strong>Page Load + Delay:</strong> Uses <code>wait_until=load</code> plus 3s sleep for JS
            rendering (modern SPAs never reach network idle)
          </li>
        </ul>

        <h2>Monitoring</h2>

        <p>
          Scan results are logged to the <code>scan_logs</code> table for observability.
          Key metrics tracked:
        </p>

        <ul>
          <li>Companies scanned per run</li>
          <li>Total jobs found vs new jobs</li>
          <li>Error count and messages</li>
          <li>Scan duration</li>
        </ul>

        <p>
          The <code>/search/status</code> endpoint exposes current scan status for
          the dashboard.
        </p>
      </article>
    </AurosDocsLayout>
  );
}
