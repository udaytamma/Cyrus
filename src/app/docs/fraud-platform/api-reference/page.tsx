import { DocsLayout } from "@/components/DocsLayout";
import Link from "next/link";

export const metadata = {
  title: "API Reference | Fraud Detection Platform",
  description: "Complete documentation for the Fraud Detection API endpoints.",
};

export default function APIReferencePage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>API Reference</h1>

        <p className="lead">
          Complete documentation for the Fraud Detection API endpoints.
        </p>

        <h2>Base URL</h2>

        <div className="not-prose my-4 rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-500/5 to-transparent p-4">
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="rounded bg-blue-500/20 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400">BASE</span>
            <span>http://localhost:8000</span>
          </div>
        </div>

        <h2>Authentication</h2>

        <div className="not-prose my-4 rounded-lg border border-yellow-500/30 bg-gradient-to-r from-yellow-500/5 to-transparent p-4">
          <p className="text-sm text-muted-foreground">
            The API uses optional token-based authentication. Three token types control access: <code className="text-xs">API_TOKEN</code> (decision endpoints), <code className="text-xs">ADMIN_TOKEN</code> (policy management), and <code className="text-xs">METRICS_TOKEN</code> (metrics endpoint). When tokens are not configured, endpoints are open for local development.
          </p>
        </div>

        <hr />

        <h2>Endpoints</h2>

        <h3>POST /decide</h3>

        <p>Make a fraud decision for a transaction.</p>

        <div className="not-prose my-4 rounded-lg border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500/10 to-transparent px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="rounded bg-orange-500/20 px-2 py-0.5 text-xs font-semibold text-orange-600 dark:text-orange-400">POST</span>
              <span className="font-mono text-sm">/decide</span>
            </div>
          </div>
          <pre className="p-4 text-xs overflow-x-auto">
{`curl -X POST http://localhost:8000/decide \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id": "txn_abc123",
    "idempotency_key": "idem_abc123",
    "amount_cents": 9999,
    "currency": "USD",
    "service_id": "mobile_prepaid_001",
    "service_type": "mobile",
    "event_subtype": "sim_activation",
    "card_token": "card_xyz",
    "user_id": "subscriber_789",
    "phone_number": "15551234567",
    "imei": "353456789012345",
    "device": {
      "device_id": "device_abc",
      "is_emulator": false
    },
    "geo": {
      "ip_address": "192.168.1.100",
      "is_datacenter": false
    }
  }'`}
          </pre>
        </div>

        <h4>Request Body</h4>

        <p>The request uses the <code>PaymentEvent</code> schema. Top-level fields and nested objects:</p>

        <div className="not-prose my-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Field</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Required</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">transaction_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3"><span className="text-green-600 dark:text-green-400">Yes</span></td>
                <td className="px-4 py-3 text-muted-foreground">Unique transaction identifier</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">idempotency_key</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3"><span className="text-green-600 dark:text-green-400">Yes</span></td>
                <td className="px-4 py-3 text-muted-foreground">Key for exactly-once processing</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">amount_cents</td>
                <td className="px-4 py-3">int</td>
                <td className="px-4 py-3"><span className="text-green-600 dark:text-green-400">Yes</span></td>
                <td className="px-4 py-3 text-muted-foreground">Transaction amount in cents</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">currency</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">ISO 4217 currency code (default: USD)</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">service_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3"><span className="text-green-600 dark:text-green-400">Yes</span></td>
                <td className="px-4 py-3 text-muted-foreground">Telco service identifier</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">service_type</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground"><code className="text-xs">mobile</code> (default) or <code className="text-xs">broadband</code></td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">event_subtype</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground"><code className="text-xs">sim_activation</code>, <code className="text-xs">topup</code>, <code className="text-xs">device_upgrade</code>, <code className="text-xs">sim_swap</code>, etc.</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">card_token</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3"><span className="text-green-600 dark:text-green-400">Yes</span></td>
                <td className="px-4 py-3 text-muted-foreground">Tokenized card reference (PCI compliant)</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">user_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">Subscriber/account identifier</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">phone_number</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">MSISDN for mobile services</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">imei</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">Device IMEI for mobile services</td>
              </tr>
              <tr className="border-b border-border bg-muted/10">
                <td className="px-4 py-3 font-mono text-xs font-semibold" colSpan={4}>Nested Objects</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">device.device_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No*</td>
                <td className="px-4 py-3 text-muted-foreground">Device fingerprint identifier</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">device.is_emulator</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">True if device is emulated (SIM farm indicator)</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">device.is_rooted</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">True if device is rooted/jailbroken</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">geo.ip_address</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No*</td>
                <td className="px-4 py-3 text-muted-foreground">Client IP address</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">geo.country_code</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">ISO 3166-1 alpha-2 country code</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">geo.is_datacenter</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">True if IP is datacenter/cloud</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">geo.is_tor</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">True if IP is Tor exit node</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs">geo.is_vpn</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">True if IP appears to be a VPN</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground">* Required when parent object is provided. The <code>device</code> and <code>geo</code> objects are optional but strongly recommended for full detection coverage. See the <a href="https://github.com/udaytamma/FraudDetection/blob/main/src/schemas/events.py" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PaymentEvent schema</a> for the full 40+ field specification including card, verification, and broadband-specific fields.</p>

        <h4>Response</h4>

        <div className="not-prose my-4 rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/5 to-transparent p-4">
          <pre className="text-xs overflow-x-auto">
{`{
  "transaction_id": "txn_abc123",
  "idempotency_key": "idem_abc123",
  "decision": "ALLOW",
  "reasons": [],
  "scores": {
    "risk_score": 0.15,
    "criminal_score": 0.10,
    "friendly_fraud_score": 0.08,
    "confidence": 0.5,
    "card_testing_score": 0.0,
    "velocity_score": 0.0,
    "geo_score": 0.0,
    "bot_score": 0.02
  },
  "processing_time_ms": 7.8,
  "feature_time_ms": 3.2,
  "scoring_time_ms": 1.1,
  "policy_time_ms": 0.4,
  "policy_version": "1.0.0",
  "is_cached": false
}`}
          </pre>
        </div>

        <h4>Decision Values</h4>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent p-4">
            <div className="font-mono font-semibold text-green-600 dark:text-green-400 mb-1">ALLOW</div>
            <div className="text-xs text-muted-foreground">Low risk, approve transaction</div>
            <div className="mt-2 text-xs font-medium">Process normally</div>
          </div>
          <div className="rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent p-4">
            <div className="font-mono font-semibold text-yellow-600 dark:text-yellow-400 mb-1">FRICTION</div>
            <div className="text-xs text-muted-foreground">Medium risk, needs verification</div>
            <div className="mt-2 text-xs font-medium">Request 3DS/OTP</div>
          </div>
          <div className="rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-4">
            <div className="font-mono font-semibold text-orange-600 dark:text-orange-400 mb-1">REVIEW</div>
            <div className="text-xs text-muted-foreground">High risk, needs manual review</div>
            <div className="mt-2 text-xs font-medium">Queue for analyst</div>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent p-4">
            <div className="font-mono font-semibold text-red-600 dark:text-red-400 mb-1">BLOCK</div>
            <div className="text-xs text-muted-foreground">Very high risk, decline</div>
            <div className="mt-2 text-xs font-medium">Reject transaction</div>
          </div>
        </div>

        <hr />

        <h3>GET /health</h3>

        <p>Check system health and component status.</p>

        <div className="not-prose my-4 rounded-lg border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-green-500/10 to-transparent px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="rounded bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-600 dark:text-green-400">GET</span>
              <span className="font-mono text-sm">/health</span>
            </div>
          </div>
          <pre className="p-4 text-xs overflow-x-auto">
{`{
  "status": "healthy",
  "components": {
    "redis": true,
    "postgres": true,
    "policy": true
  },
  "policy_version": "1.0.0"
}`}
          </pre>
        </div>

        <p className="text-sm text-muted-foreground">Returns <code>&quot;status&quot;: &quot;degraded&quot;</code> if any component is unavailable. The API continues to serve decisions in degraded mode.</p>

        <hr />

        <h3>GET /policy/version</h3>

        <p>Get current policy version and content hash.</p>

        <div className="not-prose my-4 rounded-lg border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-green-500/10 to-transparent px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="rounded bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-600 dark:text-green-400">GET</span>
              <span className="font-mono text-sm">/policy/version</span>
            </div>
          </div>
          <pre className="p-4 text-xs overflow-x-auto">
{`{
  "version": "1.0.0",
  "hash": "a3f8c2d1"
}`}
          </pre>
        </div>

        <hr />

        <h3>POST /policy/reload</h3>

        <p>Hot-reload policy configuration from <code>config/policy.yaml</code> without restart. Requires admin token.</p>

        <div className="not-prose my-4 rounded-lg border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500/10 to-transparent px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="rounded bg-orange-500/20 px-2 py-0.5 text-xs font-semibold text-orange-600 dark:text-orange-400">POST</span>
              <span className="font-mono text-sm">/policy/reload</span>
            </div>
          </div>
          <pre className="p-4 text-xs overflow-x-auto">
{`{
  "status": "success",
  "version": "1.0.0",
  "hash": "b7e4f9a2"
}`}
          </pre>
        </div>

        <hr />

        <h3>GET /metrics</h3>

        <p>Prometheus metrics endpoint.</p>

        <div className="not-prose my-4 rounded-lg border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500/10 to-transparent px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="rounded bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-600 dark:text-green-400">GET</span>
              <span className="font-mono text-sm">/metrics</span>
              <span className="text-xs text-muted-foreground">(text/plain)</span>
            </div>
          </div>
          <pre className="p-4 text-xs overflow-x-auto">
{`# HELP fraud_decisions_total Total fraud decisions by type
# TYPE fraud_decisions_total counter
fraud_decisions_total{decision="ALLOW"} 1234
fraud_decisions_total{decision="FRICTION"} 56
fraud_decisions_total{decision="REVIEW"} 23
fraud_decisions_total{decision="BLOCK"} 12

# HELP fraud_e2e_latency_ms End-to-end decision latency in milliseconds
# TYPE fraud_e2e_latency_ms histogram
fraud_e2e_latency_ms_bucket{le="5"} 800
fraud_e2e_latency_ms_bucket{le="10"} 1200
fraud_e2e_latency_ms_bucket{le="50"} 1320

# HELP fraud_detector_triggers_total Detector trigger counts
# TYPE fraud_detector_triggers_total counter
fraud_detector_triggers_total{detector="card_testing"} 45
fraud_detector_triggers_total{detector="velocity"} 78
fraud_detector_triggers_total{detector="geo_anomaly"} 23`}
          </pre>
        </div>

        <hr />

        <h2>Policy Management Endpoints</h2>

        <p>The API exposes a full suite of policy management endpoints for runtime configuration. All write operations are versioned and create an audit trail.</p>

        <div className="not-prose my-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Method</th>
                <th className="px-4 py-3 text-left font-semibold">Endpoint</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Auth</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-green-600 dark:text-green-400">GET</td>
                <td className="px-4 py-3 font-mono text-xs">/policy</td>
                <td className="px-4 py-3 text-muted-foreground">Get active policy configuration</td>
                <td className="px-4 py-3 text-xs">API token</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-green-600 dark:text-green-400">GET</td>
                <td className="px-4 py-3 font-mono text-xs">/policy/versions</td>
                <td className="px-4 py-3 text-muted-foreground">List all policy versions (audit trail)</td>
                <td className="px-4 py-3 text-xs">API token</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-orange-600 dark:text-orange-400">PUT</td>
                <td className="px-4 py-3 font-mono text-xs">/policy/thresholds</td>
                <td className="px-4 py-3 text-muted-foreground">Update score thresholds (validates friction &lt; review &lt; block)</td>
                <td className="px-4 py-3 text-xs">Admin token</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-orange-600 dark:text-orange-400">POST</td>
                <td className="px-4 py-3 font-mono text-xs">/policy/rules</td>
                <td className="px-4 py-3 text-muted-foreground">Add a new policy rule</td>
                <td className="px-4 py-3 text-xs">Admin token</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-orange-600 dark:text-orange-400">PUT</td>
                <td className="px-4 py-3 font-mono text-xs">{`/policy/rules/{rule_id}`}</td>
                <td className="px-4 py-3 text-muted-foreground">Update an existing rule</td>
                <td className="px-4 py-3 text-xs">Admin token</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-red-600 dark:text-red-400">DELETE</td>
                <td className="px-4 py-3 font-mono text-xs">{`/policy/rules/{rule_id}`}</td>
                <td className="px-4 py-3 text-muted-foreground">Delete a policy rule</td>
                <td className="px-4 py-3 text-xs">Admin token</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-orange-600 dark:text-orange-400">POST</td>
                <td className="px-4 py-3 font-mono text-xs">{`/policy/lists/{list_type}`}</td>
                <td className="px-4 py-3 text-muted-foreground">Add to blocklist/allowlist</td>
                <td className="px-4 py-3 text-xs">--</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-red-600 dark:text-red-400">DELETE</td>
                <td className="px-4 py-3 font-mono text-xs">{`/policy/lists/{list_type}/{value}`}</td>
                <td className="px-4 py-3 text-muted-foreground">Remove from blocklist/allowlist</td>
                <td className="px-4 py-3 text-xs">--</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-orange-600 dark:text-orange-400">POST</td>
                <td className="px-4 py-3 font-mono text-xs">{`/policy/rollback/{target_version}`}</td>
                <td className="px-4 py-3 text-muted-foreground">Rollback to a previous version (preserves history)</td>
                <td className="px-4 py-3 text-xs">--</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-green-600 dark:text-green-400">GET</td>
                <td className="px-4 py-3 font-mono text-xs">{`/policy/diff/{v1}/{v2}`}</td>
                <td className="px-4 py-3 text-muted-foreground">Compare two policy versions (threshold, rule, and list diffs)</td>
                <td className="px-4 py-3 text-xs">--</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground">All write operations auto-reload the policy engine after persisting. Changes are tracked with <code>changed_by</code>, <code>change_type</code>, and <code>change_summary</code> for audit compliance. The dashboard uses these endpoints for its Policy Settings tab.</p>

        <hr />

        <h2>Error Responses</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent p-4">
            <div className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">400 Bad Request</div>
            <p className="text-xs text-muted-foreground mb-2">Policy validation error</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`{
  "detail": "friction (0.70)
    must be < review (0.60)"
}`}
            </pre>
          </div>
          <div className="rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-4">
            <div className="font-semibold text-orange-600 dark:text-orange-400 mb-2">422 Unprocessable Entity</div>
            <p className="text-xs text-muted-foreground mb-2">Schema validation error</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`{
  "detail": [{
    "loc": ["body",
      "transaction_id"],
    "msg": "field required"
  }]
}`}
            </pre>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent p-4">
            <div className="font-semibold text-red-600 dark:text-red-400 mb-2">500 Internal Server Error</div>
            <p className="text-xs text-muted-foreground mb-2">Server-side failure</p>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`{
  "detail": "Redis connection
    failed"
}`}
            </pre>
          </div>
        </div>

        <hr />

        <h2>Rate Limits</h2>

        <div className="not-prose my-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Environment</th>
                <th className="px-4 py-3 text-left font-semibold">Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">Development</td>
                <td className="px-4 py-3 text-muted-foreground">Unlimited</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">Production</td>
                <td className="px-4 py-3 text-muted-foreground">10,000 req/min (configurable)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Idempotency</h2>

        <p>
          The <code>/decide</code> endpoint is idempotent via the <code>idempotency_key</code> field. Sending the same key returns the cached result without re-processing:
        </p>

        <div className="not-prose my-4 rounded-lg border border-border bg-gradient-to-r from-indigo-500/5 to-transparent p-4">
          <pre className="text-xs overflow-x-auto">
{`# First call - processes transaction
curl -X POST http://localhost:8000/decide -d '{"idempotency_key": "idem_001", ...}'
# Response: {"decision": "ALLOW", "processing_time_ms": 8.2, "is_cached": false}

# Second call - returns cached result
curl -X POST http://localhost:8000/decide -d '{"idempotency_key": "idem_001", ...}'
# Response: {"decision": "ALLOW", "processing_time_ms": 0.3, "is_cached": true}`}
          </pre>
        </div>

        <p className="text-sm text-muted-foreground">Idempotency is backed by Redis (24h TTL) with PostgreSQL fallback. This prevents duplicate charges or inconsistent decisions on network retries.</p>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/fraud-platform/architecture"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Architecture →</div>
            <div className="text-sm text-muted-foreground">System design overview</div>
          </Link>
          <Link
            href="/docs/fraud-platform/getting-started"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Getting Started →</div>
            <div className="text-sm text-muted-foreground">Quick start guide</div>
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
}
