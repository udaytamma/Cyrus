"use client";

/**
 * Perplexity LLM - Capstone Project Proposals
 *
 * 5 telecom-focused AI/TPM capstone projects recommended by Perplexity AI
 * Emphasis on operational excellence and domain expertise
 */

import Link from "next/link";
import { CapstoneLayout } from "@/components/CapstoneLayout";

interface ProjectSummary {
  id: string;
  number: number;
  title: string;
  summary: string;
  tags: { label: string; type: "telecom" | "enterprise" | "consumer" | "infra" | "ai" }[];
}

const perplexityProjects: ProjectSummary[] = [
  {
    id: "telco-genai-ops-copilot",
    number: 1,
    title: "Telco GenAI Ops Co-Pilot",
    summary: "AI-powered operational assistant automating network troubleshooting, incident triage, and runbook generation using LLM-driven insights from ITSM and monitoring data.",
    tags: [
      { label: "Telecom Operations", type: "telecom" },
      { label: "GenAI/LLM", type: "ai" },
      { label: "Platform TPM", type: "infra" },
    ],
  },
  {
    id: "telco-churn-upsell",
    number: 2,
    title: "Telco Churn & Upsell AI Playbook",
    summary: "Real-time customer behavior analytics platform predicting churn risk and identifying upsell opportunities using ML models trained on usage patterns and support interactions.",
    tags: [
      { label: "Telecom CX", type: "telecom" },
      { label: "Predictive ML", type: "ai" },
      { label: "Product TPM", type: "enterprise" },
    ],
  },
  {
    id: "ai-tpm-control-tower",
    number: 3,
    title: "AI TPM Control Tower",
    summary: "Unified executive dashboard aggregating cross-functional program health signals, roadmap dependencies, and automated status reporting for portfolio-level visibility.",
    tags: [
      { label: "Enterprise", type: "enterprise" },
      { label: "TPM Tools", type: "infra" },
      { label: "AI Insights", type: "ai" },
    ],
  },
  {
    id: "network-voc-hub",
    number: 4,
    title: "Network Quality VoC Insights Hub",
    summary: "Automated customer sentiment analysis correlating voice-of-customer feedback with network KPIs to identify quality blind spots and drive targeted infrastructure improvements.",
    tags: [
      { label: "Telecom Network", type: "telecom" },
      { label: "NLP/Sentiment AI", type: "ai" },
      { label: "Product TPM", type: "enterprise" },
    ],
  },
  {
    id: "genai-experimentation-platform",
    number: 5,
    title: "GenAI Experimentation Platform",
    summary: "Self-service environment for product teams to prototype and A/B test GenAI features with built-in LLM evaluation, cost tracking, and governance controls.",
    tags: [
      { label: "Enterprise Platform", type: "enterprise" },
      { label: "GenAI Infrastructure", type: "ai" },
      { label: "Platform TPM", type: "infra" },
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

function PerplexityContent() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Link
        href="/nebula/capstone"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to All Projects
      </Link>

      {/* Header */}
      <header className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-14 h-14">
              <defs>
                <linearGradient id="perplexityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" rx="12" fill="#0c1222" />
              <circle cx="50" cy="45" r="28" fill="url(#perplexityGrad)" opacity="0.9" />
              <path
                d="M50,28 L50,45 L62,57"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
              <circle cx="50" cy="45" r="5" fill="#fff" opacity="0.9" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Perplexity AI Recommendations</h1>
            <span className="text-sm text-muted-foreground">5 projects</span>
          </div>
        </div>
        <p className="text-muted-foreground">
          Telecom-focused AI/TPM capstone projects emphasizing operational excellence, domain
          expertise, and practical GenAI applications for enterprise environments
        </p>
      </header>

      {/* Project Cards */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {perplexityProjects.map((project) => (
            <Link
              key={project.id}
              href={`/nebula/capstone/perplexity/${project.id}`}
              className="block p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #14b8a6)" }}
                >
                  {project.number}
                </span>
                <h2 className="font-semibold text-foreground">{project.title}</h2>
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

      {/* Perplexity's Approach */}
      <div className="p-5 bg-muted/30 rounded-xl border border-border mb-8">
        <h3 className="text-lg font-semibold text-primary mb-3">
          Perplexity AI Focus Areas
        </h3>
        <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 list-disc pl-5">
          <li><strong className="text-foreground">Telecom Domain Expertise:</strong> Strong emphasis on projects leveraging telecom operations, network quality, and customer experience</li>
          <li><strong className="text-foreground">Operational Excellence:</strong> Focus on automating ops workflows, incident management, and real-time analytics</li>
          <li><strong className="text-foreground">GenAI Integration:</strong> Practical applications of LLMs for runbook automation, sentiment analysis, and experimentation platforms</li>
          <li><strong className="text-foreground">Executive Visibility:</strong> Control tower and dashboard solutions for portfolio-level program management</li>
          <li><strong className="text-foreground">Real-World Impact:</strong> Business-driven projects with clear ROI in churn reduction, upsell opportunities, and quality improvements</li>
        </ul>
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
        Projects curated by Perplexity AI | Part of Nebula Capstone Project Collection
      </footer>
    </div>
  );
}

export default function PerplexityProjectsPage() {
  return (
    <CapstoneLayout
      title="Perplexity AI - Capstone Projects"
      description="5 Telecom-focused AI/TPM Capstone Projects by Perplexity AI"
      currentLLM="perplexity"
    >
      <PerplexityContent />
    </CapstoneLayout>
  );
}
