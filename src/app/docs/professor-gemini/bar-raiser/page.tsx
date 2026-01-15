import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Bar Raiser Critique | Professor Gemini",
  description: "Claude-powered adversarial quality critique system in Professor Gemini.",
};

export default function BarRaiserPage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Bar Raiser Critique</h1>

        <p className="lead">
          The Bar Raiser is a Claude-powered quality validation system that ensures generated content meets high standards through adversarial critique.
        </p>

        <hr />

        <h2>What is Bar Raiser?</h2>

        <p>
          Inspired by Amazons Bar Raiser interview process, this component acts as an independent reviewer that evaluates content quality and provides actionable feedback.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Quality Assessment</div>
            <p className="text-sm text-muted-foreground">Scores content on completeness, accuracy, and clarity</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Improvement Feedback</div>
            <p className="text-sm text-muted-foreground">Specific suggestions for content enhancement</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Confidence Scoring</div>
            <p className="text-sm text-muted-foreground">0-100 scale for quality threshold decisions</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Retry Loop</div>
            <p className="text-sm text-muted-foreground">Automatic revision until quality threshold met</p>
          </div>
        </div>

        <hr />

        <h2>Critique Flow</h2>

        <MermaidDiagram
          chart={`flowchart TB
    DRAFT["Gemini Draft"]
    CRITIQUE["Claude Bar Raiser"]
    CHECK{"Confidence >= 70?"}
    REVISE["Revise with Feedback"]
    ACCEPT["Accept Content"]
    FLAG["Flag Low Confidence"]

    DRAFT --> CRITIQUE
    CRITIQUE --> CHECK
    CHECK -->|Yes| ACCEPT
    CHECK -->|No, retries left| REVISE
    REVISE --> CRITIQUE
    CHECK -->|No, max retries| FLAG

    style DRAFT fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style CRITIQUE fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style ACCEPT fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style FLAG fill:#fee2e2,stroke:#ef4444,stroke-width:2px
`}
        />

        <hr />

        <h2>BarRaiserResult Structure</h2>

        <pre><code>{`@dataclass
class BarRaiserResult:
    topic: str                    # Section topic
    content: str                  # Final content
    confidence: int               # 0-100 quality score
    feedback: Optional[str]       # Improvement suggestions
    attempts: int                 # Number of attempts
    low_confidence: bool          # Flagged for review
    critique_summary: str         # Brief assessment`}</code></pre>

        <hr />

        <h2>Confidence Thresholds</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Score Range</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <span className="rounded bg-green-100 px-2 py-0.5 text-green-700 dark:bg-green-900/30 dark:text-green-300">70-100</span>
                </td>
                <td className="px-4 py-3 font-medium">High Confidence</td>
                <td className="px-4 py-3">Accept content as-is</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <span className="rounded bg-amber-100 px-2 py-0.5 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">50-69</span>
                </td>
                <td className="px-4 py-3 font-medium">Medium Confidence</td>
                <td className="px-4 py-3">Revise with feedback (if retries available)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-red-700 dark:bg-red-900/30 dark:text-red-300">0-49</span>
                </td>
                <td className="px-4 py-3 font-medium">Low Confidence</td>
                <td className="px-4 py-3">Immediate revision or flag if max retries reached</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Critique Prompt</h2>

        <p>The Bar Raiser uses a structured prompt to evaluate content:</p>

        <pre><code>{`You are a Bar Raiser reviewing educational content.

Topic: {topic}
Content to Review:
{content}

Evaluate the content on:
1. Completeness - Does it cover the topic adequately?
2. Accuracy - Is the information correct?
3. Clarity - Is it well-explained for learners?
4. Structure - Is it logically organized?
5. Examples - Are there helpful examples?

Provide:
- Confidence score (0-100)
- Specific improvement suggestions
- Brief summary of assessment`}</code></pre>

        <hr />

        <h2>Configuration</h2>

        <pre><code>{`# .env
ANTHROPIC_API_KEY=your_claude_api_key

# Optional settings
CLAUDE_MODEL=claude-opus-4-5-20251101
MAX_RETRIES=2`}</code></pre>

        <h3>Disabling Bar Raiser</h3>

        <p>For faster processing or when Claude API is unavailable:</p>

        <pre><code>{`# In settings or environment
enable_critique=False`}</code></pre>

        <p>When disabled:</p>

        <ul>
          <li>All drafts are accepted without review</li>
          <li>No confidence scoring</li>
          <li>Faster pipeline execution</li>
          <li>Lower API costs</li>
        </ul>

        <hr />

        <h2>Low Confidence Handling</h2>

        <p>When content remains low confidence after max retries:</p>

        <ol>
          <li><strong>Flag the section</strong> - Marked in final result</li>
          <li><strong>Include best attempt</strong> - Uses highest-scoring version</li>
          <li><strong>Log for review</strong> - Added to request history</li>
          <li><strong>UI indicator</strong> - Shown in Streamlit output</li>
        </ol>

        <div className="not-prose my-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-950/30">
          <div className="font-semibold text-amber-700 dark:text-amber-300">Tip</div>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-200">
            Low confidence sections are included in the final guide but highlighted for user review. Consider manually revising these sections.
          </p>
        </div>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
