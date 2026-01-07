"use client";

/**
 * ChatGPT LLM - Capstone Projects Index
 *
 * Displays all 5 capstone projects suggested by ChatGPT
 * with navigation and organized layout
 */

import Link from "next/link";
import { CapstoneLayout } from "@/components/CapstoneLayout";

interface ChatGPTProject {
  id: string;
  number: number;
  title: string;
  summary: string;
  tags: { label: string; type: "telecom" | "enterprise" | "consumer" | "infra" | "ai" }[];
}

const chatgptProjects: ChatGPTProject[] = [
  {
    id: "telecom-network-ops",
    number: 1,
    title: "Telecom AI Network Ops Platform",
    summary: "Leverage AI to predict network failures, optimize resource allocation, and automate incident response in telecom infrastructure.",
    tags: [
      { label: "Telecom", type: "telecom" },
      { label: "AI/ML TPM", type: "ai" },
      { label: "Infrastructure", type: "infra" },
    ],
  },
  {
    id: "ai-cost-intelligence",
    number: 2,
    title: "Enterprise AI Cost Intelligence",
    summary: "Build a centralized platform to track, analyze, and optimize AI/ML infrastructure costs across cloud providers and internal resources.",
    tags: [
      { label: "Enterprise SaaS", type: "enterprise" },
      { label: "Platform TPM", type: "infra" },
      { label: "AI/ML", type: "ai" },
    ],
  },
  {
    id: "consumer-ai-assistant",
    number: 3,
    title: "Consumer AI Assistant Platform",
    summary: "Develop a personalized AI assistant for consumer applications with real-time learning, context awareness, and privacy-first design.",
    tags: [
      { label: "Consumer AI", type: "consumer" },
      { label: "AI/ML TPM", type: "ai" },
      { label: "Product TPM", type: "enterprise" },
    ],
  },
  {
    id: "program-governance-hub",
    number: 4,
    title: "Cross-Functional Program Governance Hub",
    summary: "Create a unified dashboard for tracking cross-functional initiatives, dependencies, and risks across multiple engineering teams.",
    tags: [
      { label: "Enterprise", type: "enterprise" },
      { label: "Platform TPM", type: "infra" },
      { label: "DevOps", type: "enterprise" },
    ],
  },
  {
    id: "ai-service-assurance",
    number: 5,
    title: "AI-Powered Service Assurance",
    summary: "Implement intelligent monitoring and automated remediation for service quality issues using ML-driven anomaly detection and root cause analysis.",
    tags: [
      { label: "Telecom", type: "telecom" },
      { label: "AI/ML TPM", type: "ai" },
      { label: "Infrastructure TPM", type: "infra" },
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

function ChatGPTContent() {
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
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #10a37f 0%, #19c395 100%)",
            }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
              <path
                d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M8 10.5h8M8 13.5h6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">ChatGPT Projects</h1>
            <span className="text-sm text-muted-foreground">5 projects</span>
          </div>
        </div>
        <p className="text-muted-foreground">
          AI/TPM capstone projects curated by OpenAI ChatGPT, emphasizing
          practical enterprise applications and telecom domain expertise
        </p>
      </header>

      {/* Project Cards */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chatgptProjects.map((project) => (
            <Link
              key={project.id}
              href={`/nebula/capstone/chatgpt/${project.id}`}
              className="block p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#10a37f" }}
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

      {/* ChatGPT's Approach */}
      <div className="p-5 bg-muted/30 rounded-xl border border-border mb-8">
        <h3 className="text-lg font-semibold text-primary mb-3">
          ChatGPT&apos;s Approach
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          ChatGPT&apos;s project suggestions emphasize practical enterprise applications with
          strong telecom domain relevance. These projects showcase cross-functional program
          management skills, cost optimization strategies, and AI-powered automation -
          making them ideal for Senior TPM roles that require bridging technical implementation
          with business value delivery.
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
        Projects curated by OpenAI ChatGPT | Part of Nebula Capstone Project Collection
      </footer>
    </div>
  );
}

export default function ChatGPTProjectsPage() {
  return (
    <CapstoneLayout
      title="ChatGPT - Capstone Projects"
      description="AI/TPM capstone projects curated by OpenAI ChatGPT"
      currentLLM="chatgpt"
    >
      <ChatGPTContent />
    </CapstoneLayout>
  );
}
