import { DocsLayout } from "@/components/DocsLayout";

export const metadata = {
  title: "TPM Execution Strategy | Fraud Detection Platform",
  description: "Cross-functional execution strategy for the Telco Payment Fraud Detection Platform from a Principal TPM perspective.",
};

export default function TPMExecutionStrategyPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>How I Would Drive This as a Principal TPM</h1>

        <p className="text-muted-foreground">
          <strong>Author:</strong> Uday Tamma | <strong>Document Version:</strong> 1.0 | <strong>Date:</strong> January 06, 2026 at 11:33 AM CST
        </p>

        <hr />

        <h2>Program Scope &amp; Ownership</h2>

        <p>The Principal TPM is directly accountable for:</p>

        <ul>
          <li><strong>Real-time fraud decisioning platform</strong> for Telco/MSP payments and service transactions</li>
          <li><strong>Evidence, disputes, and economic attribution</strong> loop to finance and risk teams</li>
          <li><strong>ML-assisted risk scoring and policy experimentation</strong>, including safe rollout and governance</li>
          <li><strong>Operational excellence</strong>: SLOs, incident management, and long-term reliability</li>
        </ul>

        <p>
          Ownership spans <strong>problem definition</strong>, <strong>system design</strong>, <strong>execution orchestration</strong>, and <strong>post-launch optimization</strong> - not just project management.
        </p>

        <hr />

        <h2>Overview</h2>

        <p>
          This document outlines the cross-functional execution strategy for the Telco Payment Fraud Detection Platform from a Principal TPM perspective. It covers stakeholder management, decision frameworks, execution sequencing, and risk mitigation approaches.
        </p>

        <hr />

        <h2>Cross-Functional Partners and Engagements</h2>

        <h3>Stakeholder Map</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Partner</th>
                <th className="px-4 py-3 text-left font-semibold">Role</th>
                <th className="px-4 py-3 text-left font-semibold">Key Concerns</th>
                <th className="px-4 py-3 text-left font-semibold">Engagement Cadence</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Payment Service Provider (PSP)</td>
                <td className="px-4 py-3">Integration point</td>
                <td className="px-4 py-3">Latency SLA, error rates</td>
                <td className="px-4 py-3">Weekly sync, shared dashboard</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Security &amp; Compliance</td>
                <td className="px-4 py-3">PCI audit, PII governance</td>
                <td className="px-4 py-3">Data handling, audit trails</td>
                <td className="px-4 py-3">Bi-weekly review, sign-off gates</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Data Science / ML</td>
                <td className="px-4 py-3">Model development</td>
                <td className="px-4 py-3">Feature availability, labels</td>
                <td className="px-4 py-3">Daily standup, model review weekly</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">SRE / Platform</td>
                <td className="px-4 py-3">Infrastructure, reliability</td>
                <td className="px-4 py-3">Capacity, failover, alerts</td>
                <td className="px-4 py-3">Sprint planning, on-call handoff</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Finance</td>
                <td className="px-4 py-3">Fraud loss budget</td>
                <td className="px-4 py-3">ROI tracking, threshold economics</td>
                <td className="px-4 py-3">Monthly review, budget alerts</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Product</td>
                <td className="px-4 py-3">Roadmap, customer experience</td>
                <td className="px-4 py-3">Approval rate, UX friction</td>
                <td className="px-4 py-3">Sprint demos, metric reviews</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Fraud Operations</td>
                <td className="px-4 py-3">Manual review, investigations</td>
                <td className="px-4 py-3">Queue volume, tool usability</td>
                <td className="px-4 py-3">Weekly office hours, feedback loops</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Legal / Disputes</td>
                <td className="px-4 py-3">Representment, compliance</td>
                <td className="px-4 py-3">Evidence quality, win rates</td>
                <td className="px-4 py-3">Quarterly review, process updates</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>RACI Matrix (Key Decisions)</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Decision</th>
                <th className="px-4 py-3 text-left font-semibold">Responsible</th>
                <th className="px-4 py-3 text-left font-semibold">Accountable</th>
                <th className="px-4 py-3 text-left font-semibold">Consulted</th>
                <th className="px-4 py-3 text-left font-semibold">Informed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Threshold changes</td>
                <td className="px-4 py-3">Fraud Ops</td>
                <td className="px-4 py-3">Product</td>
                <td className="px-4 py-3">DS/ML, Finance</td>
                <td className="px-4 py-3">Eng, Security</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Model deployment</td>
                <td className="px-4 py-3">DS/ML</td>
                <td className="px-4 py-3">Eng Lead</td>
                <td className="px-4 py-3">Fraud Ops, Security</td>
                <td className="px-4 py-3">Product, Finance</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Policy rule additions</td>
                <td className="px-4 py-3">Fraud Ops</td>
                <td className="px-4 py-3">Product</td>
                <td className="px-4 py-3">Eng, DS/ML</td>
                <td className="px-4 py-3">Finance, Legal</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Infrastructure scaling</td>
                <td className="px-4 py-3">SRE</td>
                <td className="px-4 py-3">Eng Lead</td>
                <td className="px-4 py-3">Finance</td>
                <td className="px-4 py-3">Product</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Evidence schema changes</td>
                <td className="px-4 py-3">Eng</td>
                <td className="px-4 py-3">Legal</td>
                <td className="px-4 py-3">Fraud Ops, Security</td>
                <td className="px-4 py-3">Finance</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Blocklist additions</td>
                <td className="px-4 py-3">Fraud Ops</td>
                <td className="px-4 py-3">Fraud Ops</td>
                <td className="px-4 py-3">Security</td>
                <td className="px-4 py-3">Product, Eng</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Decision Frameworks</h2>

        <h3>Trade-off 1: Risk vs. Approval Rate</h3>

        <p><strong>The Core Tension:</strong> Every percentage point of fraud blocked potentially blocks legitimate customers.</p>

        <p><strong>Framework: Expected Value Analysis</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`For each transaction:
  Expected_Loss = P(fraud) × (amount + chargeback_fee + penalty)
  Expected_Gain = P(legitimate) × (revenue + customer_LTV_fraction)

  If Expected_Loss > Expected_Gain × risk_tolerance:
    → Apply friction or block
  Else:
    → Allow`}
        </pre>

        <p><strong>Operationalized as:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Scenario</th>
                <th className="px-4 py-3 text-left font-semibold">Risk Score</th>
                <th className="px-4 py-3 text-left font-semibold">Amount</th>
                <th className="px-4 py-3 text-left font-semibold">Customer Profile</th>
                <th className="px-4 py-3 text-left font-semibold">Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Low risk, low value</td>
                <td className="px-4 py-3">&lt;30%</td>
                <td className="px-4 py-3">&lt;$50</td>
                <td className="px-4 py-3">Any</td>
                <td className="px-4 py-3">ALLOW</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Medium risk, new customer</td>
                <td className="px-4 py-3">40-60%</td>
                <td className="px-4 py-3">Any</td>
                <td className="px-4 py-3">&lt;30 days</td>
                <td className="px-4 py-3">FRICTION (3DS)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Medium risk, established</td>
                <td className="px-4 py-3">40-60%</td>
                <td className="px-4 py-3">Any</td>
                <td className="px-4 py-3">&gt;90 days</td>
                <td className="px-4 py-3">ALLOW</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">High risk, any</td>
                <td className="px-4 py-3">&gt;80%</td>
                <td className="px-4 py-3">Any</td>
                <td className="px-4 py-3">Any</td>
                <td className="px-4 py-3">BLOCK</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">High value, new card</td>
                <td className="px-4 py-3">Any</td>
                <td className="px-4 py-3">&gt;$500</td>
                <td className="px-4 py-3">New card</td>
                <td className="px-4 py-3">FRICTION</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Governance:</strong></p>
        <ul>
          <li>Finance owns the risk tolerance parameter</li>
          <li>Product owns the customer experience thresholds</li>
          <li>Fraud Ops can adjust within guard rails without engineering</li>
          <li>Changes require replay testing before production</li>
        </ul>

        <h3>Trade-off 2: Detection Speed vs. Accuracy</h3>

        <p><strong>The Core Tension:</strong> More sophisticated detection takes more time, but payments cannot wait.</p>

        <p><strong>Framework: Latency Budget Allocation</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Budget</th>
                <th className="px-4 py-3 text-left font-semibold">Actual</th>
                <th className="px-4 py-3 text-left font-semibold">Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Feature lookup (Redis)</td>
                <td className="px-4 py-3">50ms</td>
                <td className="px-4 py-3">50ms</td>
                <td className="px-4 py-3">More features = more latency</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Detection engine</td>
                <td className="px-4 py-3">30ms</td>
                <td className="px-4 py-3">20ms</td>
                <td className="px-4 py-3">More detectors = more latency</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">ML inference</td>
                <td className="px-4 py-3">25ms</td>
                <td className="px-4 py-3">N/A</td>
                <td className="px-4 py-3">Phase 2 - adds ~20ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Policy evaluation</td>
                <td className="px-4 py-3">15ms</td>
                <td className="px-4 py-3">10ms</td>
                <td className="px-4 py-3">More rules = more latency</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Evidence capture</td>
                <td className="px-4 py-3">30ms</td>
                <td className="px-4 py-3">20ms</td>
                <td className="px-4 py-3">Async, non-blocking</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Buffer</td>
                <td className="px-4 py-3">50ms</td>
                <td className="px-4 py-3">106ms</td>
                <td className="px-4 py-3">SLA headroom</td>
              </tr>
              <tr className="border-b border-border font-semibold">
                <td className="px-4 py-3">Total</td>
                <td className="px-4 py-3">200ms</td>
                <td className="px-4 py-3">106ms</td>
                <td className="px-4 py-3">47% headroom</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Decision Rule:</strong></p>
        <ul>
          <li>Any component change must model latency impact</li>
          <li>New features require latency benchmarking before merge</li>
          <li>P99 &gt; 150ms triggers architecture review</li>
        </ul>

        <h3>Trade-off 3: Manual Review vs. Automation</h3>

        <p><strong>The Core Tension:</strong> Manual review is more accurate but does not scale and adds friction.</p>

        <p><strong>Framework: Confidence-Based Routing</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`High Confidence (>90%):
  → Automate decision (ALLOW or BLOCK)
  → No manual review
  → Post-hoc sampling for quality

Medium Confidence (60-90%):
  → Automate with audit trail
  → Sample 5% for manual review
  → Feedback loop to improve model

Low Confidence (<60%):
  → Queue for manual review
  → SLA: 4 hours for >$500, 24 hours for <$500
  → Capture analyst decision as training data`}
        </pre>

        <p><strong>Target Distribution:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Confidence Band</th>
                <th className="px-4 py-3 text-left font-semibold">Current</th>
                <th className="px-4 py-3 text-left font-semibold">Target</th>
                <th className="px-4 py-3 text-left font-semibold">Manual Review</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">High (&gt;90%)</td>
                <td className="px-4 py-3">60%</td>
                <td className="px-4 py-3">75%</td>
                <td className="px-4 py-3">0%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Medium (60-90%)</td>
                <td className="px-4 py-3">25%</td>
                <td className="px-4 py-3">22%</td>
                <td className="px-4 py-3">5% sample</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Low (&lt;60%)</td>
                <td className="px-4 py-3">15%</td>
                <td className="px-4 py-3">3%</td>
                <td className="px-4 py-3">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Execution Sequencing and De-risking</h2>

        <h3>Rollout Strategy</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`Week 1-2: Shadow Mode
├── Deploy to production infrastructure
├── Process 100% of traffic in parallel
├── Log decisions but do not act on them
├── Compare to existing system decisions
└── Validate: Latency, accuracy, stability

Week 3: Limited Production (5%)
├── Route 5% of traffic to new system
├── Remainder continues to legacy
├── Monitor: Approval rate, fraud rate, complaints
├── Kill switch: Route back to legacy if issues
└── Validate: No regression on key metrics

Week 4-5: Gradual Ramp (25% → 50% → 100%)
├── Increase traffic weekly
├── Hold each level for 48+ hours
├── Document any anomalies
├── Business sign-off at each gate
└── Full cutover only after 50% stable for 1 week`}
        </pre>

        <h3>Safety Rails</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Rail</th>
                <th className="px-4 py-3 text-left font-semibold">Implementation</th>
                <th className="px-4 py-3 text-left font-semibold">Trigger</th>
                <th className="px-4 py-3 text-left font-semibold">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Latency breaker</td>
                <td className="px-4 py-3">P99 monitoring</td>
                <td className="px-4 py-3">P99 &gt; 180ms for 5min</td>
                <td className="px-4 py-3">Alert, then safe mode</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Error rate breaker</td>
                <td className="px-4 py-3">Error counter</td>
                <td className="px-4 py-3">&gt;1% errors for 2min</td>
                <td className="px-4 py-3">Auto-rollback to legacy</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Approval rate guard</td>
                <td className="px-4 py-3">Rolling metric</td>
                <td className="px-4 py-3">Drops &gt;5% vs baseline</td>
                <td className="px-4 py-3">Alert Fraud Ops, pause ramp</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Block rate guard</td>
                <td className="px-4 py-3">Rolling metric</td>
                <td className="px-4 py-3">Rises &gt;3% vs baseline</td>
                <td className="px-4 py-3">Alert Fraud Ops, investigate</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Safe mode</td>
                <td className="px-4 py-3">Fallback logic</td>
                <td className="px-4 py-3">Any critical failure</td>
                <td className="px-4 py-3">Rule-only scoring, FRICTION default</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Safe Mode Behavior</h3>

        <p>When safe mode activates:</p>
        <ol>
          <li>ML scoring disabled (if enabled)</li>
          <li>Rule-based scoring only</li>
          <li>Default decision: FRICTION (not ALLOW)</li>
          <li>Blocklist checks still active</li>
          <li>Alert on-call immediately</li>
          <li>Automatic recovery when component healthy for 5 minutes</li>
        </ol>

        <hr />

        <h2>Stakeholder Communication Plan</h2>

        <h3>Regular Cadence</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Forum</th>
                <th className="px-4 py-3 text-left font-semibold">Frequency</th>
                <th className="px-4 py-3 text-left font-semibold">Attendees</th>
                <th className="px-4 py-3 text-left font-semibold">Agenda</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Daily Standup</td>
                <td className="px-4 py-3">Daily</td>
                <td className="px-4 py-3">Eng, DS/ML</td>
                <td className="px-4 py-3">Blockers, progress</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Sprint Demo</td>
                <td className="px-4 py-3">Bi-weekly</td>
                <td className="px-4 py-3">All stakeholders</td>
                <td className="px-4 py-3">Completed work, metrics</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Fraud Ops Sync</td>
                <td className="px-4 py-3">Weekly</td>
                <td className="px-4 py-3">Fraud Ops, Eng, Product</td>
                <td className="px-4 py-3">Queue volume, tool feedback</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Metrics Review</td>
                <td className="px-4 py-3">Weekly</td>
                <td className="px-4 py-3">Product, Finance, Fraud Ops</td>
                <td className="px-4 py-3">KPI dashboard review</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Architecture Review</td>
                <td className="px-4 py-3">Monthly</td>
                <td className="px-4 py-3">Eng, SRE, Security</td>
                <td className="px-4 py-3">Scaling, reliability</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Fraud Governance Council</td>
                <td className="px-4 py-3">Monthly</td>
                <td className="px-4 py-3">Finance, Risk, DS/ML, Fraud Ops, Product, TPM</td>
                <td className="px-4 py-3">Approve major policy/model changes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Exec Update</td>
                <td className="px-4 py-3">Monthly</td>
                <td className="px-4 py-3">VP+, Product Lead</td>
                <td className="px-4 py-3">Summary, risks, asks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Quarterly Roadmap Review</td>
                <td className="px-4 py-3">Quarterly</td>
                <td className="px-4 py-3">VP-level stakeholders</td>
                <td className="px-4 py-3">Platform maturity, investments</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Escalation Path</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`Severity 1 (Revenue Impact):
  → Immediate: On-call Eng + SRE
  → 15 min: Eng Lead + Product
  → 30 min: VP Eng + VP Product
  → 1 hour: C-level if unresolved

Severity 2 (Metric Degradation):
  → Immediate: On-call Eng
  → 1 hour: Eng Lead + Fraud Ops
  → 4 hours: Product Lead
  → 24 hours: VP if unresolved

Severity 3 (Non-urgent):
  → Next business day review
  → Track in sprint backlog`}
        </pre>

        <hr />

        <h2>Risk Mitigation Matrix</h2>

        <h3>Technical Risks</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Risk</th>
                <th className="px-4 py-3 text-left font-semibold">Probability</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation</th>
                <th className="px-4 py-3 text-left font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Redis cluster failure</td>
                <td className="px-4 py-3">Low</td>
                <td className="px-4 py-3">Critical</td>
                <td className="px-4 py-3">Multi-AZ, fallback to cached</td>
                <td className="px-4 py-3">SRE</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">ML model degradation</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">PSI monitoring, auto-rollback</td>
                <td className="px-4 py-3">DS/ML</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Feature pipeline lag</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">Staleness alerts, graceful degradation</td>
                <td className="px-4 py-3">Eng</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Policy misconfiguration</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">Replay testing, staged rollout</td>
                <td className="px-4 py-3">Eng</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Integration timeout</td>
                <td className="px-4 py-3">Low</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">Circuit breaker, async retry</td>
                <td className="px-4 py-3">Eng</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Operational Risks</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Risk</th>
                <th className="px-4 py-3 text-left font-semibold">Probability</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation</th>
                <th className="px-4 py-3 text-left font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Analyst queue backup</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">Auto-routing rules, hiring plan</td>
                <td className="px-4 py-3">Fraud Ops</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Threshold drift</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">Weekly threshold review, automation</td>
                <td className="px-4 py-3">DS/ML</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Attack pattern shift</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">Champion/challenger experiments</td>
                <td className="px-4 py-3">DS/ML</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Evidence gaps</td>
                <td className="px-4 py-3">Low</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">Schema validation, monitoring</td>
                <td className="px-4 py-3">Eng</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Compliance audit finding</td>
                <td className="px-4 py-3">Low</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">Pre-audit review, documentation</td>
                <td className="px-4 py-3">Security</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Business Risks</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Risk</th>
                <th className="px-4 py-3 text-left font-semibold">Probability</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation</th>
                <th className="px-4 py-3 text-left font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Approval rate drop</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">Critical</td>
                <td className="px-4 py-3">Guard rails, rollback plan</td>
                <td className="px-4 py-3">Product</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">False positive spike</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">Customer feedback loop, monitoring</td>
                <td className="px-4 py-3">Product</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Fraud loss spike</td>
                <td className="px-4 py-3">Low</td>
                <td className="px-4 py-3">Critical</td>
                <td className="px-4 py-3">Safe mode, rapid threshold adjustment</td>
                <td className="px-4 py-3">Fraud Ops</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Customer churn</td>
                <td className="px-4 py-3">Low</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">FP tracking, win-back process</td>
                <td className="px-4 py-3">Product</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Success Metrics and Governance</h2>

        <h3>Phase 1 Success Criteria (Go/No-Go)</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Target</th>
                <th className="px-4 py-3 text-left font-semibold">Measurement</th>
                <th className="px-4 py-3 text-left font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">P99 Latency</td>
                <td className="px-4 py-3">&lt;200ms</td>
                <td className="px-4 py-3">Prometheus</td>
                <td className="px-4 py-3">Eng</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Error Rate</td>
                <td className="px-4 py-3">&lt;0.1%</td>
                <td className="px-4 py-3">Prometheus</td>
                <td className="px-4 py-3">Eng</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Approval Rate Delta</td>
                <td className="px-4 py-3">&gt;-2%</td>
                <td className="px-4 py-3">A/B comparison</td>
                <td className="px-4 py-3">Product</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Fraud Detection Rate</td>
                <td className="px-4 py-3">&gt;-5%</td>
                <td className="px-4 py-3">Historical replay</td>
                <td className="px-4 py-3">DS/ML</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Load Test</td>
                <td className="px-4 py-3">1000+ RPS</td>
                <td className="px-4 py-3">Locust</td>
                <td className="px-4 py-3">Eng</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Test Coverage</td>
                <td className="px-4 py-3">70%+</td>
                <td className="px-4 py-3">CI/CD</td>
                <td className="px-4 py-3">Eng</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Ongoing Governance</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Alert Threshold</th>
                <th className="px-4 py-3 text-left font-semibold">Review Cadence</th>
                <th className="px-4 py-3 text-left font-semibold">Escalation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Approval Rate</td>
                <td className="px-4 py-3">&lt;90%</td>
                <td className="px-4 py-3">Daily</td>
                <td className="px-4 py-3">Product Lead</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Block Rate</td>
                <td className="px-4 py-3">&gt;8%</td>
                <td className="px-4 py-3">Daily</td>
                <td className="px-4 py-3">Fraud Ops Lead</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">P99 Latency</td>
                <td className="px-4 py-3">&gt;150ms</td>
                <td className="px-4 py-3">Real-time</td>
                <td className="px-4 py-3">On-call Eng</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Fraud Rate</td>
                <td className="px-4 py-3">&gt;1.5%</td>
                <td className="px-4 py-3">Weekly</td>
                <td className="px-4 py-3">Finance</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Dispute Win Rate</td>
                <td className="px-4 py-3">&lt;35%</td>
                <td className="px-4 py-3">Monthly</td>
                <td className="px-4 py-3">Legal</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Manual Review %</td>
                <td className="px-4 py-3">&gt;5%</td>
                <td className="px-4 py-3">Weekly</td>
                <td className="px-4 py-3">Fraud Ops</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Incident Readiness &amp; Runbooks</h2>

        <p>The platform is treated as a <strong>Tier-1 service</strong> with clear incident protocols.</p>

        <h3>Incident Playbooks</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Playbook</th>
                <th className="px-4 py-3 text-left font-semibold">Trigger</th>
                <th className="px-4 py-3 text-left font-semibold">Key Steps</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Card Testing Spike</td>
                <td className="px-4 py-3">&gt;5x velocity on card testing detector</td>
                <td className="px-4 py-3">Block IP ranges, review blocklist, alert Fraud Ops</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Velocity Rule Misfire</td>
                <td className="px-4 py-3">Block rate &gt;10%</td>
                <td className="px-4 py-3">Disable rule, replay test, root cause</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Redis Latency Degradation</td>
                <td className="px-4 py-3">P99 &gt;100ms for Redis</td>
                <td className="px-4 py-3">Scale Redis, check connection pool, enable safe mode</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Safe Mode Active</td>
                <td className="px-4 py-3">Any critical failure</td>
                <td className="px-4 py-3">Notify stakeholders, assess impact, document duration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Model Score Drift</td>
                <td className="px-4 py-3">PSI &gt;0.2</td>
                <td className="px-4 py-3">Disable model, fall back to rules, trigger retraining</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Post-Incident Review</h3>

        <ul>
          <li>Quantify impact (loss, approvals, CSAT tangents)</li>
          <li>Feed learnings back into policy, detectors, and tooling</li>
          <li>Update runbooks with new scenarios</li>
        </ul>

        <hr />

        <h2>Key TPM Artifacts</h2>

        <h3>Documents I Would Produce</h3>

        <ol>
          <li><strong>Technical Requirements Document (TRD)</strong> - Detailed specifications for each component</li>
          <li><strong>Integration Runbook</strong> - Step-by-step PSP integration guide</li>
          <li><strong>Rollout Plan</strong> - Week-by-week execution schedule with gates</li>
          <li><strong>Risk Register</strong> - Living document of risks and mitigations</li>
          <li><strong>Metrics Dashboard Spec</strong> - KPI definitions and visualization requirements</li>
          <li><strong>Incident Response Playbook</strong> - Severity definitions and response procedures</li>
          <li><strong>Post-Launch Review Template</strong> - Structured retrospective format</li>
        </ol>

        <h3>Meetings I Would Run</h3>

        <ol>
          <li><strong>Architecture Review</strong> - Cross-functional technical decision forum</li>
          <li><strong>Rollout Readiness Review</strong> - Go/no-go checklist walkthrough</li>
          <li><strong>Weekly Metrics Review</strong> - KPI trends and action items</li>
          <li><strong>Incident Post-Mortem</strong> - Structured learning from failures</li>
          <li><strong>Quarterly Business Review</strong> - Executive summary with ROI analysis</li>
          <li><strong>Fraud Governance Council</strong> - Monthly cross-functional policy approval forum</li>
        </ol>

        <hr />

        <p className="text-muted-foreground italic">
          This document demonstrates Principal TPM execution thinking: stakeholder management, decision frameworks, risk-aware sequencing, and structured governance.
        </p>
      </article>
    </DocsLayout>
  );
}
