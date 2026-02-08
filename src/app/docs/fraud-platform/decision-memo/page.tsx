import { DocsLayout } from "@/components/DocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Decision Memo | Fraud Detection Platform",
  description: "Principal TPM decision rationale for the Telco Payment Fraud Detection Platform - why these choices exist and what breaks if they are wrong.",
};

export default function DecisionMemoPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Decision Memo</h1>

        <p className="text-muted-foreground">
          <strong>Author:</strong> Uday Tamma | <strong>Document Version:</strong> 1.0 | <strong>Date:</strong> February 08, 2026 at 10:00 AM CST
        </p>

        <p className="lead">
          This document records the four consequential design decisions in the fraud detection platform, the alternatives evaluated, and what breaks if we got them wrong. Each decision is framed as a trade-off with measurable consequences.
        </p>

        <hr />

        <h2>Decision 1: Real-Time Streaming vs. Async Batch Scoring</h2>

        <h3>Context</h3>

        <p>
          The legacy system scored transactions in 2-3 second batch windows. Fraud analysts reviewed flagged batches every 4 hours. By that time, a SIM farm attack could activate 200+ SIMs using stolen cards, each in under 30 seconds.
        </p>

        <h3>Decision</h3>

        <p><strong>Real-time synchronous scoring on the payment path (&lt;200ms P99).</strong></p>

        <h3>Alternatives Evaluated</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Approach</th>
                <th className="px-4 py-3 text-left font-semibold">Latency</th>
                <th className="px-4 py-3 text-left font-semibold">Fraud Catch Rate</th>
                <th className="px-4 py-3 text-left font-semibold">Why Rejected</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Batch scoring (hourly)</td>
                <td className="px-4 py-3">60 min</td>
                <td className="px-4 py-3">~40% of velocity attacks</td>
                <td className="px-4 py-3">SIM farm attacks complete in 5-10 minutes. By the time the batch runs, the damage is done and cards are already flagged by the issuer.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Near-real-time (Kafka consumer, 5-30s)</td>
                <td className="px-4 py-3">5-30s</td>
                <td className="px-4 py-3">~70% of velocity attacks</td>
                <td className="px-4 py-3">Still allows 1-3 fraudulent transactions before the first alert fires. Requires separate infra (Kafka, Flink) without blocking the payment. Added complexity for Phase 1.</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="px-4 py-3 font-medium">Synchronous inline (&lt;200ms)</td>
                <td className="px-4 py-3">&lt;200ms</td>
                <td className="px-4 py-3">~95% of velocity attacks</td>
                <td className="px-4 py-3 font-semibold">Selected. Every transaction is scored before authorization. Zero-gap detection.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Why 200ms Specifically</h3>

        <p>
          The 200ms target is not arbitrary. It derives from the Telco/MSP payment context:
        </p>

        <ul>
          <li><strong>Card network timeout:</strong> Visa/Mastercard authorization timeout is typically 3-5 seconds. Our fraud check must fit within the gateway&apos;s sub-call budget, which allocates 200-300ms for risk scoring.</li>
          <li><strong>UX impact:</strong> Mobile top-up and SIM activation are high-frequency, low-patience interactions. Research shows abandonment increases 7% for every 100ms added beyond perceived &quot;instant&quot; (under 300ms total).</li>
          <li><strong>Competitive benchmark:</strong> Stripe Radar operates at ~50ms. Adyen RevenueProtect at ~100ms. Our 200ms target is achievable with rule-based scoring while leaving headroom for Phase 2 ML.</li>
        </ul>

        <h3>What Breaks If Wrong</h3>

        <div className="not-prose my-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/50">
          <p className="text-sm text-red-900 dark:text-red-200">
            <strong>If we had chosen batch:</strong> At 150M annual transactions with 1.8% fraud rate, a 4-hour batch window means ~12,300 fraudulent transactions complete before detection. At an average fraud amount of $89, that is $1.09M in unrecoverable losses per quarter that inline scoring would have blocked.
          </p>
        </div>

        <hr />

        <h2>Decision 2: Five Detectors -- What Was Included, What Was Excluded</h2>

        <h3>Context</h3>

        <p>
          We needed to choose which fraud signals to implement in Phase 1. More signals increase detection coverage but also increase latency, false positives, and maintenance burden. The constraint was: ship within 2 sprints with &lt;200ms latency.
        </p>

        <h3>Decision</h3>

        <p><strong>Five parallel detectors: Card Testing, Velocity, Geographic Anomaly, Bot Detection, Friendly Fraud.</strong></p>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart LR
    subgraph Selected["Phase 1 — Selected"]
        direction TB
        CT["Card Testing<br/>Weight: 1.0"]
        VD["Velocity<br/>Weight: 0.9"]
        BD["Bot Detection<br/>Weight: 1.0"]
        GD["Geographic<br/>Weight: 0.7"]
        FF["Friendly Fraud<br/>Separate scorer"]
    end

    subgraph Deferred["Deferred — Why"]
        direction TB
        ML["ML Anomaly<br/>No labeled data yet"]
        BH["Behavioral<br/>Needs session data"]
        NW["Network Graph<br/>Compute-heavy"]
        DV["Device Fingerprint<br/>SDK required"]
    end

    Selected ~~~ Deferred

    style Selected fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style Deferred fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style CT fill:#fee2e2,stroke:#ef4444
    style VD fill:#fef3c7,stroke:#f59e0b
    style BD fill:#e0e7ff,stroke:#6366f1
    style GD fill:#d1fae5,stroke:#10b981
    style FF fill:#fce7f3,stroke:#ec4899
    style ML fill:#f5f5f5,stroke:#999
    style BH fill:#f5f5f5,stroke:#999
    style NW fill:#f5f5f5,stroke:#999
    style DV fill:#f5f5f5,stroke:#999`}
          />
        </div>

        <h3>Selection Criteria</h3>

        <p>Each signal was evaluated on three axes:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Signal</th>
                <th className="px-4 py-3 text-left font-semibold">Telco Fraud Coverage</th>
                <th className="px-4 py-3 text-left font-semibold">Data Available Today</th>
                <th className="px-4 py-3 text-left font-semibold">Latency Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Phase 1?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Card Testing</td><td className="px-4 py-3">SIM activation probing, BIN attacks</td><td className="px-4 py-3">Yes (Redis counters)</td><td className="px-4 py-3">&lt;1ms</td><td className="px-4 py-3 font-bold text-green-700 dark:text-green-400">Yes</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Velocity</td><td className="px-4 py-3">SIM farms, device resale rings</td><td className="px-4 py-3">Yes (Redis counters)</td><td className="px-4 py-3">&lt;1ms</td><td className="px-4 py-3 font-bold text-green-700 dark:text-green-400">Yes</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Geographic</td><td className="px-4 py-3">International fraud, location spoofing</td><td className="px-4 py-3">Yes (IP geolocation)</td><td className="px-4 py-3">&lt;1ms</td><td className="px-4 py-3 font-bold text-green-700 dark:text-green-400">Yes</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Bot Detection</td><td className="px-4 py-3">Automated SIM farm operations</td><td className="px-4 py-3">Yes (device metadata)</td><td className="px-4 py-3">&lt;1ms</td><td className="px-4 py-3 font-bold text-green-700 dark:text-green-400">Yes</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Friendly Fraud</td><td className="px-4 py-3">Device upgrade disputes, service disputes</td><td className="px-4 py-3">Yes (chargeback history)</td><td className="px-4 py-3">&lt;1ms</td><td className="px-4 py-3 font-bold text-green-700 dark:text-green-400">Yes</td></tr>
              <tr className="border-b border-border bg-muted/30"><td className="px-4 py-3 font-medium">ML Anomaly Detection</td><td className="px-4 py-3">Unknown patterns</td><td className="px-4 py-3">No (needs labeled training data)</td><td className="px-4 py-3">10-50ms</td><td className="px-4 py-3 text-amber-700 dark:text-amber-400">Phase 2</td></tr>
              <tr className="border-b border-border bg-muted/30"><td className="px-4 py-3 font-medium">Behavioral Biometrics</td><td className="px-4 py-3">Account takeover</td><td className="px-4 py-3">No (needs session/click data)</td><td className="px-4 py-3">20-100ms</td><td className="px-4 py-3 text-amber-700 dark:text-amber-400">Phase 3</td></tr>
              <tr className="border-b border-border bg-muted/30"><td className="px-4 py-3 font-medium">Network/Graph Analysis</td><td className="px-4 py-3">Fraud ring detection</td><td className="px-4 py-3">Partial (entity linkage)</td><td className="px-4 py-3">50-200ms</td><td className="px-4 py-3 text-amber-700 dark:text-amber-400">Phase 3</td></tr>
              <tr className="border-b border-border bg-muted/30"><td className="px-4 py-3 font-medium">Advanced Device Fingerprint</td><td className="px-4 py-3">Device cloning, emulator detection</td><td className="px-4 py-3">No (needs client SDK)</td><td className="px-4 py-3">5-20ms</td><td className="px-4 py-3 text-amber-700 dark:text-amber-400">Phase 2</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Why Not More Signals in Phase 1</h3>

        <p>Diminishing returns. The five selected detectors cover <strong>~85% of Telco-specific fraud patterns</strong> using data already in the payment event payload. Each additional signal either:</p>

        <ul>
          <li>Requires external data not yet available (ML labels, session data, client SDK)</li>
          <li>Adds latency that eats into the 200ms budget</li>
          <li>Increases false positive surface area without proportional detection gain</li>
        </ul>

        <h3>What Breaks If Wrong</h3>

        <div className="not-prose my-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/50">
          <p className="text-sm text-red-900 dark:text-red-200">
            <strong>If we had included ML in Phase 1:</strong> Without labeled training data (chargebacks take 45-120 days to materialize), the model would train on proxy labels, producing a high false-positive rate that erodes business trust in the system before it has a chance to prove value. Rule-based detection ships in weeks; ML requires months of data collection first.
          </p>
        </div>

        <hr />

        <h2>Decision 3: YAML Hot-Reload vs. Database-Backed Rules</h2>

        <h3>Context</h3>

        <p>
          Fraud Ops needs to adjust thresholds rapidly during active attacks. The question: should policy configuration live in a database (queryable, auditable, UI-editable) or in YAML files (version-controlled, hot-reloadable, human-readable)?
        </p>

        <h3>Decision</h3>

        <p><strong>YAML configuration with API-triggered hot-reload, backed by PostgreSQL version history.</strong></p>

        <h3>Alternatives Evaluated</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Approach</th>
                <th className="px-4 py-3 text-left font-semibold">Update Speed</th>
                <th className="px-4 py-3 text-left font-semibold">Audit Trail</th>
                <th className="px-4 py-3 text-left font-semibold">Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Hardcoded in source</td>
                <td className="px-4 py-3">Deploy cycle (hours)</td>
                <td className="px-4 py-3">Git history</td>
                <td className="px-4 py-3">Engineering bottleneck. Fraud Ops cannot self-serve.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Database-only (OPA/Rego)</td>
                <td className="px-4 py-3">Instant (DB write)</td>
                <td className="px-4 py-3">Change log table</td>
                <td className="px-4 py-3">Complex rule language. Harder to review in PR. Needs dedicated UI. Overkill for Phase 1 rule complexity.</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="px-4 py-3 font-medium">YAML + hot-reload + DB versioning</td>
                <td className="px-4 py-3">Seconds (API call)</td>
                <td className="px-4 py-3">Git + policy_versions table</td>
                <td className="px-4 py-3 font-semibold">Selected. Human-readable, reviewable in PRs, reloadable without restart, versioned in PostgreSQL.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>How It Works</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`sequenceDiagram
    participant Ops as Fraud Ops
    participant Git as Git Repo
    participant API as Fraud API
    participant PG as PostgreSQL

    Ops->>Git: Update policy.yaml
    Ops->>API: POST /policy/reload
    API->>API: Parse & validate YAML
    API->>API: SHA256 hash comparison
    alt Policy changed
        API->>PG: INSERT into policy_versions
        API->>API: Hot-swap active policy
        API-->>Ops: 200 OK (new version active)
    else No change
        API-->>Ops: 200 OK (already current)
    end`}
          />
        </div>

        <h3>Why Not a Full Rules Engine (OPA/Drools)</h3>

        <p>Phase 1 has 6 rules and 3 threshold categories. A full rules engine adds:</p>

        <ul>
          <li>Operational complexity (separate service to deploy, monitor, and debug)</li>
          <li>Learning curve for Fraud Ops team (Rego/DRL syntax vs. YAML)</li>
          <li>Latency overhead (network hop to OPA sidecar: 2-5ms per evaluation)</li>
        </ul>

        <p>
          The architecture supports migrating to OPA in Phase 3 when rule complexity warrants it. The policy engine interface is abstracted -- swapping YAML evaluation for OPA requires changing one module.
        </p>

        <h3>What Breaks If Wrong</h3>

        <div className="not-prose my-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/50">
          <p className="text-sm text-red-900 dark:text-red-200">
            <strong>If we had used database-only rules without versioning:</strong> A misconfigured threshold (e.g., block_threshold accidentally set to 0.1 instead of 0.85) would block 90%+ of legitimate transactions. Without version history and instant rollback, recovery requires manual DB surgery under incident pressure. With YAML versioning, rollback is: <code>POST /policy/reload?version=1.2.3</code>.
          </p>
        </div>

        <hr />

        <h2>Decision 4: Rule-Based Scoring vs. ML-First (Phase 1)</h2>

        <h3>Context</h3>

        <p>
          The industry trend is ML-first fraud detection. Why did we ship Phase 1 with rule-based scoring instead?
        </p>

        <h3>Decision</h3>

        <p><strong>Rule-based detection with ML hooks for Phase 2. Rules as the baseline, not a placeholder.</strong></p>

        <h3>The Cold Start Problem</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">ML Requirement</th>
                <th className="px-4 py-3 text-left font-semibold">Current State</th>
                <th className="px-4 py-3 text-left font-semibold">Time to Readiness</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3">Labeled training data</td><td className="px-4 py-3">No chargeback feed ingested</td><td className="px-4 py-3">45-120 days (chargeback maturity window)</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Feature store</td><td className="px-4 py-3">Velocity counters only</td><td className="px-4 py-3">Phase 1 builds this foundation</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Model serving infra</td><td className="px-4 py-3">Not deployed</td><td className="px-4 py-3">Sprint 3-4</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">A/B testing framework</td><td className="px-4 py-3">Not built</td><td className="px-4 py-3">Sprint 3-4</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Model monitoring</td><td className="px-4 py-3">Prometheus ready, PSI not implemented</td><td className="px-4 py-3">Sprint 4</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Why Rules Are Not a Compromise</h3>

        <ul>
          <li><strong>Interpretability:</strong> When a transaction is blocked, the reason is a specific rule code (<code>CARD_TESTING_RAPID_ATTEMPTS</code>), not a model confidence score. This matters for dispute representment -- &quot;the system flagged rapid card testing from a known SIM farm IP&quot; wins disputes.</li>
          <li><strong>Speed to production:</strong> Rules ship in weeks. ML requires months of data collection, labeling, training, validation, and shadow deployment.</li>
          <li><strong>Fraud Ops control:</strong> Business can adjust thresholds without engineering. ML models require retraining.</li>
          <li><strong>Evidence quality:</strong> Rule-based reasons are directly usable in chargeback representment. ML scores require explanation layers.</li>
        </ul>

        <h3>What Breaks If Wrong</h3>

        <div className="not-prose my-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/50">
          <p className="text-sm text-red-900 dark:text-red-200">
            <strong>If we had shipped ML-first:</strong> With no labeled data, the model trains on proxy labels (rule-based flags, manual reviews). This creates a feedback loop: the model learns to replicate existing rules, adding latency and complexity without improving detection. Worse, the model gives false confidence -- &quot;the ML system approved it&quot; -- while providing no better judgment than the rules it was trained on.
          </p>
        </div>

        <hr />

        <h2>Decision Summary</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Decision</th>
                <th className="px-4 py-3 text-left font-semibold">Choice</th>
                <th className="px-4 py-3 text-left font-semibold">Key Trade-off</th>
                <th className="px-4 py-3 text-left font-semibold">Reversible?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Scoring mode</td><td className="px-4 py-3">Real-time inline</td><td className="px-4 py-3">Infrastructure complexity vs. detection speed</td><td className="px-4 py-3">No (architectural)</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Detection signals</td><td className="px-4 py-3">5 rule-based detectors</td><td className="px-4 py-3">Coverage vs. data availability and latency</td><td className="px-4 py-3">Yes (additive)</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Policy engine</td><td className="px-4 py-3">YAML + hot-reload</td><td className="px-4 py-3">Simplicity vs. rule expressiveness</td><td className="px-4 py-3">Yes (interface abstracted)</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Scoring approach</td><td className="px-4 py-3">Rules-first, ML Phase 2</td><td className="px-4 py-3">Time-to-value vs. detection ceiling</td><td className="px-4 py-3">Yes (champion/challenger)</td></tr>
            </tbody>
          </table>
        </div>

        <hr />

        <p className="text-sm text-muted-foreground italic">This decision memo is designed to be shared with engineering leadership, VP-level stakeholders, and interview panels evaluating system design judgment.</p>

      </article>
    </DocsLayout>
  );
}
