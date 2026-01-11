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
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          8
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Checklist</h1>
        <p className="text-muted-foreground">
          What must be true to ship? Pre-production acceptance criteria.
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
            The checklist is not bureaucracy - it is{" "}
            <strong className="text-foreground">
              explicit acceptance criteria that prevent shipping broken systems
            </strong>
            .
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Functional</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Does it work correctly? Tests passing, idempotency verified, ordering correct.
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Performance</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Does it meet SLAs? Latency targets, throughput, error rates under load.
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-amber-500/5 to-transparent rounded-lg border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Accuracy</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Does it make good decisions? Fraud detection rate, false positive rate.
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg border border-purple-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Operational</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Can we run it? Monitoring, alerting, runbooks, rollback tested.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Checks */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          Performance Checks
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Metric
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Target
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Max Allowed
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">End-to-end P99 latency</td>
                <td className="p-3 border border-border font-semibold text-green-600 dark:text-green-400">150ms</td>
                <td className="p-3 border border-border">200ms</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Feature assembly P99</td>
                <td className="p-3 border border-border font-semibold text-green-600 dark:text-green-400">45ms</td>
                <td className="p-3 border border-border">50ms</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Model inference P99</td>
                <td className="p-3 border border-border font-semibold text-green-600 dark:text-green-400">25ms</td>
                <td className="p-3 border border-border">30ms</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Error rate</td>
                <td className="p-3 border border-border font-semibold text-green-600 dark:text-green-400">0.1%</td>
                <td className="p-3 border border-border">1%</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Throughput</td>
                <td className="p-3 border border-border font-semibold text-green-600 dark:text-green-400">1000 TPS</td>
                <td className="p-3 border border-border">500 TPS (min)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accuracy Checks */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Accuracy Checks (vs Baseline)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Metric
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Target Delta
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Min Allowed
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Approval rate</td>
                <td className="p-3 border border-border font-semibold text-green-600 dark:text-green-400">No change</td>
                <td className="p-3 border border-border">-2% max drop</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Fraud detection rate</td>
                <td className="p-3 border border-border font-semibold text-green-600 dark:text-green-400">No change</td>
                <td className="p-3 border border-border">-5% max drop</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">False positive rate</td>
                <td className="p-3 border border-border font-semibold text-green-600 dark:text-green-400">No change</td>
                <td className="p-3 border border-border">+1% max increase</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Operational Checks */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          Operational Checks
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Item
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Criteria
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Monitoring dashboards</td>
                <td className="p-3 border border-border">All panels loading, no errors</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Alerts configured</td>
                <td className="p-3 border border-border">All critical alerts firing to PagerDuty</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Runbooks documented</td>
                <td className="p-3 border border-border">Runbook exists for each P0/P1 scenario</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">Rollback tested</td>
                <td className="p-3 border border-border">Rollback completes in &lt;5 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sign-offs */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </span>
          Sign-offs Required
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong className="text-foreground">Engineering Lead:</strong> Technical review complete</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong className="text-foreground">QA Lead:</strong> Test coverage adequate</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong className="text-foreground">Fraud Ops Lead:</strong> Thresholds reviewed</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong className="text-foreground">Security:</strong> PCI/PII compliance verified</span>
          </li>
        </ul>
      </div>

      {/* Summary */}
      <div className="mb-8 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </span>
          Summary: The Complete Framework
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>You have now covered the complete thinking process for principal-level system design:</p>
          <ol className="space-y-2 ml-2">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-semibold shrink-0">1</span>
              <span><strong className="text-foreground">Constraints First</strong> - Start with non-negotiables</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-semibold shrink-0">2</span>
              <span><strong className="text-foreground">Scope Definition</strong> - Build in phases</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs font-semibold shrink-0">3</span>
              <span><strong className="text-foreground">Technology Selection</strong> - CREST framework</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold shrink-0">4</span>
              <span><strong className="text-foreground">Data Model</strong> - Derive from money flow</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-semibold shrink-0">5</span>
              <span><strong className="text-foreground">Logic & Policy</strong> - Separate ML from decisions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold shrink-0">6</span>
              <span><strong className="text-foreground">Failure Modes</strong> - Design for when things break</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-semibold shrink-0">7</span>
              <span><strong className="text-foreground">Testing & Validation</strong> - Layer the pyramid</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-semibold shrink-0">8</span>
              <span><strong className="text-foreground">Checklist</strong> - Explicit acceptance criteria</span>
            </li>
          </ol>
          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/30 rounded-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Remember
            </div>
            <p className="text-sm italic">
              Prepare at architect depth. Deliver at principal depth. Adjust on the fly based on interviewer cues.
            </p>
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
        <Link
          href="/nebula/fraud-detection-thinking"
          className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
        >
          <span className="group-hover:text-primary transition-colors">Back to Overview →</span>
        </Link>
      </div>
    </ThinkingLayout>
  );
}
