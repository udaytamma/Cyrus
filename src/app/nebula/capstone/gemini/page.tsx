"use client";

/**
 * Gemini LLM - Capstone Projects Index
 *
 * Displays all 5 capstone projects suggested by Gemini
 * with navigation and organized layout
 */

import Link from "next/link";
import { CapstoneLayout } from "@/components/CapstoneLayout";

interface GeminiProject {
  id: string;
  number: number;
  title: string;
  summary: string;
  tags: { label: string; type: "telecom" | "enterprise" | "consumer" | "infra" | "ai" }[];
}

const geminiProjects: GeminiProject[] = [
  {
    id: "enterprise-genai-gateway",
    number: 1,
    title: "Enterprise GenAI Gateway",
    summary: "Centralize and govern all outbound LLM traffic to ensure security, compliance, and cost control across engineering teams.",
    tags: [
      { label: "Enterprise SaaS", type: "enterprise" },
      { label: "Platform TPM", type: "infra" },
      { label: "AI/ML", type: "ai" },
    ],
  },
  {
    id: "smart-customer-voice-dashboard",
    number: 2,
    title: "Smart Customer Voice Dashboard",
    summary: "Automate quantification of qualitative customer feedback to drive data-driven product roadmaps using AI-powered sentiment analysis.",
    tags: [
      { label: "Telecom", type: "telecom" },
      { label: "Product TPM", type: "enterprise" },
      { label: "AI/ML", type: "ai" },
    ],
  },
  {
    id: "multimedia-content-safety",
    number: 3,
    title: "Multimedia Content Safety System",
    summary: "Scale user trust by automatically detecting and quarantining unsafe user-generated content in real-time using multi-modal AI.",
    tags: [
      { label: "Consumer AI", type: "consumer" },
      { label: "AI/ML TPM", type: "ai" },
      { label: "Trust & Safety", type: "enterprise" },
    ],
  },
  {
    id: "rag-knowledge-bot",
    number: 4,
    title: "RAG Knowledge Bot",
    summary: "Democratize access to institutional knowledge with a citation-powered AI assistant that reduces repetitive HR/IT support queries.",
    tags: [
      { label: "Enterprise", type: "enterprise" },
      { label: "Internal Tool", type: "infra" },
      { label: "RAG/AI", type: "ai" },
    ],
  },
  {
    id: "strangler-fig-migration",
    number: 5,
    title: "Monolith to Microservices (Strangler Fig)",
    summary: "De-risk legacy application modernization through incremental migration with shadow mode, canary deployments, and instant rollback.",
    tags: [
      { label: "Telecom", type: "telecom" },
      { label: "Infrastructure TPM", type: "infra" },
      { label: "DevOps", type: "enterprise" },
    ],
  },
];

const tagStyles: Record<string, string> = {
  telecom: "bg-green-500/15 text-green-600 dark:text-green-400",
  enterprise: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  consumer: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
  infra: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  ai: "bg-pink-500/15 text-pink-600 dark:text-pink-400",
};

// Gemini brand color
const brandColor = "#4285f4";

function GeminiContent() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Link
        href="/nebula/capstone"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to All Projects
      </Link>

      {/* Header */}
      <header
        className="mb-8 p-6 rounded-xl border shadow-sm"
        style={{
          background: `linear-gradient(to right, ${brandColor}10, transparent)`,
          borderColor: `${brandColor}40`,
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-14 h-14">
              <defs>
                <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4285f4" />
                  <stop offset="50%" stopColor="#ea4335" />
                  <stop offset="100%" stopColor="#fbbc04" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" rx="12" fill="#1a1a2e" />
              <circle cx="30" cy="50" r="14" fill="url(#geminiGrad)" opacity="0.9" />
              <circle cx="70" cy="50" r="14" fill="url(#geminiGrad)" opacity="0.9" />
              <path d="M 30 50 Q 50 35 70 50" fill="none" stroke="#34a853" strokeWidth="2.5" opacity="0.7" />
              <path d="M 30 50 Q 50 65 70 50" fill="none" stroke="#34a853" strokeWidth="2.5" opacity="0.7" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Gemini Projects</h1>
            <span className="text-sm text-muted-foreground">5 projects</span>
          </div>
        </div>
        <p className="text-muted-foreground">
          AI/TPM capstone projects curated by Google Gemini, focusing on enterprise-scale
          AI governance, multi-modal content systems, and strategic platform modernization
        </p>
      </header>

      {/* Project Cards */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {geminiProjects.map((project) => (
            <Link
              key={project.id}
              href={`/nebula/capstone/gemini/${project.id}`}
              className="group block p-5 rounded-xl border hover:border-primary/50 hover:shadow-md transition-all"
              style={{
                background: `linear-gradient(to right, ${brandColor}08, transparent)`,
                borderColor: `${brandColor}30`,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${brandColor}, #ea4335)` }}
                >
                  {project.number}
                </span>
                <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${tagStyles[tag.type]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gemini's Approach */}
      <div
        className="p-5 rounded-xl border mb-8"
        style={{
          background: `linear-gradient(to right, ${brandColor}05, transparent)`,
          borderColor: `${brandColor}30`,
        }}
      >
        <h3
          className="text-lg font-semibold mb-3"
          style={{ color: brandColor }}
        >
          Gemini&apos;s Approach
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Gemini&apos;s project suggestions emphasize enterprise-scale AI governance,
          multi-modal content safety, and strategic platform modernization. These projects
          showcase the ability to balance innovation with risk management - critical for
          Senior TPM roles at companies navigating AI transformation while maintaining
          security, compliance, and operational excellence.
        </p>
      </div>

      {/* Navigation */}
      <div className="text-center">
        <Link
          href="/nebula/capstone/comparison"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
        >
          Compare All LLM Suggestions →
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 mt-8 border-t border-border text-muted-foreground text-sm">
        Projects curated by Google Gemini | Part of Nebula Capstone Project Collection
      </footer>
    </div>
  );
}

export default function GeminiProjectsPage() {
  return (
    <CapstoneLayout
      title="Gemini - Capstone Projects"
      description="AI/TPM capstone projects curated by Google Gemini"
      currentLLM="gemini"
    >
      <GeminiContent />
    </CapstoneLayout>
  );
}
