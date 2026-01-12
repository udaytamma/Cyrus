"use client";

/**
 * Section 6: Evaluation Strategy
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsEvaluation() {
  const nav = getTeleOpsNavigation("evaluation");

  return (
    <TeleOpsThinkingLayout
      title="Evaluation Strategy - TeleOps"
      description="Deterministic evaluation for baseline vs LLM"
      currentSection="evaluation"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          6
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Evaluation Strategy</h1>
        <p className="text-muted-foreground">Quantify improvement and capture evidence.</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Design Thinking
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          What Gets Measured
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">RCA accuracy:</strong> baseline vs LLM against ground truth.</li>
          <li><strong className="text-foreground">Time-to-first hypothesis:</strong> proxy for MTTR improvement.</li>
          <li><strong className="text-foreground">LLM latency:</strong> p50/p95 for demo usability.</li>
          <li><strong className="text-foreground">Safety:</strong> absence of unsafe remediation suggestions.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Why Deterministic Scenarios
        </h2>
        <div className="text-muted-foreground space-y-3">
          <p>Deterministic generators ensure evaluation is repeatable and explainable.</p>
          <p>Manual labels and rubric ensure credibility even without real data.</p>
        </div>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Why LLM Scores Lag Baseline
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Prompt generality:</strong> hypotheses are generic vs exact ground-truth strings.</li>
          <li><strong className="text-foreground">Corpus depth:</strong> minimal RAG content reduces specificity.</li>
          <li><strong className="text-foreground">Scoring strictness:</strong> paraphrases score lower than exact matches.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Planned Improvements
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>Scenario-specific runbooks to increase RAG grounding.</li>
          <li>Prompt slots for device, interface, symptom, and impact.</li>
          <li>Semantic similarity scoring for evaluation.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Trade-Offs and Risks
        </h2>
        <div className="text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">Trade-off:</strong> similarity scoring favors exact phrasing.
            Risk is under-crediting LLM paraphrases. Mitigation: add semantic scoring.
          </p>
          <p>
            <strong className="text-foreground">Trade-off:</strong> synthetic labels are not real operator truth.
            Mitigation: document limitations and add manual label sets.
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
