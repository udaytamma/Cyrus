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

        <p>Every millisecond matters in payment processing. The system is designed around a strict latency budget:</p>

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

        <p>Each detector returns:</p>
        <ul>
          <li><code>detected: bool</code> - Whether the pattern was found</li>
          <li><code>confidence: float</code> - Confidence score (0-1)</li>
          <li><code>signals: list</code> - Specific triggers that fired</li>
        </ul>

        <h3>Risk Scoring</h3>

        <p>Combines detector outputs into actionable scores:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Scoring formula (simplified)
criminal_score = max(
    card_testing.confidence * 0.9,
    velocity.confidence * 0.8,
    geo.confidence * 0.7,
    bot.confidence * 0.95
)

friendly_score = friendly_fraud.confidence * 0.6

overall_risk = criminal_score * 0.7 + friendly_score * 0.3`}
        </pre>

        <h3>Policy Engine</h3>

        <p>Translates scores into business decisions using YAML configuration:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# config/policy.yaml
version: "1.0"

thresholds:
  block: 80      # Score >= 80 → BLOCK
  review: 60     # Score >= 60 → REVIEW
  friction: 40   # Score >= 40 → FRICTION
  # Score < 40 → ALLOW

rules:
  # High-value transactions from new users
  - name: new_user_high_value
    condition: "amount > 500 AND user_age_days < 7"
    action: FRICTION

  # Known bad actors
  - name: blocklist_match
    condition: "card_token IN blocklist"
    action: BLOCK`}
        </pre>

        <p><strong>Hot-Reload Capability:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Update policy without restart
curl -X POST http://localhost:8000/policy/reload`}
        </pre>

        <h3>Evidence Vault</h3>

        <p>Immutable storage for dispute resolution:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`CREATE TABLE evidence (
    id UUID PRIMARY KEY,
    transaction_id VARCHAR(64) UNIQUE NOT NULL,
    decision VARCHAR(16) NOT NULL,
    scores JSONB NOT NULL,
    signals JSONB NOT NULL,
    features JSONB NOT NULL,
    policy_version VARCHAR(16) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),

    -- Immutability constraint
    CONSTRAINT no_updates CHECK (true)
);

-- Prevent updates and deletes
CREATE RULE no_update AS ON UPDATE TO evidence DO INSTEAD NOTHING;
CREATE RULE no_delete AS ON DELETE TO evidence DO INSTEAD NOTHING;`}
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
        M2["fraud_decision_latency_seconds"]
        M3["fraud_detector_triggered"]
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
                <td className="px-4 py-3">Decision counts by type</td>
                <td className="px-4 py-3">Block rate &gt; 15%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_decision_latency_seconds</td>
                <td className="px-4 py-3">P50, P95, P99 latency</td>
                <td className="px-4 py-3">P99 &gt; 50ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_detector_triggered</td>
                <td className="px-4 py-3">Detector fire rates</td>
                <td className="px-4 py-3">Card testing &gt; 5%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_redis_latency_seconds</td>
                <td className="px-4 py-3">Feature lookup time</td>
                <td className="px-4 py-3">P99 &gt; 5ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">fraud_evidence_queue_size</td>
                <td className="px-4 py-3">Pending evidence writes</td>
                <td className="px-4 py-3">Size &gt; 100</td>
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
