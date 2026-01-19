"use client";

/**
 * Deep Dive: Cloud Economics (FinOps)
 * Section 1 of 12
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import {
  Subsection,
  Insight,
  Pitfall,
  DataTable,
  DeepDiveHeader,
} from "@/components/DeepDiveComponents";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export default function CloudEconomicsPage() {
  return (
    <SystemDesignLayout
      title="Cloud Economics (FinOps)"
      description="The Efficiency Frontier - Cost as a non-functional requirement"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={1}
        title="Cloud Economics (FinOps)"
        subtitle="The Efficiency Frontier - Cost as a non-functional requirement"
        color="blue"
      />

      <Subsection title="Cost Model Fundamentals" color="blue">
        <p className="text-sm text-muted-foreground mb-4">
          Cloud costs are not linear. Understanding the cost curves is essential for capacity planning.
          At a Principal TPM level, you must treat Cost as a non-functional requirement equal to Latency or Availability.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
  subgraph Compute["Compute: Commitment vs Discount"]
    OD[On-Demand<br/>0% discount] --> RI[Reserved<br/>30-72% off]
    RI --> SP[Spot<br/>up to 90% off]
  end
  OD -.->|No commitment| Risk1[High flexibility<br/>High cost]
  SP -.->|Can terminate| Risk2[Low cost<br/>No guarantee]
  style OD fill:#fee2e2,stroke:#dc2626
  style RI fill:#fef3c7,stroke:#d97706
  style SP fill:#dcfce7,stroke:#16a34a`}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2">Compute Tiers</h4>
        <DataTable
          headers={["Tier", "Discount", "Commitment", "Best For"]}
          rows={[
            ["On-Demand", "0% (Baseline)", "None", "Spikes, experimental workloads"],
            ["Reserved/Savings Plans", "30-72%", "1-3 year commitment", "Baseline 24/7 load"],
            ["Spot/Preemptible", "Up to 90%", "None (can be terminated)", "Stateless batch, CI/CD"],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Storage Tiers</h4>

        <MermaidDiagram
          chart={`flowchart LR
  Hot[Hot<br/>$0.023/GB] --> Warm[Warm<br/>$0.0125/GB]
  Warm --> Cold[Cold<br/>$0.004/GB]
  Cold --> Archive[Archive<br/>$0.001/GB]
  Hot -.->|Instant| A1[Active data]
  Archive -.->|12+ hours| A2[Compliance]
  style Hot fill:#fee2e2,stroke:#dc2626
  style Archive fill:#dbeafe,stroke:#2563eb`}
        />

        <DataTable
          headers={["Tier", "Cost", "Access Speed", "Use Case"]}
          rows={[
            ["Hot (S3 Standard)", "~$0.023/GB", "Immediate", "Active data, ML training"],
            ["Warm (S3-IA)", "~$0.0125/GB", "Immediate", "Infrequent access"],
            ["Cold (Glacier)", "~$0.004/GB", "Minutes-hours", "Compliance archives"],
            ["Deep Archive", "~$0.00099/GB", "12+ hours", "Long-term retention"],
          ]}
        />

        <Pitfall>
          Glacier retrieval costs are often overlooked. Deep Archive charges ~$0.02/GB for retrieval.
          If you dump 1 PB of logs into Glacier and need to grep them during an incident,
          retrieval could cost $20,000+ in a single afternoon.
        </Pitfall>
      </Subsection>

      <Insight title="The Hidden Cost of Microservices">
        Each service-to-service call that crosses availability zones incurs network cost (~$0.01/GB each way).
        A single user request that fans out to 50 microservices, each making 3 downstream calls across AZs,
        can cost 150x the single-service equivalent in network transfer. This is why service mesh architectures
        often co-locate services with high affinity, and why companies like Google use regional pods.
      </Insight>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <span className="text-sm text-muted-foreground/50">
          First topic
        </span>
        <Link
          href="/nebula/system-design/deep-dives/compute-strategy"
          className="text-sm text-primary hover:underline"
        >
          Next: Compute Strategy &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
