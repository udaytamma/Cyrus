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

interface IngredientScannerDocsLayoutProps {
  children: React.ReactNode;
}

const navigation: NavSection[] = [
  {
    title: "AI Ingredient Scanner",
    icon: "🔬",
    items: [{ title: "AI Ingredient Scanner", href: "/docs/ingredient-scanner" }],
  },
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/docs/ingredient-scanner" },
      { title: "Quick Start", href: "/docs/ingredient-scanner/getting-started" },
      { title: "Architecture", href: "/docs/ingredient-scanner/architecture" },
    ],
  },
  {
    title: "Backend",
    items: [
      { title: "Agents", href: "/docs/ingredient-scanner/agents" },
      { title: "API Reference", href: "/docs/ingredient-scanner/api-reference" },
      { title: "Vector Database", href: "/docs/ingredient-scanner/vector-database" },
    ],
  },
  {
    title: "Mobile App",
    items: [
      { title: "Setup Guide", href: "/docs/ingredient-scanner/mobile-setup" },
      { title: "Components", href: "/docs/ingredient-scanner/mobile-components" },
      { title: "Authentication", href: "/docs/ingredient-scanner/authentication" },
      { title: "OCR & Translation", href: "/docs/ingredient-scanner/ocr-translation" },
      { title: "Theme System", href: "/docs/ingredient-scanner/theme-system" },
    ],
  },
  {
    title: "Operations",
    items: [
      { title: "Testing", href: "/docs/ingredient-scanner/testing" },
      { title: "Deployment", href: "/docs/ingredient-scanner/deployment" },
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

export function IngredientScannerDocsLayout({ children }: IngredientScannerDocsLayoutProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "AI Ingredient Scanner": true,
    "Getting Started": true,
    Backend: true,
    "Mobile App": true,
    Operations: true,
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
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-border bg-muted/30 p-4 lg:block">
            <nav className="space-y-1">
              {navigation.map((section, sectionIndex) => (
                <div key={section.title} className="mb-2">
                  {sectionIndex === 0 ? (
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

            {/* Back to Projects link */}
            <div className="mt-8 border-t border-border pt-4">
              <Link
                href="/projects/ingredient-scanner"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Project
              </Link>
            </div>
          </aside>

          {/* Mobile navigation */}
          <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
            <details className="group rounded-xl border border-border bg-card shadow-lg">
              <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium">
                <span>🔬 Ingredient Scanner Docs</span>
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
                <div className="mt-3 border-t border-border pt-3">
                  <Link href="/projects/ingredient-scanner" className="block rounded px-2 py-1 text-sm text-muted-foreground">
                    ← Back to Project
                  </Link>
                </div>
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
