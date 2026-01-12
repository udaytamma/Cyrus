"use client";

/**
 * TeleOps Thinking Process Overview
 */

import Link from "next/link";
import { TeleOpsThinkingLayout } from "@/components/TeleOpsThinkingLayout";

const sections = [
  {
    number: "1",
    title: "Constraints First",
    description: "Define non-negotiables: latency, data privacy, operator trust, cost.",
    path: "/nebula/teleops-thinking/constraints",
    color: "red",
  },
  {
    number: "2",
    title: "Scope Definition",
    description: "Set MVP boundary: synthetic data, deterministic evaluation, and no real integrations.",
    path: "/nebula/teleops-thinking/scope",
    color: "orange",
  },
  {
    number: "3",
    title: "System Architecture",
    description: "Choose planes and an integration-light monolith to ship fast.",
    path: "/nebula/teleops-thinking/architecture",
    color: "yellow",
  },
  {
    number: "4",
    title: "Data Model",
    description: "Alert → Incident → RCA artifact with traceability and auditability.",
    path: "/nebula/teleops-thinking/data-model",
    color: "green",
  },
  {
    number: "5",
    title: "AI + RAG Pipeline",
    description: "Structured JSON outputs, citations, and fallback baseline.",
    path: "/nebula/teleops-thinking/ai-rag",
    color: "teal",
  },
  {
    number: "6",
    title: "Evaluation Strategy",
    description: "Compare baseline vs LLM with deterministic scenarios and labels.",
    path: "/nebula/teleops-thinking/evaluation",
    color: "blue",
  },
  {
    number: "7",
    title: "Governance & Safety",
    description: "Human approval gates, audit trail, and risk signaling.",
    path: "/nebula/teleops-thinking/governance",
    color: "indigo",
  },
  {
    number: "8",
    title: "Testing & Validation",
    description: "Coverage targets, integration tests, and observability KPIs.",
    path: "/nebula/teleops-thinking/testing",
    color: "purple",
  },
  {
    number: "9",
    title: "Checklist",
    description: "Go/no-go criteria before presenting or shipping.",
    path: "/nebula/teleops-thinking/checklist",
    color: "pink",
  },
];

const colorClasses: Record<string, { bg: string; border: string; badge: string }> = {
  red: { bg: "bg-gradient-to-r from-red-500/5 to-transparent", border: "border-red-500/30", badge: "bg-red-500" },
  orange: { bg: "bg-gradient-to-r from-orange-500/5 to-transparent", border: "border-orange-500/30", badge: "bg-orange-500" },
  yellow: { bg: "bg-gradient-to-r from-yellow-500/5 to-transparent", border: "border-yellow-500/30", badge: "bg-yellow-500" },
  green: { bg: "bg-gradient-to-r from-green-500/5 to-transparent", border: "border-green-500/30", badge: "bg-green-500" },
  teal: { bg: "bg-gradient-to-r from-teal-500/5 to-transparent", border: "border-teal-500/30", badge: "bg-teal-500" },
  blue: { bg: "bg-gradient-to-r from-blue-500/5 to-transparent", border: "border-blue-500/30", badge: "bg-blue-500" },
  indigo: { bg: "bg-gradient-to-r from-indigo-500/5 to-transparent", border: "border-indigo-500/30", badge: "bg-indigo-500" },
  purple: { bg: "bg-gradient-to-r from-purple-500/5 to-transparent", border: "border-purple-500/30", badge: "bg-purple-500" },
  pink: { bg: "bg-gradient-to-r from-pink-500/5 to-transparent", border: "border-pink-500/30", badge: "bg-pink-500" },
};

export default function TeleOpsThinkingIndex() {
  return (
    <TeleOpsThinkingLayout
      title="TeleOps - Thinking Process"
      description="Principal-level system design thinking process for TeleOps"
      currentSection="index"
    >
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🧠</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Thinking Process</h1>
        <p className="text-muted-foreground">
          Principal-level design reasoning for TeleOps
        </p>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          What This Is
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            This is the decision trail behind TeleOps. It captures the reasoning behind scope, architecture, data modeling,
            evaluation, and governance choices from a Principal TPM perspective.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Design Thinking
          </div>
        </div>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </span>
          Sections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((section) => {
            const colors = colorClasses[section.color];
            return (
              <Link
                key={section.number}
                href={section.path}
                className={`group block p-4 ${colors.bg} rounded-lg border ${colors.border} hover:shadow-md transition-all`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-8 h-8 rounded-full ${colors.badge} text-white flex items-center justify-center text-sm font-bold`}>
                    {section.number}
                  </span>
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Interview Context
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Use these sections to articulate trade-offs and reasoning at Principal TPM depth. The goal is to show how you reason,
            not just what you built.
          </p>
        </div>
      </div>
    </TeleOpsThinkingLayout>
  );
}
