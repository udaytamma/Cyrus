import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Testing | Email Assistant",
  description: "Test suite and quality assurance for the Email Assistant.",
};

export default function TestingPage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Testing</h1>

        <p className="lead">
          The Email Assistant includes a comprehensive test suite covering unit tests, integration tests, and end-to-end validation.
        </p>

        <hr />

        <h2>Test Architecture</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│                       TEST ARCHITECTURE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   TEST LEVELS                           TEST TARGETS            │
│   ┌─────────────┐                       ┌─────────────┐        │
│   │ Unit Tests  │──────────────────────▶│ Email Utils │        │
│   └──────┬──────┘                       └─────────────┘        │
│          │                              ┌─────────────┐        │
│          │                       ┌─────▶│Gemini Utils │        │
│          ▼                       │      └─────────────┘        │
│   ┌─────────────┐               │                              │
│   │ Integration │───────────────┼──────▶┌─────────────┐        │
│   │    Tests    │               │       │Categorization│       │
│   └──────┬──────┘               │       └─────────────┘        │
│          │                       │                              │
│          ▼                       │                              │
│   ┌─────────────┐               │       ┌─────────────┐        │
│   │ End-to-End  │───────────────┴──────▶│Web Interface│        │
│   │    Tests    │                       └─────────────┘        │
│   └─────────────┘                                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Running Tests</h2>

        <h3>Quick Start</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Run all tests
python -m pytest tests/

# Run with coverage
python -m pytest tests/ --cov=src --cov-report=html

# Run specific test file
python -m pytest tests/test_email_utils.py

# Run with verbose output
python -m pytest tests/ -v`}
        </pre>

        <h3>Test Suites</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Suite</th>
                <th className="px-4 py-3 text-left font-semibold">Command</th>
                <th className="px-4 py-3 text-left font-semibold">Duration</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Basic</td>
                <td className="px-4 py-3 font-mono text-xs">pytest tests/ -m basic</td>
                <td className="px-4 py-3">~10s</td>
                <td className="px-4 py-3 text-muted-foreground">Core functionality</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Extended</td>
                <td className="px-4 py-3 font-mono text-xs">pytest tests/ -m extended</td>
                <td className="px-4 py-3">~30s</td>
                <td className="px-4 py-3 text-muted-foreground">Edge cases</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Comprehensive</td>
                <td className="px-4 py-3 font-mono text-xs">pytest tests/</td>
                <td className="px-4 py-3">~60s</td>
                <td className="px-4 py-3 text-muted-foreground">Full suite</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Test Categories</h2>

        <h3>Unit Tests</h3>

        <h4>Email Utilities</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# tests/test_email_utils.py

import pytest
from src.email_utils import parse_email, extract_sender

class TestParseEmail:
    """Tests for email parsing functionality."""

    def test_parse_simple_email(self):
        """Parse email with standard format."""
        raw = create_mock_email(
            subject="Test Subject",
            sender="john@example.com",
            body="Hello world"
        )

        result = parse_email(raw)

        assert result["subject"] == "Test Subject"
        assert result["from"] == "john@example.com"
        assert "Hello world" in result["body"]

    def test_parse_multipart_email(self):
        """Parse email with HTML and plain text parts."""
        raw = create_multipart_email()
        result = parse_email(raw)

        assert result["body"]  # Should extract text
        assert "<html>" not in result["body"]

    def test_parse_unicode_subject(self):
        """Handle non-ASCII characters in subject."""
        raw = create_mock_email(subject="会议邀请")
        result = parse_email(raw)

        assert result["subject"] == "会议邀请"`}
        </pre>

        <h4>Gemini Integration</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# tests/test_gemini_utils.py

import pytest
from unittest.mock import Mock, patch
from src.gemini_utils import categorize_email, GeminiError

class TestCategorizeEmail:
    """Tests for Gemini categorization."""

    @patch("src.gemini_utils.genai")
    def test_categorize_action_email(self, mock_genai):
        """Categorize email requiring action."""
        mock_genai.GenerativeModel().generate_content.return_value = Mock(
            text='{"category": "Need-Action", "confidence": 0.95}'
        )

        result = categorize_email({
            "subject": "Please review PR #123",
            "from": "dev@company.com",
            "body": "Need your approval on this PR"
        })

        assert result["category"] == "Need-Action"
        assert result["confidence"] >= 0.9

    @patch("src.gemini_utils.genai")
    def test_rate_limit_retry(self, mock_genai):
        """Retry on rate limit error."""
        mock_genai.GenerativeModel().generate_content.side_effect = [
            Exception("Resource exhausted"),
            Mock(text='{"category": "FYI", "confidence": 0.8}')
        ]

        result = categorize_email({"subject": "FYI", "body": "Info"})

        assert result["category"] == "FYI"
        assert mock_genai.GenerativeModel().generate_content.call_count == 2`}
        </pre>

        <h3>Integration Tests</h3>

        <h4>Gmail API Integration</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# tests/test_gmail_integration.py

import pytest
from src.email_utils import fetch_emails, get_gmail_service

@pytest.mark.integration
class TestGmailIntegration:
    """Integration tests requiring Gmail API access."""

    @pytest.fixture
    def gmail_service(self):
        """Get authenticated Gmail service."""
        return get_gmail_service()

    def test_fetch_recent_emails(self, gmail_service):
        """Fetch emails from last 24 hours."""
        emails = fetch_emails(gmail_service, hours=24)

        assert isinstance(emails, list)
        for email in emails:
            assert "id" in email
            assert "subject" in email
            assert "from" in email

    def test_fetch_with_query(self, gmail_service):
        """Fetch emails matching query."""
        emails = fetch_emails(
            gmail_service,
            query="is:unread",
            max_results=10
        )

        assert len(emails) <= 10`}
        </pre>

        <h4>End-to-End Pipeline</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# tests/test_pipeline.py

import pytest
from src.main import run_digest_pipeline

@pytest.mark.e2e
class TestPipeline:
    """End-to-end pipeline tests."""

    def test_full_pipeline_execution(self, tmp_path):
        """Run complete digest generation."""
        output_file = tmp_path / "digest.json"

        result = run_digest_pipeline(
            hours=24,
            output_path=output_file
        )

        assert result["status"] == "success"
        assert output_file.exists()

        digest = json.loads(output_file.read_text())
        assert "categories" in digest
        assert "generated_at" in digest`}
        </pre>

        <hr />

        <h2>Fixtures and Mocks</h2>

        <h3>Email Fixtures</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# tests/conftest.py

import pytest
from email.message import EmailMessage

@pytest.fixture
def sample_emails():
    """Collection of sample emails for testing."""
    return [
        {
            "id": "msg_001",
            "subject": "Action Required: Review Document",
            "from": "boss@company.com",
            "body": "Please review the attached document by EOD.",
            "expected_category": "Need-Action"
        },
        {
            "id": "msg_002",
            "subject": "Weekly Newsletter",
            "from": "news@techsite.com",
            "body": "This week in tech...",
            "expected_category": "Newsletter"
        },
        {
            "id": "msg_003",
            "subject": "50% Off Sale!",
            "from": "promo@store.com",
            "body": "Limited time offer...",
            "expected_category": "Promotional"
        }
    ]

@pytest.fixture
def mock_gmail_service():
    """Mock Gmail API service."""
    from unittest.mock import Mock

    service = Mock()
    service.users().messages().list().execute.return_value = {
        "messages": [{"id": "msg_001"}, {"id": "msg_002"}]
    }
    return service`}
        </pre>

        <h3>API Mocks</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`@pytest.fixture
def mock_gemini():
    """Mock Gemini API responses."""
    with patch("src.gemini_utils.genai") as mock:
        model = Mock()
        model.generate_content.return_value = Mock(
            text='{"category": "FYI", "confidence": 0.85}'
        )
        mock.GenerativeModel.return_value = model
        yield mock`}
        </pre>

        <hr />

        <h2>Test Configuration</h2>

        <h3>pytest.ini</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`[pytest]
testpaths = tests
python_files = test_*.py
python_functions = test_*
markers =
    basic: Basic functionality tests
    extended: Extended edge case tests
    integration: Tests requiring external services
    e2e: End-to-end tests
    slow: Tests that take > 10 seconds

filterwarnings =
    ignore::DeprecationWarning

addopts =
    --strict-markers
    -ra
    --tb=short`}
        </pre>

        <h3>Coverage Configuration</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# .coveragerc
[run]
source = src
omit =
    src/__init__.py
    tests/*

[report]
exclude_lines =
    pragma: no cover
    def __repr__
    raise NotImplementedError
    if __name__ == .__main__.:

[html]
directory = coverage_html`}
        </pre>

        <hr />

        <h2>Web Interface Testing</h2>

        <h3>Flask Test Client</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# tests/test_server.py

import pytest
from server import app

@pytest.fixture
def client():
    """Flask test client."""
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

class TestAPI:
    """API endpoint tests."""

    def test_get_digest(self, client):
        """GET /api/digest returns digest data."""
        response = client.get("/api/digest")

        assert response.status_code == 200
        data = response.get_json()
        assert "categories" in data

    def test_refresh_endpoint(self, client):
        """POST /api/refresh triggers refresh."""
        response = client.post("/api/refresh")

        assert response.status_code in [200, 409]  # Success or already running

    def test_metrics_endpoint(self, client):
        """GET /api/metrics returns metrics."""
        response = client.get("/api/metrics?period=24h")

        assert response.status_code == 200
        data = response.get_json()
        assert "metrics" in data`}
        </pre>

        <hr />

        <h2>Continuous Integration</h2>

        <h3>GitHub Actions Workflow</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          pip install pytest pytest-cov

      - name: Run tests
        env:
          GOOGLE_API_KEY: \${{ secrets.GOOGLE_API_KEY }}
        run: |
          pytest tests/ -m "not integration" --cov=src

      - name: Upload coverage
        uses: codecov/codecov-action@v3`}
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
            href="/docs/email-assistant/api-endpoints"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Endpoints →</div>
            <div className="text-sm text-muted-foreground">REST API documentation</div>
          </Link>
          <Link
            href="/docs/email-assistant/deployment"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Deployment →</div>
            <div className="text-sm text-muted-foreground">Production deployment guide</div>
          </Link>
          <Link
            href="/docs/email-assistant/getting-started"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Getting Started →</div>
            <div className="text-sm text-muted-foreground">Setup and installation</div>
          </Link>
        </div>
      </article>
    </EmailAssistantDocsLayout>
  );
}
