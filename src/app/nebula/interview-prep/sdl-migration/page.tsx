"use client";

/**
 * SDL Migration - Interview-Ready STAR Stories
 * Three interconnected stories for Principal TPM interviews
 * Clean, decision-first, reusable versions to memorize and adapt
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function SDLMigrationPage() {
  return (
    <InterviewPrepLayout
      title="SDL Migration"
      description="Interview-ready STAR stories for large-scale migration and sustained risk governance"
      currentSection="sdl-migration"
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
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            STAR Format
          </span>
          <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            3 Stories
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">SDL Migration</h1>
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

      {/* ========== ORIGINAL DETAILED VERSION ========== */}
      <div className="my-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="px-4 py-2 bg-muted text-muted-foreground text-sm font-semibold rounded-full">
          Original Detailed Version
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          The content below is the <strong className="text-foreground">original detailed STARC version</strong> with full context, risk landscape analysis, and extended hardening pack. Use it for deeper preparation or when you need more background detail.
        </p>
      </div>

      {/* Original Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium rounded-full">
            Sustained Risk Orchestration
          </span>
        </div>
        <p className="text-muted-foreground">
          Governing risk for 18 months across systems and teams — repeatedly choosing risk containment over optics under pressure to move faster.
        </p>
      </div>

      {/* Original Situation */}
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
              We won a managed services engagement to migrate ~1.5M Suddenlink subscribers across 12+ states onto the Cablevision core stack. The source and target systems were materially different with minimal overlap.
            </p>
            <p>
              The migration was non-trivial because we were required to <strong>run both stacks in parallel while simultaneously taking over L2/L3 operational support</strong>, meaning system ownership, incident response, and SLIs were shifting at the same time traffic and data were moving. We had an 18-month window and could not afford customer-visible instability.
            </p>
          </div>
        </div>
      </section>

      {/* Original Task */}
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
              I was accountable for end-to-end migration delivery, data integrity, service availability, and customer experience. The hardest part was not the data move itself, but deciding <strong>how fast we could safely migrate while absorbing operational ownership</strong>.
            </p>
            <p>
              The decision I had to make repeatedly was whether to accelerate migration waves to hit milestone optics, or deliberately slow execution to cap blast radius and protect SLAs.
            </p>
          </div>
        </div>
      </section>

      {/* Original Risk Landscape */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold">
            R
          </span>
          <h2 className="text-xl font-semibold text-foreground">Risk Landscape</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Technical Risk</h4>
              <p className="text-sm text-muted-foreground">
                Data consistency and rollback complexity while running dual systems with limited overlap
              </p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Operational Risk</h4>
              <p className="text-sm text-muted-foreground">
                L2/L3 teams learning unfamiliar systems during live cutovers, risking MTTR spikes
              </p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Customer/Business Risk</h4>
              <p className="text-sm text-muted-foreground">
                Large-batch failures could impact entire regions, erode trust, and trigger SLA penalties or credits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Original Action */}
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
              I chose a <strong>phased, small-wave dual-run model</strong> and explicitly rejected large-batch or big-bang cutovers, despite pressure from leadership on both sides to move faster and show visible progress.
            </p>
            <p>
              I put guardrails in place: strict maintenance windows, one-week change lead-time requirements, explicit rollback criteria, and wave-level go/no-go decisions based on reconciliation accuracy, incident volume, MTTR, and support queue health. Any attempt to bypass those guardrails required justification in daily reviews.
            </p>
            <p>
              This deliberately traded headline milestones for risk containment. The goal was not to avoid incidents entirely, but to <strong>make failures small, reversible, and survivable</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Original Result */}
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
              We migrated ~70% of subscribers within the first 8 months and completed the long tail over the remaining 10 months due to sunsetting constraints. We experienced issues during some rollbacks, but because waves were intentionally small, blast radius was limited to a few towns at a time rather than entire regions.
            </p>
            <p>
              We completed the full migration in 18 months, fully sunset the legacy stack, and improved customer experience through post-migration hardening. SLA credits absorbed isolated misses, but we treated those as visible failures and used them to justify continued risk discipline rather than accelerating recklessly.
            </p>
          </div>
        </div>
      </section>

      {/* Original Reflection */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold">
            +
          </span>
          <h2 className="text-xl font-semibold text-foreground">Reflection</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed">
            <p>
              A less-senior TPM would have optimized for speed and optics — larger waves, sharper cutovers — which would have overwhelmed support teams, increased MTTR, and likely extended the overall program through rework and customer fallout. This scale required sustained risk orchestration, not heroics.
            </p>
          </div>
        </div>
      </section>

      {/* Original Key Themes */}
      <section className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Themes Demonstrated</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Sustained Risk Orchestration</div>
            <div className="text-sm text-muted-foreground">
              Governing risk for 18 months, not just point-in-time decisions
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Deliberate Speed Control</div>
            <div className="text-sm text-muted-foreground">
              Repeatedly choosing risk containment over optics
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Blast Radius Management</div>
            <div className="text-sm text-muted-foreground">
              Making failures small, reversible, and survivable
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Visible Failure Handling</div>
            <div className="text-sm text-muted-foreground">
              Using SLA misses to justify discipline, not hide them
            </div>
          </div>
        </div>
      </section>

      {/* Original Use This Story For */}
      <section className="mb-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Use This Story For</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Tell me about a large-scale migration you led&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Describe a time you had to push back on pressure to move faster&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;How do you manage risk over a long program timeline?&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Tell me about a time you chose quality over speed&quot;</span>
          </li>
        </ul>
      </section>

      {/* Original Hardening Pack Divider */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="px-4 py-2 bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-semibold rounded-full">
          Extended Hardening Pack
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
        <p className="text-muted-foreground">
          At principal bar, this story is <strong className="text-foreground">not</strong> about executing a migration plan.
          It&apos;s about <strong className="text-foreground">governing risk for 18 months</strong> across systems and teams you didn&apos;t own — repeatedly choosing risk containment over optics.
        </p>
      </div>

      {/* Original 30-Second Compressed Version */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold">1</span>
          30-Second Compressed Version (Original)
        </h2>
        <p className="text-muted-foreground mb-4">Alternative framing focused on dual-run model.</p>

        <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
          <blockquote className="text-foreground leading-relaxed space-y-3">
            <p>
              &quot;We migrated ~1.5M subscribers across two very different stacks while taking over L2/L3 support at the same time. The real risk wasn&apos;t the data move — it was MTTR and blast radius during cutovers.
            </p>
            <p>
              I deliberately slowed the migration with small, phased dual-run waves, rejected large-batch cutovers, and enforced strict go/no-go criteria. That let us finish in 18 months, sunset the legacy stack, and keep failures small and reversible instead of regional.&quot;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Original Hardened Answers */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">2</span>
          Extended Follow-up Answers
        </h2>
        <p className="text-muted-foreground mb-6">Additional depth for longer interviews.</p>

        <div className="space-y-6">
          {/* Answer A */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">A. &quot;Why not move faster?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because accelerating would have expanded blast radius faster than operational learning, increasing MTTR and customer impact. The goal wasn&apos;t to hit milestones — it was to finish without regional failures.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;But leadership wanted faster progress?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Yes — and I justified the pace with data: incident volume, MTTR trends, and support queue health. Speed pressure doesn&apos;t override risk fundamentals.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              <strong>Signal:</strong> Data-driven pushback on speed pressure.
            </p>
          </div>

          {/* Answer B */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">B. &quot;Did you miss SLAs?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;We had isolated misses absorbed by credits, which we treated as visible failures — not success — and used to justify maintaining risk discipline.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;So you hid behind credits?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;No — credits reduced financial impact, not accountability. We owned the miss, learned from it, and used it to resist pressure to accelerate recklessly.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              <strong>Signal:</strong> Visible failure handling, not hiding.
            </p>
          </div>

          {/* Answer C */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">C. &quot;How did you manage risk over 18 months?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Guardrails and governance: strict maintenance windows, one-week change lead-time, explicit rollback criteria, and wave-level go/no-go decisions. Any bypass required justification in daily reviews. This made risk visible and managed, not implicit.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;What signals did you track?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Reconciliation accuracy, incident volume, MTTR trends, and support queue health — all reviewed before each wave go/no-go.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              <strong>Signal:</strong> Metrics-driven governance.
            </p>
          </div>

          {/* Answer D */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">D. &quot;Why is this Principal-level?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because this wasn&apos;t about executing a migration plan; it was about governing risk for 18 months across systems and teams I didn&apos;t own. The hard part was repeatedly choosing risk containment over optics under pressure — that requires sustained judgment, not just execution.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;What would have happened with a less-senior TPM?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg mb-3">
              <p className="text-foreground italic text-sm">
                &quot;Larger waves, sharper cutovers, overwhelmed support teams, MTTR spikes, and likely program extension through rework and customer fallout.&quot;
              </p>
            </blockquote>
            <div className="mt-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <p className="text-sm text-amber-600 dark:text-amber-400">
                <strong>This is the strongest answer. Memorize it.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Delivery Rule */}
        <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Quick rule for delivering these answers:</strong> Keep them calm and short. If they want details, they&apos;ll pull.
          </p>
        </div>
      </section>

      {/* Story Arc Position */}
      <section className="mb-10 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">Story Arc Position</h3>
        <p className="text-muted-foreground mb-4">This completes a credible Principal TPM arc:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-3 text-foreground">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
            <span>Tandem Incident → <strong>Decision under incident pressure</strong></span>
          </li>
          <li className="flex items-start gap-3 text-foreground">
            <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
            <span>SOC Audit → <strong>Alignment without authority</strong></span>
          </li>
          <li className="flex items-start gap-3 text-foreground">
            <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">4</span>
            <span>Card Vault → <strong>Killing architectural purity</strong></span>
          </li>
          <li className="flex items-start gap-3 text-foreground">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">5</span>
            <span>SDL Migration → <strong>Sustained risk orchestration</strong></span>
          </li>
        </ul>
      </section>

      {/* Final Calibration Check */}
      <section className="mb-10 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">Final Calibration Check</h3>
        <p className="text-muted-foreground mb-4">If an interviewer walks away thinking:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;This person understands sustained risk governance&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They resisted speed pressure with data&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They made failures survivable, not catastrophic&quot;</span>
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
          href="/nebula/interview-prep/card-vault-pci"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Card Vault / PCI
        </Link>
        <Link
          href="/nebula/interview-prep/apm"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          APM →
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
