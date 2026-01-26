import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import Link from "next/link";

export const metadata = {
  title: "Architecture | AI Ingredient Scanner",
  description: "Multi-agent workflow architecture and tech stack powering the AI Ingredient Scanner.",
};

export default function ArchitecturePage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Architecture</h1>

        <p className="lead">
          The AI Ingredient Scanner uses a sophisticated multi-agent architecture powered by LangGraph. Specialized agents handle research, analysis, and validation while maintaining quality through automated retry loops.
        </p>

        <hr />

        <h2>System Overview</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph FRONTEND["Frontend Layer"]
      WEB["Streamlit Web UI<br/>:8501"]
      MOBILE["React Native Mobile<br/>Camera / OCR / Firebase Auth"]
    end

    subgraph BACKEND["Backend Layer"]
      API["FastAPI REST API :8000<br/>POST /ocr / POST /analyze"]

      subgraph LANGGRAPH["LangGraph Workflow Engine"]
        SUP["Supervisor<br/>Agent"]
        RES["Research<br/>Agent"]
        ANA["Analysis<br/>Agent"]
        CRI["Critic<br/>Agent"]
        LOOKUP["Parallel Lookup<br/>(3 workers)"]
        VALIDATE["5-Gate Validate<br/>APPROVED/REJECT"]
      end
    end

    subgraph DATA["Data Layer"]
      QDRANT["Qdrant Cloud<br/>Vector Search"]
      REDIS["Redis Cloud<br/>Session Cache"]
      LANGSMITH["LangSmith<br/>Observability"]
    end

    subgraph AI["AI Services"]
      GEMINI["Gemini 2.0 Flash<br/>Analysis + OCR"]
      SEARCH["Google Search Grounding<br/>Real-time web fallback"]
    end

    WEB --> API
    MOBILE --> API
    API --> SUP
    SUP --> RES
    RES --> ANA
    ANA --> CRI
    RES --> LOOKUP
    CRI --> VALIDATE
    LOOKUP --> QDRANT
    API --> REDIS
    API --> LANGSMITH
    QDRANT --> GEMINI
    QDRANT --> SEARCH

    style WEB fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style MOBILE fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style API fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style SUP fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style RES fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style ANA fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style CRI fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style LOOKUP fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style VALIDATE fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style QDRANT fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style REDIS fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style LANGSMITH fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style GEMINI fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style SEARCH fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
`}
        />

        <hr />

        <h2>Multi-Agent Workflow</h2>

        <p>
          The workflow orchestrates four specialized agents in sequence, with the Supervisor managing routing and retry logic.
        </p>

        <h3>Agent Responsibilities</h3>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🎯</span>
              <span className="font-semibold">Supervisor Agent</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Workflow orchestrator that determines which agent processes next based on current state.
            </p>
            <ul className="text-sm space-y-1">
              <li>Routes to Research if ingredient data is missing</li>
              <li>Routes to Analysis if report needs generation</li>
              <li>Routes to Critic for quality validation</li>
              <li>Handles retry logic (max 2 attempts)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🔬</span>
              <span className="font-semibold">Research Agent</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Fetches ingredient safety data from multiple sources with parallel processing.
            </p>
            <ul className="text-sm space-y-1">
              <li><strong>Parallel Processing:</strong> Handles 3+ ingredients concurrently</li>
              <li><strong>Dual-Source Strategy:</strong> Qdrant first, Google Search fallback</li>
              <li><strong>Confidence Threshold:</strong> 0.7 minimum for Qdrant results</li>
              <li><strong>Auto-Learning:</strong> Saves search results back to Qdrant</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">📊</span>
              <span className="font-semibold">Analysis Agent</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Generates personalized safety reports using Gemini 2.0 Flash.
            </p>
            <ul className="text-sm space-y-1">
              <li><strong>Personalization:</strong> Considers allergies, skin type, expertise level</li>
              <li><strong>Output:</strong> Verdict, summary, warnings, recommendations, ingredient table</li>
              <li><strong>Modes:</strong> Beginner (simple) vs Expert (technical) explanations</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">✅</span>
              <span className="font-semibold">Critic Agent</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Validates report quality using a 5-gate validation system.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 text-left">Gate</th>
                    <th className="py-2 text-left">Check</th>
                    <th className="py-2 text-left">Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2">1. Completeness</td>
                    <td className="py-2">All ingredients addressed</td>
                    <td className="py-2">8/9 ingredients = PASS</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2">2. Format</td>
                    <td className="py-2">Markdown structure</td>
                    <td className="py-2">Valid table exists</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2">3. Allergen Match</td>
                    <td className="py-2">User allergies flagged</td>
                    <td className="py-2">Matching highlighted</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2">4. Consistency</td>
                    <td className="py-2">Ratings match concerns</td>
                    <td className="py-2">Ratings 1-10 valid</td>
                  </tr>
                  <tr>
                    <td className="py-2">5. Tone</td>
                    <td className="py-2">Appropriate for expertise</td>
                    <td className="py-2">Readable, informative</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h3>Validation Outcomes</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border-2 border-green-500 bg-green-500/10 p-4 text-center">
            <div className="font-semibold text-green-600 dark:text-green-400">APPROVED</div>
            <div className="text-sm text-muted-foreground">All gates pass → deliver report</div>
          </div>
          <div className="rounded-lg border-2 border-yellow-500 bg-yellow-500/10 p-4 text-center">
            <div className="font-semibold text-yellow-600 dark:text-yellow-400">REJECTED</div>
            <div className="text-sm text-muted-foreground">Critical failures → retry (max 2)</div>
          </div>
          <div className="rounded-lg border-2 border-red-500 bg-red-500/10 p-4 text-center">
            <div className="font-semibold text-red-600 dark:text-red-400">ESCALATED</div>
            <div className="text-sm text-muted-foreground">Max retries → deliver with warning</div>
          </div>
        </div>

        <hr />

        <h2>State Management</h2>

        <p>
          The workflow uses a typed state dictionary to maintain context across agents:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class WorkflowState(TypedDict):
    session_id: str
    product_name: str
    raw_ingredients: list[str]
    user_profile: UserProfile
    ingredient_data: list[IngredientData]
    analysis_report: AnalysisReport | None
    critic_feedback: CriticFeedback | None
    retry_count: int
    routing_history: list[str]
    stage_timings: StageTiming
    error: str | None`}
        </pre>

        <hr />

        <h2>Research Data Schema</h2>

        <p>
          Each ingredient lookup returns structured safety data:
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Field</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">safety_rating</td>
                <td className="px-4 py-3">int (1-10)</td>
                <td className="px-4 py-3 text-muted-foreground">Safety score (10 = safest)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">concerns</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">Known safety issues</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">recommendation</td>
                <td className="px-4 py-3">enum</td>
                <td className="px-4 py-3 text-muted-foreground">SAFE / CAUTION / AVOID</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">allergy_risk_flag</td>
                <td className="px-4 py-3">enum</td>
                <td className="px-4 py-3 text-muted-foreground">HIGH / LOW</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">origin</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">Natural / Synthetic</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">regulatory_status</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">US FDA and EU status</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Technology Stack</h2>

        <h3>Core AI</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Technology</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Google Gemini 2.0 Flash</td>
                <td className="px-4 py-3">LLM</td>
                <td className="px-4 py-3 text-muted-foreground">Analysis, validation, translation, OCR</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LangGraph</td>
                <td className="px-4 py-3">Orchestration</td>
                <td className="px-4 py-3 text-muted-foreground">Multi-agent workflow management</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LangSmith</td>
                <td className="px-4 py-3">Tracing</td>
                <td className="px-4 py-3 text-muted-foreground">LLM call logging and debugging</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Backend</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Technology</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Python 3.11+</td>
                <td className="px-4 py-3">Language</td>
                <td className="px-4 py-3 text-muted-foreground">Type hints, async support</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">FastAPI</td>
                <td className="px-4 py-3">REST API</td>
                <td className="px-4 py-3 text-muted-foreground">Mobile app integration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Streamlit</td>
                <td className="px-4 py-3">Web UI</td>
                <td className="px-4 py-3 text-muted-foreground">Interactive dashboard</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Pydantic</td>
                <td className="px-4 py-3">Validation</td>
                <td className="px-4 py-3 text-muted-foreground">Request/response schemas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Data Layer</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Technology</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Qdrant Cloud</td>
                <td className="px-4 py-3">Vector DB</td>
                <td className="px-4 py-3 text-muted-foreground">Semantic ingredient search</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Redis Cloud</td>
                <td className="px-4 py-3">Caching</td>
                <td className="px-4 py-3 text-muted-foreground">Session persistence (24h TTL)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Google Embeddings</td>
                <td className="px-4 py-3">Vectors</td>
                <td className="px-4 py-3 text-muted-foreground">gemini-embedding-001 model</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Mobile</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Technology</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">React Native</td>
                <td className="px-4 py-3">Framework</td>
                <td className="px-4 py-3 text-muted-foreground">Cross-platform mobile</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Expo</td>
                <td className="px-4 py-3">Toolchain</td>
                <td className="px-4 py-3 text-muted-foreground">Development and builds</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">TypeScript</td>
                <td className="px-4 py-3">Language</td>
                <td className="px-4 py-3 text-muted-foreground">Type-safe mobile code</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Firebase Auth</td>
                <td className="px-4 py-3">Authentication</td>
                <td className="px-4 py-3 text-muted-foreground">Google Sign-In</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Firestore</td>
                <td className="px-4 py-3">Database</td>
                <td className="px-4 py-3 text-muted-foreground">User profiles & settings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Performance Characteristics</h2>

        <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">3-5s</div>
            <div className="text-sm text-muted-foreground">Research Time</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">5-8s</div>
            <div className="text-sm text-muted-foreground">Analysis Time</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">2-3s</div>
            <div className="text-sm text-muted-foreground">Critic Time</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">10-15s</div>
            <div className="text-sm text-muted-foreground">Total (First Run)</div>
          </div>
        </div>

        <h3>Caching Strategy</h3>

        <ul>
          <li><strong>Qdrant:</strong> Ingredient data persisted permanently</li>
          <li><strong>Redis:</strong> Session state cached for 24 hours</li>
          <li><strong>LRU Cache:</strong> In-memory settings caching</li>
        </ul>

        <h3>Parallel Processing</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Research agent processes 3 ingredients per worker
BATCH_SIZE = 3

with ThreadPoolExecutor(max_workers=num_workers) as executor:
    futures = {
        executor.submit(_research_batch, idx, batch): idx
        for idx, batch in enumerate(batches)
    }`}
        </pre>

        <hr />

        <h2>Deployment Options</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Environment</th>
                <th className="px-4 py-3 text-left font-semibold">Stack</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Local Development</td>
                <td className="px-4 py-3 text-muted-foreground">Streamlit + uvicorn</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Production API</td>
                <td className="px-4 py-3 text-muted-foreground">Railway</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Production Web</td>
                <td className="px-4 py-3 text-muted-foreground">Cloudflare Pages</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Mobile Testing</td>
                <td className="px-4 py-3 text-muted-foreground">Expo Go</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Production Mobile</td>
                <td className="px-4 py-3 text-muted-foreground">EAS Build</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/agents"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Agent Implementation →</div>
            <div className="text-sm text-muted-foreground">Detailed agent code and prompts</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/vector-database"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Vector Database →</div>
            <div className="text-sm text-muted-foreground">Qdrant configuration and queries</div>
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
            <div className="font-semibold text-foreground">Deployment Guide →</div>
            <div className="text-sm text-muted-foreground">Production setup instructions</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
