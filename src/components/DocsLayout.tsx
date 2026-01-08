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

interface DocsLayoutProps {
  children: React.ReactNode;
}

const navigation: NavSection[] = [
  {
    title: "Fraud Detection Platform",
    icon: "🛡️",
    items: [{ title: "Fraud Detection Platform", href: "/docs/fraud-platform" }],
  },
  {
    title: "Executive Overview",
    items: [
      { title: "Executive Overview", href: "/docs/fraud-platform/executive-overview" },
      { title: "TPM Execution Strategy", href: "/docs/fraud-platform/tpm-execution-strategy" },
      { title: "AI/ML Roadmap", href: "/docs/fraud-platform/ai-ml-roadmap" },
      { title: "Results & Personas", href: "/docs/fraud-platform/results-personas" },
    ],
  },
  {
    title: "Technical Overview",
    items: [
      { title: "Getting Started", href: "/docs/fraud-platform/getting-started" },
      { title: "Architecture", href: "/docs/fraud-platform/architecture" },
      { title: "API Reference", href: "/docs/fraud-platform/api-reference" },
      { title: "Demo Dashboard", href: "/docs/fraud-platform/demo-dashboard" },
      { title: "Testing & Performance", href: "/docs/fraud-platform/testing-performance" },
      { title: "Full Design Document", href: "/docs/fraud-platform/full-design-document" },
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

export function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "Fraud Detection Platform": true,
    "Executive Overview": true,
    "Technical Overview": true,
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
                    // First section - main title with icon
                    <div className="mb-3">
                      <Link
                        href={section.items[0].href}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                          isActive(section.items[0].href)
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {section.icon && <span>{section.icon}</span>}
                        {section.items[0].title}
                      </Link>
                    </div>
                  ) : (
                    // Collapsible sections
                    <>
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        <span>{section.title}</span>
                        <ChevronIcon expanded={expandedSections[section.title]} />
                      </button>
                      {expandedSections[section.title] && (
                        <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block rounded-lg px-3 py-1.5 text-sm transition-colors ${
                                isActive(item.href)
                                  ? "bg-primary/10 font-medium text-primary"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                              }`}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Mobile navigation */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <details className="group rounded-xl border border-border bg-card shadow-lg">
              <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium">
                <span>Documentation Menu</span>
                <svg
                  className="h-4 w-4 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <nav className="max-h-[70vh] overflow-y-auto border-t border-border p-4">
                {navigation.map((section) => (
                  <div key={section.title} className="mb-3">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {section.title}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded px-2 py-1 text-sm ${
                          isActive(item.href) ? "bg-primary/10 text-primary" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </nav>
            </details>
          </div>

          {/* Main content */}
          <main className="min-w-0 flex-1 px-4 py-8 md:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
