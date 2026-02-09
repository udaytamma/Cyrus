import Link from "next/link";
import { DocsLayout } from "@/components/DocsLayout";

export const metadata = {
  title: "Fraud Detection Platform | Documentation",
  description: "Enterprise-grade real-time payment fraud detection system designed for Telco/MSP environments.",
};

const executivePages = [
  { title: "Executive Overview", href: "/docs/fraud-platform/executive-overview", description: "Business case, goals, constraints, and financial impact model" },
  { title: "TPM Execution Strategy", href: "/docs/fraud-platform/tpm-execution-strategy", description: "How I would drive this as a Principal TPM -- stakeholders, rollout, safety rails" },
  { title: "Decision Memo", href: "/docs/fraud-platform/decision-memo", description: "Four key architectural decisions with alternatives evaluated and trade-offs" },
  { title: "Scope Boundaries", href: "/docs/fraud-platform/scope-boundaries", description: "What this platform deliberately is not -- and why" },
  { title: "Failure Modes & Abuse Cases", href: "/docs/fraud-platform/failure-modes", description: "Five failure scenarios, adversarial patterns, and known gaps" },
  { title: "Results & Personas", href: "/docs/fraud-platform/results-personas", description: "Load test results, limitations, and persona-based dashboard workflows" },
  { title: "AI/ML Roadmap", href: "/docs/fraud-platform/ai-ml-roadmap", description: "Phase 1-3 roadmap from rule-based to hybrid ML detection" },
];

const technicalPages = [
  { title: "Getting Started", href: "/docs/fraud-platform/getting-started", description: "Prerequisites, quick start, and first fraud check in under 5 minutes" },
  { title: "Architecture", href: "/docs/fraud-platform/architecture", description: "System design, data flow, component latency budgets, and monitoring" },
  { title: "API Reference", href: "/docs/fraud-platform/api-reference", description: "Complete endpoint documentation with request/response schemas" },
  { title: "Demo Dashboard", href: "/docs/fraud-platform/demo-dashboard", description: "Streamlit dashboard walkthrough with attack simulation presets" },
  { title: "Testing & Performance", href: "/docs/fraud-platform/testing-performance", description: "118 tests, CI pipeline, chaos testing, and single-request benchmarks" },
];

export default function FraudPlatformOverviewPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Telco Payment Fraud Detection Platform</h1>

        <p className="lead">
          Enterprise-grade real-time <strong>payment fraud</strong> detection system designed for Telco/MSP
          environments. Built to handle high-throughput transactions with &lt;200ms P99 decision latency at 260+ RPS.
        </p>

        <h2>The Challenge</h2>

        <p>
          <strong>Payment fraud</strong> in the telecommunications industry costs operators billions annually.
          Traditional batch-processing approaches fail because:
        </p>

        <ul>
          <li><strong>Too slow</strong>: Fraudsters complete SIM activations, device purchases, and service upgrades before detection</li>
          <li><strong>Too rigid</strong>: Static rules cannot adapt to evolving attack patterns like SIM farms and device resale fraud</li>
          <li><strong>Poor UX</strong>: Blocking legitimate subscribers hurts revenue more than the fraud itself</li>
        </ul>

        <h2>The Solution</h2>

        <p>A real-time decisioning engine that:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Capability</th>
                <th className="px-4 py-3 text-left font-semibold">Achievement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Decision Latency</td>
                <td className="px-4 py-3">106ms P99 (47% under 200ms budget)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Detection Coverage</td>
                <td className="px-4 py-3">5 fraud signal types with weighted-max scoring</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Policy Updates</td>
                <td className="px-4 py-3">YAML hot-reload without restart</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Evidence Trail</td>
                <td className="px-4 py-3">Immutable audit vault for dispute representment</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Test Coverage</td>
                <td className="px-4 py-3">118 tests (111 unit + 7 integration), load tested to 260 RPS (50 users baseline)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Documentation</h2>

        <h3>Executive Overview</h3>

        <p>Business context, strategic decisions, and program management perspective.</p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {executivePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{page.title} &rarr;</div>
              <div className="mt-1 text-sm text-muted-foreground">{page.description}</div>
            </Link>
          ))}
        </div>

        <h3>Technical Overview</h3>

        <p>Architecture, API documentation, and hands-on guides.</p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {technicalPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{page.title} &rarr;</div>
              <div className="mt-1 text-sm text-muted-foreground">{page.description}</div>
            </Link>
          ))}
        </div>

        <hr />

        <p><strong>Author</strong>: Uday Tamma</p>
      </article>
    </DocsLayout>
  );
}
