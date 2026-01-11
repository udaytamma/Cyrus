import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import Link from "next/link";

export const metadata = {
  title: "Vector Database | AI Ingredient Scanner",
  description: "Qdrant-powered semantic ingredient search configuration and operations.",
};

export default function VectorDatabasePage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Vector Database</h1>

        <p className="lead">
          The AI Ingredient Scanner uses Qdrant Cloud for semantic ingredient search, enabling fast and accurate lookups even with variations in ingredient naming.
        </p>

        <hr />

        <h2>Why Vector Search?</h2>

        <p>
          Traditional keyword search fails with ingredient names because of common variations:
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Spelling Variations</div>
            <div className="text-sm text-muted-foreground">
              "Glycerine" vs "Glycerin" vs "Glycerol"
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Scientific Names</div>
            <div className="text-sm text-muted-foreground">
              "Sodium Lauryl Sulfate" vs "SLS"
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Aliases</div>
            <div className="text-sm text-muted-foreground">
              "Vitamin E" vs "Tocopherol"
            </div>
          </div>
        </div>

        <p>
          Vector search matches by <strong>meaning</strong>, not exact text. This enables fuzzy matching across all these variations.
        </p>

        <MermaidDiagram
          chart={`flowchart TB
    QUERY["Query: Glycerine"]
    EMBED["Embedding Model<br/>gemini-embedding"]
    VECTOR["[0.23, 0.45, 0.12, ...]<br/>768-dim vector"]
    QDRANT["Qdrant Cloud<br/>Cosine Similarity"]
    RESULT["Result: Glycerin<br/>(confidence: 0.98)"]

    QUERY --> EMBED
    EMBED --> VECTOR
    VECTOR --> QDRANT
    QDRANT --> RESULT

    style QUERY fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style EMBED fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style VECTOR fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style QDRANT fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style RESULT fill:#d1fae5,stroke:#10b981,stroke-width:2px
`}
        />

        <hr />

        <h2>Lookup Architecture</h2>

        <MermaidDiagram
          chart={`flowchart TB
    ING["Ingredient Name"]
    GEN["Generate Embedding"]
    QRY["Query Qdrant<br/>(Cosine Search)"]
    CONF{"Confidence > 0.7?"}
    RET1["Return Data<br/>(~100ms)"]
    GSEARCH["Google Search<br/>(~3 sec)"]
    SAVE["Save Result<br/>to Qdrant"]
    RET2["Return Data"]

    ING --> GEN
    GEN --> QRY
    QRY --> CONF
    CONF --> |YES| RET1
    CONF --> |NO| GSEARCH
    GSEARCH --> SAVE
    SAVE --> RET2

    style ING fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style GEN fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style QRY fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style CONF fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style RET1 fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style GSEARCH fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style SAVE fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style RET2 fill:#d1fae5,stroke:#10b981,stroke-width:2px
`}
        />

        <hr />

        <h2>Configuration</h2>

        <h3>Collection Settings</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`COLLECTION_NAME = "ingredients"
VECTOR_SIZE = 768  # gemini-embedding-001 output dimensions
EMBEDDING_MODEL = "gemini-embedding-001"
CONFIDENCE_THRESHOLD = 0.7`}
        </pre>

        <h3>Vector Parameters</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`from qdrant_client.models import Distance, VectorParams

client.create_collection(
    collection_name=COLLECTION_NAME,
    vectors_config=VectorParams(
        size=VECTOR_SIZE,
        distance=Distance.COSINE,  # Cosine similarity
    ),
)`}
        </pre>

        <hr />

        <h2>Data Schema</h2>

        <h3>Payload Structure</h3>

        <p>
          Each vector point stores ingredient metadata as a JSON payload:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "name": "Glycerin",
  "purpose": "Humectant, moisturizer",
  "safety_rating": 9,
  "concerns": "No known concerns",
  "recommendation": "SAFE",
  "allergy_risk_flag": "low",
  "allergy_potential": "Rare allergic reactions",
  "origin": "Natural",
  "category": "Both",
  "regulatory_status": "FDA approved, EU compliant",
  "regulatory_bans": "No",
  "aliases": ["Glycerine", "Glycerol", "E422"]
}`}
        </pre>

        <h3>TypeScript Interface</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`interface IngredientData {
  name: string;
  purpose: string;
  safety_rating: number;      // 1-10
  concerns: string;
  recommendation: string;     // SAFE | CAUTION | AVOID
  allergy_risk_flag: string;  // high | low
  allergy_potential: string;
  origin: string;             // Natural | Synthetic | Semi-synthetic
  category: string;           // Food | Cosmetics | Both
  regulatory_status: string;
  regulatory_bans: string;    // Yes | No
  source: string;             // qdrant | google_search
  confidence: number;         // 0.0 - 1.0
}`}
        </pre>

        <hr />

        <h2>Operations</h2>

        <h3>Lookup Ingredient</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def lookup_ingredient(ingredient_name: str) -> IngredientData | None:
    """Look up ingredient in Qdrant vector database."""

    # Generate embedding
    embedding = get_embedding(ingredient_name.lower().strip())

    # Query Qdrant
    results = client.query_points(
        collection_name=COLLECTION_NAME,
        query=embedding,
        limit=1,
    )

    if not results.points:
        return None

    top_result = results.points[0]
    confidence = top_result.score

    if confidence < CONFIDENCE_THRESHOLD:
        return None  # Will trigger Google Search

    return _parse_payload(top_result.payload, confidence)`}
        </pre>

        <h3>Upsert Ingredient</h3>

        <p>
          When Google Search finds new ingredient data, it is saved to Qdrant for future lookups:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def upsert_ingredient(ingredient_data: IngredientData) -> bool:
    """Add or update an ingredient in the database."""

    name = ingredient_data["name"]

    # Create embedding
    embedding = get_embedding(name.lower())

    # Create point
    point = PointStruct(
        id=hash(name.lower()) % (2**63),
        vector=embedding,
        payload={
            "name": name,
            "purpose": ingredient_data["purpose"],
            "safety_rating": ingredient_data["safety_rating"],
            # ... other fields
        },
    )

    client.upsert(
        collection_name=COLLECTION_NAME,
        points=[point],
    )

    return True`}
        </pre>

        <h3>Generate Embedding</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`def get_embedding(text: str) -> list[float]:
    """Get embedding vector using Google AI Studio."""

    client = genai.Client(api_key=settings.google_api_key)

    result = client.models.embed_content(
        model=EMBEDDING_MODEL,
        contents=text,
        config=types.EmbedContentConfig(
            task_type="RETRIEVAL_QUERY",
            output_dimensionality=VECTOR_SIZE,
        ),
    )

    return result.embeddings[0].values`}
        </pre>

        <hr />

        <h2>Self-Learning Pipeline</h2>

        <p>
          The system automatically improves over time through a self-learning mechanism:
        </p>

        <div className="not-prose my-6 space-y-4">
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-sm font-semibold text-white">1</span>
            <div>
              <div className="font-semibold">First Query (New Ingredient)</div>
              <div className="text-sm text-muted-foreground">
                Ingredient not found in Qdrant → Google Search fallback → Parse results → Save to Qdrant
              </div>
              <div className="mt-1 text-xs text-yellow-600 dark:text-yellow-400">~2-3 seconds</div>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white">2</span>
            <div>
              <div className="font-semibold">Future Queries (Same Ingredient)</div>
              <div className="text-sm text-muted-foreground">
                Ingredient found in Qdrant with high confidence → Return cached data
              </div>
              <div className="mt-1 text-xs text-green-600 dark:text-green-400">~50-100ms</div>
            </div>
          </div>
        </div>

        <p>
          <strong>Result:</strong> Knowledge base grows automatically with each unique ingredient lookup.
        </p>

        <hr />

        <h2>Performance</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Operation</th>
                <th className="px-4 py-3 text-left font-semibold">Typical Latency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Embedding generation</td>
                <td className="px-4 py-3 font-mono">100-200ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Qdrant query</td>
                <td className="px-4 py-3 font-mono">50-100ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Google Search (fallback)</td>
                <td className="px-4 py-3 font-mono">2-3 seconds</td>
              </tr>
              <tr className="border-b border-border bg-green-500/10">
                <td className="px-4 py-3 font-medium">Total (cached)</td>
                <td className="px-4 py-3 font-mono font-medium text-green-600 dark:text-green-400">~200ms</td>
              </tr>
              <tr className="border-b border-border bg-yellow-500/10">
                <td className="px-4 py-3 font-medium">Total (uncached)</td>
                <td className="px-4 py-3 font-mono font-medium text-yellow-600 dark:text-yellow-400">~3 seconds</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Qdrant Cloud Setup</h2>

        <h3>Step 1: Create Cluster</h3>

        <ol>
          <li>Go to <a href="https://cloud.qdrant.io/" target="_blank" rel="noopener noreferrer">Qdrant Cloud Console</a></li>
          <li>Create a new cluster (free tier available)</li>
          <li>Note your cluster URL and API key</li>
        </ol>

        <h3>Step 2: Configure Environment</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`QDRANT_URL=https://your-cluster.qdrant.io
QDRANT_API_KEY=your_api_key_here`}
        </pre>

        <h3>Step 3: Verify Connection</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`from qdrant_client import QdrantClient

client = QdrantClient(
    url=settings.qdrant_url,
    api_key=settings.qdrant_api_key,
)

# Check collections
collections = client.get_collections()
print(collections)`}
        </pre>

        <hr />

        <h2>Troubleshooting</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">"Collection not found"</div>
            <p className="text-sm text-muted-foreground mb-3">
              The collection is auto-created on first use:
            </p>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`def ensure_collection_exists(client: QdrantClient) -> None:
    collections = client.get_collections()
    exists = any(c.name == COLLECTION_NAME for c in collections.collections)

    if not exists:
        client.create_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=VectorParams(
                size=VECTOR_SIZE,
                distance=Distance.COSINE,
            ),
        )`}
            </pre>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Low Match Confidence</div>
            <p className="text-sm text-muted-foreground">
              If ingredients are not matching well:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Check ingredient name normalization (lowercase, trimmed)</li>
              <li>Verify embedding model is consistent across operations</li>
              <li>Consider lowering <code>CONFIDENCE_THRESHOLD</code> from 0.7</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Connection Timeout</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`client = QdrantClient(
    url=settings.qdrant_url,
    api_key=settings.qdrant_api_key,
    timeout=30,  # Increase timeout
)`}
            </pre>
          </div>
        </div>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/agents"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Agent Implementation →</div>
            <div className="text-sm text-muted-foreground">Research agent that queries Qdrant</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture Overview →</div>
            <div className="text-sm text-muted-foreground">Tech stack and system design</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
