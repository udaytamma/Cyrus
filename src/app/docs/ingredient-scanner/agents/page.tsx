import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Agents | AI Ingredient Scanner",
  description: "Deep dive into the AI agents powering ingredient analysis: Supervisor, Research, Analysis, and Critic.",
};

export default function AgentsPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Agents</h1>

        <p className="lead">
          The AI Ingredient Scanner uses four specialized agents, each handling a specific aspect of the analysis pipeline. This document provides implementation details and code examples for each agent.
        </p>

        <hr />

        <h2>Agent Overview</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────┐
│                         AGENT PIPELINE                               │
│                                                                      │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐            │
│   │  SUPERVISOR │ → │  RESEARCH   │ → │  ANALYSIS   │            │
│   │   (Router)  │    │  (Lookup)   │    │  (Report)   │            │
│   └─────────────┘    └──────┬──────┘    └──────┬──────┘            │
│                             │                   │                    │
│                      ┌──────┴──────┐           │                    │
│                      ▼             ▼           ▼                    │
│                 ┌─────────┐  ┌──────────┐  ┌─────────────┐         │
│                 │ Qdrant  │  │  Google  │  │   Gemini    │         │
│                 │ Vector  │  │  Search  │  │   2.0 LLM   │         │
│                 └─────────┘  └──────────┘  └─────────────┘         │
│                                                   │                  │
│                                                   ▼                  │
│                                           ┌─────────────┐           │
│                                           │   CRITIC    │           │
│                                           │ (Validate)  │           │
│                                           └──────┬──────┘           │
│                                                  │                   │
│                              ┌───────────────────┼───────────────┐  │
│                              ▼                   ▼               ▼  │
│                         [APPROVED]          [REJECTED]    [ESCALATED]│
│                              │                   │               │  │
│                              ▼                   ▼               ▼  │
│                          Output              Retry           Output │
│                          Report             Analysis        + Warn  │
└─────────────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Supervisor Agent</h2>

        <div className="not-prose mb-4 rounded bg-muted/50 px-3 py-1 text-xs font-mono">
          agents/supervisor.py
        </div>

        <p>
          The Supervisor orchestrates the workflow by determining the next step based on current state.
        </p>

        <h3>Routing Logic</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def route_next(state: WorkflowState) -> RouteType:
    """Determine the next node in the workflow."""

    # Check for errors
    if state.get("error"):
        return NODE_END

    # Step 1: Need research data?
    if not has_research_data(state):
        return NODE_RESEARCH

    # Step 2: Need analysis report?
    if not has_analysis_report(state):
        return NODE_ANALYSIS

    # Step 3: Check validation status
    critic_feedback = state.get("critic_feedback")

    if critic_feedback is None:
        return NODE_CRITIC

    # Step 4: Handle validation results
    if is_approved(state):
        return NODE_END

    if is_escalated(state):
        return NODE_END

    if is_rejected(state):
        return NODE_ANALYSIS  # Retry

    return NODE_END`}
        </pre>

        <h3>Route Types</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Route</th>
                <th className="px-4 py-3 text-left font-semibold">Condition</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">research</td>
                <td className="px-4 py-3">No ingredient data</td>
                <td className="px-4 py-3 text-muted-foreground">Fetch ingredient info</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">analysis</td>
                <td className="px-4 py-3">No report generated</td>
                <td className="px-4 py-3 text-muted-foreground">Generate safety report</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">critic</td>
                <td className="px-4 py-3">Report needs validation</td>
                <td className="px-4 py-3 text-muted-foreground">Validate quality</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">end</td>
                <td className="px-4 py-3">Complete or error</td>
                <td className="px-4 py-3 text-muted-foreground">Finish workflow</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Research Agent</h2>

        <div className="not-prose mb-4 rounded bg-muted/50 px-3 py-1 text-xs font-mono">
          agents/research.py
        </div>

        <p>
          The Research Agent fetches ingredient safety data using a dual-source strategy with parallel processing for large ingredient lists.
        </p>

        <h3>Dual-Source Strategy</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def _research_single_ingredient(ingredient_name: str) -> IngredientData | None:
    # Try vector database first
    result = lookup_ingredient(ingredient_name)

    if result and result["confidence"] >= CONFIDENCE_THRESHOLD:
        return result  # High confidence match

    # Fall back to Google Search
    grounded_result = grounded_ingredient_search(ingredient_name)

    if grounded_result:
        _save_to_qdrant(grounded_result)  # Learn for next time
        return grounded_result

    return None  # Will use unknown record`}
        </pre>

        <h3>Parallel Processing</h3>

        <p>
          For lists with more than 3 ingredients, research is parallelized across multiple workers:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`BATCH_SIZE = 3  # Ingredients per worker

def _research_parallel(ingredients: list[str]) -> list[IngredientData]:
    batches = _create_batches(ingredients, BATCH_SIZE)

    with ThreadPoolExecutor(max_workers=len(batches)) as executor:
        futures = {
            executor.submit(_research_batch, idx, batch): idx
            for idx, batch in enumerate(batches)
        }

        for future in as_completed(futures):
            batch_results = future.result()
            results_by_batch[futures[future]] = batch_results

    return _reassemble_results(results_by_batch)`}
        </pre>

        <h3>Output Schema</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class IngredientData(TypedDict):
    name: str
    purpose: str
    safety_rating: int        # 1-10 scale
    concerns: str
    recommendation: str       # SAFE/CAUTION/AVOID
    allergy_risk_flag: str    # HIGH/LOW
    origin: str               # Natural/Synthetic
    category: str             # Food/Cosmetics/Both
    regulatory_status: str
    source: str               # qdrant/google_search
    confidence: float`}
        </pre>

        <hr />

        <h2>Analysis Agent</h2>

        <div className="not-prose mb-4 rounded bg-muted/50 px-3 py-1 text-xs font-mono">
          agents/analysis.py
        </div>

        <p>
          The Analysis Agent generates personalized safety reports using Gemini 2.0 Flash, adapting content based on user profile.
        </p>

        <h3>Personalization Factors</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Factor</th>
                <th className="px-4 py-3 text-left font-semibold">Impact on Report</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Allergies</td>
                <td className="px-4 py-3 text-muted-foreground">Prominent AVOID warnings for matched ingredients</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Skin Type</td>
                <td className="px-4 py-3 text-muted-foreground">Targeted recommendations for sensitivities</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Expertise Level</td>
                <td className="px-4 py-3 text-muted-foreground">Beginner (simple) vs Expert (technical) tone</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tone Adaptation</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`TONE_INSTRUCTIONS = {
    "beginner": """
        Use simple, everyday language.
        Avoid technical jargon.
        Explain concepts clearly for someone new to ingredient analysis.
    """,
    "expert": """
        Use technical terminology when appropriate.
        Include chemical details and concentrations.
        Reference regulatory standards and scientific studies.
    """
}`}
        </pre>

        <h3>Risk Calculation</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def _parse_llm_overall_risk(llm_analysis: str) -> tuple[RiskLevel, int]:
    """Determine overall risk from analysis."""

    # Rule 1: Any AVOID → HIGH risk
    if has_avoid_recommendation(llm_analysis):
        return RiskLevel.HIGH, avg_rating

    # Rule 2: Any banned ingredient → HIGH risk
    if has_regulatory_ban(llm_analysis):
        return RiskLevel.HIGH, avg_rating

    # Rule 3: Calculate from average
    if avg_rating <= 3:
        return RiskLevel.HIGH, avg_rating
    elif avg_rating <= 6:
        return RiskLevel.MEDIUM, avg_rating
    else:
        return RiskLevel.LOW, avg_rating`}
        </pre>

        <hr />

        <h2>Critic Agent</h2>

        <div className="not-prose mb-4 rounded bg-muted/50 px-3 py-1 text-xs font-mono">
          agents/critic.py
        </div>

        <p>
          The Critic Agent validates report quality using a comprehensive 5-gate validation system with automatic retry logic.
        </p>

        <h3>5-Gate Validation System</h3>

        <div className="not-prose my-6 space-y-3">
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">1</span>
            <div>
              <div className="font-semibold">Completeness</div>
              <div className="text-sm text-muted-foreground">All ingredients addressed (8/9 minimum)</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">2</span>
            <div>
              <div className="font-semibold">Format</div>
              <div className="text-sm text-muted-foreground">Valid markdown table structure with required columns</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">3</span>
            <div>
              <div className="font-semibold">Allergen Match</div>
              <div className="text-sm text-muted-foreground">User allergies properly flagged and warned</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">4</span>
            <div>
              <div className="font-semibold">Consistency</div>
              <div className="text-sm text-muted-foreground">Safety ratings align with stated concerns</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">5</span>
            <div>
              <div className="font-semibold">Tone</div>
              <div className="text-sm text-muted-foreground">Appropriate for user expertise level</div>
            </div>
          </div>
        </div>

        <h3>Validation Response Schema</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class CriticFeedback(TypedDict):
    result: ValidationResult      # APPROVED/REJECTED/ESCALATED
    completeness_ok: bool
    format_ok: bool
    allergens_ok: bool
    consistency_ok: bool
    tone_ok: bool
    feedback: str
    failed_gates: list[str]`}
        </pre>

        <h3>Retry Logic</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def validate_report(state: WorkflowState) -> dict:
    # Run validation
    validation_result = _run_multi_gate_validation(report, ...)

    all_gates_passed = all([
        validation_result["completeness_ok"],
        validation_result["format_ok"],
        validation_result["allergens_ok"],
        validation_result["consistency_ok"],
        validation_result["tone_ok"],
    ])

    if all_gates_passed:
        result = ValidationResult.APPROVED
    elif retry_count >= max_retries:
        result = ValidationResult.ESCALATED
    else:
        result = ValidationResult.REJECTED
        new_retry_count = retry_count + 1`}
        </pre>

        <hr />

        <h2>Agent Interaction Sequence</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`Supervisor          Research           Analysis           Critic
    │                   │                  │                  │
    │   route_next()    │                  │                  │
    ├──────────────────>│                  │                  │
    │                   │                  │                  │
    │        Start workflow                │                  │
    │<──────────────────│                  │                  │
    │                   │                  │                  │
    │  ingredient_data[]│                  │                  │
    │<──────────────────│                  │                  │
    │   (parallel)      │                  │                  │
    │                   │                  │                  │
    │   route_next()    │                  │                  │
    ├───────────────────────────────────-->│                  │
    │                                      │                  │
    │              analysis_report         │                  │
    │<─────────────────────────────────────│                  │
    │                                      │                  │
    │   route_next()                       │                  │
    ├─────────────────────────────────────────────────────────>│
    │                                                         │
    │                            [APPROVED / REJECTED]        │
    │<────────────────────────────────────────────────────────│
    │                                                         │
    │   if REJECTED && retries < 2:                          │
    ├───────────────────────────────────-->│  (retry)        │
    │                                      │                  │`}
        </pre>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture Overview →</div>
            <div className="text-sm text-muted-foreground">System design and workflow</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/api-reference"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Reference →</div>
            <div className="text-sm text-muted-foreground">REST endpoint documentation</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/vector-database"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Vector Database →</div>
            <div className="text-sm text-muted-foreground">Qdrant configuration and queries</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/testing"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Testing Guide →</div>
            <div className="text-sm text-muted-foreground">Test coverage and strategies</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
