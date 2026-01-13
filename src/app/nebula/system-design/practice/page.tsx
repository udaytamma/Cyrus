"use client";

/**
 * System Design - Practice Questions
 * 20 Principal TPM interview questions with model answers
 * Based on Mag7 interview preparation standards
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import { useState } from "react";

// Question component with expandable answer
function Question({
  number,
  question,
  category,
  answer,
  principalNuance,
}: {
  number: number;
  question: string;
  category: string;
  answer: React.ReactNode;
  principalNuance?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 bg-gradient-to-r from-muted/30 to-transparent hover:from-muted/50 transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
            {number}
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-primary mb-1">{category}</div>
            <p className="text-sm text-foreground font-medium">{question}</p>
          </div>
          <div className="text-muted-foreground text-lg shrink-0">
            {isOpen ? "−" : "+"}
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="p-5 border-t border-border bg-background">
          <div className="mb-4">
            <div className="text-xs font-semibold text-green-500 mb-2 flex items-center gap-2">
              <span>&#10003;</span> Principal-Level Answer
            </div>
            <div className="text-sm text-muted-foreground">{answer}</div>
          </div>
          {principalNuance && (
            <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/30">
              <div className="text-xs font-semibold text-amber-500 mb-2 flex items-center gap-2">
                <span>&#9733;</span> Principal Nuance
              </div>
              <div className="text-sm text-muted-foreground">{principalNuance}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Section header component
function SectionHeader({
  title,
  description,
  color = "blue",
}: {
  title: string;
  description: string;
  color?: string;
}) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    amber: "bg-amber-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    pink: "bg-pink-500",
  };

  return (
    <div className="flex items-center gap-3 mb-6 mt-10 first:mt-0">
      <div className={`w-3 h-10 rounded-full ${colorClasses[color]}`}></div>
      <div>
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function SystemDesignPractice() {
  return (
    <SystemDesignLayout
      title="System Design - Practice Questions"
      description="Principal TPM interview practice with model answers"
      currentSection="practice"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          3
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Practice Questions</h1>
        <p className="text-muted-foreground">
          40 Principal TPM System Design Questions with Model Answers
        </p>
      </div>

      {/* Instructions */}
      <div className="mb-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">How to use:</strong> Answer each question in your own words before
          revealing the model answer. Focus on the <strong className="text-foreground">why</strong> and the{" "}
          <strong className="text-foreground">risk</strong>, not just definitions. At the Principal TPM bar,
          memorizing definitions is not enough&mdash;you must understand trade-offs well enough to push back on engineering leadership.
        </p>
      </div>

      {/* Grading Criteria */}
      <div className="mb-8 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="text-sm font-semibold text-foreground mb-2">Grading Criteria</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground text-sm">Technical Accuracy</div>
            <div className="text-xs text-muted-foreground">Is the engineering sound?</div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground text-sm">Strategic Depth</div>
            <div className="text-xs text-muted-foreground">Did you identify the trade-off?</div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground text-sm">Communication</div>
            <div className="text-xs text-muted-foreground">Was it concise and clear?</div>
          </div>
        </div>
      </div>

      {/* Section 1: Statelessness & Scaling */}
      <SectionHeader
        title="Statelessness & Scaling"
        description="Foundational concepts for horizontal scaling"
        color="blue"
      />

      <Question
        number={1}
        category="Statelessness & Scaling"
        question="Explain what 'keep the web tier stateless' means and why it is critical when horizontally scaling to millions of users."
        answer={
          <p>
            A stateless web tier means moving user/session tracking from web servers to external persistent storage,
            so no matter which server handles a request, user state can be restored. The web tier becomes agnostic
            to user-specific data.
            <br /><br />
            To scale horizontally, we cannot have users mapped to a particular web server&mdash;this creates a many-to-one
            mapping that limits scale. When we make the web tier stateless, we can scale web servers independently
            of users, giving us economies of scale and operational freedom (ability to terminate instances at will
            for patching, using Spot instances, etc.).
          </p>
        }
        principalNuance={
          <p>
            <strong>Fault Tolerance Angle:</strong> If a server crashes in a stateful world, the user is logged out.
            In a stateless world, a different server takes over seamlessly. This is the true &quot;operational freedom&quot;&mdash;the
            ability to terminate instances at will without degrading user experience.
          </p>
        }
      />

      <Question
        number={2}
        category="Statelessness & Scaling"
        question="How would you handle user sessions in a stateless web tier architecture? Name at least two approaches and trade-offs."
        answer={
          <>
            <p className="mb-3">
              <strong>1. Distributed In-Memory Cache (Redis Cluster):</strong> The web tier queries a remote,
              in-memory key-value store on every request to validate the session ID. Offers sub-millisecond latency
              (critical since this happens on every API call) and allows immediate revocation (delete key to ban user).
            </p>
            <p className="mb-3">
              <strong>Trade-off:</strong> Reliability vs. Cost. To prevent a &quot;mass logout&quot; event during cache node failure,
              we must pay for replication (Primary/Replica) across AZs. This doubles RAM cost and introduces operational complexity.
            </p>
            <p className="mb-3">
              <strong>2. Client-Side Stateless Tokens (JWT):</strong> Encapsulate user identity and permissions into a
              cryptographically signed token stored on the client. Server validates signature using CPU only&mdash;no database
              or cache lookup required. This is the ultimate &quot;shared nothing&quot; architecture.
            </p>
            <p>
              <strong>Trade-off:</strong> Revocation Hardship. Because the server holds no state, we cannot easily
              invalidate a specific token before expiry (e.g., if device is stolen). Solving this requires a blocklist
              (cache), which re-introduces the state we tried to avoid.
            </p>
          </>
        }
        principalNuance={
          <p>
            Be careful with terminology: &quot;persistent storage&quot; suggests disk-based DB, but for sessions we often
            use in-memory stores (Redis) for speed. If that cache flushes without backing DB, sessions are lost.
            The key decision is: What is acceptable session loss behavior?
          </p>
        }
      />

      {/* Section 2: Redundancy & Failure Domains */}
      <SectionHeader
        title="Redundancy & Failure Domains"
        description="Identifying and eliminating single points of failure"
        color="green"
      />

      <Question
        number={3}
        category="Redundancy & Failure Domains"
        question="Define redundancy at the web, application, and database tiers. Describe what Single Points of Failure remain if redundancy is implemented only at the Web Tier."
        answer={
          <>
            <p className="mb-3">
              Redundancy is the duplication of critical components (N+1 or active-active) to eliminate Single Points
              of Failure (SPOF).
            </p>
            <p className="mb-3">
              If we implement high redundancy at the Web Tier (stateless) but leave the Database Tier with a single node:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Logical SPOF:</strong> System availability is capped by the single database. We incurred
              the cost of distributed web servers without gaining availability benefits.</li>
              <li><strong>Cascading Failure Risk:</strong> If the single DB slows or locks up, the web servers
              will hoard connections and threads waiting for DB response, leading to resource exhaustion across
              the entire web fleet. The web tier effectively DDoS-es itself.</li>
              <li><strong>Zero-Downtime Maintenance Impossible:</strong> Cannot patch, upgrade, or vertically scale
              the database without taking the entire application offline.</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            Without strict circuit breaking, a DB failure causes cascading failure. Ask: &quot;What is the blast radius
            of a single component failure?&quot; If the answer is &quot;the entire system,&quot; you have a hidden SPOF.
          </p>
        }
      />

      <Question
        number={4}
        category="Redundancy & Failure Domains"
        question="A product team wants to run a single large DB instance instead of a replicated setup 'to keep things simple.' How do you push back using availability and scalability arguments?"
        answer={
          <>
            <p className="mb-3">
              &quot;I will not approve a Single Point of Failure design for a Tier-1 service because it forces us to
              violate our availability contracts immediately.&quot;
            </p>
            <p className="mb-3">
              <strong>Guaranteed Downtime:</strong> Even if hardware never fails, we need to patch the OS and DB engine.
              With a single instance, every patch is an outage. We cannot meet a 99.9% (three nines) SLA with
              planned monthly downtime.
            </p>
            <p>
              <strong>The &apos;Rewrite&apos; Trap:</strong> Migrating from a monolith DB to a sharded/replicated architecture
              later is not just &quot;work&quot;&mdash;it requires complete data migration and code refactor while the plane is flying.
              We are accepting massive technical debt that will paralyze the roadmap in 6 months when we hit vertical limits.
            </p>
          </>
        }
        principalNuance={
          <p>
            <strong>The Maintenance Window Argument is King:</strong> Hardware fails rarely, but security patches
            happen monthly. If you have one DB, you have downtime every month. That immediately violates SLA.
            Additionally, vertical scaling follows an exponential cost curve&mdash;&quot;buying our way out&quot; eventually
            becomes financially impossible.
          </p>
        }
      />

      {/* Section 3: Caching Strategy */}
      <SectionHeader
        title="Caching Strategy"
        description="Defense in depth for performance"
        color="amber"
      />

      <Question
        number={5}
        category="Caching Strategy"
        question="Describe where you would add caches in a typical web application (client, CDN, application, database) and the primary benefit of each layer."
        answer={
          <>
            <p className="mb-3">
              I would add caches at every layer where serving static or computed results is viable:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Browser/Client:</strong> Cache images and static content. Reduces network requests entirely.</li>
              <li><strong>CDN:</strong> Cache images, computed content, hot videos at edge locations. Reduces latency
              by serving from geographically closer servers.</li>
              <li><strong>Application (Redis/Memcached):</strong> Cache user sessions, computed API responses.
              Reduces database load.</li>
              <li><strong>Database:</strong> Internal buffer/page cache for frequently queried results.
              Reduces disk I/O.</li>
            </ul>
            <p className="mt-3">
              Each layer reduces the need to go to the next layer, reducing latency and preserving resources
              for work where it is truly needed.
            </p>
          </>
        }
        principalNuance={
          <p>
            <strong>Local vs. Remote Cache:</strong> A local (in-memory) cache on the web server is faster than Redis
            but leads to &quot;cache drift&quot; (servers holding different data). A remote cache (Redis) is consistent but
            adds a network hop. For rate limiting or security-critical data, you must use a centralized cache&mdash;otherwise
            an attacker can bypass limits by hitting different servers.
          </p>
        }
      />

      <Question
        number={6}
        category="Caching Strategy"
        question="In a cache-aside pattern, what happens on cache miss and cache eviction, and what failure modes should you call out in a design review?"
        answer={
          <>
            <p className="mb-3">
              <strong>Cache-Aside (Lazy Loading):</strong> App checks cache &rarr; Miss &rarr; App reads DB &rarr; App writes to cache.
            </p>
            <p className="mb-3">
              <strong>Failure Mode - Thundering Herd:</strong> When a hot key expires or cache is flushed, every request
              becomes a cache miss. All calls are directed to database simultaneously, overwhelming it and causing
              latency spikes, queued requests, and potential cascading failure.
            </p>
            <p>
              <strong>Failure Mode - Cache Penetration:</strong> Attackers request keys that do not exist (e.g., user_id=-1).
              Cache misses, DB finds nothing (so nothing is cached). Attack loops, killing the DB.
            </p>
          </>
        }
        principalNuance={
          <p>
            <strong>Fixes:</strong> For Thundering Herd, implement <strong>Request Coalescing</strong> (Singleflight)&mdash;if
            1,000 requests miss cache simultaneously, only one goes to DB while others wait for that result.
            For Cache Penetration, use a <strong>Bloom Filter</strong> to check &quot;This key definitely does not exist&quot;
            before hitting cache/DB.
          </p>
        }
      />

      {/* Section 4: CDN & Content Delivery */}
      <SectionHeader
        title="CDN & Content Delivery"
        description="Edge caching and latency optimization"
        color="purple"
      />

      <Question
        number={7}
        category="CDN & Content Delivery"
        question="Explain when a CDN meaningfully improves performance and when it does almost nothing (or even hurts latency), even if configured correctly."
        answer={
          <>
            <p className="mb-3">
              <strong>CDN meaningfully improves performance when:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Cache hit ratio is high (static content, cacheable responses)</li>
              <li>Edge is closer to the user than origin</li>
              <li>Content is requested frequently by geographically distributed users</li>
            </ul>
            <p className="mb-3">
              <strong>CDN provides minimal value or hurts performance when:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>High dynamic content with minimal/zero cache hit ratio</li>
              <li>Origin is closer to users than the CDN edge (e.g., single-region user base)</li>
              <li>Dynamic content passes through CDN adding extra hops with no caching benefit</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            <strong>Dynamic Site Acceleration (DSA):</strong> Even for non-cacheable dynamic content, CDN can improve
            performance through TLS Termination. The user does the HTTPS handshake with a nearby edge node (5ms away)
            instead of distant origin (100ms away). CDN uses pre-warmed, persistent connections to origin.
            This often beats &quot;direct to origin&quot; latency even with the extra hop.
          </p>
        }
      />

      <Question
        number={8}
        category="CDN & Content Delivery"
        question="Your app serves dynamic, personalized content (e.g., a 'For You' feed). Which parts can still be pushed to CDN and how would you design cache keys and TTLs?"
        answer={
          <>
            <p className="mb-3">
              <strong>Parts that can still be pushed to CDN:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Static components: JS/CSS bundles, HTML shells, images</li>
              <li>Common headers, navigation, footer content</li>
              <li>Semi-static content with short TTLs</li>
            </ul>
            <p>
              <strong>Cache Key & TTL Strategy:</strong> Segment into tiers&mdash;Static (long TTL, days/weeks),
              Semi-static (short TTL, minutes/hours for fast-changing but still cacheable content),
              Dynamic segments (per region, product category, customer type with specific cache keys).
              Use cache keys that include relevant segmentation: region, user tier, content category.
            </p>
          </>
        }
        principalNuance={
          <p>
            The &quot;Edge Compute&quot; pattern (Lambda@Edge, Cloudflare Workers) allows personalization at the edge.
            You can cache the template and inject user-specific data at the edge node, getting the best of
            both worlds: CDN latency benefits with personalization.
          </p>
        }
      />

      {/* Section 5: Database Sharding */}
      <SectionHeader
        title="Database Sharding"
        description="Horizontal scaling for data layer"
        color="indigo"
      />

      <Question
        number={9}
        category="Multi-Region Architecture"
        question="Contrast 'multiple availability zones in one region' vs 'multiple geographic regions' in terms of latency, failure isolation, and complexity."
        answer={
          <>
            <p className="mb-3">
              <strong>Multi-AZ (Same Region):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Latency: Very low (typically &lt;2ms between AZs)</li>
              <li>Failure Isolation: Protects against single data center failure, but not regional disasters</li>
              <li>Complexity: Moderate&mdash;standard replication patterns</li>
            </ul>
            <p className="mb-3">
              <strong>Multi-Region (Geographic):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Latency: High (50-200ms+ depending on distance)</li>
              <li>Failure Isolation: Protects against regional disasters, compliance with data residency</li>
              <li>Complexity: Very high&mdash;conflict resolution, geo-routing, data sync costs, consistency trade-offs</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            <strong>The Cost Trap:</strong> Multi-region active-active sounds great for availability, but doubles
            (or more) your data sync costs. Every write replicates across regions. A poorly designed multi-region
            architecture can 3x your cloud bill. Always calculate the cost of consistency before proposing
            active-active.
          </p>
        }
      />

      <Question
        number={10}
        category="Multi-Region Architecture"
        question="How would you route users to the 'nearest healthy' data center, and what are the main consistency considerations for user data?"
        answer={
          <>
            <p className="mb-3">
              <strong>Routing Mechanisms:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Geo-DNS (Latency-based routing): Route53, Cloudflare DNS return nearest healthy endpoint</li>
              <li>Anycast: Single IP announced from multiple locations; network routes to closest</li>
              <li>Application-level routing: Client-side detection or initial request determines region affinity</li>
            </ul>
            <p className="mb-3">
              <strong>Consistency Considerations:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>&quot;Read Your Own Writes&quot;: Pin user to specific region for 60s after writes to avoid stale reads</li>
              <li>Conflict Resolution: When same user writes from two regions, need LWW or vector clocks</li>
              <li>Session Affinity: Keep user session data in the region they are currently using</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            <strong>The &quot;Active-Passive Cold Start&quot; Trap:</strong> When Region A fails and you flip to Region B,
            Region B&apos;s caches are cold. The database is instantly hammered by 100% of traffic and melts down.
            This is why failover testing (Chaos Engineering) is critical&mdash;you need to know if your standby
            can actually handle the load.
          </p>
        }
      />

      <Question
        number={11}
        category="Database Sharding"
        question="Explain database sharding to a senior engineering leader in two minutes: what it is, why it is used, and the main classes of shard keys."
        answer={
          <>
            <p className="mb-3">
              <strong>What:</strong> Sharding is horizontally partitioning data across multiple database instances.
              Each shard holds a subset of the total data.
            </p>
            <p className="mb-3">
              <strong>Why:</strong> When a single DB hits vertical limits (CPU, IOPS maxed), sharding is the only
              option for write scaling. Read scaling can use replicas, but writes must go to shards.
            </p>
            <p className="mb-3">
              <strong>Shard Key Strategies:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Range-based:</strong> (1-1000, 1001-2000) - Risk: sequential keys create hot shards</li>
              <li><strong>Hash-based:</strong> Even distribution via hash. Risk: cross-shard queries add complexity</li>
              <li><strong>Directory/Lookup:</strong> Mapping table determines shard. Risk: lookup becomes SPOF</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            <strong>The Resharding Trap:</strong> With simple hash sharding (ID % N), changing from 100 to 101 shards
            changes the formula for nearly 100% of keys, requiring massive data migration. Use <strong>Consistent
            Hashing</strong>&mdash;when you add/remove a node, only 1/N keys need to move.
          </p>
        }
      />

      <Question
        number={12}
        category="Database Sharding"
        question="What are the common problems caused by a poor shard key choice and how would you detect them using metrics?"
        answer={
          <>
            <p className="mb-3">
              <strong>Hot Shards (Data Skew):</strong> Sequential or biased keys concentrate load on one shard.
              Example: Sharding by user_id when Justin Bieber posts causes millions of requests to hit one shard.
            </p>
            <p className="mb-3">
              <strong>Scatter-Gather:</strong> Poor/no shard key in queries forces router to query all shards
              and merge results. Kills P95/P99 latency.
            </p>
            <p className="mb-3">
              <strong>Detection Metrics:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>&quot;Shards touched per query&quot; graph overlaid with P99 latency</li>
              <li>Per-shard CPU/IOPS utilization (should be even)</li>
              <li>Aggregator node memory/CPU (high indicates scatter-gather overhead)</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            <strong>The &quot;Celebrity Problem&quot; Fix:</strong> For hot accounts, don&apos;t just store them on one shard.
            Replicate their content across all shards or a dedicated &quot;Hot Tier&quot; cache. This is a hybrid
            sharding strategy that accepts some duplication for even load distribution.
          </p>
        }
      />

      {/* Section 6: Microservices Architecture */}
      <SectionHeader
        title="Microservices Architecture"
        description="Service decomposition and communication"
        color="pink"
      />

      <Question
        number={13}
        category="Microservices Architecture"
        question="Describe when you would split a monolith into services specifically for scaling (not for org or code-ownership reasons)."
        answer={
          <>
            <p className="mb-3">
              Split a monolith for scaling when features have <strong>operationally different profiles</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>A hot feature or third-party dependency impacts operational efficiency of the whole system</li>
              <li>Different components have different resource needs (CPU-bound vs I/O-bound)</li>
              <li>Independent scaling requirements (e.g., image processing needs GPUs, user API needs many small instances)</li>
              <li>Fault isolation needed (one component&apos;s memory leak shouldn&apos;t crash login)</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            This is the <strong>Bulkhead Pattern</strong>. Splitting CPU-bound (image processing) from I/O-bound
            (user API) allows provisioning expensive GPU instances only for the small fleet that needs them.
            But remember: if Service A always needs data from Service B to do anything useful, they probably
            shouldn&apos;t be separate services. A Principal TPM often drives the decision to merge microservices
            back together to reduce complexity.
          </p>
        }
      />

      <Question
        number={14}
        category="Microservices Architecture"
        question="Give 3 concrete examples of services you might split out from a consumer app backend as traffic grows, and why each helps with scalability or reliability."
        answer={
          <>
            <p className="mb-3">
              <strong>1. Payments/Billing Service:</strong>
            </p>
            <p className="text-sm mb-3">Compliance Isolation. Reduces PCI-DSS audit scope to just this service
            rather than the entire monolith. Independent scaling for payment spikes (Black Friday).</p>

            <p className="mb-3">
              <strong>2. Media/Image Processing Service:</strong>
            </p>
            <p className="text-sm mb-3">Async vs Sync split. Video processing takes seconds/minutes; user requests
            take milliseconds. Moving to async event-driven model (queues) prevents blocking user-facing requests.</p>

            <p className="mb-3">
              <strong>3. Search/Feed Service:</strong>
            </p>
            <p className="text-sm">CPU-intensive operations (ranking, ML inference) isolated from CRUD operations.
            Can scale independently with specialized hardware (GPU instances for ML ranking).</p>
          </>
        }
        principalNuance={
          <p>
            The justification matters as much as the split. In interviews, don&apos;t just say &quot;split for microservices.&quot;
            Say: &quot;We split Payments to reduce compliance scope from $2M audit to $200K audit&quot; or &quot;We split Media
            because transcoding latency was blocking checkout completion rates.&quot;
          </p>
        }
      />

      <Question
        number={15}
        category="Microservices Architecture"
        question="How would you prevent a 'chatty' microservices architecture from becoming the main bottleneck and reliability risk?"
        answer={
          <>
            <p className="mb-3">
              <strong>Design Patterns:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>API Aggregation / BFF (Backend for Frontend): Combine multiple calls into one</li>
              <li>Coarse-grained APIs instead of fine-grained</li>
              <li>Async messaging for non-critical-path operations</li>
              <li>Caching between services</li>
            </ul>
            <p className="mb-3">
              <strong>Protection Mechanisms:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Timeouts with bounded retries (rate limited)</li>
              <li>Circuit breakers (stop calling dead services)</li>
              <li>Bulkheads (isolate connection pools)</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            The ultimate fix for chatty services isn&apos;t better caching or circuit breakers&mdash;it&apos;s questioning
            the <strong>Service Boundaries</strong>. If Service A always needs data from Service B for every
            request, they probably shouldn&apos;t be separate services. Sometimes the right answer is to merge
            them back.
          </p>
        }
      />

      {/* Section 7: Observability & Monitoring */}
      <SectionHeader
        title="Observability & Monitoring"
        description="Metrics, alerts, and operational excellence"
        color="blue"
      />

      <Question
        number={16}
        category="Observability & Monitoring"
        question="List the key metrics you would monitor for web tier, cache layer, database, and CDN to know if the system is ready for a traffic spike."
        answer={
          <>
            <p className="mb-3"><strong>Web Tier:</strong></p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Connection pool availability to downstream services</li>
              <li>Requests per second vs capacity headroom</li>
              <li>CPU and memory utilization</li>
              <li>Error rate (5xx), P99 latency</li>
            </ul>
            <p className="mb-3"><strong>Cache Tier:</strong></p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Cache hit ratio, miss rate</li>
              <li>Get/Set latency</li>
              <li>Memory usage, eviction rate</li>
            </ul>
            <p className="mb-3"><strong>Database Tier:</strong></p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>TPS, active connections</li>
              <li>Replication lag, lock waits/deadlocks</li>
              <li>IOPS, buffer/page cache hit ratio</li>
            </ul>
            <p className="mb-3"><strong>CDN Tier:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Cache hit ratio, TTFB (Time to First Byte)</li>
              <li>Origin request rate, origin fetch errors</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            You covered Utilization, but missed two critical categories: <strong>Saturation</strong> (queue depths,
            thread pool usage) and <strong>Errors</strong> (5xx rates, failed requests). Use the <strong>USE Method</strong>
            (Utilization, Saturation, Errors) for infrastructure and <strong>RED Method</strong> (Rate, Errors, Duration)
            for services. A system can have low CPU but 100% error rate due to bad config.
          </p>
        }
      />

      <Question
        number={17}
        category="Observability & Monitoring"
        question="What specific alerts would you configure to detect degradation before users start complaining? Think 'leading vs lagging indicators.'"
        answer={
          <>
            <p className="mb-3"><strong>Leading Indicators (Predictive - Wake up On-Call):</strong></p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Saturation: &quot;Disk 90% full&quot;, &quot;Thread pool 95% utilized&quot;</li>
              <li>Queue depth for critical operations</li>
              <li>Traffic anomaly: &quot;Traffic dropped 50% instantly&quot;</li>
              <li>CPU/Memory approaching thresholds</li>
            </ul>
            <p className="mb-3"><strong>Lagging Indicators (Reactive - Damage already done):</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Error rate (5xx), P99 latency spikes</li>
              <li>Successful transaction rate drop</li>
              <li>User-reported issues</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            <strong>SLO Burn Rate Alerting:</strong> Don&apos;t just alert on &quot;Error Rate &gt; 1%.&quot; Alert on burn rate:
            &quot;At the current rate of errors, we will burn our entire monthly budget in 4 hours.&quot; This catches
            slow-drip failures that don&apos;t spike but will violate SLA by month end. This is the Google SRE
            approach.
          </p>
        }
      />

      {/* Section 8: Operational Excellence */}
      <SectionHeader
        title="Operational Excellence"
        description="Automation, cost optimization, and post-incident review"
        color="green"
      />

      <Question
        number={18}
        category="Operational Excellence"
        question="Describe how you would use automation (runbooks, autoscaling, self-healing) to reduce manual ops when running across multiple regions."
        answer={
          <>
            <p className="mb-3"><strong>Runbook Automation:</strong></p>
            <p className="text-sm mb-3">Start with documented runbooks for common incidents. Automate repetitive
            parts. Keep adding scenarios. Policy is decided by humans; implementation is automated.</p>

            <p className="mb-3"><strong>Autoscaling:</strong></p>
            <p className="text-sm mb-3">Trigger when leading indicators reach ~80% of capacity. For web/cache tiers,
            prefer horizontal scaling. For planned events, pre-scale horizontally and scale down after.</p>

            <p className="mb-3"><strong>Self-Healing:</strong></p>
            <p className="text-sm mb-3">Use lagging indicators to detect degraded instances (crash loops, error spikes).
            Automatically remove from cluster, replace with new instance, test, then add to production.</p>

            <p className="mb-3"><strong>Multi-Region Governance:</strong></p>
            <p className="text-sm">Infrastructure as Code, automated drift detection and remediation,
            staggered coordinated deployments to prevent global outages.</p>
          </>
        }
        principalNuance={
          <p>
            <strong>Correction:</strong> We almost never automate vertical scaling for stateless web tiers in real-time.
            Changing instance size usually requires restart/downtime. We scale horizontally (adding replicas).
            Also, scale based on Resource Saturation (CPU &gt; 60%, queue depth), not SLO percentage&mdash;if you wait
            until &quot;80% towards failing SLO,&quot; it&apos;s often too late.
          </p>
        }
      />

      <Question
        number={19}
        category="Operational Excellence"
        question="A team wants to 'just over-provision' instead of investing in caching and CDN. How do you argue against that using cost and performance reasoning?"
        answer={
          <>
            <p className="mb-3"><strong>Business Arguments:</strong></p>
            <ul className="list-disc list-inside space-y-1 mb-3">
              <li>Where would we budget unplanned over-provisioning?</li>
              <li>How do we explain under-utilization to leadership?</li>
              <li>What does this say about our engineering capabilities?</li>
            </ul>
            <p className="mb-3"><strong>Technical Arguments (The Physics):</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Latency:</strong> Throwing hardware solves throughput, not latency. A massive server
              in Virginia is still 200ms from India. Only CDN (edge caching) solves speed of light.</li>
              <li><strong>Database Bottleneck:</strong> Adding 100 web servers opens 100 new DB connections.
              If DB is the bottleneck, more web servers makes it worse. Caching protects the database.</li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            The argument &quot;we have plenty of budget&quot; is a common counter. You must win on physics: &quot;Even with
            infinite money, we cannot buy a server closer to the user than a CDN edge node. And we cannot
            buy a database that handles 10x connections without sharding. Money solves capacity; architecture
            solves latency and reliability.&quot;
          </p>
        }
      />

      <Question
        number={20}
        category="Post-Incident Review"
        question="In a post-incident review after a regional outage, what questions would you ask to evaluate whether your redundancy, failover, and monitoring are adequate?"
        answer={
          <>
            <p className="mb-3"><strong>Architectural Validity Questions:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>Why was this outage limited to a region&mdash;what made circumstances unique?</li>
              <li>Were autoscaling and auto-healing triggered? Were thresholds adequate?</li>
              <li>Did we receive leading alerts? What was response to them? Why wasn&apos;t incident prevented?</li>
              <li>What is our restoration time? When did we decide to act? Do we need to revise workflows?</li>
              <li>Did our people have all info needed? What was missing that increased MTTR?</li>
              <li>What is customer impact? Lost transactions? Duplicate orders/payments?</li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2"><strong>The Uncomfortable Questions (Challenge the Architecture):</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Failover Failure:</strong> &quot;If this region failed, why didn&apos;t our global LB automatically
              shift traffic? Why did we need manual intervention?&quot;</li>
              <li><strong>Blast Radius:</strong> &quot;Did this regional outage affect users in other regions?
              If yes, what &apos;Global&apos; component is a hidden SPOF?&quot;</li>
              <li><strong>Testing Gap:</strong> &quot;Why did this failure mode not manifest in pre-prod?
              Is our test environment insufficiently &apos;prod-like&apos;?&quot;</li>
            </ul>
          </>
        }
      />

      {/* Part II Header */}
      <div className="mt-16 mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/30">
        <h2 className="text-xl font-bold text-foreground mb-2">Part II: Cloud Economics & Infrastructure Strategy</h2>
        <p className="text-sm text-muted-foreground">
          These questions test your understanding of FinOps, cost optimization, and the financial physics
          that separate a Principal TPM from a Senior TPM. At Mag7, cost is a non-functional requirement.
        </p>
      </div>

      {/* Section: Cloud Economics */}
      <SectionHeader
        title="Cloud Economics (FinOps)"
        description="Cost optimization, compute strategy, and financial modeling"
        color="blue"
      />

      <Question
        number={21}
        category="Cloud Economics"
        question="We have a steady-state workload of 5,000 cores that runs 24/7, plus a daily spike of 2,000 cores during business hours. A junior TPM suggests putting 100% of this on Reserved Instances to maximize the discount. How do you evaluate this proposal?"
        answer={
          <>
            <p className="mb-3">
              <strong>I would reject the 100% RI proposal</strong> because it creates financial waste during off-hours.
              If we reserve for the peak (7,000 cores), we are paying for 2,000 idle cores for 16 hours a day.
              That &quot;waste&quot; likely erodes the entire RI discount.
            </p>
            <p className="mb-3"><strong>The Principal Strategy:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Baseline (5,000 cores):</strong> Purchase Compute Savings Plans (more flexible than RIs).
                This locks in ~40% savings with zero utilization risk. Savings Plans apply to any instance type
                or region, giving engineering freedom to change architectures.
              </li>
              <li>
                <strong>Variable (2,000 cores):</strong> Cover the spike with Spot Instances (if stateless) or
                On-Demand (if stateful). Even if Spot is risky, the weighted average cost of &quot;Savings Plan + Spot&quot;
                is significantly lower than &quot;Over-provisioned RIs&quot;.
              </li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Math:</strong> Let&apos;s assume $0.10/core/hour On-Demand. At 100% RI for 7,000 cores (40% discount):
              7,000 &times; $0.06 &times; 24h = $10,080/day. With the hybrid approach: 5,000 &times; $0.06 &times; 24h + 2,000 &times; $0.02 (Spot) &times; 8h = $7,520/day.
              That&apos;s a 25% savings over &quot;maximizing the RI discount.&quot;
            </p>
            <p>
              <strong>Interview Signal:</strong> A Principal TPM treats compute capacity like a financial portfolio&mdash;not
              &quot;all stocks&quot; or &quot;all bonds&quot; but a risk-adjusted mix optimized for the specific workload pattern.
            </p>
          </>
        }
      />

      <Question
        number={22}
        category="Cloud Economics"
        question="Our storage bill for 'User Logs' is growing 20% MoM. The engineering team wants to keep them in S3 Standard for 'fast debugging'. What is your counter-proposal?"
        answer={
          <>
            <p className="mb-3">
              <strong>I would challenge the definition of &quot;fast debugging&quot;</strong> against the actual Data Access Pattern.
              Logs typically follow a <strong>Hot-Warm-Cold</strong> pattern: frequently queried for 3 days, rarely for 14 days,
              and almost never after 30 days. Keeping 6-month-old logs in S3 Standard is burning cash for zero operational value.
            </p>
            <p className="mb-3"><strong>The Fix:</strong></p>
            <p className="mb-3">
              Implement an <strong>S3 Intelligent-Tiering</strong> policy immediately. This automatically moves objects
              that haven&apos;t been accessed for 30 days to the Infrequent Access tier (40% cheaper), and after 90 days
              to Archive Instant Retrieval (68% cheaper), without requiring any code changes or latency penalties
              for the rare retrieval.
            </p>
            <p>
              <strong>Alternative:</strong> If access patterns are predictable, use explicit Lifecycle Policies:
              Standard (0-7 days) &rarr; S3-IA (7-30 days) &rarr; Glacier Instant Retrieval (30-90 days) &rarr; Glacier (90+ days).
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Laziness Tax:</strong> Keeping 100TB of logs in S3 Standard &quot;just in case&quot; costs ~$2,300/month.
              In Glacier: ~$400/month. Over a year, that&apos;s $22,800 wasted. Across an enterprise with petabytes,
              this becomes millions of dollars.
            </p>
            <p>
              <strong>The Gotcha:</strong> Glacier retrieval costs can surprise you. If you dump 1PB into Glacier and
              need to grep it during an incident, retrieval could cost $20,000+ in a single afternoon.
              Always model retrieval scenarios before archiving.
            </p>
          </>
        }
      />

      <Question
        number={23}
        category="Cloud Economics"
        question="We are designing a new Video Transcoding service. The team wants to run it in a single region (US-East-1) but serve global users to keep the architecture simple. What is the hidden cost risk?"
        answer={
          <>
            <p className="mb-3">
              <strong>The hidden risk is Internet Egress fees.</strong> Serving a 1GB video file directly from
              US-East-1 to a user in Tokyo routes traffic over the public internet backbone, charging the highest
              tier of data transfer (~$0.09/GB).
            </p>
            <p className="mb-3"><strong>The Math:</strong></p>
            <p className="mb-3">
              If we serve 1M video views/day at 500MB average: 500TB/day &times; $0.09/GB = <strong>$45,000/day in egress alone</strong>.
              That&apos;s $1.35M/month before any compute costs.
            </p>
            <p className="mb-3"><strong>The Fix:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Egress Shield:</strong> Data moves from S3 to CloudFront Edge within AWS&apos;s network (cheaper/free
                between S3 and CloudFront).
              </li>
              <li>
                <strong>Edge Delivery:</strong> We pay the CDN rate (~$0.02-0.05/GB depending on volume), not internet egress.
              </li>
              <li>
                <strong>Latency Improvement:</strong> User connects to a local Tokyo PoP, reducing latency by hundreds
                of milliseconds. Better UX AND lower cost.
              </li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            <strong>The CDN Paradox:</strong> Most people think CDNs are for speed. At Principal level, you know
            they are for <strong>wallet protection</strong>. A 95% cache hit ratio means only 5% of requests hit
            the expensive origin. This is the &quot;Offload Ratio&quot;&mdash;the most important CDN metric for cost optimization.
          </p>
        }
      />

      <Question
        number={24}
        category="Cloud Economics"
        question="Explain why a microservices architecture often costs significantly more in 'Network' spend than the monolith it replaced, even if traffic is identical."
        answer={
          <>
            <p className="mb-3">
              <strong>This is the Inter-AZ Data Transfer Tax.</strong> In a monolith, function calls happen in memory (free).
              In microservices, they happen over the network. If Service A (Zone 1) calls Service B (Zone 2),
              AWS charges ~$0.01/GB.
            </p>
            <p className="mb-3"><strong>The Impact:</strong></p>
            <p className="mb-3">
              A single user request fanning out to 20 downstream services can trigger 40+ cross-zone hops.
              Assuming 3 AZs, statistically 66% of calls cross an AZ boundary. What was free (in-memory) now
              costs $0.01/GB each way. At Mag7 scale, this becomes <strong>millions of dollars annually</strong>.
            </p>
            <p className="mb-3"><strong>The Mitigation:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Zone Affinity:</strong> Configure Service Mesh (Istio/Envoy) to prefer routing to downstream
                instances in the same AZ. Only cross AZ for failover, not steady-state traffic.
              </li>
              <li>
                <strong>Data Locality:</strong> Co-locate chatty microservices in the same AZ if latency/cost
                outweighs the HA benefit of spreading across zones.
              </li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Math:</strong> 1M requests/day, each triggering 50 service calls, 10KB payload each,
              66% crossing AZ: 1M &times; 50 &times; 0.66 &times; 10KB = 330TB/month &times; $0.01 &times; 2 (bidirectional) = <strong>$6,600/month</strong>.
              This is &quot;invisible&quot; cost that doesn&apos;t show up in compute budgets.
            </p>
            <p>
              <strong>The Architecture Smell:</strong> If your network bill is growing faster than your compute bill,
              you likely have a chatty microservices problem.
            </p>
          </>
        }
      />

      <Question
        number={25}
        category="Cloud Economics"
        question="Finance is pushing for a 100% predictable monthly bill (CAPEX model), but Engineering needs auto-scaling (OPEX model). How do you bridge this gap?"
        answer={
          <>
            <p className="mb-3">
              <strong>I would bridge this using Unit Economics and Commitment Layers.</strong>
            </p>
            <p className="mb-3"><strong>The Floor (Predictable):</strong></p>
            <p className="mb-3">
              Analyze minimum baseline usage and cover 70-80% of it with a 1-Year Compute Savings Plan.
              This gives Finance a large, predictable fixed cost line item they can forecast for Wall Street.
            </p>
            <p className="mb-3"><strong>The Ceiling (Variable):</strong></p>
            <p className="mb-3">
              Frame the remaining variable spend not as &quot;cost&quot; but as <strong>Cost of Goods Sold (COGS)</strong>.
              Set up a dashboard tracking <strong>&quot;Cost Per Transaction&quot;</strong> or &quot;Cost Per Active User&quot;.
            </p>
            <p>
              If the bill goes up 10% but transactions go up 10%, I can prove to Finance that efficiency is stable,
              and the extra spend is actually <strong>revenue growth</strong>, not waste. This reframes the conversation
              from &quot;unpredictable costs&quot; to &quot;variable costs that scale with business success.&quot;
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Behavioral Shift:</strong> In CAPEX world (own your servers), 20% utilization was &quot;safe headroom.&quot;
              In OPEX world (cloud), 20% utilization is 80% waste. An engineer pushing a bad config that spins up
              1,000 extra nodes is financially identical to someone stealing $50,000 from the corporate safe.
            </p>
            <p>
              <strong>The Bridge Role:</strong> You sit between Finance (wants predictability) and Engineering (wants agility).
              Your toolkit: Commitments for the floor, Unit Economics for the ceiling, and transparency dashboards
              to build trust with both sides.
            </p>
          </>
        }
      />

      <Question
        number={26}
        category="Cloud Economics"
        question="A team wants to run a massive batch processing job on On-Demand instances because 'Spot is too flaky'. How do you argue for Spot?"
        answer={
          <>
            <p className="mb-3">
              <strong>I would argue that &quot;flakiness&quot; is an engineering problem, not a business constraint.</strong>
              Spot instances offer up to 90% discount. For a massive batch job, the savings could fund two
              full-time engineers for a year.
            </p>
            <p className="mb-3"><strong>The Solution:</strong></p>
            <p className="mb-3">We don&apos;t just &quot;try&quot; Spot. We <strong>engineer for it</strong>:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Diversification:</strong> Request a mix of c5, m5, and r5 instances. If one pool dries up,
                others may still be available. This is the &quot;Spot Fleet&quot; strategy.
              </li>
              <li>
                <strong>Checkpointing:</strong> Ensure the app saves progress to S3/Redis every few minutes.
                If a node gets the 2-minute termination warning, it creates a checkpoint and the job resumes
                on a new node with minimal loss.
              </li>
              <li>
                <strong>Graceful Shutdown:</strong> Handle SIGTERM signals&mdash;stop accepting new work, complete
                in-flight tasks, write checkpoint, and exit cleanly within 120 seconds.
              </li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Math:</strong> 1,000 cores for 10 hours at On-Demand ($0.10/core/hr) = $1,000.
              Same job on Spot ($0.01/core/hr) = $100. If Spot gets interrupted twice and we restart with 10% overhead,
              we still save $800. The only scenario where On-Demand wins is if Spot interruptions exceed 90% of job time.
            </p>
            <p>
              <strong>Red Line:</strong> Never use Spot for database leaders, stateful singletons, or anything where
              the 2-minute warning causes data loss. Spot is for stateless, resumable workloads.
            </p>
          </>
        }
      />

      <Question
        number={27}
        category="Cloud Economics"
        question="We have a high-traffic service that speaks JSON over HTTP/1.1 between internal microservices. Why is this a cost problem?"
        answer={
          <>
            <p className="mb-3">
              <strong>This is a Compute and Bandwidth waste problem.</strong>
            </p>
            <p className="mb-3"><strong>Serialization Overhead:</strong></p>
            <p className="mb-3">
              JSON is text-based and bloated. Parsing it burns significant CPU cycles compared to binary formats.
              Repeated field names (<code>{`{customer_id: ...}`}</code>) consume bandwidth. A 1KB JSON payload
              might be 300 bytes in Protobuf.
            </p>
            <p className="mb-3"><strong>Connection Overhead:</strong></p>
            <p className="mb-3">
              HTTP/1.1 requires a new TCP connection for each request (or wasteful keep-alive management).
              The TLS handshake alone can be 2-3 round trips.
            </p>
            <p className="mb-3"><strong>The Fix:</strong></p>
            <p>
              Migrate high-volume internal services to <strong>gRPC (Protobuf over HTTP/2)</strong>.
              Binary serialization (smaller payload, faster CPU parsing) + HTTP/2 multiplexing (better connection reuse)
              can reduce fleet size by 20-30% and cut inter-service bandwidth by 40-60%.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>When NOT to switch:</strong> External APIs facing mobile/web clients should often stay JSON/REST.
              The benefits of ubiquitous client support and debuggability outweigh the efficiency gains.
              The ROI of gRPC is highest for high-volume, internal, server-to-server communication.
            </p>
            <p>
              <strong>The Hidden Cost:</strong> At 1B requests/day, a 300-byte savings per request = 300GB/day = ~$900/month
              in inter-AZ transfer alone. Plus CPU savings from faster parsing.
            </p>
          </>
        }
      />

      <Question
        number={28}
        category="Cloud Economics"
        question="A developer wants to connect a Lambda function in a private VPC to S3 using a NAT Gateway. Is this approved?"
        answer={
          <>
            <p className="mb-3">
              <strong>Rejected.</strong> Using a NAT Gateway to talk to S3 is a <strong>double tax</strong>.
            </p>
            <p className="mb-3"><strong>The Cost:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>NAT Gateway processing fee: ~$0.045/GB</li>
              <li>Data transfer out through NAT: ~$0.09/GB</li>
              <li>NAT Gateway hourly charge: ~$0.045/hour</li>
            </ul>
            <p className="mb-3"><strong>The Fix:</strong></p>
            <p className="mb-3">
              Use a <strong>VPC Gateway Endpoint for S3</strong>. It is <strong>free</strong>, keeps the traffic entirely
              on the private AWS network (more secure), and avoids the NAT Gateway bottleneck entirely.
            </p>
            <p>
              <strong>For other AWS services</strong> (DynamoDB, SQS, etc.), use VPC Interface Endpoints (PrivateLink).
              There&apos;s a small hourly charge (~$0.01/hour) but it&apos;s far cheaper than NAT Gateway data processing fees.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The NAT Gateway Tax:</strong> This is the most common hidden cost in AWS. A Lambda function
              processing 1TB/month through NAT to S3 costs ~$135/month in NAT fees alone. The same traffic through
              a Gateway Endpoint: $0.
            </p>
            <p>
              <strong>Audit Action:</strong> Run a Cost Explorer query filtering for NAT Gateway data processing.
              If it&apos;s significant, investigate what traffic is flowing through it. Often 80% can be moved to
              Gateway/Interface Endpoints.
            </p>
          </>
        }
      />

      <Question
        number={29}
        category="Cloud Economics"
        question="Why does 'Active-Active' Multi-Region architecture often triple the database cost?"
        answer={
          <>
            <p className="mb-3">
              <strong>It&apos;s the Replication Multiplier.</strong> In a single region, you write data once.
              In a 3-region Active-Active setup, every write must be replicated to the other two regions.
            </p>
            <p className="mb-3"><strong>The Cost Components:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Storage:</strong> You pay to store the data 3 times (once per region).</li>
              <li><strong>Egress:</strong> You pay Inter-Region Data Transfer fees (~$0.02/GB) to send every
              write to the other regions.</li>
              <li><strong>Compute:</strong> You need database capacity in all 3 regions to handle local reads/writes.</li>
              <li><strong>Conflict Resolution:</strong> Engineering time to handle write conflicts adds hidden cost.</li>
            </ul>
            <p className="mb-3"><strong>The Decision Framework:</strong></p>
            <p>
              Unless we have a strict regulatory requirement (data residency) or a P0 availability need
              (zero tolerance for regional outage), I would advocate for <strong>Geo-Sharding</strong>
              (store German users only in Germany) or <strong>Active-Passive</strong> (single write region)
              to avoid the cost of global synchronous replication.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Hidden Cost:</strong> Active-Active isn&apos;t just 2-3x compute/storage. It&apos;s also:
              cross-region data sync (continuous), conflict resolution complexity (engineering time),
              testing overhead (must test failover regularly), and operational complexity (runbooks, training).
              Total cost is often 2.5-3x, not 2x.
            </p>
            <p>
              <strong>Alternative:</strong> For most services, Multi-AZ in a single region with
              asynchronous replication to a DR region provides 99.99% availability at 1.3x cost, not 3x.
            </p>
          </>
        }
      />

      <Question
        number={30}
        category="Cloud Economics"
        question="Explain the 'Data Gravity' principle in the context of cost."
        answer={
          <>
            <p className="mb-3">
              <strong>Data Gravity means: &quot;Moving Compute is cheap; Moving Data is expensive.&quot;</strong>
            </p>
            <p className="mb-3"><strong>The Physics:</strong></p>
            <p className="mb-3">
              A Docker container is ~500MB. A production database is ~500TB. If we have 500TB of data in us-east-1
              and we spin up a compute cluster in us-west-2 to process it, we will incur a massive Egress Bill
              (~$0.02/GB &times; 500TB = $10,000) just to move that data across the country.
            </p>
            <p className="mb-3"><strong>The Rule:</strong></p>
            <p className="mb-3">
              <strong>Always spin up compute resources in the same region (and ideally same VPC) as the data source.</strong>
              The binary is small; the data is huge. Move the code to the data, not the data to the code.
            </p>
            <p><strong>The Optimization:</strong></p>
            <p>
              If we must move data, aggregate/filter it in place first (using tools like S3 Select, Athena, or BigQuery)
              and only transfer the tiny result set. Query 500TB in place, transfer 5GB of results.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Cloud Lock-In Angle:</strong> Data Gravity is also why cloud providers offer free ingress
              but expensive egress. Once your 500TB is in AWS, moving it to GCP costs ~$10,000. The data&apos;s
              &quot;gravitational pull&quot; keeps you locked in.
            </p>
            <p>
              <strong>The ML/Analytics Trap:</strong> Data scientists love spinning up GPU clusters in whichever
              region has capacity. Each training run that pulls data from a different region can cost thousands
              in egress. Enforce a policy: &quot;Compute must be co-located with training data.&quot;
            </p>
          </>
        }
      />

      {/* Part III: SLA Mathematics & Reliability */}
      <SectionHeader
        title="Part III: SLA Mathematics & Reliability"
        description="Questions 31-40: SLI/SLO/SLA, composite availability, error budgets"
        color="purple"
      />

      <Question
        number={31}
        category="SLA Mathematics"
        question="We have a request that touches 5 microservices in sequence, each with 99.9% availability. What is the composite availability?"
        answer={
          <>
            <p className="mb-3">
              <strong>Serial Dependencies Multiply, They Don&apos;t Add.</strong> When services are in sequence
              (each must succeed for the request to succeed), we multiply their availabilities.
            </p>
            <p className="mb-3"><strong>The Math:</strong></p>
            <p className="mb-3 font-mono bg-muted/30 p-3 rounded">
              Composite = 0.999 &times; 0.999 &times; 0.999 &times; 0.999 &times; 0.999 = 0.999<sup>5</sup> = 0.995 = 99.5%
            </p>
            <p className="mb-3"><strong>The Impact:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>99.9% per service</strong> = ~8.76 hours downtime/year each</li>
              <li><strong>99.5% composite</strong> = ~43.8 hours downtime/year for the full request path</li>
              <li>We went from &quot;three nines&quot; to barely &quot;two nines&quot; by chaining 5 services</li>
            </ul>
            <p>
              <strong>The Principal Insight:</strong> Every microservice you add to a critical path is a
              multiplicative tax on availability. This is why I push for async patterns (queues, events)
              to break serial dependencies and reduce the multiplication chain.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Architecture Implication:</strong> If a product owner asks for 99.99% SLA on a 5-service
              synchronous chain, the math says each service needs ~99.998% individual availability. That&apos;s
              nearly impossible. The answer isn&apos;t &quot;try harder&quot;&mdash;it&apos;s &quot;redesign the architecture&quot;
              to reduce serial dependencies.
            </p>
            <p>
              <strong>The Negotiation Point:</strong> Use this math to push back on unrealistic SLA commitments.
              Show stakeholders: &quot;Given our architecture, 99.9% is achievable. 99.99% requires a fundamental redesign.&quot;
            </p>
          </>
        }
      />

      <Question
        number={32}
        category="SLA Mathematics"
        question="We have 3 replicas of a service, each with 99% availability. If we can succeed with at least 1 replica up, what is the composite availability?"
        answer={
          <>
            <p className="mb-3">
              <strong>Parallel/Redundant Dependencies Use the &quot;Inverse Failure&quot; Formula.</strong> When
              any one of N replicas can serve the request, we calculate the probability that ALL replicas
              fail simultaneously, then subtract from 1.
            </p>
            <p className="mb-3"><strong>The Math:</strong></p>
            <p className="mb-3 font-mono bg-muted/30 p-3 rounded">
              P(all fail) = (1 - 0.99)<sup>3</sup> = 0.01<sup>3</sup> = 0.000001 = 0.0001%<br />
              P(at least one up) = 1 - 0.000001 = 0.999999 = 99.9999%
            </p>
            <p className="mb-3"><strong>The Impact:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Single replica at 99%</strong> = ~3.65 days downtime/year</li>
              <li><strong>3 replicas at 99% each</strong> = ~32 seconds downtime/year (99.9999%)</li>
              <li>We went from &quot;two nines&quot; to &quot;six nines&quot; with just 3 replicas</li>
            </ul>
            <p>
              <strong>The Principal Insight:</strong> Redundancy is the cheapest way to buy availability.
              Adding replicas has diminishing returns, but the first 2-3 replicas provide massive availability gains.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Caveat:</strong> This math assumes <em>independent failures</em>. In reality,
              correlated failures (same AZ, same deployment, same bad config push) can take out all replicas
              simultaneously. True independence requires: multi-AZ deployment, staggered deployments,
              and config validation gates.
            </p>
            <p>
              <strong>The Cost Trade-off:</strong> Going from 1 to 3 replicas gives you ~4 nines improvement
              at 3x cost. Going from 3 to 9 replicas gives you ~2 more nines at 9x cost. Know when to stop.
            </p>
          </>
        }
      />

      <Question
        number={33}
        category="SLA Mathematics"
        question="Why is 'average latency' a terrible SLI?"
        answer={
          <>
            <p className="mb-3">
              <strong>Averages Hide the Pain.</strong> If 99 requests take 10ms and 1 request takes 10,000ms,
              the average is 109ms&mdash;which looks fine. But that 1 user waited 10 seconds, and they&apos;re
              probably your most important customer (complex query = big account).
            </p>
            <p className="mb-3"><strong>The Problem:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Averages are symmetric</strong>&mdash;they treat 1000 fast requests and 1 slow request
              as equivalent to 1001 medium requests. Users don&apos;t experience averages.</li>
              <li><strong>Tail latency hurts revenue</strong>&mdash;Amazon found every 100ms of latency costs 1% in sales.
              The tail is where you lose customers.</li>
              <li><strong>Averages can&apos;t be SLO&apos;d</strong>&mdash;you can&apos;t alert on &quot;average exceeded&quot;
              because it&apos;s too noisy and too slow.</li>
            </ul>
            <p className="mb-3"><strong>The Better SLIs:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>p50 (median)</strong>&mdash;typical user experience</li>
              <li><strong>p95</strong>&mdash;catches most bad experiences</li>
              <li><strong>p99</strong>&mdash;catches almost all bad experiences</li>
              <li><strong>p99.9</strong>&mdash;for critical paths where even rare slowness matters</li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Principal Math:</strong> For latency SLOs, I recommend: p50 &lt; 50ms (fast for most),
              p95 &lt; 200ms (acceptable for edge cases), p99 &lt; 500ms (tolerable for worst case).
              Alert on p99 breaches, not average.
            </p>
            <p>
              <strong>The Hidden Insight:</strong> High p99 with good p50 often indicates GC pauses, cold starts,
              or connection pool exhaustion&mdash;specific, fixable problems. Average latency tells you nothing
              about the cause.
            </p>
          </>
        }
      />

      <Question
        number={34}
        category="SLA Mathematics"
        question="We have a published 99.9% external SLA. Should our internal SLO be the same, lower, or higher?"
        answer={
          <>
            <p className="mb-3">
              <strong>Internal SLO Must Be Higher Than External SLA.</strong> The SLA is a contractual promise
              with financial penalties. The SLO is our operational target. We need buffer room.
            </p>
            <p className="mb-3"><strong>The Hierarchy:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>External SLA: 99.9%</strong>&mdash;what we promise customers (43.8 min/month downtime)</li>
              <li><strong>Internal SLO: 99.95%</strong>&mdash;what we target operationally (21.9 min/month)</li>
              <li><strong>Error Budget Alert: 50% consumed</strong>&mdash;when we slow down deployments</li>
            </ul>
            <p className="mb-3"><strong>Why the Buffer Matters:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Measurement lag</strong>&mdash;we might not know we&apos;re breaching until it&apos;s too late</li>
              <li><strong>Dependency variance</strong>&mdash;our dependencies have their own error budgets</li>
              <li><strong>Incident response time</strong>&mdash;detection + triage + fix + deploy takes time</li>
            </ul>
            <p className="mt-3">
              <strong>The Principal Rule:</strong> Internal SLO should be 2-5x tighter than external SLA
              to provide operational margin.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Cascading Buffer:</strong> If we have downstream dependencies, they need even tighter SLOs.
              If our service has 99.95% SLO and depends on a database, the database team needs a 99.98% SLO to give us
              room for our own failures.
            </p>
            <p>
              <strong>The Business Alignment:</strong> SLAs should be negotiated with finance and legal, not just
              engineering. The cost of SLA breach (credits, penalties, churn) must inform how much buffer we need.
            </p>
          </>
        }
      />

      <Question
        number={35}
        category="SLA Mathematics"
        question="With a 99.9% monthly SLO, how much Error Budget do we have in minutes?"
        answer={
          <>
            <p className="mb-3">
              <strong>Error Budget = Allowed Downtime.</strong> It&apos;s the flip side of the SLO&mdash;the amount
              of unreliability we&apos;re permitted before breaching our target.
            </p>
            <p className="mb-3"><strong>The Math:</strong></p>
            <p className="mb-3 font-mono bg-muted/30 p-3 rounded">
              Monthly minutes = 30 days &times; 24 hours &times; 60 min = 43,200 minutes<br />
              Error Budget = (1 - 0.999) &times; 43,200 = 0.001 &times; 43,200 = <strong>43.2 minutes/month</strong>
            </p>
            <p className="mb-3"><strong>Common SLO Error Budgets:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>99% SLO</strong> = 432 minutes/month (~7.2 hours)</li>
              <li><strong>99.9% SLO</strong> = 43.2 minutes/month (~43 minutes)</li>
              <li><strong>99.95% SLO</strong> = 21.6 minutes/month (~22 minutes)</li>
              <li><strong>99.99% SLO</strong> = 4.32 minutes/month (~4 minutes)</li>
            </ul>
            <p className="mt-3">
              <strong>The Principal Insight:</strong> Error budget is a currency. Spend it wisely on innovation
              (risky deployments, new features). Save it during critical periods (holiday traffic, contract renewals).
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Rolling Window Question:</strong> Is your SLO calendar-month or rolling 30-day?
              Calendar-month resets on the 1st (fresh budget), but rolling window means yesterday&apos;s outage
              still counts against you for 30 days. Most mature orgs use rolling windows for fairness.
            </p>
            <p>
              <strong>The Partial Credit:</strong> Error budget isn&apos;t just binary up/down. If the service is
              returning 50% errors, you&apos;re burning budget at 50% rate. Factor in degraded states, not just outages.
            </p>
          </>
        }
      />

      <Question
        number={36}
        category="SLA Mathematics"
        question="We've burned 90% of our monthly error budget in the first week. What operational changes should we make?"
        answer={
          <>
            <p className="mb-3">
              <strong>10% Remaining = Defensive Mode.</strong> With 90% budget burned and 75% of the month remaining,
              we must prioritize stability over velocity.
            </p>
            <p className="mb-3"><strong>Immediate Actions:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Deployment Freeze</strong>&mdash;no new features deployed until budget recovers. Only
              critical security patches and reliability fixes.</li>
              <li><strong>Change Review Board</strong>&mdash;any change requires explicit approval from SRE lead
              with rollback plan documented.</li>
              <li><strong>Monitoring Tightened</strong>&mdash;lower alert thresholds, increase on-call staffing,
              enable verbose logging for faster diagnosis.</li>
              <li><strong>Customer Communication</strong>&mdash;proactively notify key accounts of stability focus,
              set expectations for feature delays.</li>
            </ul>
            <p className="mb-3"><strong>Root Cause Analysis:</strong></p>
            <p>
              Why did we burn 90% in one week? Was it a single incident (fixable) or chronic instability
              (architectural)? The answer determines whether we need a hotfix or a redesign.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Executive Communication:</strong> At 90% burn, this is an escalation to leadership.
              Frame it as: &quot;We have 4.3 minutes of allowed downtime remaining this month. Any additional outage
              will breach our SLA. We recommend a deployment freeze and root cause investigation.&quot;
            </p>
            <p>
              <strong>The Trade-off Conversation:</strong> Product will push back on the freeze. Have data ready:
              &quot;Last month&apos;s SLA breach cost us $X in credits and Y% in customer NPS. The deployment freeze
              costs us Z days of feature delay. Which is worse?&quot;
            </p>
          </>
        }
      />

      <Question
        number={37}
        category="SLA Mathematics"
        question="Explain the difference between MTBF and MTTR."
        answer={
          <>
            <p className="mb-3">
              <strong>MTBF (Mean Time Between Failures)</strong> measures how often things break.
              <strong> MTTR (Mean Time To Recover)</strong> measures how quickly we fix them.
            </p>
            <p className="mb-3"><strong>The Definitions:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>MTBF</strong> = Total uptime / Number of failures. Example: 720 hours uptime with
              3 failures = 240 hours MTBF (~10 days between failures).</li>
              <li><strong>MTTR</strong> = Total downtime / Number of failures. Example: 6 hours total downtime
              across 3 failures = 2 hours MTTR.</li>
            </ul>
            <p className="mb-3"><strong>The Availability Formula:</strong></p>
            <p className="mb-3 font-mono bg-muted/30 p-3 rounded">
              Availability = MTBF / (MTBF + MTTR)
            </p>
            <p>
              <strong>Example:</strong> MTBF = 240 hours, MTTR = 2 hours<br />
              Availability = 240 / (240 + 2) = 240 / 242 = 99.17%
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Principal Insight:</strong> Most teams focus on MTBF (prevent failures). But improving
              MTTR is often 10x easier and equally effective. Going from 2-hour MTTR to 20-minute MTTR is a
              runbook + automation investment. Going from 10-day MTBF to 100-day MTBF requires fundamental
              architecture changes.
            </p>
            <p>
              <strong>The Investment Priority:</strong> For every $1 spent on failure prevention, spend $1 on
              recovery automation. Canary deployments, automated rollback, circuit breakers&mdash;these reduce
              MTTR dramatically for relatively low cost.
            </p>
          </>
        }
      />

      <Question
        number={38}
        category="SLA Mathematics"
        question="What's the difference between a 'Brownout' and a 'Blackout' in the context of error-budget burn?"
        answer={
          <>
            <p className="mb-3">
              <strong>Blackout</strong> = Total outage (100% errors). <strong>Brownout</strong> = Partial degradation
              (some % of requests failing or slow).
            </p>
            <p className="mb-3"><strong>Error Budget Impact:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Blackout (100% failure)</strong> burns error budget at 1:1 rate. 1 minute of blackout
              = 1 minute of budget consumed.</li>
              <li><strong>Brownout (e.g., 30% failure)</strong> burns budget proportionally. 10 minutes at 30%
              error rate = 3 minutes of budget consumed.</li>
            </ul>
            <p className="mb-3"><strong>The Hidden Danger:</strong></p>
            <p className="mb-3">
              Brownouts are insidious because they can persist unnoticed. A 5% error rate for 8 hours burns
              24 minutes of budget&mdash;more than half of a 99.9% monthly budget&mdash;without triggering
              typical &quot;site down&quot; alerts.
            </p>
            <p>
              <strong>The Principal Action:</strong> Set brownout-specific alerts. Alert at 1% error rate
              (warning), 5% error rate (page), not just 100% (blackout). Brownouts are budget vampires.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The User Experience Angle:</strong> Brownouts often feel worse to users than short blackouts.
              A 10-minute blackout with a clear error page is frustrating but understandable. A 2-hour brownout
              where &quot;sometimes it works, sometimes it doesn&apos;t&quot; erodes trust and creates support tickets.
            </p>
            <p>
              <strong>The Measurement Challenge:</strong> How do you count brownouts? Is a request that takes 30s
              instead of 300ms a &quot;success&quot;? Define latency-based SLIs alongside error-based SLIs to catch
              slow brownouts.
            </p>
          </>
        }
      />

      <Question
        number={39}
        category="SLA Mathematics"
        question="How should we exclude planned maintenance from SLO calculations?"
        answer={
          <>
            <p className="mb-3">
              <strong>Maintenance Windows Must Be Pre-Agreed, Documented, and Bounded.</strong> You can&apos;t
              retroactively declare an outage as &quot;planned maintenance.&quot;
            </p>
            <p className="mb-3"><strong>The Rules for Exclusion:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Pre-announced</strong>&mdash;customers notified at least 72 hours in advance (for major),
              24 hours (for minor).</li>
              <li><strong>Time-bounded</strong>&mdash;stated duration, e.g., &quot;2-hour window starting at 2am UTC.&quot;
              If you exceed the window, the overage counts against SLO.</li>
              <li><strong>Frequency-capped</strong>&mdash;e.g., &quot;max 4 hours of maintenance per month.&quot; Unlimited
              maintenance windows defeat the purpose of an SLO.</li>
              <li><strong>Documented in SLA</strong>&mdash;the exclusion policy must be in the contract, not invented
              after the fact.</li>
            </ul>
            <p>
              <strong>The Calculation:</strong> If we have 43,200 minutes/month and 4 hours (240 min) of maintenance,
              the SLO applies to the remaining 42,960 minutes. Error budget is 0.1% of 42,960 = 42.96 minutes.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Trust Factor:</strong> Excessive maintenance exclusions erode customer trust. If you
              exclude 8 hours/month, your &quot;99.9% SLA&quot; is really 99.9% of 98.9% of the time, which feels
              like false advertising. Best practice: include maintenance in your SLO target, design for
              zero-downtime deployments.
            </p>
            <p>
              <strong>The Compliance Angle:</strong> For regulated industries, &quot;planned maintenance&quot; might
              not be excludable. Healthcare systems, financial trading platforms&mdash;check your regulatory
              requirements before promising maintenance windows.
            </p>
          </>
        }
      />

      <Question
        number={40}
        category="SLA Mathematics"
        question="Why is moving from '3 nines' to '4 nines' often described as a '10x Cost' decision?"
        answer={
          <>
            <p className="mb-3">
              <strong>Each Additional Nine Requires Exponentially More Investment.</strong> The math is
              counterintuitive: 99.9% to 99.99% is &quot;only&quot; 0.09% improvement, but it&apos;s a 10x reduction
              in allowed downtime.
            </p>
            <p className="mb-3"><strong>The Numbers:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>99.9% (3 nines)</strong> = 43.2 minutes/month downtime allowed</li>
              <li><strong>99.99% (4 nines)</strong> = 4.32 minutes/month downtime allowed</li>
              <li><strong>Reduction</strong> = 10x less downtime budget</li>
            </ul>
            <p className="mb-3"><strong>Why It Costs ~10x More:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Infrastructure:</strong> Multi-region active-active, not just multi-AZ</li>
              <li><strong>Testing:</strong> Chaos engineering, game days, DR drills become mandatory</li>
              <li><strong>Staffing:</strong> 24/7 on-call with &lt;5 minute response SLA (more people)</li>
              <li><strong>Deployment:</strong> Canary + blue-green + automated rollback (tooling investment)</li>
              <li><strong>Dependencies:</strong> Every dependency must also be 4+ nines (vendor costs)</li>
            </ul>
            <p>
              <strong>The Principal Question:</strong> Does the business need 4 nines? Most B2B SaaS is fine
              at 99.9%. Payment processing, healthcare, trading platforms might need 99.99%. Match investment to need.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Human Cost:</strong> 4 nines means your MTTR must be &lt;4 minutes. That requires:
              always-on engineers (burnout risk), automated everything (no manual steps), and near-zero
              coordination time (no Slack threads during incidents). The organizational strain is significant.
            </p>
            <p>
              <strong>The Business Case Framework:</strong> Calculate: (revenue/minute &times; 38.88 saved minutes)
              vs. (annual cost of 4-nine infrastructure). If your service makes &lt;$1M/year, 4 nines probably
              costs more than the downtime. If it makes &gt;$100M/year, 4 nines is cheap insurance.
            </p>
          </>
        }
      />

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <Link
          href="/nebula/system-design/guide"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Principal TPM Guide
        </Link>
        <Link
          href="/nebula/system-design/deep-dives"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Deep Dives &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
