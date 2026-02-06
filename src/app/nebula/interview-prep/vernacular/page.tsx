"use client";

/**
 * Principal TPM Vernacular - Key Terms
 * Vocabulary and signal phrases for senior-level interviews
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// Term data organized by category
const categories = [
  {
    id: "decision-judgment",
    icon: "🎯",
    title: "Decision & Judgment Language",
    color: "blue",
    terms: [
      { term: "Reframe the problem", meaning: "Shift the discussion from the obvious question to the right question" },
      { term: "Force the decision", meaning: "Make stakeholders commit when everyone wants to defer" },
      { term: "Explicit tradeoff", meaning: "Openly state what you're giving up and why" },
      { term: "Conscious tradeoff", meaning: "Deliberate, documented decision (not accidental)" },
      { term: "Kill [the design/approach]", meaning: "Reject a technically valid option for strategic reasons" },
      { term: "Scope down deliberately", meaning: "Intentionally reduce scope with clear reasoning" },
      { term: "The decision that had to be forced", meaning: "Framing that shows you drove action, not consensus theater" },
    ],
  },
  {
    id: "risk-accountability",
    icon: "⚖️",
    title: "Risk & Accountability Language",
    color: "red",
    terms: [
      { term: "Explicit risk acceptance", meaning: "Leadership signs off on specific risks, documented" },
      { term: "Documented risk acceptance", meaning: "Written acknowledgment of tradeoffs (audit-ready)" },
      { term: "Bounded risk", meaning: "Risk with defined limits and triggers" },
      { term: "Residual risk", meaning: "Risk that remains after mitigation (accepted consciously)" },
      { term: "Risk profile", meaning: "The full picture of what could go wrong and likelihood" },
      { term: "Blast radius", meaning: "Impact zone if something fails" },
      { term: "Second-order risk", meaning: "Downstream effects (reconciliation issues, audit failures)" },
      { term: "Envelope limits", meaning: "Defined thresholds where the tradeoff no longer holds" },
      { term: "Gating criteria", meaning: "Conditions that must be met before proceeding" },
    ],
  },
  {
    id: "ownership",
    icon: "🏗️",
    title: "Ownership & Accountability Language",
    color: "purple",
    terms: [
      { term: "I was accountable for", meaning: "Clear ownership statement (not \"I helped with\")" },
      { term: "Owned the [plan/decision/outcome]", meaning: "Taking full responsibility" },
      { term: "Control accountability vs automation ownership", meaning: "Separating who's liable vs who runs the system" },
      { term: "Decision rights", meaning: "Who has authority to make which calls" },
      { term: "Clear ownership boundaries", meaning: "Unambiguous responsibility assignments" },
      { term: "Operational ownership", meaning: "Actually running and maintaining the system" },
    ],
  },
  {
    id: "systems-thinking",
    icon: "📊",
    title: "Systems Thinking Language",
    color: "green",
    terms: [
      { term: "Durable [operating model/leverage/change]", meaning: "Solutions that persist without ongoing heroics" },
      { term: "Systemic improvement", meaning: "Fixing the system, not just the incident" },
      { term: "Visible governance", meaning: "Tracking mechanisms that prevent regression" },
      { term: "Metrics-driven governance", meaning: "Decisions based on data, not intuition" },
      { term: "Zero-touch acceptance rate", meaning: "Automation success without human intervention" },
      { term: "Queue health", meaning: "State of work backlogs and processing" },
      { term: "Drift detection", meaning: "Catching when systems deviate from expected state" },
      { term: "Recovery paths", meaning: "Documented ways to restore from failure" },
    ],
  },
  {
    id: "influence-leadership",
    icon: "🎪",
    title: "Influence & Leadership Language",
    color: "amber",
    terms: [
      { term: "Influence without authority", meaning: "Getting things done across orgs you don't manage" },
      { term: "Cross-org alignment", meaning: "Getting multiple teams to agree" },
      { term: "Stakeholder alignment", meaning: "Ensuring all parties understand and support" },
      { term: "Force multiplier", meaning: "Something that amplifies team capacity" },
      { term: "Consensus theater", meaning: "Fake agreement without real commitment (avoid this)" },
      { term: "Policy fight → executable model", meaning: "Converting disagreement into action" },
      { term: "Aligning incentives", meaning: "Making it in everyone's interest to cooperate" },
    ],
  },
  {
    id: "business-scale",
    icon: "💼",
    title: "Business & Scale Language",
    color: "cyan",
    terms: [
      { term: "Revenue-critical systems", meaning: "Systems where failure = money loss" },
      { term: "Scale economics", meaning: "Cost/benefit changes at different volumes" },
      { term: "Workload envelope", meaning: "The operating parameters for a system" },
      { term: "Commercial competitive", meaning: "Viable in the market, not just technically sound" },
      { term: "Customer value", meaning: "What actually matters to the customer" },
      { term: "Internal comfort", meaning: "What makes your team feel safe (often wrong optimization)" },
      { term: "Error-budget burn", meaning: "Consuming allowable failure margin" },
    ],
  },
  {
    id: "technical-judgment",
    icon: "🔧",
    title: "Technical Judgment Language",
    color: "slate",
    terms: [
      { term: "State corruption", meaning: "Data integrity issues from failed operations" },
      { term: "Rollback loops", meaning: "Repeated undo/redo cycles extending outages" },
      { term: "Phased approach", meaning: "Staged execution with checkpoints" },
      { term: "Sequential vs parallel", meaning: "Controlled execution order" },
      { term: "Checkpoint-based recovery", meaning: "Ability to resume from known good states" },
      { term: "Architectural purity", meaning: "Theoretically \"correct\" design (sometimes wrong answer)" },
      { term: "Gold-standard architecture", meaning: "Proven but potentially over-engineered solution" },
    ],
  },
  {
    id: "compliance-audit",
    icon: "🛡️",
    title: "Compliance & Audit Language",
    color: "indigo",
    terms: [
      { term: "Control evidence pipeline", meaning: "Automated proof collection for audits" },
      { term: "Audit commitments", meaning: "Contractual obligations around compliance" },
      { term: "SOC audit scope", meaning: "What's covered by compliance review" },
      { term: "False confidence", meaning: "Thinking you're covered when you're not" },
      { term: "Remediation capacity", meaning: "Ability to fix issues that surface" },
      { term: "Evidence source stability", meaning: "Reliable data collection for proof" },
      { term: "Validation pass rate", meaning: "How often automated checks succeed" },
    ],
  },
];

// Signal phrases that interviewers listen for
const signalPhrases = [
  { phrase: "I made the call to...", signal: "You take decisions, not just facilitate" },
  { phrase: "I explicitly rejected...", signal: "You have conviction and can say no" },
  { phrase: "We documented the risks and...", signal: "You create audit trails" },
  { phrase: "That was a conscious tradeoff", signal: "You think deliberately, not reactively" },
  { phrase: "The higher risk would have been...", signal: "You see second-order consequences" },
  { phrase: "We bounded that risk with...", signal: "You manage, not just accept risk" },
  { phrase: "Judgment, not just execution", signal: "Principal-level framing" },
  { phrase: "Durable operating model", signal: "Long-term thinking, not heroics" },
  { phrase: "Landing the result", signal: "End-to-end ownership" },
];

// Extracted phrases organized by category (from actual stories)
const storyPhrases = [
  {
    id: "decision-authority",
    title: "Decision & Authority Language",
    subtitle: "Use these to signal ownership without overstating title power",
    color: "blue",
    phrases: [
      "I reframed the decision from ___ to ___",
      "I forced an explicit decision on ___",
      "Leadership ratified the approach; I owned the framing and execution",
      "This could not be solved by mandate",
      "I made the go / no-go call based on ___",
      "We documented explicit risk acceptance",
      "I deliberately rejected ___ in favor of ___",
      "I separated permission from accountability",
      "I converted ambiguity into a bounded decision",
    ],
  },
  {
    id: "risk-tradeoff",
    title: "Risk & Tradeoff Language",
    subtitle: "This is core Principal TPM signal",
    color: "red",
    phrases: [
      "The dominant failure mode was ___",
      "We optimized for total outage duration, not the next step",
      "This reduced second-order risk",
      "We accepted near-term ___ in exchange for ___",
      "The risk was not eliminated — it was bounded",
      "We avoided false confidence",
      "We traded architectural purity for business viability",
      "The alternative optimized for optics, not outcomes",
      "We chose integrity over speed",
    ],
  },
  {
    id: "scope-sequencing",
    title: "Scope & Sequencing Language",
    subtitle: "Signals program design maturity",
    color: "green",
    phrases: [
      "Phased rollout with explicit envelope limits",
      "Sequencing reduced blast radius",
      "We gated expansion on validated signals",
      "We deferred edge cases deliberately",
      "We rejected big-bang execution",
      "This was sequencing, not compromise",
      "We expanded scope only after remediation capacity existed",
    ],
  },
  {
    id: "ownership-operating",
    title: "Ownership & Operating Model Language",
    subtitle: "Shows you understand org mechanics",
    color: "purple",
    phrases: [
      "Ownership boundaries were explicit",
      "Control accountability remained with ___",
      "Automation surfaced evidence; it did not shift liability",
      "This prevented responsibility diffusion",
      "We preserved operational autonomy while aligning outcomes",
      "This changed incentives, not just process",
      "We separated signal generation from decision authority",
    ],
  },
  {
    id: "governance-durability",
    title: "Governance & Durability Language",
    subtitle: "Distinguishes leaders from firefighters",
    color: "cyan",
    phrases: [
      "This became part of the operating cadence",
      "We institutionalized the decision",
      "We prevented regression through governance",
      "This was decision infrastructure, not reporting",
      "We replaced heroics with predictable outcomes",
      "We made the system safer by design",
      "Success was measured by ___ staying within bounds",
    ],
  },
  {
    id: "failure-learning",
    title: "Failure & Learning Language",
    subtitle: "Critical for senior interviews",
    color: "amber",
    phrases: [
      "This was a visible failure, not a hidden one",
      "We treated this as a system failure, not a people failure",
      "The incident exposed missing ownership",
      "We fixed the incentive, not just the symptom",
      "Credits reduced financial impact, not accountability",
      "We accepted the miss to preserve long-term trust",
    ],
  },
];

// Principal-level framing patterns
const framingPatterns = [
  "The real decision wasn't ___; it was ___",
  "The hard part wasn't ___; it was ___",
  "A less-senior TPM would have ___; that would have increased ___ risk",
  "This looked like a ___ problem, but it was actually a ___ problem",
  "The system was optimized for ___; we needed it to optimize for ___",
];

// Color mappings for categories
const colorStyles: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-500/5", border: "border-blue-500/30", text: "text-blue-600 dark:text-blue-400" },
  red: { bg: "bg-red-500/5", border: "border-red-500/30", text: "text-red-600 dark:text-red-400" },
  purple: { bg: "bg-purple-500/5", border: "border-purple-500/30", text: "text-purple-600 dark:text-purple-400" },
  green: { bg: "bg-green-500/5", border: "border-green-500/30", text: "text-green-600 dark:text-green-400" },
  amber: { bg: "bg-amber-500/5", border: "border-amber-500/30", text: "text-amber-600 dark:text-amber-400" },
  cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/30", text: "text-cyan-600 dark:text-cyan-400" },
  slate: { bg: "bg-slate-500/5", border: "border-slate-500/30", text: "text-slate-600 dark:text-slate-400" },
  indigo: { bg: "bg-indigo-500/5", border: "border-indigo-500/30", text: "text-indigo-600 dark:text-indigo-400" },
};

export default function VernacularPage() {
  return (
    <InterviewPrepLayout
      title="Principal TPM Vernacular"
      description="Key terms and signal phrases for senior-level interviews"
      currentSection="vernacular"
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
            Reference
          </span>
          <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Principal Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Principal TPM Vernacular</h1>
        <p className="text-muted-foreground">
          Key terms and signal phrases that demonstrate senior-level judgment and decision-making vocabulary.
          These are the words interviewers listen for to calibrate seniority.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-8 mb-12">
        {categories.map((category) => {
          const colors = colorStyles[category.color];
          return (
            <section key={category.id} id={category.id}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl font-semibold text-foreground">{category.title}</h2>
              </div>

              <div className={`rounded-xl border ${colors.border} overflow-hidden`}>
                <table className="w-full">
                  <thead>
                    <tr className={`${colors.bg}`}>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-foreground w-[40%]">Term</th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {category.terms.map((item, index) => (
                      <tr key={index} className="hover:bg-muted/30 transition-colors">
                        <td className={`px-4 py-3 font-medium ${colors.text}`}>{item.term}</td>
                        <td className="px-4 py-3 text-muted-foreground text-sm">{item.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>

      {/* Signal Phrases Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🎯</span>
          <h2 className="text-xl font-semibold text-foreground">Signal Phrases (What Interviewers Listen For)</h2>
        </div>

        <div className="rounded-xl border border-primary/30 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left px-4 py-3 text-sm font-semibold text-foreground w-[45%]">Phrase</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-foreground">What It Signals</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {signalPhrases.map((item, index) => (
                <tr key={index} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-primary">&quot;{item.phrase}&quot;</td>
                  <td className="px-4 py-3 text-muted-foreground text-sm">{item.signal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Divider */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full">
          Extracted from Your Stories
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Story Phrases Categories */}
      <div className="space-y-8 mb-12">
        {storyPhrases.map((category) => {
          const colors = colorStyles[category.color];
          return (
            <section key={category.id}>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.subtitle}</p>
              </div>

              <div className={`p-5 rounded-xl border ${colors.border} ${colors.bg}`}>
                <ul className="space-y-2">
                  {category.phrases.map((phrase, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={`mt-1 ${colors.text}`}>•</span>
                      <span className="text-foreground">&quot;{phrase}&quot;</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>

      {/* Principal-Level Framing Patterns */}
      <section className="mb-10">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            Principal-Level Framing Patterns
          </h3>
          <p className="text-sm text-muted-foreground">These sentence structures matter more than any single word. Memorize them.</p>
        </div>

        <div className="p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/30">
          <ul className="space-y-3">
            {framingPatterns.map((pattern, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-foreground font-medium">&quot;{pattern}&quot;</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pro Tip */}
      <section className="mb-10 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <span className="text-amber-500">💡</span>
          Pro Tip
        </h3>
        <p className="text-muted-foreground">
          These terms should sound <strong className="text-foreground">natural, not forced</strong>.
          Practice weaving them into your delivery so they feel like your actual vocabulary, not interview-speak.
          The goal is fluency, not recitation.
        </p>
      </section>

      {/* Quick Reference */}
      <section className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Reference by Story</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Incident Stories</div>
            <div className="text-sm text-muted-foreground">
              Blast radius, state corruption, phased approach, recovery paths, second-order risk
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Influence Stories</div>
            <div className="text-sm text-muted-foreground">
              Influence without authority, cross-org alignment, force multiplier, aligning incentives
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Tradeoff Stories</div>
            <div className="text-sm text-muted-foreground">
              Explicit tradeoff, conscious tradeoff, bounded risk, envelope limits, scale economics
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Compliance Stories</div>
            <div className="text-sm text-muted-foreground">
              Control evidence pipeline, audit commitments, documented risk acceptance, validation pass rate
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to Interview Prep
        </Link>
        <Link
          href="/nebula/interview-prep/tell-me-about-yourself"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Tell Me About Yourself →
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
