import { DocsLayout } from "@/components/DocsLayout";

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

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`http://localhost:8000`}
        </pre>

        <h2>Authentication</h2>

        <p>
          Currently, the API does not require authentication for local development. Production deployments should implement API key or OAuth authentication.
        </p>

        <hr />

        <h2>Endpoints</h2>

        <h3>POST /decide</h3>

        <p>Make a fraud decision for a transaction.</p>

        <p><strong>Request:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
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
    "device_fingerprint": "device_abc",
    "ip_address": "192.168.1.100",
    "timestamp": "2026-01-04T15:30:00Z"
  }'`}
        </pre>

        <p><strong>Request Body:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
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
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">transaction_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">Unique transaction identifier</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">idempotency_key</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">Key for duplicate detection</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">amount_cents</td>
                <td className="px-4 py-3">int</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">Transaction amount in cents</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">currency</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">ISO 4217 currency code</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">service_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">Telco service identifier</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">service_type</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3"><code>mobile</code> or <code>broadband</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">event_subtype</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3"><code>sim_activation</code>, <code>topup</code>, <code>device_upgrade</code>, <code>sim_swap</code>, <code>international_enable</code>, <code>equipment_purchase</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">card_token</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">Tokenized card reference</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">user_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">Subscriber identifier</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">phone_number</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">Subscriber phone number (telco)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">imei</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">Device IMEI (telco mobile)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">sim_iccid</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">SIM card ICCID (telco mobile)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">device_fingerprint</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">Device identifier</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">ip_address</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">Subscriber IP address</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">timestamp</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Yes</td>
                <td className="px-4 py-3">ISO 8601 timestamp</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">device_emulator</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">True if device is emulated (SIM farm indicator)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">device_rooted</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">True if device is rooted/jailbroken</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">ip_datacenter</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">True if IP is datacenter/cloud</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">ip_tor</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">True if IP is Tor exit node</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">ip_vpn</td>
                <td className="px-4 py-3">bool</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">True if IP is known VPN</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">card_country</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">Card issuing country (ISO 3166)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">ip_country</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">IP geolocation country</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Response:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "transaction_id": "txn_abc123",
  "decision": "ALLOW",
  "scores": {
    "overall_risk": 0.15,
    "criminal_score": 0.10,
    "friendly_fraud_score": 0.08,
    "bot_score": 0.02
  },
  "signals": [],
  "latency_ms": 7.8,
  "policy_version": "1.0",
  "evidence_id": "evt_550e8400-e29b-41d4-a716-446655440000"
}`}
        </pre>

        <p><strong>Response Fields:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Field</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">transaction_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Echo of request transaction ID</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">decision</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3"><code>ALLOW</code>, <code>FRICTION</code>, <code>REVIEW</code>, or <code>BLOCK</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">scores.overall_risk</td>
                <td className="px-4 py-3">float</td>
                <td className="px-4 py-3">Combined risk score (0-1)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">scores.criminal_score</td>
                <td className="px-4 py-3">float</td>
                <td className="px-4 py-3">Criminal fraud probability (0-1)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">scores.friendly_fraud_score</td>
                <td className="px-4 py-3">float</td>
                <td className="px-4 py-3">Friendly fraud probability (0-1)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">scores.bot_score</td>
                <td className="px-4 py-3">float</td>
                <td className="px-4 py-3">Bot/automation probability (0-1)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">signals</td>
                <td className="px-4 py-3">array</td>
                <td className="px-4 py-3">List of triggered detection signals</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">latency_ms</td>
                <td className="px-4 py-3">float</td>
                <td className="px-4 py-3">Processing time in milliseconds</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">policy_version</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">Policy version used for decision</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">evidence_id</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">UUID of stored evidence record</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Decision Values:</strong></p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Decision</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">ALLOW</td>
                <td className="px-4 py-3">Low risk, approve transaction</td>
                <td className="px-4 py-3">Process normally</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">FRICTION</td>
                <td className="px-4 py-3">Medium risk, needs verification</td>
                <td className="px-4 py-3">Request 3DS/OTP</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">REVIEW</td>
                <td className="px-4 py-3">High risk, needs manual review</td>
                <td className="px-4 py-3">Queue for analyst</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">BLOCK</td>
                <td className="px-4 py-3">Very high risk, decline</td>
                <td className="px-4 py-3">Reject transaction</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h3>GET /health</h3>

        <p>Check system health and component status.</p>

        <p><strong>Request:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`curl http://localhost:8000/health`}
        </pre>

        <p><strong>Response:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "status": "healthy",
  "redis": "connected",
  "postgres": "connected",
  "policy_loaded": true,
  "policy_version": "1.0",
  "uptime_seconds": 3600
}`}
        </pre>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Field</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">status</td>
                <td className="px-4 py-3">Overall health: <code>healthy</code>, <code>degraded</code>, <code>unhealthy</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">redis</td>
                <td className="px-4 py-3">Redis connection status</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">postgres</td>
                <td className="px-4 py-3">PostgreSQL connection status</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">policy_loaded</td>
                <td className="px-4 py-3">Whether policy is loaded</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">policy_version</td>
                <td className="px-4 py-3">Current policy version</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-sm">uptime_seconds</td>
                <td className="px-4 py-3">Seconds since API started</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h3>GET /policy/version</h3>

        <p>Get current policy version and metadata.</p>

        <p><strong>Request:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`curl http://localhost:8000/policy/version`}
        </pre>

        <p><strong>Response:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "version": "1.0",
  "loaded_at": "2026-01-04T10:00:00Z",
  "rules_count": 5,
  "thresholds": {
    "block": 80,
    "review": 60,
    "friction": 40
  }
}`}
        </pre>

        <hr />

        <h3>POST /policy/reload</h3>

        <p>Hot-reload policy configuration without restart.</p>

        <p><strong>Request:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`curl -X POST http://localhost:8000/policy/reload`}
        </pre>

        <p><strong>Response:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "success": true,
  "previous_version": "1.0",
  "new_version": "1.1",
  "loaded_at": "2026-01-04T15:45:00Z"
}`}
        </pre>

        <hr />

        <h3>GET /metrics</h3>

        <p>Prometheus metrics endpoint.</p>

        <p><strong>Request:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`curl http://localhost:8000/metrics`}
        </pre>

        <p><strong>Response (text/plain):</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# HELP fraud_decisions_total Total fraud decisions by type
# TYPE fraud_decisions_total counter
fraud_decisions_total{decision="ALLOW"} 1234
fraud_decisions_total{decision="FRICTION"} 56
fraud_decisions_total{decision="REVIEW"} 23
fraud_decisions_total{decision="BLOCK"} 12

# HELP fraud_decision_latency_seconds Decision latency in seconds
# TYPE fraud_decision_latency_seconds histogram
fraud_decision_latency_seconds_bucket{le="0.005"} 800
fraud_decision_latency_seconds_bucket{le="0.01"} 1200
fraud_decision_latency_seconds_bucket{le="0.05"} 1320

# HELP fraud_detector_triggered_total Detector trigger counts
# TYPE fraud_detector_triggered_total counter
fraud_detector_triggered_total{detector="card_testing"} 45
fraud_detector_triggered_total{detector="velocity"} 78
fraud_detector_triggered_total{detector="geo_anomaly"} 23
fraud_detector_triggered_total{detector="bot"} 12
fraud_detector_triggered_total{detector="friendly_fraud"} 34`}
        </pre>

        <hr />

        <h2>Error Responses</h2>

        <h3>400 Bad Request</h3>

        <p>Invalid request payload.</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "error": "validation_error",
  "message": "transaction_id is required",
  "details": {
    "field": "transaction_id",
    "issue": "missing"
  }
}`}
        </pre>

        <h3>500 Internal Server Error</h3>

        <p>Server-side error.</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "error": "internal_error",
  "message": "Redis connection failed",
  "request_id": "req_abc123"
}`}
        </pre>

        <hr />

        <h2>Rate Limits</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Environment</th>
                <th className="px-4 py-3 text-left font-semibold">Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Development</td>
                <td className="px-4 py-3">Unlimited</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Production</td>
                <td className="px-4 py-3">10,000 req/min (configurable)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Idempotency</h2>

        <p>
          The <code>/decide</code> endpoint is idempotent. Sending the same <code>transaction_id</code> multiple times returns the cached result without re-processing:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# First call - processes transaction
curl -X POST http://localhost:8000/decide -d '{"transaction_id": "txn_001", ...}'
# Response: {"decision": "ALLOW", "latency_ms": 8.2, ...}

# Second call - returns cached result
curl -X POST http://localhost:8000/decide -d '{"transaction_id": "txn_001", ...}'
# Response: {"decision": "ALLOW", "latency_ms": 0.3, "cached": true, ...}`}
        </pre>

        <p>This prevents duplicate charges or inconsistent decisions on network retries.</p>
      </article>
    </DocsLayout>
  );
}
