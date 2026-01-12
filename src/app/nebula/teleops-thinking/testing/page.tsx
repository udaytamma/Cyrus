"use client";

/**
 * Section 8: Testing & Validation
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsTesting() {
  const nav = getTeleOpsNavigation("testing");

  return (
    <TeleOpsThinkingLayout
      title="Testing & Validation - TeleOps"
      description="Coverage, pass rate, and observability requirements"
      currentSection="testing"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          8
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Testing & Validation</h1>
        <p className="text-muted-foreground">Proof that the system is stable and measurable.</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Design Thinking
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Validation Targets
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Coverage:</strong> 80%+ minimum target.</li>
          <li><strong className="text-foreground">Pass rate:</strong> 90%+ target; current runs are 100%.</li>
          <li><strong className="text-foreground">Observability:</strong> tests and eval results surface in dashboard.</li>
          <li><strong className="text-foreground">LLM parsing:</strong> JSON output parse success requirement.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Why It Matters
        </h2>
        <p className="text-muted-foreground">
          For a capstone, reliability equals credibility. A deterministic test suite and visible KPIs are
          the fastest way to earn trust in demo settings.
        </p>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Trade-Offs and Risks
        </h2>
        <div className="text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">Trade-off:</strong> test coverage vs velocity. Mitigation: focused tests on
            pipeline-critical components.
          </p>
          <p>
            <strong className="text-foreground">Trade-off:</strong> fast tests vs realistic LLM/RAG calls.
            Mitigation: mock most runs; run full LLM eval on demand.
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
