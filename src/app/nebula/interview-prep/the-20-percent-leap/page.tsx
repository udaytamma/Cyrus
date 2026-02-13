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
          <a href="#meta-questions" className="p-3 bg-background rounded-lg border border-amber-500/30 hover:border-amber-500/50 transition-colors">
            <div className="font-medium text-foreground">The 1% Difference</div>
            <div className="text-sm text-muted-foreground">10 self-calibration probes</div>
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

      {/* ── VI. Card Vault Story (Link) ── */}
      <section id="card-vault-kill" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-6">Story A: Card Vault Kill</h2>
        <Link
          href="/nebula/interview-prep/card-vault-story"
          className="group block p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shrink-0">
              A
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                Card Vault &mdash; Gold-Plating Kill + Architectural Right-Sizing
              </h3>
              <p className="text-sm text-muted-foreground">
                Full story with WCER framework, 90-second answer, pressure test Q&amp;A, hostile architecture
                panel simulation (8 probes), and 60-second hyper-crisp version.
              </p>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">Kill Decision</span>
                <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">Product Thinking</span>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">Margin Protection</span>
                <span className="px-2 py-0.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">Architecture Depth</span>
              </div>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">
              &rarr;
            </div>
          </div>
        </Link>
      </section>

      {/* ── VII. The 1% Difference (Link) ── */}
      <section id="meta-questions" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-6">Self-Calibration: The 1% Difference</h2>
        <Link
          href="/nebula/interview-prep/the-1-percent-difference"
          className="group block p-6 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/30 hover:border-amber-500/50 transition-all shadow-sm hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold shrink-0">
              %
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-1">
                10 Meta-Questions You Should Be Asking
              </h3>
              <p className="text-sm text-muted-foreground">
                Self-calibration probes across product ownership signal, forward-looking strategy,
                portfolio-level reasoning, technical depth balance, blind spot patterns, differentiation,
                strategy perception, down-level risk, non-Mag7 calibration, and 30-minute impression management.
              </p>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">Self-Awareness</span>
                <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">Level Calibration</span>
                <span className="px-2 py-0.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">Strategy Signal</span>
                <span className="px-2 py-0.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-medium rounded-full">Down-Level Defense</span>
              </div>
            </div>
            <div className="text-muted-foreground group-hover:text-amber-500 transition-colors">
              &rarr;
            </div>
          </div>
        </Link>
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
          href="/nebula/interview-prep/card-vault-story"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Card Vault Story &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
