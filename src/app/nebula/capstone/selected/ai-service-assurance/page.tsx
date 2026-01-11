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
        details: "Defining anomaly thresholds and false positive tradeoffs requires iterative tuning",
      },
      stakeholders: {
        rating: "Medium",
        details: "Primarily technical stakeholders (SRE, ops, engineering); less business stakeholder exposure",
      },
      scale: {
        rating: "Strong",
        details: "Processes millions of metrics/events with real-time SLA monitoring",
      },
      failure: {
        rating: "Strong",
        details: "Predictive model failures directly impact customer experience; clear failure scenarios",
      },
    },
    tpmFit: ["Platform TPM", "Ops TPM"],
    strengths: [
      "Demonstrates proactive infrastructure management",
      "Clear measurable outcomes: SLA improvements, incident reduction",
      "Showcases ML model lifecycle management",
    ],
    considerations: [
      "May need to expand business stakeholder narratives",
      "Should differentiate from standard monitoring tools",
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
        details: 'Balancing prediction sensitivity vs specificity is genuinely ambiguous; no clear "right" answer',
      },
      stakeholders: {
        rating: "Medium",
        details: "Technical-heavy stakeholder set; opportunity to add business/product alignment stories",
      },
      scale: {
        rating: "Strong",
        details: "Infrastructure-scale data processing with stringent latency requirements",
      },
      failure: {
        rating: "Strong",
        details: "False negatives cause outages; false positives cause alert fatigue - both are rich failure stories",
      },
    },
    tpmFit: ["Platform TPM (Primary)", "Ops TPM (Secondary)"],
    strengths: [
      "Complements Ops Co-Pilot: proactive vs reactive coverage",
      "Strong technical depth in ML anomaly detection",
      "Demonstrates systems thinking for reliability",
    ],
    considerations: [
      "Emphasize cross-functional coordination with business teams",
      "Include customer impact narratives alongside technical metrics",
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
        details: "Threshold calibration and model accuracy tradeoffs require judgment calls",
      },
      stakeholders: {
        rating: "Medium",
        details: "Strong technical alignment; moderate business stakeholder complexity",
      },
      scale: {
        rating: "Strong",
        details: "Designed for telecom-scale data volumes and real-time processing",
      },
      failure: {
        rating: "Strong",
        details: "Prediction failures have direct customer impact; excellent postmortem material",
      },
    },
    tpmFit: ["Platform TPM", "Ops TPM"],
    strengths: [
      'Top 3 recommendation in "Critical Few" methodology',
      "Demonstrates proactive vs reactive infrastructure ownership",
      "Shows ML integration in production systems",
    ],
    considerations: [
      "Frame technical decisions in business impact terms",
      "Document model retraining and accuracy monitoring processes",
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
        details: 'Defining "normal" behavior across diverse services is inherently ambiguous',
      },
      stakeholders: {
        rating: "Medium",
        details: "Primary focus on ops/engineering; business stakeholders secondary",
      },
      scale: {
        rating: "Strong",
        details: "Strongest scale signals among portfolio - SLA monitoring, performance baselines",
      },
      failure: {
        rating: "Strong",
        details: "Model accuracy failures directly impact reliability; clear accountability",
      },
    },
    tpmFit: ["Platform TPM", "Ops TPM"],
    strengths: [
      "Rated strongest in scale signals within portfolio",
      "Clear SLA/performance improvement narrative",
      "Demonstrates infrastructure observability expertise",
    ],
    considerations: [
      "Add product-side stakeholder engagement stories",
      "Connect infrastructure improvements to business outcomes",
    ],
  },
];

const signalColors = {
  Strong: { bg: "rgba(34, 197, 94, 0.15)", text: "text-green-600 dark:text-green-400" },
  Medium: { bg: "rgba(251, 191, 36, 0.15)", text: "text-yellow-600 dark:text-yellow-400" },
  Weak: { bg: "rgba(239, 68, 68, 0.15)", text: "text-red-600 dark:text-red-400" },
};

export default function AIServiceAssuranceAnalysisPage() {
  const [activeTab, setActiveTab] = useState<LLMTab>("perplexity");
  const activePerspective = llmPerspectives.find((p) => p.id === activeTab)!;

  return (
    <CapstoneLayout
      title="AI Service Assurance Analysis"
      description="LLM Analysis for AI-Powered Service Assurance"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Navigation Links */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <Link href="/nebula/capstone/selected" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Selected Projects
          </Link>
          <Link href="/nebula/capstone/chatgpt/ai-service-assurance" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            View Original Project <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/30">Telecom</span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-pink-500/15 text-pink-600 dark:text-pink-400 border border-pink-500/30">ML/Anomaly Detection</span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">Platform TPM</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            AI-Powered Service Assurance
          </h1>
          <p className="text-muted-foreground mt-2">
            Intelligent monitoring with ML-driven anomaly detection and automated root cause analysis for proactive service quality management.
          </p>
        </header>

        {/* LLM Analysis Section */}
        <section className="bg-gradient-to-r from-blue-500/5 to-transparent border border-blue-500/30 rounded-xl p-6 mb-8">
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
        <section className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
          <h2 className="text-xl font-semibold text-foreground mb-4">Consensus Summary</h2>
          <div className="space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">All LLMs rate this project Strong on scale and failure signals, with Medium on stakeholder complexity.</strong> This is a technically deep project ideal for Platform TPM roles.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Best For</strong>
                <p className="text-sm mt-1">Platform TPM roles, infrastructure teams, SRE-adjacent positions</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Interview Value</strong>
                <p className="text-sm mt-1">ML model management, reliability engineering, proactive monitoring</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Differentiation</strong>
                <p className="text-sm mt-1">Predictive (vs reactive) approach + telecom scale + ML expertise</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Synergy</strong>
                <p className="text-sm mt-1">Pairs with Ops Co-Pilot for complete proactive + reactive coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          <Link href="/nebula/capstone/selected/ops-copilot" className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Prev: Ops Co-Pilot
          </Link>
          <Link href="/nebula/capstone/selected/fraud-detection" className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
            Next: Fraud Detection <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </CapstoneLayout>
  );
}
