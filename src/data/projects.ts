export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "capstone" | "hobby";
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
      "Enterprise-grade real-time fraud detection system with sub-10ms latency, 5 detection signals, hot-reload policy engine, and complete evidence capture.",
    longDescription: `A comprehensive fraud detection platform designed for high-throughput payment processing environments. The system processes authorization requests in real-time, applying multiple detection signals including card testing detection, velocity analysis, geographic anomalies, bot/emulator detection, and friendly fraud scoring.

Key architectural decisions include a three-path data architecture (request-time, real-time Redis, async PostgreSQL), profit-based threshold optimization, and a hot-reload policy engine using YAML configuration. The platform achieves sub-10ms decision latency at 260+ requests per second with full evidence capture for dispute resolution.`,
    category: "capstone",
    status: "active",
    technologies: [
      "Python",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    features: [
      "Sub-10ms decision latency",
      "5 fraud detection signals",
      "Hot-reload YAML policy engine",
      "Evidence vault for disputes",
      "Prometheus metrics + Grafana dashboards",
      "Champion/challenger model support",
    ],
    links: {
      github: "https://github.com/udaytamma/FraudDetection",
      docs: "/docs/fraud-platform",
    },
    metrics: [
      { label: "Latency P99", value: "< 10ms" },
      { label: "Throughput", value: "260+ RPS" },
      { label: "Detection Signals", value: "5" },
      { label: "Test Coverage", value: "85%" },
    ],
  },
  {
    id: "telcoops",
    title: "TelcoOps: AI-Assisted Network Incident RCA",
    description:
      "Telecom operations platform that correlates noisy alerts into incidents and generates baseline + LLM RCA with RAG context.",
    longDescription: `TelcoOps is a full-stack incident RCA workflow for telecom network operations. It generates synthetic incident scenarios, correlates alerts into incidents, produces a deterministic baseline RCA, and compares it with an LLM-powered RCA enriched with RAG context.

The MVP emphasizes auditability and operational safety: all LLM requests and responses are stored with the incident, baseline reasoning is always available, providers can switch between a hosted Gemini model or a self-hosted Tele-LLM endpoint, and an optional API token gate protects write/metrics endpoints.`,
    category: "capstone",
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
    ],
    links: {
      demo: "https://github.com/udaytamma/teleops/blob/main/docs/demo_results.md",
      github: "https://github.com/udaytamma/teleops",
      docs: "/docs/telcoops",
    },
    metrics: [
      { label: "Default alerts/run", value: "250" },
      { label: "Incident types", value: "11 scenarios" },
      { label: "RCA modes", value: "2 (baseline + LLM)" },
      { label: "RAG top-k", value: "4" },
    ],
  },
  {
    id: "professor-gemini",
    title: "Professor Gemini",
    description:
      "Hybrid AI learning platform combining Gemini content generation with Claude critique to create comprehensive educational guides.",
    longDescription: `Professor Gemini is a hybrid AI learning platform that orchestrates multiple AI models to generate high-quality educational content. The 4-step pipeline uses Gemini for content generation and Claude for structural planning, adversarial critique, and synthesis.

The platform features a professional Streamlit UI with light/dark theme support, real-time pipeline progress updates, and automatic markdown file export. Optimization modes reduce API calls through local parsing and synthesis options. Generated guides are automatically synced to the Cyrus Knowledge Base.`,
    category: "hobby",
    status: "active",
    technologies: [
      "Python",
      "Streamlit",
      "Gemini 3.0",
      "Claude Opus",
      "Pydantic",
    ],
    features: [
      "4-step hybrid AI pipeline",
      "Bar Raiser critique loop",
      "Light/Dark theme support",
      "Real-time progress updates",
      "Cyrus Knowledge Base sync",
      "Environment-based secrets",
    ],
    links: {
      github: "https://github.com/udaytamma/ProfessorGemini",
      docs: "/docs/professor-gemini",
    },
    metrics: [
      { label: "AI Models", value: "2" },
      { label: "Pipeline Steps", value: "4" },
    ],
  },
  {
    id: "mindgames",
    title: "MindGames",
    description:
      "Modern mental math training app with chain-based problems, customizable operation mix, and kid-friendly mode with celebrations.",
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
      "Multi-agent AI system for analyzing food and cosmetic ingredient safety with mobile app, camera scanning, and multi-language OCR.",
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
    title: "Email Assistant",
    description:
      "AI-powered email management with intelligent categorization, daily digests, and comprehensive observability dashboard.",
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
  category: "capstone" | "hobby"
): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.category === "capstone" || p.status === "active");
}
