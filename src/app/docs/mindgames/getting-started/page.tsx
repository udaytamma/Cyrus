import { MindGamesDocsLayout } from "@/components/MindGamesDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Getting Started | MindGames",
  description: "Installation and setup guide for MindGames mental math training application.",
};

export default function GettingStartedPage() {
  return (
    <MindGamesDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Getting Started</h1>

        <p className="lead">
          This guide covers installation, project structure, configuration, and basic usage of MindGames.
        </p>

        <hr />

        <h2>Prerequisites</h2>

        <p>Before you begin, ensure you have the following installed:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                <th className="px-4 py-3 text-left font-semibold">Version</th>
                <th className="px-4 py-3 text-left font-semibold">Check Command</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Node.js</td>
                <td className="px-4 py-3">18.0 or higher</td>
                <td className="px-4 py-3 font-mono text-sm">node --version</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">npm</td>
                <td className="px-4 py-3">9.0 or higher</td>
                <td className="px-4 py-3 font-mono text-sm">npm --version</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Git</td>
                <td className="px-4 py-3">Any recent version</td>
                <td className="px-4 py-3 font-mono text-sm">git --version</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Installation</h2>

        <h3>1. Clone the Repository</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`git clone https://github.com/udaytamma/MindGames.git
cd MindGames`}
        </pre>

        <h3>2. Install Dependencies</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`npm install`}
        </pre>

        <h3>3. Start Development Server</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`npm run dev`}
        </pre>

        <p>
          The application will be available at <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a>.
        </p>

        <hr />

        <h2>Project Structure</h2>

        <div className="not-prose">
          <MermaidDiagram
            chart={`flowchart TB
    subgraph root["MindGames/"]
        style root fill:#e0e7ff,stroke:#6366f1,stroke-width:2px

        subgraph src["src/"]
            style src fill:#fef3c7,stroke:#f59e0b,stroke-width:2px

            subgraph app["app/"]
                style app fill:#d1fae5,stroke:#10b981,stroke-width:1px
                A1["layout.tsx<br/><i>Root layout</i>"]
                A2["page.tsx<br/><i>Main game</i>"]
                A3["globals.css<br/><i>Global styles</i>"]
            end

            subgraph components["components/"]
                style components fill:#fce7f3,stroke:#ec4899,stroke-width:1px
                C1["ChainDisplay.tsx"]
                C2["OperationMixSlider.tsx"]
                C3["Timer.tsx"]
            end

            subgraph contexts["contexts/"]
                style contexts fill:#fee2e2,stroke:#ef4444,stroke-width:1px
                X1["GameContext.tsx"]
                X2["ThemeContext.tsx"]
            end

            subgraph lib["lib/"]
                style lib fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
                L1["problem-generator.ts"]
            end

            subgraph types["types/"]
                style types fill:#fef3c7,stroke:#f59e0b,stroke-width:1px
                T1["index.ts"]
            end
        end

        R1["__tests/"]
        R2["jest.config.js"]
        R3["tailwind.config.ts"]
        R4["package.json"]
    end

    style A1 fill:#d1fae5,stroke:#10b981
    style A2 fill:#d1fae5,stroke:#10b981
    style A3 fill:#d1fae5,stroke:#10b981
    style C1 fill:#fce7f3,stroke:#ec4899
    style C2 fill:#fce7f3,stroke:#ec4899
    style C3 fill:#fce7f3,stroke:#ec4899
    style X1 fill:#fee2e2,stroke:#ef4444
    style X2 fill:#fee2e2,stroke:#ef4444
    style L1 fill:#e0e7ff,stroke:#6366f1
    style T1 fill:#fef3c7,stroke:#f59e0b
    style R1 fill:#e0e7ff,stroke:#6366f1
    style R2 fill:#e0e7ff,stroke:#6366f1
    style R3 fill:#e0e7ff,stroke:#6366f1
    style R4 fill:#e0e7ff,stroke:#6366f1`}
            className="max-w-full"
          />
        </div>

        <h3>Key Files Explained</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">File</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">problem-generator.ts</td>
                <td className="px-4 py-3">Core algorithm for generating math chains with operation mix logic</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">GameContext.tsx</td>
                <td className="px-4 py-3">Global state: worksheet, answers, session, configuration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">ChainDisplay.tsx</td>
                <td className="px-4 py-3">Visual rendering of problem chains with input handling</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">OperationMixSlider.tsx</td>
                <td className="px-4 py-3">UI for adjusting operation percentages</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">types/index.ts</td>
                <td className="px-4 py-3">TypeScript interfaces for Problem, Chain, Worksheet, Config</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Available Scripts</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Command</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">npm run dev</td>
                <td className="px-4 py-3">Start development server with hot reload</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">npm run build</td>
                <td className="px-4 py-3">Build for production</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">npm run start</td>
                <td className="px-4 py-3">Start production server</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">npm run lint</td>
                <td className="px-4 py-3">Run ESLint checks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">npm test</td>
                <td className="px-4 py-3">Run Jest test suite</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">npm run test:watch</td>
                <td className="px-4 py-3">Run tests in watch mode</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">npm run test:coverage</td>
                <td className="px-4 py-3">Generate coverage report</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Configuration</h2>

        <h3>Game Configuration</h3>

        <p>
          Default game settings are defined in <code>src/types/index.ts</code>:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`export const DEFAULT_CONFIG: GameConfig = {
  maxResult: 100,           // Maximum result value
  chainLength: 6,           // Problems per chain
  chainCount: 5,            // Number of chains per worksheet
  timeLimit: 0,             // Seconds (0 = no time limit)
  operationMix: {
    add: 40,                // 40% addition
    subtract: 40,           // 40% subtraction
    multiply: 10,           // 10% multiplication
    divide: 10,             // 10% division
  },
  allowNegativeResults: false,
};`}
        </pre>

        <h3>Tailwind Theme Colors</h3>

        <p>
          Custom colors are configured in <code>tailwind.config.ts</code>:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`colors: {
  primary: {
    // Indigo color scale
    500: '#6366f1',
    600: '#4f46e5',
    // ...
  },
  accent: {
    // Violet color scale
    500: '#8b5cf6',
    600: '#7c3aed',
    // ...
  },
}`}
        </pre>

        <hr />

        <h2>Usage Guide</h2>

        <h3>Basic Workflow</h3>

        <ol>
          <li><strong>Configure Settings</strong> - Adjust operation mix, chain length, and time limit in the sidebar</li>
          <li><strong>Generate Worksheet</strong> - Click &quot;Generate&quot; to create a new set of problem chains</li>
          <li><strong>Start Session</strong> - Click &quot;Start&quot; to begin timed practice (optional)</li>
          <li><strong>Solve Problems</strong> - Enter answers in the input fields</li>
          <li><strong>Submit Answers</strong> - Press Tab or Enter to submit and move to the next problem</li>
          <li><strong>Review Results</strong> - See your score and accuracy when complete</li>
        </ol>

        <h3>Keyboard Shortcuts</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Key</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">Tab</td>
                <td className="px-4 py-3">Submit current answer and move to next</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">Enter</td>
                <td className="px-4 py-3">Submit current answer and move to next</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">0-9</td>
                <td className="px-4 py-3">Enter numeric answer</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">-</td>
                <td className="px-4 py-3">Enter negative sign (if enabled)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Profile Modes</h3>

        <p>
          Select your profile mode from the settings:
        </p>

        <ul>
          <li><strong>Kid Mode:</strong> Encouraging messages, confetti celebrations, fun language</li>
          <li><strong>Adult Mode:</strong> Clean interface, focus on metrics and accuracy</li>
        </ul>

        <hr />

        <h2>Next Steps</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="/docs/mindgames/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">Learn about technical decisions</div>
          </a>
          <a
            href="/docs/mindgames/testing"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Testing →</div>
            <div className="text-sm text-muted-foreground">Understand the test suite</div>
          </a>
        </div>
      </article>
    </MindGamesDocsLayout>
  );
}
