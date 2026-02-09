"use client";

/**
 * Section 7: Governance & Safety
 * Updated with implemented human-in-the-loop features, audit trail, and automation boundaries.
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsGovernance() {
  const nav = getTeleOpsNavigation("governance");

  return (
    <TeleOpsThinkingLayout
      title="Governance & Safety - TeleOps"
      description="Human approval gates, audit trail, automation boundaries, and risk signaling"
      currentSection="governance"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-xl border border-indigo-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          7
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Governance & Safety</h1>
        <p className="text-muted-foreground">
          AI suggests, human decides, system audits.
        </p>
      </div>

      {/* Design Principle */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Governance Principles
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Human-in-the-loop:</strong> Every RCA hypothesis requires explicit accept/reject before action.</li>
          <li><strong className="text-foreground">Audit trail:</strong> All review decisions logged with reviewer identity, timestamp, and notes.</li>
          <li><strong className="text-foreground">Risk labeling:</strong> Confidence scores and wrong-but-confident rate displayed prominently.</li>
          <li><strong className="text-foreground">Least privilege:</strong> Token-gated write and metrics endpoints.</li>
          <li><strong className="text-foreground">Escalation triggers:</strong> Low confidence, competing hypotheses, and novel incidents flagged.</li>
        </ul>
      </div>

      {/* Where Automation Stops */}
      <div className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Where Automation Stops
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Fully autonomous RCA is dangerous in telecom operations. A wrong hypothesis acted upon
            without human validation can trigger incorrect remediation, escalating a P2 into a P1.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Step</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Automated</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Human Required</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Alert ingestion</td>
                  <td className="py-2 px-3 text-green-500">Yes</td>
                  <td className="py-2 px-3">No</td>
                  <td className="py-2 px-3">Standard data pipeline, deterministic</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Alert correlation</td>
                  <td className="py-2 px-3 text-green-500">Yes</td>
                  <td className="py-2 px-3">No</td>
                  <td className="py-2 px-3">Tag-based grouping, no judgment needed</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Baseline RCA</td>
                  <td className="py-2 px-3 text-green-500">Yes</td>
                  <td className="py-2 px-3">No</td>
                  <td className="py-2 px-3">Pattern matching, deterministic output</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">LLM RCA generation</td>
                  <td className="py-2 px-3 text-green-500">Yes</td>
                  <td className="py-2 px-3">No</td>
                  <td className="py-2 px-3">AI hypothesis generation</td>
                </tr>
                <tr className="border-b border-border/50 bg-red-500/5">
                  <td className="py-2 px-3 font-bold text-foreground">RCA acceptance</td>
                  <td className="py-2 px-3 text-red-500 font-bold">No</td>
                  <td className="py-2 px-3 font-bold text-foreground">Yes</td>
                  <td className="py-2 px-3">Human validates AI output before action</td>
                </tr>
                <tr className="border-b border-border/50 bg-red-500/5">
                  <td className="py-2 px-3 font-bold text-foreground">Remediation execution</td>
                  <td className="py-2 px-3 text-red-500 font-bold">No</td>
                  <td className="py-2 px-3 font-bold text-foreground">Yes</td>
                  <td className="py-2 px-3">Operator confirms corrective actions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Implemented: Review System */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Implemented: Hypothesis Review System
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The review system is <strong className="text-foreground">fully implemented</strong>, not just documented:
          </p>
          <ul className="space-y-2 ml-4">
            <li><strong className="text-foreground">API endpoint:</strong> POST /rca/&#123;artifact_id&#125;/review accepts &quot;accepted&quot; or &quot;rejected&quot; decisions</li>
            <li><strong className="text-foreground">Audit log:</strong> Every review appended to storage/audit_log.jsonl with timestamp, reviewer, notes</li>
            <li><strong className="text-foreground">UI integration:</strong> Accept/Reject buttons on the Incident Generator page after RCA comparison</li>
            <li><strong className="text-foreground">Dashboard KPIs:</strong> Pending, accepted, rejected counts and acceptance rate on Observability page</li>
            <li><strong className="text-foreground">Audit query:</strong> GET /audit/rca with filters by incident, decision, and reviewer</li>
          </ul>
        </div>
      </div>

      {/* Escalation Triggers */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Escalation Triggers
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>Signals that should trigger escalation to a senior operator:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Signal</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Threshold</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Low confidence</td>
                  <td className="py-2 px-3">&lt;0.5</td>
                  <td className="py-2 px-3">Senior review required before proceeding</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Competing hypotheses</td>
                  <td className="py-2 px-3">Gap &lt;0.1 between top two</td>
                  <td className="py-2 px-3">Human triage to disambiguate</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Novel incident type</td>
                  <td className="py-2 px-3">No baseline pattern match</td>
                  <td className="py-2 px-3">Flag as unknown, manual investigation</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">P1/Critical severity</td>
                  <td className="py-2 px-3">Always</td>
                  <td className="py-2 px-3">Human confirmation regardless of confidence</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Access Control */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Access Control
        </h2>
        <p className="text-muted-foreground">
          The MVP includes a three-tier token gate (API, admin, metrics) for endpoint protection.
          It signals how RBAC would be enforced in production without adding heavy auth dependencies.
        </p>
      </div>

      {/* Trade-Offs */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Trade-Offs and Risks
        </h2>
        <div className="text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">Trade-off:</strong> Lightweight token vs full RBAC.
            Risk is incomplete authorization. Mitigation: explicit documentation and demo-only scope.
          </p>
          <p>
            <strong className="text-foreground">Trade-off:</strong> Storing LLM artifacts and audit events increases data volume.
            Mitigation: JSONL format with rotation for audit logs, minimal retention policy.
          </p>
          <p>
            <strong className="text-foreground">Trade-off:</strong> Human review adds latency to the remediation flow.
            Mitigation: Review is a non-blocking gate - operators can review at their pace. The time-to-context
            metric shows that AI context delivery is near-instant; the human review step is the conscious safety tradeoff.
          </p>
        </div>
      </div>

      {/* Interview Application */}
      <div className="mb-8 p-6 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-xl border border-indigo-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked &quot;How do you handle AI safety in production systems?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;My design principle is: AI suggests, human decides, system audits. In TeleOps,
                the LLM generates RCA hypotheses but every hypothesis requires explicit human acceptance
                before any remediation can proceed.
              </p>
              <p>
                I implemented this as a full review system, not just documentation. There is an API endpoint
                for accept/reject decisions, an audit trail that logs every review with the reviewer identity
                and timestamp, and dashboard KPIs tracking acceptance rates.
              </p>
              <p>
                The key metric I track is the wrong-but-confident rate - cases where the AI is confident
                but wrong. This is the most dangerous failure mode because operators may trust a high-confidence
                answer without verification. The evaluation system flags this explicitly.
              </p>
              <p>
                I also defined escalation triggers: low confidence, competing hypotheses, novel incident types,
                and critical severity all require senior review. The automation boundary is explicit and documented -
                not an afterthought.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 text-sm">
        {nav.prev ? <Link href={nav.prev.path} className="text-muted-foreground hover:text-primary">&larr; {nav.prev.title}</Link> : <span />}
        {nav.next ? <Link href={nav.next.path} className="text-muted-foreground hover:text-primary">{nav.next.title} &rarr;</Link> : <span />}
      </div>
    </TeleOpsThinkingLayout>
  );
}
