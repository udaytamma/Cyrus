"use client";

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

export default function GenAIExperimentationPlatformPage() {
  return (
    <CapstoneLayout
      title="GenAI Experimentation Platform"
      description="Perplexity Project 5: Self-service platform for AI product testing"
      currentLLM="perplexity"
      currentProjectId="perplexity/genai-experimentation-platform"
    >
      <ProjectHeader
        title="Perplexity Project 5: GenAI Experimentation Platform"
        tags={[
          { label: "Platform SaaS", type: "enterprise" },
          { label: "Infrastructure", type: "infra" },
          { label: "GenAI Platform", type: "ai" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Executive Summary
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            The GenAI Experimentation Platform is a self-service internal tool that empowers Product Managers,
            designers, and engineers to rapidly test AI product ideas without waiting for ML team bandwidth. In
            large tech companies, hundreds of teams have AI feature ideas ("add smart replies to customer support
            chat," "generate product descriptions from specs," "auto-tag support tickets"), but lack access to
            models, prompt engineering expertise, or compliance guardrails.
          </p>
          <p>
            This platform provides a low-code UI where PMs define an experiment (input schema, prompt template,
            model choice), upload test datasets, and run batch predictions or live A/B tests. The platform
            enforces security (PII detection, content filtering), cost controls (spend caps per experiment), and
            quality metrics (human eval workflows, auto-scoring). Experiments graduate to production via API
            endpoints once validated.
          </p>
          <p>
            <strong className="text-foreground">Impact:</strong> Accelerates AI adoption by 10x—enables 50+ experiments per quarter vs. 5
            traditional ML projects. Democratizes AI innovation across the company while maintaining governance.
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
            <li>Product teams have AI ideas but lack ML engineering resources (6-12 month ML team backlog)</li>
            <li>Engineers hit LLM APIs directly, creating ungoverned shadow AI projects</li>
            <li>No centralized platform for prompt management, versioning, or A/B testing</li>
            <li>Compliance blockers: legal/security teams block AI projects due to PII and hallucination risks</li>
            <li>No visibility into AI experiment ROI—hard to justify scaling successful pilots</li>
          </ul>

          <p className="mt-4"><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Experiment Builder UI:</strong> No-code interface to define input/output schemas, prompt templates, model selection (GPT-4, Gemini, Claude)</li>
            <li><strong className="text-foreground">Batch Processing:</strong> Upload CSV datasets (e.g., 1000 support tickets), run prompts in parallel via Cloud Run, export results</li>
            <li><strong className="text-foreground">Live A/B Testing:</strong> Deploy experiment as REST API endpoint; integrate with feature flag system (LaunchDarkly) for controlled rollout</li>
            <li><strong className="text-foreground">Guardrails:</strong> Auto-scan prompts/responses for PII (DLP API), toxic content (Perspective API), spend limits per team ($500/month default)</li>
            <li><strong className="text-foreground">Eval Framework:</strong> Human labeling workflows (LabelStudio integration), auto-metrics (BLEU, Rouge, custom scorers)</li>
            <li><strong className="text-foreground">Promotion Path:</strong> Graduate successful experiments to production ML team for optimization and scale</li>
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
                <td className="py-3 px-4">Experiment Velocity</td>
                <td className="py-3 px-4">10x increase</td>
                <td className="py-3 px-4">Experiments launched per quarter (pre: 5 ML projects, post: 50+ platform experiments)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Time to First Inference</td>
                <td className="py-3 px-4">&lt;1 day</td>
                <td className="py-3 px-4">Time from idea to first batch predictions (vs. 6 weeks for traditional ML project)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Platform Adoption</td>
                <td className="py-3 px-4">30% of product teams</td>
                <td className="py-3 px-4">% of PM org running at least 1 experiment per quarter</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Graduation Rate</td>
                <td className="py-3 px-4">20% of experiments</td>
                <td className="py-3 px-4">% of experiments promoted to production by ML team (proves product-market fit)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Governance Compliance</td>
                <td className="py-3 px-4">100% guardrail coverage</td>
                <td className="py-3 px-4">All experiments pass PII/content filters; zero compliance incidents</td>
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
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">GKE (Auto-scaling)</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">AI/ML</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Vertex AI (Multi-model)</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Model Garden</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Text Embeddings</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Storage</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Firestore</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">BigQuery</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Storage</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Frontend</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">React</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Next.js</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">TailwindCSS</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Governance</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud DLP API</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Perspective API</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Billing API</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Integration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">LaunchDarkly</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">LabelStudio</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Slack API</span>
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
          <pre className="text-xs text-muted-foreground font-mono whitespace-pre bg-background p-4 rounded-lg border border-border">
{`┌─────────────────────────────────────────────────────────────────────────────────┐
│                    GENAI EXPERIMENTATION PLATFORM ARCHITECTURE                  │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────── USER ROLES ──────────────────────────────────────┐
│                                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │ Product     │  │ Designer    │  │ Engineer    │  │ ML Team     │           │
│  │ Manager     │  │ (UX Writer) │  │ (Backend)   │  │ (Reviewer)  │           │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘           │
│         │                │                │                │                   │
└─────────┼────────────────┼────────────────┼────────────────┼───────────────────┘
          │                │                │                │
          └────────────────┴────────────────┴────────────────┘
                                   │
                                   ▼
                     ┌─────────────────────────┐
                     │  Next.js Web UI         │◄─── RBAC: Google Auth
                     │  (Experiment Studio)    │     Team-based permissions
                     │                         │
                     │  ┌───────────────────┐  │
                     │  │ 1. Create Exp     │  │
                     │  │ - Name, desc      │  │
                     │  │ - Input schema    │  │◄─── Example: {ticket_text, customer_tier}
                     │  │ - Output schema   │  │◄─── Example: {category, priority, suggested_reply}
                     │  │ - Prompt template │  │
                     │  │ - Model selector  │  │◄─── GPT-4, Gemini Pro, Claude Opus
                     │  └─────────┬─────────┘  │
                     │            │             │
                     │  ┌─────────▼─────────┐  │
                     │  │ 2. Upload Data    │  │
                     │  │ - CSV/JSON        │  │
                     │  │ - Max 10k rows    │  │
                     │  │ - Auto-validate   │  │◄─── Check schema matches input def
                     │  └─────────┬─────────┘  │
                     │            │             │
                     │  ┌─────────▼─────────┐  │
                     │  │ 3. Run Experiment │  │
                     │  │ - Batch mode      │  │
                     │  │ - Live API mode   │  │
                     │  └─────────┬─────────┘  │
                     └────────────┼────────────┘
                                  │
                                  ▼
                     ┌─────────────────────────┐
                     │  API Gateway            │
                     │  (Cloud Endpoints)      │
                     │  - Auth check           │
                     │  - Rate limiting        │
                     │  - Request logging      │
                     └────────────┬────────────┘
                                  │
                                  ▼
                     ┌─────────────────────────┐
                     │  Orchestration Service  │◄─── Cloud Run (Auto-scaling)
                     │  (Experiment Runner)    │
                     │                         │
                     │  ┌───────────────────┐  │
                     │  │ Pre-Flight Checks │  │
                     │  │ - PII scan (DLP)  │  │◄─── Scan input data for SSN, email, etc.
                     │  │ - Spend check     │  │◄─── Query Billing API: team under limit?
                     │  │ - Quota check     │  │◄─── Max 5 concurrent exp per team
                     │  └─────────┬─────────┘  │
                     │            │             │
                     │  ┌─────────▼─────────┐  │
                     │  │ Batch Processor   │  │
                     │  │ - Chunk dataset   │  │◄─── 100 rows per batch
                     │  │ - Parallel invoke │  │
                     │  │ - Retry failed    │  │
                     │  └─────────┬─────────┘  │
                     └────────────┼────────────┘
                                  │
                 ┌────────────────┴────────────────┐
                 │                                 │
                 ▼                                 ▼
     ┌───────────────────────┐         ┌───────────────────────┐
     │  Vertex AI Router     │         │  Firestore DB         │
     │  ┌─────────────────┐  │         │  ┌─────────────────┐  │
     │  │ Model Selector  │  │         │  │ Experiments     │  │
     │  │ - If GPT-4:     │  │         │  │ - exp_id        │  │
     │  │   → OpenAI API  │  │         │  │ - config        │  │
     │  │ - If Gemini:    │  │         │  │ - status        │  │
     │  │   → Vertex AI   │  │         │  └─────────────────┘  │
     │  │ - If Claude:    │  │         │  ┌─────────────────┐  │
     │  │   → Anthropic   │  │         │  │ Predictions     │  │
     │  └────────┬────────┘  │         │  │ - pred_id       │  │
     │           │            │         │  │ - input         │  │
     │  ┌────────▼────────┐  │         │  │ - output        │  │
     │  │ Prompt Renderer │  │         │  │ - latency       │  │
     │  │ - Template vars │  │         │  │ - cost          │  │
     │  │ - System msg    │  │         │  └─────────────────┘  │
     │  │ - Few-shot ex   │  │         └───────────────────────┘
     │  └────────┬────────┘  │
     │           │            │
     │  ┌────────▼────────┐  │
     │  │ LLM Inference   │  │
     │  │ - Call API      │  │
     │  │ - Parse JSON    │  │
     │  │ - Retry on fail │  │
     │  └────────┬────────┘  │
     └───────────┼────────────┘
                 │
                 ▼
     ┌───────────────────────┐
     │  Post-Processing      │
     │  ┌─────────────────┐  │
     │  │ Content Filter  │  │◄─── Perspective API (toxicity)
     │  │ - Block toxic   │  │
     │  │ - Flag uncertain│  │
     │  └────────┬────────┘  │
     │           │            │
     │  ┌────────▼────────┐  │
     │  │ Output Validator│  │
     │  │ - Schema check  │  │◄─── Does output match expected schema?
     │  │ - JSON parse    │  │
     │  └────────┬────────┘  │
     │           │            │
     │  ┌────────▼────────┐  │
     │  │ Cost Tracking   │  │
     │  │ - Token count   │  │
     │  │ - $ per call    │  │
     │  │ - Update quota  │  │
     │  └────────┬────────┘  │
     └───────────┼────────────┘
                 │
                 ▼
     ┌───────────────────────┐
     │  BigQuery Analytics   │
     │  - prediction_logs    │
     │    • exp_id           │
     │    • model            │
     │    • latency_ms       │
     │    • cost_usd         │
     │    • token_count      │
     │    • timestamp        │
     │  - experiment_metrics │
     │    • avg_latency      │
     │    • total_cost       │
     │    • success_rate     │
     └───────────┬───────────┘
                 │
                 ▼
     ┌───────────────────────────────────────────┐
     │  Evaluation Framework                     │
     │  ┌─────────────────┐  ┌────────────────┐ │
     │  │ Human Eval      │  │ Auto-Metrics   │ │
     │  │ - LabelStudio   │  │ - BLEU score   │ │
     │  │ - Sample 100    │  │ - Rouge score  │ │
     │  │ - Thumbs up/down│  │ - Custom logic │ │
     │  └────────┬────────┘  └────────┬───────┘ │
     │           └────────────┬────────┘         │
     │                        ▼                  │
     │           ┌─────────────────────┐         │
     │           │ Experiment Report   │         │
     │           │ - Success rate      │         │
     │           │ - Cost per pred     │         │
     │           │ - Human approval %  │         │
     │           │ - Recommend: Pass/Fail│       │
     │           └─────────────────────┘         │
     └───────────────────────────────────────────┘

┌──────────────────────── EXPERIMENT LIFECYCLE ───────────────────────────────────┐
│                                                                                  │
│  Draft → Review (ML Team) → Approved → Batch Test → Human Eval → Pass →        │
│  → Live A/B Test (LaunchDarkly) → Monitor (30 days) → Graduate to Production    │
│                                                                                  │
│  ┌─────────────────────┐          ┌─────────────────────┐                      │
│  │ LaunchDarkly        │          │ Production Handoff  │                      │
│  │ - Feature flag      │          │ - Transfer to ML    │                      │
│  │ - 1% → 10% → 50%    │          │ - Optimize latency  │                      │
│  │ - Track metrics     │          │ - Scale infra       │                      │
│  └─────────────────────┘          └─────────────────────┘                      │
└──────────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────── GOVERNANCE DASHBOARD ──────────────────────────────────┐
│                                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Spend by     │  │ PII Incidents│  │ Exp Velocity │  │ Graduation   │       │
│  │ Team         │  │ (Should be 0)│  │ (Target: 50/Q)│  │ Rate (20%)   │       │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘       │
└──────────────────────────────────────────────────────────────────────────────────┘`}
          </pre>
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
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Core Platform</td>
                <td className="py-3 px-4">Experiment builder UI, Firestore schema, Vertex AI integration, basic batch runner</td>
                <td className="py-3 px-4">High</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Guardrails</td>
                <td className="py-3 px-4">DLP API integration, Perspective API, spend tracking, quota enforcement</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Eval Framework</td>
                <td className="py-3 px-4">LabelStudio integration, auto-metrics (BLEU, Rouge), reporting dashboard</td>
                <td className="py-3 px-4">Medium-High</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Live A/B Testing</td>
                <td className="py-3 px-4">LaunchDarkly integration, REST API endpoints, monitoring, rollback logic</td>
                <td className="py-3 px-4">Medium-High</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Production Readiness</td>
                <td className="py-3 px-4">Multi-model support (GPT-4, Gemini, Claude), analytics, docs, PM training</td>
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
                <td className="py-3 px-4">PII leakage to external LLM providers (OpenAI, Anthropic)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">High</span>
                </td>
                <td className="py-3 px-4">DLP pre-scan; default to Vertex AI (GCP-hosted); require legal review for external models</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Runaway costs: teams launch expensive experiments</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">High</span>
                </td>
                <td className="py-3 px-4">Hard spend caps ($500/team/month); require manager approval for &gt;$1000</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Low-quality experiments clog ML team review queue</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Auto-quality checks (e.g., min 100 eval samples); PM training on best practices</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Platform becomes shadow ML org, bypassing governance</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Mandatory ML team review before live A/B; platform is discovery, not production</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Prompt injection attacks in user-supplied prompts</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Sandbox prompts; static analysis for injection patterns; human review</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Legal/Security approval for multi-LLM provider architecture (especially external APIs)</li>
            <li>ML team buy-in: they must commit to reviewing/graduating successful experiments</li>
            <li>Finance approval for initial platform budget ($10k/month for hosting + model inference)</li>
            <li>FinOps team to set spend caps and monitor cost anomalies</li>
            <li>PM org leadership to mandate platform usage and provide training</li>
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
              <strong className="text-foreground">Platform Thinking:</strong> Builds horizontal infrastructure to scale AI adoption across entire company
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Democratization of AI:</strong> Empowers non-ML teams to innovate, reducing bottlenecks on specialized ML engineers
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Governance & Compliance:</strong> Addresses PII, cost controls, content safety—critical for enterprise AI
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Product-Led Growth:</strong> 10x experiment velocity demonstrates measurable impact on innovation speed
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Multi-Model Strategy:</strong> Supports GPT-4, Gemini, Claude—demonstrates vendor diversity and flexibility
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-yellow-500 text-lg">⚠️</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Telecom Leverage:</strong> Applicable to any tech company, not telecom-specific (but usable by telco product teams)
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/perplexity/network-voc-hub"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Previous: Network VoC Hub
        </Link>
        <Link
          href="/nebula/capstone/perplexity"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to Perplexity Overview →
        </Link>
      </div>
    </CapstoneLayout>
  );
}
