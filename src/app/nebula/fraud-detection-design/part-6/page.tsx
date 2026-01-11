"use client";

/**
 * Part 6: Sprint-1 Implementation Guide
 * Visual upgrade with gradient backgrounds, colored borders, styled numbered steps, HTTP method badges
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function Part6Page() {
  return (
    <ThinkingLayout
      title="Part 6: Sprint-1 Implementation"
      description="Working MVP with FastAPI, Redis velocity counters, PostgreSQL evidence storage"
      currentSection="part-6"
    >
      <Link
        href="/nebula/fraud-detection-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Design Docs
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
          6
        </span>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Sprint-1 Implementation Guide</h1>
          <p className="text-muted-foreground mt-1">
            A complete, working fraud detection MVP ready for local development and testing.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Overview</h2>
        <p className="text-muted-foreground mb-4">Sprint-1 delivers a functional fraud detection system with:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: "Real-time decision API", icon: "⚡" },
            { label: "Rule-based scoring", icon: "📏" },
            { label: "Velocity-based detection", icon: "🚀" },
            { label: "Configurable policy engine", icon: "⚙️" },
            { label: "Evidence capture", icon: "📋" },
            { label: "Prometheus metrics", icon: "📊" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">
          The implementation follows a smaller scope approach: FastAPI + Redis + PostgreSQL, without Kafka/Flink complexity for the MVP.
        </p>
      </section>

      {/* Core Components */}
      <section className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Core Components</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Component</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Decision API", desc: "FastAPI endpoint for fraud decisions" },
                { name: "Feature Store", desc: "Redis-based velocity counters" },
                { name: "Detection Engine", desc: "Card testing, velocity, geo, bot detection" },
                { name: "Risk Scoring", desc: "Rule-based criminal + friendly fraud scoring" },
                { name: "Policy Engine", desc: "YAML-configurable rules and thresholds" },
                { name: "Evidence Vault", desc: "PostgreSQL-based immutable storage" },
                { name: "Metrics", desc: "Prometheus metrics for monitoring" },
                { name: "Tests", desc: "Unit and integration tests" },
              ].map((item) => (
                <tr key={item.name} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border font-medium">{item.name}</td>
                  <td className="p-3 border border-border text-muted-foreground">{item.desc}</td>
                  <td className="p-3 border border-border">
                    <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-medium">Complete</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Infrastructure</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Service</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Purpose</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Port</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">URL</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Redis", purpose: "Velocity counters, entity profiles", port: "6379", url: "localhost:6379", color: "red" },
                { name: "PostgreSQL", purpose: "Evidence storage, chargebacks", port: "5432", url: "localhost:5432", color: "blue" },
                { name: "Prometheus", purpose: "Metrics collection", port: "9090", url: "http://localhost:9090", color: "orange" },
                { name: "Fraud API", purpose: "Decision endpoint", port: "8000", url: "http://localhost:8000", color: "green" },
                { name: "Dashboard", purpose: "Visual testing interface", port: "8501", url: "http://localhost:8501", color: "pink" },
              ].map((item) => (
                <tr key={item.name} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border">
                    <span className={`font-medium text-${item.color}-600 dark:text-${item.color}-400`}>{item.name}</span>
                  </td>
                  <td className="p-3 border border-border text-muted-foreground">{item.purpose}</td>
                  <td className="p-3 border border-border">
                    <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">{item.port}</code>
                  </td>
                  <td className="p-3 border border-border text-muted-foreground text-xs">{item.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Decision Flow */}
      <section className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Decision Flow</h2>
        <p className="text-muted-foreground mb-4">When a transaction arrives, the system:</p>
        <div className="space-y-3">
          {[
            { step: 1, title: "Checks idempotency", desc: "Returns cached result if already processed", color: "blue" },
            { step: 2, title: "Computes features", desc: "Retrieves velocity counters and entity profiles", color: "purple" },
            { step: 3, title: "Runs detection", desc: "All detectors run in parallel", color: "pink" },
            { step: 4, title: "Calculates scores", desc: "Combines detector signals into risk scores", color: "orange" },
            { step: 5, title: "Evaluates policy", desc: "Applies rules and thresholds", color: "yellow" },
            { step: 6, title: "Returns decision", desc: "ALLOW, FRICTION, REVIEW, or BLOCK", color: "green" },
            { step: 7, title: "Captures evidence", desc: "Stores immutable record for disputes", color: "teal" },
            { step: 8, title: "Updates profiles", desc: "Refreshes entity velocity counters", color: "indigo" },
          ].map((item) => (
            <div key={item.step} className={`flex items-start gap-3 p-3 bg-gradient-to-r from-${item.color}-500/5 to-transparent rounded-lg border border-${item.color}-500/20`}>
              <span className={`w-8 h-8 rounded-full bg-${item.color}-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                {item.step}
              </span>
              <div>
                <strong className="text-foreground">{item.title}</strong>
                <span className="text-muted-foreground"> - {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-8 p-6 bg-gradient-to-r from-teal-500/5 to-transparent rounded-xl border border-teal-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">API Reference</h2>

        <h3 className="text-base font-medium text-foreground mt-6 mb-3">Core Endpoints</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Method</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Endpoint</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
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
                <td className="p-3 border border-border text-muted-foreground">Make a fraud decision for a transaction</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-bold">GET</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/health</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Check service health and component status</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-bold">GET</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy/version</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Get current policy version and hash</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs font-bold">POST</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy/reload</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Hot-reload policy from configuration file</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-medium text-foreground mt-6 mb-3">Policy Management Endpoints (v1.1)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Method</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Endpoint</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-bold">GET</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Get current active policy with full configuration</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-bold">GET</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy/versions</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">List all policy versions (most recent first)</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-blue-500/15 text-blue-600 dark:text-blue-400 rounded text-xs font-bold">PUT</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy/thresholds</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Update score thresholds (validates friction &lt; review &lt; block)</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs font-bold">POST</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy/rules</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Add a new policy rule</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs font-bold">POST</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono">/policy/rollback/&#123;version&#125;</code>
                </td>
                <td className="p-3 border border-border text-muted-foreground">Rollback to a previous version (creates new version)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-8 p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">Getting Started</h2>

        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">1</span>
              <span className="font-semibold text-foreground">Start Infrastructure</span>
            </div>
            <pre className="bg-muted/50 rounded-lg p-3 text-sm overflow-x-auto font-mono text-muted-foreground ml-11">cd /Users/omega/Projects/FraudDetection{"\n"}docker-compose up -d</pre>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold">2</span>
              <span className="font-semibold text-foreground">Install Dependencies</span>
            </div>
            <pre className="bg-muted/50 rounded-lg p-3 text-sm overflow-x-auto font-mono text-muted-foreground ml-11">python -m venv venv{"\n"}source venv/bin/activate{"\n"}pip install -r requirements.txt</pre>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">3</span>
              <span className="font-semibold text-foreground">Run the API</span>
            </div>
            <pre className="bg-muted/50 rounded-lg p-3 text-sm overflow-x-auto font-mono text-muted-foreground ml-11">uvicorn src.api.main:app --reload --port 8000</pre>
          </div>

          <div className="p-4 bg-gradient-to-r from-pink-500/5 to-transparent rounded-lg border border-pink-500/20">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-bold">4</span>
              <span className="font-semibold text-foreground">Run the Dashboard</span>
            </div>
            <pre className="bg-muted/50 rounded-lg p-3 text-sm overflow-x-auto font-mono text-muted-foreground ml-11">streamlit run dashboard.py --server.port 8501</pre>
            <p className="text-sm text-muted-foreground mt-2 ml-11">Open http://localhost:8501 for the visual demo interface.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="p-4 bg-gradient-to-r from-gray-500/5 to-transparent rounded-lg border border-gray-500/20 text-sm text-muted-foreground">
        <p><strong className="text-foreground">Document Version:</strong> 1.1</p>
        <p><strong className="text-foreground">Implementation Date:</strong> January 3, 2026</p>
        <p><strong className="text-foreground">Last Updated:</strong> January 3, 2026 - Added policy versioning and GUI documentation</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-5"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">&larr; Previous: Testing & Monitoring</span>
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-7"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">Next: Demo Dashboard &rarr;</span>
        </Link>
      </div>
    </ThinkingLayout>
  );
}
