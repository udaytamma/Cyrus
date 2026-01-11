"use client";

/**
 * ChatGPT Project 1: Telecom AI Network Ops Platform
 * AI/ML TPM focus - Network Operations, Predictive Analytics, Automation
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
        title="Telecom AI Network Ops Platform"
        tags={[
          { label: "Telecom", type: "telecom" },
          { label: "AI/ML TPM", type: "ai" },
          { label: "Infrastructure", type: "infra" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Telecom AI Network Ops Platform is an intelligent network monitoring and automated incident
            response system designed for telecom infrastructure at scale. It leverages machine learning to
            predict network failures before they impact customers, optimize resource allocation across cell
            towers and core networks, and automate incident response workflows.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">AI/ML TPM capabilities</strong> by building a production-grade
            AI system that directly impacts network reliability, reduces operational costs, and improves
            customer experience through proactive network management.
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
            <li>Network Operations Centers (NOCs) drowning in alerts with 80%+ false positive rate</li>
            <li>Reactive incident response leads to customer-impacting outages (avg 45min MTTR)</li>
            <li>Manual capacity planning causes over-provisioning (30% unused capacity) or under-provisioning (service degradation)</li>
            <li>Lack of predictive intelligence - failures detected only after customer impact</li>
            <li>Fragmented monitoring tools across RAN, core, and transport layers</li>
          </ul>

          <p><strong className="text-foreground">Solution Architecture:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Anomaly Detection Engine:</strong> ML models trained on network KPIs (latency, throughput, error rates) to predict failures 15-30 minutes before occurrence</li>
            <li><strong className="text-foreground">Automated Remediation:</strong> Playbook-driven automation for common issues (cell tower failover, traffic rerouting, capacity scaling)</li>
            <li><strong className="text-foreground">Intelligent Alert Routing:</strong> NLP-based alert classification and priority scoring to reduce alert fatigue by 70%</li>
            <li><strong className="text-foreground">Capacity Forecasting:</strong> Time-series forecasting for network capacity planning (hourly, daily, seasonal patterns)</li>
            <li><strong className="text-foreground">Root Cause Analysis:</strong> Graph neural networks to identify failure propagation across network topology</li>
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
                <td className="py-3 px-4">Mean Time to Repair (MTTR)</td>
                <td className="py-3 px-4">45 minutes</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;15 minutes</td>
                <td className="py-3 px-4">Incident ticketing system timestamps</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Proactive Incident Prevention</td>
                <td className="py-3 px-4">5%</td>
                <td className="py-3 px-4 font-semibold text-primary">60%+</td>
                <td className="py-3 px-4">Incidents resolved before customer impact</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Alert False Positive Rate</td>
                <td className="py-3 px-4">82%</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;20%</td>
                <td className="py-3 px-4">NOC analyst feedback on alert quality</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Network Availability (SLA)</td>
                <td className="py-3 px-4">99.8%</td>
                <td className="py-3 px-4 font-semibold text-primary">99.95%+</td>
                <td className="py-3 px-4">Customer-impacting downtime monitoring</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Capacity Utilization Efficiency</td>
                <td className="py-3 px-4">70%</td>
                <td className="py-3 px-4 font-semibold text-primary">85-90%</td>
                <td className="py-3 px-4">Resource allocation vs. actual usage</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Operational Cost Reduction</td>
                <td className="py-3 px-4">Baseline</td>
                <td className="py-3 px-4 font-semibold text-primary">25% reduction</td>
                <td className="py-3 px-4">Manual intervention hours saved</td>
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
            { title: "AI/ML Platform", items: ["Vertex AI", "AutoML Tables", "TensorFlow", "PyTorch"] },
            { title: "Data Infrastructure", items: ["BigQuery", "Pub/Sub", "Dataflow", "Cloud Storage"] },
            { title: "Monitoring & Observability", items: ["Cloud Monitoring", "Prometheus", "Grafana", "OpenTelemetry"] },
            { title: "Automation & Orchestration", items: ["Cloud Functions", "Cloud Run", "Workflows"] },
            { title: "Network Integration", items: ["SNMP Collectors", "NetFlow", "REST APIs"] },
            { title: "Analytics & Reporting", items: ["Looker", "Data Studio"] },
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
    subgraph SOURCES["DATA INGESTION LAYER"]
        direction LR
        Cell["Cell Towers<br/>(5G/4G RAN)<br/><i>SNMP/NetFlow</i>"]
        Core["Core Network<br/>(EPC/5GC)<br/><i>gRPC Telemetry</i>"]
        Transport["Transport Network<br/>(MPLS/SDN)<br/><i>NETCONF/YANG</i>"]
        CX["Customer Experience<br/>Metrics<br/><i>App APIs</i>"]
    end

    subgraph STREAM["STREAMING LAYER"]
        PubSub["Pub/Sub Topics<br/>(Streaming Data)<br/><i>100k+ msgs/sec</i>"]
    end

    subgraph PROCESS["DATAFLOW PROCESSING"]
        direction LR
        DFReal["Dataflow<br/>(Real-time)<br/>Windowing<br/>Dedup"]
        DFAgg["Dataflow<br/>(Aggregation)<br/>1min/5min/1hr rollups"]
        DFEnrich["Dataflow<br/>(Enrichment)<br/>Topology<br/>Geo mapping"]
    end

    subgraph DW["DATA WAREHOUSE"]
        BigQuery["BigQuery<br/>Raw telemetry<br/>Aggregated KPIs<br/>Historical data<br/><i>90 days retention</i>"]
    end

    subgraph ML["ML INTELLIGENCE LAYER"]
        direction LR
        Anomaly["ANOMALY DETECTION<br/>(Vertex AI)<br/>Isolation Forest<br/>Autoencoders<br/>LSTM-VAE<br/><i>Latency, Packet loss</i>"]
        Forecast["FORECASTING<br/>(Time Series ML)<br/>ARIMA/SARIMA<br/>Prophet, LSTM<br/><i>1hr to 7 days</i>"]
        RCA["ROOT CAUSE<br/>ANALYSIS<br/>(Graph Neural Net)<br/>Topology graph<br/>Failure cascade<br/><i>Blast radius</i>"]
    end

    subgraph DECISION["DECISION ENGINE"]
        Engine["Alert Scoring<br/>Confidence: 0-1<br/>Urgency: P0-P4<br/>Business impact<br/><i>Playbook Matching</i>"]
    end

    subgraph OUTPUT["OUTPUT LAYER"]
        direction LR
        Auto["AUTOMATION<br/>(Cloud Functions)<br/>Traffic route<br/>Cell failover<br/>Scale nodes"]
        Ticket["TICKETING<br/>ServiceNow<br/>Jira<br/>PagerDuty<br/><i>Priority escalation</i>"]
        Dash["DASHBOARDS<br/>Grafana, Looker<br/>NOC Console<br/>Exec Summary<br/><i>Regional maps</i>"]
    end

    subgraph FEEDBACK["FEEDBACK LOOP"]
        Retrain["Vertex AI Pipelines<br/>Outcome tracking<br/>Daily retraining<br/><i>Past 30 days data</i>"]
    end

    Cell --> PubSub
    Core --> PubSub
    Transport --> PubSub
    CX --> PubSub
    PubSub --> DFReal
    PubSub --> DFAgg
    PubSub --> DFEnrich
    DFReal --> BigQuery
    DFAgg --> BigQuery
    DFEnrich --> BigQuery
    BigQuery --> Anomaly
    BigQuery --> Forecast
    BigQuery --> RCA
    Anomaly --> Engine
    Forecast --> Engine
    RCA --> Engine
    Engine --> Auto
    Engine --> Ticket
    Engine --> Dash
    Auto --> Retrain
    Ticket --> Retrain
    Retrain --> BigQuery

    style SOURCES fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style STREAM fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style PROCESS fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style DW fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style ML fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style DECISION fill:#fee2e2,stroke:#ef4444,stroke-width:2px
    style OUTPUT fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style FEEDBACK fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
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
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Foundation</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Data ingestion pipelines, BigQuery schema, baseline monitoring dashboards</td>
                <td className="py-3 px-4">Ingesting 100k msgs/sec with &lt;5s latency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: ML Models</td>
                <td className="py-3 px-4">8 weeks</td>
                <td className="py-3 px-4">Anomaly detection models trained on historical data, prediction API</td>
                <td className="py-3 px-4">70% accuracy in detecting anomalies 15min ahead</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Automation</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Automated remediation playbooks for top 10 incident types</td>
                <td className="py-3 px-4">50% of P2/P3 incidents auto-resolved</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Advanced Analytics</td>
                <td className="py-3 px-4">8 weeks</td>
                <td className="py-3 px-4">Root cause analysis, capacity forecasting, NLP alert classification</td>
                <td className="py-3 px-4">MTTR &lt;15min, 85% capacity utilization</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Scale & Optimization</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Multi-region deployment, model optimization, cost tuning</td>
                <td className="py-3 px-4">99.95% platform availability</td>
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
                <td className="py-3 px-4">ML model false positives causing unnecessary network changes</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">Human-in-the-loop for P0/P1 incidents; gradual confidence threshold increase from 0.7 to 0.95 over 3 months</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Data quality issues from heterogeneous network equipment</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">Robust data validation pipelines; vendor-specific parsers; data profiling dashboards</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Automated actions causing cascading failures</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">Rate limiting (max 5 actions/min); blast radius analysis before execution; kill switch for automation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">NOC operator resistance to AI-driven decisions</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Explainable AI (SHAP values); shadow mode for 1 month; operator training program</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Real-time processing latency exceeding SLA</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Multi-region Dataflow deployment; autoscaling policies; edge processing for critical paths</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Model drift as network topology evolves</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Continuous monitoring of model performance; automated retraining pipelines; A/B testing framework</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Compliance/audit requirements for AI decisions</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">Low</span>
                </td>
                <td className="py-3 px-4">Comprehensive audit logs in BigQuery (who/what/when/why); model versioning; decision provenance tracking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Network Engineering team for topology data and automation approval</li>
            <li>NOC operators for playbook validation and feedback loops</li>
            <li>Data Engineering for Pub/Sub quota increases and BigQuery partitioning strategy</li>
            <li>InfoSec for network access credentials and secret management</li>
            <li>Vendor partnerships (Ericsson, Nokia, Cisco) for API access and data formats</li>
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
            { text: "Telecom Domain Expertise: Deep dive into RAN, core network, and transport layer operations" },
            { text: "Production AI/ML at Scale: Real-time ML inference on 100k+ events/sec with sub-second latency requirements" },
            { text: "Business Impact: Direct P&L impact through reduced MTTR, improved SLA, and operational cost savings" },
            { text: "Cross-Functional Leadership: Coordinate with Network Ops, NOC, Data Engineering, ML Engineering, and Vendor teams" },
            { text: "GCP Platform Mastery: Vertex AI, BigQuery, Pub/Sub, Dataflow, Cloud Monitoring - full stack" },
            { text: "Operational Excellence: Demonstrates understanding of SLAs, incident management, and 24/7 production systems" },
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
          href="/nebula/capstone/chatgpt"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Back to ChatGPT Projects
        </Link>
        <Link
          href="/nebula/capstone/chatgpt/ai-cost-intelligence"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: AI Cost Intelligence →
        </Link>
      </div>
    </div>
  );
}

export default function TelecomNetworkOpsPage() {
  return (
    <CapstoneLayout
      title="Telecom AI Network Ops Platform"
      description="ChatGPT Project 1: AI-powered network monitoring and automated incident response"
      currentProjectId="chatgpt/telecom-network-ops"
      currentLLM="chatgpt"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
