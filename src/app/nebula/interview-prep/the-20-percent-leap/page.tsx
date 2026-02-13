"use client";

/**
 * The 20% Leap - Gap Analysis for Principal TPM Interview Coverage
 *
 * Your 5 anchor stories cover ~80% of behavioral territory.
 * This page maps the remaining 20% that separates "strong candidate"
 * from "Principal-level hire" at Mag7 and Stripe-tier companies.
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// ─── Data ────────────────────────────────────────────────────────────────────

const gapCategories = [
  {
    id: "product-depth",
    number: "1",
    title: "Product Depth / Customer Insight",
    risk: "Your stories are strong operationally and governance-heavy. Some interviewers may probe: \"Are you a platform executor or product shaper?\"",
    color: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30", badge: "bg-blue-500" },
    questions: [
      "How do you decide what not to build?",
      "Tell me about a time you killed a project.",
      "How do you validate product-market fit?",
      "How do you prioritize competing customer requests?",
      "How do you think about pricing and packaging?",
      "How do you measure customer adoption vs feature release?",
    ],
  },
  {
    id: "technical-depth",
    number: "2",
    title: "Technical Depth Probing",
    risk: "If you stay high-level, you may look TPM-heavy and light on technical fluency.",
    color: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/30", badge: "bg-amber-500" },
    questions: [
      "Walk me through the architecture of the AI copilot.",
      "How did you prevent configuration drift across platforms?",
      "What were the hardest technical tradeoffs?",
      "What would break first under 10x scale?",
      "Explain your error-budget-driven automation model.",
    ],
  },
  {
    id: "strategy-portfolio",
    number: "3",
    title: "Strategy &amp; Portfolio-Level",
    risk: "Your stories show execution strength. They may test strategic horizon thinking.",
    color: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/30", badge: "bg-purple-500" },
    questions: [
      "How do you decide where to invest at portfolio level?",
      "How do you sunset legacy systems?",
      "How do you align multi-year roadmaps?",
      "How do you think about platform vs feature investment?",
    ],
  },
  {
    id: "org-design",
    number: "4",
    title: "Organizational Design",
    risk: "You&apos;ve shown system upgrades. But they may probe broader org philosophy.",
    color: { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/30", badge: "bg-emerald-500" },
    questions: [
      "How would you restructure a struggling org?",
      "When should you centralize vs decentralize?",
      "How do you scale a TPM org?",
      "What does a healthy engineering culture look like?",
    ],
  },
  {
    id: "leadership-philosophy",
    number: "5",
    title: "Pure Leadership Philosophy",
    risk: "These test maturity, not stories. Abstract calibration checks.",
    color: { bg: "bg-rose-500/10", text: "text-rose-600 dark:text-rose-400", border: "border-rose-500/30", badge: "bg-rose-500" },
    questions: [
      "What does leadership mean to you?",
      "What are your blind spots?",
      "Why do you want to be Principal?",
      "What differentiates great from good TPMs?",
      "When should you say no to executives?",
    ],
  },
  {
    id: "data-metrics",
    number: "6",
    title: "Data &amp; Metrics Depth",
    risk: "You have material here but must articulate clearly.",
    color: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/30", badge: "bg-cyan-500" },
    questions: [
      "How do you design KPIs?",
      "How do you prevent metric gaming?",
      "What&apos;s a leading vs lagging indicator?",
      "How do you know your reliability investment paid off?",
    ],
  },
];

const supplementalStories = [
  {
    id: "kill-decision",
    label: "A",
    title: "A \"Kill Decision\" Story",
    description: "Where you stopped something, saved cost, avoided tech debt, or protected margin.",
    color: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/30" },
    bullets: [
      "You identified a misaligned initiative early",
      "You quantified the cost of continuing vs stopping",
      "You navigated the political difficulty of killing something others championed",
      "You redirected resources to higher-ROI work",
    ],
  },
  {
    id: "product-prioritization",
    label: "B",
    title: "A Product Prioritization Story",
    description: "Competing customer demands, economic tradeoffs, feature cuts, or strategic alignment decisions.",
    color: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/30" },
    bullets: [
      "Multiple stakeholders with conflicting priorities",
      "You applied a framework (RICE, weighted scoring, opportunity cost)",
      "You made a defensible cut and communicated the tradeoff",
      "The outcome validated the prioritization logic",
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function The20PercentLeapPage() {
  return (
    <InterviewPrepLayout
      title="The 20% Leap"
      description="Gap analysis: the 6 question categories your 5 anchor stories don't fully cover"
      currentSection="the-20-percent-leap"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Interview Prep
      </Link>

      {/* ── Header ── */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Gap Analysis
          </span>
          <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
            The Missing 20%
          </span>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
            Level Differentiator
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">The 20% Leap</h1>
        <p className="text-muted-foreground leading-relaxed">
          Your 5 anchor stories cover ~80% of behavioral, execution, leadership, conflict, scaling,
          and crisis territory. The remaining ~20% usually determines level &mdash; because many
          candidates can run complex programs. Fewer can shape product investment strategy, kill
          misaligned initiatives, think 2&ndash;3 years out, and balance platform vs feature ROI.
        </p>
      </div>

      {/* ── Quick Nav ── */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Page Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a href="#gap-categories" className="p-3 bg-background rounded-lg border border-red-500/30 hover:border-red-500/50 transition-colors">
            <div className="font-medium text-foreground">6 Gap Categories</div>
            <div className="text-sm text-muted-foreground">The missing question types</div>
          </a>
          <a href="#portfolio-gap" className="p-3 bg-background rounded-lg border border-amber-500/30 hover:border-amber-500/50 transition-colors">
            <div className="font-medium text-foreground">The Real Gap</div>
            <div className="text-sm text-muted-foreground">What&apos;s lighter in your portfolio</div>
          </a>
          <a href="#honest-calibration" className="p-3 bg-background rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <div className="font-medium text-foreground">Honest Calibration</div>
            <div className="text-sm text-muted-foreground">Why this 20% determines level</div>
          </a>
          <a href="#supplemental-stories" className="p-3 bg-background rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
            <div className="font-medium text-foreground">2 Supplemental Stories</div>
            <div className="text-sm text-muted-foreground">Kill decision + product prioritization</div>
          </a>
          <a href="#coverage-upgrade" className="p-3 bg-background rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors">
            <div className="font-medium text-foreground">Coverage Upgrade</div>
            <div className="text-sm text-muted-foreground">From 80% to ~95%</div>
          </a>
          <a href="#card-vault-kill" className="p-3 bg-background rounded-lg border border-primary/30 hover:border-primary/50 transition-colors">
            <div className="font-medium text-foreground">Story A: Card Vault Kill</div>
            <div className="text-sm text-muted-foreground">Gold-plating kill + right-sizing</div>
          </a>
          <a href="#hostile-panel" className="p-3 bg-background rounded-lg border border-red-500/30 hover:border-red-500/50 transition-colors">
            <div className="font-medium text-foreground">Hostile Architecture Panel</div>
            <div className="text-sm text-muted-foreground">8 aggressive probes + answers</div>
          </a>
          <a href="#sixty-second" className="p-3 bg-background rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
            <div className="font-medium text-foreground">60-Second Version</div>
            <div className="text-sm text-muted-foreground">Hyper-crisp delivery</div>
          </a>
        </div>
      </div>

      {/* ── I. The 6 Missing Categories ── */}
      <section id="gap-categories" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-3">The Missing 20% &mdash; 6 Question Categories</h2>
        <p className="text-muted-foreground mb-8">
          Each category below represents a question type that your 5 anchor stories don&apos;t fully cover.
          The example questions show what interviewers actually ask. The risk callout shows how this gap
          might surface in your specific case.
        </p>

        <div className="space-y-8">
          {gapCategories.map((cat) => (
            <div
              key={cat.id}
              id={cat.id}
              className={`rounded-xl border ${cat.color.border} overflow-hidden`}
            >
              {/* Category Header */}
              <div className={`${cat.color.bg} px-6 py-4 flex items-center gap-4`}>
                <span className={`w-8 h-8 rounded-lg ${cat.color.badge} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {cat.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground" dangerouslySetInnerHTML={{ __html: cat.title }} />
              </div>

              <div className="p-6 space-y-5">
                {/* Example Questions */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">
                    Example Questions
                  </div>
                  <ul className="space-y-2">
                    {cat.questions.map((q, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="w-5 h-5 rounded bg-muted flex items-center justify-center text-xs text-muted-foreground flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-foreground" dangerouslySetInnerHTML={{ __html: `&ldquo;${q}&rdquo;` }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risk Callout */}
                <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                  <div className="flex items-start gap-2.5">
                    <span className="text-amber-500 text-sm flex-shrink-0 mt-0.5">&#9888;</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400">Risk for you</span>
                      <p className="text-sm text-foreground mt-1" dangerouslySetInnerHTML={{ __html: cat.risk }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── II. The Real Gap ── */}
      <section id="portfolio-gap" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-6">The Real Gap in Your Story Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Strengths */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-xs">&#10003;</span>
              Your 5 Anchors Are
            </h3>
            <ul className="space-y-2.5">
              {["Risk-heavy", "Governance-heavy", "Operationally strong", "Business-framed"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Gaps */}
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs">!</span>
              What&apos;s Lighter
            </h3>
            <ul className="space-y-2.5">
              {[
                "Customer discovery narrative",
                "Product tradeoff narrative unrelated to reliability",
                "Portfolio-level capital allocation story",
                "\"Killed a project\" story",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── III. Honest Calibration ── */}
      <section id="honest-calibration" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-6">Honest Calibration</h2>

        <div className="p-6 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent">
          <p className="text-foreground mb-5 leading-relaxed">
            At a strong non-Mag7 tech company (Stripe-tier, Snowflake-tier, Datadog-tier), the
            missing 20% often determines level. Because many candidates can run complex programs.
          </p>

          <div className="p-5 bg-background/60 rounded-lg border border-border mb-5">
            <div className="text-sm font-semibold text-muted-foreground mb-3">Fewer candidates can:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Shape product investment strategy",
                "Kill misaligned initiatives",
                "Think 2\u20133 years out",
                "Balance platform vs feature ROI",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span className="w-5 h-5 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 text-xs flex-shrink-0">&#9733;</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground italic">
            This is exactly the gap between &ldquo;strong Senior TPM&rdquo; and &ldquo;clear Principal hire.&rdquo;
          </p>
        </div>
      </section>

      {/* ── IV. 2 Supplemental Stories ── */}
      <section id="supplemental-stories" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-3">2 Supplemental Stories to Add</h2>
        <p className="text-muted-foreground mb-8">
          With these 2 stories added to your existing 5 anchors, you cover ~95% of question territory.
        </p>

        <div className="space-y-6">
          {supplementalStories.map((story) => (
            <div
              key={story.id}
              id={story.id}
              className={`rounded-xl border ${story.color.border} overflow-hidden`}
            >
              {/* Story Header */}
              <div className={`${story.color.bg} px-6 py-4`}>
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full border-2 ${story.color.border} ${story.color.text} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                    {story.label}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                    <p className="text-sm text-muted-foreground">{story.description}</p>
                  </div>
                </div>
              </div>

              {/* Story Elements */}
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">
                  What Your Story Should Demonstrate
                </div>
                <ul className="space-y-2.5">
                  {story.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className={`w-5 h-5 rounded ${story.color.bg} ${story.color.text} flex items-center justify-center text-xs flex-shrink-0 mt-0.5`}>
                        {i + 1}
                      </span>
                      <span className="text-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── V. Coverage Upgrade ── */}
      <section id="coverage-upgrade" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-6">Coverage Upgrade: 80% &rarr; ~95%</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Question Type</th>
                <th className="text-center py-3 px-2 font-semibold text-foreground">Before</th>
                <th className="text-center py-3 px-2 font-semibold text-foreground">After</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Covered By</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Behavioral / Leadership", before: true, after: true, by: "5 Anchors" },
                { type: "Execution / Crisis", before: true, after: true, by: "5 Anchors" },
                { type: "Conflict / Influence", before: true, after: true, by: "5 Anchors" },
                { type: "Scaling / Reliability", before: true, after: true, by: "5 Anchors" },
                { type: "Product Depth", before: false, after: true, by: "Story B (Product Prioritization)" },
                { type: "Kill Decisions", before: false, after: true, by: "Story A (Kill Decision)" },
                { type: "Technical Depth", before: "partial", after: true, by: "5 Anchors + deeper prep" },
                { type: "Strategy / Portfolio", before: false, after: "partial", by: "Story A + framing practice" },
                { type: "Org Design", before: false, after: "partial", by: "Requires standalone prep" },
                { type: "Leadership Philosophy", before: false, after: "partial", by: "Requires standalone prep" },
                { type: "Data / Metrics", before: "partial", after: true, by: "5 Anchors + articulation" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-4 text-foreground font-medium">{row.type}</td>
                  <td className="py-2.5 px-2 text-center">
                    {row.before === true ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 text-xs">&#10003;</span>
                    ) : row.before === "partial" ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10 text-amber-500 text-xs">~</span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500 text-xs">&#10007;</span>
                    )}
                  </td>
                  <td className="py-2.5 px-2 text-center">
                    {row.after === true ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 text-xs">&#10003;</span>
                    ) : row.after === "partial" ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/10 text-amber-500 text-xs">~</span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500 text-xs">&#10007;</span>
                    )}
                  </td>
                  <td className="py-2.5 px-4 text-muted-foreground text-xs">{row.by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Remaining ~5% */}
        <div className="mt-6 p-5 bg-muted/30 rounded-lg border border-border">
          <div className="text-sm font-semibold text-foreground mb-2">The Remaining ~5%</div>
          <p className="text-sm text-muted-foreground">
            Org Design and Leadership Philosophy are abstract calibration questions that can&apos;t
            be fully covered by stories alone. These require standalone preparation: forming concise
            opinions on centralization vs decentralization, engineering culture, TPM org scaling,
            and your personal leadership framework. They test maturity and judgment, not narratives.
          </p>
        </div>
      </section>

      {/* ── VI. Story A: Card Vault Gold-Plating Kill ── */}
      <section id="card-vault-kill" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Story A: Card Vault &mdash; Gold-Plating Kill + Architectural Right-Sizing
        </h2>
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Kill Decision</span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">Product Thinking</span>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">Margin Protection</span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">Architecture Depth</span>
        </div>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          This is not just a kill story. This is a <strong className="text-foreground">Gold-Plating Kill + Architectural
          Right-Sizing + Margin Protection</strong> story. It fills the missing 20% because it demonstrates
          product thinking, commercial awareness, compliance nuance, architecture depth, willingness to
          kill over-engineering, structured risk acceptance, and envelope-based scaling.
        </p>

        {/* Principal-Level Explanation */}
        <div className="mb-8 rounded-xl border border-primary/30 overflow-hidden">
          <div className="bg-primary/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
            <h3 className="text-lg font-semibold text-foreground">Principal-Level Explanation</h3>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-sm text-foreground leading-relaxed">
              This is a classic &ldquo;Right-Size vs Gold-Plate&rdquo; decision under commercial pressure.
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Framework: Workload Envelope &ndash; Compliance Surface &ndash; Economic Viability &ndash; Reversibility
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Workload Envelope */}
              <div className="p-5 rounded-lg border border-border bg-muted/20">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs flex-shrink-0">W</span>
                  Workload Envelope
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The original proposal reused a 65M/month full card-vault architecture for a 3.5M/month workload.
                  Technically safe. Commercially misaligned. The mistake would have been treating &ldquo;best
                  architecture&rdquo; as universally correct.
                </p>
              </div>

              {/* Compliance Surface */}
              <div className="p-5 rounded-lg border border-border bg-muted/20">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs flex-shrink-0">C</span>
                  Compliance Surface
                </h4>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p className="mb-2">Security equated PCI compliance with full vault implementation. I separated:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-muted-foreground" />PCI compliance <em>requirement</em></li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-muted-foreground" />Architectural pattern <em>choice</em></li>
                  </ul>
                  <p className="mt-2 font-medium text-foreground">Compliance &#8800; Vault. That distinction was the breakthrough.</p>
                </div>
              </div>

              {/* Economic Viability */}
              <div className="p-5 rounded-lg border border-border bg-muted/20">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs flex-shrink-0">E</span>
                  Economic Viability
                </h4>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p className="mb-2">At 3.5M payments/month, the full vault:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500" />Increased infra cost</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500" />Increased latency</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500" />Increased operational complexity</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500" />Made the bid uncompetitive</li>
                  </ul>
                  <p className="mt-2 text-foreground">No deal &rarr; No downstream growth &rarr; No managed services expansion.</p>
                </div>
              </div>

              {/* Reversibility */}
              <div className="p-5 rounded-lg border border-border bg-muted/20">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-purple-500/10 text-purple-500 flex items-center justify-center text-xs flex-shrink-0">R</span>
                  Reversibility
                </h4>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p className="mb-2">The lower-cost encrypted DB + strong key management model:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" />Was PCI-compliant</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" />Had defined scale thresholds</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" />Could be migrated later if volumes exceeded envelope</li>
                  </ul>
                  <p className="mt-2 font-medium text-foreground">Downside was reversible. Lost bid was not.</p>
                </div>
              </div>
            </div>

            {/* Principal Signal */}
            <div className="p-5 bg-primary/5 rounded-lg border border-primary/20">
              <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">Principal Signal</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                  "Killed architectural gold-plating",
                  "Forced tradeoff clarity",
                  "Aligned Security + Platform + Sales",
                  "Documented risk envelope",
                  "Won the deal",
                  "Protected margin",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 italic">
                Product + economics + architecture + governance combined.
              </p>
            </div>
          </div>
        </div>

        {/* 90-Second Interview Answer */}
        <div className="mb-8 rounded-xl border border-blue-500/30 overflow-hidden">
          <div className="bg-blue-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
            <h3 className="text-lg font-semibold text-foreground">90-Second Interview Answer</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-sm text-foreground leading-relaxed">
              <p>
                We were re-reviewing a proposal for a payment aggregator handling about 3.5 million payments per month.
                The original design reused a full card-vault architecture built for a 65 million-payment workload.
              </p>
              <p>
                It was clean and PCI-safe &mdash; but significantly more expensive and higher latency. At this scale,
                it would have priced us out of the deal.
              </p>
              <p>
                Security and platform preferred the vault because it was proven. Sales was worried about competitiveness.
              </p>
              <p>
                I reframed the debate from &ldquo;Which architecture is best?&rdquo; to &ldquo;What does this workload
                actually require to remain PCI-compliant and commercially viable?&rdquo;
              </p>
              <p>
                I separated PCI compliance from vault architecture and proposed killing the full vault for this use case.
                Instead, we used encrypted database storage with strong key management and secure in-transit encryption.
              </p>
              <p>
                We documented envelope limits &mdash; if payment volume exceeded defined thresholds, we would revisit
                vault migration.
              </p>
              <p>
                We won the bid, processed ~3.5M payments per month successfully, scaled to ~5M within envelope, passed
                audits cleanly, and reduced operational cost materially compared to the original design.
              </p>
              <p className="font-medium text-foreground">
                The lesson was that architecture must match workload economics &mdash; not historical patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Pressure Test */}
        <div className="mb-8 rounded-xl border border-amber-500/30 overflow-hidden">
          <div className="bg-amber-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
            <h3 className="text-lg font-semibold text-foreground">Pressure Test (Non-Mag7 Calibration)</h3>
          </div>
          <div className="p-6 space-y-6">
            {[
              {
                question: "Wasn&apos;t this increasing compliance risk?",
                answer: [
                  "We validated PCI scope with compliance stakeholders before finalizing.",
                  "The model remained PCI-compliant \u2014 we reduced architectural overhead, not compliance controls.",
                  "Risk was documented explicitly, including key rotation complexity and migration threshold triggers.",
                  "This was conscious risk calibration \u2014 not relaxation.",
                ],
              },
              {
                question: "What if volume suddenly spiked?",
                answer: [
                  "We defined volume thresholds in advance.",
                  "If we exceeded envelope: we had migration plan ready, key management automation already scoped, and operational review embedded in annual planning.",
                  "We didn\u2019t ignore scale risk \u2014 we bounded it.",
                ],
              },
              {
                question: "Were you overriding Security?",
                answer: [
                  "No. I separated compliance requirement from architectural preference and forced that distinction into the decision framework.",
                  "Security agreed once the envelope and audit validation were clear.",
                  "Principal influence here was analytical \u2014 not hierarchical.",
                ],
              },
              {
                question: "What makes this Principal-level?",
                answer: [
                  "Senior TPM: Delivers gold-standard architecture.",
                  "Principal TPM: Aligns architecture to workload economics. Kills over-engineering. Balances compliance, latency, cost, and competitiveness. Protects long-term account growth.",
                  "This story demonstrates product judgment \u2014 not just program execution.",
                ],
              },
            ].map((pt, i) => (
              <div key={i} className="p-5 rounded-lg border border-border bg-muted/20">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-amber-500 text-sm flex-shrink-0 mt-0.5">&#10067;</span>
                  <h4 className="font-semibold text-foreground text-sm" dangerouslySetInnerHTML={{ __html: `&ldquo;${pt.question}&rdquo;` }} />
                </div>
                <ul className="space-y-2 ml-8">
                  {pt.answer.map((line, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Honest Assessment */}
        <div className="p-6 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-transparent">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-xs">&#10003;</span>
            Honest Assessment
          </h3>
          <p className="text-sm text-foreground mb-4 leading-relaxed">
            This is one of your strongest stories. It covers:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
            {[
              "Kill decision",
              "Product tradeoff",
              "Architecture depth",
              "Commercial awareness",
              "Risk envelope logic",
              "Executive alignment",
              "Margin protection",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            It fills the 20% gap cleanly.
          </p>
        </div>
      </section>

      {/* ── VII. Hostile Architecture Panel ── */}
      <section id="hostile-panel" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-3">Hostile Architecture Panel Simulation</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Simulating a hostile architecture panel &mdash; the kind you&apos;d face at Stripe/Snowflake/Datadog-tier
          companies. They will test security depth, compliance nuance, latency math, key management maturity,
          reversibility realism, and whether you truly understood the tradeoffs.
        </p>

        <div className="space-y-5">
          {[
            {
              num: "1",
              question: "You downgraded from a vault to encrypted DB storage. That sounds like weakening security. Why is that acceptable?",
              answer: [
                "We did not weaken compliance posture \u2014 we changed architectural pattern while preserving PCI requirements.",
                "The original vault abstracted PAN storage entirely. The revised design still ensured: AES-256 encryption at rest, HSM-backed key management, strict access control + tokenization boundaries, TLS for all in-transit communication.",
                "The distinction I forced was: PCI DSS requires secure handling of cardholder data \u2014 not necessarily a centralized vault.",
                "At 3.5M payments/month, the encrypted DB model met compliance requirements with lower operational overhead.",
                "Security risk was not increased \u2014 operational and latency overhead was reduced.",
              ],
            },
            {
              num: "2",
              question: "Key rotation is complex at scale. Did you underestimate that?",
              answer: [
                "No \u2014 we explicitly documented it as a long-term operational cost.",
                "We introduced: envelope threshold triggers (volume, QPS), automation hooks for re-encryption cycles, annual compliance review cadence.",
                "At 3.5M \u2192 5M payments/month, re-encryption cycles were manageable.",
                "If we approached 10\u201315M scale, vault migration would become justified.",
                "We treated key management complexity as a bounded operational cost \u2014 not an unmodeled risk.",
              ],
            },
            {
              num: "3",
              question: "What if the business scaled unexpectedly and you had to re-architect midstream?",
              answer: [
                "That\u2019s why we used envelope logic. We defined volume thresholds, latency thresholds, and audit cost thresholds.",
                "If crossed, vault migration would be triggered. Migration was not speculative \u2014 we already had vault architecture pattern proven for larger workloads.",
                "The reversible downside (future migration cost) was preferable to the irreversible downside (losing the deal entirely).",
                "This was asymmetric risk management.",
              ],
            },
            {
              num: "4",
              question: "Latency impact \u2014 quantify it. Don\u2019t handwave.",
              answer: [
                "Full vault architecture added: additional network hop, tokenization round-trip, centralized service dependency.",
                "For 3.5M/month workload, DB-level encryption reduced P99 latency by removing tokenization hop and reduced operational dependency surface.",
                "Lower latency improved competitiveness for aggregator SLAs.",
                "We modeled performance under expected TPS and ensured envelope stability.",
                "At 65M/month, centralized vault amortizes better. At 3.5M/month, it\u2019s overhead.",
              ],
            },
            {
              num: "5",
              question: "Sounds like you optimized for cost over security.",
              answer: [
                "Incorrect framing. We optimized for risk-adjusted economics.",
                "Security posture remained PCI-compliant. What we eliminated was architectural gold-plating beyond workload need.",
                "Security isn\u2019t maximalism. Security is proportional risk control.",
                "At 65M/month \u2192 vault justified. At 3.5M/month \u2192 encryption + strong key management sufficient.",
              ],
            },
            {
              num: "6",
              question: "Why not build vault modularly and reuse later?",
              answer: [
                "We evaluated that. The incremental complexity still required: service orchestration, centralized management overhead, additional operational surface.",
                "For this deal timeline, modularizing vault introduced complexity without near-term payoff.",
                "Future migration path existed and was already proven.",
                "We avoided premature abstraction.",
              ],
            },
            {
              num: "7",
              question: "Were you the most technical person in the room?",
              answer: [
                "No \u2014 platform architects had deeper implementation depth.",
                "My role was to: clarify workload envelope, separate compliance requirement from architecture preference, quantify economic tradeoffs, force explicit risk documentation.",
                "Principal impact here was judgment synthesis, not writing crypto code.",
              ],
            },
            {
              num: "8",
              question: "What would you do differently today?",
              answer: [
                "I would define envelope thresholds earlier in proposal cycle.",
                "Create a reusable \u201cRight-Sizing Architecture Matrix.\u201d",
                "Document migration trigger criteria as part of standard bid template.",
                "That institutionalizes the decision model.",
              ],
            },
          ].map((item) => (
            <div key={item.num} className="rounded-xl border border-red-500/20 overflow-hidden">
              <div className="bg-red-500/5 px-6 py-3 flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-red-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {item.num}
                </span>
                <p className="text-sm font-semibold text-foreground">&ldquo;{item.question}&rdquo;</p>
              </div>
              <div className="px-6 py-4">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Strong Principal Answer</div>
                <ul className="space-y-2">
                  {item.answer.map((line, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* What This Demonstrates */}
        <div className="mt-8 p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
          <h3 className="font-semibold text-foreground mb-3">What This Story Demonstrates Under Fire</h3>
          <p className="text-sm text-muted-foreground mb-3">If you deliver those answers calmly, you signal:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              "Technical fluency",
              "PCI awareness",
              "Latency awareness",
              "Key management understanding",
              "Asymmetric risk logic",
              "Product economics",
              "Architectural proportionality",
              "Reversibility thinking",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Very few TPM candidates can defend architecture under hostile technical questioning.
            If you can do this smoothly, you stand out.
          </p>
        </div>
      </section>

      {/* ── VIII. 60-Second Hyper-Crisp Version ── */}
      <section id="sixty-second" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-6">60-Second Hyper-Crisp Version</h2>

        <div className="p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium rounded-full">
              60 seconds
            </span>
            <span className="px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
              ~150 words
            </span>
          </div>

          <div className="space-y-4 text-sm text-foreground leading-relaxed">
            <p>
              We were reviewing a proposal for a payment aggregator handling about 3.5 million payments per month.
              The initial design reused a full card-vault architecture built for a 65 million-payment workload.
            </p>
            <p>
              It was secure and proven &mdash; but materially higher cost and latency. At this scale, it would
              have priced us out of the deal.
            </p>
            <p>
              I reframed the discussion from &ldquo;Which architecture is best?&rdquo; to &ldquo;What does this workload
              require to remain PCI-compliant and commercially viable?&rdquo;
            </p>
            <p>
              I separated PCI compliance from vault architecture and proposed killing the full vault for this use case.
              Instead, we implemented encrypted database storage with HSM-backed key management and strong in-transit
              encryption. We documented envelope thresholds &mdash; if volume or complexity exceeded defined limits,
              we would revisit vault migration.
            </p>
            <p>
              We won the bid, processed ~3.5M payments successfully, scaled to ~5M within envelope, passed audits
              cleanly, and reduced operational cost materially.
            </p>
            <p className="font-medium text-foreground border-l-2 border-primary pl-4">
              The core lesson: architecture must match workload economics &mdash; not historical patterns.
              Security is proportional risk control, not maximalism.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
        <Link
          href="/nebula/interview-prep/story-pivot-map"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Story Pivot Map
        </Link>
        <Link
          href="/nebula/interview-prep"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          All Sections &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
