"use client";

/**
 * Part 8: Load Testing with Locust
 * Validate that the fraud detection system meets its 200ms latency SLA under production-scale load
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export default function Part8Page() {
  return (
    <ThinkingLayout
      title="Part 8: Load Testing"
      description="Validate that the fraud detection system meets its 200ms latency SLA under production-scale load"
      currentSection="part-8"
    >
      <Link
        href="/nebula/fraud-detection-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Design Docs
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="text-4xl font-bold text-primary/20">8</span>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Load Testing with Locust</h1>
          <p className="text-muted-foreground mt-1">
            Validate that the fraud detection system meets its 200ms latency SLA under production-scale load.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Overview</h2>
        <p className="text-muted-foreground mb-4">Load testing for fraud detection systems requires special consideration:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li><strong className="text-foreground">Realistic traffic patterns</strong> - Not just random requests</li>
          <li><strong className="text-foreground">Velocity counter behavior</strong> - Same entities appearing multiple times</li>
          <li><strong className="text-foreground">Fraud injection</strong> - Verify detection still works under load</li>
          <li><strong className="text-foreground">Infrastructure limits</strong> - Redis connections, PostgreSQL pool, API workers</li>
        </ul>
      </section>

      {/* Key Metrics */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Key Metrics</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Metric</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Target</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Critical Threshold</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">P50 Latency</td>
                <td className="p-3 border border-border text-muted-foreground">50ms</td>
                <td className="p-3 border border-border text-muted-foreground">-</td>
                <td className="p-3 border border-border text-muted-foreground">Typical user experience</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">P95 Latency</td>
                <td className="p-3 border border-border text-muted-foreground">150ms</td>
                <td className="p-3 border border-border text-muted-foreground">-</td>
                <td className="p-3 border border-border text-muted-foreground">Most users acceptable</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">P99 Latency</td>
                <td className="p-3 border border-border text-muted-foreground">200ms</td>
                <td className="p-3 border border-border text-red-600 font-semibold">Hard limit</td>
                <td className="p-3 border border-border text-muted-foreground">SLA commitment</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Throughput</td>
                <td className="p-3 border border-border text-muted-foreground">260 RPS baseline (50 users)</td>
                <td className="p-3 border border-border text-muted-foreground">Depends on capacity</td>
                <td className="p-3 border border-border text-muted-foreground">Production readiness</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Error Rate</td>
                <td className="p-3 border border-border text-muted-foreground">0.1%</td>
                <td className="p-3 border border-border text-red-600 font-semibold">1%</td>
                <td className="p-3 border border-border text-muted-foreground">System reliability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Latency Breakdown Budget</h3>
        <MermaidDiagram
          chart={`flowchart LR
    subgraph Budget["Total Budget: 200ms"]
        direction TB
        Network["Network overhead<br/>~10ms"]
        Features["Feature computation<br/>~50ms<br/>(Redis velocity lookups)"]
        Scoring["Risk scoring<br/>~20ms<br/>(rule evaluation)"]
        Policy["Policy evaluation<br/>~10ms"]
        Evidence["Evidence capture<br/>~30ms<br/>(async, but still in path)"]
        Buffer["Buffer<br/>~80ms"]
    end

    Network --> Features --> Scoring --> Policy --> Evidence --> Buffer

    style Network fill:#e0e7ff,stroke:#6366f1
    style Features fill:#fee2e2,stroke:#ef4444
    style Scoring fill:#fef3c7,stroke:#f59e0b
    style Policy fill:#fce7f3,stroke:#ec4899
    style Evidence fill:#d1fae5,stroke:#10b981
    style Buffer fill:#e0e7ff,stroke:#6366f1`}
        />
      </section>

      {/* Why Locust */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Why Locust?</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Tool</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Pros</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Cons</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold text-primary">Locust</td>
                <td className="p-3 border border-border text-muted-foreground">Python-native, scriptable, web UI</td>
                <td className="p-3 border border-border text-muted-foreground">Single-threaded per worker</td>
                <td className="p-3 border border-border text-muted-foreground">Complex scenarios</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">k6</td>
                <td className="p-3 border border-border text-muted-foreground">Modern, good metrics</td>
                <td className="p-3 border border-border text-muted-foreground">JavaScript only</td>
                <td className="p-3 border border-border text-muted-foreground">Simple load patterns</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">JMeter</td>
                <td className="p-3 border border-border text-muted-foreground">Feature-rich, GUI</td>
                <td className="p-3 border border-border text-muted-foreground">Heavy, XML config</td>
                <td className="p-3 border border-border text-muted-foreground">Enterprise teams</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">wrk</td>
                <td className="p-3 border border-border text-muted-foreground">Extremely fast</td>
                <td className="p-3 border border-border text-muted-foreground">Limited scripting</td>
                <td className="p-3 border border-border text-muted-foreground">Raw throughput tests</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground"><strong className="text-foreground">Locust wins for fraud detection</strong> because: Python matches our stack, easy to script realistic fraud patterns, built-in web dashboard for real-time monitoring, distributed testing support for scale.</p>
      </section>

      {/* Key Considerations */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Key Considerations</h2>

        <div className="grid gap-6">
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">1. Realistic Data Distribution</h4>
            <pre className="bg-muted/50 rounded-lg p-3 text-xs overflow-x-auto font-mono text-muted-foreground">{`AMOUNT_DISTRIBUTION = {
    (1, 1000): 0.40,      # $0.01-$10.00 (40%)
    (1001, 5000): 0.30,   # $10.01-$50.00 (30%)
    (5001, 20000): 0.20,  # $50.01-$200.00 (20%)
    (20001, 100000): 0.08,# $200.01-$1000.00 (8%)
    (100001, 500000): 0.02# $1000.01-$5000.00 (2%)
}`}</pre>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">2. Velocity Patterns (Critical for Fraud Detection)</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Card testing attack:</strong> Same card_token, rapid requests (10+ in 1 minute)</li>
              <li><strong className="text-foreground">Device fraud ring:</strong> Same device_id, different cards</li>
              <li><strong className="text-foreground">Normal user:</strong> 1-3 transactions per session</li>
            </ul>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">3. Entity Cardinality</h4>
            <pre className="bg-muted/50 rounded-lg p-3 text-xs overflow-x-auto font-mono text-muted-foreground">{`CARDS_POOL_SIZE = 10000      # Unique card tokens
DEVICES_POOL_SIZE = 5000     # Unique device IDs
IPS_POOL_SIZE = 2000         # Unique IPs
USERS_POOL_SIZE = 8000       # Unique subscriber IDs
SERVICES_POOL_SIZE = 500     # Unique telco services`}</pre>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">4. Traffic Mix with Fraud Injection</h4>
            <pre className="bg-muted/50 rounded-lg p-3 text-xs overflow-x-auto font-mono text-muted-foreground">{`TRAFFIC_MIX = {
    "legitimate": 0.95,        # Normal transactions
    "card_testing": 0.02,      # Rapid same-card attempts
    "fraud_ring": 0.01,        # Same device, different cards
    "geo_anomaly": 0.01,       # Impossible travel
    "high_value_new_user": 0.01 # Friendly fraud pattern
}`}</pre>
          </div>
        </div>
      </section>

      {/* Test Scenarios */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Test Scenarios</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Scenario</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Pattern</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Steady State</td>
                <td className="p-3 border border-border text-muted-foreground">Constant 1000 RPS for 10 min</td>
                <td className="p-3 border border-border text-muted-foreground">Baseline performance</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Ramp Up</td>
                <td className="p-3 border border-border text-muted-foreground">0 to 5000 RPS over 5 min</td>
                <td className="p-3 border border-border text-muted-foreground">Find saturation point</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Spike</td>
                <td className="p-3 border border-border text-muted-foreground">500 to 3000 to 500 RPS</td>
                <td className="p-3 border border-border text-muted-foreground">Burst handling</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Stress</td>
                <td className="p-3 border border-border text-muted-foreground">Increase until failure</td>
                <td className="p-3 border border-border text-muted-foreground">Find breaking point</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Soak</td>
                <td className="p-3 border border-border text-muted-foreground">70% capacity for 1 hour</td>
                <td className="p-3 border border-border text-muted-foreground">Memory leaks, connection leaks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Running Load Tests */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Running Load Tests</h2>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Installation</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`cd /Users/omega/Projects/FraudDetection
pip install locust`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Start the API Server</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`# Terminal 1: Start infrastructure
docker-compose up -d

# Terminal 2: Start API with multiple workers
uvicorn src.api.main:app --host 0.0.0.0 --port 8000 --workers 4`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Run Locust</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`# Terminal 3: Start Locust
cd loadtest
locust -f locustfile.py --host=http://localhost:8000`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Access Web UI</h3>
        <p className="text-muted-foreground mb-4">Open http://localhost:8089 in your browser.</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li><strong className="text-foreground">Number of users:</strong> Total concurrent virtual users</li>
          <li><strong className="text-foreground">Spawn rate:</strong> Users added per second during ramp-up</li>
          <li><strong className="text-foreground">Host:</strong> Target API URL (can override CLI)</li>
          <li><strong className="text-foreground">Start/Stop:</strong> Control test execution</li>
        </ul>
      </section>

      {/* Scaling Analysis */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Scaling Analysis</h2>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Observed Performance (Baseline)</h3>
        <p className="text-muted-foreground mb-4">Test configuration: 50 users, 2-minute run, local environment (M-series Mac)</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Metric</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Observed</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Target</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Headroom</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Throughput</td>
                <td className="p-3 border border-border text-muted-foreground">260 RPS</td>
                <td className="p-3 border border-border text-muted-foreground">-</td>
                <td className="p-3 border border-border text-muted-foreground">Baseline</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">P50 Latency</td>
                <td className="p-3 border border-border text-muted-foreground">22ms</td>
                <td className="p-3 border border-border text-muted-foreground">50ms</td>
                <td className="p-3 border border-border text-green-600">56% buffer</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">P99 Latency</td>
                <td className="p-3 border border-border text-muted-foreground">106ms</td>
                <td className="p-3 border border-border text-muted-foreground">200ms</td>
                <td className="p-3 border border-border text-green-600">47% buffer</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Error Rate</td>
                <td className="p-3 border border-border text-muted-foreground">0.00%</td>
                <td className="p-3 border border-border text-muted-foreground">0.1%</td>
                <td className="p-3 border border-border text-green-600">Full margin</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Projected Scaling Limits</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Load</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Est. RPS</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Est. P99</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Primary Bottleneck</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">50 users</td>
                <td className="p-3 border border-border text-muted-foreground">260</td>
                <td className="p-3 border border-border text-muted-foreground">106ms</td>
                <td className="p-3 border border-border text-muted-foreground">None</td>
                <td className="p-3 border border-border text-muted-foreground">-</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">100 users</td>
                <td className="p-3 border border-border text-muted-foreground">500</td>
                <td className="p-3 border border-border text-muted-foreground">130ms</td>
                <td className="p-3 border border-border text-muted-foreground">API workers</td>
                <td className="p-3 border border-border text-muted-foreground">Add workers</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">200 users</td>
                <td className="p-3 border border-border text-muted-foreground">900</td>
                <td className="p-3 border border-border text-muted-foreground">160ms</td>
                <td className="p-3 border border-border text-muted-foreground">Redis connections</td>
                <td className="p-3 border border-border text-muted-foreground">Connection pooling</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">400 users</td>
                <td className="p-3 border border-border text-muted-foreground">1,500</td>
                <td className="p-3 border border-border text-yellow-600">200ms</td>
                <td className="p-3 border border-border text-muted-foreground">Redis throughput</td>
                <td className="p-3 border border-border text-muted-foreground">Redis Cluster</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">1000+ users</td>
                <td className="p-3 border border-border text-muted-foreground">3,000+</td>
                <td className="p-3 border border-border text-red-600">&gt;200ms</td>
                <td className="p-3 border border-border text-muted-foreground">Architecture limit</td>
                <td className="p-3 border border-border text-muted-foreground">Kafka + Flink</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interview Q&A */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Interview Q&A</h2>

        <div className="space-y-6">
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <h4 className="font-semibold text-foreground mb-3">Q1: &quot;How would you load test a fraud detection system?&quot;</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>&quot;I&apos;d approach it in four phases:</p>
              <p><strong className="text-foreground">Phase 1: Baseline</strong> - Run steady-state load matching current production. Measure P50, P95, P99 latency and establish the baseline.</p>
              <p><strong className="text-foreground">Phase 2: Stress</strong> - Gradually increase load until we hit SLA limits. This tells us our ceiling.</p>
              <p><strong className="text-foreground">Phase 3: Spike</strong> - Simulate traffic bursts (Black Friday, flash sale). Verify the system recovers gracefully.</p>
              <p><strong className="text-foreground">Phase 4: Soak</strong> - Run at 70% capacity for hours. Catch memory leaks, connection leaks, and degradation over time.</p>
              <p>The key difference from generic load testing: I&apos;d inject realistic fraud patterns - card testing attacks, fraud rings - because velocity counters behave differently with repeated entities versus random traffic.&quot;</p>
            </div>
          </div>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <h4 className="font-semibold text-foreground mb-3">Q2: &quot;You found the system can&apos;t handle projected load. What do you do?&quot;</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>&quot;First, I&apos;d quantify the gap and identify the bottleneck:</p>
              <p>If we need 10K RPS but max out at 3K, that&apos;s a 3.3x gap. Where&apos;s the bottleneck?</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-foreground">If it&apos;s API workers</strong> (stateless): Easy - add more workers. Linear cost, linear scaling.</li>
                <li><strong className="text-foreground">If it&apos;s Redis connections</strong>: Optimize connection pooling, add pipelining, or move to Redis Cluster. 2-4 weeks of work.</li>
                <li><strong className="text-foreground">If it&apos;s Redis ops/sec</strong>: Architectural change needed. Shard by entity type or move to a distributed cache layer.</li>
                <li><strong className="text-foreground">If it&apos;s PostgreSQL writes</strong>: Batch inserts, partition tables, or make evidence capture fully async with a queue.</li>
              </ul>
              <p>I&apos;d present options to leadership with cost/time/risk tradeoffs.&quot;</p>
            </div>
          </div>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <h4 className="font-semibold text-foreground mb-3">Q3: &quot;What metrics matter most for a fraud detection system?&quot;</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>&quot;For fraud detection, I&apos;d prioritize metrics in this order:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li><strong className="text-foreground">P99 Latency</strong> - We have a 200ms SLA. Every transaction waits for our decision.</li>
                <li><strong className="text-foreground">Error Rate</strong> - An error means we either blocked a legitimate transaction (revenue loss) or allowed fraud (direct loss).</li>
                <li><strong className="text-foreground">Decision Distribution</strong> - What % are ALLOW, BLOCK, FRICTION, REVIEW? Sudden shifts indicate either an attack or a bug.</li>
                <li><strong className="text-foreground">Throughput</strong> - Are we keeping up with incoming traffic?</li>
                <li><strong className="text-foreground">Feature Latency</strong> - Redis lookups are 50% of our latency. If this spikes, we&apos;re approaching Redis limits.</li>
              </ol>
              <p>I&apos;d set alerts on P99 &gt; 150ms (early warning), P99 &gt; 180ms (critical), and error rate &gt; 0.1%.&quot;</p>
            </div>
          </div>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <h4 className="font-semibold text-foreground mb-3">Q4: &quot;Walk me through capacity planning for 10x growth.&quot;</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>&quot;Let me work through the math:</p>
              <p><strong className="text-foreground">Current state:</strong> 260 RPS at 106ms P99<br />
              <strong className="text-foreground">Target:</strong> 2,600 RPS (10x growth)</p>
              <p><strong className="text-foreground">API Layer:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Current: 4 workers handling 260 RPS = 65 RPS/worker</li>
                <li>Needed: 2,600 / 65 = 40 workers</li>
                <li>Cost: Linear (add more pods)</li>
              </ul>
              <p><strong className="text-foreground">Redis:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Current: ~1,300 ops/sec (5 ops per request)</li>
                <li>Needed: ~13,000 ops/sec</li>
                <li>Single Redis: 100K ops/sec capacity</li>
                <li>Verdict: Single node is fine for 10x</li>
              </ul>
              <p><strong className="text-foreground">Summary for leadership:</strong> 10x growth is achievable with horizontal scaling (API) and optimization (PostgreSQL batching). No architectural changes needed.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Phrases */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Key Phrases That Signal Principal-Level Thinking</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Instead of...</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Say...</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border text-red-600">&quot;We ran load tests&quot;</td>
                <td className="p-3 border border-border text-green-600">&quot;We validated the system meets SLA at 2x projected peak load&quot;</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border text-red-600">&quot;P99 was 106ms&quot;</td>
                <td className="p-3 border border-border text-green-600">&quot;P99 was 106ms, giving us 47% headroom before SLA breach&quot;</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border text-red-600">&quot;We used Locust&quot;</td>
                <td className="p-3 border border-border text-green-600">&quot;We simulated realistic fraud patterns including velocity attacks&quot;</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border text-red-600">&quot;We need more servers&quot;</td>
                <td className="p-3 border border-border text-green-600">&quot;Redis connection pooling gives us 10x headroom before horizontal scaling&quot;</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border text-red-600">&quot;It handles 1000 RPS&quot;</td>
                <td className="p-3 border border-border text-green-600">&quot;At 1000 RPS, we&apos;re at 60% capacity with clear scaling path to 10K&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Quick Reference</h2>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Common Commands</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`# Basic test
locust -f loadtest/locustfile.py --host=http://localhost:8000

# Headless mode (CI/CD)
locust -f loadtest/locustfile.py \\
  --host=http://localhost:8000 \\
  --users 100 \\
  --spawn-rate 10 \\
  --run-time 5m \\
  --headless

# Distributed mode
locust -f loadtest/locustfile.py --master
locust -f loadtest/locustfile.py --worker --master-host=localhost`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Prometheus Metrics to Watch</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`# Request latency P99
histogram_quantile(0.99, rate(fraud_e2e_latency_bucket[1m]))

# Error rate
rate(fraud_errors_total[1m]) / rate(fraud_requests_total[1m])

# Decision distribution
rate(fraud_decisions_total[1m])`}</pre>
      </section>

      {/* Footer */}
      <div className="p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
        <p><strong>Last Updated:</strong> January 4, 2026</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-7"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          &larr; Previous: Demo Dashboard
        </Link>
        <Link
          href="/nebula/fraud-detection-design"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Back to Design Docs &rarr;
        </Link>
      </div>
    </ThinkingLayout>
  );
}
