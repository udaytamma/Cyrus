"use client";

/**
 * CapstoneLayout - Shared layout for all capstone project pages
 * Includes sidebar with favorites, LLM categories, and project navigation
 */

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthGate } from "./AuthGate";
import {
  llmSources,
  getProjectsByLLM,
  selectedProjects,
  wipProjects,
} from "@/data/capstoneProjects";

interface CapstoneLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  currentProjectId?: string;
  currentLLM?: string;
}

// Hook to detect mobile viewport
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

// Collapsible section component for sidebar
function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-5 mb-2 bg-transparent border-none cursor-pointer text-left"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {title}
        </span>
        <span
          className={`text-xs text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && children}
    </div>
  );
}

// Sidebar component
function Sidebar({ currentProjectId, currentLLM }: { currentProjectId?: string; currentLLM?: string }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const isSelectedSection = pathname.includes("/selected");
  const isWipSection = pathname.includes("/wip");
  const isComparisonPage = pathname.includes("/comparison");

  if (isMobile) {
    return (
      <aside className="w-full border-b border-border py-4 bg-muted/50">
        <div className="px-4">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/nebula"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              ← Nebula
            </Link>
            <Link
              href="/nebula/capstone"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm transition-colors ${
                !currentProjectId && !currentLLM && !isSelectedSection && !isWipSection && !isComparisonPage
                  ? "border-primary bg-primary/10 text-primary font-medium"
                  : "border-border text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              All Projects
            </Link>
            <Link
              href="/nebula/capstone/comparison"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm transition-colors ${
                isComparisonPage
                  ? "border-primary bg-primary/10 text-primary font-medium"
                  : "border-border text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              Compare
            </Link>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-[280px] flex-shrink-0 border-r border-border py-6 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto bg-muted/50">
      {/* Navigation */}
      <div className="mb-6">
        <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Navigation
        </div>
        <ul className="space-y-1">
          <li>
            <Link
              href="/nebula"
              className="flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <span className="text-base w-5 text-center">←</span>
              Back to Nebula
            </Link>
          </li>
          <li>
            <Link
              href="/nebula/capstone"
              className={`flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] transition-colors ${
                !currentProjectId && !currentLLM && !isSelectedSection && !isWipSection && !isComparisonPage
                  ? "border-primary bg-primary/10 text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              <span className="text-base w-5 text-center">📁</span>
              All Projects
            </Link>
          </li>
          <li>
            <Link
              href="/nebula/capstone/comparison"
              className={`flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] transition-colors ${
                isComparisonPage
                  ? "border-primary bg-primary/10 text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              <span className="text-base w-5 text-center">⚖️</span>
              Comparison
            </Link>
          </li>
        </ul>
      </div>

      {/* Selected Projects */}
      <CollapsibleSection title="Selected Portfolio" defaultOpen={isSelectedSection}>
        <ul className="space-y-1">
          <li>
            <Link
              href="/nebula/capstone/selected"
              className={`flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] transition-colors ${
                isSelectedSection && !currentProjectId
                  ? "border-primary bg-primary/10 text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              <span className="text-base w-5 text-center">✓</span>
              Overview
            </Link>
          </li>
          {selectedProjects.map((project) => {
            const isActive = isSelectedSection && pathname.includes(project.id);
            return (
              <li key={project.id}>
                <Link
                  href={`/nebula/capstone/selected/${project.id}`}
                  className={`flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] transition-colors ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  <span className="text-base w-5 text-center">{project.icon}</span>
                  {project.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </CollapsibleSection>

      {/* By LLM Source */}
      <CollapsibleSection title="By LLM Source" defaultOpen={!!currentLLM}>
        <ul className="space-y-1">
          {llmSources.map((llm) => {
            const isActive = currentLLM === llm.id && !currentProjectId;
            return (
              <li key={llm.id}>
                <Link
                  href={`/nebula/capstone/${llm.id}`}
                  className={`flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] transition-colors ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  <span className="text-base w-5 text-center" style={{ color: llm.color }}>
                    {llm.icon}
                  </span>
                  {llm.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </CollapsibleSection>

      {/* Current LLM Projects - if on a project page */}
      {currentLLM && (
        <div className="mb-6">
          <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {llmSources.find((l) => l.id === currentLLM)?.name} Projects
          </div>
          <ul className="space-y-1">
            {getProjectsByLLM(currentLLM).map((project) => {
              const isActive = currentProjectId === project.id;
              return (
                <li key={project.id}>
                  <Link
                    href={`/nebula/capstone/${project.id}`}
                    className={`flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] transition-colors ${
                      isActive
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    <span className="text-base w-5 text-center">{project.icon}</span>
                    {project.shortTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* WIP Projects */}
      <CollapsibleSection title="WIP Projects" defaultOpen={isWipSection}>
        <ul className="space-y-1">
          {wipProjects.map((project) => {
            const isActive = isWipSection && pathname.includes(project.id);
            return (
              <li key={project.id}>
                <Link
                  href={`/nebula/capstone/wip/${project.id}`}
                  className={`flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] transition-colors ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  <span className="text-base w-5 text-center">{project.icon}</span>
                  {project.title}
                  <span className="ml-auto px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                    WIP
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </CollapsibleSection>
    </aside>
  );
}

// Layout content
function CapstoneLayoutContent({
  children,
  currentProjectId,
  currentLLM,
}: {
  children: ReactNode;
  currentProjectId?: string;
  currentLLM?: string;
}) {
  const isMobile = useIsMobile();

  return (
    <div className={`flex ${isMobile ? "flex-col" : ""} min-h-screen bg-background`}>
      <Sidebar currentProjectId={currentProjectId} currentLLM={currentLLM} />
      <main className={`flex-1 ${isMobile ? "p-4" : "p-8"} max-w-[1000px]`}>
        {children}
      </main>
    </div>
  );
}

// Export the wrapped layout
export function CapstoneLayout({
  children,
  currentProjectId,
  currentLLM,
}: CapstoneLayoutProps) {
  return (
    <AuthGate
      storageKey="cyrus_nebula_auth"
      title="Nebula"
      subtitle="Interview Preparation Hub"
    >
      <CapstoneLayoutContent
        currentProjectId={currentProjectId}
        currentLLM={currentLLM}
      >
        {children}
      </CapstoneLayoutContent>
    </AuthGate>
  );
}

// Project header component for individual project pages
export function ProjectHeader({
  title,
  tags,
}: {
  title: string;
  tags: { label: string; type: string }[];
}) {
  const tagStyles: Record<string, string> = {
    telecom: "bg-green-500/15 text-green-600 dark:text-green-400",
    enterprise: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    consumer: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
    infra: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
    ai: "bg-pink-500/15 text-pink-600 dark:text-pink-400",
  };

  return (
    <header className="mb-8 pb-6 border-b border-border">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`px-2.5 py-1 rounded-md text-xs font-medium ${tagStyles[tag.type] || "bg-muted text-muted-foreground"}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
    </header>
  );
}
