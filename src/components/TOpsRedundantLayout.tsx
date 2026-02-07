"use client";

/**
 * TOpsRedundantLayout - Layout for archived TeleOps pages
 * Contains pages moved from main TeleOps Thinking section for organization
 */

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { AuthGate } from "./AuthGate";

interface TOpsRedundantLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  currentSection?: string;
}

const redundantSections = [
  { id: "index", title: "Overview", icon: "📦", path: "/nebula/tops-redundant" },
  { id: "design-rationale", number: "1", title: "Design Rationale", path: "/nebula/tops-redundant/design-rationale" },
];

const relatedDocs = [
  { id: "teleops-thinking", title: "TeleOps Thinking", icon: "🧠", path: "/nebula/teleops-thinking" },
  { id: "telcoops-project", title: "TelcoOps Project", icon: "🧭", path: "/projects/telcoops" },
];

export function getTOpsRedundantNavigation(currentSection: string): {
  prev?: (typeof redundantSections)[0];
  next?: (typeof redundantSections)[0];
} {
  const currentIndex = redundantSections.findIndex((section) => section.id === currentSection);
  return {
    prev: currentIndex > 0 ? redundantSections[currentIndex - 1] : undefined,
    next: currentIndex < redundantSections.length - 1 ? redundantSections[currentIndex + 1] : undefined,
  };
}

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
          Archived Pages
        </div>
        <ul className={`${isMobile ? "flex flex-wrap gap-2 px-4" : "space-y-1"}`}>
          {redundantSections.map((section) => {
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
          Related
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

function TOpsRedundantLayoutContent({
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

export function TOpsRedundantLayout({
  children,
  currentSection,
}: TOpsRedundantLayoutProps) {
  return (
    <AuthGate storageKey="cyrus_nebula_auth" title="Nebula" subtitle="Interview Preparation Hub">
      <TOpsRedundantLayoutContent currentSection={currentSection}>
        {children}
      </TOpsRedundantLayoutContent>
    </AuthGate>
  );
}
