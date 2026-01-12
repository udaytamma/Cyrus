"use client";

/**
 * Section 2: Scope Definition
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsScope() {
  const nav = getTeleOpsNavigation("scope");

  return (
    <TeleOpsThinkingLayout
      title="Scope Definition - TeleOps"
      description="Define what ships in the MVP and what is deferred"
      currentSection="scope"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl border border-orange-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          2
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Scope Definition</h1>
        <p className="text-muted-foreground">Ship a complete end-to-end flow before expanding.</p>
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
            Scope is about finishing the end-to-end story: alerts → incidents → RCA → metrics. Everything else
            is explicitly deferred.
          </p>
          <ul className="space-y-2">
            <li><strong className="text-foreground">In scope:</strong> synthetic scenarios, correlation, RCA, UI, evaluation.</li>
            <li><strong className="text-foreground">Deferred:</strong> ServiceNow/Jira production integrations, HA/DR, live feeds.</li>
            <li><strong className="text-foreground">Hooks kept:</strong> API adapters, audit logs, and metrics endpoints.</li>
          </ul>
        </div>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Decisions and Trade-Offs
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Scenario catalog first:</strong> expand coverage before real data.</li>
          <li><strong className="text-foreground">Observability:</strong> KPIs visible even in demo mode.</li>
          <li><strong className="text-foreground">Evaluation:</strong> manual labels + scripted runs for credibility.</li>
        </ul>
      </div>

      <div className="flex justify-between items-center mt-10 text-sm">
        {nav.prev ? <Link href={nav.prev.path} className="text-muted-foreground hover:text-primary">← {nav.prev.title}</Link> : <span />}
        {nav.next ? <Link href={nav.next.path} className="text-muted-foreground hover:text-primary">{nav.next.title} →</Link> : <span />}
      </div>
    </TeleOpsThinkingLayout>
  );
}
