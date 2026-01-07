"use client";

/**
 * Claude Project 2: Customer Journey Orchestration Engine
 * Event-driven personalization platform for multi-channel customer experiences
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
        title="Customer Journey Orchestration Engine"
        tags={[
          { label: "Product TPM", type: "enterprise" },
          { label: "AI/ML", type: "ai" },
          { label: "Consumer", type: "consumer" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
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
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
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
                <td className="py-3 px-4">Conversion Lift</td>
                <td className="py-3 px-4 font-semibold text-primary">+25% vs. control</td>
                <td className="py-3 px-4">A/B test comparing orchestrated vs. batch campaigns</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Customer Engagement</td>
                <td className="py-3 px-4 font-semibold text-primary">+40% CTR</td>
                <td className="py-3 px-4">Personalized messaging vs. generic campaigns</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Response Latency</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;100ms P99</td>
                <td className="py-3 px-4">Event ingestion to action trigger latency</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Customer Satisfaction</td>
                <td className="py-3 px-4 font-semibold text-primary">-30% unsubscribe</td>
                <td className="py-3 px-4">Reduced messaging fatigue via frequency capping</td>
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
            { title: "Event Processing", items: ["Pub/Sub", "Cloud Functions", "Eventarc"] },
            { title: "Data Storage", items: ["Firestore", "BigQuery", "Cloud Storage"] },
            { title: "ML Platform", items: ["Vertex AI", "Recommendations AI", "AutoML"] },
            { title: "Messaging Channels", items: ["SendGrid API", "Twilio SMS", "Firebase FCM"] },
            { title: "Experimentation", items: ["Firebase A/B Testing", "Cloud Functions"] },
            { title: "Monitoring", items: ["Cloud Monitoring", "Looker Studio"] },
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

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
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
          href="/nebula/capstone/claude/capacity-planning"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Previous: Capacity Planning
        </Link>
        <Link
          href="/nebula/capstone/claude/fraud-detection"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Fraud Detection →
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
