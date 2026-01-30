"use client";

/**
 * SD Topics - Comprehensive System Design Topics Reference
 * Principal TPM interview preparation covering core knowledge, canonical designs,
 * advanced topics, and 2026-relevant implementations
 */

import Link from "next/link";
import {
  SystemDesignLayout,
  getSystemDesignNavigation,
} from "@/components/SystemDesignLayout";
import {
  Subsection,
  BulletItem,
} from "@/components/DeepDiveComponents";

export default function SDTopicsPage() {
  const nav = getSystemDesignNavigation("sd-topics");

  return (
    <SystemDesignLayout
      title="SD Topics"
      description="Comprehensive System Design Topics for Principal TPM Interviews"
      currentSection="sd-topics"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-xl border border-indigo-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          8
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">SD Topics</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This document organizes system design knowledge for Principal TPM interviews at Mag7 companies.
          It covers four areas: foundational concepts, classic reference architectures, 2026-relevant topics, and complex implementations.
          Each section explains <strong>what the concept is</strong>, <strong>why it matters</strong>, and <strong>how a TPM engages with it</strong>.
        </p>
      </div>

      {/* Section 1: Core Technical Knowledge */}
      <h2 className="text-xl font-bold text-foreground mb-4 mt-8">
        1. Core Technical Knowledge (Principal TPM Bar)
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        These foundational concepts appear in every large-scale system. As a Principal TPM, you won&apos;t implement them yourself,
        but you need to understand them well enough to make trade-off decisions, ask the right questions in design reviews,
        and translate technical choices into business impact for stakeholders.
      </p>

      <Subsection title="1.1 Distributed Architecture & Scaling" color="blue">
        <p className="text-sm text-muted-foreground mb-3">
          When systems grow beyond what a single server can handle, you must distribute data and computation across multiple machines.
          This introduces fundamental trade-offs that affect reliability, performance, and cost.
        </p>
        <ul className="space-y-1">
          <BulletItem title="CAP Theorem vs. BASE">
            <strong>The problem:</strong> In a distributed system, network failures happen. When they do, you must choose between
            keeping data consistent across all nodes (consistency) or keeping the system available to users (availability).
            You cannot guarantee both simultaneously during a failure.
            <br /><br />
            <strong>TPM relevance:</strong> This drives architecture decisions. Banking systems prioritize consistency (reject transactions rather than risk double-spending).
            Social feeds prioritize availability (show slightly stale data rather than error pages). You need to know which your system requires and why.
          </BulletItem>
          <BulletItem title="Database Sharding & Partitioning">
            <strong>The problem:</strong> A single database server has limits&mdash;storage, connections, query throughput.
            Sharding splits data across multiple databases so each handles a subset.
            <br /><br />
            <strong>Two main approaches:</strong> Hash-based (distribute evenly by hashing a key) or range-based (split by date, region, etc.).
            Hash spreads load evenly but makes range queries hard. Range keeps related data together but can create &quot;hot&quot; shards.
            <br /><br />
            <strong>TPM relevance:</strong> Sharding decisions are expensive to change later. You should understand when engineers propose sharding,
            what re-sharding migrations cost, and how it affects features that need cross-shard queries.
          </BulletItem>
          <BulletItem title="Replication & Consistency">
            <strong>The problem:</strong> Copies of data across servers improve availability and read performance, but keeping them in sync has costs.
            <br /><br />
            <strong>Synchronous replication:</strong> Wait for all copies before confirming a write. Slower, but data is always consistent.
            <strong>Asynchronous replication:</strong> Confirm immediately, sync copies in background. Faster, but reads might see stale data briefly.
            <br /><br />
            <strong>TPM relevance:</strong> This trade-off directly affects user experience. &quot;Why did my update disappear?&quot; often traces back to replication lag.
            You need to understand what consistency level your product requires and what latency cost that implies.
          </BulletItem>
          <BulletItem title="Load Balancing">
            <strong>The problem:</strong> Distributing incoming requests across multiple servers so no single server is overwhelmed.
            <br /><br />
            <strong>Layer 4 (TCP/IP level):</strong> Fast and simple, routes based on IP/port. Can&apos;t inspect request content.
            <strong>Layer 7 (Application level):</strong> Can route based on URL, headers, cookies. More flexible but adds latency.
            <br /><br />
            <strong>TPM relevance:</strong> Load balancer configuration affects latency, failover speed, and cost.
            Understanding this helps you ask the right questions when diagnosing performance issues or planning capacity.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="1.2 Data Consistency & Integrity" color="blue">
        <p className="text-sm text-muted-foreground mb-3">
          When multiple users or services modify data simultaneously, conflicts can occur.
          These concepts determine how your system handles concurrent access and ensures data remains accurate.
        </p>
        <ul className="space-y-1">
          <BulletItem title="ACID vs. Eventual Consistency">
            <strong>ACID (Atomicity, Consistency, Isolation, Durability):</strong> Traditional database guarantees.
            A transaction either fully completes or fully rolls back. Strong but can limit throughput.
            <br /><br />
            <strong>Eventual Consistency:</strong> The system will become consistent &quot;eventually&quot; (usually milliseconds to seconds).
            Allows higher throughput and availability but requires designing for temporary inconsistency.
            <br /><br />
            <strong>TPM relevance:</strong> Financial transactions typically require ACID. Product catalogs or user preferences can tolerate eventual consistency.
            Choosing wrong means either unnecessary complexity/cost or data corruption risks.
          </BulletItem>
          <BulletItem title="Optimistic vs. Pessimistic Locking">
            <strong>The problem:</strong> Two users editing the same record simultaneously. Who wins?
            <br /><br />
            <strong>Pessimistic locking:</strong> Lock the record when someone starts editing. Others wait. Safe but can cause bottlenecks.
            <strong>Optimistic locking:</strong> Let everyone edit, check for conflicts at save time. Better throughput but requires conflict resolution.
            <br /><br />
            <strong>TPM relevance:</strong> This affects UX directly. &quot;Someone else is editing this document&quot; vs. &quot;Your changes conflicted, please merge.&quot;
            The choice depends on how often conflicts actually occur in your use case.
          </BulletItem>
          <BulletItem title="Idempotency">
            <strong>The problem:</strong> Network requests can fail and retry. If a payment request retries, you don&apos;t want to charge twice.
            <br /><br />
            <strong>The solution:</strong> Design operations so running them multiple times has the same effect as running once.
            Typically done with unique request IDs&mdash;the system checks &quot;have I processed this ID before?&quot; and ignores duplicates.
            <br /><br />
            <strong>TPM relevance:</strong> Critical for any system handling money, inventory, or irreversible actions.
            &quot;Why did the customer get charged twice?&quot; is often a missing idempotency key.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="1.3 Communication & API Design" color="blue">
        <p className="text-sm text-muted-foreground mb-3">
          Services need to talk to each other. The communication pattern you choose affects performance, coupling, and how easily systems can evolve independently.
        </p>
        <ul className="space-y-1">
          <BulletItem title="API Protocols">
            <strong>REST:</strong> Simple, HTTP-based, widely understood. Good for public APIs. Can over-fetch data (get entire objects when you need one field).
            <br /><br />
            <strong>gRPC:</strong> Binary protocol, faster than REST, strongly typed. Great for internal service-to-service calls. Harder to debug, requires code generation.
            <br /><br />
            <strong>GraphQL:</strong> Client specifies exactly what data it needs. Reduces over-fetching but adds complexity. Good for mobile apps with varied data needs.
            <br /><br />
            <strong>TPM relevance:</strong> Protocol choice affects developer experience, performance, and partner integrations.
            Public APIs almost always use REST for accessibility. Internal high-throughput paths often use gRPC.
          </BulletItem>
          <BulletItem title="Messaging Patterns">
            <strong>The problem:</strong> Synchronous API calls create tight coupling. If Service B is slow or down, Service A blocks or fails.
            <br /><br />
            <strong>Message queues (Kafka, SQS):</strong> Service A publishes a message and moves on. Service B processes it when ready.
            Decouples services, improves resilience, enables replay of events.
            <br /><br />
            <strong>TPM relevance:</strong> Async messaging is essential for scale but adds complexity (message ordering, exactly-once delivery, dead letter queues).
            You need to understand when the trade-off is worth it.
          </BulletItem>
          <BulletItem title="Event Sourcing & CQRS">
            <strong>Event Sourcing:</strong> Instead of storing current state, store every change as an immutable event. Rebuild state by replaying events.
            Great for audit trails and debugging. Complex to query and can grow large.
            <br /><br />
            <strong>CQRS (Command Query Responsibility Segregation):</strong> Separate models for reading and writing data.
            Optimize each independently. Adds complexity but enables better performance at scale.
            <br /><br />
            <strong>TPM relevance:</strong> These patterns suit specific use cases (financial systems, audit-heavy domains).
            They&apos;re powerful but add significant complexity&mdash;don&apos;t use them just because they sound sophisticated.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="1.4 Performance, Resilience & Security" color="blue">
        <p className="text-sm text-muted-foreground mb-3">
          Systems must be fast, stay up when things fail, and keep data secure. These cross-cutting concerns affect every design decision.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Caching Strategy">
            <strong>The problem:</strong> Databases are slow compared to memory. Caching stores frequently-accessed data in fast storage (Redis, Memcached).
            <br /><br />
            <strong>Common issues:</strong>
            <strong>Cache stampede:</strong> Cache expires, hundreds of requests hit the database simultaneously.
            <strong>Cache penetration:</strong> Requests for data that doesn&apos;t exist bypass cache repeatedly.
            <br /><br />
            <strong>TPM relevance:</strong> Caching strategy directly affects latency and database costs.
            Understanding cache invalidation challenges helps you set realistic expectations for data freshness.
          </BulletItem>
          <BulletItem title="Disaster Recovery (DR)">
            <strong>RTO (Recovery Time Objective):</strong> How long can you be down? Minutes, hours, days?
            <strong>RPO (Recovery Point Objective):</strong> How much data can you lose? Zero, 15 minutes, 1 hour?
            <br /><br />
            <strong>DR strategies range from cheap/slow to expensive/fast:</strong>
            Backup-restore (hours), Pilot Light (minutes), Warm Standby (seconds), Multi-site Active-Active (near-zero).
            <br /><br />
            <strong>TPM relevance:</strong> DR is a business decision, not just technical. RTO/RPO targets come from business impact analysis.
            Your job is to translate &quot;$X per minute of downtime&quot; into appropriate DR investment.
          </BulletItem>
          <BulletItem title="Security Infrastructure">
            <strong>OAuth 2.0:</strong> Standard protocol for delegated authorization (&quot;Sign in with Google&quot;).
            <strong>JWT (JSON Web Tokens):</strong> Self-contained tokens carrying user identity. Stateless but can&apos;t be revoked easily.
            <strong>SSO (Single Sign-On):</strong> One login for multiple applications.
            <br /><br />
            <strong>TPM relevance:</strong> Security architecture affects user experience (login friction), compliance requirements,
            and integration capabilities. You&apos;ll often coordinate cross-org security initiatives.
          </BulletItem>
        </ul>
      </Subsection>

      {/* Section 2: Canonical System Designs */}
      <h2 className="text-xl font-bold text-foreground mb-4 mt-10">
        2. Canonical System Designs (Classic Mag7 Scale)
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        These are well-documented architectures from companies operating at massive scale.
        In interviews, you&apos;re often asked to design similar systems. Understanding these reference architectures helps you
        reason about trade-offs and avoid reinventing wheels. For each, know: <strong>what problem it solves</strong>,
        <strong>what makes it hard at scale</strong>, and <strong>what trade-offs the company made</strong>.
      </p>

      <Subsection title="2.1 Social & Real-Time Interaction" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          Social platforms must deliver personalized content to millions of users simultaneously while handling viral spikes.
          The core challenge is fanout&mdash;when one person posts, potentially millions need to see it.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Twitter/X (Feed Generation)">
            <strong>The problem:</strong> When you open Twitter, your timeline shows tweets from everyone you follow, ranked by relevance, in milliseconds.
            With millions of users following thousands of accounts each, computing this on-demand is too slow.
            <br /><br />
            <strong>The solution:</strong> Pre-compute timelines. When someone tweets, &quot;fan out&quot; that tweet to the timeline caches of all their followers.
            Trade-off: celebrities with millions of followers can&apos;t fan out to everyone (too expensive), so their tweets are fetched on-demand and merged.
            <br /><br />
            <strong>TPM relevance:</strong> This &quot;push vs. pull&quot; trade-off appears in many systems (notifications, feeds, recommendations).
            Understanding it helps you navigate capacity planning and latency requirements.
          </BulletItem>
          <BulletItem title="Google Docs (Collaboration)">
            <strong>The problem:</strong> Multiple people editing the same document simultaneously. Their changes must merge without conflicts or lost work.
            <br /><br />
            <strong>The solution:</strong> Operational Transformation (OT) or CRDTs (Conflict-free Replicated Data Types).
            Both allow concurrent edits to be merged automatically. OT requires a central server; CRDTs work peer-to-peer but are more complex.
            <br /><br />
            <strong>TPM relevance:</strong> Real-time collaboration is increasingly expected. Understanding the complexity helps you scope such features realistically.
          </BulletItem>
          <BulletItem title="Discord (Message Persistence)">
            <strong>The problem:</strong> Discord stores trillions of messages with instant retrieval. Traditional databases struggle at this scale.
            <br /><br />
            <strong>Their journey:</strong> Started with MongoDB, migrated to Cassandra for scale, then to ScyllaDB for better latency.
            Each migration addressed specific pain points (hot partitions, tail latency, operational complexity).
            <br /><br />
            <strong>TPM relevance:</strong> Storage technology migrations are multi-year programs. Understanding why companies migrate helps you evaluate when it&apos;s worth the investment.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.2 Content & Media Delivery" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          Video and media platforms handle enormous data volumes. A single 4K video is gigabytes.
          Serving millions of concurrent viewers requires specialized infrastructure.
        </p>
        <ul className="space-y-1">
          <BulletItem title="YouTube/TikTok (Video Streaming)">
            <strong>The pipeline:</strong> Upload &rarr; Transcode (convert to multiple resolutions/formats) &rarr; Store &rarr; Distribute via CDN &rarr; Adaptive streaming to viewers.
            <br /><br />
            <strong>Key challenges:</strong> Transcoding is CPU-intensive and must handle diverse input formats.
            CDNs cache content at edge locations worldwide. Adaptive bitrate streaming adjusts quality based on viewer&apos;s bandwidth.
            <br /><br />
            <strong>TPM relevance:</strong> Video infrastructure is expensive. Understanding the pipeline helps you make cost/quality trade-offs
            (e.g., how many resolution variants to generate, CDN coverage decisions).
          </BulletItem>
          <BulletItem title="Netflix (Edge & Cache)">
            <strong>The architecture:</strong> Netflix moved from monolith to microservices, uses GraphQL Federation to compose data from many services,
            and deploys its own CDN (Open Connect) with servers inside ISP networks.
            <br /><br />
            <strong>EVCache:</strong> Their distributed caching layer handles millions of requests per second with sub-millisecond latency.
            <br /><br />
            <strong>TPM relevance:</strong> Netflix is often cited as a microservices success story.
            Understanding their evolution helps you assess whether your org is ready for similar complexity.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.3 Commerce, Search & Notifications" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          These systems directly impact revenue and user trust. Payment failures lose money. Search quality affects conversions. Notification fatigue drives churn.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Search Engines (Google/Bing)">
            <strong>The pipeline:</strong> Crawl the web &rarr; Parse and extract content &rarr; Build inverted index &rarr; Rank results &rarr; Serve queries.
            <br /><br />
            <strong>Scale challenges:</strong> The web has billions of pages. Crawling must be polite (don&apos;t overload sites) and efficient (prioritize important pages).
            Deduplication (Bloom filters, simhash) identifies near-duplicate content.
            <br /><br />
            <strong>TPM relevance:</strong> Internal search (enterprise, e-commerce) faces similar challenges at smaller scale.
            Understanding the fundamentals helps you evaluate search vendors and set quality expectations.
          </BulletItem>
          <BulletItem title="Payment Systems (Visa/Stripe)">
            <strong>Core challenges:</strong> Never lose money (strong consistency), never charge twice (idempotency),
            handle currency conversion, reconcile with banks daily, and meet regulatory requirements globally.
            <br /><br />
            <strong>Key pattern:</strong> Two-phase transactions. First &quot;authorize&quot; (reserve funds), then &quot;capture&quot; (actually move money).
            This separation handles edge cases like refunds, partial captures, and timeouts.
            <br /><br />
            <strong>TPM relevance:</strong> Payment integrations are high-stakes. Understanding the patterns helps you scope integration work
            and anticipate edge cases that will bite you later.
          </BulletItem>
          <BulletItem title="Notification Systems (Slack/FCM)">
            <strong>The problem:</strong> Deliver the right message to the right device at the right time, respecting user preferences and avoiding spam.
            <br /><br />
            <strong>Components:</strong> Device token management (tokens expire, users switch phones), channel routing (push, email, SMS),
            preference management, rate limiting, and delivery tracking.
            <br /><br />
            <strong>TPM relevance:</strong> Notifications directly affect engagement metrics. Understanding delivery reliability and preference management
            helps you set realistic SLAs and debug &quot;why didn&apos;t I get notified?&quot; issues.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.4 High-Intensity Platform & Specialized Workloads" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          Some systems face extreme constraints: massive traffic spikes, microsecond latency requirements, or unusual isolation needs.
          These push standard architectures to their limits.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Flash Sale Systems">
            <strong>The problem:</strong> Millions of users try to buy limited inventory at the same moment. Without careful design, the system crashes or oversells.
            <br /><br />
            <strong>Key techniques:</strong> Pre-warm caches, use queuing to absorb spikes, implement inventory reservation with TTLs,
            and degrade gracefully (show &quot;sold out&quot; rather than errors).
            <br /><br />
            <strong>TPM relevance:</strong> Any time-sensitive launch (product drops, ticket sales, registrations) faces similar challenges.
            Understanding these patterns helps you plan capacity and set customer expectations.
          </BulletItem>
          <BulletItem title="Stock Exchanges">
            <strong>The constraint:</strong> Microsecond latency matters. A matching engine must process millions of orders per second with deterministic timing.
            <br /><br />
            <strong>How they achieve it:</strong> Kernel bypass networking, lock-free data structures, co-located servers, specialized hardware.
            These techniques sacrifice flexibility for speed.
            <br /><br />
            <strong>TPM relevance:</strong> Most systems don&apos;t need microsecond latency. But understanding what&apos;s possible helps you calibrate
            when someone claims &quot;we need the fastest possible&quot;&mdash;usually they don&apos;t, and the cost isn&apos;t justified.
          </BulletItem>
          <BulletItem title="Serverless (AWS Lambda)">
            <strong>What it is:</strong> Run code without managing servers. You upload a function, the platform handles scaling, you pay per invocation.
            <br /><br />
            <strong>Under the hood:</strong> Containers spin up on demand, run your code, then freeze or terminate.
            Cold starts add latency for the first request. Execution environments are sandboxed for security.
            <br /><br />
            <strong>TPM relevance:</strong> Serverless changes cost models (pay-per-use vs. reserved capacity) and operational burden.
            Understanding the trade-offs helps you decide when serverless fits vs. when traditional compute is better.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.5 ML Platform & Experimentation" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          Machine learning has moved from research to production infrastructure. In 2026, every Mag7 company runs thousands of models.
          The challenge is no longer &quot;can we build a model?&quot; but &quot;can we deploy, monitor, and iterate on models reliably at scale?&quot;
        </p>
        <ul className="space-y-1">
          <BulletItem title="ML/AI Platform Lifecycle">
            <strong>The full lifecycle:</strong> Feature engineering &rarr; Training &rarr; Validation &rarr; Deployment &rarr; Monitoring &rarr; Retraining.
            Each stage has its own infrastructure needs.
            <br /><br />
            <strong>Feature stores:</strong> Centralized repositories of ML features, ensuring the same features used in training are available in production (avoiding &quot;training-serving skew&quot;).
            <br /><br />
            <strong>A/B experimentation:</strong> Running controlled experiments to measure model impact. At scale, companies run thousands of experiments simultaneously.
            <br /><br />
            <strong>TPM relevance:</strong> You&apos;ll likely own programs around ML platform adoption, experiment velocity, or model governance.
            Understanding the lifecycle helps you identify bottlenecks and measure platform value.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Google (Vertex AI)</span> &mdash; End-to-end ML platform covering feature stores, training pipelines, model serving, and experiment tracking. Represents the &quot;golden path&quot; approach where all components are integrated.</li>
            <li><span className="font-medium text-foreground">Meta (FBLearner Flow)</span> &mdash; Known for experiment velocity&mdash;thousands of experiments run daily. Deep integration between feature stores and serving ensures online/offline consistency.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-3 text-sm">
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Google (Vertex AI)</p>
              <p className="text-muted-foreground italic">&quot;At Google, Vertex AI represents the integrated ML platform approach&mdash;feature stores, training, serving, and experimentation all connected. As a TPM, I&apos;d focus on driving adoption of this golden path, defining SLOs for model training and serving latency, and measuring success through experiment velocity and model iteration speed rather than just number of models deployed.&quot;</p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Meta (FBLearner Flow)</p>
              <p className="text-muted-foreground italic">&quot;Meta&apos;s FBLearner Flow is optimized for experiment velocity&mdash;turning ideas into shipped experiments in hours. As TPM, I&apos;d standardize feature store usage, enforce online/offline consistency, and measure success in terms of &apos;lift per experiment&apos; and &apos;time-to-learn&apos; rather than just model count. The goal is faster iteration, not more models.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="2.6 Data Pipeline Architecture" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          Data pipelines move and transform information from sources (apps, logs, events) to destinations (warehouses, ML models, dashboards).
          Every Mag7 company runs pipelines processing petabytes daily. Getting this wrong means bad analytics, wrong ML models, and broken business decisions.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Data Platform / Analytics Pipeline">
            <strong>Batch processing:</strong> Process large volumes on a schedule (hourly, daily). Good for reports and historical analysis. Higher latency but simpler.
            <br /><br />
            <strong>Stream processing:</strong> Process events as they arrive. Enables real-time dashboards and immediate reactions. More complex to build and operate.
            <br /><br />
            <strong>The hybrid reality:</strong> Most companies need both. The &quot;Lambda architecture&quot; runs batch and streaming in parallel.
            The &quot;Kappa architecture&quot; treats everything as a stream. Both have trade-offs in complexity and consistency.
            <br /><br />
            <strong>Data quality &amp; lineage:</strong> Tracking where data came from, how it was transformed, and whether it&apos;s accurate.
            Critical for debugging, compliance, and trust in analytics.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Netflix</span> &mdash; Pioneered Kafka-centric data platforms. Real-time personalization requires streaming; historical analysis requires batch. They invested heavily in data quality and lineage tooling.</li>
            <li><span className="font-medium text-foreground">Uber</span> &mdash; Runs both batch and streaming for pricing, ETA, and fraud detection. Strong focus on data quality frameworks because bad data directly impacts rider and driver experience.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-3 text-sm">
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Netflix</p>
              <p className="text-muted-foreground italic">&quot;Netflix runs a Kafka-centric platform handling both batch and streaming. As TPM, I&apos;d own the program that consolidates fragmented ETL jobs onto this unified platform, defines SLAs for data freshness and quality, and ties improvements to business outcomes&mdash;better personalization metrics and lower data platform costs.&quot;</p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Uber</p>
              <p className="text-muted-foreground italic">&quot;Uber&apos;s data platform powers pricing, ETA, and fraud&mdash;all latency-sensitive and business-critical. My focus would be orchestrating the move to unified event-driven architecture, negotiating cross-team SLAs, hardening data quality checks, and proving value through faster feature rollout and fewer data-related incidents.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="2.7 Multi-Region DR & Resilience" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          Regions fail. Data centers lose power, networks partition, cloud providers have outages.
          Multi-region architecture ensures your service survives these failures, but it adds significant complexity and cost.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Multi-Region Disaster Recovery">
            <strong>Active-Passive:</strong> One region handles all traffic; the other is on standby. Simpler but wastes capacity and has slower failover.
            <br /><br />
            <strong>Active-Active:</strong> Both regions handle traffic simultaneously. Better resource utilization and faster failover, but requires solving data consistency across regions.
            <br /><br />
            <strong>Chaos Engineering:</strong> Deliberately inject failures to verify your system handles them. Netflix&apos;s Chaos Monkey (kill random instances) and Chaos Kong (simulate region failure) pioneered this approach.
            <br /><br />
            <strong>TPM relevance:</strong> DR is often &quot;slideware&quot;&mdash;documented but never tested. Your job is to ensure DR is actually exercised,
            failover runbooks work, and RTO/RPO targets are validated through drills.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Amazon (AWS + Amazon.com)</span> &mdash; Multi-region is table stakes for AWS services. Formalized chaos practices (Fault Injection Simulator) and DR orchestration tools (Application Recovery Controller) show their investment.</li>
            <li><span className="font-medium text-foreground">Netflix</span> &mdash; Runs active-active across multiple AWS regions. Chaos engineering is cultural&mdash;they regularly &quot;evacuate&quot; entire regions to prove resilience.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-3 text-sm">
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Amazon</p>
              <p className="text-muted-foreground italic">&quot;At Amazon, multi-region DR is baseline expectation. As TPM, I&apos;d run the program that sets tiered RTO/RPO targets by service criticality, coordinates regular failover drills, and measures success through actual incident MTTR and &apos;revenue-at-risk&apos; reduction rather than just checkbox compliance.&quot;</p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Netflix</p>
              <p className="text-muted-foreground italic">&quot;Netflix&apos;s active-active architecture and Chaos Monkey are well-known. My role wouldn&apos;t be writing chaos tools&mdash;it&apos;s sequencing region evacuation playbooks, aligning SLOs with product teams, and proving resilience by running controlled failures in production without breaching customer-facing SLAs.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="2.8 Identity/Auth Systems" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          Identity is foundational&mdash;every request needs to know &quot;who is this user?&quot; and &quot;what can they do?&quot;
          At scale, identity systems must handle billions of authentications daily while meeting strict security and compliance requirements.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Identity & Access Management at Scale">
            <strong>Authentication:</strong> Proving you are who you claim (passwords, MFA, biometrics).
            <strong>Authorization:</strong> Determining what you&apos;re allowed to do (roles, permissions, policies).
            <br /><br />
            <strong>Zero Trust:</strong> The modern approach&mdash;never trust, always verify. Every request is authenticated and authorized regardless of network location.
            Replaces the old model of &quot;inside the firewall = trusted.&quot;
            <br /><br />
            <strong>Compliance:</strong> SOC2, GDPR, HIPAA all have identity requirements. Audit logs, access reviews, and data residency add complexity.
            <br /><br />
            <strong>TPM relevance:</strong> Identity is inherently cross-cutting&mdash;every team depends on it, but no single team owns the full picture.
            Principal TPMs often own identity modernization programs that span multiple years and organizations.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Okta</span> &mdash; Market leader in cloud IAM. Their architecture handles SSO for thousands of enterprises, lifecycle management, and strong compliance posture.</li>
            <li><span className="font-medium text-foreground">Microsoft (Entra ID / Azure AD)</span> &mdash; Powers identity for Microsoft 365 and Azure. Handles both enterprise and consumer auth at massive scale with conditional access and zero-trust features.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-3 text-sm">
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Okta</p>
              <p className="text-muted-foreground italic">&quot;Using Okta as reference, I&apos;d own cross-cutting programs that roll out SSO and zero-trust policies across business units. My success metrics are reduced auth-related incidents and smoother audits&mdash;not just number of integrations onboarded. The goal is fewer security incidents and faster compliance cycles.&quot;</p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Microsoft (Entra ID)</p>
              <p className="text-muted-foreground italic">&quot;At Microsoft scale with Entra ID, I&apos;d coordinate conditional access and zero-trust initiatives across M365 and Azure. The challenge is balancing security posture, compliance requirements, and login friction. I&apos;d measure improvements through risky sign-in detection rates and policy coverage, not just deployment milestones.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="2.9 API Platform Management" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          APIs are how systems communicate, both internally and with external partners.
          A well-run API platform enables developer productivity and partner integrations; a poorly-run one creates friction and incidents.
        </p>
        <ul className="space-y-1">
          <BulletItem title="API Platform / Developer Experience">
            <strong>Versioning:</strong> How do you evolve APIs without breaking existing consumers? Strategies include URL versioning (/v1/, /v2/), header versioning, or additive-only changes.
            <br /><br />
            <strong>Deprecation:</strong> Removing old API versions requires communication, migration support, and timeline discipline.
            <br /><br />
            <strong>Rate limiting:</strong> Protecting your system from abuse or accidental overload. Must be fair, predictable, and well-documented.
            <br /><br />
            <strong>Developer experience:</strong> Documentation, SDKs, sandbox environments, and support. Good DX accelerates partner adoption; bad DX creates support burden.
            <br /><br />
            <strong>TPM relevance:</strong> API governance is a common TPM responsibility&mdash;balancing internal velocity with external stability, coordinating deprecation timelines, and ensuring platform reliability.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Stripe</span> &mdash; Gold standard for external APIs. Clean versioning, strong backwards compatibility, excellent documentation, and disciplined deprecation policies. Partners trust their APIs won&apos;t break unexpectedly.</li>
            <li><span className="font-medium text-foreground">Twilio</span> &mdash; High-scale communications API with robust developer experience, global rate limiting, and clear partner onboarding paths.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-3 text-sm">
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Stripe</p>
              <p className="text-muted-foreground italic">&quot;Stripe is the benchmark for API platforms. In a similar role, I&apos;d steward the API lifecycle&mdash;versioning, deprecations, rate limits, partner onboarding&mdash;and measure success through partner integration time, SLA stability, and zero surprise-breaking changes. The goal is APIs that partners can bet their business on.&quot;</p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Twilio</p>
              <p className="text-muted-foreground italic">&quot;In a Twilio-like platform, I&apos;d lead programs that harden global rate limiting and improve developer experience. The north star is reliable, predictable APIs&mdash;measured by reduced incident volume and higher usage from top accounts, not just uptime metrics.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="2.10 Vendor & Partner Program Management" color="purple">
        <p className="text-sm text-muted-foreground mb-3">
          Large platforms depend on external vendors and partners. Payment processors, cloud providers, shipping carriers, app developers&mdash;all are external dependencies that can fail.
          Managing these relationships is a Principal TPM responsibility.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Vendor & Partner Program Management">
            <strong>Contract &amp; SLA management:</strong> Negotiating terms that protect your business, defining clear SLAs, and establishing escalation paths.
            <br /><br />
            <strong>Multi-vendor strategy:</strong> Avoiding single points of failure by qualifying backup vendors. Adds complexity but reduces risk.
            <br /><br />
            <strong>External dependency risk:</strong> Tracking which vendors are critical, monitoring their health, and having contingency plans.
            <br /><br />
            <strong>TPM relevance:</strong> At Principal level, you often own programs with critical external dependencies.
            Your job is to treat key vendors as extensions of your platform&mdash;not just procurement relationships.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Amazon (Retail + AWS Marketplace)</span> &mdash; Manages ecosystems of third-party sellers and software vendors with rigorous SLAs, multi-vendor orchestration, and structured risk management.</li>
            <li><span className="font-medium text-foreground">Shopify</span> &mdash; Dense partner and app ecosystem with clear SLAs, app review processes, and deep integration patterns for thousands of external vendors.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-3 text-sm">
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Amazon</p>
              <p className="text-muted-foreground italic">&quot;At Amazon, I&apos;d treat key vendors like platform extensions. My job is owning the contract/SLA framework, establishing escalation paths, and building multi-vendor fallback strategies so a single provider issue never becomes a customer outage.&quot;</p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">Shopify</p>
              <p className="text-muted-foreground italic">&quot;With Shopify&apos;s app ecosystem as reference, I&apos;d run governance and onboarding programs for third-party integrations. I&apos;d define clear SLAs and technical requirements, and track ecosystem health through app quality, incident rates, and GMV flowing through partner-built extensions.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      {/* Section 3: Advanced Technical Topics (2026 Context) */}
      <h2 className="text-xl font-bold text-foreground mb-4 mt-10">
        3. Advanced Technical Topics (2026 Context)
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        These topics reflect what&apos;s changed since 2023: GenAI is now production infrastructure, cloud costs are under intense scrutiny,
        and regulatory requirements have expanded. These are the areas where you&apos;ll differentiate yourself in 2026 interviews.
      </p>

      <Subsection title="3.1 Generative AI Infrastructure (LLMOps)" color="green">
        <p className="text-sm text-muted-foreground mb-3">
          Generative AI has moved from demos to production systems. The challenge is no longer &quot;can we call GPT?&quot; but &quot;can we run AI reliably, cost-effectively, and safely at scale?&quot;
        </p>
        <ul className="space-y-1">
          <BulletItem title="Vector Databases & Retrieval (RAG)">
            <strong>What RAG solves:</strong> LLMs have knowledge cutoffs and hallucinate facts. Retrieval-Augmented Generation fetches relevant documents first, then asks the LLM to answer based on that context.
            <br /><br />
            <strong>Vector databases (Pinecone, Qdrant, Weaviate):</strong> Store documents as embeddings (numerical representations of meaning) and find similar documents quickly.
            <br /><br />
            <strong>TPM focus:</strong> Build vs. buy decisions, latency SLAs for retrieval, cost per query, and data residency/compliance requirements. You don&apos;t need to understand embedding algorithms&mdash;you need to evaluate vendors and set SLOs.
          </BulletItem>
          <BulletItem title="Inference Orchestration">
            <strong>The problem:</strong> LLM inference is expensive. A single GPT-4 call costs 10-100x what traditional API calls cost. At scale, this dominates your cloud bill.
            <br /><br />
            <strong>Cost levers:</strong> Model selection (smaller models for simple tasks), caching (reuse responses for similar queries), batching (combine requests), and fallback chains (try cheap model first, escalate if needed).
            <br /><br />
            <strong>TPM focus:</strong> Capacity planning, committed use negotiations with providers, cost attribution to product teams, and defining fallback policies. Your metric is &quot;effective cost per successful call at SLO&quot;&mdash;not raw GPU utilization.
          </BulletItem>
          <BulletItem title="Evaluation Frameworks">
            <strong>The problem:</strong> How do you know if your LLM is good? Traditional software has tests with clear pass/fail. LLM outputs are nuanced&mdash;&quot;is this summary accurate?&quot; is subjective.
            <br /><br />
            <strong>LLM-as-a-judge:</strong> Use one LLM to evaluate another&apos;s outputs. Scalable but requires careful prompt design and calibration.
            <br /><br />
            <strong>Guardrails:</strong> Automated checks for harmful outputs, PII leakage, hallucinations, or off-topic responses.
            <br /><br />
            <strong>TPM focus:</strong> Defining evaluation criteria, building red-team processes, establishing release gates tied to eval scores, and tracking safety metrics (harmful output rate, time-to-mitigate).
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">RAG / Vector Databases</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Microsoft (Azure AI Search + RAG)</span> &mdash; Enterprise-grade RAG with integrated vector search, RBAC, PII controls, and compliance-first design for regulated industries.</li>
                <li><span className="font-medium text-foreground">Pinecone</span> &mdash; Widely-used managed vector database with strong reliability, recall, and latency SLAs at enterprise scale.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Inference Orchestration</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Azure OpenAI / AWS Bedrock</span> &mdash; Multi-provider gateways with different cost/latency SKUs, forcing real trade-off decisions.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Evaluation & Guardrails</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Anthropic / OpenAI</span> &mdash; Leaders in using models to evaluate models and building platform-level safety controls.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-4 text-sm">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">RAG / Vector DBs</p>
              <p className="text-muted-foreground italic">&quot;For RAG infrastructure, I&apos;d frame it as a build vs. buy decision. Key factors: latency SLOs for retrieval per region, cost per 1K queries, and compliance requirements (PII, data residency). My goal is a single GenAI retrieval abstraction with clear SLAs and an exit strategy if vendor economics regress.&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Inference Orchestration</p>
              <p className="text-muted-foreground italic">&quot;For inference, I focus on capacity planning vs. forecasted QPS, negotiating committed use for better unit costs, and defining fallback chains (primary model &rarr; cheaper model &rarr; cached response) tied to business SLAs. My north star is effective cost per successful call at or under latency SLO.&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Evaluation & Guardrails</p>
              <p className="text-muted-foreground italic">&quot;For LLM evaluation, I&apos;d own: a red-team and eval pipeline running before and after model updates, a policy engine routing high-risk responses through stricter filters, and governance metrics like harmful output rate and time-to-mitigate. The value story is reduced regulatory and brand risk per token served.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="3.2 FinOps & Sustainability (P&L Impact)" color="green">
        <p className="text-sm text-muted-foreground mb-3">
          Cloud costs have become a board-level concern. After years of &quot;move fast, optimize later,&quot; companies are now under pressure to show unit economics and reduce waste.
          Carbon footprint is also increasingly regulated and reported.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Cloud Cost Optimization">
            <strong>The shift:</strong> Engineering teams used to optimize for velocity. Now they&apos;re accountable for cost-per-request and margin contribution.
            <br /><br />
            <strong>Key practices:</strong> Right-sizing (don&apos;t over-provision), reserved/committed use (prepay for discounts), spot instances (cheap but interruptible), and cost attribution (charge back to teams).
            <br /><br />
            <strong>Carbon-aware computing:</strong> Cloud providers now expose carbon data alongside cost. Some workloads can shift to lower-carbon regions or times.
            <br /><br />
            <strong>TPM relevance:</strong> Making cost and carbon first-class SLIs, tying engineering OKRs to efficiency metrics, and reporting savings to finance in hard dollars.
          </BulletItem>
          <BulletItem title="Spot Instance Orchestration">
            <strong>The trade-off:</strong> Spot/preemptible instances cost 60-90% less than on-demand, but can be terminated with short notice.
            <br /><br />
            <strong>Where it works:</strong> Batch processing, CI/CD, feature stores, ML training&mdash;workloads that can checkpoint and restart.
            <br /><br />
            <strong>Where it doesn&apos;t:</strong> User-facing services that can&apos;t tolerate interruption without impacting experience.
            <br /><br />
            <strong>TPM relevance:</strong> Identifying safe workloads for spot, defining failover policies when instances are reclaimed, and reporting COGS savings to finance.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Microsoft Azure</span> &mdash; Carbon Optimization dashboard combines cost and carbon data in one view, directly tying FinOps to sustainability.</li>
            <li><span className="font-medium text-foreground">Google Cloud</span> &mdash; Carbon Footprint integrated with spend data, aligning cost optimization with emissions reduction.</li>
            <li><span className="font-medium text-foreground">AWS + Flexera</span> &mdash; Mature spot fleet management plus third-party FinOps tools for automated optimization.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-4 text-sm">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Cloud Cost & Carbon</p>
              <p className="text-muted-foreground italic">&quot;I&apos;d make cost-per-request and carbon-per-request first-class SLIs. My program would drive right-sizing commitments, tie engineering OKRs to moving services from &apos;red&apos; to &apos;green&apos; efficiency tiers, and report results as X% COGS reduction and Y% carbon reduction without breaching SLOs.&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Spot Orchestration</p>
              <p className="text-muted-foreground italic">&quot;For spot instances, I focus on which workloads are safe for interruption (batch jobs, feature stores, ML training), failover policies from spot to on-demand when error budgets burn, and reporting COGS savings to finance as hard dollars. It&apos;s an explicit trade-off: extra complexity vs. COGS saved.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="3.3 Data Sovereignty & Privacy Engineering" color="green">
        <p className="text-sm text-muted-foreground mb-3">
          GDPR was the start. Now CCPA, AI Act, and country-specific regulations create a patchwork of requirements.
          Systems must know where data lives, who can access it, and prove compliance on demand.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Differential Privacy">
            <strong>The problem:</strong> You want aggregate analytics without exposing individual user data. Traditional anonymization often fails&mdash;re-identification attacks can unmask individuals.
            <br /><br />
            <strong>The solution:</strong> Add mathematical noise to data such that aggregate statistics remain useful but individual records can&apos;t be extracted.
            <br /><br />
            <strong>TPM relevance:</strong> This is deep technical territory, but you should know it exists for discussions about analytics on sensitive data.
            Apple and Google use it for device telemetry without compromising user privacy.
          </BulletItem>
          <BulletItem title="Zero-Trust Architecture">
            <strong>The old model:</strong> &quot;Inside the corporate network = trusted.&quot; VPNs create a secure perimeter.
            <br /><br />
            <strong>The new model:</strong> Never trust, always verify. Every request is authenticated and authorized based on identity, device state, and context&mdash;regardless of network location.
            <br /><br />
            <strong>TPM relevance:</strong> Zero-trust migrations are multi-year programs. You&apos;d own phased rollouts of identity-aware proxies, VPN decommissioning, and metrics like phishing success rates and lateral movement incidents.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Data Privacy</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Apple</span> &mdash; Privacy-by-design: on-device processing, minimal data collection, differential privacy for telemetry. Sets the consumer privacy bar.</li>
                <li><span className="font-medium text-foreground">Microsoft / Google Cloud</span> &mdash; Clear data residency controls, regionalization options, and compliance tooling for GDPR/CCPA.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Zero Trust</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Google (BeyondCorp)</span> &mdash; The canonical zero-trust implementation. Identity-aware proxies and micro-segmentation at Google scale.</li>
                <li><span className="font-medium text-foreground">Zscaler</span> &mdash; Enterprise zero-trust vendor often cited for large-scale rollouts.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-4 text-sm">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Data Privacy</p>
              <p className="text-muted-foreground italic">&quot;The pattern is: collect less, process closer to the user, and gate data movement. I&apos;d classify data by regulatory regime (GDPR, CCPA, AI Act), enforce region pinning and automated policy checks in CI/CD, and measure policy violations and time-to-remediate. The output is reduced legal exposure, not just architecture diagrams.&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Zero Trust</p>
              <p className="text-muted-foreground italic">&quot;Zero trust is an org-wide migration from network-based to identity-based access. My ownership: phased rollout of identity-aware proxies, decommissioning legacy VPNs, and tracking phishing success rates, lateral movement incidents, and access approval latency. It&apos;s a one-way door, so we de-risk via phased cutovers with tight observability.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="3.4 Edge Intelligence" color="green">
        <p className="text-sm text-muted-foreground mb-3">
          Not everything should run in the cloud. Some workloads benefit from running closer to users&mdash;on devices, at CDN edges, or in local data centers.
          This reduces latency, saves bandwidth, and can improve privacy.
        </p>
        <ul className="space-y-1">
          <BulletItem title="On-Device AI">
            <strong>The value proposition:</strong> Run ML inference on phones, cars, or IoT devices. Benefits: instant response (no network round-trip), works offline, data never leaves device (privacy).
            <br /><br />
            <strong>The trade-offs:</strong> Limited compute/memory on devices, harder to update models, fragmented hardware ecosystem.
            <br /><br />
            <strong>TPM relevance:</strong> Deciding what runs on-device vs. cloud, A/B testing UX impact, and measuring cost savings from reduced egress and central compute.
          </BulletItem>
          <BulletItem title="WebAssembly (Wasm)">
            <strong>What it is:</strong> A portable binary format that runs near-native speed in sandboxed environments. Originally for browsers, now used for server-side extensions at CDN edges.
            <br /><br />
            <strong>Why it matters:</strong> Lets customers run custom code safely at edge locations (Cloudflare Workers, Fastly Compute@Edge) without the overhead of containers.
            <br /><br />
            <strong>TPM relevance:</strong> If you&apos;re running a platform, Wasm enables customer extensibility. You&apos;d define golden paths for safe edge deployment, resource guardrails, and adoption metrics.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">On-Device AI</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Apple</span> &mdash; Neural Engine for on-device ML (Face ID, Siri, photo search). Privacy and latency are the drivers.</li>
                <li><span className="font-medium text-foreground">Tesla / Automotive</span> &mdash; On-device inference for autonomous driving with periodic cloud sync. Can&apos;t rely on connectivity for safety-critical decisions.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">WebAssembly</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Cloudflare Workers / Fastly</span> &mdash; Run customer code at edge in Wasm sandboxes. Fast cold starts, secure isolation, global distribution.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-4 text-sm">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">On-Device AI</p>
              <p className="text-muted-foreground italic">&quot;On-device AI is a latency and privacy optimization. I&apos;d drive clear partitioning decisions (what must run on-device vs. what can tolerate cloud latency), A/B tests around user experience (offline performance, battery impact), and cost savings from reduced egress. The north star is time-to-value for users and reduced infra TCO.&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Wasm at Edge</p>
              <p className="text-muted-foreground italic">&quot;For Wasm at edge, I focus on golden paths for teams to ship edge logic safely, guardrails on resource usage and blast radius, and adoption metrics: % of traffic through Wasm-based paths and incident rates compared to legacy extension models.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="3.5 AI-Driven Developer & Ops Tooling" color="green">
        <p className="text-sm text-muted-foreground mb-3">
          AI is now embedded in developer workflows and operations. Code assistants write code; AIOps tools diagnose incidents.
          The question is no longer &quot;should we use AI here?&quot; but &quot;how do we measure its impact and manage its risks?&quot;
        </p>
        <ul className="space-y-1">
          <BulletItem title="AI-assisted Incident Management">
            <strong>What&apos;s new:</strong> Tools like Datadog and New Relic are adding LLM-powered features: summarize this incident, suggest root causes, recommend runbooks.
            <br /><br />
            <strong>The value:</strong> Faster MTTR, fewer escalations, better on-call experience.
            <br /><br />
            <strong>The risk:</strong> AI suggestions might be wrong. Humans must still own the final remediation decision.
            <br /><br />
            <strong>TPM relevance:</strong> Integrating AI into existing on-call tooling, tracking MTTR and escalation changes, and setting guardrails so AI assists but doesn&apos;t replace human judgment on critical decisions.
          </BulletItem>
          <BulletItem title="AI-enhanced Developer Workflows">
            <strong>What&apos;s here:</strong> GitHub Copilot and similar tools for code completion, test generation, and code review assistance.
            <br /><br />
            <strong>The value:</strong> Faster development, especially for boilerplate and unfamiliar codebases.
            <br /><br />
            <strong>The risks:</strong> Security (don&apos;t paste sensitive code into public models), quality (AI-generated code needs review), and licensing (training data provenance).
            <br /><br />
            <strong>TPM relevance:</strong> Rolling out in cohorts, measuring cycle time and defect rate impacts, defining secure usage policies, and tying success to business outcomes (faster feature delivery) not novelty.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">GitHub Copilot</span> &mdash; Flagship AI coding assistant. Widely adopted, measurable impact on developer productivity.</li>
            <li><span className="font-medium text-foreground">Datadog / New Relic</span> &mdash; Adding LLM-powered incident triage and RCA features to their observability platforms.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-4 text-sm">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">AI-assisted Incident Management</p>
              <p className="text-muted-foreground italic">&quot;I&apos;d run a program that integrates AI summaries and suggested runbooks into existing on-call tooling, tracks MTTR and escalation changes, and sets guardrails so humans still own final remediation. The story I&apos;d tell: &apos;We cut MTTR by X% without increasing change failure rate.&apos;&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">AI-enhanced Developer Workflows</p>
              <p className="text-muted-foreground italic">&quot;For Copilot rollout, I&apos;d deploy in cohorts, measure review throughput and defect rates, define secure usage policies (no sensitive prompts in public models), and tie success to cycle time and lead time improvements. It&apos;s about ARR unlocked via faster delivery, not &apos;cool AI.&apos;&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="3.6 Modern Data & Streaming Architectures" color="green">
        <p className="text-sm text-muted-foreground mb-3">
          Real-time data is now expected, not exceptional. Users want instant updates; ML models need fresh features; fraud systems need sub-second decisions.
          This requires rethinking how data flows through your organization.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Unified Batch + Streaming">
            <strong>The old way:</strong> Separate pipelines for batch (daily reports) and streaming (real-time dashboards). Different tools, different teams, different &quot;truths.&quot;
            <br /><br />
            <strong>The new way:</strong> Unified platforms that handle both. Lambda architecture (parallel batch and stream) or Kappa architecture (everything as streams, replay for batch).
            <br /><br />
            <strong>TPM relevance:</strong> Consolidating fragmented pipelines, standardizing data freshness SLAs, reducing duplicated ETL costs, and eliminating inconsistent metrics between systems.
          </BulletItem>
          <BulletItem title="High-throughput Event Streaming">
            <strong>Delivery guarantees:</strong>
            <br />
            &bull; <strong>At-most-once:</strong> Fire and forget. Fast but can lose data.
            <br />
            &bull; <strong>At-least-once:</strong> Retry until acknowledged. No data loss but can have duplicates.
            <br />
            &bull; <strong>Exactly-once:</strong> Each message processed exactly once. Hard and expensive to achieve end-to-end.
            <br /><br />
            <strong>The practical approach:</strong> Most systems use at-least-once delivery with idempotent processing at the destination. This achieves &quot;effectively exactly-once&quot; outcomes without the complexity of distributed transactions.
            <br /><br />
            <strong>TPM relevance:</strong> Understanding when exactly-once semantics actually matter (money, critical state) vs. when at-least-once with dedup is sufficient. Designing backpressure policies and incident playbooks for when queues back up.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Netflix</span> &mdash; Kafka-centric platform supporting both batch and streaming. Real-time personalization requires fresh data; analytics requires historical context.</li>
            <li><span className="font-medium text-foreground">Uber</span> &mdash; High-throughput streaming for pricing, ETA, and fraud. Strong focus on exactly-once semantics where money is involved, at-least-once with dedup elsewhere.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-4 text-sm">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Unified Batch + Streaming</p>
              <p className="text-muted-foreground italic">&quot;I&apos;d position my program as consolidating fragmented pipelines into a unified platform, standardizing SLAs for data freshness and quality, and reducing duplicated ETL spend. The outcomes: fewer divergent &apos;truths,&apos; lower data platform costs, and faster experiment iteration.&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Event Streaming</p>
              <p className="text-muted-foreground italic">&quot;For streaming, I focus on exactly-once semantics only where money or critical state is involved, designing backpressure strategies with clear SLOs, and building incident playbooks for when queues build up. The value is predictable latency under load and controlled blast radius when things degrade.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="3.7 AI Product Integration Patterns" color="green">
        <p className="text-sm text-muted-foreground mb-3">
          Adding AI to products is no longer experimental&mdash;it&apos;s expected. But bolting AI onto existing workflows without clear metrics and feedback loops leads to features that &quot;feel smart&quot; but don&apos;t actually help users.
        </p>
        <ul className="space-y-1">
          <BulletItem title="AI Copilots/Assistants">
            <strong>The pattern:</strong> AI that assists users in existing workflows (Microsoft 365 Copilot, Salesforce Einstein). Not standalone AI apps, but AI embedded where users already work.
            <br /><br />
            <strong>Key components:</strong> Telemetry (which suggestions are accepted/ignored), feedback loops (turn user corrections into training data), and continuous model updates based on real usage.
            <br /><br />
            <strong>TPM relevance:</strong> Defining acceptance metrics tied to user outcomes (productivity, satisfaction) not just model scores. Building labeling pipelines and release gates.
          </BulletItem>
          <BulletItem title="RAG vs. Fine-tuning vs. Small Models">
            <strong>The decision framework:</strong>
            <br />
            &bull; <strong>RAG:</strong> Data changes frequently, need access controls, don&apos;t want data baked into model weights.
            <br />
            &bull; <strong>Fine-tuning:</strong> Stable domain, need specialized behavior, willing to invest in training.
            <br />
            &bull; <strong>Small Language Models (SLMs):</strong> Cost and latency critical, simpler tasks, can accept lower quality.
            <br /><br />
            <strong>TPM relevance:</strong> This is an economic and risk decision, not just technical. Making it explicit in decision docs so teams don&apos;t &quot;default to GPT-4&quot; for everything.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">AI Copilots</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Microsoft (M365 Copilot)</span> &mdash; AI assistant layered onto existing Office workflows with telemetry loops and continuous model updates.</li>
                <li><span className="font-medium text-foreground">Salesforce (Einstein)</span> &mdash; AI deeply integrated into CRM with clear ROI metrics and enterprise-grade feedback loops.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Model Selection Trade-offs</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">AI21 / OpenAI</span> &mdash; Public guidance on when to use RAG, fine-tuning, or smaller models based on cost, latency, and privacy requirements.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-4 text-sm">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">AI Copilots</p>
              <p className="text-muted-foreground italic">&quot;For AI assistants, I&apos;d own telemetry loops capturing which suggestions are accepted vs. ignored, labeling funnels turning user feedback into training data, and release gates tied to user satisfaction and productivity metrics&mdash;not just model offline scores. That ties model iteration to revenue and retention.&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">RAG vs. Fine-tuning vs. SLMs</p>
              <p className="text-muted-foreground italic">&quot;I treat this as an economic decision. If data is sensitive and changes often, prefer RAG with access controls. If prompts are stable and domain is narrow, consider fine-tuning. If latency and cost are critical, evaluate SLMs. I make this explicit in decision docs so teams don&apos;t default to the most expensive option everywhere.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="3.8 Advanced Governance, Risk & Compliance" color="green">
        <p className="text-sm text-muted-foreground mb-3">
          AI regulation is accelerating. The EU AI Act is law. US states have their own requirements. Companies must prove their AI is safe, fair, and explainable.
          This is no longer a &quot;nice to have&quot;&mdash;it&apos;s a blocker to shipping features.
        </p>
        <ul className="space-y-1">
          <BulletItem title="AI Safety & Governance">
            <strong>What&apos;s required:</strong> Risk registers for AI features, red-teaming before launches, audit trails for model changes, and incident response for AI failures.
            <br /><br />
            <strong>Red-teaming:</strong> Systematically trying to break your AI (generate harmful outputs, extract training data, bypass guardrails) before attackers do.
            <br /><br />
            <strong>TPM relevance:</strong> Translating external frameworks (NIST AI RMF, EU AI Act) into internal checkpoints. Building governance processes that enable rather than block AI deployment.
          </BulletItem>
          <BulletItem title="Regulatory-aware Architecture">
            <strong>The challenge:</strong> Different regulations in different regions. GDPR in EU, CCPA in California, sector-specific rules for healthcare and finance.
            <br /><br />
            <strong>The solution:</strong> Policy-as-code. Automated checks in CI/CD that block deployments violating data residency or retention rules. Data flows tagged with purpose and jurisdiction.
            <br /><br />
            <strong>TPM relevance:</strong> Reducing audit cost and time, avoiding &quot;stop-ship&quot; moments when legal discovers a compliance issue at launch time.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Microsoft / Google / OpenAI</span> &mdash; Publicly documented AI governance frameworks, red-teaming practices, and alignment with NIST/EU AI Act.</li>
            <li><span className="font-medium text-foreground">Specialized AI red-teaming firms</span> &mdash; Enterprises outsource adversarial testing for additional rigor and independence.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-4 text-sm">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">AI Safety & Governance</p>
              <p className="text-muted-foreground italic">&quot;I&apos;d translate external frameworks into internal checkpoints: a formal risk register for AI features, recurring red-team cadence before major launches, and audit trails for model/policy changes. KPIs are issues caught pre-launch, policy violations in production, and time-to-mitigate.&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Regulatory-aware Architecture</p>
              <p className="text-muted-foreground italic">&quot;My focus is wiring regulation into the architecture: region-scoped services, policy-as-code, automated checks in CI/CD. Every data flow tagged with residency and purpose, changes blocked if they violate rules, and reporting that maps systems to regulatory obligations. This reduces audit cost and avoids expensive &apos;stop-ship&apos; moments.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="3.9 Organizational & Portfolio-Level Topics" color="green">
        <p className="text-sm text-muted-foreground mb-3">
          Principal TPMs don&apos;t just run projects&mdash;they manage portfolios of initiatives and make investment decisions across multiple programs.
          This requires thinking in years, not quarters, and measuring platform value, not just project completion.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Portfolio-level Risk Management">
            <strong>The mindset shift:</strong> Individual projects succeed or fail. Portfolios need diversification&mdash;some bets pay off, others don&apos;t.
            <br /><br />
            <strong>Key practices:</strong> Map dependencies across initiatives, define phased migrations with kill criteria, quantify risk reduction at each milestone, and ruthlessly cut underperforming bets.
            <br /><br />
            <strong>TPM relevance:</strong> You&apos;re not just tracking status&mdash;you&apos;re making investment decisions. &quot;Should we double down or pivot?&quot; requires portfolio thinking.
          </BulletItem>
          <BulletItem title="Platform Leverage Metrics">
            <strong>The question:</strong> How do you prove a platform is valuable? Teams using it ship faster? Fewer incidents? Lower costs?
            <br /><br />
            <strong>Key metrics:</strong> Adoption (% of teams on the golden path), time-to-first-productive-use, incident rate for adopters vs. non-adopters, and cycle time improvements.
            <br /><br />
            <strong>TPM relevance:</strong> These metrics justify continued platform investment. &quot;Internal NPS&quot; sounds soft; &quot;adopters have 40% fewer incidents and ship 2x faster&quot; gets budget approved.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Amazon</span> &mdash; Known for multi-year platform bets with clear kill criteria. Feature flags and phased rollouts de-risk big investments. Ruthless about cutting what doesn&apos;t work.</li>
            <li><span className="font-medium text-foreground">Spotify / Netflix</span> &mdash; Strong platform leverage stories. Backstage (Spotify) and internal experimentation platforms (Netflix) have clear adoption curves and measured impact on developer velocity.</li>
          </ul>
        </div>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Interview Framing:</p>
          <div className="space-y-4 text-sm">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Portfolio Risk Management</p>
              <p className="text-muted-foreground italic">&quot;I treat platforms and infra shifts as multi-year bets. My responsibilities: map dependencies, define phased migrations with feature flags, quantify risk reduction and value unlocked at each milestone, and kill or pivot underperforming bets early based on adoption and unit economics. It&apos;s portfolio management, not project management.&quot;</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">Platform Leverage Metrics</p>
              <p className="text-muted-foreground italic">&quot;I define platform leverage as: adoption (% of teams on the golden path), time-to-first-productive-use for new services, and incident reduction or cycle-time improvements for adopters vs. non-adopters. That gives me concrete data to argue for or against further platform investment in P&amp;L terms.&quot;</p>
            </div>
          </div>
        </div>
      </Subsection>

      {/* Section 4: Modern High-Complexity Implementations */}
      <h2 className="text-xl font-bold text-foreground mb-4 mt-10">
        4. Modern High-Complexity Implementations
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        These are the &quot;big rock&quot; designs that demonstrate Principal-level thinking in interviews.
        They combine multiple concepts from earlier sections and require reasoning about trade-offs at scale.
        You don&apos;t need to build these yourself, but you should be able to discuss their architecture and key decisions.
      </p>

      <Subsection title="4.1 AI/ML Systems" color="amber">
        <p className="text-sm text-muted-foreground mb-3">
          Enterprise AI infrastructure has matured from &quot;one-off model deployments&quot; to &quot;centralized platforms serving hundreds of use cases.&quot;
          These systems handle the complexity of multiple providers, cost controls, and governance at scale.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Enterprise GenAI Gateway">
            <strong>What it is:</strong> A centralized proxy that sits between your applications and multiple LLM providers (OpenAI, Anthropic, Google, etc.).
            <br /><br />
            <strong>What it does:</strong> Rate limiting (prevent runaway costs), PII masking (don&apos;t send sensitive data to external models), cost tracking (attribute spend to teams), model fallback (if primary fails, try backup), and centralized observability.
            <br /><br />
            <strong>Why it matters:</strong> Without it, every team builds their own integration, costs are invisible, and governance is impossible.
          </BulletItem>
          <BulletItem title="Real-time Feature Stores">
            <strong>What they solve:</strong> ML models need features (computed values like &quot;user&apos;s purchase count in last 7 days&quot;). In training, you compute these from historical data. In production, you need them in milliseconds.
            <br /><br />
            <strong>The architecture:</strong> Offline store (for training, batch computed) and online store (for serving, pre-computed and cached). Must guarantee consistency between them&mdash;&quot;training-serving skew&quot; breaks models.
            <br /><br />
            <strong>Why it matters:</strong> Fraud detection, recommendations, and pricing all need fresh features fast. Without a feature store, teams duplicate work and create inconsistencies.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">GenAI Gateway</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">AWS (Bedrock + LiteLLM pattern)</span> &mdash; Reference architecture for multi-provider access with centralized governance.</li>
                <li><span className="font-medium text-foreground">Grab</span> &mdash; Built internal gateway accessing OpenAI, Azure, Bedrock, and Vertex with unified controls.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Feature Stores</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Uber (Michelangelo)</span> &mdash; The canonical example. Powers ETA, pricing, and fraud with sub-second feature retrieval.</li>
                <li><span className="font-medium text-foreground">Tecton</span> &mdash; Commercialized the Uber model. Widely referenced for real-time feature stores in fraud and ranking.</li>
              </ul>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="4.2 Global Infrastructure & Resilience" color="amber">
        <p className="text-sm text-muted-foreground mb-3">
          Global services must survive regional failures and serve users worldwide with low latency.
          This requires sophisticated traffic management, data replication, and failover orchestration.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Multi-Cloud / Multi-Region Control Planes">
            <strong>What it does:</strong> A &quot;Global Traffic Director&quot; that routes users to healthy regions, detects failures, and orchestrates failovers.
            <br /><br />
            <strong>The hard part:</strong> Evacuating an entire region in under 5 minutes without data loss. Requires pre-positioned capacity, replicated state, and well-tested runbooks.
            <br /><br />
            <strong>Multi-cloud vs. multi-region:</strong> Multi-region in one cloud is hard. Multi-cloud adds an order of magnitude complexity (different APIs, networking, consistency models). Most companies focus on multi-region first.
          </BulletItem>
          <BulletItem title="Planetary-Scale Databases">
            <strong>What they achieve:</strong> Globally distributed, strongly consistent databases. Google Spanner famously offers &quot;external consistency&quot;&mdash;transactions appear to execute in global order.
            <br /><br />
            <strong>How Spanner does it:</strong> TrueTime (GPS-synchronized clocks) gives bounded time uncertainty. Transactions wait for uncertainty to pass before committing. This enables strong consistency without traditional locking.
            <br /><br />
            <strong>The trade-offs:</strong> Higher latency than eventually-consistent systems. Requires specialized infrastructure (GPS/atomic clocks). Most applications don&apos;t need this; regional consistency is sufficient.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Global Traffic / Control Planes</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Netflix</span> &mdash; Multi-region active-active with sophisticated traffic steering and region evacuation patterns.</li>
                <li><span className="font-medium text-foreground">AWS</span> &mdash; Route 53, Global Accelerator, and Application Recovery Controller provide building blocks for global traffic management.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Planetary-Scale Databases</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Google Spanner</span> &mdash; The reference for globally consistent SQL. TrueTime is the key innovation.</li>
                <li><span className="font-medium text-foreground">Amazon Aurora Global</span> &mdash; MySQL/Postgres-compatible with cross-region replication and fast failover.</li>
              </ul>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="4.3 Platform & Developer Productivity" color="amber">
        <p className="text-sm text-muted-foreground mb-3">
          At Mag7 scale, developer productivity is a P&amp;L issue. If 10,000 engineers each waste 30 minutes a day on toil, that&apos;s 5,000 hours of lost productivity daily.
          Internal Developer Platforms aim to reclaim that time.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Internal Developer Platforms (IDP)">
            <strong>What they provide:</strong> &quot;Golden Paths&quot;&mdash;opinionated, automated workflows for common tasks (create a service, set up CI/CD, configure observability, deploy to production).
            <br /><br />
            <strong>The value proposition:</strong> New services go from &quot;weeks of setup&quot; to &quot;hours.&quot; Consistency reduces incidents. Developers focus on business logic, not infrastructure.
            <br /><br />
            <strong>The challenge:</strong> Platforms must earn adoption. Too rigid and teams route around them. Too flexible and you&apos;ve just added another option without simplifying anything.
          </BulletItem>
          <BulletItem title="Observability 2.0">
            <strong>What&apos;s changed:</strong> High-cardinality tracing (every request, every span, every attribute) enables root cause analysis that was previously impossible.
            AIOps applies ML to surface anomalies and suggest causes.
            <br /><br />
            <strong>TPM lens:</strong> The implementation details (trace formats, sampling strategies) are engineering territory.
            Your focus: incident escalation workflows, MTTR reduction programs, and tooling adoption metrics.
            <br /><br />
            <strong>The goal:</strong> Reduce mean time to recovery by giving engineers better tools, not by replacing their judgment.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Internal Developer Platforms</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Spotify (Backstage)</span> &mdash; Origin of the modern IDP movement. Open-sourced their internal portal; widely adopted across industry.</li>
                <li><span className="font-medium text-foreground">Fintech/Retail case studies</span> &mdash; Documented examples where IDPs cut service onboarding from weeks to hours and reduced incidents by ~40%.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Observability</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Uber</span> &mdash; Heavy investment in high-cardinality tracing. Public talks emphasize using observability to drive MTTR reduction.</li>
                <li><span className="font-medium text-foreground">Netflix</span> &mdash; Combines tracing with chaos engineering to iteratively reduce blast radius across hundreds of microservices.</li>
              </ul>
            </div>
          </div>
        </div>
      </Subsection>

      <Subsection title="4.4 Safety, Compliance & Ad-Tech" color="amber">
        <p className="text-sm text-muted-foreground mb-3">
          Some systems operate under extreme constraints: content moderation must balance free expression with safety at massive scale;
          ad-tech must make decisions in milliseconds while processing petabytes of data.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Content Moderation Pipelines">
            <strong>The challenge:</strong> Billions of pieces of content uploaded daily. Must detect harmful content (violence, misinformation, CSAM) while minimizing false positives that frustrate legitimate users.
            <br /><br />
            <strong>The approach:</strong> Hybrid systems combining fast heuristics, ML classifiers, and human review. Policy teams define rules; engineers implement detection; trust &amp; safety handles appeals.
            <br /><br />
            <strong>TPM focus:</strong> Not the ML models themselves, but policy escalation workflows, false-positive UX impact, and cross-functional coordination between policy, engineering, and legal teams.
          </BulletItem>
          <BulletItem title="Ad-Tech Bidding Engines">
            <strong>The constraint:</strong> Real-time bidding requires responses in ~10 milliseconds. During that time, the system must: receive bid request, look up user profile, run auction logic, and return a bid.
            <br /><br />
            <strong>At scale:</strong> Millions of auctions per second, petabytes of telemetry, and constant optimization for revenue and relevance.
            <br /><br />
            <strong>TPM relevance:</strong> Understanding ad-tech helps in many contexts&mdash;similar patterns appear in recommendations, pricing, and personalization. The latency constraints force interesting architectural decisions.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Reference Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Content Moderation</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Meta (Facebook/Instagram)</span> &mdash; Industry benchmark for scale. Multi-modal detection, policy workflows, appeals processes, and regional policy variations.</li>
                <li><span className="font-medium text-foreground">YouTube (Google)</span> &mdash; Massive video moderation pipeline with hybrid ML + human review and strong compliance posture.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Ad-Tech</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Google Ads</span> &mdash; The canonical real-time auction engine at planetary scale.</li>
                <li><span className="font-medium text-foreground">The Trade Desk</span> &mdash; Independent DSP known for low-latency bidding infrastructure.</li>
              </ul>
            </div>
          </div>
        </div>
      </Subsection>

      {/* Section 5: Interview Clips */}
      <h2 className="text-xl font-bold text-foreground mb-4 mt-10">
        5. Interview Stories (CADE Format)
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        These stories demonstrate Principal-level thinking using the <strong>CADE framework</strong>: Context (the situation and why it mattered),
        Action (what you specifically did), Decisions/Trade-offs (the hard choices and why you made them), and Effect (measurable outcomes).
        Each story can flex for leadership, system design, or execution questions depending on what you emphasize.
      </p>

      {/* Story 1 */}
      <div className="mb-8 p-5 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/20">
        <h3 className="text-lg font-bold text-foreground mb-3">Story 1: Real-time Fraud Feature Store &amp; GenAI Integration</h3>
        <p className="text-xs text-muted-foreground mb-4">Demonstrates: ML Platform, Streaming Architecture, Build vs. Buy, Regulatory Awareness</p>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-primary mb-1">Context</p>
            <p className="text-muted-foreground">Our telecom fraud system was batch-based&mdash;it detected abuse hours after transactions occurred. By then, the damage was done: chargebacks processed, bad debt accumulated. Finance estimated mid-seven-figure annual losses and wanted sub-second decisions. But they also didn&apos;t want to blow up infrastructure costs to get there.</p>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Action</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Proposed a <strong>real-time fraud decisioning platform</strong> built on a feature store (similar to Feast/Tecton): offline store for model training, online store for sub-second serving.</li>
              <li>Ran a structured build-vs-buy evaluation across 3 vendors plus an internal option. Scored on: latency SLOs, cost per 1K decisions, data residency constraints, and time-to-value.</li>
              <li>Aligned fraud, data engineering, and infrastructure teams on MVP scope: start with top 5 fraud patterns and 20 core features. Defer the long tail.</li>
              <li>Defined clear SLOs: P99 decision latency &lt;150ms, availability 99.99%, false-positive reduction target of 20% vs. legacy rules-only system.</li>
              <li>Built an experiment framework: every rule change or model update was dark-launched, then A/B tested before full rollout.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Decisions / Trade-offs</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Chose <strong>managed feature store over in-house</strong>: accepted less control in exchange for faster time-to-value and better streaming semantics support.</li>
              <li>Accepted higher short-term infra cost to ensure all reads came from the online store (no dual-path), eliminating training-serving skew that had burned us before.</li>
              <li>For GenAI, explicitly scoped it to <strong>analyst tooling only</strong> (explanations, RCA summaries)&mdash;not inline fraud decisions. Avoided opaque production decisions and regulatory risk.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Effect</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Cut fraud decision time from minutes to <strong>&lt;200ms P99</strong>, enabling true pre-authorization blocking.</li>
              <li>Reduced false positives by ~15-20%, directly lowering support tickets and customer churn.</li>
              <li>Loss reduction and OPEX savings justified Phase 2 funding (more features, additional geos) as a multi-year platform bet.</li>
            </ul>
          </div>

          <p className="text-xs italic text-muted-foreground mt-3 pt-3 border-t border-border/50">
            <strong>Use for:</strong> &quot;Tell me about building an ML platform,&quot; &quot;How do you handle build vs. buy?&quot; or &quot;How do you think about GenAI in regulated contexts?&quot;
          </p>
        </div>
      </div>

      {/* Story 2 */}
      <div className="mb-8 p-5 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/20">
        <h3 className="text-lg font-bold text-foreground mb-3">Story 2: Multi-Region DR &amp; Control Plane for Telco Platform</h3>
        <p className="text-xs text-muted-foreground mb-4">Demonstrates: Disaster Recovery, Cross-org Program Management, Risk Quantification</p>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-primary mb-1">Context</p>
            <p className="text-muted-foreground">Our core telecom provisioning and fraud services were &quot;active-passive on paper only.&quot; The DR site existed but had never been tested under load. A real region outage would have taken us down for hours, with SLA penalties across multiple countries and regulatory scrutiny we weren&apos;t prepared for.</p>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Action</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Led a cross-org program to move critical services to <strong>multi-region active-active</strong> and less critical analytics to tested <strong>active-passive</strong>.</li>
              <li>Defined tiered RTO/RPO targets based on business impact: Tier 0 (auth, provisioning, fraud): RTO &le;5 min, RPO ~0. Tier 1 (reporting): RTO &le;1 hr, RPO 15-30 min.</li>
              <li>Partnered with infrastructure to design a &quot;global traffic director&quot; control plane: automated health checks, failover runbooks, and regular game days.</li>
              <li>Instituted chaos drills starting with low-risk services, ramping up to Tier 0, always with clear abort criteria and stakeholder communication plans.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Decisions / Trade-offs</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Deliberately <strong>did not go multi-cloud</strong> for these workloads. The complexity and consistency overhead outweighed incremental benefit vs. multi-region in a single cloud.</li>
              <li>For data stores, chose technologies with proven global replication (Spanner/Aurora Global equivalents) <strong>only for Tier 0</strong>. Cheaper regional replication for Tier 1.</li>
              <li>Pushed for <strong>phased cutover</strong>: read-only replicas first, then shadow traffic, then partial writes. Avoided big-bang migration risk.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Effect</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Demonstrated live failover in under <strong>5 minutes RTO</strong> for Tier 0 during drills, with zero data loss for critical flows.</li>
              <li>Converted DR from slideware to tested capability. Used in contractual negotiations and regulatory responses.</li>
              <li>Reduced aggregate downtime risk enough that finance accepted modestly higher steady-state infra costs as justified.</li>
            </ul>
          </div>

          <p className="text-xs italic text-muted-foreground mt-3 pt-3 border-t border-border/50">
            <strong>Use for:</strong> &quot;Tell me about resiliency/DR,&quot; &quot;Multi-region vs. multi-cloud decisions,&quot; or &quot;A time you reduced operational risk.&quot;
          </p>
        </div>
      </div>

      {/* Story 3 */}
      <div className="mb-8 p-5 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/20">
        <h3 className="text-lg font-bold text-foreground mb-3">Story 3: Internal Developer Platform &amp; Golden Paths</h3>
        <p className="text-xs text-muted-foreground mb-4">Demonstrates: Platform Thinking, Driving Adoption, Measuring Platform Value</p>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-primary mb-1">Context</p>
            <p className="text-muted-foreground">Our engineering org had grown to 300+ microservices, but onboarding a new service took weeks. Every team reinvented CI/CD, observability, and security configurations. Incident analysis was fragmented across tools. Platform teams were seen as ticket-takers, not leverage creators.</p>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Action</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Pitched an <strong>Internal Developer Platform (IDP)</strong> inspired by Spotify&apos;s Backstage: standardized golden paths for containerized services, CI/CD, security scanning, and observability.</li>
              <li>Created <strong>one opinionated path</strong> for the 90% use case (stateless services): baseline SLO templates, built-in tracing/metrics, default security posture (service mesh, mTLS, RBAC).</li>
              <li>Defined success metrics: time-to-first-prod-deploy, % of traffic on platform services, incident rate before vs. after migration.</li>
              <li>Worked with 3 &quot;design partner&quot; teams to co-build, using their feedback to refine the golden path before broader rollout.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Decisions / Trade-offs</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Explicitly chose <strong>opinionated over flexible</strong>: fewer options, better defaults. Some teams complained initially. Framed it as &quot;opt out, don&apos;t fork&quot;&mdash;you can deviate, but you need to justify it.</li>
              <li>Deferred exotic use cases (stateful, GPU-heavy) to a later phase. Kept v1 shippable in under 2 quarters and gathered data to argue for additional investment.</li>
              <li>For AI-assisted dev tooling, piloted GitHub Copilot in selected teams first, measuring cycle time and defect impact before scaling.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Effect</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Cut new-service onboarding from <strong>weeks to days</strong>, with measurable decrease in first-release incidents.</li>
              <li>After 2-3 quarters, &gt;60% of services used the platform. Incident postmortems showed faster MTTR due to standardized logging and tracing.</li>
              <li>Platform team&apos;s role shifted from ticket-taking to <strong>product ownership</strong> with clear internal NPS and ROI-prioritized roadmap.</li>
            </ul>
          </div>

          <p className="text-xs italic text-muted-foreground mt-3 pt-3 border-t border-border/50">
            <strong>Use for:</strong> &quot;Platform thinking,&quot; &quot;Driving adoption,&quot; or &quot;How do you measure success as a TPM?&quot;
          </p>
        </div>
      </div>

      {/* Story 4 */}
      <div className="mb-8 p-5 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/20">
        <h3 className="text-lg font-bold text-foreground mb-3">Story 4: AI Governance &amp; Regulatory Compliance for Fraud/AI Features</h3>
        <p className="text-xs text-muted-foreground mb-4">Demonstrates: Risk Management, Cross-functional Leadership, Turning Blockers into Enablers</p>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-primary mb-1">Context</p>
            <p className="text-muted-foreground">We were rolling out ML and early GenAI features in fraud operations across multiple regions. Legal and compliance were increasingly worried about explainability, auditability, and emerging AI regulations (GDPR, AI Act). The risk was that compliance would become a blanket blocker on all AI initiatives.</p>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Action</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Created an <strong>AI governance program</strong> modeled on Microsoft/Google public frameworks: AI risk register, policy review council, mandatory pre-launch checkpoints for high-risk features.</li>
              <li>For fraud models: versioned model registry with audit trails, standardized model cards (training data, limitations, risk), and access logging for every override or manual decision.</li>
              <li>For GenAI pilots (summarizing cases, assisting analysts): red-teaming before launch, logging and sampling of outputs for regular review, clear disclaimers and escalation paths for analysts.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Decisions / Trade-offs</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Drew a hard line: <strong>no fully automated adverse decisions</strong> (account closure, etc.) from GenAI systems. They assist analysts only&mdash;maintaining human accountability.</li>
              <li>Pushed back on &quot;black box&quot; model requests where we couldn&apos;t document data lineage. Accepted slightly lower model accuracy in exchange for explainability and regulatory defensibility.</li>
              <li>Prioritized regions with highest regulatory exposure first, even if they weren&apos;t the largest revenue lines. Reduced downside risk where it mattered most.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-primary mb-1">Effect</p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Turned compliance from a blocker into an <strong>enabler</strong>: legal had clear hooks into the lifecycle instead of blocking at the last minute.</li>
              <li>Passed internal and external audits with minimal findings. Used that track record to justify expanding AI usage.</li>
              <li>Reduced time-to-approve new AI features because everyone understood the process and criteria upfront.</li>
            </ul>
          </div>

          <p className="text-xs italic text-muted-foreground mt-3 pt-3 border-t border-border/50">
            <strong>Use for:</strong> &quot;Tell me about managing risk,&quot; &quot;Working with legal/compliance,&quot; or &quot;Structuring ambiguous problems.&quot;
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-12 pt-6 border-t border-border">
        <div className="flex justify-between items-center">
          {nav.prev && (
            <Link
              href={nav.prev.path}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span>&larr;</span>
              <span className="text-sm">{nav.prev.title}</span>
            </Link>
          )}
          {!nav.prev && <div />}
          {nav.next && (
            <Link
              href={nav.next.path}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">{nav.next.title}</span>
              <span>&rarr;</span>
            </Link>
          )}
        </div>
      </div>
    </SystemDesignLayout>
  );
}
