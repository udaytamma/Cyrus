"use client";

import { useState } from "react";
import Link from "next/link";

// ============================================================================
// DATA - Extracted and analyzed from Journey entries
// ============================================================================

interface Milestone {
  date: string;
  title: string;
  category: "launch" | "architecture" | "ai" | "ux" | "documentation";
  impact: "high" | "medium";
  description: string;
}

interface WeekData {
  week: number;
  startDate: string;
  endDate: string;
  entries: number;
  focus: string[];
  highlights: string[];
}

interface SkillProgression {
  skill: string;
  category: string;
  firstMention: string;
  depth: "introduced" | "applied" | "mastered";
  usageCount: number;
}

// Major milestones extracted from journey
const milestones: Milestone[] = [
  {
    date: "2025-12-22",
    title: "IngredientScanner Genesis",
    category: "launch",
    impact: "high",
    description: "Built complete multi-agent LLM system from scratch: FastAPI, LangGraph, Qdrant, React Native",
  },
  {
    date: "2025-12-25",
    title: "Production-Grade Observability",
    category: "architecture",
    impact: "high",
    description: "Firebase Auth, LangSmith tracing, load testing infrastructure - enterprise patterns",
  },
  {
    date: "2025-12-27",
    title: "MindGames Launch",
    category: "launch",
    impact: "medium",
    description: "Mental math app with 63 tests at 100% pass rate, Cloudflare Pages deployment",
  },
  {
    date: "2025-12-31",
    title: "Principal TPM Documentation",
    category: "documentation",
    impact: "high",
    description: "5-part design document for Fraud Detection Platform at principal engineer level",
  },
  {
    date: "2026-01-07",
    title: "Cyrus Portfolio Launch",
    category: "launch",
    impact: "high",
    description: "Next.js 16 portfolio site deployed to Cloudflare Pages, replacing Docusaurus",
  },
  {
    date: "2026-01-10",
    title: "Nebula Task Board + Doc System",
    category: "ux",
    impact: "high",
    description: "Kanban board with Firebase sync, 8 reusable doc components, 92 files upgraded",
  },
  {
    date: "2026-01-17",
    title: "AI Assistant Launch",
    category: "ai",
    impact: "high",
    description: "Gemini 3 Flash powered chat via Cloudflare Worker with global floating button",
  },
  {
    date: "2026-01-21",
    title: "Knowledge Base Restructure",
    category: "documentation",
    impact: "high",
    description: "3-part organization with 25+ Mermaid diagrams at Principal TPM level",
  },
  {
    date: "2026-01-25",
    title: "RAG-Powered Lexicon",
    category: "ai",
    impact: "medium",
    description: "Batch processing 80 KB docs with Gemini, 400 terms extracted, mini-map navigation",
  },
  {
    date: "2026-01-28",
    title: "Interview-Ready Content",
    category: "documentation",
    impact: "high",
    description: "Company exemplars (Google, Meta, Netflix), CADE stories, interview scripts",
  },
];

// Weekly progression data
const weeklyData: WeekData[] = [
  {
    week: 1,
    startDate: "2025-12-22",
    endDate: "2025-12-28",
    entries: 5,
    focus: ["Foundation", "Multi-Agent AI", "Mobile Development"],
    highlights: [
      "IngredientScanner: Full-stack AI system",
      "Firebase Auth + LangSmith observability",
      "MindGames: 63 tests, 100% pass rate",
    ],
  },
  {
    week: 2,
    startDate: "2025-12-29",
    endDate: "2026-01-04",
    entries: 5,
    focus: ["Documentation", "Design Docs", "Fraud Detection"],
    highlights: [
      "20 Nebula capstone project pages",
      "5-part Principal TPM design docs",
      "Fraud Detection thinking process",
    ],
  },
  {
    week: 3,
    startDate: "2026-01-05",
    endDate: "2026-01-11",
    entries: 5,
    focus: ["Portfolio Launch", "Component System", "TeleOps"],
    highlights: [
      "Cyrus portfolio site launched",
      "8 reusable doc components",
      "TeleOps code quality overhaul",
    ],
  },
  {
    week: 4,
    startDate: "2026-01-12",
    endDate: "2026-01-18",
    entries: 5,
    focus: ["System Design", "AI Chat", "Professor Gemini"],
    highlights: [
      "AI Assistant with Gemini 3 Flash",
      "System Design page splitting",
      "Professor Gemini enhancements",
    ],
  },
  {
    week: 5,
    startDate: "2026-01-19",
    endDate: "2026-01-25",
    entries: 5,
    focus: ["Knowledge Base", "Mermaid Diagrams", "RAG"],
    highlights: [
      "18 deep dive documents",
      "3-part KB restructure",
      "Batch lexicon generation",
    ],
  },
  {
    week: 6,
    startDate: "2026-01-26",
    endDate: "2026-01-30",
    entries: 4,
    focus: ["Interview Prep", "Quality Assurance", "Notifications"],
    highlights: [
      "Company exemplars + CADE stories",
      "Line-by-line TPM quality review",
      "Notification Platform design",
    ],
  },
];

// Skill progression tracking
const skillProgressions: SkillProgression[] = [
  { skill: "LangGraph", category: "AI/ML", firstMention: "2025-12-22", depth: "mastered", usageCount: 8 },
  { skill: "Next.js", category: "Frontend", firstMention: "2025-12-27", depth: "mastered", usageCount: 12 },
  { skill: "Mermaid Diagrams", category: "Documentation", firstMention: "2026-01-10", depth: "mastered", usageCount: 15 },
  { skill: "Cloudflare Workers", category: "Infrastructure", firstMention: "2026-01-17", depth: "applied", usageCount: 4 },
  { skill: "Firebase", category: "Backend", firstMention: "2025-12-25", depth: "applied", usageCount: 6 },
  { skill: "Qdrant", category: "AI/ML", firstMention: "2025-12-22", depth: "applied", usageCount: 5 },
  { skill: "RAG Pipeline", category: "AI/ML", firstMention: "2026-01-11", depth: "mastered", usageCount: 7 },
  { skill: "FastAPI", category: "Backend", firstMention: "2025-12-22", depth: "mastered", usageCount: 9 },
  { skill: "Streamlit", category: "Frontend", firstMention: "2025-12-22", depth: "applied", usageCount: 6 },
  { skill: "Gemini API", category: "AI/ML", firstMention: "2025-12-22", depth: "mastered", usageCount: 14 },
];

// Technology usage frequency
const techFrequency: { tech: string; count: number; category: string }[] = [
  { tech: "Python", count: 18, category: "Language" },
  { tech: "TypeScript", count: 16, category: "Language" },
  { tech: "Next.js", count: 12, category: "Framework" },
  { tech: "Gemini", count: 14, category: "AI" },
  { tech: "FastAPI", count: 9, category: "Framework" },
  { tech: "Tailwind CSS", count: 11, category: "Styling" },
  { tech: "Mermaid", count: 15, category: "Documentation" },
  { tech: "Firebase", count: 6, category: "Infrastructure" },
  { tech: "Cloudflare", count: 5, category: "Infrastructure" },
  { tech: "Qdrant", count: 5, category: "AI" },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function StatCard({ label, value, sublabel }: { label: string; value: string | number; sublabel?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
      <div className="text-3xl font-bold text-primary sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm font-medium text-foreground">{label}</div>
      {sublabel && <div className="text-xs text-muted-foreground">{sublabel}</div>}
    </div>
  );
}

function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  const categoryColors: Record<string, string> = {
    launch: "bg-emerald-500",
    architecture: "bg-blue-500",
    ai: "bg-purple-500",
    ux: "bg-amber-500",
    documentation: "bg-rose-500",
  };

  const categoryLabels: Record<string, string> = {
    launch: "Launch",
    architecture: "Architecture",
    ai: "AI/ML",
    ux: "UX",
    documentation: "Docs",
  };

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-6">
        {milestones.map((m, i) => (
          <div key={i} className="relative pl-10">
            {/* Dot */}
            <div className={`absolute left-1 top-1.5 h-5 w-5 rounded-full ${categoryColors[m.category]} ring-4 ring-background`} />

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium text-white ${categoryColors[m.category]}`}>
                  {categoryLabels[m.category]}
                </span>
                <span className="text-xs text-muted-foreground">
                  {new Date(m.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                {m.impact === "high" && (
                  <span className="inline-block rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                    High Impact
                  </span>
                )}
              </div>
              <h4 className="font-semibold text-foreground">{m.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeeklyProgressChart({ weeks }: { weeks: WeekData[] }) {
  const maxEntries = Math.max(...weeks.map(w => w.entries));

  return (
    <div className="space-y-4">
      {weeks.map((week, i) => (
        <div key={i} className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-semibold text-foreground">Week {week.week}</span>
              <span className="ml-2 text-xs text-muted-foreground">
                {new Date(week.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })} - {new Date(week.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>
            <span className="text-sm font-medium text-primary">{week.entries} entries</span>
          </div>

          {/* Progress bar */}
          <div className="h-2 w-full rounded-full bg-muted mb-3">
            <div
              className="h-2 rounded-full bg-primary transition-all duration-500"
              style={{ width: `${(week.entries / maxEntries) * 100}%` }}
            />
          </div>

          {/* Focus areas */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {week.focus.map((f, j) => (
              <span key={j} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {f}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-1">
            {week.highlights.map((h, j) => (
              <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SkillMatrix({ skills }: { skills: SkillProgression[] }) {
  const depthColors = {
    introduced: "bg-slate-400",
    applied: "bg-blue-500",
    mastered: "bg-emerald-500",
  };

  const depthLabels = {
    introduced: "Introduced",
    applied: "Applied",
    mastered: "Mastered",
  };

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        {Object.entries(depthLabels).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${depthColors[key as keyof typeof depthColors]}`} />
            <span className="text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      {/* Skills by category */}
      {categories.map(cat => (
        <div key={cat} className="rounded-lg border border-border bg-card p-4">
          <h4 className="font-semibold text-foreground mb-3">{cat}</h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {skills.filter(s => s.category === cat).map((skill, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${depthColors[skill.depth]}`} />
                  <span className="text-sm font-medium text-foreground">{skill.skill}</span>
                </div>
                <span className="text-xs text-muted-foreground">{skill.usageCount}x</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TechStackChart({ techs }: { techs: typeof techFrequency }) {
  const maxCount = Math.max(...techs.map(t => t.count));
  const sorted = [...techs].sort((a, b) => b.count - a.count);

  const categoryColors: Record<string, string> = {
    Language: "bg-blue-500",
    Framework: "bg-emerald-500",
    AI: "bg-purple-500",
    Styling: "bg-amber-500",
    Documentation: "bg-rose-500",
    Infrastructure: "bg-slate-500",
  };

  return (
    <div className="space-y-3">
      {sorted.map((tech, i) => (
        <div key={i} className="group">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">{tech.tech}</span>
              <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium text-white ${categoryColors[tech.category]}`}>
                {tech.category}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">{tech.count} mentions</span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted">
            <div
              className={`h-2 rounded-full ${categoryColors[tech.category]} transition-all duration-500`}
              style={{ width: `${(tech.count / maxCount) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ActivityHeatmap() {
  // Generate dates from Dec 22 2025 to Jan 30 2026
  const startDate = new Date(2025, 11, 22);
  const endDate = new Date(2026, 0, 30);

  // Journey entry dates
  const entryDates = new Set([
    "2025-12-22", "2025-12-24", "2025-12-25", "2025-12-27", "2025-12-28",
    "2025-12-29", "2025-12-30", "2025-12-31", "2026-01-03", "2026-01-04",
    "2026-01-05", "2026-01-06", "2026-01-07", "2026-01-08", "2026-01-09",
    "2026-01-10", "2026-01-11", "2026-01-12", "2026-01-13", "2026-01-14",
    "2026-01-15", "2026-01-16", "2026-01-17", "2026-01-18", "2026-01-19",
    "2026-01-20", "2026-01-21", "2026-01-22", "2026-01-23", "2026-01-25",
    "2026-01-26", "2026-01-28", "2026-01-29", "2026-01-30"
  ]);

  const days: { date: Date; hasEntry: boolean }[] = [];
  const current = new Date(startDate);
  while (current <= endDate) {
    const dateStr = current.toISOString().split("T")[0];
    days.push({ date: new Date(current), hasEntry: entryDates.has(dateStr) });
    current.setDate(current.getDate() + 1);
  }

  // Group by week
  const weeks: { date: Date; hasEntry: boolean }[][] = [];
  let currentWeek: { date: Date; hasEntry: boolean }[] = [];

  // Pad first week with empty days
  const firstDayOfWeek = startDate.getDay();
  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push({ date: new Date(0), hasEntry: false });
  }

  days.forEach((day) => {
    currentWeek.push(day);
    if (day.date.getDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) weeks.push(currentWeek);

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => {
              if (day.date.getTime() === 0) {
                return <div key={di} className="h-4 w-4" />;
              }
              return (
                <div
                  key={di}
                  className={`h-4 w-4 rounded-sm ${
                    day.hasEntry
                      ? "bg-primary"
                      : "bg-muted"
                  }`}
                  title={day.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>Dec 22</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className="h-3 w-3 rounded-sm bg-muted" />
          <div className="h-3 w-3 rounded-sm bg-primary" />
          <span>More</span>
        </div>
        <span>Jan 30</span>
      </div>
    </div>
  );
}

function ProjectEvolution() {
  const projects = [
    { name: "IngredientScanner", started: "Dec 22", status: "Active", tech: "LangGraph + React Native" },
    { name: "MindGames", started: "Dec 27", status: "Deployed", tech: "Next.js + Jest" },
    { name: "Fraud Detection", started: "Dec 30", status: "Active", tech: "FastAPI + Redis" },
    { name: "TeleOps", started: "Jan 11", status: "Active", tech: "FastAPI + LangGraph" },
    { name: "Professor Gemini", started: "Jan 14", status: "Active", tech: "Streamlit + Qdrant" },
    { name: "Cyrus Portfolio", started: "Jan 7", status: "Deployed", tech: "Next.js 16 + Cloudflare" },
    { name: "AI Assistant", started: "Jan 17", status: "Active", tech: "Cloudflare Workers + Gemini" },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {projects.map((p, i) => (
        <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
          <div>
            <h4 className="font-medium text-foreground">{p.name}</h4>
            <p className="text-xs text-muted-foreground">{p.tech}</p>
          </div>
          <div className="text-right">
            <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${
              p.status === "Deployed" ? "bg-emerald-500/20 text-emerald-500" : "bg-blue-500/20 text-blue-500"
            }`}>
              {p.status}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">{p.started}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function EvolutionPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "timeline" | "skills" | "projects">("overview");

  const totalEntries = 35;
  const totalDays = 40;
  const activeDays = 34;
  const streakMax = 14;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "timeline", label: "Timeline" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              &larr; Back to Home
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Portfolio Evolution</h1>
              <p className="text-muted-foreground">40 Days of Building at Principal TPM Level</p>
            </div>
          </div>

          <p className="max-w-3xl text-lg text-muted-foreground mb-8">
            A comprehensive analysis of my development journey from December 22, 2025 to January 30, 2026.
            This report captures the evolution of 7 projects, mastery of 10+ technologies, and creation of
            enterprise-grade systems designed for Principal TPM interviews at top technology companies.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard label="Journal Entries" value={totalEntries} sublabel="Documented days" />
            <StatCard label="Days Active" value={`${activeDays}/${totalDays}`} sublabel="85% consistency" />
            <StatCard label="Best Streak" value={`${streakMax} days`} sublabel="Consecutive work" />
            <StatCard label="Projects Built" value={7} sublabel="From scratch" />
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Activity Heatmap */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Activity Calendar</h2>
                <ActivityHeatmap />
              </div>

              {/* Two Column Layout */}
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Key Milestones */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Key Milestones</h2>
                  <MilestoneTimeline milestones={milestones.slice(0, 5)} />
                </div>

                {/* Tech Stack Distribution */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Technology Focus</h2>
                  <TechStackChart techs={techFrequency} />
                </div>
              </div>

              {/* Executive Summary */}
              <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-background p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Executive Summary</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Technical Depth</h3>
                    <p className="text-sm text-muted-foreground">
                      Built production-grade systems with multi-agent AI (LangGraph), real-time fraud detection,
                      and RAG pipelines. Every project includes observability, testing, and documentation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Principal TPM Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      Created 50+ pages of interview-ready documentation including 4 CADE stories,
                      company exemplars (Google, Meta, Netflix), and system design deep dives.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Execution Velocity</h3>
                    <p className="text-sm text-muted-foreground">
                      Shipped 7 projects in 40 days while maintaining 85% daily consistency.
                      Each project demonstrates full-stack capability from architecture to deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === "timeline" && (
            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Weekly Progress</h2>
                <WeeklyProgressChart weeks={weeklyData} />
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">All Milestones</h2>
                <MilestoneTimeline milestones={milestones} />
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Skill Progression</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Skills are categorized by depth: <strong>Introduced</strong> (learned basics),
                  <strong> Applied</strong> (used in projects), <strong> Mastered</strong> (used extensively with deep understanding).
                </p>
                <SkillMatrix skills={skillProgressions} />
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Technology Frequency</h2>
                <TechStackChart techs={techFrequency} />
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Project Timeline</h2>
                <ProjectEvolution />
              </div>

              {/* Project Categories */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    Capstone Projects
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Fraud Detection Platform</strong> - Real-time fraud detection with 5 signals</li>
                    <li><strong>TeleOps</strong> - AI-assisted network incident RCA with LLM + RAG</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-blue-500" />
                    Portfolio Projects
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>AI Ingredient Scanner</strong> - Multi-agent LangGraph with mobile app</li>
                    <li><strong>Professor Gemini</strong> - RAG-powered learning platform</li>
                    <li><strong>MindGames</strong> - Mental math training with 63 tests</li>
                    <li><strong>Email Assistant</strong> - AI email categorization</li>
                    <li><strong>Cyrus + AI Chat</strong> - Portfolio site with Gemini assistant</li>
                  </ul>
                </div>
              </div>

              {/* Architecture Patterns */}
              <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-background p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Architecture Patterns Demonstrated</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { pattern: "Multi-Agent AI", example: "IngredientScanner, TeleOps" },
                    { pattern: "RAG Pipeline", example: "Professor Gemini, TeleOps" },
                    { pattern: "Real-time Streaming", example: "Fraud Detection (Redis)" },
                    { pattern: "Edge Computing", example: "AI Chat (Cloudflare Workers)" },
                    { pattern: "Event Sourcing", example: "Fraud Detection (Evidence Vault)" },
                    { pattern: "Hot-Reload Config", example: "Fraud Detection (YAML Policy)" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg bg-card border border-border p-3">
                      <div className="font-medium text-foreground">{item.pattern}</div>
                      <div className="text-xs text-muted-foreground">{item.example}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">
            This evolution report was generated from {totalEntries} journey entries spanning 40 days of development.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/journey"
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              View Full Journey
            </Link>
            <Link
              href="/projects"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
