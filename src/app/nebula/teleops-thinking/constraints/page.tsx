"use client";

/**
 * Section 1: Constraints First
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsConstraints() {
  const nav = getTeleOpsNavigation("constraints");

  return (
    <TeleOpsThinkingLayout
      title="Constraints First - TeleOps"
      description="Non-negotiables that shape TeleOps architecture and scope"
      currentSection="constraints"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          1
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Constraints First</h1>
        <p className="text-muted-foreground">Define the guardrails before picking architecture.</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Design Thinking
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Thinking Process
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            TeleOps is a demo system with production intent. Constraints should remove high-risk choices early:
            latency, operator trust, evaluation credibility, and local-only operation.
          </p>
          <ul className="space-y-2">
            <li><strong className="text-foreground">Latency:</strong> keep RCA under demo-friendly thresholds.</li>
            <li><strong className="text-foreground">Credibility:</strong> deterministic scenarios and repeatable evaluation.</li>
            <li><strong className="text-foreground">No PII:</strong> synthetic data only to avoid compliance risk.</li>
            <li><strong className="text-foreground">Cost:</strong> local-first with optional hosted LLM.</li>
          </ul>
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Decision Context
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            This is a capstone: time-boxed, single-contributor, and demo-heavy. Constraints tilt decisions toward
            a FastAPI monolith, Streamlit UI, and synthetic data.
          </p>
        </div>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Key Trade-Offs
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Synthetic data vs real feeds:</strong> repeatability over realism.</li>
          <li><strong className="text-foreground">Local LLM vs hosted:</strong> stable cost vs higher accuracy.</li>
          <li><strong className="text-foreground">Monolith vs microservices:</strong> shipping speed over isolation.</li>
        </ul>
      </div>

      <div className="flex justify-between items-center mt-10 text-sm">
        {nav.prev ? <Link href={nav.prev.path} className="text-muted-foreground hover:text-primary">← {nav.prev.title}</Link> : <span />}
        {nav.next ? <Link href={nav.next.path} className="text-muted-foreground hover:text-primary">{nav.next.title} →</Link> : <span />}
      </div>
    </TeleOpsThinkingLayout>
  );
}
