"use client";

/**
 * Section 9: Checklist
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsChecklist() {
  const nav = getTeleOpsNavigation("checklist");

  return (
    <TeleOpsThinkingLayout
      title="Checklist - TeleOps"
      description="Go/no-go criteria for demos and releases"
      currentSection="checklist"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-pink-500/10 to-transparent rounded-xl border border-pink-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-pink-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          9
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Checklist</h1>
        <p className="text-muted-foreground">What must be true before you demo or ship.</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Design Thinking
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Demo Readiness
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>Scenario generation works for at least 3 scenario types.</li>
          <li>Baseline and LLM RCA run without errors.</li>
          <li>Observability dashboard shows KPIs and test results.</li>
          <li>Evaluation results are written to storage.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Release Signals
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>Coverage target met.</li>
          <li>Pass rate exceeds target.</li>
          <li>LLM output parses as JSON 100% in test runs.</li>
          <li>Access control stub documented for write endpoints.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Hiring Manager Readiness
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li>Explain why synthetic data was chosen and how it impacts credibility.</li>
          <li>Defend the monolith choice and outline the refactor path.</li>
          <li>Describe how LLM failures are handled and why baseline exists.</li>
          <li>Explain how evaluation metrics map to MTTR and operator trust.</li>
        </ul>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Design Thinking
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 text-sm">
        {nav.prev ? <Link href={nav.prev.path} className="text-muted-foreground hover:text-primary">← {nav.prev.title}</Link> : <span />}
        {nav.next ? <span /> : <span />}
      </div>
    </TeleOpsThinkingLayout>
  );
}
