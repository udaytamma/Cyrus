import { DocsLayout } from "@/components/DocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Architecture | Fraud Detection Platform",
  description: "A deep dive into the fraud detection platform's design decisions and component architecture.",
};

export default function ArchitecturePage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>System Architecture</h1>

        <p className="lead">
          A deep dive into the fraud detection platform&apos;s design decisions and component architecture.
        </p>

        <h2>Design Principles</h2>

        <h3>1. Latency Budget</h3>

        <p>Every millisecond matters in payment processing. The per-component latency budget at low concurrency (single-request):</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Operation</th>
                <th className="px-4 py-3 text-left font-semibold">Budget</th>
                <th className="px-4 py-3 text-left font-semibold">Actual</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Redis feature lookup</td>
                <td className="px-4 py-3">2ms</td>
                <td className="px-4 py-3">1.5ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Detection engine</td>
                <td className="px-4 py-3">3ms</td>
                <td className="px-4 py-3">2.8ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Policy evaluation</td>
                <td className="px-4 py-3">2ms</td>
                <td className="px-4 py-3">1.2ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Evidence capture</td>
                <td className="px-4 py-3">2ms (async)</td>
                <td className="px-4 py-3">1.8ms</td>
              </tr>
              <tr className="border-b border-border font-semibold">
                <td className="px-4 py-3">Total</td>
                <td className="px-4 py-3">10ms</td>
                <td className="px-4 py-3">7.3ms</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Note:</strong> Per-component budgets above are measured at low concurrency (single-request). Under load (50 users, 260 RPS), measured end-to-end P99 is 106ms due to connection pool contention, queue depth, and network serialization overhead. The &lt;200ms P99 SLA budget is met with 47% headroom.
          </p>
        </div>

        <h3>2. Fail-Safe Defaults</h3>

        <p>When components fail, the system degrades gracefully:</p>

        <ul>
          <li><strong>Redis down</strong> - Use cached features, log and proceed</li>
          <li><strong>PostgreSQL down</strong> - Queue evidence, don&apos;t block decisions</li>
          <li><strong>Policy error</strong> - Fall back to previous known-good policy</li>
        </ul>

        <h3>3. Idempotency</h3>

        <p>
          Every decision is idempotent. Retrying the same <code>transaction_id</code> returns the cached result, preventing duplicate processing.
        </p>

        <p><strong>Implementation:</strong> Redis primary with PostgreSQL fallback:</p>

        <ul>
          <li><strong>Redis</strong> - Primary idempotency cache (24h TTL)</li>
          <li><strong>PostgreSQL</strong> - Persistent fallback via <code>idempotency_records</code> table</li>
        </ul>

        <div className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Capstone limitation:</strong> Redis and Postgres idempotency records can diverge on failover. Production should use distributed transaction or saga pattern for strict exactly-once guarantees.
          </p>
        </div>

        <h3>4. Async Background Tasks</h3>

        <p>
          Evidence capture and profile updates run as fire-and-forget background tasks to avoid blocking the decision response path.
        </p>

        <div className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Capstone limitation:</strong> Background tasks have no retry mechanism or dead letter queue. Task failures are logged but not recovered. Production should use Celery or similar task queue.
          </p>
        </div>

        <h2>Component Architecture</h2>

        <h3>Feature Engine</h3>

        <p>Computes real-time features from velocity counters stored in Redis:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/10">
                <th colSpan={2} className="px-4 py-3 text-center font-semibold text-foreground border border-border">Feature Engine</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-border">
                <td className="px-4 py-2 font-medium bg-muted/50">Card Velocity</td>
                <td className="px-4 py-2">Transactions per hour</td>
              </tr>
              <tr className="border border-border">
                <td className="px-4 py-2 font-medium bg-muted/50">Device Velocity</td>
                <td className="px-4 py-2">Cards per device per day</td>
              </tr>
              <tr className="border border-border">
                <td className="px-4 py-2 font-medium bg-muted/50">IP Velocity</td>
                <td className="px-4 py-2">Cards per IP per hour</td>
              </tr>
              <tr className="border border-border">
                <td className="px-4 py-2 font-medium bg-muted/50">User Velocity</td>
                <td className="px-4 py-2">Amount per user per day</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Redis Key Patterns:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`velocity:card:{card_token}:1h    → Transaction count
velocity:device:{device_id}:24h → Unique cards seen
velocity:ip:{ip_hash}:1h        → Unique cards seen
velocity:user:{user_id}:24h     → Total amount`}
        </pre>

        <h3>Detection Engine</h3>

        <p>Five parallel detectors analyze each transaction:</p>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart LR
    subgraph DE["Detection Engine"]
        direction TB
        subgraph Row1[" "]
            direction LR
            CT["Card Testing<br/>Detector"]
            VD["Velocity<br/>Detector"]
            GD["Geographic<br/>Detector"]
        end
        subgraph Row2[" "]
            direction LR
            BD["Bot<br/>Detector"]
            FF["Friendly<br/>Fraud"]
        end
    end

    style DE fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style CT fill:#fee2e2,stroke:#ef4444
    style VD fill:#fef3c7,stroke:#f59e0b
    style GD fill:#d1fae5,stroke:#10b981
    style BD fill:#e0e7ff,stroke:#6366f1
    style FF fill:#fce7f3,stroke:#ec4899`}
          />
        </div>

        <p>Each detector returns a <code>DetectionResult</code>:</p>
        <ul>
          <li><code>score: float</code> - Risk score (0.0-1.0)</li>
          <li><code>triggered: bool</code> - Whether the detection threshold was met</li>
          <li><code>reasons: list[DecisionReason]</code> - Specific signals that fired with codes, descriptions, and severity</li>
        </ul>

        <h3>Risk Scoring</h3>

        <p>Combines detector outputs into actionable scores:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Scoring formula (from risk_scorer.py)
# Step 1: Weighted-max across criminal detectors
criminal_scores = [
    (card_testing.score, 1.0),   # Full weight
    (velocity.score, 0.9),       # Slightly lower
    (geo.score, 0.7),            # Geo can have false positives
    (bot.score, 1.0),            # Bot signals are strong
]
criminal_score = min(1.0, max(score * weight for score, weight in criminal_scores))

# Step 2: Friendly fraud from dedicated scorer
friendly_score = friendly_fraud.score  # Has own signal aggregation

# Step 3: Overall risk = max of criminal and friendly
risk_score = max(criminal_score, friendly_score)

# Step 4: Adjust for confidence (low confidence = less extreme)
if confidence < 0.5:
    risk_score = 0.3 + (risk_score - 0.3) * confidence * 2`}
        </pre>

        <h3>Policy Engine</h3>

        <p>Translates scores into business decisions using YAML configuration:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# config/policy.yaml (actual)
version: 1.0.0
default_action: ALLOW

thresholds:
  risk:
    block_threshold: 0.85    # Score >= 0.85 → BLOCK
    review_threshold: 0.6    # Score >= 0.60 → REVIEW
    friction_threshold: 0.35 # Score >= 0.35 → FRICTION
  criminal:
    block_threshold: 0.85
    review_threshold: 0.65
    friction_threshold: 0.4
  friendly:
    block_threshold: 0.95    # Higher bar for friendly fraud
    review_threshold: 0.6
    friction_threshold: 0.4

rules:
  - id: emulator_block
    conditions: { device_is_emulator: true }
    action: BLOCK
    priority: 10

  - id: high_value_new_account
    conditions: { user_is_new: true, amount_cents_gte: 100000 }
    action: FRICTION
    friction_type: 3DS
    priority: 50`}
        </pre>

        <p><strong>Hot-Reload Capability:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Update policy without restart
curl -X POST http://localhost:8000/policy/reload`}
        </pre>

        <h3>Evidence Vault</h3>

        <p>Two-table architecture for PCI-aware storage:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Table</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Data</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_evidence</td>
                <td className="px-4 py-3">Primary evidence for queries</td>
                <td className="px-4 py-3">HMAC-hashed identifiers, scores, decisions</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">evidence_vault</td>
                <td className="px-4 py-3">Sensitive data for disputes</td>
                <td className="px-4 py-3">Fernet-encrypted raw identifiers</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">idempotency_records</td>
                <td className="px-4 py-3">PostgreSQL idempotency fallback</td>
                <td className="px-4 py-3">Cached decision responses</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Primary evidence table schema:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`CREATE TABLE transaction_evidence (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Transaction identifiers
    transaction_id VARCHAR(64) NOT NULL UNIQUE,
    idempotency_key VARCHAR(128) NOT NULL UNIQUE,
    captured_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),

    -- Transaction details (immutable snapshot)
    amount_cents BIGINT NOT NULL,
    currency VARCHAR(3) NOT NULL DEFAULT 'USD',
    merchant_id VARCHAR(64) NOT NULL,

    -- Entity identifiers (tokenized, no raw PAN)
    card_token VARCHAR(64) NOT NULL,
    device_id VARCHAR(64),
    ip_address INET,
    user_id VARCHAR(64),

    -- Risk signals captured at decision time
    risk_score DECIMAL(5,4) NOT NULL,
    criminal_score DECIMAL(5,4),
    friendly_fraud_score DECIMAL(5,4),

    -- Decision made
    decision VARCHAR(20) NOT NULL,
    decision_reasons JSONB NOT NULL DEFAULT '[]',

    -- Features snapshot (for model training and dispute evidence)
    features_snapshot JSONB NOT NULL DEFAULT '{}',

    -- Verification signals (3DS, AVS, CVV)
    avs_result VARCHAR(10),
    cvv_result VARCHAR(10),
    three_ds_result VARCHAR(20),

    -- Geo data
    geo_country VARCHAR(2),
    geo_region VARCHAR(64),

    -- Policy version for audit
    policy_version VARCHAR(32),
    policy_version_id INTEGER REFERENCES policy_versions(id),

    CONSTRAINT valid_decision CHECK (
        decision IN ('ALLOW', 'FRICTION', 'REVIEW', 'BLOCK')
    )
);

-- Indexes for evidence lookups
CREATE INDEX idx_evidence_card_token ON transaction_evidence(card_token);
CREATE INDEX idx_evidence_user_id ON transaction_evidence(user_id);
CREATE INDEX idx_evidence_captured_at ON transaction_evidence(captured_at);
CREATE INDEX idx_evidence_decision ON transaction_evidence(decision);`}
        </pre>

        <h2>Data Flow</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    PG["Payment Gateway"]
    PG -->|"POST /decide"| IC

    IC["Idempotency Check"]
    IC -->|"Cache hit"| CR["Return cached result"]
    IC -->|"Cache miss"| FE

    FE["Feature Engine"]
    Redis[("Redis")]
    FE <-->|"Get velocity counters"| Redis

    FE --> DE["Detection Engine"]
    DE --> RS["Risk Scoring"]
    RS --> PE["Policy Engine"]

    PE -->|"Response"| RESP["Response to Gateway"]
    PE --> EC["Evidence Capture"]

    PGS[("PostgreSQL")]
    EC -->|"Store record"| PGS

    EC --> UP["Update Profiles"]
    UP -->|"Increment counters"| Redis

    style PG fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style IC fill:#fef3c7,stroke:#f59e0b
    style FE fill:#d1fae5,stroke:#10b981
    style DE fill:#fee2e2,stroke:#ef4444
    style RS fill:#fce7f3,stroke:#ec4899
    style PE fill:#e0e7ff,stroke:#6366f1
    style EC fill:#fef3c7,stroke:#f59e0b
    style UP fill:#d1fae5,stroke:#10b981
    style Redis fill:#fee2e2,stroke:#ef4444
    style PGS fill:#e0e7ff,stroke:#6366f1`}
          />
        </div>

        <h2>Monitoring Architecture</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    subgraph Grafana["Grafana Dashboard"]
        direction LR
        DR["Decision<br/>Rates"]
        LAT["Latency<br/>P50/99"]
        VOL["Volume<br/>per Hour"]
    end

    subgraph Prometheus["Prometheus"]
        direction LR
        M1["fraud_decisions_total"]
        M2["fraud_e2e_latency_ms"]
        M3["fraud_detector_triggers_total"]
    end

    subgraph API["Fraud Detection API"]
        ME["/metrics endpoint"]
    end

    Grafana --> Prometheus
    Prometheus --> API

    style Grafana fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style Prometheus fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style API fill:#e0e7ff,stroke:#6366f1,stroke-width:2px`}
          />
        </div>

        <h2>Key Metrics</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Alert Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_decisions_total</td>
                <td className="px-4 py-3">Decision counts by type (ALLOW, BLOCK, etc.)</td>
                <td className="px-4 py-3">Block rate &gt; 15%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_e2e_latency_ms</td>
                <td className="px-4 py-3">End-to-end processing latency histogram</td>
                <td className="px-4 py-3">P99 &gt; 200ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_detector_triggers_total</td>
                <td className="px-4 py-3">Detector fire rates by detector name</td>
                <td className="px-4 py-3">Card testing &gt; 5%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_redis_latency_ms</td>
                <td className="px-4 py-3">Redis operation latency histogram</td>
                <td className="px-4 py-3">P99 &gt; 50ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_postgres_latency_ms</td>
                <td className="px-4 py-3">PostgreSQL operation latency histogram</td>
                <td className="px-4 py-3">P99 &gt; 250ms</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Scalability Considerations</h2>

        <h3>Current (Sprint-1)</h3>
        <ul>
          <li>Single API instance</li>
          <li>Single Redis instance</li>
          <li>Local PostgreSQL</li>
        </ul>

        <h3>Production Path</h3>
        <ul>
          <li>API: Kubernetes deployment with HPA</li>
          <li>Redis: Redis Cluster for sharding</li>
          <li>PostgreSQL: Read replicas for evidence queries</li>
          <li>Add Kafka for event sourcing</li>
          <li>Add Flink for streaming features</li>
        </ul>

        <p>The architecture is designed to scale horizontally without changing the core decision logic.</p>
      </article>
    </DocsLayout>
  );
}
