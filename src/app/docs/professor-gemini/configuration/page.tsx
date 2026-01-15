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
                <td className="px-4 py-3 font-mono text-xs">ANTHROPIC_API_KEY</td>
                <td className="px-4 py-3">
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">Optional</span>
                </td>
                <td className="px-4 py-3">Claude API key (for Bar Raiser)</td>
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
                <td className="px-4 py-3 font-mono text-xs">enable_critique</td>
                <td className="px-4 py-3">True</td>
                <td className="px-4 py-3">Enable Bar Raiser quality validation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">local_synthesis</td>
                <td className="px-4 py-3">False</td>
                <td className="px-4 py-3">Use local concatenation vs Gemini synthesis</td>
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

    # Models
    gemini_model: str = "gemini-3-pro-preview"
    claude_model: str = "claude-opus-4-5-20251101"

    # Pipeline
    max_workers: int = 10
    max_retries: int = 2
    api_timeout: int = 120

    # Features
    enable_critique: bool = True
    local_synthesis: bool = False

    # Integration
    cyrus_root_path: str = "/Users/omega/Projects/Cyrus"

    # Logging
    log_level: str = "INFO"
    log_retention_days: int = 30

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
