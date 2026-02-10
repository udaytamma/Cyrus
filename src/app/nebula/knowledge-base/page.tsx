"use client";

/**
 * Knowledge Base - Card Grid Design
 *
 * Clean visual redesign with:
 * - Minimal 80px sidebar with Part labels
 * - Card grid showing all documents at once
 * - Slide-over panel for document content
 */

import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AuthGate } from "@/components/AuthGate";
import {
  knowledgeBaseIndex,
  type KnowledgeBaseDocMeta,
} from "@/data/knowledge-base-index";
import { useKBContent } from "@/hooks/useKBContent";
import {
  allWikiDocs,
  isWikiSlug,
  getWikiSectionsForSlug,
  type KnowledgeBaseWikiSection,
} from "@/data/knowledge-base-wiki";
import mermaid from "mermaid";

// Initialize mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: "neutral",
  securityLevel: "loose",
  fontFamily: "inherit",
});

// ============================================================================
// Part & Document Organization
// ============================================================================

interface SubSection {
  name: string;
  slugs: string[];
}

// Part I: Strategy & Business Physics
const PART_I_SUBSECTIONS: SubSection[] = [
  { name: "Cloud Economics", slugs: ["cloud-economics-finops", "cost-model-fundamentals", "capex-vs-opex-mental-model", "reserved-vs-spot-strategy", "data-transfer-optimization"] },
  { name: "SLA Mathematics", slugs: ["sla-mathematics-reliability", "sloslasli-precision-matters", "composite-sla-calculation", "error-budgets-practical-application", "availability-tiers-reality-check"] },
  { name: "Compliance", slugs: ["compliance-data-sovereignty", "data-classification-framework", "gdpr-what-you-must-know", "pci-dss-for-payment-systems", "soc-2-trust-framework"] },
  { name: "Risk Quantification", slugs: ["risk-quantification", "expected-loss-calculation", "blast-radius-analysis", "technical-debt-quantification"] },
];

// Part II: Core Infrastructure
const PART_II_SUBSECTIONS: SubSection[] = [
  { name: "Scaling Architecture", slugs: ["scaling-architecture", "vertical-scaling-limits", "horizontal-scaling-patterns", "auto-scaling-strategies"] },
  { name: "Networking & Traffic", slugs: ["protocol-fundamentals", "dns-architecture", "load-balancing-deep-dive", "content-delivery-networks-cdn"] },
  { name: "Database Deep Dive", slugs: ["sql-vs-nosql-the-real-trade-offs", "cap-theorem-practical-understanding", "replication-patterns", "database-sharding-strategies"] },
  { name: "Migration Patterns", slugs: ["strangler-fig-pattern", "branch-by-abstraction", "dual-write-dual-read-pattern", "change-data-capture-cdc"] },
  { name: "Communication Patterns", slugs: ["synchronous-rest-vs-grpc-vs-graphql", "asynchronous-queues-vs-pubsub", "real-time-polling-vs-websockets", "idempotency-critical-concept"] },
];

// Part III: Advanced & AI
const PART_III_SUBSECTIONS: SubSection[] = [
  { name: "Distributed Consensus", slugs: ["the-consensus-problem", "leader-election", "paxos-and-raft"] },
  { name: "Global Architecture", slugs: ["latency-physics", "geo-routing", "multi-region-patterns"] },
  { name: "Resiliency Patterns", slugs: ["retry-strategies", "circuit-breaker", "bulkhead-pattern", "backpressure", "chaos-engineering"] },
  { name: "Probabilistic Data", slugs: ["bloom-filters", "hyperloglog-hll", "count-min-sketch", "trade-offs-summary"] },
  { name: "AI/ML Infrastructure", slugs: ["training-vs-inference", "data-architecture-patterns", "mlops-pipeline", "llm-serving-considerations", "vector-databases-and-rag"] },
  { name: "Observability", slugs: ["the-three-pillars-deep-dive", "the-golden-signals-google-sre", "distributed-tracing-architecture", "alerting-best-practices"] },
  { name: "Security Architecture", slugs: ["authentication-vs-authorization", "zero-trust-architecture", "encryption-strategy", "api-security"] },
];

// Part IV: Program Management
const PART_IV_SUBSECTIONS: SubSection[] = [
  { name: "Incident Management", slugs: ["incident-management-postmortems-for-principal-tpm-at-mag7"] },
  { name: "Agile at Scale", slugs: ["agile-at-scale-program-governance"] },
  { name: "FinOps Engineering", slugs: ["finops-cloud-cost-engineering"] },
  { name: "Team Topologies", slugs: ["team-topologies-conways-law"] },
  { name: "CI/CD Engineering", slugs: ["cicd-release-engineering"] },
  { name: "Data Governance", slugs: ["data-governance-privacy"] },
  { name: "Capacity Planning", slugs: ["capacity-planning-demand-forecasting"] },
  { name: "RFC Process", slugs: ["technical-strategy-rfc-process"] },
  { name: "Chaos Engineering", slugs: ["chaos-engineering-resilience-testing"] },
  { name: "Multi-Region", slugs: ["multi-region-architecture-global-deployment"] },
  { name: "Experimentation", slugs: ["experimentation-platforms-ab-testing"] },
  { name: "API Lifecycle", slugs: ["api-lifecycle-management-versioning"] },
];

// Part V: Drill-downs (Deep dives into specific domains)
const PART_V_SUBSECTIONS: SubSection[] = [
  { name: "Payment Systems", slugs: ["payment-systems-at-visa-scale"] },
  { name: "Notification Platform", slugs: ["notification-platform-system-design"] },
  { name: "Data Pipeline - Uber", slugs: ["data-pipeline-at-uber-batch-streaming-architecture"] },
  { name: "Data Pipeline - Netflix", slugs: ["data-pipeline-at-netflix-batch-streaming-architecture"] },
  { name: "Resilience & DR - AWS", slugs: ["resilience-disaster-recovery-at-awsamazon-scale"] },
  { name: "Resilience & DR - Netflix", slugs: ["resilience-disaster-recovery-at-netflix-scale"] },
  { name: "Vendor Management - Shopify", slugs: ["vendor-partner-program-management-at-shopify-scale"] },
  { name: "API Platform - Stripe", slugs: ["api-platform-developer-experience-at-stripe-scale"] },
  { name: "IAM - Okta", slugs: ["identity-access-management-at-okta-scale"] },
];

interface PartConfig {
  id: string;
  num: number;
  label: string;
  title: string;
  color: string;
  textColor: string;
  subsections: SubSection[];
}

const PARTS: PartConfig[] = [
  { id: "Wiki", num: 0, label: "W", title: "Cloud Provider Wiki", color: "bg-cyan-500/10 border-cyan-500/30", textColor: "text-cyan-500", subsections: [] },
  { id: "I", num: 1, label: "I", title: "Strategy & Business Physics", color: "bg-blue-500/10 border-blue-500/30", textColor: "text-blue-500", subsections: PART_I_SUBSECTIONS },
  { id: "II", num: 2, label: "II", title: "Core Infrastructure", color: "bg-green-500/10 border-green-500/30", textColor: "text-green-500", subsections: PART_II_SUBSECTIONS },
  { id: "III", num: 3, label: "III", title: "Advanced & AI", color: "bg-purple-500/10 border-purple-500/30", textColor: "text-purple-500", subsections: PART_III_SUBSECTIONS },
  { id: "IV", num: 4, label: "IV", title: "Program Management", color: "bg-orange-500/10 border-orange-500/30", textColor: "text-orange-500", subsections: PART_IV_SUBSECTIONS },
  { id: "V", num: 5, label: "V", title: "Drill-downs", color: "bg-rose-500/10 border-rose-500/30", textColor: "text-rose-500", subsections: PART_V_SUBSECTIONS },
];

// Helper to get ordered docs for a list of slugs
function getOrderedDocs(docs: KnowledgeBaseDocMeta[], slugs: string[]) {
  const slugSet = new Set(slugs);
  return docs.filter((d) => slugSet.has(d.slug)).sort((a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug));
}

// Get total doc count for a part
function getPartDocCount(subsections: SubSection[]): number {
  return subsections.reduce((acc, sub) => acc + sub.slugs.length, 0);
}

// ============================================================================
// Components
// ============================================================================

function MinimalSidebar({
  currentPart,
  onPartClick
}: {
  currentPart: string;
  onPartClick: (partId: string) => void;
}) {
  return (
    <nav className="fixed left-0 top-0 w-16 sm:w-20 h-screen bg-card/80 backdrop-blur-sm border-r border-border flex flex-col items-center py-4 sm:py-6 gap-1.5 sm:gap-2 z-40">
      <Link
        href="/nebula"
        className="mb-2 sm:mb-4 p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        title="Back to Nebula"
      >
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>

      <div className="w-6 sm:w-8 h-px bg-border mb-1 sm:mb-2" />

      {PARTS.map((part) => (
        <button
          key={part.id}
          onClick={() => onPartClick(part.id)}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold transition-all border ${
            currentPart === part.id
              ? part.color
              : "text-muted-foreground hover:text-foreground hover:bg-muted border-transparent"
          }`}
          title={part.title}
        >
          {part.label}
        </button>
      ))}
    </nav>
  );
}

function DocumentCard({
  doc,
  isSelected,
  onClick,
}: {
  doc: { slug: string; title: string; date?: string };
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left p-2.5 sm:p-3 rounded-lg border transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98] sm:hover:scale-[1.02] ${
        isSelected
          ? "border-primary bg-primary/5 shadow-md"
          : "border-border/50 bg-card/50 hover:bg-card"
      }`}
    >
      <h4 className="font-medium text-xs sm:text-sm text-foreground line-clamp-2 leading-snug">
        {doc.title}
      </h4>
      {doc.date && (
        <p className="text-[9px] sm:text-[10px] text-muted-foreground mt-1 sm:mt-1.5">
          {new Date(doc.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </p>
      )}
    </button>
  );
}

function PartSection({
  part,
  selectedSlug,
  onDocClick,
}: {
  part: PartConfig;
  selectedSlug: string | null;
  onDocClick: (slug: string) => void;
}) {
  const totalDocs = getPartDocCount(part.subsections);
  const isHorizontalLayout = part.id === "IV" || part.id === "V";

  return (
    <section id={`part-${part.id}`} className="mb-8 sm:mb-12 scroll-mt-6">
      {/* Part Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <span className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${part.color} ${part.textColor} border flex items-center justify-center text-xs sm:text-sm font-bold`}>
          {part.label}
        </span>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">{part.title}</h2>
          <p className="text-[10px] sm:text-xs text-muted-foreground">{totalDocs} documents</p>
        </div>
      </div>

      {/* Sub-sections - Horizontal layout for Parts IV & V, Vertical for others */}
      {isHorizontalLayout ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
          {part.subsections.map((subsection, subIdx) => {
            const docs = getOrderedDocs(knowledgeBaseIndex, subsection.slugs);
            const doc = docs[0]; // Each subsection has one doc
            if (!doc) return null;

            return (
              <button
                key={subsection.name}
                onClick={() => onDocClick(doc.slug)}
                className={`block w-full text-left p-3 sm:p-4 rounded-xl border transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98] sm:hover:scale-[1.02] ${
                  selectedSlug === doc.slug
                    ? "border-primary bg-primary/5 shadow-md"
                    : `border-border/50 bg-card/50 hover:bg-card ${part.color}`
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${part.color} ${part.textColor} border flex items-center justify-center text-[9px] sm:text-[10px] font-bold flex-shrink-0`}>
                    {subIdx + 1}
                  </span>
                  <span className={`${part.textColor} font-mono text-[9px] sm:text-[10px]`}>{part.num}.{subIdx + 1}</span>
                </div>
                <h4 className="font-medium text-xs sm:text-sm text-foreground line-clamp-2 leading-snug">
                  {subsection.name}
                </h4>
                {doc.date && (
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground mt-1.5">
                    {new Date(doc.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6 ml-1 sm:ml-2 border-l-2 border-border/50 pl-3 sm:pl-5">
          {part.subsections.map((subsection, subIdx) => {
            const docs = getOrderedDocs(knowledgeBaseIndex, subsection.slugs);
            const sectionNum = `${part.num}.${subIdx + 1}`;

            return (
              <div key={subsection.name} className="relative">
                {/* Subsection number badge */}
                <div className={`absolute -left-5 sm:-left-8 top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full ${part.color} ${part.textColor} border flex items-center justify-center text-[8px] sm:text-[10px] font-bold`}>
                  {subIdx + 1}
                </div>

                {/* Subsection header */}
                <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                  <span className={`${part.textColor} font-mono text-[10px] sm:text-xs`}>{sectionNum}</span>
                  {subsection.name}
                  <span className="text-[10px] sm:text-xs font-normal text-muted-foreground">({docs.length})</span>
                </h3>

                {/* Document cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1.5 sm:gap-2">
                  {docs.map((doc) => (
                    <DocumentCard
                      key={doc.slug}
                      doc={doc}
                      isSelected={selectedSlug === doc.slug}
                      onClick={() => onDocClick(doc.slug)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

function WikiSection({
  selectedSlug,
  onDocClick,
}: {
  selectedSlug: string | null;
  onDocClick: (slug: string) => void;
}) {
  const part = PARTS.find((p) => p.id === "Wiki")!;

  return (
    <section id="part-Wiki" className="mb-8 sm:mb-10 scroll-mt-6">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <span className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${part.color} border flex items-center justify-center text-xs sm:text-sm font-bold`}>
          {part.label}
        </span>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-foreground">{part.title}</h2>
          <p className="text-[10px] sm:text-xs text-muted-foreground">{allWikiDocs.length} providers</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
        {allWikiDocs.map((doc) => (
          <DocumentCard
            key={doc.slug}
            doc={{ slug: doc.slug, title: doc.title }}
            isSelected={selectedSlug === doc.slug}
            onClick={() => onDocClick(doc.slug)}
          />
        ))}
      </div>
    </section>
  );
}

// Fullscreen Modal for Mermaid diagrams - fills entire screen
function DiagramModal({ chart, onClose }: { chart: string; onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const id = `mermaid-modal-${Math.random().toString(36).substring(2, 9)}`;
      containerRef.current.innerHTML = "";

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
            // Scale SVG to fill viewport
            const svgEl = containerRef.current.querySelector("svg");
            if (svgEl) {
              svgEl.style.maxWidth = "95vw";
              svgEl.style.maxHeight = "90vh";
              svgEl.style.width = "auto";
              svgEl.style.height = "auto";
            }
          }
        })
        .catch((error) => {
          console.error("Mermaid render error:", error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `<pre class="text-red-500">Diagram error: ${error.message}</pre>`;
          }
        });
    }
  }, [chart]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      onClick={onClose}
    >
      {/* Close button - top right */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10 shadow-lg"
        aria-label="Close"
      >
        <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Hint - top left */}
      <div className="absolute top-4 left-4 text-sm text-gray-500">
        Press ESC or click anywhere to close
      </div>

      {/* Diagram - centered and fills screen */}
      <div
        ref={containerRef}
        className="flex items-center justify-center w-full h-full p-8"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// Mermaid diagram component - clickable for fullscreen
function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
      containerRef.current.innerHTML = "";

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          console.error("Mermaid render error:", error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `<pre class="text-red-500">Diagram error: ${error.message}</pre>`;
          }
        });
    }
  }, [chart]);

  return (
    <>
      <div
        ref={containerRef}
        onClick={() => setIsExpanded(true)}
        className="my-4 sm:my-6 p-3 sm:p-4 bg-white rounded-lg border border-border overflow-x-auto cursor-zoom-in hover:border-primary/30 hover:bg-primary/5 transition-all"
        title="Click to expand"
      />
      {isExpanded && <DiagramModal chart={chart} onClose={() => setIsExpanded(false)} />}
    </>
  );
}

// Strip duplicate title from content
function stripDuplicateTitle(content: string, title: string): string {
  let processed = content;
  const h1Match = processed.match(/^#\s+(.+)\n/);
  if (h1Match) {
    const h1Text = h1Match[1].trim();
    if (
      h1Text.toLowerCase() === title.toLowerCase() ||
      h1Text.toLowerCase().includes(title.toLowerCase()) ||
      title.toLowerCase().includes(h1Text.toLowerCase())
    ) {
      processed = processed.replace(/^#\s+.+\n+/, "");
    }
  }
  return processed;
}

// Extract headings from markdown content for minimap
function extractHeadings(content: string): Array<{ level: number; text: string; id: string }> {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; id: string }> = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
    headings.push({ level, text, id });
  }
  return headings;
}

// Subtle color palette for minimap sections
const MINIMAP_COLORS = [
  { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
  { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20" },
  { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20" },
  { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
  { bg: "bg-rose-500/10", text: "text-rose-600 dark:text-rose-400", border: "border-rose-500/20" },
  { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" },
  { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
  { bg: "bg-indigo-500/10", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-500/20" },
  { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20" },
  { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20" },
];

// Document minimap - compact floating dropdown in top-right corner
function DocumentMinimap({
  headings,
  onHeadingClick,
}: {
  headings: Array<{ level: number; text: string; id: string }>;
  onHeadingClick: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Filter to only h2 headings for cleaner minimap
  const h2Headings = headings.filter((h) => h.level === 2);
  if (h2Headings.length === 0) return null;

  return (
    <div
      className="sticky top-2 z-10 flex justify-end mb-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative">
        {/* Collapsed trigger - compact pill */}
        <div className={`bg-card/95 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-200 cursor-pointer ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}>
          <div className="px-3 py-1.5 flex items-center gap-2">
            <svg className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-[10px] text-muted-foreground font-medium">
              {h2Headings.length} Sections
            </span>
            <span className="text-[9px] text-muted-foreground/50">Hover to navigate</span>
          </div>
        </div>

        {/* Expanded dropdown - positioned below trigger */}
        <div className={`absolute right-0 top-full w-72 sm:w-80 bg-card/95 backdrop-blur-sm border border-border/50 border-t-0 rounded-b-lg shadow-lg p-2.5 transition-all duration-200 origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
          <div className="grid grid-cols-1 gap-1">
            {h2Headings.map((heading, idx) => {
              const color = MINIMAP_COLORS[idx % MINIMAP_COLORS.length];
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onHeadingClick(heading.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md hover:opacity-80 transition-all text-left border ${color.bg} ${color.border}`}
                >
                  <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${color.text}`}>
                    {idx + 1}
                  </span>
                  <span className="text-xs text-muted-foreground truncate">{heading.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Image Lightbox component
function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
        title="Close (Esc)"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// Document detail panel (slide-over)
function DocumentPanel({
  doc,
  isLoading = false,
  error = null,
  onClose,
}: {
  doc: { slug: string; title: string; content: string; date?: string } | null;
  isLoading?: boolean;
  error?: Error | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, lightboxImage]);

  // Show loading state
  if (isLoading) {
    return (
      <>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={onClose} />
        <div className="fixed right-0 top-0 h-screen w-full sm:max-w-[90vw] bg-background border-l border-border shadow-2xl z-50 overflow-hidden animate-in slide-in-from-right duration-300 flex flex-col">
          <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between">
            <div className="animate-pulse">
              <div className="h-6 sm:h-7 bg-muted rounded w-64 mb-2" />
              <div className="h-4 bg-muted rounded w-32" />
            </div>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 sm:p-6 animate-pulse">
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-4/5" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
          </div>
        </div>
      </>
    );
  }

  // Show error state
  if (error) {
    return (
      <>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={onClose} />
        <div className="fixed right-0 top-0 h-screen w-full sm:max-w-[90vw] bg-background border-l border-border shadow-2xl z-50 overflow-hidden animate-in slide-in-from-right duration-300 flex flex-col items-center justify-center p-6">
          <div className="text-center">
            <svg className="h-12 w-12 text-destructive mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-lg font-semibold text-foreground mb-2">Failed to load document</h3>
            <p className="text-sm text-muted-foreground mb-4">{error.message}</p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </>
    );
  }

  if (!doc) return null;

  const processedContent = stripDuplicateTitle(doc.content, doc.title);
  const headings = extractHeadings(processedContent);

  const scrollToHeading = (id: string) => {
    const element = contentRef.current?.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Panel - wider for better readability */}
      <div
        ref={panelRef}
        className="fixed right-0 top-0 h-screen w-full sm:max-w-[90vw] bg-background border-l border-border shadow-2xl z-50 overflow-hidden animate-in slide-in-from-right duration-300 flex flex-col"
      >
        {/* Header */}
        <div className="bg-background/95 backdrop-blur-sm border-b border-border p-3 sm:p-4 flex items-start justify-between gap-3 sm:gap-4 flex-shrink-0">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold text-foreground leading-tight">{doc.title}</h2>
            {doc.date && (
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {new Date(doc.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
            title="Close (Esc)"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content with sticky minimap at top */}
        <div ref={contentRef} className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Sticky minimap bar */}
          <DocumentMinimap headings={headings} onHeadingClick={scrollToHeading} />

          {/* Main content */}
          <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-16 prose-sm sm:prose-base">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const language = match ? match[1] : "";

                  if (language === "mermaid") {
                    return <MermaidDiagram chart={String(children).trim()} />;
                  }

                  if (!className) {
                    return (
                      <code className="px-1 sm:px-1.5 py-0.5 rounded bg-muted text-xs sm:text-sm font-mono">
                        {children}
                      </code>
                    );
                  }

                  return (
                    <pre className="rounded-lg bg-muted p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm">
                      <code className={className}>{children}</code>
                    </pre>
                  );
                },
                h2({ children }) {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
                  return <h2 id={id} className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">{children}</h2>;
                },
                h3({ children }) {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
                  return <h3 id={id} className="text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3">{children}</h3>;
                },
                table({ children }) {
                  return (
                    <div className="overflow-x-auto my-3 sm:my-4">
                      <table className="min-w-full border-collapse text-xs sm:text-sm">{children}</table>
                    </div>
                  );
                },
                th({ children }) {
                  return (
                    <th className="border border-border bg-muted px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">
                      {children}
                    </th>
                  );
                },
                td({ children }) {
                  return (
                    <td className="border border-border px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                      {children}
                    </td>
                  );
                },
                img({ src, alt }) {
                  const imgSrc = typeof src === "string" ? src : "";
                  if (!imgSrc) return null;
                  return (
                    <button
                      type="button"
                      onClick={() => setLightboxImage({ src: imgSrc, alt: alt || "" })}
                      className="block w-full text-left cursor-pointer group"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt={alt || ""}
                        className="rounded-lg shadow-md group-hover:opacity-90 group-hover:shadow-lg transition-all max-w-full"
                      />
                      <span className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to enlarge</span>
                    </button>
                  );
                },
              }}
            >
              {processedContent}
            </ReactMarkdown>
          </article>
        </div>

        {/* Back to top button - fixed position within panel */}
        <button
          onClick={() => contentRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Image Lightbox */}
        {lightboxImage && (
          <ImageLightbox
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClose={() => setLightboxImage(null)}
          />
        )}
      </div>
    </>
  );
}

// Wiki minimap - compact floating dropdown in top-right corner
function WikiMinimap({
  sections,
  onSectionClick,
}: {
  sections: KnowledgeBaseWikiSection[];
  onSectionClick: (sectionId: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  if (sections.length === 0) return null;

  return (
    <div
      className="sticky top-2 z-10 flex justify-end mb-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative">
        {/* Collapsed trigger - compact pill */}
        <div className={`bg-card/95 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-200 cursor-pointer ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}>
          <div className="px-3 py-1.5 flex items-center gap-2">
            <svg className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-[10px] text-muted-foreground font-medium">
              {sections.length} Providers
            </span>
            <span className="text-[9px] text-muted-foreground/50">Hover to navigate</span>
          </div>
        </div>

        {/* Expanded dropdown - positioned below trigger */}
        <div className={`absolute right-0 top-full w-64 bg-card/95 backdrop-blur-sm border border-border/50 border-t-0 rounded-b-lg shadow-lg p-2.5 transition-all duration-200 origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
          <div className="grid grid-cols-1 gap-1">
            {sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSectionClick(`wiki-section-${idx}`);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:opacity-80 transition-all text-left"
                style={{ backgroundColor: `${section.color}10`, borderColor: `${section.color}30`, borderWidth: "1px" }}
              >
                <span
                  className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                  style={{ backgroundColor: `${section.color}25`, color: section.color }}
                >
                  {romanNumerals[idx] || idx + 1}
                </span>
                <span className="text-xs text-muted-foreground truncate">{section.provider}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Wiki document panel
function WikiDocumentPanel({
  doc,
  onClose,
}: {
  doc: { slug: string; title: string; content: string } | null;
  onClose: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Use useMemo instead of useEffect + setState to avoid cascading renders
  const sections = useMemo(() => {
    if (doc) {
      return getWikiSectionsForSlug(doc.slug);
    }
    return [];
  }, [doc]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Scroll to section/group
  const handleSectionClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!doc) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Panel - wider for Wiki content */}
      <div className="fixed right-0 top-0 h-screen w-full sm:max-w-[90vw] bg-background border-l border-border shadow-2xl z-50 overflow-hidden animate-in slide-in-from-right duration-300 flex flex-col">
        {/* Header */}
        <div className="bg-background/95 backdrop-blur-sm border-b border-border p-3 sm:p-4 flex items-center justify-between z-10 flex-shrink-0">
          <h2 className="text-lg sm:text-xl font-bold text-foreground">{doc.title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            title="Close (Esc)"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content with sticky minimap at top */}
        <div ref={contentRef} className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Sticky minimap bar */}
          <WikiMinimap sections={sections} onSectionClick={handleSectionClick} />

          {/* Wiki Tables - iterate sections → groups → entries */}
          <div className="space-y-8 sm:space-y-10">
              {sections.map((section, sectionIdx) => (
                <div
                  key={sectionIdx}
                  id={`wiki-section-${sectionIdx}`}
                  className="space-y-5 sm:space-y-6 scroll-mt-6"
                >
                  {/* Provider header */}
                  <div className="flex items-center gap-3 pb-2 border-b border-border/50">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: section.color }}
                    />
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{section.provider}</h3>
                  </div>

                  {/* Groups within this section */}
                  {section.groups.map((group, groupIdx) => (
                    <div
                      key={groupIdx}
                      id={`wiki-group-${sectionIdx}-${groupIdx}`}
                      className="scroll-mt-6"
                    >
                      <h4 className="text-sm sm:text-base font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
                        {group.name}
                      </h4>
                      <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
                        <table className="min-w-full text-sm">
                          <thead className="bg-muted/50">
                            <tr>
                              <th className="px-4 sm:px-5 py-3 sm:py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider w-1/5">
                                Tool
                              </th>
                              <th className="px-4 sm:px-5 py-3 sm:py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Summary
                              </th>
                              <th className="px-4 sm:px-5 py-3 sm:py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider w-1/5">
                                Mag7 Use
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {group.entries.map((entry, entryIdx) => (
                              <tr key={entryIdx} className="hover:bg-muted/30 transition-colors">
                                <td className="px-4 sm:px-5 py-3 sm:py-4 text-sm font-medium text-foreground">
                                  {entry.tool}
                                </td>
                                <td className="px-4 sm:px-5 py-3 sm:py-4 text-sm text-muted-foreground leading-relaxed">
                                  {entry.summary}
                                </td>
                                <td className="px-4 sm:px-5 py-3 sm:py-4 text-xs text-muted-foreground leading-relaxed">
                                  {entry.mag7}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        {/* Back to top button - fixed position within panel */}
        <button
          onClick={() => contentRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  );
}

// ============================================================================
// Main Content
// ============================================================================

function KnowledgeBaseContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPart, setCurrentPart] = useState("Wiki");
  const selectedSlug = searchParams.get("doc");

  // Fetch KB document content on demand (only for regular docs, not wiki)
  const isRegularDoc = selectedSlug && !isWikiSlug(selectedSlug);
  const { content: kbContent, isLoading, error } = useKBContent(
    isRegularDoc ? selectedSlug : null
  );

  // Get selected document (metadata for regular docs, full content for wiki)
  const selectedDoc = useMemo(() => {
    if (!selectedSlug) return null;

    // For regular docs, use fetched content if available
    if (isRegularDoc && kbContent) {
      return kbContent;
    }

    // Check wiki docs (these still have content embedded)
    const wikiDoc = allWikiDocs.find((d) => d.slug === selectedSlug);
    if (wikiDoc) return { ...wikiDoc, content: wikiDoc.content || "" };

    return null;
  }, [selectedSlug, isRegularDoc, kbContent]);

  // Handle part click - scroll to section
  const handlePartClick = (partId: string) => {
    setCurrentPart(partId);
    const element = document.getElementById(`part-${partId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle document click
  const handleDocClick = (slug: string) => {
    router.push(`/nebula/knowledge-base?doc=${slug}`, { scroll: false });
  };

  // Handle panel close
  const handleClosePanel = () => {
    router.push("/nebula/knowledge-base", { scroll: false });
  };

  // Update current part based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = PARTS.map((p) => ({
        id: p.id,
        element: document.getElementById(`part-${p.id}`),
      })).filter((s) => s.element);

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, element } = sections[i];
        if (element && element.getBoundingClientRect().top <= 100) {
          setCurrentPart(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Sidebar */}
      <MinimalSidebar currentPart={currentPart} onPartClick={handlePartClick} />

      {/* Main Content */}
      <main className="ml-16 sm:ml-20 p-4 sm:p-6 pb-20">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Knowledge Base</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            {knowledgeBaseIndex.length + allWikiDocs.length} documents across {PARTS.length} sections
          </p>
        </header>

        {/* Wiki Section - First */}
        <WikiSection selectedSlug={selectedSlug} onDocClick={handleDocClick} />

        {/* Part Sections I-IV */}
        {PARTS.slice(1).map((part) => (
          <PartSection
            key={part.id}
            part={part}
            selectedSlug={selectedSlug}
            onDocClick={handleDocClick}
          />
        ))}
      </main>

      {/* Document Panel */}
      {selectedSlug && !isWikiSlug(selectedSlug) && (
        <DocumentPanel
          doc={selectedDoc}
          isLoading={isLoading}
          error={error}
          onClose={handleClosePanel}
        />
      )}

      {/* Wiki Panel */}
      {selectedSlug && isWikiSlug(selectedSlug) && (
        <WikiDocumentPanel doc={selectedDoc} onClose={handleClosePanel} />
      )}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="ml-16 sm:ml-20 p-4 sm:p-6">
        <div className="animate-pulse">
          <div className="h-8 sm:h-10 bg-muted rounded w-1/4 mb-4" />
          <div className="h-4 bg-muted rounded w-1/3 mb-6 sm:mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="h-16 sm:h-20 bg-muted rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KnowledgeBasePage() {
  return (
    <AuthGate
      title="Knowledge Base"
      subtitle="Access Professor Gemini generated guides"
    >
      <Suspense fallback={<LoadingSkeleton />}>
        <KnowledgeBaseContent />
      </Suspense>
    </AuthGate>
  );
}
