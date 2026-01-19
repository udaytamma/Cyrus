"use client";

/**
 * Scratch Pad - LLM Document Archive
 *
 * Lists all documents synced from /Users/omega/Documents/Job Search/LLM Suggestions/
 * Documents are automatically synced during build via scripts/sync-scratch-pad.js
 */

import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";
import { scratchPadDocs } from "@/data/scratch-pad";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ScratchPadContent() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Scratch Pad
              </h1>
              <p className="text-muted-foreground">
                LLM conversation notes and insights
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 flex gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {scratchPadDocs.length}
              </div>
              <div className="text-sm text-muted-foreground">Documents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Document List */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="space-y-4">
            {scratchPadDocs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/nebula/scratch-pad/${doc.slug}`}
                className="block rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-primary truncate">
                      {doc.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatDate(doc.date)}
                    </p>
                  </div>
                  <svg
                    className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {scratchPadDocs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No documents found.</p>
              <p className="text-sm text-muted-foreground mt-2">
                Add markdown files to the source folder and run{" "}
                <code className="bg-muted px-2 py-1 rounded">
                  npm run sync:scratch-pad
                </code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Back Link */}
      <section className="py-4 border-t border-border">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Link
            href="/nebula"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; Back to Nebula
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function ScratchPadPage() {
  return (
    <AuthGate
      storageKey="cyrus_nebula_auth"
      title="Scratch Pad"
      subtitle="LLM Document Archive"
    >
      <ScratchPadContent />
    </AuthGate>
  );
}
