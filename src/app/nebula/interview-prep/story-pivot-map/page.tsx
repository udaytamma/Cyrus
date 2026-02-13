"use client";

/**
 * Story Pivot Map - 5 Anchor Stories + Mental Redirection System
 * Principal TPM interview strategy: reuse high-signal stories across 80-90% of behavioral questions
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function StoryPivotMapPage() {
  return (
    <InterviewPrepLayout
      title="Story Pivot Map"
      description="5 anchor stories and a mental redirection system for Principal TPM interviews"
      currentSection="story-pivot-map"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Interview Prep
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Strategy
          </span>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
            5 Anchor Stories
          </span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            Pivot Map
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Story Pivot Map</h1>
        <p className="text-muted-foreground">
          You don&apos;t need 20 stories. You need 5 high-leverage anchor narratives that can flex
          across 80% of behavioral and execution questions. This page contains the 5 anchors
          from your resume plus a mental redirection system that lets you steer almost any
          question into one of them naturally.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Page Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a href="#anchors" className="p-3 bg-background rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
            <div className="font-medium text-foreground">5 Anchor Stories</div>
            <div className="text-sm text-muted-foreground">High-leverage narratives</div>
          </a>
          <a href="#pivot-map" className="p-3 bg-background rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors">
            <div className="font-medium text-foreground">Story Pivot Map</div>
            <div className="text-sm text-muted-foreground">Mental redirection system</div>
          </a>
          <a href="#coverage" className="p-3 bg-background rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <div className="font-medium text-foreground">Coverage Matrix</div>
            <div className="text-sm text-muted-foreground">Question-to-story mapping</div>
          </a>
          <a href="#strategy" className="p-3 bg-background rounded-lg border border-amber-500/30 hover:border-amber-500/50 transition-colors">
            <div className="font-medium text-foreground">Prep Strategy</div>
            <div className="text-sm text-muted-foreground">How to master these stories</div>
          </a>
          <a href="#failure-modes" className="p-3 bg-background rounded-lg border border-red-500/30 hover:border-red-500/50 transition-colors">
            <div className="font-medium text-foreground">Failure Mode Layer</div>
            <div className="text-sm text-muted-foreground">Adversarial probe defenses</div>
          </a>
          <a href="#avoid" className="p-3 bg-background rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
            <div className="font-medium text-foreground">What to Avoid</div>
            <div className="text-sm text-muted-foreground">Anti-patterns and rules</div>
          </a>
        </div>
      </div>

      {/* ── 5 Anchor Stories ── */}
      <section id="anchors" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">5 Anchor Stories</h2>

        {/* Anchor 1 */}
        <div className="mb-6 p-6 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-transparent">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold shrink-0">1</span>
            <div>
              <h3 className="text-lg font-bold text-foreground">1.6M Subscriber Multi-Wave Migration</h3>
              <p className="text-sm text-muted-foreground italic">Your Tier-0 execution control story</p>
            </div>
          </div>
          <div className="ml-13 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Why It&apos;s Powerful</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>High blast radius</li>
                <li>Cross-functional orchestration</li>
                <li>Client pressure</li>
                <li>Gating model</li>
                <li>Risk tradeoffs</li>
                <li>Escalation under executive scrutiny</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Covers These Questions</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Handling multiple teams</li>
                <li>Establishing sync</li>
                <li>Toughest decision</li>
                <li>Disagreement with team</li>
                <li>Difficult client</li>
                <li>Slippage mid-program</li>
                <li>Aggressive timeline management</li>
                <li>Underperformance (wave lead example)</li>
                <li>Gating model explanation</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">Principal Signal</p>
            <p className="text-sm text-muted-foreground">
              Designed governance system. Forced risk tradeoffs. Held line under pressure. Zero Sev-1 post-adjustment.
            </p>
          </div>
        </div>

        {/* Anchor 2 */}
        <div className="mb-6 p-6 rounded-xl border border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold shrink-0">2</span>
            <div>
              <h3 className="text-lg font-bold text-foreground">Billing Platform Recovery After Storage Failure</h3>
              <p className="text-sm text-muted-foreground italic">Your crisis leadership + risk asymmetry story</p>
            </div>
          </div>
          <div className="ml-13 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Why It&apos;s Powerful</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Incident management at revenue-critical layer</li>
                <li>Executive pressure</li>
                <li>Phased restart strategy</li>
                <li>Corruption risk containment</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Covers</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Difficult customer</li>
                <li>Toughest decision</li>
                <li>Managing upset stakeholders</li>
                <li>Mid-program recalibration</li>
                <li>Tradeoff framing under stress</li>
                <li>Escalation discipline</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-red-500/5 rounded-lg border border-red-500/20">
            <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">Principal Signal</p>
            <p className="text-sm text-muted-foreground">
              Presented structured restart options. Protected billing integrity. Quantified revenue exposure. Maintained executive trust.
            </p>
          </div>
        </div>

        {/* Anchor 3 */}
        <div className="mb-6 p-6 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-transparent">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-lg font-bold shrink-0">3</span>
            <div>
              <h3 className="text-lg font-bold text-foreground">Org-Wide Reliability Transformation (130+ Services)</h3>
              <p className="text-sm text-muted-foreground italic">Your organizational systems design story</p>
            </div>
          </div>
          <div className="ml-13 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Why It&apos;s Powerful</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>System redesign</li>
                <li>Cross-org resistance</li>
                <li>Governance evolution</li>
                <li>Mistake + recalibration</li>
                <li>Velocity vs reliability tradeoff</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Covers</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Disagreement with entire team</li>
                <li>Conflict resolution</li>
                <li>Making a mistake</li>
                <li>Difficult feedback from superiors</li>
                <li>Optimizing scalability</li>
                <li>Motivation</li>
                <li>Principal vs Senior distinction</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Principal Signal</p>
            <p className="text-sm text-muted-foreground">
              Enforced PRR, HA/DR gates. Shifted to risk-tiered model. Reduced incidents. Changed operating model.
            </p>
          </div>
        </div>

        {/* Anchor 4 */}
        <div className="mb-6 p-6 rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold shrink-0">4</span>
            <div>
              <h3 className="text-lg font-bold text-foreground">SOC Compliance Automation (~18% EBIT Impact)</h3>
              <p className="text-sm text-muted-foreground italic">Your business-impact + alignment story</p>
            </div>
          </div>
          <div className="ml-13 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Why It&apos;s Powerful</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Cross-functional (Security, IT, Finance)</li>
                <li>Economic framing</li>
                <li>Standardization</li>
                <li>Margin improvement</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Covers</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Making client cooperate</li>
                <li>Establishing sync</li>
                <li>Scaling without headcount</li>
                <li>Difficult feedback</li>
                <li>Business framing questions</li>
                <li>Influence without authority</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-amber-500/5 rounded-lg border border-amber-500/20">
            <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">Principal Signal</p>
            <p className="text-sm text-muted-foreground">
              Standardized control libraries. Reduced audit friction. Drove measurable EBIT improvement.
            </p>
          </div>
        </div>

        {/* Anchor 5 */}
        <div className="mb-6 p-6 rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-transparent">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold shrink-0">5</span>
            <div>
              <h3 className="text-lg font-bold text-foreground">AI Ops Copilot + Billing Assistant Rollout</h3>
              <p className="text-sm text-muted-foreground italic">Your modern AI product + safety orchestration story</p>
            </div>
          </div>
          <div className="ml-13 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Why It&apos;s Powerful</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>AI guardrails</li>
                <li>Human-in-loop design</li>
                <li>MVP scoping</li>
                <li>Failure-mode design</li>
                <li>Emerging tech risk containment</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Covers</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>MVP scoping</li>
                <li>Aggressive timeline</li>
                <li>Scaling safely</li>
                <li>Handling skepticism</li>
                <li>Difficult customer (hallucination risk)</li>
                <li>Motivation (technical challenge)</li>
                <li>Feedback calibration</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">Principal Signal</p>
            <p className="text-sm text-muted-foreground">
              Defined guardrails (retrieval gating, confidence thresholds). Prevented hallucination exposure in regulated workflows. Converted early failures into design patterns.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story Pivot Map ── */}
      <section id="pivot-map" className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Story Pivot Map</h2>
          <p className="text-muted-foreground">
            A mental redirection system that lets you steer almost any behavioral question into one of
            your 5 anchor stories naturally. For fast recall in interview:
          </p>
        </div>

        {/* Quick labels */}
        <div className="mb-8 p-5 bg-muted/30 rounded-xl border border-border">
          <p className="text-sm font-semibold text-foreground mb-3">Quick Labels for Fast Recall</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-blue-500 text-white flex items-center justify-center text-xs font-bold">1</span><span className="text-muted-foreground"><strong className="text-foreground">Migration</strong> &rarr; Governance under pressure</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-red-500 text-white flex items-center justify-center text-xs font-bold">2</span><span className="text-muted-foreground"><strong className="text-foreground">Billing Recovery</strong> &rarr; Crisis + asymmetric risk</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">3</span><span className="text-muted-foreground"><strong className="text-foreground">Reliability</strong> &rarr; Org redesign + recalibration</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-amber-500 text-white flex items-center justify-center text-xs font-bold">4</span><span className="text-muted-foreground"><strong className="text-foreground">Compliance</strong> &rarr; Business impact + alignment</span></div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded bg-purple-500 text-white flex items-center justify-center text-xs font-bold">5</span><span className="text-muted-foreground"><strong className="text-foreground">AI Copilot</strong> &rarr; MVP + guardrails + modern systems</span></div>
          </div>
        </div>

        {/* Pivot A */}
        <div className="mb-5 p-5 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-1">A. Execution / Delivery Questions</h3>
          <p className="text-sm text-muted-foreground mb-3">
            <em>&quot;How do you manage multiple teams?&quot; &quot;Aggressive timelines?&quot; &quot;Slipping mid-program?&quot; &quot;Structure governance?&quot;</em>
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-foreground">Pivot to:</span>
            <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">Migration</span>
          </div>
          <p className="text-sm text-muted-foreground mb-1"><strong>Bridge phrase:</strong> &quot;A good example is during the 1.6M subscriber migration&hellip;&quot;</p>
          <p className="text-xs text-muted-foreground">Cross-functional. High blast radius. Explicit gating model. Tradeoffs under pressure.</p>
        </div>

        {/* Pivot B */}
        <div className="mb-5 p-5 rounded-xl border border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-1">B. Crisis / Difficult Stakeholder Questions</h3>
          <p className="text-sm text-muted-foreground mb-3">
            <em>&quot;Toughest decision?&quot; &quot;Difficult customer?&quot; &quot;Handle escalation?&quot; &quot;Restore trust?&quot;</em>
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-foreground">Pivot to:</span>
            <span className="px-2.5 py-0.5 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">Billing Recovery</span>
          </div>
          <p className="text-sm text-muted-foreground mb-1"><strong>Bridge phrase:</strong> &quot;During a critical storage subsystem failure affecting billing&hellip;&quot;</p>
          <p className="text-xs text-muted-foreground">Revenue exposure. Executive pressure. Phased restart. Asymmetric downside logic.</p>
        </div>

        {/* Pivot C */}
        <div className="mb-5 p-5 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-1">C. Conflict / Disagreement / Feedback Questions</h3>
          <p className="text-sm text-muted-foreground mb-3">
            <em>&quot;Disagreed with entire team?&quot; &quot;Made a mistake?&quot; &quot;Received tough feedback?&quot; &quot;Resolved team conflict?&quot;</em>
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-foreground">Pivot to:</span>
            <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">Reliability Transformation</span>
          </div>
          <p className="text-sm text-muted-foreground mb-1"><strong>Bridge phrase:</strong> &quot;During our org-wide reliability enforcement across 130+ services&hellip;&quot;</p>
          <p className="text-xs text-muted-foreground">Structural overreach mistake. Executive feedback. Team resistance. Risk-tiered recalibration. <strong>Most versatile behavioral story.</strong></p>
        </div>

        {/* Pivot D */}
        <div className="mb-5 p-5 rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-1">D. Scalability / Optimization / No Headcount Growth</h3>
          <p className="text-sm text-muted-foreground mb-3">
            <em>&quot;Scale without hiring?&quot; &quot;Reduce incident load?&quot; &quot;Optimize efficiency?&quot;</em>
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-foreground">Pivot to:</span>
            <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">Reliability</span>
            <span className="text-xs text-muted-foreground">or</span>
            <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">Compliance</span>
          </div>
          <p className="text-xs text-muted-foreground">Error-budget-driven automation. Standardized control libraries. EBIT impact.</p>
        </div>

        {/* Pivot E */}
        <div className="mb-5 p-5 rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-1">E. Business Framing / Influence Without Authority</h3>
          <p className="text-sm text-muted-foreground mb-3">
            <em>&quot;Made a client cooperate?&quot; &quot;Align cross-functional stakeholders?&quot; &quot;Influence executives?&quot;</em>
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-foreground">Pivot to:</span>
            <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">Compliance Automation</span>
          </div>
          <p className="text-xs text-muted-foreground">Security + IT + Finance alignment. Margin impact (~18% EBIT). Structured governance rollout.</p>
        </div>

        {/* Pivot F */}
        <div className="mb-5 p-5 rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-1">F. Product Thinking / MVP / Modern Systems</h3>
          <p className="text-sm text-muted-foreground mb-3">
            <em>&quot;Scope MVP?&quot; &quot;Handle AI risk?&quot; &quot;Launch safely?&quot; &quot;Motivate engineers technically?&quot;</em>
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-foreground">Pivot to:</span>
            <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">AI Copilot</span>
          </div>
          <p className="text-xs text-muted-foreground">Guardrails. Confidence scoring. Human-in-loop. Controlled rollout.</p>
        </div>

        {/* Meta Pivot Rule */}
        <div className="p-5 bg-muted/30 rounded-xl border border-border">
          <h3 className="text-lg font-bold text-foreground mb-3">Meta Pivot Rule</h3>
          <p className="text-sm text-muted-foreground mb-3">If stuck, ask yourself: <em>Is this about&hellip;</em></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground"><span className="text-blue-500 font-bold">&rarr;</span> Risk under pressure? <strong className="text-foreground">Migration</strong> or <strong className="text-foreground">Billing</strong></div>
            <div className="flex items-center gap-2 text-muted-foreground"><span className="text-emerald-500 font-bold">&rarr;</span> Organizational friction? <strong className="text-foreground">Reliability</strong></div>
            <div className="flex items-center gap-2 text-muted-foreground"><span className="text-amber-500 font-bold">&rarr;</span> Business economics? <strong className="text-foreground">Compliance</strong></div>
            <div className="flex items-center gap-2 text-muted-foreground"><span className="text-purple-500 font-bold">&rarr;</span> Product design &amp; guardrails? <strong className="text-foreground">AI</strong></div>
          </div>
        </div>
      </section>

      {/* ── Coverage Matrix ── */}
      <section id="coverage" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Coverage Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-foreground">Question Type</th>
                <th className="text-left py-2 text-foreground">Story Anchor</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Multiple teams</td><td>Migration</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Sync / alignment</td><td>Migration / Compliance</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Tough decision</td><td>Migration / Billing Recovery</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Mistake / failure</td><td>Reliability Transformation</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Difficult feedback</td><td>Reliability Transformation</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Conflict resolution</td><td>Reliability Transformation</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Scalability</td><td>Reliability / Compliance</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Client cooperation</td><td>Compliance / Migration</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Upset customer</td><td>Billing Recovery</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">MVP scoping</td><td>AI Copilot</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Slippage / timeline</td><td>Reliability / Migration</td></tr>
              <tr className="border-b border-border/50"><td className="py-2 pr-4">Aggressive timeline</td><td>Migration</td></tr>
              <tr><td className="py-2 pr-4">Principal vs Senior</td><td>Reliability / Compliance</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          All 5 stories have: <strong>cross-functional scope</strong>, <strong>risk tradeoffs</strong>,
          <strong>economic framing</strong>, <strong>system redesign</strong>, and <strong>visible metrics</strong>.
          That&apos;s the Principal bar.
        </p>
      </section>

      {/* ── Prep Strategy ── */}
      <section id="strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Your Real Prep Strategy</h2>
        <div className="p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
          <p className="text-muted-foreground mb-4">Instead of memorizing answers:</p>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <span className="text-foreground"><strong>Master these 5 stories deeply.</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <div>
                <span className="text-foreground font-semibold">For each, know:</span>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li>What was at risk?</li>
                  <li>What tradeoff did you force?</li>
                  <li>What metric moved?</li>
                  <li>What structural change remained?</li>
                </ul>
              </div>
            </li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4 italic">
            If you can pivot any question into one of these stories, you&apos;ll sound coherent and senior.
          </p>
        </div>
      </section>

      {/* ── Why This Makes You Sound Principal ── */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Why This Makes You Sound Principal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-500/5 rounded-xl border border-red-500/20">
            <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Weak candidates say:</p>
            <p className="text-sm text-muted-foreground italic">&quot;I have a different story for every question.&quot;</p>
          </div>
          <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Strong Principal candidates:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Reuse high-signal stories</li>
              <li>Show depth</li>
              <li>Show pattern recognition</li>
              <li>Show systemic thinking</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Repetition is not a weakness if: the <strong>lens changes</strong>, the <strong>tradeoff emphasized changes</strong>,
          and the <strong>learning emphasized changes</strong>.
        </p>
      </section>

      {/* ── What to Avoid ── */}
      <section id="avoid" className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">What to Avoid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-red-500/5 rounded-xl border border-red-500/20">
            <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-3">Don&apos;t:</p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>Tell the same story identically each time</li>
              <li>Repeat identical metrics</li>
              <li>Use generic framing</li>
            </ul>
          </div>
          <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Do shift emphasis:</p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>Governance angle</li>
              <li>Risk asymmetry angle</li>
              <li>Economic framing angle</li>
              <li>Human alignment angle</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Failure Mode Layer ── */}
      <section id="failure-modes" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Failure Mode Layer</h2>
        <p className="text-muted-foreground mb-6">
          For each anchor story: the failure scenario interviewers push, the vulnerability in your story,
          the strong recovery narrative, and the &quot;if it had gone wrong&quot; answer.
          This prepares you for adversarial probing.
        </p>

        {/* FM 1: Migration */}
        <div className="mb-6 p-6 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">1</span>
            Migration (1.6M Subscriber Multi-Wave)
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-red-600 dark:text-red-400 mb-1">Likely Failure Probe</p>
              <p className="text-muted-foreground">&quot;What if your gating slowed the program unnecessarily?&quot; &quot;Did you over-index on risk?&quot; &quot;Did you miss something?&quot;</p>
            </div>
            <div>
              <p className="font-semibold text-amber-600 dark:text-amber-400 mb-1">Vulnerability</p>
              <p className="text-muted-foreground">You could look overly conservative. If gating was too rigid: increased time-to-market, damaged client trust through delay, created internal resistance.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Strong Recovery Narrative</p>
              <p className="text-muted-foreground">Early in wave sequencing, we saw growing tension around velocity. If I had continued rigid enforcement without calibration, adoption would have fractured. So I monitored early-life MTTR and stabilization duration, measured wave readiness variance, and tightened only Tier-0 cross-domain gates. The gating model became dynamic, not static.</p>
            </div>
            <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
              <p className="font-semibold text-blue-600 dark:text-blue-400 mb-1">&quot;If It Had Gone Wrong&quot;</p>
              <p className="text-muted-foreground">If subsequent waves had launched without gating and caused billing errors, the downside was asymmetric and organization-wide. If gating slowed by one wave cycle unnecessarily, cost was bounded and reversible. I consciously chose the reversible downside. <strong>Principal signal: asymmetric risk reasoning.</strong></p>
            </div>
          </div>
        </div>

        {/* FM 2: Billing Recovery */}
        <div className="mb-6 p-6 rounded-xl border border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center text-sm font-bold">2</span>
            Billing Platform Recovery (Storage Failure)
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-red-600 dark:text-red-400 mb-1">Likely Failure Probe</p>
              <p className="text-muted-foreground">&quot;What if your phased restart prolonged downtime?&quot; &quot;What if executives overruled you?&quot;</p>
            </div>
            <div>
              <p className="font-semibold text-amber-600 dark:text-amber-400 mb-1">Vulnerability</p>
              <p className="text-muted-foreground">Appearing too cautious in crisis. Phased restart could have increased perceived downtime, intensified client frustration, escalated to board-level visibility.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Strong Recovery Narrative</p>
              <p className="text-muted-foreground">I mitigated this by publishing restart milestones, defining stabilization checkpoints, and communicating corruption-risk tradeoffs explicitly. Even if phased restart extended recovery by hours, it reduced corruption risk exponentially.</p>
            </div>
            <div className="p-3 bg-red-500/5 rounded-lg border border-red-500/20">
              <p className="font-semibold text-red-600 dark:text-red-400 mb-1">&quot;If It Had Gone Wrong&quot;</p>
              <p className="text-muted-foreground">If corruption had occurred due to accelerated restart: data reconciliation cost, customer credit exposure, regulatory scrutiny. Recovery would have been far longer. <strong>Principal signal: understanding blast radius depth.</strong></p>
            </div>
          </div>
        </div>

        {/* FM 3: Reliability */}
        <div className="mb-6 p-6 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">3</span>
            Reliability Transformation (130+ Services)
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-red-600 dark:text-red-400 mb-1">Likely Failure Probe</p>
              <p className="text-muted-foreground">&quot;You slowed velocity. What if product teams revolted?&quot; &quot;Did you damage morale?&quot;</p>
            </div>
            <div>
              <p className="font-semibold text-amber-600 dark:text-amber-400 mb-1">Vulnerability</p>
              <p className="text-muted-foreground">Centralized governance overreach. Initial mistake: uniform strict gating caused velocity dip, engineering resistance, roadmap friction. If I had doubled down: organizational trust erosion, passive resistance, shadow bypasses.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Strong Recovery Narrative</p>
              <p className="text-muted-foreground">I measured friction, re-tiered gating by blast radius, introduced self-serve templates. Result: incident reduction maintained, friction reduced, buy-in restored.</p>
            </div>
            <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1">&quot;If It Had Gone Wrong&quot;</p>
              <p className="text-muted-foreground">If I ignored feedback: reliability gains might have reversed, governance credibility lost. <strong>Principal signal: adaptability without abandoning standards.</strong></p>
            </div>
          </div>
        </div>

        {/* FM 4: Compliance */}
        <div className="mb-6 p-6 rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">4</span>
            Compliance Automation (~18% EBIT Impact)
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-red-600 dark:text-red-400 mb-1">Likely Failure Probe</p>
              <p className="text-muted-foreground">&quot;What if automation increased compliance risk?&quot; &quot;What if auditors rejected standardization?&quot;</p>
            </div>
            <div>
              <p className="font-semibold text-amber-600 dark:text-amber-400 mb-1">Vulnerability</p>
              <p className="text-muted-foreground">Compliance work is high-stakes. If reusable control libraries were flawed: audit findings, regulatory exposure, financial penalties.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Strong Recovery Narrative</p>
              <p className="text-muted-foreground">Mitigation: pilot with limited scope, auditor pre-review alignment, evidence validation before rollout, phased adoption. Automation was never deployed blind.</p>
            </div>
            <div className="p-3 bg-amber-500/5 rounded-lg border border-amber-500/20">
              <p className="font-semibold text-amber-600 dark:text-amber-400 mb-1">&quot;If It Had Gone Wrong&quot;</p>
              <p className="text-muted-foreground">Worst case: temporary rollback to manual process, contained audit finding. But systemic standardization reduced long-term audit variability. <strong>Principal signal: institutional durability thinking.</strong></p>
            </div>
          </div>
        </div>

        {/* FM 5: AI Copilot */}
        <div className="mb-6 p-6 rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-transparent">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">5</span>
            AI Ops Copilot + Billing Assistant
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-red-600 dark:text-red-400 mb-1">Likely Failure Probe</p>
              <p className="text-muted-foreground">&quot;What if hallucinations caused customer harm?&quot; &quot;What if adoption failed?&quot;</p>
            </div>
            <div>
              <p className="font-semibold text-amber-600 dark:text-amber-400 mb-1">Vulnerability</p>
              <p className="text-muted-foreground">AI risk in regulated environment. Incorrect AI suggestion in billing workflow, compliance breach, loss of customer trust.</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Strong Recovery Narrative</p>
              <p className="text-muted-foreground">We implemented retrieval gating, enforced confidence thresholds, required human-in-loop for high-risk actions, logged full audit trails. MVP validated signal before expansion.</p>
            </div>
            <div className="p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
              <p className="font-semibold text-purple-600 dark:text-purple-400 mb-1">&quot;If It Had Gone Wrong&quot;</p>
              <p className="text-muted-foreground">If model error rate exceeded threshold: rollback to suggestion-only mode, disable certain automation classes, no direct customer exposure. <strong>Principal signal: containment-first AI deployment.</strong></p>
            </div>
          </div>
        </div>

        {/* What This Prepares You For */}
        <div className="p-5 bg-muted/30 rounded-xl border border-border">
          <h3 className="text-lg font-bold text-foreground mb-3">What This Prepares You For</h3>
          <p className="text-sm text-muted-foreground mb-3">Interviewers try to probe:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Overconfidence", "Lack of reversibility thinking", "Poor asymmetry analysis", "Failure to adapt", "Governance rigidity", "AI recklessness", "Margin blindness"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-background rounded-full text-xs text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-foreground font-semibold">
            Across all 5 stories, you demonstrate: asymmetric downside analysis, reversibility logic,
            structural correction, risk-tier calibration, and governance adaptability. That&apos;s the Principal bar.
          </p>
        </div>
      </section>

      {/* ── Final Strategic Insight ── */}
      <section className="mb-8">
        <div className="p-8 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
          <h2 className="text-xl font-bold text-foreground mb-4">Final Strategic Insight</h2>
          <p className="text-muted-foreground mb-3">These 5 stories cover:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Execution", "Crisis", "Conflict", "Scalability", "Product Thinking", "Business Framing", "Feedback", "Mistakes", "Leadership"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-foreground font-semibold">
            That&apos;s 80&ndash;90% of Principal behavioral territory.
          </p>
        </div>
      </section>
    </InterviewPrepLayout>
  );
}
