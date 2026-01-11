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
        details: "Defining governance policies, approval workflows, and compliance requirements involves significant ambiguity",
      },
      stakeholders: {
        rating: "Strong",
        details: "ML platform, compliance, legal, security, product, and engineering all have stakes in governance",
      },
      scale: {
        rating: "Medium",
        details: "Platform scale depends on org size; may not have same volume signals as production ML systems",
      },
      failure: {
        rating: "Strong",
        details: "Governance failures can lead to compliance violations, model incidents - high-stakes failure scenarios",
      },
    },
    tpmFit: ["Platform TPM", "Ops TPM"],
    strengths: [
      "Aligns with Mag7 responsible AI and governance initiatives",
      "Demonstrates cross-functional leadership in regulated environment",
      "Shows understanding of MLOps lifecycle and compliance",
    ],
    considerations: [
      "May need to demonstrate platform adoption metrics",
      "Should connect governance to business risk mitigation",
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
        details: 'Governance is inherently ambiguous - balancing control vs velocity, defining "good enough" policies',
      },
      stakeholders: {
        rating: "Strong",
        details: "Spans ML engineering, product, compliance, legal, security, and executive stakeholders",
      },
      scale: {
        rating: "Medium",
        details: "Internal platform scale; less dramatic than customer-facing scale signals",
      },
      failure: {
        rating: "Strong",
        details: "Ungoverned model in production = compliance risk, reputation risk - serious failure scenarios",
      },
    },
    tpmFit: ["Platform TPM (Primary)", "Ops TPM (Secondary)"],
    strengths: [
      "Well-suited for Mag7 due to industry-wide MLOps and governance trends",
      "Demonstrates ability to build internal platforms with strong adoption",
      "Shows understanding of AI risk management",
    ],
    considerations: [
      "Need to show tangible adoption and impact metrics",
      "Balance governance burden with developer experience",
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
        details: "Policy design, approval criteria, and compliance mapping require ongoing judgment",
      },
      stakeholders: {
        rating: "Strong",
        details: "Multi-department governance requires alignment across competing priorities",
      },
      scale: {
        rating: "Medium",
        details: "Platform-level scale; less volume-intensive than production ML systems",
      },
      failure: {
        rating: "Strong",
        details: "Governance failures have regulatory and reputational consequences",
      },
    },
    tpmFit: ["Platform TPM", "Ops TPM"],
    strengths: [
      "Top 3 recommendation - aligns with Mag7 responsible AI priorities",
      "Demonstrates platform TPM skills: adoption, developer experience, compliance",
      "Shows strategic thinking about AI risk management",
    ],
    considerations: [
      "Ensure clear adoption metrics and success criteria",
      "Document developer experience and friction reduction",
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
        details: "Defining governance policies that balance control and innovation is genuinely ambiguous",
      },
      stakeholders: {
        rating: "Strong",
        details: "Complex stakeholder matrix: ML teams, compliance, legal, security, product",
      },
      scale: {
        rating: "Medium",
        details: "Internal platform; scale signals less prominent than production systems",
      },
      failure: {
        rating: "Strong",
        details: "Ungoverned models can cause compliance violations, incidents - high-stakes failures",
      },
    },
    tpmFit: ["Platform TPM", "Ops TPM"],
    strengths: [
      "Rated strongest alongside Fraud Detection in overall evaluation",
      "Demonstrates enterprise platform leadership",
      "Aligns with Mag7 AI governance and responsible AI focus",
    ],
    considerations: [
      "May need to emphasize developer adoption and experience",
      "Show clear governance ROI: incidents prevented, compliance achieved",
    ],
  },
];

const signalColors = {
  Strong: { bg: "rgba(34, 197, 94, 0.15)", text: "text-green-600 dark:text-green-400" },
  Medium: { bg: "rgba(251, 191, 36, 0.15)", text: "text-yellow-600 dark:text-yellow-400" },
  Weak: { bg: "rgba(239, 68, 68, 0.15)", text: "text-red-600 dark:text-red-400" },
};

export default function ModelGovernanceAnalysisPage() {
  const [activeTab, setActiveTab] = useState<LLMTab>("perplexity");
  const activePerspective = llmPerspectives.find((p) => p.id === activeTab)!;

  return (
    <CapstoneLayout
      title="Model Governance Analysis"
      description="LLM Analysis for AI Model Governance & Registry"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Navigation Links */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <Link href="/nebula/capstone/selected" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Selected Projects
          </Link>
          <Link href="/nebula/capstone/claude/model-governance" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            View Original Project <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-pink-500/15 text-pink-600 dark:text-pink-400 border border-pink-500/30">MLOps</span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30">Enterprise Platform</span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">Platform TPM</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            AI Model Governance & Registry
          </h1>
          <p className="text-muted-foreground mt-2">
            MLOps platform for model versioning, approval workflows, lineage tracking, and compliance management across the ML lifecycle.
          </p>
        </header>

        {/* LLM Analysis Section */}
        <section className="bg-gradient-to-r from-pink-500/5 to-transparent border border-pink-500/30 rounded-xl p-6 mb-8">
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
        <section className="mb-8 p-6 bg-gradient-to-r from-violet-500/5 to-transparent rounded-xl border border-violet-500/30">
          <h2 className="text-xl font-semibold text-foreground mb-4">Consensus Summary</h2>
          <div className="space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">Strong on ambiguity, stakeholders, and failure; Medium on scale signals.</strong> Highly relevant for Mag7 due to industry-wide responsible AI focus.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Best For</strong>
                <p className="text-sm mt-1">Platform TPM roles, ML infrastructure teams, companies prioritizing AI governance</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Interview Value</strong>
                <p className="text-sm mt-1">MLOps expertise, compliance navigation, internal platform adoption</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Differentiation</strong>
                <p className="text-sm mt-1">Governance/compliance focus unique in portfolio; aligns with Mag7 priorities</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Portfolio Role</strong>
                <p className="text-sm mt-1">Demonstrates strategic thinking about AI risk and enterprise scale</p>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Portfolio Coverage */}
        <section className="mb-8 p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30">
          <h2 className="text-xl font-semibold text-foreground mb-4">Complete Portfolio Coverage</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>With Model Governance as the fifth project, your portfolio covers:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Ops TPM</strong>
                <p className="text-sm mt-1">Ops Co-Pilot, Service Assurance</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Platform TPM</strong>
                <p className="text-sm mt-1">Fraud Detection, Model Governance, Service Assurance</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Product TPM</strong>
                <p className="text-sm mt-1">Churn & Upsell, Fraud Detection</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Technical Depth</strong>
                <p className="text-sm mt-1">Real-time ML, streaming pipelines, GenAI, MLOps</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors md:col-span-2 lg:col-span-2">
                <strong className="text-foreground text-sm">Business Impact</strong>
                <p className="text-sm mt-1">Revenue (Churn), Cost (Fraud), Reliability (Ops), Compliance (Governance)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          <Link href="/nebula/capstone/selected/churn-upsell" className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Prev: Churn & Upsell
          </Link>
          <Link href="/nebula/capstone/selected" className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
            Back to Selected <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </CapstoneLayout>
  );
}
