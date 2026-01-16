"use client";

/**
 * SystemDesignLayout - Shared layout for System Design pages
 * Includes collapsible sidebar with navigation to all sections
 * Uses global ScrollProgress from layout.tsx (no duplicate here)
 */

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { AuthGate } from "./AuthGate";
import { SidebarCollapseButton } from "./SidebarCollapseButton";

interface SystemDesignLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  currentSection?: string;
}

// Section navigation data - System Design
const systemDesignSections = [
  { id: "index", title: "Overview", icon: "🏗️", path: "/nebula/system-design" },
  { id: "scope", number: "1", title: "Competency Matrix", path: "/nebula/system-design/scope" },
  { id: "guide", number: "2", title: "Principal TPM Guide", path: "/nebula/system-design/guide" },
  { id: "practice", number: "3", title: "Practice Questions", path: "/nebula/system-design/practice" },
  { id: "deep-dives", number: "4", title: "Deep Dives", path: "/nebula/system-design/deep-dives" },
];

// Get next and previous sections for navigation
export function getSystemDesignNavigation(currentSection: string): {
  prev?: (typeof systemDesignSections)[0];
  next?: (typeof systemDesignSections)[0];
} {
  const currentIndex = systemDesignSections.findIndex((s) => s.id === currentSection);
  return {
    prev: currentIndex > 0 ? systemDesignSections[currentIndex - 1] : undefined,
    next: currentIndex < systemDesignSections.length - 1 ? systemDesignSections[currentIndex + 1] : undefined,
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

        {/* System Design Sections */}
        <div>
          <div className="px-4 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            System Design
          </div>
          <ul className="flex flex-wrap gap-2 px-4">
            {systemDesignSections.map((section) => {
              const isActive = currentSection === section.id;
              return (
                <li key={section.id}>
                  <Link
                    href={section.path}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm ${
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
                </li>
              );
            })}
          </ul>
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

      {/* System Design Sections */}
      <div className="mb-6">
        {!isCollapsed && (
          <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            System Design
          </div>
        )}
        <ul className="space-y-1">
          {systemDesignSections.map((section) => {
            const isActive = currentSection === section.id;
            return (
              <li key={section.id}>
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
function SystemDesignLayoutContent({
  children,
  currentSection,
}: {
  children: ReactNode;
  currentSection?: string;
}) {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false); // Default: open (not collapsed)

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
        {children}
      </main>
    </div>
  );
}

// Export the wrapped layout
export function SystemDesignLayout({
  children,
  currentSection,
}: SystemDesignLayoutProps) {
  return (
    <AuthGate
      storageKey="cyrus_nebula_auth"
      title="Nebula"
      subtitle="Interview Preparation Hub"
    >
      <SystemDesignLayoutContent currentSection={currentSection}>
        {children}
      </SystemDesignLayoutContent>
    </AuthGate>
  );
}
