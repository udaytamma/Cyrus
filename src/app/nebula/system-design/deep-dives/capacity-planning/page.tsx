"use client";

/**
 * Deep Dive: Capacity Planning & Forecasting
 * Section 9 of 12
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import {
  Subsection,
  Insight,
  Pitfall,
  InterviewTip,
  BulletItem,
  DataTable,
  DeepDiveHeader,
} from "@/components/DeepDiveComponents";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export default function CapacityPlanningPage() {
  return (
    <SystemDesignLayout
      title="Capacity Planning"
      description="Predicting the future before it bankrupts you"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={9}
        title="Capacity Planning & Forecasting"
        subtitle="Predicting the future before it bankrupts you"
        color="cyan"
      />

      <Subsection title="The Headroom Formula" color="cyan">
        <p className="text-sm text-muted-foreground mb-4">
          At Principal level, capacity planning is not &quot;add more servers when it breaks.&quot;
          It&apos;s a financial forecasting exercise with engineering constraints.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
  Peak[Peak Load] --> Calc{{"× Safety Margin<br/>÷ Utilization"}}
  Calc --> Cap[Required<br/>Capacity]
  Cap --> N2[N+2 Rule]
  N2 --> M[+1 Maintenance]
  N2 --> F[+1 Failure]
  style Peak fill:#fef3c7,stroke:#d97706
  style Cap fill:#dcfce7,stroke:#16a34a`}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2">The Core Equation</h4>
        <p className="text-sm text-muted-foreground mb-3">
          <code className="bg-muted px-2 py-1 rounded">Required Capacity = (Peak Load &times; Safety Margin) / Utilization Target</code>
        </p>

        <DataTable
          headers={["Variable", "Typical Value", "Why It Matters"]}
          rows={[
            ["Peak Load", "Measured P99 of traffic", "Not average - the spike that breaks you"],
            ["Safety Margin", "1.3x - 1.5x", "Absorb unexpected spikes without degradation"],
            ["Utilization Target", "60-70%", "Leave headroom for failover and bursts"],
          ]}
        />

        <Insight title="The N+2 Rule">
          For critical services, provision N+2 capacity: if you need 3 nodes to handle peak,
          deploy 5. One for planned maintenance, one for unplanned failure.
          This sounds expensive but is cheaper than an outage.
        </Insight>
      </Subsection>

      <Subsection title="Forecasting Methods" color="cyan">
        <DataTable
          headers={["Method", "Best For", "Accuracy", "Principal TPM Action"]}
          rows={[
            ["Linear Extrapolation", "Steady growth businesses", "Low (misses inflection)", "Use only for 3-6 month horizon"],
            ["Seasonal Decomposition", "E-commerce, media, gaming", "Medium", "Model Black Friday, launches, events"],
            ["Business Driver Correlation", "Mature products", "High", "Tie to MAU, orders, revenue projections"],
            ["Scenario Planning", "High uncertainty", "Variable", "Model best/base/worst cases for budget"],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Business Driver Method (Principal Approach)</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Don&apos;t forecast servers. Forecast business metrics, then derive infrastructure.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
  Finance[Finance<br/>DAU/Revenue] --> Unit[Unit Economics<br/>1M DAU = $500K]
  Unit --> Infra[Infrastructure<br/>Budget]
  Finance -.->|40% YoY growth| Infra
  style Finance fill:#e0e7ff,stroke:#6366f1
  style Infra fill:#dcfce7,stroke:#16a34a`}
        />

        <ul className="space-y-1">
          <BulletItem title="Step 1">
            Get MAU/Revenue projections from Finance (they already forecast this for Wall Street)
          </BulletItem>
          <BulletItem title="Step 2">
            Calculate your Unit Economics: &quot;1M DAU = 50 API servers + 10TB storage&quot;
          </BulletItem>
          <BulletItem title="Step 3">
            Multiply: &quot;If we grow 40% YoY, we need 40% more infra budget&quot;
          </BulletItem>
        </ul>

        <InterviewTip>
          &quot;I don&apos;t forecast infrastructure in isolation. I partner with Finance to get their
          DAU/revenue models, then apply our unit economics. If Finance says 2M DAU next year
          and we know 1M DAU costs $500K/month, I can project $1M/month with high confidence.
          This aligns engineering planning with business planning.&quot;
        </InterviewTip>
      </Subsection>

      <Subsection title="The Capacity Review Cadence" color="cyan">
        <DataTable
          headers={["Review Type", "Frequency", "Participants", "Output"]}
          rows={[
            ["Operational Review", "Weekly", "SRE, On-call", "Immediate bottlenecks, alerts"],
            ["Capacity Planning", "Monthly", "TPM, Eng Leads, Finance", "90-day provisioning plan"],
            ["Strategic Planning", "Quarterly", "VP Eng, CFO, TPM", "Annual budget, multi-year roadmap"],
          ]}
        />

        <Pitfall>
          <strong>The Surprise Budget Request:</strong> If you ask Finance for $2M in unplanned cloud spend
          in Q4, you will be rejected. Budget cycles are set 6+ months ahead. A Principal TPM
          anticipates needs and gets them into the planning cycle early.
        </Pitfall>
      </Subsection>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/tagging-chargeback"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Tagging & Chargeback
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/dr-economics"
          className="text-sm text-primary hover:underline"
        >
          Next: DR Economics &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
