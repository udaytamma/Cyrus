"use client";

/**
 * Section 2: Scope Definition
 */

import Link from "next/link";
import { ThinkingLayout, getNavigation } from "@/components/ThinkingLayout";

export default function ScopeDefinition() {
  const nav = getNavigation("scope");

  return (
    <ThinkingLayout
      title="Scope Definition - Thinking Process"
      description="Define Phase 1 scope and future phase hooks"
      currentSection="scope"
    >
      <Link
        href="/nebula/fraud-detection-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl border border-orange-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          2
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Scope Definition</h1>
        <p className="text-muted-foreground">
          What is in Phase 1? What is explicitly deferred? What hooks do we need?
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          Thinking Process
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Scope definition is about making{" "}
            <strong className="text-foreground">
              explicit choices about what to build now versus later
            </strong>
            . The key insight: design for the whole, but build in phases. Do not solve tomorrow{"'"}s problem,
            but do not block it either.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">1</span>
                <span className="text-sm font-semibold text-foreground">Build Now</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Minimal viable production design for a narrow, end-to-end slice. Must be production-ready:
                monitorable, testable, operable.
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-amber-500/5 to-transparent rounded-lg border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                <span className="text-sm font-semibold text-foreground">Defer Explicitly</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Name what is out of scope and why. This prevents scope creep and sets expectations.
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">3</span>
                <span className="text-sm font-semibold text-foreground">Design Hooks</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Architecture points where future capabilities will plug in. Do not implement, just do not
                block.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Context */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Phase 1: In Scope (Telco Payment Fraud)
        </h2>
        <div className="text-muted-foreground space-y-4">
          <ul className="space-y-2 ml-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Real-time transaction decisioning (&lt;200ms latency)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Velocity features (card, device, IP, subscriber counters)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Criminal fraud detection (card testing, SIM farm attacks, geo anomalies, bots/emulators)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Telco-specific event rules (SIM swap review, device upgrade friction, international enable 3DS)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Friendly fraud scoring (historical abuse, behavioral consistency)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Policy engine (configurable thresholds, velocity rules, blocklists for cards/devices/phones/IMEIs)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Evidence vault (immutable transaction evidence for disputes)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Monitoring and alerting (Grafana dashboards, Prometheus metrics)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Explicitly Deferred */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Explicitly Deferred
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Item
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Deferred To
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Rationale
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Automated representment</td>
                <td className="p-3 border border-border">Sprint 2</td>
                <td className="p-3 border border-border">Requires evidence quality baseline</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Economic optimization UI</td>
                <td className="p-3 border border-border">Sprint 2</td>
                <td className="p-3 border border-border">Manual thresholds sufficient initially</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Champion/challenger A/B</td>
                <td className="p-3 border border-border">Sprint 2</td>
                <td className="p-3 border border-border">Need baseline metrics first</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Model retraining pipeline</td>
                <td className="p-3 border border-border">Sprint 3</td>
                <td className="p-3 border border-border">Need labeled data from Sprint 1-2</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">IRSF detection</td>
                <td className="p-3 border border-border">Phase 2</td>
                <td className="p-3 border border-border">Different signal types</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">ATO detection</td>
                <td className="p-3 border border-border">Phase 2</td>
                <td className="p-3 border border-border">Requires session/login data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Hooks for Future Phases */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </span>
          Hooks for Future Phases
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong className="text-foreground">Event schema extensibility</strong> - PaymentEvent includes optional fields for telco/MSP signals</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong className="text-foreground">Feature store abstraction</strong> - Entity profiles can be extended without pipeline changes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong className="text-foreground">External signal integration points</strong> - Consortium scores, issuer alerts as first-class features</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong className="text-foreground">Policy engine plugins</strong> - New rule types can be added without core changes</span>
          </li>
        </ul>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-xl border border-indigo-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </span>
          Derivation Path
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap overflow-x-auto">
          {`1. LIST ALL DESIRED CAPABILITIES
   - Everything stakeholders want (no filtering yet)
   - Include future roadmap items
        ↓
2. CATEGORIZE BY DEPENDENCY
   - What can be built independently?
   - What requires other pieces first?
   - What requires data that does not exist yet?
        ↓
3. IDENTIFY MINIMUM VIABLE SLICE
   - End-to-end: ingestion → features → scoring → policy → evidence
   - Must be production-ready (not a prototype)
   - Provides immediate business value
        ↓
4. DEFER WITH RATIONALE
   - For each deferred item, document:
     - When it will be addressed
     - What blocks it today
     - What hooks it needs in Phase 1
        ↓
5. VALIDATE SCOPE IS ACHIEVABLE
   - Can the team deliver this in the timeline?
   - Are dependencies available?
   - Is it testable and operable?`}
        </div>
      </div>

      {/* Interview Response */}
      <div className="mb-8 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "How do you manage scope for a complex system?":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                "I follow a principle: design for the whole, but build in phases. The goal is a minimal viable
                production design - not a prototype, but a narrow end-to-end slice that is fully
                production-ready.
              </p>
              <p>
                For this telco payment fraud platform, Phase 1 scope included: real-time decisioning under
                200ms P99, velocity-based detection for SIM farm attacks and card testing, telco-specific
                event rules for SIM swap review and device upgrade friction, a configurable policy engine with
                hot-reload, and evidence capture for dispute resolution.
              </p>
              <p>
                Equally important is explicit deferral with rationale. I document what is out of scope, when
                it will be addressed, and why. For example, automated dispute representment requires evidence
                quality baselines that do not exist yet - so it is Sprint 2, not Sprint 1.
              </p>
              <p>
                Finally, I design hooks for future capabilities. The event schema includes optional
                telco-specific fields that are not required in Phase 1 but enable Phase 2 detection. We do not
                build these capabilities yet, but we do not block them either."
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
              Estimated time: 90-120 seconds
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">← {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">{nav.next.title} →</span>
          </Link>
        )}
      </div>
    </ThinkingLayout>
  );
}
