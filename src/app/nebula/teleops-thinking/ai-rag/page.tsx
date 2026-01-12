"use client";

/**
 * Section 5: AI + RAG Pipeline
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsAiRag() {
  const nav = getTeleOpsNavigation("ai-rag");

  return (
    <TeleOpsThinkingLayout
      title="AI + RAG Pipeline - TeleOps"
      description="Why structured outputs and RAG provenance matter"
      currentSection="ai-rag"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-teal-500/10 to-transparent rounded-xl border border-teal-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          5
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">AI + RAG Pipeline</h1>
        <p className="text-muted-foreground">Make LLM output auditable and parseable.</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Design Thinking
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Pipeline Decisions
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">JSON-only outputs:</strong> enforce schema for reliability.</li>
          <li><strong className="text-foreground">RAG citations:</strong> show provenance for operator trust.</li>
          <li><strong className="text-foreground">Baseline fallback:</strong> deterministic RCA if LLM fails.</li>
          <li><strong className="text-foreground">Adapter pattern:</strong> swap Gemini vs local LLM without app changes.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Trade-Offs and Risks
        </h2>
        <div className="text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">Smaller models:</strong> improve latency; risk is weaker specificity.
            Mitigation: add scenario-specific RAG content and structured prompt slots.
          </p>
          <p>
            <strong className="text-foreground">Minimal corpus:</strong> reduces setup time; risk is shallow evidence.
            Mitigation: add curated runbooks per scenario.
          </p>
          <p>
            <strong className="text-foreground">Strict JSON output:</strong> improves parsing; risk is less nuanced text.
            Mitigation: allow multiple hypotheses with confidence.
          </p>
        </div>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Design Thinking
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 text-sm">
        {nav.prev ? <Link href={nav.prev.path} className="text-muted-foreground hover:text-primary">← {nav.prev.title}</Link> : <span />}
        {nav.next ? <Link href={nav.next.path} className="text-muted-foreground hover:text-primary">{nav.next.title} →</Link> : <span />}
      </div>
    </TeleOpsThinkingLayout>
  );
}
