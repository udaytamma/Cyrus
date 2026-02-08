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

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-gradient-to-br from-blue-500/10 to-transparent p-4">
            <div className="text-2xl mb-2">&#128051;</div>
            <div className="font-semibold">Docker</div>
            <div className="text-xs text-muted-foreground">Docker and Docker Compose</div>
          </div>
          <div className="rounded-lg border border-border bg-gradient-to-br from-green-500/10 to-transparent p-4">
            <div className="text-2xl mb-2">&#128013;</div>
            <div className="font-semibold">Python 3.11+</div>
            <div className="text-xs text-muted-foreground">For dashboard</div>
          </div>
          <div className="rounded-lg border border-border bg-gradient-to-br from-orange-500/10 to-transparent p-4">
            <div className="text-2xl mb-2">&#128196;</div>
            <div className="font-semibold">Git</div>
            <div className="text-xs text-muted-foreground">Version control</div>
          </div>
        </div>

        <h2>Quick Start</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                <span className="font-semibold">Clone and Setup</span>
              </div>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
{`git clone https://github.com/udaytamma/FraudDetection.git
cd FraudDetection

# Copy environment template
cp .env.example .env`}
            </pre>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                <span className="font-semibold">Start Infrastructure</span>
              </div>
            </div>
            <div className="p-4">
              <pre className="rounded bg-muted p-3 text-sm overflow-x-auto mb-3">
{`docker-compose up -d`}
              </pre>
              <p className="text-sm text-muted-foreground mb-2">This starts:</p>
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="rounded bg-muted/50 p-2 text-xs">
                  <span className="font-semibold">Redis</span> (port 6379)
                  <div className="text-muted-foreground">Velocity counters</div>
                </div>
                <div className="rounded bg-muted/50 p-2 text-xs">
                  <span className="font-semibold">PostgreSQL</span> (port 5432)
                  <div className="text-muted-foreground">Evidence storage</div>
                </div>
                <div className="rounded bg-muted/50 p-2 text-xs">
                  <span className="font-semibold">Prometheus</span> (port 9090)
                  <div className="text-muted-foreground">Metrics collection</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
                <span className="font-semibold">Start the API</span>
              </div>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
{`# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the API
uvicorn src.api.main:app --reload --port 8000`}
            </pre>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">4</span>
                <span className="font-semibold">Verify Installation</span>
              </div>
            </div>
            <div className="p-4">
              <pre className="rounded bg-muted p-3 text-sm overflow-x-auto mb-3">
{`curl http://localhost:8000/health`}
              </pre>
              <div className="rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/5 to-transparent p-3">
                <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Expected Response</div>
                <pre className="text-xs overflow-x-auto">
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
            </div>
          </div>
        </div>

        <h2>Your First Payment Fraud Check</h2>

        <p>Send a test SIM activation transaction:</p>

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
        </div>

        <div className="not-prose my-4 rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/5 to-transparent p-4">
          <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">Response</div>
          <pre className="text-xs overflow-x-auto">
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
  "policy_version": "1.0.0"
}`}
          </pre>
        </div>

        <h2>Test Attack Scenarios</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">&#128179;</span>
              <span className="font-semibold text-red-600 dark:text-red-400">Card Testing Attack (Small Topups)</span>
            </div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto mb-2">
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
            <div className="text-xs">
              <span className="font-semibold">Expected:</span>{" "}
              <code className="rounded bg-orange-500/20 px-1.5 py-0.5 text-orange-600 dark:text-orange-400">REVIEW</code> or{" "}
              <code className="rounded bg-red-500/20 px-1.5 py-0.5 text-red-600 dark:text-red-400">BLOCK</code> with card_testing signal
            </div>
          </div>

          <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">&#129302;</span>
              <span className="font-semibold text-red-600 dark:text-red-400">SIM Farm Attack (Emulator)</span>
            </div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto mb-2">
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
            <div className="text-xs">
              <span className="font-semibold">Expected:</span>{" "}
              <code className="rounded bg-red-500/20 px-1.5 py-0.5 text-red-600 dark:text-red-400">BLOCK</code> with bot_emulator signal (SIM farm indicator)
            </div>
          </div>
        </div>

        <h2>Start the Dashboard</h2>

        <p>For visual testing with the demo dashboard:</p>

        <div className="not-prose my-4 rounded-lg border border-border bg-gradient-to-r from-purple-500/5 to-transparent p-4">
          <pre className="rounded bg-muted p-3 text-sm overflow-x-auto mb-2">
{`streamlit run dashboard.py --server.port 8501`}
          </pre>
          <p className="text-sm text-muted-foreground">
            Open <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://localhost:8501</a> to access the interactive testing interface.
          </p>
        </div>

        <h2>Service Ports Summary</h2>

        <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Service</th>
                <th className="px-4 py-3 text-left font-semibold">Port</th>
                <th className="px-4 py-3 text-left font-semibold">URL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Fraud API</td>
                <td className="px-4 py-3 font-mono text-sm">8000</td>
                <td className="px-4 py-3"><a href="http://localhost:8000" className="text-primary hover:underline">http://localhost:8000</a></td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Dashboard</td>
                <td className="px-4 py-3 font-mono text-sm">8501</td>
                <td className="px-4 py-3"><a href="http://localhost:8501" className="text-primary hover:underline">http://localhost:8501</a></td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Redis</td>
                <td className="px-4 py-3 font-mono text-sm">6379</td>
                <td className="px-4 py-3 text-muted-foreground">localhost:6379</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">PostgreSQL</td>
                <td className="px-4 py-3 font-mono text-sm">5432</td>
                <td className="px-4 py-3 text-muted-foreground">localhost:5432</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Prometheus</td>
                <td className="px-4 py-3 font-mono text-sm">9090</td>
                <td className="px-4 py-3"><a href="http://localhost:9090" className="text-primary hover:underline">http://localhost:9090</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Next Steps</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <Link
            href="/docs/fraud-platform/architecture"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Architecture →</div>
            <div className="text-sm text-muted-foreground">Understand the system design</div>
          </Link>
          <Link
            href="/docs/fraud-platform/api-reference"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">API Reference →</div>
            <div className="text-sm text-muted-foreground">Complete endpoint documentation</div>
          </Link>
          <Link
            href="/docs/fraud-platform/demo-dashboard"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Demo Dashboard →</div>
            <div className="text-sm text-muted-foreground">Interactive testing guide</div>
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
}
