import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "AI/ML Roadmap | TelcoOps",
  description: "AI, LLM, and RAG roadmap for TelcoOps with guardrails and evaluation strategy.",
};

export default function TelcoOpsAiMlRoadmapPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>AI/ML Roadmap</h1>

        <p className="lead">
          TelcoOps is built to prove AI value without sacrificing operational safety. This roadmap documents the AI evolution from a
          deterministic baseline to a governed, production-grade LLM RCA system with measurable quality gates.
        </p>

        <h2>Current AI Baseline (MVP)</h2>

        <ul>
          <li><strong>LLM provider abstraction</strong>: Gemini (default provider) for cloud demos, Tele-LLM (default model: tele-llm-3b) for local or self-hosted inference.</li>
          <li><strong>Strict JSON output</strong>: LLM responses are parsed and validated before storing RCA artifacts.</li>
          <li><strong>RAG context</strong>: LlamaIndex retrieval from 12 runbook corpus with sentence-transformers/all-MiniLM-L6-v2 embeddings, top-k 4.</li>
          <li><strong>Baseline fallback</strong>: 11 pattern-matching rules with confidence scoring (0.52-0.70 per rule).</li>
          <li><strong>Human-in-the-loop review</strong>: All RCA artifacts default to pending_review, require accept/reject decision.</li>
          <li><strong>Semantic evaluation</strong>: Cosine similarity scoring across 50 scenarios with quality metrics (precision, recall, wrong-but-confident).</li>
        </ul>

        <h2>Roadmap Phases</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Phase</th>
                <th className="px-4 py-3 text-left font-semibold">Capabilities</th>
                <th className="px-4 py-3 text-left font-semibold">Quality Gates</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 1: MVP (Complete)</td>
                <td className="px-4 py-3">11 incident types, LLM RCA with RAG, human review, semantic evaluation, decision quality metrics, time-to-context.</td>
                <td className="px-4 py-3">LLM parse rate 100%, baseline comparison, 50-scenario evaluation, human review gate operational.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 2: Multi-Incident</td>
                <td className="px-4 py-3">Expand RAG corpus with scenario-specific runbooks, feedback loop from rejected hypotheses.</td>
                <td className="px-4 py-3">Automated hallucination detection, structured prompt slots (device, interface, symptom).</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 3: Production</td>
                <td className="px-4 py-3">Live telemetry integration, context-aware RCA templates.</td>
                <td className="px-4 py-3">SLOs for RCA latency, hallucination rate under 1%.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>AI Evolution</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart LR
    subgraph P1["Phase 1: MVP (Complete)"]
        direction TB
        A1["11 Baseline Rules"]
        A2["LLM + RAG (12 Runbooks)"]
        A3["Human Review Gate"]
        A4["Semantic Eval (50)"]
    end

    subgraph P2["Phase 2: Multi-Incident"]
        direction TB
        B1["Expanded RAG Corpus"]
        B2["Feedback Loop"]
        B3["Hallucination Detection"]
    end

    subgraph P3["Phase 3: Production"]
        direction TB
        C1["Live Telemetry"]
        C2["Context-Aware Templates"]
        C3["SLO Enforcement"]
    end

    P1 --> P2 --> P3

    style P1 fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#1c1917
    style P2 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#1c1917
    style P3 fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px,color:#1c1917`}
          />
        </div>

        <h2>Model Strategy</h2>

        <ul>
          <li><strong>Gemini for cloud</strong>: Reliable hosted inference for Cloud Run demos.</li>
          <li><strong>Tele-LLM for control</strong>: OpenAI-compatible API endpoints for local or self-hosted inference.</li>
          <li><strong>Model prompt contract</strong>: JSON schema with explicit constraints to reduce hallucinations.</li>
        </ul>

        <h2>RAG Evolution</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Stage</th>
                <th className="px-4 py-3 text-left font-semibold">RAG Capability</th>
                <th className="px-4 py-3 text-left font-semibold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Current</td>
                <td className="px-4 py-3">LlamaIndex + sentence-transformers/all-MiniLM-L6-v2, 12 runbook corpus, top-k 4 retrieval.</td>
                <td className="px-4 py-3">Low-friction demo with minimal dependencies.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Next</td>
                <td className="px-4 py-3">Hybrid retrieval with metadata filters.</td>
                <td className="px-4 py-3">Improve relevance and reduce unrelated context.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Future</td>
                <td className="px-4 py-3">Domain-specific embeddings and feedback re-ranking.</td>
                <td className="px-4 py-3">Match telecom terminology and operator runbooks.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Evaluation and Safety</h2>

        <ul>
          <li><strong>Semantic evaluation</strong>: Cosine similarity (sentence-transformers/all-MiniLM-L6-v2) across 50 scenarios, 11 incident types with deterministic seeds.</li>
          <li><strong>Decision quality metrics</strong>: Precision, recall, wrong-but-confident rate computed per evaluation run.</li>
          <li><strong>Human review gate</strong>: All RCA artifacts default to pending_review; accept/reject with notes logged to audit trail.</li>
          <li><strong>Audit trails</strong>: LLM requests, responses, and review decisions stored per incident.</li>
        </ul>

        <h2>Model Risk Management</h2>

        <p>
          LLM RCA introduces operational risk if outputs are vague or ungrounded. TelcoOps mitigates this by capturing evidence with
          each hypothesis and requiring confidence scores. The baseline RCA is the minimum acceptable output in every case.
        </p>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/getting-started" className="text-primary hover:underline">Getting Started</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
