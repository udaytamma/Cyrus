import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "LLM and RAG Pipeline | TelcoOps",
  description: "Deep dive into LLM integration and retrieval-augmented generation in TelcoOps.",
};

export default function TelcoOpsLlmRagPipelinePage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>LLM and RAG Pipeline</h1>

        <p className="lead">
          TelcoOps uses a provider-agnostic LLM client and a lightweight RAG pipeline built on LlamaIndex. The goal is to keep the
          LLM layer swappable while enforcing structured RCA outputs.
        </p>

        <h2>Provider Abstraction</h2>

        <ul>
          <li><strong>Gemini</strong>: Hosted model for Cloud Run demos.</li>
          <li><strong>Tele-LLM</strong>: OpenAI-compatible endpoints for local or self-hosted inference.</li>
          <li><strong>Configuration</strong>: Controlled via <code>LLM_PROVIDER</code>, <code>LLM_MODEL</code>, and <code>LLM_BASE_URL</code>.</li>
        </ul>

        <h2>Prompt Construction</h2>

        <p>
          The prompt includes a strict JSON schema, incident metadata, a sample of alerts, and RAG context. This ensures predictable
          output formatting and makes post-processing reliable.
        </p>

        <h2>JSON Parsing Guardrails</h2>

        <p>
          The LLM client first attempts a direct JSON parse. If it fails, it extracts JSON from code fences or the first brace block.
          Unparseable responses raise an explicit error.
        </p>

        <h2>RAG Workflow</h2>

        <ol>
          <li>Load runbook corpus from <code>docs/rag_corpus</code>.</li>
          <li>Embed documents using MiniLM.</li>
          <li>Persist the index under <code>storage/rag_index</code>.</li>
          <li>Retrieve top-k nodes for each incident query.</li>
        </ol>

        <h2>Evidence Packaging</h2>

        <p>
          LLM RCA evidence is stored as a JSON bundle containing:
        </p>

        <ul>
          <li>RAG excerpts</li>
          <li>LLM request payload</li>
          <li>LLM response payload</li>
        </ul>

        <h2>Failure Modes</h2>

        <ul>
          <li><strong>RAG index missing</strong>: Build index on first run.</li>
          <li><strong>LLM response not JSON</strong>: Return 502 with explicit error.</li>
          <li><strong>Provider misconfiguration</strong>: Preflight script detects missing API keys.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/deep-dives/scenario-generation" className="text-primary hover:underline">Scenario generation</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
