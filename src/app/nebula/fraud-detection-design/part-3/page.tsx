"use client";

/**
 * Part 3: Detection & Policy
 * Visual upgrade with gradient backgrounds, colored borders, styled numbered steps
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
      <div className="flex items-start gap-4 mb-8">
        <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
          3
        </span>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Detection & Policy</h1>
          <p className="text-muted-foreground mt-1">
            Criminal and friendly fraud detection, ML integration, policy engine architecture.
          </p>
        </div>
      </div>

      {/* Fraud Taxonomy */}
      <div className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Fraud Taxonomy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-lg border border-red-500/30">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold">!</span>
              <span className="font-semibold text-red-600 dark:text-red-400">Criminal Fraud</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 ml-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                Card testing attacks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                SIM farm operations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                Geographic anomalies
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                Bot/emulator detection
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                Device spoofing
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-lg border border-amber-500/30">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-sm font-bold">?</span>
              <span className="font-semibold text-amber-600 dark:text-amber-400">Friendly Fraud</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 ml-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Historical abuse patterns
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Behavioral consistency
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Dispute timing patterns
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Refund rate monitoring
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Account tenure signals
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Detection Methods */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Detection Methods
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Attack Type
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Detection Method
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Response
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Card Testing</td>
                <td className="p-3 border border-border text-muted-foreground">High velocity + high decline rate</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs font-medium">BLOCK</span>
                  <span className="text-muted-foreground text-xs ml-1">+ blocklist card</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">SIM Farm</td>
                <td className="p-3 border border-border text-muted-foreground">Emulator + velocity + phone patterns</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs font-medium">BLOCK</span>
                  <span className="text-muted-foreground text-xs ml-1">+ blocklist device/IMEI</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Geographic Anomaly</td>
                <td className="p-3 border border-border text-muted-foreground">IP/billing mismatch, impossible travel</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs font-medium">FRICTION</span>
                  <span className="text-muted-foreground text-xs ml-1">(3DS)</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Friendly Fraud</td>
                <td className="p-3 border border-border text-muted-foreground">Historical dispute patterns</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs font-medium">REVIEW</span>
                  <span className="text-muted-foreground text-xs ml-1">+ evidence capture</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Policy Engine */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Policy Engine Architecture
        </h2>
        <div className="space-y-3 text-muted-foreground">
          <p className="mb-4">
            The policy engine evaluates rules in priority order. Higher priority rules short-circuit
            evaluation.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-red-500/5 to-transparent rounded-lg border border-red-500/20">
              <span className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-foreground">Hard Overrides</strong>
                <span className="text-muted-foreground"> - Blocklists (card, device, IP, IMEI)</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-500/5 to-transparent rounded-lg border border-orange-500/20">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-foreground">Telco Event Rules</strong>
                <span className="text-muted-foreground"> - SIM swap → REVIEW, international enable → 3DS</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-500/5 to-transparent rounded-lg border border-yellow-500/20">
              <span className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-foreground">Velocity Circuit Breakers</strong>
                <span className="text-muted-foreground"> - Card testing, SIM farm detection</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/20">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</span>
              <div>
                <strong className="text-foreground">ML Score Thresholds</strong>
                <span className="text-muted-foreground"> - Criminal fraud, friendly fraud scores</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg border border-purple-500/20">
              <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">5</span>
              <div>
                <strong className="text-foreground">Contextual Rules</strong>
                <span className="text-muted-foreground"> - High value AND new subscriber</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/20">
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">6</span>
              <div>
                <strong className="text-foreground">Default</strong>
                <span className="text-muted-foreground"> - ALLOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-2"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">← Part 2: Entities & Features</span>
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-4"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">Part 4: Evidence & Economics →</span>
        </Link>
      </div>
    </ThinkingLayout>
  );
}
