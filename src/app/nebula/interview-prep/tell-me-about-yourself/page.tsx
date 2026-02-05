"use client";

/**
 * Tell Me About Yourself - Interview Response
 * Multiple takes for refining the elevator pitch
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function TellMeAboutYourselfPage() {
  return (
    <InterviewPrepLayout
      title="Tell Me About Yourself"
      description="Elevator pitch for Principal TPM interviews"
      currentSection="tell-me-about-yourself"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Interview Prep
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">Tell Me About Yourself</h1>
        <p className="text-muted-foreground">
          Opening pitch that sets the stage for the entire interview. Focus on relevance to the role.
        </p>
      </div>

      {/* Take 1 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
            1
          </span>
          <h2 className="text-xl font-semibold text-foreground">Take 1</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              I have spent the last several years leading large, high-risk platform and reliability programs for Tier-1 service providers, where the core challenge was keeping revenue-critical systems stable while modernizing them under real customer and executive pressure.
            </p>
            <p>
              My work sits at the intersection of reliability, billing, compliance, and large-scale migrations — I am usually brought in when systems are brittle, multiple orgs disagree on what to do next, and the cost of getting it wrong is measured in outages, customer credits, or lost revenue.
            </p>
            <p>
              In that context, I have driven executive-level decisions during major incidents, led cross-org programs without formal authority, and governed multi-wave migrations impacting over a million subscribers while simultaneously taking on operational ownership.
            </p>
            <p>
              More recently, I have focused on turning operational pain into durable systems — things like reliability platforms, automation, and governance models that reduce error-budget burn and make outcomes predictable rather than heroic.
            </p>
            <p>
              What I enjoy most is translating technical reality into clear tradeoffs so leaders can make the right call, and then orchestrating execution across engineering, operations, security, and customers to land the result.
            </p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Themes Highlighted</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Platform Reliability</div>
            <div className="text-sm text-muted-foreground">
              Revenue-critical systems, error budgets, SRE principles
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Cross-Org Leadership</div>
            <div className="text-sm text-muted-foreground">
              Influence without authority, stakeholder alignment
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Executive Communication</div>
            <div className="text-sm text-muted-foreground">
              Translating technical complexity into business decisions
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Large-Scale Migrations</div>
            <div className="text-sm text-muted-foreground">
              Multi-wave programs, risk management, operational ownership
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to Interview Prep
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
