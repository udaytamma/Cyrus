export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "featured" | "hobby";
  status: "active" | "completed" | "in-progress";
  technologies: string[];
  features: string[];
  links: {
    demo?: string;
    github?: string;
    docs?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: "fraud-detection",
    title: "Payment Fraud Detection Platform for Telcos & MSPs",
    description:
      "Enterprise-grade real-time fraud detection with hybrid ML + rules scoring, champion/challenger A/B testing, sub-200ms latency, and complete evidence capture.",
    longDescription: `A comprehensive fraud detection platform designed for high-throughput payment processing environments. The system processes authorization requests in real-time using a hybrid ML + rules scoring engine that blends XGBoost/LightGBM model predictions (70% weight) with rule-based detection signals (30% weight) across 5 detector types.

Key architectural decisions include champion/challenger model routing with deterministic hashing (80/15/5 split), a three-path data architecture (request-time, real-time Redis, async PostgreSQL), profit-based threshold optimization, and a hot-reload policy engine using YAML configuration. The platform achieves sub-200ms decision latency at 260+ requests per second with 28 ML features, PSI-based drift detection, and full evidence capture for dispute resolution.`,
    category: "featured",
    status: "active",
    technologies: [
      "Python",
      "FastAPI",
      "XGBoost",
      "LightGBM",
      "Redis",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    features: [
      "Hybrid ML + rules scoring (XGBoost/LightGBM)",
      "Champion/challenger A/B testing with holdout",
      "28 ML features with PSI drift detection",
      "Sub-200ms decision latency at 260+ RPS",
      "Hot-reload YAML policy engine",
      "Evidence vault with ML feature snapshots",
    ],
    links: {
      demo: "https://fraud-detect.zeroleaf.dev/",
      github: "https://github.com/udaytamma/FraudDetection",
      docs: "/docs/fraud-platform",
    },
    metrics: [
      { label: "Latency P99", value: "<200ms" },
      { label: "Throughput", value: "260+ RPS" },
      { label: "Model AUC", value: ">0.90" },
      { label: "ML Features", value: "28" },
    ],
  },
  {
    id: "telcoops",
    title: "TelcoOps: AI-Assisted Network Incident RCA",
    description:
      "Telecom operations platform that correlates noisy alerts into incidents and generates baseline + LLM RCA with RAG context.",
    longDescription: `TelcoOps is a full-stack incident RCA workflow for telecom network operations. It generates synthetic incident scenarios, correlates alerts into incidents, produces a deterministic baseline RCA, and compares it with an LLM-powered RCA enriched with RAG context.

The MVP emphasizes auditability and operational safety: all LLM requests and responses are stored with the incident, baseline reasoning is always available, providers can switch between a hosted Gemini model or a self-hosted Tele-LLM endpoint, and an optional API token gate protects write/metrics endpoints.`,
    category: "featured",
    status: "active",
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Streamlit",
      "LlamaIndex",
      "HuggingFace Embeddings",
      "Gemini",
    ],
    features: [
      "Multi-scenario generator with tunable noise and seeds",
      "Rule-based incident correlation",
      "Baseline RCA with confidence scoring",
      "LLM RCA with RAG context and audit trail",
      "Dual-mode LLM provider (Gemini or Tele-LLM)",
      "Streamlit ops dashboard for RCA review + observability",
      "Semantic evaluation with decision quality metrics",
      "Human-in-the-loop hypothesis review with audit trail",
      "Time-to-context measurement with industry benchmarks",
    ],
    links: {
      demo: "https://tele-ops.zeroleaf.dev",
      github: "https://github.com/udaytamma/teleops",
      docs: "/docs/telcoops",
    },
    metrics: [
      { label: "Incident types", value: "11 scenarios" },
      { label: "RCA modes", value: "2 (baseline + LLM)" },
      { label: "Evaluation", value: "Semantic similarity" },
      { label: "Quality metrics", value: "Precision, recall, WBC rate" },
    ],
  },
  {
    id: "auros",
    title: "Auros: AI-Powered Job Search Tracker",
    description:
      "Local-first AI job search tool that scrapes career pages, extracts job details with LLM, ranks by relevance, and sends Slack alerts for top matches.",
    longDescription: `Auros is a local-first AI job search tool designed for Principal/Senior TPM/PM roles at top tech companies. It scrapes career pages from a curated list of 10 companies using Playwright, extracts job details using Qwen 2.5 Coder via Ollama, and ranks postings by relevance to the target profile.

Key architectural decisions include immediate per-job LLM enrichment for real-time results, salary confidence gating (only display if confidence > 0.60), URL-based deduplication, and APScheduler for 3x daily scans (6am/12pm/6pm CT). The React dashboard features match score ranking, status tracking (bookmarked/applied/hidden), charts for job distribution, and CSV export. Slack notifications trigger only for jobs scoring >= 0.70.`,
    category: "hobby",
    status: "in-progress",
    technologies: [
      "Python",
      "FastAPI",
      "SQLite",
      "Playwright",
      "Ollama",
      "Qwen 2.5",
      "React",
      "Vite",
      "APScheduler",
    ],
    features: [
      "Playwright-based career page scraping",
      "LLM extraction via Ollama (Qwen 2.5 Coder)",
      "Match scoring with configurable weights",
      "Salary extraction with confidence gating",
      "Slack notifications for high-score matches",
      "React dashboard with charts and filters",
    ],
    links: {
      github: "https://github.com/udaytamma/Auros",
      docs: "/docs/auros",
    },
    metrics: [
      { label: "Target Companies", value: "10 MVP" },
      { label: "Scan Frequency", value: "3x/day" },
      { label: "Alert Threshold", value: "≥0.70" },
      { label: "Salary Confidence", value: ">0.60" },
    ],
  },
  {
    id: "ai-chat-assistant",
    title: "AI Chat Assistant",
    description:
      "Conversational AI assistant answering portfolio questions in real-time - Gemini 3 Flash on Cloudflare Workers edge with sub-2s latency and session persistence.",
    longDescription: `A conversational AI assistant embedded in the portfolio website that answers questions about professional background, experience, skills, and projects. Built as a serverless Cloudflare Worker with Google Gemini 3 Flash as the LLM backend.

Features include session-based chat history persistence using sessionStorage, real-time markdown rendering with syntax highlighting, suggested follow-up questions, and a global floating chat button that appears across the site. The architecture separates the worker (API) from the Next.js frontend, enabling independent deployment and scaling.`,
    category: "hobby",
    status: "active",
    technologies: [
      "TypeScript",
      "Cloudflare Workers",
      "Gemini 3 Flash",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    features: [
      "Serverless Cloudflare Worker architecture",
      "Gemini 3 Flash LLM integration",
      "Session-based chat history persistence",
      "Real-time markdown rendering",
      "Suggested follow-up questions",
      "Global floating chat button",
    ],
    links: {
      demo: "/?openChat=true",
      docs: "/docs/ai-chat-assistant",
    },
    metrics: [
      { label: "Response Time", value: "<2s" },
      { label: "Deployment", value: "Edge" },
    ],
  },
  {
    id: "professor-gemini",
    title: "Professor Gemini",
    description:
      "AI learning platform with semantic RAG retrieval - indexes 400+ domain-specific documents in Qdrant for efficient context (~94% token savings).",
    longDescription: `Professor Gemini is an AI learning platform that generates comprehensive educational guides through a 4-step pipeline. Features semantic RAG retrieval that indexes 400+ domain-specific documents in Qdrant Cloud for efficient context delivery.

Key architecture: Instead of sending 2.5M characters of full context (~$0.62/request), RAG retrieves only the top-5 relevant documents (~150KB, ~$0.04/request) - a 94% cost reduction. Document sources include Knowledge Base guides, Interview Questions, Blindspots, and Wiki entries. Hash-based change detection enables incremental sync, and TypeScript-to-JSON parsing handles complex data structures on-the-fly.`,
    category: "hobby",
    status: "active",
    technologies: [
      "Python",
      "Streamlit",
      "Gemini",
      "Qdrant",
      "Pydantic",
    ],
    features: [
      "Semantic RAG retrieval",
      "400+ documents indexed",
      "94% token cost savings",
      "Hash-based incremental sync",
      "TypeScript parsing on-the-fly",
      "4-step content pipeline",
    ],
    links: {
      demo: "https://prof.zeroleaf.dev",
      github: "https://github.com/udaytamma/ProfessorGemini",
      docs: "/docs/professor-gemini",
    },
    metrics: [
      { label: "Documents", value: "400+" },
      { label: "Token Savings", value: "94%" },
      { label: "Vector Dim", value: "768" },
      { label: "Storage", value: "~5MB" },
    ],
  },
  {
    id: "mindgames",
    title: "MindGames",
    description:
      "Chain-based arithmetic engine using highly composite number algorithm for clean division flows - 63 tests at 100% pass rate, deployed on Cloudflare Pages.",
    longDescription: `A mental math training application built with Next.js that generates chain-based arithmetic problems where answers flow into subsequent questions. Features include configurable operation mix (addition, subtraction, multiplication, division), difficulty presets, and a kid-friendly mode with confetti celebrations.

The problem generation algorithm uses highly composite numbers as starting points to ensure clean division results and maintains engaging chains that flow naturally. Includes dark/light theme support and full mobile responsiveness.`,
    category: "hobby",
    status: "active",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
    ],
    features: [
      "Chain-based problem generation",
      "Customizable operation mix",
      "Kid/Adult profile modes",
      "Confetti celebrations",
      "Dark/Light theme",
      "Mobile responsive",
    ],
    links: {
      demo: "https://mindgames.zeroleaf.dev",
      github: "https://github.com/udaytamma/MindGames",
      docs: "/docs/mindgames",
    },
    metrics: [
      { label: "Tests", value: "63" },
      { label: "Pass Rate", value: "100%" },
    ],
  },
  {
    id: "ingredient-scanner",
    title: "AI Ingredient Scanner",
    description:
      "LangGraph multi-agent orchestration with 5-gate quality validation - 191 tests, 83% coverage, 9+ language OCR, and React Native mobile app.",
    longDescription: `A sophisticated multi-agent system built with LangGraph that analyzes ingredient safety for food and cosmetic products. The architecture includes specialized agents: Research Agent (Qdrant vector search + Google fallback), Analysis Agent (Gemini-powered safety reports), and Critic Agent (5-gate quality validation).

Features a React Native mobile app with camera scanning, multi-language OCR support (9+ languages with auto-translation), and personalized safety profiles based on allergies and skin type. Backend deployed on Railway with Redis caching and LangSmith observability.`,
    category: "hobby",
    status: "active",
    technologies: [
      "Python",
      "LangGraph",
      "Gemini 2.0",
      "Qdrant",
      "React Native",
      "Expo",
      "Firebase",
    ],
    features: [
      "Multi-agent LangGraph workflow",
      "Camera + gallery ingredient scanning",
      "Multi-language OCR (9+ languages)",
      "Personalized safety profiles",
      "5-gate quality validation",
      "LangSmith observability",
    ],
    links: {
      demo: "https://ingredient-analyzer.zeroleaf.dev/",
      github: "https://github.com/udaytamma/AiIngredientScanner",
      docs: "/docs/ingredient-scanner",
    },
    metrics: [
      { label: "Tests", value: "191" },
      { label: "Coverage", value: "83%" },
      { label: "Languages", value: "9+" },
    ],
  },
  {
    id: "email-assistant",
    title: "AI-Powered Email Assistant",
    description:
      "Gmail API + Gemini integration solving email triage complexity - smart caching at ~70% hit rate, 12+ tracked metrics, and automated daily digests.",
    longDescription: `An AI-powered email management system that integrates with Gmail to automatically categorize, prioritize, and summarize incoming emails. Uses Gemini for intelligent categorization and generates concise daily digests.

Features include smart caching to minimize API calls, a Flask web interface for viewing digests, SQLite-based metrics tracking, and comprehensive observability. Designed for personal productivity with configurable category rules and priority detection.`,
    category: "hobby",
    status: "active",
    technologies: [
      "Python",
      "Flask",
      "Gemini 2.5",
      "Gmail API",
      "SQLite",
    ],
    features: [
      "AI-powered categorization",
      "Daily digest generation",
      "Smart caching system",
      "Metrics dashboard",
      "Configurable rules",
      "Environment-based secrets",
    ],
    links: {
      github: "https://github.com/udaytamma/AiEmailAssistant",
      docs: "/docs/email-assistant",
    },
    metrics: [
      { label: "Categories", value: "8" },
      { label: "Cache Hit", value: "~70%" },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(
  category: "featured" | "hobby"
): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.category === "featured" || p.status === "active");
}
