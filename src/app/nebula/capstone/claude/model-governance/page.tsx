"use client";

/**
 * Claude Project 5: AI Model Governance & Registry
 * Enterprise MLOps platform for model versioning, approval workflows, and compliance
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

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
        <MermaidDiagram
          chart={`flowchart TB
    subgraph ModelDev["Model Development"]
        style ModelDev fill:#e0e7ff,stroke:#6366f1
        DS["Data Scientists<br/>Jupyter Notebooks / Vertex AI"]
        Train["1. Train model - TensorFlow, PyTorch, XGBoost<br/>2. Evaluate - accuracy, fairness metrics<br/>3. Register to Model Registry"]
        Metadata["Model Metadata<br/>Owner, Dataset, Metrics, Fairness"]
        DS --> Train
        Train --> Metadata
    end

    subgraph Registry["Model Registry - Vertex AI"]
        style Registry fill:#fef3c7,stroke:#f59e0b
        ModelInfo["fraud-detection-v3.2<br/>Status: PENDING_REVIEW"]
        VersionHistory["Version History<br/>v3.2 PENDING | v3.1 PRODUCTION 95% | v3.0 DEPRECATED"]
        Lineage["Lineage Tracking<br/>Training Data → Feature Eng → Model → Eval"]
        ModelInfo --> VersionHistory
        VersionHistory --> Lineage
    end

    subgraph Approval["Approval Workflow - Cloud Workflows"]
        style Approval fill:#d1fae5,stroke:#10b981
        Stage1["Stage 1: Automated Checks<br/>Model size, Fairness, Accuracy, DLP scan, CVE scan"]
        Stage2["Stage 2: Data Science Review<br/>Senior DS reviews methodology, metrics, failure modes"]
        Stage3["Stage 3: Security & Compliance<br/>IAM, encryption, GDPR, bias review"]
        Stage4["Stage 4: Approval Gate<br/>APPROVED_FOR_DEPLOYMENT"]
        Stage1 --> Stage2
        Stage2 --> Stage3
        Stage3 --> Stage4
    end

    subgraph Deployment["Deployment Pipeline - Cloud Build"]
        style Deployment fill:#fce7f3,stroke:#ec4899
        Build["Step 1: Build Docker container"]
        Push["Step 2: Push to Artifact Registry"]
        Canary["Step 3: Deploy Canary<br/>5% new, 95% current"]
        Monitor["Step 4: Monitor 1 hour<br/>Latency, Error rate, Business metrics"]
        Rollout["Step 5: Gradual rollout<br/>5% → 25% → 50% → 100%"]
        Build --> Push
        Push --> Canary
        Canary --> Monitor
        Monitor --> Rollout
    end

    subgraph ProdMonitor["Production Monitoring"]
        style ProdMonitor fill:#fee2e2,stroke:#ef4444
        Metrics["Performance Metrics<br/>Latency P50/P95/P99, Throughput, Errors"]
        Drift["Data Drift Detection<br/>Feature distributions, KL divergence"]
        Quality["Model Quality<br/>Confidence scores, Ground truth, Business KPIs"]
        Alerting["Alerting<br/>Slack, PagerDuty, Jira"]
        Metrics --> Alerting
        Drift --> Alerting
        Quality --> Alerting
    end

    subgraph Audit["Audit & Compliance"]
        style Audit fill:#e0e7ff,stroke:#6366f1
        Logger["Audit Trail Logger<br/>Cloud Logging → BigQuery"]
        Events["Logged Events<br/>Registration, Approvals, Deployments, Access"]
        BigQuery["BigQuery Data Warehouse<br/>7 year retention"]
        Dashboards["Looker Studio Dashboards<br/>Inventory, SLAs, Compliance, Drift alerts"]
        Logger --> Events
        Events --> BigQuery
        BigQuery --> Dashboards
    end

    ModelDev --> Registry
    Registry --> Approval
    Approval --> Deployment
    Deployment --> ProdMonitor
    ProdMonitor --> Audit`}
        />
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
