"use client";

/**
 * Fraud Detection - Architecture Review
 *
 * Comprehensive architecture analysis of the FraudDetection project
 * covering strengths, bottlenecks, security vulnerabilities,
 * and prioritized improvement recommendations.
 *
 * Date: January 13, 2026
 */

import { useState } from "react";
import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";

// =============================================================================
// Section Components
// =============================================================================

function SectionHeader({
  number,
  title,
  icon,
  color,
}: {
  number: string;
  title: string;
  icon: string;
  color: string;
}) {
  const colorClasses: Record<string, { bg: string; border: string; badge: string }> = {
    green: {
      bg: "bg-gradient-to-r from-green-500/10 to-transparent",
      border: "border-green-500/30",
      badge: "bg-green-500",
    },
    red: {
      bg: "bg-gradient-to-r from-red-500/10 to-transparent",
      border: "border-red-500/30",
      badge: "bg-red-500",
    },
    amber: {
      bg: "bg-gradient-to-r from-amber-500/10 to-transparent",
      border: "border-amber-500/30",
      badge: "bg-amber-500",
    },
    blue: {
      bg: "bg-gradient-to-r from-blue-500/10 to-transparent",
      border: "border-blue-500/30",
      badge: "bg-blue-500",
    },
    purple: {
      bg: "bg-gradient-to-r from-purple-500/10 to-transparent",
      border: "border-purple-500/30",
      badge: "bg-purple-500",
    },
  };

  const colors = colorClasses[color];

  return (
    <div className={`text-center mb-6 p-6 ${colors.bg} rounded-xl border ${colors.border} shadow-sm`}>
      <div className={`w-14 h-14 rounded-full ${colors.badge} text-white flex items-center justify-center text-2xl mx-auto mb-3`}>
        {icon}
      </div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className={`w-8 h-8 rounded-full ${colors.badge} text-white text-sm font-bold flex items-center justify-center`}>
          {number}
        </span>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  icon,
  color,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}) {
  const colorClasses: Record<string, { bg: string; border: string; iconBg: string; iconText: string }> = {
    green: {
      bg: "bg-gradient-to-r from-green-500/5 to-transparent",
      border: "border-green-500/30",
      iconBg: "bg-green-500/10",
      iconText: "text-green-500",
    },
    red: {
      bg: "bg-gradient-to-r from-red-500/5 to-transparent",
      border: "border-red-500/30",
      iconBg: "bg-red-500/10",
      iconText: "text-red-500",
    },
    amber: {
      bg: "bg-gradient-to-r from-amber-500/5 to-transparent",
      border: "border-amber-500/30",
      iconBg: "bg-amber-500/10",
      iconText: "text-amber-500",
    },
    blue: {
      bg: "bg-gradient-to-r from-blue-500/5 to-transparent",
      border: "border-blue-500/30",
      iconBg: "bg-blue-500/10",
      iconText: "text-blue-500",
    },
    purple: {
      bg: "bg-gradient-to-r from-purple-500/5 to-transparent",
      border: "border-purple-500/30",
      iconBg: "bg-purple-500/10",
      iconText: "text-purple-500",
    },
    cyan: {
      bg: "bg-gradient-to-r from-cyan-500/5 to-transparent",
      border: "border-cyan-500/30",
      iconBg: "bg-cyan-500/10",
      iconText: "text-cyan-500",
    },
    pink: {
      bg: "bg-gradient-to-r from-pink-500/5 to-transparent",
      border: "border-pink-500/30",
      iconBg: "bg-pink-500/10",
      iconText: "text-pink-500",
    },
  };

  const colors = colorClasses[color];

  return (
    <div className={`p-5 ${colors.bg} rounded-xl border ${colors.border} shadow-sm`}>
      <h3 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border flex items-center gap-2">
        <span className={`w-7 h-7 rounded-full ${colors.iconBg} flex items-center justify-center ${colors.iconText}`}>
          {icon}
        </span>
        {title}
      </h3>
      <div className="text-muted-foreground text-sm space-y-3">{children}</div>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs text-muted-foreground whitespace-pre-wrap overflow-x-auto border border-border">
      {children}
    </div>
  );
}

// QAItem component for expandable Q&A
function QAItem({
  number,
  question,
  answer,
  principalNuance,
}: {
  number: number;
  question: string;
  answer: React.ReactNode;
  principalNuance?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center gap-3 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
          {number}
        </span>
        <span className="flex-1 font-medium text-foreground">{question}</span>
        <span className="text-muted-foreground text-lg">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 border-t border-border bg-muted/10">
          <div className="pt-4 space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-primary mb-2">
                Principal-Level Answer
              </div>
              <div className="text-sm text-muted-foreground space-y-2">{answer}</div>
            </div>
            {principalNuance && (
              <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
                <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-1">
                  Principal Nuance
                </div>
                <div className="text-xs text-muted-foreground">{principalNuance}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function BulletList({ items, color = "primary" }: { items: string[]; color?: string }) {
  const dotColors: Record<string, string> = {
    primary: "bg-primary",
    green: "bg-green-500",
    red: "bg-red-500",
    amber: "bg-amber-500",
    blue: "bg-blue-500",
  };

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className={`w-2 h-2 rounded-full ${dotColors[color]} mt-1.5 shrink-0`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CollapsibleSection({
  title,
  icon,
  color,
  defaultOpen = false,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const colorClasses: Record<string, { bg: string; border: string; iconBg: string; iconText: string }> = {
    violet: {
      bg: "bg-gradient-to-r from-violet-500/5 to-transparent",
      border: "border-violet-500/30",
      iconBg: "bg-violet-500/10",
      iconText: "text-violet-500",
    },
    green: {
      bg: "bg-gradient-to-r from-green-500/5 to-transparent",
      border: "border-green-500/30",
      iconBg: "bg-green-500/10",
      iconText: "text-green-500",
    },
    red: {
      bg: "bg-gradient-to-r from-red-500/5 to-transparent",
      border: "border-red-500/30",
      iconBg: "bg-red-500/10",
      iconText: "text-red-500",
    },
    amber: {
      bg: "bg-gradient-to-r from-amber-500/5 to-transparent",
      border: "border-amber-500/30",
      iconBg: "bg-amber-500/10",
      iconText: "text-amber-500",
    },
  };

  const colors = colorClasses[color] || colorClasses.violet;

  return (
    <div className={`${colors.bg} rounded-xl border ${colors.border} shadow-sm overflow-hidden`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className={`w-8 h-8 rounded-full ${colors.iconBg} flex items-center justify-center ${colors.iconText}`}>
            {icon}
          </span>
          <span className="font-semibold text-foreground">{title}</span>
        </div>
        <svg
          className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 border-t border-border/50">
          <div className="pt-4 text-muted-foreground text-sm space-y-4">{children}</div>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// Main Content
// =============================================================================

function ArchReviewContent() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-[1330px] px-4 sm:px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/nebula"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <div className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Planning</div>
              <h1 className="text-2xl font-bold text-foreground">Fraud Detection - Architecture Review</h1>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Comprehensive architecture analysis of the FraudDetection project covering strengths,
            bottlenecks, security vulnerabilities, and prioritized improvement recommendations
            for production readiness.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-lg bg-gradient-to-r from-green-500/5 to-transparent border border-green-500/30 p-4 text-center">
              <div className="text-2xl font-bold text-green-500">5</div>
              <div className="text-xs text-muted-foreground">Strengths</div>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-red-500/5 to-transparent border border-red-500/30 p-4 text-center">
              <div className="text-2xl font-bold text-red-500">5</div>
              <div className="text-xs text-muted-foreground">Bottlenecks</div>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-amber-500/5 to-transparent border border-amber-500/30 p-4 text-center">
              <div className="text-2xl font-bold text-amber-500">6</div>
              <div className="text-xs text-muted-foreground">Vulnerabilities</div>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-blue-500/5 to-transparent border border-blue-500/30 p-4 text-center">
              <div className="text-2xl font-bold text-blue-500">11</div>
              <div className="text-xs text-muted-foreground">Improvements</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[1330px] px-4 sm:px-6 py-8 space-y-12">
        {/* Executive Summary */}
        <section className="p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/30 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            Executive Summary
          </h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              The FraudDetection platform demonstrates a <strong className="text-foreground">well-architected foundation</strong> with
              proper separation of concerns between detection, scoring, and policy layers. The core architecture follows
              production fraud system patterns correctly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-foreground">Core Architecture</span>
                </div>
                <p className="text-sm">Solid detection/scoring/policy separation. ML-ready design with business controls.</p>
              </div>
              <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="font-semibold text-foreground">Security Gaps</span>
                </div>
                <p className="text-sm">No authentication, open CORS, missing rate limiting block production deployment.</p>
              </div>
            </div>
            <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/30">
              <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">
                Production Readiness Verdict
              </div>
              <p className="text-sm">
                <strong className="text-foreground">Not production-ready</strong> due to security gaps.
                The path to production requires addressing P0 security items first (authentication, CORS, rate limiting),
                followed by P1 hardening. The core detection and policy architecture is solid and does not require fundamental changes.
              </p>
            </div>
          </div>
        </section>

        {/* Codex Feedback - Collapsible */}
        <section>
          <CollapsibleSection
            title="Codex Feedback (External Review)"
            icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            color="violet"
            defaultOpen={false}
          >
            {/* Critical Bottlenecks */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-red-500/10 flex items-center justify-center text-red-500 text-xs">!</span>
                Critical Bottlenecks (ordered by severity)
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong className="text-foreground">Non-atomic idempotency:</strong> Read-then-write cache pattern can double-charge side effects and double-write evidence (<code className="text-xs bg-muted px-1 rounded">main.py:203, 304, 324</code>)</li>
                <li><strong className="text-foreground">Evidence JSON as str():</strong> Written as <code className="text-xs bg-muted px-1 rounded">str(...)</code> into JSONB columns - not valid JSON, will fail inserts or drop evidence (<code className="text-xs bg-muted px-1 rounded">service.py:248, 250, 255</code>)</li>
                <li><strong className="text-foreground">Redis TTL refresh:</strong> Velocity keys refresh TTL on every write - hot keys never expire, ZSETs grow unbounded (<code className="text-xs bg-muted px-1 rounded">velocity.py:63, 90</code>)</li>
                <li><strong className="text-foreground">Hot path blocking:</strong> Awaits profile updates and evidence capture - Postgres/Redis latency drives p99, breaks &lt;200ms SLA (<code className="text-xs bg-muted px-1 rounded">main.py:269, 276</code>)</li>
                <li><strong className="text-foreground">File-based policy:</strong> Versioning writes YAML locally, multi-instance deployments will drift (<code className="text-xs bg-muted px-1 rounded">versioning.py:275, 291</code>, <code className="text-xs bg-muted px-1 rounded">engine.py:48</code>)</li>
                <li><strong className="text-foreground">Architecture drift:</strong> Design doc shows Kafka/Flink/OPA/Seldon but code is single FastAPI + Redis/Postgres - no streaming backpressure or multi-region path (<code className="text-xs bg-muted px-1 rounded">FRAUD_DETECTION.md:69</code>)</li>
              </ol>
            </div>

            {/* Security Vulnerabilities */}
            <div className="space-y-3 pt-4 border-t border-border/50">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-amber-500/10 flex items-center justify-center text-amber-500 text-xs">!</span>
                Security Vulnerabilities (ordered by severity)
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong className="text-foreground">Unauthenticated policy endpoints:</strong> Accept user-controlled <code className="text-xs bg-muted px-1 rounded">changed_by</code>, anyone can alter fraud policy (<code className="text-xs bg-muted px-1 rounded">main.py:390, 447</code>)</li>
                <li><strong className="text-foreground">Wide-open CORS:</strong> With credentials allowed - unsafe for public exposure (<code className="text-xs bg-muted px-1 rounded">main.py:123</code>)</li>
                <li><strong className="text-foreground">Hardcoded credentials:</strong> Default DB creds exposed via compose ports (<code className="text-xs bg-muted px-1 rounded">settings.py:92</code>, <code className="text-xs bg-muted px-1 rounded">docker-compose.yml:29</code>)</li>
                <li><strong className="text-foreground">Sensitive data unencrypted:</strong> Evidence includes device/IP without encryption/retention controls (<code className="text-xs bg-muted px-1 rounded">init_db.sql:12</code>)</li>
              </ol>
            </div>

            {/* Open Questions */}
            <div className="space-y-3 pt-4 border-t border-border/50">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs">?</span>
                Open Questions/Assumptions
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Single-node demo only, or multi-instance service with HA?</li>
                <li>PCI/PII retention rules (90-180 days) and encryption-at-rest for evidence?</li>
                <li>Target sustained TPS and p99 latency for production?</li>
              </ul>
            </div>

            {/* Architecture Strengths */}
            <div className="space-y-3 pt-4 border-t border-border/50">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-green-500/10 flex items-center justify-center text-green-500 text-xs">+</span>
                Architecture Strengths
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong className="text-foreground">Clean separation:</strong> API, features, detection, scoring, policy, evidence, metrics are distinct modules</li>
                <li><strong className="text-foreground">Strong schema modeling:</strong> Pydantic ensures consistent validation and typed models (<code className="text-xs bg-muted px-1 rounded">events.py</code>)</li>
                <li><strong className="text-foreground">Hot-reloadable policy:</strong> Explicit versioning with auditability (<code className="text-xs bg-muted px-1 rounded">engine.py</code>, <code className="text-xs bg-muted px-1 rounded">versioning.py</code>)</li>
                <li><strong className="text-foreground">Prometheus metrics:</strong> Covers latency and decision distributions for production ops (<code className="text-xs bg-muted px-1 rounded">prometheus.py</code>)</li>
              </ul>
            </div>

            {/* Recommended Improvements */}
            <div className="space-y-3 pt-4 border-t border-border/50">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs">+</span>
                Recommended Improvements (specific, actionable)
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong className="text-foreground">Atomic idempotency:</strong> Use <code className="text-xs bg-muted px-1 rounded">SET key value NX EX</code> or Redis Lua script to claim processing before work; store response after completion</li>
                <li><strong className="text-foreground">Async evidence capture:</strong> Move off hot path with Redis Streams/Kafka/SQS worker - keep request path strictly read+compute+respond</li>
                <li><strong className="text-foreground">Fix JSONB writes:</strong> Use <code className="text-xs bg-muted px-1 rounded">json.dumps()</code> for decision_reasons, features_snapshot, device_fingerprint; add insert tests</li>
                <li><strong className="text-foreground">Fix Redis memory:</strong> Replace ZSET-per-event with bucketed counters (per-minute keys + TTL) or Redis TimeSeries; prune via ZREMRANGEBYSCORE</li>
                <li><strong className="text-foreground">Centralize policy:</strong> Store in Postgres/Redis, broadcast version updates; remove local YAML as source of truth</li>
                <li><strong className="text-foreground">Secure endpoints:</strong> Add JWT/mTLS auth + RBAC for policy routes, tighten CORS, rate-limit /decide</li>
                <li><strong className="text-foreground">Data retention:</strong> Add partitioning for transaction_evidence, offload large blobs to object storage</li>
              </ol>
            </div>

            {/* Implementation Priority */}
            <div className="space-y-3 pt-4 border-t border-border/50">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 text-xs">#</span>
                Implementation Priority (what to fix first)
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong className="text-foreground">P0:</strong> Lock down policy endpoints + CORS, remove unauthenticated writes</li>
                <li><strong className="text-foreground">P0:</strong> Make idempotency atomic, fix JSONB evidence serialization</li>
                <li><strong className="text-foreground">P1:</strong> Decouple evidence/profile writes from request path with queue/outbox</li>
                <li><strong className="text-foreground">P1:</strong> Fix Redis memory growth with bucketed counters or cleanup; plan Redis Cluster</li>
                <li><strong className="text-foreground">P2:</strong> Replace local YAML policy propagation with centralized version distribution</li>
              </ol>
            </div>

            <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border text-xs">
              <strong className="text-foreground">Change summary:</strong> No code changes; review only.
            </div>
          </CollapsibleSection>
        </section>

        {/* Section 1: Architecture Strengths */}
        <section>
          <SectionHeader number="1" title="Architecture Strengths" icon="+" color="green" />

          <div className="space-y-4">
            <InfoCard
              title="Clean Separation of Concerns"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
              color="green"
            >
              <p>
                Detection modules are isolated and implement the <code className="text-xs bg-muted px-1 py-0.5 rounded">BaseDetector</code> interface,
                making them independently testable and replaceable. This is the correct pattern for production fraud systems.
              </p>
              <div className="mt-3">
                <BulletList
                  color="green"
                  items={[
                    "Detection modules isolated in src/detection/ (~1096 lines)",
                    "Policy engine decoupled from scoring logic (src/policy/engine.py)",
                    "Evidence capture is async and non-blocking",
                    "Each detector returns DetectionResult with score, triggered flag, and reasons",
                  ]}
                />
              </div>
              <div className="mt-4 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
                <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Why This Matters</div>
                <p className="text-xs">
                  Most teams make the mistake of coupling detection with policy, which blocks business iteration.
                  This architecture allows ML teams to improve detection independently while business controls decisions.
                </p>
              </div>
            </InfoCard>

            <InfoCard
              title="Parallel Async Design"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              color="green"
            >
              <p>Feature computation and detector execution use parallel async patterns to meet the &lt;200ms latency target.</p>
              <CodeBlock>{`# Feature computation pattern (src/features/store.py)
async def compute_features(event) -> FeatureSet:
    # Parallel Redis queries for velocity features
    tasks = [
        _get_card_velocity(),
        _get_device_velocity(),
        _get_ip_velocity(),
        _get_user_velocity()
    ]
    velocity_results = await asyncio.gather(*tasks)

    # Parallel entity profile lookups
    entity_tasks = [
        _get_card_profile(),
        _get_device_profile(),
        _get_ip_profile(),
        _get_user_profile(),
        _get_merchant_profile()
    ]
    entity_results = await asyncio.gather(*entity_tasks)

    return FeatureSet(velocity=..., entities=..., transaction=...)`}</CodeBlock>
              <div className="mt-3">
                <BulletList
                  color="green"
                  items={[
                    "Feature computation uses asyncio.gather() for parallel Redis queries",
                    "Target latency: <200ms e2e, <50ms features, <25ms scoring",
                    "Detectors run concurrently via DetectionEngine",
                  ]}
                />
              </div>
            </InfoCard>

            <InfoCard
              title="Strong Observability"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              color="green"
            >
              <p>
                Comprehensive Prometheus metrics cover latency, decisions, and detector triggers. Every response
                includes latency breakdown by component for debugging and SLA monitoring.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-2 bg-muted/50 text-foreground font-semibold border border-border">Metric Category</th>
                      <th className="text-left p-2 bg-muted/50 text-foreground font-semibold border border-border">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-2 border border-border font-medium">Request Metrics</td>
                      <td className="p-2 border border-border">fraud_requests_total, fraud_errors_total</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-2 border border-border font-medium">Latency Metrics</td>
                      <td className="p-2 border border-border">fraud_e2e_latency_ms, fraud_feature_latency_ms, fraud_scoring_latency_ms</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-2 border border-border font-medium">Decision Metrics</td>
                      <td className="p-2 border border-border">fraud_decisions_total, fraud_approval_rate, fraud_block_rate</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-2 border border-border font-medium">Detector Metrics</td>
                      <td className="p-2 border border-border">fraud_detector_triggers_total (per detector)</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-2 border border-border font-medium">System Health</td>
                      <td className="p-2 border border-border">fraud_redis_latency_ms, fraud_postgres_latency_ms, fraud_component_health</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs">
                <strong className="text-foreground">File:</strong> src/metrics/prometheus.py (212 lines)
              </p>
            </InfoCard>

            <InfoCard
              title="Idempotency & Safety"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              color="green"
            >
              <BulletList
                color="green"
                items={[
                  "Client idempotency_key prevents duplicate charges (24-hour TTL in Redis)",
                  "Evidence snapshots are immutable once captured for compliance/ML training",
                  "Policy versioning with full audit trail in PostgreSQL (who/what/when)",
                  "Rollback capability with semantic versioning (1.2.4)",
                ]}
              />
            </InfoCard>

            <InfoCard
              title="Hot-Reloadable Policy Engine"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              color="green"
            >
              <p>Rules and thresholds can be updated without deployment, enabling business teams to respond quickly to fraud patterns.</p>
              <div className="mt-3">
                <BulletList
                  color="green"
                  items={[
                    "Policy hot-reloads from YAML via /policy/reload endpoint",
                    "Thresholds tunable via REST API without code changes",
                    "Rules CRUD operations via /policy/rules/* endpoints",
                    "Blocklist/allowlist management via /policy/lists/* endpoints",
                    "Version diffing capability for auditing changes",
                  ]}
                />
              </div>
            </InfoCard>
          </div>
        </section>

        {/* Section 2: Critical Bottlenecks */}
        <section>
          <SectionHeader number="2" title="Critical Bottlenecks" icon="!" color="red" />

          <div className="space-y-4">
            <InfoCard
              title="Redis as Single Point of Failure"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
              color="red"
            >
              <p>
                All velocity counters and entity profiles live in Redis. The current degradation strategy returns
                zero/default values, which is risky as it could approve fraudulent transactions.
              </p>
              <div className="mt-3">
                <BulletList
                  color="red"
                  items={[
                    "All velocity counters (ZSET) and entity profiles (Hash) in single Redis instance",
                    "Current degradation: returns zero/default values (dangerous - could approve fraud)",
                    "No Redis cluster or sentinel configuration in docker-compose.yml",
                    "Single connection pool of 20 connections (src/api/dependencies.py)",
                  ]}
                />
              </div>
              <div className="mt-4 p-3 bg-red-500/5 rounded-lg border border-red-500/20">
                <div className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">Risk Impact</div>
                <p className="text-xs">
                  At 1000 TPS, a Redis failure means all transactions would be evaluated with zero velocity scores,
                  potentially allowing card testing attacks or velocity-based fraud to pass through undetected.
                </p>
              </div>
            </InfoCard>

            <InfoCard
              title="PostgreSQL Write Amplification"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
              color="red"
            >
              <p>
                Every decision writes to the transaction_evidence table. At scale, this becomes a significant bottleneck.
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-2 bg-muted/50 text-foreground font-semibold border border-border">Scale</th>
                      <th className="text-left p-2 bg-muted/50 text-foreground font-semibold border border-border">Daily Rows</th>
                      <th className="text-left p-2 bg-muted/50 text-foreground font-semibold border border-border">Monthly Storage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-2 border border-border">100 TPS</td>
                      <td className="p-2 border border-border">8.64M rows/day</td>
                      <td className="p-2 border border-border">~50GB/month</td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="p-2 border border-border">1000 TPS</td>
                      <td className="p-2 border border-border">86.4M rows/day</td>
                      <td className="p-2 border border-border">~500GB/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3">
                <BulletList
                  color="red"
                  items={[
                    "No partitioning strategy defined in scripts/init_db.sql",
                    "JSONB columns (features_snapshot, decision_reasons) are expensive to index",
                    "Missing archival/retention policy for old evidence",
                  ]}
                />
              </div>
            </InfoCard>

            <InfoCard
              title="Connection Pool Limitations"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>}
              color="red"
            >
              <p>Current pool sizes are configured for development, not production scale.</p>
              <CodeBlock>{`# Current configuration (src/api/dependencies.py)
PostgreSQL: pool_size=5, max_overflow=10
Redis: max_connections=20

# At 1000 TPS with async writes:
# - 15 PostgreSQL connections will exhaust in seconds
# - 20 Redis connections insufficient for parallel queries`}</CodeBlock>
            </InfoCard>

            <InfoCard
              title="Dashboard Performance"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>}
              color="red"
            >
              <BulletList
                color="red"
                items={[
                  "dashboard.py is 66,000+ lines - likely includes embedded data or inefficient patterns",
                  "No caching layer for analytics queries",
                  "Direct PostgreSQL queries from Streamlit (no aggregation tables beyond hourly)",
                  "Will struggle with large datasets (millions of rows)",
                ]}
              />
            </InfoCard>

            <InfoCard
              title="Memory Pressure Risk"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>}
              color="red"
            >
              <BulletList
                color="red"
                items={[
                  "Policy loaded entirely in memory (src/policy/engine.py)",
                  "Large blocklists (100K+ entries) will consume significant RAM",
                  "No pagination for list operations in /policy/lists/* endpoints",
                ]}
              />
            </InfoCard>
          </div>
        </section>

        {/* Section 3: Security Vulnerabilities */}
        <section>
          <SectionHeader number="3" title="Security Vulnerabilities" icon="!" color="amber" />

          <div className="p-4 mb-6 bg-amber-500/10 rounded-lg border border-amber-500/30">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <div className="font-semibold text-foreground mb-1">Critical Security Note</div>
                <p className="text-sm text-muted-foreground">
                  The lack of authentication is acceptable for MVP behind a VPN, but the CORS configuration
                  (allow all origins) and missing rate limiting are attack vectors that need addressing
                  before any external exposure.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <InfoCard
              title="No Authentication/Authorization"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
              color="amber"
            >
              <p>API endpoints are completely open with no access control mechanisms.</p>
              <div className="mt-3">
                <BulletList
                  color="amber"
                  items={[
                    "No API key validation on any endpoint",
                    "No JWT/token verification",
                    "Policy modification endpoints have no access control",
                    "Anyone can rollback policy, add blocklist entries, or modify thresholds",
                  ]}
                />
              </div>
              <div className="mt-4 p-3 bg-amber-500/5 rounded-lg border border-amber-500/20">
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">Attack Vector</div>
                <p className="text-xs">
                  An attacker could disable fraud detection by setting all thresholds to 1.0,
                  add themselves to allowlists, or remove legitimate entries from blocklists.
                </p>
              </div>
            </InfoCard>

            <InfoCard
              title="CORS Misconfiguration"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
              color="amber"
            >
              <CodeBlock>{`# Current configuration (src/api/main.py ~line 50)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # DANGEROUS: Allows all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)`}</CodeBlock>
              <p className="mt-3">
                This configuration exposes the API to cross-site attacks if accessible from a browser.
                Any malicious website could make requests to the fraud API.
              </p>
            </InfoCard>

            <InfoCard
              title="No Rate Limiting"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              color="amber"
            >
              <p>The /decide endpoint has no request throttling, enabling several attack vectors:</p>
              <div className="mt-3">
                <BulletList
                  color="amber"
                  items={[
                    "Exhaust Redis connections via connection flooding",
                    "Fill PostgreSQL with junk evidence records",
                    "Probe detection thresholds via binary search to discover exact trigger points",
                    "DoS attack by overwhelming the service",
                  ]}
                />
              </div>
            </InfoCard>

            <InfoCard
              title="Secrets in Configuration"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>}
              color="amber"
            >
              <BulletList
                color="amber"
                items={[
                  "docker-compose.yml has hardcoded credentials (fraud_dev_password)",
                  ".env file pattern but no secrets management integration",
                  "No encryption at rest for Redis data",
                  "No integration with HashiCorp Vault, AWS Secrets Manager, or similar",
                ]}
              />
            </InfoCard>

            <InfoCard
              title="SQL Injection Surface"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
              color="amber"
            >
              <p>
                Policy versioning constructs queries with user input. Fields like change_summary
                and changed_by in /policy/* endpoints need sanitization verification.
              </p>
            </InfoCard>

            <InfoCard
              title="Missing Input Validation"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              color="amber"
            >
              <p>PaymentEvent relies on Pydantic but edge cases exist:</p>
              <div className="mt-3">
                <BulletList
                  color="amber"
                  items={[
                    "No max length on transaction_id, idempotency_key (potential buffer issues)",
                    "IP address not validated as IPv4/IPv6 format",
                    "Amount could be negative (need validation: amount_cents >= 0)",
                    "Currency not validated against ISO 4217 list",
                  ]}
                />
              </div>
            </InfoCard>
          </div>
        </section>

        {/* Section 4: Recommended Improvements */}
        <section>
          <SectionHeader number="4" title="Recommended Improvements" icon="+" color="blue" />

          <div className="space-y-6">
            {/* High Priority */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-semibold">
                  HIGH PRIORITY - SECURITY
                </span>
              </div>

              <div className="space-y-4">
                <InfoCard
                  title="Add API Key Authentication"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>}
                  color="blue"
                >
                  <p>Create a new middleware for API key validation:</p>
                  <CodeBlock>{`# src/api/middleware/auth.py
from fastapi import Header, HTTPException
import secrets

async def verify_api_key(
    api_key: str = Header(..., alias="X-API-Key")
):
    """Validate API key from request header."""
    if not secrets.compare_digest(api_key, settings.api_key):
        raise HTTPException(
            status_code=401,
            detail="Invalid API key"
        )
    return api_key

# Apply to routes in main.py:
@app.post("/decide", dependencies=[Depends(verify_api_key)])
async def decide(event: PaymentEvent):
    ...`}</CodeBlock>
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 2-3 hours |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> Unauthorized access
                  </p>
                </InfoCard>

                <InfoCard
                  title="Implement Rate Limiting"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  color="blue"
                >
                  <p>Add Redis-based sliding window rate limiting:</p>
                  <CodeBlock>{`# src/api/middleware/rate_limit.py
from fastapi import Request, HTTPException

async def rate_limit(
    request: Request,
    redis: Redis = Depends(get_redis)
):
    """Sliding window rate limiter using Redis."""
    client_ip = request.client.host
    key = f"ratelimit:{client_ip}"

    current = await redis.incr(key)
    if current == 1:
        await redis.expire(key, 60)  # 60-second window

    if current > 1000:  # 1000 requests per minute
        raise HTTPException(
            status_code=429,
            detail="Rate limit exceeded. Try again later."
        )

# For production, consider per-API-key limits:
# - /decide: 1000 req/min
# - /policy/*: 100 req/min (more sensitive)`}</CodeBlock>
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 2-3 hours |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> DoS, threshold probing
                  </p>
                </InfoCard>

                <InfoCard
                  title="Restrict CORS Origins"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
                  color="blue"
                >
                  <CodeBlock>{`# src/api/main.py - Update CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://dashboard.yourdomain.com",
        "http://localhost:8501",  # Dev only
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["X-API-Key", "Content-Type"],
)`}</CodeBlock>
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 30 minutes |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> Cross-site attacks
                  </p>
                </InfoCard>
              </div>
            </div>

            {/* Medium Priority */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold">
                  MEDIUM PRIORITY - HARDENING
                </span>
              </div>

              <div className="space-y-4">
                <InfoCard
                  title="Input Validation Hardening"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  color="cyan"
                >
                  <CodeBlock>{`# src/schemas/events.py - Add validators
from pydantic import Field, field_validator
import ipaddress

class PaymentEvent(BaseModel):
    transaction_id: str = Field(..., max_length=64)
    idempotency_key: str = Field(..., max_length=128)
    amount_cents: int = Field(..., ge=0)  # Must be >= 0

    @field_validator("ip_address")
    @classmethod
    def validate_ip(cls, v: str) -> str:
        try:
            ipaddress.ip_address(v)
        except ValueError:
            raise ValueError("Invalid IP address format")
        return v

    @field_validator("currency")
    @classmethod
    def validate_currency(cls, v: str) -> str:
        valid_currencies = {"USD", "EUR", "GBP", ...}
        if v.upper() not in valid_currencies:
            raise ValueError(f"Invalid currency: {v}")
        return v.upper()`}</CodeBlock>
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 2-3 hours |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> Injection attacks
                  </p>
                </InfoCard>

                <InfoCard
                  title="Connection Pool Tuning"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>}
                  color="cyan"
                >
                  <CodeBlock>{`# src/config/settings.py - Production settings
class Settings(BaseSettings):
    # Redis - increase from 20
    redis_pool_size: int = 50
    redis_pool_timeout: int = 10

    # PostgreSQL - increase from 5/10
    postgres_pool_size: int = 20
    postgres_max_overflow: int = 30
    postgres_pool_timeout: int = 30

    # Computed for connection string
    @property
    def postgres_url(self) -> str:
        return (
            f"postgresql+asyncpg://{self.postgres_user}:"
            f"{self.postgres_password}@{self.postgres_host}:"
            f"{self.postgres_port}/{self.postgres_db}"
            f"?pool_size={self.postgres_pool_size}"
            f"&max_overflow={self.postgres_max_overflow}"
        )`}</CodeBlock>
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 1 hour |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> Connection exhaustion
                  </p>
                </InfoCard>

                <InfoCard
                  title="Externalize Secrets"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>}
                  color="cyan"
                >
                  <CodeBlock>{`# Option 1: Environment variables (minimum)
# docker-compose.yml
services:
  api:
    environment:
      - POSTGRES_PASSWORD=\${POSTGRES_PASSWORD}
      - API_KEY=\${API_KEY}

# Option 2: AWS Secrets Manager (production)
import boto3

def get_secret(secret_name: str) -> dict:
    client = boto3.client("secretsmanager")
    response = client.get_secret_value(SecretId=secret_name)
    return json.loads(response["SecretString"])

# Option 3: HashiCorp Vault (enterprise)
import hvac

client = hvac.Client(url="https://vault.internal:8200")
secrets = client.secrets.kv.v2.read_secret_version(
    path="fraud-detection/prod"
)`}</CodeBlock>
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 2-3 hours |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> Credential exposure
                  </p>
                </InfoCard>
              </div>
            </div>

            {/* Lower Priority */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold">
                  LOWER PRIORITY - SCALABILITY
                </span>
              </div>

              <div className="space-y-4">
                <InfoCard
                  title="Redis Sentinel/Cluster Configuration"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                  color="purple"
                >
                  <CodeBlock>{`# docker-compose.yml - Add Redis Sentinel
services:
  redis-master:
    image: redis:7-alpine
    command: redis-server --appendonly yes

  redis-sentinel:
    image: redis:7-alpine
    command: redis-sentinel /sentinel.conf
    volumes:
      - ./config/sentinel.conf:/sentinel.conf
    depends_on:
      - redis-master

# config/sentinel.conf
sentinel monitor mymaster redis-master 6379 2
sentinel down-after-milliseconds mymaster 5000
sentinel failover-timeout mymaster 60000
sentinel parallel-syncs mymaster 1`}</CodeBlock>
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 4-6 hours |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> Redis SPOF
                  </p>
                </InfoCard>

                <InfoCard
                  title="PostgreSQL Table Partitioning"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
                  color="purple"
                >
                  <CodeBlock>{`-- scripts/partition_evidence.sql

-- Convert to partitioned table (requires migration)
CREATE TABLE transaction_evidence_new (
    id UUID DEFAULT gen_random_uuid(),
    transaction_id VARCHAR(64) NOT NULL,
    captured_at TIMESTAMP WITH TIME ZONE NOT NULL,
    -- ... other columns ...
    PRIMARY KEY (id, captured_at)
) PARTITION BY RANGE (captured_at);

-- Create monthly partitions
CREATE TABLE transaction_evidence_2026_01
    PARTITION OF transaction_evidence_new
    FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');

CREATE TABLE transaction_evidence_2026_02
    PARTITION OF transaction_evidence_new
    FOR VALUES FROM ('2026-02-01') TO ('2026-03-01');

-- Automate partition creation with pg_partman
CREATE EXTENSION pg_partman;
SELECT partman.create_parent(
    'public.transaction_evidence_new',
    'captured_at',
    'native',
    'monthly'
);`}</CodeBlock>
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 4-6 hours |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> Write performance at scale
                  </p>
                </InfoCard>

                <InfoCard
                  title="Blocklist Externalization"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                  color="purple"
                >
                  <p>Move large blocklists from in-memory dicts to Redis SETs for scalability:</p>
                  <CodeBlock>{`# src/policy/blocklist.py
class RedisBlocklist:
    """Redis-backed blocklist for large datasets."""

    def __init__(self, redis: Redis, prefix: str):
        self.redis = redis
        self.key = f"fraud:blocklist:{prefix}"

    async def contains(self, value: str) -> bool:
        """O(1) membership check."""
        return await self.redis.sismember(self.key, value)

    async def add(self, value: str) -> None:
        """Add entry to blocklist."""
        await self.redis.sadd(self.key, value)

    async def remove(self, value: str) -> None:
        """Remove entry from blocklist."""
        await self.redis.srem(self.key, value)

    async def count(self) -> int:
        """Get blocklist size."""
        return await self.redis.scard(self.key)

# For probabilistic checks (false positives OK for blocklists):
# Consider Bloom filters for very large lists (1M+ entries)`}</CodeBlock>
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 3-4 hours |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> Memory pressure
                  </p>
                </InfoCard>

                <InfoCard
                  title="Dashboard Caching Layer"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>}
                  color="purple"
                >
                  <BulletList
                    color="blue"
                    items={[
                      "Add materialized views for common analytics queries",
                      "Implement Redis caching for dashboard data (5-min TTL)",
                      "Consider splitting dashboard into separate microservice",
                      "Add query result pagination for large datasets",
                    ]}
                  />
                  <p className="mt-3 text-xs">
                    <strong className="text-foreground">Effort:</strong> 4-6 hours |
                    <strong className="text-foreground ml-2">Risk Mitigated:</strong> Analytics latency
                  </p>
                </InfoCard>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Implementation Priority */}
        <section>
          <SectionHeader number="5" title="Implementation Priority" icon="#" color="purple" />

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Priority</th>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Task</th>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Effort</th>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Risk Mitigated</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-red-500/10 text-red-500 text-xs font-semibold">P0</span>
                  </td>
                  <td className="p-3 border border-border font-medium">Add API key authentication</td>
                  <td className="p-3 border border-border">2-3 hours</td>
                  <td className="p-3 border border-border">Unauthorized access</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-red-500/10 text-red-500 text-xs font-semibold">P0</span>
                  </td>
                  <td className="p-3 border border-border font-medium">Restrict CORS to specific origins</td>
                  <td className="p-3 border border-border">30 min</td>
                  <td className="p-3 border border-border">Cross-site attacks</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-red-500/10 text-red-500 text-xs font-semibold">P0</span>
                  </td>
                  <td className="p-3 border border-border font-medium">Add rate limiting</td>
                  <td className="p-3 border border-border">2-3 hours</td>
                  <td className="p-3 border border-border">DoS, threshold probing</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-semibold">P1</span>
                  </td>
                  <td className="p-3 border border-border font-medium">Input validation hardening</td>
                  <td className="p-3 border border-border">2-3 hours</td>
                  <td className="p-3 border border-border">Injection attacks</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-semibold">P1</span>
                  </td>
                  <td className="p-3 border border-border font-medium">PostgreSQL connection pool tuning</td>
                  <td className="p-3 border border-border">1 hour</td>
                  <td className="p-3 border border-border">Connection exhaustion</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 text-xs font-semibold">P1</span>
                  </td>
                  <td className="p-3 border border-border font-medium">Externalize secrets (env/vault)</td>
                  <td className="p-3 border border-border">2-3 hours</td>
                  <td className="p-3 border border-border">Credential exposure</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-500 text-xs font-semibold">P2</span>
                  </td>
                  <td className="p-3 border border-border font-medium">Redis Sentinel/Cluster</td>
                  <td className="p-3 border border-border">4-6 hours</td>
                  <td className="p-3 border border-border">Redis SPOF</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-500 text-xs font-semibold">P2</span>
                  </td>
                  <td className="p-3 border border-border font-medium">PostgreSQL partitioning</td>
                  <td className="p-3 border border-border">4-6 hours</td>
                  <td className="p-3 border border-border">Write performance at scale</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-500 text-xs font-semibold">P2</span>
                  </td>
                  <td className="p-3 border border-border font-medium">Blocklist externalization</td>
                  <td className="p-3 border border-border">3-4 hours</td>
                  <td className="p-3 border border-border">Memory pressure</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-500 text-xs font-semibold">P3</span>
                  </td>
                  <td className="p-3 border border-border font-medium">Dashboard caching layer</td>
                  <td className="p-3 border border-border">4-6 hours</td>
                  <td className="p-3 border border-border">Analytics latency</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Path to Production */}
          <div className="mt-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
            <h3 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Path to Production
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-xs font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-foreground">First Focus:</strong> P0 security items (auth, CORS, rate limiting)
                  <span className="text-muted-foreground ml-1">- Blocks any external exposure</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 text-xs font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-foreground">Next Sprint:</strong> P1 hardening (validation, connection pools, secrets)
                  <span className="text-muted-foreground ml-1">- Operational stability</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs font-bold shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-foreground">Before Scale:</strong> P2 infrastructure (Redis clustering, partitioning)
                  <span className="text-muted-foreground ml-1">- Required for &gt;100 TPS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Summary */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/30 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Bottom Line
            </div>
            <p className="text-sm text-muted-foreground">
              The core detection/scoring/policy architecture is solid and well-designed for production fraud systems.
              The gaps are in <strong className="text-foreground">operational hardening</strong>, not fundamental design.
              This is a well-structured foundation that needs security and scale layers before production exposure.
              With the P0 security fixes implemented, the system would be suitable for internal/staging deployment.
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Related Documentation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/nebula/fraud-detection-thinking"
              className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Fraud Detection - Thinking Process
                  </div>
                  <div className="text-xs text-muted-foreground">System design thought process</div>
                </div>
              </div>
            </Link>
            <Link
              href="/nebula/fraud-detection-design"
              className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Fraud Detection - Design Docs
                  </div>
                  <div className="text-xs text-muted-foreground">Technical design documentation</div>
                </div>
              </div>
            </Link>
            <Link
              href="/nebula/fraud-detection-thinking/failure-modes"
              className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Failure Modes
                  </div>
                  <div className="text-xs text-muted-foreground">What breaks and fallback strategies</div>
                </div>
              </div>
            </Link>
            <Link
              href="/nebula/fraud-detection-thinking/testing"
              className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧪</span>
                <div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Testing & Validation
                  </div>
                  <div className="text-xs text-muted-foreground">Test pyramid and monitoring strategy</div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Principal TPM Q&A Section */}
        <section className="border-t border-border pt-8">
          <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">
              Q&A
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Principal TPM Interview Questions</h2>
            <p className="text-muted-foreground">
              20 questions covering architecture review, security, scalability, and production readiness
            </p>
          </div>

          {/* Instructions */}
          <div className="mb-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">How to use:</strong> Answer each question in your own words before
              revealing the model answer. Focus on quantifying risk, explaining trade-offs, and demonstrating
              production experience.
            </p>
          </div>

          {/* Topic A: Architecture Patterns */}
          <div className="mb-8">
            <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
              <h3 className="font-semibold text-foreground">A. Architecture Patterns & Strengths</h3>
              <p className="text-xs text-muted-foreground">Clean separation, async design, observability</p>
            </div>
            <div className="space-y-3">
              <QAItem
                number={1}
                question="Why is separation of detection, scoring, and policy layers critical for fraud systems?"
                answer={
                  <>
                    <p>
                      This separation is critical because fraud systems have three distinct stakeholders with different
                      iteration speeds: <strong className="text-foreground">ML teams</strong> (detection models),{" "}
                      <strong className="text-foreground">Risk Analysts</strong> (scoring weights), and{" "}
                      <strong className="text-foreground">Business</strong> (policy rules).
                    </p>
                    <p>
                      If these are coupled, a model improvement requires a full deployment. With separation,
                      ML can retrain detection without touching policy. Business can add a merchant to an
                      allowlist in seconds. Risk can tune velocity thresholds without code changes.
                    </p>
                    <p>
                      The BaseDetector interface pattern ensures new detectors can be added via config
                      without code deployment—critical when new fraud patterns emerge and you need to
                      respond in hours, not weeks.
                    </p>
                  </>
                }
                principalNuance="At Mag7 scale, this separation also enables A/B testing of detection models while keeping production policy stable. You can shadow-run a new ML model alongside production and compare precision/recall before promoting it."
              />
              <QAItem
                number={2}
                question="The architecture uses asyncio.gather() for parallel feature computation. What are the risks?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Risk 1: Correlated Failures</strong> - If Redis is slow,
                      ALL parallel queries are slow. A single 100ms Redis hiccup becomes a 100ms delay on the entire
                      feature computation, not just one feature. The correlation breaks latency budgets.
                    </p>
                    <p>
                      <strong className="text-foreground">Risk 2: Connection Exhaustion</strong> - With 9 parallel
                      queries (4 velocity + 5 entity), each request holds 9 connections simultaneously. At 1000 TPS,
                      you need 9000 concurrent connections, far exceeding the 20-connection pool.
                    </p>
                    <p>
                      <strong className="text-foreground">Risk 3: Timeouts Without Cancellation</strong> - If one
                      query hangs, gather() waits for all. You need asyncio.wait_for() with per-query timeouts,
                      and circuit breakers to fail-fast on degraded dependencies.
                    </p>
                  </>
                }
                principalNuance="The correct pattern is asyncio.gather(*tasks, return_exceptions=True) to capture individual failures without blocking others, combined with fallback values. Netflix uses this pattern - if personalization fails, show popular content instead of erroring."
              />
              <QAItem
                number={3}
                question="What does 'strong observability' mean in the context of fraud systems specifically?"
                answer={
                  <>
                    <p>
                      Fraud observability requires <strong className="text-foreground">three dimensions</strong>
                      beyond standard APM:
                    </p>
                    <p>
                      <strong className="text-foreground">1. Decision Audit Trail</strong> - Every decision must be
                      reproducible. If a customer complains about a block, you need: the exact features at decision
                      time, which detectors triggered, the policy version, and the threshold values. This is legal
                      evidence if challenged.
                    </p>
                    <p>
                      <strong className="text-foreground">2. Detector Health Distribution</strong> - Not just "is
                      detector working" but "what percentage of transactions trigger each detector?" A sudden drop
                      in velocity detector triggers might mean the feature computation is broken, not that fraud
                      decreased.
                    </p>
                    <p>
                      <strong className="text-foreground">3. Latency Breakdown by Component</strong> - The 200ms
                      budget must be decomposable: 50ms features, 25ms scoring, 10ms policy, 15ms evidence capture.
                      When p99 spikes, you need immediate visibility into which component is the bottleneck.
                    </p>
                  </>
                }
                principalNuance="A Principal TPM knows that fraud system metrics must also track false positive rate (legitimate transactions blocked) and false negative rate (fraud that slipped through). These are the business metrics that matter more than latency."
              />
            </div>
          </div>

          {/* Topic B: Redis & Degradation */}
          <div className="mb-8">
            <div className="mb-4 p-3 bg-red-500/10 rounded-lg border border-red-500/30">
              <h3 className="font-semibold text-foreground">B. Redis as SPOF & Degradation Strategies</h3>
              <p className="text-xs text-muted-foreground">Failure handling, graceful degradation, HA design</p>
            </div>
            <div className="space-y-3">
              <QAItem
                number={4}
                question="The current Redis degradation strategy returns zero/default values. Why is this dangerous?"
                answer={
                  <>
                    <p>
                      Returning zero/default values when Redis fails is catastrophically dangerous because
                      velocity features are the <strong className="text-foreground">primary defense</strong>{" "}
                      against card testing attacks.
                    </p>
                    <p>
                      <strong className="text-foreground">Attack Scenario:</strong> Attacker knows your system
                      degrades to zero. They hammer your Redis to trigger degradation, then run card testing
                      attacks during the window when all velocity scores are zero. Every transaction appears
                      "clean" because card_velocity=0, device_velocity=0.
                    </p>
                    <p>
                      <strong className="text-foreground">The Correct Pattern:</strong> Graceful degradation
                      should INCREASE caution, not decrease it. When velocity features are unavailable,
                      return ELEVATED risk scores (0.5-0.7) and flag for manual review, not zero.
                    </p>
                  </>
                }
                principalNuance="The degradation decision tree should be: (1) Can we get partial data? Use what we have. (2) No data at all? Shift to conservative mode - lower approval thresholds, require 3DS authentication, or route to manual review queue. Never assume absence of signal means absence of risk."
              />
              <QAItem
                number={5}
                question="How would you design Redis HA for this fraud system without breaking the latency budget?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Layer 1: Redis Sentinel</strong> - Automatic failover
                      with 3 sentinels monitoring master. Failover takes 5-10 seconds, which is acceptable
                      because we have degradation mode during switchover.
                    </p>
                    <p>
                      <strong className="text-foreground">Layer 2: Read Replicas</strong> - Velocity reads (90%
                      of operations) go to replicas. Writes go to master. This spreads load and means a master
                      failure doesn't immediately block reads.
                    </p>
                    <p>
                      <strong className="text-foreground">Layer 3: Local Cache</strong> - Entity profiles
                      (card_profile, device_profile) change infrequently. Cache them locally with 60-second
                      TTL. If Redis is unavailable, stale profile data is better than no profile data.
                    </p>
                    <p>
                      <strong className="text-foreground">Latency Impact:</strong> Sentinel adds ~1ms for
                      connection routing. Read replicas are same latency as master. Local cache reduces
                      Redis round-trips. Net effect: latency neutral or improved.
                    </p>
                  </>
                }
                principalNuance="At Mag7 scale, you'd also consider Redis Cluster for horizontal scaling, but that adds complexity (slot migration, cross-slot commands). For fraud systems under 10K TPS, Sentinel with read replicas is the right balance of complexity vs. reliability."
              />
              <QAItem
                number={6}
                question="The architecture mentions 'circuit breakers.' Where specifically would you implement them?"
                answer={
                  <>
                    <p>
                      Circuit breakers belong at <strong className="text-foreground">four points</strong>:
                    </p>
                    <p>
                      <strong className="text-foreground">1. Redis Connection</strong> - If Redis latency
                      exceeds 50ms for 10 consecutive requests, open circuit and use degradation mode.
                      Half-open after 5 seconds to test recovery.
                    </p>
                    <p>
                      <strong className="text-foreground">2. PostgreSQL Evidence Writes</strong> - Evidence
                      capture is non-critical path. If PG is slow, buffer to Redis queue and write async.
                      Don't let evidence capture block the decision response.
                    </p>
                    <p>
                      <strong className="text-foreground">3. External ML Model (if added)</strong> - ML inference
                      is typically slowest. Circuit breaker with 100ms timeout; on open, fall back to
                      rule-based scoring only.
                    </p>
                    <p>
                      <strong className="text-foreground">4. Entity Profile Updates</strong> - These can be
                      eventually consistent. Circuit breaker allows system to continue even if profile
                      updates are failing.
                    </p>
                  </>
                }
                principalNuance="The circuit breaker state itself should be in Redis (shared state across instances) with fallback to local state. Monitor circuit breaker open events in metrics - frequent opens indicate systemic issues, not transient failures."
              />
            </div>
          </div>

          {/* Topic C: Database Scalability */}
          <div className="mb-8">
            <div className="mb-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
              <h3 className="font-semibold text-foreground">C. Database Scalability</h3>
              <p className="text-xs text-muted-foreground">PostgreSQL writes, partitioning, retention</p>
            </div>
            <div className="space-y-3">
              <QAItem
                number={7}
                question="At 1000 TPS, the evidence table will grow to 500GB/month. What's your scaling strategy?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Immediate (P1):</strong> Table partitioning by
                      captured_at (monthly). This enables fast DROP PARTITION for retention, partition
                      pruning for queries, and parallel vacuuming.
                    </p>
                    <p>
                      <strong className="text-foreground">Medium-term (P2):</strong> Move features_snapshot
                      JSONB to object storage (S3/GCS). Store only a reference in PostgreSQL. The JSONB
                      column is 80% of storage but queried rarely (only for dispute investigations).
                    </p>
                    <p>
                      <strong className="text-foreground">Long-term:</strong> Consider TimescaleDB hypertable
                      with automatic chunking and compression. Mature fraud systems see 10:1 compression
                      ratios on historical evidence data.
                    </p>
                    <p>
                      <strong className="text-foreground">Retention Policy:</strong> Hot data (30 days) on
                      fast SSD. Warm data (31-90 days) on cheaper storage. Cold data (&gt;90 days) in
                      object storage with retrieval SLA of 24 hours (acceptable for audits).
                    </p>
                  </>
                }
                principalNuance="The 90-day hot retention is driven by chargeback windows (60-120 days depending on card network). Evidence older than chargeback window is rarely accessed but must be retained for regulatory compliance (typically 7 years for PCI)."
              />
              <QAItem
                number={8}
                question="The review mentions JSONB columns are expensive to index. When would you actually index them?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Rule: Index JSONB only when you have proven query patterns.</strong>
                    </p>
                    <p>
                      <strong className="text-foreground">Worthwhile JSONB Indexes:</strong>
                    </p>
                    <p>
                      • <code className="text-xs bg-muted px-1 rounded">decision_reasons</code> - If analysts
                      frequently search "show all transactions blocked by velocity_detector", create a GIN
                      index on the detector_name field.
                    </p>
                    <p>
                      • <code className="text-xs bg-muted px-1 rounded">features_snapshot→card_velocity</code> -
                      If ML training queries filter by velocity ranges, partial index on extracted field.
                    </p>
                    <p>
                      <strong className="text-foreground">Avoid Indexing:</strong>
                    </p>
                    <p>
                      • Full GIN index on entire JSONB - expensive to maintain, rarely useful
                    </p>
                    <p>
                      • device_fingerprint - high cardinality, better to use application-level search
                    </p>
                  </>
                }
                principalNuance="PostgreSQL 14+ supports JSONB path expressions in indexes. Instead of full GIN, use: CREATE INDEX ON evidence ((features_snapshot->>'card_velocity')::int). This is 10x smaller and faster than full JSONB index."
              />
              <QAItem
                number={9}
                question="How would you handle PostgreSQL connection pool exhaustion during a traffic spike?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Immediate Response:</strong>
                    </p>
                    <p>
                      1. Evidence writes should use a separate connection pool from reads. Block writes
                      should never block decisions.
                    </p>
                    <p>
                      2. Implement connection queue with timeout. Rather than reject immediately, queue
                      for 100ms. Most spikes are sub-second.
                    </p>
                    <p>
                      <strong className="text-foreground">Architectural Fix:</strong>
                    </p>
                    <p>
                      Move evidence writes off the hot path entirely. Pattern: write to Redis queue,
                      background worker drains to PostgreSQL. Decision latency is decoupled from
                      database write latency.
                    </p>
                    <p>
                      <strong className="text-foreground">PgBouncer:</strong> Deploy connection pooler
                      in front of PostgreSQL. Application maintains 50 connections to PgBouncer;
                      PgBouncer maintains 20 connections to PostgreSQL. Handles bursty traffic
                      with transaction-level pooling.
                    </p>
                  </>
                }
                principalNuance="The pool_size=5 in the current config is dangerously low. Rule of thumb: pool_size = (2 × CPU cores) for OLTP. With async writes, you need pool_size = expected_TPS × avg_query_time. At 1000 TPS and 5ms queries, that's 5 concurrent connections just for steady state."
              />
            </div>
          </div>

          {/* Topic D: Security & Authentication */}
          <div className="mb-8">
            <div className="mb-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
              <h3 className="font-semibold text-foreground">D. Security & Authentication</h3>
              <p className="text-xs text-muted-foreground">Auth, CORS, rate limiting, secrets management</p>
            </div>
            <div className="space-y-3">
              <QAItem
                number={10}
                question="The system has no authentication. Walk through the attack surface this creates."
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Attack 1: Policy Manipulation</strong> - Attacker
                      calls POST /policy/rules to add themselves to allowlist. All their fraudulent
                      transactions are now approved. Or they set velocity_threshold to 1.0, disabling
                      detection entirely.
                    </p>
                    <p>
                      <strong className="text-foreground">Attack 2: Threshold Probing</strong> - Attacker
                      sends synthetic transactions with incrementing amounts/velocities to discover
                      exact trigger points. Then crafts attacks that stay just under threshold.
                    </p>
                    <p>
                      <strong className="text-foreground">Attack 3: Evidence Pollution</strong> - Attacker
                      floods /decide with garbage transactions to pollute ML training data. Future
                      models trained on this data will have degraded accuracy.
                    </p>
                    <p>
                      <strong className="text-foreground">Attack 4: DoS via Redis</strong> - Each /decide
                      creates 9+ Redis operations. With no rate limiting, attacker can exhaust Redis
                      connections with 2000 concurrent requests.
                    </p>
                  </>
                }
                principalNuance="The attack surface is compounded by the open CORS policy. An attacker can host a malicious webpage that makes these requests from victim browsers, using their IP addresses to bypass IP-based detection. This is why CORS + Auth must be fixed together."
              />
              <QAItem
                number={11}
                question="What's the correct authentication architecture for a fraud API with multiple consumers?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Layer 1: API Keys for Machine Clients</strong>
                    </p>
                    <p>
                      Payment gateway, mobile app backend, web backend each get a unique API key.
                      Key rotation every 90 days. Keys scoped to specific endpoints (payment service
                      can only call /decide, not /policy).
                    </p>
                    <p>
                      <strong className="text-foreground">Layer 2: JWT + RBAC for Human Operators</strong>
                    </p>
                    <p>
                      Dashboard and policy management require JWT from identity provider (Okta, Auth0).
                      Roles: Viewer (read metrics), Analyst (read + manual review), Admin (full policy
                      access). All mutations logged with user identity.
                    </p>
                    <p>
                      <strong className="text-foreground">Layer 3: mTLS for Service-to-Service</strong>
                    </p>
                    <p>
                      Internal services use mutual TLS with client certificates. No shared secrets
                      over the wire. Certificate rotation automated via HashiCorp Vault.
                    </p>
                  </>
                }
                principalNuance="At production scale, the fraud API should be behind an API gateway (Kong, AWS API Gateway) that handles auth, rate limiting, and TLS termination. The fraud service itself should only accept traffic from the gateway's internal IP range."
              />
              <QAItem
                number={12}
                question="The CORS configuration allows all origins. Why is 'allow_credentials=True' with '*' origins especially dangerous?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">The Specific Vulnerability:</strong>
                    </p>
                    <p>
                      With <code className="text-xs bg-muted px-1 rounded">allow_credentials=True</code>,
                      browsers send cookies and authorization headers. Combined with{" "}
                      <code className="text-xs bg-muted px-1 rounded">allow_origins=["*"]</code>, any
                      website can make authenticated requests to your API using the victim's session.
                    </p>
                    <p>
                      <strong className="text-foreground">Attack Scenario:</strong>
                    </p>
                    <p>
                      1. Admin logs into fraud dashboard (sets session cookie)
                    </p>
                    <p>
                      2. Admin visits attacker's website (different domain)
                    </p>
                    <p>
                      3. Attacker's JS calls your fraud API with admin's credentials
                    </p>
                    <p>
                      4. Attacker modifies fraud policy using admin's session
                    </p>
                    <p>
                      <strong className="text-foreground">The Fix:</strong> Either remove{" "}
                      <code className="text-xs bg-muted px-1 rounded">allow_credentials</code> entirely,
                      or specify exact allowed origins. Browsers won't send credentials to wildcard
                      origins anyway—but FastAPI will still echo the headers, creating confusion.
                    </p>
                  </>
                }
                principalNuance="Note that the current setup likely doesn't work as intended anyway. Per CORS spec, browsers ignore Access-Control-Allow-Credentials when origin is '*'. The real risk is the false sense of security—developers think credentials are protected, but the wildcard makes the header meaningless."
              />
              <QAItem
                number={13}
                question="How would you implement rate limiting that protects against threshold probing attacks specifically?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Standard rate limiting (requests/minute) is
                      insufficient.</strong> A sophisticated attacker stays under the limit while
                      methodically probing thresholds.
                    </p>
                    <p>
                      <strong className="text-foreground">Anti-Probing Rate Limits:</strong>
                    </p>
                    <p>
                      1. <strong className="text-foreground">Per-Card Diversity Limit</strong> - No more than
                      5 unique amounts per card per hour. Probing requires testing many amounts.
                    </p>
                    <p>
                      2. <strong className="text-foreground">Decline Pattern Detection</strong> - If a source
                      IP or API key has &gt;50% decline rate over 10 transactions, exponential backoff
                      (2s, 4s, 8s delays).
                    </p>
                    <p>
                      3. <strong className="text-foreground">Honeypot Responses</strong> - Randomly return
                      fake success for blocked transactions (1% of declines). Probing attacker can't
                      distinguish real vs. fake thresholds.
                    </p>
                    <p>
                      4. <strong className="text-foreground">Velocity Window Randomization</strong> - Vary
                      the velocity window slightly per request (58-62 seconds instead of exactly 60).
                      Makes threshold mapping imprecise.
                    </p>
                  </>
                }
                principalNuance="The honeypot approach requires careful implementation—you can't actually approve fraud to confuse attackers. The 'fake success' should still result in a declined transaction downstream. But the attacker's probing logic sees 'success' and draws wrong conclusions about your thresholds."
              />
            </div>
          </div>

          {/* Topic E: Production Readiness */}
          <div className="mb-8">
            <div className="mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <h3 className="font-semibold text-foreground">E. Production Readiness Assessment</h3>
              <p className="text-xs text-muted-foreground">Gap analysis, deployment strategy, monitoring</p>
            </div>
            <div className="space-y-3">
              <QAItem
                number={14}
                question="The review says 'not production-ready due to security gaps.' How do you quantify this risk for executives?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Risk Quantification Framework:</strong>
                    </p>
                    <p>
                      <strong className="text-foreground">Probability of Exploit:</strong> An open API with
                      public IP gets scanned within hours of deployment. Exploitation probability is
                      near-certain (90%+) once discovered.
                    </p>
                    <p>
                      <strong className="text-foreground">Impact of Policy Manipulation:</strong> If attacker
                      disables fraud detection, assume 100% fraud approval rate during attack window.
                      At $50 average transaction and 1000 TPS, that's $4.3M/day in potential fraud loss.
                    </p>
                    <p>
                      <strong className="text-foreground">Expected Loss Calculation:</strong>
                    </p>
                    <p>
                      EL = Probability × Impact × Duration
                    </p>
                    <p>
                      EL = 0.9 × $4.3M/day × 0.5 days (time to detect) = $1.9M
                    </p>
                    <p>
                      <strong className="text-foreground">Cost to Fix:</strong> P0 security items = 8 hours
                      of engineering = ~$2,000 in labor. ROI of fixing: 950x.
                    </p>
                  </>
                }
                principalNuance="Frame this as: 'We have an $2M liability sitting on a $2,000 fix. Every day we delay, we're essentially self-insuring a risk that's trivially mitigable. This isn't technical debt—it's operational negligence once we're aware of it.'"
              />
              <QAItem
                number={15}
                question="What's the rollout strategy for adding authentication to an existing API without downtime?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Phase 1: Instrumentation (Week 1)</strong>
                    </p>
                    <p>
                      Deploy auth middleware in LOG-ONLY mode. Log all requests that would fail auth.
                      This identifies clients that need API keys before enforcement.
                    </p>
                    <p>
                      <strong className="text-foreground">Phase 2: Key Distribution (Week 2)</strong>
                    </p>
                    <p>
                      Issue API keys to all identified consumers. Give them documentation and a test
                      endpoint to validate their integration. Set deadline for migration.
                    </p>
                    <p>
                      <strong className="text-foreground">Phase 3: Soft Enforcement (Week 3)</strong>
                    </p>
                    <p>
                      Enable auth with fallback. If X-API-Key present, validate it. If missing, log
                      warning but allow request. Monitor for remaining un-migrated traffic.
                    </p>
                    <p>
                      <strong className="text-foreground">Phase 4: Hard Enforcement (Week 4)</strong>
                    </p>
                    <p>
                      Return 401 for missing/invalid keys. All consumers should have migrated.
                      Keep emergency bypass flag for incident response.
                    </p>
                  </>
                }
                principalNuance="The emergency bypass is critical for incident response. If auth system fails (IdP down, cert expired), you need a documented process to temporarily disable auth. This should require VP approval and create an audit trail."
              />
              <QAItem
                number={16}
                question="How would you set up monitoring to detect if the fraud system itself is being attacked?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Metric 1: Policy Mutation Rate</strong>
                    </p>
                    <p>
                      Alert if &gt;3 policy changes in 1 hour (normal is &lt;5/day). Attacker will
                      modify rules repeatedly to test what's allowed.
                    </p>
                    <p>
                      <strong className="text-foreground">Metric 2: Decline Rate Inversion</strong>
                    </p>
                    <p>
                      If approval rate suddenly jumps from 95% to 99.9%, something is wrong.
                      Either detection is broken, or attacker disabled it.
                    </p>
                    <p>
                      <strong className="text-foreground">Metric 3: Request Source Entropy</strong>
                    </p>
                    <p>
                      Normal traffic has diverse IPs. If 50% of requests come from a single /16
                      subnet, likely attack or misconfigured client.
                    </p>
                    <p>
                      <strong className="text-foreground">Metric 4: Feature Distribution Shift</strong>
                    </p>
                    <p>
                      Track rolling average of velocity scores. If average suddenly drops (all zeros),
                      Redis is likely down or data is being manipulated.
                    </p>
                    <p>
                      <strong className="text-foreground">Metric 5: Latency Percentile Divergence</strong>
                    </p>
                    <p>
                      If p99 latency spikes while p50 stays flat, a specific path (likely Redis)
                      is being targeted or failing.
                    </p>
                  </>
                }
                principalNuance="Create a 'Fraud System Health' dashboard that shows these metrics side-by-side. On-call should check this dashboard first during any incident. Consider a weekly 'red team' exercise where security team tries to manipulate the system and validates alerts fire."
              />
            </div>
          </div>

          {/* Topic F: Implementation Priority & Risk */}
          <div className="mb-8">
            <div className="mb-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
              <h3 className="font-semibold text-foreground">F. Implementation Priority & Risk Assessment</h3>
              <p className="text-xs text-muted-foreground">P0/P1/P2 decisions, trade-offs, resource allocation</p>
            </div>
            <div className="space-y-3">
              <QAItem
                number={17}
                question="The review lists 11 improvements across P0-P3. How would you sequence these with a 2-engineer team?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Sprint 1 (P0 Security - Blocks Production):</strong>
                    </p>
                    <p>
                      Engineer A: API key auth + rate limiting (4-5 hours)
                    </p>
                    <p>
                      Engineer B: CORS restriction + basic input validation (3-4 hours)
                    </p>
                    <p>
                      Both: Review each other's code, deploy together
                    </p>
                    <p>
                      <strong className="text-foreground">Sprint 2 (P1 Hardening):</strong>
                    </p>
                    <p>
                      Engineer A: Connection pool tuning + secrets externalization
                    </p>
                    <p>
                      Engineer B: Comprehensive input validation + SQL injection audit
                    </p>
                    <p>
                      <strong className="text-foreground">Sprint 3 (P2 Scalability - After Production):</strong>
                    </p>
                    <p>
                      Both engineers: Redis Sentinel setup (needs careful testing)
                    </p>
                    <p>
                      <strong className="text-foreground">Sprint 4+:</strong> PostgreSQL partitioning,
                      blocklist externalization, dashboard caching (prioritize based on actual load)
                    </p>
                  </>
                }
                principalNuance="Key insight: P2 items are 'before scale' not 'before production.' You can launch at 100 TPS with P0+P1 complete. P2 becomes urgent only when you approach 500 TPS. Don't let perfect scalability block production launch."
              />
              <QAItem
                number={18}
                question="What's the risk of launching with only P0 fixes complete while P1 items remain open?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">P1 Item: Input Validation</strong>
                    </p>
                    <p>
                      Risk: Injection attacks, malformed data breaking downstream systems
                    </p>
                    <p>
                      Mitigation: Pydantic provides baseline validation. Risk is medium, not critical.
                    </p>
                    <p>
                      <strong className="text-foreground">P1 Item: Connection Pool Tuning</strong>
                    </p>
                    <p>
                      Risk: Under load, connections exhaust, requests timeout
                    </p>
                    <p>
                      Mitigation: Launch at low TPS (&lt;100), monitor pool metrics, tune before scaling
                    </p>
                    <p>
                      <strong className="text-foreground">P1 Item: Secrets Externalization</strong>
                    </p>
                    <p>
                      Risk: Credential exposure if config is compromised
                    </p>
                    <p>
                      Mitigation: Ensure config files are not in version control, restricted access
                    </p>
                    <p>
                      <strong className="text-foreground">Verdict:</strong> Acceptable risk for limited
                      internal deployment. Not acceptable for public-facing or high-scale deployment.
                    </p>
                  </>
                }
                principalNuance="Document the risk acceptance decision. 'We are launching with P1 open because: (1) internal deployment only, (2) traffic limited to &lt;100 TPS, (3) P1 completion scheduled for Sprint 2. Owner: [Name]. Review date: [Date].' This protects everyone."
              />
              <QAItem
                number={19}
                question="The Codex review mentions 'architecture drift' between design docs and code. How do you address this?"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">The Problem:</strong> Design doc shows Kafka,
                      Flink, OPA, Seldon. Code is FastAPI + Redis + PostgreSQL. This gap creates
                      confusion about target architecture and technical debt estimation.
                    </p>
                    <p>
                      <strong className="text-foreground">Step 1: Acknowledge the Drift</strong>
                    </p>
                    <p>
                      Add a section to design doc: "MVP Architecture vs. Target Architecture."
                      Explicitly document what was descoped for MVP and why.
                    </p>
                    <p>
                      <strong className="text-foreground">Step 2: Document Migration Path</strong>
                    </p>
                    <p>
                      Create architecture evolution roadmap: Phase 1 (current), Phase 2 (add Kafka
                      for async), Phase 3 (add ML serving), Phase 4 (multi-region).
                    </p>
                    <p>
                      <strong className="text-foreground">Step 3: Update Code Comments</strong>
                    </p>
                    <p>
                      Add TODOs referencing design doc: "// TODO: Replace with Kafka consumer per
                      FRAUD_DETECTION.md Phase 2"
                    </p>
                  </>
                }
                principalNuance="Architecture drift is normal and healthy for MVPs. The mistake is pretending drift doesn't exist. A Principal TPM maintains a living 'Architecture Decision Record' (ADR) that documents why current state differs from target and the planned resolution."
              />
              <QAItem
                number={20}
                question="How do you present this architecture review to an executive sponsor who wants to know 'are we ready to launch?'"
                answer={
                  <>
                    <p>
                      <strong className="text-foreground">Executive Summary Format:</strong>
                    </p>
                    <p>
                      <strong className="text-foreground">Launch Readiness: CONDITIONAL GO</strong>
                    </p>
                    <p>
                      Core fraud detection architecture is production-grade. We need 8 engineering
                      hours to close security gaps before external exposure.
                    </p>
                    <p>
                      <strong className="text-foreground">Blockers (Must Fix):</strong>
                    </p>
                    <p>
                      • Authentication: Currently anyone can disable fraud detection
                    </p>
                    <p>
                      • Rate Limiting: System vulnerable to DoS
                    </p>
                    <p>
                      • CORS: Cross-site attacks possible
                    </p>
                    <p>
                      <strong className="text-foreground">Timeline:</strong> 1 sprint (5 business days)
                    </p>
                    <p>
                      <strong className="text-foreground">Cost:</strong> 2 engineers × 1 week = $10K
                    </p>
                    <p>
                      <strong className="text-foreground">Risk if Skipped:</strong> $2M potential fraud
                      loss (see Expected Loss calculation)
                    </p>
                    <p>
                      <strong className="text-foreground">Recommendation:</strong> Complete P0 items,
                      launch to internal staging, parallel work on P1, production launch Week 3.
                    </p>
                  </>
                }
                principalNuance="Executives don't need to know about Redis Sentinel or PostgreSQL partitioning. They need: (1) Are we blocked? (2) What does it cost to unblock? (3) What's the risk of proceeding without fixing? Frame everything in terms of money and time, not technical details."
              />
            </div>
          </div>

          {/* Q&A Summary Stats */}
          <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">20</div>
                <div className="text-xs text-muted-foreground">Questions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">6</div>
                <div className="text-xs text-muted-foreground">Topic Areas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">Mag7</div>
                <div className="text-xs text-muted-foreground">Target Level</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            <strong>Date:</strong> January 13, 2026 | <strong>Project:</strong> FraudDetection | <strong>Status:</strong> Architecture Review Complete
          </p>
        </footer>
      </main>
    </div>
  );
}

// =============================================================================
// Export
// =============================================================================

export default function FraudDetectionArchReviewPage() {
  return (
    <AuthGate storageKey="cyrus_nebula_auth" title="Nebula" subtitle="Planning">
      <ArchReviewContent />
    </AuthGate>
  );
}
