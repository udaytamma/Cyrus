import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";

export const metadata = {
  title: "Getting Started | Professor Gemini",
  description: "Setup and installation guide for Professor Gemini hybrid AI learning platform.",
};

export default function GettingStartedPage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Getting Started</h1>

        <p className="lead">
          Get Professor Gemini up and running in under 5 minutes with this quick start guide.
        </p>

        <hr />

        <h2>Prerequisites</h2>

        <ul>
          <li>Python 3.11 or higher</li>
          <li>Google Gemini API key</li>
          <li>Anthropic Claude API key (optional, for critique features)</li>
        </ul>

        <hr />

        <h2>Installation</h2>

        <h3>1. Clone the Repository</h3>

        <pre><code>{`git clone https://github.com/udaytamma/ProfessorGemini.git
cd ProfessorGemini`}</code></pre>

        <h3>2. Create Virtual Environment</h3>

        <pre><code>{`python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\\Scripts\\activate`}</code></pre>

        <h3>3. Install Dependencies</h3>

        <pre><code>{`pip install -r requirements.txt`}</code></pre>

        <h3>4. Configure Environment</h3>

        <pre><code>{`cp .env.example .env`}</code></pre>

        <p>Edit <code>.env</code> and add your API keys:</p>

        <pre><code>{`# Required
GEMINI_API_KEY=your_gemini_api_key_here

# Optional (for Bar Raiser critique)
ANTHROPIC_API_KEY=your_anthropic_api_key_here`}</code></pre>

        <hr />

        <h2>Running the Application</h2>

        <pre><code>{`streamlit run app.py --server.port 8502`}</code></pre>

        <p>Open your browser to <code>http://localhost:8502</code></p>

        <hr />

        <h2>Quick Usage</h2>

        <ol>
          <li>Enter a topic you want to learn about in the input field</li>
          <li>Click Generate to start the pipeline</li>
          <li>Watch real-time progress as each step completes</li>
          <li>Review the generated Master Guide</li>
          <li>Export to markdown or copy to clipboard</li>
        </ol>

        <hr />

        <h2>Project Structure</h2>

        <pre><code>{`ProfessorGemini/
├── app.py                 # Streamlit UI application
├── config/
│   └── settings.py        # Pydantic settings management
├── core/
│   ├── pipeline.py        # Main orchestration
│   ├── gemini_client.py   # Gemini API wrapper
│   ├── bar_raiser.py      # Claude critique agent
│   └── local_processing.py # Local optimization
├── utils/
│   ├── logging_utils.py   # Structured logging
│   └── file_utils.py      # File management
├── tests/                 # pytest test suite
├── gemini-responses/      # Generated guides output
├── .env.example           # Environment template
└── requirements.txt       # Python dependencies`}</code></pre>

        <hr />

        <h2>Configuration Options</h2>

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
                <td className="px-4 py-3 font-mono text-xs">GEMINI_API_KEY</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3">Google Gemini API key (required)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">ANTHROPIC_API_KEY</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3">Claude API key (optional)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">GEMINI_MODEL</td>
                <td className="px-4 py-3">gemini-3-pro-preview</td>
                <td className="px-4 py-3">Gemini model to use</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">MAX_WORKERS</td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3">Parallel deep dive workers</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">MAX_RETRIES</td>
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">Retry attempts per topic</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">API_TIMEOUT</td>
                <td className="px-4 py-3">120</td>
                <td className="px-4 py-3">API call timeout (seconds)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Next Steps</h2>

        <ul>
          <li><a href="/docs/professor-gemini/architecture">Learn about the architecture</a></li>
          <li><a href="/docs/professor-gemini/pipeline">Understand the 4-step pipeline</a></li>
          <li><a href="/docs/professor-gemini/optimization">Configure optimization modes</a></li>
        </ul>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
