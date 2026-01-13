"use client";

/**
 * Deep Dive: Multi-Cloud & Vendor Strategy
 * Section 11 of 12
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

export default function VendorStrategyPage() {
  return (
    <SystemDesignLayout
      title="Multi-Cloud Strategy"
      description="Negotiation leverage and strategic optionality"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={11}
        title="Multi-Cloud & Vendor Strategy"
        subtitle="Negotiation leverage and strategic optionality"
        color="violet"
      />

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

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/dr-economics"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: DR Economics
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/k8s-economics"
          className="text-sm text-primary hover:underline"
        >
          Next: Kubernetes Economics &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
