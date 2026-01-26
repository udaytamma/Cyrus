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
import { knowledgeBaseDocs } from "@/data/knowledge-base";
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
];

// Helper to get ordered docs for a list of slugs
function getOrderedDocs(docs: typeof knowledgeBaseDocs, slugs: string[]) {
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

      {/* Sub-sections */}
      <div className="space-y-4 sm:space-y-6 ml-1 sm:ml-2 border-l-2 border-border/50 pl-3 sm:pl-5">
        {part.subsections.map((subsection, subIdx) => {
          const docs = getOrderedDocs(knowledgeBaseDocs, subsection.slugs);
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

// Mermaid diagram component
function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="my-4 sm:my-6 p-3 sm:p-4 bg-white rounded-lg border border-border overflow-x-auto">
      <div ref={containerRef} className="flex justify-center" />
    </div>
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

// Document detail panel (slide-over)
function DocumentPanel({
  doc,
  onClose,
}: {
  doc: { slug: string; title: string; content: string; date?: string } | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!doc) return null;

  const processedContent = stripDuplicateTitle(doc.content, doc.title);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="fixed right-0 top-0 h-screen w-full sm:max-w-3xl bg-background border-l border-border shadow-2xl z-50 overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-3 sm:p-4 flex items-start justify-between gap-3 sm:gap-4 z-10">
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

        {/* Content */}
        <div className="p-4 sm:p-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-sm sm:prose-base">
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
                    <th className="border border-border bg-muted px-2 sm:px-3 py-1.5 sm:py-2 text-left text-xs sm:text-sm font-semibold">
                      {children}
                    </th>
                  );
                },
                td({ children }) {
                  return (
                    <td className="border border-border px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm">
                      {children}
                    </td>
                  );
                },
              }}
            >
              {processedContent}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </>
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
  const [sections, setSections] = useState<KnowledgeBaseWikiSection[]>([]);

  useEffect(() => {
    if (doc) {
      setSections(getWikiSectionsForSlug(doc.slug));
    }
  }, [doc]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!doc) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-screen w-full sm:max-w-4xl bg-background border-l border-border shadow-2xl z-50 overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-3 sm:p-4 flex items-center justify-between z-10">
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

        {/* Wiki Tables - iterate sections → groups → entries */}
        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-4 sm:space-y-6">
              {/* Provider header */}
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: section.color }}
                />
                <h3 className="text-base sm:text-lg font-bold text-foreground">{section.provider}</h3>
              </div>

              {/* Groups within this section */}
              {section.groups.map((group, groupIdx) => (
                <div key={groupIdx}>
                  <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">
                    {group.name}
                  </h4>
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider w-1/5">
                            Tool
                          </th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Summary
                          </th>
                          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider w-1/6">
                            Mag7 Use
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {group.entries.map((entry, entryIdx) => (
                          <tr key={entryIdx} className="hover:bg-muted/30 transition-colors">
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-foreground">
                              {entry.tool}
                            </td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-muted-foreground">
                              {entry.summary}
                            </td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-[10px] sm:text-xs text-muted-foreground">
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

  // Get selected document
  const selectedDoc = useMemo(() => {
    if (!selectedSlug) return null;

    // Check regular docs first
    const regularDoc = knowledgeBaseDocs.find((d) => d.slug === selectedSlug);
    if (regularDoc) return regularDoc;

    // Check wiki docs
    const wikiDoc = allWikiDocs.find((d) => d.slug === selectedSlug);
    if (wikiDoc) return { ...wikiDoc, content: wikiDoc.content || "" };

    return null;
  }, [selectedSlug]);

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
            {knowledgeBaseDocs.length + allWikiDocs.length} documents across {PARTS.length} sections
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
        <DocumentPanel doc={selectedDoc} onClose={handleClosePanel} />
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
