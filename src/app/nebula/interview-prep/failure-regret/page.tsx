"use client";

/**
 * Failure & Regret Stories - Hardened behavioral narratives
 * Four failure stories with executive versions, selection matrix, and practice Q&A
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function FailureRegretPage() {
  return (
    <InterviewPrepLayout
      title="Failure & Regret Stories"
      description="Four hardened failure narratives with 30-second executive versions, selection matrix, and practice Q&A"
      currentSection="failure-regret"
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
          <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
            Failure Stories
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            Behavioral
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Failure &amp; Regret Stories</h1>
        <p className="text-muted-foreground">
          Four tightened failure narratives with specific numbers, &quot;Why It Seemed Reasonable&quot; framing, 30-second executive versions, a selection matrix, and hardened follow-up Q&amp;A.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Page Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a href="#stories" className="p-3 bg-background rounded-lg border border-red-500/30 hover:border-red-500/50 transition-colors">
            <div className="font-medium text-foreground">Part 1: Full Stories</div>
            <div className="text-sm text-muted-foreground">4 detailed failure narratives</div>
          </a>
          <a href="#executive-versions" className="p-3 bg-background rounded-lg border border-amber-500/30 hover:border-amber-500/50 transition-colors">
            <div className="font-medium text-foreground">Part 2: 30-Second Versions</div>
            <div className="text-sm text-muted-foreground">Compact executive summaries</div>
          </a>
          <a href="#selection-matrix" className="p-3 bg-background rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors">
            <div className="font-medium text-foreground">Part 3: Selection Matrix</div>
            <div className="text-sm text-muted-foreground">Which story for which question</div>
          </a>
          <a href="#usage-guidance" className="p-3 bg-background rounded-lg border border-green-500/30 hover:border-green-500/50 transition-colors">
            <div className="font-medium text-foreground">Part 4: Usage Guidance</div>
            <div className="text-sm text-muted-foreground">Default picks, pairing rules</div>
          </a>
          <a href="#practice-qa" className="p-3 bg-background rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <div className="font-medium text-foreground">Part 5: Practice Q&amp;A</div>
            <div className="text-sm text-muted-foreground">5 follow-ups per story</div>
          </a>
          <a href="#quick-reference" className="p-3 bg-background rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">
            <div className="font-medium text-foreground">Quick Reference</div>
            <div className="text-sm text-muted-foreground">Follow-up pattern cheat sheet</div>
          </a>
        </div>
      </div>

      {/* ==================== PART 1: FULL STORIES ==================== */}
      <section id="stories" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 px-4">
            Part 1: Full Revised Stories
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        </div>

        {/* Story 1: Re-Tiering Failure */}
        <div className="mb-16" id="story-1">
          <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center text-sm font-bold">1</span>
              Re-Tiering Failure
            </h3>
            <p className="text-sm text-muted-foreground mt-2 italic">Being Right Without Legitimacy</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                When I took over reliability across 155 OSS/BSS applications, 62 systems were labeled Tier-0 &mdash; 40% of the portfolio competing for the same priority. This caused alert fatigue, diluted investment, and inconsistent prioritization during incidents. On-call teams were responding to 300+ alerts per week, with no way to distinguish genuinely critical issues from noise.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I was responsible for improving availability from 96% to 99%+ without additional headcount or budget, which required redefining criticality so teams could focus on what truly impacted customers and revenue.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I designed a data-driven re-tiering model based on customer impact, transaction criticality, and revenue exposure. The framework was analytically sound &mdash; I could demonstrate that 25 systems drove 85% of customer-impacting incidents. But I moved directly to implementation without first securing strong executive sponsorship or piloting the change. I announced the new tiering in an all-hands and expected compliance.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Why It Seemed Reasonable</h4>
              <p className="text-foreground text-sm leading-relaxed">
                The data was clear, the logic was defensible, and we were under pressure to show availability improvements quickly. I assumed that being analytically correct would be sufficient for adoption.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Availability improved from 96% to 97.4% in the first year &mdash; meaningful, but well short of the 99%+ target. Post-implementation audit showed 8 of 12 platform teams had re-tiered on paper but hadn&apos;t changed on-call staffing or investment priorities. The self-healing rollout I&apos;d planned for Q3 slipped two quarters because teams didn&apos;t trust the tiering that determined which systems qualified. I&apos;d won the classification battle but lost the organizational commitment.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/30">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Regret / Learning</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I treated re-tiering as a classification exercise when it was actually a power redistribution problem. Telling a team their system isn&apos;t Tier-0 anymore feels like telling them their work doesn&apos;t matter &mdash; and I hadn&apos;t built the coalition to absorb that pushback. Today, I would first secure explicit VP-level backing, pilot on 2-3 willing teams to generate proof points, and frame de-tiering as focus amplification (&quot;your system gets dedicated attention appropriate to its role&quot;) rather than loss of importance. Analytical correctness doesn&apos;t create organizational legitimacy &mdash; sponsorship and sequencing do.
              </p>
            </div>
          </div>
        </div>

        {/* Story 2: GenAI Pilot Misstep */}
        <div className="mb-16" id="story-2">
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-sm font-bold">2</span>
              GenAI Pilot Misstep
            </h3>
            <p className="text-sm text-muted-foreground mt-2 italic">Optimizing Accuracy Over Adoption</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I led an ops-focused GenAI pilot (OpsGPT), fine-tuned on proprietary data and augmented via RAG over ~18K customer support tickets. The goal was to reduce time-to-resolution by giving operators instant access to relevant context &mdash; past incidents, runbooks, known fixes &mdash; without manually searching four different knowledge bases.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                My goal was to validate whether GenAI could meaningfully reduce resolution time and cognitive load for frontline ops teams, with a target of 50% adoption within the 80-person NOC within 90 days.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I optimized heavily for model accuracy, retrieval quality, and coverage. We achieved 89% retrieval accuracy on test queries and had strong demo results. But the solution required users to context-switch &mdash; open a separate tool, formulate a prompt, interpret results &mdash; which power users embraced but average operators found disruptive to their workflow.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Why It Seemed Reasonable</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I came from a technical background and assumed that if the tool was accurate and useful, adoption would follow. I prioritized getting the AI right before worrying about the UX, thinking we could improve the interface later.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Technically, the pilot succeeded &mdash; 89% accuracy, positive feedback in demos, and enthusiastic adoption from senior operators. But daily active usage told a different story: 12 of 80 operators used it daily; the remaining 68 tried it once or twice and reverted to manual search. DAU peaked at 15% of the target user base and flatlined after week three. When leadership asked &quot;what&apos;s the ROI?&quot;, I couldn&apos;t demonstrate time savings at scale &mdash; only anecdotes from the 12 power users. The pilot was deemed &quot;technically successful but not scalable,&quot; and expansion funding was deferred.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/30">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Regret / Learning</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I validated capability before habit formation. I proved the AI could answer questions accurately, but I didn&apos;t prove it could change behavior at scale. If doing it again, I&apos;d ship a more embedded, lower-accuracy version first &mdash; something that surfaced suggestions automatically within existing workflows rather than requiring operators to seek it out. And I&apos;d define success by minutes saved per ticket from day one, not model performance. The metric you optimize for shapes the product you build; I optimized for the wrong metric.
              </p>
            </div>
          </div>
        </div>

        {/* Story 3: Vendor Dependency Bet */}
        <div className="mb-16" id="story-3">
          <div className="mb-6 p-4 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">3</span>
              Vendor Dependency Bet
            </h3>
            <p className="text-sm text-muted-foreground mt-2 italic">Short-Term Speed, Long-Term Drag</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                We had 7 vendor dependencies across provisioning, billing, and assurance. The one in question owned our order decomposition layer &mdash; the system that broke complex customer orders into provisioning tasks. We needed to extend this layer to support a new product bundle, and we had a hard Q2 deadline tied to a sales commitment.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I needed to unblock delivery while operating under staffing constraints &mdash; we were already short two senior engineers &mdash; and an aggressive 14-week timeline.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                The vendor offered a 10-week integration path versus our internal estimate of 6 months to build ourselves. I supported extending the vendor solution, optimizing for near-term delivery and reduced internal workload. I flagged the coupling risk in the decision document but didn&apos;t model the long-term velocity impact or define a clear exit strategy. The calculus felt obvious: 10 weeks versus 6 months, same functionality, no hiring required.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Why It Seemed Reasonable</h4>
              <p className="text-foreground text-sm leading-relaxed">
                We were under execution pressure, the vendor had delivered reliably before, and the 6-month internal estimate assumed engineers we didn&apos;t have. Extending the vendor was the rational short-term choice given the constraints we faced.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                We hit the Q2 delivery date and avoided pulling 4 engineers off other priorities. The sales commitment was met; leadership was satisfied. But within 18 months, 3 of our top-5 roadmap items were blocked by vendor release cycles. We went from releasing monthly to releasing when they released. Average feature lead time grew from 6 weeks to 14 weeks, and 40% of that delta was vendor coordination overhead &mdash; waiting for their sprint cycles, negotiating prioritization, debugging integration issues across organizational boundaries. Unwinding the dependency eventually took 9 months and approximately $800K in engineering time &mdash; more than we would have spent building it ourselves originally.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/30">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Regret / Learning</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I framed the decision as build vs. buy when it was actually control vs. dependency. The question wasn&apos;t &quot;can the vendor deliver this feature?&quot; &mdash; it was &quot;do we want our release velocity coupled to their roadmap for the next three years?&quot; Now I treat vendor choices as strategic constraints, not just delivery options. I preserve internal ownership of control planes even when vendors offer faster paths. And I time-box vendor extensions with explicit exit criteria: if we&apos;re still dependent after 18 months, we&apos;ve made a strategic choice, not a tactical one.
              </p>
            </div>
          </div>
        </div>

        {/* Story 4: Availability Metrics Trap */}
        <div className="mb-16" id="story-4">
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">4</span>
              Availability Metrics Trap
            </h3>
            <p className="text-sm text-muted-foreground mt-2 italic">Improving the Number, Not the Experience</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Situation</h4>
              <p className="text-foreground text-sm leading-relaxed">
                We improved reported platform availability from 96% to 99.35% across 155+ systems over 18 months. This was treated as a major operational win &mdash; exec dashboards went green, QBR slides showed steady improvement, and the reliability program was cited as a success story.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Task</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I owned availability metrics and executive reporting, with the mandate to stabilize platforms and reduce customer impact.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Action</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I emphasized uptime and SLA-based metrics as the primary success indicators. We invested heavily in redundancy, failover automation, and monitoring coverage. I built dashboards that tracked system availability at 5-minute granularity and reported monthly improvements to leadership. What I didn&apos;t do initially was pair availability metrics with customer-journey or transaction-level failure metrics. I assumed that if systems were up, customers were happy.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
              <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Why It Seemed Reasonable</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Availability is the standard reliability metric. It&apos;s what SLAs are written against, what vendors commit to, and what executives understand. Improving from 96% to 99.35% is a meaningful operational achievement by any conventional measure.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Result</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Dashboards improved and executive confidence increased. But customer-reported issues dropped only 12% despite a 3.35-point availability improvement. The gap was gray failures &mdash; partial outages, degraded performance, and broken workflows that didn&apos;t trigger availability alerts. When I dug in, I found that checkout completion rate was 94% even when all systems showed green. Six percent of customers were hitting timeouts, retries, and partial failures that our availability metrics never captured. We&apos;d optimized the metric while missing the outcome it was supposed to represent.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/30">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Regret / Learning</h4>
              <p className="text-foreground text-sm leading-relaxed">
                I optimized operational metrics before experiential metrics. Availability measures whether systems are up; it doesn&apos;t measure whether customers can complete what they came to do. Today, I design SLOs around failed business transactions &mdash; order submission success rate, bill generation completion rate, provisioning completion within SLA. Availability is an input to those outcomes, not the outcome itself. If I&apos;d started with &quot;what percentage of customers complete their journey successfully?&quot; instead of &quot;what percentage of time are systems up?&quot;, I would have caught the gray failures 12 months earlier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PART 2: 30-SECOND EXECUTIVE VERSIONS ==================== */}
      <section id="executive-versions" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-amber-600 dark:text-amber-400 px-4">
            Part 2: 30-Second Executive Versions
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-red-500 text-white flex items-center justify-center text-xs font-bold">1</span>
              Re-Tiering
            </h3>
            <p className="text-foreground text-sm leading-relaxed">
              &quot;I built a data-driven system to re-tier 155 applications &mdash; 62 were labeled Tier-0, which meant nothing was actually prioritized. The model was analytically correct, but I rolled it out without executive sponsorship or a pilot. Eight of twelve teams complied on paper but didn&apos;t change behavior. Availability improved modestly, but I lost a year of organizational trust. The lesson: being right isn&apos;t the same as having legitimacy. Now I build coalitions before I build frameworks.&quot;
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-cyan-500 text-white flex items-center justify-center text-xs font-bold">2</span>
              GenAI Pilot
            </h3>
            <p className="text-foreground text-sm leading-relaxed">
              &quot;I led a GenAI pilot for ops &mdash; 89% retrieval accuracy, great demos, enthusiastic power users. But only 12 of 80 operators used it daily. I&apos;d optimized for model accuracy when I should have optimized for habit formation. When leadership asked for ROI, I had anecdotes, not data. The lesson: capability doesn&apos;t equal adoption. Now I instrument time-saved-per-task from day one and ship embedded experiences before polished ones.&quot;
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-amber-500 text-white flex items-center justify-center text-xs font-bold">3</span>
              Vendor Dependency
            </h3>
            <p className="text-foreground text-sm leading-relaxed">
              &quot;We extended a vendor integration to hit a Q2 deadline &mdash; 10 weeks versus 6 months to build internally. We hit the date, but within 18 months, three of our top-five roadmap items were blocked by their release cycles. Feature lead time doubled. Unwinding it cost $800K and 9 months. The lesson: I framed it as build versus buy when it was actually control versus dependency. Now I time-box vendor extensions and protect internal ownership of control planes.&quot;
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-blue-500 text-white flex items-center justify-center text-xs font-bold">4</span>
              Availability Metrics
            </h3>
            <p className="text-foreground text-sm leading-relaxed">
              &quot;We improved availability from 96% to 99.35% &mdash; dashboards went green, leadership was happy. But customer-reported issues only dropped 12%. We were missing gray failures &mdash; checkout completion was 94% even when systems showed healthy. The lesson: availability measures whether systems are up, not whether customers succeed. Now I define SLOs around transaction completion, not uptime. Availability is an input, not the outcome.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ==================== PART 3: SELECTION MATRIX ==================== */}
      <section id="selection-matrix" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 px-4">
            Part 3: Selection Matrix
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-semibold text-foreground border-b border-border">Question Type</th>
                <th className="text-left p-4 font-semibold text-foreground border-b border-border">Best Story</th>
                <th className="text-left p-4 font-semibold text-foreground border-b border-border">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 text-foreground">&quot;Tell me about a time you failed&quot;</td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium">Re-Tiering</span></td>
                <td className="p-4 text-muted-foreground">Clean failure arc, organizational learning, no external blame</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-4 text-foreground">&quot;Tell me about a time you were wrong&quot;</td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium">Availability Metrics</span></td>
                <td className="p-4 text-muted-foreground">You achieved the goal and were still wrong &mdash; sophisticated failure</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 text-foreground">&quot;Tell me about a decision you regret&quot;</td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium">Vendor Dependency</span></td>
                <td className="p-4 text-muted-foreground">Clear decision point, quantifiable long-term cost, actionable learning</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-4 text-foreground">&quot;Tell me about something that didn&apos;t go as planned&quot;</td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium">GenAI Pilot</span></td>
                <td className="p-4 text-muted-foreground">Technical success but adoption failure &mdash; nuanced, not catastrophic</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 text-foreground">&quot;What&apos;s your biggest professional mistake?&quot;</td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium mr-1">Re-Tiering</span>
                  <span className="text-muted-foreground text-xs">or</span>
                  <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium ml-1">Vendor</span>
                </td>
                <td className="p-4 text-muted-foreground">Both show meaningful consequences; choose based on role context</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-4 text-foreground">&quot;Tell me about a time you had to change your approach&quot;</td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium">Availability Metrics</span></td>
                <td className="p-4 text-muted-foreground">Demonstrates evolving your mental model, not just tactics</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 text-foreground">&quot;Describe a time you missed a goal&quot;</td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium">GenAI Pilot</span></td>
                <td className="p-4 text-muted-foreground">Clear target (50% adoption), clear miss (15%), clear learning</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-4 text-foreground">&quot;What would you do differently?&quot;</td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium">Vendor Dependency</span></td>
                <td className="p-4 text-muted-foreground">Most concrete &quot;I would have...&quot; with specific actions</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 text-foreground">&quot;Tell me about a time you faced resistance&quot;</td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium">Re-Tiering</span></td>
                <td className="p-4 text-muted-foreground">Resistance was the failure mode; shows organizational awareness</td>
              </tr>
              <tr>
                <td className="p-4 text-foreground">&quot;How do you handle setbacks?&quot;</td>
                <td className="p-4"><span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium">GenAI Pilot</span></td>
                <td className="p-4 text-muted-foreground">Shows resilience framing &mdash; technical success despite adoption miss</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ==================== PART 4: USAGE GUIDANCE ==================== */}
      <section id="usage-guidance" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-green-600 dark:text-green-400 px-4">
            Part 4: Usage Guidance
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <h3 className="font-semibold text-foreground mb-4">Default Selection</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground">For general &quot;tell me about a failure&quot; &rarr; <strong>Re-Tiering</strong> (cleanest arc, most universal lesson)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground">For technical roles or AI-focused interviews &rarr; <strong>GenAI Pilot</strong> (relevant domain, sophisticated failure)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground">For strategic/vendor/platform questions &rarr; <strong>Vendor Dependency</strong> (shows long-term thinking)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground">For metrics/SRE/reliability questions &rarr; <strong>Availability Metrics</strong> (shows metric maturity)</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <h3 className="font-semibold text-foreground mb-4">If Asked for Multiple Failures</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground">Pair <strong>Re-Tiering</strong> (organizational) with <strong>Availability Metrics</strong> (technical) &mdash; shows range</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground"><strong>Avoid</strong> pairing GenAI Pilot with Availability Metrics &mdash; both are &quot;optimized wrong metric&quot; stories</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <h3 className="font-semibold text-foreground mb-4">If Probed on &quot;Why Did You Make That Choice?&quot;</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-purple-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground">Each story has a &quot;Why It Seemed Reasonable&quot; section &mdash; use it</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground">Interviewers want to see you&apos;re not reckless, just human</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <h3 className="font-semibold text-foreground mb-4">If Pushed on &quot;What Did You Actually Change?&quot;</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground">Each story has concrete &quot;now I do X&quot; statements &mdash; be specific</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 mt-0.5">&#x2022;</span>
                <p className="text-foreground">Avoid vague &quot;I learned to communicate better&quot; &mdash; your learnings are structural, not behavioral</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PART 5: PRACTICE Q&A ==================== */}
      <section id="practice-qa" className="mb-16">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 px-4">
            Part 5: Practice Q&amp;A
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>

        {/* Story 1 Q&A */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/30">
            <h3 className="text-lg font-bold text-foreground">Story 1: Re-Tiering Failure &mdash; Follow-Up Q&amp;A</h3>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q1: Why didn&apos;t you get executive sponsorship first?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;Honestly, I underestimated how political tiering was. I saw it as a technical classification problem &mdash; the data clearly showed which systems mattered most. I assumed that being analytically correct would be sufficient, and that teams would follow the logic. What I missed was that Tier-0 status had become a proxy for organizational importance. Taking it away felt like a demotion, regardless of what the data said. I was solving for the wrong problem &mdash; I thought I was fixing a prioritization gap, but I was actually redistributing power. That requires sponsorship, not spreadsheets.&quot;
              </p>
            </div>

            <div className="p-5 bg-muted/20 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q2: How did you recover from this?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;I had to rebuild trust team by team. I went back to the 8 teams that had complied superficially and asked a different question: &apos;What would make you actually change your on-call staffing and investment priorities?&apos; The answers were consistent &mdash; they needed to see the tiering validated in a real incident, and they needed their leadership to explicitly endorse the change. So I shifted from broadcasting the framework to piloting it. I picked three teams whose directors were willing to go first, ran a 90-day pilot where we actually staffed and invested according to the new tiers, and used the results &mdash; fewer pages, faster response on the systems that mattered &mdash; to bring the others along. It took an extra two quarters, but adoption became real.&quot;
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q3: Would you do re-tiering differently today, or avoid it entirely?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;I&apos;d absolutely still do it &mdash; the problem was real. Sixty-two Tier-0 systems meant nothing was prioritized. But I&apos;d sequence it differently. First, I&apos;d get VP-level sponsorship before announcing anything &mdash; not just awareness, but explicit endorsement that this is how we&apos;re operating now. Second, I&apos;d pilot with willing teams and generate proof points before expanding. Third, I&apos;d frame de-tiering as focus amplification, not loss of status &mdash; &apos;your system gets the right level of attention for its role&apos; instead of &apos;your system isn&apos;t important enough.&apos; The framework was right; the rollout was wrong.&quot;
              </p>
            </div>

            <div className="p-5 bg-muted/20 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q4: What signals did you miss that told you this wasn&apos;t working?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;The clearest signal was the gap between compliance and behavior. Teams updated their documentation to reflect the new tiers, but when I looked at on-call rotations and Q3 investment plans, nothing had changed. Eight of twelve teams were saying yes and doing no. I should have tracked behavioral metrics &mdash; staffing changes, investment allocation, incident response patterns &mdash; not just whether they&apos;d acknowledged the new classification. The other signal was the self-healing program slipping. Teams didn&apos;t trust the tiering, so they didn&apos;t want their systems enrolled in automation based on it. When your downstream initiatives stall because of upstream skepticism, that&apos;s a legitimacy problem, not a communication problem.&quot;
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q5: How do you get buy-in now for unpopular but necessary changes?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;Three things. First, I secure sponsorship before I announce &mdash; not just informing leadership, but getting them to explicitly own the change. Second, I pilot before I scale. Willing early adopters generate proof points and create peer pressure. Third, I frame the change around what teams gain, not what they lose. With re-tiering, I should have emphasized that Tier-1 systems would get dedicated attention appropriate to their role &mdash; not that they were being deprioritized. People will accept a new framework if they feel it respects their work; they&apos;ll resist if it feels like a demotion.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Story 2 Q&A */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/30">
            <h3 className="text-lg font-bold text-foreground">Story 2: GenAI Pilot Misstep &mdash; Follow-Up Q&amp;A</h3>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q1: Why did you focus on accuracy over adoption?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;My background is technical, and I approached it as a technical problem. The RAG pipeline, the retrieval quality, the response accuracy &mdash; those were the things I knew how to measure and optimize. I assumed that if the tool was accurate and useful, adoption would follow naturally. What I underestimated was the behavioral change required. Operators had existing workflows &mdash; muscle memory for how they searched knowledge bases, habits built over years. Asking them to context-switch to a new tool, formulate a prompt, and interpret AI-generated results was asking them to change behavior, not just use a feature. I optimized for capability when I should have optimized for integration into existing habits.&quot;
              </p>
            </div>

            <div className="p-5 bg-muted/20 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q2: How would you measure success differently now?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;I&apos;d start with the outcome metric from day one: minutes saved per ticket. Not retrieval accuracy, not model performance &mdash; actual time savings at the task level. I&apos;d instrument the workflow to capture baseline resolution time before the pilot, then measure the delta. That forces you to think about adoption as part of the success criteria, not a separate problem. If operators aren&apos;t using the tool, you&apos;re not saving time, regardless of how accurate the model is. I&apos;d also track adoption curves, not just DAU snapshots &mdash; are we gaining users week over week, or did we plateau? Plateaus tell you you&apos;ve hit a friction point that accuracy improvements won&apos;t solve.&quot;
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q3: What would the &quot;embedded, lower-accuracy version&quot; have looked like?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;Instead of a separate tool operators had to open and query, I&apos;d surface suggestions inline within their existing ticketing interface. When an operator opens a ticket, the system automatically retrieves likely-relevant context &mdash; similar past incidents, applicable runbook sections &mdash; and displays them in a sidebar. No prompting required, no context-switching. The accuracy might be lower because you&apos;re guessing what they need rather than responding to a specific query, but you&apos;re meeting them where they already are. The hypothesis is that a 70%-accurate suggestion that appears automatically is more valuable than a 90%-accurate answer that requires them to stop and ask for it.&quot;
              </p>
            </div>

            <div className="p-5 bg-muted/20 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q4: How did you handle the leadership conversation when they questioned scalability?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;I was transparent that the pilot had validated capability but not behavior change. I showed them the accuracy metrics and the power-user feedback, but I also showed them the adoption curve &mdash; 15% DAU, flatlined after week three. I framed it as &apos;we&apos;ve proven the technology works; we haven&apos;t proven the UX works.&apos; I proposed a phase two focused on embedded integration rather than standalone tooling, with different success metrics. Leadership appreciated the honesty &mdash; they&apos;d seen enough AI demos that promised transformation and delivered nothing. Acknowledging the gap and having a concrete plan to address it was more credible than defending the pilot as a success.&quot;
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q5: What&apos;s your framework now for piloting emerging technology?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;Three principles. First, define success by business outcome, not technical performance. For GenAI, that&apos;s time saved or errors avoided, not retrieval accuracy. Second, optimize for habit formation before capability. Ship something embedded and automatic before something powerful and manual. Third, instrument adoption from day one &mdash; not just &apos;did they try it&apos; but &apos;did they keep using it&apos; and &apos;did it change their behavior.&apos; If your adoption curve plateaus, that&apos;s a signal to iterate on integration, not double down on model improvements.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Story 3 Q&A */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/30">
            <h3 className="text-lg font-bold text-foreground">Story 3: Vendor Dependency Bet &mdash; Follow-Up Q&amp;A</h3>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q1: Why didn&apos;t you see the long-term risk at the time?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;I saw it &mdash; I flagged coupling risk in the decision document. But I didn&apos;t quantify it or model the velocity impact over time. The 10-week versus 6-month comparison was so stark that the short-term calculus dominated. I also had confidence bias from past vendor performance &mdash; they&apos;d delivered reliably before, so I assumed they would again. What I didn&apos;t account for was that extending a vendor solution is different from using their existing product. Once we were coupled to their roadmap for our core functionality, every future feature required coordination. I saw the risk; I underweighted it.&quot;
              </p>
            </div>

            <div className="p-5 bg-muted/20 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q2: How do you evaluate build vs. buy decisions now?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;I reframe it as control versus dependency, not build versus buy. The question isn&apos;t &apos;can the vendor deliver this feature faster?&apos; &mdash; it&apos;s &apos;do we want our release velocity coupled to their roadmap?&apos; For commoditized, non-differentiating capabilities, vendor dependency is fine. For anything in your critical path &mdash; order flow, provisioning, billing &mdash; I bias toward internal ownership even if it&apos;s slower initially. I also time-box vendor extensions explicitly: if we&apos;re still dependent after 18 months, that&apos;s a strategic commitment, not a tactical shortcut, and it needs to be evaluated as such.&quot;
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q3: What would the exit strategy have looked like if you&apos;d defined one?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;At minimum, I&apos;d have defined an API abstraction layer between our systems and the vendor &mdash; so we could swap implementations without rewiring everything downstream. I&apos;d have set a trigger: if vendor coordination overhead exceeds 20% of feature lead time, we begin building internally. And I&apos;d have budgeted for the exit in year-two planning, not treated it as a surprise. The $800K and 9 months to unwind the dependency shouldn&apos;t have been a discovery &mdash; it should have been a planned contingency we hoped not to use.&quot;
              </p>
            </div>

            <div className="p-5 bg-muted/20 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q4: How did you eventually unwind the dependency?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;It was painful. We had to build the internal capability while maintaining the vendor integration &mdash; essentially running both in parallel for six months. I negotiated a transition period with the vendor where we stayed on their platform but froze new feature requests, which gave us time to build without coordination overhead. The key was sequencing: we migrated low-risk, low-volume order types first, validated the internal system, then progressively shifted traffic. Total timeline was 9 months, total cost was approximately $800K in engineering time. The silver lining was that we built with the abstraction layer I should have insisted on originally, so we&apos;re not making the same mistake twice.&quot;
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q5: How do you handle pressure to take shortcuts now?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;I don&apos;t resist shortcuts &mdash; I price them. When someone proposes a fast path with long-term coupling risk, I model the exit cost explicitly. &apos;This saves us 4 months now, but if we need to unwind it in two years, here&apos;s what that costs.&apos; That shifts the conversation from &apos;fast versus slow&apos; to &apos;what are we willing to pay for speed?&apos; Sometimes the shortcut is still the right call &mdash; the business context might justify the coupling. But making the tradeoff explicit means we&apos;re choosing it, not stumbling into it.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Story 4 Q&A */}
        <div className="mb-12">
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/30">
            <h3 className="text-lg font-bold text-foreground">Story 4: Availability Metrics Trap &mdash; Follow-Up Q&amp;A</h3>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q1: How did you discover the gap between availability and customer experience?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;Customer support escalations. We were showing 99.35% availability, but support tickets weren&apos;t dropping proportionally &mdash; only 12% reduction despite a 3.35-point availability improvement. When I dug into the tickets, I found patterns: customers reporting &apos;it&apos;s slow,&apos; &apos;I had to retry,&apos; &apos;my order didn&apos;t go through but no error message.&apos; These were gray failures &mdash; the system was technically up, but the customer journey was broken. I pulled checkout completion rate data and found it was 94% even when all systems showed green. Six percent of customers were failing, and our availability metrics never saw it.&quot;
              </p>
            </div>

            <div className="p-5 bg-muted/20 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q2: Why didn&apos;t you include customer-journey metrics from the start?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;Availability is the standard reliability metric &mdash; it&apos;s what SLAs are written against, what executives understand, what vendors commit to. I defaulted to industry convention without questioning whether it measured what we actually cared about. I also had a blind spot: I was thinking about systems, not journeys. Availability answers &apos;is the system up?&apos; &mdash; it doesn&apos;t answer &apos;can the customer complete what they came to do?&apos; Those are different questions, and I didn&apos;t distinguish them until the data forced me to.&quot;
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q3: What does your SLO framework look like now?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;I start with customer outcomes and work backward. For an e-commerce platform, the primary SLO might be &apos;order submission success rate&apos; &mdash; what percentage of customers who click &apos;buy&apos; successfully complete the transaction? For a billing platform, it&apos;s &apos;bill generation completion rate&apos; and &apos;payment processing success rate.&apos; Availability becomes a supporting metric &mdash; if availability drops, that should show up in the outcome SLOs, but the outcome is what we alert on and optimize for. I also instrument the full journey, not just the endpoints. Time-to-completion, retry rates, partial failures &mdash; these are the gray-failure signals that availability misses.&quot;
              </p>
            </div>

            <div className="p-5 bg-muted/20 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q4: How did you get leadership to shift from availability to transaction-based SLOs?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;I showed them the gap. I put two charts side by side: availability trending up to 99.35%, and customer-reported issues only down 12%. Then I showed checkout completion rate at 94% during periods of 100% reported availability. The question became obvious: &apos;If our systems are up, why are 6% of customers failing?&apos; That opened the conversation about what we were actually measuring. I proposed transaction-based SLOs as the new primary metric, with availability as a diagnostic input. Leadership bought in because the data made the case &mdash; I wasn&apos;t asking them to trust a theory, I was showing them a measurement gap.&quot;
              </p>
            </div>

            <div className="p-5 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Q5: How do you prevent this kind of metric blindness in other domains?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &quot;Two habits. First, I always ask &apos;what customer outcome does this metric represent?&apos; If the answer is indirect or unclear, the metric is a proxy, and I need to find the actual outcome metric. Second, I look for divergence. If a metric is improving but the qualitative signal &mdash; support tickets, customer feedback, escalations &mdash; isn&apos;t improving proportionally, that&apos;s a sign the metric isn&apos;t capturing what matters. Metrics are models of reality, not reality itself. When the model diverges from what customers experience, you fix the model, not the customer&apos;s perception.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== QUICK REFERENCE ==================== */}
      <section id="quick-reference" className="mb-10">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <h2 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 px-4">
            Quick Reference: Follow-Up Patterns
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-semibold text-foreground border-b border-border">Follow-Up Type</th>
                <th className="text-left p-4 font-semibold text-foreground border-b border-border">What They&apos;re Probing</th>
                <th className="text-left p-4 font-semibold text-foreground border-b border-border">How to Respond</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 text-foreground">&quot;Why didn&apos;t you see this coming?&quot;</td>
                <td className="p-4 text-muted-foreground">Judgment, self-awareness</td>
                <td className="p-4 text-muted-foreground">Acknowledge the blind spot, explain what made it invisible at the time, show what you&apos;d look for now</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-4 text-foreground">&quot;How did you recover?&quot;</td>
                <td className="p-4 text-muted-foreground">Resilience, adaptability</td>
                <td className="p-4 text-muted-foreground">Describe concrete actions, not just &quot;I learned&quot; &mdash; show the pivot</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 text-foreground">&quot;What would you do differently?&quot;</td>
                <td className="p-4 text-muted-foreground">Learning, growth</td>
                <td className="p-4 text-muted-foreground">Be specific &mdash; not &quot;communicate better&quot; but &quot;secure VP sponsorship before announcing&quot;</td>
              </tr>
              <tr className="border-b border-border bg-muted/20">
                <td className="p-4 text-foreground">&quot;How do you approach this now?&quot;</td>
                <td className="p-4 text-muted-foreground">Systematic improvement</td>
                <td className="p-4 text-muted-foreground">Show a framework or principle, not just &quot;I&apos;m more careful&quot;</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 text-foreground">&quot;How did leadership react?&quot;</td>
                <td className="p-4 text-muted-foreground">Stakeholder management</td>
                <td className="p-4 text-muted-foreground">Show you were transparent about the gap and had a plan to address it</td>
              </tr>
              <tr>
                <td className="p-4 text-foreground">&quot;What signals did you miss?&quot;</td>
                <td className="p-4 text-muted-foreground">Pattern recognition</td>
                <td className="p-4 text-muted-foreground">Identify specific leading indicators you&apos;d now track</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep/why-us-template"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Why Us Template
        </Link>
        <Link
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Back to Overview &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
