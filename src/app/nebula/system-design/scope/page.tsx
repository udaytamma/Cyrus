"use client";

/**
 * System Design - Competency Matrix
 * Principal TPM competency matrix for Mag7 interviews
 */

import Link from "next/link";
import { SystemDesignLayout, getSystemDesignNavigation } from "@/components/SystemDesignLayout";

// Subsection component for consistent styling
function Subsection({
  title,
  children,
  color = "blue",
}: {
  title: string;
  children: React.ReactNode;
  color?: "blue" | "green" | "amber" | "purple" | "indigo" | "pink" | "cyan";
}) {
  const colorClasses = {
    blue: "from-blue-500/5 border-blue-500/30 text-blue-500",
    green: "from-green-500/5 border-green-500/30 text-green-500",
    amber: "from-amber-500/5 border-amber-500/30 text-amber-500",
    purple: "from-purple-500/5 border-purple-500/30 text-purple-500",
    indigo: "from-indigo-500/5 border-indigo-500/30 text-indigo-500",
    pink: "from-pink-500/5 border-pink-500/30 text-pink-500",
    cyan: "from-cyan-500/5 border-cyan-500/30 text-cyan-500",
  };

  const classes = colorClasses[color];
  const [gradientClass, borderClass, textClass] = classes.split(" ");

  return (
    <div className={`mb-6 p-5 bg-gradient-to-r ${gradientClass} to-transparent rounded-xl border ${borderClass}`}>
      <h3 className={`text-base font-semibold text-foreground mb-3 ${textClass}`}>{title}</h3>
      {children}
    </div>
  );
}

// Bullet item component
function BulletItem({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 mb-2">
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0"></span>
      <span className="text-sm text-muted-foreground">
        {title && <strong className="text-foreground">{title}:</strong>} {children}
      </span>
    </li>
  );
}

export default function SystemDesignScope() {
  const nav = getSystemDesignNavigation("scope");

  return (
    <SystemDesignLayout
      title="System Design - Competency Matrix"
      description="Principal TPM competency matrix for Mag7 interviews"
      currentSection="scope"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          1
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">System Design Competency Matrix</h1>
        <p className="text-muted-foreground">
          Principal TPM (Mag7 Edition) - Prioritizing Architectural Strategy over implementation details
        </p>
      </div>

      {/* Intro Note */}
      <div className="mb-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-sm text-muted-foreground">
          This reference guide prioritizes <strong className="text-foreground">Architectural Strategy</strong> (Trade-offs, Cost, Risk)
          over implementation details. It incorporates the "Business Physics" and "Execution Patterns" that distinguish
          a Principal TPM from a Principal Engineer.
        </p>
      </div>

      {/* Section 1: Strategic & Business Physics */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
            1
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Strategic &amp; Business Physics</h2>
            <p className="text-sm text-muted-foreground">The TPM Differentiator - The lens through which you evaluate every technical decision</p>
          </div>
        </div>

        <Subsection title="Cloud Economics (FinOps)" color="blue">
          <ul className="space-y-1">
            <BulletItem title="Cost Drivers">Spot vs. On-Demand, Data Transfer (Inter-AZ vs. Cross-Region), Storage Tiers (Hot/Cold/Glacier)</BulletItem>
            <BulletItem title="The Trade-off">Performance vs. Budget (e.g., "Is 5ms latency worth doubling our monthly spend?")</BulletItem>
            <BulletItem title="CAPEX vs. OPEX">Understanding the shift from buying hardware to consuming services</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="SLA Mathematics & Reliability" color="blue">
          <ul className="space-y-1">
            <BulletItem title="Composite SLAs">Calculating availability across dependent services (e.g., Service A (99.9%) x Service B (99.9%) = 99.8% System Availability)</BulletItem>
            <BulletItem title="Error Budgets">Using burn rates to prioritize reliability work vs. feature velocity</BulletItem>
            <BulletItem title="Definitions">
              <span className="block mt-1">
                <strong>SLO (Objective):</strong> The internal target (e.g., 99.9%)<br/>
                <strong>SLA (Agreement):</strong> The contract with the customer (usually lower, e.g., 99.5%)<br/>
                <strong>SLI (Indicator):</strong> The actual metric being measured
              </span>
            </BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Compliance & Data Sovereignty" color="blue">
          <ul className="space-y-1">
            <BulletItem title="Residency">GDPR, DMA, and localized storage requirements (e.g., "German data stays in Germany")</BulletItem>
            <BulletItem title="Isolation">PCI-DSS scope reduction, PII masking, and data classification</BulletItem>
          </ul>
        </Subsection>
      </div>

      {/* Section 2: Migration & Delivery Patterns */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
            2
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Migration &amp; Delivery Patterns</h2>
            <p className="text-sm text-muted-foreground">The Execution Layer - How to move massive systems without breaking them</p>
          </div>
        </div>

        <Subsection title="Decomposition Strategies" color="green">
          <ul className="space-y-1">
            <BulletItem title="Strangler Fig Pattern">Incrementally migrating functionality from a monolith to microservices by intercepting calls</BulletItem>
            <BulletItem title="Branch by Abstraction">Making large-scale code changes safely within the main branch (trunk) without long-lived feature branches</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Deployment Safety" color="green">
          <ul className="space-y-1">
            <BulletItem title="Shadow Traffic (Dark Launching)">Replaying production traffic to a new backend to test load without affecting users</BulletItem>
            <BulletItem title="Canary vs. Blue/Green">
              <span className="block mt-1">
                <strong>Canary:</strong> Roll out to 1% → 5% → 100%. Good for testing logic.<br/>
                <strong>Blue/Green:</strong> Switch 100% of traffic from old stack to new stack. Good for instant rollback.
              </span>
            </BulletItem>
            <BulletItem title="Feature Flags">Decoupling deployment (binary release) from release (feature visibility)</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Data Migration" color="green">
          <ul className="space-y-1">
            <BulletItem title="Dual-Write / Backfill Patterns">Migrating live data stores with zero downtime (Write to Old+New, Read from Old → Verify → Switch Read to New)</BulletItem>
          </ul>
        </Subsection>
      </div>

      {/* Section 3: Core Fundamentals */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
            3
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Core Fundamentals</h2>
            <p className="text-sm text-muted-foreground">Non-Negotiable - The building blocks of every design</p>
          </div>
        </div>

        <Subsection title="Scaling Primitives" color="purple">
          <ul className="space-y-1">
            <BulletItem title="Vertical (Scale-up) vs. Horizontal (Scale-out)">Knowing when hardware limits force a distributed architecture</BulletItem>
            <BulletItem title="Stateless vs. Stateful">The key to horizontal scaling (cattle vs. pets)</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Networking & Traffic" color="purple">
          <ul className="space-y-1">
            <BulletItem title="Load Balancing">
              <span className="block mt-1">
                <strong>L4 (Transport):</strong> Fast, "dumb" packet routing (TCP/UDP)<br/>
                <strong>L7 (Application):</strong> Smart routing based on URL/Header (HTTP)
              </span>
            </BulletItem>
            <BulletItem title="Protocols">TCP (Reliable) vs. UDP (Fast), HTTP/1.1 vs. HTTP/2 (Multiplexing) vs. gRPC (Internal efficiency)</BulletItem>
            <BulletItem title="DNS">Resolution steps, Anycast, and Geo-routing</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Database Foundations" color="purple">
          <ul className="space-y-1">
            <BulletItem title="Relational (SQL)">ACID properties, Normalization, strict schemas</BulletItem>
            <BulletItem title="NoSQL Types">Key-Value (Redis), Document (Mongo), Wide-Column (Cassandra), Graph (Neo4j)</BulletItem>
            <BulletItem title="CAP Theorem">The hard trade-off: You can only pick two of Consistency, Availability, and Partition Tolerance (in reality, usually C vs A in a distributed system)</BulletItem>
            <BulletItem title="ACID vs. BASE">
              <span className="block mt-1">
                <strong>ACID:</strong> Strong consistency for critical data (Banks, Inventory)<br/>
                <strong>BASE:</strong> Basically Available, Soft state, Eventual consistency (Social Media, Analytics)
              </span>
            </BulletItem>
          </ul>
        </Subsection>
      </div>

      {/* Section 4: Mid-Level Architecture */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
            4
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Mid-Level Architecture</h2>
            <p className="text-sm text-muted-foreground">The "System Glue" - How components interact and handle load</p>
          </div>
        </div>

        <Subsection title="Data Partitioning (Sharding)" color="amber">
          <ul className="space-y-1">
            <BulletItem title="Strategies">Range-based, Hash-based, Directory-based, Consistent Hashing (Minimizing movement during resizing)</BulletItem>
            <BulletItem title="Problems">Hot spots (Data skew), Resharding logic, "Scatter-Gather" query latency</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Caching Strategy" color="amber">
          <ul className="space-y-1">
            <BulletItem title="Layers">Browser → CDN → API Gateway → App (Local vs. Remote) → Database</BulletItem>
            <BulletItem title="Patterns">Cache-Aside (Lazy loading), Write-Through, Write-Back, Write-Around</BulletItem>
            <BulletItem title="Eviction Policies">LRU (Least Recently Used), LFU (Least Frequently Used)</BulletItem>
            <BulletItem title="Risks">Thundering Herd problem, Cache Penetration (Requests for non-existent data)</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Synchronous Communication" color="amber">
          <ul className="space-y-1">
            <BulletItem title="REST">Standard HTTP APIs, resource-oriented, stateless</BulletItem>
            <BulletItem title="gRPC">High performance, binary protocol, ideal for internal service-to-service</BulletItem>
            <BulletItem title="GraphQL">Flexible data fetching, client specifies exactly what data it needs</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Asynchronous Communication" color="amber">
          <ul className="space-y-1">
            <BulletItem title="Message Queues (P2P)">RabbitMQ/SQS. Decoupling producers/consumers (1-to-1)</BulletItem>
            <BulletItem title="Pub/Sub (One-to-Many)">Kafka/SNS/Kinesis. Event streaming and log aggregation</BulletItem>
            <BulletItem title="Idempotency">Ensuring safe retries (processing the same message twice does not charge the customer twice)</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Real-time Communication" color="amber">
          <ul className="space-y-1">
            <BulletItem title="Polling">Client repeatedly asks server for updates (simple but inefficient)</BulletItem>
            <BulletItem title="Long-Polling">Server holds request open until data available (reduces requests)</BulletItem>
            <BulletItem title="WebSockets">Persistent bidirectional connection for true real-time (Chat, Gaming, Live feeds)</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Security Fundamentals" color="amber">
          <ul className="space-y-1">
            <BulletItem title="Authentication vs. Authorization">
              <span className="block mt-1">
                <strong>AuthN:</strong> Who are you? (OAuth 2.0, OIDC, JWT)<br/>
                <strong>AuthZ:</strong> What can you do? (RBAC, ABAC)
              </span>
            </BulletItem>
            <BulletItem title="Encryption">
              <span className="block mt-1">
                <strong>In Transit:</strong> TLS/HTTPS for data moving across networks<br/>
                <strong>At Rest:</strong> Encrypted storage (AES-256) for data on disk
              </span>
            </BulletItem>
          </ul>
        </Subsection>
      </div>

      {/* Section 5: Advanced Distributed Systems */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-lg font-bold">
            5
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Advanced Distributed Systems</h2>
            <p className="text-sm text-muted-foreground">Differentiation - Solving for high-scale, global constraints</p>
          </div>
        </div>

        <Subsection title="Consistency Models" color="indigo">
          <ul className="space-y-1">
            <BulletItem title="Strong Consistency">Linearizability (e.g., Bank balance, Inventory). High latency penalty</BulletItem>
            <BulletItem title="Eventual Consistency">"Gossip" protocols (e.g., Social feeds, Likes). Fast, but stale data is possible</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Distributed Consensus" color="indigo">
          <ul className="space-y-1">
            <BulletItem title="Leader Election">How clusters decide who writes (implications of "Split Brain")</BulletItem>
            <BulletItem title="Paxos/Raft">Concept awareness: "Strong Consistency across regions" implies massive latency penalty due to these protocols</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Global Architecture" color="indigo">
          <ul className="space-y-1">
            <BulletItem title="Active-Active vs. Active-Passive">Multi-region failover strategies</BulletItem>
            <BulletItem title="Geo-DNS & Latency-based Routing">Directing users to nearest data center</BulletItem>
            <BulletItem title="Latency Physics">The cost of the speed of light (e.g., US-East to AP-South is ~200ms)</BulletItem>
            <BulletItem title="Replication Lag">The time delta between Primary and Replica DBs</BulletItem>
            <BulletItem title="Data Sovereignty">GDPR/Residency requirements affecting architecture decisions</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Resiliency Patterns" color="indigo">
          <ul className="space-y-1">
            <BulletItem title="Circuit Breakers">Failing fast to protect dependencies (Stop calling a dead service)</BulletItem>
            <BulletItem title="Bulkheads">Isolating failure domains (Titanic strategy: one failure does not sink the ship)</BulletItem>
            <BulletItem title="Retries with Exponential Backoff + Jitter">Graceful retry logic that prevents thundering herd on recovery</BulletItem>
            <BulletItem title="Backpressure">Preventing system overload by rejecting excess traffic or slowing down the producer</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Probabilistic Data Structures" color="indigo">
          <ul className="space-y-1">
            <BulletItem title="Bloom Filters">"Definitely No" or "Maybe Yes" - Avoid expensive DB lookups for data that does not exist</BulletItem>
            <BulletItem title="HyperLogLog">Counting unique items (e.g., Daily Active Users) with tiny memory footprint vs. storing every ID</BulletItem>
          </ul>
        </Subsection>
      </div>

      {/* Section 6: AI & Modern Data Infrastructure */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-pink-500 text-white flex items-center justify-center text-lg font-bold">
            6
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">AI &amp; Modern Data Infrastructure</h2>
            <p className="text-sm text-muted-foreground">2026 Reality - Relevant for AI-driven product features</p>
          </div>
        </div>

        <Subsection title="AI/ML Ops" color="pink">
          <ul className="space-y-1">
            <BulletItem title="Training vs. Inference">
              <span className="block mt-1">
                <strong>Training:</strong> Throughput-bound, batch processing<br/>
                <strong>Inference:</strong> Latency-bound, often needs edge compute
              </span>
            </BulletItem>
            <BulletItem title="Vector Databases">The basics of RAG (Retrieval Augmented Generation) architecture</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Data Architecture" color="pink">
          <ul className="space-y-1">
            <BulletItem title="OLTP vs. OLAP">Transactional processing (User facing) vs. Analytical processing (Reporting)</BulletItem>
            <BulletItem title="Data Lake vs. Warehouse vs. Lakehouse">Storage cost vs. query performance structures</BulletItem>
          </ul>
        </Subsection>
      </div>

      {/* Section 7: Observability & Operations */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold">
            7
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Observability &amp; Operations</h2>
            <p className="text-sm text-muted-foreground">How you know it is working</p>
          </div>
        </div>

        <Subsection title="The Three Pillars" color="cyan">
          <ul className="space-y-1">
            <BulletItem title="Metrics">Aggregates (e.g., "CPU is at 80%")</BulletItem>
            <BulletItem title="Logs">Discrete events (e.g., "Error: User ID 123 failed login")</BulletItem>
            <BulletItem title="Distributed Tracing">Tracking a request ID across 50 microservices to find where latency spikes occur</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Alerting Philosophy" color="cyan">
          <ul className="space-y-1">
            <BulletItem title="Leading Indicators">Saturation, Queue Depth (Predicts failure)</BulletItem>
            <BulletItem title="Lagging Indicators">Errors, Latency (Reports failure)</BulletItem>
            <BulletItem title="The Golden Signals">Latency, Traffic, Errors, Saturation</BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Reliability Patterns" color="cyan">
          <ul className="space-y-1">
            <BulletItem title="Idempotency Keys">Ensuring "Pay Now" is not processed twice if the network times out - critical for payment systems</BulletItem>
          </ul>
        </Subsection>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">← {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">{nav.next.title} →</span>
          </Link>
        )}
      </div>
    </SystemDesignLayout>
  );
}
