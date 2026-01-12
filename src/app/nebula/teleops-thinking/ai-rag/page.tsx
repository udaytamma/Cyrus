"use client";

/**
 * Section 5: AI + RAG Pipeline
 * Expanded with pipeline details, prompt engineering, and interview responses
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsAiRag() {
  const nav = getTeleOpsNavigation("ai-rag");

  return (
    <TeleOpsThinkingLayout
      title="AI + RAG Pipeline - TeleOps"
      description="Why structured outputs and RAG provenance matter"
      currentSection="ai-rag"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-teal-500/10 to-transparent rounded-xl border border-teal-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          5
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">AI + RAG Pipeline</h1>
        <p className="text-muted-foreground">
          Make LLM output auditable, parseable, and trustworthy for operators.
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
            The AI pipeline question was:{" "}
            <strong className="text-foreground">
              How do we make LLM output trustworthy enough for NOC operators to act on?
            </strong>
          </p>
          <p>
            The answer: <strong className="text-foreground">structured JSON output + RAG citations + safety guardrails</strong>.
            Free-form LLM text is not actionable - operators need parseable hypotheses with confidence
            levels and evidence they can verify.
          </p>
        </div>
      </div>

      {/* Pipeline Diagram */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          RCA Pipeline Flow
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre overflow-x-auto">
{`┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Incident     │────►│  RAG Retrieval  │────►│  Prompt Builder │
│  + 20 Alerts    │     │  (Top 3-5 docs) │     │                 │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  JSON Validator │◄────│    LLM Call     │◄────│  Structured     │
│  + Fallback     │     │  (Gemini Flash) │     │  Prompt         │
└────────┬────────┘     └─────────────────┘     └─────────────────┘
         │
         ▼
┌─────────────────┐
│   RCAArtifact   │
│  - hypotheses   │
│  - confidence   │
│  - evidence     │
│  - model tag    │
└─────────────────┘`}
        </div>
      </div>

      {/* Prompt Structure */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Prompt Structure: Why Each Component
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Content</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Why Included</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">instruction</td>
                <td className="py-2 px-3">&quot;You are a telecom operations RCA assistant...&quot;</td>
                <td className="py-2 px-3">Sets domain context. Prevents generic IT responses.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">schema</td>
                <td className="py-2 px-3">JSON schema with field types</td>
                <td className="py-2 px-3">Forces structured output. LLM follows schema reliably.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">incident</td>
                <td className="py-2 px-3">Incident summary and metadata</td>
                <td className="py-2 px-3">Context for what happened. Grounds the RCA.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">alerts_sample</td>
                <td className="py-2 px-3">First 20 alerts (not all 200+)</td>
                <td className="py-2 px-3">Provides signal without exceeding context limits.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">rag_context</td>
                <td className="py-2 px-3">Top 3-5 runbook chunks</td>
                <td className="py-2 px-3">Domain knowledge. Increases specificity of hypotheses.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">constraints</td>
                <td className="py-2 px-3">&quot;Do not invent commands&quot;, &quot;Include confidence&quot;</td>
                <td className="py-2 px-3">Safety guardrails. Prevents hallucinated remediations.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-muted/50 rounded-lg font-mono text-xs overflow-x-auto">
          <pre>{`{
  "instruction": "You are a telecom operations RCA assistant...",
  "schema": {
    "incident_summary": "string",
    "hypotheses": ["string"],
    "confidence_scores": {"hypothesis": 0.0},
    "evidence": {"key": "value"},
    "generated_at": "ISO-8601 timestamp",
    "model": "string"
  },
  "incident": {...},
  "alerts_sample": [...20 alerts...],
  "rag_context": ["...runbook chunk 1...", "...chunk 2..."],
  "constraints": [
    "Do not invent remediation commands.",
    "If uncertain, include lower confidence score."
  ]
}`}</pre>
        </div>
      </div>

      {/* RAG Strategy */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          RAG Strategy: Why These Choices
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Decision</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Choice</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Embedding storage</td>
                <td className="py-2 px-3 text-primary">In-memory</td>
                <td className="py-2 px-3">No external vector DB dependency. Runbook corpus is small (&lt;100 docs).</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Retrieval count</td>
                <td className="py-2 px-3 text-primary">Top 3-5 chunks</td>
                <td className="py-2 px-3">Balance context relevance vs prompt size. More chunks add noise.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Chunking strategy</td>
                <td className="py-2 px-3 text-primary">Paragraph-level</td>
                <td className="py-2 px-3">Runbooks have logical paragraphs. Sentence-level loses context.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Query construction</td>
                <td className="py-2 px-3 text-primary">Incident summary + alert types</td>
                <td className="py-2 px-3">Most discriminative for retrieving relevant runbook sections.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Safety Guardrails */}
      <div className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Safety Guardrails
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            LLMs can hallucinate dangerous commands. In a NOC context, a copy-pasted hallucinated
            command could cause outages. TeleOps implements multiple safety layers:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Guardrail</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Implementation</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Failure Mode Prevented</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">No command generation</td>
                  <td className="py-2 px-3">Explicit prompt constraint</td>
                  <td className="py-2 px-3">Hallucinated CLI commands executed by operator</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Confidence scores required</td>
                  <td className="py-2 px-3">JSON schema enforcement</td>
                  <td className="py-2 px-3">Operator acts on uncertain hypothesis as if certain</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Baseline fallback</td>
                  <td className="py-2 px-3">Pattern-matching RCA (11 rules) if LLM fails</td>
                  <td className="py-2 px-3">System returns nothing on LLM timeout/error</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">JSON validation</td>
                  <td className="py-2 px-3">Parse and validate before display</td>
                  <td className="py-2 px-3">Malformed output crashes UI or corrupts data</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Model tagging</td>
                  <td className="py-2 px-3">Record which model generated RCA</td>
                  <td className="py-2 px-3">Operator cannot distinguish AI vs baseline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* LLM Adapter Pattern */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          LLM Adapter Pattern
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The LLM client uses an adapter pattern to abstract the model provider. This enables
            swapping between Gemini, GPT-4, or Claude without changing application code.
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <pre>{`# Current: Gemini Flash
client = get_llm_client()  # Returns GeminiAdapter

# Future: Swap to GPT-4
# config: LLM_PROVIDER=openai
client = get_llm_client()  # Returns OpenAIAdapter

# Same interface
result = client.generate(prompt)  # Returns dict`}</pre>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Why Gemini Flash?</strong> Fast latency (1-2s),
            free tier available, good JSON reliability. GPT-4 would be ~3x slower and significantly
            more expensive. The adapter allows upgrading if needed.
          </p>
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
                  <td className="py-2 px-3 font-bold text-foreground">Smaller model (Flash)</td>
                  <td className="py-2 px-3">Less nuanced hypotheses vs GPT-4</td>
                  <td className="py-2 px-3">RAG augmentation, structured prompts, domain context</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">JSON-only output</td>
                  <td className="py-2 px-3">Less narrative explanation</td>
                  <td className="py-2 px-3">Evidence field allows free-text context</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Minimal RAG corpus</td>
                  <td className="py-2 px-3">Generic hypotheses without deep context</td>
                  <td className="py-2 px-3">Scenario-specific runbooks planned for Phase 2</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Alert sampling (20)</td>
                  <td className="py-2 px-3">May miss important signals in large incidents</td>
                  <td className="py-2 px-3">Sample includes alerts from each unique host</td>
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
          <p>When asked &quot;How did you design the LLM pipeline for trustworthy output?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;Trustworthy LLM output in operations requires three things: structure, provenance,
                and safety guardrails. I designed the pipeline around all three.
              </p>
              <p>
                For structure, I enforce JSON-only output with a schema in the prompt. The LLM returns
                hypotheses as an array with confidence scores as a dictionary. This is not free-form text -
                it is parseable, storable, and comparable across runs. If the JSON is malformed, the
                system falls back to baseline RCA rather than displaying garbage.
              </p>
              <p>
                For provenance, I use RAG to ground hypotheses in runbook content. The prompt includes
                3-5 relevant document chunks retrieved based on incident characteristics. The evidence
                field in the output cites which alert patterns and runbook sections support each hypothesis.
                Operators can verify - they are not trusting a black box.
              </p>
              <p>
                For safety, I explicitly prohibit command generation in the prompt constraints. LLMs
                can hallucinate CLI commands that look plausible but are dangerous. In a NOC, someone
                might copy-paste a hallucinated command and cause an outage. My system generates
                hypotheses and links to vetted runbooks - it does not generate executable commands.
              </p>
              <p>
                The baseline fallback is also a safety measure. If the LLM times out, returns invalid
                JSON, or fails for any reason, the operator still gets a pattern-matching RCA with
                11 scenario-specific rules. The system never returns empty.&quot;
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
              Estimated time: 90-120 seconds
            </div>
          </div>

          <p className="mt-6">When asked &quot;Why not use GPT-4 for better quality?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              1-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;For a demo-first project, latency and cost matter more than marginal quality improvement.
                Gemini Flash returns in 1-2 seconds. GPT-4 takes 3-5 seconds and costs significantly more.
              </p>
              <p>
                The quality gap is smaller than you might expect because I compensate with RAG context
                and structured prompts. The model is not reasoning from scratch - it is grounding
                hypotheses in domain-specific runbooks I provide. That levels the playing field.
              </p>
              <p>
                I used an adapter pattern so swapping to GPT-4 is a config change, not a code change.
                If evaluation shows the quality gap is significant for certain scenarios, I can upgrade
                selectively. But for MVP, faster and cheaper wins.&quot;
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
