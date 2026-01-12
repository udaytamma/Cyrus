import { MindGamesDocsLayout } from "@/components/MindGamesDocsLayout";
import Link from "next/link";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "MindGames | Mental Math Training App",
  description: "A modern mental math training application with chain-based problems, customizable operation mix, and kid-friendly mode.",
};

export default function MindGamesOverviewPage() {
  return (
    <MindGamesDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>MindGames</h1>

        <p className="lead">
          A modern mental math training application designed to improve arithmetic skills through chain-based problem solving.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="https://mindgames.zeroleaf.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <span className="text-2xl">🎮</span>
            <div>
              <div className="font-semibold text-foreground">Live Demo</div>
              <div className="text-sm text-muted-foreground">mindgames.zeroleaf.dev</div>
            </div>
          </a>
          <a
            href="https://github.com/udaytamma/MindGames"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <span className="text-2xl">📦</span>
            <div>
              <div className="font-semibold text-foreground">Source Code</div>
              <div className="text-sm text-muted-foreground">GitHub Repository</div>
            </div>
          </a>
        </div>

        <hr />

        <h2>What is MindGames?</h2>

        <p>
          MindGames is a Next.js web application that generates linked math problem chains for mental arithmetic practice. Unlike traditional math drills where each problem is independent, MindGames creates connected problems where each answer becomes the starting value for the next calculation.
        </p>

        <p>
          This chain-based approach encourages sequential mental calculation, improving both speed and accuracy while making practice more engaging than traditional worksheets.
        </p>

        <hr />

        <h2>Key Features</h2>

        <h3>Chain-Based Problems</h3>

        <p>
          Problems flow naturally from one to the next, creating a continuous calculation experience:
        </p>

        <div className="not-prose my-4 rounded-lg border border-border bg-muted/30 p-4">
          <code className="text-sm font-mono">
            24 → ÷4 → [6] → ×5 → [30] → +12 → [42] → -8 → [34]
          </code>
          <p className="mt-2 text-sm text-muted-foreground">
            Each answer feeds into the next problem, encouraging sequential mental calculation.
          </p>
        </div>

        <h3>Operation Mix Control</h3>

        <p>
          Customize the balance of arithmetic operations with percentage-based presets:
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Preset</th>
                <th className="px-4 py-3 text-left font-semibold">Add</th>
                <th className="px-4 py-3 text-left font-semibold">Subtract</th>
                <th className="px-4 py-3 text-left font-semibold">Multiply</th>
                <th className="px-4 py-3 text-left font-semibold">Divide</th>
                <th className="px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Random</td>
                <td className="px-4 py-3">25%</td>
                <td className="px-4 py-3">25%</td>
                <td className="px-4 py-3">25%</td>
                <td className="px-4 py-3">25%</td>
                <td className="px-4 py-3 text-muted-foreground">Balanced practice</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Basic</td>
                <td className="px-4 py-3">40%</td>
                <td className="px-4 py-3">40%</td>
                <td className="px-4 py-3">10%</td>
                <td className="px-4 py-3">10%</td>
                <td className="px-4 py-3 text-muted-foreground">Beginners</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Advanced</td>
                <td className="px-4 py-3">20%</td>
                <td className="px-4 py-3">20%</td>
                <td className="px-4 py-3">30%</td>
                <td className="px-4 py-3">30%</td>
                <td className="px-4 py-3 text-muted-foreground">Intermediate</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Expert</td>
                <td className="px-4 py-3">10%</td>
                <td className="px-4 py-3">10%</td>
                <td className="px-4 py-3">40%</td>
                <td className="px-4 py-3">40%</td>
                <td className="px-4 py-3 text-muted-foreground">Advanced users</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Kid and Adult Profiles</h3>

        <p>
          Two distinct modes optimized for different audiences:
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 text-lg font-semibold">👶 Kid Mode</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Encouraging messages after each chain</li>
              <li>• Confetti celebration on completion</li>
              <li>• Fun, motivating language</li>
              <li>• Larger touch targets</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 text-lg font-semibold">👤 Adult Mode</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Clean, professional interface</li>
              <li>• Focus on metrics and accuracy</li>
              <li>• No animations or celebrations</li>
              <li>• Compact information density</li>
            </ul>
          </div>
        </div>

        <h3>Responsive Design</h3>

        <ul>
          <li><strong>Desktop (1600px):</strong> Wide layout with persistent settings sidebar</li>
          <li><strong>Tablet:</strong> Collapsible settings panel</li>
          <li><strong>Mobile:</strong> Vertical layout with full equations (e.g., <code>32 × 3 = ?</code>)</li>
          <li><strong>Theme:</strong> Dark and light mode support</li>
        </ul>

        <hr />

        <h2>Architecture Overview</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    subgraph UI["User Interface"]
        App["App Component"]
        Chain["ChainDisplay"]
        Input["AnswerInput"]
        Timer["Timer"]
    end

    subgraph State["State Management"]
        GameCtx["GameContext"]
        ThemeCtx["ThemeContext"]
    end

    subgraph Logic["Problem Generation"]
        Gen["ProblemGenerator"]
        Diff["DifficultyLevels"]
    end

    App --> GameCtx
    App --> ThemeCtx
    GameCtx --> Chain
    GameCtx --> Input
    GameCtx --> Timer
    GameCtx --> Gen
    Gen --> Diff

    style UI fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style State fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style Logic fill:#d1fae5,stroke:#10b981,stroke-width:2px`}
          />
        </div>

        <hr />

        <h2>Technology Stack</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Layer</th>
                <th className="px-4 py-3 text-left font-semibold">Technology</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Framework</td>
                <td className="px-4 py-3">Next.js 14</td>
                <td className="px-4 py-3 text-muted-foreground">App Router, server components</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Language</td>
                <td className="px-4 py-3">TypeScript</td>
                <td className="px-4 py-3 text-muted-foreground">Type safety, better DX</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Styling</td>
                <td className="px-4 py-3">Tailwind CSS</td>
                <td className="px-4 py-3 text-muted-foreground">Utility-first styling</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">State</td>
                <td className="px-4 py-3">React Context + useReducer</td>
                <td className="px-4 py-3 text-muted-foreground">Global state management</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Icons</td>
                <td className="px-4 py-3">Lucide React</td>
                <td className="px-4 py-3 text-muted-foreground">Consistent iconography</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Animations</td>
                <td className="px-4 py-3">canvas-confetti</td>
                <td className="px-4 py-3 text-muted-foreground">Kid mode celebrations</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Testing</td>
                <td className="px-4 py-3">Jest + RTL</td>
                <td className="px-4 py-3 text-muted-foreground">Unit and integration tests</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Quick Start</h2>

        <CopyableCodeBlock
          title="Quick Start"
          language="bash"
          code={`# Clone the repository
git clone https://github.com/udaytamma/MindGames.git
cd MindGames

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000`}
        />

        <hr />

        <h2>Project Metrics</h2>

        <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">63</div>
            <div className="text-sm text-muted-foreground">Tests</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
            <div className="text-sm text-muted-foreground">Pass Rate</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">~78%</div>
            <div className="text-sm text-muted-foreground">Coverage</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">v1.2.0</div>
            <div className="text-sm text-muted-foreground">Version</div>
          </div>
        </div>

        <hr />

        <h2>Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/mindgames/getting-started"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Getting Started →</div>
            <div className="text-sm text-muted-foreground">Installation and setup guide</div>
          </Link>
          <Link
            href="/docs/mindgames/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">Technical decisions and design</div>
          </Link>
          <Link
            href="/docs/mindgames/testing"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Testing →</div>
            <div className="text-sm text-muted-foreground">Test suite and coverage</div>
          </Link>
          <Link
            href="/docs/mindgames/roadmap"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Roadmap →</div>
            <div className="text-sm text-muted-foreground">Future enhancements</div>
          </Link>
        </div>
      </article>
    </MindGamesDocsLayout>
  );
}
