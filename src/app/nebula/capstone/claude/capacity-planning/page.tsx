"use client";

/**
 * Claude Project 1: Intelligent Capacity Planning System
 * AI-powered infrastructure capacity forecasting for telecom networks
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
        title="Intelligent Capacity Planning System"
        tags={[
          { label: "Infrastructure", type: "infra" },
          { label: "AI/ML", type: "ai" },
          { label: "Platform TPM", type: "enterprise" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Intelligent Capacity Planning System is an AI-powered forecasting platform that predicts
            infrastructure resource needs for telecom networks and cloud systems. By analyzing historical
            usage patterns, traffic trends, and business growth signals, the system prevents costly outages
            due to capacity bottlenecks while optimizing capital expenditure on infrastructure.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Platform TPM expertise</strong> by combining ML-based demand
            prediction with automated infrastructure provisioning, enabling proactive capacity management
            at enterprise scale. The system reduces overprovisioning waste by 35% while maintaining 99.99%
            service availability.
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
            <li>Network capacity planning relies on manual analysis and conservative overprovisioning</li>
            <li>Sudden traffic spikes (sports events, disasters) cause outages due to insufficient capacity</li>
            <li>Capital expenditure decisions lack data-driven justification, leading to budget overruns</li>
            <li>Multi-region deployments require coordinated capacity scaling across distributed systems</li>
            <li>Legacy systems provide no visibility into future capacity constraints</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Demand Forecasting Engine:</strong> Time-series ML models (Prophet, LSTM) predicting traffic demand 3-12 months ahead</li>
            <li><strong className="text-foreground">Anomaly Detection:</strong> Identifies unusual usage patterns requiring capacity intervention</li>
            <li><strong className="text-foreground">Multi-Dimensional Analysis:</strong> Forecasts across regions, services, customer segments, and network elements</li>
            <li><strong className="text-foreground">Automated Recommendations:</strong> Generates capacity expansion proposals with ROI analysis</li>
            <li><strong className="text-foreground">Integration with Provisioning:</strong> Triggers automated infrastructure scaling via Terraform/Cloud APIs</li>
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
                <td className="py-3 px-4">Forecast Accuracy</td>
                <td className="py-3 px-4 font-semibold text-primary">&gt;90% MAPE</td>
                <td className="py-3 px-4">Mean Absolute Percentage Error on 30-day forecasts</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Cost Optimization</td>
                <td className="py-3 px-4 font-semibold text-primary">35% reduction</td>
                <td className="py-3 px-4">Decreased overprovisioning vs. actual utilization</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Outage Prevention</td>
                <td className="py-3 px-4 font-semibold text-primary">Zero capacity incidents</td>
                <td className="py-3 px-4">Capacity headroom maintained above 15% threshold</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Planning Efficiency</td>
                <td className="py-3 px-4 font-semibold text-primary">80% time savings</td>
                <td className="py-3 px-4">Manual analysis hours reduced from 40h to 8h/month</td>
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
            { title: "ML Platform", items: ["Vertex AI", "Prophet", "TensorFlow"] },
            { title: "Data Pipeline", items: ["BigQuery", "Pub/Sub", "Dataflow"] },
            { title: "Orchestration", items: ["Cloud Scheduler", "Workflows", "Cloud Functions"] },
            { title: "Provisioning", items: ["Terraform", "GKE Autopilot", "Compute Engine"] },
            { title: "Visualization", items: ["Looker Studio", "Cloud Monitoring"] },
            { title: "Data Sources", items: ["Network Telemetry", "Cloud Metrics API"] },
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
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs leading-relaxed font-mono">
{`┌───────────────────────────────────────────────────────────────────────────┐
│              INTELLIGENT CAPACITY PLANNING SYSTEM                         │
└───────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────── DATA INGESTION ─────────────────────────────┐
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐                 │
│  │  Network     │   │  Cloud       │   │  Business    │                 │
│  │  Telemetry   │   │  Metrics API │   │  Events      │                 │
│  └──────┬───────┘   └──────┬───────┘   └──────┬───────┘                 │
│         └──────────────────┴──────────────────┘                          │
│                            │                                              │
│                   ┌─────────────────┐                                     │
│                   │   Pub/Sub       │◄──── Real-time streaming            │
│                   └────────┬────────┘                                     │
└────────────────────────────┼─────────────────────────────────────────────┘
                             ▼
┌─────────────────────── PROCESSING LAYER ─────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────────┐      │
│  │              Dataflow Pipeline (Apache Beam)                  │      │
│  └────────────────────────────┬──────────────────────────────────┘      │
│                   ┌─────────────────────┐                                │
│                   │   BigQuery          │                                │
│                   └─────────┬───────────┘                                │
└─────────────────────────────┼────────────────────────────────────────────┘
                              ▼
┌──────────────────────── ML FORECASTING ──────────────────────────────────┐
│  ┌────────────────────────────────────────────────────────────────┐     │
│  │           Vertex AI Training Pipeline                          │     │
│  │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐          │     │
│  │  │   Prophet   │   │   LSTM      │   │   XGBoost   │          │     │
│  │  └──────┬──────┘   └──────┬──────┘   └──────┬──────┘          │     │
│  │         └─────────────────┴─────────────────┘                  │     │
│  │                      ┌────────▼───────┐                        │     │
│  │                      │ Model Registry │                        │     │
│  │                      └────────┬───────┘                        │     │
│  └──────────────────────────────┼─────────────────────────────────┘     │
└─────────────────────────────────┼────────────────────────────────────────┘
                                  ▼
┌────────────────────── DECISION ENGINE ───────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────────┐       │
│  │            Capacity Recommendation Engine                    │       │
│  │  ┌─────────────────┐         ┌─────────────────┐            │       │
│  │  │  Threshold      │────────▶│  Cost Optimizer │            │       │
│  │  │  Analysis       │         │  (ROI Model)    │            │       │
│  │  └─────────────────┘         └─────────────────┘            │       │
│  │              ┌─────────────────────┐                         │       │
│  │              │ Recommendation API  │                         │       │
│  │              └──────────┬──────────┘                         │       │
│  └─────────────────────────┼────────────────────────────────────┘       │
└────────────────────────────┼─────────────────────────────────────────────┘
               ┌─────────────┴─────────────┐
               ▼                           ▼
┌──────────────────────────┐   ┌──────────────────────────┐
│   Looker Studio          │   │   Terraform              │
│   Dashboards             │   │   Provisioning           │
└──────────────────────────┘   └──────────────────────────┘`}
        </pre>
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
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Data Foundation</td>
                <td className="py-3 px-4">BigQuery data warehouse, ingestion pipelines, time-series aggregations</td>
                <td className="py-3 px-4">3 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: ML Modeling</td>
                <td className="py-3 px-4">Prophet baseline model, LSTM for complex patterns, backtesting framework</td>
                <td className="py-3 px-4">4 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Decision Engine</td>
                <td className="py-3 px-4">Threshold analysis logic, cost optimization models, recommendation API</td>
                <td className="py-3 px-4">3 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Automation</td>
                <td className="py-3 px-4">Terraform provisioning integration, auto-scaling rules, rollback mechanisms</td>
                <td className="py-3 px-4">2 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Mitigation */}
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
                <td className="py-3 px-4">Model accuracy degrades during black swan events</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-red-500/20 text-red-600 dark:text-red-400 rounded text-xs font-semibold">High</span>
                </td>
                <td className="py-3 px-4">Manual override capability, ensemble models with anomaly detection</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Infrastructure vendor lead times delay capacity expansion</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded text-xs font-semibold">Medium</span>
                </td>
                <td className="py-3 px-4">12-week forecast horizon, strategic buffer inventory</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Telemetry data quality issues</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded text-xs font-semibold">Medium</span>
                </td>
                <td className="py-3 px-4">Data validation pipeline with alerting, multi-source corroboration</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Cost overruns from over-aggressive auto-scaling</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-xs font-semibold">Low</span>
                </td>
                <td className="py-3 px-4">Spending limits per region/service, approval workflows</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Network Operations team for telemetry data access (SNMP/NetFlow)</li>
            <li>Finance/CapEx team for budget approval processes and cost attribution</li>
            <li>Infrastructure Engineering for Terraform automation integration</li>
            <li>Data Platform team for BigQuery provisioning and data governance policies</li>
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
            { text: "Infrastructure at Scale: Demonstrates expertise in managing telecom/cloud infrastructure planning for enterprise systems" },
            { text: "AI/ML Platform: Shows ability to build production ML systems solving real business problems (cost optimization, reliability)" },
            { text: "Cross-Functional Leadership: Requires alignment across Network Ops, Finance, Infrastructure, and Data Platform teams" },
            { text: "GCP Expertise: Deep use of Vertex AI, BigQuery, Pub/Sub, Dataflow - core GCP services for ML platform engineering" },
            { text: "Financial Impact: Clear ROI story (35% cost reduction, zero outages) that resonates with executive stakeholders" },
            { text: "Telecom Relevance: Directly applicable to network capacity planning challenges in telecom industry" },
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
          href="/nebula/capstone/claude"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Back to Claude Projects
        </Link>
        <Link
          href="/nebula/capstone/claude/journey-orchestration"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Journey Orchestration →
        </Link>
      </div>
    </div>
  );
}

export default function CapacityPlanningPage() {
  return (
    <CapstoneLayout
      title="Intelligent Capacity Planning System"
      description="Claude Project 1: AI-powered infrastructure capacity forecasting"
      currentProjectId="claude/capacity-planning"
      currentLLM="claude"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
