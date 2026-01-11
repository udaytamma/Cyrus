"use client";

/**
 * Claude Project 2: Customer Journey Orchestration Engine
 * Event-driven personalization platform for multi-channel customer experiences
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

function ProjectContent() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Link
        href="/nebula/capstone/claude"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to Claude Projects
      </Link>

      <ProjectHeader
        title="Customer Journey Orchestration Engine"
        tags={[
          { label: "Product TPM", type: "enterprise" },
          { label: "AI/ML", type: "ai" },
          { label: "Consumer", type: "consumer" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-gradient-to-r from-orange-500/5 to-transparent rounded-xl border border-orange-500/30">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Customer Journey Orchestration Engine is an event-driven platform that dynamically
            personalizes customer experiences across email, SMS, push notifications, in-app messaging,
            and web channels. By processing real-time behavioral signals (product views, cart abandonment,
            support tickets) and combining them with ML-powered predictions, the system orchestrates
            contextually relevant interactions that increase conversion rates and customer lifetime value.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Product TPM capabilities</strong> by building a sophisticated
            multi-channel engagement platform that balances technical complexity (event processing, ML inference)
            with business outcomes (conversion lift, retention). The system processes 50M+ events daily while
            maintaining sub-100ms response latencies.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="mb-8 p-6 bg-gradient-to-r from-rose-500/5 to-transparent rounded-xl border border-rose-500/30">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Problem Statement & Solution
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Marketing campaigns use batch processes, resulting in stale messaging (24h+ delays)</li>
            <li>Channel-specific tools (Sendgrid, Twilio, Firebase) operate in silos without coordination</li>
            <li>No unified customer profile combining web, mobile, and CRM data for personalization</li>
            <li>Manual campaign rules cannot adapt to real-time customer behavior changes</li>
            <li>Over-messaging customers across channels leads to fatigue and unsubscribes</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Event-Driven Architecture:</strong> Pub/Sub ingests customer events (clicks, purchases) in real-time</li>
            <li><strong className="text-foreground">Unified Customer Profile:</strong> Firestore stores 360-degree view combining behavioral, demographic, and transactional data</li>
            <li><strong className="text-foreground">ML-Powered Decisioning:</strong> Vertex AI models predict next-best-action (product recommendations, churn risk)</li>
            <li><strong className="text-foreground">Multi-Channel Orchestration:</strong> Cloud Functions trigger personalized messages across email/SMS/push with frequency capping</li>
            <li><strong className="text-foreground">A/B Testing Framework:</strong> Experimentation platform measuring conversion lift across journey variations</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes & KPIs */}
      <section className="mb-8 p-6 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/30">
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
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">Conversion Lift</td>
                <td className="py-3 px-4 font-semibold text-primary">+25% vs. control</td>
                <td className="py-3 px-4">A/B test comparing orchestrated vs. batch campaigns</td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">Customer Engagement</td>
                <td className="py-3 px-4 font-semibold text-primary">+40% CTR</td>
                <td className="py-3 px-4">Personalized messaging vs. generic campaigns</td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">Response Latency</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;100ms P99</td>
                <td className="py-3 px-4">Event ingestion to action trigger latency</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">Customer Satisfaction</td>
                <td className="py-3 px-4 font-semibold text-primary">-30% unsubscribe</td>
                <td className="py-3 px-4">Reduced messaging fatigue via frequency capping</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-gradient-to-r from-violet-500/5 to-transparent rounded-xl border border-violet-500/30">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: "Event Processing", items: ["Pub/Sub", "Cloud Functions", "Eventarc"] },
            { title: "Data Storage", items: ["Firestore", "BigQuery", "Cloud Storage"] },
            { title: "ML Platform", items: ["Vertex AI", "Recommendations AI", "AutoML"] },
            { title: "Messaging Channels", items: ["SendGrid API", "Twilio SMS", "Firebase FCM"] },
            { title: "Experimentation", items: ["Firebase A/B Testing", "Cloud Functions"] },
            { title: "Monitoring", items: ["Cloud Monitoring", "Looker Studio"] },
          ].map((category) => (
            <div key={category.title} className="p-4 bg-muted/30 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {category.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs border border-primary/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="mb-8 p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30">
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
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Event Foundation</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Pub/Sub ingestion, event schema design, Firestore customer profiles</td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: ML Integration</td>
                <td className="py-3 px-4">5 weeks</td>
                <td className="py-3 px-4">Vertex AI model deployment, next-best-action prediction, feature engineering</td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Channel Orchestration</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Multi-channel dispatch (email/SMS/push), frequency capping, journey builder</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Experimentation</td>
                <td className="py-3 px-4">3 weeks</td>
                <td className="py-3 px-4">A/B testing framework, conversion tracking, optimization dashboards</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Risks & Dependencies
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
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">Over-messaging leads to customer churn</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-600 dark:text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">Strict frequency caps; channel preferences; easy unsubscribe</td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">ML model latency exceeds SLA</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Model caching; fallback to rule-based; async processing</td>
              </tr>
              <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">Data privacy/GDPR compliance issues</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Privacy review; consent management; data retention policies</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">Channel API rate limits during peak</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded text-xs font-medium">Low</span>
                </td>
                <td className="py-3 px-4">Queue-based dispatch; rate limiting; priority routing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-card/50 rounded-lg border border-border">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2 text-muted-foreground">
            <li>Marketing team for campaign content and journey design</li>
            <li>Data Engineering for customer data pipeline and feature store</li>
            <li>ML Engineering for recommendation model development</li>
            <li>Legal/Privacy for GDPR compliance and consent management</li>
            <li>Product team for in-app messaging integration</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Alignment with Professional Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { text: "Event-Driven Architecture: Demonstrates expertise in building real-time systems with Pub/Sub, Eventarc, and Cloud Functions" },
            { text: "Personalization at Scale: Shows ability to combine ML models with customer data for actionable insights" },
            { text: "Cross-Channel Orchestration: Requires coordination across marketing, product, and engineering teams" },
            { text: "Business Impact: Clear metrics (25% conversion lift) that resonate with executive stakeholders" },
            { text: "Consumer Focus: Directly applicable to e-commerce, telecom, and subscription businesses at Mag7" },
            { text: "A/B Testing Framework: Demonstrates data-driven decision making and experimentation culture" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/10 to-transparent rounded-lg border-l-4 border-green-500">
              <span className="text-green-500 flex-shrink-0">&#x2705;</span>
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
          href="/nebula/capstone/claude/capacity-planning"
          className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Previous: Capacity Planning
        </Link>
        <Link
          href="/nebula/capstone/claude/fraud-detection"
          className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Fraud Detection <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function JourneyOrchestrationPage() {
  return (
    <CapstoneLayout
      title="Customer Journey Orchestration Engine"
      description="Claude Project 2: Event-driven personalization platform"
      currentProjectId="claude/journey-orchestration"
      currentLLM="claude"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
