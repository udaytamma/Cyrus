import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import Link from "next/link";

export const metadata = {
  title: "Professor Gemini | AI Learning Platform with RAG",
  description: "AI learning platform with semantic RAG retrieval - indexes 407 Nebula documents in Qdrant for efficient context delivery.",
};

export default function ProfessorGeminiOverviewPage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Professor Gemini</h1>

        <p className="lead">
          An AI learning platform with semantic RAG retrieval that indexes 400+ domain-specific documents in Qdrant Cloud. Reduces token costs by ~94% compared to full-context approaches while maintaining high-quality educational guide generation.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <a
            href="https://prof.zeroleaf.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-primary bg-primary/10 p-4 transition-colors hover:bg-primary/20"
          >
            <span className="text-2xl">🚀</span>
            <div>
              <div className="font-semibold text-foreground">Live Demo</div>
              <div className="text-sm text-muted-foreground">prof.zeroleaf.dev</div>
            </div>
          </a>
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
              <div className="font-semibold text-foreground">Deployed</div>
              <div className="text-sm text-muted-foreground">Railway (Streamlit)</div>
            </div>
          </div>
        </div>

        <hr />

        <h2>Three Generation Modes</h2>

        <p>
          Professor Gemini offers three distinct generation modes, each optimized for different use cases:
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-primary bg-primary/10 p-4">
            <div className="mb-2 font-semibold text-foreground">Deep Dive</div>
            <p className="text-sm text-muted-foreground">Full 4-step pipeline with parallel section processing. Generates comprehensive Master Guides with optional Bar Raiser quality validation.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-foreground">One Shot</div>
            <p className="text-sm text-muted-foreground">Single-prompt RAG-enhanced generation. Retrieves relevant context and generates in one API call. Fastest option with 94% token savings.</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-foreground">Perplexity</div>
            <p className="text-sm text-muted-foreground">Web search with AI synthesis. Uses Perplexity API (sonar-pro model) for real-time web search and synthesized responses.</p>
          </div>
        </div>

        <hr />

        <h2>RAG Architecture</h2>

        <p>
          Professor Gemini uses <strong>semantic retrieval</strong> to provide relevant context instead of sending the entire document corpus. This reduces token usage from ~625K to ~37K per request.
        </p>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph SOURCES["Document Sources"]
      KB["Knowledge Base<br/>Markdown guides"]
      QS["Interview Questions<br/>TypeScript data"]
      BS["Blindspots<br/>TypeScript data"]
      WIKI["Wiki Entries<br/>TypeScript data"]
    end

    subgraph SYNC["Document Syncer"]
      PARSE["TypeScript Parser<br/>JSON on-the-fly"]
      HASH["Hash Detection<br/>MD5 change tracking"]
      EMBED["Embedding<br/>gemini-embedding-001"]
    end

    subgraph QDRANT["Qdrant Cloud"]
      COLL["professor_gemini<br/>768-dim vectors"]
      PAYLOAD["Payloads<br/>Full doc content"]
    end

    subgraph RAG["RAG Retriever"]
      QUERY["Query Embedding"]
      SEARCH["Semantic Search<br/>Top-5 results"]
      CTX["Context Builder<br/>~150KB"]
    end

    KB --> PARSE
    QS --> PARSE
    BS --> PARSE
    WIKI --> PARSE
    PARSE --> HASH
    HASH --> EMBED
    EMBED --> COLL
    COLL --> PAYLOAD

    QUERY --> SEARCH
    SEARCH --> COLL
    PAYLOAD --> CTX

    style KB fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style COLL fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style CTX fill:#d1fae5,stroke:#10b981,stroke-width:2px
`}
        />

        <h3>Document Sources</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Source</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Count</th>
                <th className="px-4 py-3 text-left font-semibold">Doc ID Format</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Knowledge Base</td>
                <td className="px-4 py-3">Markdown</td>
                <td className="px-4 py-3">80+</td>
                <td className="px-4 py-3 font-mono text-xs">kb:topic-slug</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Interview Questions</td>
                <td className="px-4 py-3">TypeScript</td>
                <td className="px-4 py-3">65+</td>
                <td className="px-4 py-3 font-mono text-xs">questions:q-001</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Blindspots</td>
                <td className="px-4 py-3">TypeScript</td>
                <td className="px-4 py-3">30+</td>
                <td className="px-4 py-3 font-mono text-xs">blindspots:topic</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Wiki Entries</td>
                <td className="px-4 py-3">TypeScript</td>
                <td className="px-4 py-3">225+</td>
                <td className="px-4 py-3 font-mono text-xs">wiki:entry-slug</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Key Features</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Semantic RAG Retrieval</div>
            <p className="text-sm text-muted-foreground">Qdrant vector search retrieves relevant documents using gemini-embedding-001 (768-dim)</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">94% Token Savings</div>
            <p className="text-sm text-muted-foreground">2.5M chars to 150KB context reduces cost from ~$0.62 to ~$0.04 per request</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Hash-Based Sync</div>
            <p className="text-sm text-muted-foreground">MD5 change detection only re-indexes modified files, fast incremental updates</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">TypeScript Parsing</div>
            <p className="text-sm text-muted-foreground">Parses questions.ts, blindspots.ts, wiki.ts on-the-fly without build step</p>
          </div>
        </div>

        <h3>Content Generation Pipeline</h3>

        <ul>
          <li><strong>Input any topic</strong> you want to learn about</li>
          <li><strong>RAG retrieves relevant docs</strong> from the indexed Nebula content</li>
          <li><strong>Generates base knowledge</strong> with structured Roman numeral sections</li>
          <li><strong>Deep dives into each section</strong> with parallel processing</li>
          <li><strong>Synthesizes everything</strong> into a polished Master Guide</li>
        </ul>

        <hr />

        <h2>Architecture Preview</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph PIPELINE["4-Step Pipeline"]
      INPUT["User Topic"]
      RAG["RAG Retrieval<br/>Top-5 docs"]
      BASE["Step 1: Base Knowledge"]
      SPLIT["Step 2: Topic Split"]
      DEEP["Step 3: Deep Dive"]
      SYNTH["Step 4: Synthesis"]
      OUTPUT["Master Guide"]

      INPUT --> RAG
      RAG --> BASE
      BASE --> SPLIT
      SPLIT --> DEEP
      DEEP --> SYNTH
      SYNTH --> OUTPUT
    end

    subgraph STORAGE["Vector Storage"]
      QDRANT["Qdrant Cloud<br/>400+ docs indexed"]
    end

    subgraph MODELS["AI Models"]
      GEMINI["Gemini 3 Pro"]
      EMBED["gemini-embedding-001"]
    end

    RAG -.-> QDRANT
    RAG -.-> EMBED
    BASE -.-> GEMINI
    DEEP -.-> GEMINI

    style INPUT fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style OUTPUT fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style QDRANT fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
`}
        />

        <hr />

        <h2>Project Metrics</h2>

        <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">400+</div>
            <div className="text-sm text-muted-foreground">Documents</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">94%</div>
            <div className="text-sm text-muted-foreground">Token Savings</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">768</div>
            <div className="text-sm text-muted-foreground">Vector Dim</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">~5MB</div>
            <div className="text-sm text-muted-foreground">Qdrant Storage</div>
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
                <td className="px-4 py-3">Google Gemini 3 Pro Preview</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Web Search</td>
                <td className="px-4 py-3">Perplexity API (sonar-pro)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Critique (Optional)</td>
                <td className="px-4 py-3">Claude Opus 4.5</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Embeddings</td>
                <td className="px-4 py-3">gemini-embedding-001 (768 dimensions)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Vector Database</td>
                <td className="px-4 py-3">Qdrant Cloud (shared cluster)</td>
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

        <h2>CLI Commands</h2>

        <pre><code>{`# Sync all documents to Qdrant
python syncRag.py sync

# Force full re-index
python syncRag.py sync --force

# List indexed documents
python syncRag.py list
python syncRag.py list --source kb

# Check sync status
python syncRag.py status

# Collection statistics
python syncRag.py stats`}</code></pre>

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
            <div className="text-sm text-muted-foreground">System design, RAG, and data flow</div>
          </Link>
          <Link
            href="/docs/professor-gemini/pipeline"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Pipeline Steps</div>
            <div className="text-sm text-muted-foreground">4-step content generation process</div>
          </Link>
          <Link
            href="/docs/professor-gemini/configuration"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Configuration</div>
            <div className="text-sm text-muted-foreground">Environment setup and Qdrant config</div>
          </Link>
        </div>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
