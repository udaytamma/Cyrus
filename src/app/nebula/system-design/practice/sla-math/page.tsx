"use client";

/**
 * System Design - Practice Questions Part III: SLA Mathematics
 * Q31-40: SLI/SLO/SLA, composite availability, error budgets, MTBF/MTTR
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import { Question, SectionHeader, PartHeader, InstructionsBox } from "@/components/PracticeQuestionComponents";

export default function SLAMathQuestions() {
  return (
    <SystemDesignLayout
      title="System Design - SLA Mathematics (Q31-40)"
      description="SLI/SLO/SLA and reliability math for Principal TPM interviews"
      currentSection="practice"
    >
      <Link
        href="/nebula/system-design/practice"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Practice Questions
      </Link>

      <PartHeader
        partNumber="III"
        title="SLA Mathematics & Reliability"
        description="SLI/SLO/SLA, composite availability, error budgets, MTBF/MTTR, and the cost of nines"
        questionRange="Q31-40"
        color="purple"
      />

      <InstructionsBox />

      {/* Section: SLA Mathematics */}
      <SectionHeader
        title="SLA Mathematics"
        description="Composite availability, error budgets, and reliability calculations"
        color="purple"
      />

      <Question
        number={31}
        category="SLA Mathematics"
        question="We have a request that touches 5 microservices in sequence, each with 99.9% availability. What is the composite availability?"
        answer={
          <>
            <p className="mb-3">
              <strong>Serial Dependencies Multiply, They Don&apos;t Add.</strong> When services are in sequence
              (each must succeed for the request to succeed), we multiply their availabilities.
            </p>
            <p className="mb-3"><strong>The Math:</strong></p>
            <p className="mb-3 font-mono bg-muted/30 p-3 rounded">
              Composite = 0.999 &times; 0.999 &times; 0.999 &times; 0.999 &times; 0.999 = 0.999<sup>5</sup> = 0.995 = 99.5%
            </p>
            <p className="mb-3"><strong>The Impact:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>99.9% per service</strong> = ~8.76 hours downtime/year each</li>
              <li><strong>99.5% composite</strong> = ~43.8 hours downtime/year for the full request path</li>
              <li>We went from &quot;three nines&quot; to barely &quot;two nines&quot; by chaining 5 services</li>
            </ul>
            <p>
              <strong>The Principal Insight:</strong> Every microservice you add to a critical path is a
              multiplicative tax on availability. This is why I push for async patterns (queues, events)
              to break serial dependencies and reduce the multiplication chain.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Architecture Implication:</strong> If a product owner asks for 99.99% SLA on a 5-service
              synchronous chain, the math says each service needs ~99.998% individual availability. That&apos;s
              nearly impossible. The answer isn&apos;t &quot;try harder&quot;&mdash;it&apos;s &quot;redesign the architecture&quot;
              to reduce serial dependencies.
            </p>
            <p>
              <strong>The Negotiation Point:</strong> Use this math to push back on unrealistic SLA commitments.
              Show stakeholders: &quot;Given our architecture, 99.9% is achievable. 99.99% requires a fundamental redesign.&quot;
            </p>
          </>
        }
      />

      <Question
        number={32}
        category="SLA Mathematics"
        question="We have 3 replicas of a service, each with 99% availability. If we can succeed with at least 1 replica up, what is the composite availability?"
        answer={
          <>
            <p className="mb-3">
              <strong>Parallel/Redundant Dependencies Use the &quot;Inverse Failure&quot; Formula.</strong> When
              any one of N replicas can serve the request, we calculate the probability that ALL replicas
              fail simultaneously, then subtract from 1.
            </p>
            <p className="mb-3"><strong>The Math:</strong></p>
            <p className="mb-3 font-mono bg-muted/30 p-3 rounded">
              P(all fail) = (1 - 0.99)<sup>3</sup> = 0.01<sup>3</sup> = 0.000001 = 0.0001%<br />
              P(at least one up) = 1 - 0.000001 = 0.999999 = 99.9999%
            </p>
            <p className="mb-3"><strong>The Impact:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Single replica at 99%</strong> = ~3.65 days downtime/year</li>
              <li><strong>3 replicas at 99% each</strong> = ~32 seconds downtime/year (99.9999%)</li>
              <li>We went from &quot;two nines&quot; to &quot;six nines&quot; with just 3 replicas</li>
            </ul>
            <p>
              <strong>The Principal Insight:</strong> Redundancy is the cheapest way to buy availability.
              Adding replicas has diminishing returns, but the first 2-3 replicas provide massive availability gains.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Caveat:</strong> This math assumes <em>independent failures</em>. In reality,
              correlated failures (same AZ, same deployment, same bad config push) can take out all replicas
              simultaneously. True independence requires: multi-AZ deployment, staggered deployments,
              and config validation gates.
            </p>
            <p>
              <strong>The Cost Trade-off:</strong> Going from 1 to 3 replicas gives you ~4 nines improvement
              at 3x cost. Going from 3 to 9 replicas gives you ~2 more nines at 9x cost. Know when to stop.
            </p>
          </>
        }
      />

      <Question
        number={33}
        category="SLA Mathematics"
        question="Why is 'average latency' a terrible SLI?"
        answer={
          <>
            <p className="mb-3">
              <strong>Averages Hide the Pain.</strong> If 99 requests take 10ms and 1 request takes 10,000ms,
              the average is 109ms&mdash;which looks fine. But that 1 user waited 10 seconds, and they&apos;re
              probably your most important customer (complex query = big account).
            </p>
            <p className="mb-3"><strong>The Problem:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Averages are symmetric</strong>&mdash;they treat 1000 fast requests and 1 slow request
              as equivalent to 1001 medium requests. Users don&apos;t experience averages.</li>
              <li><strong>Tail latency hurts revenue</strong>&mdash;Amazon found every 100ms of latency costs 1% in sales.
              The tail is where you lose customers.</li>
              <li><strong>Averages can&apos;t be SLO&apos;d</strong>&mdash;you can&apos;t alert on &quot;average exceeded&quot;
              because it&apos;s too noisy and too slow.</li>
            </ul>
            <p className="mb-3"><strong>The Better SLIs:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>p50 (median)</strong>&mdash;typical user experience</li>
              <li><strong>p95</strong>&mdash;catches most bad experiences</li>
              <li><strong>p99</strong>&mdash;catches almost all bad experiences</li>
              <li><strong>p99.9</strong>&mdash;for critical paths where even rare slowness matters</li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Principal Math:</strong> For latency SLOs, I recommend: p50 &lt; 50ms (fast for most),
              p95 &lt; 200ms (acceptable for edge cases), p99 &lt; 500ms (tolerable for worst case).
              Alert on p99 breaches, not average.
            </p>
            <p>
              <strong>The Hidden Insight:</strong> High p99 with good p50 often indicates GC pauses, cold starts,
              or connection pool exhaustion&mdash;specific, fixable problems. Average latency tells you nothing
              about the cause.
            </p>
          </>
        }
      />

      <Question
        number={34}
        category="SLA Mathematics"
        question="We have a published 99.9% external SLA. Should our internal SLO be the same, lower, or higher?"
        answer={
          <>
            <p className="mb-3">
              <strong>Internal SLO Must Be Higher Than External SLA.</strong> The SLA is a contractual promise
              with financial penalties. The SLO is our operational target. We need buffer room.
            </p>
            <p className="mb-3"><strong>The Hierarchy:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>External SLA: 99.9%</strong>&mdash;what we promise customers (43.8 min/month downtime)</li>
              <li><strong>Internal SLO: 99.95%</strong>&mdash;what we target operationally (21.9 min/month)</li>
              <li><strong>Error Budget Alert: 50% consumed</strong>&mdash;when we slow down deployments</li>
            </ul>
            <p className="mb-3"><strong>Why the Buffer Matters:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Measurement lag</strong>&mdash;we might not know we&apos;re breaching until it&apos;s too late</li>
              <li><strong>Dependency variance</strong>&mdash;our dependencies have their own error budgets</li>
              <li><strong>Incident response time</strong>&mdash;detection + triage + fix + deploy takes time</li>
            </ul>
            <p className="mt-3">
              <strong>The Principal Rule:</strong> Internal SLO should be 2-5x tighter than external SLA
              to provide operational margin.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Cascading Buffer:</strong> If we have downstream dependencies, they need even tighter SLOs.
              If our service has 99.95% SLO and depends on a database, the database team needs a 99.98% SLO to give us
              room for our own failures.
            </p>
            <p>
              <strong>The Business Alignment:</strong> SLAs should be negotiated with finance and legal, not just
              engineering. The cost of SLA breach (credits, penalties, churn) must inform how much buffer we need.
            </p>
          </>
        }
      />

      <Question
        number={35}
        category="SLA Mathematics"
        question="With a 99.9% monthly SLO, how much Error Budget do we have in minutes?"
        answer={
          <>
            <p className="mb-3">
              <strong>Error Budget = Allowed Downtime.</strong> It&apos;s the flip side of the SLO&mdash;the amount
              of unreliability we&apos;re permitted before breaching our target.
            </p>
            <p className="mb-3"><strong>The Math:</strong></p>
            <p className="mb-3 font-mono bg-muted/30 p-3 rounded">
              Monthly minutes = 30 days &times; 24 hours &times; 60 min = 43,200 minutes<br />
              Error Budget = (1 - 0.999) &times; 43,200 = 0.001 &times; 43,200 = <strong>43.2 minutes/month</strong>
            </p>
            <p className="mb-3"><strong>Common SLO Error Budgets:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>99% SLO</strong> = 432 minutes/month (~7.2 hours)</li>
              <li><strong>99.9% SLO</strong> = 43.2 minutes/month (~43 minutes)</li>
              <li><strong>99.95% SLO</strong> = 21.6 minutes/month (~22 minutes)</li>
              <li><strong>99.99% SLO</strong> = 4.32 minutes/month (~4 minutes)</li>
            </ul>
            <p className="mt-3">
              <strong>The Principal Insight:</strong> Error budget is a currency. Spend it wisely on innovation
              (risky deployments, new features). Save it during critical periods (holiday traffic, contract renewals).
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Rolling Window Question:</strong> Is your SLO calendar-month or rolling 30-day?
              Calendar-month resets on the 1st (fresh budget), but rolling window means yesterday&apos;s outage
              still counts against you for 30 days. Most mature orgs use rolling windows for fairness.
            </p>
            <p>
              <strong>The Partial Credit:</strong> Error budget isn&apos;t just binary up/down. If the service is
              returning 50% errors, you&apos;re burning budget at 50% rate. Factor in degraded states, not just outages.
            </p>
          </>
        }
      />

      <Question
        number={36}
        category="SLA Mathematics"
        question="We've burned 90% of our monthly error budget in the first week. What operational changes should we make?"
        answer={
          <>
            <p className="mb-3">
              <strong>10% Remaining = Defensive Mode.</strong> With 90% budget burned and 75% of the month remaining,
              we must prioritize stability over velocity.
            </p>
            <p className="mb-3"><strong>Immediate Actions:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Deployment Freeze</strong>&mdash;no new features deployed until budget recovers. Only
              critical security patches and reliability fixes.</li>
              <li><strong>Change Review Board</strong>&mdash;any change requires explicit approval from SRE lead
              with rollback plan documented.</li>
              <li><strong>Monitoring Tightened</strong>&mdash;lower alert thresholds, increase on-call staffing,
              enable verbose logging for faster diagnosis.</li>
              <li><strong>Customer Communication</strong>&mdash;proactively notify key accounts of stability focus,
              set expectations for feature delays.</li>
            </ul>
            <p className="mb-3"><strong>Root Cause Analysis:</strong></p>
            <p>
              Why did we burn 90% in one week? Was it a single incident (fixable) or chronic instability
              (architectural)? The answer determines whether we need a hotfix or a redesign.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Executive Communication:</strong> At 90% burn, this is an escalation to leadership.
              Frame it as: &quot;We have 4.3 minutes of allowed downtime remaining this month. Any additional outage
              will breach our SLA. We recommend a deployment freeze and root cause investigation.&quot;
            </p>
            <p>
              <strong>The Trade-off Conversation:</strong> Product will push back on the freeze. Have data ready:
              &quot;Last month&apos;s SLA breach cost us $X in credits and Y% in customer NPS. The deployment freeze
              costs us Z days of feature delay. Which is worse?&quot;
            </p>
          </>
        }
      />

      <Question
        number={37}
        category="SLA Mathematics"
        question="Explain the difference between MTBF and MTTR."
        answer={
          <>
            <p className="mb-3">
              <strong>MTBF (Mean Time Between Failures)</strong> measures how often things break.
              <strong> MTTR (Mean Time To Recover)</strong> measures how quickly we fix them.
            </p>
            <p className="mb-3"><strong>The Definitions:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>MTBF</strong> = Total uptime / Number of failures. Example: 720 hours uptime with
              3 failures = 240 hours MTBF (~10 days between failures).</li>
              <li><strong>MTTR</strong> = Total downtime / Number of failures. Example: 6 hours total downtime
              across 3 failures = 2 hours MTTR.</li>
            </ul>
            <p className="mb-3"><strong>The Availability Formula:</strong></p>
            <p className="mb-3 font-mono bg-muted/30 p-3 rounded">
              Availability = MTBF / (MTBF + MTTR)
            </p>
            <p>
              <strong>Example:</strong> MTBF = 240 hours, MTTR = 2 hours<br />
              Availability = 240 / (240 + 2) = 240 / 242 = 99.17%
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Principal Insight:</strong> Most teams focus on MTBF (prevent failures). But improving
              MTTR is often 10x easier and equally effective. Going from 2-hour MTTR to 20-minute MTTR is a
              runbook + automation investment. Going from 10-day MTBF to 100-day MTBF requires fundamental
              architecture changes.
            </p>
            <p>
              <strong>The Investment Priority:</strong> For every $1 spent on failure prevention, spend $1 on
              recovery automation. Canary deployments, automated rollback, circuit breakers&mdash;these reduce
              MTTR dramatically for relatively low cost.
            </p>
          </>
        }
      />

      <Question
        number={38}
        category="SLA Mathematics"
        question="What's the difference between a 'Brownout' and a 'Blackout' in the context of error-budget burn?"
        answer={
          <>
            <p className="mb-3">
              <strong>Blackout</strong> = Total outage (100% errors). <strong>Brownout</strong> = Partial degradation
              (some % of requests failing or slow).
            </p>
            <p className="mb-3"><strong>Error Budget Impact:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Blackout (100% failure)</strong> burns error budget at 1:1 rate. 1 minute of blackout
              = 1 minute of budget consumed.</li>
              <li><strong>Brownout (e.g., 30% failure)</strong> burns budget proportionally. 10 minutes at 30%
              error rate = 3 minutes of budget consumed.</li>
            </ul>
            <p className="mb-3"><strong>The Hidden Danger:</strong></p>
            <p className="mb-3">
              Brownouts are insidious because they can persist unnoticed. A 5% error rate for 8 hours burns
              24 minutes of budget&mdash;more than half of a 99.9% monthly budget&mdash;without triggering
              typical &quot;site down&quot; alerts.
            </p>
            <p>
              <strong>The Principal Action:</strong> Set brownout-specific alerts. Alert at 1% error rate
              (warning), 5% error rate (page), not just 100% (blackout). Brownouts are budget vampires.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The User Experience Angle:</strong> Brownouts often feel worse to users than short blackouts.
              A 10-minute blackout with a clear error page is frustrating but understandable. A 2-hour brownout
              where &quot;sometimes it works, sometimes it doesn&apos;t&quot; erodes trust and creates support tickets.
            </p>
            <p>
              <strong>The Measurement Challenge:</strong> How do you count brownouts? Is a request that takes 30s
              instead of 300ms a &quot;success&quot;? Define latency-based SLIs alongside error-based SLIs to catch
              slow brownouts.
            </p>
          </>
        }
      />

      <Question
        number={39}
        category="SLA Mathematics"
        question="How should we exclude planned maintenance from SLO calculations?"
        answer={
          <>
            <p className="mb-3">
              <strong>Maintenance Windows Must Be Pre-Agreed, Documented, and Bounded.</strong> You can&apos;t
              retroactively declare an outage as &quot;planned maintenance.&quot;
            </p>
            <p className="mb-3"><strong>The Rules for Exclusion:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Pre-announced</strong>&mdash;customers notified at least 72 hours in advance (for major),
              24 hours (for minor).</li>
              <li><strong>Time-bounded</strong>&mdash;stated duration, e.g., &quot;2-hour window starting at 2am UTC.&quot;
              If you exceed the window, the overage counts against SLO.</li>
              <li><strong>Frequency-capped</strong>&mdash;e.g., &quot;max 4 hours of maintenance per month.&quot; Unlimited
              maintenance windows defeat the purpose of an SLO.</li>
              <li><strong>Documented in SLA</strong>&mdash;the exclusion policy must be in the contract, not invented
              after the fact.</li>
            </ul>
            <p>
              <strong>The Calculation:</strong> If we have 43,200 minutes/month and 4 hours (240 min) of maintenance,
              the SLO applies to the remaining 42,960 minutes. Error budget is 0.1% of 42,960 = 42.96 minutes.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Trust Factor:</strong> Excessive maintenance exclusions erode customer trust. If you
              exclude 8 hours/month, your &quot;99.9% SLA&quot; is really 99.9% of 98.9% of the time, which feels
              like false advertising. Best practice: include maintenance in your SLO target, design for
              zero-downtime deployments.
            </p>
            <p>
              <strong>The Compliance Angle:</strong> For regulated industries, &quot;planned maintenance&quot; might
              not be excludable. Healthcare systems, financial trading platforms&mdash;check your regulatory
              requirements before promising maintenance windows.
            </p>
          </>
        }
      />

      <Question
        number={40}
        category="SLA Mathematics"
        question="Why is moving from '3 nines' to '4 nines' often described as a '10x Cost' decision?"
        answer={
          <>
            <p className="mb-3">
              <strong>Each Additional Nine Requires Exponentially More Investment.</strong> The math is
              counterintuitive: 99.9% to 99.99% is &quot;only&quot; 0.09% improvement, but it&apos;s a 10x reduction
              in allowed downtime.
            </p>
            <p className="mb-3"><strong>The Numbers:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>99.9% (3 nines)</strong> = 43.2 minutes/month downtime allowed</li>
              <li><strong>99.99% (4 nines)</strong> = 4.32 minutes/month downtime allowed</li>
              <li><strong>Reduction</strong> = 10x less downtime budget</li>
            </ul>
            <p className="mb-3"><strong>Why It Costs ~10x More:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Infrastructure:</strong> Multi-region active-active, not just multi-AZ</li>
              <li><strong>Testing:</strong> Chaos engineering, game days, DR drills become mandatory</li>
              <li><strong>Staffing:</strong> 24/7 on-call with &lt;5 minute response SLA (more people)</li>
              <li><strong>Deployment:</strong> Canary + blue-green + automated rollback (tooling investment)</li>
              <li><strong>Dependencies:</strong> Every dependency must also be 4+ nines (vendor costs)</li>
            </ul>
            <p>
              <strong>The Principal Question:</strong> Does the business need 4 nines? Most B2B SaaS is fine
              at 99.9%. Payment processing, healthcare, trading platforms might need 99.99%. Match investment to need.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Human Cost:</strong> 4 nines means your MTTR must be &lt;4 minutes. That requires:
              always-on engineers (burnout risk), automated everything (no manual steps), and near-zero
              coordination time (no Slack threads during incidents). The organizational strain is significant.
            </p>
            <p>
              <strong>The Business Case Framework:</strong> Calculate: (revenue/minute &times; 38.88 saved minutes)
              vs. (annual cost of 4-nine infrastructure). If your service makes &lt;$1M/year, 4 nines probably
              costs more than the downtime. If it makes &gt;$100M/year, 4 nines is cheap insurance.
            </p>
          </>
        }
      />

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <Link
          href="/nebula/system-design/practice/cloud-economics"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Part II: Cloud Economics
        </Link>
        <Link
          href="/nebula/system-design/practice/compliance-governance"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Part IV: Compliance & Governance &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
