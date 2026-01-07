import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Architecture | Email Assistant",
  description: "System architecture and design of the Email Assistant.",
};

export default function ArchitecturePage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Architecture</h1>

        <p className="lead">
          The Email Assistant follows a modular architecture with clear separation of concerns between core processing, web layer, and data storage.
        </p>

        <hr />

        <h2>System Overview</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────────────┐
│                           SYSTEM ARCHITECTURE                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   EXTERNAL SERVICES                                                          │
│   ┌─────────────────┐     ┌─────────────────┐                               │
│   │    Gmail API    │     │    Gemini AI    │                               │
│   └────────┬────────┘     └────────┬────────┘                               │
│            │                       │                                         │
│            ▼                       ▼                                         │
│   CORE LAYER ─────────────────────────────────────────────────────────      │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│   │ Email Utils │  │Gemini Utils │  │Cache Manager│  │Config Manager│       │
│   └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘       │
│          │                │                │                │               │
│          └────────────────┼────────────────┼────────────────┘               │
│                           │                │                                 │
│                           ▼                │                                 │
│   PROCESSING LAYER ────────────────────────┼──────────────────────────      │
│   ┌─────────────────────────────┐         │                                 │
│   │          main.py            │◀────────┘                                 │
│   └─────────────┬───────────────┘                                           │
│                 │                                                            │
│                 ▼                                                            │
│   ┌─────────────────────────────┐                                           │
│   │       Display Utils         │                                           │
│   └─────────────┬───────────────┘                                           │
│                 │                                                            │
│                 ▼                                                            │
│   WEB LAYER ────────────────────────────────────────────────────────────    │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                        │
│   │Flask Server │──│API Endpoints│──│  Templates  │                        │
│   └──────┬──────┘  └─────────────┘  └─────────────┘                        │
│          │                                                                   │
│          ▼                                                                   │
│   DATA LAYER ───────────────────────────────────────────────────────────    │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                        │
│   │   SQLite    │  │ JSON Cache  │  │  Log Files  │                        │
│   └─────────────┘  └─────────────┘  └─────────────┘                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Module Structure</h2>

        <h3>Core Layer</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`src/
├── main.py              # Entry point, orchestration
├── utils/
│   ├── email_utils.py   # Gmail API wrapper
│   ├── gemini_utils.py  # Gemini AI wrapper
│   ├── display_utils.py # Digest generation
│   ├── logger_utils.py  # Logging setup
│   └── metrics_utils.py # SQLite metrics
└── core/
    ├── config_manager.py # JSON configuration
    └── cache_manager.py  # LRU cache`}
        </pre>

        <h3>Web Layer</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`src/web/
├── server.py           # Flask application
├── templates/
│   ├── digest.html     # Main page
│   └── test_results.html
└── static/
    ├── style.css       # Styling
    ├── script.js       # Interactivity
    ├── test_style.css
    └── test_script.js`}
        </pre>

        <hr />

        <h2>Data Flow</h2>

        <h3>Email Processing</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────────────┐
│                         EMAIL PROCESSING SEQUENCE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  User          main.py        email_utils    gemini_utils    cache_manager  │
│   │               │               │               │               │         │
│   │──Run script──▶│               │               │               │         │
│   │               │               │               │               │         │
│   │               │──Fetch emails─▶               │               │         │
│   │               │               │               │               │         │
│   │               │◀──Email list──│               │               │         │
│   │               │               │               │               │         │
│   │               │         ┌─────┴─────┐         │               │         │
│   │               │         │ For each  │         │               │         │
│   │               │         │   email   │         │               │         │
│   │               │         └─────┬─────┘         │               │         │
│   │               │               │               │               │         │
│   │               │───────────────┼──Check cache─────────────────▶│         │
│   │               │               │               │               │         │
│   │               │               │     ┌─────────┴─────────┐     │         │
│   │               │               │     │ Cached?           │     │         │
│   │               │               │     │ Yes: Return       │     │         │
│   │               │               │     │ No: Call Gemini   │     │         │
│   │               │               │     └───────────────────┘     │         │
│   │               │               │               │               │         │
│   │               │◀─────────────────────Category─│               │         │
│   │               │               │               │               │         │
│   │               │──────────────Store in cache───────────────────▶         │
│   │               │               │               │               │         │
│   │               │──Generate digest──▶           │               │         │
│   │               │               │               │               │         │
│   │◀──Display────│               │               │               │         │
│   │               │               │               │               │         │
└─────────────────────────────────────────────────────────────────────────────┘`}
        </pre>

        <h3>Web Request</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────────────┐
│                           WEB REQUEST SEQUENCE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Browser        Flask Server        Data Layer        main.py               │
│   │                  │                   │               │                  │
│   │──GET /──────────▶│                   │               │                  │
│   │                  │──Load digest.json▶│               │                  │
│   │                  │◀───Digest data────│               │                  │
│   │◀──Render HTML───│                   │               │                  │
│   │                  │                   │               │                  │
│   │──POST /api/refresh▶                 │               │                  │
│   │                  │───────────────Execute─────────────▶                  │
│   │                  │◀──────────────Complete────────────│                  │
│   │◀───Success──────│                   │               │                  │
│   │                  │                   │               │                  │
│   │──GET /api/metrics▶                  │               │                  │
│   │                  │──Query SQLite────▶│               │                  │
│   │                  │◀────Metrics───────│               │                  │
│   │◀──JSON response─│                   │               │                  │
│   │                  │                   │               │                  │
└─────────────────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Component Details</h2>

        <h3>Email Utils</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# email_utils.py

class EmailClient:
    """Gmail API wrapper."""

    def __init__(self):
        self.service = self._authenticate()

    def _authenticate(self) -> Resource:
        """OAuth2 authentication."""
        creds = self._load_credentials()
        return build('gmail', 'v1', credentials=creds)

    def fetch_emails(self, query: str, max_count: int) -> list[dict]:
        """Fetch emails matching query."""
        results = self.service.users().messages().list(
            userId='me',
            q=query,
            maxResults=max_count,
        ).execute()

        return [self._get_details(m['id']) for m in results.get('messages', [])]

    def _get_details(self, message_id: str) -> dict:
        """Get full email details."""
        msg = self.service.users().messages().get(
            userId='me',
            id=message_id,
            format='full',
        ).execute()

        return {
            'id': message_id,
            'subject': self._get_header(msg, 'Subject'),
            'from': self._get_header(msg, 'From'),
            'date': self._get_header(msg, 'Date'),
            'snippet': msg.get('snippet', ''),
        }`}
        </pre>

        <h3>Gemini Utils</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# gemini_utils.py

class GeminiClient:
    """Gemini AI wrapper."""

    def __init__(self):
        self.client = genai.Client(api_key=os.getenv('GOOGLE_API_KEY'))
        self.model = 'gemini-2.5-flash-lite'

    def categorize(self, email: dict) -> str:
        """Categorize email using AI."""
        prompt = self._build_prompt(email)

        response = self.client.models.generate_content(
            model=self.model,
            contents=prompt,
        )

        return self._parse_category(response.text)

    def summarize(self, content: str) -> str:
        """Generate summary."""
        prompt = f"Summarize in 2-3 sentences:\\n\\n{content}"

        response = self.client.models.generate_content(
            model=self.model,
            contents=prompt,
        )

        return response.text.strip()`}
        </pre>

        <h3>Cache Manager</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# cache_manager.py

from collections import OrderedDict
from datetime import datetime, timedelta

class LRUCache:
    """Least Recently Used cache with expiry."""

    def __init__(self, max_size: int = 30, expiry_hours: int = 24):
        self.max_size = max_size
        self.expiry = timedelta(hours=expiry_hours)
        self.cache = OrderedDict()

    def get(self, key: str) -> any:
        """Get value if exists and not expired."""
        if key not in self.cache:
            return None

        value, timestamp = self.cache[key]

        if datetime.now() - timestamp > self.expiry:
            del self.cache[key]
            return None

        # Move to end (most recently used)
        self.cache.move_to_end(key)
        return value

    def set(self, key: str, value: any) -> None:
        """Set value with current timestamp."""
        if key in self.cache:
            self.cache.move_to_end(key)
        else:
            if len(self.cache) >= self.max_size:
                self.cache.popitem(last=False)  # Remove oldest

        self.cache[key] = (value, datetime.now())`}
        </pre>

        <h3>Config Manager</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# config_manager.py

import json
from pathlib import Path

class ConfigManager:
    """JSON configuration manager."""

    def __init__(self, config_path: str = 'config/config.json'):
        self.path = Path(config_path)
        self._config = self._load()

    def _load(self) -> dict:
        """Load configuration from file."""
        if self.path.exists():
            with open(self.path) as f:
                return json.load(f)
        return self._defaults()

    def get(self, *keys, default=None):
        """Get nested configuration value."""
        value = self._config
        for key in keys:
            if isinstance(value, dict):
                value = value.get(key)
            else:
                return default
        return value if value is not None else default

    def _defaults(self) -> dict:
        """Default configuration."""
        return {
            'api_settings': {
                'gemini_model': 'gemini-2.5-flash-lite',
                'requests_per_minute': 30,
            },
            'gmail_settings': {
                'max_emails_to_fetch': 10,
            },
            'cache_settings': {
                'enabled': True,
                'max_cached_emails': 30,
            },
        }`}
        </pre>

        <hr />

        <h2>Error Handling</h2>

        <h3>Graceful Degradation</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def process_email_safely(email: dict) -> str:
    """Process email with fallback on error."""
    try:
        return gemini_client.categorize(email)
    except RateLimitError:
        logger.warning("Rate limit hit, using cache")
        return cache.get(email['id']) or 'FYI'
    except APIError as e:
        logger.error(f"API error: {e}")
        return 'FYI'
    except Exception as e:
        logger.exception(f"Unexpected error: {e}")
        return 'FYI'`}
        </pre>

        <h3>Retry Logic</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10),
    retry=retry_if_exception_type(RateLimitError),
)
def call_api_with_retry(prompt: str) -> str:
    """Call API with exponential backoff."""
    return gemini_client.generate(prompt)`}
        </pre>

        <hr />

        <h2>Logging</h2>

        <h3>Configuration</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# logger_utils.py

import logging
from logging.handlers import RotatingFileHandler

def setup_logging(log_path: str = 'logs/email_assistant.log'):
    """Configure application logging."""
    formatter = logging.Formatter(
        '%(asctime)s | %(levelname)s | %(module)s | %(funcName)s:%(lineno)d | %(message)s'
    )

    handler = RotatingFileHandler(
        log_path,
        maxBytes=10_000_000,  # 10MB
        backupCount=5,
    )
    handler.setFormatter(formatter)

    logger = logging.getLogger('email_assistant')
    logger.setLevel(logging.INFO)
    logger.addHandler(handler)

    return logger`}
        </pre>

        <h3>Log Output</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`2024-12-22 09:15:23,456 | INFO | email_utils | fetch_emails:45 | Fetching 10 emails
2024-12-22 09:15:24,789 | INFO | gemini_utils | categorize:32 | Categorized: Need-Action
2024-12-22 09:15:25,012 | WARNING | cache_manager | get:28 | Cache miss for msg_123
2024-12-22 09:15:30,345 | ERROR | gemini_utils | categorize:35 | API error: Rate limit`}
        </pre>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/email-assistant/api-endpoints"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Endpoints →</div>
            <div className="text-sm text-muted-foreground">REST API documentation</div>
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
