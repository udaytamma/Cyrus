"use client";

/**
 * SDL Migration - STAR Story
 * Sustained risk orchestration over 18 months with 1.5M subscriber migration
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function SDLMigrationPage() {
  return (
    <InterviewPrepLayout
      title="SDL Migration"
      description="STAR story for large-scale migration and sustained risk governance"
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
            Sustained Risk Orchestration
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">SDL Migration</h1>
        <p className="text-muted-foreground">
          Governing risk for 18 months across systems and teams — repeatedly choosing risk containment over optics under pressure to move faster.
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
              We won a managed services engagement to migrate ~1.5M Suddenlink subscribers across 12+ states onto the Cablevision core stack. The source and target systems were materially different with minimal overlap.
            </p>
            <p>
              The migration was non-trivial because we were required to <strong>run both stacks in parallel while simultaneously taking over L2/L3 operational support</strong>, meaning system ownership, incident response, and SLIs were shifting at the same time traffic and data were moving. We had an 18-month window and could not afford customer-visible instability.
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
              I was accountable for end-to-end migration delivery, data integrity, service availability, and customer experience. The hardest part was not the data move itself, but deciding <strong>how fast we could safely migrate while absorbing operational ownership</strong>.
            </p>
            <p>
              The decision I had to make repeatedly was whether to accelerate migration waves to hit milestone optics, or deliberately slow execution to cap blast radius and protect SLAs.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Landscape */}
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
              We migrated ~70% of subscribers within the first 8 months and completed the long tail over the remaining 10 months due to sunsetting constraints. We experienced issues during some rollbacks, but because waves were intentionally small, blast radius was limited to a few towns at a time rather than entire regions.
            </p>
            <p>
              We completed the full migration in 18 months, fully sunset the legacy stack, and improved customer experience through post-migration hardening. SLA credits absorbed isolated misses, but we treated those as visible failures and used them to justify continued risk discipline rather than accelerating recklessly.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
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

      {/* Key Themes */}
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

      {/* Use This Story For */}
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
          At principal bar, this story is <strong className="text-foreground">not</strong> about executing a migration plan.
          It&apos;s about <strong className="text-foreground">governing risk for 18 months</strong> across systems and teams you didn&apos;t own — repeatedly choosing risk containment over optics.
        </p>
      </div>

      {/* 30-Second Compressed Version */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold">1</span>
          30-Second Compressed Version
        </h2>
        <p className="text-muted-foreground mb-4">Memorize this for time-tight situations.</p>

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

      {/* Hardened Answers */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">2</span>
          Hardened Follow-up Answers
        </h2>
        <p className="text-muted-foreground mb-6">Expect these questions. Use verbatim if needed.</p>

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
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Back to Interview Prep →
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
