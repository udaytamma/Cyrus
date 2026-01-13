"use client";

/**
 * System Design - Practice Questions Part I: Fundamentals
 * Q1-20: Statelessness, Caching, Sharding, Microservices, Operational Excellence
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import { Question, SectionHeader, PartHeader, InstructionsBox } from "@/components/PracticeQuestionComponents";

export default function FundamentalsQuestions() {
  return (
    <SystemDesignLayout
      title="System Design - Fundamentals (Q1-20)"
      description="Core system design concepts for Principal TPM interviews"
      currentSection="practice"
    >
      <Link
        href="/nebula/system-design/practice"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Practice Questions
      </Link>

      <PartHeader
        partNumber="I"
        title="System Design Fundamentals"
        description="Core concepts: statelessness, caching, sharding, microservices, and operational excellence"
        questionRange="Q1-20"
        color="blue"
      />

      <InstructionsBox />

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

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <Link
          href="/nebula/system-design/practice"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Practice Questions
        </Link>
        <Link
          href="/nebula/system-design/practice/cloud-economics"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Part II: Cloud Economics &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
