import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";

export const metadata = {
  title: "Configuration | Professor Gemini",
  description: "Environment setup and configuration options for Professor Gemini.",
};

export default function ConfigurationPage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Configuration</h1>

        <p className="lead">
          Professor Gemini uses Pydantic Settings for configuration management with full environment variable support.
        </p>

        <hr />

        <h2>Environment Setup</h2>

        <h3>1. Copy the Example File</h3>

        <pre><code>{`cp .env.example .env`}</code></pre>

        <h3>2. Configure Required Settings</h3>

        <pre><code>{`# Required - Get from https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here

# Required for RAG - Get from https://cloud.qdrant.io/
QDRANT_URL=https://your-cluster.qdrant.io:6333
QDRANT_API_KEY=your_qdrant_api_key_here

# Optional - Get from https://console.anthropic.com/settings/keys
ANTHROPIC_API_KEY=your_anthropic_api_key_here`}</code></pre>

        <hr />

        <h2>All Configuration Options</h2>

        <h3>API Keys</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Required</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">GEMINI_API_KEY</td>
                <td className="px-4 py-3">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300">Required</span>
                </td>
                <td className="px-4 py-3">Google Gemini API key</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">QDRANT_URL</td>
                <td className="px-4 py-3">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300">Required</span>
                </td>
                <td className="px-4 py-3">Qdrant Cloud cluster URL</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">QDRANT_API_KEY</td>
                <td className="px-4 py-3">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-700 dark:bg-red-900/30 dark:text-red-300">Required</span>
                </td>
                <td className="px-4 py-3">Qdrant Cloud API key</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">ANTHROPIC_API_KEY</td>
                <td className="px-4 py-3">
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Optional</span>
                </td>
                <td className="px-4 py-3">Claude API key (for Bar Raiser)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>RAG Configuration</h3>

        <div className="not-prose my-4 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-4 dark:bg-emerald-950/30">
          <div className="font-semibold text-emerald-700 dark:text-emerald-300">Key Feature: Semantic RAG Retrieval</div>
          <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">RAG reduces token costs by ~94% by retrieving only relevant documents instead of sending the entire corpus to Gemini.</p>
        </div>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">RAG_ENABLED</td>
                <td className="px-4 py-3">true</td>
                <td className="px-4 py-3">Enable semantic retrieval (disable for full context fallback)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">RAG_TOP_K</td>
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">Number of documents to retrieve per query (1-20)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Token Savings Comparison</h4>

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
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RAG (top-5)</td>
                <td className="px-4 py-3">150K chars</td>
                <td className="px-4 py-3">~37K</td>
                <td className="px-4 py-3">~$0.04</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Model Configuration</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">GEMINI_MODEL</td>
                <td className="px-4 py-3 font-mono text-xs">gemini-3-pro-preview</td>
                <td className="px-4 py-3">Gemini model for content generation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">CLAUDE_MODEL</td>
                <td className="px-4 py-3 font-mono text-xs">claude-opus-4-5-20251101</td>
                <td className="px-4 py-3">Claude model for critique</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Pipeline Settings</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
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
                <td className="px-4 py-3">Retry attempts for low-confidence content</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">API_TIMEOUT</td>
                <td className="px-4 py-3">120</td>
                <td className="px-4 py-3">API call timeout in seconds</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Mode Selection</h3>

        <div className="not-prose my-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-950/30">
          <div className="font-semibold text-amber-700 dark:text-amber-300">Key Feature: Swappable AI Providers</div>
          <p className="mt-2 text-sm text-amber-600 dark:text-amber-400">Switch between Gemini-only and hybrid mode with a single environment variable. No code changes required.</p>
        </div>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">USE_CLAUDE</td>
                <td className="px-4 py-3">false</td>
                <td className="px-4 py-3">Enable Claude for critique/synthesis (requires ANTHROPIC_API_KEY)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Mode Comparison</h4>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Mode</th>
                <th className="px-4 py-3 text-left font-semibold">Config</th>
                <th className="px-4 py-3 text-left font-semibold">Characteristics</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Gemini-only (default)</td>
                <td className="px-4 py-3 font-mono text-xs">USE_CLAUDE=false</td>
                <td className="px-4 py-3">Single API provider, async processing, lower cost</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Hybrid</td>
                <td className="px-4 py-3 font-mono text-xs">USE_CLAUDE=true</td>
                <td className="px-4 py-3">Gemini content + Claude critique, ThreadPoolExecutor</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Feature Flags</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">ENABLE_CRITIQUE</td>
                <td className="px-4 py-3">false</td>
                <td className="px-4 py-3">Enable Bar Raiser quality validation loop</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">LOCAL_SYNTHESIS</td>
                <td className="px-4 py-3">true</td>
                <td className="px-4 py-3">Use local concatenation instead of API synthesis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Cyrus Integration</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">CYRUS_ROOT_PATH</td>
                <td className="px-4 py-3 font-mono text-xs">/Users/omega/Projects/Cyrus</td>
                <td className="px-4 py-3">Path to Cyrus project for Knowledge Base sync</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Logging</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">LOG_LEVEL</td>
                <td className="px-4 py-3">INFO</td>
                <td className="px-4 py-3">Log level (DEBUG, INFO, WARNING, ERROR)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">LOG_RETENTION_DAYS</td>
                <td className="px-4 py-3">30</td>
                <td className="px-4 py-3">Days to retain log files</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Settings Class</h2>

        <p>Configuration is managed via Pydantic Settings:</p>

        <pre><code>{`# config/settings.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # API Keys
    gemini_api_key: str
    anthropic_api_key: Optional[str] = None

    # Qdrant Configuration (required for RAG)
    qdrant_url: str
    qdrant_api_key: str

    # RAG Configuration
    rag_enabled: bool = True    # Semantic retrieval (94% token savings)
    rag_top_k: int = 5          # Documents to retrieve per query
    rag_collection: str = "professor_gemini"

    # Mode Selection
    use_claude: bool = False    # Switch to True for hybrid mode

    # Models
    gemini_model: str = "gemini-3-pro-preview"
    claude_model: str = "claude-opus-4-5-20251101"

    # Pipeline
    max_workers: int = 10
    max_retries: int = 2
    api_timeout: int = 120

    # Features - optimized defaults
    enable_critique: bool = False  # OFF by default
    local_synthesis: bool = True   # ON by default

    # Integration
    cyrus_root_path: str = "/Users/omega/Projects/Cyrus"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

def get_settings() -> Settings:
    return Settings()`}</code></pre>

        <hr />

        <h2>Streamlit Configuration</h2>

        <p>Streamlit settings are in <code>.streamlit/config.toml</code>:</p>

        <pre><code>{`[server]
port = 8502
headless = true
runOnSave = true

[theme]
base = "dark"
primaryColor = "#DAA520"

[browser]
gatherUsageStats = false`}</code></pre>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
