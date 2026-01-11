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
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          1
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Constraints First</h1>
        <p className="text-muted-foreground">
          What are the non-negotiables? What problems must we NOT create?
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
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
            <div className="p-4 bg-gradient-to-r from-amber-500/5 to-transparent rounded-lg border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Business Constraints</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Revenue targets, fraud loss limits, approval rate requirements, customer experience standards
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Technical Constraints</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Latency SLAs, throughput requirements, availability targets, data consistency needs
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Compliance Constraints</span>
              </div>
              <div className="text-sm text-muted-foreground">
                PCI-DSS, PII handling, data retention, audit requirements, regulatory reporting
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg border border-purple-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Operational Constraints</span>
              </div>
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
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </span>
          Decision Context
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>For the Fraud Detection Platform, the master prompt established 10 practitioner constraints:</p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                    Constraint
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                    Why It Matters
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                    Design Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30 transition-colors">
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
                <tr className="hover:bg-muted/30 transition-colors">
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
                <tr className="hover:bg-muted/30 transition-colors">
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
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Evidence as Revenue</strong>
                  </td>
                  <td className="p-3 border border-border">
                    Disputes are winnable with proper evidence
                  </td>
                  <td className="p-3 border border-border">Immutable evidence vault, dispute automation</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
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
          <ul className="space-y-2 ml-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span><strong className="text-foreground">&lt;200ms</strong> end-to-end latency for online decisioning</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span><strong className="text-foreground">Exactly-once</strong> business effects (no duplicate charges or blocks)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span><strong className="text-foreground">&gt;92%</strong> approval rate target</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span><strong className="text-foreground">&lt;10%</strong> false positive rate among blocks</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
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
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "How do you approach designing a new system?":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
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
    </ThinkingLayout>
  );
}
