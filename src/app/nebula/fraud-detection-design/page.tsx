"use client";

/**
 * Fraud Detection - Full Design Documentation Index
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

const designDocs = [
  {
    number: "1",
    title: "Tech Stack & Architecture",
    description:
      "Battle-hardened technology stack, system architecture diagram, event types, latency budget breakdown.",
    path: "/nebula/fraud-detection-design/part-1",
  },
  {
    number: "2",
    title: "Entities & Features",
    description:
      "Entity profiling (User, Device, Card, IP, Service, Phone/IMEI), Redis data structures, feature catalog.",
    path: "/nebula/fraud-detection-design/part-2",
  },
  {
    number: "3",
    title: "Detection & Policy",
    description:
      "Criminal and friendly fraud detection, ML integration, policy engine architecture, champion/challenger.",
    path: "/nebula/fraud-detection-design/part-3",
  },
  {
    number: "4",
    title: "Evidence & Economics",
    description:
      "Evidence vault architecture, dispute pipeline, training data pipeline, economic optimization service.",
    path: "/nebula/fraud-detection-design/part-4",
  },
  {
    number: "5",
    title: "Testing & Monitoring",
    description:
      "Offline validation, replay testing, pre-production acceptance, Grafana dashboards, alert rules.",
    path: "/nebula/fraud-detection-design/part-5",
  },
  {
    number: "6",
    title: "Sprint-1 Implementation",
    description:
      "Working MVP with FastAPI, Redis velocity counters, PostgreSQL evidence storage, policy configuration.",
    path: "/nebula/fraud-detection-design/part-6",
  },
  {
    number: "7",
    title: "Demo Dashboard",
    description:
      "Streamlit demo dashboard with transaction simulator, attack presets, analytics, policy settings.",
    path: "/nebula/fraud-detection-design/part-7",
  },
  {
    number: "8",
    title: "Load Testing",
    description:
      "Locust load testing framework, realistic traffic patterns, scaling analysis, interview perspectives.",
    path: "/nebula/fraud-detection-design/part-8",
  },
];

const targetMetrics = [
  { label: "P99 Latency", value: "<200ms" },
  { label: "Approval Rate", value: ">92%" },
  { label: "Detection Rate", value: ">70%" },
  { label: "False Positive", value: "<10%" },
  { label: "Uptime", value: "99.9%" },
];

const techStack = [
  { name: "Apache Kafka", color: "#231F20" },
  { name: "Apache Flink", color: "#E6526F" },
  { name: "Redis Cluster", color: "#dc382d" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Open Policy Agent", color: "#7D9AAA" },
  { name: "Prometheus", color: "#e6522c" },
  { name: "Grafana", color: "#f46800" },
  { name: "FastAPI", color: "#009688" },
];

export default function DesignDocsIndex() {
  return (
    <ThinkingLayout
      title="Fraud Detection - Full Design Docs"
      description="Complete design documentation for the Payment & Chargeback Fraud Detection Platform"
      currentSection="design-overview"
    >
      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">📋</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Full Design Documentation</h1>
        <p className="text-muted-foreground">Principal-Level, Production-Grade Design Document</p>
      </div>

      {/* Introduction */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          About This Documentation
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            This is the <strong className="text-foreground">complete design documentation</strong> for the
            Payment & Chargeback Fraud Detection Platform. Unlike the Thinking Process section which focuses
            on <em>how to approach</em> the design, this section contains the{" "}
            <strong className="text-foreground">actual implementation details</strong>.
          </p>
          <p>
            The documentation is split into 8 core parts, each covering a specific aspect of the system.
          </p>
        </div>
      </div>

      {/* Target Metrics */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
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
      </div>

      {/* Document Parts */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Document Parts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {designDocs.map((doc) => (
            <Link
              key={doc.number}
              href={doc.path}
              className="block p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {doc.number}
                </span>
                <span className="font-semibold text-foreground">{doc.title}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Key Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1.5 rounded text-xs font-semibold text-white"
              style={{ backgroundColor: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-thinking"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Thinking Process
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-1"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Part 1: Tech Stack →
        </Link>
      </div>
    </ThinkingLayout>
  );
}
