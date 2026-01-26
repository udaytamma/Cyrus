"use client";

/**
 * System Design - Landing Page
 * Overview of system design resources for Principal TPM interview prep
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";

// Section cards for System Design topics
const sections = [
  {
    id: "scope",
    number: "1",
    title: "Competency Matrix",
    description: "Principal TPM competency matrix covering architectural strategy, business physics, and execution patterns for Mag7 interviews",
    path: "/nebula/system-design/scope",
    color: "blue",
  },
  {
    id: "guide",
    number: "2",
    title: "Principal TPM Guide",
    description: "Deep-dive system design guide with detailed explanations, trade-offs, and interview tips for Mag7 Principal TPM roles",
    path: "/nebula/system-design/guide",
    color: "purple",
  },
  {
    id: "practice",
    number: "3",
    title: "Practice Questions",
    description: "20 Principal TPM interview questions with model answers covering statelessness, caching, sharding, microservices, and operational excellence",
    path: "/nebula/system-design/practice",
    color: "green",
  },
  {
    id: "deep-dives",
    number: "4",
    title: "Deep Dives",
    description: "Detailed explorations of Cloud Economics, Network Costs, SLA Mathematics, Storage Lifecycle, and FinOps fundamentals",
    path: "/nebula/system-design/deep-dives",
    color: "amber",
  },
  {
    id: "tpm-strategy",
    number: "5",
    title: "TPM Strategy",
    description: "Three-tier strategic framework covering critical pillars, program execution, and operational excellence for Mag7 system design interviews",
    path: "/nebula/system-design/tpm-strategy",
    color: "cyan",
  },
  {
    id: "tpm-synthesis",
    number: "7",
    title: "TPM Synthesis",
    description: "Principal TPM lexicon synthesis with prompt patterns, answer templates, and interview-ready frameworks for Mag7 system design discussions",
    path: "/nebula/system-design/tpm-synthesis",
    color: "rose",
  },
];

// Color mappings
const colorStyles: Record<string, { gradient: string; border: string; badge: string }> = {
  blue: {
    gradient: "from-blue-500/10",
    border: "border-blue-500/30",
    badge: "bg-blue-500 text-white",
  },
  purple: {
    gradient: "from-purple-500/10",
    border: "border-purple-500/30",
    badge: "bg-purple-500 text-white",
  },
  green: {
    gradient: "from-green-500/10",
    border: "border-green-500/30",
    badge: "bg-green-500 text-white",
  },
  amber: {
    gradient: "from-amber-500/10",
    border: "border-amber-500/30",
    badge: "bg-amber-500 text-white",
  },
  cyan: {
    gradient: "from-cyan-500/10",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500 text-white",
  },
  rose: {
    gradient: "from-rose-500/10",
    border: "border-rose-500/30",
    badge: "bg-rose-500 text-white",
  },
};

export default function SystemDesignPage() {
  return (
    <SystemDesignLayout
      title="System Design"
      description="Principal TPM System Design Resources"
      currentSection="index"
    >
      <Link
        href="/nebula"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Nebula
      </Link>

      {/* Header */}
      <div className="text-center mb-10 p-8 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl mx-auto mb-4">
          🏗️
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">System Design</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Principal TPM system design resources for Mag7 interviews. Focus on architectural strategy,
          trade-offs, cost, and risk over implementation details.
        </p>
      </div>

      {/* Key Focus Areas */}
      <div className="mb-10 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            🎯
          </span>
          TPM Differentiator Focus
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-background/50 rounded-lg border border-border">
            <div className="font-semibold text-foreground mb-1">Business Physics</div>
            <div className="text-sm text-muted-foreground">
              Cloud economics, SLA math, compliance implications
            </div>
          </div>
          <div className="p-4 bg-background/50 rounded-lg border border-border">
            <div className="font-semibold text-foreground mb-1">Execution Patterns</div>
            <div className="text-sm text-muted-foreground">
              Migration strategies, deployment safety, data migration
            </div>
          </div>
          <div className="p-4 bg-background/50 rounded-lg border border-border">
            <div className="font-semibold text-foreground mb-1">Trade-off Analysis</div>
            <div className="text-sm text-muted-foreground">
              Performance vs. cost, consistency vs. availability
            </div>
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">Resources</h2>
        {sections.map((section) => {
          const colors = colorStyles[section.color];
          return (
            <Link
              key={section.id}
              href={section.path}
              className={`group block p-6 bg-gradient-to-r ${colors.gradient} to-transparent rounded-xl border ${colors.border} hover:border-primary/50 transition-all shadow-sm hover:shadow-md`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${colors.badge} flex items-center justify-center text-lg font-bold shrink-0`}>
                  {section.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  →
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Target Companies */}
      <div className="mt-10 p-6 bg-muted/30 rounded-xl border border-border">
        <div className="text-center">
          <div className="text-sm font-semibold text-muted-foreground mb-2">Target: Mag7</div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Google", "Meta", "Apple", "Amazon", "Microsoft", "Netflix", "Nvidia"].map((company) => (
              <span
                key={company}
                className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground border border-border"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SystemDesignLayout>
  );
}
