"use client";

/**
 * FD Redundant Pages - Archive
 *
 * Fraud Detection documentation pages removed from the public docs nav
 * for being redundant, but preserved here in Nebula for reference.
 */

import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";

const archivedPages = [
  {
    href: "/nebula/fd-redundant-pages/full-design-document",
    title: "Full Design Document",
    description:
      "Table of contents page duplicating the structure of the other 10 doc pages. Preserved for reference.",
    reason: "Pure TOC duplication -- all content lives in dedicated pages.",
  },
];

function ArchivedPageCard({
  href,
  title,
  description,
  reason,
}: {
  href: string;
  title: string;
  description: string;
  reason: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
    >
      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
        Archived: {reason}
      </p>
    </Link>
  );
}

function FDRedundantPagesContent() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/nebula"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to Nebula
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            FD Redundant Pages
          </h1>
          <p className="mt-2 text-muted-foreground">
            Fraud Detection documentation pages archived from the public docs
            navigation. These pages contained redundant or duplicated content
            that is better served by the dedicated doc pages.
          </p>
        </div>

        {/* Archived pages grid */}
        <div className="grid gap-4">
          {archivedPages.map((page) => (
            <ArchivedPageCard key={page.href} {...page} />
          ))}
        </div>

        {/* Context note */}
        <div className="mt-8 rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            The public documentation lives at{" "}
            <Link
              href="/docs/fraud-platform"
              className="text-primary underline hover:text-primary/80"
            >
              /docs/fraud-platform
            </Link>{" "}
            with 10 focused pages covering executive overview, architecture, API
            reference, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FDRedundantPagesPage() {
  return (
    <AuthGate
      storageKey="cyrus_nebula_auth"
      title="Nebula"
      subtitle="FD Archived Pages"
    >
      <FDRedundantPagesContent />
    </AuthGate>
  );
}
