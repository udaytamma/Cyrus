"use client";

/**
 * Deep Dive: CAPEX vs OPEX Mental Model
 * Section 7 of 12
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import {
  Subsection,
  Insight,
  InterviewTip,
  BulletItem,
  DataTable,
  DeepDiveHeader,
} from "@/components/DeepDiveComponents";

export default function CapexOpexPage() {
  return (
    <SystemDesignLayout
      title="CAPEX vs OPEX"
      description="Aligning engineering with P&L"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={7}
        title="CAPEX vs OPEX Mental Model"
        subtitle="Aligning engineering with P&L"
        color="teal"
      />

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

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/sla-mathematics"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: SLA Mathematics
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/tagging-chargeback"
          className="text-sm text-primary hover:underline"
        >
          Next: Tagging & Chargeback &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
