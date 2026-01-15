import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Architecture | Professor Gemini",
  description: "System architecture and design of Professor Gemini hybrid AI learning platform.",
};

export default function ArchitecturePage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Architecture</h1>

        <p className="lead">
          Professor Gemini uses a hybrid AI architecture that combines the strengths of multiple AI models for optimal content generation.
        </p>

        <hr />

        <h2>System Overview</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph UI["Streamlit UI"]
      INPUT["Topic Input"]
      CONSOLE["Progress Console"]
      OUTPUT["Master Guide Display"]
    end

    subgraph CORE["Core Pipeline"]
      PIPE["Pipeline Orchestrator"]
      GEMINI["Gemini Client"]
      BAR["Bar Raiser"]
      LOCAL["Local Processing"]
    end

    subgraph STORAGE["Storage"]
      HISTORY["Request History"]
      GUIDES["Generated Guides"]
    end

    INPUT --> PIPE
    PIPE --> GEMINI
    PIPE --> BAR
    PIPE --> LOCAL
    PIPE --> CONSOLE
    PIPE --> OUTPUT
    PIPE --> HISTORY
    OUTPUT --> GUIDES

    style INPUT fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style OUTPUT fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style PIPE fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
`}
        />

        <hr />

        <h2>Component Breakdown</h2>

        <h3>1. Streamlit UI (app.py)</h3>

        <p>The user interface layer handles:</p>

        <ul>
          <li><strong>Topic input</strong> - Text input for learning topics</li>
          <li><strong>Theme management</strong> - Light/Dark/System theme toggle</li>
          <li><strong>Progress display</strong> - Real-time pipeline updates</li>
          <li><strong>History view</strong> - Previous requests and results</li>
          <li><strong>Export options</strong> - Markdown download and clipboard</li>
        </ul>

        <h3>2. Pipeline Orchestrator (core/pipeline.py)</h3>

        <p>Coordinates the 4-step content generation process:</p>

        <ul>
          <li><strong>Step management</strong> - Tracks timing and status of each step</li>
          <li><strong>Parallel execution</strong> - ThreadPoolExecutor for deep dives</li>
          <li><strong>Error handling</strong> - Graceful degradation with fallbacks</li>
          <li><strong>Status callbacks</strong> - Real-time UI updates</li>
        </ul>

        <h3>3. Gemini Client (core/gemini_client.py)</h3>

        <p>Wrapper for Google Gemini API:</p>

        <ul>
          <li><strong>Content generation</strong> - Base knowledge and deep dives</li>
          <li><strong>Structured prompts</strong> - Roman numeral sections</li>
          <li><strong>Retry logic</strong> - Handles rate limits and errors</li>
          <li><strong>Async support</strong> - For Gemini-only mode</li>
        </ul>

        <h3>4. Bar Raiser (core/bar_raiser.py)</h3>

        <p>Claude-powered critique agent:</p>

        <ul>
          <li><strong>Quality assessment</strong> - Confidence scoring (0-100)</li>
          <li><strong>Improvement suggestions</strong> - Specific feedback</li>
          <li><strong>Retry loop</strong> - Revise until quality threshold met</li>
          <li><strong>Low-confidence flagging</strong> - Marks sections for review</li>
        </ul>

        <h3>5. Local Processing (core/local_processing.py)</h3>

        <p>Optimization layer to reduce API calls:</p>

        <ul>
          <li><strong>Roman numeral parsing</strong> - Extract sections without API</li>
          <li><strong>Local synthesis</strong> - Concatenate sections locally</li>
          <li><strong>Fallback handling</strong> - Graceful degradation</li>
        </ul>

        <hr />

        <h2>Data Flow</h2>

        <MermaidDiagram
          chart={`sequenceDiagram
    participant U as User
    participant S as Streamlit
    participant P as Pipeline
    participant G as Gemini
    participant C as Claude

    U->>S: Enter topic
    S->>P: Start pipeline
    P->>G: Generate base knowledge
    G-->>P: Roman numeral sections
    P->>P: Parse sections locally

    loop For each section
        P->>G: Deep dive request
        G-->>P: Draft content
        P->>C: Bar Raiser critique
        C-->>P: Confidence + feedback
        alt Low confidence
            P->>G: Revise with feedback
            G-->>P: Revised content
        end
    end

    P->>G: Synthesize master guide
    G-->>P: Final content
    P->>S: Display result
    S->>U: Show Master Guide
`}
        />

        <hr />

        <h2>Configuration Architecture</h2>

        <p>Settings are managed via Pydantic Settings with environment variable support:</p>

        <pre><code>{`# config/settings.py
class Settings(BaseSettings):
    # API Keys
    gemini_api_key: str
    anthropic_api_key: Optional[str] = None

    # Model Configuration
    gemini_model: str = "gemini-3-pro-preview"
    claude_model: str = "claude-opus-4-5-20251101"

    # Pipeline Settings
    max_workers: int = 10
    max_retries: int = 2
    api_timeout: int = 120

    # Feature Flags
    enable_critique: bool = True
    local_synthesis: bool = False`}</code></pre>

        <hr />

        <h2>File Structure</h2>

        <pre><code>{`ProfessorGemini/
├── app.py                    # Streamlit entry point
│
├── config/
│   ├── __init__.py
│   └── settings.py           # Pydantic configuration
│
├── core/
│   ├── __init__.py
│   ├── pipeline.py           # Main orchestrator
│   ├── gemini_client.py      # Gemini API wrapper
│   ├── bar_raiser.py         # Claude critique agent
│   └── local_processing.py   # Local optimizations
│
├── utils/
│   ├── __init__.py
│   ├── logging_utils.py      # Structured logging
│   └── file_utils.py         # File management
│
├── tests/
│   ├── __init__.py
│   ├── conftest.py           # pytest fixtures
│   ├── test_claude_client.py
│   └── test_logging_utils.py
│
├── gemini-responses/         # Output directory
├── .streamlit/
│   └── config.toml           # Streamlit config
├── .env.example
├── requirements.txt
└── pyproject.toml`}</code></pre>

        <hr />

        <h2>Design Decisions</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Decision</th>
                <th className="px-4 py-3 text-left font-semibold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Gemini for content</td>
                <td className="px-4 py-3">Better at educational content generation, higher throughput</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Claude for critique</td>
                <td className="px-4 py-3">Superior at structured analysis and quality assessment</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Roman numeral sections</td>
                <td className="px-4 py-3">Easy to parse locally, clear structure for deep dives</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Parallel deep dives</td>
                <td className="px-4 py-3">Reduces total pipeline time significantly</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Local fallbacks</td>
                <td className="px-4 py-3">Reduces API costs, handles rate limits gracefully</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
