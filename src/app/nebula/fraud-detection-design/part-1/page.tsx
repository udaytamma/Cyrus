"use client";

/**
 * Part 1: Tech Stack & Architecture
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function Part1() {
  return (
    <ThinkingLayout
      title="Part 1: Tech Stack & Architecture"
      description="Battle-hardened technology stack, system architecture, latency budget"
      currentSection="part-1"
    >
      <Link
        href="/nebula/fraud-detection-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Design Docs
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">1</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Tech Stack & Architecture</h1>
        <p className="text-muted-foreground">
          Battle-hardened technology stack, system architecture diagram, event types, latency budget breakdown.
        </p>
      </div>

      {/* Technology Stack */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Battle-Hardened Technology Stack
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Component
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Technology
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Why
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Event Streaming</td>
                <td className="p-3 border border-border">Apache Kafka</td>
                <td className="p-3 border border-border">
                  Exactly-once semantics, partition by card_token for ordering
                </td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Stream Processing</td>
                <td className="p-3 border border-border">Apache Flink</td>
                <td className="p-3 border border-border">
                  Native sliding windows, checkpoint recovery, &lt;50ms latency
                </td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Fast State Store</td>
                <td className="p-3 border border-border">Redis Cluster</td>
                <td className="p-3 border border-border">
                  &lt;5ms p99 reads, atomic counters, TTL expiration
                </td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Policy Engine</td>
                <td className="p-3 border border-border">OPA + Custom Service</td>
                <td className="p-3 border border-border">Hot-reloadable Rego policies, version-controlled</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Evidence Vault</td>
                <td className="p-3 border border-border">PostgreSQL + S3</td>
                <td className="p-3 border border-border">
                  WORM-style immutable storage, 7-year retention
                </td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Observability</td>
                <td className="p-3 border border-border">Prometheus + Grafana</td>
                <td className="p-3 border border-border">
                  Distributed tracing, custom metrics, alert routing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Latency Budget */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Latency Budget (P99)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Stage
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Budget
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Feature Assembly</td>
                <td className="p-3 border border-border">45ms</td>
                <td className="p-3 border border-border">Parallel Redis lookups</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Model Inference</td>
                <td className="p-3 border border-border">25ms</td>
                <td className="p-3 border border-border">Ensemble scoring</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Policy Evaluation</td>
                <td className="p-3 border border-border">15ms</td>
                <td className="p-3 border border-border">OPA + profit logic</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Evidence Capture</td>
                <td className="p-3 border border-border">10ms</td>
                <td className="p-3 border border-border">Async with acknowledgment</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-bold">Total</td>
                <td className="p-3 border border-border font-bold">&lt;200ms</td>
                <td className="p-3 border border-border">95ms buffer for variability</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Architecture Overview */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          High-Level Architecture
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs text-muted-foreground whitespace-pre overflow-x-auto">
          {`┌──────────────┐     ┌──────────────┐     ┌─────────────────┐
│  PSP/Gateway │────▶│  API Gateway │────▶│  Kafka: events  │
│  (webhooks)  │     │  + IdempKey  │     │  by card_token  │
└──────────────┘     └──────────────┘     └─────────────────┘
                                                   │
                                                   ▼
                                          ┌─────────────────┐
                                          │  Flink Jobs     │
                                          │  - Normalize    │
                                          │  - Features     │
                                          │  - Velocity     │
                                          └─────────────────┘
                                                   │
                           ┌───────────────────────┼───────────────────────┐
                           ▼                       ▼                       ▼
                    ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
                    │ Feature     │         │ Redis       │         │ Delta Lake  │
                    │ Store       │         │ Cluster     │         │ (training)  │
                    └─────────────┘         └─────────────┘         └─────────────┘
                           │                       │
                           └───────────┬───────────┘
                                       ▼
                           ┌─────────────────────────┐
                           │  RISK SCORING SERVICE   │
                           │  - Feature Assembly     │
                           │  - Model Inference      │
                           └─────────────────────────┘
                                       │
                                       ▼
                           ┌─────────────────────────┐
                           │  POLICY ENGINE          │
                           │  - OPA Rules            │
                           │  - Profit Thresholds    │
                           │  - Experiment Router    │
                           └─────────────────────────┘
                                       │
                                       ▼
                           ┌─────────────────────────┐
                           │  DECISION + EVIDENCE    │
                           │  - PostgreSQL (audit)   │
                           │  - S3 (blob evidence)   │
                           └─────────────────────────┘`}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Design Index
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-2"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Part 2: Entities & Features →
        </Link>
      </div>
    </ThinkingLayout>
  );
}
