"use client";

/**
 * OpsGPT Story — Controlled Autonomy Under Production Governance
 *
 * Principal TPM interview narrative built around deploying an LLM-powered
 * operational assistant across a 130-component, 5M-subscriber platform:
 * - 125K queries/month, 80-90 users on Altice account
 * - Acceptance rate journey: 20% to 65% in 3 months via daily feedback triage
 * - Phased autonomy: suggestion mode, auto-resolution (7 ticket classes), expansion
 * - $150K build investment, $375-450K annualized capacity recovery, payback &lt;6 months
 * - 2.5-3 FTE equivalent recovered, 70-80% reduction in sr. engineer escalation
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// --- Data ---

const phase1Metrics = [
  { label: "Queries per month", value: "~125K" },
  { label: "Initial acceptance rate", value: "~20%" },
  { label: "After 3 months", value: "65% accepted, 20% modified, 15% rejected" },
  { label: "Weekly active users", value: "60-70 of 80-90 (75-80%)" },
  { label: "Sr. engineer escalation drop", value: "~70-80% for basic/medium questions" },
];

const phase2Metrics = [
  { label: "Auto-resolved tickets/month", value: "~200 across 7 ticket classes" },
  { label: "Time saved per ticket", value: "15-30 minutes" },
  { label: "Capacity recovered", value: "~50-100 engineer-hours/month" },
];

const summaryMetrics = [
  { metric: "Acceptance Rate", before: "~20%", after: "~65%", border: "border-emerald-500/30", bg: "bg-emerald-500/5", text: "text-emerald-600 dark:text-emerald-400" },
  { metric: "Queries/Month (Altice)", before: "0", after: "~125K", border: "border-blue-500/30", bg: "bg-blue-500/5", text: "text-blue-600 dark:text-blue-400" },
  { metric: "Weekly Active Users (Altice)", before: "0", after: "60-70 of 80-90", border: "border-purple-500/30", bg: "bg-purple-500/5", text: "text-purple-600 dark:text-purple-400" },
  { metric: "Phase 2 Auto-Resolved/Month", before: "0", after: "~200 tickets", border: "border-cyan-500/30", bg: "bg-cyan-500/5", text: "text-cyan-600 dark:text-cyan-400" },
  { metric: "Sr. Engineer Escalation", before: "Baseline", after: "Reduced ~70-80%", border: "border-amber-500/30", bg: "bg-amber-500/5", text: "text-amber-600 dark:text-amber-400" },
  { metric: "Capacity Recovered", before: "0", after: "~2.5-3 FTE equivalent", border: "border-rose-500/30", bg: "bg-rose-500/5", text: "text-rose-600 dark:text-rose-400" },
];

const pressureTests = [
  {
    id: "E1",
    badge: "Engineer",
    question: "20% initial acceptance is terrible. How did you justify continuing?",
    response:
      "We set expectations before launch that initial accuracy would be low. The value proposition was never \"deploy and it works\" \u2014 it was \"deploy, measure, and systematically improve.\" We committed to leadership that if acceptance didn't reach 50% within 90 days through the feedback loop, we'd reassess the investment. We hit 65%. The trajectory justified the approach \u2014 20% was the starting point, not the verdict.",
  },
  {
    id: "E2",
    badge: "Engineer",
    question: "R&D fine-tuned the model. Your team did RAG and governance. Aren't you just taking credit for someone else's work?",
    response:
      "R&D provided a domain-adapted Mistral model as a service. That model served multiple account teams across the division. What differentiated our team's results was everything we built on top \u2014 the account-specific RAG corpus, the governance framework, the daily feedback triage that drove acceptance from 20% to 65%, the phased autonomy model, the Phase 2 auto-resolution implementation. Other account teams consumed the same base model with different results. The model was necessary but the production value came from the application and governance layer.",
  },
  {
    id: "E3",
    badge: "Engineer",
    question: "125K queries per month from 80-90 users? That's over 1,400 queries per user per month \u2014 almost 50 per day. Is that real?",
    response:
      "Yes, and it makes sense in context. These aren't conversational queries like ChatGPT. Engineers were using OpsGPT as their primary diagnostic interface \u2014 log analysis, error lookup, runbook retrieval, ticket correlation. A single incident investigation might generate 10-15 queries as the engineer iterates through diagnosis. On a 130-component platform with active on-call rotations, high query volume per user is expected. Think of it as a search engine for operational knowledge, not a chatbot.",
  },
  {
    id: "V1",
    badge: "VP Eng",
    question: "What's the ROI? Give me the number.",
    response:
      "Conservative estimate: 2.5-3 FTE equivalent capacity recovered on a 110-person team \u2014 roughly $375-450K annualized. Against a build investment of approximately $150K in engineering time. Payback under six months. That excludes the harder-to-quantify benefits like reduced MTTR variance, faster junior engineer ramp time, and improved RCA documentation quality. The capacity recovery alone justified the investment.",
  },
  {
    id: "V2",
    badge: "VP Eng",
    question: "Why Mistral? Why not just use GPT-4 or Claude?",
    response:
      "R&D made the model selection. Their rationale was that Mistral's architecture was better suited for fine-tuning with domain-specific telecom knowledge, and self-hosting gave us data sovereignty \u2014 our operational data, runbooks, and incident history didn't leave our infrastructure. For an internal tool handling production operational data, keeping the model and data on-premise was a security and compliance requirement, not just a preference.",
  },
  {
    id: "F1",
    badge: "CFO",
    question: "Why not automate everything from day one? Why the slow rollout?",
    response:
      "Autonomy increases blast radius non-linearly. A suggestion-mode error costs 15 minutes of an engineer's time. An auto-resolution error means a real production issue goes unaddressed until it escalates \u2014 potentially causing subscriber impact. We expanded automation only after observed precision stabilized for each ticket class. Phase 2 was limited to 7 ticket classes with deterministic remediation \u2014 not because we couldn't automate more, but because those 7 were the only classes where our precision metrics met the threshold. Controlled autonomy protects SLA exposure while still delivering capacity recovery.",
  },
  {
    id: "E4",
    badge: "Engineer",
    question: "You said confidence thresholds were dynamically adjusted. How?",
    response:
      "I should be precise \u2014 they were adjusted through a weekly review process, not dynamically by an algorithm in real-time. The team reviewed precision metrics per ticket class weekly. If a ticket class showed elevated reopen rates or declining acceptance, the confidence threshold for auto-resolution was raised, effectively reducing automation for that class until precision recovered. If a class was consistently performing above threshold, it became a candidate for autonomy expansion. Pragmatic manual governance, not automated ML \u2014 but it worked.",
  },
  {
    id: "E5",
    badge: "Engineer",
    question: "Phase 3 is 'partially deployed.' What does that actually mean?",
    response:
      "Phase 3 is the governance process for expanding the Phase 2 boundary \u2014 evaluating additional ticket classes for auto-resolution eligibility. When I transitioned, we had 7 ticket classes in Phase 2 and 3-4 additional classes in evaluation against the expansion criteria: sustained precision above threshold, false resolution rate below target, and confidence calibration stable over a 30-day window. Phase 3 isn't a separate technical architecture \u2014 it's the measured process for growing Phase 2 scope. I'm transparent about this being in progress rather than complete.",
  },
  {
    id: "V3",
    badge: "VP Eng",
    question: "If you left, does OpsGPT keep working? Or does it collapse?",
    response:
      "The system is operationally sustainable because the processes are documented and the team is trained. The daily feedback triage, weekly metric reviews, and monthly leadership reporting are established routines with defined ownership. The RAG corpus improvement process is the critical ongoing activity \u2014 that requires disciplined triage, not my personal involvement. The governance framework \u2014 metric thresholds, expansion criteria, Phase 2 eligibility requirements \u2014 is documented and understood by the team. The risk is that without someone advocating for continued investment and rigor, the feedback loop discipline could decay over time. But the system itself doesn't depend on any single person.",
  },
];

const principalCaliberItems = [
  "Clear role definition: championed, governed, drove adoption \u2014 didn't claim to build what R&D built",
  "Honest about starting point: 20% acceptance, not a success-from-day-one narrative",
  "Measurable improvement trajectory: 20% \u2192 65% over 3 months with specific mechanism (daily feedback triage)",
  "Real volume: 125K queries/month, 75-80% weekly engagement, 200 auto-resolved tickets/month",
  "Economic framing with investment and payback: $150K investment \u2192 $375-450K annualized recovery \u2192 under 6 months payback",
  "Phased autonomy with honest scoping: Phase 1 and 2 fully shipped, Phase 3 in progress \u2014 not oversold",
  "Governance matched to actual risk at each phase, not theoretical maximum risk",
  "Principal TPM positioning: secured funding against competing proposal, managed R&D dependency, drove adoption, reported to leadership",
  "Specific insight earned from experience: model got us to 20%, feedback loop got us to 65% \u2014 the product is the knowledge system, not the model",
];

// --- Page ---

export default function OpsGPTStoryPage() {
  return (
    <InterviewPrepLayout
      title="OpsGPT Story"
      description="Controlled Autonomy Under Production Governance"
      currentSection="opsgpt-story"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Interview Prep
      </Link>

      {/* Cross-reference */}
      <div className="mb-6 p-3 bg-muted/30 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Related:</strong>{" "}
          <Link href="/nebula/interview-prep/reliability-story" className="text-primary hover:underline">
            Reliability Story &rarr;
          </Link>
          {" "}&bull;{" "}
          <Link href="/nebula/interview-prep/more-stories" className="text-primary hover:underline">
            More STAR Stories &rarr;
          </Link>
        </p>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            AI / LLM
          </span>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
            Production Governance
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            125K Queries/Month
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">OpsGPT &mdash; Controlled Autonomy Under Production Governance</h1>
        <p className="text-muted-foreground leading-relaxed">
          LLM-powered operational assistant serving <strong className="text-foreground">125K queries/month</strong> across
          a 130-component, 5M-subscriber telecom platform. Acceptance rate from <strong className="text-foreground">20% to 65%</strong> in
          three months through systematic daily feedback triage.
        </p>
        <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/30">
          <p className="text-foreground font-semibold italic text-center">
            &ldquo;The model got us to 20%. The feedback loop got us to 65%. The product is the knowledge system, not the model.&rdquo;
          </p>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "#context", label: "Context", desc: "Knowledge bottleneck at 5M scale", color: "border-blue-500/30" },
            { href: "#risk-framing", label: "Risk Framing", desc: "Productivity regression, not customer exposure", color: "border-red-500/30" },
            { href: "#decision-fork", label: "Decision Fork", desc: "Suggestion tool vs phased autonomy", color: "border-amber-500/30" },
            { href: "#guardrail-architecture", label: "Guardrail Architecture", desc: "Three-phase deployment model", color: "border-emerald-500/30" },
            { href: "#feedback-system", label: "Feedback System", desc: "Daily triage, corpus improvement", color: "border-purple-500/30" },
            { href: "#my-role", label: "My Role", desc: "Champion, govern, drive adoption", color: "border-cyan-500/30" },
            { href: "#economic-framing", label: "Economic Framing", desc: "$150K invest, $375-450K return", color: "border-indigo-500/30" },
            { href: "#measured-impact", label: "Measured Impact", desc: "Metrics summary table", color: "border-rose-500/30" },
            { href: "#principal-insight", label: "Principal Insight", desc: "Knowledge system, not model", color: "border-violet-500/30" },
            { href: "#delivery-script", label: "90-Second Delivery", desc: "Live interview script", color: "border-violet-500/30" },
            { href: "#pressure-tests", label: "Pressure Tests", desc: "9 hostile panel Q&As", color: "border-red-500/30" },
          ].map((nav) => (
            <a key={nav.href} href={nav.href} className={`p-3 bg-background rounded-lg border ${nav.color} hover:opacity-80 transition-opacity`}>
              <div className="font-medium text-foreground text-sm">{nav.label}</div>
              <div className="text-xs text-muted-foreground">{nav.desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* 1. Context */}
      <section id="context" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
          <h2 className="text-2xl font-bold text-foreground">Context &mdash; Knowledge Bottleneck at 5M Scale</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <p className="text-foreground leading-relaxed">
              Post-integration, we were operating <strong className="text-blue-600 dark:text-blue-400">130+ independently managed application components</strong> supporting
              ~5M subscribers across billing, provisioning, mediation, and integration layers.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-3">The Problem</div>
            <p className="text-foreground leading-relaxed mb-4">
              SRE and Dev teams relied on <strong>fragmented runbooks, tribal knowledge, manual log correlation, and
              senior engineer escalation</strong>. MTTR variance was high &mdash; diagnosis speed depended entirely on who was on-call.
              Junior engineers were frequently blocked waiting for senior availability on issues that were
              well-documented somewhere but not accessible in the moment.
            </p>
            <p className="text-foreground leading-relaxed">
              Executive leadership was pushing to reduce operational costs without adding headcount.
              We needed to reduce MTTR, standardize root cause analysis, scale institutional knowledge access,
              and improve engineering throughput &mdash; all within existing budget.
            </p>
          </div>

          {/* Organizational Context */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Organizational Context</div>
            <p className="text-foreground leading-relaxed mb-4">
              OpsGPT was built as a fully custom internal tool across our division (<strong>~650 engineers</strong> across
              multiple MSO accounts including Comcast, T-Mobile, Charter). My team of <strong>~110 engineers on the Altice
              account</strong> (5M subscribers) was one of several account teams using the platform.
            </p>
            <p className="text-foreground leading-relaxed">
              Each account team was responsible for their own RAG corpus, confidence tuning, and governance &mdash;
              because each account had unique customization, architecture, and operational procedures.
            </p>
          </div>

          {/* Build vs Consume */}
          <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-3">Build vs. Consume Boundary</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-background/60 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm mb-2">R&amp;D Provided (Consumed)</div>
                <p className="text-sm text-foreground">Mistral base model fine-tuned with telecom domain knowledge &mdash; a domain-adapted LLM provided to account teams as a service.</p>
              </div>
              <div className="p-4 bg-background/60 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm mb-2">My Team Built</div>
                <p className="text-sm text-foreground">RAG pipeline, governance framework, phased autonomy model, confidence scoring, feedback ingestion, corpus improvement processes, productization for 80-90 users.</p>
              </div>
            </div>
            <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-center">
              <p className="text-sm text-foreground font-medium">
                Total engineering investment: <strong className="text-amber-600 dark:text-amber-400">12+ FTE-months</strong> across
                RAG, governance, and productization layers (excluding R&amp;D&apos;s model training effort).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Risk Framing */}
      <section id="risk-framing" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
          <h2 className="text-2xl font-bold text-foreground">The Risk &mdash; Productivity Regression, Not Customer Exposure</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              This was <strong>internal tooling</strong> &mdash; no direct customer-facing exposure. But operational risk was real.
              If OpsGPT provided incorrect remediation guidance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-background/60 rounded-lg border border-red-500/20">
                <div className="font-semibold text-foreground text-sm mb-1">SRE Impact</div>
                <p className="text-sm text-foreground">Wrong diagnosis path &rarr; increased MTTR &rarr; potential SLA breach on Tier-0 systems</p>
              </div>
              <div className="p-4 bg-background/60 rounded-lg border border-red-500/20">
                <div className="font-semibold text-foreground text-sm mb-1">Dev Impact</div>
                <p className="text-sm text-foreground">Incorrect code patterns or architectural guidance &rarr; increased rework &rarr; defect risk in production</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-red-500/10 to-transparent rounded-lg border border-red-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Risk Scaled With Autonomy</div>
            <p className="text-foreground leading-relaxed">
              <strong>Phase 1</strong> (suggestion mode): bounded risk &mdash; engineer reads a bad suggestion, recognizes it, wastes 15 minutes.
              <br />
              <strong>Phase 2</strong> (auto-resolution): higher risk &mdash; a ticket closed incorrectly means a real issue goes unaddressed
              until it resurfaces or escalates.
              <br />
              <span className="font-medium italic">Risk framing matched deployment phase. We didn&apos;t treat Phase 1 suggestion mode like it was autonomous remediation.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Decision Fork */}
      <section id="decision-fork" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
          <h2 className="text-2xl font-bold text-foreground">Explicit Fork &mdash; Autonomy vs. Control</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Option A */}
          <div className="rounded-xl border border-red-500/30 overflow-hidden">
            <div className="bg-red-500/10 px-6 py-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border-2 border-red-500/30 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">A</span>
              <h3 className="text-lg font-semibold text-foreground">AI as Suggestion Tool Only</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2.5">
                {[
                  "Human validates all outputs permanently",
                  "No system-triggered actions",
                  "Lower risk, lower productivity gain",
                  "Caps the value at \"faster search\"",
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Option B */}
          <div className="rounded-xl border border-emerald-500/30 overflow-hidden">
            <div className="bg-emerald-500/10 px-6 py-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold flex-shrink-0">B</span>
              <h3 className="text-lg font-semibold text-foreground">AI with Phased, Governed Autonomy</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2.5">
                {[
                  "Start with suggestion mode, build trust through measured accuracy",
                  "Expand to deterministic auto-resolution for validated ticket classes",
                  "Gate every autonomy expansion on observed precision metrics",
                  "Maintain rollback capability at every phase",
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/30">
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
            <p className="text-foreground font-semibold">We chose Option B &mdash; phased autonomy with metric-gated expansion.</p>
          </div>
        </div>
      </section>

      {/* 4. Guardrail Architecture */}
      <section id="guardrail-architecture" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
          <h2 className="text-2xl font-bold text-foreground">Guardrail Architecture</h2>
        </div>

        <div className="space-y-6">
          {/* Base Model */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Base Model</div>
            <p className="text-foreground leading-relaxed">
              R&amp;D provided a Mistral model fine-tuned with telecom domain knowledge. We consumed this as a service.
              <strong> We did not modify model weights.</strong> All improvement on our side came through RAG corpus optimization,
              prompt structure refinement, confidence threshold tuning, and feedback-driven knowledge augmentation.
            </p>
          </div>

          {/* Phase 1 */}
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">Phase 1</span>
              <div className="text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400">Suggestion Mode (Fully Deployed)</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                "RAG grounding from indexed account-specific corpus",
                "Confidence scoring per response",
                "Mandatory human validation \u2014 no action without engineer approval",
                "Citation-backed outputs referencing source documents",
                "Full audit logging of prompts and responses",
                "Structured feedback tagging: Accepted / Modified / Rejected",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>

            {/* Feedback Loop */}
            <div className="p-4 bg-background/60 rounded-lg border border-blue-500/20 mb-4">
              <div className="font-semibold text-foreground text-sm mb-2">Daily Rejection Triage Process</div>
              <ul className="space-y-1.5 text-sm text-foreground">
                {[
                  "Dedicated team reviewed every rejected and modified response daily",
                  "Root cause categorized: missing documentation? Ambiguous query? Retrieval miss? Wrong answer?",
                  "Missing documentation \u2192 new docs created and added to RAG corpus",
                  "Retrieval miss \u2192 ranking adjusted, prompt structure refined",
                  "Unclear feedback \u2192 team contacted user directly for clarification",
                  "Metrics discussed weekly in working forum, monthly in leadership review",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5 text-xs">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 text-center">
              <p className="text-sm text-foreground font-medium">
                This closed-loop daily improvement process drove acceptance from <strong className="text-blue-600 dark:text-blue-400">~20% to 65%</strong> in
                three months. It was not model magic &mdash; it was systematic knowledge gap identification and corpus augmentation.
              </p>
            </div>

            {/* Phase 1 Metrics */}
            <div className="mt-4 p-4 bg-background/60 rounded-lg border border-border">
              <div className="font-semibold text-foreground text-sm mb-3">Phase 1 Metrics (Altice Account &mdash; 80-90 Users)</div>
              <div className="space-y-2">
                {phase1Metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between text-sm border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">{m.label}</span>
                    <span className="font-medium text-foreground">{m.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Division-wide (450+ users across ~650 engineers): ~180-220 weekly active users.
              </p>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">Phase 2</span>
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Controlled Action Mode (Fully Deployed)</div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Auto-resolution restricted to <strong>7 predefined low-risk ticket classes</strong> &mdash; well-understood, repetitive
              incident types with deterministic remediation:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                "Service restart",
                "Log collection & analysis",
                "Configuration reset",
                "Standard health checks",
                "Known-error pattern matching",
                "Deterministic workflows only",
                "Confidence threshold gate",
              ].map((item, i) => (
                <div key={i} className="p-2.5 bg-background/60 rounded-lg border border-emerald-500/20 text-center">
                  <span className="text-xs text-foreground">{item}</span>
                </div>
              ))}
              <div className="p-2.5 bg-background/60 rounded-lg border border-emerald-500/20 text-center">
                <span className="text-xs text-foreground font-medium">Auto-rollback on failure</span>
              </div>
            </div>

            {/* Phase 2 Metrics */}
            <div className="p-4 bg-background/60 rounded-lg border border-border">
              <div className="font-semibold text-foreground text-sm mb-3">Phase 2 Metrics</div>
              <div className="space-y-2">
                {phase2Metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between text-sm border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">{m.label}</span>
                    <span className="font-medium text-foreground">{m.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Reopen rate monitored per ticket class &mdash; any class exceeding threshold was pulled back to suggestion-only mode.
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">Phase 3</span>
              <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400">Expanded Autonomy (Partially Deployed)</div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Autonomy expansion criteria for adding new ticket classes to Phase 2:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {[
                { label: "Precision", desc: "Stabilized above threshold for candidate ticket class" },
                { label: "False Resolution", desc: "Reopen within 48 hours below target rate" },
                { label: "Confidence Calibration", desc: "Variance acceptable over 30-day rolling window" },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-background/60 rounded-lg border border-purple-500/20">
                  <div className="font-semibold text-foreground text-sm">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              Approximately <strong>3-4 additional ticket classes</strong> were in evaluation when I transitioned. Phase 3 is the
              governance process for expanding the Phase 2 boundary &mdash; not a separate technical architecture.
              Confidence thresholds were adjusted through a <strong>weekly review process</strong>, not dynamically by an algorithm.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Feedback-Driven System Improvement */}
      <section id="feedback-system" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">5</span>
          <h2 className="text-2xl font-bold text-foreground">Feedback-Driven System Improvement</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              The core innovation was not the LLM. It was the <strong className="text-purple-600 dark:text-purple-400">feedback ingestion
              and knowledge improvement process</strong>.
            </p>
            <p className="text-foreground leading-relaxed">
              Every response was tagged. Every rejection was triaged daily. Correction patterns were appended to the RAG corpus.
              Retrieval ranking was updated based on which documents were being cited in accepted vs. rejected responses.
              This created a measurable improvement trajectory &mdash; the acceptance rate curve from 20% to 65% over three months was the proof.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-2">Key Distinction</div>
            <p className="text-foreground font-medium italic">
              We did not rely on model retraining to improve. We engineered improvement through systematic knowledge refinement
              on our side of the boundary. The fine-tuned Mistral model from R&amp;D was a fixed input. Everything we improved
              was in the RAG corpus, prompt structure, and retrieval quality.
            </p>
          </div>
        </div>
      </section>

      {/* 6. My Role */}
      <section id="my-role" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">6</span>
          <h2 className="text-2xl font-bold text-foreground">My Specific Role</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5">
            <p className="text-foreground leading-relaxed font-medium">
              I did not build the RAG pipeline or write the code. My role was:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Championing and Securing Funding",
                desc: "Executive leadership was pushing for cost reduction. I identified the operational knowledge bottleneck as the highest-leverage target and built the business case for investing 12+ FTE-months in tooling rather than hiring additional L2/L3 support engineers. The alternative proposal was adding 3-4 senior engineers to reduce escalation load \u2014 I argued that scaling knowledge access through tooling had better long-term economics than scaling headcount.",
              },
              {
                title: "Designing the Governance Framework",
                desc: "The three-phase autonomy model, the metric gates for expansion, the feedback tagging taxonomy, the PRR-style artifact requirements for adding new auto-resolution ticket classes. I defined what \"safe\" looked like at each phase and what criteria had to be met before expanding scope.",
              },
              {
                title: "Driving Adoption",
                desc: "Initial acceptance was 20%. Engineers didn't trust it. I drove the feedback loop process \u2014 making rejected response triage a daily operational discipline, not an afterthought. I also made the tool's improvement visible to the team by sharing weekly metrics on acceptance rate trajectory. Adoption grew because engineers saw the tool getting better in response to their feedback.",
              },
              {
                title: "Managing the R&D Dependency",
                desc: "We consumed the fine-tuned model from R&D as a service. When retrieval quality issues turned out to be model-level rather than corpus-level, I escalated to R&D with specific failure patterns and worked with them on prompt template adjustments. Managing that boundary \u2014 knowing when an issue was on our side (corpus/retrieval) vs. their side (model behavior) \u2014 was a continuous coordination effort.",
              },
              {
                title: "Reporting to Leadership",
                desc: "Monthly metrics to division leadership on adoption, acceptance rate, auto-resolution volume, and capacity impact. This is what justified continued investment and eventual expansion to other account teams.",
              },
            ].map((item) => (
              <div key={item.title} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm mb-2">{item.title}</div>
                <p className="text-sm text-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Economic Framing */}
      <section id="economic-framing" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">7</span>
          <h2 className="text-2xl font-bold text-foreground">Economic Framing</h2>
        </div>

        <div className="space-y-6">
          {/* Investment */}
          <div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-3">Investment</div>
            <p className="text-foreground leading-relaxed">
              <strong>12+ FTE-months</strong> of engineering time at ~$150K blended annual cost = <strong>~$150K+</strong> direct build investment.
              Plus ongoing operational cost: daily triage team, weekly reviews, LLM API/infrastructure costs.
            </p>
          </div>

          {/* Returns */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">Returns (Altice Account, Measurable)</div>
            <div className="space-y-4">
              <div className="p-4 bg-background/60 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm mb-1">Phase 1: Senior Engineer Escalation Reduction</div>
                <p className="text-sm text-foreground leading-relaxed">
                  Reduced by estimated 70-80%. With ~15-20 senior engineers, even a conservative 5 hours/week freed per
                  senior = 75-100 hours/week recovered = roughly <strong>2-2.5 FTE equivalent</strong> redirected to higher-value work.
                </p>
              </div>
              <div className="p-4 bg-background/60 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm mb-1">Phase 2: Auto-Resolution Capacity</div>
                <p className="text-sm text-foreground leading-relaxed">
                  ~200 tickets/month at ~20-30 minutes each = ~65-100 hours/month = roughly <strong>0.5 FTE equivalent</strong>.
                </p>
              </div>
              <div className="p-4 bg-background/60 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm mb-1">Junior Engineer Ramp Time</div>
                <p className="text-sm text-foreground leading-relaxed">
                  Not quantified precisely but directionally significant &mdash; new engineers were productive on operational tasks
                  faster because institutional knowledge was accessible through the tool rather than gated behind senior availability.
                </p>
              </div>
            </div>
          </div>

          {/* ROI Summary */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-center p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                <div className="text-xs text-muted-foreground">Build Investment</div>
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">~$150K</div>
                <div className="text-xs text-muted-foreground">12+ FTE-months</div>
              </div>
              <div className="text-center text-2xl text-muted-foreground font-light">&rarr;</div>
              <div className="text-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <div className="text-xs text-muted-foreground">Annualized Recovery</div>
                <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">$375-450K</div>
                <div className="text-xs text-muted-foreground">~2.5-3 FTE equivalent</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
              <div className="text-xs text-muted-foreground">Payback period</div>
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">&lt; 6 months</div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic text-center">
              Excludes: reduced MTTR variance, improved RCA documentation quality, reduced engineer frustration on on-call rotations.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Measured Impact Summary */}
      <section id="measured-impact" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">8</span>
          <h2 className="text-2xl font-bold text-foreground">Measured Impact Summary</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {summaryMetrics.map((m) => (
            <div key={m.metric} className={`p-5 rounded-xl border ${m.border} ${m.bg}`}>
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">{m.metric}</div>
              <div className="flex items-center gap-3">
                <div className="text-sm text-muted-foreground">{m.before}</div>
                <span className="text-muted-foreground">&rarr;</span>
                <div className={`text-lg font-bold ${m.text}`}>{m.after}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Principal Insight */}
      <section id="principal-insight" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-violet-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">9</span>
          <h2 className="text-2xl font-bold text-foreground">Principal Insight</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-violet-500/30 bg-violet-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              The hard problem was not AI accuracy. Accuracy started at 20% &mdash; that&apos;s terrible.
              The hard problem was building the <strong>operational discipline to systematically improve it</strong> and
              the <strong>governance framework to expand autonomy safely</strong> as it improved.
            </p>
            <p className="text-foreground leading-relaxed">
              Most AI deployments in production operations fail for one of two reasons: they launch with insufficient accuracy
              and engineers lose trust permanently, or they launch with no feedback mechanism and accuracy never improves.
              We solved both &mdash; we launched knowing accuracy would be low, set expectations accordingly, built the daily
              feedback loop that made improvement visible, and earned trust through demonstrated trajectory rather than initial performance.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-violet-500/10 to-transparent rounded-lg border border-violet-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400 mb-2">The Specific Insight</div>
            <p className="text-foreground font-medium italic">
              The fine-tuned model from R&amp;D was necessary but not sufficient. Model quality got us from unusable to 20% acceptance.
              Systematic RAG corpus improvement and retrieval optimization &mdash; driven by daily triage of every rejection &mdash;
              got us from 20% to 65%. The model was the foundation. The feedback loop was the product.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/30">
            <p className="text-foreground leading-relaxed text-center">
              AI in production operations must be governed like any critical service: <strong>instrumented, audited, rollback-capable,
              and expanded only when metrics justify it</strong>. But more importantly, it must be treated as a knowledge system that
              improves through structured human feedback, not as a model that improves through retraining.
            </p>
          </div>

          {/* Why Principal-Caliber */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">Why This Story Is Principal-Caliber</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {principalCaliberItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs flex-shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 90-Second Live Delivery */}
      <section id="delivery-script" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-violet-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
            <span className="text-sm">&#9654;</span>
          </span>
          <h2 className="text-2xl font-bold text-foreground">90-Second Live Delivery</h2>
        </div>

        <div className="p-6 rounded-xl border border-violet-500/30 bg-violet-500/5">
          <div className="text-xs font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400 mb-4">
            Speak This &mdash; Do Not Read It
          </div>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Executive leadership was pushing to reduce operational costs across our <strong>130-component, 5M-subscriber</strong> billing
              and provisioning platform. I identified the biggest leverage point: our engineering team&apos;s dependency on tribal knowledge
              and senior engineer availability for incident diagnosis. Junior engineers were blocked, MTTR varied wildly based on who was
              on-call, and we were spending cycles on problems that were well-documented somewhere but not accessible in the moment.
            </p>
            <p>
              I championed building <strong>OpsGPT</strong> &mdash; an LLM-powered operational assistant. Our R&amp;D organization had
              fine-tuned a Mistral model with telecom domain knowledge. My team of 110 built everything on top: the RAG pipeline indexing
              our account-specific runbooks, RCA docs, and three years of historical tickets; the governance framework; and the phased
              autonomy model. Total investment was <strong>12-plus FTE-months</strong>.
            </p>
            <p>
              We launched Phase 1 as suggestion-only with mandatory human validation. Initial acceptance rate was about <strong>20%</strong> &mdash;
              engineers didn&apos;t trust it. But we built a <strong>daily feedback triage process</strong> &mdash; every rejected response
              was analyzed, root-caused, and used to improve the RAG corpus. Within three months, acceptance climbed to <strong>65%</strong>.
              We were handling about <strong>125,000 queries per month</strong> with 75-80% weekly engagement across the team.
            </p>
            <p>
              Phase 2 introduced auto-resolution for <strong>7 low-risk ticket classes</strong> &mdash; deterministic workflows like
              service restarts, log collection, config resets. About 200 tickets per month auto-resolved. Senior engineer escalation
              for basic-to-medium questions dropped roughly <strong>70-80%</strong>. Total estimated capacity recovery was about
              <strong> 2.5-3 FTE equivalent</strong> against a $150K build investment &mdash; payback under six months.
            </p>
            <p className="font-semibold italic">
              The key insight: the model got us from unusable to 20% acceptance. The feedback loop &mdash; daily triage of every rejection,
              systematic corpus improvement, weekly metrics reviews &mdash; got us from 20% to 65%. AI in production ops isn&apos;t a model
              problem. It&apos;s a knowledge management and governance problem.
            </p>
          </div>
        </div>
      </section>

      {/* Pressure Tests */}
      <section id="pressure-tests" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">Q</span>
          <h2 className="text-2xl font-bold text-foreground">Pressure Tests &mdash; Hostile Panel</h2>
        </div>

        <div className="space-y-5">
          {pressureTests.map((q) => (
            <div key={q.id} className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {q.id}
                </span>
                <div>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full mr-2 ${
                    q.badge === "Engineer" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" :
                    q.badge === "VP Eng" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400" :
                    "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                  }`}>
                    {q.badge}
                  </span>
                  <h3 className="font-semibold text-foreground inline">&ldquo;{q.question}&rdquo;</h3>
                </div>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">{q.response}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
        <Link
          href="/nebula/interview-prep/reliability-story"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Reliability Story
        </Link>
        <Link
          href="/nebula/interview-prep/more-stories"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          More STAR Stories &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
