"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  href: string;
}

interface NavSection {
  title: string;
  icon?: string;
  items: NavItem[];
}

interface ProfessorGeminiDocsLayoutProps {
  children: React.ReactNode;
}

const navigation: NavSection[] = [
  {
    title: "Professor Gemini",
    icon: "🎓",
    items: [{ title: "Professor Gemini", href: "/docs/professor-gemini" }],
  },
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/docs/professor-gemini" },
      { title: "Quick Start", href: "/docs/professor-gemini/getting-started" },
      { title: "Architecture", href: "/docs/professor-gemini/architecture" },
    ],
  },
  {
    title: "Pipeline",
    items: [
      { title: "Pipeline Steps", href: "/docs/professor-gemini/pipeline" },
      { title: "Bar Raiser Critique", href: "/docs/professor-gemini/bar-raiser" },
      { title: "Optimization Modes", href: "/docs/professor-gemini/optimization" },
    ],
  },
  {
    title: "Configuration",
    items: [
      { title: "Environment Setup", href: "/docs/professor-gemini/configuration" },
      { title: "Theme System", href: "/docs/professor-gemini/theme" },
    ],
  },
];

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${expanded ? "rotate-90" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function ProfessorGeminiDocsLayout({ children }: ProfessorGeminiDocsLayoutProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "Professor Gemini": true,
    "Getting Started": true,
    Pipeline: true,
    Configuration: true,
  });

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex">
          {/* Sidebar */}
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-border bg-muted/30 p-4 md:block">
            <nav className="space-y-1">
              {navigation.map((section, sectionIndex) => (
                <div key={section.title} className="mb-2">
                  {sectionIndex === 0 ? (
                    <Link
                      href={section.items[0].href}
                      className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground"
                    >
                      <span>{section.icon}</span>
                      <span>{section.title}</span>
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="flex w-full items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        <span>{section.title}</span>
                        <ChevronIcon expanded={expandedSections[section.title]} />
                      </button>
                      {expandedSections[section.title] && (
                        <ul className="ml-2 space-y-1 border-l border-border pl-3">
                          {section.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={`block py-1.5 text-sm transition-colors ${
                                  isActive(item.href)
                                    ? "font-medium text-primary"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="min-w-0 flex-1 px-4 py-8 md:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
