"use client";

/**
 * Nebula - Interview Preparation Hub
 *
 * Main landing page with navigation to:
 * - Interview section (Questions, Blindspots, Capstone Projects)
 * - Deep Dives (Fraud Detection Thinking/Design)
 * - Planning (Future Enhancements)
 */

import { useState } from "react";
import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";
import { scratchPadDocs } from "@/data/scratch-pad";

// Navigation sections with collapsible groups
const navSections = {
  interview: {
    title: "Interview",
    icon: "🎯",
    items: [
      { href: "/nebula/questions", label: "Questions", icon: "📋", description: "67 curated interview Q&A" },
      { href: "/nebula/blindspots", label: "Blindspots", icon: "🎯", description: "Deep technical prep" },
      { href: "/nebula/capstone-projects", label: "Capstone Projects", icon: "🚀", description: "Portfolio projects by LLM" },
    ],
  },
  deepDives: {
    title: "Deep Dives",
    icon: "🔬",
    items: [
      { href: "/nebula/fraud-detection-thinking", label: "Fraud Detection - Thinking", icon: "🧠", description: "System design thought process" },
      { href: "/nebula/fraud-detection-design", label: "Fraud Detection - Design", icon: "📋", description: "Technical design docs" },
    ],
  },
  planning: {
    title: "Planning",
    icon: "📝",
    items: [
      { href: "/nebula/future-enhancements", label: "Future Enhancements", icon: "📝", description: "Task backlog" },
    ],
  },
  resources: {
    title: "Resources",
    icon: "📚",
    items: [
      { href: "/nebula/scratch-pad", label: "Scratch Pad", icon: "📄", description: "LLM conversation notes" },
    ],
  },
};

// Stats for the hub
const stats = {
  questions: 67,
  topics: 12,
  capstoneProjects: 20,
  blindspots: 25,
};

function CollapsibleSection({
  title,
  icon,
  items,
  defaultOpen = false,
}: {
  title: string;
  icon: string;
  items: { href: string; label: string; icon: string; description: string }[];
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="font-semibold text-foreground">{title}</span>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            {items.length}
          </span>
        </div>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="border-t border-border">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0"
            >
              <span className="text-lg mt-0.5">{item.icon}</span>
              <div>
                <div className="font-medium text-foreground">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NebulaContent() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="15" opacity="0.9" />
                <circle cx="50" cy="50" r="25" opacity="0.5" />
                <circle cx="50" cy="50" r="35" opacity="0.3" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Nebula</h1>
              <p className="text-muted-foreground">Interview Preparation Hub</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-lg bg-card border border-border p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.questions}</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="rounded-lg bg-card border border-border p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.topics}</div>
              <div className="text-sm text-muted-foreground">Topics</div>
            </div>
            <div className="rounded-lg bg-card border border-border p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.capstoneProjects}</div>
              <div className="text-sm text-muted-foreground">Capstone Projects</div>
            </div>
            <div className="rounded-lg bg-card border border-border p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.blindspots}</div>
              <div className="text-sm text-muted-foreground">Blindspots</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sections */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-4">
          <CollapsibleSection
            title={navSections.interview.title}
            icon={navSections.interview.icon}
            items={navSections.interview.items}
            defaultOpen={true}
          />
          <CollapsibleSection
            title={navSections.deepDives.title}
            icon={navSections.deepDives.icon}
            items={navSections.deepDives.items}
            defaultOpen={false}
          />
          <CollapsibleSection
            title={navSections.planning.title}
            icon={navSections.planning.icon}
            items={navSections.planning.items}
            defaultOpen={false}
          />
          <CollapsibleSection
            title={navSections.resources.title}
            icon={navSections.resources.icon}
            items={navSections.resources.items}
            defaultOpen={false}
          />
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-8 sm:py-12 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Quick Access</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/nebula/questions"
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Interview Questions
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {stats.questions} questions across {stats.topics} topics
              </p>
            </Link>

            <Link
              href="/nebula/blindspots"
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Blindspots
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Deep technical questions based on projects
              </p>
            </Link>

            <Link
              href="/nebula/capstone-projects"
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Capstone Projects
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {stats.capstoneProjects} portfolio projects by LLM source
              </p>
            </Link>

            <Link
              href="/nebula/fraud-detection-thinking"
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Fraud Detection
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Complete system design walkthrough
              </p>
            </Link>

            <Link
              href="/nebula/capstone-projects/selected"
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Selected Portfolio
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Top 5 projects for interviews
              </p>
            </Link>

            <Link
              href="/nebula/capstone-projects/wip"
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="text-3xl mb-3">🚧</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                WIP Projects
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Work in progress implementations
              </p>
            </Link>

            <Link
              href="/nebula/scratch-pad"
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Scratch Pad
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {scratchPadDocs.length} LLM conversation notes
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Info */}
      <section className="py-8 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Target: Sr TPM / PM / Ops Manager at Google, Meta, Apple, Amazon, Microsoft, Netflix, Nvidia
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            17 years IT experience | Technical leadership focus
          </p>
        </div>
      </section>
    </div>
  );
}

export default function NebulaPage() {
  return (
    <AuthGate storageKey="cyrus_nebula_auth" title="Nebula" subtitle="Interview Preparation Hub">
      <NebulaContent />
    </AuthGate>
  );
}
