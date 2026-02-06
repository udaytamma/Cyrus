"use client";

/**
 * SOC Audit Automation - STAR Story
 * Cross-org program without authority demonstrating scoped decision-making
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function SOCAuditAutomationPage() {
  return (
    <InterviewPrepLayout
      title="SOC Audit Automation"
      description="STAR story for influence without authority behavioral questions"
      currentSection="soc-audit-automation"
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
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            STAR Format
          </span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            Influence Without Authority
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">SOC Audit Automation</h1>
        <p className="text-muted-foreground">
          Cross-org program demonstrating how to force scoped decisions about risk, ownership, and accountability when you don&apos;t own the teams or budgets.
        </p>
      </div>

      {/* Situation */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
            S
          </span>
          <h2 className="text-xl font-semibold text-foreground">Situation</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              As our account expanded to host additional billing and revenue-critical workloads, our SOC audit scope had to expand accordingly. The dedicated SOC audit team had recently lost senior auditors to retirement and could not absorb the additional workload manually.
            </p>
            <p>
              When we assessed the process, we found it was heavily manual, with common controls repeatedly executed across accounts, significant duplication, and no automation. If nothing changed, we faced a real risk of missing audit commitments or failing an audit due to inexperienced coverage — which would have been both a contractual and reputational failure.
            </p>
          </div>
        </div>
      </section>

      {/* Task */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
            T
          </span>
          <h2 className="text-xl font-semibold text-foreground">Task</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              I was accountable for enabling SOC audit coverage for our expanded scope without increasing audit risk or overloading already constrained teams. I did not own the SOC team, IT, Network, or Security teams, nor did I own their budgets.
            </p>
            <p>
              The decision that had to be forced was whether to push full automation across all controls — as several teams wanted — or deliberately scope automation to maximize impact while explicitly accepting limited manual review where automation maturity was insufficient.
            </p>
          </div>
        </div>
      </section>

      {/* Conflict */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold">
            C
          </span>
          <h2 className="text-xl font-semibold text-foreground">Conflict</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              Security pushed for broad automation to reduce findings. IT and platform teams were concerned about ownership, on-call burden, and surfacing gaps they would have to fix under audit pressure. Network teams resisted centralized telemetry due to performance, cost, and inconsistent logging across segments.
            </p>
            <p>
              This could not be solved by mandate because each group faced real operational and reputational risk, and none wanted to be accountable for failures surfaced by a centralized compliance pipeline they didn&apos;t control.
            </p>
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
            A
          </span>
          <h2 className="text-xl font-semibold text-foreground">Action</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              I reframed the problem away from &quot;automating compliance&quot; to &quot;reducing audit-season burden while keeping accountability clear.&quot; I explicitly separated <strong>automation ownership</strong> from <strong>control accountability</strong>, making it clear that the SOC function retained responsibility for audit outcomes, while automation served as a force multiplier rather than a liability shift.
            </p>
            <p>
              I proposed a phased approach: automate high-ROI common controls and evidence collection first, defer edge cases, and maintain explicit manual review where automation could increase risk. I presented this as an explicit tradeoff — faster coverage and lower human toil now, in exchange for accepting temporary manual gaps with a committed roadmap.
            </p>
            <p>
              I deliberately rejected full automation because it would have expanded scope faster than teams could absorb, increased false confidence, and likely surfaced findings we couldn&apos;t remediate in time.
            </p>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
            R
          </span>
          <h2 className="text-xl font-semibold text-foreground">Result</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              Leadership accepted the phased model and explicitly accepted residual manual risk on edge-case controls. We automated common controls and evidence pipelines, reduced duplicate work across accounts, and enabled the SOC team to cover expanded scope without adding senior auditors.
            </p>
            <p>
              Structurally, we shifted audit preparation from ad-hoc manual work to an automation-first model with clear queues for human judgment, making ownership, gaps, and progress visible instead of implicit.
            </p>
          </div>
        </div>
      </section>

      {/* Follow-through */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold">
            +
          </span>
          <h2 className="text-xl font-semibold text-foreground">Follow-through</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed">
            <p>
              Post-alignment, I owned the execution cadence, worked directly with EY to validate automated artifacts, and tracked progress via dashboards showing automated versus manual controls, queue health, and zero-touch acceptance rates. That governance prevented regression and ensured automation reduced risk rather than masking it.
            </p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Themes Demonstrated</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Influence Without Authority</div>
            <div className="text-sm text-muted-foreground">
              Forcing decisions across orgs that didn&apos;t report to you
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Risk Framing</div>
            <div className="text-sm text-muted-foreground">
              Separating automation ownership from control accountability
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Scoped Decision Making</div>
            <div className="text-sm text-muted-foreground">
              Deliberately rejecting full automation for the right reasons
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Durable Leverage</div>
            <div className="text-sm text-muted-foreground">
              Creating visible governance that prevents regression
            </div>
          </div>
        </div>
      </section>

      {/* Use This Story For */}
      <section className="mb-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Use This Story For</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Tell me about a time you led a program without formal authority&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Describe a situation where you had to align multiple stakeholders with competing interests&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;How do you handle resistance to change?&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Tell me about a time you had to make a scoping decision under constraints&quot;</span>
          </li>
        </ul>
      </section>

      {/* Hardening Pack Divider */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="px-4 py-2 bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-semibold rounded-full">
          Hardening Pack
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
        <p className="text-muted-foreground">
          At principal bar, this story is <strong className="text-foreground">not</strong> about the automation tooling.
          It&apos;s about forcing a scoped decision about risk, ownership, and accountability across orgs that didn&apos;t report to you.
        </p>
      </div>

      {/* 30-Second Compressed Version */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold">1</span>
          30-Second Compressed Version
        </h2>
        <p className="text-muted-foreground mb-4">Memorize this for time-tight situations.</p>

        <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
          <blockquote className="text-foreground leading-relaxed space-y-3">
            <p>
              &quot;As our audit scope expanded, the SOC team couldn&apos;t scale manual work. The process was heavily duplicated and brittle. Multiple teams resisted automation because of ownership and liability concerns.
            </p>
            <p>
              I reframed automation as reducing audit burden while keeping accountability with compliance, and pushed a phased approach — automating high-ROI common controls while explicitly accepting manual risk on edge cases. That unlocked alignment, reduced duplicate work, and allowed us to meet audit commitments without increasing risk.&quot;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Hardened Answers */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">2</span>
          Hardened Follow-up Answers
        </h2>
        <p className="text-muted-foreground mb-6">Expect these questions. Use verbatim if needed.</p>

        <div className="space-y-6">
          {/* Answer A */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">A. &quot;Why not automate everything?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because &apos;automate everything&apos; increases risk if your control evidence pipeline becomes a single point of false confidence. Full automation would have expanded audit scope faster than we could validate accuracy and remediate gaps, which is how teams end up failing audits — by producing incomplete or incorrect evidence at scale. I deliberately started with high-ROI common controls where evidence sources were stable and validation was straightforward, then staged edge cases behind explicit maturity criteria.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;Isn&apos;t partial automation just compromise?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;No — this was sequencing, not compromise. We optimized for risk reduction per unit time: automate what we can validate and stand behind, then expand coverage only when the organization can absorb the remediation workload.&quot;
              </p>
            </blockquote>
          </div>

          {/* Answer B */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">B. &quot;Who owned failures after automation?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Audit/control accountability stayed with the compliance function — the SOC program owner. My automation pipeline was a mechanism to collect and package evidence, not a transfer of liability. If automation produced incomplete evidence or flagged a gap, SOC owned the audit outcome and the decision on risk acceptance; domain teams owned fixing underlying system gaps within their area once prioritized through the agreed process.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;So infra didn&apos;t own anything?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Infra owned the health of their systems. They did not become the &apos;on-call owners&apos; of compliance automation or auditor-facing deliverables. That separation was intentional; otherwise every team resists and the program dies.&quot;
              </p>
            </blockquote>
          </div>

          {/* Answer C */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">C. &quot;What risk did leadership explicitly accept?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Leadership explicitly accepted residual manual work and temporary control gaps on lower-ROI edge cases in phase one — under documented risk acceptance — so we could reduce the highest-risk audit exposure first. The trade was: &apos;We will not claim automation coverage where validation isn&apos;t strong enough, and we will not expand scope faster than remediation capacity.&apos; We also committed to a follow-on roadmap with gating criteria to close those gaps.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;What was the gating criteria?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Evidence source stability, validation pass rate, and proven ownership for remediation — if we couldn&apos;t prove those, it stayed manual.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400">
              <strong>Signal:</strong> You can articulate explicit risk acceptance.
            </p>
          </div>

          {/* Answer D */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">D. &quot;Why is this Principal-level?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because the primary problem wasn&apos;t building tooling — it was forcing an executive decision about scope, risk, and accountability across Security, IT, Network, Finance, and auditors when nobody wanted to own the downside. I converted a policy fight into an executable phased model with explicit risk acceptance, clear ownership boundaries, and governance that prevented regression. That&apos;s principal-level leverage: aligning incentives and decision rights, then landing a durable operating model.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;What&apos;s the evidence it was durable?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg mb-3">
              <p className="text-foreground italic text-sm">
                &quot;We institutionalized it with metrics and cadence: automated vs manual coverage, queue health, zero-touch acceptance rate, and drift detection — reviewed weekly and during audit readiness checkpoints.&quot;
              </p>
            </blockquote>
            <div className="mt-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <p className="text-sm text-amber-600 dark:text-amber-400">
                <strong>This is the strongest answer. Memorize it.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Delivery Rule */}
        <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Quick rule for delivering these answers:</strong> Keep them calm and short. If they want details, they&apos;ll pull.
          </p>
        </div>
      </section>

      {/* Final Calibration Check */}
      <section className="mb-10 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">Final Calibration Check</h3>
        <p className="text-muted-foreground mb-4">If an interviewer walks away thinking:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;This person doesn&apos;t confuse automation with safety&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They understand second-order compliance risk&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They forced a real decision, not consensus theater&quot;</span>
          </li>
        </ul>
        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-600 dark:text-green-400 font-semibold text-center">
            You passed.
          </p>
        </div>
      </section>

      {/* Additional SOC Audit Stories Divider */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-semibold rounded-full">
          Additional SOC Audit Stories
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ==================== STORY 1: Scope Boundary Negotiation ==================== */}
      <section className="mb-12">
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-xl border border-indigo-500/30">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <span className="text-2xl">🥇</span>
            Story 1: Forcing Scope Boundaries When Audit Expansion Threatened Program Viability
          </h2>
          <p className="text-muted-foreground mt-2">
            <strong>Theme:</strong> Negotiating with auditors using a credible phased alternative
          </p>
        </div>

        {/* Situation */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
              S
            </span>
            <h3 className="text-xl font-semibold text-foreground">Situation</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                Six months into our SOC automation program, the external auditors (EY) proposed expanding the control scope by 40% for the upcoming audit cycle. The expansion was driven by new regulatory guidance and the fact that we&apos;d added three additional billing workloads to the platform. On paper, the request was reasonable — more workloads meant more controls.
              </p>
              <p>
                The problem was that our automation coverage had been deliberately phased. We had strong coverage on the original control set, but the proposed expansion included controls we hadn&apos;t instrumented — network segmentation validation, privileged access reviews across legacy systems, and change management evidence for a platform team that still ran manual deployments. If we accepted the full expansion, we&apos;d either scramble to automate controls we couldn&apos;t validate in time, or fall back to manual evidence collection that the depleted SOC team couldn&apos;t absorb.
              </p>
            </div>
          </div>
        </div>

        {/* Task */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              T
            </span>
            <h3 className="text-xl font-semibold text-foreground">Task</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <p className="text-foreground leading-relaxed">
              I was accountable for maintaining audit readiness while protecting program integrity. The decision I had to force was whether to accept the full scope expansion and risk audit findings or incomplete evidence, or negotiate a phased scope expansion with explicit carve-outs — knowing that pushing back on auditors is politically uncomfortable and carries its own reputational risk.
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
              A
            </span>
            <h3 className="text-xl font-semibold text-foreground">Action</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                I rejected the premise that scope expansion had to be all-or-nothing. I mapped the proposed 40% expansion into three tiers: controls we could automate within eight weeks with high confidence, controls we could cover manually with existing team capacity, and controls that would require either new instrumentation or team capacity we didn&apos;t have.
              </p>
              <p>
                For the third tier, I proposed a formal scope deferral — not an exception or a finding, but an agreed-upon phased inclusion with a documented remediation timeline. I worked directly with EY&apos;s engagement lead to frame this as mature risk management rather than avoidance. My argument was that attempting full coverage with insufficient automation would produce lower-quality evidence than scoped coverage with strong automation — and that auditors should prefer the latter.
              </p>
              <p>
                I also surfaced the deferral decision to my VP and the customer&apos;s compliance officer, making the tradeoff explicit: accept a slightly narrower scope this cycle with a committed roadmap, or accept higher finding risk on controls we couldn&apos;t adequately evidence.
              </p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
              R
            </span>
            <h3 className="text-xl font-semibold text-foreground">Result</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                EY accepted the phased scope model. We included 25% of the proposed expansion in the current cycle (the controls we could automate or manually cover with confidence), deferred 15% to the following cycle with a documented remediation plan, and passed the audit with zero findings on in-scope controls.
              </p>
              <p>
                The deferred controls were fully automated by the next audit cycle. EY&apos;s engagement lead later told us this was one of the cleaner scope negotiations they&apos;d seen — most clients either accept everything and scramble, or push back without a credible alternative. The phased model became our standard approach for future scope expansions.
              </p>
            </div>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-6 p-5 bg-muted/30 rounded-xl border border-border">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">⏱</span>
            30-Second Version
          </h4>
          <blockquote className="text-foreground italic leading-relaxed">
            &quot;External auditors proposed a 40% scope expansion that our automation couldn&apos;t cover in time. Instead of accepting and scrambling or refusing outright, I mapped the expansion into three tiers and negotiated a phased inclusion — 25% now with strong coverage, 15% deferred with a documented roadmap. We passed with zero findings. EY later said it was one of the cleaner scope negotiations they&apos;d seen, and the phased model became our standard approach.&quot;
          </blockquote>
        </div>

        {/* Hardened Q&A */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">Q</span>
            Hardened Follow-up Questions
          </h4>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;Wasn&apos;t pushing back on auditors risky?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Yes — but accepting scope we couldn&apos;t evidence was riskier. Auditors prefer clients who can articulate tradeoffs over clients who overpromise and underdeliver. The key was presenting a credible alternative, not just saying no.&quot;
              </p>
            </blockquote>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;How did you get leadership to accept narrower scope?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;By making the tradeoff explicit: narrower scope with zero findings vs. full scope with high finding risk. Leadership doesn&apos;t want surprises during audit — they want to understand the risk envelope upfront.&quot;
              </p>
            </blockquote>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;What if EY had rejected the phased model?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Then we would have escalated to formal risk acceptance with the customer&apos;s compliance officer — documenting that we were proceeding under direction despite our assessment. But by presenting a structured alternative rather than simple resistance, we avoided that escalation.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ==================== STORY 2: Evidence Ownership Accountability ==================== */}
      <section className="mb-12">
        <div className="mb-6 p-4 bg-gradient-to-r from-rose-500/10 to-transparent rounded-xl border border-rose-500/30">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <span className="text-2xl">🥈</span>
            Story 2: Breaking a Cross-Team Deadlock on Evidence Ownership
          </h2>
          <p className="text-muted-foreground mt-2">
            <strong>Theme:</strong> Shifting accountability from SOC backstop to contributing teams
          </p>
        </div>

        {/* Situation */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
              S
            </span>
            <h3 className="text-xl font-semibold text-foreground">Situation</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                Our SOC automation pipeline depended on evidence artifacts from four teams: IT (access reviews), Network (firewall logs and segmentation evidence), Platform (change management records), and Security (vulnerability scan results). The pipeline was technically functional, but we kept hitting the same problem: artifacts arrived late, incomplete, or in inconsistent formats, and every audit cycle devolved into last-minute scrambles.
              </p>
              <p>
                The root cause wasn&apos;t technical — it was ownership ambiguity. Each team viewed evidence production as a favor to the SOC function, not as their responsibility. When artifacts were late, the SOC team chased them down manually. When artifacts were incomplete, SOC filled the gaps. This created a dynamic where contributing teams faced no consequences for poor evidence hygiene, and SOC absorbed all the risk.
              </p>
            </div>
          </div>
        </div>

        {/* Task */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              T
            </span>
            <h3 className="text-xl font-semibold text-foreground">Task</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <p className="text-foreground leading-relaxed">
              I was accountable for making the automation pipeline reliable enough to support expanded audit scope. The decision I had to force was whether to keep SOC as the backstop for evidence quality, or shift accountability to contributing teams — knowing that this would surface uncomfortable gaps and create friction with teams I didn&apos;t own.
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
              A
            </span>
            <h3 className="text-xl font-semibold text-foreground">Action</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                I proposed and implemented an evidence ownership model with explicit accountability boundaries. Each contributing team became the owner of record for their evidence artifacts, with defined SLAs for format, completeness, and delivery timing. SOC&apos;s role shifted from chasing evidence to validating it — if an artifact didn&apos;t meet spec, it was rejected back to the owning team, not fixed by SOC.
              </p>
              <p>
                The harder part was making this stick. I built a weekly evidence health dashboard that showed artifact status by team: on-time vs. late, complete vs. incomplete, accepted vs. rejected. I shared this dashboard in the cross-functional program review that included directors from each contributing team. No one wanted to be the red row in front of their peers.
              </p>
              <p>
                I also negotiated a consequence model with my VP: if a team&apos;s evidence failures led to an audit finding, that finding would be attributed to the contributing team in the post-audit review, not to SOC. This shifted reputational risk to where operational accountability should sit.
              </p>
              <p>
                For teams that pushed back, I was explicit about the tradeoff: either own your evidence with clear SLAs, or accept that evidence gaps would be escalated as program risks in the exec review. I didn&apos;t threaten — I just made the status quo visible and let the accountability structure do the work.
              </p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
              R
            </span>
            <h3 className="text-xl font-semibold text-foreground">Result</h3>
          </div>
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
              <p>
                Within two audit cycles, on-time evidence delivery went from ~60% to 94%. Rejected artifacts dropped from ~15% to under 3%. SOC&apos;s audit-prep time dropped by 40% because they were validating evidence, not producing it.
              </p>
              <p>
                More importantly, the ownership model changed behavior upstream. Teams started building evidence production into their operational workflows rather than treating it as a quarterly fire drill. Network, which had been the most resistant, eventually automated their firewall log exports entirely because the manual process kept missing SLAs.
              </p>
              <p>
                The evidence ownership model and health dashboard became permanent program infrastructure, used for SOC audits and later extended to other compliance frameworks.
              </p>
            </div>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-6 p-5 bg-muted/30 rounded-xl border border-border">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">⏱</span>
            30-Second Version
          </h4>
          <blockquote className="text-foreground italic leading-relaxed">
            &quot;Our SOC automation pipeline kept failing because contributing teams treated evidence production as optional. I implemented an ownership model where each team became accountable for their artifacts with clear SLAs. I built a weekly health dashboard shared in director-level reviews — no one wanted to be the red row. On-time delivery went from 60% to 94%, rejected artifacts dropped to under 3%, and SOC prep time dropped 40% because they were validating evidence, not producing it.&quot;
          </blockquote>
        </div>

        {/* Hardened Q&A */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">Q</span>
            Hardened Follow-up Questions
          </h4>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;How did you get teams to accept accountability they didn&apos;t want?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Visibility and consequence modeling. The dashboard made performance visible to peers. The consequence model made it clear that audit findings would be attributed to the source, not to SOC. I didn&apos;t force compliance — I made the cost of non-compliance visible.&quot;
              </p>
            </blockquote>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;What if a team refused to participate?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;I escalated gaps as program risks, not personal failures. If a team consistently missed SLAs, their director saw it in the exec review as a risk to audit readiness. That created enough pressure without me having to be the bad guy.&quot;
              </p>
            </blockquote>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="font-medium text-foreground mb-2">&quot;Why did Network eventually automate when they were most resistant?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Because their manual process kept missing SLAs and they got tired of being the red row. I didn&apos;t mandate automation — I created conditions where automation became the path of least resistance. That&apos;s more durable than forcing compliance.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6">Story Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Story</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Theme</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Principal-Level Signal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 text-foreground font-medium">SOC Audit Automation (Original)</td>
                <td className="px-4 py-3 text-muted-foreground">Influence without authority on compliance automation</td>
                <td className="px-4 py-3 text-muted-foreground">Forcing scoped decisions about risk and ownership</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="px-4 py-3 text-foreground font-medium">Scope Boundary Negotiation</td>
                <td className="px-4 py-3 text-muted-foreground">Pushing back on auditors with credible alternative</td>
                <td className="px-4 py-3 text-muted-foreground">Rejected all-or-nothing framing, negotiated directly</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground font-medium">Evidence Ownership Accountability</td>
                <td className="px-4 py-3 text-muted-foreground">Shifting accountability to contributing teams</td>
                <td className="px-4 py-3 text-muted-foreground">Built visible accountability structure, changed upstream behavior</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interview Deployment Guide */}
      <section className="mb-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Interview Deployment Guide</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span><strong className="text-foreground">Original SOC Automation:</strong> Use for &quot;influence without authority&quot; or &quot;cross-org alignment&quot; questions</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span><strong className="text-foreground">Scope Boundary Negotiation:</strong> Use for &quot;pushed back on stakeholders&quot; or &quot;managed external partners&quot; questions</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span><strong className="text-foreground">Evidence Ownership:</strong> Use for &quot;changed behavior across teams&quot; or &quot;built accountability systems&quot; questions</span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep/tandem-incident-management"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Tandem Incident Management
        </Link>
        <Link
          href="/nebula/interview-prep/card-vault-pci"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Card Vault / PCI →
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
