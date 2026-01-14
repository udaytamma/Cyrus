"use client";

/**
 * System Design - Practice Questions Index
 * Hub page linking to question parts for better organization
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";

// Practice question parts data
const parts = [
  {
    id: "fundamentals",
    number: "I",
    title: "System Design Fundamentals",
    description: "Core concepts: statelessness, caching, sharding, microservices, and operational excellence",
    questionRange: "Q1-20",
    questionCount: 20,
    path: "/nebula/system-design/practice/fundamentals",
    color: "blue",
    topics: ["Statelessness & Scaling", "Caching Strategy", "Database & Sharding", "Microservices", "Operational Excellence"],
  },
  {
    id: "cloud-economics",
    number: "II",
    title: "Cloud Economics & Infrastructure",
    description: "FinOps, cost optimization, compute strategy, and the financial physics that separate Principal from Senior TPM",
    questionRange: "Q21-30",
    questionCount: 10,
    path: "/nebula/system-design/practice/cloud-economics",
    color: "cyan",
    topics: ["Reserved vs Savings Plans", "Storage Tiering", "Egress Optimization", "Inter-AZ Costs", "Data Gravity"],
  },
  {
    id: "sla-math",
    number: "III",
    title: "SLA Mathematics & Reliability",
    description: "SLI/SLO/SLA, composite availability, error budgets, MTBF/MTTR, and the cost of nines",
    questionRange: "Q31-40",
    questionCount: 10,
    path: "/nebula/system-design/practice/sla-math",
    color: "purple",
    topics: ["Composite Availability", "Error Budgets", "Percentile Latency", "MTBF vs MTTR", "Cost of Nines"],
  },
  {
    id: "compliance-governance",
    number: "IV",
    title: "Compliance, Governance & Risk",
    description: "GDPR, PCI-DSS, SOC 2, risk quantification, data classification, and Principal TPM scenarios",
    questionRange: "Q41-60",
    questionCount: 20,
    path: "/nebula/system-design/practice/compliance-governance",
    color: "amber",
    topics: ["GDPR & Data Sovereignty", "PCI-DSS Payments", "SOC 2 Framework", "Risk Quantification", "Data Classification"],
  },
];

// Color mappings
const colorStyles: Record<string, { gradient: string; border: string; badge: string; text: string }> = {
  blue: {
    gradient: "from-blue-500/10",
    border: "border-blue-500/30",
    badge: "bg-blue-500 text-white",
    text: "text-blue-500",
  },
  cyan: {
    gradient: "from-cyan-500/10",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500 text-white",
    text: "text-cyan-500",
  },
  purple: {
    gradient: "from-purple-500/10",
    border: "border-purple-500/30",
    badge: "bg-purple-500 text-white",
    text: "text-purple-500",
  },
  amber: {
    gradient: "from-amber-500/10",
    border: "border-amber-500/30",
    badge: "bg-amber-500 text-white",
    text: "text-amber-500",
  },
};

export default function SystemDesignPractice() {
  const totalQuestions = parts.reduce((sum, part) => sum + part.questionCount, 0);

  return (
    <SystemDesignLayout
      title="System Design - Practice Questions"
      description="Principal TPM interview practice with model answers"
      currentSection="practice"
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
          3
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Practice Questions</h1>
        <p className="text-muted-foreground">
          {totalQuestions} Principal TPM System Design Questions with Model Answers
        </p>
      </div>

      {/* Instructions */}
      <div className="mb-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">How to use:</strong> Answer each question in your own words before
          revealing the model answer. Focus on the <strong className="text-foreground">why</strong> and the{" "}
          <strong className="text-foreground">risk</strong>, not just definitions.
        </p>
      </div>

      {/* Grading Criteria */}
      <div className="mb-8 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="text-sm font-semibold text-foreground mb-2">Grading Criteria</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground text-sm">Technical Accuracy</div>
            <div className="text-xs text-muted-foreground">Is the engineering sound?</div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground text-sm">Strategic Depth</div>
            <div className="text-xs text-muted-foreground">Did you identify the trade-off?</div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground text-sm">Communication</div>
            <div className="text-xs text-muted-foreground">Was it concise and clear?</div>
          </div>
        </div>
      </div>

      {/* Parts Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Question Sets</h2>

        {parts.map((part) => {
          const colors = colorStyles[part.color];
          return (
            <Link
              key={part.id}
              href={part.path}
              className={`group block p-6 bg-gradient-to-r ${colors.gradient} to-transparent rounded-xl border ${colors.border} hover:border-primary/50 transition-all shadow-sm hover:shadow-md`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${colors.badge} flex items-center justify-center text-lg font-bold shrink-0`}>
                  {part.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {part.title}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {part.questionRange}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{part.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {part.topics.map((topic) => (
                      <span
                        key={topic}
                        className={`text-xs px-2 py-1 rounded ${colors.gradient.replace('from-', 'bg-')} ${colors.text}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                  &rarr;
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-foreground">{totalQuestions}</div>
            <div className="text-xs text-muted-foreground">Total Questions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{parts.length}</div>
            <div className="text-xs text-muted-foreground">Topic Areas</div>
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
          href="/nebula/system-design/guide"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Principal TPM Guide
        </Link>
        <Link
          href="/nebula/system-design/deep-dives"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Deep Dives &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
