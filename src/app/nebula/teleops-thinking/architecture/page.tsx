"use client";

/**
 * Section 3: System Architecture
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsArchitecture() {
  const nav = getTeleOpsNavigation("architecture");

  return (
    <TeleOpsThinkingLayout
      title="System Architecture - TeleOps"
      description="Why the monolith + plane separation was chosen"
      currentSection="architecture"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl border border-yellow-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          3
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">System Architecture</h1>
        <p className="text-muted-foreground">Define planes to keep complexity manageable.</p>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Architecture Decision
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Use a FastAPI monolith with plane separation to ship quickly while keeping the mental model clean.
          </p>
          <ul className="space-y-2">
            <li><strong className="text-foreground">Data plane:</strong> generators, alerts, incidents.</li>
            <li><strong className="text-foreground">AI plane:</strong> RAG index, LLM adapters, RCA.</li>
            <li><strong className="text-foreground">Control plane:</strong> API orchestration.</li>
            <li><strong className="text-foreground">Presentation plane:</strong> Streamlit consoles.</li>
          </ul>
        </div>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Decisions and Considerations
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Monolith chosen:</strong> reduce integration tax for a solo build.</li>
          <li><strong className="text-foreground">SQLite chosen:</strong> minimize infra dependencies for local runs.</li>
          <li><strong className="text-foreground">Streamlit chosen:</strong> accelerate UI iteration and demo reliability.</li>
          <li><strong className="text-foreground">Plane separation:</strong> preserve future refactor to services.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Trade-Offs and Risks
        </h2>
        <div className="text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">Monolith:</strong> risk of tangled dependencies. Mitigation: clear module boundaries.
          </p>
          <p>
            <strong className="text-foreground">SQLite:</strong> risk of concurrency limits. Mitigation: documented path to Postgres.
          </p>
          <p>
            <strong className="text-foreground">Streamlit:</strong> risk of UI limitations. Mitigation: focus on ops-grade clarity.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 text-sm">
        {nav.prev ? <Link href={nav.prev.path} className="text-muted-foreground hover:text-primary">← {nav.prev.title}</Link> : <span />}
        {nav.next ? <Link href={nav.next.path} className="text-muted-foreground hover:text-primary">{nav.next.title} →</Link> : <span />}
      </div>
    </TeleOpsThinkingLayout>
  );
}
