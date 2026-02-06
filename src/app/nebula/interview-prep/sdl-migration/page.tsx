"use client";

/**
 * SDL Migration - Principal TPM STAR Stories
 * Three interview-ready stories with 30-second versions and hardened Q&A
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function SDLMigrationPage() {
  return (
    <InterviewPrepLayout
      title="SDL Migration"
      description="Principal TPM-level STAR stories for large-scale migration"
      currentSection="sdl-migration"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Interview Prep
      </Link>

      {/* Archive Link */}
      <div className="mb-6 p-3 bg-muted/30 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Previous version:</strong>{" "}
          <Link href="/nebula/interview-prep/sdl-migration-old" className="text-primary hover:underline">
            View archived stories →
          </Link>
        </p>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            STAR Format
          </span>
          <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            3 Stories
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">SDL Migration</h1>
        <p className="text-muted-foreground">
          Three Principal TPM-level STAR stories for someone who ran this migration.
          These are <strong className="text-foreground">tight, interviewer-ready versions</strong> to memorize and pressure-test.
        </p>
      </div>

      {/* Interview Usage Guide */}
      <section className="mb-10 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">How to Deploy These in Interviews</h3>
        <ul className="space-y-2 text-foreground">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
            <span><strong>Open with Story 1</strong> → strongest all-around Principal signal</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
            <span><strong>If challenged on influence</strong> → Story 2</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
            <span><strong>If challenged on judgment/backbone</strong> → Story 3</span>
          </li>
        </ul>
        <div className="mt-4 p-3 bg-background/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            Together, they signal: You <strong className="text-foreground">govern risk</strong>, not just deliver plans. You <strong className="text-foreground">trade speed for survivability</strong> deliberately. You <strong className="text-foreground">create durable decision systems</strong>. That is <strong className="text-foreground">Principal TPM bar</strong>.
          </p>
        </div>
      </section>

      {/* Story Summary Table */}
      <section className="mb-10 overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-semibold text-foreground border-b border-border">Story</th>
              <th className="text-left p-4 font-semibold text-foreground border-b border-border">Core Theme</th>
              <th className="text-left p-4 font-semibold text-foreground border-b border-border">Principal-Level Signal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-4 text-foreground">Blast radius over speed</td>
              <td className="p-4 text-muted-foreground">Slowed migration to prevent cascading failure</td>
              <td className="p-4 text-muted-foreground">Made the unpopular call with CFO-level tradeoff framing, built systemic fix</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-4 text-foreground">Cross-org alignment without authority</td>
              <td className="p-4 text-muted-foreground">Forced resolution across three teams with no reporting line</td>
              <td className="p-4 text-muted-foreground">Took ownership of an unowned problem, built durable governance</td>
            </tr>
            <tr>
              <td className="p-4 text-foreground">Holding the bar under exec pressure</td>
              <td className="p-4 text-muted-foreground">Refused to ship known billing errors despite pressure</td>
              <td className="p-4 text-muted-foreground">Reframed the decision, found a middle path, maintained credibility of the gate</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ========== STORY 1 ========== */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <span className="px-4 py-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-semibold rounded-full flex items-center gap-2">
          <span className="text-lg">🥇</span> Story 1 (Primary)
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Prioritizing Blast Radius Over Milestones</h2>
        <p className="text-lg text-muted-foreground mb-6">Primary SDL Migration Story</p>

        {/* Full STAR Story */}
        <div className="space-y-6 mb-8">
          {/* Situation */}
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">S</span>
              <h3 className="font-semibold text-foreground">Situation</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                We were midway through migrating 50 Suddenlink CORPs onto Cablevision&apos;s BSS stack — about 1.5M subscribers total across 16 states. Executive pressure was to accelerate the wave schedule because SDL&apos;s BSS support contract had a hard sunset date, and every month of dual-run carried significant licensing and support costs. The program plan called for migrating 4-5 CORPs per wave, with waves every two weeks.
              </p>
              <p>
                After the first three waves, we started seeing elevated Sigma provisioning failures for complex orders — bundles with video, data, and voice. The failures weren&apos;t catastrophic, but the fallout rate was trending upward: <strong>2% in wave one, 3.5% in wave two, 5% in wave three</strong>. Root cause was a mapping issue between CBV&apos;s product catalog and Sigma&apos;s provisioning templates — certain bundle combinations weren&apos;t translating cleanly, and the errors were silent until activation failed.
              </p>
            </div>
          </div>

          {/* Task */}
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">T</span>
              <h3 className="font-semibold text-foreground">Task</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              I had to decide whether to continue the wave schedule to meet the contract sunset deadline, or slow the migration to fix the mapping issue — knowing that slowing down would extend dual-run costs and put the program behind a milestone the CFO was tracking.
            </p>
          </div>

          {/* Action */}
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">A</span>
              <h3 className="font-semibold text-foreground">Action</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                I made the call to pause new waves and cap the next two waves at 2 CORPs each — specifically selecting CORPs with simpler product mixes and lower bundle attach rates to limit exposure while we fixed the root cause.
              </p>
              <p>
                My reasoning was that the provisioning failure trend was non-linear. If we hit 8-10% fallout on a larger wave, we&apos;d burn through our error budget in a single week, flood the support queue, and likely have to pause anyway — but with 50K+ affected subscribers instead of 15K. <strong>Slowing deliberately now would cost us 3-4 weeks; cleaning up a blown wave would cost us 8+ weeks plus customer credits.</strong>
              </p>
              <p>
                I presented the tradeoffs to my VP and the CFO directly: continue pace and risk a major incident, or slow down and absorb $1.2M in extended dual-run costs with high confidence of controlled completion. I framed it as <strong>paying for predictability versus gambling on speed</strong>.
              </p>
              <p>
                Once aligned, I worked with the Sigma integration team to instrument the mapping layer with explicit validation — every product-to-template translation would log success or failure before the order hit Sigma, so we&apos;d catch mismatches at decomposition rather than at activation. We also built a pre-wave audit that ran the upcoming CORP&apos;s order history against the mapping rules to surface gaps before go-live.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">R</span>
              <h3 className="font-semibold text-foreground">Result</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                We completed the mapping fix in three weeks, resumed full wave pace, and finished the migration <strong>six weeks behind the original schedule but with zero blow-up waves</strong>. Total provisioning fallout for the remaining 35 CORPs averaged 1.8% — below our 2.5% threshold.
              </p>
              <p>
                The extended dual-run cost was $1.4M; the estimated cost of a major incident plus recovery was $4-6M in credits, support surge, and schedule slip. Post-migration, the pre-wave audit became a permanent gate in the program governance model.
              </p>
            </div>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🎙️</span> 30-Second Version
          </h3>
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <blockquote className="text-foreground leading-relaxed space-y-3 italic">
              <p>
                &quot;Mid-migration of ~1.5M subs, we saw Sigma provisioning fallout increase wave over wave—2%, then 3.5%, then 5%—as waves scaled. Exec pressure was to keep pace to hit a hard SDL sunset date and avoid dual-run costs.
              </p>
              <p>
                I paused large waves, capped the next ones to simpler CORPs, and reframed the decision as predictability versus gambling. Slowing cost ~$1.4M in extended dual-run, but a blown wave would have cost $4–6M in credits, rework, and trust. We fixed the mapping issue, added a pre-wave audit gate, resumed pace, and finished without a single blow-up wave.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Hardened Q&A */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🛡️</span> Hardened Answers
          </h3>
          <div className="space-y-4">
            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Why not fix in parallel and keep moving?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;Because the risk curve was non-linear. Once fallout crossed a threshold, support load and MTTR would spike faster than remediation.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;How did you justify this to the CFO?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;I framed it as paying $1.4M for predictability versus risking a $4–6M incident. That made the tradeoff explicit.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Were you actually late because of this?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;Six weeks later than the original plan, but with zero blow-up waves. Speed without control would have delayed us far longer.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STORY 2 ========== */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full flex items-center gap-2">
          <span className="text-lg">🥈</span> Story 2 (Influence)
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Driving Alignment Across Orgs Without Authority</h2>
        <p className="text-lg text-muted-foreground mb-6">During Critical Integration Failure</p>

        {/* Full STAR Story */}
        <div className="space-y-6 mb-8">
          {/* Situation */}
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">S</span>
              <h3 className="font-semibold text-foreground">Situation</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                Three months into the migration, we hit a critical issue: the integration between CBV&apos;s BSS and Sigma started throwing intermittent timeouts during peak order hours, causing <strong>15-20% of provisioning requests to fail</strong> and require manual retry. This was happening on already-migrated CORPs, meaning real customers were stuck in activation limbo.
              </p>
              <p>
                The problem sat at the intersection of three teams with no shared reporting line: CBV&apos;s BSS platform team (internal), the WHA decomposition team (internal but different org), and Sigma (third-party vendor with contractual SLAs). Each team had a different theory — BSS blamed Sigma&apos;s API latency, Sigma blamed WHA&apos;s retry logic, WHA blamed BSS&apos;s connection pool exhaustion. <strong>None of them owned the end-to-end flow</strong>, and none were motivated to take the lead because the issue didn&apos;t cleanly fall in their scope.
              </p>
            </div>
          </div>

          {/* Task */}
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">T</span>
              <h3 className="font-semibold text-foreground">Task</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              I needed to get to root cause and resolution within days — we had a wave scheduled for the following week, and pausing indefinitely would blow the program timeline. But I had no direct authority over any of the three teams, and the vendor relationship was owned by procurement, not me.
            </p>
          </div>

          {/* Action */}
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">A</span>
              <h3 className="font-semibold text-foreground">Action</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                I stood up a joint war room and <strong>declared myself the integration owner for the duration of the incident</strong> — not because anyone appointed me, but because I was the only one accountable for the migration outcome and therefore the only one with incentive to force resolution.
              </p>
              <p>
                I brought the three teams together with a shared view of the flow: BSS → WHA → Sigma, with latency and error instrumentation at each hop. I required each team to instrument their boundary with timestamps and correlation IDs so we could trace individual orders end-to-end. This took 48 hours and surfaced the actual issue: <strong>WHA&apos;s retry logic was hammering Sigma&apos;s API during timeouts, causing Sigma to throttle</strong>, which looked like latency from BSS&apos;s perspective.
              </p>
              <p>
                Once we had the data, the fix was clear — WHA needed exponential backoff with jitter, and Sigma needed to return explicit throttle responses instead of silent timeouts. I drafted the fix requirements, got sign-off from each team&apos;s lead, and brokered a commitment from Sigma&apos;s account team to expedite the change given the migration context.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">R</span>
              <h3 className="font-semibold text-foreground">Result</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                We implemented the fix within a week, resumed the wave schedule on time, and saw provisioning success rates return to 98%+.
              </p>
              <p>
                More importantly, I established a <strong>standing integration review forum</strong> that met weekly for the rest of the migration — any cross-boundary issue got triaged there with the same three teams, which prevented similar gaps from festering. The forum continued post-migration as part of ongoing operations.
              </p>
            </div>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🎙️</span> 30-Second Version
          </h3>
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <blockquote className="text-foreground leading-relaxed space-y-3 italic">
              <p>
                &quot;During migration, a CBV–WHA–Sigma integration started failing intermittently—15–20% provisioning timeouts. Three teams blamed each other and none owned the end-to-end flow.
              </p>
              <p>
                I declared temporary ownership, forced boundary-level instrumentation with correlation IDs, and traced the issue to WHA retry storms triggering Sigma throttling. We fixed retry logic and API responses, resumed waves on time, and institutionalized a standing integration forum that prevented similar failures for the rest of the program.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Hardened Q&A */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🛡️</span> Hardened Answers
          </h3>
          <div className="space-y-4">
            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Who gave you authority to declare ownership?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;No one formally. I was accountable for the outcome, so I stepped in to resolve an unowned problem.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Why hadn&apos;t this been caught earlier?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;Because no one owned the full request path. The migration surfaced a systemic ownership gap.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;What if the vendor refused?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;Once we had data, the fix was clear. The migration context gave leverage to prioritize it contractually.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STORY 3 ========== */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        <span className="px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full flex items-center gap-2">
          <span className="text-lg">🥉</span> Story 3 (Judgment)
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Governing Exec Pressure During Parallel Billing Failures</h2>
        <p className="text-lg text-muted-foreground mb-6">Holding the Bar Under Executive Pressure</p>

        {/* Full STAR Story */}
        <div className="space-y-6 mb-8">
          {/* Situation */}
          <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm font-bold">S</span>
              <h3 className="font-semibold text-foreground">Situation</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                Midway through the migration, we were running parallel billing for every migrated CORP — generating shadow bills on CBV&apos;s stack and comparing them to what SDL would have billed. This was our primary control for catching revenue leakage or customer overcharges before they went live.
              </p>
              <p>
                In wave 12, the parallel billing reconciliation surfaced a <strong>4.2% variance — significantly above our 1% threshold</strong>. The variance was concentrated in a specific set of rate codes related to regional sports network fees, which had different tax treatment in SDL versus CBV. The root cause was a tax configuration that hadn&apos;t been migrated correctly for that CORP&apos;s state.
              </p>
              <p>
                The executive sponsor wanted to proceed with billing go-live anyway and &quot;true up&quot; the affected customers with credits next cycle. The argument was that 4.2% variance on a 30K-subscriber CORP was only ~1,200 customers, the average impact was $3-5 per bill, and delaying would push the wave schedule back by two weeks.
              </p>
            </div>
          </div>

          {/* Task */}
          <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm font-bold">T</span>
              <h3 className="font-semibold text-foreground">Task</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              I had to decide whether to hold the billing go-live until the tax configuration was fixed, or proceed and remediate. <strong>The exec sponsor was two levels above me</strong>, and the pressure was real — we were being measured on wave completion velocity.
            </p>
          </div>

          {/* Action */}
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm font-bold">A</span>
              <h3 className="font-semibold text-foreground">Action</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                I held the line on not going live with known billing errors, but I reframed the decision to make it easier for the exec to back me.
              </p>
              <p>
                My argument was that the 4.2% variance wasn&apos;t the risk — <strong>the risk was that we didn&apos;t know what we didn&apos;t know</strong>. If the tax config was wrong for RSN fees, what else was wrong that the reconciliation hadn&apos;t caught yet? Proceeding with known errors would undermine confidence in the parallel billing gate itself, and if we later had a larger variance, we&apos;d have no credibility to hold.
              </p>
              <p>
                I proposed a middle path: hold billing go-live for that CORP, but don&apos;t delay the next wave. We&apos;d run wave 13 on schedule while fixing the tax config for wave 12. This meant briefly running three CORPs in parallel (SDL billing still live) instead of two, which added operational load but didn&apos;t blow the overall timeline.
              </p>
              <p>
                I also committed to a <strong>72-hour fix timeline</strong> by pulling in the tax configuration SME and running a focused remediation sprint. I gave the exec a daily update on progress and a clear go/no-go decision point at 72 hours.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-bold">R</span>
              <h3 className="font-semibold text-foreground">Result</h3>
            </div>
            <div className="text-foreground leading-relaxed space-y-3">
              <p>
                We fixed the tax configuration in <strong>60 hours</strong>, re-ran parallel billing, hit 0.6% variance (within threshold), and went live with billing. Wave 13 proceeded on schedule, so the net delay to the program was zero.
              </p>
              <p>
                The exec later cited this as an example of <strong>&quot;holding the bar without being a blocker&quot;</strong> in a program retrospective. The parallel billing threshold became a hard gate for all subsequent waves — no exceptions without my sign-off and documented risk acceptance.
              </p>
            </div>
          </div>
        </div>

        {/* 30-Second Version */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🎙️</span> 30-Second Version
          </h3>
          <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
            <blockquote className="text-foreground leading-relaxed space-y-3 italic">
              <p>
                &quot;In wave 12, parallel billing showed a 4.2% variance tied to tax config errors. An exec sponsor wanted to go live and true-up later to keep velocity.
              </p>
              <p>
                I held billing go-live, arguing the real risk wasn&apos;t the 4%—it was undermining trust in the reconciliation gate. I proposed a middle path: hold billing for that CORP, proceed with the next wave, and commit to a 72-hour fix. We fixed it in 60 hours, hit threshold, and kept the overall program on schedule.&quot;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Hardened Q&A */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">🛡️</span> Hardened Answers
          </h3>
          <div className="space-y-4">
            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Wasn&apos;t this being overly conservative?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;No. Shipping known errors destroys the credibility of the gate. Once you do that, every future decision becomes political.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;Why not credit customers later?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;That treats symptoms. The systemic risk was losing confidence in our controls.&quot;
                </p>
              </blockquote>
            </div>

            <div className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold text-red-500 mb-3">&quot;How did you push back on a senior exec?&quot;</h4>
              <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  &quot;I reframed it as protecting the integrity of the program, not blocking progress—and offered a path that preserved velocity.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Final Calibration */}
      <section className="mb-10 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">Final Calibration</h3>
        <p className="text-muted-foreground mb-4">What these signal together:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>You <strong>govern risk</strong>, not just deliver plans</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>You <strong>trade speed for survivability</strong> deliberately</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>You <strong>create durable decision systems</strong></span>
          </li>
        </ul>
        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-600 dark:text-green-400 font-semibold text-center">
            That is Principal TPM bar.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep/card-vault-pci"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Card Vault / PCI
        </Link>
        <Link
          href="/nebula/interview-prep/apm"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          APM →
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
