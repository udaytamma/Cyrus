import Link from "next/link";
import { DocsLayout } from "@/components/DocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Executive Overview | Fraud Detection Platform",
  description: "Executive overview of the Telco Payment Fraud Detection Platform - business context, goals, solution architecture, and impact summary.",
};

export default function ExecutiveOverviewPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Telco Payment Fraud Detection Platform</h1>
        <h2>Executive Overview</h2>

        <p><strong>Author:</strong> Uday Tamma | <strong>Document Version:</strong> 1.0 | <strong>Date:</strong> January 06, 2026 at 11:33 AM CST</p>

        <hr />

        <h2>Problem &amp; Context</h2>

        <h3>Business Context</h3>

        <p>A mid-size Telco/MSP processes <strong>~150M payment authorization attempts per year</strong> across prepaid top-ups, postpaid billing, device financing, and value-added services. The platform handles SIM activations, device upgrades, mobile top-ups, and international service enablement.</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Challenge</th>
                <th className="px-4 py-3 text-left font-semibold">Current State</th>
                <th className="px-4 py-3 text-left font-semibold">Business Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Annual Fraud Loss</td><td className="px-4 py-3">$2.4M+ (1.8% of payment volume)</td><td className="px-4 py-3">Direct P&amp;L hit</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">False Positive Rate</td><td className="px-4 py-3">18% of blocks are legitimate</td><td className="px-4 py-3">$800K+ lost revenue annually</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Decision Latency</td><td className="px-4 py-3">2-3 seconds (batch scoring)</td><td className="px-4 py-3">Poor UX, cart abandonment</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Manual Review Volume</td><td className="px-4 py-3">12% of transactions</td><td className="px-4 py-3">$400K+ ops cost, 4-hour SLA</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Chargeback Win Rate</td><td className="px-4 py-3">22%</td><td className="px-4 py-3">Recoverable losses left on table</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Root Cause Analysis</h3>

        <ol>
          <li><strong>Batch-based detection</strong> cannot catch velocity attacks that complete in minutes</li>
          <li><strong>Static rules</strong> cannot adapt to evolving fraud patterns (SIM farms, device resale rings)</li>
          <li><strong>Insufficient evidence capture</strong> leads to losing winnable disputes</li>
          <li><strong>No profit-based thresholds</strong> results in over-blocking legitimate customers</li>
        </ol>

        <hr />

        <h2>Goals &amp; Constraints</h2>

        <h3>Target Metrics</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Current</th>
                <th className="px-4 py-3 text-left font-semibold">Target</th>
                <th className="px-4 py-3 text-left font-semibold">Constraint</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Approval Rate</td><td className="px-4 py-3">88%</td><td className="px-4 py-3">&gt;92%</td><td className="px-4 py-3">Cannot drop below 90%</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Fraud Rate</td><td className="px-4 py-3">1.8%</td><td className="px-4 py-3">&lt;0.8%</td><td className="px-4 py-3">Industry benchmark</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">P99 Latency</td><td className="px-4 py-3">2,300ms</td><td className="px-4 py-3">&lt;200ms</td><td className="px-4 py-3">Hard SLA requirement</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Manual Review</td><td className="px-4 py-3">12%</td><td className="px-4 py-3">&lt;3%</td><td className="px-4 py-3">Ops budget constraint</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Dispute Win Rate</td><td className="px-4 py-3">22%</td><td className="px-4 py-3">&gt;50%</td><td className="px-4 py-3">Evidence quality dependent</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">False Positive Rate</td><td className="px-4 py-3">18%</td><td className="px-4 py-3">&lt;10%</td><td className="px-4 py-3">Customer experience KPI</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Non-Negotiable Constraints</h3>

        <ul>
          <li><strong>&lt;200ms P99 latency</strong> - Payments cannot wait for fraud decisions</li>
          <li><strong>Exactly-once semantics</strong> - No duplicate charges or blocks</li>
          <li><strong>PCI/PII compliance</strong> - No raw PAN in fraud platform</li>
          <li><strong>99.9% availability</strong> - Revenue-critical path</li>
        </ul>

        <h3>Internal Latency Budget</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Budget</th>
                <th className="px-4 py-3 text-left font-semibold">Actual</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3">Feature lookup (Redis)</td><td className="px-4 py-3">50ms</td><td className="px-4 py-3">50ms</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Detection engine</td><td className="px-4 py-3">30ms</td><td className="px-4 py-3">20ms</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Risk scoring</td><td className="px-4 py-3">20ms</td><td className="px-4 py-3">20ms</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Policy evaluation</td><td className="px-4 py-3">15ms</td><td className="px-4 py-3">10ms</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Evidence capture (async)</td><td className="px-4 py-3">30ms</td><td className="px-4 py-3">20ms</td></tr>
              <tr className="border-b border-border bg-muted/30"><td className="px-4 py-3 font-bold">Total E2E</td><td className="px-4 py-3 font-bold">&lt;200ms</td><td className="px-4 py-3 font-bold">106ms</td></tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/50">
          <p className="text-sm text-blue-900 dark:text-blue-200">
            <strong>Note:</strong> Component-level actuals are measured at the 50th percentile in isolation. The E2E P99 of 106ms under load reflects parallelism (detection runs concurrent detectors via <code className="text-xs">asyncio.gather</code>) and async evidence capture, which overlap rather than sum serially.
          </p>
        </div>

        <hr />

        <h2>Solution at a Glance</h2>

        <h3>Architecture</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    subgraph PG["Payment Gateway"]
        direction LR
        PGNode[" "]
    end

    subgraph FDA["Fraud Detection API"]
        direction LR
        FE["Feature Engine<br/>(50ms)"]
        DE["Detection Engine<br/>(20ms)"]
        RS["Risk Scoring<br/>(20ms)"]
        PE["Policy Engine<br/>(10ms)"]
    end

    subgraph Storage["Data Stores"]
        direction LR
        Redis[("Redis<br/>Velocity<br/>Counters")]
        Signals[("5 Signal<br/>Types")]
        YAML[("YAML<br/>Hot-Load<br/>Config")]
    end

    PGS[("PostgreSQL<br/>Evidence Vault")]

    PG -->|"POST /decide (<200ms)"| FDA
    FE --> Redis
    DE --> Signals
    PE --> YAML
    Storage --> PGS

    style PG fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style FDA fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style Storage fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style PGS fill:#fee2e2,stroke:#ef4444,stroke-width:2px`}
          />
        </div>

        <h3>Key Design Choices</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Decision</th>
                <th className="px-4 py-3 text-left font-semibold">Choice</th>
                <th className="px-4 py-3 text-left font-semibold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Streaming vs. Batch</td><td className="px-4 py-3">Real-time API</td><td className="px-4 py-3">Velocity attacks complete in minutes</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">ML vs. Rules (Phase 1)</td><td className="px-4 py-3">Rule-based with ML hooks</td><td className="px-4 py-3">Faster to market, interpretable</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Feature Store</td><td className="px-4 py-3">Redis velocity counters</td><td className="px-4 py-3">Sub-ms lookups, sliding windows</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Policy Engine</td><td className="px-4 py-3">YAML + hot-reload</td><td className="px-4 py-3">Business can adjust without deploys</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Evidence Storage</td><td className="px-4 py-3">PostgreSQL (immutable)</td><td className="px-4 py-3">Dispute representment requirement</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Detection Coverage (5 Signal Types)</h3>

        <ol>
          <li><strong>Card Testing</strong> - Rapid small transactions, BIN probing, decline patterns</li>
          <li><strong>Velocity Attacks</strong> - Multi-card device, multi-device card, IP clustering</li>
          <li><strong>Geographic Anomaly</strong> - Country mismatch, impossible travel, datacenter IPs</li>
          <li><strong>Bot/Automation</strong> - Emulators, rooted devices, Tor exit nodes</li>
          <li><strong>Friendly Fraud</strong> - Historical chargebacks, refund abuse patterns</li>
        </ol>

        <hr />

        <h2>Phased Roadmap</h2>

        <h3>Phase 1: MVP (Sprint 1-2) - COMPLETE</h3>

        <p>Real-time decisioning foundation with rule-based detection.</p>

        <p><strong>Deliverables:</strong></p>
        <ul>
          <li>Decision API with &lt;200ms P99 latency</li>
          <li>5 detection signal types</li>
          <li>Redis velocity counters (card, device, IP, user)</li>
          <li>YAML policy engine with hot-reload</li>
          <li>Immutable evidence vault</li>
          <li>Prometheus/Grafana monitoring</li>
          <li>118 tests (111 unit + 7 integration), load tested to 260 RPS (50 users baseline)</li>
        </ul>

        <p><strong>Current Status:</strong> MVP complete, ready for shadow deployment</p>

        <h3>Phase 2: Hybrid ML + Experiments (Sprint 3-4)</h3>

        <p>Layer ML scoring while maintaining policy control.</p>

        <p><strong>Deliverables:</strong></p>
        <ul>
          <li>XGBoost/LightGBM criminal fraud model</li>
          <li>Champion/challenger experiment framework</li>
          <li>Historical replay for threshold simulation</li>
          <li>Economic optimization UI for business users</li>
          <li>Automated chargeback ingestion and labeling</li>
        </ul>

        <p><strong>ML Model Specification:</strong></p>
        <ul>
          <li>Features: 25+ velocity + behavioral + entity features</li>
          <li>Labels: Chargebacks linked with 120-day maturity window</li>
          <li>Training: Weekly retraining with point-in-time features</li>
          <li>Deployment: Shadow mode first, then 10% traffic ramp</li>
        </ul>

        <h3>Phase 3: Scale &amp; External Signals (Sprint 5-6)</h3>

        <p>Production hardening and expanded detection.</p>

        <p><strong>Deliverables:</strong></p>
        <ul>
          <li>Multi-region deployment (Redis Cluster, PostgreSQL replicas, Kafka event sourcing)</li>
          <li>External signal integration: TC40/SAFE issuer alerts, Ethoca/Verifi network alerts, BIN intelligence and device reputation, Consortium fraud data</li>
          <li>Enhanced analyst tooling (case management, bulk actions, playbooks)</li>
          <li>IRSF detection for international calls</li>
          <li>SIM swap correlation for ATO detection</li>
        </ul>

        <hr />

        <h2>Impact Summary</h2>

        <h3>Projected Before/After Metrics</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Before</th>
                <th className="px-4 py-3 text-left font-semibold">After (Phase 1)</th>
                <th className="px-4 py-3 text-left font-semibold">After (Phase 2)</th>
                <th className="px-4 py-3 text-left font-semibold">Methodology</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Approval Rate</td><td className="px-4 py-3">88%</td><td className="px-4 py-3">91%</td><td className="px-4 py-3">93%</td><td className="px-4 py-3">Threshold optimization</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Fraud Rate</td><td className="px-4 py-3">1.80%</td><td className="px-4 py-3">1.20%</td><td className="px-4 py-3">0.75%</td><td className="px-4 py-3">Velocity detection</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">P99 Latency</td><td className="px-4 py-3">2,300ms</td><td className="px-4 py-3">106ms</td><td className="px-4 py-3">120ms</td><td className="px-4 py-3">Measured in load test</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Manual Review</td><td className="px-4 py-3">12%</td><td className="px-4 py-3">5%</td><td className="px-4 py-3">2%</td><td className="px-4 py-3">Automation + confidence</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">False Positives</td><td className="px-4 py-3">18%</td><td className="px-4 py-3">12%</td><td className="px-4 py-3">8%</td><td className="px-4 py-3">Better signals</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-medium">Dispute Win Rate</td><td className="px-4 py-3">22%</td><td className="px-4 py-3">40%</td><td className="px-4 py-3">55%</td><td className="px-4 py-3">Evidence capture</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Financial Impact Model</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Line Item</th>
                <th className="px-4 py-3 text-left font-semibold">Annual Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3">Fraud loss reduction (1.05% improvement)</td><td className="px-4 py-3">+$1,400,000</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">False positive recovery (6% improvement)</td><td className="px-4 py-3">+$300,000</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Ops cost reduction (10% less manual review)</td><td className="px-4 py-3">+$200,000</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Dispute win improvement (+28% win rate)</td><td className="px-4 py-3">+$150,000</td></tr>
              <tr className="border-b border-border bg-primary/10"><td className="px-4 py-3 font-bold">Net Annual Benefit</td><td className="px-4 py-3 font-bold">+$2,050,000</td></tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Risk Assessment</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Risk</th>
                <th className="px-4 py-3 text-left font-semibold">Likelihood</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3">Redis failure</td><td className="px-4 py-3">Low</td><td className="px-4 py-3">High</td><td className="px-4 py-3">Fallback to safe mode, cached features</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">ML model drift</td><td className="px-4 py-3">Medium</td><td className="px-4 py-3">Medium</td><td className="px-4 py-3">Weekly retraining, PSI monitoring</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Threshold misconfiguration</td><td className="px-4 py-3">Medium</td><td className="px-4 py-3">High</td><td className="px-4 py-3">Replay testing, gradual rollout</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Attack pattern evolution</td><td className="px-4 py-3">High</td><td className="px-4 py-3">Medium</td><td className="px-4 py-3">Champion/challenger experiments</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Integration delays</td><td className="px-4 py-3">Medium</td><td className="px-4 py-3">Medium</td><td className="px-4 py-3">Shadow mode allows parallel testing</td></tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Executive Recommendation</h2>

        <p><strong>Proceed with Phase 2 deployment</strong> based on:</p>

        <ol>
          <li>Phase 1 MVP meets all technical SLAs (106ms P99 vs 200ms target)</li>
          <li>Load testing validates 260 RPS baseline; higher capacity is projected, not measured</li>
          <li>Rule-based detection provides immediate value while ML matures</li>
          <li>Evidence capture infrastructure enables dispute win rate improvement</li>
          <li>Hot-reload policy allows business-led threshold tuning</li>
        </ol>

        <p><strong>Next Actions:</strong></p>
        <ol>
          <li>Shadow deployment to production traffic (week 1)</li>
          <li>ML model training with labeled historical data (weeks 1-2)</li>
          <li>Champion/challenger framework implementation (weeks 2-3)</li>
          <li>10% traffic experiment with ML scoring (week 4)</li>
        </ol>

        <hr />

        <p className="text-sm text-muted-foreground italic">This document is intended for VP/Director-level stakeholders. For technical details, see the Technical Overview section.</p>

        <div className="not-prose mt-8 flex justify-between border-t border-border pt-6">
          <Link href="/docs/fraud-platform" className="text-sm text-muted-foreground hover:text-primary">
            ← Overview
          </Link>
          <Link href="/docs/fraud-platform/tpm-execution-strategy" className="text-sm text-muted-foreground hover:text-primary">
            TPM Execution Strategy →
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
}
