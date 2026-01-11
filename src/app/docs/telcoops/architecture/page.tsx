import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Architecture | TelcoOps",
  description: "System architecture and design principles for the TelcoOps RCA platform.",
};

export default function TelcoOpsArchitecturePage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>System Architecture</h1>

        <p className="lead">
          TelcoOps is designed as a minimal but complete workflow: from synthetic alert ingestion to incident correlation to dual-mode
          RCA generation. The architecture prioritizes auditability, repeatability, and a clean separation between data, control, and AI
          planes.
        </p>

        <h2>Design Principles</h2>

        <ul>
          <li><strong>Auditability first</strong>: Every RCA output is stored with its evidence and model metadata.</li>
          <li><strong>Baseline is mandatory</strong>: The deterministic RCA path is always available.</li>
          <li><strong>Low-friction demo</strong>: SQLite and Streamlit minimize setup for a local demo.</li>
        </ul>

        <h2>High-Level Architecture</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    UI["Streamlit Ops Console"] --> API["FastAPI Control Plane"]
    API --> GEN["Scenario Generator"]
    API --> CORR["Incident Correlator"]
    API --> RCA["RCA Engine"]
    RCA --> BASE["Baseline RCA"]
    RCA --> LLM["LLM RCA"]
    LLM --> RAG["RAG Index"]
    API --> DB[("SQLite Database")]

    style UI fill:#e0f2fe,stroke:#0284c7,stroke-width:2px
    style API fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style RCA fill:#ede9fe,stroke:#7c3aed,stroke-width:2px
    style DB fill:#dcfce7,stroke:#16a34a,stroke-width:2px
    style RAG fill:#fee2e2,stroke:#ef4444,stroke-width:2px`}
          />
        </div>

        <h2>Data Plane</h2>

        <p>
          The data plane is responsible for generating and storing alerts and incidents. The MVP uses synthetic alerts to simulate
          network degradation scenarios with configurable noise rates.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Entity</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                <th className="px-4 py-3 text-left font-semibold">Key Fields</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Alert</td>
                <td className="px-4 py-3">Raw signals emitted by network systems.</td>
                <td className="px-4 py-3">source_system, host, service, severity, tags</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Incident</td>
                <td className="px-4 py-3">Correlated set of alerts with shared root cause.</td>
                <td className="px-4 py-3">related_alert_ids, summary, severity, status</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RCA Artifact</td>
                <td className="px-4 py-3">Structured RCA output with evidence.</td>
                <td className="px-4 py-3">hypotheses, confidence_scores, evidence</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Control Plane</h2>

        <p>
          FastAPI orchestrates the workflow: generating scenarios, correlating incidents, and launching RCA generation. The API
          provides a simple contract for UI integration and future automation.
        </p>

        <h2>AI Plane</h2>

        <p>
          The AI plane combines a deterministic baseline with LLM reasoning. LLM requests include a structured incident payload, an
          alert sample, and RAG context retrieved from runbooks. The response is validated for JSON structure before persistence.
        </p>

        <h2>Storage Layer</h2>

        <ul>
          <li><strong>SQLite</strong>: Stores alerts, incidents, and RCA artifacts for demo traceability.</li>
          <li><strong>RAG index</strong>: LlamaIndex persists vector indices under <code>storage/rag_index</code>.</li>
        </ul>

        <h2>Key Architectural Tradeoffs</h2>

        <ul>
          <li><strong>SQLite vs Postgres</strong>: SQLite keeps the demo local and simple; a production rollout would move to Postgres.</li>
          <li><strong>Rule-based correlation</strong>: Chosen for interpretability in MVP; ML clustering is a future enhancement.</li>
          <li><strong>Streamlit UI</strong>: Fast for demos, not intended as a production NOC console.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/api-reference" className="text-primary hover:underline">API reference</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
