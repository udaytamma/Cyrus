"use client";

/**
 * Section 8: Checklist
 */

import Link from "next/link";
import { ThinkingLayout, getNavigation } from "@/components/ThinkingLayout";

export default function Checklist() {
  const nav = getNavigation("checklist");

  return (
    <ThinkingLayout
      title="Checklist - Thinking Process"
      description="What must be true to ship"
      currentSection="checklist"
    >
      <Link
        href="/nebula/fraud-detection-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">8</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Checklist</h1>
        <p className="text-muted-foreground">
          What must be true to ship? Pre-production acceptance criteria.
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Thinking Process
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The checklist is not bureaucracy - it is{" "}
            <strong className="text-foreground">
              explicit acceptance criteria that prevent shipping broken systems
            </strong>
            .
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Functional</div>
              <div className="text-sm text-muted-foreground">
                Does it work correctly? Tests passing, idempotency verified, ordering correct.
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Performance</div>
              <div className="text-sm text-muted-foreground">
                Does it meet SLAs? Latency targets, throughput, error rates under load.
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Accuracy</div>
              <div className="text-sm text-muted-foreground">
                Does it make good decisions? Fraud detection rate, false positive rate.
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Operational</div>
              <div className="text-sm text-muted-foreground">
                Can we run it? Monitoring, alerting, runbooks, rollback tested.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Checks */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Performance Checks
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Metric
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Target
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Max Allowed
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">End-to-end P99 latency</td>
                <td className="p-3 border border-border">150ms</td>
                <td className="p-3 border border-border">200ms</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Feature assembly P99</td>
                <td className="p-3 border border-border">45ms</td>
                <td className="p-3 border border-border">50ms</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Model inference P99</td>
                <td className="p-3 border border-border">25ms</td>
                <td className="p-3 border border-border">30ms</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Error rate</td>
                <td className="p-3 border border-border">0.1%</td>
                <td className="p-3 border border-border">1%</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Throughput</td>
                <td className="p-3 border border-border">1000 TPS</td>
                <td className="p-3 border border-border">500 TPS (min)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accuracy Checks */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Accuracy Checks (vs Baseline)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Metric
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Target Delta
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Min Allowed
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Approval rate</td>
                <td className="p-3 border border-border">No change</td>
                <td className="p-3 border border-border">-2% max drop</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Fraud detection rate</td>
                <td className="p-3 border border-border">No change</td>
                <td className="p-3 border border-border">-5% max drop</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">False positive rate</td>
                <td className="p-3 border border-border">No change</td>
                <td className="p-3 border border-border">+1% max increase</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Operational Checks */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Operational Checks
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Item
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Criteria
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Monitoring dashboards</td>
                <td className="p-3 border border-border">All panels loading, no errors</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Alerts configured</td>
                <td className="p-3 border border-border">All critical alerts firing to PagerDuty</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Runbooks documented</td>
                <td className="p-3 border border-border">Runbook exists for each P0/P1 scenario</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Rollback tested</td>
                <td className="p-3 border border-border">Rollback completes in &lt;5 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sign-offs */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Sign-offs Required
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Engineering Lead:</strong> Technical review complete
          </li>
          <li>
            <strong className="text-foreground">QA Lead:</strong> Test coverage adequate
          </li>
          <li>
            <strong className="text-foreground">Fraud Ops Lead:</strong> Thresholds reviewed
          </li>
          <li>
            <strong className="text-foreground">Security:</strong> PCI/PII compliance verified
          </li>
        </ul>
      </div>

      {/* Summary */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Summary: The Complete Framework
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>You have now covered the complete thinking process for principal-level system design:</p>
          <ol className="list-decimal ml-6 space-y-1">
            <li>
              <strong className="text-foreground">Constraints First</strong> - Start with non-negotiables
            </li>
            <li>
              <strong className="text-foreground">Scope Definition</strong> - Build in phases
            </li>
            <li>
              <strong className="text-foreground">Technology Selection</strong> - CREST framework
            </li>
            <li>
              <strong className="text-foreground">Data Model</strong> - Derive from money flow
            </li>
            <li>
              <strong className="text-foreground">Logic & Policy</strong> - Separate ML from decisions
            </li>
            <li>
              <strong className="text-foreground">Failure Modes</strong> - Design for when things break
            </li>
            <li>
              <strong className="text-foreground">Testing & Validation</strong> - Layer the pyramid
            </li>
            <li>
              <strong className="text-foreground">Checklist</strong> - Explicit acceptance criteria
            </li>
          </ol>
          <p className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
            <strong className="text-primary">Remember:</strong> Prepare at architect depth. Deliver at principal
            depth. Adjust on the fly based on interviewer cues.
          </p>
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
        <Link
          href="/nebula/fraud-detection-thinking"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Back to Overview →
        </Link>
      </div>
    </ThinkingLayout>
  );
}
