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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
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
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-12">
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
