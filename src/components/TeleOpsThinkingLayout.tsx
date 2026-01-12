"use client";

/**
 * TeleOpsThinkingLayout - Shared layout for TeleOps Thinking Process pages
 * Includes sidebar with navigation to all sections
 */

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { AuthGate } from "./AuthGate";

interface TeleOpsThinkingLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  currentSection?: string;
}

const thinkingSections = [
  { id: "index", title: "Overview", icon: "🎯", path: "/nebula/teleops-thinking" },
  { id: "constraints", number: "1", title: "Constraints First", path: "/nebula/teleops-thinking/constraints" },
  { id: "scope", number: "2", title: "Scope Definition", path: "/nebula/teleops-thinking/scope" },
  { id: "architecture", number: "3", title: "System Architecture", path: "/nebula/teleops-thinking/architecture" },
  { id: "data-model", number: "4", title: "Data Model", path: "/nebula/teleops-thinking/data-model" },
  { id: "ai-rag", number: "5", title: "AI + RAG Pipeline", path: "/nebula/teleops-thinking/ai-rag" },
  { id: "evaluation", number: "6", title: "Evaluation Strategy", path: "/nebula/teleops-thinking/evaluation" },
  { id: "design-rationale", number: "7", title: "Design Rationale", path: "/nebula/teleops-thinking/design-rationale" },
  { id: "governance", number: "8", title: "Governance & Safety", path: "/nebula/teleops-thinking/governance" },
  { id: "testing", number: "9", title: "Testing & Validation", path: "/nebula/teleops-thinking/testing" },
  { id: "checklist", number: "10", title: "Checklist", path: "/nebula/teleops-thinking/checklist" },
];

const relatedDocs = [
  { id: "telcoops-docs", title: "TelcoOps Docs", icon: "📚", path: "/docs/telcoops" },
  { id: "telcoops-project", title: "TelcoOps Project", icon: "🧭", path: "/projects/telcoops" },
];

export function getTeleOpsNavigation(currentSection: string): {
  prev?: (typeof thinkingSections)[0];
  next?: (typeof thinkingSections)[0];
} {
  const currentIndex = thinkingSections.findIndex((section) => section.id === currentSection);
  return {
    prev: currentIndex > 0 ? thinkingSections[currentIndex - 1] : undefined,
    next: currentIndex < thinkingSections.length - 1 ? thinkingSections[currentIndex + 1] : undefined,
  };
}

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

function Sidebar({ currentSection }: { currentSection?: string }) {
  const isMobile = useIsMobile();

  return (
    <aside
      className={`${
        isMobile
          ? "w-full border-b border-border py-4"
          : "w-[280px] flex-shrink-0 border-r border-border py-6 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto"
      } bg-muted/50`}
    >
      <div className="mb-6">
        <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Navigation
        </div>
        <ul className={`${isMobile ? "flex flex-wrap gap-2 px-4" : "space-y-1"}`}>
          <li>
            <Link
              href="/nebula"
              className={`${
                isMobile
                  ? "inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-sm"
                  : "flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] border-transparent"
              } text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors`}
            >
              <span className="text-base">←</span>
              Back to Nebula
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Thinking Process
        </div>
        <ul className={`${isMobile ? "flex flex-wrap gap-2 px-4" : "space-y-1"}`}>
          {thinkingSections.map((section) => {
            const isActive = currentSection === section.id;
            return (
              <li key={section.id}>
                <Link
                  href={section.path}
                  className={`${
                    isMobile
                      ? `inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm ${
                          isActive
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-border text-muted-foreground hover:text-primary hover:bg-primary/10"
                        }`
                      : `flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] ${
                          isActive
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
                        }`
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
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mb-6">
        <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Related Docs
        </div>
        <ul className={`${isMobile ? "flex flex-wrap gap-2 px-4" : "space-y-1"}`}>
          {relatedDocs.map((doc) => {
            const isActive = currentSection === doc.id;
            return (
              <li key={doc.id}>
                <Link
                  href={doc.path}
                  className={`${
                    isMobile
                      ? `inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm ${
                          isActive
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-border text-muted-foreground hover:text-primary hover:bg-primary/10"
                        }`
                      : `flex items-center gap-3 px-5 py-2 text-sm border-l-[3px] ${
                          isActive
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
                        }`
                  } transition-colors`}
                >
                  <span className="text-base w-5 text-center">{doc.icon}</span>
                  {doc.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

function TeleOpsThinkingLayoutContent({
  children,
  currentSection,
}: {
  children: ReactNode;
  currentSection?: string;
}) {
  const isMobile = useIsMobile();

  return (
    <div className={`flex ${isMobile ? "flex-col" : ""} min-h-screen bg-background`}>
      <Sidebar currentSection={currentSection} />
      <main className={`flex-1 ${isMobile ? "p-4" : "p-8"} max-w-[1000px]`}>
        {children}
      </main>
    </div>
  );
}

export function TeleOpsThinkingLayout({
  children,
  currentSection,
}: TeleOpsThinkingLayoutProps) {
  return (
    <AuthGate storageKey="cyrus_nebula_auth" title="Nebula" subtitle="Interview Preparation Hub">
      <TeleOpsThinkingLayoutContent currentSection={currentSection}>
        {children}
      </TeleOpsThinkingLayoutContent>
    </AuthGate>
  );
}
