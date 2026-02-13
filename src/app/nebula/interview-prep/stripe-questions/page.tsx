"use client";

/**
 * Stripe Questions - Principal TPM Interview Practice
 * 18 questions across 6 themes with pressure-test angles interviewers probe
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function StripeQuestionsPage() {
  return (
    <InterviewPrepLayout
      title="Stripe Questions"
      description="18 Principal TPM interview questions across 6 themes with pressure-test angles"
      currentSection="stripe-questions"
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
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Stripe
          </span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            Principal TPM
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            18 Questions
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Stripe Questions</h1>
        <p className="text-muted-foreground">
          Executive summary of all questions covered in Stripe interview prep&mdash;including
          the pressure-test angles interviewers would probe. Grouped by theme to surface patterns.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Themes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a href="#execution" className="p-3 bg-background rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors">
            <div className="font-medium text-foreground">I. Execution &amp; Program Control</div>
            <div className="text-sm text-muted-foreground">Q1&ndash;Q4</div>
          </a>
          <a href="#alignment" className="p-3 bg-background rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <div className="font-medium text-foreground">II. Cross-Functional Alignment</div>
            <div className="text-sm text-muted-foreground">Q5&ndash;Q8</div>
          </a>
          <a href="#leadership" className="p-3 bg-background rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
            <div className="font-medium text-foreground">III. Leadership &amp; Scaling</div>
            <div className="text-sm text-muted-foreground">Q9&ndash;Q12</div>
          </a>
          <a href="#customer" className="p-3 bg-background rounded-lg border border-amber-500/30 hover:border-amber-500/50 transition-colors">
            <div className="font-medium text-foreground">IV. Customer &amp; Stakeholder</div>
            <div className="text-sm text-muted-foreground">Q13&ndash;Q14</div>
          </a>
          <a href="#judgment" className="p-3 bg-background rounded-lg border border-red-500/30 hover:border-red-500/50 transition-colors">
            <div className="font-medium text-foreground">V. Judgment &amp; Ownership</div>
            <div className="text-sm text-muted-foreground">Q15&ndash;Q16</div>
          </a>
          <a href="#meta" className="p-3 bg-background rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
            <div className="font-medium text-foreground">VI. Meta-Level Calibration</div>
            <div className="text-sm text-muted-foreground">Q17&ndash;Q18</div>
          </a>
        </div>
      </div>

      {/* ── I. Execution & Program Control ── */}
      <section id="execution" className="mb-12">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-blue-500/30">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold shrink-0">
            I
          </span>
          <div>
            <h2 className="text-xl font-bold text-foreground">Execution &amp; Program Control</h2>
            <p className="text-sm text-muted-foreground">Questions 1&ndash;4</p>
          </div>
        </div>

        {/* Q1 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <h3 className="text-lg font-semibold text-foreground">How do you approach execution of a project?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What do you actually do Week 1?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What artifacts do you produce first?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> How do you avoid analysis paralysis?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What happens when your plan is wrong?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> Where is the product thinking?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What makes this Principal vs Senior?</li>
            </ul>
          </div>
        </div>

        {/* Q2 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <h3 className="text-lg font-semibold text-foreground">What if mid-program you realize you&apos;re slipping?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> How do you detect slippage early?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What metrics signal degradation?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What if executives insist on original date?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> How do you reset without losing credibility?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> How is this Principal-level?</li>
            </ul>
          </div>
        </div>

        {/* Q3 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <h3 className="text-lg font-semibold text-foreground">How would you manage a large distributed program with 6-month launch?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What if 6 months is unrealistic?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> How do you manage time zone friction?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What if you&apos;re slipping mid-way?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What tradeoffs flex when time is fixed?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What makes this Principal vs Senior?</li>
            </ul>
          </div>
        </div>

        {/* Q4 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">4</span>
            <h3 className="text-lg font-semibold text-foreground">1 developer, 10 testers, 1 lead platform &rarr; 10 subsequent platforms</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> Why not deploy all 10 at once?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What if developer becomes bottleneck?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> What if platforms differ significantly?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> How do you prevent defect multiplication?</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span> How is this Principal-level?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── II. Cross-Functional Alignment & Orchestration ── */}
      <section id="alignment" className="mb-12">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-purple-500/30">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold shrink-0">
            II
          </span>
          <div>
            <h2 className="text-xl font-bold text-foreground">Cross-Functional Alignment &amp; Orchestration</h2>
            <p className="text-sm text-muted-foreground">Questions 5&ndash;8</p>
          </div>
        </div>

        {/* Q5 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold shrink-0">5</span>
            <h3 className="text-lg font-semibold text-foreground">Have you handled multiple teams within a program?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> How did you prevent silos?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> How did you handle cross-team conflict?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> What makes this Principal vs Senior?</li>
            </ul>
          </div>
        </div>

        {/* Q6 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold shrink-0">6</span>
            <h3 className="text-lg font-semibold text-foreground">How do you establish sync across cross-functional stakeholders?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> What if stakeholders fundamentally disagree?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> How do you avoid bureaucratic overhead?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> How do you manage executive stakeholders?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> Is your framework too generic?</li>
            </ul>
          </div>
        </div>

        {/* Q7 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold shrink-0">7</span>
            <h3 className="text-lg font-semibold text-foreground">Have you ever been in disagreement with the entire team?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> What if they still disagree?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> Were you ever wrong?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> How do you prevent recurrence?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> How is this Principal-level?</li>
            </ul>
          </div>
        </div>

        {/* Q8 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold shrink-0">8</span>
            <h3 className="text-lg font-semibold text-foreground">Have you resolved a team conflict?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> What if one side refuses alignment?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> How do you institutionalize resolution?</li>
              <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5">&#x25B8;</span> What distinguishes structural conflict from interpersonal conflict?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── III. Leadership & Organizational Scaling ── */}
      <section id="leadership" className="mb-12">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-emerald-500/30">
          <span className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-lg font-bold shrink-0">
            III
          </span>
          <div>
            <h2 className="text-xl font-bold text-foreground">Leadership &amp; Organizational Scaling</h2>
            <p className="text-sm text-muted-foreground">Questions 9&ndash;12</p>
          </div>
        </div>

        {/* Q9 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold shrink-0">9</span>
            <h3 className="text-lg font-semibold text-foreground">How do you deal with underperforming team members?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> Why escalate only after improvement window?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What if Tier-0 risk is immediate?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> Give specific example.</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What if you misdiagnose?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What systemic change did you implement?</li>
            </ul>
          </div>
        </div>

        {/* Q10 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold shrink-0">10</span>
            <h3 className="text-lg font-semibold text-foreground">How do you motivate your team?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What if someone remains unmotivated?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> How do you motivate distributed teams?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> Isn&apos;t motivation the manager&apos;s job?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What makes this Principal-level?</li>
            </ul>
          </div>
        </div>

        {/* Q11 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold shrink-0">11</span>
            <h3 className="text-lg font-semibold text-foreground">How do you respond to difficult feedback from superiors?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What if you disagree?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> Have you ever ignored feedback?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> How do you prevent repeated feedback?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What makes this Principal-level?</li>
            </ul>
          </div>
        </div>

        {/* Q12 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold shrink-0">12</span>
            <h3 className="text-lg font-semibold text-foreground">How would you optimize scalability without increasing headcount?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What if the team is fully utilized?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What if automation isn&apos;t feasible?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> How do you prevent burnout?</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x25B8;</span> What makes this Principal-level?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── IV. Customer & Stakeholder Management ── */}
      <section id="customer" className="mb-12">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-amber-500/30">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold shrink-0">
            IV
          </span>
          <div>
            <h2 className="text-xl font-bold text-foreground">Customer &amp; Stakeholder Management</h2>
            <p className="text-sm text-muted-foreground">Questions 13&ndash;14</p>
          </div>
        </div>

        {/* Q13 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-bold shrink-0">13</span>
            <h3 className="text-lg font-semibold text-foreground">Tell us how you made a client cooperate.</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x25B8;</span> What if client refuses?</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x25B8;</span> What if they escalate emotionally?</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x25B8;</span> Have you ever failed to gain cooperation?</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x25B8;</span> How do you preserve long-term trust?</li>
            </ul>
          </div>
        </div>

        {/* Q14 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-bold shrink-0">14</span>
            <h3 className="text-lg font-semibold text-foreground">How do you handle a difficult customer who is upset and not listening?</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x25B8;</span> What if they interrupt constantly?</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x25B8;</span> What if they blame your team publicly?</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x25B8;</span> How do you rebuild trust after incident?</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#x25B8;</span> How is this Principal-level?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── V. Judgment & Ownership ── */}
      <section id="judgment" className="mb-12">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-red-500/30">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold shrink-0">
            V
          </span>
          <div>
            <h2 className="text-xl font-bold text-foreground">Judgment &amp; Ownership</h2>
            <p className="text-sm text-muted-foreground">Questions 15&ndash;16</p>
          </div>
        </div>

        {/* Q15 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold shrink-0">15</span>
            <h3 className="text-lg font-semibold text-foreground">Toughest decision you&apos;ve had to make.</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x25B8;</span> What was the measurable impact?</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x25B8;</span> What if you were wrong?</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x25B8;</span> Have you made a tough decision that failed?</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x25B8;</span> Why was this asymmetric risk?</li>
            </ul>
          </div>
        </div>

        {/* Q16 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold shrink-0">16</span>
            <h3 className="text-lg font-semibold text-foreground">Tell me about a mistake that delayed a critical project.</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x25B8;</span> How much delay?</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x25B8;</span> Why didn&apos;t you foresee it?</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x25B8;</span> What systemic correction did you make?</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">&#x25B8;</span> How do we know you won&apos;t repeat it?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── VI. Meta-Level Calibration ── */}
      <section id="meta" className="mb-12">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-cyan-500/30">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold shrink-0">
            VI
          </span>
          <div>
            <h2 className="text-xl font-bold text-foreground">Meta-Level Calibration</h2>
            <p className="text-sm text-muted-foreground">Questions 17&ndash;18</p>
          </div>
        </div>

        {/* Q17 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-sm font-bold shrink-0">17</span>
            <h3 className="text-lg font-semibold text-foreground">Do hiring managers really ask &quot;How is this Principal vs Senior?&quot;</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x25B8;</span> How do they infer level?</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x25B8;</span> What signals differentiate?</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x25B8;</span> Are you operating at system-level or delivery-level?</li>
            </ul>
          </div>
        </div>

        {/* Q18 */}
        <div className="mb-6 p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/20">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-sm font-bold shrink-0">18</span>
            <h3 className="text-lg font-semibold text-foreground">Framework convergence (CCRGC, 5C&apos;s, Intent/Interfaces/Incentives)</h3>
          </div>
          <div className="ml-11">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Pressure Tests</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x25B8;</span> Is this just generic structure?</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x25B8;</span> Is it over-structured?</li>
              <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">&#x25B8;</span> How do you adapt rigor to blast radius?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Pattern: The Principal Bar ── */}
      <section className="mb-8">
        <div className="p-8 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
          <h2 className="text-xl font-bold text-foreground mb-4">Pattern You Should Notice</h2>
          <p className="text-muted-foreground mb-4">
            Across all 18 questions, interviewers are repeatedly testing the same 6 competencies:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg border border-border">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <span className="text-sm text-foreground">Do you think in <strong>tradeoffs</strong>, not tasks?</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg border border-border">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <span className="text-sm text-foreground">Do you <strong>quantify risk economically</strong>?</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg border border-border">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <span className="text-sm text-foreground">Do you design <strong>control systems</strong>, not meetings?</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg border border-border">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <span className="text-sm text-foreground">Do you <strong>adapt when signal changes</strong>?</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg border border-border">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">5</span>
              <span className="text-sm text-foreground">Do you <strong>influence without authority</strong>?</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg border border-border">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">6</span>
              <span className="text-sm text-foreground">Do you protect <strong>margin and systemic stability</strong>?</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            That is the Principal bar at strong non-Mag7 companies.
          </p>
        </div>
      </section>
    </InterviewPrepLayout>
  );
}
