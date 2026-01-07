"use client";

/**
 * Part 6: Sprint-1 Implementation Guide
 * Working MVP with FastAPI, Redis velocity counters, PostgreSQL evidence storage
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function Part6Page() {
  return (
    <ThinkingLayout
      title="Part 6: Sprint-1 Implementation"
      description="Working MVP with FastAPI, Redis velocity counters, PostgreSQL evidence storage"
      currentSection="part-6"
    >
      <Link
        href="/nebula/fraud-detection-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Design Docs
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="text-4xl font-bold text-primary/20">6</span>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Sprint-1 Implementation Guide</h1>
          <p className="text-muted-foreground mt-1">
            A complete, working fraud detection MVP ready for local development and testing.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Overview</h2>
        <p className="text-muted-foreground mb-4">Sprint-1 delivers a functional fraud detection system with:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Real-time decision API</li>
          <li>Rule-based scoring (ML deferred to Phase 2)</li>
          <li>Velocity-based detection</li>
          <li>Configurable policy engine</li>
          <li>Evidence capture</li>
          <li>Prometheus metrics</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          The implementation follows a smaller scope approach: FastAPI + Redis + PostgreSQL, without Kafka/Flink complexity for the MVP.
        </p>
      </section>

      {/* What's Included */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">What&apos;s Included</h2>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Core Components</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Component</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Decision API</td>
                <td className="p-3 border border-border text-muted-foreground">FastAPI endpoint for fraud decisions</td>
                <td className="p-3 border border-border text-green-600">Complete</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Feature Store</td>
                <td className="p-3 border border-border text-muted-foreground">Redis-based velocity counters</td>
                <td className="p-3 border border-border text-green-600">Complete</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Detection Engine</td>
                <td className="p-3 border border-border text-muted-foreground">Card testing, velocity, geo, bot detection</td>
                <td className="p-3 border border-border text-green-600">Complete</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Risk Scoring</td>
                <td className="p-3 border border-border text-muted-foreground">Rule-based criminal + friendly fraud scoring</td>
                <td className="p-3 border border-border text-green-600">Complete</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Policy Engine</td>
                <td className="p-3 border border-border text-muted-foreground">YAML-configurable rules and thresholds</td>
                <td className="p-3 border border-border text-green-600">Complete</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Evidence Vault</td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL-based immutable storage</td>
                <td className="p-3 border border-border text-green-600">Complete</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Metrics</td>
                <td className="p-3 border border-border text-muted-foreground">Prometheus metrics for monitoring</td>
                <td className="p-3 border border-border text-green-600">Complete</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Tests</td>
                <td className="p-3 border border-border text-muted-foreground">Unit and integration tests</td>
                <td className="p-3 border border-border text-green-600">Complete</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Infrastructure</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Service</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Purpose</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Port</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">URL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Redis</td>
                <td className="p-3 border border-border text-muted-foreground">Velocity counters, entity profiles</td>
                <td className="p-3 border border-border">6379</td>
                <td className="p-3 border border-border text-muted-foreground">localhost:6379</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">PostgreSQL</td>
                <td className="p-3 border border-border text-muted-foreground">Evidence storage, chargebacks</td>
                <td className="p-3 border border-border">5432</td>
                <td className="p-3 border border-border text-muted-foreground">localhost:5432</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Prometheus</td>
                <td className="p-3 border border-border text-muted-foreground">Metrics collection</td>
                <td className="p-3 border border-border">9090</td>
                <td className="p-3 border border-border text-muted-foreground">http://localhost:9090</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Fraud API</td>
                <td className="p-3 border border-border text-muted-foreground">Decision endpoint</td>
                <td className="p-3 border border-border">8000</td>
                <td className="p-3 border border-border text-muted-foreground">http://localhost:8000</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Demo Dashboard</td>
                <td className="p-3 border border-border text-muted-foreground">Visual testing interface</td>
                <td className="p-3 border border-border">8501</td>
                <td className="p-3 border border-border text-muted-foreground">http://localhost:8501</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Project Structure */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Project Structure</h2>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`FraudDetection/
├── docker-compose.yml          # Local infrastructure
├── requirements.txt            # Python dependencies
├── dashboard.py                # Streamlit demo dashboard
├── .env.example               # Environment template
├── config/
│   ├── policy.yaml            # Policy configuration
│   └── prometheus.yml         # Metrics config
├── scripts/
│   └── init_db.sql            # Database schema
├── src/
│   ├── api/                   # FastAPI application
│   ├── config/                # Settings management
│   ├── schemas/               # Data models
│   ├── features/              # Velocity counters
│   ├── detection/             # Fraud detectors
│   ├── scoring/               # Risk scoring
│   ├── policy/                # Policy engine
│   ├── evidence/              # Evidence capture
│   └── metrics/               # Prometheus metrics
└── tests/                     # Test suite`}</pre>
      </section>

      {/* Fraud Detection Scenarios */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Fraud Detection Scenarios</h2>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Criminal Fraud Detection</h3>
        <p className="text-muted-foreground mb-4">The system detects the following criminal fraud patterns:</p>

        <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-2">Card Testing Attacks</h4>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
            <li>Rapid small transactions on same card</li>
            <li>High decline rates (80%+ in 10 minutes)</li>
            <li>Multiple cards from single device</li>
            <li>Sequential BIN probing</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2"><strong>Example trigger:</strong> A card with 5+ attempts in 10 minutes with 80%+ decline rate.</p>
        </div>

        <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-2">Velocity Attacks</h4>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
            <li>Card used more than 10 times per hour</li>
            <li>Device used with 5+ different cards in 24 hours</li>
            <li>IP address used with 10+ cards in 1 hour</li>
            <li>User spending exceeds normal limits</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2"><strong>Example trigger:</strong> A device that&apos;s seen 5+ distinct cards in a day.</p>
        </div>

        <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-2">Geographic Anomalies</h4>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
            <li>Transaction from different country than card</li>
            <li>Transaction from known high-risk countries</li>
            <li>Transaction from datacenter IP (non-residential)</li>
            <li>Transaction from Tor exit node</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2"><strong>Example trigger:</strong> Card issued in US, transaction from IP in Nigeria.</p>
        </div>

        <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-2">Bot/Automation Detection</h4>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 text-sm">
            <li>Transaction from emulated device</li>
            <li>Transaction from rooted/jailbroken device</li>
            <li>Transaction from cloud/datacenter IP</li>
            <li>Suspicious device fingerprint patterns</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2"><strong>Example trigger:</strong> Device fingerprint indicates Android emulator.</p>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Friendly Fraud Detection</h3>
        <p className="text-muted-foreground mb-4">The system also scores friendly fraud risk:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Users with high historical chargeback rates (3%+)</li>
          <li>Users with 2+ chargebacks in 90 days</li>
          <li>High refund frequency (5+ in 90 days)</li>
          <li>Guest checkout for high-value transactions</li>
        </ul>
      </section>

      {/* Decision Flow */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Decision Flow</h2>
        <p className="text-muted-foreground mb-4">When a transaction arrives, the system:</p>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Checks idempotency</strong> - Returns cached result if already processed</li>
          <li><strong className="text-foreground">Computes features</strong> - Retrieves velocity counters and entity profiles</li>
          <li><strong className="text-foreground">Runs detection</strong> - All detectors run in parallel</li>
          <li><strong className="text-foreground">Calculates scores</strong> - Combines detector signals into risk scores</li>
          <li><strong className="text-foreground">Evaluates policy</strong> - Applies rules and thresholds</li>
          <li><strong className="text-foreground">Returns decision</strong> - ALLOW, FRICTION, REVIEW, or BLOCK</li>
          <li><strong className="text-foreground">Captures evidence</strong> - Stores immutable record for disputes</li>
          <li><strong className="text-foreground">Updates profiles</strong> - Refreshes entity velocity counters</li>
        </ol>
      </section>

      {/* Policy Configuration */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Policy Configuration</h2>
        <p className="text-muted-foreground mb-4">The policy is configured via YAML and can be hot-reloaded without restarting.</p>

        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2">Policy Settings GUI (v1.1)</h4>
          <p className="text-sm text-muted-foreground mb-2">A visual interface for managing policies is available in the dashboard&apos;s &quot;Policy Settings&quot; tab:</p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
            <li><strong className="text-foreground">Thresholds</strong>: Adjust friction/review/block thresholds with validation</li>
            <li><strong className="text-foreground">Rules</strong>: Add, edit, or delete detection rules</li>
            <li><strong className="text-foreground">Blocklists</strong>: Manage blocked cards, devices, IPs, and users</li>
            <li><strong className="text-foreground">Allowlists</strong>: Manage trusted cards, users, and services</li>
            <li><strong className="text-foreground">Version History</strong>: View change history and rollback if needed</li>
          </ul>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Score Thresholds</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Score Type</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Block</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Review</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Friction</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Overall Risk</td>
                <td className="p-3 border border-border text-muted-foreground">90%+</td>
                <td className="p-3 border border-border text-muted-foreground">70%+</td>
                <td className="p-3 border border-border text-muted-foreground">50%+</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Criminal</td>
                <td className="p-3 border border-border text-muted-foreground">85%+</td>
                <td className="p-3 border border-border text-muted-foreground">65%+</td>
                <td className="p-3 border border-border text-muted-foreground">45%+</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Friendly</td>
                <td className="p-3 border border-border text-muted-foreground">95%+</td>
                <td className="p-3 border border-border text-muted-foreground">60%+</td>
                <td className="p-3 border border-border text-muted-foreground">40%+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Built-in Rules</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Rule</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Condition</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Emulator Block</td>
                <td className="p-3 border border-border text-muted-foreground">Device is emulator</td>
                <td className="p-3 border border-border text-red-600">BLOCK</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Tor Block</td>
                <td className="p-3 border border-border text-muted-foreground">IP is Tor exit</td>
                <td className="p-3 border border-border text-red-600">BLOCK</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Datacenter Review</td>
                <td className="p-3 border border-border text-muted-foreground">IP is datacenter</td>
                <td className="p-3 border border-border text-orange-600">REVIEW</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">High Value New Account</td>
                <td className="p-3 border border-border text-muted-foreground">Amount &gt;= $1000 + new account</td>
                <td className="p-3 border border-border text-yellow-600">FRICTION (3DS)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">High Value New Card</td>
                <td className="p-3 border border-border text-muted-foreground">Amount &gt;= $500 + new card</td>
                <td className="p-3 border border-border text-yellow-600">FRICTION (3DS)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Evidence Capture */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Evidence Capture</h2>
        <p className="text-muted-foreground mb-4">Every decision is captured with:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Transaction details (amount, service, event_subtype, timestamp)</li>
          <li>Entity identifiers (card token, device ID, IP, user)</li>
          <li>All computed features (velocity counters, entity features)</li>
          <li>Risk scores and confidence</li>
          <li>Decision and all triggered reasons</li>
          <li>Device fingerprint and geo data</li>
          <li>Verification results (AVS, CVV, 3DS)</li>
          <li><strong className="text-foreground">Policy version ID</strong> (v1.1) - Links to exact policy version used for decision</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          Evidence is immutable and linked by transaction ID for dispute representment.
        </p>
      </section>

      {/* Metrics Exposed */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Metrics Exposed</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Latency Metrics</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
              <li>End-to-end processing time (target: &lt;200ms)</li>
              <li>Feature computation time (target: &lt;50ms)</li>
              <li>Scoring time (target: &lt;25ms)</li>
              <li>Policy evaluation time</li>
            </ul>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Decision Metrics</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
              <li>Total decisions by type (ALLOW, FRICTION, REVIEW, BLOCK)</li>
              <li>Approval rate (rolling)</li>
              <li>Block rate (rolling)</li>
            </ul>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Scoring Metrics</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
              <li>Risk score distribution</li>
              <li>Criminal score distribution</li>
              <li>Friendly fraud score distribution</li>
            </ul>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">System Metrics</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
              <li>Redis operation latency</li>
              <li>PostgreSQL operation latency</li>
              <li>Cache hit/miss rates</li>
              <li>Error counts by type</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Getting Started</h2>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Prerequisites</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Python 3.11+</li>
          <li>Docker and Docker Compose</li>
          <li>Redis (or use Docker)</li>
          <li>PostgreSQL (or use Docker)</li>
        </ul>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Step 1: Start Infrastructure</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`cd /Users/omega/Projects/FraudDetection
docker-compose up -d`}</pre>
        <p className="text-sm text-muted-foreground mt-2">This starts Redis on port 6379, PostgreSQL on port 5432, Prometheus on port 9090.</p>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Step 2: Set Up Environment</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`cp .env.example .env
# Edit .env if needed`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Step 3: Install Dependencies</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`python -m venv venv
source venv/bin/activate
pip install -r requirements.txt`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Step 4: Run the API</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`uvicorn src.api.main:app --reload --port 8000`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Step 5: Run the Dashboard</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`streamlit run dashboard.py --server.port 8501`}</pre>
        <p className="text-sm text-muted-foreground mt-2">Open http://localhost:8501 for the visual demo interface.</p>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Step 6: Test a Request</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`curl -X POST http://localhost:8000/decide \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id": "txn_test_001",
    "idempotency_key": "idem_test_001",
    "amount_cents": 5000,
    "card_token": "card_abc123",
    "service_id": "mobile_prepaid_001",
    "service_type": "mobile",
    "event_subtype": "sim_activation"
  }'`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Step 7: Run Tests</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`pytest tests/ -v`}</pre>
      </section>

      {/* API Reference */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">API Reference</h2>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">POST /decide</h3>
        <p className="text-muted-foreground mb-2">Make a fraud decision for a transaction.</p>
        <p className="text-sm text-muted-foreground mb-2"><strong>Request body:</strong> PaymentEvent (see schema documentation)</p>
        <p className="text-sm text-muted-foreground mb-2"><strong>Response:</strong></p>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`{
  "transaction_id": "txn_123",
  "decision": "ALLOW",
  "scores": {
    "risk_score": 0.15,
    "criminal_score": 0.10,
    "friendly_fraud_score": 0.05
  },
  "reasons": [],
  "processing_time_ms": 45.2
}`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Other Endpoints</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">GET /health</code> - Check service health and component status</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">GET /policy/version</code> - Get current policy version and hash</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">POST /policy/reload</code> - Hot-reload policy from configuration file</li>
        </ul>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Policy Management Endpoints (v1.1)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Endpoint</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Method</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">/policy</code></td>
                <td className="p-3 border border-border">GET</td>
                <td className="p-3 border border-border text-muted-foreground">Get current active policy with full configuration</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">/policy/versions</code></td>
                <td className="p-3 border border-border">GET</td>
                <td className="p-3 border border-border text-muted-foreground">List all policy versions (most recent first)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">/policy/thresholds</code></td>
                <td className="p-3 border border-border">PUT</td>
                <td className="p-3 border border-border text-muted-foreground">Update score thresholds (validates friction &lt; review &lt; block)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">/policy/rules</code></td>
                <td className="p-3 border border-border">POST</td>
                <td className="p-3 border border-border text-muted-foreground">Add a new policy rule</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">/policy/rollback/&#123;version&#125;</code></td>
                <td className="p-3 border border-border">POST</td>
                <td className="p-3 border border-border text-muted-foreground">Rollback to a previous version (creates new version)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Redis Key Patterns */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Redis Key Patterns</h2>
        <p className="text-muted-foreground mb-4">All keys use <code className="bg-muted px-1.5 py-0.5 rounded text-xs">fraud:</code> prefix to avoid conflicts.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Pattern</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Purpose</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">TTL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">fraud:card:&#123;token&#125;:attempts</code></td>
                <td className="p-3 border border-border text-muted-foreground">Card transaction attempts</td>
                <td className="p-3 border border-border">24h</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">fraud:card:&#123;token&#125;:declines</code></td>
                <td className="p-3 border border-border text-muted-foreground">Card declines</td>
                <td className="p-3 border border-border">24h</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">fraud:device:&#123;id&#125;:cards</code></td>
                <td className="p-3 border border-border text-muted-foreground">Cards seen on device</td>
                <td className="p-3 border border-border">24h</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">fraud:ip:&#123;addr&#125;:cards</code></td>
                <td className="p-3 border border-border text-muted-foreground">Cards from IP</td>
                <td className="p-3 border border-border">24h</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">fraud:profile:card:&#123;token&#125;</code></td>
                <td className="p-3 border border-border text-muted-foreground">Card profile hash</td>
                <td className="p-3 border border-border">30d</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">fraud:idempotency:&#123;key&#125;</code></td>
                <td className="p-3 border border-border text-muted-foreground">Cached decision</td>
                <td className="p-3 border border-border">24h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's Not Included */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">What&apos;s Not Included (Phase 2)</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Machine learning models (using rule-based scoring)</li>
          <li>Kafka streaming (using direct API calls)</li>
          <li>Flink stream processing (using Redis directly)</li>
          <li>Automated representment</li>
          <li>Economic optimization UI</li>
          <li>Champion/challenger A/B testing</li>
          <li>IRSF, ATO, subscription fraud detection</li>
          <li>Telco/MSP signal integration</li>
        </ul>
      </section>

      {/* Footer */}
      <div className="p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
        <p><strong>Document Version:</strong> 1.1</p>
        <p><strong>Implementation Date:</strong> January 3, 2026</p>
        <p><strong>Last Updated:</strong> January 3, 2026 - Added policy versioning and GUI documentation</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-5"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          &larr; Previous: Testing & Monitoring
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-7"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Demo Dashboard &rarr;
        </Link>
      </div>
    </ThinkingLayout>
  );
}
