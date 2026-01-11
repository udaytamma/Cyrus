"use client";

/**
 * Fraud Detection - Thinking Process Overview
 * Landing page for the thinking process documentation
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

const sections = [
  {
    number: "1",
    title: "Constraints First",
    description:
      "Start with non-negotiables: latency, compliance, cost, team skills. Define what problems you must NOT create.",
    path: "/nebula/fraud-detection-thinking/constraints",
    color: "red",
  },
  {
    number: "2",
    title: "Scope Definition",
    description:
      "Define Phase 1 scope explicitly. Identify what is deferred and what hooks are needed for future phases.",
    path: "/nebula/fraud-detection-thinking/scope",
    color: "orange",
  },
  {
    number: "3",
    title: "Technology Selection",
    description:
      "For each constraint, evaluate which tech choices survive. Use CREST framework for systematic selection.",
    path: "/nebula/fraud-detection-thinking/technology",
    color: "yellow",
  },
  {
    number: "4",
    title: "Data Model",
    description:
      "Derive entities from money flow. Define events, entity schemas, and feature computation strategies.",
    path: "/nebula/fraud-detection-thinking/data-model",
    color: "green",
  },
  {
    number: "5",
    title: "Logic & Policy",
    description:
      "Separate ML scoring from policy decisions. Design rule hierarchy, profit-based thresholds, and business controls.",
    path: "/nebula/fraud-detection-thinking/logic-policy",
    color: "teal",
  },
  {
    number: "6",
    title: "Failure Modes",
    description:
      "Enumerate what breaks and design fallbacks. Distinguish attacks from bugs. Build safe mode and recovery procedures.",
    path: "/nebula/fraud-detection-thinking/failure-modes",
    color: "blue",
  },
  {
    number: "7",
    title: "Testing & Validation",
    description:
      "Layer the testing pyramid: unit, integration, chaos, replay, load. Define go/no-go criteria and monitoring strategy.",
    path: "/nebula/fraud-detection-thinking/testing",
    color: "indigo",
  },
  {
    number: "8",
    title: "Checklist",
    description:
      "Pre-production acceptance criteria. What must be true to ship. Sign-off requirements and launch readiness.",
    path: "/nebula/fraud-detection-thinking/checklist",
    color: "purple",
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
};

export default function ThinkingProcessIndex() {
  return (
    <ThinkingLayout
      title="Fraud Detection - Thinking Process"
      description="Principal-level system design thinking process for fraud detection platform"
      currentSection="index"
    >
      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🧠</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Thinking Process</h1>
        <p className="text-muted-foreground">
          Principal-Level System Design for Fraud Detection Platform
        </p>
      </div>

      {/* Introduction */}
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
            This documentation captures the <strong className="text-foreground">thinking process</strong> behind
            designing a production-grade fraud detection platform. It is not about the final design itself, but
            about <strong className="text-foreground">how to arrive at such a design systematically</strong>.
          </p>
          <p>Each section covers a specific phase of the design process, including:</p>
          <ul className="space-y-2 ml-2">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary shrink-0 mt-0.5">1</span>
              <span><strong className="text-foreground">Thinking Process</strong> - The mental framework and sequencing of decisions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary shrink-0 mt-0.5">2</span>
              <span><strong className="text-foreground">Decision Context</strong> - What information drives each decision</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary shrink-0 mt-0.5">3</span>
              <span><strong className="text-foreground">Derivation Path</strong> - How outputs are derived from inputs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary shrink-0 mt-0.5">4</span>
              <span><strong className="text-foreground">Interview Application</strong> - How to articulate this in a 2-minute response</span>
            </li>
          </ul>
        </div>
      </div>

      {/* The Framework */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </span>
          The Design Framework
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap overflow-x-auto">
          {`1. CONSTRAINTS FIRST
   What are the non-negotiables?
   What problems must we NOT create?
        ↓
2. SCOPE DEFINITION
   What is in Phase 1? What is deferred?
   What hooks do we need for future phases?
        ↓
3. TECHNOLOGY SELECTION
   For each constraint, what tech survives?
   Document trade-offs explicitly
        ↓
4. DATA MODEL
   What entities exist?
   What events flow through?
   What features are computed?
        ↓
5. LOGIC & POLICY
   What rules apply? Who controls them?
   How do ML scores become business decisions?
        ↓
6. FAILURE MODES
   What breaks? What is the fallback?
   How do we detect attacks vs bugs?
        ↓
7. TESTING & VALIDATION
   How do we know it works before production?
   What do we monitor after launch?
        ↓
8. CHECKLIST
   What must be true to ship?`}
        </div>
      </div>

      {/* Section Cards */}
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
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{section.title}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Interview Context */}
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
            This thinking process is designed for{" "}
            <strong className="text-foreground">Principal TPM / Staff Architect</strong> level interviews at
            top tech companies. The goal is not to memorize details, but to internalize the framework so you
            can:
          </p>
          <ul className="space-y-2 ml-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Start with constraints, not solutions
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Name trade-offs without being asked
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Zoom in when pressed, zoom out when needed
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Answer at the right altitude for your audience
            </li>
          </ul>

          <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/30 rounded-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Key Insight
            </div>
            <div className="text-sm italic text-muted-foreground space-y-2">
              <p>Prepare at architect depth. Deliver at principal depth. Adjust on the fly.</p>
              <p>
                The depth you prepare determines the confidence you project. A winning answer is 60 seconds of
                structured thinking, then: "I can go deeper on any component if useful."
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThinkingLayout>
  );
}
