"use client";

/**
 * Deep Dive: Compute Strategy
 * Section 2 of 12
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import {
  Subsection,
  Insight,
  Pitfall,
  InterviewTip,
  BulletItem,
  DataTable,
  DeepDiveHeader,
} from "@/components/DeepDiveComponents";

export default function ComputeStrategyPage() {
  return (
    <SystemDesignLayout
      title="Compute Strategy"
      description="Managing a risk portfolio, not just picking cheap instances"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={2}
        title="Compute Strategy: Reserved vs Spot"
        subtitle="Managing a risk portfolio, not just picking cheap instances"
        color="green"
      />

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

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/cloud-economics"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Cloud Economics
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/network-costs"
          className="text-sm text-primary hover:underline"
        >
          Next: Network Costs &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
