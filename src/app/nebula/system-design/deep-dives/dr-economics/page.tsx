"use client";

/**
 * Deep Dive: Disaster Recovery Economics
 * Section 10 of 12
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

export default function DRconomicsPage() {
  return (
    <SystemDesignLayout
      title="DR Economics"
      description="The cost of 'what if everything breaks'"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={10}
        title="Disaster Recovery Economics"
        subtitle="The cost of 'what if everything breaks'"
        color="red"
      />

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

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/capacity-planning"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Capacity Planning
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/vendor-strategy"
          className="text-sm text-primary hover:underline"
        >
          Next: Multi-Cloud Strategy &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
