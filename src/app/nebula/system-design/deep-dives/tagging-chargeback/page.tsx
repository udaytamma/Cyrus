"use client";

/**
 * Deep Dive: Tagging & Chargeback
 * Section 8 of 12
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import {
  Subsection,
  InterviewTip,
  BulletItem,
  DataTable,
  DeepDiveHeader,
} from "@/components/DeepDiveComponents";

export default function TaggingChargebackPage() {
  return (
    <SystemDesignLayout
      title="Tagging & Chargeback"
      description="You cannot optimize what you cannot attribute"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={8}
        title="Tagging & Chargeback"
        subtitle="You cannot optimize what you cannot attribute"
        color="orange"
      />

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

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/capex-opex"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: CAPEX vs OPEX
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/capacity-planning"
          className="text-sm text-primary hover:underline"
        >
          Next: Capacity Planning &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
