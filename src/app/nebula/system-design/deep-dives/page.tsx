"use client";

/**
 * System Design - Deep Dives Index
 * Hub page linking to 12 deep dive topics
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";

// Deep dive topics data
const topics = [
  {
    id: "cloud-economics",
    number: 1,
    title: "Cloud Economics (FinOps)",
    description: "Cost as a non-functional requirement, compute tiers, storage tiers",
    color: "blue",
  },
  {
    id: "compute-strategy",
    number: 2,
    title: "Compute Strategy",
    description: "Reserved vs Spot, base + burst philosophy, Savings Plans",
    color: "green",
  },
  {
    id: "network-costs",
    number: 3,
    title: "Network Costs",
    description: "The silent killer: inter-AZ, inter-region, egress fees",
    color: "amber",
  },
  {
    id: "data-transfer",
    number: 4,
    title: "Data Transfer Optimization",
    description: "CDN egress shield, compression, data locality",
    color: "purple",
  },
  {
    id: "storage-lifecycle",
    number: 5,
    title: "Storage Lifecycle",
    description: "Data death date, S3 Intelligent-Tiering, lifecycle policies",
    color: "indigo",
  },
  {
    id: "sla-mathematics",
    number: 6,
    title: "SLA Mathematics",
    description: "SLI/SLO/SLA, composite availability, error budgets, burn rate",
    color: "pink",
  },
  {
    id: "capex-opex",
    number: 7,
    title: "CAPEX vs OPEX",
    description: "Accounting physics, unit economics, waste categories",
    color: "teal",
  },
  {
    id: "tagging-chargeback",
    number: 8,
    title: "Tagging & Chargeback",
    description: "No tag no resource, showback vs chargeback, cost attribution",
    color: "orange",
  },
  {
    id: "capacity-planning",
    number: 9,
    title: "Capacity Planning",
    description: "Headroom formula, forecasting methods, review cadence",
    color: "cyan",
  },
  {
    id: "dr-economics",
    number: 10,
    title: "DR Economics",
    description: "RPO/RTO cost trade-offs, testing tax, regional failure probability",
    color: "red",
  },
  {
    id: "vendor-strategy",
    number: 11,
    title: "Multi-Cloud Strategy",
    description: "EDP negotiation, vendor lock-in quantification, portability tax",
    color: "violet",
  },
  {
    id: "k8s-economics",
    number: 12,
    title: "Kubernetes Economics",
    description: "Resource requests vs limits, cluster efficiency, Graviton/ARM",
    color: "blue",
  },
];

// Color mappings
const colorStyles: Record<string, { gradient: string; border: string; badge: string }> = {
  blue: { gradient: "from-blue-500/10", border: "border-blue-500/30", badge: "bg-blue-500 text-white" },
  green: { gradient: "from-green-500/10", border: "border-green-500/30", badge: "bg-green-500 text-white" },
  amber: { gradient: "from-amber-500/10", border: "border-amber-500/30", badge: "bg-amber-500 text-white" },
  purple: { gradient: "from-purple-500/10", border: "border-purple-500/30", badge: "bg-purple-500 text-white" },
  indigo: { gradient: "from-indigo-500/10", border: "border-indigo-500/30", badge: "bg-indigo-500 text-white" },
  pink: { gradient: "from-pink-500/10", border: "border-pink-500/30", badge: "bg-pink-500 text-white" },
  cyan: { gradient: "from-cyan-500/10", border: "border-cyan-500/30", badge: "bg-cyan-500 text-white" },
  red: { gradient: "from-red-500/10", border: "border-red-500/30", badge: "bg-red-500 text-white" },
  teal: { gradient: "from-teal-500/10", border: "border-teal-500/30", badge: "bg-teal-500 text-white" },
  orange: { gradient: "from-orange-500/10", border: "border-orange-500/30", badge: "bg-orange-500 text-white" },
  violet: { gradient: "from-violet-500/10", border: "border-violet-500/30", badge: "bg-violet-500 text-white" },
};

export default function SystemDesignDeepDives() {
  return (
    <SystemDesignLayout
      title="System Design - Deep Dives"
      description="Principal-level explorations of critical topics"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          4
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Deep Dives</h1>
        <p className="text-muted-foreground">
          12 Principal-level explorations: Cloud Economics, SLA Mathematics, DR Strategy, and more
        </p>
      </div>

      {/* Instructions */}
      <div className="mb-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Deep Dives</strong> go beyond practice questions into the nuanced
          technical and financial considerations that differentiate a Principal TPM. Each topic includes
          tables, formulas, interview tips, and common pitfalls.
        </p>
      </div>

      {/* Topics Grid */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Topics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {topics.map((topic) => {
            const colors = colorStyles[topic.color] || colorStyles.blue;
            return (
              <Link
                key={topic.id}
                href={`/nebula/system-design/deep-dives/${topic.id}`}
                className={`group block p-4 bg-gradient-to-r ${colors.gradient} to-transparent rounded-xl border ${colors.border} hover:border-primary/50 transition-all shadow-sm hover:shadow-md`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg ${colors.badge} flex items-center justify-center text-sm font-bold shrink-0`}>
                    {topic.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{topic.description}</p>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    &rarr;
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* SLA Mathematics Callout */}
      <div className="mt-8 p-4 bg-pink-500/10 rounded-lg border border-pink-500/30">
        <div className="text-sm font-semibold text-foreground mb-2">Featured: SLA Mathematics</div>
        <p className="text-xs text-muted-foreground mb-3">
          Section 6 is particularly important for Principal TPM interviews and includes:
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 bg-pink-500/20 text-pink-500 rounded">SLI/SLO/SLA Triad</span>
          <span className="px-2 py-1 bg-pink-500/20 text-pink-500 rounded">Composite SLA Math</span>
          <span className="px-2 py-1 bg-pink-500/20 text-pink-500 rounded">Error Budgets</span>
          <span className="px-2 py-1 bg-pink-500/20 text-pink-500 rounded">SLO Pyramid</span>
          <span className="px-2 py-1 bg-pink-500/20 text-pink-500 rounded">Burn Rate Alerting</span>
          <span className="px-2 py-1 bg-pink-500/20 text-pink-500 rounded">MTTR vs MTBF</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-foreground">{topics.length}</div>
            <div className="text-xs text-muted-foreground">Deep Dive Topics</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">50+</div>
            <div className="text-xs text-muted-foreground">Tables & Formulas</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">Mag7</div>
            <div className="text-xs text-muted-foreground">Target Level</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <Link
          href="/nebula/system-design/practice"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Practice Questions
        </Link>
        <Link
          href="/nebula/system-design/guide"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Principal TPM Guide &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
