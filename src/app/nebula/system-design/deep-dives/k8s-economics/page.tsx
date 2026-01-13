"use client";

/**
 * Deep Dive: Kubernetes & Container Economics
 * Section 12 of 12
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

export default function K8sEconomicsPage() {
  return (
    <SystemDesignLayout
      title="Kubernetes Economics"
      description="The hidden costs of orchestration at scale"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={12}
        title="Kubernetes & Container Economics"
        subtitle="The hidden costs of orchestration at scale"
        color="blue"
      />

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

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/vendor-strategy"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Multi-Cloud Strategy
        </Link>
        <span className="text-sm text-muted-foreground/50">
          Last topic
        </span>
      </div>
    </SystemDesignLayout>
  );
}
