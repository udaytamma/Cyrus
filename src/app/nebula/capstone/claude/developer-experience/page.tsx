"use client";

/**
 * Claude Project 4: Developer Experience Platform
 * Internal developer portal with AI code assistance and onboarding automation
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

function ProjectContent() {
  return (
    <div className="max-w-[900px] mx-auto">
      <Link
        href="/nebula/capstone/claude"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to Claude Projects
      </Link>

      <ProjectHeader
        title="Developer Experience Platform"
        tags={[
          { label: "Platform TPM", type: "infra" },
          { label: "DevOps", type: "enterprise" },
          { label: "AI/ML", type: "ai" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Developer Experience Platform is an internal developer portal that accelerates engineering
            velocity through AI-powered code assistance, intelligent documentation search, automated
            onboarding workflows, and unified tooling access. By consolidating scattered developer resources
            (wikis, runbooks, CI/CD dashboards, service catalogs) into a single interface with generative
            AI capabilities, the platform reduces developer friction and shortens time-to-productivity.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Platform TPM expertise</strong> by building developer-facing
            infrastructure that scales across engineering organizations. The platform serves 500+ developers
            with 95% satisfaction ratings while reducing average onboarding time from 6 weeks to 2 weeks.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Problem Statement & Solution
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>New engineers spend weeks navigating fragmented documentation (Confluence, GitHub wikis, Slack)</li>
            <li>Code setup requires manual coordination across multiple teams for access permissions</li>
            <li>Repetitive code patterns are copy-pasted instead of generated from templates</li>
            <li>CI/CD pipeline failures require digging through Jenkins logs without context</li>
            <li>Service discovery is manual, leading to reinvented wheels and duplicated services</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">AI Documentation Assistant:</strong> Vertex AI-powered search with citation across all documentation sources (Confluence, GitHub, Jira)</li>
            <li><strong className="text-foreground">Code Generation:</strong> LLM-based scaffolding for microservices, API endpoints, and test suites using company patterns</li>
            <li><strong className="text-foreground">Automated Onboarding:</strong> Self-service workflows for repository access, environment setup, and tool provisioning</li>
            <li><strong className="text-foreground">Service Catalog:</strong> Centralized directory of internal services with ownership, SLAs, and health metrics</li>
            <li><strong className="text-foreground">CI/CD Insights:</strong> Intelligent build failure analysis with suggested fixes and relevant Slack context</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes & KPIs */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Expected Outcomes & KPIs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Onboarding Time</td>
                <td className="py-3 px-4 font-semibold text-primary">-70% (6 weeks → 2 weeks)</td>
                <td className="py-3 px-4">Time to first production commit for new engineers</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Documentation Discovery</td>
                <td className="py-3 px-4 font-semibold text-primary">80% success rate</td>
                <td className="py-3 px-4">Developers finding answers without escalating to Slack</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Code Generation Adoption</td>
                <td className="py-3 px-4 font-semibold text-primary">50% of new services</td>
                <td className="py-3 px-4">Services scaffolded using AI templates vs. manual setup</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Developer Satisfaction</td>
                <td className="py-3 px-4 font-semibold text-primary">&gt;4.5/5</td>
                <td className="py-3 px-4">Quarterly developer experience survey ratings</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Engineering Velocity</td>
                <td className="py-3 px-4 font-semibold text-primary">+30% commits/engineer</td>
                <td className="py-3 px-4">Developer productivity improvement vs. baseline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: "Web Platform", items: ["Cloud Run", "React", "TypeScript"] },
            { title: "AI Platform", items: ["Vertex AI", "PaLM 2", "Embeddings API"] },
            { title: "Data Storage", items: ["Firestore", "Cloud Storage", "Vector Search"] },
            { title: "Integrations", items: ["GitHub APIs", "Confluence API", "Slack API"] },
            { title: "CI/CD", items: ["Cloud Build", "Artifact Registry", "Jenkins API"] },
            { title: "Auth & Security", items: ["IAM", "Identity Platform", "Secret Manager"] },
          ].map((category) => (
            <div key={category.title} className="p-4 bg-muted/30 rounded-lg">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {category.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          High-Level Architecture
        </h2>
        <MermaidDiagram
          chart={`flowchart TB
    subgraph UI["Developer Portal - React + Cloud Run"]
        style UI fill:#e0e7ff,stroke:#6366f1
        DocSearch["Documentation Search<br/>AI Chat"]
        CodeGen["Code Generator<br/>Templates"]
        ServiceCat["Service Catalog<br/>Directory"]
        Onboarding["Onboarding Workflows<br/>Environment setup, Access requests, Learning paths"]
        DocSearch --> Onboarding
        CodeGen --> Onboarding
        ServiceCat --> Onboarding
    end

    subgraph AIDoc["AI Documentation Assistant"]
        style AIDoc fill:#fef3c7,stroke:#f59e0b
        subgraph Ingestion["Knowledge Ingestion Pipeline - Cloud Functions"]
            Confluence["Confluence API<br/>Daily Sync"]
            GitHub["GitHub Wiki<br/>Webhooks"]
            Jira["Jira Tickets<br/>API"]
        end
        TextChunker["Text Chunker<br/>4096 tokens"]
        Embeddings["Vertex AI Embeddings<br/>768 dims"]
        VectorDB["Firestore Vector DB<br/>Document chunks, Embeddings, Metadata"]
        RAGChat["RAG-based Chat<br/>Vertex AI PaLM 2"]

        Confluence --> TextChunker
        GitHub --> TextChunker
        Jira --> TextChunker
        TextChunker --> Embeddings
        Embeddings --> VectorDB
        VectorDB --> RAGChat
    end

    subgraph CodeGenSection["Code Generation"]
        style CodeGenSection fill:#d1fae5,stroke:#10b981
        TemplateLib["Template Library - GitHub<br/>Microservice, REST API, Data Pipeline"]
        CodeGenerator["Code Generator<br/>Vertex AI + Cloud Functions"]
        Output["Output: Ready-to-run service<br/>GitHub repo + CI/CD + Terraform"]
        TemplateLib --> CodeGenerator
        CodeGenerator --> Output
    end

    subgraph ServiceCatalog["Service Catalog"]
        style ServiceCatalog fill:#fce7f3,stroke:#ec4899
        Aggregator["Service Metadata Aggregator<br/>GitHub, Terraform, Monitoring, PagerDuty"]
        Registry["Firestore Service Registry<br/>Name, Owner, Stack, Dependencies, Health, SLA"]
        Aggregator --> Registry
    end

    subgraph CICD["CI/CD Insights"]
        style CICD fill:#fee2e2,stroke:#ef4444
        FailureAnalyzer["Build Failure Analyzer<br/>Cloud Functions"]
        LogAnalysis["1. Fetch logs from Cloud Logging<br/>2. LLM analyzes errors<br/>3. Search similar failures<br/>4. Get Slack context"]
        SuggestedFix["Output: Suggested fix<br/>with related issue links"]
        FailureAnalyzer --> LogAnalysis
        LogAnalysis --> SuggestedFix
    end

    subgraph OnboardingAuto["Onboarding Automation"]
        style OnboardingAuto fill:#e0e7ff,stroke:#6366f1
        WorkflowEngine["Onboarding Workflow Engine<br/>Cloud Functions"]
        Steps["1. GitHub org invite<br/>2. IAM provisioning<br/>3. Slack channel joins<br/>4. Dev environment setup<br/>5. Learning path<br/>6. Mentor assignment"]
        Progress["Progress Tracking<br/>Firestore checklist"]
        WorkflowEngine --> Steps
        Steps --> Progress
    end

    Analytics["Analytics Dashboard<br/>Looker Studio<br/>Adoption, Search analysis, Onboarding metrics"]

    UI --> AIDoc
    UI --> CodeGenSection
    UI --> ServiceCatalog
    UI --> CICD
    UI --> OnboardingAuto
    OnboardingAuto --> Analytics`}
        />
      </section>

      {/* Implementation Phases */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Implementation Phases
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Service Catalog</td>
                <td className="py-3 px-4">
                  Firestore service registry, GitHub metadata ingestion, web portal UI,
                  basic service discovery search
                </td>
                <td className="py-3 px-4">3 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: AI Documentation Search</td>
                <td className="py-3 px-4">
                  RAG-based chat interface, Confluence/GitHub ingestion pipeline,
                  vector embeddings, citation-based responses
                </td>
                <td className="py-3 px-4">4 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Code Generation</td>
                <td className="py-3 px-4">
                  Template library, LLM-based customization, automated GitHub repo creation,
                  CI/CD pipeline scaffolding
                </td>
                <td className="py-3 px-4">3 weeks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Onboarding & CI/CD Insights</td>
                <td className="py-3 px-4">
                  Automated onboarding workflows, build failure analysis,
                  Slack integration, analytics dashboards
                </td>
                <td className="py-3 px-4">2 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Risks & Mitigation
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">AI hallucinations providing incorrect documentation answers</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">
                  Mandatory citation links, confidence scores displayed to users,
                  human feedback loop for corrections, grounding with RAG
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Code generation templates drift from evolving best practices</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">
                  Quarterly template audits by architecture team, version control for templates,
                  deprecation warnings for outdated patterns
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Developer adoption resistance ("I prefer my own setup")</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">
                  Executive sponsorship, showcase quick wins (onboarding speed),
                  gradual migration with opt-in features
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Sensitive code/docs exposure via documentation search</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">Low</span>
                </td>
                <td className="py-3 px-4">
                  IAM-based access control for search results, PII redaction,
                  security review before production launch
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Engineering leadership for mandate and executive sponsorship</li>
            <li>Platform Engineering team for GitHub, Confluence API access</li>
            <li>Security team for IAM policies and secret management review</li>
            <li>Technical Writing team for documentation quality and standardization</li>
            <li>Developer Relations for feedback collection and adoption metrics</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Alignment with Professional Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { text: "Platform Engineering: Demonstrates ability to build developer-facing infrastructure that scales across engineering organizations" },
            { text: "AI Integration: Shows expertise in applying LLMs (Vertex AI) to internal tools for productivity gains" },
            { text: "Developer Empathy: Focuses on reducing developer friction, critical for platform TPM roles at Mag7 companies" },
            { text: "Cross-Functional Leadership: Requires alignment with Engineering, Security, DevRel, and Technical Writing teams" },
            { text: "Measurable Impact: Clear productivity metrics (70% faster onboarding, 30% velocity increase) resonating with leadership" },
            { text: "Industry Relevance: Applicable to internal tooling needs across all Mag7 companies (Google, Meta, Amazon, Microsoft)" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <span className="text-green-500 flex-shrink-0">✅</span>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{item.text.split(":")[0]}:</strong>
                {item.text.split(":").slice(1).join(":")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/claude/fraud-detection"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Previous: Fraud Detection
        </Link>
        <Link
          href="/nebula/capstone/claude/model-governance"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Model Governance →
        </Link>
      </div>
    </div>
  );
}

export default function DeveloperExperiencePage() {
  return (
    <CapstoneLayout
      title="Developer Experience Platform"
      description="Claude Project 4: AI-powered internal developer portal"
      currentProjectId="claude/developer-experience"
      currentLLM="claude"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
