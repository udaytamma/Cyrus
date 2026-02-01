"use client";

/**
 * GTMLayout - Shared layout for GTM Job Search Tracker pages
 * Includes collapsible sidebar with navigation to all sections
 */

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthGate } from "../AuthGate";
import { SidebarCollapseButton } from "../SidebarCollapseButton";
import { GTMProvider, useGTM } from "@/context/GTMContext";

interface GTMLayoutProps {
  children: ReactNode;
}

// Section navigation data
const gtmSections = [
  { id: "dashboard", title: "Dashboard", icon: "📊", path: "/gtm" },
  { id: "applications", title: "Applications", icon: "💼", path: "/gtm/applications" },
  { id: "stories", title: "Stories", icon: "📖", path: "/gtm/stories" },
  { id: "mocks", title: "Mocks", icon: "🎭", path: "/gtm/mocks" },
  { id: "drills", title: "Drills", icon: "🔧", path: "/gtm/drills" },
  { id: "networking", title: "Networking", icon: "🤝", path: "/gtm/networking" },
  { id: "rhythm", title: "Rhythm", icon: "📅", path: "/gtm/rhythm" },
  { id: "settings", title: "Settings", icon: "⚙️", path: "/gtm/settings" },
];

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

// Week indicator component
function WeekIndicator() {
  const { currentWeek, daysRemaining } = useGTM();

  return (
    <div className="px-5 py-3 mb-4 mx-3 rounded-lg bg-primary/10 border border-primary/20">
      <div className="text-xs font-medium text-primary uppercase tracking-wide">
        Campaign Progress
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-primary">Week {Math.min(currentWeek, 6)}</span>
        {currentWeek <= 6 && (
          <span className="text-xs text-muted-foreground">
            {daysRemaining} day{daysRemaining !== 1 ? "s" : ""} left
          </span>
        )}
        {currentWeek > 6 && (
          <span className="text-xs text-emerald-500 font-medium">Extended</span>
        )}
      </div>
    </div>
  );
}

// Sidebar component with collapsible functionality
function Sidebar({
  currentSection,
  isCollapsed,
  onToggle,
}: {
  currentSection: string;
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

        {/* GTM Sections */}
        <div>
          <div className="px-4 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            GTM Tracker
          </div>
          <ul className="flex flex-wrap gap-2 px-4">
            {gtmSections.map((section) => {
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
                    <span className="text-base w-5 text-center">{section.icon}</span>
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
      <SidebarCollapseButton isCollapsed={isCollapsed} onToggle={onToggle} position="edge" />

      {/* Week Indicator - only when expanded */}
      {!isCollapsed && <WeekIndicator />}

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

      {/* GTM Sections */}
      <div className="mb-6">
        {!isCollapsed && (
          <div className="px-5 mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            GTM Tracker
          </div>
        )}
        <ul className="space-y-1">
          {gtmSections.map((section) => {
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
                  <span className="text-base w-5 text-center">{section.icon}</span>
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

// Get current section from pathname
function getCurrentSection(pathname: string): string {
  if (pathname === "/gtm") return "dashboard";
  const parts = pathname.split("/");
  return parts[2] || "dashboard";
}

// Layout content (needs GTMProvider context)
function GTMLayoutContent({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const currentSection = getCurrentSection(pathname);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex ${isMobile ? "flex-col" : ""} min-h-screen bg-background`}>
      <Sidebar currentSection={currentSection} isCollapsed={isCollapsed} onToggle={handleToggle} />
      <main className={`flex-1 ${isMobile ? "p-4" : "p-8"} max-w-[1400px]`}>{children}</main>
    </div>
  );
}

// Export the wrapped layout
export function GTMLayout({ children }: GTMLayoutProps) {
  return (
    <AuthGate storageKey="cyrus_nebula_auth" title="GTM Tracker" subtitle="Job Search Campaign">
      <GTMProvider>
        <GTMLayoutContent>{children}</GTMLayoutContent>
      </GTMProvider>
    </AuthGate>
  );
}
