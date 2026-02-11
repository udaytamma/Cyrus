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

      {/* Response */}
      <section className="mb-10">
        <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              I&apos;ve spent the last several years operating as a Principal TPM and platform product owner in high-risk, revenue-critical environments for Tier-1 service providers.
            </p>
            <p>
              Much of my work has centered on stabilizing and modernizing OSS/BSS and billing systems where outages translate directly into revenue loss, customer credits, or regulatory exposure. I&apos;m typically brought in when systems are brittle, ownership is fragmented, and leaders need clear tradeoffs under executive pressure.
            </p>
            <p>
              In that context, I&apos;ve owned both execution and product shape — defining MVP scope for reliability platforms, setting adoption gates, enforcing guardrails like HA/DR and rollback standards, and positioning capabilities like self-healing automation as managed service tiers that generated net-new ARR.
            </p>
            <p>
              Over time, I became more interested in converting operational pain into durable systems. That led to building reliability platforms, automation frameworks, and more recently AI-enabled systems — including internal AI copilots and customer-facing assistants with explicit guardrails such as retrieval gating, confidence thresholds, and human-in-the-loop controls to make them safe in production.
            </p>
            <p>
              Most recently, through independent prototyping work, I&apos;ve been building AI-first systems end-to-end — fraud decisioning platforms and RAG-based incident RCA systems — to deepen my understanding of model behavior, latency tradeoffs, and operational guardrails beyond theory.
            </p>
            <p>
              What I enjoy most is owning the space between product intent and execution reality — translating technical constraints into business-aware decisions and then orchestrating cross-functional execution to land platforms that hold up over time.
            </p>
          </div>
        </div>
      </section>

      {/* With More Product Ownership */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-semibold text-foreground">With More Product Ownership (Payments)</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              I operate at the intersection of product, platform architecture, and execution for revenue-critical systems.
            </p>
            <p>
              Over the past 15+ years, I&apos;ve owned high-blast-radius platform initiatives across billing, payments-adjacent OSS/BSS systems, reliability, and compliance for Tier-1 service providers — environments where outages translate directly into lost revenue, SLA credits, or regulatory exposure.
            </p>
            <p>
              My work has consistently combined product definition with technical execution. For example, I defined and launched a self-healing reliability platform — not as tooling, but as a managed reliability tier with clear MVP boundaries, adoption gates, and success metrics like MTTR and incident volume. That initiative generated ~$1.5M in net-new ARR and materially improved system availability across 130+ Tier-0/1 services.
            </p>
            <p>
              I&apos;m particularly interested in durable platform primitives — enforcing HA/DR standards, rollback safety, escalation models, and reliability guardrails so systems behave predictably under scale rather than relying on heroics.
            </p>
            <p>
              More recently, I&apos;ve focused on AI-enabled systems in production environments. In enterprise settings, I was instrumental in rolling out AI copilots and customer-facing assistants with strict guardrails — retrieval-gated responses, confidence thresholds, and human-in-the-loop escalation — to ensure correctness in regulated, revenue-impacting workflows.
            </p>
            <p>
              In parallel, I&apos;ve been building AI-first systems end-to-end — including low-latency fraud decisioning platforms and RAG-based incident RCA systems — to deepen my understanding of model behavior, system latency constraints, and safe deployment patterns.
            </p>
            <p>
              What motivates me is defining product vision for complex technical domains, turning ambiguity into simple, durable platform capabilities, and aligning engineering, GTM, and customers around systems that scale both technically and economically.
            </p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Themes Highlighted</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Platform Product Ownership</div>
            <div className="text-sm text-muted-foreground">
              MVP scoping, adoption gates, HA/DR guardrails, managed service tiers
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">OSS/BSS & Billing Modernization</div>
            <div className="text-sm text-muted-foreground">
              Revenue-critical systems, regulatory exposure, stability under pressure
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">AI-Enabled Systems</div>
            <div className="text-sm text-muted-foreground">
              Copilots, RAG-based RCA, fraud decisioning, production guardrails
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Execution & Business Translation</div>
            <div className="text-sm text-muted-foreground">
              Technical constraints to business decisions, cross-functional orchestration
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
