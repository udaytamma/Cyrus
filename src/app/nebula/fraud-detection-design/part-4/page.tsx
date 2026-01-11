"use client";

/**
 * Part 4: Evidence & Economics
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export default function Part4() {
  return (
    <ThinkingLayout
      title="Part 4: Evidence & Economics"
      description="Evidence vault architecture, dispute pipeline, economic optimization"
      currentSection="part-4"
    >
      <Link
        href="/nebula/fraud-detection-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Design Docs
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">4</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Evidence & Economics</h1>
        <p className="text-muted-foreground">
          Evidence vault architecture, dispute pipeline, training data pipeline, economic optimization.
        </p>
      </div>

      {/* Evidence Vault */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Evidence Vault Architecture
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Evidence is <strong className="text-foreground">revenue protection</strong>. Well-documented
            evidence wins disputes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Evidence Type
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Storage
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Retention
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Decision records</td>
                  <td className="p-3 border border-border">PostgreSQL (WORM)</td>
                  <td className="p-3 border border-border">7 years</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Device fingerprints</td>
                  <td className="p-3 border border-border">S3</td>
                  <td className="p-3 border border-border">7 years</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">3DS payloads</td>
                  <td className="p-3 border border-border">S3</td>
                  <td className="p-3 border border-border">7 years</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Session recordings</td>
                  <td className="p-3 border border-border">S3</td>
                  <td className="p-3 border border-border">90 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Economic Optimization */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Economic Optimization
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            The goal is <strong className="text-foreground">net revenue optimization</strong>, not just fraud
            prevention.
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
            {`Expected Loss = P(fraud) × (amount + chargeback_fee + penalty + ops_cost)
Expected Gain = P(legitimate) × (revenue from transaction)

Decision Rule:
  If Expected Loss > Expected Gain × risk_tolerance → BLOCK/FRICTION
  Else → ALLOW`}
          </div>
          <p>
            This means a $10 prepaid topup with 50% fraud probability might be allowed, while a $1,000 device
            purchase with 20% fraud probability might be blocked.
          </p>
        </div>
      </div>

      {/* Dispute Pipeline */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Dispute Pipeline
        </h2>
        <MermaidDiagram
          chart={`flowchart LR
    subgraph Input["Trigger"]
        Chargeback["Chargeback<br/>Notification"]
    end

    subgraph Process["Processing"]
        Evidence["Evidence<br/>Assembly"]
        DecisionSnap["Decision +<br/>Feature Snap"]
    end

    subgraph Output["Resolution"]
        Representment["Representment<br/>Package"]
        Submit["Submit to<br/>Network/Issuer"]
    end

    Chargeback --> Evidence
    Evidence --> Representment
    Evidence --> DecisionSnap
    Representment --> Submit

    style Chargeback fill:#fee2e2,stroke:#ef4444
    style Evidence fill:#fef3c7,stroke:#f59e0b
    style DecisionSnap fill:#e0e7ff,stroke:#6366f1
    style Representment fill:#fce7f3,stroke:#ec4899
    style Submit fill:#d1fae5,stroke:#10b981`}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-3"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Part 3: Detection & Policy
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-5"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Part 5: Testing & Monitoring →
        </Link>
      </div>
    </ThinkingLayout>
  );
}
