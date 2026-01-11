import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

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
          <li><strong>LLM provider abstraction</strong>: Support for Gemini in cloud demos and Tele-LLM for local or self-hosted inference.</li>
          <li><strong>Strict JSON output</strong>: LLM responses are parsed and validated before storing RCA artifacts.</li>
          <li><strong>RAG context</strong>: LlamaIndex retrieval from a curated runbook corpus with HF MiniLM embeddings.</li>
          <li><strong>Baseline fallback</strong>: Rule-driven RCA always available for comparison and safe fallback.</li>
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
                <td className="px-4 py-3 font-medium">Phase 1: MVP</td>
                <td className="px-4 py-3">Single incident type, LLM RCA with RAG context.</td>
                <td className="px-4 py-3">LLM output parse rate 100%, baseline comparison required.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 2: Multi-Incident</td>
                <td className="px-4 py-3">Extend to additional network incidents and runbook sources.</td>
                <td className="px-4 py-3">Human review feedback loop, top-k relevance scoring.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 3: Production</td>
                <td className="px-4 py-3">Live telemetry integration, context-aware RCA templates.</td>
                <td className="px-4 py-3">SLOs for RCA latency, hallucination rate under 1%.</td>
              </tr>
            </tbody>
          </table>
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
                <td className="px-4 py-3">Simple vector store with MiniLM embeddings.</td>
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
          <li><strong>Golden scenarios</strong>: Deterministic scenario seeds and expected hypotheses for regression tests.</li>
          <li><strong>RCA scoring rubric</strong>: Evaluate hypothesis accuracy, evidence grounding, and confidence calibration.</li>
          <li><strong>Audit trails</strong>: Store LLM requests and responses per incident for traceability.</li>
        </ul>

        <h2>Model Risk Management</h2>

        <p>
          LLM RCA introduces operational risk if outputs are vague or ungrounded. TelcoOps mitigates this by capturing evidence with
          each hypothesis and requiring confidence scores. The baseline RCA is the minimum acceptable output in every case.
        </p>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/results-personas" className="text-primary hover:underline">Results and personas</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
