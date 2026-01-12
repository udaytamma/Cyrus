"use client";

/**
 * Section 4: Data Model
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsDataModel() {
  const nav = getTeleOpsNavigation("data-model");

  return (
    <TeleOpsThinkingLayout
      title="Data Model - TeleOps"
      description="Entities that preserve traceability and evaluation"
      currentSection="data-model"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          4
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Data Model</h1>
        <p className="text-muted-foreground">Model what the operator needs to trust the RCA.</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Design Thinking
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Core Entities
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Alert:</strong> raw signal with tags and payload.</li>
          <li><strong className="text-foreground">Incident:</strong> correlated alert set + summary.</li>
          <li><strong className="text-foreground">RCAArtifact:</strong> hypotheses, evidence, confidence, model.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Design Decisions
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">JSON fields:</strong> capture flexible evidence without schema churn.</li>
          <li><strong className="text-foreground">Incident linkage:</strong> store alert IDs for auditability.</li>
          <li><strong className="text-foreground">Ground truth:</strong> generated alongside scenarios for evaluation.</li>
        </ul>
      </div>

      <div className="flex justify-between items-center mt-10 text-sm">
        {nav.prev ? <Link href={nav.prev.path} className="text-muted-foreground hover:text-primary">← {nav.prev.title}</Link> : <span />}
        {nav.next ? <Link href={nav.next.path} className="text-muted-foreground hover:text-primary">{nav.next.title} →</Link> : <span />}
      </div>
    </TeleOpsThinkingLayout>
  );
}
