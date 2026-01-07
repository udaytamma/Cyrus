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
  },
  {
    number: "2",
    title: "Scope Definition",
    description:
      "Define Phase 1 scope explicitly. Identify what is deferred and what hooks are needed for future phases.",
    path: "/nebula/fraud-detection-thinking/scope",
  },
  {
    number: "3",
    title: "Technology Selection",
    description:
      "For each constraint, evaluate which tech choices survive. Use CREST framework for systematic selection.",
    path: "/nebula/fraud-detection-thinking/technology",
  },
  {
    number: "4",
    title: "Data Model",
    description:
      "Derive entities from money flow. Define events, entity schemas, and feature computation strategies.",
    path: "/nebula/fraud-detection-thinking/data-model",
  },
  {
    number: "5",
    title: "Logic & Policy",
    description:
      "Separate ML scoring from policy decisions. Design rule hierarchy, profit-based thresholds, and business controls.",
    path: "/nebula/fraud-detection-thinking/logic-policy",
  },
  {
    number: "6",
    title: "Failure Modes",
    description:
      "Enumerate what breaks and design fallbacks. Distinguish attacks from bugs. Build safe mode and recovery procedures.",
    path: "/nebula/fraud-detection-thinking/failure-modes",
  },
  {
    number: "7",
    title: "Testing & Validation",
    description:
      "Layer the testing pyramid: unit, integration, chaos, replay, load. Define go/no-go criteria and monitoring strategy.",
    path: "/nebula/fraud-detection-thinking/testing",
  },
  {
    number: "8",
    title: "Checklist",
    description:
      "Pre-production acceptance criteria. What must be true to ship. Sign-off requirements and launch readiness.",
    path: "/nebula/fraud-detection-thinking/checklist",
  },
];

export default function ThinkingProcessIndex() {
  return (
    <ThinkingLayout
      title="Fraud Detection - Thinking Process"
      description="Principal-level system design thinking process for fraud detection platform"
      currentSection="index"
    >
      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">🧠</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Thinking Process</h1>
        <p className="text-muted-foreground">
          Principal-Level System Design for Fraud Detection Platform
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          What This Is
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            This documentation captures the <strong className="text-foreground">thinking process</strong> behind
            designing a production-grade fraud detection platform. It is not about the final design itself, but
            about <strong className="text-foreground">how to arrive at such a design systematically</strong>.
          </p>
          <p>Each section covers a specific phase of the design process, including:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong className="text-foreground">Thinking Process</strong> - The mental framework and sequencing
              of decisions
            </li>
            <li>
              <strong className="text-foreground">Decision Context</strong> - What information drives each decision
            </li>
            <li>
              <strong className="text-foreground">Derivation Path</strong> - How outputs are derived from inputs
            </li>
            <li>
              <strong className="text-foreground">Interview Application</strong> - How to articulate this in a
              2-minute response
            </li>
          </ul>
        </div>
      </div>

      {/* The Framework */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
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
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Sections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((section) => (
            <Link
              key={section.number}
              href={section.path}
              className="block p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {section.number}
                </span>
                <span className="font-semibold text-foreground">{section.title}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Interview Context */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Interview Context
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            This thinking process is designed for{" "}
            <strong className="text-foreground">Principal TPM / Staff Architect</strong> level interviews at
            top tech companies. The goal is not to memorize details, but to internalize the framework so you
            can:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Start with constraints, not solutions</li>
            <li>Name trade-offs without being asked</li>
            <li>Zoom in when pressed, zoom out when needed</li>
            <li>Answer at the right altitude for your audience</li>
          </ul>

          <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary rounded-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-2">
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
