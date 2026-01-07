import Link from "next/link";
import { DocsLayout } from "@/components/DocsLayout";

export const metadata = {
  title: "Getting Started | Fraud Detection Platform",
  description: "Get the fraud detection platform running locally in under 5 minutes.",
};

export default function GettingStartedPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Getting Started</h1>

        <p className="lead">
          Get the fraud detection platform running locally in under 5 minutes.
        </p>

        <h2>Prerequisites</h2>

        <ul>
          <li>Docker and Docker Compose</li>
          <li>Python 3.11+ (for dashboard)</li>
          <li>Git</li>
        </ul>

        <h2>Quick Start</h2>

        <h3>1. Clone and Setup</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`git clone https://github.com/udaytamma/FraudDetection.git
cd FraudDetection

# Copy environment template
cp .env.example .env`}
        </pre>

        <h3>2. Start Infrastructure</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`docker-compose up -d`}
        </pre>

        <p>This starts:</p>
        <ul>
          <li>Redis (port 6379) - Velocity counters</li>
          <li>PostgreSQL (port 5432) - Evidence storage</li>
          <li>Prometheus (port 9090) - Metrics collection</li>
        </ul>

        <h3>3. Start the API</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the API
uvicorn src.api.main:app --reload --port 8000`}
        </pre>

        <h3>4. Verify Installation</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Health check
curl http://localhost:8000/health

# Expected response:
{
  "status": "healthy",
  "redis": "connected",
  "postgres": "connected",
  "policy_version": "1.0"
}`}
        </pre>

        <h2>Your First Payment Fraud Check</h2>

        <p>Send a test SIM activation transaction:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`curl -X POST http://localhost:8000/decide \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id": "txn_001",
    "idempotency_key": "idem_001",
    "amount_cents": 2500,
    "currency": "USD",
    "service_id": "mobile_prepaid_001",
    "service_type": "mobile",
    "event_subtype": "sim_activation",
    "card_token": "card_abc",
    "user_id": "subscriber_456",
    "phone_number": "15551234567",
    "imei": "353456789012345"
  }'`}
        </pre>

        <p><strong>Response:</strong></p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`{
  "transaction_id": "txn_001",
  "decision": "ALLOW",
  "scores": {
    "risk_score": 0.15,
    "criminal_score": 0.0,
    "friendly_fraud_score": 0.0,
    "card_testing_score": 0.0,
    "velocity_score": 0.0
  },
  "reasons": [],
  "processing_time_ms": 6.07,
  "policy_version": "2.0.0"
}`}
        </pre>

        <h2>Test Attack Scenarios</h2>

        <h3>Card Testing Attack (Small Topups)</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`curl -X POST http://localhost:8000/decide \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id": "txn_002",
    "idempotency_key": "idem_002",
    "amount_cents": 500,
    "currency": "USD",
    "service_id": "mobile_prepaid_001",
    "service_type": "mobile",
    "event_subtype": "topup",
    "card_token": "card_testing_attacker",
    "user_id": "attacker_001",
    "geo": {
      "ip_address": "45.33.32.156",
      "is_datacenter": true
    }
  }'`}
        </pre>

        <p><strong>Expected:</strong> <code>REVIEW</code> or <code>BLOCK</code> decision with card_testing signal.</p>

        <h3>SIM Farm Attack (Emulator)</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`curl -X POST http://localhost:8000/decide \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id": "txn_003",
    "idempotency_key": "idem_003",
    "amount_cents": 0,
    "currency": "USD",
    "service_id": "mobile_prepaid_001",
    "service_type": "mobile",
    "event_subtype": "sim_activation",
    "card_token": "card_sim_farm",
    "user_id": "sim_farmer",
    "device": {
      "device_id": "emulator_001",
      "is_emulator": true
    },
    "geo": {
      "ip_address": "10.0.0.1",
      "is_tor": true
    }
  }'`}
        </pre>

        <p><strong>Expected:</strong> <code>BLOCK</code> decision with bot_emulator signal (SIM farm indicator).</p>

        <h2>Start the Dashboard</h2>

        <p>For visual testing with the demo dashboard:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`streamlit run dashboard.py --server.port 8501`}
        </pre>

        <p>Open <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer">http://localhost:8501</a> to access the interactive testing interface.</p>

        <h2>Service Ports Summary</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Service</th>
                <th className="px-4 py-3 text-left font-semibold">Port</th>
                <th className="px-4 py-3 text-left font-semibold">URL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Fraud API</td>
                <td className="px-4 py-3">8000</td>
                <td className="px-4 py-3">http://localhost:8000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Dashboard</td>
                <td className="px-4 py-3">8501</td>
                <td className="px-4 py-3">http://localhost:8501</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Redis</td>
                <td className="px-4 py-3">6379</td>
                <td className="px-4 py-3">localhost:6379</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">PostgreSQL</td>
                <td className="px-4 py-3">5432</td>
                <td className="px-4 py-3">localhost:5432</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Prometheus</td>
                <td className="px-4 py-3">9090</td>
                <td className="px-4 py-3">http://localhost:9090</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Next Steps</h2>

        <ul>
          <li><Link href="/docs/fraud-platform/architecture" className="text-primary hover:underline">Architecture</Link> - Understand the system design</li>
          <li><Link href="/docs/fraud-platform/api-reference" className="text-primary hover:underline">API Reference</Link> - Complete endpoint documentation</li>
          <li><Link href="/docs/fraud-platform/demo-dashboard" className="text-primary hover:underline">Demo Dashboard</Link> - Interactive testing guide</li>
        </ul>
      </article>
    </DocsLayout>
  );
}
