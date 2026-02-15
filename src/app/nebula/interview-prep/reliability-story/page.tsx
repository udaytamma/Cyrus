"use client";

/**
 * Reliability Transformation Story - Anchor Interview Narrative
 *
 * Principal TPM interview narrative built around a reliability transformation
 * across a 130-component platform portfolio:
 * - Horizontal-to-vertical ownership reorg of 110 engineers
 * - PRR gates and error budgets as operational guidelines
 * - Flash cut reorg rationale over incremental approach
 * - $4M annualized productivity tax quantification
 * - 30-40% Sev-1/2 reduction, 50% change-induced incident drop
 * - Reactive engineering load from 25% to 12-15%
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// --- Data ---

const impactMetrics = [
  { metric: "Sev-1/2 Incidents", before: "Baseline", after: "30-40% reduction", border: "border-emerald-500/30", bg: "bg-emerald-500/5", text: "text-emerald-600 dark:text-emerald-400" },
  { metric: "Change-Induced Incidents", before: "Baseline", after: "50% reduction", border: "border-blue-500/30", bg: "bg-blue-500/5", text: "text-blue-600 dark:text-blue-400" },
  { metric: "Reactive Engineering Load", before: "~25%", after: "12-15%", border: "border-purple-500/30", bg: "bg-purple-500/5", text: "text-purple-600 dark:text-purple-400" },
  { metric: "Productivity Tax", before: "$4M annualized", after: "Eliminated", border: "border-amber-500/30", bg: "bg-amber-500/5", text: "text-amber-600 dark:text-amber-400" },
];

const pressureTestsEngVP = [
  {
    id: "E1",
    badge: "Engineer",
    question: "Why flash-cut the reorg instead of an incremental rollout?",
    response:
      "Incremental creates dual ownership during transition \u2014 the horizontal teams still own operational response while vertical teams are ramping. You get the worst of both: nobody has full context, escalation paths fork, and incident response degrades during the transition period. A flash cut is painful for 2-3 weeks but eliminates the ambiguity window. We mitigated with pre-built runbooks, shadow rotations before cutover, and a 30-day stabilization period where the old horizontal leads remained available as escalation backstops.",
  },
  {
    id: "E2",
    badge: "VP Eng",
    question: "How did you get 110 engineers to accept a reorg they didn't ask for?",
    response:
      "I didn't frame it as a reorg \u2014 I framed it as eliminating the $4M productivity tax they were already paying. Engineers were spending 25% of their time on reactive work caused by ownership gaps, not by technical complexity. The pitch was: you're already doing this work, you're just doing it inefficiently because you don't own the full stack. Vertical ownership means fewer 3 AM pages for components you don't understand, fewer cross-team escalations, and more time on the work you actually want to do. The economic framing gave leadership cover; the quality-of-life framing got engineering buy-in.",
  },
  {
    id: "E3",
    badge: "Engineer",
    question: "Error budgets sound like SRE theater. How were they actually enforced?",
    response:
      "They weren't SLOs with automated enforcement \u2014 they were operational guidelines that triggered review gates. When a component burned through its error budget, it triggered a mandatory PRR before any new changes could deploy. The PRR wasn't a rubber stamp \u2014 it required root cause analysis of the reliability burn, remediation plan, and explicit sign-off from the vertical owner. The enforcement mechanism was deployment gates, not dashboards. If your error budget was exhausted, your next deployment required PRR approval. That made it real.",
  },
  {
    id: "E4",
    badge: "VP Eng",
    question: "What if vertical ownership creates silos? Horizontals existed for a reason.",
    response:
      "The horizontal model existed because the platform grew organically and teams were organized around technical layers, not around business outcomes. The problem is that layer ownership optimizes for component health, not for end-to-end reliability. When an incident spans three layers, nobody owns the customer impact \u2014 each team owns their slice. Vertical ownership means one team owns the customer-facing outcome across the stack. We preserved cross-cutting functions like platform infrastructure, security, and observability as shared services. The verticals own the business logic and reliability; the horizontals own the shared platform.",
  },
  {
    id: "E5",
    badge: "Engineer",
    question: "How did you measure the $4M productivity tax? That sounds made up.",
    response:
      "Three inputs. First, incident response time: average hours per Sev-1/2 incident multiplied by number of incidents per quarter multiplied by fully loaded engineering cost. Second, cross-team coordination overhead: measured by tracking escalation chains \u2014 average number of teams involved per incident, average time to identify the owning team, average time spent in war rooms by non-owning teams. Third, context-switching cost: we surveyed engineers on percentage of time spent on reactive work versus planned work. The $4M was conservative \u2014 it excluded opportunity cost of delayed feature work and only counted direct incident response and coordination time. Finance validated the methodology.",
  },
  {
    id: "E6",
    badge: "VP Eng",
    question: "130 components across 110 engineers \u2014 that's barely more than one per person. How is that a Principal-level problem?",
    response:
      "The complexity wasn't the component count \u2014 it was the ownership topology. Components had shared dependencies, overlapping blast radii, and no clear escalation paths. The same engineer might own a component but have no authority over the three upstream components that caused 80% of its incidents. The Principal-level problem was redesigning the ownership model so that accountability aligned with blast radius, not with codebase boundaries. That required organizational architecture, not just technical architecture.",
  },
  {
    id: "E7",
    badge: "CFO",
    question: "You saved $4M in productivity tax. What did the reorg itself cost?",
    response:
      "The reorg cost was primarily coordination time \u2014 roughly 6 weeks of reduced velocity during planning and transition. No headcount changes, no external consulting, no tooling purchases. The investment was leadership time for design, communication, and the 30-day stabilization period. If you model 110 engineers at 15% reduced velocity for 6 weeks, that is approximately $500K-$700K in opportunity cost. Against a $4M annualized return, the payback period was under 10 weeks. That made it one of the highest-ROI programs I have driven.",
  },
];

const principalCaliberItems = [
  "130-component scale with specific ownership topology diagnosis",
  "Explicit decision fork with competing organizational preferences",
  "Flash cut rationale with risk mitigation strategy",
  "Economic framing that converted organizational resistance into leadership sponsorship",
  "PRR gates and error budgets as enforcement mechanisms, not dashboards",
  "Measured outcomes with specific before/after metrics across four dimensions",
  "Organizational architecture, not just technical architecture",
  "Demonstrates ability to drive structural change across 110 engineers without authority",
  "Converts reactive operational pain into a quantified business case",
  "Shows the difference between optimizing within a broken system vs changing the system",
];

// --- Page ---

export default function ReliabilityStoryPage() {
  return (
    <InterviewPrepLayout
      title="Reliability Story"
      description="Reliability Transformation: 130-Component Vertical Ownership Shift"
      currentSection="reliability-story"
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
          <Link href="/nebula/interview-prep/more-stories" className="text-primary hover:underline">
            More STAR Stories &rarr;
          </Link>
          {" "}&bull;{" "}
          <Link href="/nebula/interview-prep/story-pivot-map" className="text-primary hover:underline">
            Story Pivot Map &rarr;
          </Link>
        </p>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
            Reliability
          </span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            Org Architecture
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            130 Components
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Reliability Transformation</h1>
        <p className="text-muted-foreground leading-relaxed">
          A <strong className="text-foreground">130-component vertical ownership shift</strong> that eliminated a $4M annualized
          productivity tax, reduced Sev-1/2 incidents by 30-40%, and cut change-induced failures by 50%.
        </p>
        <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/30">
          <p className="text-foreground font-semibold italic text-center">
            &ldquo;Don&apos;t optimize the reaction. Change the ownership.&rdquo;
          </p>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "#context", label: "Context", desc: "130 components, 25% reactive, $4M tax", color: "border-blue-500/30" },
            { href: "#root-cause", label: "Root Cause", desc: "Ownership topology, horizontal silos", color: "border-red-500/30" },
            { href: "#decision-fork", label: "Decision Fork", desc: "Optimize reaction vs change ownership", color: "border-amber-500/30" },
            { href: "#structural-change", label: "Structural Change", desc: "Flash cut reorg, PRR gates, error budgets", color: "border-emerald-500/30" },
            { href: "#economic-framing", label: "Economic Framing", desc: "$4M annualized productivity tax", color: "border-purple-500/30" },
            { href: "#measured-impact", label: "Measured Impact", desc: "30-40% Sev drop, 50% change-induced drop", color: "border-cyan-500/30" },
            { href: "#principal-insight", label: "Principal Insight", desc: "System change vs system optimization", color: "border-rose-500/30" },
            { href: "#delivery-script", label: "90-Second Delivery", desc: "Live interview script", color: "border-violet-500/30" },
            { href: "#pressure-tests", label: "Pressure Tests", desc: "Hostile panel Q&A", color: "border-red-500/30" },
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
          <h2 className="text-2xl font-bold text-foreground">Context</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <p className="text-foreground leading-relaxed">
              Platform portfolio of <strong className="text-blue-600 dark:text-blue-400">~130 components</strong> serving a major
              telecom operator, maintained by <strong className="text-blue-600 dark:text-blue-400">~110 engineers</strong> organized
              in horizontal functional teams (infrastructure, middleware, application, QA).
            </p>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "130", label: "Components" },
              { value: "110", label: "Engineers" },
              { value: "25%", label: "Reactive Load" },
              { value: "$4M", label: "Annualized Tax" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-background rounded-lg border border-border text-center">
                <div className="text-2xl font-bold text-foreground">{item.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          {/* The Problem */}
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-3">The Problem</div>
            <p className="text-foreground leading-relaxed mb-4">
              Engineers were spending <strong>~25% of their time on reactive work</strong> &mdash; incident response, cross-team escalations,
              war-room coordination for issues that spanned ownership boundaries. This was not a people problem or a tooling problem.
              It was a <strong>structural problem</strong>: the ownership model did not match the blast radius of failures.
            </p>
            <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-center">
              <p className="text-sm text-foreground font-medium">
                When an incident spanned three horizontal layers, <strong className="text-red-600 dark:text-red-400">nobody owned the customer impact</strong> &mdash;
                each team owned their slice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Root Cause */}
      <section id="root-cause" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
          <h2 className="text-2xl font-bold text-foreground">Root Cause: Ownership Topology</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              The platform grew organically, and teams were organized around <strong>technical layers</strong>, not around
              <strong> business outcomes</strong>. This created a horizontal ownership model where:
            </p>
            <ul className="space-y-2.5 ml-4">
              {[
                "Infrastructure owned servers and networking but not the applications running on them",
                "Middleware owned message buses and integration layers but not the business logic consuming them",
                "Application teams owned business features but not the infrastructure they depended on",
                "QA owned test automation but had no authority over deployment or rollback decisions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Horizontal vs Vertical */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-3">Horizontal Model (Before)</div>
              <ul className="space-y-2 text-sm text-foreground">
                {[
                  "Component-scoped ownership",
                  "Layer-optimized health metrics",
                  "Escalation chains across 3+ teams per incident",
                  "No single owner for customer-facing outcomes",
                  "Incident response as a coordination problem",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0 mt-0.5">&#10005;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">Vertical Model (After)</div>
              <ul className="space-y-2 text-sm text-foreground">
                {[
                  "Outcome-scoped ownership across the stack",
                  "End-to-end reliability metrics per vertical",
                  "Single team owns incident response per domain",
                  "Clear accountability aligned with blast radius",
                  "Incident response as an ownership problem (solved)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 flex-shrink-0 mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-red-500/10 to-transparent rounded-lg border border-red-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Key Insight</div>
            <p className="text-foreground font-medium italic">
              The same engineer might own a component but have no authority over the three upstream components
              that caused 80% of its incidents. Accountability without authority is not ownership &mdash; it is a coordination tax.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Decision Fork */}
      <section id="decision-fork" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
          <h2 className="text-2xl font-bold text-foreground">The Decision Fork</h2>
        </div>

        <div className="p-4 bg-muted/30 rounded-lg border border-border mb-6">
          <p className="text-foreground text-sm">
            Two paths forward, both with organizational consequences:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Option A */}
          <div className="rounded-xl border border-red-500/30 overflow-hidden">
            <div className="bg-red-500/10 px-6 py-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border-2 border-red-500/30 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">A</span>
              <h3 className="text-lg font-semibold text-foreground">Optimize Reaction</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2.5">
                {[
                  "Better incident tooling and automation",
                  "Faster escalation paths and runbooks",
                  "Improved monitoring and alerting",
                  "Cross-team training programs",
                  "Lower disruption, preserves existing structure",
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                <p className="text-xs text-foreground">
                  <strong>Risk:</strong> Makes the existing broken system faster, but doesn&apos;t fix the structural root cause.
                  Reactive load stays at 25%. You are optimizing the ambulance, not preventing the falls.
                </p>
              </div>
            </div>
          </div>

          {/* Option B */}
          <div className="rounded-xl border border-emerald-500/30 overflow-hidden">
            <div className="bg-emerald-500/10 px-6 py-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold flex-shrink-0">B</span>
              <h3 className="text-lg font-semibold text-foreground">Change Ownership</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2.5">
                {[
                  "Vertical ownership aligned to blast radius",
                  "Single team owns end-to-end reliability per domain",
                  "PRR gates tied to error budgets",
                  "Flash cut reorg with 30-day stabilization",
                  "Higher disruption, addresses structural root cause",
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <p className="text-xs text-foreground">
                  <strong>Rationale:</strong> If ownership doesn&apos;t match blast radius, no amount of tooling or process will eliminate
                  the coordination tax. You have to change the topology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/30">
          <p className="text-foreground text-sm leading-relaxed mb-3">
            Engineering leadership initially preferred Option A &mdash; lower disruption, incremental improvement.
            The $4M productivity tax analysis shifted the conversation from &ldquo;should we change?&rdquo; to &ldquo;can we afford not to?&rdquo;
          </p>
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
            <p className="text-foreground font-semibold">We chose Option B &mdash; change the ownership topology.</p>
          </div>
        </div>
      </section>

      {/* 4. Structural Change */}
      <section id="structural-change" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
          <h2 className="text-2xl font-bold text-foreground">Structural Change</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <p className="text-foreground leading-relaxed">
              Flash cut reorg of <strong className="text-emerald-600 dark:text-emerald-400">110 engineers</strong> from horizontal
              functional teams to <strong className="text-emerald-600 dark:text-emerald-400">vertical ownership domains</strong> aligned
              to customer-facing business outcomes and blast radius boundaries.
            </p>
          </div>

          {/* Org Architecture */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Organizational Architecture</div>
            <div className="space-y-4">
              <div className="p-4 bg-background/60 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm mb-2">Vertical Domains</div>
                <p className="text-sm text-foreground leading-relaxed">
                  Each vertical owns the full stack for their domain &mdash; infrastructure, middleware, application logic,
                  deployment, monitoring, and incident response. One team, one escalation path, one accountability chain.
                </p>
              </div>
              <div className="p-4 bg-background/60 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm mb-2">Shared Services (Preserved)</div>
                <p className="text-sm text-foreground leading-relaxed">
                  Cross-cutting functions &mdash; platform infrastructure, security, observability, CI/CD &mdash;
                  remained as shared services. Verticals own business logic and reliability; shared services own the platform.
                </p>
              </div>
            </div>
          </div>

          {/* PRR Gates */}
          <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-3">PRR Gates</div>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Production Readiness Reviews</strong> tied to error budget consumption. Not a rubber stamp &mdash;
              a deployment gate with real teeth:
            </p>
            <ul className="space-y-2.5 ml-4">
              {[
                "When a component burns through its error budget, it triggers a mandatory PRR before any new changes deploy",
                "PRR requires root cause analysis of the reliability burn, remediation plan, and explicit sign-off from the vertical owner",
                "The enforcement mechanism is deployment gates, not dashboards",
                "If your error budget is exhausted, your next deployment requires PRR approval",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Error Budgets */}
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-3">Error Budgets as Operational Guidelines</div>
            <p className="text-foreground leading-relaxed">
              Error budgets were not SLOs with automated enforcement. They were <strong>operational guidelines that triggered
              review gates</strong>. The distinction matters: automated SLO enforcement requires mature observability infrastructure
              that we did not have at scale. Operational guidelines with deployment gates gave us the behavioral change
              (engineers caring about reliability before deployment) without requiring perfect telemetry.
            </p>
          </div>

          {/* Flash Cut Rationale */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Why Flash Cut, Not Incremental</div>
            <p className="text-foreground leading-relaxed mb-4">
              Incremental rollout creates <strong>dual ownership during transition</strong> &mdash; horizontal teams still own
              operational response while vertical teams ramp. This produces the worst of both models: nobody has full context,
              escalation paths fork, and incident response degrades during the transition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Pain Duration", value: "2-3 weeks", desc: "Concentrated transition period" },
                { label: "Stabilization", value: "30 days", desc: "Old horizontal leads as escalation backstops" },
                { label: "Mitigation", value: "Pre-built", desc: "Runbooks + shadow rotations before cutover" },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-background/60 rounded-lg border border-border text-center">
                  <div className="text-lg font-bold text-foreground">{item.value}</div>
                  <div className="font-medium text-foreground text-xs">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Economic Framing */}
      <section id="economic-framing" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">5</span>
          <h2 className="text-2xl font-bold text-foreground">Economic Framing</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-3">$4M Annualized Productivity Tax</div>
            <p className="text-foreground leading-relaxed mb-4">
              Three inputs to the calculation, validated by Finance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Incident Response Time",
                  calc: "Avg hours per Sev-1/2 x incidents/quarter x fully loaded cost",
                },
                {
                  label: "Coordination Overhead",
                  calc: "Avg teams per incident x time to identify owner x war room time by non-owners",
                },
                {
                  label: "Context-Switching Cost",
                  calc: "Survey: % time reactive vs planned work x engineering headcount cost",
                },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-background/60 rounded-lg border border-border">
                  <div className="font-semibold text-foreground text-sm mb-2">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.calc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/30">
            <p className="text-foreground leading-relaxed text-sm">
              The $4M was <strong>conservative</strong> &mdash; it excluded opportunity cost of delayed feature work and only counted
              direct incident response and coordination time. This framing converted organizational resistance into leadership sponsorship.
              The question shifted from &ldquo;should we change?&rdquo; to &ldquo;can we afford not to?&rdquo;
            </p>
          </div>

          {/* Reorg Cost */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                <div className="text-xs text-muted-foreground">Reorg Cost</div>
                <div className="text-xl font-bold text-red-600 dark:text-red-400">~$500K-$700K</div>
                <div className="text-xs text-muted-foreground">6 weeks reduced velocity</div>
              </div>
              <div className="text-center text-2xl text-muted-foreground font-light">vs</div>
              <div className="text-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <div className="text-xs text-muted-foreground">Annual Return</div>
                <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">$4M</div>
                <div className="text-xs text-muted-foreground">eliminated productivity tax</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
              <div className="text-xs text-muted-foreground">Payback period</div>
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">&lt; 10 weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Measured Impact */}
      <section id="measured-impact" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">6</span>
          <h2 className="text-2xl font-bold text-foreground">Measured Impact</h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactMetrics.map((m) => (
              <div key={m.metric} className={`p-5 rounded-xl border ${m.border} ${m.bg}`}>
                <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">{m.metric}</div>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-sm text-muted-foreground">{m.before}</div>
                  </div>
                  <span className="text-muted-foreground">&rarr;</span>
                  <div>
                    <div className={`text-lg font-bold ${m.text}`}>{m.after}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg border border-emerald-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Net Outcome</div>
            <p className="text-foreground leading-relaxed">
              Engineering teams went from spending a quarter of their time on reactive work to spending less than 15% &mdash;
              freeing roughly <strong>10-13 percentage points of engineering capacity</strong> back to planned feature work.
              For a 110-person team, that is the equivalent of adding 11-14 engineers without hiring anyone.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Principal-Level Insight */}
      <section id="principal-insight" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">7</span>
          <h2 className="text-2xl font-bold text-foreground">Principal-Level Insight</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-rose-500/30 bg-rose-500/5">
            <p className="text-foreground leading-relaxed">
              Most reliability programs focus on <strong>better detection, faster response, improved tooling</strong>.
              Those are necessary but insufficient when the structural problem is ownership topology.
              If the org chart doesn&apos;t match the failure domain, no amount of process improvement
              will eliminate the coordination tax.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-rose-500/10 to-transparent rounded-lg border border-rose-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-400 mb-2">The Distinction</div>
            <p className="text-foreground font-medium italic">
              Optimizing <strong>within</strong> a broken system vs changing <strong>the system itself</strong>.
              A Senior TPM optimizes the incident response playbook. A Principal TPM asks whether the ownership model
              that creates the incidents is the right one.
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

          <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
            <p className="text-foreground font-medium text-center leading-relaxed">
              Don&apos;t optimize the reaction. Change the ownership.
            </p>
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
              I inherited a <strong>130-component platform</strong> where engineers were spending 25% of their time on reactive work &mdash;
              incident response, cross-team escalations, war-room coordination. That is a <strong>$4M annualized productivity tax</strong>.
              The root cause was not tooling or process &mdash; it was ownership topology. Teams were organized horizontally by
              technical layer. When an incident spanned three layers, nobody owned the customer impact.
            </p>
            <p>
              I had a clear decision fork: optimize the reaction with better tooling and faster escalation paths, or
              change the ownership model. Option A is lower risk but doesn&apos;t fix the structural root cause.
              I chose Option B &mdash; a <strong>flash cut reorg of 110 engineers</strong> from horizontal functional teams to
              vertical ownership domains aligned to business outcomes and blast radius boundaries.
            </p>
            <p>
              Flash cut was deliberate. Incremental rollout creates dual ownership during transition &mdash; nobody has
              full context, escalation paths fork, incident response degrades. A flash cut is painful for 2-3 weeks
              but eliminates the ambiguity window. We mitigated with pre-built runbooks, shadow rotations, and a
              30-day stabilization period.
            </p>
            <p>
              I layered <strong>PRR gates tied to error budgets</strong> &mdash; not SLOs with automated enforcement,
              but operational guidelines that triggered deployment gates. If your component burned through its error budget,
              your next deployment required PRR approval with root cause analysis and remediation plan.
            </p>
            <p className="font-semibold">
              Results: <strong>30-40% reduction in Sev-1/2 incidents</strong>, <strong>50% drop in change-induced failures</strong>,
              reactive engineering load went from 25% to 12-15%. The reorg cost about $500K-$700K in transition velocity.
              Against a $4M annualized return, the payback period was under 10 weeks.
            </p>
            <p className="font-semibold italic">
              The key insight: don&apos;t optimize the reaction. Change the ownership. If the org chart doesn&apos;t match the
              failure domain, no amount of process improvement will eliminate the coordination tax.
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
          {pressureTestsEngVP.map((q) => (
            <div key={q.id} className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {q.id}
                </span>
                <div>
                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full mr-2">
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
          href="/nebula/interview-prep/billing-recovery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Billing Recovery
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
