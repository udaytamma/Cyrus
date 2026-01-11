import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import Link from "next/link";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "Testing | AI Ingredient Scanner",
  description: "Comprehensive test suite documentation for the AI Ingredient Scanner.",
};

export default function TestingPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Testing</h1>

        <p className="lead">
          The AI Ingredient Scanner includes a comprehensive test suite covering unit tests, integration tests, end-to-end validation, and performance benchmarks.
        </p>

        <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">191</div>
            <div className="text-sm text-muted-foreground">Tests</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">83%</div>
            <div className="text-sm text-muted-foreground">Coverage</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">Test Types</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
            <div className="text-sm text-muted-foreground">Pass Rate</div>
          </div>
        </div>

        <hr />

        <h2>Running Tests</h2>

        <h3>Quick Start</h3>

        <CopyableCodeBlock
          title="Running Tests"
          language="bash"
          code={`# Activate virtual environment
source venv/bin/activate

# Run all tests with coverage
pytest tests/ -v --cov

# Run specific test file
pytest tests/test_agents.py -v

# Run with verbose output
pytest tests/ -v --tb=short

# Run only fast tests (exclude performance)
pytest tests/ -m "not slow"`}
        />

        <h3>Test Configuration</h3>

        <p>
          The project uses <code>pytest.ini</code> for configuration:
        </p>

        <CopyableCodeBlock
          title="pytest.ini"
          language="ini"
          code={`[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts = -v --cov=config --cov=agents --cov=tools --cov=state --cov=graph --cov=services --cov-report=term-missing --cov-fail-under=70
filterwarnings =
    ignore::DeprecationWarning`}
        />

        <hr />

        <h2>Test Categories</h2>

        <h3>Unit Tests</h3>

        <p>
          Tests for individual agent functions and tools.
        </p>

        <h4>Agent Tests (test_agents.py)</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class TestResearchAgent:
    """Tests for Research Agent."""

    def test_create_unknown_ingredient(self):
        """Test creation of unknown ingredient record."""
        result = _create_unknown_ingredient("mystery_ingredient")
        assert result["name"] == "mystery_ingredient"
        assert result["source"] == "unknown"
        assert result["confidence"] == 0.0

    def test_has_research_data_false(self, base_state):
        """Test has_research_data returns False when empty."""
        assert has_research_data(base_state) is False

    @patch("agents.research.lookup_ingredient")
    @patch("agents.research.grounded_ingredient_search")
    def test_research_ingredients_fallback(self, mock_search, mock_lookup):
        """Test research falls back to grounded search."""
        mock_lookup.return_value = create_ingredient(confidence=0.5)
        mock_search.return_value = create_ingredient(confidence=0.8)

        result = research_ingredients(state)
        assert result["ingredient_data"][0]["source"] == "google_search"`}
        </pre>

        <h4>Tool Tests (test_tools.py)</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class TestSafetyScorer:
    """Tests for safety scoring functions."""

    def test_calculate_risk_sensitive_skin_fragrance(self):
        """Test risk increases for fragrance with sensitive skin."""
        risk = calculate_risk_score(fragrance_ingredient, sensitive_profile)
        assert risk == 0.7  # 0.4 base + 0.3 modifier

    def test_classify_risk_level_boundaries(self):
        """Test risk classification at boundaries."""
        assert classify_risk_level(0.29) == RiskLevel.LOW
        assert classify_risk_level(0.30) == RiskLevel.MEDIUM
        assert classify_risk_level(0.60) == RiskLevel.HIGH


class TestAllergenMatcher:
    """Tests for allergen matching functions."""

    def test_check_allergen_match_positive(self):
        """Test positive allergen match."""
        ingredient = create_ingredient(
            name="whey protein",
            safety_notes="Derived from milk",
        )
        is_match, allergy = check_allergen_match(ingredient, profile)
        assert is_match is True
        assert allergy == "milk"`}
        </pre>

        <h3>Integration Tests</h3>

        <h4>API Tests (test_api.py)</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class TestHealthEndpoints:
    """Tests for health check endpoints."""

    def test_root_endpoint(self, client):
        """Test root endpoint returns OK status."""
        response = client.get("/")
        assert response.status_code == 200
        assert response.json()["status"] == "ok"

    def test_health_endpoint(self, client):
        """Test health endpoint returns healthy status."""
        response = client.get("/health")
        assert response.status_code == 200


class TestAnalyzeEndpoint:
    """Tests for the /analyze endpoint."""

    def test_analyze_missing_ingredients(self, client):
        """Test that empty ingredients returns error."""
        response = client.post("/analyze", json={"ingredients": ""})
        assert response.status_code == 400`}
        </pre>

        <h4>Workflow Tests (test_workflow.py)</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class TestWorkflowExecution:
    """Tests for workflow execution."""

    @patch("agents.research.research_ingredients")
    @patch("agents.analysis.analyze_ingredients")
    @patch("agents.critic.validate_report")
    def test_happy_path(self, mock_critic, mock_analysis, mock_research):
        """Test successful workflow execution."""
        mock_research.return_value = state_with_ingredients
        mock_analysis.return_value = state_with_report
        mock_critic.return_value = state_approved

        result = run_analysis(
            session_id="test",
            product_name="Test",
            ingredients=["water"],
            allergies=[],
            skin_type="normal",
            expertise="beginner",
        )

        assert result["critic_feedback"]["result"] == ValidationResult.APPROVED`}
        </pre>

        <h3>End-to-End Tests (test_e2e.py)</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class TestEndToEndWorkflow:
    """E2E tests for the complete analysis workflow."""

    def test_complete_workflow_happy_path(self, mock_llm_responses):
        """Test complete workflow from start to finish."""
        result = run_analysis(
            session_id="e2e-test-001",
            product_name="Test Moisturizer",
            ingredients=["Water", "Glycerin", "Vitamin E"],
            allergies=[],
            skin_type="normal",
            expertise="beginner",
        )

        # Verify workflow completed successfully
        assert result.get("error") is None
        assert result.get("analysis_report") is not None
        assert result.get("critic_feedback") is not None

        # Verify routing history shows complete flow
        history = result.get("routing_history", [])
        assert "research" in history
        assert "analysis" in history
        assert "critic" in history`}
        </pre>

        <h3>Performance Tests (test_performance.py)</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class TestAPIPerformance:
    """Performance tests for API endpoints."""

    def test_health_endpoint_response_time(self, client):
        """Health endpoint should respond within 100ms."""
        start = time.time()
        response = client.get("/health")
        elapsed = time.time() - start

        assert response.status_code == 200
        assert elapsed < 0.1

    def test_concurrent_health_checks(self, client):
        """Multiple concurrent health checks should all succeed."""
        with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
            futures = [executor.submit(client.get, "/health") for _ in range(10)]
            results = [f.result() for f in concurrent.futures.as_completed(futures)]

        assert all(r.status_code == 200 for r in results)`}
        </pre>

        <hr />

        <h2>Coverage Report</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Module</th>
                <th className="px-4 py-3 text-left font-semibold">Coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">agents/analysis.py</td>
                <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-2 w-24 rounded-full bg-muted"><div className="h-2 rounded-full bg-green-500" style={{ width: '94%' }}></div></div><span className="text-green-600">94%</span></div></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">agents/research.py</td>
                <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-2 w-24 rounded-full bg-muted"><div className="h-2 rounded-full bg-green-500" style={{ width: '92%' }}></div></div><span className="text-green-600">92%</span></div></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">agents/supervisor.py</td>
                <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-2 w-24 rounded-full bg-muted"><div className="h-2 rounded-full bg-green-500" style={{ width: '88%' }}></div></div><span className="text-green-600">88%</span></div></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">agents/critic.py</td>
                <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-2 w-24 rounded-full bg-muted"><div className="h-2 rounded-full bg-yellow-500" style={{ width: '79%' }}></div></div><span className="text-yellow-600">79%</span></div></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">tools/safety_scorer.py</td>
                <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-2 w-24 rounded-full bg-muted"><div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }}></div></div><span className="text-green-600">100%</span></div></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">tools/allergen_matcher.py</td>
                <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-2 w-24 rounded-full bg-muted"><div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }}></div></div><span className="text-green-600">100%</span></div></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">graph.py</td>
                <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-2 w-24 rounded-full bg-muted"><div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }}></div></div><span className="text-green-600">100%</span></div></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">config/settings.py</td>
                <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-2 w-24 rounded-full bg-muted"><div className="h-2 rounded-full bg-green-500" style={{ width: '100%' }}></div></div><span className="text-green-600">100%</span></div></td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Test Markers</h2>

        <p>
          Custom markers for test categorization:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Run only E2E tests
pytest -m e2e

# Skip slow tests
pytest -m "not slow"

# Run only performance tests
pytest -m performance

# Run integration tests
pytest -m integration`}
        </pre>

        <hr />

        <h2>Best Practices</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">1. Mock External Services</div>
            <p className="text-sm text-muted-foreground mb-2">Always mock LLM and database calls:</p>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`@patch("agents.research.lookup_ingredient")
@patch("agents.research.grounded_ingredient_search")
def test_with_mocks(self, mock_search, mock_lookup):
    mock_lookup.return_value = create_test_ingredient("water")
    # Test logic here`}
            </pre>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">2. Use Fixtures for Common Setup</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`@pytest.fixture
def base_state() -> WorkflowState:
    return WorkflowState(
        session_id="test",
        product_name="Test",
        raw_ingredients=["water"],
        user_profile=base_user_profile(),
        ingredient_data=[],
        retry_count=0,
        routing_history=[],
        error=None,
    )`}
            </pre>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">3. Test Edge Cases</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Empty inputs</li>
              <li>Unicode characters</li>
              <li>Boundary values</li>
              <li>Error conditions</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">4. Performance Boundaries</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>API response times &lt; 100ms for health checks</li>
              <li>Batch processing scales sub-linearly</li>
              <li>Concurrent requests handled correctly</li>
            </ul>
          </div>
        </div>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">Multi-agent workflow design</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/api-reference"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Reference →</div>
            <div className="text-sm text-muted-foreground">REST endpoint documentation</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/deployment"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Deployment →</div>
            <div className="text-sm text-muted-foreground">Production deployment guide</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
