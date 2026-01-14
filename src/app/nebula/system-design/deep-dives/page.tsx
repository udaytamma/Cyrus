"use client";

/**
 * System Design - Deep Dives Index
 * Hub page linking to 16 deep dive topics organized by Principal TPM interview themes
 * Design: Muted color scheme with larger fonts for readability
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";

// Topic sections organized for Principal TPM interview flow
const sections = [
  {
    title: "Reliability & Observability",
    description: "The foundation: measuring success, planning for failure, deploying safely",
    letter: "A",
    topics: [
      {
        id: "sla-mathematics",
        number: 1,
        title: "SLA Mathematics & Reliability",
        description: "SLI/SLO/SLA triad, composite availability, error budgets, burn rate, MTTR vs MTBF",
      },
      {
        id: "dr-economics",
        number: 2,
        title: "Disaster Recovery Economics",
        description: "RPO/RTO cost trade-offs, DR testing tax, regional failure probability",
      },
      {
        id: "capacity-planning",
        number: 3,
        title: "Capacity Planning & Forecasting",
        description: "Headroom formula, forecasting methods, business driver correlation",
      },
      {
        id: "deployment-strategies",
        number: 4,
        title: "Deployment Strategies",
        description: "Canary deployments, feature flags, DB migrations, replication lag, circuit breakers",
      },
    ],
  },
  {
    title: "Cloud Economics & FinOps",
    description: "Cost as a non-functional requirement: compute, storage, network, accounting",
    letter: "B",
    topics: [
      {
        id: "cloud-economics",
        number: 5,
        title: "Cloud Economics (FinOps)",
        description: "Cost as NFR, compute tiers, storage tiers, the FinOps mindset",
      },
      {
        id: "compute-strategy",
        number: 6,
        title: "Compute Strategy",
        description: "Reserved vs Spot, base + burst philosophy, Savings Plans",
      },
      {
        id: "storage-lifecycle",
        number: 7,
        title: "Storage Lifecycle",
        description: "Data death date, S3 Intelligent-Tiering, lifecycle policies",
      },
      {
        id: "network-costs",
        number: 8,
        title: "Network Costs",
        description: "The silent killer: inter-AZ, inter-region, egress fees",
      },
      {
        id: "data-transfer",
        number: 9,
        title: "Data Transfer Optimization",
        description: "CDN egress shield, compression, data locality patterns",
      },
      {
        id: "capex-opex",
        number: 10,
        title: "CAPEX vs OPEX",
        description: "Accounting physics, unit economics, waste categories",
      },
      {
        id: "tagging-chargeback",
        number: 11,
        title: "Tagging & Chargeback",
        description: "No tag no resource, showback vs chargeback, cost attribution",
      },
      {
        id: "k8s-economics",
        number: 12,
        title: "Kubernetes Economics",
        description: "Resource requests vs limits, cluster efficiency, Graviton/ARM",
      },
    ],
  },
  {
    title: "Governance & Compliance",
    description: "Legal requirements that dictate architecture: data protection, payments, vendor strategy",
    letter: "C",
    topics: [
      {
        id: "vendor-strategy",
        number: 13,
        title: "Multi-Cloud Strategy",
        description: "EDP negotiation, vendor lock-in quantification, portability tax",
      },
      {
        id: "compliance-governance",
        number: 14,
        title: "Compliance & Data Governance",
        description: "GDPR, PCI-DSS, SOC 2, data classification, crypto-shredding",
      },
      {
        id: "payment-reliability",
        number: 15,
        title: "Payment Systems Reliability",
        description: "Idempotency keys, tokenization, envelope encryption, safe retries",
      },
    ],
  },
  {
    title: "Business Value & Risk",
    description: "Translating engineering problems into executive language: ROI, risk quantification",
    letter: "D",
    topics: [
      {
        id: "risk-quantification",
        number: 16,
        title: "Risk Quantification & Technical Debt",
        description: "Expected loss calculation, blast radius, velocity tax, monolith migration ROI",
      },
    ],
  },
];

export default function SystemDesignDeepDives() {
  const totalTopics = sections.reduce((acc, section) => acc + section.topics.length, 0);

  return (
    <SystemDesignLayout
      title="System Design - Deep Dives"
      description="Principal-level explorations of critical topics"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          4
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Deep Dives</h1>
        <p className="text-muted-foreground">
          {totalTopics} Principal-level explorations organized by interview theme
        </p>
      </div>

      {/* Instructions */}
      <div className="mb-8 p-4 bg-muted/40 rounded-lg border border-border">
        <p className="text-muted-foreground">
          <strong className="text-foreground">Deep Dives</strong> go beyond practice questions into
          the nuanced technical and financial considerations that differentiate a Principal TPM.
          Topics are organized by interview themes: start with Reliability foundations, then Cloud Economics,
          Governance, and finally Business Value.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            {/* Section Header */}
            <div className="mb-4 p-4 bg-muted/30 rounded-lg border border-border">
              <h2 className="text-lg font-bold text-foreground mb-1">
                {section.letter}. {section.title}
              </h2>
              <p className="text-muted-foreground">{section.description}</p>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {section.topics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/nebula/system-design/deep-dives/${topic.id}`}
                  className="group block p-4 bg-muted/20 hover:bg-muted/40 rounded-xl border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {topic.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{topic.description}</p>
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                      &rarr;
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Callouts */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <div className="font-semibold text-foreground mb-2">Featured: SLA Mathematics</div>
          <p className="text-sm text-muted-foreground mb-3">
            The foundation for all reliability discussions:
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 bg-primary/10 text-primary rounded">SLO Pyramid</span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded">Error Budgets</span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded">Burn Rate</span>
          </div>
        </div>

        <div className="p-4 bg-muted/30 rounded-lg border border-border">
          <div className="font-semibold text-foreground mb-2">New: Risk Quantification</div>
          <p className="text-sm text-muted-foreground mb-3">
            Translate engineering asks into executive language:
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 bg-primary/10 text-primary rounded">Expected Loss</span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded">Tech Debt ROI</span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded">Blast Radius</span>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-foreground">{totalTopics}</div>
            <div className="text-sm text-muted-foreground">Deep Dive Topics</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{sections.length}</div>
            <div className="text-sm text-muted-foreground">Interview Themes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">100+</div>
            <div className="text-sm text-muted-foreground">Tables & Formulas</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">Mag7</div>
            <div className="text-sm text-muted-foreground">Target Level</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <Link
          href="/nebula/system-design/practice"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Practice Questions
        </Link>
        <Link
          href="/nebula/system-design/guide"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          Principal TPM Guide &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
