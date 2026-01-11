"use client";

/**
 * Capstone Project Comparison - All 20 Projects Across 4 LLMs
 * Comprehensive comparative analysis organized by source and category
 */

import Link from "next/link";
import { CapstoneLayout } from "@/components/CapstoneLayout";

interface ProjectInfo {
  id: string;
  title: string;
  summary: string;
  llm: "gemini" | "perplexity" | "chatgpt" | "claude";
  category: "telecom" | "enterprise" | "consumer" | "platform" | "ai-ml";
  roleAlignment: string;
  telecomLeverage: "High" | "Medium" | "Low";
  aiDepth: "High" | "Medium" | "Low";
  feasibility: "High" | "Medium" | "Low";
}

const allProjects: ProjectInfo[] = [
  // Gemini Projects
  { id: "enterprise-genai-gateway", title: "Enterprise GenAI Gateway", summary: "Centralize and govern all outbound LLM traffic for security and cost control.", llm: "gemini", category: "platform", roleAlignment: "Platform TPM", telecomLeverage: "Low", aiDepth: "High", feasibility: "High" },
  { id: "smart-customer-voice-dashboard", title: "Smart Customer Voice Dashboard", summary: "Automate quantification of customer feedback for data-driven roadmaps.", llm: "gemini", category: "enterprise", roleAlignment: "Product TPM", telecomLeverage: "High", aiDepth: "High", feasibility: "High" },
  { id: "multimedia-content-safety", title: "Multimedia Content Safety", summary: "Real-time UGC moderation with multi-modal AI detection.", llm: "gemini", category: "consumer", roleAlignment: "AI/ML TPM", telecomLeverage: "Low", aiDepth: "High", feasibility: "Medium" },
  { id: "rag-knowledge-bot", title: "RAG Knowledge Bot", summary: "Citation-powered AI assistant for internal knowledge management.", llm: "gemini", category: "ai-ml", roleAlignment: "Enterprise TPM", telecomLeverage: "Low", aiDepth: "High", feasibility: "High" },
  { id: "strangler-fig-migration", title: "Strangler Fig Migration", summary: "Incremental monolith to microservices with zero downtime.", llm: "gemini", category: "platform", roleAlignment: "Infra TPM", telecomLeverage: "High", aiDepth: "Low", feasibility: "Medium" },
  // Perplexity Projects
  { id: "telco-genai-ops-copilot", title: "Telco GenAI Ops Co-Pilot", summary: "AI assistant for NOC engineers to triage incidents and propose runbook steps.", llm: "perplexity", category: "telecom", roleAlignment: "AI/ML TPM", telecomLeverage: "High", aiDepth: "High", feasibility: "High" },
  { id: "telco-churn-upsell", title: "Telco Churn & Upsell Platform", summary: "Churn prediction with next-best-action recommendations for retention.", llm: "perplexity", category: "telecom", roleAlignment: "Product TPM", telecomLeverage: "High", aiDepth: "High", feasibility: "High" },
  { id: "ai-tpm-control-tower", title: "AI TPM Control Tower", summary: "Auto-summarize program status and risks from tickets and docs.", llm: "perplexity", category: "enterprise", roleAlignment: "TPM", telecomLeverage: "Low", aiDepth: "Medium", feasibility: "High" },
  { id: "network-voc-hub", title: "Network Quality VoC Hub", summary: "Link customer feedback to network KPIs and geo locations.", llm: "perplexity", category: "telecom", roleAlignment: "Product TPM", telecomLeverage: "High", aiDepth: "High", feasibility: "Medium" },
  { id: "genai-experimentation-platform", title: "GenAI Experimentation Platform", summary: "Platform for PMs to test AI product ideas with guardrails.", llm: "perplexity", category: "platform", roleAlignment: "Platform TPM", telecomLeverage: "Low", aiDepth: "High", feasibility: "Medium" },
  // ChatGPT Projects
  { id: "telecom-network-ops", title: "Telecom AI Network Ops", summary: "AI-powered network monitoring and automated incident response.", llm: "chatgpt", category: "telecom", roleAlignment: "AI/ML TPM", telecomLeverage: "High", aiDepth: "High", feasibility: "High" },
  { id: "ai-cost-intelligence", title: "AI Cost Intelligence", summary: "FinOps platform for AI/ML infrastructure spend optimization.", llm: "chatgpt", category: "platform", roleAlignment: "Platform TPM", telecomLeverage: "Low", aiDepth: "Medium", feasibility: "High" },
  { id: "consumer-ai-assistant", title: "Consumer AI Assistant", summary: "Multi-modal AI assistant with personalization for consumer apps.", llm: "chatgpt", category: "consumer", roleAlignment: "Product TPM", telecomLeverage: "Medium", aiDepth: "High", feasibility: "Medium" },
  { id: "program-governance-hub", title: "Program Governance Hub", summary: "Executive alignment tool with RACI and stakeholder mapping.", llm: "chatgpt", category: "enterprise", roleAlignment: "TPM", telecomLeverage: "Low", aiDepth: "Medium", feasibility: "High" },
  { id: "ai-service-assurance", title: "AI Service Assurance", summary: "SLA monitoring and predictive maintenance for telecom services.", llm: "chatgpt", category: "telecom", roleAlignment: "Infra TPM", telecomLeverage: "High", aiDepth: "Medium", feasibility: "High" },
  // Claude Projects
  { id: "capacity-planning", title: "Intelligent Capacity Planning", summary: "AI-powered infrastructure forecasting for telecom networks.", llm: "claude", category: "telecom", roleAlignment: "Data TPM", telecomLeverage: "High", aiDepth: "High", feasibility: "Medium" },
  { id: "journey-orchestration", title: "Journey Orchestration Engine", summary: "Event-driven personalization for multi-channel experiences.", llm: "claude", category: "consumer", roleAlignment: "Product TPM", telecomLeverage: "Medium", aiDepth: "High", feasibility: "Medium" },
  { id: "fraud-detection", title: "Real-time Fraud Detection", summary: "Streaming ML pipeline with explainable fraud scoring.", llm: "claude", category: "ai-ml", roleAlignment: "AI/ML TPM", telecomLeverage: "High", aiDepth: "High", feasibility: "Medium" },
  { id: "developer-experience", title: "Developer Experience Platform", summary: "Internal portal with AI code assistance and onboarding.", llm: "claude", category: "platform", roleAlignment: "Platform TPM", telecomLeverage: "Low", aiDepth: "Medium", feasibility: "High" },
  { id: "model-governance", title: "AI Model Governance", summary: "MLOps platform for versioning, approvals, and compliance.", llm: "claude", category: "ai-ml", roleAlignment: "MLOps TPM", telecomLeverage: "Low", aiDepth: "High", feasibility: "Medium" },
];

const llmColors: Record<string, string> = {
  gemini: "#4285f4",
  perplexity: "#20b2aa",
  chatgpt: "#10a37f",
  claude: "#cc785c",
};

const llmNames: Record<string, string> = {
  gemini: "Gemini",
  perplexity: "Perplexity",
  chatgpt: "ChatGPT",
  claude: "Claude",
};

const llmDescriptions: Record<string, string> = {
  gemini: "PRD-style projects with clear MVP features and success metrics",
  perplexity: "Telecom-focused projects with executive alignment artifacts",
  chatgpt: "Constraint-driven projects aligned with Mag7 TPM positioning",
  claude: "Product-focused AI projects emphasizing cross-functional leadership",
};

const categoryIcons: Record<string, string> = {
  telecom: "📡",
  enterprise: "🏢",
  consumer: "👤",
  platform: "🔧",
  "ai-ml": "🤖",
};

const categoryNames: Record<string, string> = {
  telecom: "Telecom Domain",
  enterprise: "Enterprise SaaS",
  consumer: "Consumer AI",
  platform: "Platform/Infra",
  "ai-ml": "AI/ML Core",
};

function ComparisonContent() {
  const projectsByLLM = (llm: string) => allProjects.filter((p) => p.llm === llm);
  const projectsByCategory = (cat: string) => allProjects.filter((p) => p.category === cat);

  const getScoreClass = (score: string) => {
    if (score === "High") return "bg-green-500/20 text-green-600 dark:text-green-400";
    if (score === "Medium") return "bg-amber-500/20 text-amber-600 dark:text-amber-400";
    return "bg-red-500/20 text-red-600 dark:text-red-400";
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <Link
        href="/nebula/capstone"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to All Projects
      </Link>

      {/* Header */}
      <header className="text-center mb-8 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Capstone Project Comparison
        </h1>
        <p className="text-muted-foreground">
          Strategic analysis of 20 projects from 4 LLMs for Senior TPM portfolio targeting Mag7 companies
        </p>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: "20", label: "Total Projects", color: "blue" },
          { value: "4", label: "LLM Sources", color: "purple" },
          { value: "5", label: "Categories", color: "green" },
          { value: "8", label: "Telecom-Focused", color: "amber" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl p-4 text-center bg-gradient-to-r from-${stat.color}-500/5 to-transparent border border-${stat.color}-500/30`}
          >
            <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Projects by LLM Source */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-primary mb-6 pb-2 border-b-2 border-purple-500/30">
          Projects by LLM Source
        </h2>

        {(["gemini", "perplexity", "chatgpt", "claude"] as const).map((llm) => (
          <div
            key={llm}
            className="mb-6 p-5 rounded-xl border"
            style={{
              background: `linear-gradient(to right, ${llmColors[llm]}08, transparent)`,
              borderColor: `${llmColors[llm]}40`,
            }}
          >
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-base font-semibold"
                style={{
                  backgroundColor: `${llmColors[llm]}20`,
                  color: llmColors[llm],
                  border: `1px solid ${llmColors[llm]}`,
                }}
              >
                {llmNames[llm]}
              </span>
              <p className="text-muted-foreground text-sm">{llmDescriptions[llm]}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {projectsByLLM(llm).map((project, idx) => (
                <Link
                  key={project.id}
                  href={`/nebula/capstone/${llm}/${project.id}`}
                  className="group block p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
                  style={{
                    background: `linear-gradient(to right, ${llmColors[llm]}05, transparent)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: llmColors[llm] }}
                    >
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      {project.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{
                        backgroundColor: `${llmColors[llm]}20`,
                        color: llmColors[llm],
                      }}
                    >
                      {project.roleAlignment}
                    </span>
                    {project.telecomLeverage === "High" && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-500/20 text-green-600 dark:text-green-400">
                        Telecom
                      </span>
                    )}
                    {project.aiDepth === "High" && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-purple-500/20 text-purple-600 dark:text-purple-400">
                        AI/ML
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Projects by Category */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-primary mb-6 pb-2 border-b-2 border-green-500/30">
          Projects by Category
        </h2>

        {(["telecom", "platform", "ai-ml", "enterprise", "consumer"] as const).map((cat) => (
          <div
            key={cat}
            className="mb-5 p-5 rounded-xl border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent"
          >
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
              <span className="text-xl">{categoryIcons[cat]}</span>
              {categoryNames[cat]} ({projectsByCategory(cat).length} projects)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {projectsByCategory(cat).map((project) => (
                <Link
                  key={project.id}
                  href={`/nebula/capstone/${project.llm}/${project.id}`}
                  className="group flex items-center gap-2 p-3 rounded-lg text-sm text-foreground hover:bg-primary/10 transition-colors border border-border"
                  style={{
                    background: `linear-gradient(to right, ${llmColors[project.llm]}05, transparent)`,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: llmColors[project.llm] }}
                  />
                  <span className="group-hover:text-primary transition-colors">{project.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Comparative Matrix */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-primary mb-6 pb-2 border-b-2 border-blue-500/30">
          Comparative Matrix
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 bg-gradient-to-r from-muted to-transparent font-semibold text-primary">Project</th>
                <th className="text-left py-3 px-4 bg-gradient-to-r from-muted to-transparent font-semibold text-primary">Source</th>
                <th className="text-left py-3 px-4 bg-gradient-to-r from-muted to-transparent font-semibold text-primary">Role Fit</th>
                <th className="text-left py-3 px-4 bg-gradient-to-r from-muted to-transparent font-semibold text-primary">Telecom</th>
                <th className="text-left py-3 px-4 bg-gradient-to-r from-muted to-transparent font-semibold text-primary">AI Depth</th>
                <th className="text-left py-3 px-4 bg-gradient-to-r from-muted to-transparent font-semibold text-primary">Feasibility</th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project) => (
                <tr key={project.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="py-3 px-4 font-medium">
                    <Link
                      href={`/nebula/capstone/${project.llm}/${project.id}`}
                      className="text-primary hover:underline"
                    >
                      {project.title}
                    </Link>
                  </td>
                  <td className="py-3 px-4">
                    <span style={{ color: llmColors[project.llm], fontWeight: 600 }}>
                      {llmNames[project.llm]}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{project.roleAlignment}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getScoreClass(project.telecomLeverage)}`}>
                      {project.telecomLeverage}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getScoreClass(project.aiDepth)}`}>
                      {project.aiDepth}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getScoreClass(project.feasibility)}`}>
                      {project.feasibility}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-10">
        <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border-2 border-primary/50">
          <h2 className="text-xl font-bold text-primary mb-4">Strategic Recommendations</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Based on analysis across all 20 project suggestions from 4 LLMs, here is a tiered recommendation
              for building a Senior TPM portfolio targeting Mag7 companies:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {/* Tier 1 */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border-2 border-green-500/40 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-3">
                  Tier 1: Must Build
                </div>
                <div className="text-sm text-foreground space-y-2 text-left">
                  <div className="py-1 border-b border-green-500/20">Telco GenAI Ops Co-Pilot (Perplexity)</div>
                  <div className="py-1 border-b border-green-500/20">Enterprise GenAI Gateway (Gemini)</div>
                  <div className="py-1 border-b border-green-500/20">Real-time Fraud Detection (Claude)</div>
                  <div className="py-1">Telecom AI Network Ops (ChatGPT)</div>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border-2 border-blue-500/40 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                  Tier 2: Strong Options
                </div>
                <div className="text-sm text-foreground space-y-2 text-left">
                  <div className="py-1 border-b border-blue-500/20">Telco Churn & Upsell (Perplexity)</div>
                  <div className="py-1 border-b border-blue-500/20">Smart Customer Voice (Gemini)</div>
                  <div className="py-1 border-b border-blue-500/20">AI Model Governance (Claude)</div>
                  <div className="py-1">AI Cost Intelligence (ChatGPT)</div>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-gray-500/10 to-transparent border-2 border-gray-500/40 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-3">
                  Tier 3: Differentiated
                </div>
                <div className="text-sm text-foreground space-y-2 text-left">
                  <div className="py-1 border-b border-gray-500/20">GenAI Experimentation Platform</div>
                  <div className="py-1 border-b border-gray-500/20">Multimedia Content Safety</div>
                  <div className="py-1 border-b border-gray-500/20">Journey Orchestration Engine</div>
                  <div className="py-1">Developer Experience Platform</div>
                </div>
              </div>
            </div>

            <p className="mt-6">
              <strong className="text-foreground">Key Insight:</strong> Prioritize projects that combine high telecom domain leverage
              with strong AI/ML depth. Perplexity and Claude projects tend to emphasize telecom scenarios,
              while Gemini provides the most structured PRD-style documentation. ChatGPT projects align well
              with Mag7 organizational constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-8 border-t border-border text-muted-foreground text-sm">
        Comparative analysis generated from suggestions by Gemini, Perplexity, ChatGPT, and Claude
      </footer>
    </div>
  );
}

export default function ComparisonPage() {
  return (
    <CapstoneLayout
      title="Capstone Comparison"
      description="Comparative analysis of 20 capstone projects from 4 LLMs"
    >
      <ComparisonContent />
    </CapstoneLayout>
  );
}
