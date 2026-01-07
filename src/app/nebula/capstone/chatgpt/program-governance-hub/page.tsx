"use client";

/**
 * ChatGPT Project 4: Cross-Functional Program Governance Hub
 * Platform TPM focus - Program Management, Executive Alignment, DevOps
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

function ProjectContent() {
  return (
    <div className="max-w-[900px] mx-auto">
      <Link
        href="/nebula/capstone/chatgpt"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to ChatGPT Projects
      </Link>

      <ProjectHeader
        title="Cross-Functional Program Governance Hub"
        tags={[
          { label: "Enterprise", type: "enterprise" },
          { label: "Platform TPM", type: "infra" },
          { label: "DevOps", type: "enterprise" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Cross-Functional Program Governance Hub is a unified platform for tracking, coordinating,
            and governing complex engineering initiatives that span multiple teams, products, and
            organizational boundaries. It provides executive visibility, dependency mapping, risk tracking,
            and roadmap trade-off analysis to ensure strategic alignment and execution excellence.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Platform TPM capabilities</strong> by building infrastructure
            that solves the coordination challenges inherent in large-scale engineering organizations,
            enabling better decision-making through data-driven insights and transparent governance.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Problem Statement & Solution
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cross-team initiatives tracked in fragmented tools (Jira, Sheets, Confluence, email threads) with no single source of truth</li>
            <li>Hidden dependencies discovered late, causing cascading delays and missed launch dates</li>
            <li>Executives lack real-time visibility into program health, risks, and resource allocation</li>
            <li>Roadmap prioritization debates lack data - trade-offs made on opinions rather than impact analysis</li>
            <li>RACI matrices outdated or non-existent, leading to &quot;not my responsibility&quot; culture</li>
            <li>Status reporting consumes 20%+ of TPM time with manual data aggregation and slide decks</li>
          </ul>

          <p><strong className="text-foreground">Solution Architecture:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Unified Program Dashboard:</strong> Single pane of glass for all cross-functional initiatives with health scores, milestones, dependencies</li>
            <li><strong className="text-foreground">Dependency Mapping:</strong> Interactive graph visualization of team/project dependencies with critical path analysis</li>
            <li><strong className="text-foreground">RACI Management:</strong> Dynamic RACI matrices integrated with org chart data and notification systems</li>
            <li><strong className="text-foreground">Risk & Blocker Tracking:</strong> Structured risk assessment with severity scoring, mitigation plans, and escalation workflows</li>
            <li><strong className="text-foreground">Roadmap Analytics:</strong> Data-driven prioritization framework with impact scoring, resource constraints, strategic alignment</li>
            <li><strong className="text-foreground">Automated Reporting:</strong> AI-generated status summaries, executive briefs, and stakeholder-specific views</li>
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
                <th className="text-left py-3 px-4 font-semibold text-foreground">Baseline</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">On-Time Delivery Rate</td>
                <td className="py-3 px-4">60%</td>
                <td className="py-3 px-4 font-semibold text-primary">85%+</td>
                <td className="py-3 px-4">Programs hitting original launch date commitment</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Dependency Discovery Time</td>
                <td className="py-3 px-4">4-6 weeks before</td>
                <td className="py-3 px-4 font-semibold text-primary">8+ weeks before</td>
                <td className="py-3 px-4">When blockers are identified before impact</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Executive Visibility</td>
                <td className="py-3 px-4">Monthly reviews</td>
                <td className="py-3 px-4 font-semibold text-primary">Real-time dashboard</td>
                <td className="py-3 px-4">Execs access hub without requesting updates</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Status Reporting Efficiency</td>
                <td className="py-3 px-4">8 hours/week</td>
                <td className="py-3 px-4 font-semibold text-primary">2 hours/week</td>
                <td className="py-3 px-4">TPM time spent on manual reporting tasks</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Cross-Team Alignment Score</td>
                <td className="py-3 px-4">6.2/10</td>
                <td className="py-3 px-4 font-semibold text-primary">8.5+/10</td>
                <td className="py-3 px-4">Quarterly stakeholder survey on clarity</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Risk Mitigation Speed</td>
                <td className="py-3 px-4">3 weeks avg</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;1 week</td>
                <td className="py-3 px-4">Time from risk identification to action</td>
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
            { title: "Backend", items: ["Cloud Run", "Firestore", "Cloud Functions"] },
            { title: "Frontend", items: ["React", "TypeScript", "D3.js", "Tailwind CSS"] },
            { title: "Integrations", items: ["Google Workspace APIs", "Jira API", "Slack API", "GitHub API"] },
            { title: "Data & Analytics", items: ["BigQuery", "Looker", "Pub/Sub"] },
            { title: "AI/Automation", items: ["Vertex AI", "PaLM 2", "Document AI"] },
            { title: "Auth & Security", items: ["Identity Platform", "Cloud IAM"] },
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
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Key Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Success Criteria</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Core Platform</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Program tracking, milestone management, basic dashboards</td>
                <td className="py-3 px-4">10 programs migrated, daily usage by TPMs</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Dependencies</td>
                <td className="py-3 px-4">5 weeks</td>
                <td className="py-3 px-4">Dependency graph, critical path analysis, blocker tracking</td>
                <td className="py-3 px-4">Dependencies identified 6+ weeks in advance</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Integrations</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Jira sync, Slack notifications, Google Workspace integration</td>
                <td className="py-3 px-4">80% reduction in manual data entry</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Intelligence</td>
                <td className="py-3 px-4">7 weeks</td>
                <td className="py-3 px-4">Risk engine, AI summaries, roadmap analytics, RACI automation</td>
                <td className="py-3 px-4">Automated status reports, 8.5+ alignment score</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Scale & Adoption</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Executive dashboards, advanced reporting, training, rollout</td>
                <td className="py-3 px-4">100% of cross-team programs tracked, 85%+ on-time delivery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Mitigation */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Risks & Mitigation Strategies
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Severity</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Low adoption - teams continue using existing tools</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">Executive mandate for cross-team programs; auto-sync from Jira to reduce dual entry; clear value prop (save 6 hrs/week)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Data quality issues from manual input and stale updates</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">Automated sync with Jira/GitHub; reminder notifications; health score based on update freshness</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Dependency graph becomes too complex to interpret</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Interactive filtering; focus on critical path; hierarchical views; zoom/pan controls</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Scope creep - becomes project management tool vs. governance</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Clear boundaries: Jira for task management, Hub for cross-team coordination; resist feature requests</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Executive sponsorship for adoption mandate and change management</li>
            <li>TPM community for feedback, testing, and evangelism</li>
            <li>Engineering Tools team for Jira/Slack/GitHub API access and rate limits</li>
            <li>Google Workspace admins for org chart API permissions</li>
            <li>IT Security for data access controls and compliance review</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Alignment with TPM Career Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { text: "Program Management at Scale: Directly addresses TPM pain points in cross-functional coordination" },
            { text: "Executive Communication: Build tools that VPs/Directors use for strategic decisions" },
            { text: "Process Improvement: Eliminate manual toil, increase TPM leverage and impact" },
            { text: "Data-Driven Decisions: Apply analytics to program management (velocity, risk scoring, forecasting)" },
            { text: "Platform Thinking: Build once for TPM community, scale across organization" },
            { text: "Integration Expertise: Stitch together Jira, Slack, Workspace, GitHub into unified experience" },
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
          href="/nebula/capstone/chatgpt/consumer-ai-assistant"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Previous: Consumer AI Assistant
        </Link>
        <Link
          href="/nebula/capstone/chatgpt/ai-service-assurance"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Service Assurance →
        </Link>
      </div>
    </div>
  );
}

export default function ProgramGovernanceHubPage() {
  return (
    <CapstoneLayout
      title="Cross-Functional Program Governance Hub"
      description="ChatGPT Project 4: Executive alignment with RACI, dependencies, and roadmap trade-offs"
      currentProjectId="chatgpt/program-governance-hub"
      currentLLM="chatgpt"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
