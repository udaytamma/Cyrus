"use client";

/**
 * APM - STAR Story
 * Monetization through systems thinking - reframing monitoring as reliability platform
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function APMPage() {
  return (
    <InterviewPrepLayout
      title="APM"
      description="STAR story for monetization through systems thinking"
      currentSection="apm"
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
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
            Monetization Through Systems Thinking
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">APM</h1>
        <p className="text-muted-foreground">
          Reframing an internal reliability solution as a revenue-generating platform by solving the customer&apos;s real problem — not pitching a tool.
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
              Altice had a chronic MTTR problem across its MSO infrastructure. Incident response was fragmented — they were bouncing between multiple siloed monitoring tools (LogicMonitor, Cacti, custom scripts) to isolate faults, adding 15–20 minutes per incident just in context-switching overhead.
            </p>
            <p>
              The real issue wasn&apos;t the tools themselves; it was that <strong>no single plane of glass tied network health, provisioning systems, and billing together</strong>, which is where most customer-impacting incidents actually surface.
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
              I was asked to propose a solution that would reduce MTTR materially without adding operational cost. The underlying goal was also to <strong>demonstrate monetization potential</strong> — we had built a similar internal reliability platform for our own operations, and the question was whether it could generate external revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Options Considered */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center text-lg font-bold">
            O
          </span>
          <h2 className="text-xl font-semibold text-foreground">Options Considered</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-orange-500/5 to-transparent rounded-xl border border-orange-500/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-background/50 rounded-lg border border-border">
              <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Option A: Local Improvements</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Better dashboards, more integrations, incremental tuning
              </p>
              <p className="text-sm text-red-500">
                <strong>Rejected:</strong> Doesn&apos;t solve the fragmentation problem or demonstrate scalable value
              </p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Option B: Enterprise Reliability Platform</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Unified observability layer tying network, provisioning, and billing together
              </p>
              <p className="text-sm text-green-500">
                <strong>Selected:</strong> Solves the structural problem and creates reusable, monetizable IP
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
              I reframed the engagement from &quot;selling a monitoring tool&quot; to <strong>&quot;selling reliability as a platform.&quot;</strong> Instead of pitching APM features, I scoped the deployment around their incident response pain: unified fault correlation, pre-built integrations with their BSS stack, and a topology-aware view of subscriber impact.
            </p>
            <p>
              I ran the internal business case showing that if we modularized our internal observability stack, we could deploy it externally with minimal customization. The key insight was that <strong>MTTR reduction has a measurable dollar value</strong> in SLA credits and truck rolls avoided — which justified a recurring license rather than a one-time implementation fee.
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
              The deal closed at <strong>~$1.5M ARR</strong> for the platform license, with ~$2.5M in implementation revenue. MTTR dropped by ~30% within the first 90 days of deployment.
            </p>
            <p>
              More importantly, this became the template for two follow-on engagements with other regional MSOs. The internal platform became a <strong>productizable asset</strong> rather than a cost center.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-background/50 rounded-lg border border-amber-500/30 text-center">
              <div className="text-2xl font-bold text-amber-500">~$1.5M</div>
              <div className="text-sm text-muted-foreground">ARR (Platform License)</div>
            </div>
            <div className="p-4 bg-background/50 rounded-lg border border-amber-500/30 text-center">
              <div className="text-2xl font-bold text-amber-500">~$2.5M</div>
              <div className="text-sm text-muted-foreground">Implementation Revenue</div>
            </div>
            <div className="p-4 bg-background/50 rounded-lg border border-amber-500/30 text-center">
              <div className="text-2xl font-bold text-amber-500">~30%</div>
              <div className="text-sm text-muted-foreground">MTTR Reduction (90 days)</div>
            </div>
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
              A less-senior TPM would have focused on tool deployment — shipping a dashboard, checking feature boxes. The principal-level move was recognizing that <strong>MTTR reduction is a business outcome, not a feature</strong>, and structuring the engagement around the outcome rather than the implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Themes Demonstrated</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Monetization Through Systems Thinking</div>
            <div className="text-sm text-muted-foreground">
              Turning internal capabilities into external revenue
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Problem Reframing</div>
            <div className="text-sm text-muted-foreground">
              Selling outcomes (MTTR reduction), not tools (dashboards)
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Business Case Ownership</div>
            <div className="text-sm text-muted-foreground">
              Quantifying value in SLA credits and truck rolls avoided
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Platform Thinking</div>
            <div className="text-sm text-muted-foreground">
              Building reusable, productizable assets from internal tools
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
            <span>&quot;Tell me about a time you drove revenue or business impact&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Describe a situation where you turned an internal capability into a product&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;How do you approach customer-facing technical engagements?&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Tell me about building a business case for a technical solution&quot;</span>
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
          At principal bar, this story is <strong className="text-foreground">not</strong> about deploying an APM tool.
          It&apos;s about <strong className="text-foreground">recognizing that MTTR reduction is a business outcome</strong>, structuring an engagement around the outcome rather than the implementation, and turning internal capability into external revenue.
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
              &quot;Altice had a chronic MTTR problem due to fragmented monitoring — no unified view tying network, provisioning, and billing together. Instead of pitching an APM tool, I reframed the engagement around MTTR reduction as a business outcome and proposed deploying our internal reliability platform externally.
            </p>
            <p>
              That deal closed at ~$1.5M ARR plus implementation revenue, MTTR dropped ~30% in 90 days, and it became the template for follow-on engagements.&quot;
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
            <h4 className="font-semibold text-foreground mb-3">A. &quot;Why not just sell a dashboard?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because a dashboard doesn&apos;t solve the structural problem — fragmented tooling with no unified fault correlation. The customer wasn&apos;t buying features; they were buying MTTR reduction. Structuring around the outcome justified recurring revenue instead of a one-time implementation.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;Isn&apos;t that just positioning?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;No — it changes what you deliver and how you scope the engagement. Outcome-based scoping forces you to solve the real problem, not just ship features.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              <strong>Signal:</strong> Outcome-driven scoping, not feature checklists.
            </p>
          </div>

          {/* Answer B */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">B. &quot;How did you justify ARR vs. one-time fee?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;I quantified MTTR reduction in terms of SLA credits avoided and truck rolls saved — both of which have measurable dollar values. That made the recurring license a cost-avoidance play, not a discretionary expense.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;Did they push back?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Initial pushback, yes — but once we showed the math on cost avoidance, the conversation shifted from &apos;can we afford this&apos; to &apos;can we afford not to.&apos;&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              <strong>Signal:</strong> Business case ownership with quantified value.
            </p>
          </div>

          {/* Answer C */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">C. &quot;How did this become reusable?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;I scoped the initial deployment with modular integrations and configurable topology mapping — not one-off customizations. That made the next two MSO engagements mostly configuration, not engineering.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;Did you plan for reuse from the start?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Yes — productization was part of the internal business case. If we couldn&apos;t reuse it, the margin didn&apos;t justify the investment.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              <strong>Signal:</strong> Platform thinking with intentional productization.
            </p>
          </div>

          {/* Answer D */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">D. &quot;Why is this Principal-level?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because this wasn&apos;t about deploying a monitoring tool; it was about recognizing that MTTR reduction is a business outcome, structuring an engagement around the outcome rather than the implementation, and turning an internal cost center into a revenue-generating platform. That requires business judgment, not just technical execution.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;What would have happened with a less-senior TPM?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg mb-3">
              <p className="text-foreground italic text-sm">
                &quot;Feature-focused deployment, one-time implementation fee, no productization. The customer gets a dashboard, but not the outcome. We get revenue, but not a reusable asset.&quot;
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
        <p className="text-muted-foreground mb-4">This adds commercial acumen to the Principal TPM arc:</p>
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
          <li className="flex items-start gap-3 text-foreground">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">6</span>
            <span>APM → <strong>Monetization through systems thinking</strong></span>
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
            <span>&quot;This person can turn internal capabilities into revenue&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They understand outcome-based scoping&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They build reusable, productizable solutions&quot;</span>
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
          href="/nebula/interview-prep/sdl-migration"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← SDL Migration
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
