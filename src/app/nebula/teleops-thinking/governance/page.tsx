"use client";

/**
 * Section 7: Governance & Safety
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsGovernance() {
  const nav = getTeleOpsNavigation("governance");

  return (
    <TeleOpsThinkingLayout
      title="Governance & Safety - TeleOps"
      description="Human approval, audit logs, and risk labeling"
      currentSection="governance"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-xl border border-indigo-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          7
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Governance & Safety</h1>
        <p className="text-muted-foreground">Operators stay in control of remediation.</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Design Thinking
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Governance Principles
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Human-in-the-loop:</strong> remediation requires approval.</li>
          <li><strong className="text-foreground">Audit trail:</strong> store LLM requests and responses.</li>
          <li><strong className="text-foreground">Risk labeling:</strong> show confidence and risk explicitly.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Access Control Stub
        </h2>
        <p className="text-muted-foreground">
          The demo includes an optional API token gate for write and metrics endpoints. It signals how RBAC
          would be enforced in production without adding heavy auth dependencies to the MVP.
        </p>
      </div>

      <div className="flex justify-between items-center mt-10 text-sm">
        {nav.prev ? <Link href={nav.prev.path} className="text-muted-foreground hover:text-primary">← {nav.prev.title}</Link> : <span />}
        {nav.next ? <Link href={nav.next.path} className="text-muted-foreground hover:text-primary">{nav.next.title} →</Link> : <span />}
      </div>
    </TeleOpsThinkingLayout>
  );
}
