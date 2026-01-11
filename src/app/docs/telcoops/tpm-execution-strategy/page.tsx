import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

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
                <td className="px-4 py-3">Baseline RCA always available; LLM outputs stored with evidence and confidence.</td>
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
                <td className="px-4 py-3">Create end-to-end RCA demo flow.</td>
                <td className="px-4 py-3">Scenario generator, correlation engine, baseline RCA, LLM RCA, Streamlit UI.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 2: Pilot</td>
                <td className="px-4 py-3">Extend incident coverage and governance.</td>
                <td className="px-4 py-3">Additional incident types, RAG corpus expansion, evaluation metrics.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Phase 3: Scale</td>
                <td className="px-4 py-3">Integrate production telemetry.</td>
                <td className="px-4 py-3">Live ingestion, multi-tenant boundaries, SLO tracking.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Workstreams</h2>

        <ul>
          <li><strong>Data and Signal</strong>: Alert schema, tagging strategy, tenant boundaries, and alert generation fidelity.</li>
          <li><strong>Correlation and RCA</strong>: Rule-based correlator, baseline hypotheses, confidence scoring.</li>
          <li><strong>LLM and RAG</strong>: Provider abstraction, JSON response validation, RAG corpus and retrieval tuning.</li>
          <li><strong>Experience</strong>: Streamlit UI, incident queue workflows, and RCA artifact inspection.</li>
          <li><strong>Reliability</strong>: Preflight checks, evaluation harness, logging, and error handling.</li>
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
                <td className="px-4 py-3">JSON-validated response, evidence persisted with request and response.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Demo UI</td>
                <td className="px-4 py-3">Run RCA flow end-to-end and compare baseline vs LLM output.</td>
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
          Next: <Link href="/docs/telcoops/ai-ml-roadmap" className="text-primary hover:underline">AI/ML roadmap</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
