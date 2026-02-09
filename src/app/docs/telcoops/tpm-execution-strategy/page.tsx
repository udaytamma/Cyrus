import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "TPM Execution Strategy | TelcoOps",
  description: "Program execution plan, delivery phases, and governance for TelcoOps.",
};

export default function TelcoOpsExecutionStrategyPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>TPM Execution Strategy</h1>

        <p className="lead">
          This document outlines how TelcoOps is delivered as a disciplined TPM program: clear scope boundaries, milestone-based
          execution, and governance tuned for AI adoption in network operations.
        </p>

        <h2>Program Charter</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Program Objective</td>
                <td className="px-4 py-3">Reduce time to RCA hypothesis for priority incidents while keeping AI output auditable.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Primary Users</td>
                <td className="px-4 py-3">NOC leads, incident commanders, network engineers.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">MVP Scope</td>
                <td className="px-4 py-3">Network degradation incidents with synthetic alert generation, correlation, baseline RCA, LLM RCA, and UI.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Guardrails</td>
                <td className="px-4 py-3">Baseline RCA always available; LLM outputs stored with evidence and confidence; human review gate on all RCA artifacts.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Delivery Phases</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Phase</th>
                <th className="px-4 py-3 text-left font-semibold">Goals</th>
                <th className="px-4 py-3 text-left font-semibold">Key Deliverables</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 0: Discovery</td>
                <td className="px-4 py-3">Define incident taxonomy and RCA templates.</td>
                <td className="px-4 py-3">RCA schema, evidence taxonomy, success metrics.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 1: MVP Build</td>
                <td className="px-4 py-3">Create end-to-end RCA demo flow with governance.</td>
                <td className="px-4 py-3">Scenario generator (11 types), correlation engine, baseline RCA, LLM RCA, human-in-the-loop review, semantic evaluation (50 scenarios), Streamlit UI.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 2: Pilot</td>
                <td className="px-4 py-3">Extend incident coverage and governance.</td>
                <td className="px-4 py-3">RAG corpus expansion, feedback loop from rejected hypotheses, automated hallucination detection.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 3: Scale</td>
                <td className="px-4 py-3">Integrate production telemetry.</td>
                <td className="px-4 py-3">Live ingestion, multi-tenant boundaries, SLO tracking.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Delivery Flow</h3>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart LR
    subgraph P0["Phase 0: Discovery"]
        direction TB
        D1["RCA Schema"]
        D2["Evidence Taxonomy"]
        D3["Success Metrics"]
    end

    subgraph P1["Phase 1: MVP (Complete)"]
        direction TB
        M1["11 Scenario Types"]
        M2["Dual-Track RCA"]
        M3["Human Review"]
        M4["Semantic Eval (50)"]
    end

    subgraph P2["Phase 2: Pilot"]
        direction TB
        L1["RAG Expansion"]
        L2["Feedback Loop"]
        L3["Hallucination Detection"]
    end

    subgraph P3["Phase 3: Scale"]
        direction TB
        S1["Live Telemetry"]
        S2["Multi-Tenant"]
        S3["SLO Tracking"]
    end

    P0 --> P1 --> P2 --> P3

    style P0 fill:#e0e7ff,stroke:#4f46e5,stroke-width:2px,color:#1c1917
    style P1 fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#1c1917
    style P2 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#1c1917
    style P3 fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#1c1917`}
          />
        </div>

        <h2>Workstreams</h2>

        <ul>
          <li><strong>Data and Signal</strong>: Alert schema, tagging strategy, tenant boundaries, and alert generation fidelity.</li>
          <li><strong>Correlation and RCA</strong>: Rule-based correlator, baseline hypotheses, confidence scoring.</li>
          <li><strong>LLM and RAG</strong>: Provider abstraction, JSON response validation, RAG corpus and retrieval tuning.</li>
          <li><strong>Human Review and Governance</strong>: Accept/reject workflow, audit trail, decision quality metrics, wrong-but-confident tracking.</li>
          <li><strong>Experience</strong>: Streamlit UI, incident queue workflows, RCA artifact inspection, and hypothesis review.</li>
          <li><strong>Reliability</strong>: Preflight checks, semantic evaluation (50 scenarios), time-to-context measurement, and error handling.</li>
        </ul>

        <h2>Milestone Plan (MVP)</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Milestone</th>
                <th className="px-4 py-3 text-left font-semibold">Exit Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Synthetic Incident Generator</td>
                <td className="px-4 py-3">Configurable alert rate, noise rate, and deterministic seed support.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Correlation Engine</td>
                <td className="px-4 py-3">Incidents created only from latest alert batch and above min threshold.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Baseline RCA</td>
                <td className="px-4 py-3">Deterministic hypothesis + confidence scores.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM RCA</td>
                <td className="px-4 py-3">JSON-validated response, evidence persisted with request and response, duration_ms tracked.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Human Review</td>
                <td className="px-4 py-3">RCA review endpoint operational, audit trail logging to storage/audit_log.jsonl.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Evaluation Pipeline</td>
                <td className="px-4 py-3">50 scenarios, semantic cosine similarity scoring, quality metrics computed.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Demo UI</td>
                <td className="px-4 py-3">Run RCA flow end-to-end, compare baseline vs LLM, review hypotheses.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Risks and Mitigations</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Risk</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM output drift</td>
                <td className="px-4 py-3">Inconsistent RCA narratives</td>
                <td className="px-4 py-3">Baseline comparator + stored prompt/response for audit.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">AI hallucination in RCA</td>
                <td className="px-4 py-3">Wrong root cause accepted as truth</td>
                <td className="px-4 py-3">Human review gate, baseline comparison, wrong-but-confident metric tracking.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Low-quality evidence</td>
                <td className="px-4 py-3">Weak or speculative hypotheses</td>
                <td className="px-4 py-3">RAG corpus curated, confidence required for each hypothesis.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Alert noise dominates</td>
                <td className="px-4 py-3">False correlations</td>
                <td className="px-4 py-3">Minimum alert thresholds, latest-run filtering.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Governance Cadence</h2>

        <ul>
          <li><strong>Weekly progress review</strong>: Demo workflow, regression checks, backlog grooming.</li>
          <li><strong>Monthly risk review</strong>: Model quality, RCA drift, alert coverage gaps.</li>
          <li><strong>Release readiness</strong>: Preflight checks and evaluation script passing.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/decision-memo" className="text-primary hover:underline">Decision Memo</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
