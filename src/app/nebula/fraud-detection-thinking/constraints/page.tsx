"use client";

/**
 * Section 1: Constraints First
 */

import Link from "next/link";
import { ThinkingLayout, getNavigation } from "@/components/ThinkingLayout";

export default function ConstraintsFirst() {
  const nav = getNavigation("constraints");

  return (
    <ThinkingLayout
      title="Constraints First - Thinking Process"
      description="Start with non-negotiables before designing solutions"
      currentSection="constraints"
    >
      <Link
        href="/nebula/fraud-detection-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">1</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Constraints First</h1>
        <p className="text-muted-foreground">
          What are the non-negotiables? What problems must we NOT create?
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Thinking Process
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Before evaluating any technology or drawing any architecture diagram,{" "}
            <strong className="text-foreground">
              enumerate the constraints that will eliminate 90% of naive solutions
            </strong>
            . Constraints come from multiple sources:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Business Constraints</div>
              <div className="text-sm text-muted-foreground">
                Revenue targets, fraud loss limits, approval rate requirements, customer experience standards
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Technical Constraints</div>
              <div className="text-sm text-muted-foreground">
                Latency SLAs, throughput requirements, availability targets, data consistency needs
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Compliance Constraints</div>
              <div className="text-sm text-muted-foreground">
                PCI-DSS, PII handling, data retention, audit requirements, regulatory reporting
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="text-sm font-semibold text-primary mb-2">Operational Constraints</div>
              <div className="text-sm text-muted-foreground">
                Team skills, vendor relationships, existing infrastructure, migration complexity
              </div>
            </div>
          </div>

          <p>
            Equally important: define what problems you must{" "}
            <strong className="text-foreground">NOT create</strong>. These are often overlooked but critical
            for production systems.
          </p>
        </div>
      </div>

      {/* Decision Context */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Decision Context
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>For the Fraud Detection Platform, the master prompt established 10 practitioner constraints:</p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Constraint
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Why It Matters
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Design Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Net Revenue Optimization</strong>
                  </td>
                  <td className="p-3 border border-border">
                    Prevents building a fraud blocker that kills good revenue
                  </td>
                  <td className="p-3 border border-border">
                    Profit-based thresholds, not just score cutoffs
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Policy {">"} ML</strong>
                  </td>
                  <td className="p-3 border border-border">
                    Business must control decisions without engineering deploys
                  </td>
                  <td className="p-3 border border-border">
                    Separate scoring from policy, configurable rules
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Fraud Taxonomy</strong>
                  </td>
                  <td className="p-3 border border-border">
                    Criminal, friendly fraud, and service errors need different responses
                  </td>
                  <td className="p-3 border border-border">
                    Multi-class labels, separate detection logic
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Evidence as Revenue</strong>
                  </td>
                  <td className="p-3 border border-border">
                    Disputes are winnable with proper evidence
                  </td>
                  <td className="p-3 border border-border">Immutable evidence vault, dispute automation</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Velocity {">"} Sophistication</strong>
                  </td>
                  <td className="p-3 border border-border">
                    Attacks cause damage in minutes, not days
                  </td>
                  <td className="p-3 border border-border">
                    Streaming velocity counters, circuit breakers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Additionally, <strong className="text-foreground">non-negotiable numbers</strong> were pinned
            down early:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong className="text-foreground">&lt;200ms</strong> end-to-end latency for online
              decisioning
            </li>
            <li>
              <strong className="text-foreground">Exactly-once</strong> business effects (no duplicate
              charges or blocks)
            </li>
            <li>
              <strong className="text-foreground">&gt;92%</strong> approval rate target
            </li>
            <li>
              <strong className="text-foreground">&lt;10%</strong> false positive rate among blocks
            </li>
          </ul>
        </div>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Derivation Path
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap overflow-x-auto">
          {`1. GATHER REQUIREMENTS
   - Interview stakeholders (fraud ops, finance, engineering)
   - Review existing system metrics and pain points
   - Identify regulatory and compliance requirements
        ↓
2. CATEGORIZE CONSTRAINTS
   - Hard constraints (must meet, no exceptions)
   - Soft constraints (should meet, can trade off)
   - Preferences (nice to have)
        ↓
3. QUANTIFY WHERE POSSIBLE
   - "Fast" → "<200ms P99"
   - "Reliable" → "99.9% availability"
   - "Accurate" → ">70% fraud detection rate"
        ↓
4. IDENTIFY ANTI-REQUIREMENTS
   - What problems must we NOT create?
   - What would make this a failure even if requirements are met?
        ↓
5. VALIDATE WITH STAKEHOLDERS
   - Confirm priorities and trade-offs
   - Get sign-off on quantified targets`}
        </div>
      </div>

      {/* Interview Response */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "How do you approach designing a new system?":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                "I always start with constraints, not solutions. Before evaluating any technology or drawing
                architecture diagrams, I enumerate the non-negotiables that will eliminate most naive
                approaches. This discipline applies whether I am building a telco fraud detection system, a
                fintech payment platform, or a consumer recommendation engine.
              </p>
              <p>
                For this telco payment fraud platform, I anchored on four categories: business constraints
                like fraud loss limits and 92%+ approval rate targets - because blocking legitimate
                subscribers costs more than fraud itself; technical constraints like sub-200ms P99 latency to
                not degrade payment UX; compliance constraints like PCI-DSS tokenization; and operational
                constraints ensuring fraud ops can update thresholds without engineering deploys.
              </p>
              <p>
                Critically, I define what problems we must NOT create. For telco specifically: not blocking
                legitimate SIM activations that appear as velocity spikes during promotions, not creating
                false positives that drive subscriber churn, and not building detection that fraudsters can
                easily probe and circumvent."
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
              Estimated time: 90-120 seconds
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            ← {nav.prev.title}
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            {nav.next.title} →
          </Link>
        )}
      </div>
    </ThinkingLayout>
  );
}
