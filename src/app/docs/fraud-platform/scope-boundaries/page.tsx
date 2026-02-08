import { DocsLayout } from "@/components/DocsLayout";

export const metadata = {
  title: "Scope Boundaries | Fraud Detection Platform",
  description: "What the Telco Payment Fraud Detection Platform explicitly is not — deliberate exclusions and the reasoning behind them.",
};

export default function ScopeBoundariesPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>What This Platform Is Not</h1>

        <p className="text-muted-foreground">
          <strong>Author:</strong> Uday Tamma | <strong>Document Version:</strong> 1.0 | <strong>Date:</strong> February 08, 2026 at 10:00 AM CST
        </p>

        <p className="lead">
          Knowing what to exclude is as important as knowing what to build. This document defines the deliberate boundaries of the fraud detection platform -- not as limitations, but as architectural choices that keep the system focused, maintainable, and honest about what it does.
        </p>

        <hr />

        <h2>1. Not a Full Chargeback Lifecycle System</h2>

        <p><strong>What we build:</strong> Immutable evidence capture at decision time. Every transaction is recorded with full context -- risk scores, detector signals, device metadata, verification results, policy version.</p>

        <p><strong>What we do not build:</strong></p>

        <ul>
          <li>Automated chargeback filing or representment workflows</li>
          <li>Issuer network integration (TC40/SAFE alert ingestion)</li>
          <li>Case management UI for dispute analysts</li>
          <li>Chargeback reason code routing and response templating</li>
        </ul>

        <h3>Why Not</h3>

        <p>
          Chargeback representment is a <strong>process problem</strong>, not a detection problem. It requires integration with card network APIs (Visa Resolve Online, Mastercard Ethoca), legal templates per reason code, and a human-in-the-loop workflow. Building this in Phase 1 would have doubled the scope without improving detection quality.
        </p>

        <p>
          Instead, the evidence vault is designed to <strong>feed</strong> a representment system. The <code>transaction_evidence</code> table captures everything a dispute analyst needs: the risk score at decision time, which detectors fired, the policy version in effect, and a features snapshot for context. This is the data substrate that makes a future representment system effective.
        </p>

        <div className="not-prose my-6 rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm"><strong>Phase 2 plan:</strong> Automated chargeback ingestion and labeling. Chargebacks linked to original transactions with 120-day maturity window for ML training labels.</p>
        </div>

        <hr />

        <h2>2. Not ML-Model-Heavy by Design</h2>

        <p><strong>What we build:</strong> Rule-based detection with 5 parallel detectors using weighted-max scoring. Interpretable, adjustable, auditable.</p>

        <p><strong>What we do not build:</strong></p>

        <ul>
          <li>Neural network or deep learning fraud models</li>
          <li>Real-time model serving infrastructure (TensorFlow Serving, Triton)</li>
          <li>Automated model retraining pipelines</li>
          <li>Feature drift monitoring (PSI/CSI)</li>
        </ul>

        <h3>Why Not</h3>

        <p>This is not an anti-ML stance. It is a sequencing decision based on three constraints:</p>

        <ol>
          <li><strong>No labeled data exists.</strong> ML fraud models need confirmed fraud labels. Chargebacks take 45-120 days to materialize. Training on proxy labels (rule flags) creates a model that replicates rules with added complexity.</li>
          <li><strong>Interpretability matters for disputes.</strong> &quot;The system flagged rapid card testing from a SIM farm IP&quot; wins chargebacks. &quot;The model produced a 0.87 confidence score&quot; does not. Rule-based reasons map directly to evidence.</li>
          <li><strong>Operational trust.</strong> Business stakeholders need to understand why transactions are blocked before they trust the system to make autonomous decisions. Rules are transparent. ML is a black box until explainability layers are built.</li>
        </ol>

        <div className="not-prose my-6 rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm"><strong>Phase 2 plan:</strong> XGBoost/LightGBM model trained on Phase 1 evidence + chargeback labels. Champion/challenger framework for safe rollout. Rules remain as the baseline -- ML adds signal, does not replace rules.</p>
        </div>

        <hr />

        <h2>3. Not Tuned for Consumer Card Networks</h2>

        <p><strong>What we build:</strong> Fraud detection for Telco/MSP payment events -- SIM activations, device upgrades, mobile top-ups, international service enablement, and postpaid billing.</p>

        <p><strong>What we do not build:</strong></p>

        <ul>
          <li>General e-commerce card-not-present (CNP) fraud detection</li>
          <li>Card-present / POS terminal fraud detection</li>
          <li>Gift card or stored value card fraud</li>
          <li>Marketplace fraud (buyer-seller collusion)</li>
          <li>Subscription/recurring billing fraud</li>
        </ul>

        <h3>Why Not</h3>

        <p>
          Telco fraud has different economics and attack patterns than general e-commerce:
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                <th className="px-4 py-3 text-left font-semibold">Telco/MSP Fraud</th>
                <th className="px-4 py-3 text-left font-semibold">General E-Commerce Fraud</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Primary attack</td>
                <td className="px-4 py-3">SIM farms, device resale, subscription fraud</td>
                <td className="px-4 py-3">Stolen card purchases, account takeover</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Fraud velocity</td>
                <td className="px-4 py-3">Burst attacks (200 SIMs in 10 minutes)</td>
                <td className="px-4 py-3">Distributed low-frequency purchases</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Entity linkage</td>
                <td className="px-4 py-3">Device-SIM-subscriber binding</td>
                <td className="px-4 py-3">Card-address-device binding</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Fraud monetization</td>
                <td className="px-4 py-3">SIM resale, IRSF toll fraud, device resale</td>
                <td className="px-4 py-3">Goods resale, gift card laundering</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Key signal</td>
                <td className="px-4 py-3">Velocity counters (cards per device, SIMs per card)</td>
                <td className="px-4 py-3">Behavioral biometrics, session analysis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A general-purpose fraud system would need behavioral biometrics, session replay analysis, and card network consortium data -- none of which are available in Phase 1. The Telco-specific focus means every detector is tuned for the actual attack patterns seen in the target environment.
        </p>

        <hr />

        <h2>4. Fraud Types Explicitly Out of Scope</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Fraud Type</th>
                <th className="px-4 py-3 text-left font-semibold">Why Excluded</th>
                <th className="px-4 py-3 text-left font-semibold">When Addressed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">IRSF (International Revenue Share Fraud)</td>
                <td className="px-4 py-3">Requires CDR (call detail record) analysis, not payment data</td>
                <td className="px-4 py-3">Phase 2 -- separate detection pipeline</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Account Takeover (ATO)</td>
                <td className="px-4 py-3">Requires login/session behavioral analysis, not payment signals</td>
                <td className="px-4 py-3">Phase 2 -- SIM swap correlation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Merchant Collusion</td>
                <td className="px-4 py-3">Requires network graph analysis across merchant-subscriber pairs</td>
                <td className="px-4 py-3">Phase 3 -- graph database integration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Return/Refund Fraud</td>
                <td className="px-4 py-3">Requires post-purchase event stream not in current data model</td>
                <td className="px-4 py-3">Not planned -- different system concern</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Internal / Employee Fraud</td>
                <td className="px-4 py-3">Requires privileged access monitoring, not transaction scoring</td>
                <td className="px-4 py-3">Not planned -- separate audit system</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>The Principle</h2>

        <p>
          A fraud detection platform that tries to detect every fraud type detects none of them well. Phase 1 is deliberately scoped to the highest-ROI Telco fraud patterns with data available today. The architecture is extensible -- new detectors plug into the same scoring pipeline -- but the scope is constrained to what can be built, tested, and trusted within 2 sprints.
        </p>

        <p>
          <strong>Restraint is not a limitation. It is a design choice.</strong>
        </p>

        <hr />

        <p className="text-sm text-muted-foreground italic">This document demonstrates deliberate scope management -- a Principal TPM competency that separates &quot;building everything possible&quot; from &quot;building what matters.&quot;</p>

      </article>
    </DocsLayout>
  );
}
