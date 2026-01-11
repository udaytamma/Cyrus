"use client";

/**
 * Part 5: Testing & Monitoring
 * Visual upgrade with gradient backgrounds, colored borders, styled numbered steps
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function Part5() {
  return (
    <ThinkingLayout
      title="Part 5: Testing & Monitoring"
      description="Offline validation, replay testing, Grafana dashboards, alert rules"
      currentSection="part-5"
    >
      <Link
        href="/nebula/fraud-detection-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Design Docs
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
          5
        </span>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Testing & Monitoring</h1>
          <p className="text-muted-foreground mt-1">
            Offline validation, replay testing, pre-production acceptance, Grafana dashboards, alert rules.
          </p>
        </div>
      </div>

      {/* Testing Layers */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Testing Layers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Layer
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Purpose
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Frequency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">1</span>
                    <span className="font-medium">Unit Tests</span>
                  </span>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Logic validation, edge cases</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-medium">Every commit</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">2</span>
                    <span className="font-medium">Integration Tests</span>
                  </span>
                </td>
                <td className="p-3 border border-border text-muted-foreground">End-to-end flows, idempotency</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-medium">Every PR</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">3</span>
                    <span className="font-medium">Chaos Tests</span>
                  </span>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Failure mode validation</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs font-medium">Weekly</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-bold">4</span>
                    <span className="font-medium">Replay Tests</span>
                  </span>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Historical accuracy validation</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs font-medium">Before release</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">5</span>
                    <span className="font-medium">Load Tests</span>
                  </span>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Capacity validation at 2x</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs font-medium">Before release</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Dashboards */}
      <div className="mb-8 p-6 bg-gradient-to-r from-orange-500/5 to-transparent rounded-xl border border-orange-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Grafana Dashboards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: "System Health",
              metrics: ["P99 latency", "Error rate", "Throughput", "Consumer lag"],
              color: "green",
              icon: "💚",
            },
            {
              name: "Business Metrics",
              metrics: ["Approval rate", "Block rate", "Friction rate", "Review queue"],
              color: "blue",
              icon: "📊",
            },
            {
              name: "Fraud Metrics",
              metrics: ["Detection rate", "False positive rate", "Attack patterns", "Blocklist hits"],
              color: "red",
              icon: "🛡️",
            },
            {
              name: "Feature Health",
              metrics: ["Feature staleness", "PSI drift", "Redis hit rate", "Null rates"],
              color: "purple",
              icon: "🔧",
            },
          ].map((dashboard) => (
            <div
              key={dashboard.name}
              className={`p-4 bg-gradient-to-r from-${dashboard.color}-500/10 to-transparent rounded-lg border border-${dashboard.color}-500/20 hover:border-${dashboard.color}-500/40 transition-colors`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{dashboard.icon}</span>
                <span className="font-semibold text-foreground">{dashboard.name}</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {dashboard.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${dashboard.color}-500`}></span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Rules */}
      <div className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Alert Rules
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Alert
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Condition
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Severity
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Latency Breach</td>
                <td className="p-3 border border-border text-muted-foreground">P99 {">"} 200ms for 5m</td>
                <td className="p-3 border border-border">
                  <span className="px-3 py-1 bg-red-500 text-white rounded text-xs font-bold">P1</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Error Rate Spike</td>
                <td className="p-3 border border-border text-muted-foreground">Error rate {">"} 1%</td>
                <td className="p-3 border border-border">
                  <span className="px-3 py-1 bg-red-500 text-white rounded text-xs font-bold">P1</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Block Rate Spike</td>
                <td className="p-3 border border-border text-muted-foreground">Block rate {">"} 2x baseline</td>
                <td className="p-3 border border-border">
                  <span className="px-3 py-1 bg-orange-500 text-white rounded text-xs font-bold">P2</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Feature Drift</td>
                <td className="p-3 border border-border text-muted-foreground">PSI {">"} 0.1</td>
                <td className="p-3 border border-border">
                  <span className="px-3 py-1 bg-orange-500 text-white rounded text-xs font-bold">P2</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-4"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">← Part 4: Evidence & Economics</span>
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-6"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">Part 6: Sprint-1 Implementation →</span>
        </Link>
      </div>
    </ThinkingLayout>
  );
}
