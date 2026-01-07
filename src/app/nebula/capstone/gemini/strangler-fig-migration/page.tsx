"use client";

/**
 * Gemini Project 5: Strangler Fig Migration Pattern
 * Infrastructure TPM focus - Legacy Modernization at Scale
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

function ProjectContent() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Link
        href="/nebula/capstone/gemini"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to Gemini Projects
      </Link>

      <ProjectHeader
        title="Monolith to Microservices: Strangler Fig Migration"
        tags={[
          { label: "Telecom", type: "telecom" },
          { label: "Infrastructure TPM", type: "infra" },
          { label: "DevOps", type: "enterprise" },
        ]}
      />

      {/* Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Executive Summary</h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Strangler Fig Migration project is an incremental modernization strategy for decomposing a legacy
            monolithic application into microservices without disrupting production traffic. It implements the
            &quot;strangler fig&quot; pattern - named after the fig tree that gradually envelops and replaces its host tree -
            where new services are built alongside the monolith and traffic is progressively shifted over.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Infrastructure TPM capabilities</strong> by orchestrating a multi-year
            migration program that balances technical debt reduction with business continuity. As an Infrastructure TPM,
            you&apos;ll navigate architectural trade-offs, build consensus across engineering teams on service boundaries,
            implement sophisticated traffic routing strategies (shadow mode, canary deployments), and measure
            success through reliability and velocity metrics that prove modernization ROI to executive leadership.
          </p>
        </div>
      </section>

      {/* Purpose & Technical Scope */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Purpose & Technical Scope</h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Legacy monolith (10 years old, 2M+ LOC Java) powering billing system for 50M+ telecom subscribers</li>
            <li>Deployment velocity bottleneck: 8-week release cycles due to tight coupling and regression risk</li>
            <li>Scaling challenges: entire monolith must scale even when only billing module needs capacity</li>
            <li>Developer productivity drain: 2-day local build times, flaky integration tests, tribal knowledge dependencies</li>
            <li>High-severity incidents take 6+ hours to mitigate due to blast radius of monolith failures</li>
            <li>Technology lock-in: stuck on Java 8 and Oracle DB 11g due to migration risk aversion</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">API Facade Layer:</strong> Deploy Apigee API Gateway in front of monolith to intercept and route traffic selectively</li>
            <li><strong className="text-foreground">Shadow Mode Testing:</strong> Dual-write to both monolith and new microservice, compare responses without impacting production</li>
            <li><strong className="text-foreground">Incremental Cutover:</strong> Canary deployments shifting 1% → 10% → 50% → 100% of traffic with automated rollback on error spikes</li>
            <li><strong className="text-foreground">Service Extraction:</strong> Extract billing calculation service as first microservice (clean domain boundary, high value)</li>
            <li><strong className="text-foreground">Data Synchronization:</strong> Event-driven sync between monolith Oracle DB and new service&apos;s Cloud SQL using Datastream CDC</li>
            <li><strong className="text-foreground">Observability:</strong> Distributed tracing (Cloud Trace) to measure latency impact and error correlation across monolith/microservices</li>
            <li><strong className="text-foreground">Rollback Safety:</strong> Instant traffic revert capability via feature flags + circuit breakers for zero-downtime failures</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Expected Outcomes & KPIs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement Method</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Deployment Frequency</td>
                <td className="py-3 px-4">8 weeks → 2 weeks (4x improvement)</td>
                <td className="py-3 px-4">Time from code merge to production deployment for billing service</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Incident MTTR</td>
                <td className="py-3 px-4">6 hours → 1 hour (6x improvement)</td>
                <td className="py-3 px-4">Mean time to recovery for P1 incidents in billing domain</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Service Availability</td>
                <td className="py-3 px-4">99.9% → 99.95% SLA</td>
                <td className="py-3 px-4">Uptime for billing service measured via synthetic monitoring</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Infrastructure Cost</td>
                <td className="py-3 px-4">20% reduction per transaction</td>
                <td className="py-3 px-4">Cloud Run auto-scaling vs. over-provisioned VM monolith</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Developer Velocity</td>
                <td className="py-3 px-4">50% faster feature delivery</td>
                <td className="py-3 px-4">Story cycle time (estimate to production) for billing features</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Zero-Downtime Migrations</td>
                <td className="py-3 px-4">100% of cutovers</td>
                <td className="py-3 px-4">No customer-impacting incidents during traffic shifts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Technical Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">API Gateway</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Apigee</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Endpoints</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Envoy Proxy</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Compute</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">GKE Autopilot</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Run</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Istio Service Mesh</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Sync</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Datastream CDC</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Pub/Sub</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud SQL</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Legacy</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Java 8 Monolith</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Oracle DB 11g</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">On-Prem VMs</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Observability</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Trace</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Monitoring</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Logging</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">OpenTelemetry</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Traffic Control</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">LaunchDarkly</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Istio VirtualService</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Armor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">High-Level Architecture</h2>
        <div className="bg-[#1a1a2e] text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-xs leading-relaxed font-mono whitespace-pre">{`┌─────────────────────────────────────────────────────────────────────────────────┐
│                    STRANGLER FIG MIGRATION PATTERN                              │
│              (Incremental Monolith to Microservices)                            │
└─────────────────────────────────────────────────────────────────────────────────┘

                          CLIENT TRAFFIC
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Mobile App  │  │  Web Portal  │  │  Call Center │  │  Partner API │
│  (50M users) │  │  (CSR tools) │  │  Systems     │  │  Integrations│
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                 │                 │
       │  HTTPS          │                 │                 │
       └─────────────────┴─────────────────┴─────────────────┘
                                │
                                ▼
              ┌─────────────────────────────────┐
              │   Global Load Balancer          │
              │   (Cloud Load Balancing)        │
              │   - SSL termination             │
              │   - DDoS protection (Armor)     │
              └──────────────┬──────────────────┘
                             │
                             ▼
              ┌─────────────────────────────────┐
              │   Apigee API Gateway            │
              │   (FACADE LAYER)                │
              │   ┌───────────────────────────┐ │
              │   │ Traffic Router:           │ │
              │   │                           │ │
              │   │ IF path = /billing/*      │ │
              │   │   → Check feature flag    │ │
              │   │   → Route to NEW service  │ │
              │   │      (canary %)           │ │
              │   │ ELSE                      │ │
              │   │   → Route to MONOLITH     │ │
              │   └───────────┬───────────────┘ │
              └───────────────┼─────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
                ▼             ▼             ▼
       ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
       │  MONOLITH   │ │  SHADOW     │ │  NEW        │
       │  (Legacy)   │ │  MODE       │ │  SERVICE    │
       │             │ │  (Testing)  │ │  (Prod)     │
       └─────────────┘ └─────────────┘ └─────────────┘

═══════════════════════════════════════════════════════════════════════════════════
                        PHASE 1: SHADOW MODE (Week 1-4)
═══════════════════════════════════════════════════════════════════════════════════

              ┌─────────────────────────────────┐
              │   Apigee Gateway                │
              │   Shadow Traffic Config         │
              │   ┌───────────────────────────┐ │
              │   │ 1. Send request to        │ │
              │   │    MONOLITH (primary)     │ │
              │   │                           │ │
              │   │ 2. Async copy to          │ │
              │   │    NEW SERVICE (shadow)   │ │
              │   │                           │ │
              │   │ 3. Return MONOLITH resp   │ │
              │   │    to client (only)       │ │
              │   └───────────┬───────────────┘ │
              └───────────────┼─────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
                ▼             │             ▼
    ┌───────────────────┐     │     ┌───────────────────┐
    │   MONOLITH        │     │     │   NEW SERVICE     │
    │   /billing API    │     │     │   /billing API    │
    │   (Oracle DB)     │     │     │   (Cloud SQL)     │
    │                   │     │     │                   │
    │   Returns:        │     │     │   Returns:        │
    │   $52.34          │     │     │   $52.34          │
    │   (Customer resp) │     │     │   (Discarded)     │
    └─────────┬─────────┘     │     └─────────┬─────────┘
              │               │               │
              └───────────────┼───────────────┘
                              │
                              ▼
              ┌─────────────────────────────────┐
              │   Response Comparator           │
              │   (Background Job)              │
              │   ┌───────────────────────────┐ │
              │   │ Compare:                  │ │
              │   │ - Response bodies         │ │
              │   │ - Status codes            │ │
              │   │ - Latency                 │ │
              │   │                           │ │
              │   │ Log diffs to BigQuery     │ │
              │   │ Alert on >1% mismatch     │ │
              │   └───────────────────────────┘ │
              └─────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════════
                    PHASE 2: CANARY DEPLOYMENT (Week 5-12)
═══════════════════════════════════════════════════════════════════════════════════

              ┌─────────────────────────────────┐
              │   Apigee Gateway                │
              │   Canary Traffic Split          │
              │   ┌───────────────────────────┐ │
              │   │ Feature Flag (LaunchDarkly)││
              │   │ canary_billing_service:   │ │
              │   │   Week 5:  1%  → NEW      │ │
              │   │   Week 6:  5%  → NEW      │ │
              │   │   Week 7:  10% → NEW      │ │
              │   │   Week 8:  25% → NEW      │ │
              │   │   Week 9:  50% → NEW      │ │
              │   │   Week 10: 75% → NEW      │ │
              │   │   Week 11: 100% → NEW     │ │
              │   └───────────┬───────────────┘ │
              └───────────────┼─────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │  10% traffic│   90% traffic
                ▼             ▼
    ┌───────────────────┐ ┌───────────────────┐
    │   NEW SERVICE     │ │   MONOLITH        │
    │   (GKE Autopilot) │ │   (Legacy VMs)    │
    │                   │ │                   │
    │   [Circuit Breaker]│ │                   │
    │   If error > 5%   │ │                   │
    │   → Auto rollback │ │                   │
    └─────────┬─────────┘ └─────────┬─────────┘
              │                     │
              └─────────┬───────────┘
                        │
                        ▼
              ┌─────────────────────────────────┐
              │   Cloud Monitoring              │
              │   Golden Signals Dashboard      │
              │   ┌───────────────────────────┐ │
              │   │ - Latency P50/P95/P99     │ │
              │   │ - Error rate (4xx/5xx)    │ │
              │   │ - Traffic volume          │ │
              │   │ - Saturation (CPU/mem)    │ │
              │   │                           │ │
              │   │ Compare: NEW vs MONOLITH  │ │
              │   │ Regression detection      │ │
              │   └───────────────────────────┘ │
              └─────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════════
                    DATA SYNCHRONIZATION STRATEGY
═══════════════════════════════════════════════════════════════════════════════════

    ┌───────────────────┐                     ┌───────────────────┐
    │   MONOLITH        │                     │   NEW SERVICE     │
    │   Oracle DB 11g   │                     │   Cloud SQL       │
    │   (Source of      │                     │   (PostgreSQL)    │
    │    Truth)         │                     │                   │
    └─────────┬─────────┘                     └─────────┬─────────┘
              │                                         │
              │  Change Data Capture (CDC)              │
              │  via Datastream                         │
              │                                         │
              ▼                                         │
    ┌───────────────────┐                               │
    │   Datastream      │                               │
    │   (Oracle → GCS)  │                               │
    └─────────┬─────────┘                               │
              │ Avro files                              │
              ▼                                         │
    ┌───────────────────┐                               │
    │   Pub/Sub Topic   │                               │
    │   billing_events  │                               │
    └─────────┬─────────┘                               │
              │                                         │
              ▼                                         │
    ┌───────────────────┐                               │
    │   Dataflow ETL    │                               │
    │   Transform       │                               │
    │   - Schema map    │                               │
    │   - Enrich        │                               │
    └─────────┬─────────┘                               │
              │                                         │
              └─────────────────────────────────────────┘
                                  │
                                  ▼
                      Eventual consistency
                      (< 5 second lag)

═══════════════════════════════════════════════════════════════════════════════════
                        ROLLBACK & SAFETY MECHANISMS
═══════════════════════════════════════════════════════════════════════════════════

┌──────────────────────────────────────────────────────────────────────────────┐
│  Circuit Breaker (Istio)                                                     │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Conditions:                                                            │  │
│  │ - IF error rate > 5% for 1 minute        → Open circuit              │  │
│  │ - IF P99 latency > 500ms for 30 seconds  → Open circuit              │  │
│  │ - IF health check fails 3x               → Open circuit              │  │
│  │                                                                        │  │
│  │ Action: Route 100% traffic to MONOLITH (instant rollback)            │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│  Feature Flag Kill Switch (LaunchDarkly)                                     │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ - Manual override: Set canary_billing_service = 0%                    │  │
│  │ - No code deploy required                                             │  │
│  │ - Takes effect in < 200ms globally                                    │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│  Distributed Tracing (Cloud Trace + OpenTelemetry)                           │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Trace ID propagation:                                                  │  │
│  │   Client → Apigee → [MONOLITH | NEW SERVICE] → DB                     │  │
│  │                                                                        │  │
│  │ Attributes captured:                                                   │  │
│  │ - Service version (monolith vs new)                                   │  │
│  │ - Customer segment (tier 1/2/3 SLA)                                   │  │
│  │ - Request path (/billing/calculate)                                   │  │
│  │                                                                        │  │
│  │ Use case: Correlate errors to specific service version                │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════════
                    POST-MIGRATION STATE (Week 12+)
═══════════════════════════════════════════════════════════════════════════════════

              ┌─────────────────────────────────┐
              │   Apigee Gateway                │
              │   100% → NEW SERVICE            │
              └──────────────┬──────────────────┘
                             │
                             ▼
              ┌─────────────────────────────────┐
              │   Billing Microservice          │
              │   (GKE Autopilot + Istio)       │
              │   ┌───────────────────────────┐ │
              │   │ - Auto-scaling (10-100    │ │
              │   │   pods based on traffic)  │ │
              │   │ - Multi-region (us/eu)    │ │
              │   │ - 99.95% SLA              │ │
              │   └───────────────────────────┘ │
              └──────────────┬──────────────────┘
                             │
                             ▼
              ┌─────────────────────────────────┐
              │   Cloud SQL PostgreSQL          │
              │   (HA with read replicas)       │
              └─────────────────────────────────┘

         ┌────────────────────────────────────────────┐
         │   MONOLITH DECOMMISSION PLAN               │
         │   ┌──────────────────────────────────────┐ │
         │   │ 1. Monitor NEW service for 4 weeks   │ │
         │   │ 2. Archive monolith billing code     │ │
         │   │ 3. Sunset Oracle DB billing tables   │ │
         │   │ 4. Redirect devs to new repo         │ │
         │   │ 5. Celebrate: -500K LOC removed!     │ │
         │   └──────────────────────────────────────┘ │
         └────────────────────────────────────────────┘`}</pre>
        </div>
      </section>

      {/* Effort & Timeline */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Implementation Phases</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Complexity</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 0: Foundation</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Apigee gateway deployment, observability setup (Cloud Trace, Monitoring), domain model analysis, service boundaries definition</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Shadow Mode</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Build new billing service, deploy to GKE, dual-write traffic, automated response comparison, fix discrepancies to 99%+ match</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Canary Rollout</td>
                <td className="py-3 px-4">8 weeks</td>
                <td className="py-3 px-4">Progressive traffic shift (1% → 100%), circuit breaker implementation, golden signals dashboards, runbooks for rollback</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Data Migration</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Datastream CDC setup, schema migration (Oracle → Cloud SQL), eventual consistency validation, backfill historical data</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Decommission</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Stabilization period, monolith code removal, Oracle DB sunset, developer workflow migration, post-mortem documentation</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Risks & Mitigation Strategies</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Customer-impacting outage during cutover causing revenue loss</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Shadow mode validation for 4 weeks minimum, canary rollout with automated rollback, feature flag kill switch, on-call engineering team during cutover windows</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Data consistency issues between monolith and new service (billing errors)</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Comprehensive reconciliation jobs comparing outputs, CDC lag monitoring (&lt;5 sec SLA), automated alerts on data drift, read-after-write consistency checks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Performance regression in new service (latency P99 &gt; monolith)</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Load testing at 2x peak traffic before canary, distributed tracing to identify bottlenecks, database query optimization, caching layer if needed</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Incomplete understanding of monolith logic causing functional gaps</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Domain expert interviews, exhaustive edge case testing, shadow mode comparison (catch unknown business rules), gradual cutover to surface issues early</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Developer resistance to new architecture and tooling</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Training programs on GKE/Kubernetes, clear migration benefits communication (faster deploys, ownership), early wins showcase, executive mandate</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Cost overruns from running dual systems (monolith + new service)</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs">Low</span></td>
                <td className="py-3 px-4">Time-box shadow mode phase (4 weeks max), aggressive canary ramp-up to minimize overlap, decommission monolith within 2 months post-migration</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Engineering Teams:</strong> Allocate 4 senior engineers full-time for 6 months (new service development, observability, data migration)</li>
            <li><strong className="text-foreground">SRE/Platform:</strong> GKE cluster provisioning, Istio service mesh configuration, multi-region deployment strategy</li>
            <li><strong className="text-foreground">DBA Team:</strong> Oracle CDC setup approval, Cloud SQL capacity planning, schema migration validation</li>
            <li><strong className="text-foreground">Product Team:</strong> Acceptance of 12-week timeline with no new billing features during migration freeze</li>
            <li><strong className="text-foreground">QA Team:</strong> Comprehensive test suite for shadow mode validation and regression testing</li>
            <li><strong className="text-foreground">Executive Sponsor:</strong> Budget approval ($500K cloud costs during dual-run period) and organizational air cover for multi-quarter investment</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Professional Alignment for Senior TPM Role</h2>
        <div className="grid gap-4">
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Legacy Modernization:</strong> Demonstrates ability to de-risk multi-year migrations - critical skill for enterprises with tech debt
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Architectural Thinking:</strong> Showcases strangler fig pattern, service mesh, API gateway strategies used by Netflix, Uber, Airbnb
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Telecom Domain Expertise:</strong> Billing system migration directly applicable to wireless carriers, cable providers, SaaS platforms
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Risk Management:</strong> Implements shadow mode, canary deployments, circuit breakers - production-grade safety mechanisms
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Executive Communication:</strong> Clear ROI narrative (4x deployment velocity, 6x faster MTTR, 20% cost reduction) for leadership buy-in
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">DevOps & SRE Collaboration:</strong> Requires deep partnership with platform teams on GKE, Istio, observability - key for Infrastructure TPM roles
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/gemini/rag-knowledge-bot"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
        >
          ← Previous: RAG Knowledge Bot
        </Link>
        <Link
          href="/nebula/capstone/gemini"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
        >
          Back to Gemini Projects →
        </Link>
      </div>
    </div>
  );
}

export default function StranglerFigMigrationPage() {
  return (
    <CapstoneLayout
      title="Strangler Fig Migration - Gemini Projects"
      description="Infrastructure TPM Capstone: Legacy Modernization at Scale"
      currentLLM="gemini"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
