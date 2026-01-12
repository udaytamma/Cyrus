"use client";

/**
 * Section 1: Constraints First
 * Expanded with tables, derivation paths, and interview responses
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsConstraints() {
  const nav = getTeleOpsNavigation("constraints");

  return (
    <TeleOpsThinkingLayout
      title="Constraints First - TeleOps"
      description="Non-negotiables that shape TeleOps architecture and scope"
      currentSection="constraints"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          1
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Constraints First</h1>
        <p className="text-muted-foreground">
          What are the non-negotiables? What problems must we NOT create?
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          Thinking Process
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Before evaluating any technology or drawing architecture diagrams,{" "}
            <strong className="text-foreground">
              enumerate the constraints that will eliminate 90% of naive solutions
            </strong>
            . TeleOps is a demo system with production intent - constraints must balance
            demonstration value against implementation risk.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-gradient-to-r from-amber-500/5 to-transparent rounded-lg border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Demo Constraints</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Time-boxed build, single contributor, presentation-ready, minimal setup friction
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Technical Constraints</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Latency SLAs, deterministic evaluation, local-first operation, synthetic data only
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Audience Constraints</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Principal TPM reviewers, telecom domain credibility, defensible decisions
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg border border-purple-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-foreground">Cost Constraints</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Free tier LLM APIs, no paid infrastructure, open-source tooling only
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Context - Detailed Table */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </span>
          Decision Context
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>For TeleOps, the following constraints were established before any design work:</p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                    Constraint
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                    Why It Matters
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                    Design Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Deterministic Evaluation</strong>
                  </td>
                  <td className="p-3 border border-border">
                    Must prove LLM improves over baseline with repeatable results
                  </td>
                  <td className="p-3 border border-border">
                    Synthetic data with known ground truth, not real production data
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Demo Latency</strong>
                  </td>
                  <td className="p-3 border border-border">
                    RCA must return fast enough for live demo (not minutes)
                  </td>
                  <td className="p-3 border border-border">
                    Use fast LLM model (Gemini Flash), limit context size, fallback baseline
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">No PII / Real Data</strong>
                  </td>
                  <td className="p-3 border border-border">
                    Cannot access real NOC data for a portfolio project
                  </td>
                  <td className="p-3 border border-border">
                    Synthetic alert generator with realistic telecom scenarios
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Local-First Operation</strong>
                  </td>
                  <td className="p-3 border border-border">
                    Demo should run with one command, no external dependencies
                  </td>
                  <td className="p-3 border border-border">
                    SQLite instead of Postgres, embedded RAG, single Python process
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Operator Trust</strong>
                  </td>
                  <td className="p-3 border border-border">
                    RCA must be inspectable, not black-box AI
                  </td>
                  <td className="p-3 border border-border">
                    Structured JSON output, confidence scores, evidence citations
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <strong className="text-foreground">Safety Guardrails</strong>
                  </td>
                  <td className="p-3 border border-border">
                    LLM should not hallucinate dangerous commands
                  </td>
                  <td className="p-3 border border-border">
                    Explicit prompt constraints, no command generation, human approval gate
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Additionally, <strong className="text-foreground">quantified targets</strong> were set:
          </p>
          <ul className="space-y-2 ml-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span><strong className="text-foreground">&lt;3s P50</strong> latency for LLM RCA generation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span><strong className="text-foreground">&gt;70%</strong> RCA accuracy against ground truth</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span><strong className="text-foreground">&gt;10%</strong> improvement over baseline RCA</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span><strong className="text-foreground">0%</strong> unsafe command suggestions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Derivation Path
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap overflow-x-auto">
          {`1. IDENTIFY PROJECT TYPE
   - Capstone / portfolio project
   - Single contributor, time-boxed
   - Goal: demonstrate AI/ML + domain expertise
        ↓
2. IDENTIFY AUDIENCE
   - Principal TPM / Staff Architect reviewers
   - Expect defensible decisions, not just working code
   - Domain credibility matters (telecom)
        ↓
3. DERIVE DEMO CONSTRAINTS
   - Must run locally without setup friction
   - Must complete RCA in demo-friendly time (<10s)
   - Must produce repeatable, evaluatable results
        ↓
4. DERIVE TECHNICAL CONSTRAINTS
   - Synthetic data (no real NOC access)
   - Deterministic scenarios (ground truth known)
   - Local-first (SQLite, no external DB)
   - Free tier APIs (Gemini Flash)
        ↓
5. DERIVE SAFETY CONSTRAINTS
   - No command generation (prevent hallucination risk)
   - Confidence scores (signal uncertainty)
   - Baseline fallback (guarantee output)
        ↓
6. QUANTIFY TARGETS
   - <3s P50 latency
   - >70% accuracy
   - >10% improvement over baseline
   - 0% unsafe suggestions`}
        </div>
      </div>

      {/* Decisions Made */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Decisions Made From Constraints
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Decision</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Constraint Source</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Alternative Rejected</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Synthetic data generator</td>
                <td className="py-2 px-3">No PII / deterministic evaluation</td>
                <td className="py-2 px-3">Real NOC data (inaccessible), public datasets (wrong domain)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Streamlit UI</td>
                <td className="py-2 px-3">Demo speed, single contributor</td>
                <td className="py-2 px-3">React frontend (too slow to build), CLI only (poor demo experience)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Baseline RCA fallback</td>
                <td className="py-2 px-3">Reliability, comparison benchmark</td>
                <td className="py-2 px-3">LLM-only (single point of failure), no RCA (defeats purpose)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">JSON-only LLM output</td>
                <td className="py-2 px-3">Operator trust, automated evaluation</td>
                <td className="py-2 px-3">Free-form text (unparseable), markdown (inconsistent)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Gemini Flash model</td>
                <td className="py-2 px-3">Demo latency, cost constraint</td>
                <td className="py-2 px-3">GPT-4 (expensive, slower), local LLM (setup friction)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Optional API token</td>
                <td className="py-2 px-3">Governance signal without complexity</td>
                <td className="py-2 px-3">Full OAuth (overkill for demo), no auth (misses governance point)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Trade-Offs and Risks */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Trade-Offs and Risks
        </h2>
        <div className="text-muted-foreground space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Trade-Off</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Risk</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Mitigation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Determinism over realism</td>
                  <td className="py-2 px-3">Perceived lack of real-world validity</td>
                  <td className="py-2 px-3">Explicit non-goals documentation, realistic scenario design, telecom domain accuracy</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Monolith over microservices</td>
                  <td className="py-2 px-3">Less scalable architecture</td>
                  <td className="py-2 px-3">Plane separation keeps refactor paths clear; documented scale limitations</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Smaller model for latency</td>
                  <td className="py-2 px-3">Weaker RCA accuracy</td>
                  <td className="py-2 px-3">RAG augmentation, structured prompts, scenario-specific runbooks</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">SQLite for simplicity</td>
                  <td className="py-2 px-3">Concurrency limits</td>
                  <td className="py-2 px-3">Documented path to Postgres; SQLAlchemy abstracts migration</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">No command generation</td>
                  <td className="py-2 px-3">Less actionable RCA</td>
                  <td className="py-2 px-3">Link to runbooks, explicit remediation steps from vetted sources</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Interview Application */}
      <div className="mb-8 p-6 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-xl border border-indigo-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked &quot;How do you approach designing a new system?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;I always start with constraints, not solutions. Before evaluating any technology
                or drawing architecture diagrams, I enumerate the non-negotiables that will eliminate
                most naive approaches. This discipline applies whether I am building a telecom AIOps
                platform, a fraud detection system, or a customer analytics pipeline.
              </p>
              <p>
                For TeleOps - my AI-powered root cause analysis system for network operations - I
                anchored on four constraint categories. First, demo constraints: this is a capstone
                project that must run locally with one command and produce results fast enough for
                a live demo. That eliminated complex infrastructure and slow models.
              </p>
              <p>
                Second, data constraints: I cannot access real NOC data for a portfolio project, but
                I need deterministic evaluation to prove LLM improves over baseline. That drove
                synthetic data generation with known ground truth.
              </p>
              <p>
                Third, trust constraints: operators will not act on black-box AI. The system must
                produce structured output with confidence scores and evidence citations. That
                eliminated free-form text generation and required JSON schema enforcement.
              </p>
              <p>
                Fourth, safety constraints: LLMs can hallucinate dangerous commands. I explicitly
                prohibited command generation - remediation steps must come from vetted runbooks,
                not model output.
              </p>
              <p>
                With constraints defined, technology choices became obvious. Streamlit for fast UI
                iteration. SQLite for zero-setup local operation. Gemini Flash for sub-3-second
                latency. A baseline RCA fallback for reliability. Every decision traces back to a
                constraint.&quot;
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
              Estimated time: 90-120 seconds
            </div>
          </div>

          <p className="mt-6">When asked &quot;What constraints did you prioritize and why?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              1-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;Determinism was my top priority because evaluation credibility matters more than
                feature completeness. If I cannot prove LLM RCA is better than rule-based RCA with
                repeatable results, the project fails regardless of how sophisticated the architecture is.
              </p>
              <p>
                Second priority was operator trust. Telecom NOCs are high-stakes environments. An
                RCA system that produces unverifiable output will be ignored. Structured JSON with
                confidence scores and evidence trails is not optional - it is the minimum for
                production credibility.
              </p>
              <p>
                Third was demo reliability. A system that fails during a presentation is worse than
                no demo at all. That is why baseline RCA exists - if LLM times out, the operator
                still gets an answer. The system never returns empty.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">&larr; {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">{nav.next.title} &rarr;</span>
          </Link>
        )}
      </div>
    </TeleOpsThinkingLayout>
  );
}
