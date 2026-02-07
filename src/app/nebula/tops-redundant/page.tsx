"use client";

/**
 * TOps Redundant Pages - Overview
 * Archive section for TeleOps pages that overlap with other sections
 */

import Link from "next/link";
import { TOpsRedundantLayout } from "@/components/TOpsRedundantLayout";

const archivedPages = [
  {
    number: "1",
    title: "Design Rationale",
    description: "Comprehensive parameter rationale document. Content overlaps with Architecture, Evaluation, and Testing sections.",
    path: "/nebula/tops-redundant/design-rationale",
    color: "cyan",
    lines: "~960 lines",
  },
];

const colorClasses: Record<string, { bg: string; border: string; badge: string }> = {
  cyan: { bg: "bg-gradient-to-r from-cyan-500/5 to-transparent", border: "border-cyan-500/30", badge: "bg-cyan-500" },
  gray: { bg: "bg-gradient-to-r from-gray-500/5 to-transparent", border: "border-gray-500/30", badge: "bg-gray-500" },
};

export default function TOpsRedundantIndex() {
  return (
    <TOpsRedundantLayout
      title="TOps Redundant Pages"
      description="Archived TeleOps documentation for reference"
      currentSection="index"
    >
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-gray-500/10 to-transparent rounded-xl border border-gray-500/30 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-gray-500/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">📦</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">TOps Redundant Pages</h1>
        <p className="text-muted-foreground">
          Archived TeleOps documentation preserved for reference
        </p>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Why This Section Exists
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            During a TeleOps documentation review, several pages were identified as containing
            <strong className="text-foreground"> significant content overlap</strong> with other sections.
          </p>
          <p>
            Rather than deleting valuable content, these pages have been moved here for reference.
            The main <Link href="/nebula/teleops-thinking" className="text-primary hover:underline">TeleOps Thinking</Link> section
            now contains focused, non-redundant documentation.
          </p>
        </div>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </span>
          Archived Pages
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {archivedPages.map((page) => {
            const colors = colorClasses[page.color];
            return (
              <Link
                key={page.number}
                href={page.path}
                className={`group block p-4 ${colors.bg} rounded-lg border ${colors.border} hover:shadow-md transition-all`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-8 h-8 rounded-full ${colors.badge} text-white flex items-center justify-center text-sm font-bold`}>
                    {page.number}
                  </span>
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {page.title}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {page.lines}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {page.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Overlap Summary
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Archived Page</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Overlaps With</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Overlap Type</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">Design Rationale</td>
                <td className="py-2 px-3">Evaluation Strategy</td>
                <td className="py-2 px-3">~80% metric content identical</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">Design Rationale</td>
                <td className="py-2 px-3">Testing & Validation</td>
                <td className="py-2 px-3">Same 11 patterns explained</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">Design Rationale</td>
                <td className="py-2 px-3">Architecture</td>
                <td className="py-2 px-3">Component decisions duplicated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground">
        <strong className="text-foreground">Note:</strong> These pages are preserved for historical reference.
        For the current, streamlined TeleOps documentation, visit the{" "}
        <Link href="/nebula/teleops-thinking" className="text-primary hover:underline">
          TeleOps Thinking Process
        </Link>{" "}
        section.
      </div>
    </TOpsRedundantLayout>
  );
}
