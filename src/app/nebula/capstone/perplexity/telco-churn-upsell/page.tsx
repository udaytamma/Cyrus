"use client";

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

export default function TelcoChurnUpsellPage() {
  return (
    <CapstoneLayout
      title="Telco Churn & Upsell Analytics"
      description="Perplexity Project 2: Data + AI for churn prediction and revenue growth"
      currentLLM="perplexity"
      currentProjectId="perplexity/telco-churn-upsell"
    >
      <ProjectHeader
        title="Perplexity Project 2: Telco Churn & Upsell Analytics"
        tags={[
          { label: "Telecom Analytics", type: "telecom" },
          { label: "Data Platform", type: "enterprise" },
          { label: "ML/AI", type: "ai" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Executive Summary
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            The Telco Churn & Upsell Analytics platform is a data + AI product that empowers retention and sales
            teams to proactively identify at-risk customers and high-value upsell opportunities. In the competitive
            wireless market, customer acquisition costs are 5-10x higher than retention costs, yet most telcos
            react to churn only after cancellation requests are submitted.
          </p>
          <p>
            This platform ingests customer data (billing history, usage patterns, support tickets, NPS scores)
            into BigQuery, trains churn prediction models using BigQuery ML and Vertex AI AutoML, and surfaces
            actionable insights through Looker dashboards. Retention specialists see ranked lists of customers
            with 60-90 day churn risk, along with AI-generated "next best actions" (e.g., "Offer 5GB bonus data"
            or "Flag billing dispute for executive escalation").
          </p>
          <p>
            <strong className="text-foreground">Impact:</strong> Target 15-20% reduction in monthly churn rate, with incremental revenue
            from upsell recommendations driving $2-5M ARR lift for a mid-size carrier.
          </p>
        </div>
      </section>

      {/* Purpose & Technical Scope */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Purpose & Technical Scope
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Retention teams lack visibility into early churn signals (declining usage, repeated support calls)</li>
            <li>Sales teams push one-size-fits-all upsell campaigns, ignoring customer context</li>
            <li>Data siloed across billing (SAP), CRM (Salesforce), network usage (Hadoop), and NPS surveys</li>
            <li>Manual reporting creates 5-7 day lag between churn events and intervention</li>
            <li>No personalized recommendations—retention offers are generic (blanket 10% discounts)</li>
          </ul>

          <p className="mt-4"><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Data Consolidation:</strong> ELT pipelines from SAP, Salesforce, network CDRs into BigQuery</li>
            <li><strong className="text-foreground">Feature Engineering:</strong> SQL transformations for churn signals (e.g., usage decline %, ticket frequency)</li>
            <li><strong className="text-foreground">Churn Model:</strong> BigQuery ML logistic regression + Vertex AI AutoML for ensemble predictions</li>
            <li><strong className="text-foreground">Next-Best-Action:</strong> Rule-based + Vertex AI Gemini to suggest personalized retention offers</li>
            <li><strong className="text-foreground">Looker Dashboards:</strong> Executive view (churn trends), Retention team view (customer lists), Sales view (upsell leads)</li>
            <li><strong className="text-foreground">CRM Integration:</strong> Push high-risk customer lists to Salesforce for outbound campaigns</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes & KPIs */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Expected Outcomes & KPIs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Churn Reduction</td>
                <td className="py-3 px-4">15-20% decrease</td>
                <td className="py-3 px-4">Compare monthly churn rate (pre vs. post deployment)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Model Precision</td>
                <td className="py-3 px-4">70% at 30% recall</td>
                <td className="py-3 px-4">Validation set performance: 70% of flagged customers churn within 60 days</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Upsell Conversion</td>
                <td className="py-3 px-4">5% lift</td>
                <td className="py-3 px-4">Compare upsell acceptance rates (AI-driven vs. control group)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Incremental Revenue</td>
                <td className="py-3 px-4">$2-5M ARR</td>
                <td className="py-3 px-4">Net revenue from prevented churn + upsells</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Time to Insight</td>
                <td className="py-3 px-4">&lt;24 hours</td>
                <td className="py-3 px-4">Data ingestion to dashboard refresh latency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Platform</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">BigQuery</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Storage</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Dataform</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">ML/AI</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">BigQuery ML</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Vertex AI AutoML</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Vertex AI Gemini</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Orchestration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Composer (Airflow)</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Scheduler</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Analytics</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Looker</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Looker Studio</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Integration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Salesforce API</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">SAP Extractor</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Segment CDP</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Governance</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Dataplex</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Data Catalog</span>
            </div>
          </div>
        </div>
      </section>

      {/* High-Level Architecture */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          High-Level Architecture
        </h2>
        <div className="overflow-x-auto">
          <pre className="text-xs text-muted-foreground font-mono whitespace-pre bg-background p-4 rounded-lg border border-border">
{`┌─────────────────────────────────────────────────────────────────────────────────┐
│                      TELCO CHURN & UPSELL ANALYTICS PLATFORM                    │
└─────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────── DATA SOURCES ───────────────────────────────────┐
│                                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │ Billing     │  │ CRM         │  │ Network     │  │ NPS/Support │           │
│  │ (SAP)       │  │ (Salesforce)│  │ Usage (CDR) │  │ (Zendesk)   │           │
│  │ - Invoices  │  │ - Accounts  │  │ - Data GB   │  │ - Tickets   │           │
│  │ - Payments  │  │ - Contacts  │  │ - Voice min │  │ - Scores    │           │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘           │
│         │                │                │                │                   │
└─────────┼────────────────┼────────────────┼────────────────┼───────────────────┘
          │                │                │                │
          └────────────────┴────────────────┴────────────────┘
                                   │
                                   ▼
                     ┌─────────────────────────┐
                     │  Cloud Composer         │◄─── Daily ETL @ 2AM
                     │  (Airflow DAGs)         │
                     │  ┌───────────────────┐  │
                     │  │ SAP → GCS → BQ    │  │
                     │  │ SFDC → GCS → BQ   │  │
                     │  │ CDR → GCS → BQ    │  │
                     │  │ Zendesk → GCS→BQ  │  │
                     │  └───────────────────┘  │
                     └────────────┬────────────┘
                                  │
                                  ▼
             ┌────────────────────────────────────────┐
             │         BigQuery Data Warehouse        │
             │  ┌──────────────────────────────────┐  │
             │  │  RAW LAYER                       │  │
             │  │  - billing_raw                   │  │
             │  │  - crm_raw                       │  │
             │  │  - usage_raw                     │  │
             │  │  - support_raw                   │  │
             │  └────────────┬─────────────────────┘  │
             │               │                         │
             │  ┌────────────▼─────────────────────┐  │
             │  │  STAGING LAYER (Dataform)        │  │
             │  │  - Dedupe, cleanse, normalize    │  │
             │  │  - Join customer_id keys         │  │
             │  └────────────┬─────────────────────┘  │
             │               │                         │
             │  ┌────────────▼─────────────────────┐  │
             │  │  FEATURE STORE                   │  │
             │  │  - customer_360 (wide table)     │  │
             │  │  - churn_features:               │  │
             │  │    • usage_decline_30d_pct       │  │
             │  │    • avg_ticket_count_90d        │  │
             │  │    • payment_late_count          │  │
             │  │    • nps_score_last              │  │
             │  │    • contract_days_remaining     │  │
             │  │    • competitor_promo_exposure   │  │
             │  └────────────┬─────────────────────┘  │
             └───────────────┼────────────────────────┘
                             │
          ┌──────────────────┴──────────────────┐
          │                                     │
          ▼                                     ▼
┌─────────────────────────┐         ┌─────────────────────────┐
│  BigQuery ML            │         │  Vertex AI AutoML       │
│  ┌───────────────────┐  │         │  ┌───────────────────┐  │
│  │ Logistic Reg      │  │         │  │ Gradient Boosting │  │
│  │ Churn Model       │  │         │  │ Ensemble Model    │  │
│  │                   │  │         │  │                   │  │
│  │ Features:         │  │         │  │ Features: Same +  │  │
│  │ - usage_decline   │  │         │  │ - Deep features   │  │
│  │ - ticket_count    │  │         │  │ - Interaction terms│ │
│  │ - payment_late    │  │         │  │                   │  │
│  └─────────┬─────────┘  │         │  └─────────┬─────────┘  │
│            │             │         │            │             │
│  Precision: 65%         │         │  Precision: 72%         │
│  Recall: 40%            │         │  Recall: 35%            │
└────────────┼────────────┘         └────────────┼────────────┘
             │                                   │
             └────────────────┬──────────────────┘
                              │
                              ▼
                  ┌───────────────────────┐
                  │  Ensemble Predictions │
                  │  (Weighted Average)   │
                  │  BQML: 40%, AutoML: 60%│
                  └───────────┬───────────┘
                              │
                              ▼
                  ┌───────────────────────┐
                  │  Predictions Table    │
                  │  (customer_churn_risk)│
                  │  - customer_id        │
                  │  - churn_prob (0-1)   │
                  │  - risk_tier (H/M/L)  │
                  │  - pred_date          │
                  └───────────┬───────────┘
                              │
                              ▼
                  ┌───────────────────────┐
                  │  Next-Best-Action     │
                  │  Engine               │
                  │  ┌─────────────────┐  │◄─── If usage_decline > 30%
                  │  │ Rule Engine     │  │     → "Offer data bonus"
                  │  │ (SQL)           │  │
                  │  └────────┬────────┘  │
                  │           │            │
                  │  ┌────────▼────────┐  │◄─── Gemini: "Generate
                  │  │ Vertex AI       │  │     personalized message
                  │  │ Gemini Pro      │  │     for high-risk customer"
                  │  │ (Copywriting)   │  │
                  │  └─────────────────┘  │
                  └───────────┬───────────┘
                              │
              ┌───────────────┴───────────────┐
              │                               │
              ▼                               ▼
┌─────────────────────────┐       ┌─────────────────────────┐
│  Looker Dashboards      │       │  Salesforce Integration │
│  ┌───────────────────┐  │       │  ┌───────────────────┐  │
│  │ Executive View    │  │       │  │ Push Campaigns    │  │
│  │ - Churn trends    │  │       │  │ - High-risk list  │  │
│  │ - Cohort analysis │  │       │  │ - Upsell targets  │  │
│  └───────────────────┘  │       │  │ - Next-best-action│  │
│  ┌───────────────────┐  │       │  └───────────────────┘  │
│  │ Retention View    │  │       │  ┌───────────────────┐  │
│  │ - Top 100 risks   │  │       │  │ Workflow Trigger  │  │
│  │ - Recommended     │  │       │  │ - Auto-assign rep │  │
│  │   actions         │  │       │  │ - Email template  │  │
│  │ - Success metrics │  │       │  └───────────────────┘  │
│  └───────────────────┘  │       └─────────────────────────┘
│  ┌───────────────────┐  │
│  │ Sales View        │  │
│  │ - Upsell leads    │  │
│  │ - Revenue forecast│  │
│  │ - Conversion rates│  │
│  └───────────────────┘  │
└─────────────────────────┘

┌─────────────────────── GOVERNANCE & MONITORING ──────────────────────────────┐
│                                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  Dataplex    │  │ Data Catalog │  │ Model Metric │  │ Alerts       │    │
│  │  (Quality)   │  │ (Lineage)    │  │ Monitoring   │  │ (Slack/PD)   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
└───────────────────────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>
      </section>

      {/* Estimated Effort */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Estimated Effort
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Complexity</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Data Foundation</td>
                <td className="py-3 px-4">ETL pipelines (SAP, SFDC, CDR, Zendesk), BigQuery schema, Dataform transformations</td>
                <td className="py-3 px-4">High</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Feature Engineering</td>
                <td className="py-3 px-4">customer_360 table, churn_features SQL, historical labeling (180 days churn window)</td>
                <td className="py-3 px-4">Medium-High</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Model Development</td>
                <td className="py-3 px-4">BigQuery ML baseline, Vertex AI AutoML tuning, ensemble logic, validation</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Next-Best-Action</td>
                <td className="py-3 px-4">Rule engine (SQL), Gemini integration for copy, A/B test framework</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Dashboards & Integration</td>
                <td className="py-3 px-4">Looker dashboards, Salesforce API push, training retention teams</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Risks & Dependencies
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">SAP billing data access delays (legal/privacy reviews)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">High</span>
                </td>
                <td className="py-3 px-4">Start legal review early; use anonymized sandbox data for MVP</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Model precision too low (false positives annoy customers)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Tune for high precision (70%+); start with top 1% risk tier only</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Retention team lacks bandwidth to act on insights</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">High</span>
                </td>
                <td className="py-3 px-4">Automate Salesforce workflows; prioritize top 50 customers/week</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Feature drift: churn patterns change over time</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Monthly model retraining; monitor precision/recall in production</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">PII leakage in Looker dashboards</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Role-based access (Looker RBAC); mask customer names in low-security views</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Legal/Privacy approval for customer PII in BigQuery (GDPR/CCPA compliance)</li>
            <li>SAP/Salesforce API credentials and schema documentation</li>
            <li>Retention team stakeholder for feature prioritization and UAT</li>
            <li>Historical churn labels (180+ days of customer cancellation data)</li>
            <li>Budget for Vertex AI AutoML training ($500-1500/month)</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Alignment with Professional Goals
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Telecom Business Acumen:</strong> Deep understanding of churn economics, customer lifecycle, and retention strategies
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">End-to-End Data Platform:</strong> Demonstrates full stack from ETL to ML to dashboards—not just model building
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Measurable Revenue Impact:</strong> $2-5M ARR lift provides clear executive-level ROI story
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Cross-Functional Leadership:</strong> Requires alignment with Retention, Sales, IT, Legal, and Finance teams
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">AI + Traditional ML Hybrid:</strong> Combines BigQuery ML (interpretable) with Vertex AI AutoML (high accuracy)
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Data Governance Awareness:</strong> Addresses PII, GDPR, model drift, and RBAC—critical for enterprise AI
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/perplexity/telco-genai-ops-copilot"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Previous: GenAI Ops Copilot
        </Link>
        <Link
          href="/nebula/capstone/perplexity/ai-tpm-control-tower"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Next: AI TPM Control Tower →
        </Link>
      </div>
    </CapstoneLayout>
  );
}
