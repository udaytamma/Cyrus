"use client";

/**
 * Gemini Project 2: Smart Customer Voice Dashboard
 * Product TPM focus - Data-Driven Product Strategy
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
        title="Smart Customer Voice Dashboard"
        tags={[
          { label: "Telecom", type: "telecom" },
          { label: "Product TPM", type: "enterprise" },
          { label: "AI/ML", type: "ai" },
        ]}
      />

      {/* Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Executive Summary</h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Smart Customer Voice Dashboard automates the quantification of qualitative customer feedback
            by using AI-powered sentiment analysis and topic classification. It addresses the challenge that
            Product Managers face when thousands of support tickets, NPS survey responses, and app store reviews
            arrive daily with no scalable way to identify trending issues or measure sentiment shifts.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Product TPM capabilities</strong> by building a data pipeline
            that transforms unstructured customer feedback into actionable product insights. As a Product TPM,
            you&apos;ll bridge the gap between customer sentiment data and product roadmap prioritization, enabling
            data-driven decisions at scale while partnering with Product, Data Science, and Customer Success teams.
          </p>
        </div>
      </section>

      {/* Purpose & Technical Scope */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Purpose & Technical Scope</h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Product Managers manually reading hundreds of support tickets to find common themes</li>
            <li>NPS survey responses (10K+ monthly) stored but never systematically analyzed</li>
            <li>App store reviews (5-star ratings) lack automated sentiment extraction beyond star count</li>
            <li>No correlation between customer complaints and product roadmap priorities</li>
            <li>Delayed reaction to emerging product issues (bugs, UX friction, feature requests)</li>
            <li>Customer Success teams unable to quantify impact of feedback themes for executive reporting</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Multi-Source Ingestion:</strong> Ingest feedback from Zendesk tickets, NPS surveys (Qualtrics), app store APIs (iOS/Android), social media mentions</li>
            <li><strong className="text-foreground">Sentiment Analysis:</strong> Classify feedback as positive/neutral/negative with confidence scores using Vertex AI Natural Language API</li>
            <li><strong className="text-foreground">Topic Classification:</strong> Auto-tag feedback into product areas (billing, network quality, app performance, customer service) using custom ML model</li>
            <li><strong className="text-foreground">Trend Detection:</strong> Identify emerging issues via statistical anomaly detection (e.g., &quot;call drop&quot; mentions spike 300% week-over-week)</li>
            <li><strong className="text-foreground">Interactive Dashboard:</strong> Looker Studio dashboard with filters for time range, product area, sentiment, customer segment</li>
            <li><strong className="text-foreground">Alert System:</strong> Slack notifications when negative sentiment crosses threshold or new critical issue detected</li>
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
                <td className="py-3 px-4">Time to Insight</td>
                <td className="py-3 px-4">Reduce from 2 weeks to real-time</td>
                <td className="py-3 px-4">Feedback processed and categorized within 1 hour of submission</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Classification Accuracy</td>
                <td className="py-3 px-4">85%+ precision on topic tags</td>
                <td className="py-3 px-4">Human validation of random sample (200 tickets/month) against ML predictions</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Product Impact</td>
                <td className="py-3 px-4">30% of roadmap items traced to customer insights</td>
                <td className="py-3 px-4">Product roadmap prioritization references dashboard data in PRD</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Issue Detection Speed</td>
                <td className="py-3 px-4">Detect trending issues 5 days faster</td>
                <td className="py-3 px-4">Compare time to escalation: manual review vs. automated alerts</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Coverage</td>
                <td className="py-3 px-4">100% feedback processed</td>
                <td className="py-3 px-4">All support tickets, surveys, and reviews ingested without manual triage</td>
              </tr>
              <tr>
                <td className="py-3 px-4">User Adoption</td>
                <td className="py-3 px-4">80% of PMs use dashboard weekly</td>
                <td className="py-3 px-4">Looker Studio analytics showing active users and query frequency</td>
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
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Ingestion</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Functions</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Pub/Sub</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Dataflow</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">APIs & Sources</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Zendesk API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Qualtrics API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">App Store API</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">AI/ML</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vertex AI</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Natural Language API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">AutoML</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Warehouse</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">BigQuery</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Storage</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Visualization</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Looker Studio</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Data Studio</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Orchestration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Scheduler</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Workflows</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Slack API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">High-Level Architecture</h2>

        {/* Data Ingestion */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Feedback Sources and Ingestion</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    subgraph Sources["FEEDBACK SOURCES"]
        Z["Zendesk Tickets<br/>(5K/day)"]
        Q["Qualtrics NPS/CSAT<br/>(10K/mo)"]
        A["App Store Reviews<br/>(2K/mo)"]
        S["Social Media<br/>(500/day)"]
    end

    Z -->|"Webhooks<br/>real-time"| CF["Cloud Functions<br/>Data Collectors"]
    Q -->|"API Poll<br/>hourly"| CF
    A -->|"API Poll<br/>daily"| CF
    S -->|"Stream API<br/>real-time"| CF

    subgraph Processing["Pre-processing"]
        P1["Normalize"]
        P2["Deduplicate"]
        P3["Enrich"]
        P4["Schema mapping"]
        P5["Customer segment"]
    end

    CF --> Processing
    Processing --> PS["Pub/Sub Topic<br/>feedback_raw"]

    style Sources fill:#e0e7ff,stroke:#6366f1,color:#000
    style CF fill:#6366f1,stroke:#6366f1,color:#fff
    style PS fill:#fef3c7,stroke:#f59e0b,color:#000`} />
          </div>
        </div>

        {/* ML Processing Pipeline */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">ML Processing Pipeline</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    PS["Pub/Sub Topic<br/>feedback_raw"]

    PS --> DF["Dataflow Streaming<br/>(Apache Beam)"]

    subgraph Prep["Preprocessing"]
        C1["Clean text"]
        C2["Remove PII"]
        C3["Language detect"]
    end

    DF --> Prep

    Prep --> SENT["Vertex AI<br/>Sentiment API<br/>Score, Magnitude, Emotions"]
    Prep --> CAT["Vertex AI<br/>AutoML Classification<br/>Categories, Confidence"]
    Prep --> TOPIC["Custom Model<br/>Topic Classification<br/>Product area, Priority"]

    SENT & CAT & TOPIC --> ENR["Enrichment Service"]

    subgraph Combine["Combined Results"]
        R1["Sentiment"]
        R2["Topic"]
        R3["Customer data"]
        R4["Metadata"]
    end

    ENR --> Combine

    style PS fill:#fef3c7,stroke:#f59e0b,color:#000
    style DF fill:#6366f1,stroke:#6366f1,color:#fff
    style SENT fill:#d1fae5,stroke:#10b981,color:#000
    style CAT fill:#d1fae5,stroke:#10b981,color:#000
    style TOPIC fill:#fce7f3,stroke:#ec4899,color:#000
    style ENR fill:#e0e7ff,stroke:#6366f1,color:#000`} />
          </div>
        </div>

        {/* Data Storage and Analytics */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Analytics and Alerting</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart TB
    ENR["Enrichment Service"]

    ENR --> BQ["BigQuery<br/>Data Warehouse"]
    ENR --> TD["Trend Detector<br/>(Anomaly ML)"]
    ENR --> AE["Alert Engine<br/>(Thresholds)"]

    subgraph BQTables["BigQuery Tables"]
        T1["feedback_raw"]
        T2["enriched"]
        T3["aggregations"]
    end

    subgraph TrendFeatures["Trend Detection"]
        TR1["Weekly comparison"]
        TR2["Spike detection"]
        TR3["Trend scoring"]
        TR4["Forecasting"]
    end

    subgraph Triggers["Alert Triggers"]
        A1["Neg sentiment > 30%"]
        A2["New topic detected"]
        A3["Critical keyword"]
    end

    BQ --> BQTables
    TD --> TrendFeatures
    AE --> Triggers

    BQTables --> LOOKER["Looker Studio Dashboard"]
    TrendFeatures & Triggers --> SLACK["Slack Webhook<br/>Product Team"]

    subgraph Views["Dashboard Views"]
        V1["Sentiment trend"]
        V2["Topic breakdown"]
        V3["Word cloud"]
        V4["Customer segment"]
        V5["Time series"]
        V6["Heatmaps"]
    end

    LOOKER --> Views

    style ENR fill:#6366f1,stroke:#6366f1,color:#fff
    style BQ fill:#d1fae5,stroke:#10b981,color:#000
    style TD fill:#fef3c7,stroke:#f59e0b,color:#000
    style AE fill:#fee2e2,stroke:#ef4444,color:#000
    style LOOKER fill:#fce7f3,stroke:#ec4899,color:#000
    style SLACK fill:#e0e7ff,stroke:#6366f1,color:#000`} />
          </div>
        </div>

        {/* Scheduled Jobs and Feedback */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Scheduled Jobs and Feedback Loop</h3>
          <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
            <MermaidDiagram chart={`flowchart LR
    subgraph Scheduled["SCHEDULED JOBS<br/>(Cloud Scheduler + Workflows)"]
        S1["Daily aggregation refresh"]
        S2["Weekly trend report email"]
        S3["Monthly model retraining"]
    end

    subgraph Feedback["HUMAN-IN-LOOP VALIDATION"]
        F1["PMs label samples for retraining"]
        F2["Improve topic taxonomy"]
        F3["Adjust alert thresholds"]
    end

    Scheduled --> SYS["System<br/>Improvement"]
    Feedback --> SYS

    style Scheduled fill:#d1fae5,stroke:#10b981,color:#000
    style Feedback fill:#fef3c7,stroke:#f59e0b,color:#000
    style SYS fill:#6366f1,stroke:#6366f1,color:#fff`} />
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
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Foundation</td>
                <td className="py-3 px-4">3 weeks</td>
                <td className="py-3 px-4">Zendesk integration, basic sentiment analysis (Vertex AI), BigQuery schema, simple Looker dashboard</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Multi-Source</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">NPS survey integration, app store API polling, unified data model, advanced sentiment with emotion detection</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Intelligence</td>
                <td className="py-3 px-4">5 weeks</td>
                <td className="py-3 px-4">Custom topic classification model (AutoML), trend detection algorithm, Slack alert system, dashboard v2 with filters</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Scale</td>
                <td className="py-3 px-4">3 weeks</td>
                <td className="py-3 px-4">Social media integration, model retraining pipeline, executive summary reports, API for product tools integration</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs">Medium-High</span></td>
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
                <td className="py-3 px-4">Topic classification accuracy too low for trust</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Start with human-validated training set (5K labeled tickets), iterative model improvement, allow manual override in dashboard</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">PMs don&apos;t change behavior despite data availability</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Embed dashboard insights in existing workflows (weekly roadmap reviews), executive sponsorship, success metrics tied to usage</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">API rate limits from Zendesk/Qualtrics causing delays</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs">Low</span></td>
                <td className="py-3 px-4">Implement exponential backoff, negotiate higher rate limits with vendors, use webhooks instead of polling where available</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">False positive alerts creating alert fatigue</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Tunable thresholds per product area, ML-based anomaly scoring vs. simple rules, weekly threshold review meetings</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">PII leakage in customer feedback displayed in dashboard</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Automated PII redaction (Cloud DLP), access controls per customer segment, compliance review before launch</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Model drift over time as language patterns change</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Monthly model retraining pipeline, monitoring classification confidence trends, human validation feedback loop</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Product Team:</strong> Define product taxonomy for topic classification (billing, network, app, support)</li>
            <li><strong className="text-foreground">Customer Success:</strong> Provide historical labeled data for model training (5K+ tickets)</li>
            <li><strong className="text-foreground">Data Engineering:</strong> BigQuery access and schema design for customer data joins</li>
            <li><strong className="text-foreground">Legal/Privacy:</strong> Approve PII handling and data retention policies for customer feedback</li>
            <li><strong className="text-foreground">IT/Security:</strong> API credentials for Zendesk, Qualtrics, app store developer accounts</li>
            <li><strong className="text-foreground">Executive Sponsor:</strong> Mandate dashboard usage in product review meetings to drive adoption</li>
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
              <strong className="text-foreground">Product Intuition:</strong> Bridges customer feedback and roadmap decisions - core Product TPM skill for consumer-facing companies
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Data-Driven Culture:</strong> Demonstrates ability to automate qualitative insights into quantitative metrics that drive decisions
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Cross-Functional Collaboration:</strong> Requires partnership with Product, Data Science, Customer Success, and Engineering teams
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">AI/ML Application:</strong> Showcases practical ML use case (sentiment + topic classification) beyond theoretical knowledge
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Telecom Relevance:</strong> Directly applicable to wireless carriers analyzing customer complaints about network quality and billing
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Business Impact:</strong> Clear ROI through faster issue detection and data-driven prioritization reducing churn
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/gemini/enterprise-genai-gateway"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
        >
          ← Previous: GenAI Gateway
        </Link>
        <Link
          href="/nebula/capstone/gemini/multimedia-content-safety"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
        >
          Next: Content Safety System →
        </Link>
      </div>
    </div>
  );
}

export default function SmartCustomerVoiceDashboardPage() {
  return (
    <CapstoneLayout
      title="Smart Customer Voice Dashboard - Gemini Projects"
      description="Product TPM Capstone: AI-Powered Feedback Analysis"
      currentLLM="gemini"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
