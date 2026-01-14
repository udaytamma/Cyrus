"use client";

/**
 * ThinkingLayout - Shared layout for Fraud Detection Thinking Process pages
 * Includes sidebar with navigation to all sections
 */

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { AuthGate } from "./AuthGate";

interface ThinkingLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  currentSection?: string;
}

// Section navigation data - Thinking Process
const thinkingSections = [
  { id: "index", title: "Overview", icon: "🎯", path: "/nebula/fraud-detection-thinking" },
  { id: "constraints", number: "1", title: "Constraints First", path: "/nebula/fraud-detection-thinking/constraints" },
  { id: "scope", number: "2", title: "Scope Definition", path: "/nebula/fraud-detection-thinking/scope" },
  { id: "technology", number: "3", title: "Technology Selection", path: "/nebula/fraud-detection-thinking/technology" },
  { id: "data-model", number: "4", title: "Data Model", path: "/nebula/fraud-detection-thinking/data-model" },
  { id: "logic-policy", number: "5", title: "Logic & Policy", path: "/nebula/fraud-detection-thinking/logic-policy" },
  { id: "failure-modes", number: "6", title: "Failure Modes", path: "/nebula/fraud-detection-thinking/failure-modes" },
  { id: "testing", number: "7", title: "Testing & Validation", path: "/nebula/fraud-detection-thinking/testing" },
  { id: "checklist", number: "8", title: "Checklist", path: "/nebula/fraud-detection-thinking/checklist" },
  { id: "design-rationale", number: "9", title: "Design Rationale", path: "/nebula/fraud-detection-thinking/design-rationale" },
  { id: "data-points", number: "10", title: "Data Points", path: "/nebula/fraud-detection-thinking/data-points" },
];

// Design documents
const designDocs = [
  { id: "design-overview", title: "Design Index", icon: "📋", path: "/nebula/fraud-detection-design" },
  { id: "part-1", number: "1", title: "Tech Stack & Architecture", path: "/nebula/fraud-detection-design/part-1" },
  { id: "part-2", number: "2", title: "Entities & Features", path: "/nebula/fraud-detection-design/part-2" },
  { id: "part-3", number: "3", title: "Detection & Policy", path: "/nebula/fraud-detection-design/part-3" },
  { id: "part-4", number: "4", title: "Evidence & Economics", path: "/nebula/fraud-detection-design/part-4" },
  { id: "part-5", number: "5", title: "Testing & Monitoring", path: "/nebula/fraud-detection-design/part-5" },
  { id: "part-6", number: "6", title: "Sprint-1 Implementation", path: "/nebula/fraud-detection-design/part-6" },
  { id: "part-7", number: "7", title: "Demo Dashboard", path: "/nebula/fraud-detection-design/part-7" },
  { id: "part-8", number: "8", title: "Load Testing", path: "/nebula/fraud-detection-design/part-8" },
  { id: "building-bricks", number: "9", title: "Building Bricks", path: "/nebula/planning/fraud-detection-building-bricks" },
];

// Get next and previous sections for navigation
export function getNavigation(currentSection: string): {
  prev?: (typeof thinkingSections)[0];
  next?: (typeof thinkingSections)[0];
} {
  const currentIndex = thinkingSections.findIndex((s) => s.id === currentSection);
  return {
    prev: currentIndex > 0 ? thinkingSections[currentIndex - 1] : undefined,
    next: currentIndex < thinkingSections.length - 1 ? thinkingSections[currentIndex + 1] : undefined,
  };
}

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

// Sidebar component
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
      {/* Navigation */}
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

      {/* Thinking Process Sections */}
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

      {/* Design Docs */}
      <div className="mb-6">
        <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Full Design Docs
        </div>
        <ul className={`${isMobile ? "flex flex-wrap gap-2 px-4" : "space-y-1"}`}>
          {designDocs.map((doc) => {
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
                  {doc.icon ? (
                    <span className="text-base w-5 text-center">{doc.icon}</span>
                  ) : (
                    <span className="w-5 h-5 rounded bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                      {doc.number}
                    </span>
                  )}
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

// Layout content
function ThinkingLayoutContent({
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

// Export the wrapped layout
export function ThinkingLayout({
  children,
  currentSection,
}: ThinkingLayoutProps) {
  return (
    <AuthGate
      storageKey="cyrus_nebula_auth"
      title="Nebula"
      subtitle="Interview Preparation Hub"
    >
      <ThinkingLayoutContent currentSection={currentSection}>
        {children}
      </ThinkingLayoutContent>
    </AuthGate>
  );
}
