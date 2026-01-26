import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "User Interface | Professor Gemini",
  description: "Streamlit UI architecture, real-time feedback, and user experience design in Professor Gemini.",
};

export default function UIPage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>User Interface</h1>

        <p className="lead">
          Professor Gemini features a Streamlit-based UI with real-time pipeline feedback, session state management, and a professional theme system optimized for extended use.
        </p>

        <hr />

        <h2>UI Architecture</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph UI["Streamlit Application"]
      SIDEBAR["Sidebar<br/>Navigation + Settings"]
      MAIN["Main Content<br/>Topic Input + Output"]
      CONSOLE["Progress Console<br/>Real-time Feedback"]
    end

    subgraph STATE["Session State"]
      THEME["Theme Preference"]
      HISTORY["Request History"]
      CONFIG["Pipeline Config"]
    end

    subgraph CALLBACKS["Status Callbacks"]
      STEP["Step Progress"]
      SECTION["Section Status"]
      ERROR["Error Handling"]
    end

    SIDEBAR --> STATE
    MAIN --> CALLBACKS
    CALLBACKS --> CONSOLE

    style UI fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style STATE fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style CALLBACKS fill:#d1fae5,stroke:#10b981,stroke-width:2px
`}
        />

        <hr />

        <h2>Layout Structure</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Sidebar</td>
                <td className="px-4 py-3">Navigation and configuration</td>
                <td className="px-4 py-3">Theme toggle, history access, settings panel</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Topic Input</td>
                <td className="px-4 py-3">User query entry</td>
                <td className="px-4 py-3">Text area with placeholder examples, generate button</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Progress Console</td>
                <td className="px-4 py-3">Real-time pipeline status</td>
                <td className="px-4 py-3">Step indicators, section progress, timing metrics</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Output Display</td>
                <td className="px-4 py-3">Generated content</td>
                <td className="px-4 py-3">Markdown rendering, copy/export actions, section navigation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Real-Time Feedback System</h2>

        <div className="not-prose my-4 rounded-lg border-l-4 border-primary bg-primary/10 p-4">
          <div className="font-semibold text-foreground">Key UX Feature</div>
          <p className="mt-2 text-sm text-muted-foreground">Status callbacks provide real-time visibility into pipeline execution, reducing perceived wait time and enabling users to monitor progress.</p>
        </div>

        <h3>Callback Architecture</h3>

        <MermaidDiagram
          chart={`sequenceDiagram
    participant U as User
    participant UI as Streamlit UI
    participant P as Pipeline
    participant G as Gemini API

    U->>UI: Submit topic
    UI->>P: execute(topic, callbacks)
    P->>UI: on_step_start("RAG Retrieval")
    P->>G: Embed query
    G-->>P: Vector
    P->>UI: on_step_complete("RAG", 150ms)
    P->>UI: on_step_start("Base Knowledge")
    P->>G: Generate base
    G-->>P: Content
    P->>UI: on_step_complete("Base", 3200ms)

    loop For each section
        P->>UI: on_section_start(n)
        P->>G: Deep dive
        G-->>P: Section content
        P->>UI: on_section_complete(n, confidence)
    end

    P->>UI: on_complete(result)
    UI->>U: Display Master Guide
`}
        />

        <h3>Status Callback Interface</h3>

        <pre><code>{`@dataclass
class StatusCallbacks:
    """Callbacks for real-time UI updates."""

    on_step_start: Callable[[str], None]
    on_step_complete: Callable[[str, int], None]  # step, duration_ms
    on_section_start: Callable[[int, str], None]  # index, topic
    on_section_complete: Callable[[int, int], None]  # index, confidence
    on_error: Callable[[str, Exception], None]
    on_complete: Callable[[PipelineResult], None]`}</code></pre>

        <h3>Progress Indicators</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Pipeline Steps</div>
            <p className="text-sm text-muted-foreground">Sequential progress bar showing RAG, Base Knowledge, Topic Split, Deep Dive, Synthesis</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Section Grid</div>
            <p className="text-sm text-muted-foreground">Visual grid showing parallel deep dive status with confidence indicators</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Timing Metrics</div>
            <p className="text-sm text-muted-foreground">Per-step and total duration displayed in real-time</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Error States</div>
            <p className="text-sm text-muted-foreground">Graceful error display with retry options and detailed messages</p>
          </div>
        </div>

        <hr />

        <h2>Session State Management</h2>

        <p>Streamlit session state persists data across reruns:</p>

        <pre><code>{`# Session state initialization
if "initialized" not in st.session_state:
    st.session_state.update({
        "initialized": True,
        "theme": "dark",
        "history": [],
        "current_result": None,
        "pipeline_config": {
            "enable_critique": False,
            "local_synthesis": True,
            "rag_top_k": 5,
        },
    })`}</code></pre>

        <h3>State Variables</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Key</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">theme</td>
                <td className="px-4 py-3">str</td>
                <td className="px-4 py-3">Current theme: dark, light, or system</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">history</td>
                <td className="px-4 py-3">list[dict]</td>
                <td className="px-4 py-3">Previous generation requests and results</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">current_result</td>
                <td className="px-4 py-3">PipelineResult</td>
                <td className="px-4 py-3">Active generation result for display</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">pipeline_config</td>
                <td className="px-4 py-3">dict</td>
                <td className="px-4 py-3">User-configurable pipeline settings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Theme System</h2>

        <p>Professional theme system with accessibility-compliant contrast ratios:</p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="mb-2 text-lg font-semibold">Dark</div>
            <p className="text-sm text-muted-foreground">Low-light optimized, reduced eye strain</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="mb-2 text-lg font-semibold">Light</div>
            <p className="text-sm text-muted-foreground">Bright environments, high contrast</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="mb-2 text-lg font-semibold">System</div>
            <p className="text-sm text-muted-foreground">Follows OS preference automatically</p>
          </div>
        </div>

        <h3>Color Palette</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Dark Mode</th>
                <th className="px-4 py-3 text-left font-semibold">Light Mode</th>
                <th className="px-4 py-3 text-left font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">bg-primary</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded" style={{ backgroundColor: "#0d0d0d" }}></span>
                    #0d0d0d
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded border" style={{ backgroundColor: "#ffffff" }}></span>
                    #ffffff
                  </span>
                </td>
                <td className="px-4 py-3">Main background</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">accent</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded" style={{ backgroundColor: "#DAA520" }}></span>
                    #DAA520
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded" style={{ backgroundColor: "#b8860b" }}></span>
                    #b8860b
                  </span>
                </td>
                <td className="px-4 py-3">Goldenrod accent (matches Cyrus)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">text-primary</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded border" style={{ backgroundColor: "#e8eaed" }}></span>
                    #e8eaed
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded" style={{ backgroundColor: "#202124" }}></span>
                    #202124
                  </span>
                </td>
                <td className="px-4 py-3">Primary text</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Output Actions</h2>

        <p>Generated content includes multiple export and interaction options:</p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Copy to Clipboard</div>
            <p className="text-sm text-muted-foreground">One-click copy of full Master Guide content</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Export Markdown</div>
            <p className="text-sm text-muted-foreground">Download as .md file with proper formatting</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Save to Cyrus</div>
            <p className="text-sm text-muted-foreground">Direct save to gemini-responses/ directory</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">View Raw</div>
            <p className="text-sm text-muted-foreground">Toggle between rendered and raw markdown view</p>
          </div>
        </div>

        <hr />

        <h2>Streamlit Configuration</h2>

        <p>Server and theme settings in <code>.streamlit/config.toml</code>:</p>

        <pre><code>{`[server]
port = 8502
headless = true
runOnSave = true
maxUploadSize = 10

[theme]
base = "dark"
primaryColor = "#DAA520"
backgroundColor = "#0d0d0d"
secondaryBackgroundColor = "#1a1a1a"
textColor = "#e8eaed"

[browser]
gatherUsageStats = false

[runner]
fastReruns = true`}</code></pre>

        <hr />

        <h2>Design Principles</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Progressive Disclosure</div>
            <p className="text-sm text-muted-foreground">Core workflow visible by default, advanced settings in sidebar expandable sections</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Visibility of Status</div>
            <p className="text-sm text-muted-foreground">Real-time feedback on all pipeline operations via callbacks</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Error Prevention</div>
            <p className="text-sm text-muted-foreground">Input validation, confirmation dialogs, graceful degradation</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Accessible Contrast</div>
            <p className="text-sm text-muted-foreground">WCAG-compliant color contrast ratios in both themes</p>
          </div>
        </div>

        <hr />

        <h2>Performance Considerations</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Optimization</th>
                <th className="px-4 py-3 text-left font-semibold">Implementation</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Fast Reruns</td>
                <td className="px-4 py-3">Streamlit fastReruns config</td>
                <td className="px-4 py-3">Reduced UI latency on state changes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Cached Settings</td>
                <td className="px-4 py-3">@lru_cache on get_settings()</td>
                <td className="px-4 py-3">Single config load per session</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Lazy Loading</td>
                <td className="px-4 py-3">History loaded on demand</td>
                <td className="px-4 py-3">Faster initial page load</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Incremental Updates</td>
                <td className="px-4 py-3">Callbacks update specific elements</td>
                <td className="px-4 py-3">No full page reloads during generation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
