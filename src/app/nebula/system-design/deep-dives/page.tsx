"use client";

/**
 * System Design - Deep Dives
 * Detailed explorations of critical System Design topics for Principal TPM
 * Cloud Economics, Network Costs, SLA Mathematics, Compute Strategy
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";

// Subsection component
function Subsection({
  title,
  children,
  color = "blue",
}: {
  title: string;
  children: React.ReactNode;
  color?: "blue" | "green" | "amber" | "purple" | "indigo" | "pink" | "cyan" | "red" | "teal" | "orange";
}) {
  const colorClasses: Record<string, string> = {
    blue: "from-blue-500/5 border-blue-500/30 text-blue-500",
    green: "from-green-500/5 border-green-500/30 text-green-500",
    amber: "from-amber-500/5 border-amber-500/30 text-amber-500",
    purple: "from-purple-500/5 border-purple-500/30 text-purple-500",
    indigo: "from-indigo-500/5 border-indigo-500/30 text-indigo-500",
    pink: "from-pink-500/5 border-pink-500/30 text-pink-500",
    cyan: "from-cyan-500/5 border-cyan-500/30 text-cyan-500",
    red: "from-red-500/5 border-red-500/30 text-red-500",
    teal: "from-teal-500/5 border-teal-500/30 text-teal-500",
    orange: "from-orange-500/5 border-orange-500/30 text-orange-500",
  };

  const classes = colorClasses[color];
  const [gradientClass, borderClass, textClass] = classes.split(" ");

  return (
    <div className={`mb-6 p-5 bg-gradient-to-r ${gradientClass} to-transparent rounded-xl border ${borderClass}`}>
      <h3 className={`text-lg font-semibold text-foreground mb-3 ${textClass}`}>{title}</h3>
      {children}
    </div>
  );
}

// Deep dive insight box
function Insight({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 p-4 bg-muted/30 rounded-lg border border-border">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-amber-500">&#9733;</span>
        <span className="text-base font-semibold text-foreground">{title}</span>
      </div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

// Warning/pitfall box
function Pitfall({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 p-4 bg-red-500/5 rounded-lg border border-red-500/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-500">&#9888;</span>
        <span className="text-sm font-semibold text-red-500">Common Pitfall</span>
      </div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

// Interview tip box
function InterviewTip({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 p-4 bg-green-500/5 rounded-lg border border-green-500/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-500">&#128161;</span>
        <span className="text-sm font-semibold text-green-500">Interview Tip</span>
      </div>
      <div className="text-sm text-muted-foreground">{children}</div>
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

// Table component
function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm text-muted-foreground">
        <thead>
          <tr className="border-b border-border">
            {headers.map((header, i) => (
              <th key={i} className="text-left py-2 text-foreground font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50">
              {row.map((cell, j) => (
                <td key={j} className="py-2 pr-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SystemDesignDeepDives() {
  return (
    <SystemDesignLayout
      title="System Design - Deep Dives"
      description="Detailed exploration of critical System Design topics"
      currentSection="deep-dives"
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
          4
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Deep Dives</h1>
        <p className="text-muted-foreground">
          Principal-level explorations: Cloud Economics, SLA Mathematics, DR Strategy, Vendor Negotiation, and Kubernetes at Scale
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mb-10 p-5 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-base font-semibold text-foreground mb-3">Contents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <a href="#cloud-economics" className="text-primary hover:underline">1. Cloud Economics (FinOps)</a>
          <a href="#compute-strategy" className="text-primary hover:underline">2. Compute Strategy</a>
          <a href="#network-costs" className="text-primary hover:underline">3. Network Costs</a>
          <a href="#data-transfer" className="text-primary hover:underline">4. Data Transfer Optimization</a>
          <a href="#storage-lifecycle" className="text-primary hover:underline">5. Storage Lifecycle</a>
          <a href="#sla-mathematics" className="text-primary hover:underline">6. SLA Mathematics</a>
          <a href="#capex-opex" className="text-primary hover:underline">7. CAPEX vs OPEX</a>
          <a href="#tagging-chargeback" className="text-primary hover:underline">8. Tagging & Chargeback</a>
          <a href="#capacity-planning" className="text-primary hover:underline">9. Capacity Planning</a>
          <a href="#dr-economics" className="text-primary hover:underline">10. DR Economics</a>
          <a href="#vendor-strategy" className="text-primary hover:underline">11. Multi-Cloud Strategy</a>
          <a href="#k8s-economics" className="text-primary hover:underline">12. Kubernetes Economics</a>
        </div>
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Section 6 (SLA Mathematics) includes:</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 bg-pink-500/10 text-pink-500 rounded">SLI/SLO/SLA Triad</span>
            <span className="px-2 py-1 bg-pink-500/10 text-pink-500 rounded">Composite SLA Math</span>
            <span className="px-2 py-1 bg-pink-500/10 text-pink-500 rounded">Error Budgets</span>
            <span className="px-2 py-1 bg-pink-500/10 text-pink-500 rounded">SLO Pyramid</span>
            <span className="px-2 py-1 bg-pink-500/10 text-pink-500 rounded">Burn Rate Alerting</span>
            <span className="px-2 py-1 bg-pink-500/10 text-pink-500 rounded">MTTR vs MTBF</span>
          </div>
        </div>
      </div>

      {/* Section 1: Cloud Economics */}
      <div id="cloud-economics" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
            1
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Cloud Economics (FinOps)</h2>
            <p className="text-sm text-muted-foreground">The Efficiency Frontier - Cost as a non-functional requirement</p>
          </div>
        </div>

        <Subsection title="Cost Model Fundamentals" color="blue">
          <p className="text-sm text-muted-foreground mb-4">
            Cloud costs are not linear. Understanding the cost curves is essential for capacity planning.
            At a Principal TPM level, you must treat Cost as a non-functional requirement equal to Latency or Availability.
          </p>

          <h4 className="text-sm font-semibold text-foreground mb-2">Compute Tiers</h4>
          <DataTable
            headers={["Tier", "Discount", "Commitment", "Best For"]}
            rows={[
              ["On-Demand", "0% (Baseline)", "None", "Spikes, experimental workloads"],
              ["Reserved/Savings Plans", "30-72%", "1-3 year commitment", "Baseline 24/7 load"],
              ["Spot/Preemptible", "Up to 90%", "None (can be terminated)", "Stateless batch, CI/CD"],
            ]}
          />

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Storage Tiers</h4>
          <DataTable
            headers={["Tier", "Cost", "Access Speed", "Use Case"]}
            rows={[
              ["Hot (S3 Standard)", "~$0.023/GB", "Immediate", "Active data, ML training"],
              ["Warm (S3-IA)", "~$0.0125/GB", "Immediate", "Infrequent access"],
              ["Cold (Glacier)", "~$0.004/GB", "Minutes-hours", "Compliance archives"],
              ["Deep Archive", "~$0.00099/GB", "12+ hours", "Long-term retention"],
            ]}
          />

          <Pitfall>
            Glacier retrieval costs are often overlooked. Deep Archive charges ~$0.02/GB for retrieval.
            If you dump 1 PB of logs into Glacier and need to grep them during an incident,
            retrieval could cost $20,000+ in a single afternoon.
          </Pitfall>
        </Subsection>

        <Insight title="The Hidden Cost of Microservices">
          Each service-to-service call that crosses availability zones incurs network cost (~$0.01/GB each way).
          A single user request that fans out to 50 microservices, each making 3 downstream calls across AZs,
          can cost 150x the single-service equivalent in network transfer. This is why service mesh architectures
          often co-locate services with high affinity, and why companies like Google use regional pods.
        </Insight>
      </div>

      {/* Section 2: Compute Strategy */}
      <div id="compute-strategy" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
            2
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Compute Strategy: Reserved vs Spot</h2>
            <p className="text-sm text-muted-foreground">Managing a risk portfolio, not just picking cheap instances</p>
          </div>
        </div>

        <Subsection title="The Base + Burst Philosophy" color="green">
          <p className="text-sm text-muted-foreground mb-4">
            Think of instances as financial instruments with different risk/reward profiles.
            Visualize workloads in two layers:
          </p>
          <ul className="space-y-1">
            <BulletItem title="Baseline (Floor)">
              The minimum compute needed at 3:00 AM on your lowest traffic day. This is predictable.
              Cover with Reserved Instances or Savings Plans for maximum discount.
            </BulletItem>
            <BulletItem title="Burst (Ceiling)">
              Unpredictable spikes, daily peaks, seasonal surges.
              Cover with Spot (if stateless) or On-Demand (if stateful).
            </BulletItem>
          </ul>

          <Insight title="The Commitment Rule">
            Commit to covering your base load only (traffic at 3 AM Tuesday).
            Never commit to the peak. If you commit to $1M/month but engineering refactors
            code to be 2x efficient, you are still paying that $1M&mdash;you are &quot;underwater&quot; on your reservation.
          </Insight>
        </Subsection>

        <Subsection title="Spot Instance Strategy" color="green">
          <p className="text-sm text-muted-foreground mb-4">
            Spot instances offer up to 90% savings but can be reclaimed with 2-minute notice.
          </p>
          <ul className="space-y-1">
            <BulletItem title="Best For">
              Stateless web tiers, batch processing, CI/CD runners, ML training, containerized microservices
            </BulletItem>
            <BulletItem title="Operational Requirement">
              Your app must handle SIGTERM signals&mdash;stop accepting new connections and drain existing
              ones within 120 seconds. Application startup time must be fast (&lt;60s).
            </BulletItem>
            <BulletItem title="Diversification">
              Do not request just m5.large. Mix m5.large, m5.xlarge, and c5.large.
              If one pool runs dry, others may still be available.
            </BulletItem>
          </ul>

          <Pitfall>
            Never use Spot for database leaders or stateful singleton nodes.
            If the 2-minute warning comes at the wrong time, you lose data.
          </Pitfall>
        </Subsection>

        <Subsection title="Savings Plans (AWS-Specific)" color="green">
          <p className="text-sm text-muted-foreground mb-4">
            Commit to $/hour spend rather than specific instance types.
          </p>
          <ul className="space-y-1">
            <BulletItem title="Compute Savings Plans">
              Commit to spend $X/hour on any compute (any region, any family, even Lambda/Fargate).
              Highest flexibility, ~20-40% discount.
            </BulletItem>
            <BulletItem title="EC2 Instance Savings Plans">
              Commit to specific family (e.g., m5) in a region.
              Lower flexibility, ~50-70% discount.
            </BulletItem>
          </ul>

          <InterviewTip>
            Use Savings Plans instead of RIs for web/app logic. Engineering teams change instance types
            constantly (moving from Intel to Graviton/ARM). A standard RI locks you into old hardware.
            Savings Plans allow migration while keeping the discount.
          </InterviewTip>
        </Subsection>

        <DataTable
          headers={["Strategy", "Best For", "Operational Risk", "Financial Risk"]}
          rows={[
            ["On-Demand", "Spikes, experimental", "Low", "High (most expensive)"],
            ["Reserved (RI)", "Databases, stateful", "Low", "Medium (lock-in)"],
            ["Savings Plan", "Microservices, changing fleets", "Low", "Medium (commitment)"],
            ["Spot", "CI/CD, batch, stateless web", "High (handle termination)", "Low (cheapest)"],
          ]}
        />
      </div>

      {/* Section 3: Network Costs */}
      <div id="network-costs" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
            3
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Network Costs: The Silent Killer</h2>
            <p className="text-sm text-muted-foreground">Bandwidth is the most expensive resource in the cloud</p>
          </div>
        </div>

        <Subsection title="The Hierarchy of Cost" color="amber">
          <p className="text-sm text-muted-foreground mb-4">
            The fundamental rule: <strong className="text-foreground">Distance = Dollars</strong>.
            The further data travels, the more it costs.
          </p>

          <DataTable
            headers={["Connection Type", "Cost", "Strategy"]}
            rows={[
              [<span key="ing" className="text-green-500 font-medium">Ingress (Inbound)</span>, "Usually Free", "Cloud wants your data inside"],
              [<span key="intra" className="text-green-500 font-medium">Intra-AZ (Same Zone)</span>, "Usually Free", "Maximize for high-volume traffic"],
              [<span key="inter" className="text-amber-500 font-medium">Inter-AZ (Zone A ↔ Zone B)</span>, "~$0.01/GB", "Necessary for HA, avoid chatty calls"],
              [<span key="region" className="text-orange-500 font-medium">Inter-Region (US ↔ EU)</span>, "~$0.02/GB", "Only for DR or Geo-Latency needs"],
              [<span key="egress" className="text-red-500 font-medium">Egress (Out to Internet)</span>, "~$0.09/GB", "Cache aggressively via CDN"],
            ]}
          />
        </Subsection>

        <Subsection title="The Microservices Tax" color="amber">
          <p className="text-sm text-muted-foreground mb-4">
            One cent per GB seems trivial. But in a &quot;chatty&quot; architecture, it compounds.
          </p>

          <Insight title="Scenario: The Hidden Tax">
            <p className="mb-2">
              Service A (Zone A) talks to Service B (Zone B) for high availability.
              One user login triggers 50 internal RPC calls.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Statistically, 66% of calls cross AZ boundary (assuming 3 AZs)</li>
              <li>You are paying $0.01/GB for traffic that was free when it was in-memory</li>
              <li>At scale, this can be millions of dollars annually</li>
            </ul>
          </Insight>

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Fixes</h4>
          <ul className="space-y-1">
            <BulletItem title="Zone Affinity">
              Configure Service Mesh (Istio/Envoy) to prefer routing to downstream instances in the same AZ.
              Only cross AZ if local instance is dead.
            </BulletItem>
            <BulletItem title="Data Locality">
              Keep chatty microservices in the same AZ if latency/cost outweighs the HA benefit.
            </BulletItem>
          </ul>
        </Subsection>

        <Pitfall>
          Multi-region active-active sounds great for availability, but doubles (or more) your data sync costs.
          Every write replicates across regions. A poorly designed multi-region architecture can 3x your cloud bill.
          Always calculate the cost of consistency before proposing active-active.
        </Pitfall>
      </div>

      {/* Section 4: Data Transfer Optimization */}
      <div id="data-transfer" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
            4
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Data Transfer Optimization</h2>
            <p className="text-sm text-muted-foreground">Reducing egress and protecting gross margin</p>
          </div>
        </div>

        <Subsection title="CDN: The Egress Shield" color="purple">
          <p className="text-sm text-muted-foreground mb-4">
            Most people think CDNs are for speed. At Principal level, you know they are for wallet protection.
          </p>
          <ul className="space-y-1">
            <BulletItem title="Origin Egress">
              Serving 1MB image directly from S3/EC2 costs ~$0.09/GB (high egress rate)
            </BulletItem>
            <BulletItem title="CDN Egress">
              Via CloudFront/Fastly, you pay lower negotiated rate. Data moves within cloud network (often free).
            </BulletItem>
            <BulletItem title="Offload Ratio">
              Critical metric. If CDN has 95% cache hit ratio, only 5% hits expensive origin.
            </BulletItem>
          </ul>

          <Insight title="Tiered Caching">
            Don&apos;t just use one Edge location. Use a Regional Edge Cache (mid-tier).
            If Edge misses, it checks Regional Cache before hitting Origin.
            This protects your database from Thundering Herd.
          </Insight>
        </Subsection>

        <Subsection title="Compression & Serialization" color="purple">
          <p className="text-sm text-muted-foreground mb-4">
            The fastest data transfer is the one you don&apos;t send.
          </p>
          <ul className="space-y-1">
            <BulletItem title="Text (JS/CSS/HTML)">
              Gzip is standard. Brotli is 20-30% smaller but uses more CPU.
              Pre-compress static assets in build pipeline&mdash;don&apos;t compress on every request.
            </BulletItem>
            <BulletItem title="Images">
              Never serve raw JPEG/PNG. Use WebP or AVIF.
              Consider Just-in-Time optimization (Cloudinary, Lambda@Edge).
            </BulletItem>
            <BulletItem title="Internal Traffic">
              JSON is bloated (repeating field names).
              For high-volume internal services, mandate gRPC (Protobuf)&mdash;reduces traffic 40-60%.
            </BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Data Locality" color="purple">
          <p className="text-sm text-muted-foreground mb-4">
            Moving compute is cheap (binary is small). Moving data is expensive (database is huge).
          </p>
          <ul className="space-y-1">
            <BulletItem title="Push Down Queries">
              Don&apos;t download 10TB of logs to EC2 to filter. Use BigQuery/Athena to query in place.
              Pay for &quot;Data Scanned&quot; (internal), not data transfer.
            </BulletItem>
            <BulletItem title="S3 Select">
              Instead of downloading entire files, use S3 Select to filter at source.
            </BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Private Connectivity" color="purple">
          <p className="text-sm text-muted-foreground mb-4">
            The NAT Gateway Tax is the most common hidden cost in AWS.
          </p>
          <ul className="space-y-1">
            <BulletItem title="The Trap">
              Private subnets use NAT Gateway for internet access.
              AWS charges ~$0.045/GB processing fee for every byte through NAT, plus transfer cost.
            </BulletItem>
            <BulletItem title="The Fix">
              Use VPC Peering or PrivateLink. Traffic stays on provider backbone.
              Lower latency, higher security, significantly lower cost (~$0.01/GB).
            </BulletItem>
          </ul>
        </Subsection>
      </div>

      {/* Section 5: Storage Lifecycle */}
      <div id="storage-lifecycle" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-lg font-bold">
            5
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Storage Lifecycle & Data Death Rate</h2>
            <p className="text-sm text-muted-foreground">Define the Death Date on Day 1</p>
          </div>
        </div>

        <Subsection title="The Principal Rule" color="indigo">
          <p className="text-sm text-muted-foreground mb-4">
            <strong className="text-foreground">Data Death Date:</strong> A mandatory expiration timestamp
            attached to an object the moment it is created. This forces an active decision to keep data
            (by tagging it with an exception) rather than passive hoarding.
          </p>

          <h4 className="text-sm font-semibold text-foreground mb-2">Standard Lifecycle Policy</h4>
          <DataTable
            headers={["Stage", "Duration", "Storage Class", "Purpose"]}
            rows={[
              ["Active", "Days 0-30", "S3 Standard", "Immediate processing, ML training"],
              ["Cooling", "Days 31-90", "S3-IA", "Monthly reporting, audit queries"],
              ["Frozen", "Days 91-365", "Glacier", "Compliance archives, rarely accessed"],
              ["Death", "Day 366+", "DELETE", "Stop the billing meter"],
            ]}
          />

          <Pitfall>
            <strong>The &quot;Laziness Tax&quot;:</strong> Keeping 1TB of log data in S3 Standard &quot;just in case&quot; costs ~$23/month.
            In Glacier Deep Archive: ~$1/month. That $22/month difference is the tax you pay for not
            defining a lifecycle policy. Over petabytes, this becomes millions of dollars.
          </Pitfall>
        </Subsection>

        <Subsection title="S3 Intelligent-Tiering" color="indigo">
          <p className="text-sm text-muted-foreground mb-4">
            Autopilot for cost savings when access patterns are unpredictable.
          </p>
          <ul className="space-y-1">
            <BulletItem title="How It Works">
              Monitors access and automatically moves objects between tiers.
              Frequent &rarr; Infrequent (30 days no access) &rarr; Archive (90 days).
            </BulletItem>
            <BulletItem title="Key Benefit">
              No retrieval fees when moving back to hot tier. Access old file instantly.
            </BulletItem>
            <BulletItem title="The Gotcha">
              Charges monitoring fee ($0.0025 per 1,000 objects).
              For millions of tiny files, manual lifecycle may be cheaper.
            </BulletItem>
          </ul>
        </Subsection>
      </div>

      {/* Section 6: SLA Mathematics */}
      <div id="sla-mathematics" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-pink-500 text-white flex items-center justify-center text-lg font-bold">
            6
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">SLA Mathematics & Reliability Physics</h2>
            <p className="text-sm text-muted-foreground">The Constitution of your service</p>
          </div>
        </div>

        <Subsection title="The Triad: SLI / SLO / SLA" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            These acronyms define the boundary between &quot;Engineering Freedom&quot; (shipping features)
            and &quot;Engineering Jail&quot; (fixing reliability). Think of them as your service&apos;s Constitution.
          </p>

          <DataTable
            headers={["Term", "Definition", "Analogy", "Who Cares?"]}
            rows={[
              [<strong key="sli">SLI</strong>, "The measurement (yardstick)", "Speedometer reading", "Monitoring Team"],
              [<strong key="slo">SLO</strong>, "The internal target", "Speed limit on highway", "Product & Engineering"],
              [<strong key="sla">SLA</strong>, "The external contract", "Speeding ticket threshold", "Legal & Sales"],
            ]}
          />

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Precision Nuances</h4>
          <ul className="space-y-1">
            <BulletItem title="SLI (Service Level Indicator)">
              A carefully defined quantitative measure of some aspect of the level of service that is provided.
              Must be specific: &quot;Latency&quot; is vague. &quot;P99 latency of /api/checkout endpoint measured at load balancer&quot; is an SLI.
            </BulletItem>
            <BulletItem title="SLO (Service Level Objective)">
              A target value or range of values for a service level measured by an SLI.
              Example: &quot;P99 latency of /api/checkout &lt; 200ms, measured over 30-day rolling window.&quot;
            </BulletItem>
            <BulletItem title="SLA (Service Level Agreement)">
              A business contract with consequences for missing the SLO. The SLA is always less aggressive than SLO.
              If SLO is 99.9%, SLA might be 99.5%&mdash;creating an &quot;Operational Safety Margin.&quot;
            </BulletItem>
          </ul>

          <Insight title="The SLA Buffer Strategy">
            Never set SLA equal to SLO. The gap is your protection. If internal target (SLO) is 99.9%,
            external contract (SLA) should be 99.5%. This 0.4% gap allows a bad week internally without
            triggering refund clauses externally.
          </Insight>
        </Subsection>

        <Subsection title="The Power of Nines" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            Memorize this table. You will need to perform these calculations on a whiteboard.
          </p>

          <DataTable
            headers={["Availability", "The Nines", "Downtime/Year", "Downtime/Month"]}
            rows={[
              ["99%", "Two Nines", "3 days, 15 hours", "~7 hours"],
              ["99.9%", "Three Nines", "8 hours, 46 min", "~43 minutes"],
              ["99.99%", "Four Nines", "52 minutes", "~4 minutes"],
              ["99.999%", "Five Nines", "5 minutes", "~26 seconds"],
            ]}
          />

          <p className="text-sm text-muted-foreground mt-4">
            <strong className="text-foreground">The Math:</strong> 525,600 minutes/year &times; (1 - availability).
            For 99.99%: 525,600 &times; 0.0001 = 52.56 minutes.
          </p>

          <Insight title="The Implication">
            If we target 99.99% (Four Nines), we have ~4 minutes of allowed downtime per month.
            We cannot rely on manual intervention. If a database fails at 3 AM, it takes an on-call engineer
            15 minutes just to wake up and log in. Therefore, Four Nines requires fully automated failover.
          </Insight>
        </Subsection>

        <Subsection title="Composite SLA Mathematics" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            Dependencies compound availability losses. This math is critical for architecture decisions.
          </p>

          <h4 className="text-sm font-semibold text-foreground mb-2">Serial Dependencies (AND)</h4>
          <p className="text-sm text-muted-foreground mb-3">
            When components are in series, <strong className="text-foreground">multiply availabilities</strong>.
            Formula: <code className="bg-muted px-1 rounded">A_total = A1 &times; A2 &times; ... &times; An</code>
          </p>
          <ul className="space-y-1 mb-4">
            <BulletItem title="Example">
              Service A (99.9%) &rarr; Service B (99.9%) &rarr; Service C (99.9%)
              <br />
              Total = 0.999 &times; 0.999 &times; 0.999 = 0.997 = <strong className="text-foreground">99.7%</strong>
            </BulletItem>
            <BulletItem title="The Microservices Trap">
              Request touching 10 services at 99.9% each: 0.999^10 = 0.99 = 99% (87 hours downtime/year)
            </BulletItem>
          </ul>

          <h4 className="text-sm font-semibold text-foreground mb-2">Parallel Dependencies (OR)</h4>
          <p className="text-sm text-muted-foreground mb-3">
            When components provide redundancy, calculate <strong className="text-foreground">1 - (all fail probability)</strong>.
            Formula: <code className="bg-muted px-1 rounded">A_total = 1 - (1-A1) &times; (1-A2)</code>
          </p>
          <ul className="space-y-1 mb-4">
            <BulletItem title="Example">
              Two 99% databases in active-active: 1 - (0.01 &times; 0.01) = 1 - 0.0001 = <strong className="text-foreground">99.99%</strong>
            </BulletItem>
            <BulletItem title="Triple Redundancy">
              Three 99% systems: 1 - (0.01)^3 = 1 - 0.000001 = <strong className="text-foreground">99.9999%</strong>
            </BulletItem>
          </ul>

          <Pitfall>
            <strong>The Cloud SLA Pitfall:</strong> Do NOT quote AWS/GCP SLAs as your SLAs.
            Their 99.99% compute SLA is for their infrastructure. Your application adds failure modes
            (bugs, misconfigs, dependencies). Your app SLA is always &lt; cloud SLA.
          </Pitfall>

          <InterviewTip>
            &quot;If our critical path touches 5 microservices each at 99.9%, our composite availability
            is 99.5%. To hit 99.99%, we need either fewer dependencies or parallel redundancy
            at each layer. This is why I push for service consolidation on critical paths.&quot;
          </InterviewTip>
        </Subsection>

        <Subsection title="Does Maintenance Count as Downtime?" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            The classic friction between Engineering and Product.
          </p>

          <DataTable
            headers={["Context", "Counts?", "Why?"]}
            rows={[
              ["SLA (Contract)", "Usually NO", "Legal shield: excludes scheduled maintenance with 24h notice"],
              ["SLO (Internal)", "YES", "Users don't care about your schedule. True customer experience."],
              ["Mag7 Reality", "YES", "Maintenance windows are effectively banned. Global users = 24/7 availability."],
            ]}
          />

          <InterviewTip>
            &quot;In our architecture, we treat all unavailability&mdash;including planned maintenance and
            deployment errors&mdash;as downtime in our internal SLO. The user&apos;s perception is the only
            reality that matters. However, for external SLA contracts, we exclude scheduled maintenance
            to limit financial liability.&quot;
          </InterviewTip>
        </Subsection>

        <Subsection title="Error Budget: The Innovation Token" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            Turns reliability from a &quot;Sysadmin problem&quot; into a &quot;Product Currency.&quot;
            This is one of the most powerful concepts from Google&apos;s SRE playbook.
          </p>

          <h4 className="text-sm font-semibold text-foreground mb-2">The Concept</h4>
          <p className="text-sm text-muted-foreground mb-3">
            If SLO is 99.9%, allowed failure is 0.1%. That 0.1% is not &quot;failure&quot;&mdash;it is <strong className="text-foreground">budget</strong>.
            Over a 30-day window with 1M requests, 0.1% = 1,000 allowed failures.
          </p>

          <h4 className="text-sm font-semibold text-foreground mb-2">What Consumes Budget</h4>
          <ul className="space-y-1 mb-4">
            <BulletItem title="Planned Risk">
              Risky deployments, A/B tests, infrastructure migrations, database upgrades
            </BulletItem>
            <BulletItem title="Unplanned Incidents">
              Outages, bugs in production, dependency failures
            </BulletItem>
          </ul>

          <h4 className="text-sm font-semibold text-foreground mb-2">Governance Rules</h4>
          <DataTable
            headers={["Budget State", "Action", "Rationale"]}
            rows={[
              [<span key="surplus" className="text-green-500 font-medium">Surplus (&gt;50% remaining)</span>, "Push harder. Ship risky features.", "We have room to experiment."],
              [<span key="warning" className="text-amber-500 font-medium">Warning (25-50%)</span>, "Ship carefully. Extra testing.", "Preserve buffer for incidents."],
              [<span key="deficit" className="text-red-500 font-medium">Deficit (&lt;25%)</span>, "Feature Freeze. Stability only.", "All hands on reliability work."],
            ]}
          />

          <Insight title="Why This Works">
            Error Budget transforms the Dev vs. Ops conflict into a shared optimization problem.
            Product teams want features (which consume budget). SRE wants stability (which preserves budget).
            When budget is healthy, both win. When depleted, both focus on recovery.
          </Insight>
        </Subsection>

        <Subsection title="SLO Pyramid: What to Measure" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            Not all SLOs are created equal. Think in terms of a pyramid of metrics.
          </p>

          <DataTable
            headers={["Tier", "Category", "Examples", "Priority"]}
            rows={[
              [
                <span key="gold" className="text-amber-500 font-bold">Gold</span>,
                "User Experience",
                "Checkout success rate, Page load time",
                "Highest - affects revenue",
              ],
              [
                <span key="silver" className="text-gray-400 font-bold">Silver</span>,
                "System Health",
                "API latency P99, Error rate, Queue depth",
                "Medium - leading indicators",
              ],
              [
                <span key="bronze" className="text-orange-700 font-bold">Bronze</span>,
                "Diagnostic",
                "CPU utilization, Memory pressure, Thread count",
                "Lowest - for debugging",
              ],
            ]}
          />

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">The Hierarchy Rule</h4>
          <ul className="space-y-1">
            <BulletItem title="Gold SLOs Gate Releases">
              If checkout success rate drops, stop all deployments. Non-negotiable.
            </BulletItem>
            <BulletItem title="Silver SLOs Trigger Alerts">
              API latency breach wakes on-call. Investigate before Gold degrades.
            </BulletItem>
            <BulletItem title="Bronze for Root Cause">
              High CPU doesn&apos;t page you. But when Gold/Silver alert, Bronze helps diagnose.
            </BulletItem>
          </ul>

          <InterviewTip>
            &quot;We organize SLOs in a pyramid. Gold metrics like checkout success directly affect
            revenue and gate releases. Silver metrics like API latency are leading indicators
            that trigger investigation. Bronze metrics aid debugging but don&apos;t drive alerts.&quot;
          </InterviewTip>
        </Subsection>

        <Subsection title="Burn Rate Alerting" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            Traditional threshold alerts (&quot;if error rate &gt; 1%&quot;) cause alert fatigue.
            Burn Rate alerts on <strong className="text-foreground">rate of budget consumption</strong>.
          </p>

          <h4 className="text-sm font-semibold text-foreground mb-2">The Math</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Burn Rate = (Current error rate) / (Allowed error rate for SLO)
          </p>

          <DataTable
            headers={["Burn Rate", "Meaning", "Time to Exhaust 30-day Budget", "Action"]}
            rows={[
              ["1x", "Consuming budget at expected pace", "30 days", "Normal operation"],
              ["2x", "Twice the expected error rate", "15 days", "Monitor closely"],
              ["10x", "Critical degradation", "3 days", "Page on-call"],
              ["14.4x", "Severe incident", "~2 days", "All hands on deck"],
            ]}
          />

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Multi-Window Alerting</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Use both short and long windows to catch different failure patterns:
          </p>
          <ul className="space-y-1">
            <BulletItem title="Fast Burn (5 min window)">
              Catches sudden spikes. 14.4x burn rate over 5 minutes = pages immediately.
            </BulletItem>
            <BulletItem title="Slow Burn (6 hour window)">
              Catches gradual degradation. 2x burn rate over 6 hours = ticket, not page.
            </BulletItem>
          </ul>

          <Insight title="Why Burn Rate Beats Thresholds">
            A 0.5% error rate might be fine for a 99% SLO but catastrophic for 99.9%.
            Burn Rate is SLO-aware. It pages based on business impact, not arbitrary numbers.
          </Insight>
        </Subsection>

        <Subsection title="MTTR vs MTBF: Where to Invest" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            Two levers for improving availability: prevent failures or recover faster.
          </p>

          <DataTable
            headers={["Metric", "Definition", "Improvement Strategy", "Investment"]}
            rows={[
              [
                <strong key="mtbf">MTBF</strong>,
                "Mean Time Between Failures",
                "Prevent failures from happening",
                "High (requires perfection)",
              ],
              [
                <strong key="mttr">MTTR</strong>,
                "Mean Time To Recovery",
                "Detect and fix faster",
                "Lower (pragmatic)",
              ],
            ]}
          />

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">The Modern Approach: Optimize MTTR</h4>
          <ul className="space-y-1">
            <BulletItem title="Failures Are Inevitable">
              In distributed systems, something is always failing. Chasing MTBF perfection is a losing game.
            </BulletItem>
            <BulletItem title="MTTR Compounds">
              If you can detect in 1 min, diagnose in 5 min, and remediate in 10 min, total MTTR = 16 min.
              Improving any component helps. This is tractable.
            </BulletItem>
            <BulletItem title="Availability Formula">
              Availability = MTBF / (MTBF + MTTR). Cutting MTTR in half often easier than doubling MTBF.
            </BulletItem>
          </ul>

          <InterviewTip>
            &quot;I focus engineering investment on MTTR over MTBF. In distributed systems,
            failures are inevitable. Our strategy is automated detection, clear runbooks,
            and one-click rollback. We measure Time to Detect, Time to Diagnose, and
            Time to Remediate separately to identify bottlenecks.&quot;
          </InterviewTip>
        </Subsection>
      </div>

      {/* Section 7: CAPEX vs OPEX */}
      <div id="capex-opex" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-teal-500 text-white flex items-center justify-center text-lg font-bold">
            7
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">CAPEX vs OPEX Mental Model</h2>
            <p className="text-sm text-muted-foreground">Aligning engineering with P&L</p>
          </div>
        </div>

        <Subsection title="The Accounting Physics" color="teal">
          <DataTable
            headers={["Model", "Mechanism", "Impact", "Engineering Behavior"]}
            rows={[
              [
                <strong key="capex">CAPEX</strong>,
                "Write $10M check on Day 1 for servers",
                "Depreciated over 5 years ($2M/year on P&L)",
                "Sunk cost mentality. Idle servers feel 'free.'",
              ],
              [
                <strong key="opex">OPEX</strong>,
                "Pay cloud monthly based on usage",
                "Hits COGS immediately. Reduces Gross Profit this month.",
                "Meter is running. Idle = Waste.",
              ],
            ]}
          />

          <Insight title="The Behavioral Shift">
            In CAPEX world, 20% utilization was &quot;safe.&quot;
            In OPEX world, 20% utilization is 80% waste.
            An engineer pushing a bad config that spins up 1,000 extra nodes is financially
            identical to someone stealing $50,000 from corporate safe.
          </Insight>
        </Subsection>

        <Subsection title="The Bridge Role" color="teal">
          <p className="text-sm text-muted-foreground mb-4">
            You sit between two opposing forces:
          </p>
          <ul className="space-y-1">
            <BulletItem title="Finance wants Predictability">
              They hate variable spend. Want to tell Wall Street exact margins next quarter.
            </BulletItem>
            <BulletItem title="Engineering wants Agility">
              Want to spin up 5,000 cores for ML training today without asking permission.
            </BulletItem>
          </ul>

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Your Toolkit</h4>
          <ul className="space-y-1">
            <BulletItem title="Artificial Floor (Commitments)">
              Use Reserved Instances/Savings Plans to create quasi-CAPEX model.
              Finance gets predictability. Engineering gets discount.
            </BulletItem>
            <BulletItem title="Unit Economics">
              Stop talking about &quot;Total Cloud Bill.&quot; Talk about Cost Per Unit
              (Cost per Order, per Active User, per Stream).
              If bill +20% but traffic +20%, Cost Per Unit is flat.
            </BulletItem>
          </ul>
        </Subsection>

        <Subsection title="The Waste Categories" color="teal">
          <DataTable
            headers={["Category", "Definition", "Examples"]}
            rows={[
              ["Value-Added", "Resources serving user traffic", "Production workloads (Good)"],
              ["Necessary Waste", "Required but not user-facing", "Non-prod, DR standby, Blue/Green idle"],
              [<span key="pure" className="text-red-500 font-medium">Pure Waste</span>, "Zero value, only cost", "Zombies, Orphans, Over-provisioned instances"],
            ]}
          />

          <InterviewTip>
            &quot;Do we have an automated Janitor script that kills Dev instances at 7 PM and weekends?
            If not, we are burning ~30% of our Dev budget for zero value.&quot;
          </InterviewTip>
        </Subsection>
      </div>

      {/* Section 8: Tagging & Chargeback */}
      <div id="tagging-chargeback" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center text-lg font-bold">
            8
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Tagging & Chargeback</h2>
            <p className="text-sm text-muted-foreground">You cannot optimize what you cannot attribute</p>
          </div>
        </div>

        <Subsection title="The Policy: No Tag, No Resource" color="orange">
          <p className="text-sm text-muted-foreground mb-4">
            Preventative governance control that moves cost accountability from optional to mandatory.
          </p>
          <ul className="space-y-1">
            <BulletItem title="The Problem">
              Without tags, a cloud bill is just a giant number. You have no idea if $5M was spent
              on critical AI or a forgotten 2023 dev server. This is the &quot;Black Hole&quot; of cloud spend.
            </BulletItem>
            <BulletItem title="Technical Enforcement">
              Don&apos;t just ask engineers to tag. Block untagged deployments.
              If Terraform/CloudFormation deploy lacks CostCenter or Team tag, deployment fails.
            </BulletItem>
            <BulletItem title="Result">
              100% of cloud bill is attributed to a specific owner.
            </BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Showback vs Chargeback" color="orange">
          <DataTable
            headers={["Model", "Mechanism", "Behavior Change"]}
            rows={[
              ["Showback", "Report shows Team A spent $50k (passive)", "Shame-based motivation"],
              ["Chargeback", "Team A's budget debited $50k (active)", "Direct financial accountability"],
            ]}
          />

          <p className="text-sm text-muted-foreground mt-4">
            <strong className="text-foreground">Strategy:</strong> Start with Showback to clean data.
            Move to Chargeback to enforce discipline. When spend comes from team&apos;s hiring budget,
            they suddenly care about deleting unused resources.
          </p>
        </Subsection>

        <Subsection title="The Wall of Shame" color="orange">
          <p className="text-sm text-muted-foreground mb-4">
            Daily spend reports sent to leadership showing top spenders.
          </p>
          <ul className="space-y-1">
            <BulletItem title="Example">
              &quot;Top 5 Spenders Yesterday: 1. Search Team ($12k), 2. Ads Team ($10k), 3. Dev-Test-Env ($9k)&quot;
            </BulletItem>
            <BulletItem title="The Effect">
              No Engineering Manager wants to be on that list for &quot;Test Environment.&quot;
              It implies waste and incompetence.
            </BulletItem>
            <BulletItem title="The Result">
              Managers aggressively Slack teams: &quot;Why is our dev burning $9k? Turn it off.&quot;
            </BulletItem>
          </ul>

          <InterviewTip>
            &quot;Cost optimization isn&apos;t just finding cheaper instances&mdash;it&apos;s culture. I implement &apos;No Tag, No Resource&apos;
            for 100% attribution. We move from centralized &apos;IT pays for everything&apos; to Chargeback where teams
            own their spend. We use transparency&mdash;daily spend reports&mdash;to drive behavioral change.&quot;
          </InterviewTip>
        </Subsection>
      </div>

      {/* Section 9: Capacity Planning */}
      <div id="capacity-planning" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold">
            9
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Capacity Planning & Forecasting</h2>
            <p className="text-sm text-muted-foreground">Predicting the future before it bankrupts you</p>
          </div>
        </div>

        <Subsection title="The Headroom Formula" color="cyan">
          <p className="text-sm text-muted-foreground mb-4">
            At Principal level, capacity planning is not &quot;add more servers when it breaks.&quot;
            It&apos;s a financial forecasting exercise with engineering constraints.
          </p>

          <h4 className="text-sm font-semibold text-foreground mb-2">The Core Equation</h4>
          <p className="text-sm text-muted-foreground mb-3">
            <code className="bg-muted px-2 py-1 rounded">Required Capacity = (Peak Load &times; Safety Margin) / Utilization Target</code>
          </p>

          <DataTable
            headers={["Variable", "Typical Value", "Why It Matters"]}
            rows={[
              ["Peak Load", "Measured P99 of traffic", "Not average - the spike that breaks you"],
              ["Safety Margin", "1.3x - 1.5x", "Absorb unexpected spikes without degradation"],
              ["Utilization Target", "60-70%", "Leave headroom for failover and bursts"],
            ]}
          />

          <Insight title="The N+2 Rule">
            For critical services, provision N+2 capacity: if you need 3 nodes to handle peak,
            deploy 5. One for planned maintenance, one for unplanned failure.
            This sounds expensive but is cheaper than an outage.
          </Insight>
        </Subsection>

        <Subsection title="Forecasting Methods" color="cyan">
          <DataTable
            headers={["Method", "Best For", "Accuracy", "Principal TPM Action"]}
            rows={[
              ["Linear Extrapolation", "Steady growth businesses", "Low (misses inflection)", "Use only for 3-6 month horizon"],
              ["Seasonal Decomposition", "E-commerce, media, gaming", "Medium", "Model Black Friday, launches, events"],
              ["Business Driver Correlation", "Mature products", "High", "Tie to MAU, orders, revenue projections"],
              ["Scenario Planning", "High uncertainty", "Variable", "Model best/base/worst cases for budget"],
            ]}
          />

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Business Driver Method (Principal Approach)</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Don&apos;t forecast servers. Forecast business metrics, then derive infrastructure.
          </p>
          <ul className="space-y-1">
            <BulletItem title="Step 1">
              Get MAU/Revenue projections from Finance (they already forecast this for Wall Street)
            </BulletItem>
            <BulletItem title="Step 2">
              Calculate your Unit Economics: &quot;1M DAU = 50 API servers + 10TB storage&quot;
            </BulletItem>
            <BulletItem title="Step 3">
              Multiply: &quot;If we grow 40% YoY, we need 40% more infra budget&quot;
            </BulletItem>
          </ul>

          <InterviewTip>
            &quot;I don&apos;t forecast infrastructure in isolation. I partner with Finance to get their
            DAU/revenue models, then apply our unit economics. If Finance says 2M DAU next year
            and we know 1M DAU costs $500K/month, I can project $1M/month with high confidence.
            This aligns engineering planning with business planning.&quot;
          </InterviewTip>
        </Subsection>

        <Subsection title="The Capacity Review Cadence" color="cyan">
          <DataTable
            headers={["Review Type", "Frequency", "Participants", "Output"]}
            rows={[
              ["Operational Review", "Weekly", "SRE, On-call", "Immediate bottlenecks, alerts"],
              ["Capacity Planning", "Monthly", "TPM, Eng Leads, Finance", "90-day provisioning plan"],
              ["Strategic Planning", "Quarterly", "VP Eng, CFO, TPM", "Annual budget, multi-year roadmap"],
            ]}
          />

          <Pitfall>
            <strong>The Surprise Budget Request:</strong> If you ask Finance for $2M in unplanned cloud spend
            in Q4, you will be rejected. Budget cycles are set 6+ months ahead. A Principal TPM
            anticipates needs and gets them into the planning cycle early.
          </Pitfall>
        </Subsection>
      </div>

      {/* Section 10: Disaster Recovery Economics */}
      <div id="dr-economics" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold">
            10
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Disaster Recovery Economics</h2>
            <p className="text-sm text-muted-foreground">The cost of &quot;what if everything breaks&quot;</p>
          </div>
        </div>

        <Subsection title="RPO/RTO Cost Trade-offs" color="red">
          <p className="text-sm text-muted-foreground mb-4">
            Every DR discussion is fundamentally a cost/risk trade-off conversation.
          </p>

          <DataTable
            headers={["DR Strategy", "RPO", "RTO", "Cost Multiplier", "When to Use"]}
            rows={[
              [<span key="backup" className="font-medium">Backup & Restore</span>, "Hours-Days", "Hours-Days", "1.1x", "Non-critical, cost-sensitive"],
              [<span key="pilot" className="font-medium">Pilot Light</span>, "Minutes", "Hours", "1.2-1.3x", "Core systems, moderate criticality"],
              [<span key="warm" className="font-medium">Warm Standby</span>, "Minutes", "Minutes", "1.5-2x", "Business-critical applications"],
              [<span key="active" className="font-medium text-green-500">Active-Active</span>, "Zero", "Zero", "2-3x", "Revenue-critical, global services"],
            ]}
          />

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">The Math: Cost of Downtime</h4>
          <p className="text-sm text-muted-foreground mb-3">
            <code className="bg-muted px-2 py-1 rounded">Downtime Cost = (Revenue/Hour) &times; RTO + (Reputation Damage)</code>
          </p>
          <ul className="space-y-1">
            <BulletItem title="Example">
              E-commerce doing $10M/day = $416K/hour revenue. If RTO is 4 hours, that&apos;s $1.6M lost.
              Paying $500K/year extra for Warm Standby (15 min RTO) is obviously worth it.
            </BulletItem>
          </ul>

          <Insight title="The Hidden Costs of Active-Active">
            Active-Active isn&apos;t just 2x compute. It&apos;s also:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Cross-region data sync (continuous replication costs)</li>
              <li>Conflict resolution complexity (engineering time)</li>
              <li>Testing overhead (must test failover regularly)</li>
              <li>Operational complexity (runbooks, training, on-call)</li>
            </ul>
            Total cost is often 2.5-3x, not 2x.
          </Insight>
        </Subsection>

        <Subsection title="The DR Testing Tax" color="red">
          <p className="text-sm text-muted-foreground mb-4">
            A DR plan that isn&apos;t tested is a DR plan that doesn&apos;t work.
          </p>

          <DataTable
            headers={["Test Type", "Frequency", "Cost", "What It Validates"]}
            rows={[
              ["Tabletop Exercise", "Quarterly", "Low (meeting time)", "Runbook accuracy, team readiness"],
              ["Component Failover", "Monthly", "Medium", "Individual system recovery"],
              ["Full DR Drill", "Annually", "High (real traffic shift)", "End-to-end recovery capability"],
              ["Chaos Engineering", "Continuous", "Medium", "Unknown failure modes"],
            ]}
          />

          <InterviewTip>
            &quot;I budget DR testing as a line item, not an afterthought. We do quarterly tabletops,
            monthly component tests, and annual full DR drills. The drill cost is real&mdash;we
            pay for duplicate traffic&mdash;but it&apos;s insurance. The alternative is discovering
            our DR plan doesn&apos;t work during an actual disaster.&quot;
          </InterviewTip>
        </Subsection>

        <Subsection title="Regional Failure Probability" color="red">
          <p className="text-sm text-muted-foreground mb-4">
            Use this to justify (or reject) multi-region investment.
          </p>

          <DataTable
            headers={["Failure Type", "Probability/Year", "Duration", "Business Impact"]}
            rows={[
              ["Single AZ failure", "~1-2 incidents", "Minutes-Hours", "Handled by multi-AZ"],
              ["Regional degradation", "~0.5-1 incidents", "Hours", "Partial service impact"],
              ["Full regional outage", "~0.1 incidents (rare)", "Hours-Day", "Complete service loss"],
            ]}
          />

          <Insight title="When Multi-Region Is NOT Worth It">
            For a service with $1M/year revenue, a once-every-10-years regional outage
            costs ~$100K (1 day revenue). Multi-region adds ~$200K/year in ongoing costs.
            The math doesn&apos;t work. Focus on multi-AZ instead.
          </Insight>

          <Pitfall>
            <strong>The Compliance Trap:</strong> Sometimes DR isn&apos;t about probability&mdash;it&apos;s about
            compliance. Financial services may require multi-region regardless of cost math
            due to regulatory requirements (FFIEC, PCI-DSS, SOC 2).
          </Pitfall>
        </Subsection>
      </div>

      {/* Section 11: Multi-Cloud & Vendor Strategy */}
      <div id="vendor-strategy" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-violet-500 text-white flex items-center justify-center text-lg font-bold">
            11
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Multi-Cloud & Vendor Strategy</h2>
            <p className="text-sm text-muted-foreground">Negotiation leverage and strategic optionality</p>
          </div>
        </div>

        <Subsection title="The EDP/Commit Negotiation" color="purple">
          <p className="text-sm text-muted-foreground mb-4">
            At Mag7 scale, you don&apos;t pay list price. You negotiate Enterprise Discount Programs (EDP).
          </p>

          <DataTable
            headers={["Commitment Level", "Typical Discount", "Lock-in Period", "Flexibility"]}
            rows={[
              ["$1-5M/year", "5-15%", "1-3 years", "Low negotiating power"],
              ["$5-20M/year", "15-25%", "1-3 years", "Moderate leverage"],
              ["$20-100M/year", "25-35%", "3 years", "Dedicated account team"],
              ["$100M+/year", "35-50%+", "3-5 years", "Custom terms, executive access"],
            ]}
          />

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Negotiation Levers</h4>
          <ul className="space-y-1">
            <BulletItem title="Growth Commitment">
              &quot;We&apos;ll grow 50% YoY for 3 years&quot; gets better rates than flat commitment
            </BulletItem>
            <BulletItem title="Multi-Cloud Threat">
              Credible workload portability gives leverage. &quot;We&apos;re evaluating GCP for this workload&quot;
            </BulletItem>
            <BulletItem title="Public Reference">
              Agreeing to be a case study/speaker at re:Invent can unlock 5-10% extra discount
            </BulletItem>
            <BulletItem title="New Services Adoption">
              Early adoption of new cloud services (AI/ML) often comes with promotional pricing
            </BulletItem>
          </ul>

          <InterviewTip>
            &quot;I approach cloud contracts like any vendor negotiation. We benchmark against
            competitors, commit to reasonable growth trajectories, and maintain credible
            multi-cloud optionality. Our last AWS renewal, I secured 30% discount by
            demonstrating we could run our stateless tier on GCP if needed.&quot;
          </InterviewTip>
        </Subsection>

        <Subsection title="Multi-Cloud: Strategy vs Reality" color="purple">
          <p className="text-sm text-muted-foreground mb-4">
            &quot;Multi-cloud for avoiding lock-in&quot; is often more expensive than the lock-in it prevents.
          </p>

          <DataTable
            headers={["Multi-Cloud Approach", "True Cost", "When It Makes Sense"]}
            rows={[
              ["Full portability (K8s everywhere)", "2-3x engineering cost", "Rarely - only if lock-in is existential"],
              ["Best-of-breed (GCP for AI, AWS for infra)", "1.3-1.5x", "When one cloud has clear technical advantage"],
              ["DR/Compliance (Primary + DR region)", "1.2-1.3x", "Regulatory requirements mandate it"],
              ["Negotiation leverage only", "1.0x + optionality", "Keep capability, don't use it actively"],
            ]}
          />

          <Insight title="The Portability Tax">
            Making code cloud-agnostic means: no Lambda, no DynamoDB, no BigQuery, no proprietary AI.
            You pay 2x engineering cost to avoid a 30% price increase. The math rarely works.
            Instead, maintain &quot;credible optionality&quot;&mdash;the ability to migrate if needed,
            without paying the tax of actually being portable.
          </Insight>

          <Pitfall>
            <strong>The Kubernetes Illusion:</strong> &quot;We run K8s so we&apos;re portable&quot; is a myth.
            Your app might be portable, but your data (RDS, S3, BigQuery), networking (VPC, IAM),
            and operations (CloudWatch, Datadog integrations) are not. True portability
            requires abstracting ALL of these, which is prohibitively expensive.
          </Pitfall>
        </Subsection>

        <Subsection title="Vendor Risk Quantification" color="purple">
          <p className="text-sm text-muted-foreground mb-4">
            Frame lock-in discussions in terms of business risk, not technical preference.
          </p>

          <DataTable
            headers={["Risk Scenario", "Probability", "Impact", "Mitigation Cost"]}
            rows={[
              ["Cloud raises prices 20%", "Medium (every 2-3 yrs)", "Budget overrun", "EDP locks in rates"],
              ["Critical service deprecated", "Low", "Engineering migration", "Use GA services only"],
              ["Regional compliance change", "Low", "Data residency issue", "Multi-region from start"],
              ["Cloud vendor exit (extreme)", "Very Low", "Business continuity", "Not worth mitigating"],
            ]}
          />

          <InterviewTip>
            &quot;I don&apos;t advocate multi-cloud for theoretical portability. I quantify lock-in risk:
            What&apos;s the probability of needing to migrate? What&apos;s the migration cost if we do?
            Usually, investing that money in product features generates more value than
            maintaining cloud optionality we&apos;ll never use.&quot;
          </InterviewTip>
        </Subsection>
      </div>

      {/* Section 12: Kubernetes Economics */}
      <div id="k8s-economics" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
            12
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Kubernetes & Container Economics</h2>
            <p className="text-sm text-muted-foreground">The hidden costs of orchestration at scale</p>
          </div>
        </div>

        <Subsection title="Resource Requests vs Limits" color="blue">
          <p className="text-sm text-muted-foreground mb-4">
            The most common source of Kubernetes cost waste is misconfigured resource settings.
          </p>

          <DataTable
            headers={["Setting", "What It Does", "Cost Implication"]}
            rows={[
              [<strong key="req">Requests</strong>, "Guaranteed resources (scheduler uses this)", "Determines how many pods fit per node"],
              [<strong key="lim">Limits</strong>, "Maximum allowed (OOM kill above this)", "Safety net, doesn't affect scheduling"],
            ]}
          />

          <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">The Overprovisioning Problem</h4>
          <p className="text-sm text-muted-foreground mb-3">
            If request = 2 CPU but actual usage = 0.3 CPU, you&apos;re paying for 6x what you use.
          </p>

          <Insight title="The Request:Usage Ratio">
            Track this metric across your fleet. Healthy ratio is 1.2-1.5x (some headroom).
            If ratio is &gt;3x, you&apos;re wasting significant money. At Mag7 scale, this can be
            millions of dollars annually in unused reserved capacity.
          </Insight>

          <ul className="space-y-1 mt-4">
            <BulletItem title="Vertical Pod Autoscaler (VPA)">
              Automatically adjusts requests based on actual usage. Essential for cost optimization.
            </BulletItem>
            <BulletItem title="Goldilocks">
              Open-source tool that recommends request/limit values based on observed usage.
            </BulletItem>
          </ul>
        </Subsection>

        <Subsection title="Cluster Efficiency Metrics" color="blue">
          <DataTable
            headers={["Metric", "Definition", "Target", "Action if Below"]}
            rows={[
              ["Node Utilization", "Actual CPU used / Node capacity", ">60%", "Smaller nodes or bin-packing"],
              ["Pod Density", "Pods per node", "Varies by workload", "Review resource requests"],
              ["Cluster Autoscaler Efficiency", "Time to scale up/down", "<5 min scale-up", "Tune autoscaler settings"],
              ["Spot Interruption Rate", "% pods killed by Spot reclaim", "<5%", "Diversify instance types"],
            ]}
          />

          <Pitfall>
            <strong>The Control Plane Cost:</strong> EKS/GKE charge ~$70-75/month per cluster
            just for the control plane. If you have 50 small clusters for &quot;isolation,&quot;
            that&apos;s $3,750/month before any workloads. Consolidate clusters where possible.
          </Pitfall>
        </Subsection>

        <Subsection title="Graviton/ARM Economics" color="blue">
          <p className="text-sm text-muted-foreground mb-4">
            ARM-based instances (AWS Graviton, GCP Tau) offer 20-40% cost savings for compatible workloads.
          </p>

          <DataTable
            headers={["Workload Type", "ARM Compatibility", "Savings Potential", "Migration Effort"]}
            rows={[
              ["Containerized apps", "High (rebuild image)", "20-40%", "Low - just rebuild"],
              ["JVM applications", "High", "30%+", "Low - JVM handles it"],
              ["Python/Node.js", "High", "25-35%", "Low - interpreted"],
              ["Native binaries", "Requires recompile", "20-30%", "Medium - build pipeline changes"],
              ["Windows workloads", "Not supported", "N/A", "N/A"],
            ]}
          />

          <InterviewTip>
            &quot;We migrated 70% of our containerized fleet to Graviton3 and saved 35% on compute.
            The migration was straightforward&mdash;multi-arch Docker builds, staged rollout,
            performance validation. For CPU-bound workloads, Graviton often performs better
            AND costs less. It&apos;s rare to get both.&quot;
          </InterviewTip>
        </Subsection>

        <Subsection title="Namespace Cost Attribution" color="blue">
          <p className="text-sm text-muted-foreground mb-4">
            In shared Kubernetes clusters, attributing costs to teams is non-trivial.
          </p>

          <ul className="space-y-1">
            <BulletItem title="Request-Based Attribution">
              Charge teams based on their resource requests (what they reserved).
              Simple but penalizes conservative teams.
            </BulletItem>
            <BulletItem title="Usage-Based Attribution">
              Charge based on actual consumption. Fair but complex to measure accurately.
            </BulletItem>
            <BulletItem title="Hybrid Approach">
              Base charge for requests + premium for usage exceeding requests.
              Incentivizes right-sizing.
            </BulletItem>
          </ul>

          <Insight title="Tools for K8s Cost Attribution">
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Kubecost:</strong> Open-source, detailed cost breakdown by namespace/label</li>
              <li><strong>OpenCost:</strong> CNCF project, vendor-neutral cost monitoring</li>
              <li><strong>Cloud-native:</strong> AWS Cost Explorer (EKS), GKE Cost Allocation</li>
            </ul>
          </Insight>
        </Subsection>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <Link
          href="/nebula/system-design/practice"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Practice Questions
        </Link>
        <Link
          href="/nebula/system-design/guide"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Principal TPM Guide &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
