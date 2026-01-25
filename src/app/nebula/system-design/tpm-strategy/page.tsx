"use client";

/**
 * System Design - TPM Strategy
 * Three-tier strategic framework for Principal TPM system design interviews
 */

import Link from "next/link";
import { SystemDesignLayout, getSystemDesignNavigation } from "@/components/SystemDesignLayout";

// Strategy card component with color accent
function StrategyCard({
  title,
  subtitle,
  items,
  accentColor,
}: {
  title: string;
  subtitle: string;
  items: string[];
  accentColor: string;
}) {
  const colorMap: Record<string, { border: string; title: string; bullet: string }> = {
    cyan: { border: "border-l-cyan-400", title: "text-cyan-400", bullet: "bg-cyan-400" },
    amber: { border: "border-l-amber-400", title: "text-amber-400", bullet: "bg-amber-400" },
    purple: { border: "border-l-purple-400", title: "text-purple-400", bullet: "bg-purple-400" },
    red: { border: "border-l-red-400", title: "text-red-400", bullet: "bg-red-400" },
    green: { border: "border-l-green-400", title: "text-green-400", bullet: "bg-green-400" },
    blue: { border: "border-l-blue-400", title: "text-blue-400", bullet: "bg-blue-400" },
    teal: { border: "border-l-teal-400", title: "text-teal-400", bullet: "bg-teal-400" },
    orange: { border: "border-l-orange-400", title: "text-orange-400", bullet: "bg-orange-400" },
    indigo: { border: "border-l-indigo-400", title: "text-indigo-400", bullet: "bg-indigo-400" },
    sky: { border: "border-l-sky-400", title: "text-sky-400", bullet: "bg-sky-400" },
    emerald: { border: "border-l-emerald-400", title: "text-emerald-400", bullet: "bg-emerald-400" },
    violet: { border: "border-l-violet-400", title: "text-violet-400", bullet: "bg-violet-400" },
    rose: { border: "border-l-rose-400", title: "text-rose-400", bullet: "bg-rose-400" },
  };

  const colors = colorMap[accentColor] || colorMap.cyan;

  return (
    <div
      className={`bg-card/50 backdrop-blur-sm rounded-xl border-l-4 ${colors.border} border border-border/50 p-5 hover:bg-card/70 transition-all hover:shadow-lg hover:-translate-y-0.5`}
    >
      <div className="mb-4">
        <h3 className={`text-sm font-semibold uppercase tracking-wide ${colors.title}`}>
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 italic">{subtitle}</p>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <span className={`w-1 h-1 rounded-full ${colors.bullet} mt-2 shrink-0 opacity-60`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Tier section component
function TierSection({
  tierNum,
  title,
  description,
  children,
  gradient,
}: {
  tierNum: string;
  title: string;
  description: string;
  children: React.ReactNode;
  gradient: string;
}) {
  return (
    <section className="mb-10">
      <div className={`rounded-t-xl ${gradient} p-4 flex items-center gap-4`}>
        <span className="px-3 py-1 bg-white/15 rounded text-xs font-mono font-semibold text-white/90">
          {tierNum}
        </span>
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="text-sm text-white/70">{description}</p>
        </div>
      </div>
      <div className="bg-card/30 backdrop-blur-sm rounded-b-xl border border-t-0 border-border/50 p-6">
        {children}
      </div>
    </section>
  );
}

export default function TPMStrategyPage() {
  const nav = getSystemDesignNavigation("tpm-strategy");

  return (
    <SystemDesignLayout
      title="System Design - TPM Strategy"
      description="Three-tier strategic framework for Principal TPM system design"
      currentSection="tpm-strategy"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-10 p-8 bg-gradient-to-r from-cyan-500/10 via-amber-500/5 to-purple-500/10 rounded-xl border border-cyan-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          5
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Principal TPM System Design Strategy
        </h1>
        <p className="text-sm text-muted-foreground font-mono tracking-wider uppercase">
          Mag7 Focus
        </p>
      </div>

      {/* TIER 1 */}
      <TierSection
        tierNum="TIER 1"
        title="CRITICAL STRATEGIC PILLARS"
        description="High Impact & Trade-offs"
        gradient="bg-gradient-to-r from-slate-800 to-slate-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <StrategyCard
            title="System Architecture"
            subtitle="Strategic Vision & Technical Direction"
            accentColor="cyan"
            items={[
              "Define system components & boundaries",
              "Select architectural patterns (microservices, event-driven, etc.)",
              "Evaluate build vs. buy decisions",
              "Plan for scalability & maintainability",
            ]}
          />
          <StrategyCard
            title="Reliability"
            subtitle="Monitoring, Alerting & Incident Response"
            accentColor="amber"
            items={[
              "Design fault-tolerant systems",
              "Implement observability (metrics, logs, traces)",
              "Define SLOs, SLIs, and error budgets",
              "Establish incident response & postmortem processes",
            ]}
          />
          <StrategyCard
            title="Scalability"
            subtitle="Future-Proofing & Growth Planning"
            accentColor="purple"
            items={[
              "Plan horizontal & vertical scaling strategies",
              "Design for load balancing & auto-scaling",
              "Optimize cold start & warm-up times",
              "Capacity planning & traffic modeling",
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StrategyCard
            title="Security & Compliance"
            subtitle="Risk Management & Governance"
            accentColor="red"
            items={[
              "Threat modeling & risk assessment",
              "Authentication, authorization & access control",
              "Regulatory compliance (SOC2, GDPR, HIPAA)",
              "Security review & penetration testing cadence",
            ]}
          />
          <StrategyCard
            title="Cost Optimization"
            subtitle="TCO & Resource Efficiency"
            accentColor="green"
            items={[
              "Evaluate total cost of ownership (TCO)",
              "Optimize cloud resource utilization",
              "Plan for scale efficiency (cost per transaction)",
              "License management & vendor negotiations",
            ]}
          />
        </div>
      </TierSection>

      {/* TIER 2 */}
      <TierSection
        tierNum="TIER 2"
        title="PROGRAM EXECUTION & PLANNING"
        description="Cross-Functional Alignment"
        gradient="bg-gradient-to-r from-slate-700 to-slate-600"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <StrategyCard
            title="Requirements Gathering"
            subtitle="Stakeholder Alignment & Prioritization"
            accentColor="blue"
            items={[
              "Distinguish functional vs. non-functional requirements",
              "Define user stories & acceptance criteria",
              "Prioritize with RICE/MoSCoW frameworks",
              "Manage scope & stakeholder expectations",
            ]}
          />
          <StrategyCard
            title="Availability"
            subtitle="SLO/SLA Management & DR Planning"
            accentColor="teal"
            items={[
              "Define uptime targets & SLA commitments",
              "Implement data replication strategies",
              "Design disaster recovery & failover plans",
              "Minimize MTTR & planned downtime",
            ]}
          />
          <StrategyCard
            title="Performance"
            subtitle="Latency & Throughput Goals"
            accentColor="orange"
            items={[
              "Define latency targets (P50, P95, P99)",
              "Optimize data structures & algorithms",
              "Implement caching strategies (CDN, Redis)",
              "Performance testing & benchmarking",
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StrategyCard
            title="Migration Planning"
            subtitle="Risk Mitigation & Cutover Strategy"
            accentColor="indigo"
            items={[
              "Develop phased migration roadmap",
              "Create rollback & contingency plans",
              "Coordinate cross-team dependencies",
              "Define go/no-go criteria & cutover runbooks",
            ]}
          />
          <StrategyCard
            title="Data Design"
            subtitle="Governance & Schema Evolution"
            accentColor="emerald"
            items={[
              "Define data models & schema design",
              "Select appropriate database technologies",
              "Plan schema evolution & versioning",
              "Establish data governance & lineage",
            ]}
          />
          <StrategyCard
            title="Domain Design"
            subtitle="Bounded Contexts & Service Boundaries"
            accentColor="orange"
            items={[
              "Decompose business domains (DDD)",
              "Define service boundaries & contracts",
              "Minimize inter-service dependencies",
              "Design API contracts & versioning",
            ]}
          />
        </div>
      </TierSection>

      {/* TIER 3 */}
      <TierSection
        tierNum="TIER 3"
        title="OPERATIONAL & TACTICAL"
        description="Execution Excellence"
        gradient="bg-gradient-to-r from-slate-600 to-slate-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <StrategyCard
            title="Documentation"
            subtitle="Knowledge Sharing & Onboarding"
            accentColor="sky"
            items={[
              "Maintain technical design documents (TDDs)",
              "Create runbooks & operational playbooks",
              "Document APIs (OpenAPI/Swagger)",
              "Enable team knowledge transfer",
            ]}
          />
          <StrategyCard
            title="Testing Strategy"
            subtitle="Quality Assurance & Validation"
            accentColor="emerald"
            items={[
              "Define test pyramid (unit, integration, E2E)",
              "Implement contract & chaos testing",
              "Establish performance & load testing",
              "Security testing & vulnerability scanning",
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StrategyCard
            title="Maintainability"
            subtitle="Tech Debt & SDLC Management"
            accentColor="violet"
            items={[
              "Enforce code quality standards & reviews",
              "Manage technical debt backlog",
              "Define deprecation & sunset policies",
              "Plan for long-term sustainability",
            ]}
          />
          <StrategyCard
            title="User Experience"
            subtitle="Product Usability & Accessibility"
            accentColor="rose"
            items={[
              "Design intuitive interfaces & workflows",
              "Conduct usability testing & iteration",
              "Ensure accessibility compliance (WCAG)",
              "Optimize for responsiveness & performance",
            ]}
          />
        </div>
      </TierSection>

      {/* Footer Note */}
      <div className="text-center py-6 text-sm text-muted-foreground border-t border-border/50 mt-8">
        <span className="font-medium">Principal Technical Program Manager</span>
        <span className="mx-2">•</span>
        <span>System Design Interview Framework</span>
        <span className="mx-2">•</span>
        <span className="text-cyan-500 font-mono">Mag7 Companies</span>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-4 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">← {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">{nav.next.title} →</span>
          </Link>
        )}
      </div>
    </SystemDesignLayout>
  );
}
