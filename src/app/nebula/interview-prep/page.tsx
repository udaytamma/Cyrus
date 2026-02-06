"use client";

/**
 * Interview Prep - Landing Page
 * Practiced responses for common interview scenarios
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// Section cards for Interview Prep topics
const sections = [
  {
    id: "tell-me-about-yourself",
    number: "1",
    title: "Tell Me About Yourself",
    description: "Elevator pitch highlighting platform reliability, cross-org leadership, and executive stakeholder management experience",
    path: "/nebula/interview-prep/tell-me-about-yourself",
    color: "blue",
  },
  {
    id: "tandem-incident-management",
    number: "2",
    title: "Tandem Incident Management",
    description: "STAR story: Critical billing system recovery demonstrating technical judgment under pressure and systemic improvement",
    path: "/nebula/interview-prep/tandem-incident-management",
    color: "amber",
  },
  {
    id: "soc-audit-automation",
    number: "3",
    title: "SOC Audit Automation",
    description: "STAR story: Cross-org program without authority - forcing scoped decisions about risk, ownership, and accountability",
    path: "/nebula/interview-prep/soc-audit-automation",
    color: "purple",
  },
  {
    id: "card-vault-pci",
    number: "4",
    title: "Card Vault / PCI",
    description: "STAR story: Killing architectural purity for business reality - deliberate scope-down under pressure with risk ownership",
    path: "/nebula/interview-prep/card-vault-pci",
    color: "green",
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
};

export default function InterviewPrepPage() {
  return (
    <InterviewPrepLayout
      title="Interview Prep"
      description="Practiced responses for common interview scenarios"
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
          🎤
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Interview Prep</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Practiced responses for common interview scenarios. Multiple takes for each question
          to refine delivery and messaging.
        </p>
      </div>

      {/* Key Focus Areas */}
      <div className="mb-10 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            🎯
          </span>
          Focus Areas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-background/50 rounded-lg border border-border">
            <div className="font-semibold text-foreground mb-1">Concise Delivery</div>
            <div className="text-sm text-muted-foreground">
              Clear, structured responses that respect interviewer time
            </div>
          </div>
          <div className="p-4 bg-background/50 rounded-lg border border-border">
            <div className="font-semibold text-foreground mb-1">Impact Focus</div>
            <div className="text-sm text-muted-foreground">
              Quantifiable results and business outcomes
            </div>
          </div>
          <div className="p-4 bg-background/50 rounded-lg border border-border">
            <div className="font-semibold text-foreground mb-1">Authenticity</div>
            <div className="text-sm text-muted-foreground">
              Genuine stories that demonstrate expertise
            </div>
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">Responses</h2>
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
    </InterviewPrepLayout>
  );
}
