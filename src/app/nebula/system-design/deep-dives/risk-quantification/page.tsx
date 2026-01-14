"use client";

/**
 * Deep Dive: Risk Quantification & Technical Debt
 * Section 16 of 16
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

export default function RiskQuantificationPage() {
  return (
    <SystemDesignLayout
      title="Risk Quantification"
      description="Translating engineering problems into business value"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={16}
        title="Risk Quantification & Technical Debt"
        subtitle="Translating engineering problems into business value"
        color="red"
      />

      <Subsection title="Expected Loss Calculation" color="red">
        <p className="text-sm text-muted-foreground mb-4">
          This is the Rosetta Stone for translating &quot;Engineering Problems&quot; into
          &quot;Business Solutions.&quot; Executives don&apos;t care about clean code—they care
          about Revenue and Risk.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">The Formula</h4>
        <div className="bg-muted/30 p-4 rounded-lg mb-4 text-center">
          <p className="text-lg font-mono text-foreground">Risk (Expected Loss) = Probability × Impact</p>
        </div>

        <h4 className="text-sm font-semibold text-foreground mb-2">Example: E-commerce Checkout Failure</h4>
        <DataTable
          headers={["Variable", "Value", "Calculation"]}
          rows={[
            ["Daily Requests", "100,000", ""],
            ["Failure Rate", "0.1%", "100,000 × 0.001 = 100 failed orders/day"],
            ["Avg Order Value", "$50", "100 × $50 = $5,000 lost/day"],
            ["Annualized Loss", "", "$5,000 × 365 = $1.825M/year"],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">The ROI Calculation</h4>
        <p className="text-sm text-muted-foreground mb-3">
          If we reduce failure rate from 0.1% to 0.01%:
        </p>
        <ul className="space-y-1 mb-4">
          <BulletItem title="New Annual Loss">
            $182,500/year
          </BulletItem>
          <BulletItem title="Savings">
            $1.825M - $182.5K = $1.64M/year
          </BulletItem>
          <BulletItem title="Cost of Fix">
            $500K (2 engineers, 6 months)
          </BulletItem>
          <BulletItem title="ROI">
            ($1.64M - $500K) / $500K = 228%
          </BulletItem>
        </ul>

        <InterviewTip>
          &quot;I am not asking for $500K to fix a bug. I am asking for $500K to buy an annuity
          that pays us $1.6M per year. The ROI is 228% in year one. Shall we proceed?&quot;
        </InterviewTip>
      </Subsection>

      <Subsection title="Security Risk: ALE Calculation" color="red">
        <p className="text-sm text-muted-foreground mb-4">
          The &quot;Final Boss&quot; of Expected Loss calculations. Estimating the cost of a
          Data Breach is hard, but if you don&apos;t quantify it, Security gets zero budget
          because &quot;we haven&apos;t been hacked yet.&quot;
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">The ALE Framework</h4>
        <DataTable
          headers={["Term", "Definition", "Example"]}
          rows={[
            [<strong key="sle">SLE</strong>, "Single Loss Expectancy (cost if it happens once)", "$10M breach"],
            [<strong key="aro">ARO</strong>, "Annual Rate of Occurrence (probability/year)", "5% (industry avg)"],
            [<strong key="ale">ALE</strong>, "Annualized Loss Expectancy (SLE × ARO)", "$500K/year liability"],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Example: Unencrypted Legacy Database</h4>
        <p className="text-sm text-muted-foreground mb-3">
          1 million user records (emails, addresses) stored without encryption.
        </p>
        <DataTable
          headers={["Step", "Calculation", "Result"]}
          rows={[
            ["Industry Cost/Record", "$150 (Ponemon Institute)", ""],
            ["Conservative Estimate", "$10/record (no credit cards)", ""],
            ["SLE", "1M records × $10", "$10M breach cost"],
            ["ARO", "5% probability (industry data)", ""],
            ["ALE", "$10M × 0.05", "$500K/year liability"],
            ["Cost to Fix", "Database encryption project", "$200K one-time"],
            ["ROI", "($500K - $200K) / $200K", "150% first year"],
          ]}
        />

        <Insight title="The Security Pitch">
          &quot;We are sitting on a $10M risk exposure. Even with only a 5% chance of breach,
          that averages to $500K annual liability. Spending $200K now eliminates this entirely.
          Plus, under GDPR, the fine alone could be 4% of global revenue.&quot;
        </Insight>
      </Subsection>

      <Subsection title="Blast Radius Analysis" color="red">
        <p className="text-sm text-muted-foreground mb-4">
          <strong className="text-foreground">Blast Radius</strong> measures how many users are
          affected when a component fails. Your goal is never &quot;zero failures&quot;—it&apos;s
          &quot;small failures.&quot;
        </p>

        <DataTable
          headers={["Component Level", "Example Failure", "Blast Radius", "Verdict"]}
          rows={[
            [
              <span key="global" className="text-red-500 font-medium">Global</span>,
              "DNS Provider (Route53) fails",
              "100%",
              "Catastrophic (total outage)",
            ],
            [
              <span key="region" className="text-amber-500 font-medium">Regional</span>,
              "US-East-1 goes down",
              "33%",
              "Major (assuming 3 regions)",
            ],
            [
              <span key="service" className="text-blue-500 font-medium">Service</span>,
              "Recommendations Microservice crashes",
              "0% functional",
              "Minor (users can still buy)",
            ],
            [
              <span key="cell" className="text-green-500 font-medium">Cell/Shard</span>,
              "Shard #45 (users A-F) corrupted",
              "1%",
              "Negligible (99% unaffected)",
            ],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Containment Strategies</h4>
        <DataTable
          headers={["Strategy", "Mechanism", "Blast Radius Reduction"]}
          rows={[
            [
              <strong key="bulkhead">Bulkhead Pattern</strong>,
              "Physically separate resources (don't share DBs)",
              "Prevents bad query in Service A from killing Service B",
            ],
            [
              <strong key="circuit">Circuit Breakers</strong>,
              "Auto-cut traffic to failing service",
              "Prevents cascading failures",
            ],
            [
              <strong key="graceful">Graceful Degradation</strong>,
              "Hide failing feature, don't crash",
              "Netflix shows \"Popular\" if personalization fails",
            ],
            [
              <strong key="cell">Cell Architecture</strong>,
              "Isolated stack per 10K users",
              "Bad deploy affects 1 cell, not 100",
            ],
          ]}
        />

        <InterviewTip>
          &quot;When reviewing architecture, I map Single Points of Failure and their blast radius.
          A global database failure is 100% radius—unacceptable for critical paths. I push for
          cell-based architecture where a failure affects 1% of users, not 100%.&quot;
        </InterviewTip>
      </Subsection>

      <Subsection title="Technical Debt Quantification" color="red">
        <p className="text-sm text-muted-foreground mb-4">
          Tech debt is not &quot;messy code&quot;—it is <strong className="text-foreground">future cost</strong>.
          A 20% velocity tax on a 50-engineer team is 10 FTE-years wasted annually.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">The Principal vs. Interest Model</h4>
        <DataTable
          headers={["Term", "Definition", "Example"]}
          rows={[
            [
              <strong key="principal">Principal</strong>,
              "Cost to fix the problem now",
              "2 engineers × 1 month = $50K",
            ],
            [
              <strong key="interest">Interest</strong>,
              "Extra cost on every feature because you didn't fix it",
              "Every feature takes 3 extra days to test = $75K/year",
            ],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">The Decision Rule</h4>
        <p className="text-sm text-muted-foreground mb-3">
          If <strong className="text-foreground">Interest &gt; Principal</strong>, pay it down now.
          You are losing money by waiting.
        </p>
        <ul className="space-y-1 mb-4">
          <BulletItem title="Exception">
            If Interest = $0 (you never modify that code), let the debt sit. It&apos;s an interest-free loan.
          </BulletItem>
        </ul>

        <h4 className="text-sm font-semibold text-foreground mb-2">The Debt Quadrant</h4>
        <DataTable
          headers={["Type", "Statement", "Verdict"]}
          rows={[
            [
              <span key="dp" className="text-green-500 font-medium">Deliberate & Prudent</span>,
              "\"We must launch for Black Friday. Hardcode now, refactor in January.\"",
              "Acceptable (has repayment plan)",
            ],
            [
              <span key="dr" className="text-red-500 font-medium">Deliberate & Reckless</span>,
              "\"No time for unit tests, just ship it.\"",
              "Unacceptable (negligence)",
            ],
            [
              <span key="ir" className="text-red-500 font-medium">Inadvertent & Reckless</span>,
              "\"What is Layering?\"",
              "Training issue (team lacks skills)",
            ],
            [
              <span key="ip" className="text-amber-500 font-medium">Inadvertent & Prudent</span>,
              "\"Now with 1M users, a Graph DB would have been better.\"",
              "Inevitable (hindsight)",
            ],
          ]}
        />

        <Pitfall>
          <strong>The &quot;Phantom Sprint&quot; Measurement:</strong> Ask your Tech Lead: &quot;If the
          code was clean, how many points would this be?&quot; The difference is the Interest
          Payment. If 30-40% of sprint capacity goes to &quot;Unplanned Work&quot; or &quot;Bugs,&quot;
          that&apos;s your Velocity Tax.
        </Pitfall>
      </Subsection>

      <Subsection title="Monolith to Microservices ROI" color="red">
        <p className="text-sm text-muted-foreground mb-4">
          The most expensive &quot;refactoring&quot; a company can undertake. If you get the math
          wrong, you spend 2 years building a &quot;Distributed Monolith&quot; that is slower than
          what you started with.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">Step 1: Calculate the Principal</h4>
        <DataTable
          headers={["Cost Factor", "Calculation", "Amount"]}
          rows={[
            ["Migration Team", "5 seniors × 18 months", "90 engineer-months"],
            ["Opportunity Cost", "Not building features (1.5x multiplier)", "~135 engineer-months"],
            ["Total Principal", "", "$2M"],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Step 2: Calculate the Interest (Current Pain)</h4>
        <DataTable
          headers={["Pain Point", "Impact", "Annual Cost"]}
          rows={[
            ["Build Time", "60 min builds × 50 engineers × 2/day", "$10K/day waste"],
            ["Merge Hell", "10% of sprint time resolving conflicts", "$1M/year (10% of $10M payroll)"],
            ["Fear Factor", "Release once/week instead of daily", "$500K/year in lost agility"],
            ["Total Interest", "", "$3.5M/year"],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Step 3: The Hidden Variable (Microservice Tax)</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Junior TPMs forget: Microservices are not free. You trade Development Complexity for
          Operational Complexity.
        </p>
        <ul className="space-y-1 mb-4">
          <BulletItem title="Platform Team">
            +3 engineers/year for K8s, Istio, Distributed Tracing
          </BulletItem>
          <BulletItem title="Network Latency">
            RPC calls slower than in-memory function calls
          </BulletItem>
          <BulletItem title="Debugging">
            &quot;Where did the request fail?&quot; takes longer to answer
          </BulletItem>
          <BulletItem title="Adjusted Savings">
            $3.5M - $1M ops cost = $2.5M/year net
          </BulletItem>
        </ul>

        <h4 className="text-sm font-semibold text-foreground mb-2">Step 4: Break-Even Analysis</h4>
        <DataTable
          headers={["Year", "Cost/Benefit", "Net Position"]}
          rows={[
            ["Year 1", "Principal: $2M, Savings: $0 (migration in progress)", "-$2M"],
            ["Year 2", "Savings: $2.5M", "+$0.5M (break-even)"],
            ["Year 3+", "Savings: $2.5M/year", "Profitable"],
          ]}
        />

        <Insight title="The Complexity Crossing">
          At low team size (&lt;20 engineers), the Monolith is faster and cheaper. At high scale
          (&gt;50 engineers), the Monolith curve goes vertical (painful). Migration only makes sense
          if you are past the &quot;Crossing Point.&quot; If you&apos;re still small, just clean up the
          Monolith code—don&apos;t migrate.
        </Insight>

        <InterviewTip>
          &quot;Microservices migration is a $2M investment with a 2-year break-even. I only
          recommend it if we plan to grow past 50 engineers, where the Merge Hell and Build Time
          taxes compound. For a 20-person team, the payback period is infinite—we should just
          refactor the Monolith instead.&quot;
        </InterviewTip>
      </Subsection>

      <Subsection title="The Principal TPM Executive Pitch" color="red">
        <p className="text-sm text-muted-foreground mb-4">
          Summary of how to translate engineering asks into business language.
        </p>

        <DataTable
          headers={["Junior TPM Says", "Principal TPM Says"]}
          rows={[
            [
              "\"This checkout bug is really bad, we need to refactor.\"",
              "\"We are leaking $1.8M/year in failed transactions. A $500K investment yields 228% ROI.\"",
            ],
            [
              "\"We should improve uptime.\"",
              "\"Each hour of downtime costs $416K in lost revenue. This $200K investment in Warm Standby pays for itself in 30 minutes of prevented outage.\"",
            ],
            [
              "\"We need to address security risks.\"",
              "\"We have a $10M risk exposure with 5% annual probability. The $200K encryption project yields 150% ROI and immunity from GDPR fines up to 4% of revenue.\"",
            ],
            [
              "\"We need to pause features to refactor.\"",
              "\"We are paying a 30% velocity tax. Every $1M in salary yields only $700K of value. A one-sprint investment increases feature velocity by 30% for the rest of the year.\"",
            ],
          ]}
        />
      </Subsection>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/payment-reliability"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Payment Systems Reliability
        </Link>
        <Link
          href="/nebula/system-design/deep-dives"
          className="text-sm text-primary hover:underline"
        >
          Back to Deep Dives Index &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
