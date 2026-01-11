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
        details:
          "Integrating AI with tribal knowledge and runbooks requires navigating undefined processes",
      },
      stakeholders: {
        rating: "Strong",
        details:
          "Spans NOC teams, engineering, IT, and compliance stakeholders",
      },
      scale: {
        rating: "Strong",
        details:
          "Handles 100K+ alerts daily with real-time response requirements",
      },
      failure: {
        rating: "Strong",
        details:
          "Every automation failure is visible; requires robust fallback mechanisms",
      },
    },
    tpmFit: ["Ops TPM", "Platform TPM"],
    strengths: [
      "Demonstrates crisis management and real-time decision support",
      "Strong telecom domain expertise showcase",
      "Measurable ROI through MTTR reduction",
    ],
    considerations: [
      "Requires access to realistic incident data",
      "LLM hallucination risk in runbook generation",
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
        details:
          "GenAI application in ops is nascent; defining success criteria is genuinely ambiguous",
      },
      stakeholders: {
        rating: "Strong",
        details:
          "NOC, SRE, network engineering, compliance, and vendor management all intersect",
      },
      scale: {
        rating: "Strong",
        details:
          "Production ops systems have inherent scale: 24/7 uptime, alert volumes, user base",
      },
      failure: {
        rating: "Strong",
        details:
          "Ops failures are immediately visible; provides natural failure story opportunities",
      },
    },
    tpmFit: ["Ops TPM (Primary)", "Platform TPM (Secondary)"],
    strengths: [
      "Showcases orchestration of AI + human operators in high-stakes environment",
      "Demonstrates understanding of production reliability requirements",
      "Natural fit for discussing incident postmortems and process improvements",
    ],
    considerations: [
      'Need to differentiate from generic "AI chatbot" implementations',
      "Should emphasize specific telecom context and domain expertise",
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
        details:
          'Defining what "good enough" automation looks like requires iterative discovery',
      },
      stakeholders: {
        rating: "Strong",
        details:
          "Cross-functional by nature: ops, engineering, product, compliance",
      },
      scale: {
        rating: "Strong",
        details:
          "Built for high-volume alert processing and concurrent incident handling",
      },
      failure: {
        rating: "Strong",
        details:
          "Automation failures have immediate customer impact; rich failure story potential",
      },
    },
    tpmFit: ["Ops TPM", "Platform TPM"],
    strengths: [
      "Aligns with Mag7 focus on AI-powered operational efficiency",
      "Demonstrates technical leadership in GenAI application",
      "Shows ability to balance automation with human oversight",
    ],
    considerations: [
      "Ensure clear metrics for LLM accuracy and human override rates",
      "Document edge cases and fallback procedures thoroughly",
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
        details:
          "Navigating AI trust boundaries in critical ops workflows",
      },
      stakeholders: {
        rating: "Strong",
        details:
          "Multiple ops teams, engineering, leadership, and external vendors",
      },
      scale: {
        rating: "Strong",
        details:
          "Production-grade requirements with 99.9%+ availability targets",
      },
      failure: {
        rating: "Strong",
        details:
          "Operational failures provide concrete examples for postmortem discussions",
      },
    },
    tpmFit: ["Ops TPM", "Platform TPM"],
    strengths: [
      "Strong demonstration of cross-team collaboration under pressure",
      "Clear business value proposition: reduced MTTR, fewer escalations",
      "Showcases pragmatic AI adoption (augmentation vs replacement)",
    ],
    considerations: [
      "Need to show measurable impact metrics",
      "Should address model governance and update cycles",
    ],
  },
];

const signalColors = {
  Strong: {
    bg: "rgba(34, 197, 94, 0.15)",
    text: "text-green-600 dark:text-green-400",
  },
  Medium: {
    bg: "rgba(251, 191, 36, 0.15)",
    text: "text-yellow-600 dark:text-yellow-400",
  },
  Weak: {
    bg: "rgba(239, 68, 68, 0.15)",
    text: "text-red-600 dark:text-red-400",
  },
};

export default function OpsCopilotAnalysisPage() {
  const [activeTab, setActiveTab] = useState<LLMTab>("perplexity");
  const activePerspective = llmPerspectives.find((p) => p.id === activeTab)!;

  return (
    <CapstoneLayout
      title="Ops Co-Pilot Analysis"
      description="LLM Analysis for Telco GenAI Ops Co-Pilot"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Navigation Links */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <Link
            href="/nebula/capstone/selected"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Selected Projects
          </Link>
          <Link
            href="/nebula/capstone/perplexity/telco-genai-ops-copilot"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View Original Project <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/30">
              Telecom
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-pink-500/15 text-pink-600 dark:text-pink-400 border border-pink-500/30">
              GenAI/LLM
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
              Ops TPM
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Telco GenAI Ops Co-Pilot
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-powered operational assistant automating network troubleshooting,
            incident triage, and runbook generation using LLM-driven insights
            from ITSM and monitoring data.
          </p>
        </header>

        {/* LLM Analysis Section */}
        <section className="bg-gradient-to-r from-green-500/5 to-transparent border border-green-500/30 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            LLM Analysis Perspectives
          </h2>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 mb-5">
            {llmPerspectives.map((llm) => (
              <button
                key={llm.id}
                onClick={() => setActiveTab(llm.id)}
                className={`px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                  activeTab === llm.id
                    ? "font-semibold border-2"
                    : "border border-border bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
                style={{
                  borderColor: activeTab === llm.id ? llm.color : undefined,
                  background:
                    activeTab === llm.id ? `${llm.color}15` : undefined,
                  color: activeTab === llm.id ? llm.color : undefined,
                }}
              >
                <span>{llm.icon}</span>
                {llm.name}
              </button>
            ))}
          </div>

          {/* Interview Signals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {Object.entries(activePerspective.interviewSignals).map(
              ([signal, data]) => (
                <div
                  key={signal}
                  className="bg-card/50 border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-foreground capitalize">
                      {signal === "ambiguity"
                        ? "Ambiguity Navigation"
                        : signal === "stakeholders"
                        ? "Stakeholder Complexity"
                        : signal === "scale"
                        ? "Scale Signals"
                        : "Failure Stories"}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        signalColors[data.rating as keyof typeof signalColors]
                          .text
                      }`}
                      style={{
                        background:
                          signalColors[data.rating as keyof typeof signalColors]
                            .bg,
                      }}
                    >
                      {data.rating}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {data.details}
                  </p>
                </div>
              )
            )}
          </div>

          {/* TPM Fit */}
          <div className="bg-card/50 rounded-lg p-4 mb-4 border border-border">
            <span className="text-xs font-semibold text-primary uppercase">
              TPM Archetype Fit
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {activePerspective.tpmFit.map((fit) => (
                <span
                  key={fit}
                  className="px-3 py-1 rounded text-sm bg-primary/10 text-primary border border-primary/20"
                >
                  {fit}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths & Considerations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-500/10 to-transparent rounded-lg p-4 border-l-4 border-green-500">
              <span className="text-xs font-semibold text-green-500 uppercase">
                Key Strengths
              </span>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {activePerspective.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg p-4 border-l-4 border-yellow-500">
              <span className="text-xs font-semibold text-yellow-500 uppercase">
                Considerations
              </span>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {activePerspective.considerations.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Consensus Summary */}
        <section className="mb-8 p-6 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-xl border border-indigo-500/30">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Consensus Summary
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">
                All four LLMs rate Ops Co-Pilot as &quot;Strong&quot; across all interview
                signal dimensions.
              </strong>{" "}
              This project demonstrates exceptional breadth for Mag7 TPM
              interviews.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Best For</strong>
                <p className="text-sm mt-1">Ops TPM roles, infrastructure teams, companies investing in AIOps</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Interview Value</strong>
                <p className="text-sm mt-1">Crisis management stories, cross-functional orchestration, GenAI application</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Differentiation</strong>
                <p className="text-sm mt-1">Telecom domain expertise + production ops experience + AI implementation</p>
              </div>
              <div className="p-3 bg-card/50 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                <strong className="text-foreground text-sm">Synergy</strong>
                <p className="text-sm mt-1">Pairs well with AI Service Assurance (reactive + proactive coverage)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          <Link
            href="/nebula/capstone/selected"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Back to Selected
          </Link>
          <Link
            href="/nebula/capstone/selected/ai-service-assurance"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            Next: AI Service Assurance <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </CapstoneLayout>
  );
}
