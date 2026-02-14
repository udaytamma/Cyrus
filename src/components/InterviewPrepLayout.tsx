"use client";

/**
 * InterviewPrepLayout - Shared layout for Interview Prep pages
 * Includes collapsible sidebar with navigation to all sections
 */

import { ReactNode, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AuthGate } from "./AuthGate";
import { SidebarCollapseButton } from "./SidebarCollapseButton";
import { PageMinimap } from "./PageMinimap";

interface InterviewPrepLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  currentSection?: string;
}

// Section navigation data - Interview Prep (grouped logically)
const interviewPrepSections = [
  // Overview (no group header)
  { id: "index", title: "Overview", icon: "🎤", path: "/nebula/interview-prep", group: "" },
  // Foundation
  { id: "vernacular", number: "0", title: "Principal TPM Vernacular", path: "/nebula/interview-prep/vernacular", group: "Foundation" },
  { id: "tell-me-about-yourself", number: "1", title: "Tell Me About Yourself", path: "/nebula/interview-prep/tell-me-about-yourself", group: "Foundation" },
  // Anchor Stories
  { id: "tandem-incident-management", number: "2", title: "Tandem Incident Management", path: "/nebula/interview-prep/tandem-incident-management", group: "Anchor Stories" },
  { id: "soc-audit-automation", number: "3", title: "SOC Audit Automation", path: "/nebula/interview-prep/soc-audit-automation", group: "Anchor Stories" },
  { id: "card-vault-pci", number: "4", title: "Card Vault / PCI", path: "/nebula/interview-prep/card-vault-pci", group: "Anchor Stories" },
  { id: "sdl-migration", number: "5", title: "SDL Migration", path: "/nebula/interview-prep/sdl-migration", group: "Anchor Stories" },
  { id: "apm", number: "6", title: "APM", path: "/nebula/interview-prep/apm", group: "Anchor Stories" },
  { id: "card-vault-story", number: "14", title: "Card Vault Story", path: "/nebula/interview-prep/card-vault-story", group: "Anchor Stories" },
  { id: "migration-story", number: "16", title: "Migration Story", path: "/nebula/interview-prep/migration-story", group: "Anchor Stories" },
  { id: "billing-recovery", number: "17", title: "Billing Recovery", path: "/nebula/interview-prep/billing-recovery", group: "Anchor Stories" },
  // Supporting Stories
  { id: "more-stories", number: "7", title: "More STAR Stories", path: "/nebula/interview-prep/more-stories", group: "Supporting Stories" },
  { id: "failure-regret", number: "10", title: "Failure & Regret Stories", path: "/nebula/interview-prep/failure-regret", group: "Supporting Stories" },
  // Frameworks & Templates
  { id: "decision-memo", number: "8", title: "Decision Memo (Template)", path: "/nebula/interview-prep/decision-memo", group: "Frameworks" },
  { id: "why-us-template", number: "9", title: "Why Us? (Template)", path: "/nebula/interview-prep/why-us-template", group: "Frameworks" },
  { id: "story-pivot-map", number: "12", title: "Story Pivot Map", path: "/nebula/interview-prep/story-pivot-map", group: "Frameworks" },
  // Strategy & Calibration
  { id: "stripe-questions", number: "11", title: "Stripe Questions", path: "/nebula/interview-prep/stripe-questions", group: "Calibration" },
  { id: "the-20-percent-leap", number: "13", title: "The 20% Leap", path: "/nebula/interview-prep/the-20-percent-leap", group: "Calibration" },
  { id: "the-1-percent-difference", number: "15", title: "The 1% Difference", path: "/nebula/interview-prep/the-1-percent-difference", group: "Calibration" },
  // Reference
  { id: "how-billing-works", number: "18", title: "How Billing Works", path: "/nebula/interview-prep/how-billing-works", group: "Reference" },
];

// Get next and previous sections for navigation
export function getInterviewPrepNavigation(currentSection: string): {
  prev?: (typeof interviewPrepSections)[0];
  next?: (typeof interviewPrepSections)[0];
} {
  const currentIndex = interviewPrepSections.findIndex((s) => s.id === currentSection);
  return {
    prev: currentIndex > 0 ? interviewPrepSections[currentIndex - 1] : undefined,
    next: currentIndex < interviewPrepSections.length - 1 ? interviewPrepSections[currentIndex + 1] : undefined,
  };
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

// Sidebar component with collapsible functionality
function Sidebar({ currentSection, isCollapsed, onToggle }: {
  currentSection?: string;
  isCollapsed: boolean;
  onToggle: () => void;
}) {
  const isMobile = useIsMobile();

  // Mobile: always show full sidebar (horizontal layout)
  if (isMobile) {
    return (
      <aside className="w-full border-b border-border py-4 bg-muted/50">
        {/* Navigation */}
        <div className="mb-4">
          <div className="px-4 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Navigation
          </div>
          <ul className="flex flex-wrap gap-2 px-4">
            <li>
              <Link
                href="/nebula"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <span className="text-base">&larr;</span>
                Back to Nebula
              </Link>
            </li>
          </ul>
        </div>

        {/* Interview Prep Sections */}
        <div className="px-4">
          {interviewPrepSections.map((section, idx) => {
            const isActive = currentSection === section.id;
            const prevGroup = idx > 0 ? interviewPrepSections[idx - 1].group : "";
            const showGroupHeader = section.group && section.group !== prevGroup;
            return (
              <span key={section.id}>
                {showGroupHeader && (
                  <div className="w-full mt-3 mb-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                    {section.group}
                  </div>
                )}
                <Link
                  href={section.path}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm mr-2 mb-2 ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-border text-muted-foreground hover:text-primary hover:bg-primary/10"
                  } transition-colors`}
                >
                  {section.icon ? (
                    <span className="text-base w-5 text-center">{section.icon}</span>
                  ) : (
                    <span className="w-5 h-5 rounded bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                      {section.number}
                    </span>
                  )}
                  {section.title}
                </Link>
              </span>
            );
          })}
        </div>
      </aside>
    );
  }

  // Desktop: collapsible sidebar
  return (
    <aside
      className={`${
        isCollapsed ? "w-[60px]" : "w-[280px]"
      } flex-shrink-0 border-r border-border py-6 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto bg-muted/50 transition-all duration-300`}
    >
      {/* Collapse Toggle Button */}
      <SidebarCollapseButton
        isCollapsed={isCollapsed}
        onToggle={onToggle}
        position="edge"
      />

      {/* Navigation */}
      <div className="mb-6">
        {!isCollapsed && (
          <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Navigation
          </div>
        )}
        <ul className="space-y-1">
          <li>
            <Link
              href="/nebula"
              className={`flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors ${
                isCollapsed ? "justify-center px-2" : ""
              }`}
              title="Back to Nebula"
            >
              <span className="text-base">&larr;</span>
              {!isCollapsed && "Back to Nebula"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Interview Prep Sections */}
      <div className="mb-6">
        <ul className="space-y-1">
          {interviewPrepSections.map((section, idx) => {
            const isActive = currentSection === section.id;
            const prevGroup = idx > 0 ? interviewPrepSections[idx - 1].group : "";
            const showGroupHeader = section.group && section.group !== prevGroup;
            return (
              <li key={section.id}>
                {showGroupHeader && !isCollapsed && (
                  <div className="px-5 pt-4 pb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                    {section.group}
                  </div>
                )}
                {showGroupHeader && isCollapsed && (
                  <div className="mx-2 mt-3 mb-1 border-t border-border/50" />
                )}
                <Link
                  href={section.path}
                  className={`flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
                  } transition-colors ${isCollapsed ? "justify-center px-2" : ""}`}
                  title={section.title}
                >
                  {section.icon ? (
                    <span className="text-base w-5 text-center">{section.icon}</span>
                  ) : (
                    <span className="w-5 h-5 rounded bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0">
                      {section.number}
                    </span>
                  )}
                  {!isCollapsed && section.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

// Layout content
function InterviewPrepLayoutContent({
  children,
  currentSection,
}: {
  children: ReactNode;
  currentSection?: string;
}) {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const contentRef = useRef<HTMLElement | null>(null);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex ${isMobile ? "flex-col" : ""} min-h-screen bg-background`}>
      <Sidebar
        currentSection={currentSection}
        isCollapsed={isCollapsed}
        onToggle={handleToggle}
      />
      <main className={`flex-1 ${isMobile ? "p-4" : "p-8"} max-w-[1200px]`}>
        <div className={`flex ${isMobile ? "flex-col" : "gap-8"}`}>
          <article ref={contentRef} className="min-w-0 flex-1 xl:pr-72">
            {children}
          </article>
          <PageMinimap
            targetRef={contentRef}
            levels={[2]}
            labelMode="roman-title"
            widthClass="w-56 lg:w-64"
            className="hidden xl:block xl:fixed xl:right-4 xl:top-24"
          />
        </div>
      </main>
    </div>
  );
}

// Export the wrapped layout
export function InterviewPrepLayout({
  children,
  currentSection,
}: InterviewPrepLayoutProps) {
  return (
    <AuthGate
      storageKey="cyrus_nebula_auth"
      title="Nebula"
      subtitle="Interview Preparation Hub"
    >
      <InterviewPrepLayoutContent currentSection={currentSection}>
        {children}
      </InterviewPrepLayoutContent>
    </AuthGate>
  );
}
