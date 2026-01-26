"use client";

/**
 * System Design - TPM Synthesis
 * Principal TPM lexicon synthesis with prompt patterns, answer templates,
 * and interview-ready frameworks for Mag7 system design discussions.
 *
 * Synchronized from:
 * - ~/Downloads/yes.md (concise one-pager with prompt patterns)
 * - ~/Downloads/I want to build a prompt...md (detailed lexicon with explanations)
 */

import Link from "next/link";
import { useState } from "react";
import { SystemDesignLayout, getSystemDesignNavigation } from "@/components/SystemDesignLayout";
import { BackToTopButton } from "@/components/BackToTopButton";

// Lexicon section component
function LexiconSection({
  title,
  color,
  intro,
  terms,
  promptPattern,
}: {
  title: string;
  color: string;
  intro?: string;
  terms: { name: string; description: string }[];
  promptPattern?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const colorMap: Record<string, { border: string; bg: string; badge: string }> = {
    purple: { border: "border-l-purple-400", bg: "bg-purple-500/10", badge: "bg-purple-500" },
    cyan: { border: "border-l-cyan-400", bg: "bg-cyan-500/10", badge: "bg-cyan-500" },
    green: { border: "border-l-green-400", bg: "bg-green-500/10", badge: "bg-green-500" },
    amber: { border: "border-l-amber-400", bg: "bg-amber-500/10", badge: "bg-amber-500" },
    rose: { border: "border-l-rose-400", bg: "bg-rose-500/10", badge: "bg-rose-500" },
    blue: { border: "border-l-blue-400", bg: "bg-blue-500/10", badge: "bg-blue-500" },
  };

  const colors = colorMap[color] || colorMap.purple;

  return (
    <section className={`bg-card/50 backdrop-blur-sm rounded-xl border-l-4 ${colors.border} border border-border/50 p-5 mb-6`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <span className="text-muted-foreground text-sm">{isExpanded ? "−" : "+"}</span>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-3">
          {intro && (
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{intro}</p>
          )}

          <div className="flex flex-wrap gap-2">
            {terms.map((term, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                <span className={`inline-block px-3 py-1.5 ${colors.bg} rounded-lg text-sm font-medium text-foreground cursor-help border border-border/30`}>
                  {term.name}
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-80 p-4 bg-card border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] text-sm text-muted-foreground pointer-events-none">
                  <div className="font-semibold text-foreground mb-1">{term.name}</div>
                  <div className="leading-relaxed">{term.description}</div>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
                </div>
              </div>
            ))}
          </div>

          {promptPattern && (
            <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border/50">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Prompt Pattern</div>
              <p className="text-sm text-foreground italic">&quot;{promptPattern}&quot;</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

// Answer template step component
function TemplateStep({ number, title, example }: { number: number; title: string; example: string }) {
  return (
    <div className="flex gap-4 p-4 bg-card/30 rounded-lg border border-border/50">
      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
        {number}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-foreground mb-1">{title}</div>
        <p className="text-sm text-muted-foreground">{example}</p>
      </div>
    </div>
  );
}

// Comparison table row
function ComparisonRow({ context, senior, principal }: { context: string; senior: string; principal: string }) {
  return (
    <tr className="border-b border-border/50">
      <td className="py-3 px-4 text-sm font-medium text-foreground">{context}</td>
      <td className="py-3 px-4 text-sm text-muted-foreground">{senior}</td>
      <td className="py-3 px-4 text-sm text-foreground">{principal}</td>
    </tr>
  );
}

// Lexicon data - merged from both source files
const lexiconSections = [
  {
    title: "1. Strategic Architectural Paradigms",
    color: "purple",
    intro: "At the Principal level, you do not just discuss \"services\"; you discuss the foundational structures that enable or limit the company's growth for the next 3-5 years.",
    terms: [
      { name: "Cell-Based Architecture (CBA)", description: "Moving beyond simple microservices to \"Cells\" (self-contained units of the stack). This limits the Blast Radius - a critical Mag7 term - ensuring that a failure in one partition doesn't cause a global outage." },
      { name: "Blast Radius", description: "The scope of impact when a component fails. Principal TPMs drive architectural decisions (sharding, cell architecture, bulkheads) specifically to reduce blast radius." },
      { name: "Control Plane vs Data Plane", description: "A must-use distinction when discussing infrastructure (e.g., SSO or Networking). Control Plane handles policy and configuration (low frequency, high complexity). Data Plane handles actual traffic (high frequency, ultra-low latency)." },
      { name: "Regional Isolation", description: "Designing for degraded grace rather than catastrophic failure across availability zones." },
      { name: "Sharding Strategy", description: "Horizontal scaling approach. Demonstrates command of scaling while considering operational agility and team ownership." },
      { name: "Event-Driven Architecture", description: "Aligns with decoupling, async UX, and real-time telemetry. Enables idempotent consumers." },
      { name: "Data Gravity & Sovereignty", description: "Strategic framing for data locality, latency, and compliance trade-offs." },
      { name: "CAP / PACELC", description: "Eventual vs Strong Consistency trade-offs. A Principal TPM must justify the ROI of choosing Eventual Consistency (higher availability/speed) versus the complexity cost of Strong Consistency for financial or identity transactions. PACELC: if Partition, choose A or C; Else trade Latency or Consistency." },
      { name: "Service Mesh / Sidecar", description: "Cross-cutting concerns: auth, mTLS, observability. Crucial for security policies and cross-service resiliency." },
    ],
    promptPattern: "In this answer, explicitly reference CBA, blast radius, control vs data plane, and CAP trade-offs to justify the long-term architecture choice.",
  },
  {
    title: "2. Operational Excellence & Reliability",
    color: "cyan",
    intro: "Mag7 companies prioritize Business Continuity above almost all else. Your terminology must reflect a \"Reliability-First\" mindset.",
    terms: [
      { name: "SLOs / SLIs / Error Budgets", description: "Moving past \"99.9% uptime\" to Service Level Objectives. SLI (what you measure) -> SLO (internal target) -> SLA (external commitment). If an error budget is exhausted, the Principal TPM leads the \"Stop-the-Line\" conversation to pivot engineering focus from features to stability." },
      { name: "Error Budget Burn Rate", description: "How fast you're consuming budget. 2x burn = page, 10x = incident. Enables stop-the-line conversations." },
      { name: "MTTR / MTTD / MTTF", description: "Mean Time to Recovery, Detection, Failure. Modern systems optimize for fast recovery (low MTTR) over preventing all failures." },
      { name: "Golden Signals", description: "Latency, Errors, Traffic, Saturation - core SRE vocabulary for defining SLIs and building dashboards." },
      { name: "Circuit Breakers", description: "Resilience pattern detecting persistent downstream failures. Prevents resource exhaustion by failing fast." },
      { name: "Backpressure / Rate Limiting", description: "Operationalized resilience primitives for managing load." },
      { name: "Load Shedding", description: "Graceful degradation paths. Executive reassurance language: we designed for partial failure." },
      { name: "Chaos Engineering / Game Days", description: "The practice of intentionally injecting failure into production to validate Fault Tolerance. Discussing this signals that you prioritize proactive resilience over reactive patching." },
      { name: "JIT Provisioning", description: "Just-In-Time Provisioning in the context of Identity and SSO. Bridges Security (Zero Trust) and Operational Efficiency by creating accounts only when needed, reducing attack surface and licensing costs." },
      { name: "Postmortem Culture", description: "Causal learning loop, not just RCA. Blameless analysis focused on systemic factors." },
    ],
    promptPattern: "Force the answer to quantify reliability via SLOs, error budgets, MTTR, and golden signals, and describe how we'd reduce blast radius, not just fix bugs.",
  },
  {
    title: "3. Business Strategy & Financial Engineering",
    color: "green",
    intro: "A Principal TPM's value is often measured by their impact on the P&L (Profit and Loss) and Unit Economics.",
    terms: [
      { name: "P&L Impact", description: "Revenue, ARR, Margin, Payback Period. Sound like you can sit in a staff+ product/finance review." },
      { name: "COGS Optimization", description: "Cost of Goods Sold - in tech, this is often \"Cloud Bill Optimization.\" Using terms like Bin Packing or Spot Instance Orchestration demonstrates that you understand how system design directly impacts the company's bottom line." },
      { name: "Unit Economics", description: "Cost per active user, per search, per API call. The metric connecting infrastructure to margin." },
      { name: "TCO", description: "Total Cost of Ownership: Moving beyond the initial build cost to include maintenance, technical debt, and \"developer toil.\" The real metric for build-vs-buy." },
      { name: "Time to Value (TTV)", description: "The metric for speed. A Principal TPM focuses on reducing the TTV for new capabilities by building Extensible Platforms rather than \"Point Solutions.\"" },
      { name: "Bin Packing", description: "Optimizing resource utilization. Technical but deeply business-aligned language." },
      { name: "Spot Instance Orchestration", description: "COGS lever for cost optimization with managed interruption risk." },
      { name: "Tiered Storage", description: "Cold-path optimization indicating COGS sensitivity with performance trade-offs." },
      { name: "Developer Productivity", description: "Paved road adoption, toil reduction, platform leverage. Amplifying throughput." },
    ],
    promptPattern: "Require the answer to express trade-offs in P&L language: COGS, TCO, unit economics, and TTV, and explicitly state which levers reduce marginal cost.",
  },
  {
    title: "4. Decision Frameworks (Executive Synthesis)",
    color: "amber",
    intro: "Use these terms to frame your communication with VPs and SVPs.",
    terms: [
      { name: "One-Way vs Two-Way Doors", description: "An Amazon-originated term now standard across Mag7. One-Way Doors are nearly irreversible (e.g., choosing a primary database engine); Two-Way Doors are reversible. A Principal TPM identifies which is which to prevent \"analysis paralysis\" on low-risk decisions." },
      { name: "North Star Metric", description: "The single most important technical metric that aligns with the business goal (e.g., \"Latency at the 99th Percentile\" for a search product)." },
      { name: "Trade-off Matrix", description: "Never present a single solution. Present a matrix comparing Latency, Cost, and Complexity." },
      { name: "DRIs / Decision Logs", description: "Directly Responsible Individuals. Systematic accountability with escalation paths." },
      { name: "Technical Debt as Interest Rate", description: "Business metaphor for deferred engineering cost. Frames velocity impact." },
      { name: "Architectural Runway", description: "Existing architecture supporting planned features without redesign. Track this metric." },
      { name: "Platform vs Product", description: "We're building an extensible platform, not a bespoke feature / point solution." },
    ],
    promptPattern: "Force the explanation to label decisions as one-way or two-way doors, define a North Star metric, and present at least a 3-axis trade-off matrix.",
  },
  {
    title: "5. Signal Amplifiers (Mag7 Caliber)",
    color: "rose",
    intro: "Terms that subtly capture executive-grade abstraction while preserving technical gravity.",
    terms: [
      { name: "Critical Path Reduction", description: "Structural unlocking of delivery velocity. Describes what platform work enables." },
      { name: "API as Contract Boundary", description: "Product thinking applied to system design. Interfaces define ownership." },
      { name: "Control Surface Metrics", description: "Combines customer experience measurement with system telemetry." },
      { name: "Operational Currency", description: "Reliability, latency, and developer energy as forms of capital." },
      { name: "Platform Leverage", description: "Quantifies the multiplier effect of enabling teams over building for them." },
      { name: "Feedback Loops & Flywheels", description: "Narrative devices for compounded system or business gains." },
      { name: "Surface Area vs Blast Radius", description: "Efficiency vs risk exposure dialogue framing." },
      { name: "Escalation Tax", description: "Red flag term indicating repeated systemic issue without root-cause inversion." },
    ],
    promptPattern: "Communicate like an L7+: talk about milestones in terms of ARR unlocked, risk reduced, and platform leverage created, not just features shipped.",
  },
];

// Comparison data - Senior vs Principal
const comparisonData = [
  {
    context: "Outages",
    senior: "We need to fix the bug.",
    principal: "We need to reduce the Blast Radius and improve MTTR (Mean Time to Recovery).",
  },
  {
    context: "Costs",
    senior: "We are over budget on AWS.",
    principal: "Our Unit Economics are scaling sub-linearly; we need a Tiered Storage strategy.",
  },
  {
    context: "Projects",
    senior: "We are shipping on Friday.",
    principal: "We are reaching a Milestone that unblocks $20M in projected Annual Recurring Revenue.",
  },
  {
    context: "Risk",
    senior: "Lets get sign-off.",
    principal: "This is a one-way door; we instrumented rollback criteria before committing.",
  },
  {
    context: "Trade-offs",
    senior: "We cant do both.",
    principal: "Latency improvements of 30% cost a 10% COGS increase - acceptable per our SLO budget.",
  },
];

// Answer template steps
const answerTemplateSteps = [
  {
    number: 1,
    title: "Context + North Star",
    example: "Our North Star is 99th percentile latency for X while holding COGS per transaction flat year-over-year.",
  },
  {
    number: 2,
    title: "Decision Type",
    example: "Choosing this primary database is a one-way door; we treat it as a long-lived architectural commitment.",
  },
  {
    number: 3,
    title: "Architecture Language",
    example: "We adopt a cell-based architecture with strict control/data plane separation to reduce blast radius and improve failure isolation across regions.",
  },
  {
    number: 4,
    title: "Reliability & Ops",
    example: "We define SLOs, error budgets, and golden signals up front, and use error budget burn rate to throttle feature rollouts when stability regresses.",
  },
  {
    number: 5,
    title: "P&L / FinOps Impact",
    example: "COGS optimization comes from bin packing, tiered storage, and spot orchestration, which improves unit economics while keeping TCO in check.",
  },
  {
    number: 6,
    title: "Trade-off Statement",
    example: "We accept a 10-15% COGS increase to gain regional isolation and faster MTTR, which protects tens of millions in ARR during regional failures.",
  },
];

// Tooling and frameworks
const toolingCategories = [
  {
    title: "Cloud Observability",
    tools: ["Datadog", "Prometheus", "OpenTelemetry"],
    note: "Structured events, high-cardinality trace analysis",
  },
  {
    title: "Infra as Code",
    tools: ["Terraform", "Pulumi", "CloudFormation"],
    note: "Policy-as-code conversations",
  },
  {
    title: "Service Management",
    tools: ["Service Catalogs", "Dependency Graphs"],
    note: "Integration with DORA metrics",
  },
  {
    title: "Financial Dashboards",
    tools: ["CloudHealth", "Apptio", "GCP FinOps"],
    note: "Cost attribution and optimization",
  },
  {
    title: "Experimentation",
    tools: ["Feature Flags", "Canary Release"],
    note: "A/B rollout frameworks",
  },
  {
    title: "Governance",
    tools: ["OPA", "Cedar (AWS)"],
    note: "Policy engines, compliance-by-design",
  },
];

// Copy-paste prompt
const interviewPrompt = `Act as a Principal TPM at a Mag7 company. When you answer, you must:
- Use explicit language around cell-based architecture, blast radius, control plane vs data plane, and consistency trade-offs (CAP/PACELC).
- Frame reliability using SLOs, SLIs, error budgets, golden signals, MTTR, and chaos engineering, not just "uptime" or "we'll fix bugs."
- Express impact in business terms: P&L, COGS, unit economics, TCO, and Time to Value, and call out specific COGS levers (bin packing, tiered storage, spot usage).
- Classify key choices as one-way vs two-way doors, define a clear North Star metric, and present a trade-off matrix across latency, cost, complexity, and risk.
- Communicate like an L7+: talk about milestones in terms of ARR unlocked, risk reduced, and platform leverage created, not just features shipped.`;

export default function TPMSynthesisPage() {
  const nav = getSystemDesignNavigation("tpm-synthesis");
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const copyPrompt = () => {
    navigator.clipboard.writeText(interviewPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <SystemDesignLayout
      title="TPM Synthesis"
      description="Principal TPM lexicon synthesis with prompt patterns and answer templates"
      currentSection="tpm-synthesis"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-10 p-8 bg-gradient-to-r from-rose-500/10 via-purple-500/5 to-amber-500/10 rounded-xl border border-rose-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-purple-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          7
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          TPM Synthesis
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          A lexicon of high-leverage terminology and strategic frameworks required for a Principal TPM
          to navigate the intersection of P&L-level business strategy and deep system architecture within a Mag7 environment.
        </p>
      </div>

      {/* Lexicon Sections */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">I</span>
        <h2 id="lexicon" className="text-xl font-bold text-foreground">Principal TPM Lexicon</h2>
      </div>

      <div className="mb-10">
        {lexiconSections.map((section) => (
          <LexiconSection
            key={section.title}
            title={section.title}
            color={section.color}
            intro={section.intro}
            terms={section.terms}
            promptPattern={section.promptPattern}
          />
        ))}
      </div>

      {/* Senior vs Principal Comparison */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">II</span>
        <h2 id="comparison" className="text-xl font-bold text-foreground">Senior vs Principal Language</h2>
      </div>

      <div className="mb-10 overflow-x-auto">
        <table className="w-full border border-border/50 rounded-xl overflow-hidden">
          <thead className="bg-muted/50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-foreground">Context</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-muted-foreground">Senior TPM (L6)</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-primary">Principal TPM (L7+)</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <ComparisonRow key={idx} {...row} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Answer Template */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">III</span>
        <h2 id="template" className="text-xl font-bold text-foreground">Principal TPM Answer Template</h2>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Reusable skeleton for structuring any system design answer at Principal level:
      </p>

      <div className="space-y-3 mb-10">
        {answerTemplateSteps.map((step) => (
          <TemplateStep key={step.number} {...step} />
        ))}
      </div>

      {/* Copy-Paste Prompt */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">IV</span>
        <h2 id="prompt" className="text-xl font-bold text-foreground">Interview-Ready Prompt</h2>
      </div>

      <div className="mb-10 p-5 bg-card/50 rounded-xl border border-border">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Copy-Paste Prompt for Interview Prep
          </span>
          <button
            onClick={copyPrompt}
            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
          >
            {copiedPrompt ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="text-sm text-foreground whitespace-pre-wrap font-mono bg-muted/30 p-4 rounded-lg overflow-x-auto">
          {interviewPrompt}
        </pre>
      </div>

      {/* Tooling & Frameworks */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">V</span>
        <h2 id="tooling" className="text-xl font-bold text-foreground">Tooling &amp; Frameworks</h2>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Signaling platforms and methods to reference in Principal TPM discussions:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {toolingCategories.map((category) => (
          <div
            key={category.title}
            className="p-4 bg-card/30 rounded-lg border border-border/50"
          >
            <h4 className="text-sm font-semibold text-foreground mb-2">{category.title}</h4>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {category.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 bg-muted/50 rounded text-xs text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic">{category.note}</p>
          </div>
        ))}
      </div>

      {/* Principal Insight Quote */}
      <div className="mb-10 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/20">
        <div className="text-sm font-semibold text-primary mb-2">Principal Insight</div>
        <p className="text-foreground italic">
          &quot;We are choosing a Cell-Based Architecture to minimize Blast Radius, accepting a 15% increase in COGS
          to ensure Global Availability during regional failures.&quot;
        </p>
      </div>

      {/* Footer Note */}
      <div className="text-center py-6 text-sm text-muted-foreground border-t border-border/50">
        <span className="font-medium">Principal Technical Program Manager</span>
        <span className="mx-2">&bull;</span>
        <span>System Design Interview Synthesis</span>
        <span className="mx-2">&bull;</span>
        <span className="text-rose-500 font-mono">Mag7 Companies</span>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-4 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">&larr; {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">{nav.next.title} &rarr;</span>
          </Link>
        )}
      </div>

      <BackToTopButton />
    </SystemDesignLayout>
  );
}
