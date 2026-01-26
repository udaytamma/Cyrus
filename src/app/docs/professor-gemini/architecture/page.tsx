import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Architecture | Professor Gemini",
  description: "System architecture with RAG retrieval, document syncing, and AI content generation.",
};

export default function ArchitecturePage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Architecture</h1>

        <p className="lead">
          Professor Gemini uses semantic RAG retrieval to provide relevant context from 400+ indexed documents. The architecture includes document syncing, vector search, and a 4-step content generation pipeline.
        </p>

        <hr />

        <h2>System Overview</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph UI["Streamlit UI"]
      INPUT["Topic Input"]
      CONSOLE["Progress Console"]
      OUTPUT["Master Guide Display"]
    end

    subgraph RAG["RAG System"]
      SYNCER["Document Syncer"]
      QDRANT["Qdrant Cloud"]
      RETRIEVER["RAG Retriever"]
    end

    subgraph CORE["Core Pipeline"]
      PIPE["Pipeline Orchestrator"]
      GEMINI["Gemini Client"]
      LOCAL["Local Processing"]
    end

    subgraph STORAGE["Storage"]
      HISTORY["Request History"]
      GUIDES["Generated Guides"]
    end

    INPUT --> RETRIEVER
    RETRIEVER --> QDRANT
    QDRANT --> PIPE
    SYNCER --> QDRANT
    PIPE --> GEMINI
    PIPE --> LOCAL
    PIPE --> CONSOLE
    PIPE --> OUTPUT
    PIPE --> HISTORY
    OUTPUT --> GUIDES

    style INPUT fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style OUTPUT fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style QDRANT fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style PIPE fill:#fce7f3,stroke:#ec4899,stroke-width:2px
`}
        />

        <hr />

        <h2>RAG Architecture</h2>

        <p>
          The RAG system indexes all domain-specific content and retrieves relevant documents for each query, reducing context from 2.5M characters to ~150KB.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
    subgraph SOURCES["Document Sources"]
      KB["Knowledge Base<br/>Markdown guides"]
      QS["Questions<br/>TypeScript data"]
      BS["Blindspots<br/>TypeScript data"]
      WIKI["Wiki<br/>TypeScript data"]
    end

    subgraph SYNC["Document Syncer"]
      PARSE["TS Parser"]
      HASH["MD5 Hash"]
      EMBED["Embeddings"]
    end

    subgraph VECTOR["Qdrant Cloud"]
      COLL["professor_gemini<br/>768-dim vectors"]
    end

    KB --> PARSE
    QS --> PARSE
    BS --> PARSE
    WIKI --> PARSE
    PARSE --> HASH
    HASH -->|changed| EMBED
    HASH -->|unchanged| SKIP[Skip]
    EMBED --> COLL

    style COLL fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
`}
        />

        <h3>Query Flow</h3>

        <MermaidDiagram
          chart={`sequenceDiagram
    participant U as User
    participant R as RAG Retriever
    participant Q as Qdrant
    participant P as Pipeline
    participant G as Gemini

    U->>R: Enter topic
    R->>R: Generate query embedding
    R->>Q: Semantic search (top-5)
    Q-->>R: Relevant documents
    R->>P: Context (~150KB)
    P->>G: Generate with context
    G-->>P: Base knowledge
    P->>P: Parse sections locally

    loop For each section
        P->>G: Deep dive request
        G-->>P: Section content
    end

    P->>P: Local synthesis
    P-->>U: Master Guide
`}
        />

        <hr />

        <h2>Component Breakdown</h2>

        <h3>1. Document Syncer (core/document_syncer.py)</h3>

        <p>Syncs document content to Qdrant with change detection:</p>

        <ul>
          <li><strong>TypeScript parsing</strong> - Converts questions.ts, blindspots.ts, wiki.ts to JSON on-the-fly</li>
          <li><strong>Hash-based detection</strong> - MD5 hashes track changes, skips unchanged files</li>
          <li><strong>Mtime staleness check</strong> - Compares file modification times to indexed_at</li>
          <li><strong>Orphan cleanup</strong> - Removes deleted documents from Qdrant</li>
        </ul>

        <h3>2. Qdrant Manager (core/qdrant_manager.py)</h3>

        <p>Abstraction layer for all Qdrant operations:</p>

        <ul>
          <li><strong>Embedding generation</strong> - Uses gemini-embedding-001 (768 dimensions)</li>
          <li><strong>Document upsert</strong> - Stores vectors with full content payload</li>
          <li><strong>Semantic search</strong> - Cosine similarity with optional source filter</li>
          <li><strong>Collection management</strong> - Creates/manages professor_gemini collection</li>
        </ul>

        <h3>3. RAG Retriever (core/rag_retriever.py)</h3>

        <p>Search interface for the pipeline:</p>

        <ul>
          <li><strong>Query embedding</strong> - Embeds user topic for search</li>
          <li><strong>Top-K retrieval</strong> - Returns top-5 relevant documents by default</li>
          <li><strong>Context building</strong> - Formats documents for Gemini prompt</li>
          <li><strong>Fallback handling</strong> - Falls back to full context if RAG fails</li>
        </ul>

        <h3>4. Pipeline Orchestrator (core/single_prompt_pipeline.py)</h3>

        <p>Coordinates the 4-step content generation:</p>

        <ul>
          <li><strong>RAG integration</strong> - Uses retrieved context instead of full KB</li>
          <li><strong>Parallel execution</strong> - Async processing for deep dives</li>
          <li><strong>Local synthesis</strong> - Concatenates sections without API call</li>
          <li><strong>Status callbacks</strong> - Real-time UI updates</li>
        </ul>

        <h3>5. Gemini Client (core/gemini_client.py)</h3>

        <p>Wrapper for Google Gemini API:</p>

        <ul>
          <li><strong>Content generation</strong> - Base knowledge and deep dives</li>
          <li><strong>Structured prompts</strong> - Roman numeral sections</li>
          <li><strong>Retry logic</strong> - Handles rate limits and errors</li>
          <li><strong>Async support</strong> - Efficient parallel processing</li>
        </ul>

        <hr />

        <h2>Qdrant Collection Schema</h2>

        <pre><code>{`Collection: professor_gemini
Vector: 768 dimensions (gemini-embedding-001)
Distance: COSINE

Payload per document:
├── doc_id: str           # "kb:error-budgets", "questions:q-001"
├── source: str           # "kb", "questions", "blindspots", "wiki"
├── title: str            # Document title
├── content: str          # Full document content (~30KB avg)
├── content_hash: str     # MD5 hash for change detection
├── indexed_at: str       # ISO timestamp
├── char_count: int       # Content length
└── metadata: dict        # Source-specific metadata`}</code></pre>

        <hr />

        <h2>File Structure</h2>

        <pre><code>{`ProfessorGemini/
├── app.py                    # Streamlit entry point
├── syncRag.py                # RAG sync CLI
│
├── config/
│   ├── __init__.py
│   └── settings.py           # Pydantic configuration (incl. Qdrant)
│
├── core/
│   ├── __init__.py
│   ├── qdrant_manager.py     # Qdrant abstraction layer
│   ├── document_syncer.py    # Hash-based sync + TS parsing
│   ├── rag_retriever.py      # Semantic search interface
│   ├── single_prompt_pipeline.py  # RAG-enabled pipeline
│   ├── pipeline.py           # Legacy 4-step pipeline
│   ├── gemini_client.py      # Gemini API wrapper
│   ├── context_loader.py     # Full context fallback
│   └── local_processing.py   # Local optimizations
│
├── utils/
│   ├── __init__.py
│   ├── logging_utils.py      # Structured logging
│   └── file_utils.py         # File management
│
├── tests/
├── gemini-responses/         # Output directory
├── .streamlit/config.toml
├── .env.example
├── requirements.txt
└── pyproject.toml`}</code></pre>

        <hr />

        <h2>Design Decisions</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Decision</th>
                <th className="px-4 py-3 text-left font-semibold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RAG over full context</td>
                <td className="px-4 py-3">94% token reduction (~$0.62 to ~$0.04 per request)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Qdrant Cloud</td>
                <td className="px-4 py-3">Shared cluster with IngredientScanner, no infra overhead</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Hash-based sync</td>
                <td className="px-4 py-3">Only re-index changed files, fast incremental updates</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">TypeScript parsing</td>
                <td className="px-4 py-3">No build step needed, parses on-the-fly during sync</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Content in payload</td>
                <td className="px-4 py-3">No filesystem dependency at query time, works in cloud</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">gemini-embedding-001</td>
                <td className="px-4 py-3">768-dim vectors, optimized for retrieval tasks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Local synthesis</td>
                <td className="px-4 py-3">Reduces API calls by concatenating sections locally</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Token Savings</h2>

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
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
