"use client";

/**
 * Gemini Project 1: Enterprise GenAI Gateway
 * Platform TPM focus - Security, Compliance, Cost Control
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
        title="Enterprise GenAI Gateway"
        tags={[
          { label: "Enterprise SaaS", type: "enterprise" },
          { label: "Platform TPM", type: "infra" },
          { label: "AI/ML", type: "ai" },
        ]}
      />

      {/* Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Executive Summary</h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Enterprise GenAI Gateway is a centralized proxy service that governs all outbound LLM traffic
            across an organization. It addresses the growing challenge of engineering teams independently
            accessing AI APIs (OpenAI, Gemini, Claude) with individual API keys, leading to unmonitored costs,
            potential PII leakage, and fragmented security standards.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Platform TPM capabilities</strong> by architecting a multi-tenant
            governance layer that provides unified access, security guardrails, and cost visibility for
            enterprise AI adoption. As a Platform TPM, you&apos;ll orchestrate cross-functional alignment between
            Security, FinOps, Legal, and Engineering while building a scalable foundation that enables
            responsible AI innovation across the enterprise.
          </p>
        </div>
      </section>

      {/* Purpose & Technical Scope */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Purpose & Technical Scope</h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Engineering teams hitting LLM APIs directly with individual API keys creating shadow IT risk</li>
            <li>Unmonitored costs with no attribution to cost centers (bills ranging from $10K-$500K/month)</li>
            <li>Potential PII leakage in prompts sent to external providers without DLP controls</li>
            <li>Fragmented security standards across teams (different key rotation policies, no MFA)</li>
            <li>No audit trail for compliance requirements (SOC 2, GDPR, HIPAA)</li>
            <li>Inability to enforce model usage policies or content filtering at scale</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Unified Proxy Endpoint:</strong> Single internal URL (<code className="bg-muted px-1.5 py-0.5 rounded text-sm">api.internal.corp/v1/chat</code>) routing to external providers</li>
            <li><strong className="text-foreground">PII Guardrails:</strong> Real-time DLP scanning using Cloud DLP API to detect and block sensitive data (SSNs, credit cards, medical records)</li>
            <li><strong className="text-foreground">Rate Limiting & Quotas:</strong> Tiered access controls (Tier 1: 10k tokens/day for development; Tier 2: 1M tokens/day for production)</li>
            <li><strong className="text-foreground">Audit Logging:</strong> Encrypted prompt/response storage in BigQuery with 90-day retention for compliance audits</li>
            <li><strong className="text-foreground">Multi-Provider Support:</strong> Intelligent routing to OpenAI, Gemini, Claude, or on-premises models based on cost and latency requirements</li>
            <li><strong className="text-foreground">Cost Attribution:</strong> Automatic tagging of requests with cost center, team, and project metadata for chargeback</li>
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
                <td className="py-3 px-4">Cost Visibility</td>
                <td className="py-3 px-4">100% spend attribution</td>
                <td className="py-3 px-4">All AI costs tagged and attributed to specific cost centers in billing dashboard</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Security Incidents</td>
                <td className="py-3 px-4">0 PII breaches</td>
                <td className="py-3 px-4">No PII data leaving corporate network; DLP blocks logged in Cloud Monitoring</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Adoption Rate</td>
                <td className="py-3 px-4">80% migration in Q1</td>
                <td className="py-3 px-4">Internal AI applications migrated from direct API calls to gateway</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Latency Overhead</td>
                <td className="py-3 px-4">&lt;50ms P99</td>
                <td className="py-3 px-4">Additional latency from proxy layer measured via Cloud Trace</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Cost Reduction</td>
                <td className="py-3 px-4">20% reduction via optimization</td>
                <td className="py-3 px-4">Smart routing to cheaper models for non-critical workloads</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Availability</td>
                <td className="py-3 px-4">99.9% uptime</td>
                <td className="py-3 px-4">SLO measured via Cloud Monitoring uptime checks</td>
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
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Compute</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Run</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Functions</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">API Layer</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">FastAPI</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">API Gateway</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Endpoints</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data & Logging</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">BigQuery</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Logging</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Pub/Sub</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Security</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud KMS</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Secret Manager</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud DLP</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">IAM</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Monitoring</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Monitoring</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Trace</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Looker Studio</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">AI Providers</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vertex AI</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">OpenAI API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Anthropic API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">High-Level Architecture</h2>

        {/* Client Applications */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Client Applications and Gateway</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    subgraph Clients["CLIENT APPLICATIONS"]
        D["Dev Team (Tier 1)<br/>10k tok/day"]
        M["ML Team (Tier 2)<br/>1M tok/day"]
        P["Prod Apps (Tier 3)<br/>Unlimited"]
        A["Analytics (Tier 1)<br/>50k tok/day"]
    end

    D & M & P & A -->|"HTTPS + API Key<br/>api.internal.corp/v1/chat"| EP["Cloud Endpoints"]

    subgraph Auth["Gateway Auth"]
        A1["Authentication"]
        A2["Rate Limiting"]
        A3["API Key Validation"]
        A4["IAM Service Accounts"]
    end

    EP --> Auth

    Auth --> PROXY["Cloud Run Proxy Service<br/>(FastAPI + Python 3.11)"]

    style Clients fill:#e0e7ff,stroke:#6366f1,color:#000
    style EP fill:#fef3c7,stroke:#f59e0b,color:#000
    style PROXY fill:#6366f1,stroke:#6366f1,color:#fff`} />
          </div>
        </div>

        {/* DLP and Routing */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">DLP Scanning and Smart Routing</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    PROXY["Cloud Run Proxy"]

    subgraph DLP["DLP Scanner (Cloud DLP API)"]
        D1["PII detection"]
        D2["SSN, Credit Card"]
        D3["Email, Phone"]
        D4["Medical IDs"]
        D5["Block/Warn actions"]
    end

    PROXY --> DLP

    subgraph Router["Smart Router"]
        R1["Model selection"]
        R2["Load balancing"]
        R3["Failover logic"]
        R4["Cost matrix"]
        R5["Latency SLA"]
    end

    DLP --> Router

    Router --> V["Vertex AI<br/>(Gemini Pro)<br/>$0.25/1M tok"]
    Router --> O["OpenAI API<br/>(GPT-4/3.5)<br/>$10/1M tok"]
    Router --> C["Anthropic API<br/>(Claude 3)<br/>$15/1M tok"]

    style PROXY fill:#6366f1,stroke:#6366f1,color:#fff
    style DLP fill:#fee2e2,stroke:#ef4444,color:#000
    style Router fill:#fef3c7,stroke:#f59e0b,color:#000
    style V fill:#d1fae5,stroke:#10b981,color:#000
    style O fill:#e0e7ff,stroke:#6366f1,color:#000
    style C fill:#fce7f3,stroke:#ec4899,color:#000`} />
          </div>
        </div>

        {/* Response Handling and Logging */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Response Handling and Logging</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    RESP["Response Handler<br/>+ Async Logging<br/>(Cloud Functions)"]

    RESP -->|"Pub/Sub Topic<br/>async, non-blocking"| BQ["BigQuery<br/>audit_logs"]
    RESP -->|"Pub/Sub Topic<br/>async, non-blocking"| MON["Cloud Monitoring<br/>+ Dashboards"]

    subgraph AuditData["Encrypted Audit Data"]
        A1["Prompts"]
        A2["Responses"]
        A3["Cost center"]
        A4["Timestamp"]
        A5["User ID"]
        A6["Model used"]
        A7["Token count"]
    end

    subgraph Metrics["Real-time Metrics"]
        M1["Latency P99"]
        M2["Error rate"]
        M3["Token usage"]
        M4["Cost/hour"]
        M5["DLP blocks"]
    end

    BQ --> AuditData
    MON --> Metrics

    BQ --> LOOKER["Looker Studio<br/>Cost Dashboard"]

    subgraph Views["Dashboard Views"]
        V1["By Team"]
        V2["By Model"]
        V3["By Use Case"]
        V4["Trends"]
        V5["Anomalies"]
    end

    LOOKER --> Views

    style RESP fill:#6366f1,stroke:#6366f1,color:#fff
    style BQ fill:#d1fae5,stroke:#10b981,color:#000
    style MON fill:#fef3c7,stroke:#f59e0b,color:#000
    style LOOKER fill:#fce7f3,stroke:#ec4899,color:#000`} />
          </div>
        </div>

        {/* Security Layer */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Security Layer</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart LR
    subgraph Security["SECURITY LAYER"]
        KMS["Cloud KMS<br/>Encryption at rest"]
        SM["Secret Manager<br/>External LLM API keys"]
        VPC["VPC Service Controls<br/>Network perimeter"]
        CA["Cloud Armor<br/>DDoS protection"]
    end

    KMS --> AUDIT["Audit Logs<br/>Protected"]
    SM --> PROVIDERS["LLM Providers<br/>Secure Access"]
    VPC --> NETWORK["Network<br/>Isolated"]
    CA --> GATEWAY["Gateway<br/>Protected"]

    style Security fill:#fee2e2,stroke:#ef4444,color:#000
    style AUDIT fill:#d1fae5,stroke:#10b981,color:#000
    style PROVIDERS fill:#e0e7ff,stroke:#6366f1,color:#000
    style NETWORK fill:#fef3c7,stroke:#f59e0b,color:#000
    style GATEWAY fill:#6366f1,stroke:#6366f1,color:#fff`} />
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
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: MVP</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Proxy endpoint, basic PII regex filter, single provider (Vertex AI), simple rate limiting</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Governance</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Multi-provider routing, Cloud DLP integration, tiered quotas, BigQuery audit logging, Pub/Sub pipeline</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs">Medium-High</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Enterprise</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Looker dashboards, advanced DLP policies, RBAC/IAM integration, cost chargeback automation, SLO monitoring</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Scale</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Multi-region deployment, caching layer, model fine-tuning integration, self-service portal</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
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
                <td className="py-3 px-4">Latency overhead perceived as blocker by dev teams</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Async logging (non-blocking), HTTP/2 connection pooling, regional Cloud Run deployment, caching layer for common requests</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Teams bypass gateway for "urgent" needs creating compliance gaps</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Network policies blocking direct external API access, executive mandate with eng leadership, quarterly compliance audits</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">PII false positives blocking legitimate business requests</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Tunable sensitivity thresholds, allow-list for specific patterns, human review queue for edge cases</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Provider API changes breaking routing logic</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs">Low</span></td>
                <td className="py-3 px-4">Abstraction layer with adapter pattern, provider SDKs with version pinning, integration tests in CI/CD</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Cost explosion from misconfigured quotas or abuse</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Hard quota limits with alerts, anomaly detection on spend patterns, circuit breakers for runaway requests</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Single point of failure impacting all AI-powered applications</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Multi-region deployment with global load balancer, fallback to direct provider access in emergency, 99.9% SLA commitment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Security Team:</strong> Sign-off on DLP detection patterns and acceptable PII handling policies</li>
            <li><strong className="text-foreground">FinOps Team:</strong> Cost center taxonomy and chargeback workflow integration</li>
            <li><strong className="text-foreground">Legal/Compliance:</strong> Audit log retention policies (GDPR right to deletion vs. compliance requirements)</li>
            <li><strong className="text-foreground">Platform Engineering:</strong> Network policy enforcement and VPC Service Controls configuration</li>
            <li><strong className="text-foreground">Application Teams:</strong> Migration from direct API calls to gateway proxy endpoint</li>
            <li><strong className="text-foreground">Procurement:</strong> Negotiated enterprise agreements with OpenAI, Anthropic for volume pricing</li>
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
              <strong className="text-foreground">Platform Thinking:</strong> Demonstrates ability to build shared infrastructure that scales across entire organization, enabling 1000+ developers
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Cross-Functional Leadership:</strong> Requires alignment with Security, FinOps, Legal, Platform teams - core TPM skill for Mag7 companies
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Enterprise AI Adoption:</strong> Directly addresses how leading tech companies govern AI at scale while enabling innovation
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">GCP Native Stack:</strong> Leverages Vertex AI, Cloud Run, BigQuery, Cloud DLP - aligns with Google Cloud expertise
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Executive Communication:</strong> Clear ROI story around cost visibility ($100K+ annual savings), compliance posture, and security risk reduction
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Technical Depth:</strong> Showcases understanding of API design, security protocols, distributed systems, and ML infrastructure
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/gemini"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
        >
          ← Back to Gemini Projects
        </Link>
        <Link
          href="/nebula/capstone/gemini/smart-customer-voice-dashboard"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
        >
          Next: Customer Voice Dashboard →
        </Link>
      </div>
    </div>
  );
}

export default function EnterpriseGenAIGatewayPage() {
  return (
    <CapstoneLayout
      title="Enterprise GenAI Gateway - Gemini Projects"
      description="Platform TPM Capstone: AI Governance and Cost Control"
      currentLLM="gemini"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
