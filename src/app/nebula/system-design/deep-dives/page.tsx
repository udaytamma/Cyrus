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
          Detailed explorations of Cloud Economics, Network Costs, and SLA Mathematics
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mb-10 p-5 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-base font-semibold text-foreground mb-3">Contents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <a href="#cloud-economics" className="text-primary hover:underline">1. Cloud Economics (FinOps)</a>
          <a href="#compute-strategy" className="text-primary hover:underline">2. Compute Strategy: Reserved vs Spot</a>
          <a href="#network-costs" className="text-primary hover:underline">3. Network Costs: The Silent Killer</a>
          <a href="#data-transfer" className="text-primary hover:underline">4. Data Transfer Optimization</a>
          <a href="#storage-lifecycle" className="text-primary hover:underline">5. Storage Lifecycle & Data Death Rate</a>
          <a href="#sla-mathematics" className="text-primary hover:underline">6. SLA Mathematics & Reliability Physics</a>
          <a href="#capex-opex" className="text-primary hover:underline">7. CAPEX vs OPEX Mental Model</a>
          <a href="#tagging-chargeback" className="text-primary hover:underline">8. Tagging & Chargeback</a>
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

        <Subsection title="SLI / SLO / SLA Precision" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            These acronyms define the boundary between &quot;Engineering Freedom&quot; (shipping features)
            and &quot;Engineering Jail&quot; (fixing reliability).
          </p>

          <DataTable
            headers={["Term", "Definition", "Who Cares?", "Consequence of Failure"]}
            rows={[
              [<strong key="sli">SLI</strong>, "The Yardstick (measurement)", "Monitoring Team", "Bad data, flying blind"],
              [<strong key="slo">SLO</strong>, "The Target (internal goal)", "Product & Eng", "Pager goes off, feature freeze"],
              [<strong key="sla">SLA</strong>, "The Contract (external promise)", "Legal & Sales", "Money. You pay refunds."],
            ]}
          />

          <Insight title="The SLA Buffer Strategy">
            Never set SLA equal to SLO. If internal target (SLO) is 99.9%, external contract (SLA) should be 99.5%.
            The gap (0.4%) is your &quot;Operational Safety Margin&quot;&mdash;allows a bad day internally without
            writing refund checks externally.
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

        <Subsection title="Composite SLAs" color="pink">
          <p className="text-sm text-muted-foreground mb-4">
            Dependencies compound availability losses.
          </p>
          <ul className="space-y-1">
            <BulletItem title="Serial Dependencies">
              Multiply availabilities. If A (99.9%) calls B (99.9%), system = 99.8%.
              A request touching 10 services at 99.9% each yields 99% (87 hours downtime/year).
            </BulletItem>
            <BulletItem title="Parallel (Redundant)">
              Calculate 1 - (failure probability). Two 99% systems in parallel = 99.99%.
            </BulletItem>
          </ul>

          <Pitfall>
            Do NOT quote AWS/GCP SLAs as your SLAs. Their 99.99% compute SLA is for their infrastructure.
            Your application running on it will have additional failure modes (bugs, misconfig, dependencies).
          </Pitfall>
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
          </p>
          <ul className="space-y-1">
            <BulletItem title="Concept">
              If SLO is 99.9%, allowed failure is 0.1%. That 0.1% is not &quot;failure&quot;&mdash;it is &quot;budget.&quot;
            </BulletItem>
            <BulletItem title="Spending Budget">
              Risky deployments, A/B tests, infrastructure migrations consume error budget.
            </BulletItem>
            <BulletItem title="Governance">
              <strong>Budget Surplus:</strong> &quot;Push harder. Ship that risky feature.&quot;
              <br />
              <strong>Budget Deficit:</strong> &quot;Feature Freeze. All engineering to stability tasks.&quot;
            </BulletItem>
          </ul>
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
