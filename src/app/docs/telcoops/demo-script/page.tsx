import Link from "next/link";
import { TelcoOpsDocsLayout } from "@/components/TelcoOpsDocsLayout";

export const metadata = {
  title: "Demo Script | TelcoOps",
  description: "Three-minute walkthrough script for the TelcoOps demo.",
};

export default function TelcoOpsDemoScriptPage() {
  return (
    <TelcoOpsDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>3-Minute Demo Script</h1>

        <h2>0:00–0:30 — Setup + Context</h2>
        <ul>
          <li>“TeleOps takes noisy alerts and turns them into incidents with RCA.”</li>
          <li>Show the Scenario Builder and Incident Queue.</li>
        </ul>

        <h2>0:30–1:00 — Generate a Scenario</h2>
        <ul>
          <li>Select DNS outage and generate with default rates.</li>
          <li>Point to the incident queue populating.</li>
        </ul>

        <h2>1:00–1:45 — RCA Comparison</h2>
        <ul>
          <li>Click Run RCA to generate baseline vs LLM.</li>
          <li>Call out hypotheses, confidence, and evidence.</li>
        </ul>

        <h2>1:45–2:30 — Observability Dashboard</h2>
        <ul>
          <li>Open Observability and show KPIs and evaluation scores.</li>
        </ul>

        <h2>2:30–3:00 — Wrap</h2>
        <ul>
          <li>Highlight scenario coverage (network + MSP).</li>
          <li>Close with next steps: richer RAG and real integrations.</li>
        </ul>

        <h2>Demo Video/GIF</h2>
        <p>
          Use the assets on{" "}
          <Link href="/docs/telcoops/demo-video-assets" className="text-primary hover:underline">
            demo video assets
          </Link>
          .
        </p>
      </article>
    </TelcoOpsDocsLayout>
  );
}
