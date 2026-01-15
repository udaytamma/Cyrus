import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Pipeline Steps | Professor Gemini",
  description: "Detailed breakdown of the 4-step content generation pipeline in Professor Gemini.",
};

export default function PipelinePage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Pipeline Steps</h1>

        <p className="lead">
          Professor Gemini uses a 4-step pipeline to generate comprehensive Master Guides from any topic.
        </p>

        <hr />

        <h2>Pipeline Overview</h2>

        <MermaidDiagram
          chart={`flowchart LR
    S1["Step 1<br/>Base Knowledge"]
    S2["Step 2<br/>Topic Split"]
    S3["Step 3<br/>Deep Dive"]
    S4["Step 4<br/>Synthesis"]

    S1 --> S2 --> S3 --> S4

    style S1 fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style S2 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style S3 fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style S4 fill:#fce7f3,stroke:#ec4899,stroke-width:2px
`}
        />

        <hr />

        <h2>Step 1: Base Knowledge</h2>

        <div className="not-prose my-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
          <div className="font-semibold text-blue-700 dark:text-blue-300">Model: Gemini</div>
        </div>

        <p>The pipeline begins by generating a foundational overview of the topic with structured Roman numeral sections.</p>

        <h3>What It Does</h3>

        <ul>
          <li>Takes the user topic as input</li>
          <li>Generates a comprehensive outline with 5-10 major sections</li>
          <li>Uses Roman numerals (I, II, III, etc.) for easy parsing</li>
          <li>Each section includes a brief summary</li>
        </ul>

        <h3>Example Output Structure</h3>

        <pre><code>{`I. Introduction to [Topic]
   - Core concepts and definitions
   - Historical context

II. Fundamental Principles
   - Key theories and frameworks
   - Building blocks

III. Practical Applications
   - Real-world use cases
   - Industry examples
...`}</code></pre>

        <hr />

        <h2>Step 2: Topic Split</h2>

        <div className="not-prose my-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-950/30">
          <div className="font-semibold text-amber-700 dark:text-amber-300">Model: Local Processing (default) or Gemini/Claude</div>
        </div>

        <p>Parses the base knowledge into individual topics for deep dive processing.</p>

        <h3>Local Processing (Default)</h3>

        <p>The default mode uses regex to parse Roman numerals:</p>

        <pre><code>{`def split_by_roman_numerals(content: str) -> list[str]:
    """Parse content by Roman numeral sections."""
    pattern = r'^(I{1,3}|IV|V|VI{0,3}|IX|X)\\.'
    sections = re.split(pattern, content, flags=re.MULTILINE)
    return [s.strip() for s in sections if s.strip()]`}</code></pre>

        <h3>Benefits of Local Split</h3>

        <ul>
          <li>Zero API calls required</li>
          <li>Instant processing</li>
          <li>Deterministic results</li>
          <li>Falls back to Gemini if parsing fails</li>
        </ul>

        <hr />

        <h2>Step 3: Deep Dive</h2>

        <div className="not-prose my-4 rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950/30">
          <div className="font-semibold text-green-700 dark:text-green-300">Model: Gemini (drafts) + optional critique (Gemini or Claude)</div>
        </div>

        <p>This is the core step where each topic is explored in depth with parallel processing. By default, critique is disabled for faster generation.</p>

        <h3>Parallel Processing</h3>

        <MermaidDiagram
          chart={`flowchart TB
    TOPICS["Parsed Topics"]

    subgraph PARALLEL["ThreadPoolExecutor (max 10 workers)"]
      T1["Topic 1"]
      T2["Topic 2"]
      T3["Topic 3"]
      TN["Topic N"]
    end

    TOPICS --> T1
    TOPICS --> T2
    TOPICS --> T3
    TOPICS --> TN

    style PARALLEL fill:#d1fae5,stroke:#10b981,stroke-width:2px
`}
        />

        <h3>Deep Dive Flow (Per Topic)</h3>

        <ol>
          <li><strong>Draft Generation</strong> - Gemini creates comprehensive content</li>
          <li><strong>Bar Raiser Critique</strong> - Claude evaluates quality (if enabled)</li>
          <li><strong>Confidence Check</strong> - Score threshold evaluation</li>
          <li><strong>Revision Loop</strong> - Retry with feedback if needed</li>
        </ol>

        <h3>Configuration</h3>

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
                <td className="px-4 py-3 font-mono text-xs">MAX_WORKERS</td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3">Maximum parallel deep dive threads</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">MAX_RETRIES</td>
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">Retry attempts after low-confidence critique</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">ENABLE_CRITIQUE</td>
                <td className="px-4 py-3">false</td>
                <td className="px-4 py-3">Enable Bar Raiser quality validation (off by default)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">USE_CLAUDE</td>
                <td className="px-4 py-3">false</td>
                <td className="px-4 py-3">Use Claude for critique instead of Gemini</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Step 4: Synthesis</h2>

        <div className="not-prose my-4 rounded-lg border-l-4 border-pink-500 bg-pink-50 p-4 dark:bg-pink-950/30">
          <div className="font-semibold text-pink-700 dark:text-pink-300">Model: Local Processing (default) or Gemini/Claude</div>
        </div>

        <p>Combines all deep dive results into a cohesive Master Guide.</p>

        <h3>Local Synthesis (Default)</h3>

        <p>When <code>LOCAL_SYNTHESIS=true</code> (the default):</p>

        <pre><code>{`def synthesize_locally(sections: list[str]) -> str:
    """Concatenate sections with headers."""
    result = []
    for i, section in enumerate(sections, 1):
        result.append(f"## Section {i}\\n\\n{section}")
    return "\\n\\n---\\n\\n".join(result)`}</code></pre>

        <h3>Benefits of Local Synthesis</h3>

        <ul>
          <li>Zero additional API calls</li>
          <li>Faster completion</li>
          <li>Preserves original content exactly</li>
          <li>Reduced cost</li>
        </ul>

        <h3>Gemini/Claude Synthesis (Optional)</h3>

        <p>Set <code>LOCAL_SYNTHESIS=false</code> to enable API synthesis:</p>

        <ul>
          <li>Unified narrative flow</li>
          <li>Cross-references between sections</li>
          <li>Executive summary generation</li>
          <li>Consistent formatting</li>
        </ul>


        <hr />

        <h2>Pipeline Result</h2>

        <p>The pipeline returns a structured result object:</p>

        <pre><code>{`@dataclass
class PipelineResult:
    session_id: str
    topic: str
    master_guide: str           # Final synthesized content
    low_confidence_sections: int # Sections flagged for review
    total_sections: int
    steps: list[PipelineStep]   # Timing and status
    deep_dive_results: list[BarRaiserResult]
    total_duration_ms: int
    success: bool
    error: Optional[str]`}</code></pre>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
