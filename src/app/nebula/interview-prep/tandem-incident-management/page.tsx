"use client";

/**
 * Tandem Incident Management - STAR Story
 * Critical billing system recovery under executive pressure
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function TandemIncidentManagementPage() {
  return (
    <InterviewPrepLayout
      title="Tandem Incident Management"
      description="STAR story for incident management behavioral questions"
      currentSection="tandem-incident-management"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Interview Prep
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            STAR Format
          </span>
          <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
            Incident Management
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Tandem Incident Management</h1>
        <p className="text-muted-foreground">
          Critical billing system recovery demonstrating executive communication, technical judgment under pressure, and systemic improvement.
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
              We had a critical billing storage subsystem fail during nightly billing cycles late Friday night, heading into Saturday. This subsystem sat underneath revenue-critical billing workflows, and its failure blocked bill generation for ~1.5M subscribers.
            </p>
            <p>
              Recovery was non-trivial because the system relied on a brittle set of legacy recovery scripts whose execution order and parallelism assumptions were undocumented and outdated. After the disk replacement, multiple scripts failed during restart, and repeated parallel recovery attempts were increasing the risk of corrupting billing state rather than restoring it. Compounding this, third-party vendor support was unreachable, and while we owned billing outcomes, we did not own the vendor relationship — the customer did.
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
              I was accountable for restoring billing within a 12-hour SLA to avoid customer credits and revenue loss, while minimizing the risk of data inconsistency or a prolonged outage. The immediate decision was whether to keep pushing parallel recovery to meet the SLA faster, or slow recovery deliberately to cap blast radius and protect billing integrity — under active executive pressure to move faster.
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
              I made the call to stop parallel recovery attempts and shift to a phased, sequential recovery plan with explicit checkpoints. My reasoning was that parallel script failures were compounding state corruption risk, and that a slower, controlled recovery would actually shorten total outage time by avoiding rework and rollbacks.
            </p>
            <p>
              I mapped the scripts into dependency groups, identified which could safely run in isolation, and built a recovery sequence that only allowed parallelism where activities were clearly non-overlapping. I presented the tradeoffs to my VP — speed versus integrity — and once aligned, walked the customer&apos;s executive team through the plan and risk profile.
            </p>
            <p>
              The billing team initially resisted deviating from the existing runbook, but I was explicit that continuing a failing approach under pressure would extend the outage. I reframed the discussion from &quot;following the runbook&quot; to &quot;what outcome we&apos;re optimizing for,&quot; and held firm on the phased approach.
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
              We restored the billing system within the SLA window without data corruption, generated bills successfully, and avoided customer credits or revenue loss.
            </p>
            <p>
              Post-incident, I led a structured RCA that surfaced systemic gaps: invalid vendor contact paths, untested and outdated runbooks, and no chaos-testing of recovery scenarios. I drove short-term fixes to validate vendor contacts and modernize runbooks with ownership and quarterly reviews; medium-term automation to tie vendor escalation paths into contract and finance systems; and shaped the long-term plan to move off the brittle platform toward a more resilient billing architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Themes Demonstrated</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Technical Judgment Under Pressure</div>
            <div className="text-sm text-muted-foreground">
              Choosing controlled recovery over faster-but-riskier parallel approach
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Executive Communication</div>
            <div className="text-sm text-muted-foreground">
              Presenting tradeoffs clearly to VP and customer executives
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Cross-Org Influence</div>
            <div className="text-sm text-muted-foreground">
              Reframing discussion to align resistant billing team
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Systemic Improvement</div>
            <div className="text-sm text-muted-foreground">
              RCA driving short, medium, and long-term fixes
            </div>
          </div>
        </div>
      </section>

      {/* Use This Story For */}
      <section className="mb-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Use This Story For</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Tell me about a time you made a difficult decision under pressure&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Describe a situation where you had to push back on stakeholders&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;How do you handle incidents with high business impact?&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Tell me about a time you drove systemic improvement after a failure&quot;</span>
          </li>
        </ul>
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
          This hardening pack is calibrated to Google / Meta / strong non-Mag7 senior bar.
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
                <span className="text-blue-500 mt-0.5">•</span>
                <span>&quot;Who actually owned the final decision?&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>&quot;Could you have made that call without VP approval?&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>&quot;What if leadership had disagreed?&quot;</span>
              </li>
            </ul>
          </div>

          {/* Judgment & Tradeoffs */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">Judgment &amp; Tradeoffs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">•</span>
                <span>&quot;Why was slowing recovery safer than speeding it up?&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">•</span>
                <span>&quot;How did you decide which scripts could run in parallel?&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-0.5">•</span>
                <span>&quot;What alternative did you seriously consider and reject?&quot;</span>
              </li>
            </ul>
          </div>

          {/* Metrics & Outcome */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">Metrics &amp; Outcome</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>&quot;Did you actually meet the SLA?&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>&quot;How close were you to breaching it?&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>&quot;What was the measurable risk avoided?&quot;</span>
              </li>
            </ul>
          </div>

          {/* Process & Learning */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">Process &amp; Learning</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">•</span>
                <span>&quot;Why weren&apos;t the runbooks tested earlier?&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">•</span>
                <span>&quot;How do you prevent this from happening again?&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">•</span>
                <span>&quot;What would you do differently next time?&quot;</span>
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
            At principal bar, this story is <strong className="text-foreground">not</strong> about recovery mechanics. They&apos;re testing:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm flex-shrink-0">✓</span>
              <span className="text-foreground">Do you <strong>recognize hidden failure modes</strong>?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm flex-shrink-0">✓</span>
              <span className="text-foreground">Can you <strong>resist speed pressure intelligently</strong>?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm flex-shrink-0">✓</span>
              <span className="text-foreground">Can you <strong>reframe chaos into a decision</strong>?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm flex-shrink-0">✓</span>
              <span className="text-foreground">Do you <strong>leave systems better than you found them</strong>?</span>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-background/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              Your answers must always come back to <strong className="text-foreground">judgment</strong>, not effort.
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
            <h4 className="font-semibold text-foreground mb-3">A. &quot;Who owned the decision?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Formally, the VP ratified it, but I owned the recovery plan, sequencing, and go/no-go calls at each checkpoint. The decision wasn&apos;t about permission — it was about aligning leadership and the customer on the risk profile before executing.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Why this works:</strong> You claim ownership without over-claiming authority.
            </p>
          </div>

          {/* Answer B */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">B. &quot;Why was slowing recovery safer?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because the failure mode wasn&apos;t downtime alone — it was state corruption. Parallel script failures were increasing the probability of partial writes and rollback loops, which would have extended the outage far beyond the SLA. Slowing recovery reduced total outage time by preventing rework.&quot;
              </p>
            </blockquote>
            <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <p className="text-sm text-amber-600 dark:text-amber-400">
                <strong>Key phrase to remember:</strong> &quot;Reducing total outage time, not just speeding up the next step.&quot;
              </p>
            </div>
          </div>

          {/* Answer C */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">C. &quot;How did you decide what could run in parallel?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;I grouped scripts by shared state and side effects. Anything touching the same billing tables or reconciliation state was forced into sequence. Parallelism was allowed only where activities were clearly orthogonal — for example, metadata rebuilds versus data validation.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> Systems thinking, not guesswork.
            </p>
          </div>

          {/* Answer D */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">D. &quot;What alternative did you reject?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;We considered continuing parallel recovery to try to beat the SLA faster. I rejected it because the failure pattern showed diminishing returns — every retry increased rollback risk. That path optimized for speed at the cost of integrity.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> Explicit rejection of a tempting but wrong option.
            </p>
          </div>

          {/* Answer E */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">E. &quot;Did you meet the SLA?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Yes. We restored billing within the 12-hour SLA and generated bills without downstream reconciliation issues or customer credits.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If pressed:</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;We had buffer left, but not enough that taking integrity risk would have been justified.&quot;
              </p>
            </blockquote>
          </div>

          {/* Answer F */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">F. &quot;Why weren&apos;t runbooks tested earlier?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because recovery paths were treated as theoretical artifacts, not production systems. This incident exposed that gap, and we corrected it by making recovery paths owned, tested, and reviewed on a fixed cadence.&quot;
              </p>
            </blockquote>
            <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
              <p className="text-sm text-red-600 dark:text-red-400">
                <strong>Important:</strong> Do NOT blame people. Blame systems.
              </p>
            </div>
          </div>

          {/* Answer G */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">G. &quot;What would you do differently?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;I would have forced earlier validation of recovery paths and vendor escalation before we ever needed them. The incident didn&apos;t reveal a lack of effort — it revealed missing ownership and incentives around recovery readiness.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              This shows maturity and humility <strong>without self-flagellation</strong>.
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
              &quot;A billing storage subsystem failed during nightly cycles, blocking billing for ~1.5M subscribers. Standard recovery scripts kept failing in parallel, increasing the risk of corrupting billing state.
            </p>
            <p>
              I made the call to slow recovery deliberately, shift to a phased sequence with checkpoints, and align leadership and the customer on trading speed for integrity. We restored billing within SLA without data issues and used the RCA to fix systemic gaps in runbooks, vendor escalation, and recovery testing.&quot;
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
          Deliver confidently if given space — matches senior expectations exactly.
        </p>

        <div className="p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30">
          <p className="text-foreground">
            Use the full STAR story above. It&apos;s already calibrated for the 2-minute format.
          </p>
        </div>
      </section>

      {/* Final Calibration Check */}
      <section className="mb-10 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">Final Calibration Check</h3>
        <p className="text-muted-foreground mb-4">If an interviewer walks away thinking:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;This person stayed calm under pressure&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They understood second-order risk&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They didn&apos;t chase speed blindly&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They improved the system, not just the incident&quot;</span>
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
          ← Tell Me About Yourself
        </Link>
        <Link
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Back to Interview Prep →
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
