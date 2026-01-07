"use client";

/**
 * Part 5: Testing & Monitoring
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
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">5</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Testing & Monitoring</h1>
        <p className="text-muted-foreground">
          Offline validation, replay testing, pre-production acceptance, Grafana dashboards, alert rules.
        </p>
      </div>

      {/* Testing Layers */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Testing Layers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Layer
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Purpose
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Frequency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Unit Tests</td>
                <td className="p-3 border border-border">Logic validation, edge cases</td>
                <td className="p-3 border border-border">Every commit</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Integration Tests</td>
                <td className="p-3 border border-border">End-to-end flows, idempotency</td>
                <td className="p-3 border border-border">Every PR</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Chaos Tests</td>
                <td className="p-3 border border-border">Failure mode validation</td>
                <td className="p-3 border border-border">Weekly</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Replay Tests</td>
                <td className="p-3 border border-border">Historical accuracy validation</td>
                <td className="p-3 border border-border">Before release</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Load Tests</td>
                <td className="p-3 border border-border">Capacity validation at 2x</td>
                <td className="p-3 border border-border">Before release</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Dashboards */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Grafana Dashboards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: "System Health",
              metrics: ["P99 latency", "Error rate", "Throughput", "Consumer lag"],
            },
            {
              name: "Business Metrics",
              metrics: ["Approval rate", "Block rate", "Friction rate", "Review queue"],
            },
            {
              name: "Fraud Metrics",
              metrics: ["Detection rate", "False positive rate", "Attack patterns", "Blocklist hits"],
            },
            {
              name: "Feature Health",
              metrics: ["Feature staleness", "PSI drift", "Redis hit rate", "Null rates"],
            },
          ].map((dashboard) => (
            <div key={dashboard.name} className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="font-semibold text-foreground mb-2">{dashboard.name}</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {dashboard.metrics.map((metric) => (
                  <li key={metric}>• {metric}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Rules */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Alert Rules
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Alert
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Condition
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Severity
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Latency Breach</td>
                <td className="p-3 border border-border">P99 {">"} 200ms for 5m</td>
                <td className="p-3 border border-border text-danger font-semibold">P1</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Error Rate Spike</td>
                <td className="p-3 border border-border">Error rate {">"} 1%</td>
                <td className="p-3 border border-border text-danger font-semibold">P1</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Block Rate Spike</td>
                <td className="p-3 border border-border">Block rate {">"} 2x baseline</td>
                <td className="p-3 border border-border text-warning font-semibold">P2</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Feature Drift</td>
                <td className="p-3 border border-border">PSI {">"} 0.1</td>
                <td className="p-3 border border-border text-warning font-semibold">P2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-4"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Part 4: Evidence & Economics
        </Link>
        <Link
          href="/nebula/fraud-detection-design"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Back to Design Index →
        </Link>
      </div>
    </ThinkingLayout>
  );
}
