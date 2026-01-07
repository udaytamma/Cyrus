"use client";

/**
 * Gemini Project 4: RAG Knowledge Bot
 * Enterprise TPM focus - Internal Tooling & Developer Productivity
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

function ProjectContent() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Link
        href="/nebula/capstone/gemini"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to Gemini Projects
      </Link>

      <ProjectHeader
        title="RAG Knowledge Bot"
        tags={[
          { label: "Enterprise", type: "enterprise" },
          { label: "Internal Tool", type: "infra" },
          { label: "RAG/AI", type: "ai" },
        ]}
      />

      {/* Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Executive Summary</h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The RAG Knowledge Bot is an AI-powered internal assistant that democratizes access to institutional
            knowledge by answering employee questions with citations to authoritative sources. It addresses the
            challenge that large enterprises face where critical information is scattered across Confluence pages,
            Google Docs, Jira tickets, Slack threads, and tribal knowledge held by senior employees.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Enterprise TPM capabilities</strong> by building a Retrieval-Augmented
            Generation (RAG) system that reduces repetitive HR/IT support queries while improving employee productivity.
            As an Enterprise TPM, you&apos;ll navigate organizational silos to aggregate knowledge sources, balance
            information access with security controls, and drive adoption across departments by proving measurable
            ROI in reduced support costs and faster onboarding.
          </p>
        </div>
      </section>

      {/* Purpose & Technical Scope */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Purpose & Technical Scope</h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Employees spending 2+ hours/week searching for basic information (PTO policies, expense reports, dev environment setup)</li>
            <li>Repetitive support tickets to HR/IT for questions already documented in 10+ different locations</li>
            <li>New hires overwhelmed by documentation sprawl during onboarding (200+ Confluence pages, no central index)</li>
            <li>Outdated information in multiple sources causing conflicting answers to the same question</li>
            <li>Subject matter experts interrupted constantly to answer &quot;where do I find X?&quot; questions</li>
            <li>Knowledge locked in email threads and Slack conversations, never formalized into docs</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Knowledge Ingestion:</strong> Automated crawlers for Confluence, Google Drive, Jira, Slack, GitHub wikis with incremental updates</li>
            <li><strong className="text-foreground">Vector Embeddings:</strong> Convert documents into semantic embeddings using Vertex AI Embeddings API for similarity search</li>
            <li><strong className="text-foreground">Vector Database:</strong> Store embeddings in Vertex AI Vector Search for sub-second retrieval of relevant passages</li>
            <li><strong className="text-foreground">RAG Pipeline:</strong> User question → retrieve top-K relevant chunks → LLM generates answer with inline citations</li>
            <li><strong className="text-foreground">Access Control:</strong> Honor source system permissions (if user can&apos;t access Confluence page, don&apos;t cite it in answer)</li>
            <li><strong className="text-foreground">Feedback Loop:</strong> Thumbs up/down on answers to identify knowledge gaps and improve retrieval quality</li>
            <li><strong className="text-foreground">Interfaces:</strong> Slack bot, web chat widget, API for custom integrations</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Expected Outcomes & KPIs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement Method</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Support Ticket Deflection</td>
                <td className="py-3 px-4">30% reduction in HR/IT tickets</td>
                <td className="py-3 px-4">Compare ticket volume for common questions (PTO, expenses, onboarding) pre/post launch</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Answer Quality</td>
                <td className="py-3 px-4">75%+ thumbs up rate</td>
                <td className="py-3 px-4">User feedback on answer helpfulness (thumbs up/down in Slack bot)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Adoption Rate</td>
                <td className="py-3 px-4">50% of employees use monthly</td>
                <td className="py-3 px-4">Unique active users sending queries via Slack bot or web chat</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Response Time</td>
                <td className="py-3 px-4">&lt;5 seconds P95</td>
                <td className="py-3 px-4">End-to-end latency from question submission to answer display</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Onboarding Efficiency</td>
                <td className="py-3 px-4">20% faster time to productivity</td>
                <td className="py-3 px-4">New hire survey: &quot;I can find answers to my questions easily&quot; (pre/post comparison)</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Knowledge Coverage</td>
                <td className="py-3 px-4">95% of common FAQs answerable</td>
                <td className="py-3 px-4">Sample 200 recent HR/IT support tickets and test if bot can answer accurately</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Technical Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">AI/ML</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vertex AI</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">PaLM 2</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Embeddings API</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Vector Search</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vertex AI Vector Search</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">HNSW Index</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Orchestration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">LangChain</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Run</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Functions</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Sources</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Confluence API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Google Drive API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Slack API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Jira API</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Storage</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Firestore</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Storage</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">BigQuery</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Interfaces</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Slack Bolt SDK</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React Chat Widget</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">REST API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">High-Level Architecture</h2>
        <div className="bg-[#1a1a2e] text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-xs leading-relaxed font-mono whitespace-pre">{`┌─────────────────────────────────────────────────────────────────────────────────┐
│                         RAG KNOWLEDGE BOT                                       │
│              (Citation-Powered Internal AI Assistant)                           │
└─────────────────────────────────────────────────────────────────────────────────┘

                        KNOWLEDGE SOURCES
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Confluence  │  │ Google Drive │  │     Jira     │  │    Slack     │
│  (10K pages) │  │  (50K docs)  │  │  (100K tkts) │  │  (5M msgs)   │
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                 │                 │
       │  Webhooks       │  Change notif  │  Issue update  │  Event API
       │  + Daily crawl  │  + Daily crawl │  + Daily crawl │  + Hourly crawl
       │                 │                 │                 │
       └─────────────────┴─────────────────┴─────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Ingestion Pipeline  │
                    │   (Cloud Functions)   │
                    │   ┌─────────────────┐ │
                    │   │ - Fetch content │ │
                    │   │ - Extract text  │ │
                    │   │ - Parse metadata│ │
                    │   │ - Deduplicate   │ │
                    │   └────────┬────────┘ │
                    └────────────┼──────────┘
                                 │
                                 ▼
                    ┌───────────────────────┐
                    │   Document Processor  │
                    │   (Dataflow)          │
                    │   ┌─────────────────┐ │
                    │   │ - Chunk text    │ │◄─── Recursive char split
                    │   │   (512 tokens)  │ │     - Overlap 50 tokens
                    │   │ - Clean HTML    │ │     - Preserve structure
                    │   │ - Extract links │ │
                    │   └────────┬────────┘ │
                    └────────────┼──────────┘
                                 │
                                 ▼
                    ┌───────────────────────┐
                    │   Vertex AI           │
                    │   Embeddings API      │
                    │   (textembedding-gecko)│
                    │                       │
                    │   Input: Text chunk   │
                    │   Output: 768-dim vec │
                    └────────┬──────────────┘
                             │
                             ▼
              ┌──────────────────────────────────┐
              │   Vertex AI Vector Search        │
              │   (Managed HNSW Index)           │
              │   ┌────────────────────────────┐ │
              │   │ - 500K document chunks     │ │
              │   │ - Approximate NN search    │ │
              │   │ - Sub-100ms retrieval      │ │
              │   │ - Auto-scaling             │ │
              │   └────────────────────────────┘ │
              └──────────────────────────────────┘
                             │
                             │ Index Ready
                             ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           QUERY FLOW                                            │
└─────────────────────────────────────────────────────────────────────────────────┘

        USER INTERFACES
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Slack Bot   │  │  Web Widget  │  │   REST API   │
│  /ask [Q]    │  │  Chat UI     │  │  /query POST │
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                 │
       └─────────────────┴─────────────────┘
                         │
                         ▼
              ┌─────────────────────────┐
              │   Query API Service     │
              │   (Cloud Run)           │
              │   ┌───────────────────┐ │
              │   │ 1. Auth check     │ │◄─── OAuth/JWT
              │   │ 2. Query rewrite  │ │     - Expand acronyms
              │   │ 3. Embed query    │ │     - Fix typos
              │   └────────┬──────────┘ │
              └────────────┼────────────┘
                           │
                           ▼
              ┌─────────────────────────┐
              │   Retrieval Service     │
              │   (LangChain)           │
              │   ┌───────────────────┐ │
              │   │ Vector Search     │ │
              │   │ - Fetch top-K=10  │ │◄─── Similarity search
              │   │ - Apply ACL filter│ │     - User permissions
              │   │ - Rank by score   │ │     - Re-rank by date
              │   └────────┬──────────┘ │
              └────────────┼────────────┘
                           │
                           │ Retrieved chunks + metadata
                           ▼
              ┌─────────────────────────┐
              │   Generation Service    │
              │   (Vertex AI PaLM 2)    │
              │   ┌───────────────────┐ │
              │   │ Prompt template:  │ │
              │   │                   │ │
              │   │ Context: [chunks] │ │
              │   │ Question: [query] │ │
              │   │                   │ │
              │   │ Instructions:     │ │
              │   │ - Answer from ctx │ │
              │   │ - Cite sources    │ │
              │   │ - Say "unknown"   │ │
              │   │   if no evidence  │ │
              │   └────────┬──────────┘ │
              └────────────┼────────────┘
                           │
                           ▼
              ┌─────────────────────────┐
              │   Response Formatter    │
              │   ┌───────────────────┐ │
              │   │ - Parse citations │ │
              │   │ - Format markdown │ │
              │   │ - Add source links│ │
              │   │ - Confidence score│ │
              │   └────────┬──────────┘ │
              └────────────┼────────────┘
                           │
                           ▼
              ┌─────────────────────────┐
              │   Return to User        │
              │                         │
              │   Answer: "PTO policy   │
              │   is 20 days/year for   │
              │   full-time employees." │
              │                         │
              │   Sources:              │
              │   [1] HR Handbook p.12  │
              │   [2] Benefits FAQ      │
              │                         │
              │   [+] [-] Feedback      │
              └──────────┬──────────────┘
                         │
                         ▼
              ┌─────────────────────────┐
              │   Analytics & Logging   │
              │   (BigQuery)            │
              │   ┌───────────────────┐ │
              │   │ - Query text      │ │
              │   │ - Retrieved docs  │ │
              │   │ - Generated answr │ │
              │   │ - User feedback   │ │
              │   │ - Latency         │ │
              │   │ - Timestamp       │ │
              │   └───────────────────┘ │
              └─────────────────────────┘

                    FEEDBACK LOOP
┌──────────────────────────────────────────────────────┐
│  Weekly Review Process                               │
│  ┌────────────────────────────────────────────────┐  │
│  │ 1. Analyze thumbs-down answers                 │  │
│  │ 2. Identify knowledge gaps (missing docs)      │  │
│  │ 3. Improve chunking strategy for low-quality   │  │
│  │ 4. Update prompt template based on common fails│  │
│  │ 5. Retrain embedding model on domain jargon    │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘

                    ACCESS CONTROL
┌──────────────────────────────────────────────────────┐
│  Permission-Aware Retrieval                          │
│  ┌────────────────────────────────────────────────┐  │
│  │ - Store source ACL with each chunk             │  │
│  │ - Filter vector search results by user groups  │  │
│  │ - Never cite confidential docs to unauthorized │  │
│  │ - Audit log all queries for compliance         │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘

                    MONITORING
┌──────────────────────────────────────────────────────┐
│  Dashboards (Cloud Monitoring + Looker)              │
│  ┌────────────────────────────────────────────────┐  │
│  │ - Query volume (peak hours)                    │  │
│  │ - Latency P50/P95 (target <5s)                 │  │
│  │ - Thumbs up/down rate (quality proxy)          │  │
│  │ - Coverage: % queries with retrieved context   │  │
│  │ - Cost: LLM API calls + vector search          │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘`}</pre>
        </div>
      </section>

      {/* Effort & Timeline */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Implementation Phases</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Complexity</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: POC</td>
                <td className="py-3 px-4">3 weeks</td>
                <td className="py-3 px-4">Confluence-only ingestion, basic RAG pipeline (LangChain + Vertex AI), simple Slack bot, 100 docs indexed</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Multi-Source</td>
                <td className="py-3 px-4">5 weeks</td>
                <td className="py-3 px-4">Add Google Drive and Jira, automated daily sync, vector search upgrade (10K+ chunks), web chat widget</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs">Medium-High</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Production</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Access control enforcement, citation formatting, feedback UI, analytics dashboard, load testing for 500 QPS</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Scale</td>
                <td className="py-3 px-4">3 weeks</td>
                <td className="py-3 px-4">Slack integration (full 5M messages), model fine-tuning on company jargon, API for custom integrations, advanced re-ranking</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs">Medium-High</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Risks & Mitigation Strategies</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Poor answer quality eroding user trust and adoption</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Start with high-quality HR/IT docs only, iterate on chunking strategy, add &quot;confidence: low&quot; warnings, improve prompt engineering</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Hallucinations citing non-existent sources or incorrect facts</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Enforce citation requirement in prompt (reject answers without sources), link verification, human review for high-stakes queries (legal, finance)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Access control bypass leaking confidential information</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Pre-filter vector search by user ACLs, security audit before launch, red team testing with cross-department users, comprehensive logging</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Outdated information causing wrong answers after doc updates</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Daily incremental sync from sources, show &quot;last updated&quot; timestamp on citations, prioritize recent docs in re-ranking</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">High LLM API costs with uncontrolled adoption (500+ queries/day)</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Caching popular queries, rate limiting per user (10 queries/hour), optimize chunk size to reduce tokens, explore cheaper models for simple queries</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Low adoption if employees prefer asking humans or existing search</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Executive sponsorship, promote in onboarding, measure and communicate ROI (time saved), integrate into existing workflows (Slack, Jira)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">HR/IT Teams:</strong> Curate and clean source documentation to ensure accuracy before ingestion</li>
            <li><strong className="text-foreground">IT Security:</strong> Approve access control model and audit logging for compliance</li>
            <li><strong className="text-foreground">Knowledge Management:</strong> Define canonical sources for each topic to avoid conflicting information</li>
            <li><strong className="text-foreground">Data Engineering:</strong> API access credentials for Confluence, Google Drive, Jira, Slack</li>
            <li><strong className="text-foreground">Legal/Compliance:</strong> Review for privacy concerns (employee data in Slack messages, PII in tickets)</li>
            <li><strong className="text-foreground">Executive Sponsor:</strong> Budget approval for LLM API costs ($5K-$20K/month at scale) and mandate usage</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Professional Alignment for Senior TPM Role</h2>
        <div className="grid gap-4">
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">RAG Architecture:</strong> Demonstrates understanding of cutting-edge LLM application pattern used by ChatGPT Enterprise, Notion AI
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Enterprise AI Adoption:</strong> Directly applicable to internal tools at Mag7 companies reducing support costs at scale
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Cross-Functional Orchestration:</strong> Requires coordination with HR, IT, Security, Knowledge Management, and Engineering teams
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Developer Productivity:</strong> Showcases internal tooling focus valued by Platform TPM roles at engineering-heavy companies
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Measurable Business Impact:</strong> Clear ROI metrics (30% ticket deflection, 20% faster onboarding) for executive storytelling
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Modern AI Stack:</strong> Uses Vertex AI Vector Search, LangChain, embeddings - demonstrates hands-on ML infrastructure knowledge
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/gemini/multimedia-content-safety"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
        >
          ← Previous: Content Safety System
        </Link>
        <Link
          href="/nebula/capstone/gemini/strangler-fig-migration"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
        >
          Next: Strangler Fig Migration →
        </Link>
      </div>
    </div>
  );
}

export default function RAGKnowledgeBotPage() {
  return (
    <CapstoneLayout
      title="RAG Knowledge Bot - Gemini Projects"
      description="Enterprise TPM Capstone: Internal AI Assistant"
      currentLLM="gemini"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
