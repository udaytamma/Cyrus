"use client";

/**
 * Decision Memo Template - Principal TPM Standard
 * Gold-standard 2-3 page decision-forcing artifact for interviews
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function DecisionMemoPage() {
  return (
    <InterviewPrepLayout
      title="Decision Memo Template"
      description="Gold-standard decision-forcing artifact for Principal TPM interviews"
      currentSection="decision-memo"
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
          <span className="px-2.5 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-medium rounded-full">
            Template
          </span>
          <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Principal Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Decision Memo &mdash; Principal TPM Standard</h1>
        <p className="text-muted-foreground">
          This is <strong className="text-foreground">not a PRD</strong>, <strong className="text-foreground">not a design doc</strong>, and <strong className="text-foreground">not a slide deck</strong>.
          It is a <strong className="text-foreground">decision-forcing artifact</strong>. If you can write this cleanly, you will outperform verbally stronger but less structured candidates.
        </p>
      </div>

      {/* Meta Info */}
      <div className="mb-10 p-5 bg-muted/30 rounded-xl border border-border">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-semibold text-foreground mb-1">Audience</div>
            <div className="text-muted-foreground">Director / VP / Eng Leadership</div>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-1">Goal</div>
            <div className="text-muted-foreground">Force a decision under real constraints</div>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-1">Length</div>
            <div className="text-muted-foreground">2&ndash;3 pages (~900&ndash;1,300 words)</div>
          </div>
        </div>
      </div>

      {/* Section 1: Executive Summary */}
      <section className="mb-10" id="executive-summary">
        <div className="mb-4 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/30">
          <h2 className="text-xl font-bold text-foreground">1. Executive Summary</h2>
          <p className="text-sm text-muted-foreground mt-1">&frac12; page &mdash; write last</p>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-blue-500/5 rounded-xl border border-blue-500/20">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Purpose</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Enable a busy exec to understand and decide in 90 seconds.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Include</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x2022;</span>The problem (one sentence)</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x2022;</span>Why it matters <em>now</em></li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x2022;</span>The decision being requested</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x2022;</span>The recommended option</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x2022;</span>Key risks and mitigations</li>
            </ul>
          </div>
          <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Rules</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>&#x2022; No background</li>
              <li>&#x2022; No hedging</li>
              <li>&#x2022; No marketing language</li>
            </ul>
          </div>
          <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2 text-sm">Litmus Test</h3>
            <p className="text-foreground text-sm italic">
              An exec could forward this alone and the recipient would know what to do.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Problem Statement & Context */}
      <section className="mb-10" id="problem-statement">
        <div className="mb-4 p-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl border border-purple-500/30">
          <h2 className="text-xl font-bold text-foreground">2. Problem Statement &amp; Context</h2>
          <p className="text-sm text-muted-foreground mt-1">&frac12; page</p>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-purple-500/5 rounded-xl border border-purple-500/20">
            <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Purpose</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Establish <em>why this is worth deciding</em>.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Cover</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x2022;</span>What is broken or becoming unsustainable</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x2022;</span>Who is impacted (customers, teams, business)</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x2022;</span>Concrete symptoms (metrics, incidents, delays, costs)</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x2022;</span>What happens if nothing is done in 12&ndash;18 months</li>
            </ul>
          </div>
          <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Avoid</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>&#x2022; Company history</li>
              <li>&#x2022; Vision statements</li>
              <li>&#x2022; Long narratives</li>
            </ul>
          </div>
          <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2 text-sm">Key Question This Section Answers</h3>
            <p className="text-foreground text-sm italic">
              &quot;Why are we talking about this <em>now</em>?&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Constraints & Non-Goals */}
      <section className="mb-10" id="constraints">
        <div className="mb-4 p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border border-green-500/30">
          <h2 className="text-xl font-bold text-foreground">3. Constraints &amp; Non-Goals</h2>
          <p className="text-sm text-muted-foreground mt-1">&frac14;&ndash;&frac12; page</p>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-green-500/5 rounded-xl border border-green-500/20">
            <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Purpose</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Prove realism and judgment.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Explicitly List</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#x2022;</span>Technical constraints (legacy systems, data quality, scale)</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#x2022;</span>Organizational constraints (team capacity, ownership)</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#x2022;</span>Time constraints (deadlines, dependencies)</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#x2022;</span>Regulatory / security constraints (if applicable)</li>
            </ul>
          </div>
          <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3">Non-Goals (Critical)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>What this decision does <em>not</em> attempt to solve</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>What is intentionally deferred</li>
            </ul>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/30">
            <p className="text-foreground text-sm font-semibold">
              This section differentiates seniors from principals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Options Considered */}
      <section className="mb-10" id="options-considered">
        <div className="mb-4 p-4 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold text-foreground">4. Options Considered</h2>
          <p className="text-sm text-muted-foreground mt-1">&frac34; page</p>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-amber-500/5 rounded-xl border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Purpose</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Show tradeoff thinking, not solution bias.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">For Each Option (Usually 2&ndash;3)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Summary</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Pros</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Cons</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Cost / effort</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Risk profile</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Who benefits / who pays the cost</li>
            </ul>
          </div>
          <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Rules</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>&#x2022; Do not strawman alternatives</li>
              <li>&#x2022; At least one option should be &quot;tempting but wrong&quot;</li>
              <li>&#x2022; Make tradeoffs explicit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Recommendation & Rationale */}
      <section className="mb-10" id="recommendation">
        <div className="mb-4 p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/30">
          <h2 className="text-xl font-bold text-foreground">5. Recommendation &amp; Rationale</h2>
          <p className="text-sm text-muted-foreground mt-1">&frac12; page</p>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-cyan-500/5 rounded-xl border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Purpose</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Force the decision.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Include</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>Chosen option</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>Why it wins <em>given constraints</em></li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>Why now vs later</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>What success looks like (high-level KPIs)</li>
            </ul>
          </div>
          <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Avoid</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>&#x2022; &quot;This is just a starting point&quot;</li>
              <li>&#x2022; Over-qualification</li>
            </ul>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/30">
            <p className="text-foreground text-sm font-semibold">
              This should read like someone comfortable being held accountable.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Risks & Mitigations */}
      <section className="mb-10" id="risks">
        <div className="mb-4 p-4 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/30">
          <h2 className="text-xl font-bold text-foreground">6. Risks &amp; Mitigations</h2>
          <p className="text-sm text-muted-foreground mt-1">&frac14;&ndash;&frac12; page</p>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-red-500/5 rounded-xl border border-red-500/20">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Purpose</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Demonstrate maturity, not fear.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">For Each Major Risk</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x2022;</span>Risk description</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x2022;</span>Likelihood / impact (qualitative)</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x2022;</span>Mitigation strategy</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x2022;</span>Trigger to revisit decision</li>
            </ul>
          </div>
          <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Avoid</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>&#x2022; Listing trivial risks</li>
              <li>&#x2022; Over-engineering mitigations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Execution Plan */}
      <section className="mb-10" id="execution-plan">
        <div className="mb-4 p-4 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-xl border border-emerald-500/30">
          <h2 className="text-xl font-bold text-foreground">7. Execution Plan (High-Level)</h2>
          <p className="text-sm text-muted-foreground mt-1">&frac14;&ndash;&frac12; page</p>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
            <h3 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Purpose</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Show this is executable, not theoretical.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Include</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2022;</span>Phases or milestones</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2022;</span>Key owners / teams involved</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2022;</span>Major dependencies</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2022;</span>Decision checkpoints</li>
            </ul>
          </div>
          <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Do Not Include</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>&#x2022; Detailed project plans</li>
              <li>&#x2022; Task-level breakdowns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8: Open Questions */}
      <section className="mb-10" id="open-questions">
        <div className="mb-4 p-4 bg-gradient-to-r from-slate-500/10 to-transparent rounded-xl border border-slate-500/30">
          <h2 className="text-xl font-bold text-foreground">8. Open Questions &amp; Follow-Ups</h2>
          <p className="text-sm text-muted-foreground mt-1">Optional</p>
        </div>
        <div className="p-5 bg-background rounded-xl border border-border">
          <p className="text-muted-foreground text-sm mb-3">Use only if needed. Include:</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-slate-500 mt-0.5">&#x2022;</span>What information would change the decision</li>
            <li className="flex items-start gap-2"><span className="text-slate-500 mt-0.5">&#x2022;</span>What needs validation post-approval</li>
          </ul>
        </div>
      </section>

      {/* Formatting Rules */}
      <section className="mb-10" id="formatting-rules">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-xl font-bold text-primary px-4">
            Formatting Rules (Non-Negotiable)
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        <div className="p-6 bg-primary/5 rounded-xl border border-primary/30">
          <ul className="space-y-2 text-sm text-foreground">
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#x2022;</span>Clear section headers</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#x2022;</span>Short paragraphs</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#x2022;</span>Bulleted lists where appropriate</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#x2022;</span>No jargon without context</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-0.5">&#x2022;</span>Neutral, confident tone</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-primary/20 space-y-2">
            <p className="text-muted-foreground text-sm italic">If it feels like a blog post, it&apos;s wrong.</p>
            <p className="text-muted-foreground text-sm italic">If it feels like a legal document, it&apos;s wrong.</p>
          </div>
        </div>
      </section>

      {/* How This Is Evaluated */}
      <section className="mb-10" id="evaluation">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-amber-600 dark:text-amber-400 px-4">
            How This Is Evaluated in Interviews
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </div>
        <div className="p-6 bg-amber-500/5 rounded-xl border border-amber-500/30">
          <p className="text-muted-foreground text-sm mb-4">Interviewers look for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: "Decision clarity", desc: "Can you articulate a clear recommendation?" },
              { label: "Constraint awareness", desc: "Do you understand real-world limitations?" },
              { label: "Tradeoff honesty", desc: "Do you acknowledge what you're giving up?" },
              { label: "Executive empathy", desc: "Can busy leaders consume and act on this?" },
              { label: "Bias for action", desc: "Does this drive a decision, not more discussion?" },
            ].map((item) => (
              <div key={item.label} className="p-3 bg-background rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-amber-500/20">
            <p className="text-foreground text-sm">
              They do <strong>not</strong> expect perfection. They expect <strong className="text-primary">judgment</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* How You Should Use This */}
      <section className="mb-10" id="how-to-use">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 px-4">
            How You Should Use This
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>

        <div className="space-y-6">
          {/* Step 1: Write Memos */}
          <div className="p-5 bg-cyan-500/5 rounded-xl border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-sm font-bold">1</span>
              Write 2&ndash;3 Memos Based On
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>A real past decision</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>A hypothetical platform decision</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>A take-home-style ambiguous problem</li>
            </ul>
          </div>

          {/* Step 2: Practice */}
          <div className="p-5 bg-cyan-500/5 rounded-xl border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-sm font-bold">2</span>
              Practice
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>Defending it verbally</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>Accepting critique</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>Revising quickly</li>
            </ul>
          </div>

          {/* Step 3: Reuse */}
          <div className="p-5 bg-cyan-500/5 rounded-xl border border-cyan-500/20">
            <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-sm font-bold">3</span>
              Reuse These
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>In take-homes</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>In interviews</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x2022;</span>As thinking scaffolds</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Straight Talk */}
      <section className="mb-10" id="final">
        <div className="p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
          <h2 className="text-xl font-bold text-foreground mb-4">Final Straight Talk</h2>
          <div className="space-y-3 text-sm text-foreground">
            <p>
              If you can speak crisply <strong>and</strong> write like this under time pressure, you will outperform many candidates with &quot;bigger names&quot; on their resume.
            </p>
            <p className="text-primary font-semibold">
              This is one of the highest leverage Principal TPM prep artifacts you can build.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep/more-stories"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; More STAR Stories
        </Link>
        <Link
          href="/nebula/interview-prep/why-us-template"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Why Us Template &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
