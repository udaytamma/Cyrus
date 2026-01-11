import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "API Reference | TelcoOps",
  description: "REST API endpoints for generating incidents and RCA artifacts in TelcoOps.",
};

export default function TelcoOpsApiReferencePage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>API Reference</h1>

        <p className="lead">
          TelcoOps exposes a small, focused API for scenario generation, incident correlation, and RCA generation. The API is
          designed to be simple enough for a demo UI but structured for future automation.
        </p>

        <h2>Base URL</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm">http://127.0.0.1:8000</pre>

        <h2>Endpoints</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Method</th>
                <th className="px-4 py-3 text-left font-semibold">Path</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/generate</td>
                <td className="px-4 py-3">Generate synthetic alerts and correlate incidents.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/alerts</td>
                <td className="px-4 py-3">List all alerts.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/incidents</td>
                <td className="px-4 py-3">List all incidents.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/reset</td>
                <td className="px-4 py-3">Clear alerts, incidents, and RCA artifacts.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/rca/{"{incident_id}"}/baseline</td>
                <td className="px-4 py-3">Generate baseline RCA.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">POST</td>
                <td className="px-4 py-3 font-mono">/rca/{"{incident_id}"}/llm</td>
                <td className="px-4 py-3">Generate LLM RCA using RAG context.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">GET</td>
                <td className="px-4 py-3 font-mono">/rca/{"{incident_id}"}/latest</td>
                <td className="px-4 py-3">Fetch latest RCA artifact.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Generate Scenario</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`POST /generate
Content-Type: application/json

{
  "incident_type": "network_degradation",
  "alert_rate_per_min": 20,
  "duration_min": 10,
  "noise_rate_per_min": 5,
  "seed": 42
}`}</pre>

        <p>Response includes alert count, incident summary, and ground truth metadata.</p>

        <h2>Generate Baseline RCA</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`POST /rca/{incident_id}/baseline`}</pre>

        <p>Returns deterministic hypotheses and confidence scores.</p>

        <h2>Generate LLM RCA</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`POST /rca/{incident_id}/llm`}</pre>

        <p>
          LLM RCA uses the incident payload, a sample of alerts, and RAG context. If the LLM fails, the API returns a 502 with the
          underlying error.
        </p>

        <h2>Fetch Latest RCA</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">{`GET /rca/{incident_id}/latest?source=llm|baseline|any`}</pre>

        <h2>Error Codes</h2>

        <ul>
          <li><strong>404</strong>: Incident or RCA artifact not found.</li>
          <li><strong>502</strong>: LLM or RAG failure during RCA generation.</li>
        </ul>

        <hr />

        <p className="text-sm text-muted-foreground">
          Next: <Link href="/docs/telcoops/demo-dashboard" className="text-primary hover:underline">Demo dashboard</Link>
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
