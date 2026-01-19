"use client";

/**
 * Deep Dive: SLA Mathematics & Reliability Physics
 * Section 6 of 12 - The largest section
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
import { MermaidDiagram } from "@/components/MermaidDiagram";

export default function SLAMathematicsPage() {
  return (
    <SystemDesignLayout
      title="SLA Mathematics"
      description="The Constitution of your service"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={6}
        title="SLA Mathematics & Reliability Physics"
        subtitle="The Constitution of your service"
        color="pink"
      />

      <Subsection title="The Triad: SLI / SLO / SLA" color="pink">
        <p className="text-sm text-muted-foreground mb-4">
          These acronyms define the boundary between &quot;Engineering Freedom&quot; (shipping features)
          and &quot;Engineering Jail&quot; (fixing reliability). Think of them as your service&apos;s Constitution.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
  SLI[SLI<br/>Measurement] --> SLO[SLO<br/>Internal Target]
  SLO --> SLA[SLA<br/>External Contract]
  SLO -.->|Buffer Zone| SLA
  style SLI fill:#e0e7ff,stroke:#6366f1
  style SLO fill:#fef3c7,stroke:#d97706
  style SLA fill:#fee2e2,stroke:#dc2626`}
        />

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

        <MermaidDiagram
          chart={`flowchart LR
  subgraph Serial["Serial: MULTIPLY"]
    A1[99.9%] --> B1[99.9%] --> C1[99.9%]
  end
  subgraph Parallel["Parallel: 1 - ALL FAIL"]
    A2[99%]
    B2[99%]
  end
  Serial --> R1[= 99.7%]
  Parallel --> R2[= 99.99%]
  style R1 fill:#fee2e2,stroke:#dc2626
  style R2 fill:#dcfce7,stroke:#16a34a`}
        />

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

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/storage-lifecycle"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Storage Lifecycle
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/capex-opex"
          className="text-sm text-primary hover:underline"
        >
          Next: CAPEX vs OPEX &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
