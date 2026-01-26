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
          Professor Gemini offers several optimization modes to reduce API costs, improve speed, and handle rate limits gracefully. The most significant is RAG retrieval, which reduces token costs by 94%.
        </p>

        <hr />

        <h2>Optimization Overview</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Mode</th>
                <th className="px-4 py-3 text-left font-semibold">Savings</th>
                <th className="px-4 py-3 text-left font-semibold">Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-primary/5">
                <td className="px-4 py-3 font-medium">RAG Retrieval</td>
                <td className="px-4 py-3 font-semibold text-primary">94% token reduction</td>
                <td className="px-4 py-3">Requires Qdrant setup, initial document sync</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Local Topic Split</td>
                <td className="px-4 py-3">1 API call per request</td>
                <td className="px-4 py-3">Requires structured Roman numeral output</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Disable Critique</td>
                <td className="px-4 py-3">N API calls (N = sections)</td>
                <td className="px-4 py-3">No quality validation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Local Synthesis</td>
                <td className="px-4 py-3">1 API call per request</td>
                <td className="px-4 py-3">Basic concatenation vs unified narrative</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>RAG Retrieval (Primary Optimization)</h2>

        <div className="not-prose my-4 rounded-lg border-l-4 border-primary bg-primary/10 p-4">
          <div className="font-semibold text-foreground">Biggest Impact: ~$0.58 saved per request</div>
          <p className="mt-2 text-sm text-muted-foreground">RAG reduces context from 2.5M characters (~$0.62) to 150KB (~$0.04) by retrieving only relevant documents from Qdrant.</p>
        </div>

        <p><strong>Status:</strong> Enabled by default when Qdrant is configured</p>

        <h3>How It Works</h3>

        <ul>
          <li>400+ documents indexed in Qdrant Cloud with gemini-embedding-001</li>
          <li>User query embedded and matched against document vectors</li>
          <li>Top-5 relevant documents retrieved (~150KB context)</li>
          <li>Only relevant context sent to Gemini instead of full corpus</li>
        </ul>

        <h3>Token Savings</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Mode</th>
                <th className="px-4 py-3 text-left font-semibold">Context Size</th>
                <th className="px-4 py-3 text-left font-semibold">Tokens</th>
                <th className="px-4 py-3 text-left font-semibold">Cost/Request</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Full Context</td>
                <td className="px-4 py-3">2.5M chars</td>
                <td className="px-4 py-3">~625K</td>
                <td className="px-4 py-3">~$0.62</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="px-4 py-3 font-medium">RAG (top-5)</td>
                <td className="px-4 py-3">150K chars</td>
                <td className="px-4 py-3">~37K</td>
                <td className="px-4 py-3 font-semibold text-primary">~$0.04</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Configuration</h3>

        <pre><code>{`# .env
RAG_ENABLED=true      # Enable semantic retrieval (default)
RAG_TOP_K=5           # Documents to retrieve per query

# Required for RAG
QDRANT_URL=https://your-cluster.qdrant.io:6333
QDRANT_API_KEY=your_api_key`}</code></pre>

        <h3>Initial Setup</h3>

        <pre><code>{`# Sync documents to Qdrant (run once, then on content changes)
python syncRag.py sync`}</code></pre>

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
          <div className="rounded-lg border border-primary/30 bg-primary/10 p-4">
            <div className="mb-2 font-semibold text-foreground">Benefits</div>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Significantly faster execution</li>
              <li>Lower API costs</li>
              <li>No Claude dependency</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-muted/50 p-4">
            <div className="mb-2 font-semibold text-foreground">Trade-offs</div>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
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
RAG_ENABLED=true           # Always use RAG for cost efficiency
RAG_TOP_K=5
ENABLE_CRITIQUE=true       # Quality validation
LOCAL_SYNTHESIS=false      # Unified narrative
MAX_WORKERS=10
MAX_RETRIES=2`}</code></pre>

        <h3>Development (Speed Focus)</h3>

        <pre><code>{`# .env
RAG_ENABLED=true           # RAG still saves costs during dev
RAG_TOP_K=3                # Fewer docs for faster retrieval
ENABLE_CRITIQUE=false
LOCAL_SYNTHESIS=true
MAX_WORKERS=5
MAX_RETRIES=1`}</code></pre>

        <h3>Budget-Constrained</h3>

        <pre><code>{`# .env
RAG_ENABLED=true           # Critical for cost savings
RAG_TOP_K=3                # Minimal retrieval
ENABLE_CRITIQUE=false
LOCAL_SYNTHESIS=true
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
                <th className="px-4 py-3 text-left font-semibold">Context Cost</th>
                <th className="px-4 py-3 text-left font-semibold">Gemini Calls</th>
                <th className="px-4 py-3 text-left font-semibold">Est. Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Full Context (no RAG)</td>
                <td className="px-4 py-3">~$0.62</td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3">~$6.20+</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="px-4 py-3 font-medium">RAG + All Optimizations</td>
                <td className="px-4 py-3 text-primary">~$0.04</td>
                <td className="px-4 py-3">9</td>
                <td className="px-4 py-3 font-semibold text-primary">~$0.36</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RAG + Critique Enabled</td>
                <td className="px-4 py-3">~$0.04</td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3">~$0.40+</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RAG + Full Pipeline</td>
                <td className="px-4 py-3">~$0.04</td>
                <td className="px-4 py-3">10 + Claude</td>
                <td className="px-4 py-3">~$0.50+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-4 rounded-lg border-l-4 border-primary bg-primary/10 p-4">
          <div className="font-semibold text-foreground">Key Insight</div>
          <p className="mt-2 text-sm text-muted-foreground">RAG provides the largest cost savings (94%) because context tokens dominate API costs. Other optimizations provide incremental savings by reducing API call count.</p>
        </div>

        <hr />

        <h2>Code-Level Optimizations</h2>

        <p>
          Beyond configuration options, Professor Gemini implements several code-level optimizations to reduce memory usage, improve performance, and minimize Python runtime overhead.
        </p>

        <h3>Timing Breakdown</h3>

        <p>Typical request timing analysis:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Time</th>
                <th className="px-4 py-3 text-left font-semibold">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RAG Retrieval</td>
                <td className="px-4 py-3">~770ms</td>
                <td className="px-4 py-3">1.6%</td>
              </tr>
              <tr className="border-b border-border bg-muted/50">
                <td className="px-4 py-3 font-medium">Gemini API</td>
                <td className="px-4 py-3">~48s</td>
                <td className="px-4 py-3 font-semibold text-foreground">97.5%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Python Overhead</td>
                <td className="px-4 py-3">~430ms</td>
                <td className="px-4 py-3">0.9%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-4 rounded-lg border-l-4 border-primary bg-primary/10 p-4">
          <div className="font-semibold text-foreground">Bottleneck Insight</div>
          <p className="mt-2 text-sm text-muted-foreground">Gemini API calls account for 97.5% of total time. Code-level optimizations target the remaining 2.5% for incremental improvements.</p>
        </div>

        <h3>Optimization Summary</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Optimization</th>
                <th className="px-4 py-3 text-left font-semibold">Benefit</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Lazy Logging</td>
                <td className="px-4 py-3">Deferred string formatting</td>
                <td className="px-4 py-3">~5-10ms per request</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">__slots__ Dataclasses</td>
                <td className="px-4 py-3">~20% memory reduction</td>
                <td className="px-4 py-3">Per-instance savings</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="px-4 py-3 font-medium">LRU Response Cache</td>
                <td className="px-4 py-3">Skip repeated searches</td>
                <td className="px-4 py-3 font-semibold text-primary">~770ms on cache hit</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Connection Pooling</td>
                <td className="px-4 py-3">Reuse HTTP connections</td>
                <td className="px-4 py-3">~50-100ms per call</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Lazy Logging</h3>

        <p>
          Uses <code>%s</code> placeholders instead of f-strings for deferred string formatting. String interpolation only occurs if the log level is actually enabled.
        </p>

        <pre><code>{`# Before (eager formatting - always formats string)
logger.info(f"Processing {len(documents)} documents in {duration_ms}ms")

# After (lazy formatting - only formats if INFO level enabled)
logger.info("Processing %d documents in %dms", len(documents), duration_ms)`}</code></pre>

        <p>For expensive operations, wrap with <code>isEnabledFor()</code> check:</p>

        <pre><code>{`# Skip list comprehension entirely if INFO not enabled
if logger.isEnabledFor(logging.INFO):
    scores = [f"{d.score:.3f}" for d in documents]
    logger.info("Scores: %s", ", ".join(scores))`}</code></pre>

        <h3>__slots__ Dataclasses</h3>

        <p>
          Python 3.10+ dataclasses with <code>slots=True</code> skip dictionary-based attribute storage, reducing memory by ~20% per instance.
        </p>

        <pre><code>{`@dataclass(slots=True)
class QdrantDocument:
    """Uses slots for ~20% memory reduction."""
    doc_id: str
    source: str
    title: str
    content: str
    score: float = 0.0`}</code></pre>

        <p>Applied to all core dataclasses:</p>

        <ul>
          <li><code>QdrantDocument</code> - Document storage</li>
          <li><code>GeminiResponse</code> - API responses</li>
          <li><code>SinglePromptResult</code> - Pipeline results</li>
          <li><code>LoadedContext</code> - Context loading</li>
          <li><code>AttemptRecord</code> - Bar Raiser attempts</li>
          <li><code>BarRaiserResult</code> - Bar Raiser results</li>
        </ul>

        <h3>LRU Response Cache</h3>

        <p>
          Caches Qdrant search results for repeated queries. Cache key is generated from query + top_k + source_filter. TTL is 5 minutes with max 100 entries.
        </p>

        <pre><code>{`# Cache configuration
_CACHE_MAX_SIZE = 100        # Maximum cached queries
_CACHE_TTL_SECONDS = 300     # 5 minute TTL

# Cache hit skips embedding generation and Qdrant query (~770ms saved)
def search(query: str, top_k: int, use_cache: bool = True):
    cache_key = f"{query}|{top_k}|{source_filter}"
    if use_cache:
        cached = _get_cached_result(cache_key)
        if cached:
            return cached  # ~770ms saved`}</code></pre>

        <p>
          <strong>Use case:</strong> Users often refine the same query or run similar searches during a session.
        </p>

        <h3>Connection Pooling</h3>

        <p>
          The Qdrant client uses httpx internally, which maintains connection pools automatically. Professor Gemini ensures a single client instance is reused via lazy initialization:
        </p>

        <pre><code>{`class QdrantManager:
    def __init__(self):
        self._client: QdrantClient | None = None  # Lazy init

    def _get_client(self) -> QdrantClient:
        if self._client is None:
            # Single instance, reused for all operations
            self._client = QdrantClient(url=..., api_key=...)
        return self._client`}</code></pre>

        <p>
          This pattern avoids the ~50-100ms overhead of establishing new connections for each operation.
        </p>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
