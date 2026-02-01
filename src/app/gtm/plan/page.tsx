"use client";

/**
 * GTM Plan - 6-Week Job Search Execution Strategy
 * Principal / Senior TPM Roles
 */

import { GTMLayout } from "@/components/gtm";

function GTMPlanContent() {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-3xl font-bold text-foreground">
          Go-To-Market Plan
        </h1>
        <p className="text-muted-foreground mt-2">
          6-Week Job Search & Career Positioning Strategy for Principal / Senior TPM Roles
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/15 text-primary">
            Weeks 1-2: Foundation
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/15 text-emerald-400">
            Weeks 3-4: Hardening
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/15 text-violet-400">
            Weeks 5-6: Convert
          </span>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Executive Summary</h2>
        <p className="text-muted-foreground mb-4">
          This plan is an execution document, not a strategy deck. Every item has a clear owner,
          a deadline, and a measurable output. The operating principle is simple: start applying
          immediately while closing three gaps in parallel.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-foreground mb-2">Core Positioning</h3>
          <p className="text-sm text-muted-foreground italic">
            &quot;Principal-level TPM with 18+ years in Tier-1 telecom platforms, specializing in
            reliability/SRE, large-scale data migrations, FinOps, and applied GenAI for operations.
            Managed a $40M budget, led platforms for 5M+ subscribers, and driven programs that
            reduced MTTR by 42%, cut Opex by 18%, and generated $1.5M+ in new revenue.&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="font-medium text-foreground mb-2">Mag7 Targets</h4>
            <p className="text-sm text-muted-foreground">
              Senior TPM / Senior Product TPM in infra, reliability/SRE, observability,
              internal platforms, or AI-for-ops
            </p>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="font-medium text-foreground mb-2">Non-Mag7 Targets</h4>
            <p className="text-sm text-muted-foreground">
              Principal TPM / AI TPM / Platform TPM where hybrid, SRE, and AI pilots
              are directly relevant
            </p>
          </div>
        </div>
      </section>

      {/* Honest Assessment */}
      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Honest Assessment</h2>
        <p className="text-muted-foreground mb-4">
          Senior TPM-ready for Mag7 and Principal-ready for many non-Mag7 AI/infra/platform roles.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Category</th>
                <th className="text-left py-2 px-3 font-semibold text-emerald-400">Strengths</th>
                <th className="text-left py-2 px-3 font-semibold text-amber-400">Gaps to Close</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-3 font-medium text-foreground">Scope & Impact</td>
                <td className="py-3 px-3">28 apps, 5M+ subscribers, 1.6M-subscriber migration, $40M budget. MTTR -42%, MTTD -30%, Opex -18%, $1.5M revenue.</td>
                <td className="py-3 px-3">System design storytelling at Principal depth: cell-based, control/data plane, CAP/PACELC, multi-region.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-3 font-medium text-foreground">Technical Depth</td>
                <td className="py-3 px-3">Reliability/SRE, observability, HA/DR, FinOps, applied GenAI pilot (opsGPT) with hybrid architecture.</td>
                <td className="py-3 px-3">Cloud-native narrative: strong hybrid/on-prem but no end-to-end cloud-hosted stack ownership.</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-foreground">Differentiators</td>
                <td className="py-3 px-3">Real operational scale, P&L ownership, cross-functional leadership across engineering and business.</td>
                <td className="py-3 px-3">AI stories are pilot/POC level; need framing as pilot + clear path to production SLOs and governance.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Daily Operating Rhythm */}
      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Daily Operating Rhythm</h2>
        <p className="text-muted-foreground mb-4">
          Without a daily cadence, this plan decays within 10 days. Block these on your calendar as recurring events.
        </p>

        <div className="space-y-3">
          {[
            { time: "8:00–9:30 AM", activity: "Deep Work", desc: "System design drill, case study writing, or story refinement. No email, no applications.", duration: "90 min", color: "bg-violet-500/15 text-violet-400 border-violet-500/30" },
            { time: "10:00 AM–12:00 PM", activity: "Pipeline", desc: "Applications, outreach, networking messages, recruiter calls. Pipeline management.", duration: "120 min", color: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
            { time: "1:00–2:30 PM", activity: "Practice", desc: "Mock practice, cloud translation exercises, or targeted skill-building (AWS/GCP labs).", duration: "90 min", color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
            { time: "8:00–8:15 PM", activity: "Debrief", desc: "Daily debrief: what did I do, what landed, what do I change tomorrow. Log in tracker.", duration: "15 min", color: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
          ].map((block) => (
            <div key={block.time} className={`flex items-start gap-4 p-4 rounded-lg border ${block.color}`}>
              <div className="text-xs font-mono whitespace-nowrap">{block.time}</div>
              <div className="flex-1">
                <div className="font-medium text-foreground">{block.activity}</div>
                <div className="text-sm text-muted-foreground">{block.desc}</div>
              </div>
              <div className="text-xs font-medium">{block.duration}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-sm text-amber-400">
            <strong>Non-negotiable:</strong> After every recruiter screen, phone screen, or mock — same-day debrief.
            What landed, what fell flat, what changes tomorrow. Write it down.
          </p>
        </div>
      </section>

      {/* Weekly Targets */}
      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Weekly Targets</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { metric: "Applications", target: "10-15", detail: "3-5 Mag7, 7-10 non-Mag7" },
            { metric: "Networking", target: "5-10", detail: "Informational interviews, referral asks" },
            { metric: "Recruiter Screens", target: "2-3", detail: "Once pipeline is flowing" },
            { metric: "Mocks", target: "2-3", detail: "1 behavioral, 1-2 system design" },
          ].map((item) => (
            <div key={item.metric} className="p-4 rounded-lg bg-muted/50 text-center">
              <div className="text-2xl font-bold text-primary">{item.target}</div>
              <div className="font-medium text-foreground">{item.metric}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Week-by-Week Execution */}
      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">Week-by-Week Execution</h2>

        {/* Week 1 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">1</span>
            <h3 className="text-lg font-semibold text-foreground">Pipeline Launch + Highest-Value Asset</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 ml-11">
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium text-foreground mb-2">Track A: Applications</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Build application tracker before submitting anything</li>
                <li>• Submit 10-15 targeted applications</li>
                <li>• Identify hiring manager and referral path for each</li>
                <li>• Send 5-8 networking outreach messages</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium text-foreground mb-2">Track B: opsGPT Case Study</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Problem statement: Tier-1 ticket automation, AHT reduction</li>
                <li>• Architecture: on-prem app layer, Azure inference, RAG data model</li>
                <li>• Pilot metrics and path to production SLOs</li>
                <li>• Control plane vs data plane separation</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 ml-11 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <p className="text-sm text-emerald-400">
              <strong>Deliverables:</strong> Tracker built. 10-15 applications submitted. opsGPT case study drafted.
              Core narrative recorded. 5+ networking messages sent.
            </p>
          </div>
        </div>

        {/* Week 2 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">2</span>
            <h3 className="text-lg font-semibold text-foreground">Story Bank + System Design Foundation</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 ml-11">
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium text-foreground mb-2">Track A: Story Bank (8-10 Stories)</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Reliability: 2-3 stories (availability, MTTR, on-call)</li>
                <li>• Migration: 2-3 stories (1.6M subscriber, strangler fig)</li>
                <li>• FinOps: 2 stories ($40M budget, Opex efficiency)</li>
                <li>• AI/Automation: 2 stories (opsGPT, event-driven)</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium text-foreground mb-2">Track B: System Design Drills</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 2 drills this week (incident mgmt, data migration)</li>
                <li>• Cover: Requirements, SLOs, cell-based partitioning</li>
                <li>• Control plane vs data plane, CAP/PACELC choices</li>
                <li>• Failure-mode walkthrough for each</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 ml-11 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <p className="text-sm text-emerald-400">
              <strong>Deliverables:</strong> 8-10 STAR stories with short/long versions. 2 system design drills completed.
              Cloud mapping document started. 10-15 more applications.
            </p>
          </div>
        </div>

        {/* Week 3 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm">3</span>
            <h3 className="text-lg font-semibold text-foreground">AI Narrative Hardening + First Mocks</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 ml-11">
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium text-foreground mb-2">Track A: AI Portfolio</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Finalize opsGPT case study (architecture in 5 min)</li>
                <li>• Document 2-3 capstone AI projects end-to-end</li>
                <li>• Articulate pilot vs production for each</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium text-foreground mb-2">Track B: First Mocks</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 1 behavioral mock (leadership, ownership, conflict)</li>
                <li>• 1 system design mock with Staff+/Principal peer</li>
                <li>• Get blunt feedback, debrief same day</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 ml-11 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <p className="text-sm text-emerald-400">
              <strong>Deliverables:</strong> opsGPT finalized. 2-3 AI projects documented. Cloud translations written.
              2 mocks completed. Pipeline at 30-45 applications.
            </p>
          </div>
        </div>

        {/* Week 4 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm">4</span>
            <h3 className="text-lg font-semibold text-foreground">Full-Loop Readiness</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 ml-11">
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium text-foreground mb-2">Mock Intensification</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 2 behavioral mocks (leadership + ambiguity/bets)</li>
                <li>• 2 system design mocks (infra + AI/platform)</li>
                <li>• Total: 4 mocks this week</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium text-foreground mb-2">Recruiter Call Protocol</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Test &quot;Tell me about yourself&quot; pitch</li>
                <li>• Listen for level pushback or interest</li>
                <li>• Ask what team needs & strong candidate profile</li>
                <li>• Same-day debrief, update tracker</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 ml-11 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <p className="text-sm text-emerald-400">
              <strong>Deliverables:</strong> 4 mocks this week. Recruiter feedback logged. Narrative adjusted.
              8-10 SD drills cumulative. Pipeline at 40-60 applications.
            </p>
          </div>
        </div>

        {/* Weeks 5-6 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 font-bold text-sm">5-6</span>
            <h3 className="text-lg font-semibold text-foreground">Optimize, Patch, Convert</h3>
          </div>

          <p className="text-muted-foreground mb-4 ml-11">
            These weeks are driven entirely by signal. Respond to real data from recruiter conversations,
            mock feedback, and pipeline conversion rates.
          </p>

          <div className="ml-11 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Signal</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">What It Means</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Recruiters steer to Senior at Mag7</td>
                  <td className="py-2 px-3">Principal at Mag7 is a stretch</td>
                  <td className="py-2 px-3">Go hard on Principal at non-Mag7</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">SRE/FinOps stories get best reactions</td>
                  <td className="py-2 px-3">That is your lane</td>
                  <td className="py-2 px-3">Front-load those stories</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Cloud-native questions keep coming</td>
                  <td className="py-2 px-3">Cloud gap is real</td>
                  <td className="py-2 px-3">Tighten cloud mapping, spin up project</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">SD feedback: too ops-focused</td>
                  <td className="py-2 px-3">Need software arch depth</td>
                  <td className="py-2 px-3">Push on data models, APIs, abstractions</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">SD feedback: too generic</td>
                  <td className="py-2 px-3">Need specificity</td>
                  <td className="py-2 px-3">Add RPS, data size, latency targets, SLOs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 ml-11 p-3 bg-violet-500/10 border border-violet-500/30 rounded-lg">
            <p className="text-sm text-violet-400">
              <strong>Deliverables:</strong> Narrative adjusted based on feedback. 12-18 SD drills total.
              Pipeline at 60-90 applications. Interview loops in progress.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Success Metrics by Week</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Week</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Applications (Cumul.)</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Mocks</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">SD Drills (Cumul.)</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Week 1</td>
                <td className="py-2 px-3">10-15</td>
                <td className="py-2 px-3">0</td>
                <td className="py-2 px-3">0</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Week 2</td>
                <td className="py-2 px-3">20-30</td>
                <td className="py-2 px-3">0</td>
                <td className="py-2 px-3">2</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Week 3</td>
                <td className="py-2 px-3">30-45</td>
                <td className="py-2 px-3">2</td>
                <td className="py-2 px-3">4</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Week 4</td>
                <td className="py-2 px-3">40-60</td>
                <td className="py-2 px-3">6</td>
                <td className="py-2 px-3">8-10</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Week 5</td>
                <td className="py-2 px-3">50-75</td>
                <td className="py-2 px-3">8-10</td>
                <td className="py-2 px-3">10-14</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-foreground">Week 6</td>
                <td className="py-2 px-3">60-90</td>
                <td className="py-2 px-3">10-14</td>
                <td className="py-2 px-3">12-18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mindset */}
      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Mindset & Self-Monitoring</h2>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="font-medium text-foreground mb-2">Speak Principal Even When Interviewing for Senior</h4>
            <p className="text-sm text-muted-foreground">
              Default to Principal-level framing: platformization thinking, P&L and COGS awareness,
              long-term technical bets, one-way-door decisions. Even if the role is Senior, demonstrating
              Principal thinking gets you leveled up or fast-tracked.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="font-medium text-foreground mb-2">Show Cloud-Native Thinking</h4>
            <p className="text-sm text-muted-foreground">
              You do not need to apologize for on-prem experience. Translate it. Every architectural
              discussion should include cloud-equivalent reasoning, managed service trade-offs, and
              multi-region considerations.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="font-medium text-foreground mb-2">Make AI Work Look Like Systems, Not POCs</h4>
            <p className="text-sm text-muted-foreground">
              Frame every AI story as: here is what we built, here are the results, and here is exactly
              what production looks like — SLOs, governance, cost model, rollback. Interviewers respect
              honesty about scope far more than inflated claims.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
            <h4 className="font-medium text-amber-400 mb-2">Avoid the Planning Trap</h4>
            <p className="text-sm text-muted-foreground">
              You are a strong planner. That is an asset in program management and a risk in job searching.
              The temptation is to keep refining the plan instead of submitting applications and getting on calls.
              Every day preparing instead of applying is a day without signal. The plan improves through contact
              with reality, not further iteration in isolation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border">
        This is a living document. Update it every Friday. The strategy is sound. Now execute with the same discipline you brought to a $40M program.
      </div>
    </div>
  );
}

export default function GTMPlanPage() {
  return (
    <GTMLayout>
      <GTMPlanContent />
    </GTMLayout>
  );
}
