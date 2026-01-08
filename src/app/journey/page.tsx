"use client";

import { useState, useMemo } from "react";
import { AuthGate } from "@/components/AuthGate";

// Journey entries data (synced from ProjectDocs)
const journeyEntries = [
  {
    date: "2025-12-22",
    title: "Project Creation & Foundation",
    content: `## Summary
Created the entire IngredientScanner application from scratch - a multi-agent LLM system for analyzing food and cosmetic ingredient safety.

## Features Developed
- Built FastAPI backend with /analyze and /ocr endpoints
- Created multi-agent LangGraph workflow
- Integrated Qdrant vector database
- Built React Native/Expo mobile app

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| LangGraph over plain LangChain | Better state management |
| Qdrant for vector DB | Free cloud tier |
| Multi-agent architecture | Separation of concerns |`,
  },
  {
    date: "2025-12-24",
    title: "Web Platform & Deployment",
    content: `## Summary
Extended the mobile app to support web platform and deployed the backend to Railway for production use.

## Features Developed
- Added React Native Web support to mobile app
- Configured Railway deployment for backend
- Added Jest test suite with 68 tests for mobile components

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Railway for hosting | Free tier, easy Python deployment |
| Multi-service config | Separate API and Streamlit services |
| Browser MediaDevices API | Native camera access on web |`,
  },
  {
    date: "2025-12-25",
    title: "Authentication, Observability & Polish",
    content: `## Summary
Major day of enhancements: Firebase Authentication, LangSmith observability, bug fixes, load testing infrastructure, and UI polish.

## Features Developed
- Implemented Google Sign-In with Firebase Auth
- Created PreferencesContext for centralized state management
- Integrated LangSmith tracing for LangChain/LangGraph observability
- Created load testing infrastructure with dashboard

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Firebase Auth | Free tier, Google Sign-In, cross-platform |
| Guest mode | Allow usage without account (lower friction) |
| LangSmith | Unified tracing for LangChain/LangGraph debugging |`,
  },
  {
    date: "2025-12-27",
    title: "MindGames - Mental Math Training App",
    content: `## Summary
Built MindGames, a modern mental math training application with Next.js 14, TypeScript, and Tailwind CSS.

## Features Developed
- Chain-based problem generation
- Four operations with configurable mix
- Kid/Adult profile modes with confetti celebrations
- 63 tests with 100% pass rate
- Cloudflare Pages deployment

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Next.js 14 with App Router | Modern React |
| React Context + useReducer | Sufficient for scope |
| Chain-based problems | Creates flow state |`,
  },
  {
    date: "2025-12-28",
    title: "Nebula Capstone Projects Expansion",
    content: `## Summary
Built 20 detailed AI/ML capstone project pages for the Nebula interview prep section.

## Features Developed
- Created 5 projects for each of 4 LLM providers (Gemini, Perplexity, ChatGPT, Claude)
- Sidebar navigation for all project pages
- Comparison page with filterable table

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| 5 projects per LLM | Variety without overwhelming |
| Consistent page structure | Easy comparison and navigation |
| ASCII diagrams | No external dependencies |`,
  },
  {
    date: "2025-12-29",
    title: "Capstone Portfolio Selection & Analysis",
    content: `## Summary
Enhanced the Nebula Capstone Projects with a comprehensive "Selected Projects" section featuring multi-LLM analysis.

## Features Developed
- Created new /nebula/capstone-projects/selected hub with 5 curated projects
- 4-way LLM analysis tabs on each page
- Interview Signal Matrix
- Favorites system with localStorage persistence

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| 5 projects from 20 | Focused portfolio for interviews |
| 4-LLM analysis | Multiple perspectives add credibility |
| Signal badges | Quick visual assessment |`,
  },
  {
    date: "2025-12-30",
    title: "Fraud Detection Analysis & Capstone UX Overhaul",
    content: `## Summary
Added comprehensive 15-section Fraud Detection Technical Reference to WIP projects and redesigned the Capstone Projects landing page.

## Features Developed
- Created extensive technical reference covering fraud types and algorithms
- WIP as Primary Focus on landing page
- Mobile responsiveness with useIsMobile hook
- Collapsible LLM sections

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| WIP at top | Active work should be most visible |
| LLM sections collapsed | Reduce cognitive load |
| Comprehensive fraud reference | Deep domain knowledge |`,
  },
  {
    date: "2025-12-31",
    title: "Fraud Platform Design Docs",
    content: `## Summary
Created comprehensive 5-part principal-level design document for Payment & Chargeback Fraud Detection Platform.

## Features Developed
- Part 1: Technology Stack & Architecture
- Part 2: Entities, Schemas & Features
- Part 3: Detection Logic & Policy Engine
- Part 4: Evidence, Disputes & Economics
- Part 5: Testing, Monitoring & Checklist

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| 5 separate docs | Easier to navigate |
| Frontmatter IDs | Required for Docusaurus sidebar |`,
  },
  {
    date: "2026-01-03",
    title: "Fraud Detection - Thinking Process Enhancement",
    content: `## Summary
Enhanced all 8 Nebula Fraud Detection Thinking Process pages with detailed step-by-step derivation methodology.

## Features Developed
- Data Model: 8-step thinking process
- Logic & Policy: 7-step thinking process
- Failure Modes: 7-step thinking process
- Testing: 7-step thinking process

## Key Concepts Documented
| Concept | Why It Matters |
|----------|----------------|
| Expected Value Thresholds | Ties decisions to business economics |
| PSI (Population Stability Index) | Detects model drift |
| Attack vs Bug Detection | Entity concentration vs global spread |`,
  },
  {
    date: "2026-01-04",
    title: "Shared Tools & PDF Export Feature",
    content: `## Summary
Created a shared-tools infrastructure for reusable code across projects. Added PDF export button to ProjectDocs navbar.

## Features Developed
- pdf-generator-py (Python) - PDFGenerator base class
- pdf-generator-js (TypeScript) - jsPDF wrapper
- ProjectDocs PDF export with print-to-PDF approach
- Comprehensive @media print CSS styles

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Print CSS over jsPDF | Browser renders perfectly |
| Local packages | Simplicity for personal projects |`,
  },
  {
    date: "2026-01-05",
    title: "Telco Fraud Adaptation & Blog Fix",
    content: `## Summary
Adapted the entire Fraud Detection platform from generic e-commerce to Telco/MSP domain. Fixed critical blog SSR issue.

## Features Developed
- Schema changes: merchant_id to service_id
- Added telco-specific fields: phone_number, imei, sim_iccid
- New event subtypes: sim_activation, sim_swap, device_upgrade
- Fixed blog SSR issue caused by AuthGate component

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Blog made public | Portfolio content, SEO-friendly |
| Telco-specific event rules | Domain knowledge shows depth |`,
  },
  {
    date: "2026-01-06",
    title: "Executive Documentation & Blog Quality Overhaul",
    content: `## Summary
Created four Principal TPM-level executive documents for the Fraud Detection Platform. Performed comprehensive blog quality review.

## Executive Documentation Suite
1. Executive Overview - 2-3 screen document for VPs
2. TPM Execution Strategy - How to drive as Principal TPM
3. AI/ML Roadmap & Current Status - What is built vs planned
4. Results, Limitations & Personas - Honest assessment

## Blog Quality Overhaul
- Removed weak posts
- Rewrote hobby projects with TPM framing
- Redesigned Key Takeaways sections`,
  },
  {
    date: "2026-01-07",
    title: "Cyrus Portfolio Site - Production Launch",
    content: `## Summary
Launched Cyrus as the primary portfolio site, replacing the Docusaurus-based ProjectDocs. Next.js 16 with goldenrod theme deployed to Cloudflare Pages.

## Features Completed
- Configured static export for Cloudflare Pages deployment
- Added Try Demo button with Live badge for projects with demos
- UI refinements: link alignment, visual hierarchy
- Port swap: Cyrus now primary (4001), ProjectDocs legacy (4002)
- GitHub repository setup and deployment

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Next.js 16 over Docusaurus | Modern React, better performance |
| Static export | Cloudflare Pages compatibility |
| Goldenrod theme | Distinctive, professional appearance |
| Try Demo prominence | Drive engagement with live projects |`,
  },
];

// Mini calendar component for top-right corner
function MiniCalendar({
  entries,
  selectedDate,
  onDateSelect,
}: {
  entries: typeof journeyEntries;
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
}) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const entryDates = new Set(entries.map((e) => e.date));

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const formatDateKey = (day: number) => {
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return d.toISOString().split("T")[0];
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-6 w-6" />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = formatDateKey(day);
    const hasEntry = entryDates.has(dateKey);
    const isSelected = selectedDate === dateKey;

    days.push(
      <button
        key={day}
        onClick={() => hasEntry && onDateSelect(dateKey)}
        disabled={!hasEntry}
        className={`flex h-6 w-6 items-center justify-center rounded text-xs transition-colors ${
          isSelected
            ? "bg-primary text-primary-foreground font-bold"
            : hasEntry
            ? "bg-primary/20 text-primary hover:bg-primary/30 font-medium"
            : "text-muted-foreground/50"
        }`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="rounded p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-xs font-medium text-foreground">
          {currentMonth.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </span>
        <button
          onClick={nextMonth}
          className="rounded p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="mb-1 grid grid-cols-7 gap-0.5 text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="h-6 w-6 text-[10px] font-medium text-muted-foreground">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">{days}</div>
    </div>
  );
}

function JourneyTimeline({
  entries,
  selectedDate,
  onDateSelect,
}: {
  entries: typeof journeyEntries;
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Timeline
      </h3>
      <div className="space-y-2">
        {entries
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((entry) => (
            <button
              key={entry.date}
              onClick={() => onDateSelect(entry.date)}
              className={`w-full rounded-lg border p-3 text-left transition-all ${
                selectedDate === entry.date
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className="text-xs text-muted-foreground">
                {new Date(entry.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div
                className={`text-sm font-medium ${
                  selectedDate === entry.date
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {entry.title}
              </div>
            </button>
          ))}
      </div>
    </div>
  );
}

function JourneyContent() {
  const [selectedDate, setSelectedDate] = useState<string | null>(
    journeyEntries.length > 0
      ? journeyEntries.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )[0].date
      : null
  );

  const selectedEntry = useMemo(() => {
    return journeyEntries.find((e) => e.date === selectedDate) || null;
  }, [selectedDate]);

  // Simple markdown rendering
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="my-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="px-3 py-2 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-border">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-3 py-2 text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        tableHeaders = [];
      }
      inTable = false;
    };

    lines.forEach((line, i) => {
      if (line.startsWith("## ")) {
        flushTable();
        elements.push(
          <h2
            key={i}
            className="mb-3 mt-6 text-xl font-semibold text-foreground"
          >
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("- ")) {
        flushTable();
        elements.push(
          <li key={i} className="ml-4 text-muted-foreground">
            {line.slice(2)}
          </li>
        );
      } else if (line.startsWith("|") && line.endsWith("|")) {
        const cells = line
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim());
        if (!inTable) {
          tableHeaders = cells;
          inTable = true;
        } else if (!cells.every((c) => c.match(/^[-:]+$/))) {
          tableRows.push(cells);
        }
      } else {
        flushTable();
        if (line.trim()) {
          elements.push(
            <p key={i} className="my-2 text-muted-foreground">
              {line}
            </p>
          );
        }
      }
    });

    flushTable();
    return elements;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                  My Journey
                </h1>
                <p className="text-muted-foreground">
                  Development Timeline & Progress
                </p>
              </div>
            </div>

            {/* Mini Calendar - top right */}
            <div className="hidden sm:block">
              <MiniCalendar
                entries={journeyEntries}
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 flex gap-8">
            <div>
              <div className="text-2xl font-bold text-primary">
                {journeyEntries.length}
              </div>
              <div className="text-sm text-muted-foreground">Entries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {journeyEntries.length > 0
                  ? Math.ceil(
                      (new Date().getTime() -
                        new Date(
                          journeyEntries.sort(
                            (a, b) =>
                              new Date(a.date).getTime() -
                              new Date(b.date).getTime()
                          )[0].date
                        ).getTime()) /
                        (1000 * 60 * 60 * 24)
                    ) + 1
                  : 0}
              </div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto">
              <JourneyTimeline
                entries={journeyEntries}
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
              />
            </aside>

            {/* Entry content */}
            <main>
              {selectedEntry ? (
                <article className="rounded-xl border border-border bg-card p-6 sm:p-8">
                  <header className="mb-6 border-b border-border pb-6">
                    <h2 className="text-2xl font-bold text-foreground">
                      {selectedEntry.title}
                    </h2>
                    <time className="text-sm text-muted-foreground">
                      {new Date(selectedEntry.date).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                  </header>
                  <div className="prose prose-slate max-w-none dark:prose-invert">
                    {renderContent(selectedEntry.content)}
                  </div>
                </article>
              ) : (
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <p className="text-muted-foreground">
                    Select an entry from the timeline to view details.
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function JourneyPage() {
  return (
    <AuthGate
      storageKey="cyrus_journey_auth"
      title="My Journey"
      subtitle="Development timeline and progress"
    >
      <JourneyContent />
    </AuthGate>
  );
}
