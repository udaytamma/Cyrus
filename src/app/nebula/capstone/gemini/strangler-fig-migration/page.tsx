"use client";

/**
 * Gemini Project 5: Strangler Fig Migration Pattern
 * Infrastructure TPM focus - Legacy Modernization at Scale
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

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

        {/* Main Traffic Flow */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Traffic Routing Overview</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    subgraph Clients["CLIENT TRAFFIC"]
        A["Mobile App<br/>(50M users)"]
        B["Web Portal<br/>(CSR tools)"]
        C["Call Center<br/>Systems"]
        D["Partner API<br/>Integrations"]
    end

    A & B & C & D -->|HTTPS| LB["Global Load Balancer<br/>(Cloud Load Balancing)<br/>SSL termination, DDoS protection"]

    LB --> GW["Apigee API Gateway<br/>(FACADE LAYER)"]

    subgraph Router["Traffic Router Logic"]
        R1["IF path = /billing/*<br/>Check feature flag<br/>Route to NEW service"]
        R2["ELSE<br/>Route to MONOLITH"]
    end

    GW --> Router

    Router --> M["MONOLITH<br/>(Legacy)"]
    Router --> S["SHADOW MODE<br/>(Testing)"]
    Router --> N["NEW SERVICE<br/>(Prod)"]

    style Clients fill:#e0e7ff,stroke:#6366f1,color:#000
    style LB fill:#fef3c7,stroke:#f59e0b,color:#000
    style GW fill:#6366f1,stroke:#6366f1,color:#fff
    style M fill:#fee2e2,stroke:#ef4444,color:#000
    style S fill:#fef3c7,stroke:#f59e0b,color:#000
    style N fill:#d1fae5,stroke:#10b981,color:#000`} />
          </div>
        </div>

        {/* Phase 1: Shadow Mode */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Phase 1: Shadow Mode (Week 1-4)</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    GW["Apigee Gateway<br/>Shadow Traffic Config"]

    subgraph Steps["Shadow Mode Process"]
        S1["1. Send request to<br/>MONOLITH (primary)"]
        S2["2. Async copy to<br/>NEW SERVICE (shadow)"]
        S3["3. Return MONOLITH resp<br/>to client (only)"]
    end

    GW --> Steps

    Steps --> M["MONOLITH<br/>/billing API<br/>(Oracle DB)<br/>Returns: $52.34<br/>(Customer resp)"]
    Steps --> N["NEW SERVICE<br/>/billing API<br/>(Cloud SQL)<br/>Returns: $52.34<br/>(Discarded)"]

    M & N --> CMP["Response Comparator<br/>(Background Job)"]

    subgraph Compare["Comparison Logic"]
        C1["Compare response bodies"]
        C2["Compare status codes"]
        C3["Compare latency"]
        C4["Log diffs to BigQuery"]
        C5["Alert on >1% mismatch"]
    end

    CMP --> Compare

    style GW fill:#6366f1,stroke:#6366f1,color:#fff
    style M fill:#fee2e2,stroke:#ef4444,color:#000
    style N fill:#d1fae5,stroke:#10b981,color:#000
    style CMP fill:#fef3c7,stroke:#f59e0b,color:#000
    style Compare fill:#e0e7ff,stroke:#6366f1,color:#000`} />
          </div>
        </div>

        {/* Phase 2: Canary Deployment */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Phase 2: Canary Deployment (Week 5-12)</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    GW["Apigee Gateway<br/>Canary Traffic Split"]

    subgraph FF["Feature Flag (LaunchDarkly)"]
        W5["Week 5: 1% NEW"]
        W6["Week 6: 5% NEW"]
        W7["Week 7: 10% NEW"]
        W8["Week 8: 25% NEW"]
        W9["Week 9: 50% NEW"]
        W10["Week 10: 75% NEW"]
        W11["Week 11: 100% NEW"]
    end

    GW --> FF

    FF -->|"10% traffic"| N["NEW SERVICE<br/>(GKE Autopilot)<br/>Circuit Breaker:<br/>If error > 5%<br/>Auto rollback"]
    FF -->|"90% traffic"| M["MONOLITH<br/>(Legacy VMs)"]

    N & M --> MON["Cloud Monitoring<br/>Golden Signals Dashboard"]

    subgraph Signals["Metrics Tracked"]
        L["Latency P50/P95/P99"]
        E["Error rate (4xx/5xx)"]
        T["Traffic volume"]
        S["Saturation (CPU/mem)"]
        R["Regression detection"]
    end

    MON --> Signals

    style GW fill:#6366f1,stroke:#6366f1,color:#fff
    style N fill:#d1fae5,stroke:#10b981,color:#000
    style M fill:#fee2e2,stroke:#ef4444,color:#000
    style MON fill:#fef3c7,stroke:#f59e0b,color:#000
    style FF fill:#e0e7ff,stroke:#6366f1,color:#000`} />
          </div>
        </div>

        {/* Data Synchronization */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Data Synchronization Strategy</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart LR
    M["MONOLITH<br/>Oracle DB 11g<br/>(Source of Truth)"]

    M -->|"CDC via<br/>Datastream"| DS["Datastream<br/>(Oracle to GCS)"]
    DS -->|"Avro files"| PS["Pub/Sub Topic<br/>billing_events"]
    PS --> DF["Dataflow ETL<br/>Transform<br/>Schema map<br/>Enrich"]
    DF --> N["NEW SERVICE<br/>Cloud SQL<br/>(PostgreSQL)"]

    subgraph Consistency["Data Consistency"]
        EC["Eventual consistency<br/>< 5 second lag"]
    end

    N --> Consistency

    style M fill:#fee2e2,stroke:#ef4444,color:#000
    style DS fill:#fef3c7,stroke:#f59e0b,color:#000
    style PS fill:#e0e7ff,stroke:#6366f1,color:#000
    style DF fill:#6366f1,stroke:#6366f1,color:#fff
    style N fill:#d1fae5,stroke:#10b981,color:#000`} />
          </div>
        </div>

        {/* Rollback & Safety */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Rollback and Safety Mechanisms</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    subgraph CB["Circuit Breaker (Istio)"]
        CB1["Error rate > 5% for 1 min"]
        CB2["P99 latency > 500ms for 30s"]
        CB3["Health check fails 3x"]
        CB4["Action: Route 100% to MONOLITH"]
    end

    subgraph FF["Feature Flag Kill Switch"]
        FF1["Manual override: canary = 0%"]
        FF2["No code deploy required"]
        FF3["Takes effect in < 200ms"]
    end

    subgraph DT["Distributed Tracing"]
        DT1["Client to Apigee to Service to DB"]
        DT2["Service version tracking"]
        DT3["Customer segment (tier 1/2/3)"]
        DT4["Correlate errors to version"]
    end

    CB --> RB["INSTANT ROLLBACK<br/>to MONOLITH"]
    FF --> RB
    DT --> DBG["DEBUG & DIAGNOSE"]

    style CB fill:#fee2e2,stroke:#ef4444,color:#000
    style FF fill:#fef3c7,stroke:#f59e0b,color:#000
    style DT fill:#e0e7ff,stroke:#6366f1,color:#000
    style RB fill:#d1fae5,stroke:#10b981,color:#000
    style DBG fill:#fce7f3,stroke:#ec4899,color:#000`} />
          </div>
        </div>

        {/* Post-Migration State */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Post-Migration State (Week 12+)</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    GW["Apigee Gateway<br/>100% to NEW SERVICE"]

    GW --> MS["Billing Microservice<br/>(GKE Autopilot + Istio)"]

    subgraph Features["New Service Features"]
        F1["Auto-scaling 10-100 pods"]
        F2["Multi-region (us/eu)"]
        F3["99.95% SLA"]
    end

    MS --> Features
    MS --> DB["Cloud SQL PostgreSQL<br/>(HA with read replicas)"]

    subgraph Decom["MONOLITH DECOMMISSION"]
        D1["1. Monitor NEW for 4 weeks"]
        D2["2. Archive monolith code"]
        D3["3. Sunset Oracle DB tables"]
        D4["4. Redirect devs to new repo"]
        D5["5. Celebrate: -500K LOC!"]
    end

    style GW fill:#6366f1,stroke:#6366f1,color:#fff
    style MS fill:#d1fae5,stroke:#10b981,color:#000
    style DB fill:#e0e7ff,stroke:#6366f1,color:#000
    style Decom fill:#fee2e2,stroke:#ef4444,color:#000`} />
          </div>
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
