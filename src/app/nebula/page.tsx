"use client";

/**
 * Nebula - Interview Preparation Hub
 *
 * Clean, professional design with three pillars:
 * - Learn: Knowledge acquisition (Knowledge Base, System Design)
 * - Practice: Interview preparation (Questions, Blindspots, Deep Dives)
 * - Portfolio: Project showcase (Capstone, Fraud Detection, TeleOps)
 */

import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";
import { knowledgeBaseIndex } from "@/data/knowledge-base-index";
import { scratchPadDocs } from "@/data/scratch-pad";

// Icon components for professional look (no emojis)
const Icons = {
  book: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  architecture: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  clipboard: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  ),
  target: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  ),
  beaker: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  rocket: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  signal: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  document: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  star: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  list: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  chevronRight: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  ),
};

// Section color schemes - subtle accents
const sectionThemes = {
  learn: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    number: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  practice: {
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    number: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  portfolio: {
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
    number: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  deepDive: {
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    number: "border-2 border-amber-500/50 text-amber-600 dark:text-amber-400",
  },
};

// Reorganized content structure - Three Pillars
const pillars = {
  learn: {
    title: "Learn",
    subtitle: "Build your knowledge foundation",
    theme: sectionThemes.learn,
    items: [
      {
        href: "/nebula/knowledge-base",
        title: "Knowledge Base",
        description: `${knowledgeBaseIndex.length} deep-dive guides on databases, networking, protocols`,
        icon: Icons.book,
      },
      {
        href: "/nebula/system-design",
        title: "System Design",
        description: "Principal TPM competency matrix with 16 deep-dive topics",
        icon: Icons.architecture,
      },
      {
        href: "/nebula/scratch-pad",
        title: "Scratch Pad",
        description: `${scratchPadDocs.length} LLM conversation notes and research`,
        icon: Icons.document,
      },
    ],
  },
  practice: {
    title: "Practice",
    subtitle: "Sharpen your interview skills",
    theme: sectionThemes.practice,
    items: [
      {
        href: "/nebula/questions",
        title: "Interview Questions",
        description: "67 curated Q&A across 12 topics",
        icon: Icons.clipboard,
      },
      {
        href: "/nebula/blindspots",
        title: "Blindspots",
        description: "25 deep technical gaps based on project experience",
        icon: Icons.target,
      },
      {
        href: "/nebula/thinking",
        title: "Thinking Frameworks",
        description: "Mental models for system design interviews",
        icon: Icons.beaker,
      },
      {
        href: "/nebula/interview-prep",
        title: "Interview Prep",
        description: "Practiced responses for common interview scenarios",
        icon: Icons.star,
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Showcase your expertise",
    theme: sectionThemes.portfolio,
    items: [
      {
        href: "/nebula/capstone/selected",
        title: "Selected Portfolio",
        description: "Top 5 projects curated for interviews",
        icon: Icons.star,
      },
      {
        href: "/nebula/capstone",
        title: "All Capstone Projects",
        description: "26 project ideas from ChatGPT, Claude, Gemini, Perplexity",
        icon: Icons.rocket,
      },
    ],
  },
};

// Deep Dive Projects - Separate section for detailed walkthroughs
const deepDiveProjects = [
  {
    href: "/nebula/fraud-detection-thinking",
    title: "Fraud Detection",
    description: "Complete system design walkthrough with thinking process + technical design",
    icon: Icons.shield,
  },
  {
    href: "/nebula/teleops-thinking",
    title: "TeleOps",
    description: "Telecom NOC incident RCA with AI/RAG integration",
    icon: Icons.signal,
  },
];

// Card component for consistent styling
function NavCard({
  href,
  title,
  description,
  icon,
  theme,
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  theme?: { iconBg: string; iconColor: string };
}) {
  const iconBg = theme?.iconBg || "bg-primary/10";
  const iconColor = theme?.iconColor || "text-primary";

  return (
    <Link
      href={href}
      className="group relative flex items-start gap-3 sm:gap-4 rounded-lg border border-border bg-card p-4 sm:p-5 transition-all hover:border-primary/50 hover:shadow-md"
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBg} ${iconColor} transition-colors group-hover:bg-primary group-hover:text-primary-foreground`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
      <div className="text-muted-foreground/50 group-hover:text-primary transition-colors self-center hidden sm:block">
        {Icons.chevronRight}
      </div>
    </Link>
  );
}

// Section header component
function SectionHeader({
  title,
  subtitle,
  number,
  theme,
}: {
  title: string;
  subtitle: string;
  number: number | string;
  theme: { number: string };
}) {
  return (
    <div className="mb-4 sm:mb-5">
      <div className="flex items-center gap-2 sm:gap-3 mb-1">
        <span className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full text-sm sm:text-base font-bold ${theme.number}`}>
          {number}
        </span>
        <h2 className="text-base sm:text-lg font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground ml-9 sm:ml-11">{subtitle}</p>
    </div>
  );
}

function NebulaContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Clean and minimal with Task Board on right */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-content px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10">
                <svg className="h-6 w-6 sm:h-7 sm:w-7 text-primary" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="12" opacity="1" />
                  <circle cx="50" cy="50" r="22" opacity="0.4" />
                  <circle cx="50" cy="50" r="32" opacity="0.2" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl sm:text-3xl font-bold text-foreground">Nebula</h1>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Interview Preparation for Principal TPM at Mag7
                </p>
              </div>
            </div>
            <Link
              href="/nebula/tasks"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all text-sm sm:text-base font-medium text-muted-foreground hover:text-primary"
            >
              {Icons.list}
              <span className="hidden sm:inline">Task Board</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content - Three Pillars */}
      <main className="mx-auto max-w-content px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6">
        {/* Pillar 1: Learn */}
        <section className={`rounded-xl border ${pillars.learn.theme.border} ${pillars.learn.theme.bg} p-4 sm:p-6`}>
          <SectionHeader
            number={1}
            title={pillars.learn.title}
            subtitle={pillars.learn.subtitle}
            theme={pillars.learn.theme}
          />
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.learn.items.map((item) => (
              <NavCard key={item.href} {...item} theme={pillars.learn.theme} />
            ))}
          </div>
        </section>

        {/* Pillar 2: Practice */}
        <section className={`rounded-xl border ${pillars.practice.theme.border} ${pillars.practice.theme.bg} p-4 sm:p-6`}>
          <SectionHeader
            number={2}
            title={pillars.practice.title}
            subtitle={pillars.practice.subtitle}
            theme={pillars.practice.theme}
          />
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.practice.items.map((item) => (
              <NavCard key={item.href} {...item} theme={pillars.practice.theme} />
            ))}
          </div>
        </section>

        {/* Pillar 3: Portfolio */}
        <section className={`rounded-xl border ${pillars.portfolio.theme.border} ${pillars.portfolio.theme.bg} p-4 sm:p-6`}>
          <SectionHeader
            number={3}
            title={pillars.portfolio.title}
            subtitle={pillars.portfolio.subtitle}
            theme={pillars.portfolio.theme}
          />
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {pillars.portfolio.items.map((item) => (
              <NavCard key={item.href} {...item} theme={pillars.portfolio.theme} />
            ))}
          </div>
        </section>

        {/* Deep Dive Projects - Special Section */}
        <section className={`rounded-xl border ${sectionThemes.deepDive.border} ${sectionThemes.deepDive.bg} p-4 sm:p-6`}>
          <SectionHeader
            number="+"
            title="Deep Dive Projects"
            subtitle="Complete system design walkthroughs with documented thinking process"
            theme={sectionThemes.deepDive}
          />
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {deepDiveProjects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group rounded-lg border border-border bg-card p-4 sm:p-5 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${sectionThemes.deepDive.iconBg} ${sectionThemes.deepDive.iconColor} transition-colors group-hover:bg-primary group-hover:text-primary-foreground`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-muted-foreground/50 group-hover:text-primary transition-colors self-center hidden sm:block">
                    {Icons.chevronRight}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
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
