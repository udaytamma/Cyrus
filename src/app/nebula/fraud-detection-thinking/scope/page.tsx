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
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">2</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Scope Definition</h1>
        <p className="text-muted-foreground">
          What is in Phase 1? What is explicitly deferred? What hooks do we need?
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
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
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Build Now</div>
              <div className="text-sm text-muted-foreground">
                Minimal viable production design for a narrow, end-to-end slice. Must be production-ready:
                monitorable, testable, operable.
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Defer Explicitly</div>
              <div className="text-sm text-muted-foreground">
                Name what is out of scope and why. This prevents scope creep and sets expectations.
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Design Hooks</div>
              <div className="text-sm text-muted-foreground">
                Architecture points where future capabilities will plug in. Do not implement, just do not
                block.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Context */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Decision Context
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>For the Fraud Detection Platform, scope was defined as:</p>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Phase 1: In Scope (Telco Payment Fraud)
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Real-time transaction decisioning (&lt;200ms latency)</li>
            <li>Velocity features (card, device, IP, subscriber counters)</li>
            <li>Criminal fraud detection (card testing, SIM farm attacks, geo anomalies, bots/emulators)</li>
            <li>
              Telco-specific event rules (SIM swap review, device upgrade friction, international enable 3DS)
            </li>
            <li>Friendly fraud scoring (historical abuse, behavioral consistency)</li>
            <li>
              Policy engine (configurable thresholds, velocity rules, blocklists for cards/devices/phones/IMEIs)
            </li>
            <li>Evidence vault (immutable transaction evidence for disputes)</li>
            <li>Basic chargeback ingestion (link chargebacks to transactions)</li>
            <li>Monitoring and alerting (Grafana dashboards, Prometheus metrics)</li>
          </ul>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">Explicitly Deferred</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Item
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Deferred To
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Rationale
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Automated representment</td>
                  <td className="p-3 border border-border">Sprint 2</td>
                  <td className="p-3 border border-border">Requires evidence quality baseline</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Economic optimization UI</td>
                  <td className="p-3 border border-border">Sprint 2</td>
                  <td className="p-3 border border-border">Manual thresholds sufficient initially</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Champion/challenger A/B</td>
                  <td className="p-3 border border-border">Sprint 2</td>
                  <td className="p-3 border border-border">Need baseline metrics first</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Model retraining pipeline</td>
                  <td className="p-3 border border-border">Sprint 3</td>
                  <td className="p-3 border border-border">Need labeled data from Sprint 1-2</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">IRSF detection</td>
                  <td className="p-3 border border-border">Phase 2</td>
                  <td className="p-3 border border-border">Different signal types</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">ATO detection</td>
                  <td className="p-3 border border-border">Phase 2</td>
                  <td className="p-3 border border-border">Requires session/login data</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">Hooks for Future Phases</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong className="text-foreground">Event schema extensibility</strong> - PaymentEvent includes
              optional fields for telco/MSP signals
            </li>
            <li>
              <strong className="text-foreground">Feature store abstraction</strong> - Entity profiles can be
              extended without pipeline changes
            </li>
            <li>
              <strong className="text-foreground">External signal integration points</strong> - Consortium
              scores, issuer alerts as first-class features
            </li>
            <li>
              <strong className="text-foreground">Policy engine plugins</strong> - New rule types can be added
              without core changes
            </li>
          </ul>
        </div>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
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
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "How do you manage scope for a complex system?":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
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
            className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            ← {nav.prev.title}
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            {nav.next.title} →
          </Link>
        )}
      </div>
    </ThinkingLayout>
  );
}
