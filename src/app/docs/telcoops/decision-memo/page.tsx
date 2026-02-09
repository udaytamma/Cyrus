import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Decision Memo | TelcoOps",
  description: "Key architectural decisions, trade-offs, and what breaks if wrong.",
};

export default function TelcoOpsDecisionMemoPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Decision Memo</h1>

        <p className="lead">
          Four key architectural decisions that shape TelcoOps. Each documents the context, the choice made, alternatives evaluated,
          and what breaks if the decision is wrong.
        </p>

        <hr />

        <h2>Decision 1: Dual-Track RCA (Baseline + LLM) vs LLM-Only</h2>

        <h3>Context</h3>
        <p>
          LLM outputs are non-deterministic. The same incident can produce different hypotheses on consecutive runs.
          In a NOC environment, operators need a stable reference point to calibrate trust in AI-generated analysis.
        </p>

        <h3>Decision</h3>
        <p>
          Always run a deterministic baseline RCA first. LLM RCA augments the baseline with evidence-grounded reasoning and RAG context,
          but never replaces it.
        </p>

        <h3>Alternatives Evaluated</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Approach</th>
                <th className="px-4 py-3 text-left font-semibold">Pros</th>
                <th className="px-4 py-3 text-left font-semibold">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM-Only</td>
                <td className="px-4 py-3">Richer hypotheses, more flexible reasoning</td>
                <td className="px-4 py-3">No fallback on failure, non-deterministic, hard to audit</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Baseline-Only</td>
                <td className="px-4 py-3">Fully deterministic, always available</td>
                <td className="px-4 py-3">Limited to known patterns, no novel incident coverage</td>
              </tr>
              <tr className="border-b border-border bg-green-500/5">
                <td className="px-4 py-3 font-medium">Dual-Track (chosen)</td>
                <td className="px-4 py-3">Best of both: stable baseline + LLM augmentation</td>
                <td className="px-4 py-3">Higher complexity, two code paths to maintain</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 rounded-lg border-2 border-red-500/30 bg-red-500/5 p-4">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">What Breaks If Wrong</p>
          <p className="text-sm">
            LLM-only: single point of failure. If the LLM hallucinates, there is no anchor to detect the error.
            If the LLM provider goes down, RCA is unavailable entirely. Operators lose trust in the first week.
          </p>
        </div>

        <hr />

        <h2>Decision 2: Semantic Similarity Scoring vs String Matching</h2>

        <h3>Context</h3>
        <p>
          The original evaluation used <code>difflib.SequenceMatcher</code> for scoring RCA hypotheses against ground truth.
          This penalized semantically correct paraphrases: &quot;DNS resolution failure in region-east&quot; scored low against
          &quot;Authoritative DNS cluster outage&quot; despite being functionally equivalent.
        </p>

        <h3>Decision</h3>
        <p>
          Replace string matching with cosine similarity using <code>sentence-transformers/all-MiniLM-L6-v2</code> -- the same
          embedding model already used by the RAG pipeline. This ensures evaluation measures semantic correctness, not string overlap.
        </p>

        <h3>Alternatives Evaluated</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Approach</th>
                <th className="px-4 py-3 text-left font-semibold">Pros</th>
                <th className="px-4 py-3 text-left font-semibold">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">String matching (SequenceMatcher)</td>
                <td className="px-4 py-3">Zero dependencies, deterministic</td>
                <td className="px-4 py-3">Penalizes paraphrases, wrong optimization signal</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM-as-judge</td>
                <td className="px-4 py-3">Highest semantic understanding</td>
                <td className="px-4 py-3">Non-deterministic, expensive, circular dependency</td>
              </tr>
              <tr className="border-b border-border bg-green-500/5">
                <td className="px-4 py-3 font-medium">Cosine similarity (chosen)</td>
                <td className="px-4 py-3">Semantic accuracy, deterministic, reuses RAG model</td>
                <td className="px-4 py-3">Threshold tuning needed, not perfect on edge cases</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 rounded-lg border-2 border-red-500/30 bg-red-500/5 p-4">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">What Breaks If Wrong</p>
          <p className="text-sm">
            String matching makes LLM look worse than it is. The original eval scored LLM at 0.44 average -- not because the
            hypotheses were wrong, but because paraphrases were penalized. This sends the wrong optimization signal and undermines
            the case for LLM augmentation.
          </p>
        </div>

        <hr />

        <h2>Decision 3: Human-in-the-Loop Review vs Autonomous Acceptance</h2>

        <h3>Context</h3>
        <p>
          An RCA hypothesis drives remediation decisions. A wrong hypothesis leads to wrong remediation, which can extend an outage
          or cause a new one. The blast radius of an incorrect, automatically-accepted RCA is the entire incident response.
        </p>

        <h3>Decision</h3>
        <p>
          All RCA artifacts default to <code>pending_review</code> status. Operators must explicitly accept or reject each hypothesis.
          Every review decision is logged to an append-only audit trail (<code>storage/audit_log.jsonl</code>).
        </p>

        <h3>Automation Boundary</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Step</th>
                <th className="px-4 py-3 text-left font-semibold">Automated?</th>
                <th className="px-4 py-3 text-left font-semibold">Human Required?</th>
                <th className="px-4 py-3 text-left font-semibold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3">Alert ingestion</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Standard data pipeline</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Alert correlation</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Deterministic tag-based grouping</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Baseline RCA</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Pattern matching, no risk</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">LLM RCA generation</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">No</td><td className="px-4 py-3">AI hypothesis generation</td></tr>
              <tr className="border-b border-border bg-amber-500/5"><td className="px-4 py-3 font-semibold">RCA acceptance</td><td className="px-4 py-3 font-semibold">No</td><td className="px-4 py-3 font-semibold">Yes</td><td className="px-4 py-3">Human validates AI output before action</td></tr>
              <tr className="border-b border-border bg-amber-500/5"><td className="px-4 py-3 font-semibold">Remediation execution</td><td className="px-4 py-3 font-semibold">No</td><td className="px-4 py-3 font-semibold">Yes</td><td className="px-4 py-3">Operator must confirm corrective actions</td></tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 rounded-lg border-2 border-red-500/30 bg-red-500/5 p-4">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">What Breaks If Wrong</p>
          <p className="text-sm">
            Autonomous acceptance of a hallucinated hypothesis leads to wrong remediation. A fiber cut misdiagnosed as a DNS outage
            sends the team chasing DNS servers while the fiber stays down. The blast radius is the entire incident MTTR.
          </p>
        </div>

        <hr />

        <h2>Decision 4: SQLite + Local RAG vs Cloud Infrastructure</h2>

        <h3>Context</h3>
        <p>
          This is a capstone demo project targeting hiring managers, not a production deployment. The primary evaluation
          criteria is &quot;can I run this in 5 minutes and see the full flow?&quot;
        </p>

        <h3>Decision</h3>
        <p>
          Use SQLite for persistence and LlamaIndex with local vector storage for RAG. Zero external infrastructure required.
          Clone, install, run.
        </p>

        <h3>Alternatives Evaluated</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Approach</th>
                <th className="px-4 py-3 text-left font-semibold">Pros</th>
                <th className="px-4 py-3 text-left font-semibold">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">PostgreSQL + Qdrant Cloud</td>
                <td className="px-4 py-3">Production-grade, concurrent writes</td>
                <td className="px-4 py-3">Docker required, setup friction, evaluator may not have Docker</td>
              </tr>
              <tr className="border-b border-border bg-green-500/5">
                <td className="px-4 py-3 font-medium">SQLite + local LlamaIndex (chosen)</td>
                <td className="px-4 py-3">Zero infrastructure, portable, fast setup</td>
                <td className="px-4 py-3">No concurrency, ephemeral on Cloud Run</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose my-6 rounded-lg border-2 border-red-500/30 bg-red-500/5 p-4">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">What Breaks If Wrong</p>
          <p className="text-sm">
            Adding PostgreSQL + Docker to the setup means evaluators who just want to see the demo now need to install Docker,
            wait for containers, and debug connection issues. The friction cost exceeds the benefit for a portfolio demo.
          </p>
        </div>

        <hr />

        <h2>Decision Dependencies</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    D1["Decision 1:<br/>Dual-Track RCA"]
    D2["Decision 2:<br/>Semantic Scoring"]
    D3["Decision 3:<br/>Human-in-the-Loop"]
    D4["Decision 4:<br/>SQLite + Local RAG"]

    D1 -->|"Baseline provides<br/>evaluation anchor"| D2
    D1 -->|"LLM output requires<br/>human validation"| D3
    D4 -->|"Local RAG feeds<br/>LLM context"| D1
    D2 -->|"Quality metrics inform<br/>review decisions"| D3

    style D1 fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#1c1917
    style D2 fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px,color:#1c1917
    style D3 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#1c1917
    style D4 fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#1c1917`}
          />
        </div>

        <hr />

        <h2>Summary</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Decision</th>
                <th className="px-4 py-3 text-left font-semibold">Choice</th>
                <th className="px-4 py-3 text-left font-semibold">Key Trade-off</th>
                <th className="px-4 py-3 text-left font-semibold">Reversible?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3">RCA strategy</td><td className="px-4 py-3">Dual-track (baseline + LLM)</td><td className="px-4 py-3">Complexity vs reliability</td><td className="px-4 py-3">Yes</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Evaluation scoring</td><td className="px-4 py-3">Semantic cosine similarity</td><td className="px-4 py-3">Accuracy vs simplicity</td><td className="px-4 py-3">Yes</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Review model</td><td className="px-4 py-3">Human-in-the-loop</td><td className="px-4 py-3">Safety vs speed</td><td className="px-4 py-3">Yes</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">Infrastructure</td><td className="px-4 py-3">SQLite + local RAG</td><td className="px-4 py-3">Portability vs scale</td><td className="px-4 py-3">Yes</td></tr>
            </tbody>
          </table>
        </div>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/scope-boundaries" className="text-primary hover:underline">Scope Boundaries</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
