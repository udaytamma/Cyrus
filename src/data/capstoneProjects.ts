/**
 * Capstone Projects Data
 * Central registry of all 20 capstone projects across 4 LLM sources
 */

export interface CapstoneProject {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  icon: string;
  llm: "gemini" | "perplexity" | "chatgpt" | "claude";
  tags: { label: string; type: "telecom" | "enterprise" | "consumer" | "infra" | "ai" }[];
}

export interface LLMSource {
  id: "gemini" | "perplexity" | "chatgpt" | "claude";
  name: string;
  color: string;
  icon: string;
  description: string;
}

export const llmSources: LLMSource[] = [
  {
    id: "gemini",
    name: "Gemini",
    color: "#4285f4",
    icon: "✦",
    description: "PRD-style projects with clear MVP features and success metrics",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    color: "#20b2aa",
    icon: "◈",
    description: "Telecom-focused projects with executive alignment artifacts",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    color: "#10a37f",
    icon: "●",
    description: "Constraint-driven projects aligned with TPM positioning at cutting-edge technology companies",
  },
  {
    id: "claude",
    name: "Claude",
    color: "#cc785c",
    icon: "◆",
    description: "Product-focused AI projects emphasizing cross-functional leadership",
  },
];

export const capstoneProjects: CapstoneProject[] = [
  // Gemini Projects
  {
    id: "gemini/enterprise-genai-gateway",
    title: "Enterprise GenAI Gateway",
    shortTitle: "GenAI Gateway",
    summary: "Centralize and govern all outbound LLM traffic for security and cost control.",
    icon: "🚪",
    llm: "gemini",
    tags: [{ label: "Platform TPM", type: "infra" }, { label: "AI/ML", type: "ai" }],
  },
  {
    id: "gemini/smart-customer-voice-dashboard",
    title: "Smart Customer Voice Dashboard",
    shortTitle: "Customer Voice",
    summary: "Automate quantification of customer feedback for data-driven roadmaps.",
    icon: "📊",
    llm: "gemini",
    tags: [{ label: "Product TPM", type: "enterprise" }, { label: "AI/ML", type: "ai" }],
  },
  {
    id: "gemini/multimedia-content-safety",
    title: "Multimedia Content Safety",
    shortTitle: "Content Safety",
    summary: "Real-time UGC moderation with multi-modal AI detection.",
    icon: "🛡️",
    llm: "gemini",
    tags: [{ label: "Consumer AI", type: "consumer" }, { label: "Trust & Safety", type: "enterprise" }],
  },
  {
    id: "gemini/rag-knowledge-bot",
    title: "RAG Knowledge Bot",
    shortTitle: "Knowledge Bot",
    summary: "Citation-powered AI assistant for internal knowledge management.",
    icon: "📚",
    llm: "gemini",
    tags: [{ label: "Enterprise", type: "enterprise" }, { label: "RAG/AI", type: "ai" }],
  },
  {
    id: "gemini/strangler-fig-migration",
    title: "Strangler Fig Migration",
    shortTitle: "Migration",
    summary: "Incremental monolith to microservices with zero downtime.",
    icon: "🌿",
    llm: "gemini",
    tags: [{ label: "Infrastructure TPM", type: "infra" }, { label: "DevOps", type: "enterprise" }],
  },

  // Perplexity Projects
  {
    id: "perplexity/telco-genai-ops-copilot",
    title: "Telco GenAI Ops Co-Pilot",
    shortTitle: "Ops Co-Pilot",
    summary: "AI assistant for NOC engineers to triage incidents and propose runbook steps.",
    icon: "🎯",
    llm: "perplexity",
    tags: [{ label: "Telecom", type: "telecom" }, { label: "AI/ML", type: "ai" }],
  },
  {
    id: "perplexity/telco-churn-upsell",
    title: "Telco Churn & Upsell Platform",
    shortTitle: "Churn & Upsell",
    summary: "Churn prediction with next-best-action recommendations for retention.",
    icon: "📈",
    llm: "perplexity",
    tags: [{ label: "Telecom", type: "telecom" }, { label: "Product TPM", type: "enterprise" }],
  },
  {
    id: "perplexity/ai-tpm-control-tower",
    title: "AI TPM Control Tower",
    shortTitle: "Control Tower",
    summary: "Auto-summarize program status and risks from tickets and docs.",
    icon: "🗼",
    llm: "perplexity",
    tags: [{ label: "Enterprise SaaS", type: "enterprise" }, { label: "TPM", type: "infra" }],
  },
  {
    id: "perplexity/network-voc-hub",
    title: "Network Quality VoC Hub",
    shortTitle: "Network VoC",
    summary: "Link customer feedback to network KPIs and geo locations.",
    icon: "📡",
    llm: "perplexity",
    tags: [{ label: "Telecom", type: "telecom" }, { label: "AI/ML", type: "ai" }],
  },
  {
    id: "perplexity/genai-experimentation-platform",
    title: "GenAI Experimentation Platform",
    shortTitle: "Experimentation",
    summary: "Platform for PMs to test AI product ideas with guardrails.",
    icon: "🧪",
    llm: "perplexity",
    tags: [{ label: "Consumer AI", type: "consumer" }, { label: "Platform", type: "infra" }],
  },

  // ChatGPT Projects
  {
    id: "chatgpt/telecom-network-ops",
    title: "Telecom AI Network Ops",
    shortTitle: "Network Ops",
    summary: "AI-powered network monitoring and automated incident response.",
    icon: "🌐",
    llm: "chatgpt",
    tags: [{ label: "Telecom", type: "telecom" }, { label: "AI/ML TPM", type: "ai" }],
  },
  {
    id: "chatgpt/ai-cost-intelligence",
    title: "AI Cost Intelligence",
    shortTitle: "Cost Intelligence",
    summary: "FinOps platform for AI/ML infrastructure spend optimization.",
    icon: "💰",
    llm: "chatgpt",
    tags: [{ label: "Platform TPM", type: "infra" }, { label: "FinOps", type: "enterprise" }],
  },
  {
    id: "chatgpt/consumer-ai-assistant",
    title: "Consumer AI Assistant",
    shortTitle: "AI Assistant",
    summary: "Multi-modal AI assistant with personalization for consumer apps.",
    icon: "🤝",
    llm: "chatgpt",
    tags: [{ label: "Consumer AI", type: "consumer" }, { label: "Product TPM", type: "enterprise" }],
  },
  {
    id: "chatgpt/program-governance-hub",
    title: "Program Governance Hub",
    shortTitle: "Governance Hub",
    summary: "Executive alignment tool with RACI and stakeholder mapping.",
    icon: "📋",
    llm: "chatgpt",
    tags: [{ label: "TPM", type: "infra" }, { label: "Enterprise", type: "enterprise" }],
  },
  {
    id: "chatgpt/ai-service-assurance",
    title: "AI Service Assurance",
    shortTitle: "Service Assurance",
    summary: "SLA monitoring and predictive maintenance for telecom services.",
    icon: "✅",
    llm: "chatgpt",
    tags: [{ label: "Telecom", type: "telecom" }, { label: "SRE", type: "infra" }],
  },

  // Claude Projects
  {
    id: "claude/capacity-planning",
    title: "Intelligent Capacity Planning",
    shortTitle: "Capacity Planning",
    summary: "AI-powered infrastructure forecasting for telecom networks.",
    icon: "📊",
    llm: "claude",
    tags: [{ label: "Telecom", type: "telecom" }, { label: "Data Platform", type: "infra" }],
  },
  {
    id: "claude/journey-orchestration",
    title: "Journey Orchestration Engine",
    shortTitle: "Journey Engine",
    summary: "Event-driven personalization for multi-channel experiences.",
    icon: "🎯",
    llm: "claude",
    tags: [{ label: "Product TPM", type: "enterprise" }, { label: "AI/ML", type: "ai" }],
  },
  {
    id: "claude/fraud-detection",
    title: "Telco Payment Fraud Detection",
    shortTitle: "Fraud Detection",
    summary: "Real-time payment fraud decisioning for Telco/MSP with P99 106ms at 50 users (baseline), 5 fraud patterns, and a hot-reload policy engine.",
    icon: "🛡️",
    llm: "claude",
    tags: [{ label: "Telecom", type: "telecom" }, { label: "AI/ML TPM", type: "ai" }, { label: "Risk", type: "enterprise" }],
  },
  {
    id: "claude/developer-experience",
    title: "Developer Experience Platform",
    shortTitle: "DevEx Platform",
    summary: "Internal portal with AI code assistance and onboarding.",
    icon: "⚡",
    llm: "claude",
    tags: [{ label: "Platform", type: "infra" }, { label: "DevEx", type: "enterprise" }],
  },
  {
    id: "claude/model-governance",
    title: "AI Model Governance",
    shortTitle: "Model Governance",
    summary: "MLOps platform for versioning, approvals, and compliance.",
    icon: "🔐",
    llm: "claude",
    tags: [{ label: "MLOps", type: "ai" }, { label: "Enterprise", type: "enterprise" }],
  },
];

// Selected projects (featured portfolio)
export const selectedProjects = [
  { id: "ops-copilot", title: "Ops Co-Pilot", icon: "🎯", source: "Perplexity", description: "AI assistant for network operations" },
  { id: "ai-service-assurance", title: "Service Assurance", icon: "✅", source: "ChatGPT", description: "Proactive service quality monitoring" },
  { id: "fraud-detection", title: "Fraud Detection", icon: "🛡️", source: "Claude", description: "ML-powered fraud prevention" },
  { id: "churn-upsell", title: "Churn & Upsell", icon: "📈", source: "Perplexity", description: "Customer retention analytics" },
  { id: "model-governance", title: "Model Governance", icon: "🔐", source: "Claude", description: "ML lifecycle management" },
];

// WIP projects
export const wipProjects = [
  { id: "fraud-detection-prd", title: "Fraud Detection PRD", icon: "📋", description: "Product Requirements Document v1.2" },
  { id: "fraud-detection-analysis", title: "Fraud Detection Analysis", icon: "📊", description: "Technical Reference & Research" },
];

// Helper functions
export function getProjectsByLLM(llm: string): CapstoneProject[] {
  return capstoneProjects.filter(p => p.llm === llm);
}

export function getProjectById(id: string): CapstoneProject | undefined {
  return capstoneProjects.find(p => p.id === id);
}

export function getLLMById(id: string): LLMSource | undefined {
  return llmSources.find(l => l.id === id);
}

// Tag color mappings
export const tagColors: Record<string, { bg: string; text: string }> = {
  telecom: { bg: "bg-green-500/15", text: "text-green-600 dark:text-green-400" },
  enterprise: { bg: "bg-blue-500/15", text: "text-blue-600 dark:text-blue-400" },
  consumer: { bg: "bg-orange-500/15", text: "text-orange-600 dark:text-orange-400" },
  infra: { bg: "bg-purple-500/15", text: "text-purple-600 dark:text-purple-400" },
  ai: { bg: "bg-pink-500/15", text: "text-pink-600 dark:text-pink-400" },
};
