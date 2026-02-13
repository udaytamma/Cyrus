"use client";

/**
 * The 1% Difference - Deep Meta-Questions for Principal TPM Calibration
 *
 * Beyond frameworks and story strength, these are the self-awareness probes
 * that separate "prepared" from "truly calibrated" at Principal TPM level.
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// ─── Data ────────────────────────────────────────────────────────────────────

const metaQuestions = [
  {
    num: "1",
    title: "End-to-End Product Ownership Signal",
    probe: "Where do I lack true end-to-end product ownership signal?",
    color: { bg: "bg-blue-500/10", border: "border-blue-500/30", badge: "bg-blue-500", text: "text-blue-600 dark:text-blue-400" },
    strengthened: [
      "Governance",
      "Risk containment",
      "Margin protection",
      "Architecture right-sizing",
    ],
    notTestedYet: [
      "Have I owned customer problem discovery?",
      "Have I influenced roadmap direction before execution?",
      "Have I killed something before it started?",
      "Have I defined pricing/packaging tradeoffs?",
      "Have I shaped a multi-year strategy?",
    ],
    insight: "Principal TPM at strong non-Mag7 companies is closer to Product + Platform GM thinking, not just execution.",
    metaQuestion: "If someone removed execution from my stories, do I still show product judgment?",
  },
  {
    num: "2",
    title: "Forward-Looking Strategy vs Reactive Excellence",
    probe: "Do I have 1 story that shows forward-looking strategy, not reactive excellence?",
    color: { bg: "bg-purple-500/10", border: "border-purple-500/30", badge: "bg-purple-500", text: "text-purple-600 dark:text-purple-400" },
    currentAnchors: [
      "Crisis response",
      "Migration execution",
      "Governance correction",
      "Risk recalibration",
    ],
    whatsLighter: [
      "Proactive 2\u20133 year horizon shaping",
      "Investment thesis thinking",
      "Portfolio prioritization under capital constraints",
    ],
    metaQuestion: "Have I demonstrated that I can shape the next system, not just stabilize the current one?",
  },
  {
    num: "3",
    title: "Greenfield \"What Not to Build\" Reasoning",
    probe: "Can I articulate what I would not build in a greenfield scenario?",
    color: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", badge: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400" },
    demonstrated: [
      "Killing gold-plating",
      "Right-sizing architecture",
    ],
    principalTests: [
      "Given limited capital, what would you invest in?",
      "What is not worth building?",
      "Where do you deliberately under-invest?",
    ],
    metaQuestion: "Can I reason about opportunity cost at portfolio level, not just feature level?",
  },
  {
    num: "4",
    title: "Technical Depth Without Engineering Drift",
    probe: "Do I clearly signal technical depth without drifting into an engineering role?",
    color: { bg: "bg-amber-500/10", border: "border-amber-500/30", badge: "bg-amber-500", text: "text-amber-600 dark:text-amber-400" },
    metaRisks: [
      "Sounding TPM-heavy in technical interviews",
      "Sounding architecture-heavy in behavioral ones",
    ],
    metaQuestion: "Can I clearly articulate technical tradeoffs without trying to sound like the deepest engineer in the room?",
    insight: "That balance matters. You defend architecture well \u2014 the risk is calibrating depth to audience.",
  },
  {
    num: "5",
    title: "Blind Spot Patterns",
    probe: "What is my blind spot pattern?",
    color: { bg: "bg-rose-500/10", border: "border-rose-500/30", badge: "bg-rose-500", text: "text-rose-600 dark:text-rose-400" },
    overIndex: ["Governance", "Risk", "Control"],
    underIndex: ["Speed", "Product experimentation", "Customer empathy narrative"],
    downLevelWhen: [
      "They sound rigid",
      "They sound process-heavy",
      "They sound reactive",
      "They sound overly cautious",
    ],
    metaQuestion: "Where could I be misinterpreted as overly conservative?",
  },
  {
    num: "6",
    title: "Differentiation from Other Principals",
    probe: "What differentiates me from 5 other strong Principal candidates?",
    color: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", badge: "bg-cyan-500", text: "text-cyan-600 dark:text-cyan-400" },
    competitionQuestions: [
      "Why you over someone else with similar scope?",
      "What is your unique operating advantage?",
      "What problem domain do you naturally dominate?",
    ],
    unfairAdvantage: "High-blast-radius reliability + margin framing + AI guardrail judgment",
    metaQuestion: "What is my unfair advantage narrative?",
    insight: "Right now you're optimizing for competence. At Stripe/Snowflake-tier, the question becomes differentiation.",
  },
  {
    num: "7",
    title: "\"Not Strategic Enough\" Rebuttal",
    probe: "If they say \"You're strong, but we're not sure you're strategic enough\" \u2014 what do I say?",
    color: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", badge: "bg-indigo-500", text: "text-indigo-600 dark:text-indigo-400" },
    needed: [
      "Portfolio shaping",
      "Economic prioritization",
      "Multi-year view",
      "Platform vs feature tradeoff",
    ],
    metaQuestion: "Can I demonstrate I think in capital allocation terms?",
    insight: "This is a real risk area. Your stories are operationally strong. You need one story that screams strategy.",
  },
  {
    num: "8",
    title: "Down-Level Risk Analysis",
    probe: "What level would I realistically be down-leveled to \u2014 and why?",
    color: { bg: "bg-red-500/10", border: "border-red-500/30", badge: "bg-red-500", text: "text-red-600 dark:text-red-400" },
    downLevelReasons: [
      "Too execution-centric",
      "Not enough product-market shaping",
      "Not enough forward-looking strategy",
      "Not enough evidence of cross-company influence",
    ],
    metaQuestion: "What is the strongest argument someone could make to down-level me?",
    insight: "If you can defeat that argument cleanly, you're ready.",
  },
  {
    num: "9",
    title: "Non-Mag7 Calibration",
    probe: "Am I calibrated to non-Mag7 Principal expectations?",
    color: { bg: "bg-orange-500/10", border: "border-orange-500/30", badge: "bg-orange-500", text: "text-orange-600 dark:text-orange-400" },
    nonMag7Values: [
      "Capital efficiency",
      "Leaner org influence",
      "Faster iteration cycles",
      "Product intuition",
    ],
    metaQuestion: "Can I scale my narrative to leaner, faster environments?",
    insight: "Mag7-style heavy governance stories can read as overbuilt at non-Mag7 top-tier companies.",
  },
  {
    num: "10",
    title: "30-Minute Impression Control",
    probe: "If I only get 30 minutes, what impression do I want to leave?",
    color: { bg: "bg-primary/10", border: "border-primary/30", badge: "bg-primary", text: "text-primary" },
    currentThemes: ["Risk containment", "Governance design", "Margin protection"],
    targetPerception: [
      "Risk-calibrated product operator",
      "Technical systems thinker",
      "Business-aware architect",
      "AI-era platform leader",
    ],
    metaQuestion: "What is the single consistent perception I want across all interviews?",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function The1PercentDifferencePage() {
  return (
    <InterviewPrepLayout
      title="The 1% Difference"
      description="10 meta-questions you should be asking at Principal TPM level"
      currentSection="the-1-percent-difference"
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
            Meta-Calibration
          </span>
          <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
            Self-Awareness
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Level Differentiator
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">The 1% Difference</h1>
        <p className="text-muted-foreground leading-relaxed">
          You&apos;re asking about frameworks, story strength, asymmetry, and signal. That&apos;s good.
          But here are the meta-questions you&apos;re not yet asking &mdash; and should be &mdash; at
          Principal TPM level. These probe the dimensions that interviewers sense but rarely ask directly.
        </p>
      </div>

      {/* ── Quick Nav ── */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">10 Meta-Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {metaQuestions.map((q) => (
            <a
              key={q.num}
              href={`#mq-${q.num}`}
              className={`p-3 bg-background rounded-lg border ${q.color.border} hover:border-primary/50 transition-colors`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded ${q.color.badge} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                  {q.num}
                </span>
                <div className="font-medium text-foreground text-sm">{q.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Meta-Questions ── */}
      <div className="space-y-10">
        {/* ── 1. Product Ownership ── */}
        <section id="mq-1" className="rounded-xl border border-blue-500/30 overflow-hidden">
          <div className="bg-blue-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
            <h2 className="text-lg font-semibold text-foreground">End-to-End Product Ownership Signal</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-blue-500/30 pl-4">
              &ldquo;Where do I lack true end-to-end product ownership signal?&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Strengthened</div>
                <ul className="space-y-1.5">
                  {metaQuestions[0].strengthened!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
                <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Not Deeply Pressure-Tested</div>
                <ul className="space-y-1.5">
                  {metaQuestions[0].notTestedYet!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">Key Insight</div>
              <p className="text-sm text-foreground leading-relaxed">{metaQuestions[0].insight}</p>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[0].metaQuestion}</p>
            </div>
          </div>
        </section>

        {/* ── 2. Forward-Looking Strategy ── */}
        <section id="mq-2" className="rounded-xl border border-purple-500/30 overflow-hidden">
          <div className="bg-purple-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
            <h2 className="text-lg font-semibold text-foreground">Forward-Looking Strategy vs Reactive Excellence</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-purple-500/30 pl-4">
              &ldquo;Do I have 1 story that shows forward-looking strategy, not reactive excellence?&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Most Anchors Are</div>
                <ul className="space-y-1.5">
                  {metaQuestions[1].currentAnchors!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5">
                <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">What&apos;s Lighter</div>
                <ul className="space-y-1.5">
                  {metaQuestions[1].whatsLighter!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[1].metaQuestion}</p>
            </div>
          </div>
        </section>

        {/* ── 3. Greenfield Reasoning ── */}
        <section id="mq-3" className="rounded-xl border border-emerald-500/30 overflow-hidden">
          <div className="bg-emerald-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
            <h2 className="text-lg font-semibold text-foreground">Greenfield &ldquo;What Not to Build&rdquo; Reasoning</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-emerald-500/30 pl-4">
              &ldquo;Can I articulate what I would not build in a greenfield scenario?&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Demonstrated</div>
                <ul className="space-y-1.5">
                  {metaQuestions[2].demonstrated!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
                <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Principal Interviews Test</div>
                <ul className="space-y-1.5">
                  {metaQuestions[2].principalTests!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[2].metaQuestion}</p>
            </div>
          </div>
        </section>

        {/* ── 4. Technical Depth ── */}
        <section id="mq-4" className="rounded-xl border border-amber-500/30 overflow-hidden">
          <div className="bg-amber-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
            <h2 className="text-lg font-semibold text-foreground">Technical Depth Without Engineering Drift</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-amber-500/30 pl-4">
              &ldquo;Do I clearly signal technical depth without drifting into an engineering role?&rdquo;
            </p>

            <div className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5">
              <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">Meta-Risks</div>
              <ul className="space-y-1.5">
                {metaQuestions[3].metaRisks!.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">Key Insight</div>
              <p className="text-sm text-foreground leading-relaxed">{metaQuestions[3].insight}</p>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[3].metaQuestion}</p>
            </div>
          </div>
        </section>

        {/* ── 5. Blind Spot Patterns ── */}
        <section id="mq-5" className="rounded-xl border border-rose-500/30 overflow-hidden">
          <div className="bg-rose-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
            <h2 className="text-lg font-semibold text-foreground">Blind Spot Patterns</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-rose-500/30 pl-4">
              &ldquo;What is my blind spot pattern?&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
                <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Systematically Over-Index On</div>
                <ul className="space-y-1.5">
                  {metaQuestions[4].overIndex!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5">
                <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">May Under-Index On</div>
                <ul className="space-y-1.5">
                  {metaQuestions[4].underIndex!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-rose-500/20 bg-rose-500/5">
              <div className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-400 mb-2">Principal Candidates Get Down-Leveled When</div>
              <ul className="space-y-1.5">
                {metaQuestions[4].downLevelWhen!.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[4].metaQuestion}</p>
            </div>
          </div>
        </section>

        {/* ── 6. Differentiation ── */}
        <section id="mq-6" className="rounded-xl border border-cyan-500/30 overflow-hidden">
          <div className="bg-cyan-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
            <h2 className="text-lg font-semibold text-foreground">Differentiation from Other Principals</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-cyan-500/30 pl-4">
              &ldquo;What differentiates me from 5 other strong Principal candidates?&rdquo;
            </p>

            <div className="p-4 bg-cyan-500/5 rounded-lg border border-cyan-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400 mb-2">Key Insight</div>
              <p className="text-sm text-foreground leading-relaxed">{metaQuestions[5].insight}</p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-muted/20">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">The Competition Tests</div>
              <ul className="space-y-1.5">
                {metaQuestions[5].competitionQuestions!.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Your Unfair Advantage</div>
              <p className="text-sm font-medium text-foreground">{metaQuestions[5].unfairAdvantage}</p>
              <p className="text-xs text-muted-foreground mt-2">You haven&apos;t explicitly crafted this narrative yet.</p>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[5].metaQuestion}</p>
            </div>
          </div>
        </section>

        {/* ── 7. Not Strategic Enough ── */}
        <section id="mq-7" className="rounded-xl border border-indigo-500/30 overflow-hidden">
          <div className="bg-indigo-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
            <h2 className="text-lg font-semibold text-foreground">&ldquo;Not Strategic Enough&rdquo; Rebuttal</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-indigo-500/30 pl-4">
              &ldquo;If they say &lsquo;You&apos;re strong, but we&apos;re not sure you&apos;re strategic enough&rsquo; &mdash; what do I say?&rdquo;
            </p>

            <div className="p-4 bg-indigo-500/5 rounded-lg border border-indigo-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-2">Key Insight</div>
              <p className="text-sm text-foreground leading-relaxed">{metaQuestions[6].insight}</p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-muted/20">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">You Need One Story That Screams</div>
              <ul className="space-y-1.5">
                {metaQuestions[6].needed!.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[6].metaQuestion}</p>
            </div>
          </div>
        </section>

        {/* ── 8. Down-Level Risk ── */}
        <section id="mq-8" className="rounded-xl border border-red-500/30 overflow-hidden">
          <div className="bg-red-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">8</span>
            <h2 className="text-lg font-semibold text-foreground">Down-Level Risk Analysis</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-red-500/30 pl-4">
              &ldquo;What level would I realistically be down-leveled to &mdash; and why?&rdquo;
            </p>

            <div className="p-4 rounded-lg border border-red-500/20 bg-red-500/5">
              <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">If Down-Leveled to Senior TPM, Likely Because</div>
              <ul className="space-y-1.5">
                {metaQuestions[7].downLevelReasons!.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Key Insight</div>
              <p className="text-sm text-foreground leading-relaxed">{metaQuestions[7].insight}</p>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[7].metaQuestion}</p>
            </div>
          </div>
        </section>

        {/* ── 9. Non-Mag7 Calibration ── */}
        <section id="mq-9" className="rounded-xl border border-orange-500/30 overflow-hidden">
          <div className="bg-orange-500/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">9</span>
            <h2 className="text-lg font-semibold text-foreground">Non-Mag7 Calibration</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-orange-500/30 pl-4">
              &ldquo;Am I calibrated to non-Mag7 Principal expectations?&rdquo;
            </p>

            <div className="p-4 rounded-lg border border-border bg-muted/20">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Non-Mag7 Top-Tier Companies Value</div>
              <ul className="space-y-1.5">
                {metaQuestions[8].nonMag7Values!.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-orange-500/5 rounded-lg border border-orange-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-2">Key Insight</div>
              <p className="text-sm text-foreground leading-relaxed">{metaQuestions[8].insight}</p>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[8].metaQuestion}</p>
            </div>
          </div>
        </section>

        {/* ── 10. Impression Control ── */}
        <section id="mq-10" className="rounded-xl border border-primary/30 overflow-hidden">
          <div className="bg-primary/5 px-6 py-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">10</span>
            <h2 className="text-lg font-semibold text-foreground">30-Minute Impression Control</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm text-foreground italic border-l-2 border-primary/30 pl-4">
              &ldquo;If I only get 30 minutes, what impression do I want to leave?&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Current Themes</div>
                <ul className="space-y-1.5">
                  {metaQuestions[9].currentThemes!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-3 italic">Is that the full story?</p>
              </div>
              <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                <div className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Target Perception</div>
                <ul className="space-y-1.5">
                  {metaQuestions[9].targetPerception!.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Meta-Question</div>
              <p className="text-sm font-medium text-foreground italic">{metaQuestions[9].metaQuestion}</p>
            </div>
          </div>
        </section>
      </div>

      {/* ── Honest Assessment ── */}
      <section className="mt-14 mb-14">
        <div className="p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">&#9733;</span>
            Honest Assessment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">Strong On</div>
              <ul className="space-y-2">
                {[
                  "Execution depth",
                  "Risk asymmetry",
                  "Architecture judgment",
                  "Economic framing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-3">Lighter On</div>
              <ul className="space-y-2">
                {[
                  "Proactive product shaping",
                  "Portfolio strategy narrative",
                  "Forward-looking capital allocation thinking",
                  "Explicit \"why me over others\" positioning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-5 italic border-t border-border pt-4">
            That&apos;s the real remaining gap. Not in stories &mdash; in framing.
          </p>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
        <Link
          href="/nebula/interview-prep/card-vault-story"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Card Vault Story
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
