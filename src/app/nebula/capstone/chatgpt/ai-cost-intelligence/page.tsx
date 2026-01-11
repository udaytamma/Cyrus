"use client";

/**
 * ChatGPT Project 2: Enterprise AI Cost Intelligence
 * Platform TPM focus - FinOps, Cost Optimization, AI Infrastructure
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

function ProjectContent() {
  return (
    <div className="max-w-[900px] mx-auto">
      <Link
        href="/nebula/capstone/chatgpt"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to ChatGPT Projects
      </Link>

      <ProjectHeader
        title="Enterprise AI Cost Intelligence Platform"
        tags={[
          { label: "Enterprise SaaS", type: "enterprise" },
          { label: "Platform TPM", type: "infra" },
          { label: "AI/ML", type: "ai" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Enterprise AI Cost Intelligence Platform is a centralized FinOps solution for tracking,
            analyzing, and optimizing AI/ML infrastructure spend across cloud providers and on-premises
            resources. As organizations scale AI workloads, costs can spiral unpredictably - a single
            misconfigured training job can burn $50k in GPU hours overnight.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Platform TPM capabilities</strong> by building a financial
            observability layer that provides real-time cost attribution, anomaly detection, optimization
            recommendations, and forecasting for AI infrastructure investments.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Problem Statement & Solution
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>AI/ML infrastructure costs growing 300% YoY with limited visibility into spend drivers</li>
            <li>No unified view across GCP (Vertex AI), AWS (SageMaker), Azure (ML Studio), on-prem GPU clusters</li>
            <li>Teams unaware of cost implications: running V100 GPUs 24/7 for experiments that need 2 hours</li>
            <li>Zombie resources: 40% of provisioned AI infrastructure idle or under-utilized (&lt;20% utilization)</li>
            <li>Finance teams lack granular attribution: which product/team/experiment drove $2M spike last quarter?</li>
            <li>No predictive budgeting: AI projects routinely exceed allocated budgets by 2-3x</li>
          </ul>

          <p><strong className="text-foreground">Solution Architecture:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Unified Cost Aggregation:</strong> Ingest billing data from GCP Cloud Billing, AWS Cost Explorer, Azure Cost Management, on-prem tracking</li>
            <li><strong className="text-foreground">Granular Attribution:</strong> Tag-based allocation to cost centers, teams, projects, experiments (using labels/tags on resources)</li>
            <li><strong className="text-foreground">Real-Time Anomaly Detection:</strong> ML-based detection of cost spikes, runaway jobs, and unusual spend patterns</li>
            <li><strong className="text-foreground">Optimization Engine:</strong> Identify idle resources, recommend rightsizing (A100 → T4 for inference), spot instance opportunities</li>
            <li><strong className="text-foreground">Forecasting & Budgeting:</strong> Time-series ML models to predict monthly spend with 95% confidence intervals</li>
            <li><strong className="text-foreground">Executive Dashboards:</strong> Looker dashboards for CFO/VPs showing trend lines, budget burn rate, ROI metrics</li>
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
                <th className="text-left py-3 px-4 font-semibold text-foreground">Baseline</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Cost Visibility</td>
                <td className="py-3 px-4">60% unattributed</td>
                <td className="py-3 px-4 font-semibold text-primary">100% attribution</td>
                <td className="py-3 px-4">All AI spend tagged to cost center/project</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Infrastructure Waste Reduction</td>
                <td className="py-3 px-4">40% idle resources</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;10% idle</td>
                <td className="py-3 px-4">Avg resource utilization over 30 days</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Cost Optimization Savings</td>
                <td className="py-3 px-4">$0/month</td>
                <td className="py-3 px-4 font-semibold text-primary">$500k/month</td>
                <td className="py-3 px-4">Documented savings from rightsizing, spot, terminations</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Anomaly Detection Speed</td>
                <td className="py-3 px-4">72 hours</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;15 minutes</td>
                <td className="py-3 px-4">Time from cost spike to alert notification</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Budget Forecast Accuracy</td>
                <td className="py-3 px-4">N/A</td>
                <td className="py-3 px-4 font-semibold text-primary">±5% variance</td>
                <td className="py-3 px-4">Predicted vs. actual monthly spend</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Team Adoption</td>
                <td className="py-3 px-4">0%</td>
                <td className="py-3 px-4 font-semibold text-primary">90%+ of ML teams</td>
                <td className="py-3 px-4">Teams actively using dashboards weekly</td>
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
            { title: "Data Ingestion", items: ["Cloud Billing API", "AWS Cost Explorer API", "Azure Cost Mgmt API", "Pub/Sub"] },
            { title: "Data Warehouse", items: ["BigQuery", "Dataflow", "Cloud Storage"] },
            { title: "Analytics & ML", items: ["Vertex AI", "BigQuery ML", "AutoML Tables"] },
            { title: "Visualization", items: ["Looker", "Data Studio", "Grafana"] },
            { title: "Automation", items: ["Cloud Functions", "Cloud Scheduler", "Workflows"] },
            { title: "Alerting", items: ["Cloud Monitoring", "PagerDuty", "Slack API"] },
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
          System Architecture
        </h2>
        <div className="bg-muted/30 p-4 rounded-lg overflow-x-auto">
          <MermaidDiagram
            chart={`%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e0e7ff', 'primaryTextColor': '#1e1b4b', 'primaryBorderColor': '#6366f1', 'lineColor': '#6366f1', 'secondaryColor': '#fef3c7', 'tertiaryColor': '#d1fae5' }}}%%
flowchart TB
    subgraph SOURCES["DATA SOURCE LAYER"]
        direction LR
        GCP["GCP Billing<br/>Export to BQ<br/><i>Daily exports</i>"]
        AWS["AWS Billing<br/>Cost Explorer<br/><i>Hourly API poll</i>"]
        Azure["Azure Billing<br/>Cost Mgmt<br/><i>Daily API poll</i>"]
        OnPrem["On-Prem GPU<br/>Usage Tracker<br/><i>Hourly push</i>"]
    end

    subgraph INGEST["INGESTION LAYER"]
        CFAws["Cloud Functions<br/>(AWS Ingestion)"]
        CFAzure["Cloud Functions<br/>(Azure Ingest)"]
        PubSub["Pub/Sub<br/>Cost Events<br/><i>Real-time resource events</i>"]
    end

    subgraph PROCESS["PROCESSING"]
        Dataflow["Dataflow Pipeline<br/>Normalization<br/>Enrichment<br/>Tag validation<br/>Cost allocation"]
    end

    subgraph DW["DATA WAREHOUSE"]
        BigQuery["BigQuery<br/>raw_billing_events<br/>normalized_costs<br/>cost_attribution<br/>resource_metadata<br/><i>Partitioned by date</i>"]
    end

    subgraph ML["INTELLIGENCE LAYER"]
        direction LR
        Anomaly["ANOMALY DETECTION<br/>(Vertex AI)<br/>Isolation Forest<br/>Z-score, Changepoint<br/><i>Spend spikes, Budget breach</i>"]
        Forecast["FORECASTING ENGINE<br/>(BigQuery ML)<br/>ARIMA_PLUS<br/>Next 30 days<br/><i>Budget alerts</i>"]
        Optimize["OPTIMIZATION ENGINE<br/>(SQL + Rules)<br/>Idle VMs, Oversized<br/>Spot eligible<br/><i>Savings calculation</i>"]
    end

    subgraph ALERT["ALERTING ENGINE"]
        AlertEngine["Cloud Monitoring + PagerDuty<br/>P0: Spend over 50k<br/>P1: Budget at 80%<br/>P2: Idle over 7 days<br/><i>Slack, Email, PagerDuty</i>"]
    end

    subgraph DASH["DASHBOARDS"]
        direction LR
        Looker["LOOKER<br/>Cost Explorer<br/>By product/team<br/>Trend charts<br/>Drill-downs"]
        Exec["EXEC DASHBOARDS<br/>Data Studio<br/>For CFO, VPs<br/>Total AI spend<br/>MoM growth"]
        Team["TEAM PORTALS<br/>Self-Service<br/>Your spend<br/>Optimization opps<br/>Actions"]
    end

    subgraph AUTO["AUTOMATION LAYER"]
        Scheduler["Cloud Scheduler + Functions<br/>Auto-terminate idle VMs<br/>Snapshot old disks<br/>Rightsizing recs<br/>Weekly summaries"]
    end

    GCP --> PubSub
    AWS --> CFAws
    Azure --> CFAzure
    OnPrem --> PubSub
    CFAws --> PubSub
    CFAzure --> PubSub
    PubSub --> Dataflow
    Dataflow --> BigQuery
    BigQuery --> Anomaly
    BigQuery --> Forecast
    BigQuery --> Optimize
    Anomaly --> AlertEngine
    Forecast --> AlertEngine
    Optimize --> AlertEngine
    AlertEngine --> Looker
    AlertEngine --> Exec
    AlertEngine --> Team
    AlertEngine --> Scheduler

    style SOURCES fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style INGEST fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style PROCESS fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style DW fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style ML fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style ALERT fill:#fee2e2,stroke:#ef4444,stroke-width:2px
    style DASH fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style AUTO fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
`}
            className="min-h-[400px]"
          />
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
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Key Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Success Criteria</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: GCP Foundation</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">GCP billing export to BigQuery, basic cost attribution, Looker dashboard</td>
                <td className="py-3 px-4">100% GCP spend attributed to teams</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Multi-Cloud</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">AWS & Azure billing ingestion, unified schema, cross-cloud dashboards</td>
                <td className="py-3 px-4">Single pane of glass for all cloud spend</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Intelligence</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Anomaly detection models, forecasting, real-time alerts</td>
                <td className="py-3 px-4">Detect cost spikes within 15 minutes</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Optimization</td>
                <td className="py-3 px-4">5 weeks</td>
                <td className="py-3 px-4">Idle resource detection, rightsizing recommendations, savings tracking</td>
                <td className="py-3 px-4">$500k/month documented savings</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Automation</td>
                <td className="py-3 px-4">3 weeks</td>
                <td className="py-3 px-4">Auto-termination of idle resources, scheduled reports, self-service portal</td>
                <td className="py-3 px-4">90% team adoption, &lt;10% idle resources</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Mitigation */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Risks & Mitigation Strategies
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Severity</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Incomplete cost attribution due to missing/incorrect tags</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">Policy enforcement for mandatory tags; default "untagged" bucket; automated tagging for known patterns</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Teams resist automated resource termination</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">7-day grace period with email warnings; opt-out for critical resources; audit trail for all actions</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Billing API rate limits during data ingestion</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Exponential backoff with jitter; daily batch processing instead of real-time; caching layer</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">False positive anomalies causing alert fatigue</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Tunable thresholds per team; smart grouping of related alerts; user feedback loop for model improvement</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Forecast accuracy degraded by sudden workload changes</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">Low</span>
                </td>
                <td className="py-3 px-4">Ensemble models (ARIMA + ML); seasonal decomposition; manual override capability for known events</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Compliance concerns with cross-cloud data aggregation</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">Low</span>
                </td>
                <td className="py-3 px-4">Data residency controls; encryption at rest/transit; audit logs; privacy review with legal team</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>FinOps team for cost center taxonomy and tagging standards</li>
            <li>Cloud Platform teams (GCP, AWS, Azure) for billing API access and quotas</li>
            <li>Finance/Accounting for budget data and approval workflows</li>
            <li>Engineering leadership for adoption mandates and policy enforcement</li>
            <li>Data Engineering for BigQuery capacity planning and query optimization</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Alignment with TPM Career Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { text: "Platform Thinking: Build once, serve all teams - classic platform TPM problem space" },
            { text: "Executive Visibility: CFO/VP-level impact with clear ROI story ($500k/month savings)" },
            { text: "Multi-Cloud Expertise: Navigate GCP, AWS, Azure billing systems and APIs" },
            { text: "ML in Production: Apply ML to FinOps (anomaly detection, forecasting, optimization)" },
            { text: "Data Pipeline Mastery: BigQuery, Dataflow, Pub/Sub at scale" },
            { text: "Cross-Functional Leadership: Align FinOps, Engineering, Finance, and Executive stakeholders" },
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
          href="/nebula/capstone/chatgpt/telecom-network-ops"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Previous: Network Ops Platform
        </Link>
        <Link
          href="/nebula/capstone/chatgpt/consumer-ai-assistant"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Consumer AI Assistant →
        </Link>
      </div>
    </div>
  );
}

export default function AICostIntelligencePage() {
  return (
    <CapstoneLayout
      title="Enterprise AI Cost Intelligence"
      description="ChatGPT Project 2: FinOps platform for AI/ML infrastructure cost optimization"
      currentProjectId="chatgpt/ai-cost-intelligence"
      currentLLM="chatgpt"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
