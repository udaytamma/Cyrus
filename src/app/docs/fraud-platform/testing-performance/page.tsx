import { DocsLayout } from "@/components/DocsLayout";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "Testing & Performance | Fraud Detection Platform",
  description: "Comprehensive testing strategy and performance benchmarks for the fraud detection platform.",
};

export default function TestingPerformancePage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Testing &amp; Performance</h1>

        <p className="lead">
          Comprehensive testing strategy and performance benchmarks for the fraud detection platform.
        </p>

        <h2>Test Coverage</h2>

        <h3>Unit Tests</h3>

        <p>118 tests across 8 test modules (111 unit tests + 7 integration tests requiring Redis/PostgreSQL):</p>

        <CopyableCodeBlock
          language="bash"
          code={`# Run all tests
pytest tests/ -v

# Run with coverage
pytest tests/ --cov=src --cov-report=html`}
        />

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Tests</th>
                <th className="px-4 py-3 text-left font-semibold">Coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Detection Engine</td>
                <td className="px-4 py-3">34</td>
                <td className="px-4 py-3">97%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Scoring (Risk + Friendly Fraud)</td>
                <td className="px-4 py-3">25</td>
                <td className="px-4 py-3">95%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Evidence Service</td>
                <td className="px-4 py-3">14</td>
                <td className="px-4 py-3">89%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Schemas</td>
                <td className="px-4 py-3">12</td>
                <td className="px-4 py-3">96%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Policy Engine</td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3">66%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Detection Engine Orchestrator</td>
                <td className="px-4 py-3">16</td>
                <td className="px-4 py-3">98%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">API Endpoints</td>
                <td className="px-4 py-3">7</td>
                <td className="px-4 py-3">25%</td>
              </tr>
              <tr className="border-b border-border font-semibold">
                <td className="px-4 py-3">Overall</td>
                <td className="px-4 py-3">118</td>
                <td className="px-4 py-3">61%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Integration Tests</h3>

        <p>End-to-end tests validating complete decision flow:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Integration tests require running Redis and PostgreSQL
docker-compose up -d
pytest tests/test_api.py -v`}
        </pre>

        <p>Test scenarios:</p>
        <ul>
          <li>Normal transaction - ALLOW</li>
          <li>Card testing attack - BLOCK</li>
          <li>Velocity violation - REVIEW</li>
          <li>Geographic anomaly - REVIEW</li>
          <li>Bot detection - BLOCK</li>
          <li>Policy reload - Version change</li>
        </ul>

        <h3>Load Tests</h3>

        <p>Performance benchmarks using Locust:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Start load test
locust -f loadtest/locustfile.py --host=http://localhost:8000`}
        </pre>

        <h2>Performance Results</h2>

        <h3>Single-Request Benchmarks (Low Concurrency)</h3>

        <p>Single-request latency with no concurrent load. Tested on: MacBook Pro M-series, Docker containers.</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Target</th>
                <th className="px-4 py-3 text-left font-semibold">Achieved</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">P50 Latency</td>
                <td className="px-4 py-3">&lt; 10ms</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">4.2ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">P95 Latency</td>
                <td className="px-4 py-3">&lt; 15ms</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">7.8ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">P99 Latency</td>
                <td className="px-4 py-3">&lt; 20ms</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">9.1ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Max Latency</td>
                <td className="px-4 py-3">&lt; 50ms</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">23ms</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/50">
          <p className="text-sm text-blue-900 dark:text-blue-200">
            <strong>Under load:</strong> At 50 concurrent users (260 RPS), measured P99 latency is 106ms -- 47% under the &lt;200ms SLA budget. See <a href="/docs/fraud-platform/results-personas" className="text-blue-700 underline dark:text-blue-300">Results &amp; Personas</a> for full load test data.
          </p>
        </div>

        <h3>Throughput Under Load</h3>

        <p>Locust load test results (MacBook Pro M-series, Docker containers, single API worker):</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Concurrency</th>
                <th className="px-4 py-3 text-left font-semibold">Requests/sec</th>
                <th className="px-4 py-3 text-left font-semibold">P99 Latency</th>
                <th className="px-4 py-3 text-left font-semibold">Error Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">50 (baseline)</td>
                <td className="px-4 py-3">260</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">106ms</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">0%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">100</td>
                <td className="px-4 py-3">500</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">130ms</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">0%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">200</td>
                <td className="px-4 py-3">900</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">160ms</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">0%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">400</td>
                <td className="px-4 py-3">1,500</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">200ms</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">0.1%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">1000+</td>
                <td className="px-4 py-3">3,000+</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">&gt; 200ms</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">&gt; 1%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Note:</strong> Throughput numbers are from a single-worker, local Docker setup. Production deployment with multiple workers and dedicated Redis/PostgreSQL would achieve higher throughput. The &lt;200ms P99 SLA holds up to ~400 concurrent users on this configuration.
          </p>
        </div>

        <h3>Resource Characteristics</h3>

        <p>Architectural resource expectations (not profiled in detail for local Docker):</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Primary Resource</th>
                <th className="px-4 py-3 text-left font-semibold">Scaling Factor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">FastAPI Workers</td>
                <td className="px-4 py-3">CPU (async I/O-bound)</td>
                <td className="px-4 py-3">Horizontal (add workers)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Redis (Velocity)</td>
                <td className="px-4 py-3">Memory (ZSET sliding windows)</td>
                <td className="px-4 py-3">Memory scales with active entities</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">PostgreSQL (Evidence)</td>
                <td className="px-4 py-3">Disk I/O (write-heavy)</td>
                <td className="px-4 py-3">Connection pool + async writes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Detection Accuracy</h2>

        <h3>Test Dataset</h3>

        <div className="not-prose my-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Caveat:</strong> These metrics are from <strong>synthetic test data</strong> generated by the Locust data generator, not from production traffic. Detection rates on real-world data may differ due to adversarial adaptation, data distribution shifts, and edge cases not represented in synthetic scenarios.
          </p>
        </div>

        <p>Evaluated against 10,000 synthetic transactions:</p>
        <ul>
          <li>8,500 legitimate (85%)</li>
          <li>1,500 fraudulent (15%)</li>
        </ul>

        <h3>Results</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">True Positive Rate</td>
                <td className="px-4 py-3">78%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">False Positive Rate</td>
                <td className="px-4 py-3">3.2%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Precision</td>
                <td className="px-4 py-3">0.82</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Recall</td>
                <td className="px-4 py-3">0.78</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">F1 Score</td>
                <td className="px-4 py-3">0.80</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Detection Rates by Type</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Fraud Type</th>
                <th className="px-4 py-3 text-left font-semibold">Detection Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Card Testing</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">94%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Velocity Attacks</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">86%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Geographic Anomaly</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">72%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Bot/Automation</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">91%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Friendly Fraud</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">65%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Test Scenarios</h2>

        <h3>Scenario: Card Testing Attack</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def test_card_testing_detection():
    """
    Simulate card testing attack:
    - 10 small transactions
    - Same card, different amounts ($1-$5)
    - 30 second window
    - Should trigger BLOCK by 5th transaction
    """
    card_token = "test_card_001"

    for i in range(10):
        response = client.post("/decide", json={
            "transaction_id": f"txn_{i}",
            "amount": random.uniform(1, 5),
            "card_token": card_token,
            "ip_address": "45.33.32.156",  # Datacenter IP
            "ip_datacenter": True,
            ...
        })

        if i < 3:
            assert response["decision"] == "ALLOW"
        elif i < 5:
            assert response["decision"] in ["FRICTION", "REVIEW"]
        else:
            assert response["decision"] == "BLOCK"
            assert "card_testing" in response["signals"]`}
        </pre>

        <h3>Scenario: Geographic Anomaly</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def test_geographic_anomaly():
    """
    Card issued in US, transaction from Nigeria.
    Should trigger REVIEW.
    """
    response = client.post("/decide", json={
        "transaction_id": "geo_test_001",
        "amount": 500,
        "card_token": "us_card_001",
        "card_country": "US",
        "ip_address": "41.58.0.1",  # Nigeria IP
        "ip_country": "NG",
        ...
    })

    assert response["decision"] == "REVIEW"
    assert "geo_mismatch" in response["signals"]`}
        </pre>

        <h3>Scenario: Policy Hot-Reload</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def test_policy_hot_reload():
    """
    Verify policy can be updated without restart.
    """
    # Get current policy version
    v1 = client.get("/policy/version")

    # Modify policy file
    update_policy_file(new_threshold=75)

    # Reload policy
    reload_response = client.post("/policy/reload")
    assert reload_response["success"] == True

    # Verify new version
    v2 = client.get("/policy/version")
    assert v2["version"] != v1["version"]
    assert v2["thresholds"]["block"] == 75`}
        </pre>

        <h2>Chaos Testing</h2>

        <h3>Redis Failure</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Kill Redis
docker stop fraud_redis

# Send transaction
curl -X POST http://localhost:8000/decide -d '...'

# Expected: Decision still returned (degraded mode)
# Expected: Log warning about Redis unavailable`}
        </pre>

        <h3>PostgreSQL Failure</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Kill PostgreSQL
docker stop fraud_postgres

# Send transaction
curl -X POST http://localhost:8000/decide -d '...'

# Expected: Decision returned
# Expected: Evidence queued for later storage`}
        </pre>

        <h2>Continuous Integration</h2>

        <p>GitHub Actions workflow:</p>

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
    services:
      redis:
        image: redis:7
        ports: ["6379:6379"]
        options: --health-cmd "redis-cli ping" --health-interval 10s
      postgres:
        image: postgres:15
        env:
          POSTGRES_USER: fraud
          POSTGRES_PASSWORD: fraud_test
          POSTGRES_DB: fraud_evidence
        ports: ["5432:5432"]
        options: --health-cmd pg_isready --health-interval 10s

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
          cache: 'pip'
      - run: pip install -r requirements.txt
      - name: Initialize database schema
        run: psql -f scripts/init_db.sql
        env:
          PGHOST: localhost
          PGUSER: fraud
          PGPASSWORD: fraud_test
          PGDATABASE: fraud_evidence
      - run: pytest tests/ -v --cov=src --cov-report=term-missing
        env:
          REDIS_HOST: localhost
          POSTGRES_HOST: localhost
          POSTGRES_USER: fraud
          POSTGRES_PASSWORD: fraud_test
          POSTGRES_DB: fraud_evidence
      - name: Type check
        run: pip install mypy && mypy src/ --ignore-missing-imports || true`}
        </pre>

        <h2>Monitoring in Production</h2>

        <h3>Key Alerts</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Alert</th>
                <th className="px-4 py-3 text-left font-semibold">Condition</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">High Latency</td>
                <td className="px-4 py-3">P99 &gt; 200ms for 5min</td>
                <td className="px-4 py-3">Scale API pods</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">High Block Rate</td>
                <td className="px-4 py-3">Block &gt; 15% for 10min</td>
                <td className="px-4 py-3">Check for attack or policy issue</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Redis Disconnect</td>
                <td className="px-4 py-3">Connection lost</td>
                <td className="px-4 py-3">Page on-call</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Evidence Queue Full</td>
                <td className="px-4 py-3">Queue &gt; 1000</td>
                <td className="px-4 py-3">Check PostgreSQL</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Dashboards</h3>

        <p>Grafana dashboards track:</p>
        <ul>
          <li>Decision distribution over time</li>
          <li>Latency percentiles</li>
          <li>Detector fire rates</li>
          <li>Resource utilization</li>
          <li>Error rates</li>
        </ul>

        <h2>Running the Full Test Suite</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# All tests (unit only, no Docker needed)
pytest tests/ -v

# All tests with Docker services (enables integration tests)
docker-compose up -d
pytest tests/ -v

# Load tests
locust -f loadtest/locustfile.py --headless -u 100 -r 10 -t 60s

# All tests with coverage report
pytest tests/ --cov=src --cov-report=html
open htmlcov/index.html`}
        </pre>
      </article>
    </DocsLayout>
  );
}
