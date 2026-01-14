"use client";

/**
 * NebulaSearch - Global search across all Nebula documentation
 *
 * Features:
 * - Cmd/Ctrl+K keyboard shortcut
 * - Comprehensive search index covering all Nebula pages
 * - Fuzzy search with relevance scoring
 * - Keyboard navigation with visual feedback
 * - Elegant modal with category grouping
 * - Recent searches persistence
 */

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";

interface SearchResult {
  title: string;
  path: string;
  category: string;
  subcategory?: string;
  description?: string;
  tags?: string[];
}

// Comprehensive search index for all Nebula pages
const searchIndex: SearchResult[] = [
  // ============ NEBULA MAIN ============
  { title: "Nebula Hub", path: "/nebula", category: "Main", description: "Interview preparation hub" },

  // ============ INTERVIEW ============
  { title: "Interview Questions", path: "/nebula/questions", category: "Interview", description: "67 curated interview Q&A", tags: ["questions", "practice"] },
  { title: "Blindspots", path: "/nebula/blindspots", category: "Interview", description: "Deep technical questions", tags: ["technical", "gaps"] },

  // ============ CAPSTONE ============
  { title: "Capstone Projects", path: "/nebula/capstone", category: "Capstone", description: "Portfolio projects by LLM source" },
  { title: "ChatGPT Projects", path: "/nebula/capstone/chatgpt", category: "Capstone", subcategory: "LLM", tags: ["openai", "gpt"] },
  { title: "Claude Projects", path: "/nebula/capstone/claude", category: "Capstone", subcategory: "LLM", tags: ["anthropic"] },
  { title: "Gemini Projects", path: "/nebula/capstone/gemini", category: "Capstone", subcategory: "LLM", tags: ["google"] },
  { title: "Perplexity Projects", path: "/nebula/capstone/perplexity", category: "Capstone", subcategory: "LLM" },
  { title: "Selected Projects", path: "/nebula/capstone/selected", category: "Capstone", description: "Top 5 selected projects" },
  { title: "LLM Comparison", path: "/nebula/capstone/comparison", category: "Capstone", description: "Compare LLM recommendations" },

  // ============ SYSTEM DESIGN ============
  { title: "System Design Overview", path: "/nebula/system-design", category: "System Design", description: "Principal TPM competency matrix" },
  { title: "Competency Matrix", path: "/nebula/system-design/scope", category: "System Design", tags: ["skills", "competencies"] },
  { title: "Principal TPM Guide", path: "/nebula/system-design/guide", category: "System Design", description: "Comprehensive deep dive", tags: ["guide", "tpm"] },
  { title: "Practice Questions", path: "/nebula/system-design/practice", category: "System Design", description: "60 practice questions" },
  { title: "Practice: Fundamentals", path: "/nebula/system-design/practice/fundamentals", category: "System Design", subcategory: "Practice", tags: ["scaling", "caching"] },
  { title: "Practice: Cloud Economics", path: "/nebula/system-design/practice/cloud-economics", category: "System Design", subcategory: "Practice", tags: ["finops", "cost"] },
  { title: "Practice: SLA Math", path: "/nebula/system-design/practice/sla-math", category: "System Design", subcategory: "Practice", tags: ["slo", "availability"] },
  { title: "Practice: Compliance", path: "/nebula/system-design/practice/compliance-governance", category: "System Design", subcategory: "Practice", tags: ["gdpr", "pci"] },

  // ============ DEEP DIVES ============
  { title: "Deep Dives Index", path: "/nebula/system-design/deep-dives", category: "Deep Dives", description: "16 Principal-level topics" },
  { title: "SLA Mathematics", path: "/nebula/system-design/deep-dives/sla-mathematics", category: "Deep Dives", tags: ["slo", "error-budget"] },
  { title: "DR Economics", path: "/nebula/system-design/deep-dives/dr-economics", category: "Deep Dives", tags: ["disaster-recovery", "rpo", "rto"] },
  { title: "Capacity Planning", path: "/nebula/system-design/deep-dives/capacity-planning", category: "Deep Dives", tags: ["forecasting", "scaling"] },
  { title: "Deployment Strategies", path: "/nebula/system-design/deep-dives/deployment-strategies", category: "Deep Dives", tags: ["canary", "blue-green"] },
  { title: "Cloud Economics", path: "/nebula/system-design/deep-dives/cloud-economics", category: "Deep Dives", tags: ["finops", "cost"] },
  { title: "Compute Strategy", path: "/nebula/system-design/deep-dives/compute-strategy", category: "Deep Dives", tags: ["reserved", "spot"] },
  { title: "Storage Lifecycle", path: "/nebula/system-design/deep-dives/storage-lifecycle", category: "Deep Dives", tags: ["s3", "tiering"] },
  { title: "Network Costs", path: "/nebula/system-design/deep-dives/network-costs", category: "Deep Dives", tags: ["egress", "inter-az"] },
  { title: "Data Transfer", path: "/nebula/system-design/deep-dives/data-transfer", category: "Deep Dives", tags: ["cdn", "compression"] },
  { title: "CAPEX vs OPEX", path: "/nebula/system-design/deep-dives/capex-opex", category: "Deep Dives", tags: ["accounting", "unit-economics"] },
  { title: "Tagging & Chargeback", path: "/nebula/system-design/deep-dives/tagging-chargeback", category: "Deep Dives", tags: ["cost-attribution"] },
  { title: "K8s Economics", path: "/nebula/system-design/deep-dives/k8s-economics", category: "Deep Dives", tags: ["kubernetes", "resources"] },
  { title: "Multi-Cloud Strategy", path: "/nebula/system-design/deep-dives/vendor-strategy", category: "Deep Dives", tags: ["vendor-lock-in"] },
  { title: "Compliance & Governance", path: "/nebula/system-design/deep-dives/compliance-governance", category: "Deep Dives", tags: ["gdpr", "pci", "soc2"] },
  { title: "Payment Reliability", path: "/nebula/system-design/deep-dives/payment-reliability", category: "Deep Dives", tags: ["idempotency", "tokenization"] },
  { title: "Risk Quantification", path: "/nebula/system-design/deep-dives/risk-quantification", category: "Deep Dives", tags: ["tech-debt", "roi"] },

  // ============ FRAUD DETECTION THINKING ============
  { title: "Fraud Detection Thinking", path: "/nebula/fraud-detection-thinking", category: "Fraud Detection", description: "System design thought process" },
  { title: "Constraints First", path: "/nebula/fraud-detection-thinking/constraints", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Scope Definition", path: "/nebula/fraud-detection-thinking/scope", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Technology Choices", path: "/nebula/fraud-detection-thinking/technology", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Data Model", path: "/nebula/fraud-detection-thinking/data-model", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Decision Logic", path: "/nebula/fraud-detection-thinking/logic", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Failure Modes", path: "/nebula/fraud-detection-thinking/failure-modes", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Testing Strategy", path: "/nebula/fraud-detection-thinking/testing", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Design Checklist", path: "/nebula/fraud-detection-thinking/checklist", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Design Rationale", path: "/nebula/fraud-detection-thinking/rationale", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Data Points", path: "/nebula/fraud-detection-thinking/data-points", category: "Fraud Detection", subcategory: "Thinking" },
  { title: "Evaluation Criteria", path: "/nebula/fraud-detection-thinking/evaluation", category: "Fraud Detection", subcategory: "Thinking" },

  // ============ FRAUD DETECTION DESIGN ============
  { title: "Fraud Detection Design", path: "/nebula/fraud-detection-design", category: "Fraud Detection", description: "Technical design documents" },
  { title: "Tech Stack & Architecture", path: "/nebula/fraud-detection-design/part-1", category: "Fraud Detection", subcategory: "Design" },
  { title: "Entities & Features", path: "/nebula/fraud-detection-design/part-2", category: "Fraud Detection", subcategory: "Design" },
  { title: "Detection & Policy", path: "/nebula/fraud-detection-design/part-3", category: "Fraud Detection", subcategory: "Design" },
  { title: "Evidence & Economics", path: "/nebula/fraud-detection-design/part-4", category: "Fraud Detection", subcategory: "Design" },
  { title: "Testing & Monitoring", path: "/nebula/fraud-detection-design/part-5", category: "Fraud Detection", subcategory: "Design" },
  { title: "Sprint-1 Implementation", path: "/nebula/fraud-detection-design/part-6", category: "Fraud Detection", subcategory: "Design" },
  { title: "Demo Dashboard", path: "/nebula/fraud-detection-design/part-7", category: "Fraud Detection", subcategory: "Design" },
  { title: "Load Testing", path: "/nebula/fraud-detection-design/part-8", category: "Fraud Detection", subcategory: "Design" },

  // ============ TELEOPS THINKING ============
  { title: "TeleOps Thinking", path: "/nebula/teleops-thinking", category: "TeleOps", description: "TeleOps system design" },
  { title: "TeleOps Architecture", path: "/nebula/teleops-thinking/architecture", category: "TeleOps", subcategory: "Thinking" },
  { title: "TeleOps Constraints", path: "/nebula/teleops-thinking/constraints", category: "TeleOps", subcategory: "Thinking" },
  { title: "TeleOps Data Model", path: "/nebula/teleops-thinking/data-model", category: "TeleOps", subcategory: "Thinking" },
  { title: "TeleOps Design Rationale", path: "/nebula/teleops-thinking/design-rationale", category: "TeleOps", subcategory: "Thinking" },
  { title: "TeleOps Evaluation", path: "/nebula/teleops-thinking/evaluation", category: "TeleOps", subcategory: "Thinking" },
  { title: "TeleOps Governance", path: "/nebula/teleops-thinking/governance", category: "TeleOps", subcategory: "Thinking" },
  { title: "TeleOps Scope", path: "/nebula/teleops-thinking/scope", category: "TeleOps", subcategory: "Thinking" },
  { title: "TeleOps Testing", path: "/nebula/teleops-thinking/testing", category: "TeleOps", subcategory: "Thinking" },
  { title: "TeleOps Checklist", path: "/nebula/teleops-thinking/checklist", category: "TeleOps", subcategory: "Thinking" },
  { title: "TeleOps AI RAG", path: "/nebula/teleops-thinking/ai-rag", category: "TeleOps", subcategory: "Thinking", tags: ["rag", "llm"] },

  // ============ PLANNING ============
  { title: "Tasks Board", path: "/nebula/tasks", category: "Planning", description: "Weekly & backlog tasks" },
  { title: "Architecture Review", path: "/nebula/planning/fraud-detection-arch-review", category: "Planning", description: "Fraud platform review", tags: ["architecture", "security"] },
  { title: "Building Bricks", path: "/nebula/planning/fraud-detection-building-bricks", category: "Planning", description: "APIs, schemas, caching", tags: ["implementation", "api"] },

  // ============ RESOURCES ============
  { title: "Scratch Pad", path: "/nebula/scratch-pad", category: "Resources", description: "LLM conversation notes" },
  { title: "Future Enhancements", path: "/nebula/future-enhancements", category: "Resources", description: "Task backlog" },

  // ============ DOCS (existing) ============
  { title: "Email Assistant", path: "/docs/email-assistant", category: "Documentation", tags: ["project"] },
  { title: "Fraud Platform Docs", path: "/docs/fraud-platform", category: "Documentation", tags: ["project"] },
  { title: "Ingredient Scanner", path: "/docs/ingredient-scanner", category: "Documentation", tags: ["project"] },
  { title: "MindGames Docs", path: "/docs/mindgames", category: "Documentation", tags: ["project"] },
];

// Category colors for visual grouping
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Main": { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
  "Interview": { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/30" },
  "Capstone": { bg: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/30" },
  "System Design": { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/30" },
  "Deep Dives": { bg: "bg-indigo-500/10", text: "text-indigo-500", border: "border-indigo-500/30" },
  "Fraud Detection": { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/30" },
  "TeleOps": { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/30" },
  "Planning": { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/30" },
  "Resources": { bg: "bg-green-500/10", text: "text-green-500", border: "border-green-500/30" },
  "Documentation": { bg: "bg-slate-500/10", text: "text-slate-500", border: "border-slate-500/30" },
};

// Fuzzy search with relevance scoring
function searchWithRelevance(query: string, items: SearchResult[]): SearchResult[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  const words = lowerQuery.split(/\s+/).filter(w => w.length > 0);

  const scored = items.map(item => {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const categoryLower = item.category.toLowerCase();
    const descLower = item.description?.toLowerCase() || "";
    const tagsLower = item.tags?.map(t => t.toLowerCase()) || [];

    // Exact title match (highest priority)
    if (titleLower === lowerQuery) score += 100;
    // Title starts with query
    else if (titleLower.startsWith(lowerQuery)) score += 50;
    // Title contains query
    else if (titleLower.includes(lowerQuery)) score += 30;

    // Word-by-word matching
    for (const word of words) {
      if (titleLower.includes(word)) score += 20;
      if (categoryLower.includes(word)) score += 10;
      if (descLower.includes(word)) score += 5;
      if (tagsLower.some(tag => tag.includes(word))) score += 15;
    }

    // Category match boost
    if (categoryLower.includes(lowerQuery)) score += 15;

    return { item, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map(s => s.item);
}

// Get recent searches from localStorage
function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("nebula-recent-searches");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(query: string) {
  if (typeof window === "undefined" || !query.trim()) return;
  try {
    const recent = getRecentSearches();
    const updated = [query, ...recent.filter(r => r !== query)].slice(0, 5);
    localStorage.setItem("nebula-recent-searches", JSON.stringify(updated));
  } catch {
    // Ignore storage errors
  }
}

export function NebulaSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => searchWithRelevance(query, searchIndex), [query]);

  // Load recent searches on mount
  useEffect(() => {
    setRecentSearches(getRecentSearches());
  }, [isOpen]);

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current && results.length > 0) {
      const selectedEl = resultsRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      selectedEl?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [selectedIndex, results.length]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        navigateTo(results[selectedIndex].path);
      }
    },
    [results, selectedIndex]
  );

  const navigateTo = (path: string) => {
    if (query.trim()) {
      saveRecentSearch(query.trim());
    }
    router.push(path);
    setIsOpen(false);
    setQuery("");
  };

  const handleRecentClick = (recent: string) => {
    setQuery(recent);
  };

  // Group results by category
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    results.forEach(result => {
      if (!groups[result.category]) {
        groups[result.category] = [];
      }
      groups[result.category].push(result);
    });
    return groups;
  }, [results]);

  // Flatten for keyboard navigation index
  const flattenedResults = useMemo(() => {
    const flat: SearchResult[] = [];
    Object.values(groupedResults).forEach(group => {
      flat.push(...group);
    });
    return flat;
  }, [groupedResults]);

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:border-primary/50 group"
        aria-label="Search documentation"
      >
        <svg className="h-4 w-4 transition-colors group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Search...</span>
        <kbd className="ml-1 hidden rounded bg-background/80 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-block border border-border/50">
          ⌘K
        </kbd>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[8vh] sm:pt-[12vh]">
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-background/60 backdrop-blur-md"
            onClick={() => {
              setIsOpen(false);
              setQuery("");
            }}
          />

          {/* Modal Container */}
          <div
            className="relative mx-4 w-full max-w-2xl rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            {/* Search Header */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-border/50">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search Nebula, System Design, Fraud Detection..."
                className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground/60"
              />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
                className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Results Area */}
            <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto overscroll-contain">
              {/* No query - show recent searches */}
              {!query.trim() && (
                <div className="p-4">
                  {recentSearches.length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-1">
                        Recent Searches
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((recent, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleRecentClick(recent)}
                            className="px-3 py-1.5 rounded-lg bg-muted/50 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          >
                            {recent}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Links */}
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-1">
                    Quick Links
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { title: "System Design", path: "/nebula/system-design", icon: "🏗️" },
                      { title: "Interview Questions", path: "/nebula/questions", icon: "❓" },
                      { title: "Deep Dives", path: "/nebula/system-design/deep-dives", icon: "🔬" },
                      { title: "Tasks", path: "/nebula/tasks", icon: "📋" },
                    ].map((link) => (
                      <button
                        key={link.path}
                        onClick={() => navigateTo(link.path)}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-muted/30 hover:bg-muted text-sm text-left transition-colors"
                      >
                        <span className="text-base">{link.icon}</span>
                        <span className="text-foreground">{link.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search results */}
              {query.trim() && results.length > 0 && (
                <div className="p-2">
                  {Object.entries(groupedResults).map(([category, items]) => {
                    const colors = categoryColors[category] || categoryColors["Main"];
                    return (
                      <div key={category} className="mb-3">
                        <div className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-1 ${colors.text}`}>
                          {category}
                        </div>
                        <div className="space-y-0.5">
                          {items.map((result) => {
                            const globalIndex = flattenedResults.indexOf(result);
                            const isSelected = globalIndex === selectedIndex;
                            return (
                              <button
                                key={result.path}
                                data-index={globalIndex}
                                onClick={() => navigateTo(result.path)}
                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                                  isSelected
                                    ? `${colors.bg} ${colors.border} border`
                                    : "hover:bg-muted/50 border border-transparent"
                                }`}
                              >
                                <div className="flex-1 min-w-0">
                                  <div className={`font-medium truncate ${isSelected ? colors.text : "text-foreground"}`}>
                                    {result.title}
                                  </div>
                                  {(result.description || result.subcategory) && (
                                    <div className="text-xs text-muted-foreground truncate mt-0.5">
                                      {result.subcategory && <span className="opacity-70">{result.subcategory} · </span>}
                                      {result.description}
                                    </div>
                                  )}
                                </div>
                                <svg
                                  className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "translate-x-0.5 " + colors.text : "text-muted-foreground/50"}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* No results */}
              {query.trim() && results.length === 0 && (
                <div className="py-12 px-4 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted/50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-foreground font-medium mb-1">No results found</div>
                  <div className="text-sm text-muted-foreground">
                    Try searching for &quot;system design&quot;, &quot;fraud&quot;, or &quot;interview&quot;
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-border/50 bg-muted/30 text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-background border border-border/50 font-mono text-[10px]">↑↓</kbd>
                  <span>Navigate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-background border border-border/50 font-mono text-[10px]">↵</kbd>
                  <span>Open</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-background border border-border/50 font-mono text-[10px]">esc</kbd>
                  <span>Close</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>{searchIndex.length} pages indexed</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
