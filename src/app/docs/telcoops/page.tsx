import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "TelcoOps | Documentation",
  description: "AI-assisted telecom operations platform for incident correlation and RCA with baseline + LLM workflows.",
};

export default function TelcoOpsOverviewPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>TelcoOps: AI-Assisted Network Incident RCA</h1>

        <p className="lead">
          TelcoOps is a telecom operations workflow for correlating noisy network alerts into incidents and generating root cause
          analysis with both rule-based and LLM-driven methods. It is built as a demonstrable, end-to-end MVP that mirrors how an
          ops team would move from signal noise to an actionable RCA narrative.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="https://github.com/udaytamma/teleops"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <span className="text-2xl">📦</span>
            <div>
              <div className="font-semibold text-foreground">Source Code</div>
              <div className="text-sm text-muted-foreground">GitHub Repository</div>
            </div>
          </a>
          <Link
            href="/projects/telcoops"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <span className="text-2xl">🧭</span>
            <div>
              <div className="font-semibold text-foreground">Project Overview</div>
              <div className="text-sm text-muted-foreground">Portfolio positioning</div>
            </div>
          </Link>
        </div>

        <hr />

        <h2>The Challenge</h2>

        <p>
          Telecom NOC teams face a persistent signal-to-noise problem: hundreds of low-level alerts triggered by cascading network
          degradation events, while the real customer impact remains unclear. Manual triage is slow, inconsistent, and hard to scale
          across multiple tenants and network domains.
        </p>

        <ul>
          <li><strong>Alert fatigue</strong>: Large volumes of semi-duplicate alerts hide the actual root cause.</li>
          <li><strong>Fragmented RCA</strong>: Evidence lives in multiple tools without a consistent RCA template.</li>
          <li><strong>Slow incident response</strong>: Teams struggle to prioritize remediation when RCA is late or ambiguous.</li>
        </ul>

        <h2>The Solution</h2>

        <p>
          TelcoOps standardizes the incident lifecycle: synthesize alerts, correlate incidents, generate baseline RCA, augment with
          LLM reasoning using a RAG context, and present the results in a compact ops dashboard.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Capability</th>
                <th className="px-4 py-3 text-left font-semibold">MVP Implementation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Scenario-driven alerts</td>
                <td className="px-4 py-3">Multi-scenario generator with tunable noise and deterministic seeds</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Incident correlation</td>
                <td className="px-4 py-3">Rule-based grouping by incident tag + time window</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Baseline RCA</td>
                <td className="px-4 py-3">Deterministic hypotheses with confidence scoring</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">LLM RCA</td>
                <td className="px-4 py-3">Gemini or Tele-LLM with JSON-structured responses</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">RAG context</td>
                <td className="px-4 py-3">LlamaIndex + HF embeddings over ops runbooks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Observability dashboard</td>
                <td className="px-4 py-3">Metrics, KPIs, test results, and evaluation summaries</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Access control stub</td>
                <td className="px-4 py-3">Optional API token gate for write + metrics endpoints</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>What You Can Demonstrate</h2>

        <ol>
          <li>Generate a controlled incident scenario with realistic alert noise.</li>
          <li>Correlate the latest alert batch into incidents.</li>
          <li>Run baseline RCA to show deterministic reasoning.</li>
          <li>Run LLM RCA and compare against baseline hypotheses.</li>
          <li>Inspect LLM request/response artifacts for auditability.</li>
          <li>Open Observability to review KPIs and test coverage.</li>
        </ol>

        <h2>Architecture at a Glance</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart LR
    UI["Streamlit Ops Console"] --> API["FastAPI Control Plane"]
    API --> GEN["Scenario Generator"]
    API --> CORR["Incident Correlator"]
    API --> RCA["RCA Engine"]
    RCA --> BASE["Baseline Rules"]
    RCA --> LLM["LLM RCA"]
    LLM --> RAG["RAG Context (LlamaIndex)"]
    API --> DB[("SQLite: Alerts, Incidents, RCA")]

    style UI fill:#e0f2fe,stroke:#0284c7,stroke-width:2px
    style API fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style RCA fill:#ede9fe,stroke:#7c3aed,stroke-width:2px
    style DB fill:#dcfce7,stroke:#16a34a,stroke-width:2px
    style RAG fill:#fee2e2,stroke:#ef4444,stroke-width:2px`}
          />
        </div>

        <h2>Scope and Boundaries</h2>

        <p>
          This MVP supports a catalog of network and MSP incident scenarios, each with ground truth and expected alert patterns.
          It is designed for a demo environment and can be extended to production data sources.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">In Scope</th>
                <th className="px-4 py-3 text-left font-semibold">Out of Scope (MVP)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Synthetic alert ingestion</td>
                <td className="px-4 py-3">Live integrations (SNMP, NetFlow, APM)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Rule-based correlation</td>
                <td className="px-4 py-3">ML-driven clustering at scale</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">LLM RCA with RAG</td>
                <td className="px-4 py-3">On-call automation or remediation execution</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Streamlit demo UI</td>
                <td className="px-4 py-3">Enterprise UI with RBAC and multi-tenant dashboards</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Key Implementation Signals</h2>

        <ul>
          <li><strong>Auditability</strong>: All LLM requests and responses are stored with the incident record.</li>
          <li><strong>Dual-mode LLM support</strong>: Gemini for cloud demos, Tele-LLM for local or self-hosted inference.</li>
          <li><strong>Deterministic baseline</strong>: Always available for comparison and regression testing.</li>
          <li><strong>Minimal infrastructure</strong>: SQLite + FastAPI to keep local demo friction low.</li>
        </ul>

        <h2>Demo Assets</h2>

        <ul>
          <li>
            <a
              href="https://github.com/udaytamma/teleops/blob/main/docs/demo_results.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo + Results (1-page)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/udaytamma/teleops/blob/main/docs/demo_script.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              3-minute demo script
            </a>
          </li>
          <li>
            <a
              href="TBD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo video / GIF walkthrough (placeholder)
            </a>
          </li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/executive-overview" className="text-primary hover:underline">Executive overview</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
