import { DocsLayout } from "@/components/DocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Results & Personas | Fraud Detection Platform",
  description: "Load test results, limitations, and persona-based dashboard usage for the Fraud Detection Platform.",
};

export default function ResultsPersonasPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Results, Limitations &amp; Personas</h1>

        <p className="text-muted-foreground">
          <strong>Author:</strong> Uday Tamma | <strong>Document Version:</strong> 1.0 | <strong>Date:</strong> January 06, 2026 at 11:33 AM CST
        </p>

        <hr />

        <h2>Load Test Results</h2>

        <h3>Test Configuration</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                <th className="px-4 py-3 text-left font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Environment</td>
                <td className="px-4 py-3">Local (M-series Mac)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">API Workers</td>
                <td className="px-4 py-3">4 uvicorn workers</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Redis</td>
                <td className="px-4 py-3">Single node, local Docker</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">PostgreSQL</td>
                <td className="px-4 py-3">Single node, local Docker</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Test Tool</td>
                <td className="px-4 py-3">Locust</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Duration</td>
                <td className="px-4 py-3">2 minutes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Users</td>
                <td className="px-4 py-3">50 concurrent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Observed Performance</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Observed</th>
                <th className="px-4 py-3 text-left font-semibold">Target</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Throughput</td>
                <td className="px-4 py-3">260 RPS</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3">Baseline</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">P50 Latency</td>
                <td className="px-4 py-3">22ms</td>
                <td className="px-4 py-3">50ms</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">56% buffer</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">P99 Latency</td>
                <td className="px-4 py-3">106ms</td>
                <td className="px-4 py-3">200ms</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">47% buffer</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Error Rate</td>
                <td className="px-4 py-3">0.00%</td>
                <td className="px-4 py-3">&lt;0.1%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Passing</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Failures</td>
                <td className="px-4 py-3">0</td>
                <td className="px-4 py-3">0</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Passing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Latency Breakdown</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`pie showData
    title Latency Breakdown (P99: 106ms)
    "Redis velocity (~53ms)" : 47
    "Detection engine (~21ms)" : 19
    "Policy evaluation (~11ms)" : 9
    "Evidence capture (~21ms)" : 19
    "Network/serialization (~6ms)" : 6`}
          />
        </div>

        <p>
          <strong>Key Insight:</strong> Redis velocity lookups dominate latency at 47% of total. At scale, this is the first optimization target.
        </p>

        <h3>Capacity Projection</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Load Level</th>
                <th className="px-4 py-3 text-left font-semibold">Est. RPS</th>
                <th className="px-4 py-3 text-left font-semibold">Est. P99</th>
                <th className="px-4 py-3 text-left font-semibold">Bottleneck</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Baseline (50 users)</td>
                <td className="px-4 py-3">260</td>
                <td className="px-4 py-3">106ms</td>
                <td className="px-4 py-3">None</td>
                <td className="px-4 py-3">-</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">2x (100 users)</td>
                <td className="px-4 py-3">500</td>
                <td className="px-4 py-3">130ms</td>
                <td className="px-4 py-3">API workers</td>
                <td className="px-4 py-3">Add workers</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">4x (200 users)</td>
                <td className="px-4 py-3">900</td>
                <td className="px-4 py-3">160ms</td>
                <td className="px-4 py-3">Redis connections</td>
                <td className="px-4 py-3">Connection pooling</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">8x (400 users)</td>
                <td className="px-4 py-3">1,500</td>
                <td className="px-4 py-3">200ms</td>
                <td className="px-4 py-3">Redis throughput</td>
                <td className="px-4 py-3">Redis Cluster</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">16x+ (1000 users)</td>
                <td className="px-4 py-3">3,000+</td>
                <td className="px-4 py-3">&gt;200ms</td>
                <td className="px-4 py-3">Architecture limit</td>
                <td className="px-4 py-3">Kafka + Flink</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Identified Bottleneck:</strong> At ~4,000 RPS in ramp-up testing, PostgreSQL evidence writes saturated connection pool, increasing tail latency. This confirms the planned path to scale via sharding/replicas and event-sourced evidence ingestion.
        </p>

        <h3>Replay Validation</h3>

        <p>Using synthetic historical data with known fraud labels:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Scenario</th>
                <th className="px-4 py-3 text-left font-semibold">Transactions</th>
                <th className="px-4 py-3 text-left font-semibold">Fraud Injected</th>
                <th className="px-4 py-3 text-left font-semibold">Detected</th>
                <th className="px-4 py-3 text-left font-semibold">False Positives</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Normal traffic</td>
                <td className="px-4 py-3">10,000</td>
                <td className="px-4 py-3">1% (100)</td>
                <td className="px-4 py-3">72/100</td>
                <td className="px-4 py-3">180/9,900</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Card testing attack</td>
                <td className="px-4 py-3">1,000</td>
                <td className="px-4 py-3">10% (100)</td>
                <td className="px-4 py-3">94/100</td>
                <td className="px-4 py-3">45/900</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Velocity attack</td>
                <td className="px-4 py-3">500</td>
                <td className="px-4 py-3">20% (100)</td>
                <td className="px-4 py-3">88/100</td>
                <td className="px-4 py-3">22/400</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Mixed realistic</td>
                <td className="px-4 py-3">15,000</td>
                <td className="px-4 py-3">2% (300)</td>
                <td className="px-4 py-3">221/300</td>
                <td className="px-4 py-3">195/14,700</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Summary:</strong></p>
        <ul>
          <li>Detection rate: 72-94% depending on attack type</li>
          <li>False positive rate: 1.3-5% depending on scenario</li>
          <li>Card testing attacks have highest detection confidence</li>
          <li>Velocity attacks show strong detection with rule-based approach</li>
        </ul>

        <h3>Policy Impact Simulation (Replay)</h3>

        <p>Comparing baseline rules vs platform policy on 1M synthetic transactions:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Baseline Rules</th>
                <th className="px-4 py-3 text-left font-semibold">Platform Policy</th>
                <th className="px-4 py-3 text-left font-semibold">Delta</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Approval rate</td>
                <td className="px-4 py-3">89.0%</td>
                <td className="px-4 py-3">91.5%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">+2.5%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Criminal fraud caught (recall)</td>
                <td className="px-4 py-3">60%</td>
                <td className="px-4 py-3">78%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">+18%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Criminal fraud passed</td>
                <td className="px-4 py-3">40%</td>
                <td className="px-4 py-3">22%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">-18%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Manual review rate</td>
                <td className="px-4 py-3">4.2%</td>
                <td className="px-4 py-3">2.6%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">-1.6%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Estimated fraud loss</td>
                <td className="px-4 py-3">100% (baseline)</td>
                <td className="px-4 py-3">~62%</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">-38%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The replay engine and economics framework provide finance and risk partners a <strong>quantified view</strong> of trade-offs before changes are deployed.
        </p>

        <hr />

        <h2>Limitations</h2>

        <h3>Infrastructure Limitations</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Limitation</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Production Path</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Single node architecture</td>
                <td className="px-4 py-3">No failover, limited throughput</td>
                <td className="px-4 py-3">Deploy Redis Cluster, PostgreSQL replicas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Local Docker deployment</td>
                <td className="px-4 py-3">Not representative of cloud latency</td>
                <td className="px-4 py-3">Deploy to AWS/GCP with network testing</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No load balancer</td>
                <td className="px-4 py-3">Single point of failure</td>
                <td className="px-4 py-3">Add ALB/NLB with health checks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No auto-scaling</td>
                <td className="px-4 py-3">Cannot handle traffic spikes</td>
                <td className="px-4 py-3">Implement Kubernetes HPA</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No multi-region</td>
                <td className="px-4 py-3">Geographic latency, DR risk</td>
                <td className="px-4 py-3">Deploy to multiple regions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Data Limitations</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Limitation</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation Path</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Synthetic test data</td>
                <td className="px-4 py-3">May not reflect real attack patterns</td>
                <td className="px-4 py-3">Shadow deployment on production traffic</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No real chargebacks</td>
                <td className="px-4 py-3">Cannot validate label accuracy</td>
                <td className="px-4 py-3">Integrate with PSP chargeback feed</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Limited feature diversity</td>
                <td className="px-4 py-3">May miss real fraud signals</td>
                <td className="px-4 py-3">Add external signals (BIN, device reputation)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No historical baseline</td>
                <td className="px-4 py-3">Cannot compare to existing system</td>
                <td className="px-4 py-3">Run parallel with current fraud system</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Point-in-time features untested</td>
                <td className="px-4 py-3">Replay may have leakage</td>
                <td className="px-4 py-3">Validate with known delayed labels</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Model Limitations</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Limitation</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation Path</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Rule-based only</td>
                <td className="px-4 py-3">Lower accuracy than ML</td>
                <td className="px-4 py-3">Phase 2 ML integration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No adaptive thresholds</td>
                <td className="px-4 py-3">Static rules do not evolve</td>
                <td className="px-4 py-3">Implement threshold optimization</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No feedback loop</td>
                <td className="px-4 py-3">Decisions do not improve system</td>
                <td className="px-4 py-3">Add analyst feedback to training</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Single model</td>
                <td className="px-4 py-3">No redundancy or comparison</td>
                <td className="px-4 py-3">Champion/challenger framework</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No drift detection</td>
                <td className="px-4 py-3">Model may degrade silently</td>
                <td className="px-4 py-3">Implement PSI monitoring</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Operational Limitations</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Limitation</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation Path</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No analyst UI</td>
                <td className="px-4 py-3">Manual review is cumbersome</td>
                <td className="px-4 py-3">Build case management dashboard</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No bulk operations</td>
                <td className="px-4 py-3">Cannot act on patterns efficiently</td>
                <td className="px-4 py-3">Add bulk blocklist/threshold tools</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Limited alerting</td>
                <td className="px-4 py-3">May miss issues</td>
                <td className="px-4 py-3">Full Alertmanager integration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No on-call runbooks</td>
                <td className="px-4 py-3">Incident response unclear</td>
                <td className="px-4 py-3">Document response procedures</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No disaster recovery</td>
                <td className="px-4 py-3">Single region failure = outage</td>
                <td className="px-4 py-3">Multi-region active-passive</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Honest Assessment</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`What This Proves:
  ✓ Architecture meets latency requirements
  ✓ Detection logic catches known fraud patterns
  ✓ Evidence capture is comprehensive
  ✓ Policy engine is configurable
  ✓ System handles expected load

What This Does Not Prove:
  ✗ Performance under real production traffic
  ✗ Detection accuracy on real fraud (vs synthetic)
  ✗ ML model performance (not yet implemented)
  ✗ Operational readiness (no real incidents yet)
  ✗ Economic impact (no real financial data)`}
        </pre>

        <hr />

        <h2>Personas &amp; Dashboard Usage</h2>

        <h3>Persona 1: Fraud Analyst</h3>

        <p><strong>Role:</strong> Reviews flagged transactions, makes manual decisions, investigates patterns</p>

        <p><strong>Primary Dashboard Panels:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Panel</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Key Metrics</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Review Queue</td>
                <td className="px-4 py-3">Transactions needing manual decision</td>
                <td className="px-4 py-3">Count, age, priority</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Decision Distribution</td>
                <td className="px-4 py-3">Current system behavior</td>
                <td className="px-4 py-3">ALLOW/FRICTION/REVIEW/BLOCK %</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Recent High-Risk</td>
                <td className="px-4 py-3">Emerging patterns</td>
                <td className="px-4 py-3">Transactions with score &gt;70%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Triggered Reasons</td>
                <td className="px-4 py-3">Why transactions flagged</td>
                <td className="px-4 py-3">Top 10 triggered signals</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Workflow:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`1. Check Review Queue
   └── Sort by priority (HIGH first)
   └── Filter by amount (high value first)

2. For each case:
   └── View transaction details (decision, scores, detectors fired, policy version)
   └── Review triggered signals and feature snapshot
   └── Check customer history
   └── Make decision: APPROVE / DECLINE / ESCALATE
   └── Annotate with disposition (confirmed fraud, friendly fraud, service issue)

3. Bulk actions:
   └── Add device to blocklist
   └── Add card to blocklist
   └── Flag user for enhanced monitoring

4. End of shift:
   └── Review queue age metrics
   └── Ensure nothing >4h old`}
        </pre>

        <p><strong>Key Decisions:</strong></p>
        <ul>
          <li>Accept/decline individual transactions</li>
          <li>Add entities to blocklists</li>
          <li>Escalate suspicious patterns to Risk Lead</li>
          <li>Annotate cases with dispositions (feeds back into model training labels)</li>
        </ul>

        <h3>Persona 2: Risk Lead / Fraud Manager</h3>

        <p><strong>Role:</strong> Sets strategy, monitors KPIs, adjusts thresholds, manages team</p>

        <p><strong>Primary Dashboard Panels:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Panel</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Key Metrics</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Approval Rate (24h)</td>
                <td className="px-4 py-3">Customer experience health</td>
                <td className="px-4 py-3">Target: &gt;92%, Alert: &lt;90%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Block Rate (24h)</td>
                <td className="px-4 py-3">Fraud prevention activity</td>
                <td className="px-4 py-3">Target: &lt;5%, Alert: &gt;8%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Fraud Loss (30d lag)</td>
                <td className="px-4 py-3">Actual financial impact</td>
                <td className="px-4 py-3">Rolling 30-day $</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Dispute Win Rate</td>
                <td className="px-4 py-3">Evidence effectiveness</td>
                <td className="px-4 py-3">Target: &gt;50%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Review Queue SLA</td>
                <td className="px-4 py-3">Ops efficiency</td>
                <td className="px-4 py-3">% within 4h SLA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Workflow:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`1. Morning Review:
   └── Check 24h approval rate
   └── Review any after-hours alerts
   └── Compare block rate to baseline

2. Weekly Metrics Review:
   └── Fraud rate trend (30d lag)
   └── False positive estimate
   └── Dispute outcomes
   └── Threshold performance

3. Threshold Adjustment:
   └── Run replay simulation on proposed change
   └── Review projected impact
   └── If acceptable: Apply via Policy Settings
   └── Monitor for 48h post-change

4. Incident Response:
   └── Spike in block rate? Check for attack or bug
   └── Drop in approval rate? Check threshold misconfiguration
   └── Latency spike? Escalate to Engineering`}
        </pre>

        <p><strong>Key Decisions:</strong></p>
        <ul>
          <li>Threshold adjustments (friction/review/block levels)</li>
          <li>Policy rule additions or modifications</li>
          <li>Escalation to Engineering or Security</li>
          <li>Resource allocation (analyst coverage)</li>
        </ul>

        <h3>Persona 3: SRE / On-Call Engineer</h3>

        <p><strong>Role:</strong> Maintains system reliability, responds to alerts, handles incidents</p>

        <p><strong>Primary Dashboard Panels:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Panel</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Key Metrics</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">P99 Latency</td>
                <td className="px-4 py-3">System performance</td>
                <td className="px-4 py-3">Target: &lt;200ms, Alert: &gt;150ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Error Rate</td>
                <td className="px-4 py-3">System reliability</td>
                <td className="px-4 py-3">Target: &lt;0.1%, Alert: &gt;0.5%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Safe Mode Status</td>
                <td className="px-4 py-3">Fallback state</td>
                <td className="px-4 py-3">Normal / SAFE MODE</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Component Health</td>
                <td className="px-4 py-3">Dependency status</td>
                <td className="px-4 py-3">Redis, PostgreSQL, API status</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Throughput</td>
                <td className="px-4 py-3">Traffic volume</td>
                <td className="px-4 py-3">RPS vs expected baseline</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Workflow:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`1. Alert Response:
   └── Check alert source and severity
   └── Verify via dashboard (not just alert)
   └── Follow runbook for specific alert type

2. Latency Spike Response:
   └── Check Redis latency panel
   └── Check PostgreSQL latency panel
   └── Identify bottleneck component
   └── Scale or restart as needed

3. Safe Mode Activation:
   └── Automatic if error rate >5%
   └── Manual if component failure detected
   └── Notify Fraud Ops (decisions will be conservative)
   └── Document reason and duration

4. Post-Incident:
   └── Collect metrics from incident window
   └── Write post-mortem
   └── Update runbooks if needed`}
        </pre>

        <p><strong>Key Alerts:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Alert</th>
                <th className="px-4 py-3 text-left font-semibold">Threshold</th>
                <th className="px-4 py-3 text-left font-semibold">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">FraudDecisionLatencyHigh</td>
                <td className="px-4 py-3">P99 &gt;200ms for 2min</td>
                <td className="px-4 py-3">Check Redis, scale API</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">FraudErrorRateCritical</td>
                <td className="px-4 py-3">&gt;5% for 1min</td>
                <td className="px-4 py-3">Safe mode, investigate</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">FraudSafeModeActive</td>
                <td className="px-4 py-3">Any</td>
                <td className="px-4 py-3">Notify stakeholders, investigate</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">FraudTrafficDrop</td>
                <td className="px-4 py-3">&lt;10 RPS for 5min</td>
                <td className="px-4 py-3">Check upstream integration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">FraudTrafficSpike</td>
                <td className="px-4 py-3">&gt;2x baseline</td>
                <td className="px-4 py-3">Check for attack or event</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Dashboard Mapping</h2>

        <h3>Demo Dashboard (dashboard.py) - Current Implementation</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Tab</th>
                <th className="px-4 py-3 text-left font-semibold">Primary Persona</th>
                <th className="px-4 py-3 text-left font-semibold">Key Panels</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Transaction Simulator</td>
                <td className="px-4 py-3">Engineer/Demo</td>
                <td className="px-4 py-3">Test scenarios, attack presets</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Analytics Dashboard</td>
                <td className="px-4 py-3">Risk Lead</td>
                <td className="px-4 py-3">Decision distribution, latency charts</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Decision History</td>
                <td className="px-4 py-3">Fraud Analyst</td>
                <td className="px-4 py-3">Historical decisions with filters</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Policy Inspector</td>
                <td className="px-4 py-3">Risk Lead</td>
                <td className="px-4 py-3">Current rules, thresholds, lists</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Policy Settings</td>
                <td className="px-4 py-3">Risk Lead</td>
                <td className="px-4 py-3">Threshold adjustment, rule management</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Production Dashboard Needs (Gap Analysis)</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Need</th>
                <th className="px-4 py-3 text-left font-semibold">Demo Has</th>
                <th className="px-4 py-3 text-left font-semibold">Production Needs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Review queue</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">No</td>
                <td className="px-4 py-3">Yes - Priority sorted, age tracking</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Case management</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">No</td>
                <td className="px-4 py-3">Yes - Assignment, notes, workflow</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Bulk actions</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">No</td>
                <td className="px-4 py-3">Yes - Multi-select, batch operations</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Real-time alerts</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">No</td>
                <td className="px-4 py-3">Yes - Integrated alerting</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Drill-down</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">Limited</td>
                <td className="px-4 py-3">Yes - Click through to transaction</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Export</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">No</td>
                <td className="px-4 py-3">Yes - CSV/PDF for investigations</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Role-based access</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">No</td>
                <td className="px-4 py-3">Yes - Analyst vs Admin views</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <p className="text-muted-foreground italic">
          This document provides an honest assessment of what the system proves and does not prove, mapping dashboards to real user personas and their workflows.
        </p>
      </article>
    </DocsLayout>
  );
}
