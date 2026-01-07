"use client";

import Link from "next/link";
import { CapstoneLayout } from "@/components/CapstoneLayout";

// Colors for tags
const geminiColor = "#2F855A";
const opusColor = "#9333EA";

// Callout component
function Callout({ type, title, children }: { type: "gemini" | "opus"; title: string; children: React.ReactNode }) {
  const color = type === "gemini" ? geminiColor : opusColor;
  const bg = type === "gemini" ? "rgba(34, 197, 94, 0.1)" : "rgba(147, 51, 234, 0.1)";

  return (
    <div className="rounded-lg my-5 p-4" style={{ borderLeft: `4px solid ${color}`, background: bg }}>
      <div className="font-semibold mb-2" style={{ color }}>{title}</div>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}

// Tag component
function Tag({ type, children }: { type: "gemini" | "opus"; children: React.ReactNode }) {
  const color = type === "gemini" ? geminiColor : opusColor;
  return <span className="font-semibold" style={{ color }}>{children}</span>;
}

// Section component
function Section({ id, title, opus, children }: { id: string; title: string; opus?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-8 p-6 bg-card rounded-xl border border-border">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        {title}
        {opus && <Tag type="opus"> [Opus]</Tag>}
      </h2>
      <div className="space-y-4 text-muted-foreground">{children}</div>
    </section>
  );
}

// Data table component
function DataTable({ headers, rows, headerBg }: { headers: string[]; rows: string[][]; headerBg?: string }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2 text-left font-semibold border border-border" style={headerBg ? { background: headerBg } : { background: "var(--muted)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 border border-border">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FraudDetectionPRDPage() {
  return (
    <CapstoneLayout
      title="Fraud Detection PRD v1.2"
      description="Product Requirements Document for Fraud Detection & Prevention Platform"
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <Link href="/nebula/capstone" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Capstone Projects
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Product Requirements Document (PRD)
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Fraud Detection & Prevention Platform for Telecom & MSP
          </p>
          <p className="font-medium" style={{ color: opusColor }}>
            Version 1.2 [Opus: Updated]
          </p>
        </header>

        {/* Metadata Table */}
        <div className="flex justify-center mb-8">
          <table className="border-collapse text-sm max-w-[500px]">
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-border bg-muted font-semibold w-[140px]">Date</td>
                <td className="px-4 py-2 border border-border">December 2025</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border bg-muted font-semibold">Author</td>
                <td className="px-4 py-2 border border-border">Uday</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border bg-muted font-semibold">Project Type</td>
                <td className="px-4 py-2 border border-border">Capstone / Portfolio Project</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border bg-muted font-semibold">Target Audience</td>
                <td className="px-4 py-2 border border-border">Hiring managers, product/technical leaders at telcos, MSPs, and tech companies</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table of Contents */}
        <div className="bg-muted/50 p-5 rounded-lg mb-8">
          <div className="font-semibold mb-3 text-foreground">Table of Contents</div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-1.5 list-none m-0 p-0">
            {[
              { id: "executive-summary", label: "Executive Summary" },
              { id: "project-overview", label: "Project Overview" },
              { id: "business-context", label: "Business Context & Problem Statement" },
              { id: "core-requirements", label: "Core Requirements (Prioritized)" },
              { id: "nfr", label: "Non-Functional Requirements" },
              { id: "tech-stack", label: "Technical Stack" },
              { id: "data-model", label: "Data Model & Synthetic Scenarios" },
              { id: "demo-scenarios", label: "Demo Scenarios & Walkthrough", opus: true },
              { id: "success-criteria", label: "Success Criteria & KPIs", opus: true },
              { id: "constraints", label: "Technical Constraints & Edge Cases" },
              { id: "limitations", label: "What This Project Doesn't Prove", opus: true },
              { id: "risk-mitigation", label: "Risk Mitigation", opus: true },
              { id: "governance", label: "Governance, Compliance & Documentation" },
              { id: "timeline", label: "Development Phases & Timeline" },
            ].map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm hover:underline" style={{ color: item.opus ? opusColor : "var(--muted-foreground)" }}>
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Executive Summary */}
        <Section id="executive-summary" title="1. Executive Summary">
          <p>
            This PRD outlines the development of a fraud analytics and detection prototype for the Telecom and
            Managed Service Provider (MSP) domains. The prototype is a portfolio project designed to demonstrate
            end-to-end product and technical execution, combining problem framing, solution design, clean engineering,
            observability, and governance thinking - all critical capabilities for product management and technical
            leadership roles.
          </p>
          <p>
            <strong className="text-foreground">Phase 1 (8-10 weeks)</strong> will deliver a working system detecting two priority fraud types:
            MSP contract/invoice anomalies and identity/account-based fraud, with a clear architectural foundation
            for scaling to Phase 2 (call-based fraud) and Phase 3 (cross-industry collaboration).
          </p>
        </Section>

        {/* Project Overview */}
        <Section id="project-overview" title="2. Project Overview">
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">2.1 What We Are Building</h3>
          <p>An end-to-end fraud detection and analytics system that:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Ingests diverse data batches <Tag type="gemini">[Gemini: Refined terminology]</Tag> mimicking real operational contexts: MSP invoice/contract records, subscriber account activity, identity/credential events, and billing anomalies.</li>
            <li>Detects fraud patterns and anomalies using rule-based and simple ML approaches, producing risk scores with clear explanations for human analysts.</li>
            <li>Provides analyst workflows with dashboards, alerts, case management, and KPI tracking to show how fraud operations teams would adopt and use this system.</li>
            <li>Emphasizes operational realism: batch/micro-batch processing, practical governance, compliance awareness, and clear documentation of limitations.</li>
          </ul>

          <Callout type="gemini" title="[Gemini: Added Visual Placeholder]">
            <em>System Architecture Diagram: Synthetic Data Generators → Ingest API → Detection Engine → PostgreSQL DB → FastAPI → React UI</em>
          </Callout>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.2 Why This Project Matters</h3>
          <p><strong className="text-foreground">For Hiring Managers & Technical Leaders:</strong></p>
          <p>This project demonstrates:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Problem-space expertise:</strong> Understanding of telecom/MSP fraud types, business impact, regulatory context, and cross-stakeholder dynamics.</li>
            <li><strong className="text-foreground">Product thinking:</strong> Clear personas, use cases, success metrics, documented constraints, and awareness of trade-offs.</li>
            <li><strong className="text-foreground">Technical execution:</strong> Clean, typed, well-tested code; observability; secure by design; reproducible deployments.</li>
            <li><strong className="text-foreground">Portfolio-grade delivery:</strong> A public GitHub repo, working prototype, &gt;80% test coverage, clear architecture, and evidence of iterative refinement.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.3 Users & Personas</h3>
          <p><strong className="text-foreground">Primary Users (Operational):</strong></p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Fraud Analyst (Telco/MSP)</strong> - Reviews alerts, investigates cases, provides disposition.</li>
            <li><strong className="text-foreground">Operations/Network Engineer</strong> - Monitors CDR data, billing anomalies, and contract fulfillment.</li>
            <li><strong className="text-foreground">Fraud Manager/Risk Officer</strong> - Sets policies, tunes thresholds, reviews KPIs.</li>
          </ol>
          <p className="mt-3"><strong className="text-foreground">Your Actual Audience:</strong></p>
          <p>Hiring managers, product leads, and senior engineers at Google, Apple, high-growth fintech/telco startups evaluating your product sense, technical depth, and execution discipline.</p>
        </Section>

        {/* Business Context */}
        <Section id="business-context" title="3. Business Context & Problem Statement">
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">3.1 Industry Landscape</h3>
          <p>Telecom and MSP fraud is a multi-billion-dollar problem globally. Fraud takes many forms:</p>

          <p className="mt-3"><strong className="text-foreground">Telecom Fraud Types (per LexisNexis):</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Subscription Fraud:</strong> Criminals use stolen identities to apply for services.</li>
            <li><strong className="text-foreground">First-Party Fraud:</strong> Genuine account holder intentionally defaults or files chargebacks.</li>
            <li><strong className="text-foreground">Synthetic Identity Fraud:</strong> Combination of real + fabricated data to open fake accounts.</li>
            <li><strong className="text-foreground">Account Takeover (ATO):</strong> Fraudsters gain control of genuine accounts via compromised credentials.</li>
            <li><strong className="text-foreground">Credential Testing:</strong> Attackers test stolen credentials against accounts.</li>
            <li><strong className="text-foreground">Bot Attacks:</strong> Automated attacks on login/signup; bot attacks rose 597% globally (2022).</li>
          </ul>

          <p className="mt-3"><strong className="text-foreground">MSP-Specific Fraud:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Invoice/Contract Anomalies:</strong> Duplicate invoices, overlapping service periods, inflated labor rates, ghost projects.</li>
            <li><strong className="text-foreground">Labor Time Fraud:</strong> Overbilling for services not rendered.</li>
            <li><strong className="text-foreground">Subscription Abuse:</strong> Free trial abuse, rapid account cycling, unauthorized resale.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.2 Current State & Gaps</h3>
          <p>Today, most telcos and MSPs:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Rely on manual review and legacy rule engines (often inflexible, hard to update).</li>
            <li>Lack real-time behavioral context and cross-source correlation.</li>
            <li>Struggle to balance fraud prevention with customer experience.</li>
            <li>Face growing regulatory pressure for proactive fraud detection.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.3 Our Approach: Phase-Based Evolution</h3>
          <p><strong className="text-foreground">Phase 1 (Capstone MVP):</strong> Build a polished prototype proving fraud detection for 2 priority types.</p>
          <p><strong className="text-foreground">Phase 2 (Roadmap):</strong> Add ML depth, more fraud types, richer UX.</p>
          <p><strong className="text-foreground">Phase 3 (Vision):</strong> Enable cross-industry fraud intelligence sharing.</p>
        </Section>

        {/* Core Requirements */}
        <Section id="core-requirements" title="4. Core Requirements (Prioritized)">
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">4.1 Must-Have (Phase 1 MVP)</h3>

          <h4 className="text-base font-medium text-muted-foreground mt-4 mb-2">4.1.1 Synthetic Data & Scenarios</h4>
          <p><strong className="text-foreground">MSP Contract/Invoice Dataset:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Schema:</strong> Contract ID, MSP ID, Service Type, Quantity, Unit Cost, Invoice Date, Paid Date, Time Entry Records.</li>
            <li><strong className="text-foreground">Fraud scenarios:</strong> Duplicate invoices, overlapping periods, rate anomalies, ghost projects.</li>
            <li><strong className="text-foreground">Target scale:</strong> 50k-100k invoice records, 5-10% flagged as anomalous.</li>
          </ul>

          <p className="mt-3"><strong className="text-foreground">Identity/Account-Based Dataset:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Schema:</strong> Subscriber ID, Account Creation Date, Device ID, IP Address, Login Events, Payment Methods.</li>
            <li><strong className="text-foreground">Fraud scenarios:</strong> Credential testing, ATO, synthetic identity, SIM swap indicators (Phase 2).</li>
            <li><strong className="text-foreground">Target scale:</strong> 100k-200k subscriber records with 5-8% flagged anomalies.</li>
          </ul>

          <h4 className="text-base font-medium text-muted-foreground mt-4 mb-2">4.1.2 Detection Engine</h4>
          <p><strong className="text-foreground">Rule-Based Anomaly Detection:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">MSP Fraud Rules:</strong> Duplicate invoice, overlapping time-entry, rate anomaly, ghost project detection.</li>
            <li><strong className="text-foreground">Identity Fraud Rules:</strong> Credential testing pattern, device/IP change, rapid credential change, payment method churn.</li>
            <li><Tag type="gemini">[Gemini] Configuration Management:</Tag> Fraud thresholds must not be hardcoded. Extract all magic numbers to <code className="bg-muted px-1 rounded">config.yaml</code> or <code className="bg-muted px-1 rounded">.env</code> file.</li>
          </ul>

          <p className="mt-3"><strong className="text-foreground">Risk Scoring & Explanation:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Composite risk score per entity (0-100 scale).</li>
            <li>Explainability: List contributing factors with weights.</li>
            <li>Severity tiers: Green (&lt;30), Yellow (30-70), Red (&gt;70).</li>
          </ul>

          <h4 className="text-base font-medium text-muted-foreground mt-4 mb-2">4.1.3 API & Backend Services</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Data Ingestion API:</strong> <code className="bg-muted px-1 rounded">POST /api/v1/ingest/contracts</code> & <code className="bg-muted px-1 rounded">POST /api/v1/ingest/accounts</code> with idempotent processing.</li>
            <li><strong className="text-foreground">Alert API:</strong> <code className="bg-muted px-1 rounded">GET /api/v1/alerts</code> with filters.</li>
            <li><Tag type="gemini">[Gemini] Pagination Support:</Tag> Must support server-side pagination (limit/offset) to handle &gt;10k alerts.</li>
            <li><strong className="text-foreground">Risk Score API:</strong> <code className="bg-muted px-1 rounded">GET /api/v1/risk-score/{"{entity_type}"}/{"{entity_id}"}</code>. Response time: p95 &lt;300 ms.</li>
          </ul>

          <h4 className="text-base font-medium text-muted-foreground mt-4 mb-2">4.1.4 Analyst Dashboard (Web UI)</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Alert List View:</strong> Table of recent alerts: timestamp, fraud type, entity, risk score, status.</li>
            <li><Tag type="gemini">[Gemini] Pagination UI:</Tag> Implementation of Next/Previous or infinite scroll backed by paginated API.</li>
            <li><strong className="text-foreground">Alert Detail View:</strong> Risk score breakdown, entity profile, related alerts, timeline view.</li>
            <li><strong className="text-foreground">Trend Dashboard:</strong> Charts: alerts per day, distribution by risk tier, analyst throughput.</li>
          </ul>

          <h4 className="text-base font-medium text-muted-foreground mt-4 mb-2">4.1.5 Alerting & Workflow</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Alert Queue:</strong> Simple database table: alert ID, entity details, risk score, status, disposition, notes.</li>
            <li><Tag type="gemini">[Gemini] The Data Flywheel:</Tag> Capture analyst disposition (True Positive vs. False Positive) for future ML model retraining.</li>
          </ul>

          <h4 className="text-base font-medium text-muted-foreground mt-4 mb-2">4.1.6 Engineering Excellence</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Test Coverage:</strong> 80% coverage for backend logic.</li>
            <li><strong className="text-foreground">Code Quality:</strong> Type hints, Docstrings, Linting (isort, black, flake8). No TODOs in core logic.</li>
            <li><strong className="text-foreground">GitHub Repository:</strong> Public repo with clear structure, CI/CD pipeline, ADRs, and README.</li>
          </ul>

          <h4 className="text-base font-medium text-muted-foreground mt-4 mb-2">4.1.7 Deployment & Observability</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Containerization:</strong> Docker images, docker-compose.yml, deployment to Railway.io.</li>
            <li><strong className="text-foreground">Observability:</strong> Structured logging, Metrics (Prometheus format), Health checks.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4.2 Should-Have (Phase 2)</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Enhanced ML/Analytics (Unsupervised anomaly detection, Feature store).</li>
            <li>Multi-Channel Coverage (Call/SMS event data).</li>
            <li>Richer UX & Configuration (Configurable rules via UI).</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4.3 Nice-to-Have (Phase 3)</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Cross-Industry Collaboration & "Fraud Signal API".</li>
            <li>Advanced Analytics & Modeling (Graph-based detection, Explainable AI).</li>
          </ul>
        </Section>

        {/* Non-Functional Requirements */}
        <Section id="nfr" title="5. Non-Functional Requirements">
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">5.1 Performance</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Data Processing:</strong> Ingest 100k synthetic records in &lt;60 seconds. Rule engine latency: &lt;1 second per batch.</li>
            <li><strong className="text-foreground">API Response Times:</strong> GET /alerts: p95 &lt;500 ms. GET /risk-score: p95 &lt;300 ms.</li>
            <li><Tag type="gemini">[Gemini] Pagination:</Tag> Response time must remain &lt;500ms even as record count grows to 1M+.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">5.2 Reliability & Error Handling</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Graceful Degradation, Data Consistency (ACID), Idempotency.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">5.3 Code Quality</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Type Hints, Docstrings, Test Coverage &gt;80%, Linting.</li>
            <li><Tag type="gemini">[Gemini] Configuration:</Tag> All business logic thresholds extracted to config files, not hardcoded.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">5.4 Security & Compliance</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>No real PII (Synthetic only), Basic Auth, Compliance Narrative (GDPR/PSD3 awareness).</li>
          </ul>
        </Section>

        {/* Technical Stack */}
        <Section id="tech-stack" title="6. Technical Stack">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[
              { title: "Backend", items: ["Python", "FastAPI"] },
              { title: "Database", items: ["PostgreSQL"] },
              { title: "Frontend", items: ["React"] },
              { title: "Containerization", items: ["Docker"] },
              { title: "Deployment", items: ["Railway.io"] },
            ].map((cat) => (
              <div key={cat.title} className="bg-muted/50 rounded-lg p-4">
                <div className="text-sm font-semibold text-foreground mb-2">{cat.title}</div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="px-2 py-1 rounded text-xs bg-primary/10 text-primary">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Data Model */}
        <Section id="data-model" title="7. Data Model & Synthetic Scenarios">
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">7.1 MSP Fraud: Contract/Invoice Schema</h3>
          <p>Standard schemas for MSPs, Contractors, Contracts, Invoices, TimeEntries.</p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">7.2 Identity Fraud: Account Schema</h3>
          <p>Standard schemas for Subscribers, Accounts, Devices, LoginEvents, PaymentMethods.</p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">7.3 Alerting & Feedback Schema <Tag type="gemini">[Gemini]</Tag></h3>
          <Callout type="gemini" title="[Gemini: Rationale]">
            This schema captures Ground Truth for Phase 2 model retraining.
          </Callout>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Alerts Table:</strong> alert_id (PK), entity_type, entity_id, risk_score, risk_tier, created_at, status</li>
            <li><strong className="text-foreground">CaseDisposition Table:</strong> case_id (PK), alert_id (FK), analyst_id, disposition, reason_code, notes, timestamp</li>
          </ul>
        </Section>

        {/* Demo Scenarios [OPUS] */}
        <Section id="demo-scenarios" title="8. Demo Scenarios & Walkthrough" opus>
          <Callout type="opus" title="[Opus: Added]">
            This section defines how the project will be showcased to hiring managers.
          </Callout>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">8.1 Primary Demo Scenario: MSP Invoice Fraud</h3>
          <p><strong className="text-foreground">The 5-Minute Story:</strong></p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong className="text-foreground">Setup (30 sec):</strong> Show the dashboard with recent alerts. "We have ingested 75,000 MSP invoice records. The system has flagged 847 anomalies."</li>
            <li><strong className="text-foreground">Detection (90 sec):</strong> Click into a high-risk alert (duplicate invoice). Walk through risk score breakdown. Highlight explainability.</li>
            <li><strong className="text-foreground">Workflow (60 sec):</strong> Demonstrate disposition flow: mark as True Positive, add notes, close case. Show ground truth capture.</li>
            <li><strong className="text-foreground">Analytics (60 sec):</strong> Switch to trend dashboard. Show alerts over time, distribution by risk tier.</li>
            <li><strong className="text-foreground">Architecture (60 sec):</strong> Quick tour of GitHub repo: folder structure, test coverage badge, CI/CD pipeline, ADRs.</li>
          </ol>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">8.2 Secondary Demo Scenario: Account Takeover</h3>
          <p>For technical deep-dives (if time permits):</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Show credential testing attack pattern: 47 failed logins from 12 IPs → sudden success → immediate device change.</li>
            <li>Demonstrate entity timeline view with login events, credential changes, payment method additions.</li>
            <li>Discuss how rule configuration (<code className="bg-muted px-1 rounded">config.yaml</code>) allows threshold tuning without code changes.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">8.3 Interview Talking Points</h3>
          <p>Key narratives to emphasize during discussions:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Trade-off decisions:</strong> "I chose batch processing over real-time for Phase 1 because [reasoning]. Here is how the architecture supports future real-time needs."</li>
            <li><strong className="text-foreground">Scope management:</strong> "I explicitly deferred ML-based detection to Phase 2. The rule-based system gives us interpretable baselines."</li>
            <li><strong className="text-foreground">Production readiness:</strong> "The observability setup would translate directly to production. Here is what I would add for true prod deployment."</li>
            <li><strong className="text-foreground">Domain expertise:</strong> "I researched real fraud patterns from LexisNexis and GSMA reports. The synthetic data reflects actual attack vectors."</li>
          </ul>
        </Section>

        {/* Success Criteria [OPUS] */}
        <Section id="success-criteria" title="9. Success Criteria & KPIs" opus>
          <Callout type="opus" title="[Opus: Updated]">
            Success metrics made specific and demonstrable for portfolio evaluation.
          </Callout>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">9.1 Detection Accuracy (Demonstrable Targets)</h3>
          <DataTable
            headers={["Metric", "Target"]}
            headerBg="rgba(147, 51, 234, 0.15)"
            rows={[
              ["Fraud detection rate (recall)", ">=90% of injected fraud scenarios detected"],
              ["False positive rate", "<15% on test dataset"],
              ["High-risk alert accuracy", "Risk >70 alerts are true positives >=80% of time"],
            ]}
          />

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">9.2 Technical KPIs</h3>
          <DataTable
            headers={["Metric", "Target"]}
            headerBg="rgba(147, 51, 234, 0.15)"
            rows={[
              ["Test coverage", ">80% for backend logic"],
              ["API response time (p95)", "<500ms alerts, <300ms risk score"],
              ["Data ingestion throughput", "100k records in <60 seconds"],
              ["Demo walkthrough time", "Complete end-to-end in <5 minutes"],
            ]}
          />
        </Section>

        {/* Technical Constraints */}
        <Section id="constraints" title="10. Technical Constraints & Edge Cases">
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">10.1 Handled in Phase 1</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><Tag type="gemini">[Gemini] Large Result Sets:</Tag> Handled via API pagination; UI does not crash on high alert volume.</li>
            <li>Missing fields, duplicate events, clock skew.</li>
            <li>DB failures, malformed JSON, type safety, test isolation.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">10.2 Explicitly Out of Scope (Phase 1)</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Real-time/streaming detection (deferred to Phase 2).</li>
            <li>ML model training and deployment.</li>
            <li>Multi-tenant architecture.</li>
            <li>Production-grade security (OAuth, RBAC, encryption at rest).</li>
          </ul>
        </Section>

        {/* Limitations [OPUS] */}
        <Section id="limitations" title="11. What This Project Does Not Prove" opus>
          <Callout type="opus" title="[Opus: Added]">
            Being explicit about limitations builds credibility.
          </Callout>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">11.1 Scale & Production Readiness</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Synthetic data only:</strong> The system processes synthetic data designed to include known fraud patterns. Real-world fraud is messier and adversarially adaptive.</li>
            <li><strong className="text-foreground">Not production scale:</strong> 100k records is orders of magnitude smaller than production telco systems handling millions of events daily.</li>
            <li><strong className="text-foreground">Single-user prototype:</strong> No multi-tenant isolation, RBAC, or enterprise SSO integration.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">11.2 ML Sophistication</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Rule-based detection only:</strong> Phase 1 uses deterministic rules and statistical thresholds. True ML models are deferred.</li>
            <li><strong className="text-foreground">No model training pipeline:</strong> The ground truth schema enables future ML, but no model training/serving infrastructure exists.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">11.3 What It Does Prove</h3>
          <p>Despite these limitations, the project demonstrates:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>End-to-end system thinking and architecture design.</li>
            <li>Clean code, testing discipline, and observability practices.</li>
            <li>Product thinking: clear personas, prioritized requirements, documented trade-offs.</li>
            <li>Domain expertise and awareness of real-world fraud patterns.</li>
          </ul>
        </Section>

        {/* Risk Mitigation [OPUS] */}
        <Section id="risk-mitigation" title="12. Risk Mitigation" opus>
          <Callout type="opus" title="[Opus: Updated]">
            Project-specific risks and mitigations for a capstone portfolio project.
          </Callout>

          <DataTable
            headers={["Risk", "Impact", "Mitigation"]}
            headerBg="rgba(147, 51, 234, 0.15)"
            rows={[
              ["Scope creep", "Project extends beyond 8-10 weeks", "Strict phase boundaries; defer ML to Phase 2"],
              ["ML complexity trap", "Spending too much time on model tuning", "Phase 1 is rule-based only"],
              ["Frontend underestimation", "React UI takes longer than expected", "Use component library; prioritize function"],
              ["Demo-ready deadline", "System not presentable when interviews begin", "Weekly milestones; always-deployable from Week 3"],
              ["Data generation bias", "Synthetic data too easy to detect", "Separate generation and detection code; add noise"],
            ]}
          />
        </Section>

        {/* Governance */}
        <Section id="governance" title="13. Governance, Compliance & Documentation">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Compliance Narrative:</strong> Documentation of GDPR and PSD3 awareness (synthetic data only).</li>
            <li><strong className="text-foreground">Architecture Decision Records (ADRs):</strong> Document key decisions (e.g., batch vs. streaming, rule-based vs. ML).</li>
            <li><strong className="text-foreground">README:</strong> Clear setup instructions, architecture overview, known limitations.</li>
          </ul>
        </Section>

        {/* Timeline */}
        <Section id="timeline" title="14. Development Phases & Timeline">
          <p>8-10 week plan with weekly milestones. Always-deployable state from Week 3.</p>
        </Section>

        {/* Version History */}
        <section className="mt-8 pt-8 border-t-2 border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Document Version History</h2>
          <DataTable
            headers={["Version", "Date", "Author", "Changes"]}
            headerBg="rgba(147, 51, 234, 0.15)"
            rows={[
              ["1.0", "Dec 2025", "Uday", "Initial PRD; Phase 1 scope."],
              ["1.1", "Dec 2025", "Uday", "[Gemini] Feedback Loop, Pagination, Configuration, Architecture placeholder."],
              ["1.2", "Dec 2025", "Uday", "[Opus] Demo Scenarios (Sec 7), Sharpened Success Criteria (Sec 8), \"What This Does Not Prove\" (Sec 10), Risk Mitigation (Sec 11)."],
            ]}
          />
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          <Link href="/nebula/capstone" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back to Capstone Projects</Link>
          <Link href="/nebula/capstone/wip/fraud-detection-analysis" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Analysis Document →</Link>
        </div>
      </div>
    </CapstoneLayout>
  );
}
