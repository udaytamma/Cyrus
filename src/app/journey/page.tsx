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
  {
    date: "2026-01-08",
    title: "Bio Update, Mobile Fixes & CI/CD Hardening",
    content: `## Summary
Updated personal branding with new bio, fixed mobile navigation issues across docs layouts, and hardened CI/CD pipeline for Cloudflare deployments.

## Features Completed
- Added professional bio to landing and about pages
- Fixed mobile nav menu height in all 4 docs layouts (max-h-64 to max-h-[70vh])
- Fixed production 404 for scratch-pad (prebuild script graceful skip)
- Removed redundant Documentation section from fraud-platform page
- Completed comprehensive mobile optimization audit across all pages
- Created scratch-pad-sync skill for automation

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Graceful CI skip vs hard fail | Cloudflare lacks local folders |
| 70vh mobile nav height | Accommodates all menu items |
| AI/ML stat over Telecom | Broader appeal on landing page |
| Separate bio line breaks | Better mobile readability |`,
  },
  {
    date: "2026-01-10",
    title: "Nebula Task Board & Docs Component System",
    content: `## Summary
Built a Kanban-style task board for Nebula with drag-and-drop functionality and real-time Firebase sync. Then upgraded the entire documentation system with reusable components.

## Task Board Features
- Three-column Kanban board: Backlog, This Week, Done
- Drag-and-drop task movement using @dnd-kit library
- Firebase Firestore integration for persistent storage
- Real-time sync across multiple devices
- Five task categories: TechSense, ExecSpeak, Resume, TPM, BizSense
- Collapsible Add Task form, edit/delete with hover actions

## Documentation Components (8 New Components)
| Component | Purpose |
|-----------|---------|
| MermaidDiagram | Architecture flowcharts with dark mode support |
| CopyableCodeBlock | Shiki syntax highlighting + copy button |
| DocSearch | Client-side search (Cmd/Ctrl+K) |
| ReadingTime | Estimated reading time display |
| AnchorHeading | Headings with copy-link anchors |
| TableOfContents | Sticky navigation with scroll tracking |
| Breadcrumb | Auto-generated navigation breadcrumbs |
| ProjectBadges | Version, status, tech stack badges |

## Pages Upgraded (92 files)
- All Email Assistant docs (10 pages)
- All Fraud Platform docs (10 pages)
- All Ingredient Scanner docs (13 pages)
- All MindGames docs (4 pages)
- All Nebula capstone/design pages (55 pages)

## Print & Theme Enhancements
- Print CSS: Clean layout, URL expansion, proper page breaks
- Shiki dual-theme: GitHub Light/Dark with CSS variables
- Mermaid dark mode: Theme-aware colors with MutationObserver

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| @dnd-kit over react-beautiful-dnd | Active maintenance, React 18 support |
| Shiki over Prism | VS Code-quality highlighting, SSR-friendly |
| MutationObserver for theme | Re-renders Mermaid on theme toggle |
| Print CSS over jsPDF | Browser renders perfectly, less code |`,
  },
  {
    date: "2026-01-11",
    title: "TeleOps Code Quality & Documentation Overhaul",
    content: `## Summary
Major quality improvements to TeleOps codebase and comprehensive documentation enhancements for interview preparation.

## Code Improvements
- Pattern-matching baseline RCA: Replaced hardcoded response with 11 scenario-specific rules
- Structured JSON logging: Production-ready logging with configurable format
- Pydantic request validation: Type-safe API inputs with automatic 422 error responses
- OpenAPI documentation: Swagger UI at /docs and ReDoc at /redoc
- Configurable LLM timeouts: LLM_TIMEOUT_SECONDS and GEMINI_TIMEOUT_SECONDS
- Health endpoint: /health for monitoring

## Documentation Enhanced
- Nebula Thinking Process: 7 pages expanded with detailed derivation methodology
- New Design Rationale page: All parameter decisions with scripted interview responses
- LLM-RAG Pipeline: Full prompt examples, RAG corpus structure, configuration table
- API Reference: Webhook payload examples, 11 incident types grid, error codes

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Pattern matching over ML | Deterministic, debuggable fallback |
| Pydantic validation | Fail fast with clear error messages |
| JSON logging | Structured logs for production debugging |
| Design Rationale doc | Interview-ready scripted responses |`,
  },
  {
    date: "2026-01-09",
    title: "System Design Guide Enhancements & GitHub Link Fixes",
    content: `## Summary
Comprehensive updates to the Principal TPM System Design Guide - added missing topics from Competency Matrix, fixed broken GitHub links across Cyrus, and improved dark mode readability.

## Features Developed
- Branch by Abstraction: Code-level migration technique complementing Strangler Fig
- Networking & Traffic section: L4/L7 load balancing, TCP/UDP/HTTP protocols, DNS, CDN
- Probabilistic Data Structures: Bloom Filters, HyperLogLog, Count-Min Sketch
- Data Architecture Patterns: OLTP vs OLAP, Data Lake vs Warehouse vs Lakehouse
- Clickable TOC with anchor links to all 17 sections
- Dark mode text brightness increased 10% globally

## Bug Fixes
- Fixed 6 broken GitHub links (zeroleaf/MindGames → udaytamma/MindGames)
- Fixed repo name mismatches (IngredientScanner → AiIngredientScanner, emailAssistant → AiEmailAssistant)
- Added GitHub link to Email Assistant project card

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Global dark mode brightness | Consistent readability across all pages |
| Anchor IDs with scroll-mt-4 | Proper offset when clicking TOC links |
| Section renumbering (2.2-2.6, 3.4-3.7) | Accommodate new networking and probabilistic sections |`,
  },
  {
    date: "2026-01-12",
    title: "System Design Page Splitting - Practice & Deep Dives",
    content: `## Summary
Split the large System Design Practice Questions (88KB) and Deep Dives (71KB) pages into sub-pages for better performance and navigation.

## Features Developed
- Practice Questions index page with 3 part cards
- 3 Practice sub-pages: Fundamentals (Q1-20), Cloud Economics (Q21-30), SLA Math (Q31-40)
- Deep Dives index page with 12 topic cards
- 12 Deep Dive sub-pages covering all FinOps, SLA, DR, K8s topics
- Shared component libraries: PracticeQuestionComponents.tsx, DeepDiveComponents.tsx
- Prev/Next navigation between sub-pages

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Route-based splitting | Better than tabs for scalability and bookmarkability |
| Shared components | Avoid code duplication across sub-pages |
| Index pages with cards | Clear visual navigation to topics |
| Keep content inline | Preserve rich formatting (tables, code blocks, tips) |

## Files Created
- 3 Practice sub-pages in practice/{fundamentals,cloud-economics,sla-math}/
- 12 Deep Dive sub-pages in deep-dives/{topic-id}/
- 2 shared component files`,
  },
  {
    date: "2026-01-13",
    title: "Fraud Detection API Documentation & Codex Review",
    content: `## Summary
Added comprehensive API documentation for the Fraud Detection project and integrated external architecture review feedback from Codex.

## Features Developed
- **Building Bricks page** at /nebula/planning/fraud-detection-building-bricks
  - Complete endpoint list (15 API endpoints with methods)
  - Request/Response JSON schemas with field descriptions
  - Error handling patterns with status codes
  - Database schema (4 core tables with indexes)
  - Redis caching strategy (ZSETs for velocity counters)
  - Architecture trade-offs table with justifications
  - Prometheus metrics for SLA monitoring
  - Interview-ready 2-minute response template

- **Codex Feedback section** on Arch Review page
  - 6 critical bottlenecks (non-atomic idempotency, JSONB serialization, Redis TTL, hot path blocking)
  - 4 security vulnerabilities (unauthenticated endpoints, CORS, credentials)
  - 7 actionable recommendations with code references
  - Prioritized implementation roadmap (P0-P2)

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Collapsible Codex section | Dense feedback, keep page scannable |
| Move to /nebula/planning/ | Separate from thinking process docs |
| Include code line refs | Actionable for dev work |`,
  },
  {
    date: "2026-01-14",
    title: "Professor Gemini - UI Polish & Real-Time Updates",
    content: `## Summary
Enhanced the Professor Gemini hybrid AI learning platform with comprehensive light/dark theme support and real-time pipeline output updates during execution.

## Features Developed
- **Theme System Overhaul**
  - Fixed light theme with proper contrast and readability
  - Added dedicated CSS variables for inputs, buttons, and text
  - Darker goldenrod (#b8860b) accent for light theme contrast
  - Comprehensive Streamlit component styling (alerts, expanders, sidebar, metrics)

- **Real-Time Pipeline Updates**
  - Refactored to use \`st.empty()\` placeholder for live console updates
  - Status callback now updates UI as each pipeline step completes
  - Messages sync to session state without blocking reruns

- **Previous Session Work**
  - Removed Deep Dive Details section
  - Theme toggle as subtle cycling icon (dark → light → system)
  - Enhanced all Gemini prompts for better quality responses
  - Removed token limits (except critique at 512)
  - Added async methods for Gemini-only mode

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Separate input/button CSS vars | Light theme needs different treatment than dark |
| st.empty() for real-time | Only way to update Streamlit UI during blocking execution |
| Darker accent in light mode | Standard goldenrod lacks contrast on white backgrounds |`,
  },
  {
    date: "2026-01-15",
    title: "Security Audit, Knowledge Base & UI Standardization",
    content: `## Summary
Conducted comprehensive security audit, integrated Professor Gemini with Nebula Knowledge Base, and standardized UI patterns across Cyrus pages (sidebar collapse, scroll progress, bottom navigation).

## Security Audit Results
- **Audited 10 repositories**: ProfessorGemini, Cyrus, claude-config, FraudDetection, AiEmailAssistant, teleops, MindGames, zeroleaf-docs, zeroleaf-portfolio, AiIngredientScanner
- **Findings**: Firebase client-side keys (safe), but Email Assistant had hardcoded Gemini API key
- Removed hardcoded API keys from server.py, added .env validation

## Nebula Knowledge Base Integration
- Created unified sync script handling dual sources
- LLM Suggestions folder → Scratch Pad section
- gemini-responses folder → Knowledge Base section
- Automatic YAML frontmatter parsing for Professor Gemini files

## UI Standardization
- Created shared SidebarCollapseButton component with two position modes (edge/fixed)
- Removed duplicate ScrollProgress from SystemDesignLayout (global one in layout.tsx)
- Added bottom navigation links to Knowledge Base pages (prev/next documents)
- Made Knowledge Base mobile responsive with slide-out sidebar overlay
- Documented all patterns in /Cyrus/.claude/CLAUDE.md

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Fail-fast on missing key | Clear error better than silent fallback |
| Shared sidebar button | Prevents style drift, single source of truth |
| Global scroll progress | One implementation in layout.tsx serves all pages |
| Position prop on button | Handles different layout contexts (edge vs fixed) |`,
  },
  {
    date: "2026-01-16",
    title: "Professor Gemini Logging & Prompt Refinements",
    content: `## Summary
Enhanced Professor Gemini with file-based logging for debugging, refined all prompts to target Generalist/Product Principal TPM role, and improved local development workflow with safer file deletion.

## Professor Gemini Enhancements
- **File Logging**: Added persistent logging to /tmp/professorgemini.log
- Dual output: Console (stderr) + file handler for complete traceability
- Duplicate handler prevention for Streamlit re-runs
- All prompts now target "Generalist/Product Principal TPM" instead of generic "Principal TPM"
- Added "Customize responses" instruction to prevent over-depth in responses

## Prompts Updated
- BASE_KNOWLEDGE_PROMPT: Interview prep context
- SECTION_DRAFT_PROMPT: Deep dive generation
- SECTION_REWRITE_PROMPT: Bar Raiser revision
- CRITIQUE_PROMPTS: All strictness levels
- SYNTHESIS_PROMPT: Master guide generation

## Development Workflow Improvements
- Installed \`trash\` CLI via Homebrew for recoverable file deletion
- Updated global CLAUDE.md to use \`trash\` instead of \`rm\`
- Files now go to macOS Trash instead of permanent deletion

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| File + console logging | Debug production issues without losing stderr |
| Duplicate handler guard | Streamlit re-runs caused duplicate log entries |
| Generalist/Product TPM | More specific role targeting for interview prep |
| trash over rm | Recoverable deletions prevent data loss |`,
  },
  {
    date: "2026-01-17",
    title: "AI Assistant Launch - Gemini 3 Flash Powered Chat",
    content: `## Summary
**Major Feature**: Launched a fully functional AI Assistant powered by Gemini 3 Flash via Cloudflare Worker. The assistant answers questions about my professional experience, projects, and skills with context-aware responses.

## AI Assistant Features
- **Cloudflare Worker Backend** at uday-ai-worker.udaytamma.workers.dev
  - Gemini 3 Flash Preview API integration
  - Comprehensive knowledge base with professional experience, certifications, and projects
  - Structured response formatting with markdown
  - Follow-up question suggestions after every response
  - Full conversation history support

- **Global Floating Chat Button**
  - Appears on all pages except Nebula, Journey, and Blog
  - Different scroll thresholds: 80vh on home page, 100px on other pages
  - Subtle pulse animation on appear, zeroleaf icon with sparkle indicator
  - ChatContext for global state management across all pages

- **Chat Modal UX**
  - Full-screen on mobile, constrained modal on desktop (900px max height)
  - Auto-scroll to bottom when reopening with existing messages
  - Session storage persistence for chat history
  - Three suggestion chips for quick start questions
  - Markdown rendering with clickable links
  - Loading states and error handling

## Architecture
| Component | Purpose |
|-----------|---------|
| ChatContext | Global chat open/close state |
| FloatingChat | Path-based visibility, floating button |
| ChatModal | Full chat UI with message history |
| ClientProviders | Wraps all providers (Theme, Chat) |
| Cloudflare Worker | Serverless Gemini API proxy |

## Other Updates
- Fixed 17+ → 18+ years experience consistency
- Updated avatar styling on about page to match landing
- Changed target companies from "Mag7" to "cutting-edge technology companies, including startups"
- Added CLAUDE.md instruction to deploy worker with Cyrus pushes

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Cloudflare Worker | Edge deployment, no cold starts, free tier |
| Gemini 3 Flash Preview | Latest model, fast responses |
| SessionStorage | Chat persists during session but clears on close |
| Path-based exclusion | Keep chat off documentation-heavy pages |
| Global ChatContext | Any component can trigger chat open |`,
  },
  {
    date: "2026-01-18",
    title: "Knowledge Base Structure Fix & Professor Gemini Enhancement",
    content: `## Summary
Fixed Knowledge Base page structure issues where Roman numeral sections were duplicated and TOC was broken. Enhanced Professor Gemini's duplicate header detection to use same-level comparison.

## Root Cause Analysis
- Deep dives created their own Roman numeral structure (## I., ## II., etc.)
- Interview Questions used H3 headers with same Roman numerals (### I., ### II.)
- TOC filter matched both H2 and H3 Roman numerals
- Duplicate detection compared across levels, removing H2 main sections

## Fixes Applied

### Cyrus Knowledge Base
- **TOC Filter**: Added \`h.level === 2\` to only show H2 Roman numeral sections
- **Duplicate Detection**: Changed key from \`headingText\` to \`\${level}:\${headingText}\`
- **Manual Cleanup**: All 4 KB files (CDN, DNS, Load Balancing, Protocol Fundamentals)
  - Removed duplicate Roman numeral sections
  - Converted \`## 1.\` headers to \`### 1.\` (subsections)
  - Consolidated Interview Questions at document end
  - Clean I-V section structure in each document

### Professor Gemini
- Updated \`remove_duplicate_headers()\` to use same-level comparison
- Preserves H2 main sections even when H3 Interview Questions have matching titles

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| Level-aware comparison | H2 and H3 with same title are different sections |
| TOC shows H2 only | Main sections, not Interview Q sub-headers |
| No hard limit on TOC | Accept any number of Roman numeral sections |`,
  },
  {
    date: "2026-01-19",
    title: "Nebula Redesign & Global Font Optimization",
    content: `## Summary
Redesigned the Nebula landing page with a clean three-pillar structure and optimized global font sizing across the entire Cyrus portfolio site for better readability.

## Nebula Redesign
- **Three-Pillar Architecture**: Learn, Practice, Portfolio sections
- **Professional SVG Icons**: Replaced emoji icons with custom SVG icons
- **Deep Dive Projects**: Dedicated section for project walkthroughs
- **Mobile Responsive**: Adaptive layouts for all screen sizes

## Global Font Optimization
- **Base Font Size**: 17px desktop, 15px mobile (responsive scaling)
- **Iterative Refinement**: Tested multiple size combinations for optimal readability
- **CSS Variables**: Centralized in globals.css for easy maintenance

## Key Decisions
| Decision | Rationale |
|----------|-----------|
| SVG over emoji | Professional appearance, consistent rendering |
| Three pillars | Clear mental model for interview prep content |
| Global font scaling | Single source of truth vs per-component sizing |
| 17px base | Balance between readability and content density |`,
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
    const year = currentMonth.getFullYear();
    const month = String(currentMonth.getMonth() + 1).padStart(2, "0");
    const dayStr = String(day).padStart(2, "0");
    return `${year}-${month}-${dayStr}`;
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
                {(() => {
                  const [year, month, day] = entry.date.split("-").map(Number);
                  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });
                })()}
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
                      {(() => {
                        const [year, month, day] = selectedEntry.date.split("-").map(Number);
                        return new Date(year, month - 1, day).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        );
                      })()}
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
