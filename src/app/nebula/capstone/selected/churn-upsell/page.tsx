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
        rating: "Medium",
        details: "Churn prediction is well-understood ML problem; less ambiguity than novel AI applications",
      },
      stakeholders: {
        rating: "Strong",
        details: "Marketing, product, customer success, data science, finance - broad stakeholder matrix",
      },
      scale: {
        rating: "Strong",
        details: "Million+ customer base with real-time scoring and campaign orchestration",
      },
      failure: {
        rating: "Medium",
        details: "Model failures less visible than operational failures; longer feedback loops",
      },
    },
    tpmFit: ["Product TPM", "Platform TPM"],
    strengths: [
      "Strong business impact narrative: retention rates, upsell revenue",
      "Demonstrates cross-functional leadership with business stakeholders",
      "Telecom domain expertise showcase",
    ],
    considerations: [
      "Well-trodden ML use case - need differentiation angle",
      "Longer feedback loops make failure stories less immediate",
    ],
  },
  {
    id: "claude",
    name: "Claude",
    color: "#cc785c",
    icon: "🧠",
    interviewSignals: {
      ambiguity: {
        rating: "Medium",
        details: "Standard ML prediction problem; ambiguity mainly in recommendation strategy",
      },
      stakeholders: {
        rating: "Strong",
        details: "Business-heavy stakeholder set provides good contrast to technical projects",
      },
      scale: {
        rating: "Strong",
        details: "Enterprise-scale customer data processing with real-time decisioning",
      },
      failure: {
        rating: "Medium",
        details: "Failures measured in aggregate metrics; less dramatic than operational failures",
      },
    },
    tpmFit: ["Product TPM (Primary)", "Platform TPM (Secondary)"],
    strengths: [
      "Strongest product TPM positioning in portfolio",
      "Clear business metrics: churn rate reduction, upsell conversion",
      "Balances technical portfolio with business-facing project",
    ],
    considerations: [
      "May not demonstrate technical depth as strongly as other projects",
      "Consider emphasizing ML pipeline and data infrastructure aspects",
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    color: "#4285f4",
    icon: "💎",
    interviewSignals: {
      ambiguity: {
        rating: "Medium",
        details: "Recommendation strategy and experiment design require judgment; prediction is standard",
      },
      stakeholders: {
        rating: "Strong",
        details: "Business-side stakeholder complexity provides interview differentiation",
      },
      scale: {
        rating: "Strong",
        details: "Production ML system at telecom scale with real-time requirements",
      },
      failure: {
        rating: "Medium",
        details: "Model drift and campaign failures provide stories but less urgent than ops failures",
      },
    },
    tpmFit: ["Product TPM", "Platform TPM"],
    strengths: [
      "Demonstrates business value creation beyond technical implementation",
      "Shows ability to work with marketing and sales stakeholders",
      "Provides revenue-focused narrative for interviews",
    ],
    considerations: [
      "Position as complement to infrastructure-heavy projects",
      "Emphasize experiment design and A/B testing rigor",
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    color: "#10a37f",
    icon: "🤖",
    interviewSignals: {
      ambiguity: {
        rating: "Medium",
        details: "Established ML pattern; ambiguity in personalization and campaign strategy",
      },
      stakeholders: {
        rating: "Strong",
        details: "Cross-functional with heavy business stakeholder involvement",
      },
      scale: {
        rating: "Strong",
        details: "Large customer base with real-time scoring and orchestration",
      },
      failure: {
        rating: "Medium",
        details: "Aggregate metric failures; less immediate than system outages",
      },
    },
    tpmFit: ["Product TPM", "Platform TPM"],
    strengths: [
      "Provides portfolio balance: business-facing vs infrastructure projects",
      "Clear ROI narrative resonates with business-minded interviewers",
      "Demonstrates customer-centric thinking",
    ],
    considerations: [
      "May need to emphasize technical architecture for Platform TPM roles",
      "Contrast with more technically ambitious projects",
    ],
  },
];

const signalColors = {
  Strong: { bg: "rgba(34, 197, 94, 0.15)", text: "text-green-600 dark:text-green-400" },
  Medium: { bg: "rgba(251, 191, 36, 0.15)", text: "text-yellow-600 dark:text-yellow-400" },
  Weak: { bg: "rgba(239, 68, 68, 0.15)", text: "text-red-600 dark:text-red-400" },
};

export default function ChurnUpsellAnalysisPage() {
  const [activeTab, setActiveTab] = useState<LLMTab>("perplexity");
  const activePerspective = llmPerspectives.find((p) => p.id === activeTab)!;

  return (
    <CapstoneLayout
      title="Churn & Upsell Analysis"
      description="LLM Analysis for Telco Churn & Upsell Platform"
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <Link href="/nebula/capstone/selected" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Selected Projects
          </Link>
          <Link href="/nebula/capstone/perplexity/telco-churn-upsell" className="text-sm text-primary hover:underline">
            View Original Project →
          </Link>
        </div>

        <header className="mb-8 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-green-500/15 text-green-600 dark:text-green-400">Telecom CX</span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-pink-500/15 text-pink-600 dark:text-pink-400">Predictive ML</span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-orange-500/15 text-orange-600 dark:text-orange-400">Product TPM</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="mr-3">📈</span>Telco Churn & Upsell Platform
          </h1>
          <p className="text-muted-foreground mt-2">
            Real-time customer behavior analytics with churn prediction and next-best-action recommendations for retention and upsell campaigns.
          </p>
        </header>

        <section className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">LLM Analysis Perspectives</h2>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {Object.entries(activePerspective.interviewSignals).map(([signal, data]) => (
              <div key={signal} className="bg-muted/50 border border-border rounded-lg p-4">
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

          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <span className="text-xs font-semibold text-primary uppercase">TPM Archetype Fit</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {activePerspective.tpmFit.map((fit) => (<span key={fit} className="px-3 py-1 rounded text-sm bg-primary/10 text-primary">{fit}</span>))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-green-500">
              <span className="text-xs font-semibold text-green-500 uppercase">Key Strengths</span>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {activePerspective.strengths.map((s, i) => (<li key={i}>{s}</li>))}
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-yellow-500">
              <span className="text-xs font-semibold text-yellow-500 uppercase">Considerations</span>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {activePerspective.considerations.map((c, i) => (<li key={i}>{c}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 p-6 bg-card rounded-xl border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Consensus Summary</h2>
          <div className="space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">Strong on stakeholder complexity and scale; Medium on ambiguity and failure signals.</strong> This is the primary Product TPM project in the portfolio.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">Best For:</strong> Product TPM roles, customer-facing teams, revenue-focused positions</li>
              <li><strong className="text-foreground">Interview Value:</strong> Business stakeholder navigation, ROI articulation, customer-centric ML</li>
              <li><strong className="text-foreground">Differentiation:</strong> Balances infrastructure-heavy projects with business-facing narrative</li>
              <li><strong className="text-foreground">Portfolio Role:</strong> Demonstrates range - technical depth elsewhere, business acumen here</li>
            </ul>
          </div>
        </section>

        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          <Link href="/nebula/capstone/selected/fraud-detection" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Prev: Fraud Detection</Link>
          <Link href="/nebula/capstone/selected/model-governance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Next: Model Governance →</Link>
        </div>
      </div>
    </CapstoneLayout>
  );
}
