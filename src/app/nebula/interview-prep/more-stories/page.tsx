"use client";

/**
 * More STAR Stories - Additional behavioral stories organized by theme
 * System Availability, MTTR Reduction, GenAI Adoption
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
          <a href="#availability-stories" className="p-3 bg-background rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors">
            <div className="font-medium text-foreground">System Availability Stories</div>
            <div className="text-sm text-muted-foreground">96% → 99.35%, prioritization, stabilization</div>
          </a>
          <a href="#mttr-stories" className="p-3 bg-background rounded-lg border border-orange-500/30 hover:border-orange-500/50 transition-colors">
            <div className="font-medium text-foreground">MTTR Reduction Stories</div>
            <div className="text-sm text-muted-foreground">42% improvement, self-healing, automation</div>
          </a>
          <a href="#genai-stories" className="p-3 bg-background rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
            <div className="font-medium text-foreground">GenAI Adoption Stories</div>
            <div className="text-sm text-muted-foreground">OpsGPT, chatbot recovery, proving value</div>
          </a>
        </div>
      </div>

      {/* ==================== SYSTEM AVAILABILITY STORIES ==================== */}
      <section id="availability-stories" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 px-4">
            System Availability Stories (96% → 99.35%)
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>

        {/* Availability Story 1: Forcing Prioritization */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥇</span>
              Forcing Prioritization When Everything Was Tier-0
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Re-tiering 155+ applications when teams resisted deprioritization
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                System availability across 155+ OSS/BSS applications was ~96%. For 5M+ subscribers, 4% unavailability meant tens of thousands of customer-impacting minutes monthly. The deeper problem: 60+ apps were classified &quot;Tier-0&quot; over the years. When everything is Tier-0, nothing is — engineering effort spread thin, on-call exhausted, investments went to whoever escalated loudest.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Improve availability materially without budget increase. Decide whether to continue treating all &quot;Tier-0&quot; equally, or deliberately re-tier and accept that some systems get less investment — knowing this creates friction with owning teams.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Built a scoring model: subscriber impact, revenue impact, blast radius. Ran every app through it, dropped 35 systems from Tier-0. Held reviews where teams defended Tier-0 classification against the model. For 25 remaining Tier-0 systems, mandated redundancy, failover, monitoring investments. Implemented a &quot;stabilization tax&quot; — new features required paired reliability improvement.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Availability: 96% → 99.35% over 18 months. Alert volume dropped 40%. On-call burnout decreased measurably. Tiering model became a governance tool preventing re-accumulation of false criticality. Finance estimated $1.8M annual avoided costs.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;155+ apps, 60+ classified Tier-0 — when everything is critical, nothing is. I built a scoring model (subscriber impact, revenue, blast radius) and forced re-tiering. Dropped 35 systems from Tier-0. Mandated stabilization investments for the 25 that stayed. Availability went 96% → 99.35%, alert volume dropped 40%, $1.8M annual savings.&quot;
            </p>
          </div>

          {/* Key Q&A */}
          <div className="mt-4 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Key Follow-up</h5>
            <p className="text-muted-foreground text-sm mb-1">&quot;How did you handle pushback from teams who got downgraded?&quot;</p>
            <p className="text-foreground text-sm italic">
              &quot;I made them defend their classification against the scoring model. If they couldn&apos;t demonstrate subscriber or revenue impact above threshold, they got downgraded. I was explicit it wasn&apos;t a judgment on their work — it was resource allocation.&quot;
            </p>
          </div>
        </div>

        {/* Availability Story 2: Stabilization Freeze */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥈</span>
              Holding the Line on Stabilization During a Revenue Push
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Protecting reliability investment against feature pressure with SVP visibility
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Nine months in, we&apos;d moved from 96% to 98.2%. Remaining gap to 99.3% required database migration and failover redesign for billing platform. Then Sales closed a large enterprise deal requiring accelerated features on the same billing platform. Product wanted to defer stabilization — arguing &quot;stable enough&quot; at 98%.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Decide whether to defer stabilization for the feature timeline, or hold the schedule and push back on Product — knowing the feature request had Sales and SVP visibility.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Pulled incident data: billing caused 3 of 5 longest outages in 12 months. Mapped customer-impact minutes to the enterprise segment. Reframed from &quot;stabilization vs. features&quot; to &quot;protecting the revenue we&apos;re trying to capture.&quot; Proposed sequencing: complete failover redesign first (6 weeks), then accelerate features with dedicated capacity.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Leadership accepted sequencing. Failover redesign completed on schedule, zero issues. Features delivered 3 weeks later than original ask but on stable platform. Billing platform: zero Sev-1 incidents for 6 months — longest incident-free streak in 3 years. Enterprise customer onboarded and expanded within first year.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;Product wanted to defer billing platform stabilization for an enterprise feature request with SVP visibility. I pulled incident data showing billing caused our longest outages, reframed as &apos;protecting the revenue at stake.&apos; Proposed sequencing: stabilization first, then features. Zero Sev-1 incidents for 6 months. Enterprise customer onboarded and expanded.&quot;
            </p>
          </div>

          {/* Key Q&A */}
          <div className="mt-4 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Key Follow-up</h5>
            <p className="text-muted-foreground text-sm mb-1">&quot;How did you convince leadership to accept the delay?&quot;</p>
            <p className="text-foreground text-sm italic">
              &quot;I quantified the risk: if we deferred stabilization and had a major incident during enterprise onboarding, the reputational and revenue damage would exceed the value of three-week acceleration. The math made the decision clear.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ==================== MTTR REDUCTION STORIES ==================== */}
      <section id="mttr-stories" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-orange-600 dark:text-orange-400 px-4">
            MTTR Reduction Stories (42% Improvement)
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        </div>

        {/* MTTR Story 1: Automation Adoption */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl border border-orange-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥇</span>
              Forcing Automation Adoption on Teams Who Preferred Manual Control
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Mandating self-healing when teams resisted with legitimate concerns
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Average MTTR across Tier-0 systems: ~45 minutes. Detection was fast (5-7 min), but diagnosis and remediation slow (30-35 min) due to manual correlation and runbook execution. We had technical capability to automate, but NOC and app teams resisted — concerned about automation making things worse, losing visibility, being blamed when it failed.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Reduce MTTR to under 30 minutes. Decide whether to respect team preferences and pursue incremental manual improvements, or mandate automation adoption — and own consequences if it went wrong.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Phased approach with blast-radius controls. Phase 1: automated diagnostics only (zero risk). Phase 2: automated remediation for low-risk, high-frequency actions with explicit sign-off and auto-rollback. Created &quot;self-healing scorecard&quot; for weekly review. Made tradeoff explicit: no automation = staff for 24/7 manual coverage. Added &quot;confidence threshold&quot; — automation only at 85%+ confidence.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                MTTR: 45 min → 26 min (42% reduction). Automated diagnostics cut diagnosis from 30+ min to under 10 min. Self-healing handled ~35% of qualifying incidents without human intervention. 97% automation success rate. NOC team became advocates. &quot;Nights without pages&quot; improved 60%.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;MTTR was 45 minutes — detection fast, but diagnosis and remediation manual and slow. Teams resisted automation with legitimate concerns. I phased it: automated diagnostics first, then low-risk remediation with rollback gates. Made the alternative explicit: no automation = 24/7 manual staffing. MTTR dropped to 26 minutes, 35% of incidents auto-resolved, 97% success rate.&quot;
            </p>
          </div>

          {/* Key Q&A */}
          <div className="mt-4 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Key Follow-up</h5>
            <p className="text-muted-foreground text-sm mb-1">&quot;What if automation had failed badly?&quot;</p>
            <p className="text-foreground text-sm italic">
              &quot;The confidence threshold and health checks were the safety net. The 3% that failed were caught and rolled back automatically. We tracked this data to build trust — without it, we couldn&apos;t have expanded the program.&quot;
            </p>
          </div>
        </div>

        {/* MTTR Story 2: Business Case for Automation */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl border border-orange-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥈</span>
              Building the Self-Healing Business Case When Leadership Wanted Headcount
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Convincing skeptical VP to fund automation over his preferred approach
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Requested ~$400K to expand self-healing infrastructure. VP pushed back — preferred adding NOC headcount instead. More operators = faster response, more visible investment, demonstrated commitment. He was skeptical automation could handle environment complexity without new failure modes.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Convince VP to approve automation investment over his preferred headcount approach — without undermining his judgment or creating confrontation.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Built comparative 3-year business case. Headcount (4 operators): ~$480K/year, ~15% MTTR reduction, linear scaling. Automation: $400K upfront + $80K/year maintenance, ~40% MTTR reduction, logarithmic scaling. Proposed 6-month pilot on subset of systems — if we didn&apos;t hit 30% reduction, we&apos;d pivot to headcount. Reduced his approval risk.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                VP approved pilot. Achieved 38% MTTR reduction on 15 systems in 4 months — exceeded threshold. Full funding approved. 3-year outcome: 42% reduction at ~$650K vs. estimated $1.44M headcount for 15% improvement. VP later cited this as &quot;making the right argument the right way.&quot;
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;VP wanted NOC headcount, not automation investment. I built a 3-year comparative model: headcount = $1.44M cumulative for 15% improvement; automation = $650K for 40% improvement. Proposed pilot with decision threshold. Achieved 38% in 4 months, exceeded threshold. VP approved full funding and later called it &apos;making the right argument the right way.&apos;&quot;
            </p>
          </div>

          {/* Key Q&A */}
          <div className="mt-4 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Key Follow-up</h5>
            <p className="text-muted-foreground text-sm mb-1">&quot;Why didn&apos;t you just argue automation was better?&quot;</p>
            <p className="text-foreground text-sm italic">
              &quot;Because that would have made it a confrontation about who was right. The pilot structure let him approve with limited commitment and see results before full investment. I addressed his concerns rather than dismissing them.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ==================== GENAI ADOPTION STORIES ==================== */}
      <section id="genai-stories" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 px-4">
            GenAI Adoption Stories
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>

        {/* GenAI Story 1: OpsGPT */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥇</span>
              Scoping OpsGPT to Prove Value Before Skeptics Could Kill It
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Delivering GenAI value by deliberately constraining scope
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Early 2023: proposed OpsGPT — operators query in natural language, system searches runbooks and incident records. Skepticism from all directions: Security worried about data leakage, Engineering questioned technology maturity, NOC managers worried about over-trust, organizational fatigue from previous &quot;AI initiatives&quot; that delivered little.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Deliver enough value to build GenAI credibility, while managing security, accuracy, and over-reliance concerns — without dedicated budget or team.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Deliberately scoped to smallest footprint. Data: only publicly referenceable runbooks and anonymized incidents — no sensitive data. UI: labeled outputs as &quot;suggested context&quot; requiring operator verification. Built with 2 engineers on discretionary time over 6 weeks — below executive approval threshold. Piloted with overnight NOC shift only (least access to senior engineers).
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Overnight team adopted immediately. Time-to-runbook dropped from 8 min to under 2 min. Operators called it &quot;like having a senior engineer at 3 AM.&quot; Secured formal funding to expand to all shifts. OpsGPT became foundation for subsequent GenAI initiatives. &quot;Small scope, fast proof, then expand&quot; became standard model.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;Proposed OpsGPT in 2023 — immediate skepticism from Security, Engineering, NOC. I deliberately constrained scope: non-sensitive data only, &apos;suggested context&apos; labels, built by 2 engineers in 6 weeks below approval threshold. Piloted with overnight shift. Time-to-runbook: 8 min → 2 min. &apos;Like having a senior engineer at 3 AM.&apos; Got full funding, became foundation for all GenAI initiatives.&quot;
            </p>
          </div>

          {/* Key Q&A */}
          <div className="mt-4 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Key Follow-up</h5>
            <p className="text-muted-foreground text-sm mb-1">&quot;Why build below the approval threshold instead of getting formal buy-in?&quot;</p>
            <p className="text-foreground text-sm italic">
              &quot;Because formal approval would have meant months of design reviews and security assessments. The project would have died from attrition before delivering anything. The fastest path to credibility was results, not permission.&quot;
            </p>
          </div>
        </div>

        {/* GenAI Story 2: Billing Chatbot Hallucination */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="text-xl">🥈</span>
              Navigating Failure When the Billing Chatbot Hallucinated Customer Data
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Theme:</strong> Saving a GenAI program from shutdown after a visible failure
            </p>
          </div>

          {/* STAR Sections */}
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Three weeks after launching customer-facing Billing Chatbot, incident: chatbot hallucinated a plausible but fabricated promotion explanation. Customer escalated, CX VP flagged as &quot;AI giving customers false information.&quot; Pressure to shut down entirely. Legal flagged liability if fabricated explanations led customers to make decisions based on false info.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Decide whether to shut down to eliminate risk, or fight to keep it running with guardrails — knowing a second hallucination would kill the program permanently and damage broader GenAI credibility.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Diagnosed root cause: chatbot generated from pattern-matching, not retrieving actual billing data. Implemented retrieval-gated responses — only generate if billing record actually retrieved; otherwise escalate to human. Added 90% confidence threshold with human review for edge cases. Presented tradeoff: shutdown eliminates risk but also 30% call deflection we&apos;d achieved.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                CX VP approved guardrailed approach. Implemented in 1 week, resumed full operation. Zero hallucination incidents in following 6 months. Call deflection stabilized at 25%. Incident became case study in handling GenAI failures constructively. Legal and CX VP, initially pushing shutdown, became supporters.
              </p>
            </div>
          </div>

          {/* 30-Second Version */}
          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
            <h5 className="font-semibold text-foreground mb-2 text-sm">⏱ 30-Second Version</h5>
            <p className="text-foreground text-sm italic">
              &quot;Billing chatbot hallucinated a fake promotion — CX VP wanted shutdown. I diagnosed root cause: generating without retrieving actual billing data. Implemented retrieval-gated responses and confidence thresholds. Reframed: shutdown kills 30% call deflection too. VP approved guardrails. Zero hallucinations in 6 months. CX VP and Legal, initially pushing shutdown, became supporters.&quot;
            </p>
          </div>

          {/* Key Q&A */}
          <div className="mt-4 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm">Key Follow-up</h5>
            <p className="text-muted-foreground text-sm mb-1">&quot;Why not just shut it down to be safe?&quot;</p>
            <p className="text-foreground text-sm italic">
              &quot;Because the failure was diagnosable and boundable. Shutting down would have reinforced the narrative that GenAI is unreliable. By fixing it, we demonstrated that failures can be addressed — which built confidence for future initiatives rather than undermining them.&quot;
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
              <tr className="border-b border-border bg-blue-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Re-tiering Tier-0 Systems</td>
                <td className="px-4 py-3 text-muted-foreground">Forced prioritization when everything was critical</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Made unpopular call&quot;, &quot;Built governance&quot;</td>
              </tr>
              <tr className="border-b border-border bg-blue-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Stabilization Freeze</td>
                <td className="px-4 py-3 text-muted-foreground">Held reliability against feature pressure</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Pushed back on revenue pressure&quot;, &quot;Quantified risk&quot;</td>
              </tr>
              <tr className="border-b border-border bg-orange-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Automation Adoption</td>
                <td className="px-4 py-3 text-muted-foreground">Mandated self-healing against team resistance</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Changed org behavior&quot;, &quot;Drove automation&quot;</td>
              </tr>
              <tr className="border-b border-border bg-orange-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Business Case for Automation</td>
                <td className="px-4 py-3 text-muted-foreground">Convinced skeptical VP with pilot structure</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Influenced up&quot;, &quot;Business case&quot;</td>
              </tr>
              <tr className="border-b border-border bg-cyan-500/5">
                <td className="px-4 py-3 text-foreground font-medium">OpsGPT Scoping</td>
                <td className="px-4 py-3 text-muted-foreground">Delivered GenAI by constraining scope</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;AI/ML adoption&quot;, &quot;Proved value fast&quot;</td>
              </tr>
              <tr className="bg-cyan-500/5">
                <td className="px-4 py-3 text-foreground font-medium">Billing Chatbot Recovery</td>
                <td className="px-4 py-3 text-muted-foreground">Saved program after visible failure</td>
                <td className="px-4 py-3 text-muted-foreground">&quot;Navigated failure&quot;, &quot;Stakeholder management&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Story Ratings Table */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6">Story Ratings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Topic</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Story</th>
                <th className="px-4 py-3 text-center font-semibold text-foreground border-b border-border">Rating</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 text-foreground">Availability</td>
                <td className="px-4 py-3 text-foreground font-medium">Re-tiering Tier-0</td>
                <td className="px-4 py-3 text-center font-bold text-blue-600 dark:text-blue-400">9.1</td>
                <td className="px-4 py-3 text-muted-foreground">Strong Principal</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="px-4 py-3 text-foreground">Availability</td>
                <td className="px-4 py-3 text-foreground font-medium">Stabilization vs revenue</td>
                <td className="px-4 py-3 text-center font-bold text-blue-600 dark:text-blue-400">8.8</td>
                <td className="px-4 py-3 text-muted-foreground">Strong Principal</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 text-foreground">MTTR</td>
                <td className="px-4 py-3 text-foreground font-medium">Automation adoption</td>
                <td className="px-4 py-3 text-center font-bold text-orange-600 dark:text-orange-400">9.0</td>
                <td className="px-4 py-3 text-muted-foreground">Strong Principal</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="px-4 py-3 text-foreground">MTTR</td>
                <td className="px-4 py-3 text-foreground font-medium">Automation vs headcount</td>
                <td className="px-4 py-3 text-center font-bold text-orange-600 dark:text-orange-400">9.2</td>
                <td className="px-4 py-3 text-amber-600 dark:text-amber-400 font-medium">Top-tier Principal</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 text-foreground">GenAI</td>
                <td className="px-4 py-3 text-foreground font-medium">OpsGPT pilot</td>
                <td className="px-4 py-3 text-center font-bold text-cyan-600 dark:text-cyan-400">8.7</td>
                <td className="px-4 py-3 text-muted-foreground">Solid Principal</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">GenAI</td>
                <td className="px-4 py-3 text-foreground font-medium">Chatbot hallucination</td>
                <td className="px-4 py-3 text-center font-bold text-cyan-600 dark:text-cyan-400">9.3</td>
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">Standout Principal</td>
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
