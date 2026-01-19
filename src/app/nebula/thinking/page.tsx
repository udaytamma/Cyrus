"use client";

import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";

const thinkingSections = [
  {
    id: "constraints",
    title: "1. Constraints",
    description: "Start with the hard boundaries that shape all decisions",
    keyPoints: ["Latency: Sub-10ms P99", "Throughput: 150M auth/year", "Compliance: Full audit trail"],
  },
  {
    id: "scope",
    title: "2. Scope",
    description: "Define what we're building and what we're not",
    keyPoints: ["5 detection signals", "Real-time + async paths", "Evidence capture for disputes"],
  },
  {
    id: "data-model",
    title: "3. Data Model",
    description: "Derive entities and events from following the money",
    keyPoints: ["Entities: Card, Device, IP, User", "Events: Auth, Capture, Refund, Chargeback", "Features: Velocity, Aggregates, Historical"],
  },
  {
    id: "logic-policy",
    title: "4. Logic & Policy",
    description: "Separate scoring from deciding",
    keyPoints: ["ML scores: 0-1 confidence", "Policy: score → action", "A/B testing support"],
  },
  {
    id: "failure-modes",
    title: "5. Failure Modes",
    description: "Every component needs a fallback",
    keyPoints: ["Redis down → degraded mode", "Model timeout → rule backup", "Circuit breakers for safe mode"],
  },
  {
    id: "testing",
    title: "6. Testing",
    description: "Historical replay is the most critical test",
    keyPoints: ["Unit → Integration → E2E", "Historical replay testing", "Chaos engineering scenarios"],
  },
];

function ThinkingContent() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12">
        <div className="mx-auto max-w-[1330px] px-4 sm:px-6">
          <nav className="mb-4 flex items-center gap-2 text-sm">
            <Link
              href="/nebula"
              className="text-muted-foreground hover:text-foreground"
            >
              Nebula
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Fraud Detection Thinking</span>
          </nav>

          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Fraud Detection - Thinking Process
          </h1>
          <p className="mt-2 text-muted-foreground">
            Step-by-step derivation of design decisions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-[1330px] px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            {/* Sidebar */}
            <aside className="space-y-6">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Navigation
                </h3>
                <nav className="space-y-1">
                  <Link
                    href="/nebula"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <span>📋</span> Questions
                  </Link>
                  <Link
                    href="/nebula/capstone"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <span>🚀</span> Capstone Projects
                  </Link>
                  <Link
                    href="/nebula/thinking"
                    className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
                  >
                    <span>🛡️</span> Fraud Detection
                  </Link>
                </nav>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Sections
                </h3>
                <nav className="space-y-1 text-sm">
                  {thinkingSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-lg px-3 py-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <main className="space-y-8">
              {thinkingSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 rounded-xl border border-border bg-card p-6"
                >
                  <h2 className="mb-2 text-xl font-semibold text-foreground">
                    {section.title}
                  </h2>
                  <p className="mb-4 text-muted-foreground">
                    {section.description}
                  </p>
                  <div className="space-y-2">
                    {section.keyPoints.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
                <p className="text-muted-foreground">
                  Full thinking process documentation with step-by-step
                  derivations available at{" "}
                  <Link
                    href="/nebula/fraud-detection-thinking"
                    className="text-primary hover:underline"
                  >
                    Fraud Detection Thinking Process
                  </Link>
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ThinkingPage() {
  return (
    <AuthGate
      storageKey="cyrus_nebula_auth"
      title="Nebula"
      subtitle="Interview Preparation Hub"
    >
      <ThinkingContent />
    </AuthGate>
  );
}
