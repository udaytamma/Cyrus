"use client";

/**
 * Deep Dive: Network Costs
 * Section 3 of 12
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import {
  Subsection,
  Insight,
  Pitfall,
  BulletItem,
  DataTable,
  DeepDiveHeader,
} from "@/components/DeepDiveComponents";

export default function NetworkCostsPage() {
  return (
    <SystemDesignLayout
      title="Network Costs"
      description="Bandwidth is the most expensive resource in the cloud"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={3}
        title="Network Costs: The Silent Killer"
        subtitle="Bandwidth is the most expensive resource in the cloud"
        color="amber"
      />

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
            [<span key="inter" className="text-amber-500 font-medium">Inter-AZ (Zone A - Zone B)</span>, "~$0.01/GB", "Necessary for HA, avoid chatty calls"],
            [<span key="region" className="text-orange-500 font-medium">Inter-Region (US - EU)</span>, "~$0.02/GB", "Only for DR or Geo-Latency needs"],
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

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/compute-strategy"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Compute Strategy
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/data-transfer"
          className="text-sm text-primary hover:underline"
        >
          Next: Data Transfer Optimization &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
