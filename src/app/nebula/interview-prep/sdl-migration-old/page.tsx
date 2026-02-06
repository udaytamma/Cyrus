"use client";

/**
 * SDL Migration (Old Version) - Previous STAR Stories
 * Archived version with 3 stories from earlier hardening pass
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function SDLMigrationOldPage() {
  return (
    <InterviewPrepLayout
      title="SDL Migration (Old)"
      description="Previous version of SDL Migration stories - kept for reference"
      currentSection="sdl-migration"
    >
      <Link
        href="/nebula/interview-prep/sdl-migration"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to SDL Migration (Current)
      </Link>

      {/* Archive Notice */}
      <div className="mb-8 p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
        <p className="text-amber-600 dark:text-amber-400 text-sm">
          <strong>Archive Notice:</strong> This is the previous version of the SDL Migration stories.
          The current version has been updated with cleaner, more interview-ready stories.
          <Link href="/nebula/interview-prep/sdl-migration" className="underline ml-1">
            View current version →
          </Link>
        </p>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            STAR Format
          </span>
          <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
          <span className="px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
            Archived
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">SDL Migration (Previous Version)</h1>
        <p className="text-muted-foreground">
          Clean, interviewer-ready STAR stories written in my words, calibrated to Principal TPM bar.
          These are the versions to <strong className="text-foreground">memorize and adapt</strong>, not improvise from scratch.
        </p>
      </div>

      {/* Interview Usage Guide */}
      <section className="mb-10 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">How to Deploy These in Interviews</h3>
        <ul className="space-y-2 text-foreground">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
            <span><strong>Lead with Story 1</strong> → proves Principal-level system design and alignment without authority</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
            <span><strong>Pull in Story 2</strong> → proves judgment under pressure and willingness to slow down execs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
            <span><strong>Use Story 3</strong> → proves you made the system survivable, not heroic</span>
          </li>
        </ul>
        <div className="mt-4 p-3 bg-background/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            Together, they tell a <strong className="text-foreground">coherent Principal TPM narrative</strong>: You design decision frameworks, enforce risk discipline, and make large migrations survivable at scale.
          </p>
        </div>
      </section>

      {/* ========== STORY 1 ========== */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full flex items-center gap-2">
          <span className="text-lg">⭐</span> Story 1 (Primary)
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Cross-org Alignment Without Authority</h2>
        <p className="text-lg text-muted-foreground mb-6">CORP_ID Migration Model</p>

        {/* STAR Story */}
        <div className="space-y-6 mb-8">
          {/* Situation */}
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">S</span>
              <h3 className="font-semibold text-foreground">Situation</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              We had to migrate ~1.5M Suddenlink subscribers across ~50 CORP_IDs from the SDL BSS stack to Cablevision&apos;s CBV stack. The systems had minimal overlap, provisioning was split between CBV OSS and a third-party Sigma platform, and multiple orgs—billing, care, network, IT—disagreed on how aggressive cutovers should be. <strong>Dates and personalities were driving decisions, not risk.</strong>
            </p>
          </div>

          {/* Task */}
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">T</span>
              <h3 className="font-semibold text-foreground">Task</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Without owning any of the teams or budgets, I was accountable for defining how migration would actually work: what the migration unit was, what risk the business would accept per wave, and what constituted a valid go/no-go when flipping a CORP_ID from SDL to CBV.
            </p>
          </div>

          {/* Action */}
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">A</span>
              <h3 className="font-semibold text-foreground">Action</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                I made CORP_ID the canonical migration <strong>cell</strong>, mapped each cell&apos;s billing scope, order flows, and downstream provisioning paths, and reframed the debate from &quot;how fast can we migrate?&quot; to &quot;what risk profile are we accepting per cell.&quot;
              </p>
              <p>
                I introduced three migration profiles—low, medium, high risk—based on subscriber count, revenue at risk, incident history, data quality, and Sigma complexity. For each profile, I forced pre-commitment on quantitative go/no-go gates: parallel billing reconciliation thresholds, order fallout limits, incident volume caps, and rollback criteria. These were codified into the migration playbook and used in every cutover forum.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">R</span>
              <h3 className="font-semibold text-foreground">Result</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Decision-making moved from opinion-driven arguments to a shared, quantitative risk model. High-risk CORP_IDs were deliberately broken into smaller sub-waves with tighter controls, avoiding major billing or provisioning incidents. The CORP_ID + risk-profile governance model became the standard for the rest of the migration and was reused in later large-scale moves.
            </p>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🎙️</span> 30-Second Version
          </h3>
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <blockquote className="text-foreground leading-relaxed space-y-3 italic">
              <p>
                &quot;We had to migrate ~1.5M Suddenlink subscribers across ~50 CORP_IDs from SDL to CBV, with minimal system overlap and shared provisioning via Sigma. Different orgs argued over how aggressive cutovers should be.
              </p>
              <p>
                I made CORP_ID the migration cell and reframed the debate from dates to risk. I introduced low/medium/high-risk profiles per CORP_ID, based on revenue at risk, data quality, incident history, and Sigma complexity, and forced pre-commitment on quantitative go/no-go gates like billing reconciliation thresholds and order fallout limits.
              </p>
              <p>
                That moved decisions from opinion to a shared risk model and became the standard governance pattern for the migration.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Hardened Q&A */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🛡️</span> Hardened Answers
          </h3>
          <div className="space-y-4">
            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Why CORP_ID? Why not geography or application?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;Because CORP_ID was the smallest unit where billing, ordering, and care aligned. Geography cut across systems and apps didn&apos;t map cleanly to customer impact. CORP_ID gave us a clean blast-radius boundary.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Isn&apos;t this over-process for a migration?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;Only if the alternative is guessing. At this scale, unbounded decisions cost more than governance. This reduced rework and prevented large-scale rollbacks.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Who actually decided when to move?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;Leadership ratified dates, but I owned the framing, the risk profiles, and the go/no-go criteria that actually determined when a CORP_ID moved.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STORY 2 ========== */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <span className="px-4 py-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-semibold rounded-full flex items-center gap-2">
          <span className="text-lg">⭐⭐</span> Story 2 (Supporting)
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Prioritizing Blast Radius Over Speed</h2>
        <p className="text-lg text-muted-foreground mb-6">Under Executive Pressure</p>

        {/* STAR Story */}
        <div className="space-y-6 mb-8">
          {/* Situation */}
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">S</span>
              <h3 className="font-semibold text-foreground">Situation</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              During the SDL → CBV migration, leadership wanted to shut down SDL quickly to hit decommissioning and cost-savings targets. A high-revenue CORP_ID cluster with messy legacy data and known Sigma quirks was scheduled for an aggressive wave despite elevated risk.
            </p>
          </div>

          {/* Task */}
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">T</span>
              <h3 className="font-semibold text-foreground">Task</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              I owned cutover governance for that cluster—defining blast radius, wave size, and go/no-go criteria—while ensuring billing accuracy, order fulfillment, and support SLIs stayed within bounds.
            </p>
          </div>

          {/* Action */}
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">A</span>
              <h3 className="font-semibold text-foreground">Action</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                I enforced blast-radius-first gates: a small pilot CORP_ID had to show clean parallel billing reconciliation and stable order fallout before scaling. When the pilot surfaced billing deltas and elevated fallout tied to ID mismatches and Sigma edge cases, I called a pause.
              </p>
              <p>
                I re-sized the wave, inserted a data-quality remediation step, hardened WHA and Sigma runbooks, and reset expectations with leadership that <strong>availability and bill accuracy—not the original date—were the gating criteria</strong>.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">R</span>
              <h3 className="font-semibold text-foreground">Result</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              The problematic CORP_IDs were migrated in smaller sub-waves with clean reconciliation and no high-visibility billing incidents or major credits. The cluster&apos;s decommission date slipped slightly, but we avoided a customer-facing billing failure. Blast-radius-driven wave sizing became a standard pattern for the rest of the program.
            </p>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🎙️</span> 30-Second Version
          </h3>
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <blockquote className="text-foreground leading-relaxed space-y-3 italic">
              <p>
                &quot;During the migration, leadership wanted to accelerate a high-revenue CORP_ID cluster to hit decommissioning targets, despite messy legacy data and known Sigma quirks.
              </p>
              <p>
                I enforced blast-radius-first gates: a small pilot CORP_ID had to show clean billing reconciliation and stable order fallout before scaling. When the pilot surfaced bill deltas and Sigma edge cases, I paused the wave, re-sized it, inserted remediation steps, and reset expectations that accuracy—not dates—was the gate.
              </p>
              <p>
                We slipped a few weeks but avoided a high-visibility billing outage.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Hardened Q&A */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🛡️</span> Hardened Answers
          </h3>
          <div className="space-y-4">
            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Why not just fix issues in parallel and keep going?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;Because parallel fixes would have increased blast radius faster than remediation. The dominant failure mode was billing integrity, not speed.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Did this delay cost the business?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;The delay was measured in weeks. A billing outage would have cost months in rework, credits, and trust.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;How did you justify pushing back on execs?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;I reframed the decision in terms of revenue at risk and rollback survivability. Once framed that way, the tradeoff was clear.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STORY 3 ========== */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        <span className="px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full flex items-center gap-2">
          <span className="text-lg">⭐⭐⭐</span> Story 3 (Supporting)
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Turning Ops Heroics Into a Durable Reliability System</h2>
        <p className="text-lg text-muted-foreground mb-6">Derivative Story</p>

        {/* STAR Story */}
        <div className="space-y-6 mb-8">
          {/* Situation */}
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">S</span>
              <h3 className="font-semibold text-foreground">Situation</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Before and during the migration, critical billing, order, and Sigma provisioning incidents were resolved by a small group of senior engineers with deep tribal knowledge. MTTR was inconsistent, and migration waves increased change volume, amplifying risk.
            </p>
          </div>

          {/* Task */}
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">T</span>
              <h3 className="font-semibold text-foreground">Task</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              I was accountable for keeping incident SLOs and error budgets intact during migration and ensuring the ops model could scale without depending on a few heroes.
            </p>
          </div>

          {/* Action */}
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">A</span>
              <h3 className="font-semibold text-foreground">Action</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                I analyzed historic and in-flight incidents to identify high-frequency, high-blast-radius failure modes and prioritized them using <strong>frequency × MTTR × error-budget burn</strong>.
              </p>
              <p>
                For the top patterns, we built scripted remediations, hardened rollback paths, standardized events into dashboards, and enforced a policy that repeat offenders without automation or runbooks were prioritized ahead of new feature work.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">R</span>
              <h3 className="font-semibold text-foreground">Result</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              MTTR for dominant incident classes dropped and became predictable. L1/L2 teams handled more issues without escalations, migration waves stopped devolving into all-hands firefights, and the reliability system—SLOs, error budgets, automation, and observability—continued to operate after the migration completed.
            </p>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🎙️</span> 30-Second Version
          </h3>
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <blockquote className="text-foreground leading-relaxed space-y-3 italic">
              <p>
                &quot;Before and during migration, critical incidents were resolved by a few senior engineers with tribal knowledge, leading to long bridges and inconsistent MTTR. Migration waves amplified that risk.
              </p>
              <p>
                I identified high-frequency, high-blast-radius failure modes and prioritized automation and runbooks using frequency × MTTR × error-budget burn. Repeat offenders without automation were prioritized over new features.
              </p>
              <p>
                MTTR dropped, escalations reduced, and migration waves stopped turning into all-hands firefights.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Hardened Q&A */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🛡️</span> Hardened Answers
          </h3>
          <div className="space-y-4">
            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Isn&apos;t this just SRE best practice?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;The practice isn&apos;t novel—the enforcement is. I tied automation to error-budget burn and deprioritized feature work until reliability gaps were addressed.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Why didn&apos;t teams already have runbooks?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;Because incentives favored shipping over survivability. Migration pressure exposed that gap, and we fixed the incentive.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;How is this different from your other reliability stories?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;This one is specifically about making migration survivable by removing dependency on hero engineers, not just improving steady-state ops.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Calibration Verdict */}
      <section className="mb-10 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">Calibration Verdict</h3>
        <p className="text-muted-foreground mb-4">These 30-second versions are <strong className="text-foreground">Principal-caliber</strong>. If delivered cleanly, they signal:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>Decision ownership</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>Risk discipline</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>System-level thinking</span>
          </li>
        </ul>
        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-600 dark:text-green-400 font-semibold text-center">
            Do NOT tell all three back-to-back unless asked.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep/sdl-migration"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to SDL Migration (Current)
        </Link>
        <Link
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Interview Prep →
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
