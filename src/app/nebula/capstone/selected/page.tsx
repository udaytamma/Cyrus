"use client";

import { useState } from "react";
import Link from "next/link";
import { CapstoneLayout } from "@/components/CapstoneLayout";

interface SelectedProject {
  id: string;
  title: string;
  originalPath: string;
  llmSource: string;
  llmColor: string;
  summary: string;
  icon: string;
  interviewSignals: {
    ambiguity: "Strong" | "Medium" | "Weak";
    stakeholders: "Strong" | "Medium" | "Weak";
    scale: "Strong" | "Medium" | "Weak";
    failure: "Strong" | "Medium" | "Weak";
  };
  tpmType: ("Platform" | "Product" | "Ops")[];
}

const selectedProjects: SelectedProject[] = [
  {
    id: "ops-copilot",
    title: "Telco GenAI Ops Co-Pilot",
    originalPath: "/nebula/capstone/perplexity/telco-genai-ops-copilot",
    llmSource: "Perplexity",
    llmColor: "#20b2aa",
    summary:
      "AI-powered operational assistant automating network troubleshooting, incident triage, and runbook generation.",
    icon: "🎯",
    interviewSignals: {
      ambiguity: "Strong",
      stakeholders: "Strong",
      scale: "Strong",
      failure: "Strong",
    },
    tpmType: ["Ops", "Platform"],
  },
  {
    id: "ai-service-assurance",
    title: "AI-Powered Service Assurance",
    originalPath: "/nebula/capstone/chatgpt/ai-service-assurance",
    llmSource: "ChatGPT",
    llmColor: "#10a37f",
    summary:
      "Intelligent monitoring with ML-driven anomaly detection and automated root cause analysis.",
    icon: "✅",
    interviewSignals: {
      ambiguity: "Strong",
      stakeholders: "Medium",
      scale: "Strong",
      failure: "Strong",
    },
    tpmType: ["Platform", "Ops"],
  },
  {
    id: "fraud-detection",
    title: "Real-time Fraud Detection",
    originalPath: "/nebula/capstone/claude/fraud-detection",
    llmSource: "Claude",
    llmColor: "#cc785c",
    summary:
      "Streaming ML pipeline with explainable fraud scoring and real-time alerting.",
    icon: "🛡️",
    interviewSignals: {
      ambiguity: "Strong",
      stakeholders: "Strong",
      scale: "Strong",
      failure: "Strong",
    },
    tpmType: ["Platform", "Product"],
  },
  {
    id: "churn-upsell",
    title: "Telco Churn & Upsell Platform",
    originalPath: "/nebula/capstone/perplexity/telco-churn-upsell",
    llmSource: "Perplexity",
    llmColor: "#20b2aa",
    summary:
      "Real-time customer behavior analytics with churn prediction and next-best-action recommendations.",
    icon: "📈",
    interviewSignals: {
      ambiguity: "Medium",
      stakeholders: "Strong",
      scale: "Strong",
      failure: "Medium",
    },
    tpmType: ["Product", "Platform"],
  },
  {
    id: "model-governance",
    title: "AI Model Governance & Registry",
    originalPath: "/nebula/capstone/claude/model-governance",
    llmSource: "Claude",
    llmColor: "#cc785c",
    summary:
      "MLOps platform for model versioning, approval workflows, and compliance tracking.",
    icon: "🔐",
    interviewSignals: {
      ambiguity: "Strong",
      stakeholders: "Strong",
      scale: "Medium",
      failure: "Strong",
    },
    tpmType: ["Platform", "Ops"],
  },
];

type LLMTab = "perplexity" | "claude" | "gemini" | "chatgpt";

interface LLMAnalysis {
  id: LLMTab;
  name: string;
  color: string;
  icon: string;
  summary: string;
  keyInsights: string[];
}

const llmAnalyses: LLMAnalysis[] = [
  {
    id: "perplexity",
    name: "Perplexity",
    color: "#20b2aa",
    icon: "🔍",
    summary:
      "Emphasizes telecom domain expertise and operational excellence with strong coverage across all interview dimensions.",
    keyInsights: [
      "Ops Co-Pilot and Fraud Detection provide strongest interview signals across all dimensions",
      "Service Assurance excels in proactive/predictive scenarios over reactive",
      "Churn & Upsell offers strong product TPM positioning with business impact metrics",
      "Model Governance demonstrates cross-functional leadership in regulated environments",
    ],
  },
  {
    id: "claude",
    name: "Claude",
    color: "#cc785c",
    icon: "🧠",
    summary:
      "Focuses on TPM archetype fit and practical interview positioning with cross-functional leadership emphasis.",
    keyInsights: [
      "Fraud Detection rated strongest overall for demonstrating technical depth + business impact",
      "Model Governance well-suited for Mag7 due to MLOps/governance industry trend",
      "Ops Co-Pilot showcases crisis management and stakeholder orchestration",
      "Service Assurance complements Ops Co-Pilot with predictive capabilities",
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    color: "#4285f4",
    icon: "💎",
    summary:
      'Applies "Critical Few" methodology prioritizing Tech Chops, Navigating Complexity, and Business Value.',
    keyInsights: [
      "Top 3 recommended: Fraud Detection, Service Assurance, Model Governance",
      "Fraud Detection offers maximum breadth: real-time ML + business rules + explainability",
      "Service Assurance demonstrates proactive infrastructure ownership",
      "Model Governance aligns with Mag7 responsible AI focus areas",
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    color: "#10a37f",
    icon: "🤖",
    summary:
      "Provides constraint-driven evaluation matrix aligned with Mag7 TPM expectations.",
    keyInsights: [
      "Fraud Detection and Model Governance rated strongest overall",
      "Ops Co-Pilot excels in ambiguity navigation and cross-team collaboration",
      "Service Assurance strongest in scale signals with SLA/performance focus",
      "Portfolio diversity across all 5 projects covers Platform, Product, and Ops TPM types",
    ],
  },
];

const signalColors = {
  Strong: {
    bg: "bg-green-500/15",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-500/30",
  },
  Medium: {
    bg: "bg-amber-500/15",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/30",
  },
  Weak: {
    bg: "bg-red-500/15",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-500/30",
  },
};

function SignalBadge({
  strength,
}: {
  strength: "Strong" | "Medium" | "Weak";
}) {
  return (
    <span
      className={`px-2 py-0.5 rounded text-xs font-medium ${signalColors[strength].bg} ${signalColors[strength].text}`}
    >
      {strength}
    </span>
  );
}

export default function SelectedProjectsPage() {
  const [activeTab, setActiveTab] = useState<LLMTab>("perplexity");
  const activeAnalysis = llmAnalyses.find((a) => a.id === activeTab)!;

  return (
    <CapstoneLayout
      title="Selected Projects"
      description="5 Capstone Projects Selected for Mag7 TPM Interview Portfolio"
    >
      <div className="max-w-[1200px] mx-auto">
        <Link
          href="/nebula/capstone"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
        >
          ← Back to All Projects
        </Link>

        {/* Header */}
        <header className="text-center mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-10 h-10">
              <path
                d="M12 20 L18 26 L28 14"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Selected Projects
          </h1>
          <p className="text-muted-foreground">
            5 capstone projects chosen for Mag7 TPM interview portfolio
          </p>
        </header>

        {/* LLM Analysis Section */}
        <section className="bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            LLM Analysis Perspectives
          </h2>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 mb-5">
            {llmAnalyses.map((llm) => (
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

          {/* Active Analysis Content */}
          <div
            className="rounded-lg p-5"
            style={{
              borderLeft: `3px solid ${activeAnalysis.color}`,
              background: `linear-gradient(to right, ${activeAnalysis.color}08, transparent)`,
            }}
          >
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {activeAnalysis.summary}
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              {activeAnalysis.keyInsights.map((insight, i) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-green-500/30">
            <h2 className="text-lg font-semibold text-primary">
              Portfolio Projects
            </h2>
            <span className="text-sm text-muted-foreground">5 selected</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-xl p-5 hover:shadow-md transition-all border"
                style={{
                  background: `linear-gradient(to right, ${project.llmColor}08, transparent)`,
                  borderColor: `${project.llmColor}30`,
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: project.llmColor }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Interview Signals */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {Object.entries(project.interviewSignals).map(
                    ([signal, strength]) => (
                      <span
                        key={signal}
                        className={`px-2 py-0.5 rounded text-xs font-medium ${signalColors[strength].bg} ${signalColors[strength].text}`}
                      >
                        {signal.charAt(0).toUpperCase() + signal.slice(1)}:{" "}
                        {strength}
                      </span>
                    )
                  )}
                </div>

                {/* TPM Types */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tpmType.map((type) => (
                    <span
                      key={type}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-purple-500/15 text-purple-600 dark:text-purple-400"
                    >
                      {type} TPM
                    </span>
                  ))}
                  <span
                    className="px-2 py-0.5 rounded text-xs font-medium"
                    style={{
                      backgroundColor: `${project.llmColor}20`,
                      color: project.llmColor,
                    }}
                  >
                    {project.llmSource}
                  </span>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-3 border-t border-border/50">
                  <Link
                    href={`/nebula/capstone/selected/${project.id}`}
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    View Analysis →
                  </Link>
                  <Link
                    href={project.originalPath}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Original Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b-2 border-blue-500/30">
            Interview Signal Matrix
          </h2>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-gradient-to-r from-muted to-transparent">
                    Project
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-gradient-to-r from-muted to-transparent">
                    Ambiguity
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-gradient-to-r from-muted to-transparent">
                    Stakeholders
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-gradient-to-r from-muted to-transparent">
                    Scale
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-gradient-to-r from-muted to-transparent">
                    Failure
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-gradient-to-r from-muted to-transparent">
                    TPM Type
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {selectedProjects.map((project) => (
                  <tr key={project.id} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium text-foreground">
                      <span className="mr-2">{project.icon}</span>
                      {project.title}
                    </td>
                    <td className="py-3 px-4">
                      <SignalBadge strength={project.interviewSignals.ambiguity} />
                    </td>
                    <td className="py-3 px-4">
                      <SignalBadge
                        strength={project.interviewSignals.stakeholders}
                      />
                    </td>
                    <td className="py-3 px-4">
                      <SignalBadge strength={project.interviewSignals.scale} />
                    </td>
                    <td className="py-3 px-4">
                      <SignalBadge strength={project.interviewSignals.failure} />
                    </td>
                    <td className="py-3 px-4">{project.tpmType.join(" / ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="text-center py-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Portfolio curated for Senior TPM roles at Mag7 companies
          </p>
        </footer>
      </div>
    </CapstoneLayout>
  );
}
