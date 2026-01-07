"use client";

/**
 * Part 3: Detection & Policy
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function Part3() {
  return (
    <ThinkingLayout
      title="Part 3: Detection & Policy"
      description="Criminal and friendly fraud detection, ML integration, policy engine"
      currentSection="part-3"
    >
      <Link
        href="/nebula/fraud-detection-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Design Docs
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">3</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Detection & Policy</h1>
        <p className="text-muted-foreground">
          Criminal and friendly fraud detection, ML integration, policy engine architecture.
        </p>
      </div>

      {/* Fraud Taxonomy */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Fraud Taxonomy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-danger/10 rounded-lg border border-danger/20">
            <div className="font-semibold text-danger mb-2">Criminal Fraud</div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Card testing attacks</li>
              <li>SIM farm operations</li>
              <li>Geographic anomalies</li>
              <li>Bot/emulator detection</li>
              <li>Device spoofing</li>
            </ul>
          </div>
          <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
            <div className="font-semibold text-warning mb-2">Friendly Fraud</div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Historical abuse patterns</li>
              <li>Behavioral consistency</li>
              <li>Dispute timing patterns</li>
              <li>Refund rate monitoring</li>
              <li>Account tenure signals</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Detection Methods */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Detection Methods
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Attack Type
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Detection Method
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Response
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Card Testing</td>
                <td className="p-3 border border-border">High velocity + high decline rate</td>
                <td className="p-3 border border-border">BLOCK + blocklist card</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">SIM Farm</td>
                <td className="p-3 border border-border">Emulator + velocity + phone patterns</td>
                <td className="p-3 border border-border">BLOCK + blocklist device/IMEI</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Geographic Anomaly</td>
                <td className="p-3 border border-border">IP/billing mismatch, impossible travel</td>
                <td className="p-3 border border-border">FRICTION (3DS)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Friendly Fraud</td>
                <td className="p-3 border border-border">Historical dispute patterns</td>
                <td className="p-3 border border-border">Higher evidence capture, REVIEW</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Policy Engine */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Policy Engine Architecture
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            The policy engine evaluates rules in priority order. Higher priority rules short-circuit
            evaluation.
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <strong className="text-foreground">Hard Overrides</strong> - Blocklists (card, device, IP, IMEI)
            </li>
            <li>
              <strong className="text-foreground">Telco Event Rules</strong> - SIM swap → REVIEW, international
              enable → 3DS
            </li>
            <li>
              <strong className="text-foreground">Velocity Circuit Breakers</strong> - Card testing, SIM farm
              detection
            </li>
            <li>
              <strong className="text-foreground">ML Score Thresholds</strong> - Criminal fraud, friendly fraud
              scores
            </li>
            <li>
              <strong className="text-foreground">Contextual Rules</strong> - High value AND new subscriber
            </li>
            <li>
              <strong className="text-foreground">Default</strong> - ALLOW
            </li>
          </ol>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-2"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Part 2: Entities & Features
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-4"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Part 4: Evidence & Economics →
        </Link>
      </div>
    </ThinkingLayout>
  );
}
