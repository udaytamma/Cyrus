"use client";

/**
 * Why Us / Why Now Template - Principal TPM
 * Reusable decision narrative for non-Mag7 company interviews
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function WhyUsTemplatePage() {
  return (
    <InterviewPrepLayout
      title="Why Us / Why Now Template"
      description="Reusable decision narrative for Principal TPM interviews"
      currentSection="why-us-template"
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
          <span className="px-2.5 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-medium rounded-full">
            Template
          </span>
          <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            Principal Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">&quot;Why Us / Why Now&quot; &mdash; Principal TPM Template</h1>
        <p className="text-muted-foreground">
          This is <strong className="text-foreground">not</strong> a motivational speech. It is a <strong className="text-foreground">decision narrative</strong> the interviewer can <em>believe</em>.
          Use this as a fill-in framework. With practice, you should be able to complete it for a company in <strong className="text-foreground">60&ndash;90 minutes</strong>.
        </p>
      </div>

      {/* Section 1: Company Context */}
      <section className="mb-10" id="company-context">
        <div className="mb-4 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/30">
          <h2 className="text-xl font-bold text-foreground">1. Company Context</h2>
          <p className="text-sm text-muted-foreground mt-1">30 seconds</p>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-blue-500/5 rounded-xl border border-blue-500/20">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Key Question</h3>
            <p className="text-foreground text-sm leading-relaxed italic">
              What is happening <em>now</em> at this company that materially changes the risk profile?
            </p>
          </div>
          <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <p className="text-sm text-red-600 dark:text-red-400 font-semibold">Avoid history, mission, or hype.</p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Fill In</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x2022;</span>Company stage (scale-up / post-IPO / mature)</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x2022;</span>Recent inflection:</li>
            </ul>
            <ul className="ml-6 mt-1 space-y-1 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-blue-300 mt-0.5">&#x25E6;</span>Platform scale break</li>
              <li className="flex items-start gap-2"><span className="text-blue-300 mt-0.5">&#x25E6;</span>Product expansion</li>
              <li className="flex items-start gap-2"><span className="text-blue-300 mt-0.5">&#x25E6;</span>AI adoption pressure</li>
              <li className="flex items-start gap-2"><span className="text-blue-300 mt-0.5">&#x25E6;</span>Reliability / cost / velocity tension</li>
            </ul>
          </div>
          <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2 text-sm">Example Structure (Not Content)</h3>
            <p className="text-foreground text-sm italic">
              &quot;You&apos;re at a point where X is no longer sufficient because Y has changed &mdash; scale, customer expectations, or technical complexity.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Uncomfortable Problem */}
      <section className="mb-10" id="uncomfortable-problem">
        <div className="mb-4 p-4 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/30">
          <h2 className="text-xl font-bold text-foreground">2. The Uncomfortable Problem (Core Thesis)</h2>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-red-500/5 rounded-xl border border-red-500/20">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Key Question</h3>
            <p className="text-foreground text-sm leading-relaxed italic">
              What problem <em>must</em> be solved in the next 12&ndash;18 months whether leadership wants to or not?
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">This Should Be</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Cross-functional",
                "Technically rooted",
                "Business-visible",
                "Not solvable by adding headcount",
              ].map((item) => (
                <div key={item} className="p-2 bg-red-500/5 rounded-lg border border-red-500/10 text-sm text-foreground text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Fill In</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x2022;</span>Where systems/processes will fail first</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x2022;</span>What breaks if left untreated</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x2022;</span>Who feels the pain (customers, engineers, execs)</li>
            </ul>
          </div>
          <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2 text-sm">Litmus Test</h3>
            <p className="text-foreground text-sm italic">
              If this sounds like a generic &quot;challenges of growth&quot; answer, it&apos;s wrong.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why a Principal TPM */}
      <section className="mb-10" id="why-principal-tpm">
        <div className="mb-4 p-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl border border-purple-500/30">
          <h2 className="text-xl font-bold text-foreground">3. Why a Principal TPM Is the Right Lever</h2>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-purple-500/5 rounded-xl border border-purple-500/20">
            <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Frame</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Why this problem is a <em>program</em> problem, not just product or engineering.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Explicitly Call Out</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x2022;</span>Dependency complexity</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x2022;</span>Ownership ambiguity</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x2022;</span>Tradeoffs that need arbitration</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x2022;</span>Decision velocity issues</li>
            </ul>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/30">
            <h3 className="font-semibold text-foreground mb-2 text-sm">Key Phrase to Internalize</h3>
            <p className="text-foreground text-sm italic">
              &quot;This isn&apos;t a single-team problem &mdash; it&apos;s a coordination and prioritization problem under real constraints.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Why You */}
      <section className="mb-10" id="why-you">
        <div className="mb-4 p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border border-green-500/30">
          <h2 className="text-xl font-bold text-foreground">4. Why <em>You</em> (Credibility Mapping)</h2>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-green-500/5 rounded-xl border border-green-500/20">
            <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Frame</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Map 2&ndash;3 of your experiences directly to <em>this</em> problem. This is not a resume recap.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">For Each Experience</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#x2022;</span>Problem similarity</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#x2022;</span>Constraint similarity</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#x2022;</span>Outcome similarity</li>
            </ul>
          </div>
          <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2 text-sm">Structure</h3>
            <p className="text-foreground text-sm italic">
              &quot;I&apos;ve dealt with X under Y constraints, which is analogous because Z.&quot;
            </p>
          </div>
          <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <p className="text-sm text-red-600 dark:text-red-400 font-semibold">Do not exceed 3 bullets.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Why Now */}
      <section className="mb-10" id="why-now">
        <div className="mb-4 p-4 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/30">
          <h2 className="text-xl font-bold text-foreground">5. Why <em>Now</em> (Timing Logic)</h2>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-amber-500/5 rounded-xl border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Frame</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Why this hire matters <em>now</em>, not in two years.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Frame In</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Opportunity cost</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Risk accumulation</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Compounding inefficiency</li>
            </ul>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Examples of &quot;Now&quot; Signals</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Platform decisions becoming irreversible</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>AI/automation being bolted on instead of designed in</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Scaling teams without scaling decision mechanisms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Anti-Signals */}
      <section className="mb-10" id="anti-signals">
        <div className="mb-4 p-4 bg-gradient-to-r from-slate-500/10 to-transparent rounded-xl border border-slate-500/30">
          <h2 className="text-xl font-bold text-foreground">6. What You Are <em>Not</em> Saying (Anti-Signals)</h2>
        </div>
        <div className="space-y-4">
          <div className="p-5 bg-slate-500/5 rounded-xl border border-slate-500/20">
            <h3 className="font-semibold text-slate-600 dark:text-slate-400 mb-2">Purpose</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Explicitly show restraint. This signals judgment and realism.
            </p>
          </div>
          <div className="p-5 bg-background rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">Briefly State</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-slate-500 mt-0.5">&#x2022;</span>What you are <em>not</em> claiming</li>
              <li className="flex items-start gap-2"><span className="text-slate-500 mt-0.5">&#x2022;</span>What you are <em>not</em> trying to change on day one</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Close */}
      <section className="mb-10" id="close">
        <div className="mb-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
          <h2 className="text-xl font-bold text-foreground">7. Close (One Sentence)</h2>
        </div>
        <div className="p-5 bg-primary/5 rounded-xl border border-primary/30">
          <p className="text-foreground text-sm italic leading-relaxed">
            &quot;This is the kind of problem I&apos;ve spent my career solving &mdash; not by heroics, but by building clarity, alignment, and durable execution at scale.&quot;
          </p>
          <p className="text-muted-foreground text-sm mt-3 font-semibold">
            Stop. Do not oversell.
          </p>
        </div>
      </section>

      {/* How This Should Sound */}
      <section className="mb-10" id="delivery">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 px-4">
            How This Should Sound in an Interview
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
        <div className="p-6 bg-cyan-500/5 rounded-xl border border-cyan-500/30">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {["2\u20133 minutes total", "Calm", "Analytical", "Non-desperate", "No hype words", "No company marketing"].map((item) => (
              <div key={item} className="p-2 bg-background rounded-lg border border-border text-sm text-foreground text-center">
                {item}
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-cyan-500/20">
            <p className="text-muted-foreground text-sm">If delivered well, the interviewer should think:</p>
            <p className="text-foreground text-sm italic mt-2">
              &quot;This person understands <em>our</em> problems &mdash; and isn&apos;t trying to impress me.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* How to Practice */}
      <section className="mb-10" id="practice">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-amber-600 dark:text-amber-400 px-4">
            How to Practice This
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="p-5 bg-amber-500/5 rounded-xl border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-sm font-bold">1</span>
              Pick 3 Archetype Companies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Infra-heavy", desc: "Deep technical infrastructure" },
                { label: "Product-led", desc: "User growth focused" },
                { label: "Scale-up / Transformation", desc: "Rapid change under pressure" },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-background rounded-lg border border-border">
                  <div className="font-semibold text-foreground text-sm">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 bg-amber-500/5 rounded-xl border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-sm font-bold">2</span>
              Fill This Template for Each
            </h3>
            <p className="text-sm text-muted-foreground">Record yourself delivering it in <strong className="text-foreground">2 minutes</strong>.</p>
          </div>

          {/* Step 3 */}
          <div className="p-5 bg-amber-500/5 rounded-xl border border-amber-500/20">
            <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-sm font-bold">3</span>
              Self-Grade On
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Specificity</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Tradeoff awareness</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x2022;</span>Absence of fluff</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep/decision-memo"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Decision Memo
        </Link>
        <Link
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Back to Interview Prep &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
