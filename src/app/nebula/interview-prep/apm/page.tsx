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

      {/* Additional APM Stories Divider */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold rounded-full">
          Additional APM Stories
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ==================== STORY 1: Killing Feature Request ==================== */}
      <section className="mb-12">
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-xl border border-indigo-500/30">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <span className="text-2xl">🥇</span>
            Story 1: Killing a Feature Request to Protect Platform Scalability
          </h2>
          <p className="text-muted-foreground mt-2">
            <strong>Theme:</strong> Rejecting a senior stakeholder&apos;s request with a better alternative
          </p>
        </div>

        {/* Situation */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
              S
            </span>
            <h3 className="text-xl font-semibold text-foreground">Situation</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                Six months after deploying our reliability platform at Altice, their NOC leadership requested a major enhancement: fully customizable alerting rules that would allow individual NOC teams to define their own thresholds, escalation paths, and suppression logic. The request came from their VP of Network Operations, who framed it as essential for adoption — different regions had different baselines, and a one-size-fits-all alerting model wasn&apos;t matching their operational reality.
              </p>
              <p>
                On the surface, the request was reasonable. But architecturally, it would have required us to build a per-tenant rules engine with regional overrides, custom schema extensions, and a UI for non-technical users to define alert logic. This wasn&apos;t a feature — it was a platform fork. If we built it for Altice, we&apos;d either have to maintain a custom branch or absorb the complexity into the core platform, which would slow every future deployment and make the platform harder to support.
              </p>
              <p>
                We had two follow-on customers in the pipeline. Both were attracted to the platform precisely because it was opinionated and fast to deploy. A heavy customization layer would undermine the value proposition that won them.
              </p>
            </div>
          </div>
        </div>

        {/* Task */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              T
            </span>
            <h3 className="text-xl font-semibold text-foreground">Task</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <p className="text-foreground leading-relaxed">
              I was accountable for the customer relationship and platform evolution. The decision I had to make was whether to accept a high-value customer&apos;s feature request to preserve the relationship, or reject it to protect platform scalability — knowing that rejection risked friction with a VP who was also our internal champion.
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
              A
            </span>
            <h3 className="text-xl font-semibold text-foreground">Action</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                I rejected the request, but I didn&apos;t just say no — I reframed what problem we were actually solving.
              </p>
              <p>
                I dug into why the regional teams wanted custom alerting. The underlying issue wasn&apos;t that our alert thresholds were wrong; it was that alert context was insufficient. NOC operators were getting alerts without enough information to know whether they mattered — so they wanted control over suppression and escalation to reduce noise manually.
              </p>
              <p>
                I proposed an alternative: instead of customizable rules, we&apos;d enrich alert context with topology-aware impact scoring. Every alert would show estimated subscriber impact, upstream/downstream dependencies, and correlation with recent change events. This would let operators prioritize without needing to build custom suppression logic — the platform would do the filtering through context, not configuration.
              </p>
              <p>
                I presented this to the VP directly, with a clear tradeoff articulation: custom rules would take 4-5 months to build, create ongoing maintenance burden, and delay their own roadmap items. Context enrichment would take 6 weeks, solve the underlying prioritization problem, and ship as a platform feature that benefited all customers.
              </p>
              <p>
                I also made the scalability argument explicit: &quot;If we build a custom rules engine for you, we&apos;ll have to maintain it as a branch or slow down the platform for everyone. That&apos;s not a sustainable model, and it&apos;s not what made this platform valuable in the first place.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
              R
            </span>
            <h3 className="text-xl font-semibold text-foreground">Result</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                The VP accepted the alternative approach. We shipped topology-aware impact scoring in seven weeks. Alert noise complaints dropped by 60% within the first month — operators could now see which alerts actually mattered without building manual suppression rules.
              </p>
              <p>
                The feature became a core differentiator for the platform. Both follow-on customers cited impact scoring as a key reason they chose us over building internally. We avoided a platform fork that would have created ongoing maintenance drag and kept the deployment model lean.
              </p>
              <p>
                The VP later acknowledged that the original request was a symptom, not the real problem — and that pushing back with a better solution was the right call.
              </p>
            </div>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-6 p-5 bg-muted/30 rounded-xl border border-border">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">⏱</span>
            30-Second Version
          </h4>
          <blockquote className="text-foreground italic leading-relaxed">
            &quot;A VP requested fully customizable alerting rules — which would have forked our platform and slowed every future deployment. I dug into the underlying problem: operators wanted control because alert context was insufficient, not because thresholds were wrong. I proposed topology-aware impact scoring instead — shipped in 7 weeks, reduced alert noise by 60%, and became a core differentiator that won two follow-on customers. The VP later acknowledged pushing back was the right call.&quot;
          </blockquote>
        </div>

        {/* Hardened Q&A */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">Q</span>
            Hardened Follow-up Questions
          </h4>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;Wasn&apos;t saying no to a VP risky?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Yes — but building a platform fork would have been riskier for the business. The key was not just saying no, but presenting a better alternative that solved the underlying problem faster. That made it a technical discussion, not a political one.&quot;
              </p>
            </blockquote>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;How did you know custom rules weren&apos;t the real problem?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;I talked to the operators who would actually use the feature. They didn&apos;t want to build rules — they wanted to know which alerts mattered. Once I understood the underlying need, the solution became obvious.&quot;
              </p>
            </blockquote>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;What if the VP had insisted?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;I would have escalated internally with a clear recommendation: we can build this, but it will fork the platform and slow down our other customers. That makes it a business decision, not a technical one — and leadership needs to make that call with full visibility.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ==================== STORY 2: Customer Escalation ==================== */}
      <section className="mb-12">
        <div className="mb-6 p-4 bg-gradient-to-r from-rose-500/10 to-transparent rounded-xl border border-rose-500/30">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <span className="text-2xl">🥈</span>
            Story 2: Navigating a Customer Escalation When the Platform Surfaced Their Own Failures
          </h2>
          <p className="text-muted-foreground mt-2">
            <strong>Theme:</strong> Holding technical ground while steering toward productive outcomes
          </p>
        </div>

        {/* Situation */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
              S
            </span>
            <h3 className="text-xl font-semibold text-foreground">Situation</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                Eight months into the Altice deployment, the reliability platform was doing exactly what it was designed to do — correlating faults across network, provisioning, and billing to surface root cause faster. The problem was that root cause kept pointing to the same place: Altice&apos;s own change management process.
              </p>
              <p>
                The platform&apos;s correlation engine showed that 70% of high-severity incidents in the prior quarter occurred within 4 hours of a change event — maintenance windows, config pushes, firmware updates. The changes themselves weren&apos;t logged consistently, change advisory board reviews were sporadic, and rollback procedures were undocumented. The platform was making this visible in a way their previous siloed tools never had.
              </p>
              <p>
                Altice&apos;s VP of Network Operations — the same executive who had championed the platform internally — escalated to our account team. His position was that the platform was &quot;generating noise&quot; and &quot;creating false correlations&quot; that made his team look bad. He questioned the accuracy of the correlation logic and implied that the platform might not be ready for production use. The subtext was clear: he wanted us to tune down the visibility, not fix the underlying problem.
              </p>
            </div>
          </div>
        </div>

        {/* Task */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              T
            </span>
            <h3 className="text-xl font-semibold text-foreground">Task</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <p className="text-foreground leading-relaxed">
              I was accountable for the platform&apos;s credibility and the customer relationship. The decision I had to navigate was whether to soften the platform&apos;s findings to preserve the executive relationship, or hold the technical ground and risk a commercial escalation — while still steering toward a productive outcome rather than blame.
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
              A
            </span>
            <h3 className="text-xl font-semibold text-foreground">Action</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                I held the technical ground but shifted the conversation from blame to remediation.
              </p>
              <p>
                First, I validated the correlation logic with data. I pulled 20 sample incidents where the platform flagged change-event correlation and walked through each one with Altice&apos;s senior engineers — not the VP, the people who actually worked the incidents. In 18 of 20 cases, the engineers confirmed that a change event was either the direct cause or a contributing factor. This wasn&apos;t noise; it was signal they hadn&apos;t been able to see before.
              </p>
              <p>
                Second, I reframed the finding as an opportunity rather than an indictment. I requested a meeting with the VP and presented the data not as &quot;your change management is broken&quot; but as &quot;the platform has identified a structural improvement opportunity worth $X in avoided incidents.&quot; I quantified the cost of change-related incidents — SLA credits, truck rolls, NOC overtime — and showed that even a 30% reduction would generate measurable ROI.
              </p>
              <p>
                Third, I proposed a joint remediation program rather than a platform tuning. I offered to help Altice build a change-event integration that would feed scheduled maintenance windows into the platform proactively, enabling suppression of expected alerts during change windows and flagging unexpected changes more aggressively. This gave the VP a path forward that didn&apos;t require him to admit failure — he could frame it as &quot;maturing the platform integration&quot; rather than &quot;fixing our change management.&quot;
              </p>
              <p>
                I was explicit with my own leadership about the risk: if the VP escalated further, we might face pressure to soften the platform&apos;s findings. I recommended we hold firm because undermining the platform&apos;s credibility at one customer would damage our positioning with every future customer.
              </p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
              R
            </span>
            <h3 className="text-xl font-semibold text-foreground">Result</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                The VP accepted the joint remediation framing. We built the change-event integration over the following quarter, and Altice used the platform&apos;s visibility to tighten their change advisory board process — not because we told them to, but because the data made the cost undeniable.
              </p>
              <p>
                Change-related incidents dropped by 35% over the next two quarters. The VP, who had initially escalated against us, became a reference customer and spoke at an industry event about how the platform helped them &quot;mature their operational discipline.&quot;
              </p>
              <p>
                Internally, this became a case study in how to handle situations where the platform surfaces uncomfortable truths. The principle we established: the platform&apos;s value is in accurate signal, not comfortable signal — and we don&apos;t tune down visibility to protect relationships. If a customer doesn&apos;t want to see their own failures, they&apos;re not the right customer for the platform.
              </p>
            </div>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-6 p-5 bg-muted/30 rounded-xl border border-border">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">⏱</span>
            30-Second Version
          </h4>
          <blockquote className="text-foreground italic leading-relaxed">
            &quot;Our platform showed that 70% of Altice&apos;s incidents correlated with their own change events. The VP escalated, claiming the platform was generating noise. I validated the data with their engineers — 18 of 20 correlations were confirmed. Instead of tuning down visibility, I reframed it as a $X improvement opportunity and proposed a joint remediation program. Change-related incidents dropped 35%. The VP became a reference customer. The principle we established: accurate signal, not comfortable signal.&quot;
          </blockquote>
        </div>

        {/* Hardened Q&A */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">Q</span>
            Hardened Follow-up Questions
          </h4>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;Why not just tune down the visibility to keep the customer happy?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Because the platform&apos;s value is in accurate signal. If we tune it down for one customer, we undermine our credibility with every customer. The right move was to help them act on the signal, not hide it.&quot;
              </p>
            </blockquote>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;How did you avoid making the VP defensive?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;I separated the data validation from the executive conversation. I validated with engineers first, then presented to the VP as an opportunity rather than an indictment. I also gave him a path forward that didn&apos;t require admitting failure — &apos;maturing the integration&apos; vs. &apos;fixing your process.&apos;&quot;
              </p>
            </blockquote>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;What if they had churned over this?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Then they weren&apos;t the right customer for the platform. Our value proposition is visibility into operational reality — if a customer doesn&apos;t want that, the relationship isn&apos;t sustainable anyway. Better to lose one customer than compromise the platform&apos;s credibility.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6">Story Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Story</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Theme</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Principal-Level Signal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 text-foreground font-medium">APM Monetization (Original)</td>
                <td className="px-4 py-3 text-muted-foreground">Turning internal capability into revenue</td>
                <td className="px-4 py-3 text-muted-foreground">Outcome-based scoping, platform thinking</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="px-4 py-3 text-foreground font-medium">Killing the Feature Request</td>
                <td className="px-4 py-3 text-muted-foreground">Rejecting request to protect scalability</td>
                <td className="px-4 py-3 text-muted-foreground">Said no with better alternative, preserved relationship</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground font-medium">Customer Escalation</td>
                <td className="px-4 py-3 text-muted-foreground">Holding ground when findings made customer uncomfortable</td>
                <td className="px-4 py-3 text-muted-foreground">Data validation, reframed blame as opportunity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interview Deployment Guide */}
      <section className="mb-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Interview Deployment Guide</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span><strong className="text-foreground">Original APM:</strong> Use for &quot;drove revenue&quot; or &quot;turned internal capability into product&quot; questions</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span><strong className="text-foreground">Killing the Feature Request:</strong> Use for &quot;said no to a stakeholder&quot; or &quot;protected long-term over short-term&quot; questions</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span><strong className="text-foreground">Customer Escalation:</strong> Use for &quot;handled difficult customer&quot; or &quot;delivered uncomfortable truth&quot; questions</span>
          </div>
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
