"use client";

/**
 * System Design - SD TPM Lexicon
 * Principal TPM vocabulary for system design interviews at Mag7 companies
 */

import Link from "next/link";
import { useState } from "react";
import { SystemDesignLayout, getSystemDesignNavigation } from "@/components/SystemDesignLayout";
import { BackToTopButton } from "@/components/BackToTopButton";

// Term definition component
function Term({ name, definition }: { name: string; definition: string }) {
  // Strip asterisk (*) and trailing dash for consistent ID matching
  const cleanName = name.replace(/\s*\*$/, "");
  const termId = `term-${cleanName.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/-$/, "")}`;
  return (
    <div id={termId} className="py-3 border-b border-border/30 last:border-b-0 scroll-mt-48 transition-colors duration-500">
      <dt className="font-semibold text-foreground">{name}</dt>
      <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{definition}</dd>
    </div>
  );
}

// Category section component
function CategorySection({
  title,
  color,
  terms,
}: {
  title: string;
  color: string;
  terms: { name: string; definition: string }[];
}) {
  const colorMap: Record<string, string> = {
    cyan: "border-l-cyan-400",
    amber: "border-l-amber-400",
    purple: "border-l-purple-400",
    red: "border-l-red-400",
    green: "border-l-green-400",
    blue: "border-l-blue-400",
    orange: "border-l-orange-400",
    rose: "border-l-rose-400",
    slate: "border-l-slate-400",
  };

  const categoryId = `category-${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  return (
    <section
      id={categoryId}
      className={`bg-card/50 backdrop-blur-sm rounded-xl border-l-4 ${colorMap[color] || colorMap.cyan} border border-border/50 p-5 mb-6 scroll-mt-20`}
    >
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <dl className="space-y-0">
        {terms.map((term, idx) => (
          <Term key={idx} name={term.name} definition={term.definition} />
        ))}
      </dl>
    </section>
  );
}

// Per-page index component
function PerPageIndex({
  pages,
  onTermClick,
}: {
  pages: { title: string; terms: string[] }[];
  onTermClick: (term: string) => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleTermClick = (e: React.MouseEvent, term: string) => {
    e.stopPropagation();
    onTermClick(term);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pages.map((page) => (
        <div
          key={page.title}
          className="bg-card/30 rounded-lg border border-border/50 p-4 hover:bg-card/50 transition-colors cursor-pointer"
          onClick={() => setExpanded(expanded === page.title ? null : page.title)}
        >
          <h4 className="text-sm font-medium text-foreground mb-2">{page.title}</h4>
          {expanded === page.title ? (
            <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
              {page.terms.map((term, idx) => (
                <li key={idx}>
                  <button
                    onClick={(e) => handleTermClick(e, term)}
                    className="text-left hover:text-primary hover:underline transition-colors"
                  >
                    {term}
                  </button>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-xs text-muted-foreground">
              {page.terms.length} terms &middot; Click to expand
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// Mini-map navigation component for quick category jumping - fixed on right sidebar
function MiniMap({ categories }: { categories: { title: string; color: string }[] }) {
  const colorMap: Record<string, string> = {
    cyan: "bg-cyan-400/30 border-cyan-400/60 hover:bg-cyan-400/50",
    amber: "bg-amber-400/30 border-amber-400/60 hover:bg-amber-400/50",
    purple: "bg-purple-400/30 border-purple-400/60 hover:bg-purple-400/50",
    red: "bg-red-400/30 border-red-400/60 hover:bg-red-400/50",
    green: "bg-green-400/30 border-green-400/60 hover:bg-green-400/50",
    blue: "bg-blue-400/30 border-blue-400/60 hover:bg-blue-400/50",
    orange: "bg-orange-400/30 border-orange-400/60 hover:bg-orange-400/50",
    rose: "bg-rose-400/30 border-rose-400/60 hover:bg-rose-400/50",
    slate: "bg-slate-400/30 border-slate-400/60 hover:bg-slate-400/50",
  };

  const scrollToCategory = (title: string) => {
    const element = document.getElementById(`category-${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden xl:block fixed right-4 top-24 z-30 w-48 p-3 bg-card/95 backdrop-blur-md rounded-xl border border-border shadow-lg">
      <p className="text-xs text-muted-foreground text-center mb-3 font-semibold uppercase tracking-wider">Categories</p>
      <div className="flex flex-col gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat.title}
            onClick={() => scrollToCategory(cat.title)}
            className={`w-full px-3 py-1.5 text-xs font-medium rounded-md border transition-all hover:scale-[1.02] text-left ${colorMap[cat.color] || colorMap.cyan}`}
          >
            {cat.title.split("&")[0].trim()}
          </button>
        ))}
      </div>
    </div>
  );
}

// Lexicon data - Principal TPM vocabulary for system design interviews
const lexiconCategories = [
  {
    title: "Reliability & SLA Engineering",
    color: "cyan",
    terms: [
      { name: "Composite SLA", definition: "System availability calculated by multiplying serial dependencies. Ten services at 99.9% each = 99.0% system SLA. This math drives architectural decisions like removing synchronous hops." },
      { name: "Error Budget", definition: "The allowed failure margin (100% - SLO). When budget is exhausted, feature velocity freezes until reliability improves. Operationalizes the velocity-vs-reliability trade-off." },
      { name: "Burn Rate", definition: "How fast you're consuming error budget relative to the budget period. A 2x burn rate means you'll exhaust a 30-day budget in 15 days. Triggers escalation thresholds (2x = page, 10x = incident)." },
      { name: "SLI/SLO/SLA Pipeline", definition: "SLI (what you measure) -> SLO (internal target) -> SLA (external commitment with penalties). Principal TPMs own the gap between SLO and SLA as safety margin." },
      { name: "Critical User Journey (CUJ)", definition: "End-to-end user flows that define success. SLOs are set per-CUJ, not per-service. \"Checkout completes in &lt;3s for P99\" vs. \"Cart service has 99.9% availability.\"" },
      { name: "Gray Failure", definition: "Partial degradation where a system isn't fully down but isn't healthy - increased latency, elevated error rates, or inconsistent behavior. Harder to detect than binary failures." },
      { name: "MTTR vs MTTF Trade-off", definition: "Mean Time To Recovery vs Mean Time To Failure. Modern systems optimize for fast recovery (low MTTR) rather than preventing all failures (high MTTF). Design for failure." },
      { name: "Multi-Window Alerting", definition: "Alert when error budget burn rate exceeds thresholds across multiple time windows (5min for spikes, 6hr for trends). Prevents both alert fatigue and missed degradations." },
      { name: "Four Golden Signals", definition: "Google SRE's foundational metrics: Latency, Traffic, Errors, and Saturation. These four signals form the basis for defining SLIs and building effective dashboards." },
      { name: "PACELC Theorem", definition: "Extension of CAP: if Partition occurs, choose Availability or Consistency; Else during normal operation, trade off Latency or Consistency. More practical than CAP for real-world decisions." },
      { name: "Tier-0 Service", definition: "Critical dependencies (e.g., Identity) where outage causes total platform failure. Requires active-active regional replication and 99.999% availability to support downstream SLAs." },
      { name: "Symptom-Based Alerting", definition: "Alert on user-facing pain (high latency, elevated errors) rather than infrastructure causes (high CPU). Ensures high signal fidelity and reduces false positives." },
    ],
  },
  {
    title: "Architectural Strategy",
    color: "purple",
    terms: [
      { name: "Blast Radius", definition: "The scope of impact when a component fails. Principal TPMs drive architectural decisions (sharding, cell architecture, bulkheads) specifically to reduce blast radius." },
      { name: "Cell-Based Architecture", definition: "Isolating users/tenants into independent cells where failures don't propagate. Each cell has complete stack. Limits blast radius to ~1-5% of users per cell failure." },
      { name: "Strangler Fig Pattern", definition: "Incrementally replacing legacy systems by routing traffic to new implementations piece by piece. Enables zero-downtime migrations of critical systems." },
      { name: "Expand-Contract Pattern", definition: "Database migration strategy: (1) expand schema to support both old and new, (2) migrate data, (3) contract by removing old schema. Prevents breaking changes." },
      { name: "Bulkhead Pattern", definition: "Isolating components so failure in one doesn't cascade. Like ship compartments - a leak sinks one section, not the whole vessel. Implemented via separate thread pools, connection pools, or services." },
      { name: "Architectural Runway", definition: "The amount of existing architecture that can support planned features without redesign. When runway depletes, velocity drops sharply. Principal TPMs track this metric." },
      { name: "N+1 Redundancy", definition: "Having one more instance than required for peak load. N+2 means two extra. Critical for rolling deployments and failure tolerance without capacity reduction." },
      { name: "Circuit Breaker", definition: "Resilience pattern detecting persistent downstream failures and temporarily stopping requests. Prevents resource exhaustion and cascading failures by failing fast." },
      { name: "Metastable Failure", definition: "Failure mode where a small error triggers positive feedback loops (retry storms), causing blast radius to expand from a partition to total system collapse." },
      { name: "Fan-out Ratio", definition: "Number of downstream service calls per ingress request. High ratio indicates latency risks and need for aggregation patterns like GraphQL or BFF." },
      { name: "Scientist Pattern", definition: "GitHub's refactoring pattern comparing old and new code paths in production to detect mismatches before full migration. Enables safe, incremental rewrites." },
    ],
  },
  {
    title: "Data & Consistency",
    color: "blue",
    terms: [
      { name: "Consistent Hashing", definition: "Distributing data across nodes where adding/removing nodes only remaps ~1/n of keys. Essential for cache clusters and sharded databases. Know the virtual node optimization." },
      { name: "Hot Partition (Celebrity Problem)", definition: "When one shard receives disproportionate traffic (celebrity user, viral product). Solutions: composite keys, dedicated shards, or caching layers." },
      { name: "Scatter-Gather", definition: "Query pattern where requests fan out to multiple shards and results are aggregated. Each added shard increases latency variance. Know when to avoid (high-cardinality queries)." },
      { name: "Vector Clock", definition: "Mechanism for tracking causality in distributed systems without synchronized clocks. Each node maintains a vector of logical timestamps. Used in eventually consistent systems." },
      { name: "Quorum (W+R>N)", definition: "Configuring write replicas (W) and read replicas (R) such that reads always see latest writes when W+R exceeds total replicas (N). Tunable consistency." },
      { name: "SAGA Pattern", definition: "Managing distributed transactions through a sequence of local transactions with compensating actions for rollback. Alternative to two-phase commit that maintains availability." },
      { name: "Idempotency", definition: "Design property ensuring processing the same message multiple times yields identical state. Required to prevent data corruption (double billing) in at-least-once delivery systems." },
      { name: "Change Data Capture (CDC)", definition: "Pattern capturing database changes as event streams for downstream consumption. Enables event-driven architectures, materialized views, and real-time analytics without coupling." },
      { name: "Consumer Lag", definition: "Delta between latest produced data and last processed item in buffered systems. Growing lag indicates backpressure even when API ingestion appears healthy." },
      { name: "Cache Penetration", definition: "Failure mode where requests for non-existent keys bypass cache and saturate the database. Mitigated by Bloom Filters or caching negative lookups." },
    ],
  },
  {
    title: "Program Execution & Risk",
    color: "orange",
    terms: [
      { name: "Fix-Forward vs Rollback", definition: "Decision framework for incidents. Rollback when cause is deployment-related and rollback is fast/safe. Fix-forward when rollback is risky or would cause data issues." },
      { name: "Dark Deployment", definition: "Deploying code to production without exposing it to users. Combined with feature flags, enables testing in production environment before release." },
      { name: "Progressive Delivery", definition: "Releasing to expanding user segments: canary (1%) -> beta (10%) -> GA (100%). Each stage has bake time and success criteria before expansion." },
      { name: "Bake Time", definition: "Mandatory waiting period after deployment to observe for latent issues. Typically 15-30 minutes for canary, longer for higher-risk changes." },
      { name: "Feature Flag Taxonomy", definition: "Release flags (short-lived, enable features), Ops flags (circuit breakers), Experiment flags (A/B tests), Permission flags (entitlements). Each has different lifecycle and ownership." },
      { name: "Flag Debt", definition: "Accumulation of stale feature flags that should have been removed. Creates cognitive overhead and potential bugs. Principal TPMs enforce flag cleanup SLOs." },
      { name: "Go/No-Go Criteria", definition: "Explicit, measurable criteria for proceeding with migrations, launches, or cutovers. Removes ambiguity from high-stakes decisions." },
      { name: "Immutable Artifact", definition: "Build artifact that never changes after creation - same binary goes through dev, staging, prod. Eliminates 'works on my machine' and enables reproducible deployments." },
      { name: "Watermelon OKR", definition: "Program failure mode where status reports 'Green' throughout then turns 'Red' at launch. Caused by sentiment-based vs. objective binary milestone tracking." },
      { name: "Dual Write Pattern", definition: "Data migration strategy writing to both legacy and new datastores simultaneously. Legacy remains authoritative for reads until validated cutover." },
    ],
  },
  {
    title: "Cloud Economics & FinOps",
    color: "green",
    terms: [
      { name: "Unit Economics", definition: "Cost per meaningful business unit (cost per transaction, cost per user, cost per GB processed). The metric that connects infrastructure to margin." },
      { name: "Commitment Coverage", definition: "Percentage of baseline compute covered by reserved instances or savings plans. Target: 70-80% for predictable workloads. Under-coverage wastes money; over-coverage creates stranded capacity." },
      { name: "Stranded Capacity", definition: "Reserved/committed resources sitting unused. Often caused by over-provisioning or workload migration. Direct hit to unit economics." },
      { name: "Cost Iceberg", definition: "The visible compute cost is tip of iceberg. Hidden costs: data transfer (especially egress), storage IOPS, API calls, support tiers, observability. Total cost often 2-3x compute." },
      { name: "Network Egress Tax", definition: "Cross-region and internet egress costs are significant at scale. $0.01/GB sounds small until you're moving petabytes. Architectural decisions (data locality, CDN placement) directly impact this." },
      { name: "Chargeback vs Showback", definition: "Chargeback: teams pay for resources from their budget. Showback: visibility without financial transfer. Chargeback drives accountability but adds friction." },
      { name: "TCO (Total Cost of Ownership)", definition: "Full cost including not just cloud spend but engineering time, operational overhead, migration costs, and opportunity costs. The real metric for build-vs-buy." },
      { name: "W-Model", definition: "Strategic planning framework (Google, Meta) bridging top-down executive strategy with bottom-up engineering proposals to align resources and finalize commitments." },
      { name: "Zombie APIs", definition: "Active endpoints receiving traffic but generating no business value. Critical targets for deprecation to reduce infrastructure costs and security attack surface." },
      { name: "CapEx Capitalization (SOP 98-1)", definition: "US GAAP allowing engineering labor during development to be capitalized as asset vs. expensed, boosting EBITDA by moving costs from P&L to balance sheet." },
    ],
  },
  {
    title: "Incident Management",
    color: "red",
    terms: [
      { name: "Incident Commander (IC)", definition: "Single decision-maker during incidents. Owns communication cadence, resource allocation, and go/no-go on fixes. Not necessarily the most senior person - the most available qualified person." },
      { name: "Severity Matrix", definition: "Objective criteria for Sev1/Sev2/Sev3 classification based on user impact, revenue impact, and blast radius. Removes subjectivity from escalation decisions." },
      { name: "Blameless Postmortem", definition: "Root cause analysis focused on systemic factors, not individual fault. \"What conditions allowed this to happen?\" not \"Who made the mistake?\" Psychological safety enables learning." },
      { name: "5 Whys + Swiss Cheese", definition: "5 Whys identifies causal chain; Swiss Cheese Model shows how multiple defense layers failed simultaneously. Combining both yields actionable systemic improvements." },
      { name: "COE (Correction of Error)", definition: "Amazon's formal mechanism for documenting incidents with root cause, customer impact, and action items. Reviewed by leadership. Similar: Google's PIR (Postmortem Incident Review)." },
      { name: "Action Item Governance", definition: "Tracking postmortem action items to completion with ownership, deadlines, and escalation. Without governance, postmortems become theater." },
      { name: "GameDay", definition: "Synchronized, high-fidelity failure rehearsal verifying not just technical resilience, but human response systems, access permissions, and runbook validity under pressure." },
      { name: "Steady State Hypothesis", definition: "Quantifiable baseline of healthy system using business metrics (Orders per Minute) not infrastructure stats. The control group for chaos engineering experiments." },
    ],
  },
  {
    title: "Organizational Design",
    color: "amber",
    terms: [
      { name: "Conway's Law", definition: "Systems mirror the communication structure of the organization that builds them. Not a suggestion - an observation. Architecture and org design are coupled." },
      { name: "Inverse Conway Maneuver", definition: "Deliberately structuring teams to produce desired architecture. Want microservices? Create small, independent teams with clear service ownership." },
      { name: "Team Topologies", definition: "Four team types: Stream-aligned (deliver value), Platform (reduce cognitive load), Enabling (capability building), Complicated-subsystem (specialist domains). Principal TPMs map programs to topologies." },
      { name: "Cognitive Load", definition: "The mental effort required to work with a system or domain. When cognitive load exceeds team capacity, quality and velocity suffer. Platform teams exist to reduce cognitive load." },
      { name: "Thinnest Viable Platform (TVP)", definition: "The minimum platform capabilities that enable stream-aligned teams to deliver autonomously. Avoid premature platformization that adds overhead without value." },
      { name: "KTLO Ratio", definition: "Keep The Lights On work as percentage of team capacity. Healthy: &lt;20%. Concerning: 30-40%. Crisis: &gt;50% (operationally bankrupt). Principal TPMs track and drive this down." },
      { name: "Paved Roads", definition: "Platform governance strategy where standardized, pre-approved infrastructure offers 'free' SRE support. Incentivizes adoption vs. high-risk 'off-road' custom implementations." },
      { name: "Golden Path", definition: "The opinionated, well-supported path for building and deploying services. Offers best practices, templates, and automation - but teams can go off-path at their own cost." },
    ],
  },
  {
    title: "Technical Debt & Governance",
    color: "rose",
    terms: [
      { name: "Fowler's Debt Quadrant", definition: "Deliberate-Prudent (strategic trade-off), Inadvertent-Prudent (learned something), Deliberate-Reckless (shortcut taken knowingly), Inadvertent-Reckless (didn't know better). Each requires different response." },
      { name: "Velocity Tax", definition: "The ongoing cost of debt measured in slower delivery. A 30% velocity tax means the team delivers 30% less than they could with clean code." },
      { name: "Toil", definition: "Manual, repetitive, automatable work that scales with service size. Distinct from overhead. SRE target: &lt;50% toil. When toil exceeds 50%, the team is operationally bankrupt." },
      { name: "20% Tax Rule", definition: "Sustainable debt repayment rate. Dedicating 20% of sprint capacity to debt reduction prevents accumulation while maintaining feature velocity." },
      { name: "Pain Index", definition: "Quantifying debt by combining frequency of occurrence, severity of impact, and remediation cost. Enables objective prioritization of debt repayment." },
      { name: "ADR (Architecture Decision Record)", definition: "Lightweight document capturing architectural decisions with context, consequences, and alternatives considered. Creates institutional memory and enables async decision review." },
      { name: "RFC Process", definition: "Request for Comments - formal mechanism for proposing and reviewing significant technical changes. Enables broad input, documents rationale, and creates accountability." },
    ],
  },
  {
    title: "Security & Zero Trust",
    color: "slate",
    terms: [
      { name: "Zero Trust Architecture", definition: "Security paradigm assuming network is hostile and perimeter is breached. Requires continuous identity verification for every request - no implicit trust based on network location." },
      { name: "Mutual TLS (mTLS)", definition: "Cryptographic protocol for East-West traffic where both client and server present x.509 certificates. Ensures strict identity verification between internal microservices." },
      { name: "ABAC", definition: "Attribute-Based Access Control evaluating user, resource, and environment attributes (time, VPC endpoint) for fine-grained authorization beyond static RBAC roles." },
      { name: "ReBAC", definition: "Relationship-Based Access Control (Google Zanzibar) defining permissions based on resource relationships in a graph. More scalable than RBAC for complex hierarchies." },
      { name: "Shadow APIs", definition: "Undocumented, unmaintained endpoints bypassing security governance. Primary attack vector requiring automated discovery and 'Shift Left' security policies." },
      { name: "Principle of Least Privilege", definition: "Granting minimum permissions necessary for a task. Reduces blast radius of credential compromise. Enforced via IAM policies, service accounts, and time-bound access." },
    ],
  },
];

// Per-page index data - Gemini-extracted terms from 80 Knowledge Base documents
const perPageIndex = [
  { title: "Agile at Scale & Program Governance", terms: ["W-Model", "Contract-First Development", "Progressive Delivery", "Automated Governance", "Watermelon OKR"] },
  { title: "Alerting Best Practices", terms: ["Error Budget", "Burn Rate Alerting", "Symptom-Based Alerting", "Four Golden Signals", "Critical User Journeys (CUJs)"] },
  { title: "API Lifecycle Management", terms: ["Interface Definition Language (IDL)", "Consumer-Driven Contracts (CDC)", "Paved Roads", "Fan-out Ratio", "Zombie APIs"] },
  { title: "API Security", terms: ["Zero Trust Architecture (ZTA)", "Mutual TLS (mTLS)", "Service Mesh", "ReBAC", "Shadow APIs"] },
  { title: "Asynchronous: Queues vs. Pub/Sub", terms: ["Competing Consumers Pattern", "Idempotency", "Visibility Timeout", "Dead Letter Queue (DLQ)", "Message Group IDs"] },
  { title: "Authentication vs. Authorization", terms: ["Zero Trust Architecture", "ReBAC", "Tier-0 Service", "Adaptive Authentication", "ABAC"] },
  { title: "Auto-scaling Strategies", terms: ["Efficient Frontier", "Headroom", "Thundering Herd", "Hot Shard", "Graceful Degradation"] },
  { title: "Availability Tiers", terms: ["Static Stability", "Cellular Architecture", "Dependency Inversion", "Control Plane vs Data Plane", "Tier Drift"] },
  { title: "Backpressure", terms: ["Load Shedding", "Circuit Breaker", "Graceful Degradation", "Thundering Herd", "Consumer Lag"] },
  { title: "Blast Radius Analysis", terms: ["Static Stability", "Cellular Architecture", "Metastable Failure", "Functional Partitioning", "Progressive Rollout"] },
  { title: "Bloom Filters", terms: ["Read Amplification", "False Positive Rate (FPR)", "Cache Penetration", "Counting Bloom Filters", "LSM Trees"] },
  { title: "Branch by Abstraction", terms: ["Trunk-Based Development", "Shadow Mode (Dark Reads)", "Dual Write, Single Read", "Scientist Pattern"] },
  { title: "Bulkhead Pattern", terms: ["Blast Radius Reduction", "Cellular Architecture", "Poison Pill", "Control Plane Isolation", "Criticality-Based Bulkheading"] },
  { title: "CAP Theorem", terms: ["PACELC Theorem", "Split Brain", "Tunable Consistency", "Quorum", "CRDTs"] },
  { title: "Capacity Planning", terms: ["Shape Model", "Stranded Capacity", "Fungible Capacity", "Inorganic Growth", "The Interlock"] },
  { title: "CapEx vs OpEx", terms: ["SOP 98-1 (Capitalization)", "Cost to Serve (CTS)", "Data Gravity", "Stranded Asset"] },
  { title: "Change Data Capture (CDC)", terms: ["Dual Write Problem", "Write-Ahead Log (WAL)", "Idempotency", "CQRS", "Schema Registry"] },
  { title: "Chaos Engineering", terms: ["Steady State", "Blast Radius", "GameDay", "Failure Injection Testing (FIT)", "Cell-Based Architecture"] },
  { title: "CI/CD & Release Engineering", terms: ["Immutable Artifact", "Dark Deployment", "Trunk-Based Development", "Branch by Abstraction", "Blast Radius"] },
  { title: "Circuit Breaker", terms: ["Cascading Failure", "Half-Open State", "Fail-Fast", "Graceful Degradation", "Thundering Herd"] },
  { title: "Cloud Economics (FinOps)", terms: ["Unit Economics", "Savings Plans", "Spot/Preemptible Instances", "Network Egress", "Proportional Attribution"] },
  { title: "Compliance & Data Sovereignty", terms: ["Data Sovereignty", "Crypto-shredding", "Tokenization", "Envelope Encryption", "SOC 2 Type II"] },
  { title: "Composite SLA Calculation", terms: ["Composite Availability", "Serial Dependency", "Soft Dependency", "Correlated Failure", "Cell-based Architecture"] },
  { title: "Content Delivery Networks", terms: ["Anycast VIP", "Origin Shield", "Request Coalescing", "Direct Peering", "Cache Penetration"] },
  { title: "Cost Model Fundamentals", terms: ["Unit Economics", "Sub-linear Scaling", "Data Locality", "Bin-Packing", "Committed Use Discounts (CUDs)"] },
  { title: "Count-Min Sketch", terms: ["One-Sided Error", "Heavy Hitters", "Conservative Update", "Temporal Decay"] },
  { title: "Data Architecture Patterns", terms: ["Lakehouse Architecture", "Kappa Architecture", "Schema-on-Read", "Watermarks", "Backpressure"] },
  { title: "Data Classification Framework", terms: ["Mosaic Effect", "Asynchronous Classification", "Derivative Classification", "Multi-Party Authorization"] },
  { title: "Data Governance & Privacy", terms: ["Architectural Compliance", "Policy-as-Code (PaC)", "Purpose-Based Access Control", "Active Metadata Platform"] },
  { title: "Data Transfer Optimization", terms: ["Head-of-Line Blocking", "Exponential Backoff with Jitter", "QUIC", "0-RTT Resumption", "Thundering Herd"] },
  { title: "Database Sharding", terms: ["Consistent Hashing", "Scatter-Gather", "Celebrity Problem", "Blast Radius Reduction", "Vertical Ceiling"] },
  { title: "Distributed Tracing", terms: ["Tail-Based Sampling", "W3C Trace Context", "Shadow Dependencies", "Sidecar Collector", "Auto-Instrumentation"] },
  { title: "DNS Architecture", terms: ["Global Traffic Management", "Anycast", "EDNS Client Subnet", "Negative Caching", "TTL Strategy"] },
  { title: "Dual-Write / Dual-Read", terms: ["Shadow Reads", "Change Data Capture", "Read-Your-Write Consistency", "Reconciliation", "Dead Letter Queue"] },
  { title: "Encryption Strategy", terms: ["Envelope Encryption", "Confidential Computing", "Zero Trust", "HYOK", "Post-Quantum Cryptography"] },
  { title: "Error Budgets", terms: ["Social Contract", "Critical User Journeys", "Gold Plating", "Burn Rate Alerting", "Budget Bankruptcy"] },
  { title: "Expected Loss Calculation", terms: ["Expected Loss (EL)", "Blast Radius", "Cellular Architecture", "Error Budgets", "Swiss Cheese Model"] },
  { title: "Experimentation Platforms", terms: ["Sample Ratio Mismatch (SRM)", "Orthogonal Layering", "Switchback Testing", "Global Holdout", "Counterfactual Logging"] },
  { title: "FinOps & Cloud Cost Engineering", terms: ["Unit Economics", "Proportional Attribution", "Taxonomy Architecture", "Chargeback Model", "Amortized Cost"] },
  { title: "GDPR Compliance", terms: ["Lawful Basis", "Data Subject Rights", "Controller vs Processor", "Breach Notification (72hr)", "DPA Requirements"] },
  { title: "Geo-Replication & Conflict", terms: ["Vector Clocks", "Lamport Timestamps", "Last-Write-Wins (LWW)", "CRDTs", "Bi-directional Replication"] },
  { title: "Incident Management", terms: ["Incident Commander (IC)", "Severity Matrix", "Blameless Postmortem", "5 Whys / Swiss Cheese", "Action Item Governance"] },
  { title: "LLM Serving Infrastructure", terms: ["KV Cache", "Speculative Decoding", "LoRA Adapters", "Tensor Parallelism", "Chinchilla Scaling Laws"] },
  { title: "Load Balancing Algorithms", terms: ["P2C (Power of Two Choices)", "Weighted Round Robin", "Consistent Hashing", "Subsetting", "Health Check Amplification"] },
  { title: "Multi-Region Architecture", terms: ["Active-Active", "Split Brain", "Conflict-Free Replicated Data Types", "Deployment Rings", "Regional Failover"] },
  { title: "Observability", terms: ["Three Pillars", "Cardinality Explosion", "Exemplars", "High Cardinality Indexing", "Tail-Based Sampling"] },
  { title: "PCI DSS Compliance", terms: ["Cardholder Data Environment (CDE)", "Network Segmentation", "Tokenization", "Point-to-Point Encryption", "Compensating Controls"] },
  { title: "Rate Limiting", terms: ["Token Bucket", "Sliding Window Log", "Leaky Bucket", "Client Backoff", "Global Rate Limiting"] },
  { title: "SLO/SLA/SLI", terms: ["SLI Selection", "SLO Target Setting", "SLA Penalty Structure", "Error Budget Derivation", "Measurement Methodology"] },
  { title: "SOC 2 Compliance", terms: ["Trust Service Criteria", "Type I vs Type II", "Control Environment", "Continuous Monitoring", "Evidence Collection"] },
  { title: "Strangler Fig Pattern", terms: ["Asset Capture", "Contract Testing", "Incremental Extraction", "Domain Events", "Seams"] },
  { title: "Team Topologies & Conway's Law", terms: ["Stream-Aligned Teams", "Platform Teams", "Enabling Teams", "Inverse Conway", "Cognitive Load"] },
  { title: "Technical Debt", terms: ["Fowler's Debt Quadrant", "Velocity Tax", "Toil Calculation", "KTLO Ratio", "Pain Index", "20% Tax Rule"] },
  { title: "Technical Strategy & RFC", terms: ["RFC Process", "ADR", "DACI Model", "Tech Radar", "Architectural Fitness Functions"] },
  { title: "The Golden Signals", terms: ["Latency", "Traffic", "Errors", "Saturation", "Signal Correlation"] },
  { title: "Vector Databases", terms: ["Approximate Nearest Neighbor (ANN)", "HNSW", "Inverted File Index (IVF)", "Product Quantization", "Recall vs Latency"] },
  { title: "Zero Trust Architecture", terms: ["Never Trust, Always Verify", "Micro-Segmentation", "Identity-Based Access", "Continuous Verification", "Least Privilege"] },
];

export default function LexiconPage() {
  const nav = getSystemDesignNavigation("lexicon");
  const [activeTab, setActiveTab] = useState<"global" | "per-page">("global");

  // Handle term click from per-page index - switch to global and scroll to term
  const handleTermClick = (term: string) => {
    setActiveTab("global");
    // Delay to allow tab switch and DOM render
    setTimeout(() => {
      // Normalize term for ID matching
      const cleanTerm = term
        .replace(/\s*\*$/, "")
        .replace(/\s*\([^)]*\)$/, "") // Remove trailing parenthetical like "(CUJs)"
        .trim();
      const termId = `term-${cleanTerm.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/-$/, "")}`;
      const element = document.getElementById(termId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Highlight effect
        element.classList.add("bg-primary/20", "rounded-lg");
        setTimeout(() => element.classList.remove("bg-primary/20", "rounded-lg"), 2500);
      } else {
        // Fallback: try partial match - find element whose ID starts with the first word
        const firstWord = cleanTerm.split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g, "");
        const allTerms = document.querySelectorAll("[id^='term-']");
        for (const el of allTerms) {
          if (el.id.includes(firstWord)) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            el.classList.add("bg-primary/20", "rounded-lg");
            setTimeout(() => el.classList.remove("bg-primary/20", "rounded-lg"), 2500);
            break;
          }
        }
      }
    }, 200);
  };

  return (
    <SystemDesignLayout
      title="SD TPM Lexicon"
      description="Principal TPM vocabulary for system design interviews"
      currentSection="lexicon"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-10 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-amber-500/10 rounded-xl border border-cyan-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-amber-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          6
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          SD TPM Lexicon
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-3">
          Principal TPM vocabulary for system design interviews at Mag7 companies.
          Each term passes the test: <em>&quot;Would this impress a VP of Engineering or distinguish a Principal from a Senior?&quot;</em>
        </p>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 mb-8 border-b border-border">
        <button
          onClick={() => setActiveTab("global")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "global"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Global Lexicon
        </button>
        <button
          onClick={() => setActiveTab("per-page")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "per-page"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Per-Page Index
        </button>
      </div>

      {/* Fixed Category MiniMap on right sidebar */}
      <MiniMap categories={lexiconCategories} />

      {/* Content */}
      {activeTab === "global" ? (
        <div>
          <div className="space-y-0">
            {lexiconCategories.map((category) => (
              <CategorySection
                key={category.title}
                title={category.title}
                color={category.color}
                terms={category.terms}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-sm text-muted-foreground mb-6">
            Key terms extracted from each Knowledge Base document. Click a card to expand.
          </p>
          <PerPageIndex pages={perPageIndex} onTermClick={handleTermClick} />
        </div>
      )}

      {/* Footer Note */}
      <div className="text-center py-6 text-sm text-muted-foreground border-t border-border/50 mt-8">
        <span className="font-medium">Principal Technical Program Manager</span>
        <span className="mx-2">&bull;</span>
        <span>System Design Interview Vocabulary</span>
        <span className="mx-2">&bull;</span>
        <span className="text-cyan-500 font-mono">Mag7 Companies</span>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-4 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">&larr; {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">{nav.next.title} &rarr;</span>
          </Link>
        )}
      </div>

      <BackToTopButton />
    </SystemDesignLayout>
  );
}
