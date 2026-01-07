"use client";

/**
 * Section 7: Testing & Validation
 */

import Link from "next/link";
import { ThinkingLayout, getNavigation } from "@/components/ThinkingLayout";

export default function TestingValidation() {
  const nav = getNavigation("testing");

  return (
    <ThinkingLayout
      title="Testing & Validation - Thinking Process"
      description="How to know it works before production"
      currentSection="testing"
    >
      <Link
        href="/nebula/fraud-detection-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">7</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Testing & Validation</h1>
        <p className="text-muted-foreground">
          How do we know it works before production? What do we monitor after launch?
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
            <strong className="text-foreground">
              Production is not the first place you learn your system does not work.
            </strong>
          </p>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 1: Define Success Criteria First
          </h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong className="text-foreground">Latency:</strong> P99 under 200ms end-to-end
            </li>
            <li>
              <strong className="text-foreground">Correctness:</strong> Zero duplicate decisions, exact-once
              semantics
            </li>
            <li>
              <strong className="text-foreground">Accuracy:</strong> Fraud detection rate maintains baseline,
              false positive rate under threshold
            </li>
            <li>
              <strong className="text-foreground">Capacity:</strong> Handles 2x expected traffic without
              degradation
            </li>
          </ul>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">Step 2: Layer the Testing Pyramid</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Layer
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    What It Catches
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Feedback Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Unit</td>
                  <td className="p-3 border border-border">Logic bugs, edge cases</td>
                  <td className="p-3 border border-border">Seconds</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Integration</td>
                  <td className="p-3 border border-border">Contract violations, API mismatches</td>
                  <td className="p-3 border border-border">Minutes</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Chaos</td>
                  <td className="p-3 border border-border">Failure handling gaps</td>
                  <td className="p-3 border border-border">Minutes</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Replay</td>
                  <td className="p-3 border border-border">Accuracy regressions</td>
                  <td className="p-3 border border-border">Hours</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Load</td>
                  <td className="p-3 border border-border">Capacity limits, latency degradation</td>
                  <td className="p-3 border border-border">Hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 3: Historical Replay Testing (Most Critical for Fraud)
          </h3>
          <p>
            Replay 30 days of historical transactions through the new pipeline. Get features{" "}
            <em>as they were at transaction time</em>, not current values.
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-3">
            <li>
              <strong className="text-foreground">Approval rate delta:</strong> Did we block more legitimate
              transactions?
            </li>
            <li>
              <strong className="text-foreground">Fraud detection rate:</strong> Would we have caught known
              fraud?
            </li>
            <li>
              <strong className="text-foreground">False positive rate:</strong> What percentage of blocks were
              wrong?
            </li>
          </ul>
        </div>
      </div>

      {/* Chaos Testing */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Chaos Testing Scenarios
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Scenario
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Injection Method
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Expected Behavior
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Redis primary down</td>
                <td className="p-3 border border-border">Kill primary node</td>
                <td className="p-3 border border-border">Replica failover, default features used</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Redis cluster down</td>
                <td className="p-3 border border-border">Block Redis port</td>
                <td className="p-3 border border-border">Safe mode activates</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">ML service timeout</td>
                <td className="p-3 border border-border">Add 5s delay</td>
                <td className="p-3 border border-border">Rule-based fallback</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">ML service errors</td>
                <td className="p-3 border border-border">Return 500 for 50%</td>
                <td className="p-3 border border-border">Partial degradation handled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Post-Launch Monitoring */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Post-Launch Monitoring
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Timeframe
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Focus
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Key Metrics
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">First hour</td>
                <td className="p-3 border border-border">System health</td>
                <td className="p-3 border border-border">Latency P99, error rate</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">First day</td>
                <td className="p-3 border border-border">Business metrics</td>
                <td className="p-3 border border-border">Approval rate, block rate</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">First week</td>
                <td className="p-3 border border-border">Accuracy (lagged)</td>
                <td className="p-3 border border-border">False positive rate, complaints</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Ongoing</td>
                <td className="p-3 border border-border">Drift detection</td>
                <td className="p-3 border border-border">Feature PSI, score distribution</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interview Response */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "How do you validate before production?":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                "I use a layered testing approach with explicit go/no-go criteria. Unit tests cover decision
                logic. Integration tests verify end-to-end flows including idempotency.
              </p>
              <p>
                Chaos testing validates failure resilience. We inject Redis failures, model timeouts, and
                network partitions to verify fallback behavior.
              </p>
              <p>
                Historical replay is the most critical test for accuracy. We replay 30 days of transactions
                through the new pipeline and compare decisions to actual fraud outcomes. This tells us approval
                rate impact and fraud catch rate before touching production.
              </p>
              <p>
                Load testing validates capacity at 2x expected traffic. Post-launch, we monitor intensively -
                latency in the first hour, business metrics in the first day, fraud rate trends over the first
                month."
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
