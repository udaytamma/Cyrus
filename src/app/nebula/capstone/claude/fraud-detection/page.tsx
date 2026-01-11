"use client";

/**
 * Claude Project 3: Real-time Fraud Detection Platform
 * Streaming ML pipeline for detecting fraudulent transactions with explainability
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
        title="Real-time Fraud Detection Platform"
        tags={[
          { label: "Enterprise", type: "enterprise" },
          { label: "AI/ML TPM", type: "ai" },
          { label: "Trust & Safety", type: "infra" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Real-time Fraud Detection Platform is a streaming analytics system that identifies
            fraudulent transactions across payment processing, account creation, and user activity.
            By combining ensemble ML models (XGBoost, neural networks), graph-based relationship analysis,
            and behavioral anomaly detection, the system flags suspicious activity within milliseconds
            while providing explainability for manual review.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">AI/ML TPM expertise</strong> by building a production-grade
            fraud prevention system that balances precision (minimizing false positives that frustrate
            legitimate customers) with recall (catching actual fraud). The system processes 10M+
            transactions daily with 95% fraud detection accuracy and sub-200ms latency.
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
            <li>Manual fraud review processes cannot scale with transaction volume growth</li>
            <li>Rule-based fraud detection (e.g., "amount &gt; $500") generates excessive false positives</li>
            <li>Sophisticated fraud rings use coordinated attacks across multiple accounts</li>
            <li>Fraud analysts lack context on why transactions were flagged for review</li>
            <li>Batch processing delays fraud detection by 6-24 hours, allowing losses to compound</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Streaming ML Pipeline:</strong> Dataflow processes transaction events in real-time with feature engineering</li>
            <li><strong className="text-foreground">Ensemble Models:</strong> Combines XGBoost (tabular features), LSTM (sequence patterns), and graph neural networks (relationship fraud)</li>
            <li><strong className="text-foreground">Explainable AI:</strong> SHAP values and feature importance highlighting why transactions were flagged</li>
            <li><strong className="text-foreground">Adaptive Thresholds:</strong> Dynamic risk scoring adjusting to fraud patterns (holiday season, geographic trends)</li>
            <li><strong className="text-foreground">Human-in-the-Loop:</strong> Fraud analyst review queue with feedback loop for model retraining</li>
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
                <td className="py-3 px-4">Fraud Detection Rate</td>
                <td className="py-3 px-4 font-semibold text-primary">&gt;95% recall</td>
                <td className="py-3 px-4">Percentage of actual fraud cases caught by the system</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">False Positive Rate</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;2%</td>
                <td className="py-3 px-4">Legitimate transactions incorrectly flagged as fraud</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Detection Latency</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;200ms P99</td>
                <td className="py-3 px-4">Transaction submission to fraud score generation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Fraud Losses Prevented</td>
                <td className="py-3 px-4 font-semibold text-primary">$5M annually</td>
                <td className="py-3 px-4">Estimated financial loss prevented vs. baseline</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Analyst Productivity</td>
                <td className="py-3 px-4 font-semibold text-primary">3x improvement</td>
                <td className="py-3 px-4">Cases reviewed per analyst-hour with explainability tools</td>
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
            { title: "Stream Processing", items: ["Dataflow", "Pub/Sub", "Apache Beam"] },
            { title: "ML Platform", items: ["Vertex AI", "BigQuery ML", "TensorFlow"] },
            { title: "Data Storage", items: ["BigQuery", "Bigtable", "Cloud Storage"] },
            { title: "Graph Analysis", items: ["Neo4j", "Graph Neural Networks"] },
            { title: "Explainability", items: ["SHAP", "Vertex AI Explainable AI"] },
            { title: "Monitoring", items: ["Cloud Monitoring", "Looker Studio", "Error Reporting"] },
          ].map((category) => (
            <div key={category.title} className="p-4 bg-muted/30 rounded-lg">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {category.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs"
                  >
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
        <div className="overflow-x-auto">
          <MermaidDiagram
            chart={`%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e0e7ff', 'primaryBorderColor': '#6366f1', 'secondaryColor': '#fef3c7', 'tertiaryColor': '#d1fae5', 'lineColor': '#6366f1', 'textColor': '#1f2937' }}}%%
flowchart TB
    subgraph SOURCES["TRANSACTION SOURCES"]
        direction LR
        PG[Payment Gateway]
        AC[Account Creation]
        LE[Login Events]
        API[API Calls]
    end

    PS[Pub/Sub Events Topic<br/>~10M events/day]

    subgraph STREAM["STREAM PROCESSING"]
        direction TB
        subgraph DF["Dataflow Pipeline - Apache Beam"]
            direction LR
            EV[Event Validation]
            FE[Feature Engineering]
            EN[Enrichment<br/>Historical]
            EV --> FE --> EN
        end
    end

    subgraph ML["ML INFERENCE"]
        direction TB
        subgraph ENSEMBLE["Ensemble Fraud Scoring Engine - Vertex AI"]
            direction TB
            subgraph MODELS["Models"]
                direction LR
                M1[XGBoost<br/>Tabular Features<br/>Risk Score 0-1]
                M2[LSTM<br/>Sequences<br/>Anomaly Score]
                M3[Graph NN<br/>Relationships<br/>Graph Risk]
            end
            EW[Ensemble Weighted<br/>Final Score 0-1]
        end
        SHAP[Explainability Layer<br/>SHAP Values<br/>Top 5 contributing features]
        MODELS --> EW
        EW --> SHAP
    end

    subgraph DECISION["DECISION ENGINE"]
        direction LR
        APPROVE[Score 0.0-0.3<br/>Auto-Approve<br/>95% of txns]
        REVIEW[Score 0.3-0.7<br/>Manual Review Queue]
        BLOCK[Score 0.7-1.0<br/>Auto-Block + Alert]
    end

    PG & AC & LE & API --> PS
    PS --> STREAM
    STREAM --> ML
    ML --> DECISION

    style SOURCES fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style PS fill:#e0e7ff,stroke:#6366f1
    style STREAM fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style DF fill:#fef3c7,stroke:#f59e0b
    style ML fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style ENSEMBLE fill:#d1fae5,stroke:#10b981
    style MODELS fill:#d1fae5,stroke:#10b981
    style DECISION fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style PG fill:#fff,stroke:#6366f1
    style AC fill:#fff,stroke:#6366f1
    style LE fill:#fff,stroke:#6366f1
    style API fill:#fff,stroke:#6366f1
    style EV fill:#fff,stroke:#f59e0b
    style FE fill:#fff,stroke:#f59e0b
    style EN fill:#fff,stroke:#f59e0b
    style M1 fill:#fff,stroke:#10b981
    style M2 fill:#fff,stroke:#10b981
    style M3 fill:#fff,stroke:#10b981
    style EW fill:#d1fae5,stroke:#10b981
    style SHAP fill:#fef3c7,stroke:#f59e0b
    style APPROVE fill:#d1fae5,stroke:#10b981
    style REVIEW fill:#fef3c7,stroke:#f59e0b
    style BLOCK fill:#fee2e2,stroke:#ef4444`}
            className="min-w-[600px]"
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
                <th className="text-left py-3 px-4 font-semibold text-foreground">Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Data Pipeline</td>
                <td className="py-3 px-4">Pub/Sub ingestion, Dataflow feature engineering, Bigtable feature store, BigQuery historical data warehouse</td>
                <td className="py-3 px-4">3 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Baseline Model</td>
                <td className="py-3 px-4">XGBoost model training on historical fraud labels, shadow mode deployment, model performance evaluation</td>
                <td className="py-3 px-4">3 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Ensemble & Explainability</td>
                <td className="py-3 px-4">LSTM and graph neural network integration, ensemble logic, SHAP-based explainability UI for analysts</td>
                <td className="py-3 px-4">4 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Production & Feedback Loop</td>
                <td className="py-3 px-4">Analyst review portal, feedback integration for retraining, monitoring dashboards, production cutover</td>
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
                <td className="py-3 px-4">Model bias discriminating against specific demographics</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-red-500/20 text-red-600 dark:text-red-400 rounded text-xs font-semibold">High</span>
                </td>
                <td className="py-3 px-4">Fairness metrics across demographic segments, remove protected attributes, bias audit before production launch</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Adversarial fraud adapting to model patterns (concept drift)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded text-xs font-semibold">Medium</span>
                </td>
                <td className="py-3 px-4">Weekly model retraining, drift detection monitoring, human-in-the-loop for novel fraud patterns</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">False positives blocking legitimate high-value customers</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded text-xs font-semibold">Medium</span>
                </td>
                <td className="py-3 px-4">Precision-focused threshold tuning, VIP customer allow-list, rapid manual review SLA (&lt;30 minutes)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Graph database performance degradation at scale</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-xs font-semibold">Low</span>
                </td>
                <td className="py-3 px-4">Pre-compute graph features during batch processing, optimize query patterns, horizontal scaling for Neo4j cluster</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Fraud Operations team for historical fraud labels and domain expertise</li>
            <li>Legal/Compliance for model fairness review and regulatory requirements</li>
            <li>Payment Gateway vendor (Stripe) for transaction metadata access</li>
            <li>Data Science team for advanced ML techniques (graph neural networks)</li>
            <li>Customer Support for handling false positive escalations and refund workflows</li>
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
            { text: "Production ML at Scale: Demonstrates expertise in deploying high-stakes ML systems (fraud detection) with real-time requirements" },
            { text: "Streaming Architecture: Shows ability to build event-driven systems using Dataflow, Pub/Sub, Bigtable for low-latency processing" },
            { text: "Responsible AI: Addresses fairness, explainability, and bias mitigation - critical for senior AI/ML TPM roles" },
            { text: "Business Impact: Clear financial ROI ($5M fraud losses prevented) resonating with executive stakeholders" },
            { text: "Cross-Functional Leadership: Requires coordination across Fraud Ops, Legal, Data Science, Engineering, and Customer Support teams" },
            { text: "Industry Relevance: Applicable to fintech, e-commerce, and payment platforms at Mag7 companies (Meta, Amazon, Google)" },
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
          href="/nebula/capstone/claude/journey-orchestration"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Previous: Journey Orchestration
        </Link>
        <Link
          href="/nebula/capstone/claude/developer-experience"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Developer Experience →
        </Link>
      </div>
    </div>
  );
}

export default function FraudDetectionPage() {
  return (
    <CapstoneLayout
      title="Real-time Fraud Detection Platform"
      description="Claude Project 3: Streaming ML pipeline for fraud detection"
      currentProjectId="claude/fraud-detection"
      currentLLM="claude"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
