"use client";

/**
 * Part 7: Demo Dashboard
 * Visual upgrade with gradient backgrounds, colored borders, styled numbered steps, HTTP method badges
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function Part7Page() {
  return (
    <ThinkingLayout
      title="Part 7: Demo Dashboard"
      description="Streamlit-based visual testing interface for the fraud detection system"
      currentSection="part-7"
    >
      <Link
        href="/nebula/fraud-detection-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Design Docs
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
          7
        </span>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Demo Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            A Streamlit-based visual testing interface with real-time transaction testing, policy management,
            and system monitoring.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Overview</h2>
        <p className="text-muted-foreground mb-4">
          The demo dashboard provides a visual interface for testing and demonstrating the fraud detection system.
          It&apos;s built with Streamlit for rapid prototyping and includes:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Transaction Tester", icon: "🧪" },
            { label: "Policy Management", icon: "⚙️" },
            { label: "System Health", icon: "💚" },
            { label: "Decision Metrics", icon: "📊" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Tabs */}
      <section className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Dashboard Tabs</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">1</span>
              <span className="font-semibold text-foreground">Transaction Tester</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 ml-11">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Pre-built test scenarios (legitimate, card testing, SIM farm, etc.)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Custom transaction builder with editable fields
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Real-time decision display with score breakdown
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Evidence capture preview
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold">2</span>
              <span className="font-semibold text-foreground">Policy Management</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 ml-11">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                View current policy configuration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Adjust score thresholds with live preview
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Version history and rollback capability
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Rule management (add/modify/delete)
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">3</span>
              <span className="font-semibold text-foreground">System Health</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 ml-11">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Component status (Redis, PostgreSQL, API)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Latency metrics (P50, P95, P99)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Error rates and throughput
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Redis memory usage
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Test Scenarios */}
      <section className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Pre-built Test Scenarios</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Scenario</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Expected Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Legitimate Transaction</td>
                <td className="p-3 border border-border text-muted-foreground">Normal purchase from trusted user</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-bold">ALLOW</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Card Testing Attack</td>
                <td className="p-3 border border-border text-muted-foreground">High velocity, small amounts, high decline rate</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs font-bold">BLOCK</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">SIM Farm Pattern</td>
                <td className="p-3 border border-border text-muted-foreground">Emulator detected, multiple cards, high velocity</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs font-bold">BLOCK</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Geographic Anomaly</td>
                <td className="p-3 border border-border text-muted-foreground">IP location mismatches billing address</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs font-bold">FRICTION</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">Friendly Fraud Risk</td>
                <td className="p-3 border border-border text-muted-foreground">User with prior chargebacks</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs font-bold">REVIEW</span>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-medium">High Value Transaction</td>
                <td className="p-3 border border-border text-muted-foreground">Amount exceeds threshold for new user</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs font-bold">FRICTION</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Using the Dashboard */}
      <section className="mb-8 p-6 bg-gradient-to-r from-teal-500/5 to-transparent rounded-xl border border-teal-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Using the Dashboard</h2>

        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">1</span>
              <span className="font-semibold text-foreground">Start the Dashboard</span>
            </div>
            <pre className="bg-muted/50 rounded-lg p-3 text-sm overflow-x-auto font-mono text-muted-foreground ml-11">streamlit run dashboard.py --server.port 8501</pre>
            <p className="text-sm text-muted-foreground mt-2 ml-11">
              Make sure the Fraud API is running on port 8000 first.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold">2</span>
              <span className="font-semibold text-foreground">Select a Test Scenario</span>
            </div>
            <p className="text-sm text-muted-foreground ml-11">
              Use the dropdown in the sidebar to select from pre-built scenarios, or choose &quot;Custom&quot; to
              build your own transaction.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">3</span>
              <span className="font-semibold text-foreground">Submit Transaction</span>
            </div>
            <p className="text-sm text-muted-foreground ml-11">
              Click &quot;Submit Transaction&quot; to send the request to the Fraud API. The dashboard will
              display the decision, scores, triggered detectors, and evidence capture.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-pink-500/5 to-transparent rounded-lg border border-pink-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-bold">4</span>
              <span className="font-semibold text-foreground">Adjust Policy (Optional)</span>
            </div>
            <p className="text-sm text-muted-foreground ml-11">
              Switch to the Policy tab to modify thresholds. Changes take effect immediately for
              subsequent transactions.
            </p>
          </div>
        </div>
      </section>

      {/* API Integration */}
      <section className="mb-8 p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">API Integration</h2>
        <p className="text-muted-foreground mb-4">
          The dashboard communicates with the Fraud API using these endpoints:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Method</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Endpoint</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Dashboard Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs font-bold">POST</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/decide</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Transaction testing</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-bold">GET</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/health</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">System health check</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-bold">GET</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Display current policy</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-blue-500/15 text-blue-600 dark:text-blue-400 rounded text-xs font-bold">PUT</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy/thresholds</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Threshold adjustment</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-bold">GET</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy/versions</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Version history</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs font-bold">POST</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy/rollback/&#123;v&#125;</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Policy rollback</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Screenshot Placeholder */}
      <section className="mb-8 p-6 bg-gradient-to-r from-gray-500/5 to-transparent rounded-xl border border-gray-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Dashboard Preview</h2>
        <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center border border-dashed border-border">
          <div className="text-center">
            <span className="text-4xl mb-4 block">📊</span>
            <p className="text-muted-foreground">Dashboard screenshot will be added after implementation.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Access the live dashboard at{" "}
              <code className="bg-muted px-2 py-0.5 rounded text-xs">http://localhost:8501</code>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="p-4 bg-gradient-to-r from-gray-500/5 to-transparent rounded-lg border border-gray-500/20 text-sm text-muted-foreground">
        <p><strong className="text-foreground">Document Version:</strong> 1.0</p>
        <p><strong className="text-foreground">Created:</strong> January 3, 2026</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-6"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">&larr; Previous: Sprint-1 Implementation</span>
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-8"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">Next: Interview Prep &rarr;</span>
        </Link>
      </div>
    </ThinkingLayout>
  );
}
