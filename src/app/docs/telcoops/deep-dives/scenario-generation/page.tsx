import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Scenario Generation | TelcoOps",
  description: "Synthetic scenario generation strategy for network and MSP incidents.",
};

export default function TelcoOpsScenarioGenerationPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Scenario Generation</h1>

        <p className="lead">
          TelcoOps uses a deterministic synthetic generator to simulate a catalog of network and MSP incidents. This provides
          repeatable test runs for correlation and RCA evaluation without relying on production data.
        </p>

        <h2>Scenario Config</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Field</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">incident_type</td>
                <td className="px-4 py-3">network_degradation</td>
                <td className="px-4 py-3">Scenario class (multiple types supported).</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">alert_rate_per_min</td>
                <td className="px-4 py-3">20</td>
                <td className="px-4 py-3">Incident alert volume.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">duration_min</td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3">Incident duration window.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">noise_rate_per_min</td>
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">Unrelated alerts to simulate noise.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">seed</td>
                <td className="px-4 py-3">42</td>
                <td className="px-4 py-3">Deterministic randomness for repeatability.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Alert Composition</h2>

        <ul>
          <li>Incident alerts target scenario-specific devices and services.</li>
          <li>Noise alerts simulate unrelated CPU, disk IO, and HTTP 5xx spikes.</li>
          <li>Each alert carries tags that drive correlation.</li>
        </ul>

        <h2>Scenario Catalog (Highlights)</h2>

        <ul>
          <li><strong>DNS outage</strong>: DNS failures, SERVFAIL spikes, resolver errors.</li>
          <li><strong>BGP flap</strong>: session flaps and route withdrawals.</li>
          <li><strong>Fiber cut</strong>: optical link down and loss of signal.</li>
          <li><strong>ISP peering congestion</strong>: latency and packet loss on peering edges.</li>
          <li><strong>DDoS edge</strong>: traffic spikes and SYN flood indicators.</li>
        </ul>

        <p>
          Full catalog:{" "}
          <a
            href="https://github.com/udaytamma/teleops/blob/main/docs/scenario_catalog.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            scenario catalog
          </a>
          .
        </p>

        <h2>Ground Truth Payload</h2>

        <p>
          The generator produces a ground truth object containing the root cause and remediation steps. This is used for validation
          during evaluation runs.
        </p>

        <h2>Why Synthetic Generation</h2>

        <ul>
          <li>Removes dependency on production data access.</li>
          <li>Provides repeatable scenarios for benchmarking LLM output.</li>
          <li>Allows rapid iteration on correlation and RCA logic.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/deep-dives/observability-slos" className="text-primary hover:underline">Observability and SLOs</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
