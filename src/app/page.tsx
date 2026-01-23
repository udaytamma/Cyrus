"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useChat } from "@/context/ChatContext";

// Icons for feature cards
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function NetworkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  );
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// Project card icons based on project type
function getProjectIcon(projectId: string) {
  const icons: Record<string, React.ReactNode> = {
    "fraud-detection": <ShieldIcon className="h-5 w-5 text-primary" />,
    "telcoops": <NetworkIcon className="h-5 w-5 text-primary" />,
    "professor-gemini": <BrainIcon className="h-5 w-5 text-primary" />,
    "mindgames": <BrainIcon className="h-5 w-5 text-primary" />,
    "ingredient-scanner": <BrainIcon className="h-5 w-5 text-primary" />,
    "email-assistant": <MailIcon className="h-5 w-5 text-primary" />,
    "ai-chat-assistant": <BrainIcon className="h-5 w-5 text-primary" />,
  };
  return icons[projectId] || <BriefcaseIcon className="h-5 w-5 text-primary" />;
}

// Project subtitles
const projectSubtitles: Record<string, string> = {
  "fraud-detection": "For Telcos & MSPs",
  "telcoops": "Incident Root Cause Analysis",
  "professor-gemini": "AI Learning Platform",
  "mindgames": "Mental Math Training",
  "ingredient-scanner": "Food & Cosmetic Safety",
  "email-assistant": "AI-Powered Email Management",
  "ai-chat-assistant": "Resume & Portfolio AI",
};

// Projects that should show "Live" tag (deployed/accessible)
const liveProjects = new Set([
  "fraud-detection",
  "professor-gemini",
  "mindgames",
  "ingredient-scanner",
  "ai-chat-assistant",
]);

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const isCapstone = project.category === "capstone";
  const isLive = liveProjects.has(project.id) || !!project.links.demo;

  return (
    <div className={`group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-xl ${
      isCapstone
        ? "border-l-4 border-l-primary border-t-border border-r-border border-b-border"
        : "border-l-4 border-l-primary/40 border-t-border border-r-border border-b-border"
    }`}>
      {/* Header with icon and badges */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
            {getProjectIcon(project.id)}
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title.split(" ").slice(0, 4).join(" ")}
            </h3>
            <p className="text-sm text-muted-foreground">{projectSubtitles[project.id]}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium border ${
            isCapstone
              ? "border-primary/30 text-primary"
              : "border-muted-foreground/20 text-muted-foreground"
          }`}>
            {isCapstone ? "Capstone" : "Hobby"}
          </span>
          {isLive && (
            <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-medium text-white">
              Live
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="mb-5 flex gap-8">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <div className="text-xl font-bold text-primary">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Technologies */}
      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-muted/80 px-3 py-1 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="rounded-full bg-muted/80 px-3 py-1 text-xs text-muted-foreground">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        )}
        {project.links.docs && (
          <Link
            href={project.links.docs}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Docs
          </Link>
        )}
      </div>
    </div>
  );
}

// Feature card component for About section
function FeatureCard({
  icon,
  title,
  description,
  gradient
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${gradient || "bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20"}`}>
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

// Component to handle URL parameters - needs to be wrapped in Suspense
function OpenChatHandler() {
  const searchParams = useSearchParams();
  const { openChat } = useChat();

  useEffect(() => {
    if (searchParams.get("openChat") === "true") {
      openChat();
      // Clean up the URL without refreshing the page
      window.history.replaceState({}, "", "/");
    }
  }, [searchParams, openChat]);

  return null;
}

// Suggested questions for AI assistant
const SUGGESTED_QUESTIONS = [
  "Tell me about opsGPT",
  "What's your GenAI experience?",
  "How did you improve MTTR by 42%?",
];

export default function Home() {
  const { openChat, openChatWithMessage } = useChat();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const capstoneProjects = projects.filter((p) => p.category === "capstone");
  const hobbyProjects = projects.filter((p) => p.category === "hobby");

  // Track scroll to show/hide scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator after any meaningful scroll (50px)
      setShowScrollIndicator(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Handle openChat query parameter */}
      <Suspense fallback={null}>
        <OpenChatHandler />
      </Suspense>

      {/* Hero Section - Full viewport height on desktop */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-amber-50/50 via-background to-background dark:from-amber-950/10">
        <div className="mx-auto w-full max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="mb-10 relative">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 shadow-lg shadow-primary/10 sm:h-36 sm:w-36">
                <span className="text-5xl font-bold text-primary sm:text-6xl">UT</span>
              </div>
              {/* Subtle glow */}
              <div className="absolute inset-0 -z-10 blur-2xl bg-primary/20 rounded-full scale-150" />
            </div>

            {/* Name */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Uday Tamma
            </h1>

            {/* Title with colored keywords */}
            <p className="mb-2 text-base text-muted-foreground sm:text-lg md:text-xl px-2">
              Director / Principal Technical Program Manager specializing in
            </p>
            <p className="mb-14 sm:mb-16 md:mb-20 text-base sm:text-lg md:text-xl px-2">
              <span className="font-semibold text-primary">AI</span>
              <span className="text-muted-foreground">, </span>
              <span className="font-semibold text-primary">Engineering</span>
              <span className="text-muted-foreground">, and </span>
              <span className="font-semibold text-primary">Enterprise Transformation</span>
            </p>

            {/* Stats */}
            <div className="mb-14 sm:mb-16 md:mb-20 flex items-center justify-center gap-8 sm:gap-12 md:gap-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">18+</div>
                <div className="text-sm text-muted-foreground">Years IT</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground sm:text-4xl">7</div>
                <div className="text-sm text-muted-foreground">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">AI/ML</div>
                <div className="text-sm text-muted-foreground">Focus</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
              <div className="flex flex-col items-center order-2 sm:order-1">
                <button
                  onClick={() => openChat()}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/favicon.svg" alt="" className="h-5 w-5" />
                  Ask My AI Assistant
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center order-1 sm:order-2">
                <Link
                  href="/projects"
                  className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-border bg-background px-8 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted"
                >
                  View Projects
                </Link>
                <span className="mt-2 text-xs text-transparent sm:hidden">&nbsp;</span>
              </div>
            </div>

            {/* AI Assistant Suggestions */}
            <div className="mt-8 sm:mt-10 flex flex-col items-center">
              <p className="mb-4 text-sm text-muted-foreground">Try asking my AI assistant:</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    onClick={() => openChatWithMessage(question)}
                    className="px-4 py-2 text-sm rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors border border-transparent hover:border-border"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator - fixed at bottom of viewport, hidden on mobile and after scrolling */}
        {showScrollIndicator && (
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden sm:flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-foreground cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5 transition-colors hover:border-primary/50">
              <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground/50" />
            </div>
          </button>
        )}

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-primary/3 blur-3xl" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-muted/30 py-12 sm:py-16 md:py-20 scroll-mt-16">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="mb-8 sm:mb-10 md:mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              18+ years transforming enterprises through technical leadership, from RF engineering roots to directing AI and engineering initiatives
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<BriefcaseIcon className="h-6 w-6 text-amber-600 dark:text-amber-400" />}
              title="GenAI Pioneer"
              description="Led development of opsGPT and amAIz Billing Assistant using Nvidia NeMo, Mistral-7B, and RAG architectures"
              gradient="bg-gradient-to-br from-amber-100 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/20"
            />
            <FeatureCard
              icon={<ServerIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />}
              title="SRE Transformation"
              description="Architected self-healing systems achieving 99.9% availability and 42% MTTR improvement"
              gradient="bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/20"
            />
            <FeatureCard
              icon={<ChartIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
              title="Business Impact"
              description="Generated $1.5M+ revenue through strategic initiatives and reduced AHT by 63%"
              gradient="bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/20"
            />
            <FeatureCard
              icon={<UsersIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
              title="Team Leadership"
              description="Led cross-functional teams of 50+ engineers across global time zones"
              gradient="bg-gradient-to-br from-purple-100 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/20"
            />
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Experience */}
            <div>
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <BriefcaseIcon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Experience</h2>
              </div>
              <div className="space-y-8">
                <div className="relative border-l-2 border-primary/40 pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-primary/20" />
                  <span className="text-sm font-semibold text-primary">2010 - 2025</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">Director / Principal Technical Program Manager</h3>
                  <p className="text-muted-foreground">Amdocs</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Led AI initiatives, engineering transformation, and enterprise-wide observability programs</p>
                </div>
                <div className="relative border-l-2 border-muted-foreground/20 pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary/40 bg-background" />
                  <span className="text-sm font-semibold text-primary/70">Earlier</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">Java/Web Developer</h3>
                  <p className="text-muted-foreground">Wolfram Research</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Full-stack development and web applications</p>
                </div>
                <div className="relative border-l-2 border-muted-foreground/20 pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary/40 bg-background" />
                  <span className="text-sm font-semibold text-primary/70">Earlier</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">Sr. Software Engineer</h3>
                  <p className="text-muted-foreground">Lucid Technologies</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Software engineering and system design</p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Education</h2>
              </div>
              <div className="mb-10 space-y-4">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground">MBA</h3>
                  <p className="text-sm text-muted-foreground">University of Illinois at Urbana-Champaign</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground">MS Electrical Engineering</h3>
                  <p className="text-sm text-muted-foreground">University of Texas at Arlington</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">SAFe Agilist</span>
                <span className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">GenAI with LLMs (Coursera)</span>
                <span className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">AWS Cloud Practitioner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-muted/30 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="mb-8 sm:mb-10 md:mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              AI-powered solutions demonstrating principal-level engineering and modern tech stacks
            </p>
          </div>

          {/* Capstone Projects */}
          <div className="mb-8 sm:mb-10 md:mb-14">
            <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Capstone Projects</h3>
              <span className="text-xs sm:text-sm text-muted-foreground">Enterprise-grade systems</span>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {capstoneProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Hobby Projects */}
          <div>
            <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="h-3 w-3 rounded-full bg-primary/50" />
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Hobby Projects</h3>
              <span className="text-xs sm:text-sm text-muted-foreground">AI & automation explorations</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {hobbyProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all projects
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 scroll-mt-16">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="mb-8 sm:mb-10 md:mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Interested in discussing AI initiatives, engineering transformation, or technical leadership opportunities? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            <a
              href="mailto:udaytamma@zeroleaf.dev"
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <MailIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">udaytamma@zeroleaf.dev</p>
            </a>

            <a
              href="https://linkedin.com/in/udaytamma"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <LinkedInIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </a>
          </div>

          {/* AI Assistant CTA */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-muted-foreground">Or ask my AI assistant any questions about my experience</p>
            <button
              onClick={() => openChat()}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted hover:shadow-md"
            >
  {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/favicon.svg" alt="" className="h-5 w-5" />
              Chat with AI Assistant
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
