import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import Link from "next/link";

export const metadata = {
  title: "Professor Gemini | Hybrid AI Learning Platform",
  description: "A hybrid AI learning platform combining Gemini content generation with Claude critique to create comprehensive educational guides.",
};

export default function ProfessorGeminiOverviewPage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Professor Gemini</h1>

        <p className="lead">
          A hybrid AI learning platform that orchestrates Gemini for content generation and Claude for structural planning, adversarial critique, and synthesis. Generates comprehensive educational guides through a 4-step pipeline.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="https://github.com/udaytamma/ProfessorGemini"
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
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <span className="text-2xl">🎓</span>
            <div>
              <div className="font-semibold text-foreground">Streamlit App</div>
              <div className="text-sm text-muted-foreground">Local deployment</div>
            </div>
          </div>
        </div>

        <hr />

        <h2>What It Does</h2>

        <p>
          Professor Gemini helps users learn complex topics by generating comprehensive Master Guides:
        </p>

        <ul>
          <li><strong>Input any topic</strong> you want to learn about</li>
          <li><strong>Generates base knowledge</strong> with structured Roman numeral sections</li>
          <li><strong>Deep dives into each section</strong> with parallel processing</li>
          <li><strong>Bar Raiser critique</strong> validates quality with retry loop</li>
          <li><strong>Synthesizes everything</strong> into a polished Master Guide</li>
        </ul>

        <hr />

        <h2>Key Features</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Hybrid AI Pipeline</div>
            <p className="text-sm text-muted-foreground">Gemini for content, Claude for critique and synthesis</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Bar Raiser Critique</div>
            <p className="text-sm text-muted-foreground">Adversarial review with confidence scoring and retry loop</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Parallel Processing</div>
            <p className="text-sm text-muted-foreground">Deep dives run concurrently with configurable workers</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Optimization Modes</div>
            <p className="text-sm text-muted-foreground">Local parsing and synthesis to reduce API calls</p>
          </div>
        </div>

        <h3>User Interface</h3>

        <ul>
          <li><strong>Professional Streamlit UI</strong> with Google-inspired design</li>
          <li><strong>Light/Dark theme toggle</strong> with theme cycling</li>
          <li><strong>Real-time progress updates</strong> during pipeline execution</li>
          <li><strong>Request history</strong> with JSON persistence</li>
          <li><strong>Automatic markdown export</strong> to Knowledge Base</li>
        </ul>

        <hr />

        <h2>Architecture Preview</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph PIPELINE["4-Step Pipeline"]
      INPUT["User Topic"]
      BASE["Step 1: Base Knowledge"]
      SPLIT["Step 2: Topic Split"]
      DEEP["Step 3: Deep Dive"]
      SYNTH["Step 4: Synthesis"]
      OUTPUT["Master Guide"]

      INPUT --> BASE
      BASE --> SPLIT
      SPLIT --> DEEP
      DEEP --> SYNTH
      SYNTH --> OUTPUT
    end

    subgraph MODELS["AI Models"]
      GEMINI["Gemini 3.0 Pro"]
      CLAUDE["Claude Opus"]
    end

    BASE -.-> GEMINI
    DEEP -.-> GEMINI
    DEEP -.-> CLAUDE
    SYNTH -.-> GEMINI

    style INPUT fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style OUTPUT fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style GEMINI fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style CLAUDE fill:#fce7f3,stroke:#ec4899,stroke-width:2px
`}
        />

        <hr />

        <h2>Project Metrics</h2>

        <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">2</div>
            <div className="text-sm text-muted-foreground">AI Models</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">Pipeline Steps</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">10</div>
            <div className="text-sm text-muted-foreground">Max Workers</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">v1.0</div>
            <div className="text-sm text-muted-foreground">Version</div>
          </div>
        </div>

        <hr />

        <h2>Tech Stack</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">UI Framework</td>
                <td className="px-4 py-3">Streamlit 1.41+</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Content Generation</td>
                <td className="px-4 py-3">Google Gemini 3.0 Pro</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Critique & Planning</td>
                <td className="px-4 py-3">Anthropic Claude Opus</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Configuration</td>
                <td className="px-4 py-3">Pydantic Settings</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Testing</td>
                <td className="px-4 py-3">pytest with async support</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/professor-gemini/getting-started"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Getting Started</div>
            <div className="text-sm text-muted-foreground">Setup and installation guide</div>
          </Link>
          <Link
            href="/docs/professor-gemini/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture</div>
            <div className="text-sm text-muted-foreground">System design and data flow</div>
          </Link>
          <Link
            href="/docs/professor-gemini/pipeline"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Pipeline Steps</div>
            <div className="text-sm text-muted-foreground">4-step content generation process</div>
          </Link>
          <Link
            href="/docs/professor-gemini/bar-raiser"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Bar Raiser</div>
            <div className="text-sm text-muted-foreground">Quality critique and validation</div>
          </Link>
        </div>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
