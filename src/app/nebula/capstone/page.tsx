"use client";

/**
 * Capstone Projects - Professional Landing Page
 *
 * Clean, organized overview of all capstone projects with:
 * - WIP Projects at top (primary focus)
 * - Featured/Selected projects
 * - Clear categorization by LLM source (collapsed by default)
 * - Professional card design with consistent spacing
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { CapstoneLayout } from "@/components/CapstoneLayout";
import {
  llmSources,
  getProjectsByLLM,
  selectedProjects,
  wipProjects,
  tagColors,
} from "@/data/capstoneProjects";

// Hook to detect mobile viewport
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

function CapstoneContent() {
  const [expandedLLMs, setExpandedLLMs] = useState<Set<string>>(new Set());
  const isMobile = useIsMobile();

  const toggleLLM = (llmId: string) => {
    setExpandedLLMs((prev) => {
      const next = new Set(prev);
      if (next.has(llmId)) {
        next.delete(llmId);
      } else {
        next.add(llmId);
      }
      return next;
    });
  };

  return (
    <div className="max-w-[1100px] mx-auto">
      {/* Header */}
      <header className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Capstone Projects
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          {isMobile
            ? "AI/TPM Portfolio for Mag7 Roles"
            : "AI/TPM Portfolio Projects for Senior Technical Program Manager Roles at Mag7"}
        </p>
        <div className="flex justify-center gap-6 md:gap-8 mt-6 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">20</div>
            <div className="text-xs text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">4</div>
            <div className="text-xs text-muted-foreground">LLM Sources</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-xs text-muted-foreground">Selected</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">2</div>
            <div className="text-xs text-muted-foreground">WIP</div>
          </div>
        </div>
      </header>

      {/* WIP Projects - Primary Focus */}
      <section className="mb-8 p-5 rounded-xl border-2 border-amber-500 bg-gradient-to-br from-amber-50/50 to-amber-100/30 dark:from-amber-900/10 dark:to-amber-800/5">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🚧</span>
          <h2 className="text-xl font-bold text-amber-800 dark:text-amber-400">
            Work in Progress
          </h2>
          {!isMobile && (
            <span className="text-sm text-amber-700/80 dark:text-amber-500/80">
              Active development
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wipProjects.map((project) => (
            <Link
              key={project.id}
              href={`/nebula/capstone/wip/${project.id}`}
              className="block p-4 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 border border-amber-400 dark:border-amber-600 hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-3">{project.icon}</span>
                <span className="font-semibold text-amber-900 dark:text-amber-100">
                  {project.title}
                </span>
                <span className="ml-2 px-2 py-0.5 bg-amber-800 text-amber-100 dark:bg-amber-400 dark:text-amber-900 rounded text-[10px] font-semibold uppercase">
                  WIP
                </span>
              </div>
              <div className="text-sm text-amber-800/90 dark:text-amber-200/80">
                {project.description}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-border">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-3">
            <span className="text-primary">★</span> Selected Portfolio
          </h2>
          <Link
            href="/nebula/capstone/selected"
            className="text-sm text-primary hover:underline"
          >
            View Analysis →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {selectedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/nebula/capstone/selected/${project.id}`}
              className="block p-4 rounded-xl bg-card border border-border text-center hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-2">{project.icon}</div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {project.title}
              </div>
              <div className="text-xs text-primary mb-1">from {project.source}</div>
              <div className="text-xs text-muted-foreground">
                {project.description}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Projects by LLM - Collapsible */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-border">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-3">
            <span className="text-primary">📁</span> All Projects by LLM Source
          </h2>
          <Link
            href="/nebula/capstone/comparison"
            className="text-sm text-primary hover:underline"
          >
            Compare All →
          </Link>
        </div>

        {llmSources.map((llm) => {
          const isExpanded = expandedLLMs.has(llm.id);
          const projects = getProjectsByLLM(llm.id);

          return (
            <div
              key={llm.id}
              className="mb-3 bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleLLM(llm.id)}
                className="flex items-center gap-3 w-full p-4 text-left hover:bg-muted/30 transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-lg"
                  style={{ backgroundColor: llm.color }}
                >
                  {llm.icon}
                </div>
                <h3 className="flex-1 text-lg font-semibold text-foreground">
                  {llm.name}
                </h3>
                {!isMobile && (
                  <span className="text-sm text-muted-foreground mr-4">
                    {llm.description}
                  </span>
                )}
                <span
                  className={`text-xs text-muted-foreground transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {isExpanded ? (
                <div className="p-4 pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projects.map((project, index) => (
                      <Link
                        key={project.id}
                        href={`/nebula/capstone/${project.id}`}
                        className="block p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                            style={{ backgroundColor: llm.color }}
                          >
                            {index + 1}
                          </span>
                          <span className="font-semibold text-foreground">
                            {project.title}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {project.summary}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag.label}
                              className={`px-2 py-0.5 rounded text-xs font-medium ${
                                tagColors[tag.type]?.bg || "bg-muted"
                              } ${tagColors[tag.type]?.text || "text-muted-foreground"}`}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 px-4 pb-4">
                  {projects.map((project, index) => (
                    <Link
                      key={project.id}
                      href={`/nebula/capstone/${project.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm border transition-colors hover:border-primary/50"
                      style={{
                        backgroundColor: `${llm.color}10`,
                        borderColor: `${llm.color}30`,
                      }}
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                        style={{ backgroundColor: llm.color }}
                      >
                        {index + 1}
                      </span>
                      {project.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Quick Navigation */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <Link
          href="/nebula/capstone/comparison"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
        >
          View Comparison Matrix
        </Link>
        <Link
          href="/nebula/capstone/selected"
          className="px-6 py-3 bg-transparent text-primary border border-primary rounded-lg text-center font-medium hover:bg-primary/10 transition-colors"
        >
          Selected Portfolio Analysis
        </Link>
      </div>
    </div>
  );
}

export default function CapstoneProjectsPage() {
  return (
    <CapstoneLayout
      title="Capstone Projects"
      description="AI/TPM Portfolio Projects for Senior TPM Roles"
    >
      <CapstoneContent />
    </CapstoneLayout>
  );
}
