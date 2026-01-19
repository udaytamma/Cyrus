"use client";

/**
 * DocSearch Component
 *
 * Client-side search across documentation pages.
 * Features:
 * - Keyboard shortcut (Cmd/Ctrl + K)
 * - Fuzzy search across titles and content
 * - Mobile-friendly modal design
 * - Highlighted search results
 */

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";

interface SearchResult {
  title: string;
  path: string;
  section?: string;
  excerpt?: string;
}

// Static search index - titles and paths for all doc pages
const searchIndex: SearchResult[] = [
  // Email Assistant
  { title: "Email Assistant", path: "/docs/email-assistant", section: "Email Assistant" },
  { title: "Getting Started", path: "/docs/email-assistant/getting-started", section: "Email Assistant" },
  { title: "AI Categorization", path: "/docs/email-assistant/ai-categorization", section: "Email Assistant" },
  { title: "Daily Digest", path: "/docs/email-assistant/daily-digest", section: "Email Assistant" },
  { title: "Architecture", path: "/docs/email-assistant/architecture", section: "Email Assistant" },
  { title: "API Endpoints", path: "/docs/email-assistant/api-endpoints", section: "Email Assistant" },
  { title: "Caching", path: "/docs/email-assistant/caching", section: "Email Assistant" },
  { title: "Metrics Dashboard", path: "/docs/email-assistant/metrics-dashboard", section: "Email Assistant" },
  { title: "Testing", path: "/docs/email-assistant/testing", section: "Email Assistant" },
  { title: "Deployment", path: "/docs/email-assistant/deployment", section: "Email Assistant" },

  // Fraud Platform
  { title: "Fraud Detection Platform", path: "/docs/fraud-platform", section: "Fraud Platform" },
  { title: "Executive Overview", path: "/docs/fraud-platform/executive-overview", section: "Fraud Platform" },
  { title: "Getting Started", path: "/docs/fraud-platform/getting-started", section: "Fraud Platform" },
  { title: "Architecture", path: "/docs/fraud-platform/architecture", section: "Fraud Platform" },
  { title: "API Reference", path: "/docs/fraud-platform/api-reference", section: "Fraud Platform" },
  { title: "AI/ML Roadmap", path: "/docs/fraud-platform/ai-ml-roadmap", section: "Fraud Platform" },
  { title: "TPM Execution Strategy", path: "/docs/fraud-platform/tpm-execution-strategy", section: "Fraud Platform" },
  { title: "Results & Personas", path: "/docs/fraud-platform/results-personas", section: "Fraud Platform" },
  { title: "Demo Dashboard", path: "/docs/fraud-platform/demo-dashboard", section: "Fraud Platform" },
  { title: "Testing & Performance", path: "/docs/fraud-platform/testing-performance", section: "Fraud Platform" },

  // Ingredient Scanner
  { title: "Ingredient Scanner", path: "/docs/ingredient-scanner", section: "Ingredient Scanner" },
  { title: "Getting Started", path: "/docs/ingredient-scanner/getting-started", section: "Ingredient Scanner" },
  { title: "Architecture", path: "/docs/ingredient-scanner/architecture", section: "Ingredient Scanner" },
  { title: "Agents", path: "/docs/ingredient-scanner/agents", section: "Ingredient Scanner" },
  { title: "Vector Database", path: "/docs/ingredient-scanner/vector-database", section: "Ingredient Scanner" },
  { title: "OCR & Translation", path: "/docs/ingredient-scanner/ocr-translation", section: "Ingredient Scanner" },
  { title: "Mobile Setup", path: "/docs/ingredient-scanner/mobile-setup", section: "Ingredient Scanner" },
  { title: "Mobile Components", path: "/docs/ingredient-scanner/mobile-components", section: "Ingredient Scanner" },
  { title: "Authentication", path: "/docs/ingredient-scanner/authentication", section: "Ingredient Scanner" },
  { title: "Theme System", path: "/docs/ingredient-scanner/theme-system", section: "Ingredient Scanner" },
  { title: "API Reference", path: "/docs/ingredient-scanner/api-reference", section: "Ingredient Scanner" },
  { title: "Testing", path: "/docs/ingredient-scanner/testing", section: "Ingredient Scanner" },
  { title: "Deployment", path: "/docs/ingredient-scanner/deployment", section: "Ingredient Scanner" },

  // MindGames
  { title: "MindGames", path: "/docs/mindgames", section: "MindGames" },
  { title: "Getting Started", path: "/docs/mindgames/getting-started", section: "MindGames" },
  { title: "Architecture", path: "/docs/mindgames/architecture", section: "MindGames" },
  { title: "Testing", path: "/docs/mindgames/testing", section: "MindGames" },
  { title: "Roadmap", path: "/docs/mindgames/roadmap", section: "MindGames" },
];

function fuzzySearch(query: string, items: SearchResult[]): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  return items
    .filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const sectionMatch = item.section?.toLowerCase().includes(lowerQuery);
      return titleMatch || sectionMatch;
    })
    .slice(0, 8); // Limit to 8 results
}

export function DocSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const results = useMemo(
    () => (query.trim() ? fuzzySearch(query, searchIndex) : []),
    [query]
  );

  // Open/close with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        router.push(results[selectedIndex].path);
        setIsOpen(false);
        setQuery("");
        setSelectedIndex(0);
      }
    },
    [results, selectedIndex, router]
  );

  const handleResultClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setSelectedIndex(0);
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground w-full sm:w-auto"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Search docs...</span>
        <span className="sm:hidden">Search...</span>
        <kbd className="ml-auto hidden rounded bg-muted px-1.5 py-0.5 text-xs font-medium sm:inline-block">
          ⌘K
        </kbd>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[15vh]">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative mx-4 w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl">
            {/* Search Input */}
            <div className="flex items-center border-b border-border px-4 py-3">
              <SearchIcon className="mr-3 h-5 w-5 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="ml-2 rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Results */}
            {query.trim() && (
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {results.length > 0 ? (
                  <ul className="space-y-1">
                    {results.map((result, index) => (
                      <li key={result.path}>
                        <button
                          onClick={() => handleResultClick(result.path)}
                          className={`w-full rounded-lg px-3 py-2.5 text-left transition-colors ${
                            index === selectedIndex
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted"
                          }`}
                        >
                          <div className="font-medium">{result.title}</div>
                          {result.section && (
                            <div className="text-sm text-muted-foreground">
                              {result.section}
                            </div>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-8 text-center text-muted-foreground">
                    No results found for &quot;{query}&quot;
                  </div>
                )}
              </div>
            )}

            {/* Empty State */}
            {!query.trim() && (
              <div className="p-4 text-center text-sm text-muted-foreground">
                Start typing to search documentation
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <kbd className="rounded bg-muted px-1.5 py-0.5">↑↓</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="rounded bg-muted px-1.5 py-0.5">↵</kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="rounded bg-muted px-1.5 py-0.5">esc</kbd>
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
