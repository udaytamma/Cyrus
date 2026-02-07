"use client";

/**
 * More STAR Stories - Additional behavioral stories organized by theme
 * Consolidated view of supplementary stories from APM, SOC, and PCI pages
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function MoreStoriesPage() {
  return (
    <InterviewPrepLayout
      title="More STAR Stories"
      description="Additional behavioral stories organized by theme"
      currentSection="more-stories"
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
          <span className="px-2.5 py-1 bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-medium rounded-full">
            STAR Format
          </span>
          <span className="px-2.5 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-medium rounded-full">
            Additional Stories
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">More STAR Stories</h1>
        <p className="text-muted-foreground">
          Additional Principal TPM-level behavioral stories organized by theme. Each includes full STAR format, 30-second version, and hardened follow-up Q&amp;A.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Story Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a href="#apm-stories" className="p-3 bg-background rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
            <div className="font-medium text-foreground">APM / Platform Stories</div>
            <div className="text-sm text-muted-foreground">Scalability, customer escalations</div>
          </a>
          <a href="#soc-stories" className="p-3 bg-background rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <div className="font-medium text-foreground">SOC Audit Stories</div>
            <div className="text-sm text-muted-foreground">Scope negotiation, accountability</div>
          </a>
          <a href="#pci-stories" className="p-3 bg-background rounded-lg border border-green-500/30 hover:border-green-500/50 transition-colors">
            <div className="font-medium text-foreground">PCI / Compliance Stories</div>
            <div className="text-sm text-muted-foreground">Scope reduction, crisis management</div>
          </a>
        </div>
      </div>

      {/* ==================== APM STORIES ==================== */}
      <section id="apm-stories" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 px-4">
            APM / Platform Stories
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        </div>

        {/* APM Story 1: Killing Feature Request */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-xl border border-emerald-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥇</span>
              Killing a Feature Request to Protect Platform Scalability
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Rejecting a senior stakeholder&apos;s request with a better alternative
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Six months after deploying our reliability platform at Altice, their VP of Network Operations requested fully customizable alerting rules. Architecturally, this would require a per-tenant rules engine — essentially a platform fork. We had two follow-on customers attracted to the platform precisely because it was opinionated and fast to deploy.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Decide whether to accept the feature request to preserve the relationship, or reject it to protect platform scalability — knowing rejection risked friction with our internal champion.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I dug into the underlying problem: operators wanted control because alert context was insufficient, not because thresholds were wrong. I proposed topology-aware impact scoring instead — every alert would show subscriber impact and dependencies. I presented clear tradeoffs: custom rules = 4-5 months + maintenance burden; context enrichment = 6 weeks + platform feature for all customers.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                VP accepted. Shipped in 7 weeks. Alert noise dropped 60%. The feature became a core differentiator — both follow-on customers cited it as why they chose us. VP later acknowledged pushing back was the right call.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;A VP requested custom alerting rules that would fork our platform. I dug into the underlying problem: operators wanted context, not configuration. I proposed topology-aware impact scoring — shipped in 7 weeks, 60% noise reduction, became a core differentiator that won two follow-on customers.&quot;
            </p>
          </div>

          {/* Key Q&A */}
          <div className="mt-4 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Key Follow-up</h5>
            <p className="text-muted-foreground text-sm mb-1">&quot;Wasn&apos;t saying no to a VP risky?&quot;</p>
            <p className="text-foreground text-sm italic">
              &quot;Yes — but building a platform fork would have been riskier for the business. The key was presenting a better alternative that solved the underlying problem faster.&quot;
            </p>
          </div>
        </div>

        {/* APM Story 2: Customer Escalation */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-xl border border-emerald-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥈</span>
              Navigating a Customer Escalation When the Platform Surfaced Their Failures
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Holding technical ground while steering toward productive outcomes
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Eight months in, our platform showed 70% of Altice&apos;s high-severity incidents occurred within 4 hours of a change event. The VP who championed us escalated, claiming the platform was &quot;generating noise&quot; and &quot;creating false correlations.&quot; He wanted us to tune down visibility.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Navigate whether to soften findings to preserve the relationship, or hold technical ground and risk escalation — while steering toward a productive outcome.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I validated with their engineers first — 18 of 20 correlations confirmed. I reframed findings as an improvement opportunity worth $X in avoided incidents. I proposed a joint remediation program: change-event integration for alert suppression during maintenance windows. This gave the VP a path forward without admitting failure.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                VP accepted. Change-related incidents dropped 35% over two quarters. The VP became a reference customer and spoke at an industry event about how the platform helped them &quot;mature their operational discipline.&quot;
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;Our platform showed 70% of incidents correlated with their change events. The VP escalated, claiming noise. I validated with engineers — 18/20 confirmed. Instead of tuning down, I reframed as opportunity and proposed joint remediation. 35% incident reduction. VP became a reference customer.&quot;
            </p>
          </div>

          {/* Key Q&A */}
          <div className="mt-4 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Key Follow-up</h5>
            <p className="text-muted-foreground text-sm mb-1">&quot;Why not just tune down visibility?&quot;</p>
            <p className="text-foreground text-sm italic">
              &quot;The platform&apos;s value is in accurate signal. If we tune it down for one customer, we undermine credibility with every customer. The right move was to help them act on the signal, not hide it.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SOC AUDIT STORIES ==================== */}
      <section id="soc-stories" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 px-4">
            SOC Audit Stories
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>

        {/* SOC Story 1: Scope Boundary Negotiation */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥇</span>
              Forcing Scope Boundaries When Audit Expansion Threatened Program Viability
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Negotiating with auditors using a credible phased alternative
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Six months into our SOC automation program, EY proposed expanding control scope by 40%. The expansion included controls we hadn&apos;t instrumented — network segmentation, privileged access reviews, change management evidence for teams still running manual deployments.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Decide whether to accept full scope expansion and risk incomplete evidence, or negotiate phased expansion — knowing pushing back on auditors carries reputational risk.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I mapped the 40% expansion into three tiers: automatable in 8 weeks, manually coverable, and requiring new instrumentation. I proposed formal scope deferral for tier 3 with documented remediation timeline. I framed this to EY as mature risk management, not avoidance.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                EY accepted. We included 25% now, deferred 15% with roadmap, passed with zero findings. EY&apos;s lead said it was one of the cleaner scope negotiations they&apos;d seen. The phased model became our standard approach.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;Auditors proposed 40% scope expansion we couldn&apos;t cover. I mapped it into three tiers and negotiated phased inclusion — 25% now, 15% deferred with roadmap. Zero findings. EY said it was one of the cleaner negotiations they&apos;d seen.&quot;
            </p>
          </div>
        </div>

        {/* SOC Story 2: Evidence Ownership */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥈</span>
              Breaking a Cross-Team Deadlock on Evidence Ownership
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Shifting accountability from SOC backstop to contributing teams
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Our SOC pipeline depended on evidence from four teams: IT, Network, Platform, Security. Artifacts arrived late, incomplete, or inconsistent. Each team treated evidence production as a favor to SOC, not their responsibility. SOC absorbed all risk.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Decide whether to keep SOC as the backstop, or shift accountability to contributing teams — knowing this would create friction with teams I didn&apos;t own.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I implemented an ownership model with explicit SLAs. Built a weekly evidence health dashboard shared in director-level reviews — no one wanted to be the red row. Negotiated that audit findings would be attributed to the source team, not SOC.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                On-time delivery: 60% → 94%. Rejected artifacts: 15% → &lt;3%. SOC prep time dropped 40%. Network eventually automated their exports entirely because manual kept missing SLAs.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;Contributing teams treated evidence as optional. I implemented ownership with SLAs and a dashboard shared in director reviews — no one wanted to be red. On-time delivery went 60% → 94%. Network eventually automated because manual kept missing SLAs.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PCI STORIES ==================== */}
      <section id="pci-stories" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-green-600 dark:text-green-400 px-4">
            PCI / Compliance Stories
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        </div>

        {/* PCI Story 1: Scope Reduction */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border border-green-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥇</span>
              Forcing a PCI Scope Reduction That Engineering Didn&apos;t Want
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Governing security scope against internal comfort
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Our PCI scope had grown beyond necessity — defensive engineering kept routing systems into the PCI zone &quot;just in case.&quot; Security was comfortable, engineering had no incentive to reduce. Annual overhead: ~$300K in audit, key-rotation, and operational costs.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Decide whether to allow defensive scope creep to continue, or forcibly reduce scope despite engineering pushback and security hesitation.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I proposed iframe tokenization — cardholder data never enters our backend. Forced the tradeoff: ~$80K rework vs. ~$300K annual overhead. Owned the recommendation, documented security justification, committed to validation with internal audit and external QSA.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Shipped tokenization, reduced in-scope systems by 40%, passed PCI audit with zero findings. Security eventually adopted the pattern as default for future payment integrations.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;PCI scope had grown beyond necessary because engineering preferred defensive inclusion. I proposed iframe tokenization — $80K rework vs $300K annual overhead. Reduced scope 40%, passed audit cleanly. Pattern became the default.&quot;
            </p>
          </div>
        </div>

        {/* PCI Story 2: Credential Migration Under Fraud */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border border-green-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥈</span>
              Governing a Payment Credential Migration Under Active Fraud Pressure
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Executing under active threat without panic
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Potential credential compromise detected — ~150K stored card records flagged for exposure risk. Pressure to act immediately, but moving too fast risked operational chaos; too slow risked regulatory escalation.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Decide between emergency re-tokenization (fast but disruptive) or staged migration under heightened monitoring.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I chose staged migration with real-time fraud monitoring. Isolated the cohort, applied velocity controls, batch re-encrypted off-peak. Set triggers for automatic blocks if anomalies spiked. Daily reporting to leadership on risk window.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Completed 150K records in 6 weeks — zero customer incidents, zero confirmed fraud. Regulatory reporting closed without escalation. Staged migration became the default playbook.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;150K card records flagged for potential compromise. Instead of emergency re-key, I chose staged migration with fraud monitoring. Velocity controls, batch re-encryption off-peak. 6 weeks, zero incidents, zero fraud. Became the default playbook.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Master Summary Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6">Story Reference Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Story</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Theme</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Use For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-emerald-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Killing Feature Request</td>
                <td className="px-4 py-3 text-muted-foreground">Protecting platform scalability</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Said no to stakeholder&quot;, &quot;Protected long-term&quot;</td>
              </tr>
              <tr className="border-b border-border bg-emerald-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Customer Escalation</td>
                <td className="px-4 py-3 text-muted-foreground">Holding technical ground</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Difficult customer&quot;, &quot;Uncomfortable truth&quot;</td>
              </tr>
              <tr className="border-b border-border bg-purple-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Scope Boundary Negotiation</td>
                <td className="px-4 py-3 text-muted-foreground">Negotiating with auditors</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Pushed back on stakeholders&quot;, &quot;External partners&quot;</td>
              </tr>
              <tr className="border-b border-border bg-purple-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Evidence Ownership</td>
                <td className="px-4 py-3 text-muted-foreground">Shifting accountability</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Changed behavior across teams&quot;, &quot;Built systems&quot;</td>
              </tr>
              <tr className="border-b border-border bg-green-500/5">
                <td className="px-4 py-3 text-foreground font-medium">PCI Scope Reduction</td>
                <td className="px-4 py-3 text-muted-foreground">Governing scope against comfort</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Drove change against resistance&quot;, &quot;Cost optimization&quot;</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Credential Migration</td>
                <td className="px-4 py-3 text-muted-foreground">Executing under threat</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Crisis management&quot;, &quot;Risk under pressure&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep/apm"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← APM
        </Link>
        <Link
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Back to Interview Prep →
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
