"use client";

/**
 * Fraud Detection Design - Index Page
 * Visual upgrade with gradient backgrounds, colored borders, styled numbered steps, link cards
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

const parts = [
  {
    number: 1,
    title: "Tech Stack",
    description: "Kafka, Flink, Redis, OPA architecture with technology selection rationale",
    color: "amber",
    href: "/nebula/fraud-detection-design/part-1",
  },
  {
    number: 2,
    title: "Entities & Features",
    description: "Entity profiling (User, Device, Card, IP), Redis data structures, feature catalog",
    color: "blue",
    href: "/nebula/fraud-detection-design/part-2",
  },
  {
    number: 3,
    title: "Detection & Policy",
    description: "Criminal and friendly fraud detection, ML integration, policy engine",
    color: "purple",
    href: "/nebula/fraud-detection-design/part-3",
  },
  {
    number: 4,
    title: "Evidence & Economics",
    description: "Immutable evidence capture, chargeback lifecycle, profit optimization",
    color: "green",
    href: "/nebula/fraud-detection-design/part-4",
  },
  {
    number: 5,
    title: "Testing & Monitoring",
    description: "Offline validation, replay testing, Grafana dashboards, alert rules",
    color: "teal",
    href: "/nebula/fraud-detection-design/part-5",
  },
  {
    number: 6,
    title: "Sprint-1 Implementation",
    description: "Working MVP with FastAPI, Redis velocity counters, PostgreSQL evidence",
    color: "indigo",
    href: "/nebula/fraud-detection-design/part-6",
  },
  {
    number: 7,
    title: "Demo Dashboard",
    description: "Streamlit-based visual testing interface for transactions and policy",
    color: "pink",
    href: "/nebula/fraud-detection-design/part-7",
  },
  {
    number: 8,
    title: "Load Testing",
    description: "Performance testing, capacity planning, interview preparation",
    color: "orange",
    href: "/nebula/fraud-detection-design/part-8",
  },
];

const targetMetrics = [
  { label: "P99 Latency", value: "<200ms" },
  { label: "Approval Rate", value: ">92%" },
  { label: "Detection Rate", value: ">70%" },
  { label: "False Positive", value: "<10%" },
  { label: "Uptime", value: "99.9%" },
];

export default function FraudDetectionDesignPage() {
  return (
    <ThinkingLayout
      title="Fraud Detection Design"
      description="Complete system design documentation for the Fraud Detection Platform"
      currentSection="fraud-detection-design"
    >
      <Link
        href="/nebula"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Nebula
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
          🛡️
        </div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Fraud Detection Platform
        </h1>
        <p className="text-muted-foreground">
          Complete system design documentation for TPM/PM interviews
        </p>
        <div className="flex justify-center gap-6 md:gap-8 mt-6 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-xs text-muted-foreground">Parts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">WIP</div>
            <div className="text-xs text-muted-foreground">Sprint-1</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">Telco</div>
            <div className="text-xs text-muted-foreground">Domain</div>
          </div>
        </div>
      </div>

      {/* Target Metrics */}
      <section className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Target Metrics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {targetMetrics.map((metric) => (
            <div key={metric.label} className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="text-xl font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Document Overview */}
      <section className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Document Overview
        </h2>
        <div className="text-muted-foreground space-y-3">
          <p>
            This comprehensive design document covers the end-to-end architecture of a real-time fraud
            detection platform for telco billing. It demonstrates the depth of thinking expected from a
            Senior TPM at Mag7 companies.
          </p>
          <p>
            The documentation follows a progressive structure from high-level architecture to implementation
            details, testing strategy, and interview preparation.
          </p>
        </div>
      </section>

      {/* Document Parts */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Document Parts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {parts.map((part) => (
            <Link
              key={part.number}
              href={part.href}
              className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white text-lg font-bold shadow flex-shrink-0">
                  {part.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {part.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {part.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Quick Links
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href="/nebula/fraud-detection-design/part-6"
            className="group p-3 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-colors text-center"
          >
            <span className="text-xl block mb-1">🚀</span>
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Sprint-1 MVP
            </span>
          </Link>
          <Link
            href="/nebula/fraud-detection-design/part-7"
            className="group p-3 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-colors text-center"
          >
            <span className="text-xl block mb-1">📊</span>
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Demo Dashboard
            </span>
          </Link>
          <Link
            href="/nebula/fraud-detection-design/part-8"
            className="group p-3 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-colors text-center"
          >
            <span className="text-xl block mb-1">🎯</span>
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Load Testing
            </span>
          </Link>
          <Link
            href="/nebula/fraud-detection-thinking"
            className="group p-3 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-colors text-center"
          >
            <span className="text-xl block mb-1">🧠</span>
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Thinking Process
            </span>
          </Link>
        </div>
      </section>

      {/* Tech Stack Summary */}
      <section className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Tech Stack Summary
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Streaming</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">Kafka</span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">Flink</span>
            </div>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Fast State</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-xs">Redis</span>
            </div>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Policy</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded text-xs">OPA</span>
              <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded text-xs">YAML</span>
            </div>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">API</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded text-xs">FastAPI</span>
              <span className="px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded text-xs">Python</span>
            </div>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Storage</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded text-xs">PostgreSQL</span>
            </div>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Monitoring</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-xs">Prometheus</span>
              <span className="px-2 py-0.5 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-xs">Grafana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Start Reading CTA */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <Link
          href="/nebula/fraud-detection-design/part-1"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
        >
          Start Reading: Part 1 →
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-6"
          className="px-6 py-3 bg-transparent text-primary border border-primary rounded-lg text-center font-medium hover:bg-primary/10 transition-colors"
        >
          Jump to Implementation
        </Link>
      </div>
    </ThinkingLayout>
  );
}
