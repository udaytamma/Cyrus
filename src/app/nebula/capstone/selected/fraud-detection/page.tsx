"use client";

import { useState } from "react";
import Link from "next/link";
import { CapstoneLayout } from "@/components/CapstoneLayout";

type LLMTab = "perplexity" | "claude" | "gemini" | "chatgpt";

interface LLMPerspective {
  id: LLMTab;
  name: string;
  color: string;
  icon: string;
  interviewSignals: {
    ambiguity: { rating: string; details: string };
    stakeholders: { rating: string; details: string };
    scale: { rating: string; details: string };
    failure: { rating: string; details: string };
  };
  tpmFit: string[];
  strengths: string[];
  considerations: string[];
}

const llmPerspectives: LLMPerspective[] = [
  {
    id: "perplexity",
    name: "Perplexity",
    color: "#20b2aa",
    icon: "🔍",
    interviewSignals: {
      ambiguity: {
        rating: "Strong",
        details: "Balancing fraud prevention vs customer friction is inherently ambiguous; evolving fraud patterns",
      },
      stakeholders: {
        rating: "Strong",
        details: "Risk, legal, product, engineering, finance, customer support - complex stakeholder matrix",
      },
      scale: {
        rating: "Strong",
        details: "Real-time scoring on high transaction volumes with millisecond latency requirements",
      },
      failure: {
        rating: "Strong",
        details: "False positives damage customer trust; false negatives cause financial loss - both are rich stories",
      },
    },
    tpmFit: ["Platform TPM", "Product TPM"],
    strengths: [
      "Maximum interview signal coverage across all dimensions",
      "Clear business impact: fraud loss reduction, customer friction balance",
      "Demonstrates cross-functional leadership in regulated domain",
    ],
    considerations: [
      "Requires understanding of fraud patterns and model retraining",
      "Need to navigate legal/compliance stakeholders effectively",
    ],
  },
  {
    id: "claude",
    name: "Claude",
    color: "#cc785c",
    icon: "🧠",
    interviewSignals: {
      ambiguity: {
        rating: "Strong",
        details: "No perfect answer for precision/recall tradeoffs; adversarial environment with shifting baselines",
      },
      stakeholders: {
        rating: "Strong",
        details: "Bridges technical ML teams with risk, legal, product, and executive stakeholders",
      },
      scale: {
        rating: "Strong",
        details: "Streaming architecture at transaction scale with real-time requirements",
      },
      failure: {
        rating: "Strong",
        details: "Every model decision is a potential story: false positive = angry customer, false negative = loss",
      },
    },
    tpmFit: ["Platform TPM (Primary)", "Product TPM (Secondary)"],
    strengths: [
      "Rated strongest overall project across all four LLM analyses",
      "Demonstrates technical depth + business impact + stakeholder navigation",
      "Explainability requirements showcase AI ethics/governance understanding",
    ],
    considerations: [
      "High complexity may require phased implementation approach",
      "Need to show pragmatic delivery alongside technical ambition",
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    color: "#4285f4",
    icon: "💎",
    interviewSignals: {
      ambiguity: {
        rating: "Strong",
        details: "Threshold tuning, explainability depth, and fraud pattern evolution require ongoing judgment",
      },
      stakeholders: {
        rating: "Strong",
        details: "Multi-department coordination: engineering, risk, product, compliance, executive",
      },
      scale: {
        rating: "Strong",
        details: "Built for high-throughput transaction processing with strict latency SLAs",
      },
      failure: {
        rating: "Strong",
        details: "Failure modes are business-critical; excellent material for postmortem discussions",
      },
    },
    tpmFit: ["Platform TPM", "Product TPM"],
    strengths: [
      'Top recommendation in "Critical Few" selection - maximum breadth',
      "Real-time ML + business rules + explainability covers full stack",
      "Aligns with Mag7 responsible AI and risk management priorities",
    ],
    considerations: [
      "Scope management critical - can expand rapidly",
      "Document model governance and retraining cycles clearly",
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    color: "#10a37f",
    icon: "🤖",
    interviewSignals: {
      ambiguity: {
        rating: "Strong",
        details: "Navigating precision/recall tradeoffs in adversarial environment",
      },
      stakeholders: {
        rating: "Strong",
        details: "Complex stakeholder landscape spanning technical and business functions",
      },
      scale: {
        rating: "Strong",
        details: "Production-grade real-time system with high availability requirements",
      },
      failure: {
        rating: "Strong",
        details: "Clear accountability for model decisions; rich failure story potential",
      },
    },
    tpmFit: ["Platform TPM", "Product TPM"],
    strengths: [
      "Rated strongest alongside Model Governance in overall evaluation",
      "Demonstrates full TPM skillset: technical depth + business judgment + stakeholder management",
      "Clear ROI narrative: fraud loss prevention, operational efficiency",
    ],
    considerations: [
      "Ensure prototype demonstrates key architectural decisions",
      "Include human-in-the-loop review process design",
    ],
  },
];

const signalColors = {
  Strong: { bg: "rgba(34, 197, 94, 0.15)", text: "text-green-600 dark:text-green-400" },
  Medium: { bg: "rgba(251, 191, 36, 0.15)", text: "text-yellow-600 dark:text-yellow-400" },
  Weak: { bg: "rgba(239, 68, 68, 0.15)", text: "text-red-600 dark:text-red-400" },
};

export default function FraudDetectionAnalysisPage() {
  const [activeTab, setActiveTab] = useState<LLMTab>("perplexity");
  const activePerspective = llmPerspectives.find((p) => p.id === activeTab)!;

  return (
    <CapstoneLayout
      title="Fraud Detection Analysis"
      description="LLM Analysis for Real-time Fraud Detection"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Navigation Links */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <Link href="/nebula/capstone/selected" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Selected Projects
          </Link>
          <Link href="/nebula/capstone/claude/fraud-detection" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            View Original Project <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">AI/ML TPM</span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">Risk Management</span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">Platform TPM</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Real-time Fraud Detection
          </h1>
          <p className="text-muted-foreground mt-2">
            Streaming ML pipeline with explainable fraud scoring, real-time alerting, and human-in-the-loop review workflows.
          </p>
        </header>

        {/* LLM Analysis Section */}
        <section className="bg-gradient-to-r from-red-500/5 to-transparent border border-red-500/30 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">LLM Analysis Perspectives</h2>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 mb-5">
            {llmPerspectives.map((llm) => (
              <button
                key={llm.id}
                onClick={() => setActiveTab(llm.id)}
                className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeTab === llm.id ? "font-semibold border-2" : "border border-border bg-muted/50 text-muted-foreground hover:bg-muted"}`}
                style={{ borderColor: activeTab === llm.id ? llm.color : undefined, background: activeTab === llm.id ? `${llm.color}15` : undefined, color: activeTab === llm.id ? llm.color : undefined }}
              >
                <span>{llm.icon}</span>{llm.name}
              </button>
            ))}
          </div>

          {/* Interview Signals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {Object.entries(activePerspective.interviewSignals).map(([signal, data]) => (
              <div key={signal} className="bg-card/50 border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-foreground capitalize">
                    {signal === "ambiguity" ? "Ambiguity Navigation" : signal === "stakeholders" ? "Stakeholder Complexity" : signal === "scale" ? "Scale Signals" : "Failure Stories"}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${signalColors[data.rating as keyof typeof signalColors].text}`} style={{ background: signalColors[data.rating as keyof typeof signalColors].bg }}>
                    {data.rating}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{data.details}</p>
              </div>
            ))}
          </div>

          {/* TPM Fit */}
          <div className="bg-card/50 rounded-lg p-4 mb-4 border border-border">
            <span className="text-xs font-semibold text-primary uppercase">TPM Archetype Fit</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {activePerspective.tpmFit.map((fit) => (<span key={fit} className="px-3 py-1 rounded text-sm bg-primary/10 text-primary border border-primary/20">{fit}</span>))}
            </div>
          </div>

          {/* Strengths & Considerations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-500/10 to-transparent rounded-lg p-4 border-l-4 border-green-500">
              <span className="text-xs font-semibold text-green-500 uppercase">Key Strengths</span>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {activePerspective.strengths.map((s, i) => (<li key={i}>{s}</li>))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg p-4 border-l-4 border-yellow-500">
              <span className="text-xs font-semibold text-yellow-500 uppercase">Considerations</span>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {activePerspective.considerations.map((c, i) => (<li key={i}>{c}</li>))}
              </ul>
            </div>
          </div>
        </section>

        {/* Consensus Summary */}
        <section className="mb-8 p-6 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/30">
          <h2 className="text-xl font-semibold text-foreground mb-4">Consensus Summary</h2>
          <div className="space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">Unanimous &quot;Strong&quot; ratings across all four interview signal dimensions from all LLMs.</strong> This is the highest-rated project in the portfolio for Mag7 TPM interviews.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Best For</strong>
                <p className="text-sm mt-1">Any Mag7 TPM role - covers Platform, Product, and technical leadership</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Interview Value</strong>
                <p className="text-sm mt-1">Complete coverage - technical depth, business judgment, stakeholder complexity, risk management</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Differentiation</strong>
                <p className="text-sm mt-1">Real-time ML + explainability + regulated domain = rare combination</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Priority</strong>
                <p className="text-sm mt-1">Should be lead project in portfolio due to breadth and depth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          <Link href="/nebula/capstone/selected/ai-service-assurance" className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Prev: Service Assurance
          </Link>
          <Link href="/nebula/capstone/selected/churn-upsell" className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
            Next: Churn & Upsell <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </CapstoneLayout>
  );
}
