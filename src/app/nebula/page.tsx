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
    color: "blue",
    items: [
      { href: "/nebula/questions", label: "Questions", icon: "📋", description: "67 curated interview Q&A" },
      { href: "/nebula/blindspots", label: "Blindspots", icon: "🎯", description: "Deep technical prep" },
      { href: "/nebula/capstone", label: "Capstone Projects", icon: "🚀", description: "Portfolio projects by LLM" },
    ],
  },
  deepDives: {
    title: "Deep Dives",
    icon: "🔬",
    color: "purple",
    items: [
      { href: "/nebula/fraud-detection-thinking", label: "Fraud Detection - Thinking", icon: "🧠", description: "System design thought process" },
      { href: "/nebula/fraud-detection-design", label: "Fraud Detection - Design", icon: "📋", description: "Technical design docs" },
    ],
  },
  planning: {
    title: "Planning",
    icon: "📝",
    color: "amber",
    items: [
      { href: "/nebula/tasks", label: "Task Board", icon: "📋", description: "Weekly & backlog tasks" },
    ],
  },
  resources: {
    title: "Resources",
    icon: "📚",
    color: "green",
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

// Color mappings for sections
const sectionColors: Record<string, { gradient: string; border: string; badge: string }> = {
  blue: {
    gradient: "bg-gradient-to-r from-blue-500/5 to-transparent",
    border: "border-blue-500/30",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  purple: {
    gradient: "bg-gradient-to-r from-purple-500/5 to-transparent",
    border: "border-purple-500/30",
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  amber: {
    gradient: "bg-gradient-to-r from-amber-500/5 to-transparent",
    border: "border-amber-500/30",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  green: {
    gradient: "bg-gradient-to-r from-green-500/5 to-transparent",
    border: "border-green-500/30",
    badge: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
};

function CollapsibleSection({
  title,
  icon,
  color,
  items,
  defaultOpen = false,
}: {
  title: string;
  icon: string;
  color: string;
  items: { href: string; label: string; icon: string; description: string }[];
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const colorStyle = sectionColors[color];

  return (
    <div className={`rounded-xl border ${colorStyle.border} ${colorStyle.gradient} overflow-hidden`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="font-semibold text-foreground">{title}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${colorStyle.badge}`}>
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
        <div className="border-t border-border/50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors border-b border-border/30 last:border-b-0"
            >
              <span className="text-lg mt-0.5">{item.icon}</span>
              <div>
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">{item.label}</div>
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
            <div className="rounded-lg bg-gradient-to-r from-blue-500/5 to-transparent border border-blue-500/30 p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.questions}</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-green-500/5 to-transparent border border-green-500/30 p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.topics}</div>
              <div className="text-sm text-muted-foreground">Topics</div>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/30 p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.capstoneProjects}</div>
              <div className="text-sm text-muted-foreground">Capstone Projects</div>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-amber-500/5 to-transparent border border-amber-500/30 p-4 text-center">
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
            title={navSections.planning.title}
            icon={navSections.planning.icon}
            color={navSections.planning.color}
            items={navSections.planning.items}
            defaultOpen={true}
          />
          <CollapsibleSection
            title={navSections.interview.title}
            icon={navSections.interview.icon}
            color={navSections.interview.color}
            items={navSections.interview.items}
            defaultOpen={false}
          />
          <CollapsibleSection
            title={navSections.deepDives.title}
            icon={navSections.deepDives.icon}
            color={navSections.deepDives.color}
            items={navSections.deepDives.items}
            defaultOpen={false}
          />
          <CollapsibleSection
            title={navSections.resources.title}
            icon={navSections.resources.icon}
            color={navSections.resources.color}
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
              className="group rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-500/5 to-transparent p-6 hover:border-primary/50 transition-colors"
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
              className="group rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/5 to-transparent p-6 hover:border-primary/50 transition-colors"
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
              href="/nebula/capstone"
              className="group rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/5 to-transparent p-6 hover:border-primary/50 transition-colors"
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
              className="group rounded-xl border border-pink-500/30 bg-gradient-to-r from-pink-500/5 to-transparent p-6 hover:border-primary/50 transition-colors"
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
              href="/nebula/capstone/selected"
              className="group rounded-xl border border-green-500/30 bg-gradient-to-r from-green-500/5 to-transparent p-6 hover:border-primary/50 transition-colors"
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
              href="/nebula/capstone/wip"
              className="group rounded-xl border border-orange-500/30 bg-gradient-to-r from-orange-500/5 to-transparent p-6 hover:border-primary/50 transition-colors"
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
              className="group rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/5 to-transparent p-6 hover:border-primary/50 transition-colors"
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
