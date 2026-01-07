import Link from "next/link";
import { DocsLayout } from "@/components/DocsLayout";

export const metadata = {
  title: "Fraud Detection Platform | Documentation",
  description: "Enterprise-grade real-time payment fraud detection system designed for Telco/MSP environments.",
};

export default function FraudPlatformOverviewPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Telco Payment Fraud Detection Platform</h1>

        <p className="lead">
          Enterprise-grade real-time <strong>payment fraud</strong> detection system designed for Telco/MSP
          environments. Built to handle high-throughput transactions with sub-10ms decision latency.
        </p>

        <h2>The Challenge</h2>

        <p>
          <strong>Payment fraud</strong> in the telecommunications industry costs operators billions annually.
          Traditional batch-processing approaches fail because:
        </p>

        <ul>
          <li><strong>Too slow</strong>: Fraudsters complete SIM activations, device purchases, and service upgrades before detection</li>
          <li><strong>Too rigid</strong>: Static rules cannot adapt to evolving attack patterns like SIM farms and device resale fraud</li>
          <li><strong>Poor UX</strong>: Blocking legitimate subscribers hurts revenue more than the fraud itself</li>
        </ul>

        <h2>The Solution</h2>

        <p>A real-time decisioning engine that:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Capability</th>
                <th className="px-4 py-3 text-left font-semibold">Achievement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Decision Latency</td>
                <td className="px-4 py-3">Sub-10ms P99</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Detection Coverage</td>
                <td className="px-4 py-3">5 fraud signal types</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Policy Updates</td>
                <td className="px-4 py-3">Hot-reload without restart</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Evidence Trail</td>
                <td className="px-4 py-3">Complete audit for disputes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Key Features</h2>

        <h3>Real-Time Decisioning</h3>

        <p>Every transaction receives an instant decision:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm">
{`ALLOW → Proceed normally
FRICTION → Request additional verification (3DS, OTP)
REVIEW → Queue for manual review
BLOCK → Decline transaction`}
        </pre>

        <h3>Multi-Signal Detection</h3>

        <p>The platform analyzes five distinct <strong>payment fraud</strong> patterns targeting Telco/MSP:</p>

        <ol>
          <li><strong>Card Testing</strong> - Rapid small topups probing stolen card validity</li>
          <li><strong>SIM Farm / Velocity Attacks</strong> - Multiple SIM activations from same card (fraud ring indicator)</li>
          <li><strong>Device Resale Fraud</strong> - Subsidized device upgrades with intent to resell</li>
          <li><strong>Bot/Automation</strong> - Emulators, datacenter IPs, Tor exit nodes (automated fraud)</li>
          <li><strong>Friendly Fraud</strong> - Historical dispute patterns and subscriber behavioral signals</li>
        </ol>

        <h3>Configurable Policy Engine</h3>

        <p>Business rules are defined in YAML and can be updated without deployment:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`thresholds:
  block_score: 85
  review_score: 60
  friction_score: 35

rules:
  - name: device_upgrade_new_subscriber
    condition: event_subtype = device_upgrade AND subscriber_age_days < 30
    action: REVIEW
  - name: high_risk_sim_swap
    condition: event_subtype = sim_swap
    action: REVIEW`}
        </pre>

        <h2>Architecture at a Glance</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│                      Payment Gateway                         │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Fraud Detection API                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Feature  │  │Detection │  │  Risk    │  │  Policy  │    │
│  │ Engine   │  │ Engine   │  │ Scoring  │  │  Engine  │    │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘    │
└───────┼─────────────┼─────────────┼─────────────┼──────────┘
        │             │             │             │
   ┌────▼────┐   ┌────▼────┐   ┌────▼────┐   ┌────▼────┐
   │  Redis  │   │ Detect  │   │  Score  │   │  YAML   │
   │Counters │   │ Signals │   │ Combine │   │ Config  │
   └─────────┘   └─────────┘   └─────────┘   └─────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   PostgreSQL    │
                    │ Evidence Vault  │
                    └─────────────────┘`}
        </pre>

        <h2>Technical Stack</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Technology</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">API</td>
                <td className="px-4 py-3">FastAPI</td>
                <td className="px-4 py-3">High-performance async endpoints</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Feature Store</td>
                <td className="px-4 py-3">Redis</td>
                <td className="px-4 py-3">Sub-ms velocity counter lookups</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Evidence Store</td>
                <td className="px-4 py-3">PostgreSQL</td>
                <td className="px-4 py-3">Immutable audit trail</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Monitoring</td>
                <td className="px-4 py-3">Prometheus + Grafana</td>
                <td className="px-4 py-3">Real-time metrics and alerting</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Dashboard</td>
                <td className="px-4 py-3">Streamlit</td>
                <td className="px-4 py-3">Demo and testing interface</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Infrastructure</td>
                <td className="px-4 py-3">Docker Compose</td>
                <td className="px-4 py-3">Local development environment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Results</h2>

        <p>The Sprint-1 MVP delivers:</p>

        <ul>
          <li><strong>5 detection signals</strong> covering major fraud patterns</li>
          <li><strong>Sub-10ms latency</strong> for decision responses</li>
          <li><strong>Hot-reload policy</strong> updates without restarts</li>
          <li><strong>Complete evidence capture</strong> for dispute resolution</li>
          <li><strong>45+ unit tests</strong> with comprehensive coverage</li>
          <li><strong>Load tested</strong> to 1000+ requests/second</li>
        </ul>

        <h2>Documentation</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Section</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <Link href="/docs/fraud-platform/getting-started" className="text-primary hover:underline">
                    Getting Started
                  </Link>
                </td>
                <td className="px-4 py-3">Quick setup and first API call</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <Link href="/docs/fraud-platform/architecture" className="text-primary hover:underline">
                    Architecture
                  </Link>
                </td>
                <td className="px-4 py-3">System design and component details</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <Link href="/docs/fraud-platform/api-reference" className="text-primary hover:underline">
                    API Reference
                  </Link>
                </td>
                <td className="px-4 py-3">Endpoint specifications</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">
                  <Link href="/docs/fraud-platform/demo-dashboard" className="text-primary hover:underline">
                    Demo Dashboard
                  </Link>
                </td>
                <td className="px-4 py-3">Interactive testing interface</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <p><strong>Author</strong>: Uday Tamma</p>
      </article>
    </DocsLayout>
  );
}
