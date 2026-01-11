"use client";

/**
 * Perplexity Project 1: Telco GenAI Ops Copilot
 * AI assistant for NOC/SRE teams - incident triage & runbook automation
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

function ProjectContent() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Link
        href="/nebula/capstone/perplexity"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to Perplexity Projects
      </Link>

      <ProjectHeader
        title="Telco GenAI Ops Copilot"
        tags={[
          { label: "Telecom Operations", type: "telecom" },
          { label: "SRE/NOC", type: "infra" },
          { label: "GenAI", type: "ai" },
        ]}
      />

      {/* Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Executive Summary</h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Telco GenAI Ops Copilot is an AI-powered assistant that augments Network Operations Center (NOC)
            and Site Reliability Engineering (SRE) teams during incident response. When alarms fire—cell tower
            outages, fiber cuts, core network congestion—engineers waste critical minutes parsing raw logs,
            correlating events across systems, and finding the right runbook.
          </p>
          <p>
            This copilot ingests real-time alerts from monitoring platforms (Grafana, PagerDuty), retrieves
            contextual logs from BigQuery/Cloud Logging, and uses Vertex AI&apos;s Gemini Pro to generate concise
            incident summaries with proposed remediation steps. Engineers interact via a Streamlit web UI or
            Slack bot to ask follow-up questions (&quot;show me CPU trends for the last hour on this cell site&quot;).
          </p>
          <p>
            <strong className="text-foreground">Impact:</strong> Reduces mean time to remediation (MTTR) by 30-40% through instant log
            summarization and intelligent runbook suggestions, directly improving network availability SLAs.
          </p>
        </div>
      </section>

      {/* Purpose & Technical Scope */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Purpose & Technical Scope</h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>NOC engineers manually sift through thousands of log lines during network incidents</li>
            <li>Runbooks are scattered across wikis, Jira, and tribal knowledge</li>
            <li>Correlation between alarms (e.g., fiber cut causing downstream cell site alarms) is manual</li>
            <li>New team members lack context on historical incidents and resolution patterns</li>
            <li>Mean Time to Remediation (MTTR) targets of &lt;15 minutes are missed due to diagnostic overhead</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Alert Ingestion:</strong> Webhook listeners for PagerDuty/Grafana alerts; poll Prometheus API</li>
            <li><strong className="text-foreground">Log Retrieval:</strong> Query BigQuery for cell site logs, Cloud Logging for GKE cluster errors</li>
            <li><strong className="text-foreground">AI Summarization:</strong> Vertex AI Gemini Pro to generate 3-5 sentence incident summaries</li>
            <li><strong className="text-foreground">Runbook Matching:</strong> RAG pipeline using vector embeddings to retrieve relevant runbooks from Firestore</li>
            <li><strong className="text-foreground">Interactive Chat:</strong> Streamlit UI + Slack bot for engineers to ask clarifying questions</li>
            <li><strong className="text-foreground">Audit Trail:</strong> Store all copilot interactions (prompts, responses) in Firestore for compliance</li>
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
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">MTTR Reduction</td>
                <td className="py-3 px-4">30-40% improvement</td>
                <td className="py-3 px-4">Compare pre/post deployment incident resolution times</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Copilot Adoption</td>
                <td className="py-3 px-4">70% of NOC shifts</td>
                <td className="py-3 px-4">Unique users per week engaging with Streamlit/Slack bot</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Accuracy</td>
                <td className="py-3 px-4">85% useful summaries</td>
                <td className="py-3 px-4">Engineer thumbs-up/down feedback on AI-generated insights</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Runbook Coverage</td>
                <td className="py-3 px-4">200+ indexed runbooks</td>
                <td className="py-3 px-4">Number of runbooks embedded in vector database</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Response Latency</td>
                <td className="py-3 px-4">&lt;5 seconds</td>
                <td className="py-3 px-4">Time from alert trigger to copilot summary generation</td>
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
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Compute</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Run</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Functions</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">AI/ML</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Vertex AI Gemini Pro</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Text Embeddings API</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Storage</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Firestore</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">BigQuery</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Logging</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Frontend</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Streamlit</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Slack API</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Integration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">PagerDuty API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Grafana Webhooks</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Prometheus API</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Orchestration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Tasks</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Pub/Sub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">High-Level Architecture</h2>
        <div className="overflow-x-auto">
          <MermaidDiagram
            chart={`flowchart TB
    subgraph AlertSources["Alert Sources"]
        PagerDuty["PagerDuty<br/>Webhooks"]
        Grafana["Grafana<br/>Alerts"]
        Prometheus["Prometheus<br/>AlertManager"]
        CellSite["Cell Site<br/>Alarms"]
    end

    subgraph Ingestion["Alert Ingestion"]
        CloudFunctions["Cloud Functions<br/>Webhook Listener<br/>Parse JSON, Extract metadata"]
        PubSub["Pub/Sub Topic<br/>alert-events"]
    end

    subgraph CopilotEngine["Cloud Run - Copilot Processor"]
        ContextEnrich["1. Context Enrichment<br/>Query BigQuery for logs<br/>Query Firestore metadata"]
        RAGPipeline["2. RAG Pipeline<br/>Vector search in Firestore<br/>Retrieve top-3 runbooks"]
        GeminiSummarizer["3. Gemini Pro Summarizer<br/>Summarize incident<br/>Suggest remediation"]
        ContextEnrich --> RAGPipeline --> GeminiSummarizer
    end

    subgraph Storage["Firestore DB - Incidents"]
        IncidentsColl[("Incidents Collection<br/>Timestamp, Alert ID,<br/>AI Summary, Runbook Refs,<br/>Feedback")]
    end

    subgraph Interfaces["User Interfaces"]
        subgraph StreamlitUI["Streamlit Web UI"]
            IncidentFeed["Incident Feed<br/>Severity, AI Summary,<br/>Runbook Links"]
            ChatInterface["Chat Interface<br/>Ask questions,<br/>Thumbs up/down"]
        end
        subgraph SlackBot["Slack Bot"]
            AlertNotifs["Alert Notifications<br/>+ AI Summary<br/>Post to #noc"]
            Followups["Interactive Follow-ups<br/>Query logs, Re-query AI"]
        end
    end

    subgraph FollowUp["Follow-up Queries"]
        GeminiChat["Vertex AI Gemini<br/>Interactive chat session<br/>Stateful conversation"]
    end

    subgraph DataStores["Supporting Data Stores"]
        BigQuery[("BigQuery<br/>Cell site logs,<br/>RAN metrics,<br/>Core network")]
        CloudLogging[("Cloud Logging<br/>GKE pods,<br/>Cloud Run,<br/>Services")]
        RunbooksDB[("Firestore<br/>Runbooks DB,<br/>Embeddings,<br/>Metadata")]
    end

    PagerDuty --> CloudFunctions
    Grafana --> CloudFunctions
    Prometheus --> CloudFunctions
    CellSite --> CloudFunctions
    CloudFunctions --> PubSub
    PubSub --> CopilotEngine

    BigQuery --> ContextEnrich
    CloudLogging --> ContextEnrich
    RunbooksDB --> RAGPipeline

    GeminiSummarizer --> IncidentsColl
    IncidentsColl --> StreamlitUI
    IncidentsColl --> SlackBot
    ChatInterface --> GeminiChat
    Followups --> GeminiChat

    style AlertSources fill:#e0e7ff,stroke:#6366f1
    style Ingestion fill:#fef3c7,stroke:#f59e0b
    style CopilotEngine fill:#fce7f3,stroke:#ec4899
    style Storage fill:#d1fae5,stroke:#10b981
    style Interfaces fill:#e0e7ff,stroke:#6366f1
    style FollowUp fill:#fee2e2,stroke:#ef4444
    style DataStores fill:#fef3c7,stroke:#f59e0b`}
            className="min-h-[600px]"
          />
        </div>
      </section>

      {/* Effort & Timeline */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Estimated Effort</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Complexity</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Alert Ingestion</td>
                <td className="py-3 px-4">Webhook listeners, Pub/Sub pipeline, Firestore schema</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs">Low-Medium</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: AI Summarization</td>
                <td className="py-3 px-4">Gemini Pro integration, prompt engineering, context retrieval from BigQuery</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: RAG Runbooks</td>
                <td className="py-3 px-4">Embed 200+ runbooks, vector search, relevance tuning</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs">Medium-High</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: User Interfaces</td>
                <td className="py-3 px-4">Streamlit dashboard, Slack bot, interactive chat, feedback loops</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Production Hardening</td>
                <td className="py-3 px-4">Latency optimization, audit logging, SLO monitoring, team training</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Risks & Dependencies</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">AI hallucinations suggest incorrect runbook steps</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Human-in-the-loop: AI suggestions are advisory only; require engineer confirmation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Latency: 5-second target too slow for critical outages</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Pre-cache common alert patterns; async processing with immediate ack</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Runbook content is outdated or inaccurate</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Quarterly runbook audit; flag low-confidence matches for human review</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">NOC engineers distrust AI, prefer manual workflows</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Gradual rollout with pilot team; show MTTR metrics; collect feedback</td>
              </tr>
              <tr>
                <td className="py-3 px-4">PII/sensitive data leakage in logs sent to Gemini</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Pre-filter logs with DLP API; use Vertex AI (data residency in GCP)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access to production BigQuery datasets (cell site logs, RAN metrics)</li>
            <li>Integration with PagerDuty/Grafana APIs (requires API tokens from IT Security)</li>
            <li>NOC/SRE team availability for user acceptance testing and feedback</li>
            <li>Runbook documentation team to curate and validate 200+ runbooks for embedding</li>
            <li>Slack workspace admin permissions to deploy bot</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Alignment with Professional Goals</h2>
        <div className="grid gap-4">
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Telecom Domain Expertise:</strong> Deep understanding of NOC workflows, network incident types (fiber cuts, cell site outages)
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">GenAI for Operations:</strong> Practical application of LLMs to reduce operational toil, directly improving SRE metrics
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Cross-Team Impact:</strong> Requires collaboration with NOC, SRE, IT Security, and Runbook Docs teams
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">GCP Native Architecture:</strong> Vertex AI, Cloud Run, Firestore, BigQuery—demonstrates cloud-native design patterns
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Measurable Business Value:</strong> 30-40% MTTR reduction translates to improved network uptime SLAs
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">AI Safety & Trust:</strong> Addresses hallucination risks with human-in-the-loop, feedback loops, and audit trails
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/perplexity"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
        >
          ← Back to Perplexity Projects
        </Link>
        <Link
          href="/nebula/capstone/perplexity/telco-churn-upsell"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
        >
          Next: Telco Churn & Upsell →
        </Link>
      </div>
    </div>
  );
}

export default function TelcoGenAIOpsCopilotPage() {
  return (
    <CapstoneLayout
      title="Telco GenAI Ops Copilot"
      description="Perplexity Project 1: AI assistant for NOC/SRE incident response"
      currentLLM="perplexity"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
