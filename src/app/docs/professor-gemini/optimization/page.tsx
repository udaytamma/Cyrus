import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";

export const metadata = {
  title: "Optimization Modes | Professor Gemini",
  description: "Configuration options to reduce API calls and improve performance in Professor Gemini.",
};

export default function OptimizationPage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Optimization Modes</h1>

        <p className="lead">
          Professor Gemini offers several optimization modes to reduce API costs, improve speed, and handle rate limits gracefully.
        </p>

        <hr />

        <h2>Optimization Overview</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Mode</th>
                <th className="px-4 py-3 text-left font-semibold">API Calls Saved</th>
                <th className="px-4 py-3 text-left font-semibold">Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Local Topic Split</td>
                <td className="px-4 py-3">1 per request</td>
                <td className="px-4 py-3">Requires structured Roman numeral output</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Disable Critique</td>
                <td className="px-4 py-3">N per request (N = sections)</td>
                <td className="px-4 py-3">No quality validation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Local Synthesis</td>
                <td className="px-4 py-3">1 per request</td>
                <td className="px-4 py-3">Basic concatenation vs unified narrative</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Local Topic Split</h2>

        <p><strong>Status:</strong> Enabled by default</p>

        <p>Instead of calling Gemini to parse the base knowledge into topics, the pipeline uses regex to extract Roman numeral sections.</p>

        <h3>How It Works</h3>

        <pre><code>{`def split_by_roman_numerals(content: str) -> list[str]:
    """Parse Roman numeral sections locally.

    Matches patterns like:
    - I. Introduction
    - II. Core Concepts
    - III. Applications
    """
    pattern = r'^(I{1,3}|IV|V|VI{0,3}|IX|X)\\.'
    sections = re.split(pattern, content, flags=re.MULTILINE)
    return [s.strip() for s in sections if s.strip()]`}</code></pre>

        <h3>Fallback Behavior</h3>

        <p>If local parsing fails (e.g., unexpected format), the pipeline automatically falls back to Gemini for topic splitting.</p>

        <hr />

        <h2>Disable Critique</h2>

        <p><strong>Configuration:</strong> <code>enable_critique=False</code></p>

        <p>Skips the Bar Raiser quality validation step entirely.</p>

        <h3>When to Use</h3>

        <ul>
          <li>Claude API is unavailable</li>
          <li>Speed is priority over quality</li>
          <li>Cost-sensitive use cases</li>
          <li>Debugging pipeline issues</li>
        </ul>

        <h3>Impact</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-green-500/30 bg-green-50 p-4 dark:bg-green-950/30">
            <div className="mb-2 font-semibold text-green-700 dark:text-green-300">Benefits</div>
            <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-200">
              <li>Significantly faster execution</li>
              <li>Lower API costs</li>
              <li>No Claude dependency</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-red-50 p-4 dark:bg-red-950/30">
            <div className="mb-2 font-semibold text-red-700 dark:text-red-300">Trade-offs</div>
            <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-200">
              <li>No quality validation</li>
              <li>No confidence scoring</li>
              <li>Potential quality issues undetected</li>
            </ul>
          </div>
        </div>

        <hr />

        <h2>Local Synthesis</h2>

        <p><strong>Configuration:</strong> <code>local_synthesis=True</code></p>

        <p>Instead of using Gemini to synthesize the final Master Guide, concatenates sections locally.</p>

        <h3>Implementation</h3>

        <pre><code>{`def synthesize_locally(sections: list[str]) -> str:
    """Concatenate sections with headers and dividers."""
    result = []
    for i, section in enumerate(sections, 1):
        result.append(f"## Section {i}\\n\\n{section}")
    return "\\n\\n---\\n\\n".join(result)`}</code></pre>

        <h3>Comparison</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Aspect</th>
                <th className="px-4 py-3 text-left font-semibold">Gemini Synthesis</th>
                <th className="px-4 py-3 text-left font-semibold">Local Synthesis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Narrative Flow</td>
                <td className="px-4 py-3">Unified, coherent</td>
                <td className="px-4 py-3">Section-by-section</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Cross-references</td>
                <td className="px-4 py-3">Added by Gemini</td>
                <td className="px-4 py-3">None</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Executive Summary</td>
                <td className="px-4 py-3">Generated</td>
                <td className="px-4 py-3">Not included</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Speed</td>
                <td className="px-4 py-3">+10-30 seconds</td>
                <td className="px-4 py-3">Instant</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">API Cost</td>
                <td className="px-4 py-3">+1 call</td>
                <td className="px-4 py-3">$0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Recommended Configurations</h2>

        <h3>Production (Quality Focus)</h3>

        <pre><code>{`# .env
enable_critique=True
local_synthesis=False
MAX_WORKERS=10
MAX_RETRIES=2`}</code></pre>

        <h3>Development (Speed Focus)</h3>

        <pre><code>{`# .env
enable_critique=False
local_synthesis=True
MAX_WORKERS=5
MAX_RETRIES=1`}</code></pre>

        <h3>Budget-Constrained</h3>

        <pre><code>{`# .env
enable_critique=False
local_synthesis=True
MAX_WORKERS=3
MAX_RETRIES=0`}</code></pre>

        <hr />

        <h2>API Cost Estimation</h2>

        <p>For a typical 8-section topic:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Configuration</th>
                <th className="px-4 py-3 text-left font-semibold">Gemini Calls</th>
                <th className="px-4 py-3 text-left font-semibold">Claude Calls</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Full Pipeline</td>
                <td className="px-4 py-3">10 (base + 8 deep + synth)</td>
                <td className="px-4 py-3">8-16 (critique + retries)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Critique Disabled</td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3">0</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Local Synthesis</td>
                <td className="px-4 py-3">9</td>
                <td className="px-4 py-3">8-16</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Fully Optimized</td>
                <td className="px-4 py-3">9</td>
                <td className="px-4 py-3">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
