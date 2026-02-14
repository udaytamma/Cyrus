"use client";

/**
 * Tandem Incident Management - STAR Story
 *
 * STAR-format interview story for the Tier-0 billing recovery incident
 * on a 5M subscriber HP NonStop (Tandem) platform.
 *
 * Source of truth: Billing Recovery page (#17)
 * This page: STAR delivery + hardened Q&As for time-constrained interviews
 *
 * Canonical numbers:
 * - 5M total subscribers, 4 billing cycles (~1.25M each)
 * - ~100K accounts impacted (8% of cycle cohort)
 * - $1-2M bounded delay (Option B) vs $11-12M modeled exposure (Option A)
 * - ~3.5 days total incident-to-invoice
 * - 15-year failure mode, sequential recovery pivot
 * - Reconciliation: mediation → rating → ledger → cycle aggregation
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function TandemIncidentManagementPage() {
  return (
    <InterviewPrepLayout
      title="Tandem Incident Management"
      description="STAR story: Tier-0 financial integrity incident on 5M subscriber Tandem billing platform"
      currentSection="tandem-incident-management"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Interview Prep
      </Link>

      {/* Cross-reference */}
      <div className="mb-6 p-3 bg-muted/30 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Deep narrative version:</strong>{" "}
          <Link href="/nebula/interview-prep/billing-recovery" className="text-primary hover:underline">
            View unified Billing Recovery narrative with pressure tests &rarr;
          </Link>
        </p>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            STAR Format
          </span>
          <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
            Tier-0 Incident
          </span>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
            Financial Integrity
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Tandem Incident Management</h1>
        <p className="text-muted-foreground leading-relaxed">
          STAR story for a <strong className="text-foreground">Tier-0 financial integrity incident</strong> on
          a 5M subscriber HP NonStop (Tandem) billing platform &mdash; mid-cycle disk failure,
          sequential recovery pivot, cycle-level atomicity failure, and financial asymmetry decision under executive pressure.
        </p>
      </div>

      {/* Situation */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
            S
          </span>
          <h2 className="text-xl font-semibold text-foreground">Situation</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              Individual billing events had been flowing in and posting to the ledger continuously throughout the month &mdash;
              PPV orders, service changes, CDRs &mdash; all rated and committed as they occurred. Then the billing cycle batch
              kicked off to generate invoices for the 1.25M subscriber cohort on our <strong>5M subscriber HP NonStop (Tandem)
              billing platform</strong>. During that batch execution &mdash; which does aggregation, tax truing, invoice record
              creation, GL journal entries, and downstream triggers &mdash; a disk failure occurred.
              Tandem is fault-tolerant by design &mdash; mirrored disks, process pairs, automatic failover &mdash;
              so a single disk failure should be transparent. In this case, the mirrored disk recovery did not complete
              cleanly after replacement, leaving volume states and TMF audit trails in an <strong>inconsistent state</strong>.
            </p>
            <p>
              This was a <strong>15-year failure mode</strong> &mdash; no institutional knowledge on the current team,
              and existing runbooks did not cover it. The standard parallel startup scripts failed because subsystems
              hit dependency failures and false-ready states that parallel initialization could not resolve.
              Third-party vendor support was unreachable through documented escalation paths, and while we owned
              billing outcomes, we did not own the vendor relationship &mdash; the customer did.
            </p>
          </div>
        </div>
      </section>

      {/* Task */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
            T
          </span>
          <h2 className="text-xl font-semibold text-foreground">Task</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              I was accountable for restoring billing and protecting financial integrity for the ~1.25M subscriber
              cycle cohort. Once the system came back online, the individual charges that had posted via continuous
              processing were largely intact &mdash; they were committed to the ledger before the cycle batch started.
              But post-recovery reconciliation showed that approximately
              8% of the cohort &mdash; roughly <strong>100K accounts</strong> &mdash; had cycle-level aggregation inconsistencies.
              TMF had protected individual transaction atomicity, but the batch was mid-flight:
              some subscribers&apos; invoice records were finalized, some partially aggregated, some hadn&apos;t started.
              The cycle-level aggregates &mdash; tax pools, cycle totals, GL interface records &mdash; were incomplete
              because they&apos;re computed across the entire cohort and the batch didn&apos;t finish.
            </p>
            <p>
              The immediate decision was a <strong>clear fork</strong>: Option A &mdash; generate invoices and reconcile the
              delta population afterward to minimize outage visibility; or Option B &mdash; freeze invoice release,
              run a full three-way reconciliation, and rebuild financial state deterministically before releasing any invoices.
              Engineering leadership preferred Option A. Finance risk assessment pointed to Option B.
            </p>
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
            A
          </span>
          <h2 className="text-xl font-semibold text-foreground">Action</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              First, I made the call to <strong>abandon parallel startup</strong> and pivot to sequential subsystem
              startup &mdash; bringing up each subsystem individually, validating its state before proceeding to the next.
              This eliminated the race conditions and false-ready states, but extended the recovery window.
            </p>
            <p>
              Second, I drove the <strong>financial asymmetry analysis</strong> that resolved the decision fork.
              Releasing corrupted invoices (Option A) modeled at approximately <strong>$11&ndash;12M in direct exposure</strong>:
              ~$1M in customer credits (100K &times; $10 average), ~$2.4M in call center surge (40% call rate at $60/call),
              and ~$8M in backend recovery ($80 fully loaded per account for reconciliation, re-rating, QA, reprints,
              and correction cycles). Freezing the cycle (Option B) cost approximately <strong>$1&ndash;2M in bounded
              operational friction</strong> &mdash; delayed billing inquiries and temporary receivables shift.
            </p>
            <p>
              I presented this asymmetry to engineering leadership and the customer&apos;s executive team. We chose Option B.
              Our billing operations team ran a <strong>reconciliation across four checkpoints</strong> &mdash; mediation event counts
              against rating completion logs against ledger postings against cycle aggregation state. The reconciliation
              wasn&apos;t checking whether individual charges were correct &mdash; the individual ledger records were mostly fine,
              posted in real time before the cycle batch even started. It was checking whether the <strong>cycle aggregation
              of those charges was consistent</strong>. We validated the reconciliation tooling itself before relying on its output,
              then went back to the mediation staging data that was still on-platform &mdash; intact because it was committed
              before the batch failure &mdash; and reprocessed the impacted ~100K accounts through rating and ledger,
              rebuilt cycle aggregation, and confirmed parity before releasing to invoice generation.
            </p>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
            R
          </span>
          <h2 className="text-xl font-semibold text-foreground">Result</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              Total incident-to-invoice was approximately <strong>3.5 days</strong>. Every invoice released was
              financially correct. Zero customer credits issued. Zero revenue misstatement.
              The <strong>$1&ndash;2M bounded delay</strong> avoided the <strong>$11&ndash;12M modeled exposure</strong> from
              releasing corrupted invoices.
            </p>
            <p>
              Post-incident, I drove <strong>five structural changes</strong>: a documented sequential recovery runbook
              with validation checkpoints and decision tree; updated vendor support contacts and escalation procedures;
              a mandatory mediation/rating/ledger parity gate before invoice release; ledger checkpoint snapshots
              pre-cycle-batch for deterministic rollback capability; and updated RTO definitions to include financial
              integrity validation, not just system availability. This incident became the <strong>primary evidence artifact
              for accelerating the Tandem platform sunset</strong> &mdash; shifting the conversation from planned
              modernization to active risk mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Themes Demonstrated</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Financial Integrity Over MTTR Optics</div>
            <div className="text-sm text-muted-foreground">
              Chose $1&ndash;2M bounded delay over $11&ndash;12M misstatement exposure
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Quantified Decision-Making</div>
            <div className="text-sm text-muted-foreground">
              Financial asymmetry analysis that resolved competing stakeholder perspectives
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Cycle-Level Atomicity Insight</div>
            <div className="text-sm text-muted-foreground">
              Recognized that transactional ACID guarantees did not protect batch-level billing integrity
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Structural Governance Upgrade</div>
            <div className="text-sm text-muted-foreground">
              5 post-incident changes + platform sunset acceleration via economic framing
            </div>
          </div>
        </div>
      </section>

      {/* Use This Story For */}
      <section className="mb-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Use This Story For</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">&bull;</span>
            <span>&ldquo;Tell me about a time you made a difficult decision under pressure&rdquo;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">&bull;</span>
            <span>&ldquo;Describe a situation where you had to push back on stakeholders&rdquo;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">&bull;</span>
            <span>&ldquo;How do you handle incidents with high business impact?&rdquo;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">&bull;</span>
            <span>&ldquo;Tell me about a time you drove systemic improvement after a failure&rdquo;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">&bull;</span>
            <span>&ldquo;How do you assess risk and make tradeoff decisions?&rdquo;</span>
          </li>
        </ul>
        <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">For deep technical interrogation (15+ min)</strong> &rarr;{" "}
            <Link href="/nebula/interview-prep/billing-recovery" className="text-primary hover:underline">
              Billing Recovery unified narrative with pressure tests
            </Link>
          </p>
        </div>
      </section>

      {/* Hardening Pack Divider */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="px-4 py-2 bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-semibold rounded-full">
          Hardening Pack
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
        <p className="text-muted-foreground">
          Most senior candidates fail not on the story, but on the <strong className="text-foreground">follow-ups</strong>.
          This hardening pack is calibrated to Principal TPM bar at Mag7 companies.
        </p>
      </div>

      {/* 1. Follow-ups You Will Get */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">1</span>
          Follow-ups You WILL Get
        </h2>

        <div className="space-y-6">
          {/* Authority & Ownership */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">Authority &amp; Ownership</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">&bull;</span>
                <span>&ldquo;Who actually owned the final decision?&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">&bull;</span>
                <span>&ldquo;Could you have made that call without VP approval?&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">&bull;</span>
                <span>&ldquo;What if engineering leadership had overruled you?&rdquo;</span>
              </li>
            </ul>
          </div>

          {/* Judgment & Tradeoffs */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">Judgment &amp; Tradeoffs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">&bull;</span>
                <span>&ldquo;Walk me through the financial asymmetry analysis.&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">&bull;</span>
                <span>&ldquo;Why not release the 92% clean accounts and hold only the 8%?&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">&bull;</span>
                <span>&ldquo;How did you know transactional atomicity was insufficient?&rdquo;</span>
              </li>
            </ul>
          </div>

          {/* Metrics & Outcome */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">Metrics &amp; Outcome</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">&bull;</span>
                <span>&ldquo;3.5 days is long. Justify the extended recovery window.&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">&bull;</span>
                <span>&ldquo;How do you justify $80/account for backend recovery?&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">&bull;</span>
                <span>&ldquo;Why freeze $150M of receivables for 100K impacted accounts?&rdquo;</span>
              </li>
            </ul>
          </div>

          {/* Process & Learning */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">Process &amp; Learning</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">&bull;</span>
                <span>&ldquo;Why weren&apos;t the runbooks tested earlier?&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">&bull;</span>
                <span>&ldquo;What if this happens again?&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">&bull;</span>
                <span>&ldquo;How did this incident affect the platform strategy?&rdquo;</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. What They're Really Testing */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">2</span>
          What They&apos;re Really Testing
        </h2>

        <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
          <p className="text-muted-foreground mb-4">
            At Principal TPM bar, this story is <strong className="text-foreground">not</strong> about recovery mechanics. They&apos;re testing:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm flex-shrink-0">&#10003;</span>
              <span className="text-foreground">Do you <strong>distinguish system availability from financial integrity</strong>?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm flex-shrink-0">&#10003;</span>
              <span className="text-foreground">Can you <strong>quantify competing risks to resolve a decision fork</strong>?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm flex-shrink-0">&#10003;</span>
              <span className="text-foreground">Can you <strong>resist MTTR pressure when integrity is at risk</strong>?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm flex-shrink-0">&#10003;</span>
              <span className="text-foreground">Do you <strong>convert reactive incidents into structural governance</strong>?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm flex-shrink-0">&#10003;</span>
              <span className="text-foreground">Can you <strong>use incident evidence to accelerate strategic decisions</strong>?</span>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-background/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              Your answers must always come back to <strong className="text-foreground">judgment and quantified risk</strong>, not effort or heroics.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Hardened Answers */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">3</span>
          Hardened Answers
        </h2>
        <p className="text-muted-foreground mb-6">Use these verbatim if needed.</p>

        <div className="space-y-6">
          {/* Answer A */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">A. &ldquo;Who owned the decision?&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;I owned the recovery plan, the financial asymmetry analysis, and the recommendation.
                VP and the customer&apos;s executive team ratified the decision, but the analysis and the go/no-go
                calls at each checkpoint were mine. The decision wasn&apos;t about permission &mdash; it was about
                ensuring the risk profile was visible before executing.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Why this works:</strong> Claims ownership of analysis and recommendation without over-claiming authority.
            </p>
          </div>

          {/* Answer B */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">B. &ldquo;Walk me through the financial asymmetry.&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;We had about 100K accounts with inconsistent financial state out of a 1.25M cycle cohort.
                Releasing corrupted invoices modeled at roughly $11&ndash;12M in direct exposure &mdash; $1M in credits at
                $10 average, $2.4M in call center surge at 40% call rate and $60 per call, and approximately $8M
                in backend recovery at $80 fully loaded per account. Freezing the cycle cost about $1&ndash;2M in
                bounded operational friction from delayed billing inquiries. That&apos;s a 6-to-1 asymmetry in favor
                of protecting integrity. The decision made itself once the math was visible.&rdquo;
              </p>
            </blockquote>
            <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <p className="text-sm text-amber-600 dark:text-amber-400">
                <strong>This is the strongest answer. Memorize the numbers.</strong> $1&ndash;2M vs $11&ndash;12M. 6-to-1 asymmetry.
              </p>
            </div>
          </div>

          {/* Answer C */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">C. &ldquo;Why not release the 92% clean and hold the 8%?&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;Tax calculation and ledger aggregation were cohort-scoped by design. Tax pools,
                cycle-level totals, and GL interface records are computed across the entire cycle population.
                Releasing a partial population would require manual override of aggregation boundaries,
                introducing secondary inconsistencies in tax rollups and GL postings. We assessed that option
                and determined the reconciliation risk exceeded the benefit of partial release.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> Understands batch billing architecture, not just incident response.
            </p>
          </div>

          {/* Answer D */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">D. &ldquo;How did you know transactional atomicity was insufficient?&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;Charges post to the ledger continuously as events flow through mediation and rating &mdash;
                those individual postings were largely intact. TMF guarantees atomicity at that level. The failure
                occurred during the billing cycle batch &mdash; the invoice generation process that aggregates
                accumulated charges into statements, trues up taxes, and generates GL postings. That batch
                was mid-flight. The drift was in the cycle-level aggregation layer, not in individual charge records.
                Reconciliation &mdash; mediation event counts against rating logs against ledger postings against
                cycle aggregation state &mdash; is how we detected and quantified it.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> Operational understanding of TMF and billing pipeline architecture, not textbook ACID.
            </p>
          </div>

          {/* Answer E */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">E. &ldquo;3.5 days is a long recovery. Justify that.&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;~18 hours for disk replacement, ~18 hours for parallel startup failure plus sequential fallback,
                ~36 hours for reconciliation and deterministic rebuild, ~12 hours for re-processing and bill generation.
                The critical decision was not speed vs slow &mdash; it was what we were optimizing for.
                Optimizing MTTR risked $11&ndash;12M in downstream exposure. Optimizing financial integrity cost
                $1&ndash;2M in bounded friction. Every invoice that released was correct. Zero credits, zero misstatement.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> Can decompose recovery timeline and defend each phase.
            </p>
          </div>

          {/* Answer F */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">F. &ldquo;Why weren&apos;t runbooks tested earlier?&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;Recovery paths were treated as theoretical artifacts, not production systems.
                This was a 15-year failure mode that fell outside the platform&apos;s expected failure envelope &mdash;
                Tandem is designed so single disk failures are transparent. The incident exposed that when fault
                tolerance is exceeded, recovery processes need the same rigor as production processes.
                We corrected that with owned runbooks, quarterly validation, and the sequential recovery procedure
                documented as a formal runbook addendum.&rdquo;
              </p>
            </blockquote>
            <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
              <p className="text-sm text-red-600 dark:text-red-400">
                <strong>Important:</strong> Blame systems and incentive gaps, not people.
              </p>
            </div>
          </div>

          {/* Answer G */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">G. &ldquo;What if engineering leadership had overruled you?&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;I would have documented the $11&ndash;12M modeled exposure from releasing corrupted invoices,
                requested explicit risk acceptance, and executed with tighter checkpoints so we could catch
                downstream failures early. But the financial asymmetry analysis made the case clearly enough
                that the decision was straightforward once the math was visible.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> Mature escalation with quantified risk, not ego.
            </p>
          </div>

          {/* Answer H */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">H. &ldquo;How did this affect the platform strategy?&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;This incident became the primary evidence artifact for accelerating the Tandem platform sunset.
                The argument: we are carrying unquantified operational risk on a revenue-critical billing platform
                with failure modes that exceed current institutional knowledge, diminishing vendor support,
                and no guarantee the next incident would be recoverable in acceptable timeframe.
                It shifted the sunset conversation from planned modernization to active risk mitigation.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> Converts tactical incident into strategic leverage.
            </p>
          </div>

          {/* Answer I */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">I. &ldquo;How do you justify $80/account for backend recovery?&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;That is a fully loaded cost: individual account reconciliation and investigation, re-rating,
                QA validation per account, invoice reprints, running special correction cycles, and customer
                communication for accounts that received incorrect invoices. At 100K accounts, even with partial
                automation, the per-account cost of after-the-fact correction is significantly higher than
                getting it right before release.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> Can decompose cost modeling, not hand-waving.
            </p>
          </div>

          {/* Answer J */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">J. &ldquo;What if this happens again?&rdquo;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &ldquo;Three layers of protection. First, the mandatory parity gate means corrupted invoices cannot
                release &mdash; the failure mode is structurally blocked at the process level. Second, the sequential
                recovery runbook closes the operational gap. Third, the platform sunset is accelerated &mdash;
                this incident provided the quantified risk case to move Tandem decommissioning from planned
                modernization to active risk mitigation.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> Defense-in-depth thinking: process, operational, and strategic layers.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 30-Second Compressed Version */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold">4</span>
          30-Second Compressed Version
        </h2>
        <p className="text-muted-foreground mb-4">Memorize this for time-tight situations.</p>

        <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
          <blockquote className="text-foreground leading-relaxed space-y-3">
            <p>
              &ldquo;Disk failure during billing cycle batch execution on a 5M subscriber Tandem platform.
              Charges post to the ledger continuously as billing events flow through mediation and rating &mdash;
              those individual postings were intact. The batch &mdash; aggregation,
              tax truing, invoice generation, GL posting &mdash; was interrupted mid-flight.
              8% of the 1.25M cohort had cycle-level aggregation inconsistencies. System appeared online because
              the underlying charge data was there, but cycle-level financial state was silently inconsistent.
            </p>
            <p>
              I drove the financial asymmetry analysis: releasing corrupted invoices modeled at $11&ndash;12M exposure;
              freezing the cycle cost $1&ndash;2M in bounded delay. We froze, rebuilt from mediation source events,
              and released correct invoices in 3.5 days. Post-incident, I drove a mandatory parity gate before
              invoice release and used the incident as primary evidence to accelerate the platform sunset.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* 5. 2-Minute Board-Ready Version */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center text-sm font-bold">5</span>
          2-Minute Board-Ready Version
        </h2>
        <p className="text-muted-foreground mb-4">
          Deliver confidently if given space &mdash; matches Principal TPM expectations.
        </p>

        <div className="p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30">
          <p className="text-foreground mb-3">
            Use the full STAR story above. It&apos;s already calibrated for the 2-minute format.
          </p>
          <p className="text-sm text-muted-foreground">
            Key beats to hit: 5M platform / 1.25M cohort / 100K impacted (8%) / 15-year failure mode /
            sequential pivot / three-way reconciliation / $1&ndash;2M vs $11&ndash;12M asymmetry /
            parity gate / platform sunset acceleration.
          </p>
        </div>
      </section>

      {/* Final Calibration Check */}
      <section className="mb-10 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">Final Calibration Check</h3>
        <p className="text-muted-foreground mb-4">If an interviewer walks away thinking:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">&#10003;</span>
            <span>&ldquo;This person distinguishes availability from financial integrity&rdquo;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">&#10003;</span>
            <span>&ldquo;They quantified competing risks and the math drove the decision&rdquo;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">&#10003;</span>
            <span>&ldquo;They understand why ACID doesn&apos;t guarantee billing cycle integrity&rdquo;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">&#10003;</span>
            <span>&ldquo;They converted an incident into structural governance and strategic acceleration&rdquo;</span>
          </li>
        </ul>
        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-600 dark:text-green-400 font-semibold text-center">
            You passed.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep/tell-me-about-yourself"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Tell Me About Yourself
        </Link>
        <Link
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Back to Interview Prep &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
