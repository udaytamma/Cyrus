"use client";

/**
 * Section 6: Failure Modes
 */

import Link from "next/link";
import { ThinkingLayout, getNavigation } from "@/components/ThinkingLayout";

export default function FailureModes() {
  const nav = getNavigation("failure-modes");

  return (
    <ThinkingLayout
      title="Failure Modes - Thinking Process"
      description="Design for when things break, not if"
      currentSection="failure-modes"
    >
      <Link
        href="/nebula/fraud-detection-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">6</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Failure Modes</h1>
        <p className="text-muted-foreground">
          What breaks? What is the fallback? How do we detect attacks vs bugs?
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Thinking Process
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The core insight:{" "}
            <strong className="text-foreground">Everything fails. Design for when, not if.</strong>
          </p>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 1: Enumerate Every Component That Can Fail
          </h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Component
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Failure Mode
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Impact If Not Handled
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Kafka</td>
                  <td className="p-3 border border-border">Broker down, partition offline</td>
                  <td className="p-3 border border-border">Events lost, decisions stalled</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Flink</td>
                  <td className="p-3 border border-border">Job crash, checkpoint failure</td>
                  <td className="p-3 border border-border">Feature computation stops</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Redis</td>
                  <td className="p-3 border border-border">Node down, split brain</td>
                  <td className="p-3 border border-border">Feature reads fail</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">ML model service</td>
                  <td className="p-3 border border-border">Timeout, high latency, crash</td>
                  <td className="p-3 border border-border">No fraud scores</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Policy engine</td>
                  <td className="p-3 border border-border">Config error, crash</td>
                  <td className="p-3 border border-border">No decisions possible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 2: Design Component-Level Fallbacks
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong className="text-foreground">Redis unavailable:</strong> Use conservative default features.
              Assume high velocity.
            </li>
            <li>
              <strong className="text-foreground">ML model timeout:</strong> Fall back to rule-based scoring.
            </li>
            <li>
              <strong className="text-foreground">Policy engine crash:</strong> Use hardcoded safe mode rules.
            </li>
            <li>
              <strong className="text-foreground">Evidence vault write failure:</strong> Queue locally, retry
              with backoff.
            </li>
          </ul>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 3: Design System-Wide Safe Mode
          </h3>
          <p>
            <strong className="text-foreground">Safe mode triggers:</strong> Error rate exceeds threshold,
            multiple component health checks fail, latency P99 exceeds budget.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">Safe mode behavior:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Blocklist checks still work (local cache fallback)</li>
            <li>Rule-based scoring replaces ML (no model dependency)</li>
            <li>Default action is FRICTION, not ALLOW (conservative posture)</li>
            <li>Lower thresholds than normal (block more aggressively)</li>
          </ul>
        </div>
      </div>

      {/* Attack vs Bug */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Attack vs Bug Detection
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            When block rate spikes, ask:{" "}
            <strong className="text-foreground">"Is this a fraud attack or a bug?"</strong>
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Signal
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Suggests Attack
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Suggests Bug
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Block rate spike</td>
                  <td className="p-3 border border-border">Concentrated on few entities</td>
                  <td className="p-3 border border-border">Spread across all traffic</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Geographic pattern</td>
                  <td className="p-3 border border-border">Single region/IP range</td>
                  <td className="p-3 border border-border">Global</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">User complaints</td>
                  <td className="p-3 border border-border">None (fraudsters do not complain)</td>
                  <td className="p-3 border border-border">Support tickets spike</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Time pattern</td>
                  <td className="p-3 border border-border">Sudden start, sustained</td>
                  <td className="p-3 border border-border">Correlates with deployment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className="text-foreground">Attack response:</strong> Hold steady, let the system work.{" "}
            <strong className="text-foreground">Bug response:</strong> Rollback immediately, investigate.
          </p>
        </div>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Derivation Path
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap overflow-x-auto">
          {`1. ENUMERATE FAILURES
   List every component and how it can fail
        ↓
2. CLASSIFY SEVERITY
   P0 (minutes) → P3 (next day)
   Based on business impact
        ↓
3. DESIGN FALLBACKS
   Each component has degraded mode
        ↓
4. SYSTEM-WIDE SAFE MODE
   Centralized degradation trigger
        ↓
5. ATTACK VS BUG DETECTION
   Automated signals to distinguish cause
        ↓
6. RECOVERY RUNBOOKS
   Step-by-step for each scenario`}
        </div>
      </div>

      {/* Interview Response */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "How do you handle failures?":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                "I design for failure at three levels. First, component-level fallbacks. Every service has a
                degraded mode defined before deployment. If Redis is unavailable, we use conservative default
                features. If ML models timeout, we fall back to rule-based scoring.
              </p>
              <p>
                Second, system-wide safe mode. When error rates exceed thresholds, the system enters safe mode
                automatically. More conservative thresholds, simpler rules, no ML dependency, default to
                FRICTION rather than ALLOW.
              </p>
              <p>
                Third, distinguishing attack from bug. When block rates spike, we analyze entity concentration
                - attacks hit few entities, bugs affect all traffic. Geographic patterns - attacks come from
                specific regions, bugs are global. This determination drives response strategy.
              </p>
              <p>
                Finally, every failure mode has a documented runbook written before we need it."
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
