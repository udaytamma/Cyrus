"use client";

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export default function AITPMControlTowerPage() {
  return (
    <CapstoneLayout
      title="AI TPM Control Tower"
      description="Perplexity Project 3: GenAI-powered PMO assistant for program health"
      currentLLM="perplexity"
      currentProjectId="perplexity/ai-tpm-control-tower"
    >
      <ProjectHeader
        title="Perplexity Project 3: AI TPM Control Tower"
        tags={[
          { label: "Internal Tools", type: "enterprise" },
          { label: "Platform TPM", type: "infra" },
          { label: "GenAI", type: "ai" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Executive Summary
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            The AI TPM Control Tower is an internal GenAI-powered PMO assistant that automatically summarizes
            program health, surfaces hidden risks, and generates executive-ready status reports. Technical
            Program Managers at scale companies juggle 5-15 concurrent programs, each with hundreds of Jira
            tickets, design docs, Slack threads, and meeting notes. Manually synthesizing this into weekly
            leadership updates consumes 4-6 hours per program per week.
          </p>
          <p>
            This tool integrates with Jira, Google Drive, Slack, and Calendar APIs to ingest program artifacts,
            uses Vertex AI Gemini to generate structured summaries (progress highlights, blockers, upcoming
            milestones), and proactively flags risks (e.g., "5 P0 bugs remain open 2 days before launch" or
            "3 critical design decisions still unresolved"). TPMs review AI-generated drafts and send to
            leadership with 80% time savings.
          </p>
          <p>
            <strong className="text-foreground">Impact:</strong> Saves TPMs 10-15 hours/week on status reporting, enabling them to focus
            on strategic planning and stakeholder alignment. Improves executive visibility into program health
            by surfacing risks earlier.
          </p>
        </div>
      </section>

      {/* Purpose & Technical Scope */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Purpose & Technical Scope
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>TPMs spend 30-40% of their time on status reporting instead of strategic work</li>
            <li>Program data scattered across Jira, Docs, Slack, Calendar—no single source of truth</li>
            <li>Risk detection is reactive: blockers only surface when teams miss deadlines</li>
            <li>Executives lack real-time visibility into multi-program portfolios (50+ active programs)</li>
            <li>New TPMs take 3-6 months to learn tribal knowledge (what to report, what to escalate)</li>
          </ul>

          <p className="mt-4"><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Data Aggregation:</strong> Pull Jira tickets (updated last 7 days), Drive docs (meeting notes, PRDs), Slack threads (tagged channels)</li>
            <li><strong className="text-foreground">AI Summarization:</strong> Vertex AI Gemini generates 5-paragraph status: Progress, Blockers, Upcoming Milestones, Risks, Decisions Needed</li>
            <li><strong className="text-foreground">Risk Detection:</strong> Rule-based + AI: flag high bug counts, missed milestones, design doc staleness, low Slack activity (team disengagement)</li>
            <li><strong className="text-foreground">Templated Outputs:</strong> Generate Google Docs or Slack posts in company-standard format</li>
            <li><strong className="text-foreground">Human-in-the-Loop:</strong> TPM reviews/edits AI draft before sending (maintain trust)</li>
            <li><strong className="text-foreground">Portfolio Dashboard:</strong> Looker dashboard showing all programs: health status (red/yellow/green), risk trends, TPM workload</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes & KPIs */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Expected Outcomes & KPIs
        </h2>
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
                <td className="py-3 px-4">Time Savings</td>
                <td className="py-3 px-4">10-15 hours/week per TPM</td>
                <td className="py-3 px-4">Self-reported time spent on status reports (pre vs. post)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Adoption Rate</td>
                <td className="py-3 px-4">80% of TPM org</td>
                <td className="py-3 px-4">Percentage of TPMs using tool for weekly updates</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Summary Accuracy</td>
                <td className="py-3 px-4">90% approval rate</td>
                <td className="py-3 px-4">TPMs approve AI draft without major edits (track edit depth)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Risk Detection</td>
                <td className="py-3 px-4">50% earlier flagging</td>
                <td className="py-3 px-4">Average days from risk emergence to executive escalation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Executive Satisfaction</td>
                <td className="py-3 px-4">4.5/5 avg rating</td>
                <td className="py-3 px-4">Quarterly survey: leadership clarity on program health</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Compute</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Run</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Functions</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">AI/ML</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Vertex AI Gemini Pro</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Text Embeddings</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Storage</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Firestore</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">BigQuery</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">APIs</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Jira REST API</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Google Drive API</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Slack API</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Calendar API</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Frontend</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">React</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Material-UI</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Orchestration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Scheduler</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Pub/Sub</span>
            </div>
          </div>
        </div>
      </section>

      {/* High-Level Architecture */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          High-Level Architecture
        </h2>
        <div className="overflow-x-auto">
          <MermaidDiagram
            chart={`flowchart TB
    subgraph Sources["Program Data Sources"]
        Jira["Jira<br/>Epics, Stories,<br/>Bugs, Sprints"]
        Drive["Google Drive<br/>PRDs, Meeting Notes,<br/>Tech Specs"]
        Slack["Slack<br/>Channels, Threads,<br/>@mentions"]
        Calendar["Calendar<br/>Meetings, Reviews,<br/>Launches"]
    end

    subgraph Scheduler["Orchestration"]
        CloudScheduler["Cloud Scheduler<br/>Every Monday 8AM<br/>or on-demand"]
    end

    subgraph Fetchers["Cloud Functions - Data Fetchers"]
        JiraFetch["Jira Fetcher<br/>JQL queries<br/>Last 7 days"]
        DriveFetch["Drive Fetcher<br/>List files<br/>Modified last 7 days"]
        SlackFetch["Slack Fetcher<br/>Read #program-xyz<br/>Extract key threads"]
        CalendarFetch["Calendar Fetcher<br/>Upcoming milestones"]
    end

    subgraph Storage1["Program Snapshots"]
        FirestoreSnap[("Firestore DB<br/>program_id, jira_tickets,<br/>docs, slack_threads,<br/>milestones")]
    end

    subgraph CoreEngine["Cloud Run - Control Tower Core"]
        ContextPrep["1. Context Prep<br/>Aggregate data<br/>Dedupe tickets"]
        RiskDetect["2. Risk Detection<br/>P0 bugs open?<br/>Milestone in 3d?<br/>Doc stale >14d?"]
        GeminiPro["3. Vertex AI Gemini Pro<br/>Summarize in 5 sections:<br/>Progress, Blockers,<br/>Milestones, Risks, Decisions"]
        ContextPrep --> RiskDetect --> GeminiPro
    end

    subgraph Storage2["Generated Reports"]
        FirestoreReports[("Firestore DB<br/>summary_text, risk_flags,<br/>confidence, edit_history")]
    end

    subgraph Outputs["Outputs"]
        subgraph WebUI["React Web UI - TPM Interface"]
            ProgramList["Program List<br/>Health Status"]
            AISummary["AI Summary View<br/>Highlights, Risk flags"]
            EditApprove["Edit & Approve<br/>Rich editor, Track changes"]
            FeedbackLoop["Feedback Loop<br/>Thumbs up/down"]
        end
        subgraph Export["Export Options"]
            DocsExport["Google Docs<br/>Auto-generate from template"]
            SlackPost["Slack Post<br/>#exec-updates"]
        end
    end

    subgraph Analytics["Portfolio Analytics"]
        BigQuery[("BigQuery Warehouse<br/>Program metadata,<br/>Risk history,<br/>TPM workload")]
        Looker["Looker Dashboard<br/>All programs view,<br/>Health trends,<br/>AI performance"]
        BigQuery --> Looker
    end

    Sources --> Scheduler
    Scheduler --> Fetchers
    JiraFetch --> FirestoreSnap
    DriveFetch --> FirestoreSnap
    SlackFetch --> FirestoreSnap
    CalendarFetch --> FirestoreSnap
    FirestoreSnap --> CoreEngine
    CoreEngine --> FirestoreReports
    FirestoreReports --> WebUI
    FirestoreReports --> Export
    FirestoreReports --> BigQuery

    style Sources fill:#e0e7ff,stroke:#6366f1
    style Scheduler fill:#fef3c7,stroke:#f59e0b
    style Fetchers fill:#d1fae5,stroke:#10b981
    style Storage1 fill:#fce7f3,stroke:#ec4899
    style CoreEngine fill:#e0e7ff,stroke:#6366f1
    style Storage2 fill:#fce7f3,stroke:#ec4899
    style Outputs fill:#fef3c7,stroke:#f59e0b
    style Analytics fill:#d1fae5,stroke:#10b981`}
            className="min-h-[600px]"
          />
        </div>
      </section>

      {/* Estimated Effort */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Estimated Effort
        </h2>
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
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Data Integrations</td>
                <td className="py-3 px-4">Jira, Drive, Slack, Calendar API connectors; Firestore schema</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Risk Detection</td>
                <td className="py-3 px-4">Rule engine for bug counts, milestone proximity, doc staleness</td>
                <td className="py-3 px-4">Low-Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: AI Summarization</td>
                <td className="py-3 px-4">Gemini prompt engineering, context window optimization, output formatting</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: UI & Editing</td>
                <td className="py-3 px-4">React dashboard, rich text editor, approval workflow, Docs export</td>
                <td className="py-3 px-4">Medium-High</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Portfolio Insights</td>
                <td className="py-3 px-4">BigQuery analytics, Looker dashboards, feedback loop, training</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Risks & Dependencies
        </h2>
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
                <td className="py-3 px-4">AI summaries miss critical risks (false negatives)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">High</span>
                </td>
                <td className="py-3 px-4">Combine rule-based detection (hard limits) with AI; TPM reviews before send</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">API rate limits (Jira, Slack) block data fetching</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Incremental sync (only fetch deltas); cache in Firestore; backoff retry logic</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">TPMs don't trust AI output, revert to manual reports</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">High</span>
                </td>
                <td className="py-3 px-4">Pilot with 3-5 TPMs; show edit depth metrics; iterate on prompts</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Sensitive data leakage (internal roadmaps, financials)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Use Vertex AI (GCP-hosted); RBAC on Firestore; audit logs</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Program data quality poor (stale Jira, missing docs)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Flag low-confidence summaries; encourage TPMs to update sources</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Jira admin permissions to create service account with read-all access</li>
            <li>Google Workspace admin approval for Drive/Calendar API OAuth scopes</li>
            <li>Slack workspace admin to deploy app with read permissions</li>
            <li>TPM org buy-in: requires pilot participants willing to test/provide feedback</li>
            <li>Executive sponsor to mandate adoption and define reporting standards</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Alignment with Professional Goals
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Platform TPM Excellence:</strong> Builds internal tooling to scale TPM productivity—demonstrates meta-TPM thinking
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">AI for Productivity:</strong> Practical GenAI application reducing knowledge work toil (not just customer-facing AI)
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Cross-Org Impact:</strong> Used by 20-50 TPMs across entire engineering org—portfolio-level thinking
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Executive Visibility:</strong> Directly improves leadership decision-making through better program health data
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">API Integration Breadth:</strong> Integrates 4+ enterprise SaaS tools (Jira, Drive, Slack, Calendar)
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-yellow-500 text-lg">⚠️</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Telecom Leverage:</strong> Not telecom-specific, but applicable to any tech company's TPM org
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/perplexity/telco-churn-upsell"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Previous: Churn & Upsell
        </Link>
        <Link
          href="/nebula/capstone/perplexity/network-voc-hub"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Next: Network VoC Hub →
        </Link>
      </div>
    </CapstoneLayout>
  );
}
