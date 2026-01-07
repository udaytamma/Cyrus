"use client";

/**
 * Claude Project 5: AI Model Governance & Registry
 * Enterprise MLOps platform for model versioning, approval workflows, and compliance
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

function ProjectContent() {
  return (
    <div className="max-w-[900px] mx-auto">
      <Link
        href="/nebula/capstone/claude"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to Claude Projects
      </Link>

      <ProjectHeader
        title="AI Model Governance & Registry"
        tags={[
          { label: "AI/ML TPM", type: "ai" },
          { label: "Platform", type: "infra" },
          { label: "Governance", type: "enterprise" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The AI Model Governance &amp; Registry is an enterprise MLOps platform that manages the complete
            lifecycle of machine learning models from development through production deployment. By providing
            centralized model versioning, approval workflows, performance monitoring, and compliance controls,
            the platform enables organizations to scale AI responsibly while maintaining regulatory compliance
            and operational rigor.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">AI/ML TPM expertise</strong> by building governance infrastructure
            that balances data science team agility with enterprise risk management requirements. The platform
            manages 200+ production models across 15 teams while maintaining 100% compliance with internal
            approval policies and external regulations (GDPR, SOC 2).
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Problem Statement & Solution
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>ML models deployed to production without centralized tracking or versioning</li>
            <li>No formal approval process for models handling sensitive data (PII, financial)</li>
            <li>Model performance degradation (drift) detected weeks after deployment, causing incidents</li>
            <li>Compliance audits require manual evidence gathering across scattered systems</li>
            <li>Shadow AI proliferation as teams bypass governance to move faster</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Centralized Model Registry:</strong> Vertex AI Model Registry tracking all models with metadata (owner, dataset, metrics)</li>
            <li><strong className="text-foreground">Approval Workflows:</strong> Multi-stage reviews (data science, security, legal) with automated checks before production</li>
            <li><strong className="text-foreground">Continuous Monitoring:</strong> Automated drift detection, performance metrics, and alerting via Cloud Monitoring</li>
            <li><strong className="text-foreground">A/B Testing Framework:</strong> Safe model rollouts with canary deployments and automated rollback</li>
            <li><strong className="text-foreground">Compliance Audit Trails:</strong> BigQuery logs of all model changes, approvals, and access for regulatory reporting</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes & KPIs */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Expected Outcomes & KPIs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Model Compliance</td>
                <td className="py-3 px-4 font-semibold text-primary">100% approval adherence</td>
                <td className="py-3 px-4">All production models pass governance workflow before deployment</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Drift Detection</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;24h mean time to detect</td>
                <td className="py-3 px-4">Time from drift occurrence to automated alert</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Deployment Safety</td>
                <td className="py-3 px-4 font-semibold text-primary">Zero critical incidents</td>
                <td className="py-3 px-4">No customer-impacting failures from model changes</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Audit Readiness</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;2 hours evidence retrieval</td>
                <td className="py-3 px-4">Time to generate compliance reports for auditors</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Data Science Velocity</td>
                <td className="py-3 px-4 font-semibold text-primary">50% faster deployments</td>
                <td className="py-3 px-4">Time from model training to production vs. baseline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: "ML Platform", items: ["Vertex AI", "Model Registry", "Vertex Pipelines"] },
            { title: "CI/CD", items: ["Cloud Build", "Artifact Registry", "GitHub Actions"] },
            { title: "Data Storage", items: ["BigQuery", "Cloud Storage", "Firestore"] },
            { title: "Monitoring", items: ["Cloud Monitoring", "Cloud Logging", "Looker Studio"] },
            { title: "Workflow", items: ["Cloud Workflows", "Pub/Sub", "Cloud Functions"] },
            { title: "Access Control", items: ["IAM", "VPC Service Controls", "Secret Manager"] },
          ].map((category) => (
            <div key={category.title} className="p-4 bg-muted/30 rounded-lg">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {category.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          High-Level Architecture
        </h2>
        <div className="bg-muted/30 p-4 rounded-lg overflow-x-auto">
          <pre className="text-xs text-muted-foreground font-mono whitespace-pre leading-relaxed">{`┌───────────────────────────────────────────────────────────────────────────┐
│              AI MODEL GOVERNANCE & REGISTRY                               │
└───────────────────────────────────────────────────────────────────────────┘

┌────────────────────── MODEL DEVELOPMENT ────────────────────────────────┐
│                                                                           │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │         Data Scientists (Jupyter Notebooks / Vertex AI)           │  │
│  │                                                                    │  │
│  │  1. Train model (TensorFlow, PyTorch, XGBoost)                    │  │
│  │  2. Evaluate on test set (accuracy, fairness metrics)             │  │
│  │  3. Register model to Vertex AI Model Registry                    │  │
│  │                                                                    │  │
│  │  Model Metadata:                                                  │  │
│  │  • Owner: data-science-team                                       │  │
│  │  • Training dataset: gs://bucket/data/v1.2                        │  │
│  │  • Metrics: {accuracy: 0.92, F1: 0.88}                            │  │
│  │  • Fairness: {demographic_parity: 0.95}                           │  │
│  └────────────────────────────┬──────────────────────────────────────┘  │
└───────────────────────────────┼─────────────────────────────────────────┘
                                │
                                ▼
┌──────────────────────── MODEL REGISTRY ─────────────────────────────────┐
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │           Vertex AI Model Registry                               │  │
│  │                                                                   │  │
│  │  Model: fraud-detection-v3.2                                     │  │
│  │  Status: PENDING_REVIEW                                          │  │
│  │  ┌─────────────────────────────────────────────────────────┐    │  │
│  │  │ Version History:                                        │    │  │
│  │  │ • v3.2 (current) - 2025-01-15 - PENDING_REVIEW          │    │  │
│  │  │ • v3.1 - 2025-01-01 - PRODUCTION (95% traffic)          │    │  │
│  │  │ • v3.0 - 2024-12-15 - DEPRECATED                        │    │  │
│  │  └─────────────────────────────────────────────────────────┘    │  │
│  │                                                                   │  │
│  │  Lineage Tracking:                                               │  │
│  │  Training Data → Feature Engineering → Model → Evaluation        │  │
│  └────────────────────────────┬─────────────────────────────────────┘  │
└───────────────────────────────┼──────────────────────────────────────────┘
                                │
                                ▼
┌──────────────────── APPROVAL WORKFLOW ──────────────────────────────────┐
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │         Governance Pipeline (Cloud Workflows)                    │  │
│  │                                                                   │  │
│  │  Stage 1: Automated Checks                                       │  │
│  │  ┌────────────────────────────────────────────────────────────┐ │  │
│  │  │ ✅ Model size < 2GB (deployment limit)                     │ │  │
│  │  │ ✅ Fairness metrics pass thresholds                        │ │  │
│  │  │ ✅ Test accuracy > 85% baseline                            │ │  │
│  │  │ ✅ No PII in model artifacts (DLP scan)                    │ │  │
│  │  │ ✅ Dependency scan (known CVEs)                            │ │  │
│  │  └────────────────────────────────────────────────────────────┘ │  │
│  │           │                                                      │  │
│  │           ▼                                                      │  │
│  │  Stage 2: Data Science Review                                   │  │
│  │  ┌────────────────────────────────────────────────────────────┐ │  │
│  │  │ 👤 Senior DS reviews model card:                           │ │  │
│  │  │    • Training methodology                                  │ │  │
│  │  │    • Evaluation metrics vs. benchmark                      │ │  │
│  │  │    • Failure mode analysis                                 │ │  │
│  │  │ Approve/Reject/Request Changes                             │ │  │
│  │  └────────────────────────────────────────────────────────────┘ │  │
│  │           │                                                      │  │
│  │           ▼                                                      │  │
│  │  Stage 3: Security & Compliance Review (for sensitive models)   │  │
│  │  ┌────────────────────────────────────────────────────────────┐ │  │
│  │  │ 🔒 Security team reviews:                                  │ │  │
│  │  │    • Data access controls (IAM policies)                   │ │  │
│  │  │    • Model output sanitization                             │ │  │
│  │  │    • Encryption at rest/in transit                         │ │  │
│  │  │                                                             │ │  │
│  │  │ ⚖️ Legal/Compliance reviews:                               │ │  │
│  │  │    • GDPR compliance (right to explanation)                │ │  │
│  │  │    • Bias/fairness for protected classes                   │ │  │
│  │  │    • Model documentation completeness                      │ │  │
│  │  └────────────────────────────────────────────────────────────┘ │  │
│  │           │                                                      │  │
│  │           ▼                                                      │  │
│  │  Stage 4: Approval Gate                                         │  │
│  │  ┌────────────────────────────────────────────────────────────┐ │  │
│  │  │ All checks passed → Status: APPROVED_FOR_DEPLOYMENT        │ │  │
│  │  │ Trigger: Cloud Build deployment pipeline                   │ │  │
│  │  └────────────────────────────────────────────────────────────┘ │  │
│  └────────────────────────────┬─────────────────────────────────────┘  │
└───────────────────────────────┼──────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────── DEPLOYMENT PIPELINE ─────────────────────────────────┐
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │         Cloud Build CI/CD Pipeline                               │  │
│  │                                                                   │  │
│  │  Step 1: Build model container (Docker)                          │  │
│  │      ↓                                                            │  │
│  │  Step 2: Push to Artifact Registry                               │  │
│  │      ↓                                                            │  │
│  │  Step 3: Deploy to Vertex AI Endpoint (Canary)                   │  │
│  │         • 5% traffic to v3.2 (new model)                         │  │
│  │         • 95% traffic to v3.1 (current model)                    │  │
│  │      ↓                                                            │  │
│  │  Step 4: Monitor canary metrics (1 hour)                         │  │
│  │         • Prediction latency P99 < 200ms                         │  │
│  │         • Error rate < 1%                                        │  │
│  │         • Business metrics (conversion rate stable)              │  │
│  │      ↓                                                            │  │
│  │  Step 5: Gradual rollout                                         │  │
│  │         • 5% → 25% → 50% → 100% over 24 hours                    │  │
│  │         • Automated rollback if metrics degrade                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────┘

┌────────────────── PRODUCTION MONITORING ────────────────────────────────┐
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │         Continuous Model Monitoring (Cloud Monitoring)           │  │
│  │                                                                   │  │
│  │  Performance Metrics:                                            │  │
│  │  • Prediction latency (P50, P95, P99)                            │  │
│  │  • Throughput (predictions/sec)                                  │  │
│  │  • Error rates (4xx, 5xx)                                        │  │
│  │                                                                   │  │
│  │  Data Drift Detection:                                           │  │
│  │  • Input feature distributions vs. training data                 │  │
│  │  • KL divergence monitoring                                      │  │
│  │  • Alert if drift score > threshold                              │  │
│  │                                                                   │  │
│  │  Model Quality Metrics:                                          │  │
│  │  • Prediction confidence scores                                  │  │
│  │  • Ground truth feedback (when available)                        │  │
│  │  • Business KPIs (fraud detection rate)                          │  │
│  └────────────────────────────┬─────────────────────────────────────┘  │
│                                │                                        │
│                                ▼                                        │
│                  ┌────────────────────────────┐                         │
│                  │   Alerting                 │                         │
│                  │   • Slack (#ml-ops)        │                         │
│                  │   • PagerDuty (critical)   │                         │
│                  │   • Jira ticket creation   │                         │
│                  └────────────────────────────┘                         │
└───────────────────────────────────────────────────────────────────────────┘

┌──────────────────── AUDIT & COMPLIANCE ─────────────────────────────────┐
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │         Audit Trail Logger (Cloud Logging → BigQuery)            │  │
│  │                                                                   │  │
│  │  Logged Events:                                                  │  │
│  │  • Model registration                                            │  │
│  │  • Approval/rejection decisions (with reviewer identity)         │  │
│  │  • Deployment events (version, traffic split)                    │  │
│  │  • Model access (predictions, metadata queries)                  │  │
│  │  • Configuration changes (endpoints, IAM policies)               │  │
│  │                                                                   │  │
│  │  Retention: 7 years (regulatory requirement)                     │  │
│  └────────────────────────────┬─────────────────────────────────────┘  │
│                                │                                        │
│                                ▼                                        │
│                  ┌────────────────────────────┐                         │
│                  │   BigQuery Data Warehouse  │                         │
│                  │   • Audit logs             │                         │
│                  │   • Model lineage          │                         │
│                  │   • Performance metrics    │                         │
│                  └────────────┬───────────────┘                         │
│                                │                                        │
│                                ▼                                        │
│                  ┌────────────────────────────┐                         │
│                  │   Looker Studio Dashboards │                         │
│                  │   • Model inventory        │                         │
│                  │   • Approval pipeline SLAs │                         │
│                  │   • Compliance reports     │                         │
│                  │   • Drift alerts summary   │                         │
│                  └────────────────────────────┘                         │
└───────────────────────────────────────────────────────────────────────────┘`}</pre>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Implementation Phases
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Model Registry</td>
                <td className="py-3 px-4">
                  Vertex AI Model Registry setup, model card templates, lineage tracking,
                  basic versioning and metadata storage
                </td>
                <td className="py-3 px-4">2 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Approval Workflows</td>
                <td className="py-3 px-4">
                  Cloud Workflows for multi-stage approvals, automated validation checks,
                  Slack integration for reviewer notifications
                </td>
                <td className="py-3 px-4">3 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Deployment Automation</td>
                <td className="py-3 px-4">
                  Cloud Build CI/CD pipelines, canary deployment strategy,
                  automated rollback logic, Vertex AI Endpoint management
                </td>
                <td className="py-3 px-4">3 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Monitoring & Compliance</td>
                <td className="py-3 px-4">
                  Drift detection, performance monitoring dashboards, audit logging,
                  compliance reporting templates, production cutover
                </td>
                <td className="py-3 px-4">4 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Risks & Mitigation
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Data science teams bypass governance for "urgent" model updates</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">
                  IAM policies blocking direct endpoint access, executive mandate,
                  fast-track approval path (&lt;4 hours) for critical fixes
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Approval workflow bottlenecks slow down innovation</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">
                  Automated checks for 80% of models (low-risk), human review only for
                  sensitive models, SLA tracking for approval stages
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Drift detection false positives causing alert fatigue</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">
                  Tunable sensitivity thresholds, machine learning for anomaly patterns,
                  tiered alerting (info, warning, critical)
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Compliance audit evidence gaps for legacy models</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">Low</span>
                </td>
                <td className="py-3 px-4">
                  Grandfathering policy for existing models, 6-month migration deadline,
                  retroactive documentation requirements
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Data Science leadership for governance policy definitions and team buy-in</li>
            <li>Security team for IAM policies, access controls, and vulnerability scanning</li>
            <li>Legal/Compliance for regulatory requirements (GDPR, CCPA, SOC 2) and audit needs</li>
            <li>MLOps Engineering for CI/CD pipeline integration and Vertex AI expertise</li>
            <li>Executive sponsorship for mandate enforcement and cross-team alignment</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Alignment with Professional Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { text: "AI Governance Leadership: Demonstrates ability to build responsible AI infrastructure critical for senior AI/ML TPM roles" },
            { text: "MLOps Expertise: Shows proficiency in Vertex AI, CI/CD pipelines, and production ML lifecycle management" },
            { text: "Compliance & Risk Management: Addresses regulatory requirements (GDPR, SOC 2) essential for enterprise AI adoption" },
            { text: "Cross-Functional Leadership: Requires alignment across Data Science, Security, Legal, and Engineering teams" },
            { text: "Scalable Platform Thinking: Builds infrastructure supporting 200+ models across 15 teams, demonstrating platform TPM capabilities" },
            { text: "Industry Relevance: Directly applicable to AI governance challenges at all Mag7 companies deploying ML at scale" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <span className="text-green-500 flex-shrink-0">✅</span>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{item.text.split(":")[0]}:</strong>
                {item.text.split(":").slice(1).join(":")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/claude/developer-experience"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Previous: Developer Experience
        </Link>
        <Link
          href="/nebula/capstone/claude"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Back to Claude Projects →
        </Link>
      </div>
    </div>
  );
}

export default function ModelGovernancePage() {
  return (
    <CapstoneLayout
      title="AI Model Governance & Registry"
      description="Claude Project 5: Enterprise MLOps platform for model governance"
      currentProjectId="claude/model-governance"
      currentLLM="claude"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
