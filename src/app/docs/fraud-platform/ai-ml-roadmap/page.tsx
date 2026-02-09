import { DocsLayout } from "@/components/DocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "AI/ML Roadmap | Fraud Detection Platform",
  description: "AI/ML roadmap and current status for the Telco Payment Fraud Detection Platform.",
};

export default function AIMLRoadmapPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>AI/ML Roadmap &amp; Current Status</h1>

        <p className="text-muted-foreground">
          <strong>Author:</strong> Uday Tamma | <strong>Document Version:</strong> 1.0 | <strong>Date:</strong> January 06, 2026 at 11:33 AM CST
        </p>

        <hr />

        <h2>Current Implementation Status</h2>

        <h3>Phase 1: Rule-Driven Detection (COMPLETE)</h3>

        <p>
          The MVP implementation uses a <strong>rule-based detection engine</strong> with hooks for ML integration. This was a deliberate design choice to:
        </p>

        <ol>
          <li><strong>Deliver value faster</strong> - Rules can be tuned immediately without training data</li>
          <li><strong>Ensure interpretability</strong> - Every decision has explainable reasons</li>
          <li><strong>Establish infrastructure</strong> - Feature pipeline, evidence capture, and policy engine ready for ML</li>
        </ol>

        <h4>What Is Implemented</h4>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Feature Engine</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Complete</td>
                <td className="px-4 py-3">Redis velocity counters with sliding windows</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Detection Engine</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Complete</td>
                <td className="px-4 py-3">5 detector types (card testing, velocity, geo, bot, friendly)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Risk Scoring</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Complete</td>
                <td className="px-4 py-3">Rule-based combination of detector signals</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Policy Engine</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Complete</td>
                <td className="px-4 py-3">YAML configuration with hot-reload</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Evidence Vault</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Complete</td>
                <td className="px-4 py-3">Immutable storage with feature snapshots</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Metrics Pipeline</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Complete</td>
                <td className="px-4 py-3">Prometheus metrics for requests/latency/decisions; additional metrics defined but not populated</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Load Testing</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Complete</td>
                <td className="px-4 py-3">Measured 260 RPS at 106ms P99 (single worker; projections modeled)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Detection Logic (Current)</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Simplified scoring formula (rule-based)
criminal_score = max(
    card_testing.confidence * 0.9,    # Card testing patterns
    velocity.confidence * 0.8,         # Velocity rule triggers
    geo_anomaly.confidence * 0.7,     # Geographic issues
    bot_detection.confidence * 0.95   # Automation signals
)

friendly_score = friendly_fraud.confidence * 0.6

# Policy thresholds (configurable)
if criminal_score >= 0.85 or friendly_score >= 0.95:
    return BLOCK
elif criminal_score >= 0.60 or friendly_score >= 0.70:
    return FRICTION
elif criminal_score >= 0.40 or friendly_score >= 0.50:
    return REVIEW
else:
    return ALLOW`}
        </pre>

        <hr />

        <h2>Phase 2: Hybrid ML + Rules</h2>

        <h3>ML Model Specification</h3>

        <h4>Criminal Fraud Model</h4>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Attribute</th>
                <th className="px-4 py-3 text-left font-semibold">Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Algorithm</td>
                <td className="px-4 py-3">XGBoost (primary), LightGBM (challenger)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Objective</td>
                <td className="px-4 py-3">Binary classification (is_criminal_fraud)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Training Window</td>
                <td className="px-4 py-3">90 days of transactions with 120-day label maturity</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Retraining Frequency</td>
                <td className="px-4 py-3">Weekly (automated pipeline)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Feature Count</td>
                <td className="px-4 py-3">25+ features</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Target AUC</td>
                <td className="px-4 py-3">&gt;0.85</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Latency Budget</td>
                <td className="px-4 py-3">&lt;25ms P99</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Feature List</h4>

        <p><strong>Velocity Features (Real-time from Redis):</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Window</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">card_attempts_10m</td>
                <td className="px-4 py-3">Transaction attempts on card</td>
                <td className="px-4 py-3">10 min</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">card_attempts_1h</td>
                <td className="px-4 py-3">Transaction attempts on card</td>
                <td className="px-4 py-3">1 hour</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">card_attempts_24h</td>
                <td className="px-4 py-3">Transaction attempts on card</td>
                <td className="px-4 py-3">24 hours</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">device_distinct_cards_1h</td>
                <td className="px-4 py-3">Unique cards on device</td>
                <td className="px-4 py-3">1 hour</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">device_distinct_cards_24h</td>
                <td className="px-4 py-3">Unique cards on device</td>
                <td className="px-4 py-3">24 hours</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">ip_distinct_cards_1h</td>
                <td className="px-4 py-3">Unique cards from IP</td>
                <td className="px-4 py-3">1 hour</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">user_total_amount_24h</td>
                <td className="px-4 py-3">Total spend by user</td>
                <td className="px-4 py-3">24 hours</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">card_decline_rate_1h</td>
                <td className="px-4 py-3">Decline rate for card</td>
                <td className="px-4 py-3">1 hour</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Entity Features (From profiles):</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">card_age_hours</td>
                <td className="px-4 py-3">Time since card first seen</td>
                <td className="px-4 py-3">Redis</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">device_age_hours</td>
                <td className="px-4 py-3">Time since device first seen</td>
                <td className="px-4 py-3">Redis</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">user_account_age_days</td>
                <td className="px-4 py-3">Account creation age</td>
                <td className="px-4 py-3">Profile</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">user_chargeback_count_lifetime</td>
                <td className="px-4 py-3">Historical chargebacks</td>
                <td className="px-4 py-3">Profile</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">user_chargeback_rate_90d</td>
                <td className="px-4 py-3">Recent chargeback rate</td>
                <td className="px-4 py-3">Profile</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">card_distinct_devices_30d</td>
                <td className="px-4 py-3">Devices using this card</td>
                <td className="px-4 py-3">Redis</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">card_distinct_users_30d</td>
                <td className="px-4 py-3">Users using this card</td>
                <td className="px-4 py-3">Redis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Transaction Features (From event):</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Computation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">amount_usd</td>
                <td className="px-4 py-3">Transaction amount</td>
                <td className="px-4 py-3">Direct</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">amount_zscore</td>
                <td className="px-4 py-3">Amount vs user average</td>
                <td className="px-4 py-3">(amount - avg) / std</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">is_new_card_for_user</td>
                <td className="px-4 py-3">First time card used</td>
                <td className="px-4 py-3">Boolean</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">is_new_device_for_user</td>
                <td className="px-4 py-3">First time device used</td>
                <td className="px-4 py-3">Boolean</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">hour_of_day</td>
                <td className="px-4 py-3">Local time hour</td>
                <td className="px-4 py-3">Timezone adjusted</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">is_weekend</td>
                <td className="px-4 py-3">Weekend flag</td>
                <td className="px-4 py-3">Boolean</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Device/Network Features:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">is_emulator</td>
                <td className="px-4 py-3">Device is emulated</td>
                <td className="px-4 py-3">Fingerprint</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">is_rooted</td>
                <td className="px-4 py-3">Device is rooted/jailbroken</td>
                <td className="px-4 py-3">Fingerprint</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">is_datacenter_ip</td>
                <td className="px-4 py-3">IP from cloud provider</td>
                <td className="px-4 py-3">IP intelligence</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">is_vpn</td>
                <td className="px-4 py-3">VPN detected</td>
                <td className="px-4 py-3">IP intelligence</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">is_tor</td>
                <td className="px-4 py-3">Tor exit node</td>
                <td className="px-4 py-3">IP intelligence</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">ip_risk_score</td>
                <td className="px-4 py-3">Third-party IP score</td>
                <td className="px-4 py-3">External API</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Label Source</h4>

        <p><strong>Positive Labels (Fraud):</strong></p>
        <ul>
          <li>Confirmed fraud chargebacks (reason codes 10.1-10.5)</li>
          <li>TC40/SAFE issuer alerts with fraud type indicators</li>
          <li>Manual review disposition: "confirmed fraud"</li>
        </ul>

        <p><strong>Negative Labels (Legitimate):</strong></p>
        <ul>
          <li>Authorizations without chargebacks or fraud alerts after 120-day aging</li>
          <li>Manual review disposition: "legitimate"</li>
        </ul>

        <p><strong>Exclusions (Not Used for Training):</strong></p>
        <ul>
          <li>Partial refunds and service complaints</li>
          <li>Ambiguous disputes (friendly fraud candidates)</li>
          <li>Transactions with incomplete feature capture</li>
        </ul>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`Label Maturity: 120 days from transaction
  - Reason: Chargebacks can arrive up to 120 days post-transaction
  - Consequence: Training data is always 4 months behind
  - Mitigation: Use issuer alerts (TC40/SAFE) for earlier signal`}
        </pre>

        <h4>Retraining Strategy</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`Weekly Pipeline (Automated):
1. Extract transactions from T-120d to T-30d
2. Join with chargeback outcomes
3. Retrieve point-in-time features from evidence vault
4. Train new model version
5. Validate against holdout (last 7 days)
6. If AUC drop < 2%: Register as challenger
7. If AUC drop >= 2%: Alert DS team, use previous model

Monthly Review (Manual):
1. Compare champion vs challenger performance
2. Analyze feature importance drift
3. Review false positive cases
4. Decide: promote challenger or retrain with adjustments`}
        </pre>

        <h3>Champion/Challenger Framework</h3>

        <h4>Experiment Architecture</h4>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    LB["Load Balancer"]

    LB --> C["Champion<br/>(80%)<br/>Model A"]
    LB --> CH["Challenger<br/>(15%)<br/>Model B"]
    LB --> H["Holdout<br/>(5%)<br/>Rules Only"]

    style LB fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style C fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style CH fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style H fill:#fee2e2,stroke:#ef4444,stroke-width:2px`}
          />
        </div>

        <p className="text-sm text-muted-foreground"><strong>Routing:</strong> Deterministic hash on auth_id (reproducible)</p>

        <h4>Experiment Metrics</h4>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Metric</th>
                <th className="px-4 py-3 text-left font-semibold">Champion</th>
                <th className="px-4 py-3 text-left font-semibold">Challenger</th>
                <th className="px-4 py-3 text-left font-semibold">Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Approval Rate</td>
                <td className="px-4 py-3">91.2%</td>
                <td className="px-4 py-3">Must be within 1%</td>
                <td className="px-4 py-3">-1% to +2%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Fraud Rate (30d lag)</td>
                <td className="px-4 py-3">1.15%</td>
                <td className="px-4 py-3">Must improve</td>
                <td className="px-4 py-3">&lt;1.15%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">P99 Latency</td>
                <td className="px-4 py-3">106ms</td>
                <td className="px-4 py-3">Must be within 20%</td>
                <td className="px-4 py-3">&lt;127ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">False Positive Rate</td>
                <td className="px-4 py-3">12%</td>
                <td className="px-4 py-3">Must improve</td>
                <td className="px-4 py-3">&lt;12%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Promotion Criteria</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`Promote Challenger if ALL true:
  1. Running for >= 14 days
  2. Sample size >= 100,000 transactions
  3. Fraud rate improved by >= 5% (statistically significant)
  4. Approval rate within 1% of champion
  5. No latency degradation
  6. No anomalies in score distribution

Rollback Challenger if ANY true:
  1. Fraud rate increased by > 10%
  2. Approval rate dropped by > 3%
  3. P99 latency exceeded 150ms
  4. Error rate exceeded 0.5%`}
        </pre>

        <h3>Replay Framework</h3>

        <h4>Purpose</h4>

        <p>Historical replay enables:</p>
        <ol>
          <li><strong>Threshold simulation</strong> - Test new thresholds on historical data</li>
          <li><strong>Model validation</strong> - Compare model predictions to known outcomes</li>
          <li><strong>Policy change estimation</strong> - Quantify impact before deployment</li>
        </ol>

        <h4>Implementation</h4>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`async def replay(
    start_date: datetime,
    end_date: datetime,
    policy_config: Optional[dict] = None,
    model_version: Optional[str] = None
) -> ReplayResults:
    """
    Replay historical transactions with optional config changes.

    Key: Uses point-in-time features from evidence vault,
    NOT current features (which would cause look-ahead bias).
    """

    for transaction in get_historical_transactions(start_date, end_date):
        # Get features AS THEY WERE at transaction time
        features = get_features_at_time(
            transaction.auth_id,
            transaction.timestamp
        )

        # Score with specified model/policy
        new_decision = score_and_decide(
            transaction,
            features,
            model_version,
            policy_config
        )

        # Compare to actual outcome
        actual_fraud = was_transaction_fraud(transaction.auth_id)

        # Record for analysis
        results.append({
            "original_decision": transaction.original_decision,
            "new_decision": new_decision,
            "actual_fraud": actual_fraud
        })

    return analyze_results(results)`}
        </pre>

        <h4>Simulation Use Cases</h4>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Use Case</th>
                <th className="px-4 py-3 text-left font-semibold">Input</th>
                <th className="px-4 py-3 text-left font-semibold">Output</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Threshold change</td>
                <td className="px-4 py-3">New threshold values</td>
                <td className="px-4 py-3">Approval rate delta, fraud caught delta</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Model comparison</td>
                <td className="px-4 py-3">Model version A vs B</td>
                <td className="px-4 py-3">AUC difference, FP rate difference</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Rule addition</td>
                <td className="px-4 py-3">New rule definition</td>
                <td className="px-4 py-3">Transactions affected, score changes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Seasonal analysis</td>
                <td className="px-4 py-3">Date range comparison</td>
                <td className="px-4 py-3">Pattern differences by period</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Phase 3: Advanced ML (Future)</h2>

        <h3>Planned Enhancements</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Enhancement</th>
                <th className="px-4 py-3 text-left font-semibold">Timeline</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Graph Neural Network</td>
                <td className="px-4 py-3">Phase 3</td>
                <td className="px-4 py-3">Detect fraud rings via card-device-user connections</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Sequence Model</td>
                <td className="px-4 py-3">Phase 3</td>
                <td className="px-4 py-3">LSTM/Transformer for transaction sequence patterns</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Anomaly Detection</td>
                <td className="px-4 py-3">Phase 3</td>
                <td className="px-4 py-3">Isolation Forest for unknown attack patterns</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Real-time Retraining</td>
                <td className="px-4 py-3">Phase 3</td>
                <td className="px-4 py-3">Online learning for rapid adaptation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">External Signals</td>
                <td className="px-4 py-3">Phase 3</td>
                <td className="px-4 py-3">TC40/SAFE, Ethoca, BIN intelligence, device reputation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>External Signal Integration (Phase 3)</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Signal</th>
                <th className="px-4 py-3 text-left font-semibold">Source</th>
                <th className="px-4 py-3 text-left font-semibold">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">TC40/SAFE</td>
                <td className="px-4 py-3">Issuer alerts</td>
                <td className="px-4 py-3">Early fraud signal before chargeback</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Ethoca/Verifi</td>
                <td className="px-4 py-3">Network alerts</td>
                <td className="px-4 py-3">Pre-dispute notification</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">BIN Intelligence</td>
                <td className="px-4 py-3">Card networks</td>
                <td className="px-4 py-3">Card risk scoring, country of issuance</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Device Reputation</td>
                <td className="px-4 py-3">Third-party SDK</td>
                <td className="px-4 py-3">Known bad devices, emulator detection</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">IP Intelligence</td>
                <td className="px-4 py-3">MaxMind/similar</td>
                <td className="px-4 py-3">Proxy, VPN, datacenter detection</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Consortium Data</td>
                <td className="px-4 py-3">Industry shared</td>
                <td className="px-4 py-3">Cross-merchant fraud patterns</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Guardrails Against Over-Complexity</h3>

        <p>The roadmap explicitly avoids:</p>

        <ul>
          <li>Deploying highly complex or opaque models without clear interpretability paths</li>
          <li>Adding model variants that materially increase operational risk without proportional fraud/loss benefit</li>
          <li>Creeping scope into generic "AI everywhere" without clear problem statements</li>
          <li>Replacing human judgment in edge cases where model confidence is low</li>
        </ul>

        <p>
          <strong>ML remains a tool, not the centerpiece</strong> - the platform&apos;s value is in robust decisioning, evidence, and economics, with ML reinforcing (not replacing) those pillars.
        </p>

        <h3>Graph-Based Fraud Ring Detection</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`Entity Graph:
  Nodes: Cards, Devices, Users, IPs
  Edges: Transaction relationships

Fraud Ring Indicators:
  - Cluster of cards sharing devices
  - Star pattern (one device, many cards)
  - Circular payments between accounts
  - Velocity spikes in connected subgraph

Implementation:
  - Neo4j for graph storage
  - Graph embedding for ML features
  - Community detection for ring identification`}
        </pre>

        <hr />

        <h2>Architecture for ML Integration</h2>

        <h3>Current Architecture (ML-Ready)</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    API["API Layer<br/>(FastAPI)"]

    API --> FE["Feature Engine<br/>(Redis)"]
    API --> DE["Detection Engine"]
    API --> PE["Policy Engine<br/>(YAML)"]

    subgraph Current["Currently Rule-Based"]
        RB["Rule-Based<br/>Detection"]
        ML["[ML HOOK]<br/>Phase 2"]
    end

    DE --> Current
    PE --> Current

    FE --> EV[("Evidence Vault<br/>(Feature Store)")]

    style API fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style FE fill:#d1fae5,stroke:#10b981
    style DE fill:#fef3c7,stroke:#f59e0b
    style PE fill:#fee2e2,stroke:#ef4444
    style Current fill:#f3f4f6,stroke:#9ca3af,stroke-dasharray: 5 5
    style EV fill:#e0e7ff,stroke:#6366f1`}
          />
        </div>

        <h3>Phase 2 Architecture (With ML)</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    API["API Layer"]

    API --> FE["Feature Engine<br/>(Redis)"]
    API --> SS["Scoring Service"]
    API --> PE["Policy Engine<br/>(YAML)"]

    subgraph Scoring["Scoring Layer"]
        RE["Rule Engine"]
        MLM["ML Model"]
        ENS["Ensemble Layer"]
    end

    SS --> Scoring
    PE --> ENS

    subgraph Models["Model Variants"]
        CH["Champion<br/>Model"]
        CHL["Challenger<br/>Model"]
    end

    MLM --> Models

    FE --> EV[("Evidence Vault<br/>+ ML Features")]

    style API fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style FE fill:#d1fae5,stroke:#10b981
    style SS fill:#fef3c7,stroke:#f59e0b
    style PE fill:#fee2e2,stroke:#ef4444
    style Scoring fill:#fef3c7,stroke:#f59e0b
    style Models fill:#d1fae5,stroke:#10b981
    style EV fill:#e0e7ff,stroke:#6366f1`}
          />
        </div>

        <h3>Ensemble Scoring</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`class EnsembleScoringService:
    """Combine rule-based and ML scores."""

    def score(self, features: dict) -> RiskScore:
        # Rule-based score (always runs)
        rule_score = self.rule_engine.score(features)

        # ML score (Phase 2+)
        if self.ml_enabled:
            ml_score = self.ml_model.predict(features)
        else:
            ml_score = None

        # Ensemble combination
        if ml_score is not None:
            # Weighted average with rules as safety net
            combined = (
                ml_score * 0.70 +           # ML carries more weight
                rule_score * 0.30           # Rules as backstop
            )

            # Hard overrides (rules always win for certain signals)
            if features.get("is_emulator"):
                combined = max(combined, 0.95)
            if features.get("blocklist_match"):
                combined = 1.0
        else:
            combined = rule_score

        return RiskScore(
            combined=combined,
            rule_score=rule_score,
            ml_score=ml_score,
            model_version=self.model_version
        )`}
        </pre>

        <hr />

        <h2>Timeline Summary</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Phase</th>
                <th className="px-4 py-3 text-left font-semibold">Scope</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 1</td>
                <td className="px-4 py-3">Rule-based MVP</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Complete</td>
                <td className="px-4 py-3">Done</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 2a</td>
                <td className="px-4 py-3">ML model training</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">Not started</td>
                <td className="px-4 py-3">Weeks 1-2</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 2b</td>
                <td className="px-4 py-3">Champion/challenger</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">Not started</td>
                <td className="px-4 py-3">Weeks 2-3</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 2c</td>
                <td className="px-4 py-3">ML in production</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">Not started</td>
                <td className="px-4 py-3">Week 4+</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 3</td>
                <td className="px-4 py-3">Advanced ML</td>
                <td className="px-4 py-3 text-muted-foreground">Future</td>
                <td className="px-4 py-3">Post-MVP</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <p className="text-muted-foreground italic">
          This document consolidates the AI/ML strategy with explicit current status, avoiding the impression that ML is already deployed when it is planned for Phase 2.
        </p>
      </article>
    </DocsLayout>
  );
}
