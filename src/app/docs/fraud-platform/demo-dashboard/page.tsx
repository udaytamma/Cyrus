import { DocsLayout } from "@/components/DocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Demo Dashboard | Fraud Detection Platform",
  description: "Interactive Streamlit dashboard for testing and demonstrating the fraud detection system.",
};

export default function DemoDashboardPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Demo Dashboard</h1>

        <p className="lead">
          Interactive Streamlit dashboard for testing and demonstrating the fraud detection system.
        </p>

        <h2>Starting the Dashboard</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                <span className="font-semibold">Start the API</span>
              </div>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
{`uvicorn src.api.main:app --reload --port 8000`}
            </pre>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                <span className="font-semibold">Start the Dashboard</span>
              </div>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
{`streamlit run dashboard.py --server.port 8501`}
            </pre>
          </div>
        </div>

        <p>Open <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://localhost:8501</a> in your browser.</p>

        <div className="not-prose my-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/50">
          <p className="text-sm text-blue-900 dark:text-blue-200">
            <strong>Two dashboard options:</strong> <code>dashboard.py</code> is the standard demo dashboard. For a NOC-style dark theme command center experience, run <code>streamlit run ui/dashboard_enhanced.py --server.port 8501</code> instead.
          </p>
        </div>

        <hr />

        <h2>Dashboard Layout</h2>

        <h3>Sidebar: System Status</h3>

        <p>Real-time health indicators:</p>

        <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Indicator</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">System Status</td>
                <td className="px-4 py-3 text-muted-foreground">Overall health (Healthy/Degraded/Down)</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Redis</td>
                <td className="px-4 py-3 text-muted-foreground">Velocity counter store connection</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">PostgreSQL</td>
                <td className="px-4 py-3 text-muted-foreground">Evidence storage connection</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Policy</td>
                <td className="px-4 py-3 text-muted-foreground">Policy engine status</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Policy Version</td>
                <td className="px-4 py-3 text-muted-foreground">Current active policy version</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Main Area: Transaction Simulator</h3>

        <h4>Attack Presets</h4>

        <p>One-click presets to demonstrate different fraud scenarios:</p>

        <div className="not-prose my-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Preset</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Expected Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Normal Transaction</td>
                <td className="px-4 py-3 text-muted-foreground">Typical $50 purchase</td>
                <td className="px-4 py-3"><code className="rounded bg-green-500/20 px-1.5 py-0.5 text-green-600 dark:text-green-400">ALLOW</code></td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Card Testing Attack</td>
                <td className="px-4 py-3 text-muted-foreground">Small $1 amount from datacenter IP</td>
                <td className="px-4 py-3"><code className="rounded bg-orange-500/20 px-1.5 py-0.5 text-orange-600 dark:text-orange-400">REVIEW</code> or <code className="rounded bg-red-500/20 px-1.5 py-0.5 text-red-600 dark:text-red-400">BLOCK</code></td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Velocity Attack</td>
                <td className="px-4 py-3 text-muted-foreground">$1500 from new account</td>
                <td className="px-4 py-3"><code className="rounded bg-yellow-500/20 px-1.5 py-0.5 text-yellow-600 dark:text-yellow-400">FRICTION</code> or <code className="rounded bg-orange-500/20 px-1.5 py-0.5 text-orange-600 dark:text-orange-400">REVIEW</code></td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Geographic Anomaly</td>
                <td className="px-4 py-3 text-muted-foreground">US card transacting from Nigeria</td>
                <td className="px-4 py-3"><code className="rounded bg-orange-500/20 px-1.5 py-0.5 text-orange-600 dark:text-orange-400">REVIEW</code></td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Bot/Emulator Attack</td>
                <td className="px-4 py-3 text-muted-foreground">Emulated device via Tor</td>
                <td className="px-4 py-3"><code className="rounded bg-red-500/20 px-1.5 py-0.5 text-red-600 dark:text-red-400">BLOCK</code></td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">Friendly Fraud Risk</td>
                <td className="px-4 py-3 text-muted-foreground">High-value from dispute-prone user</td>
                <td className="px-4 py-3"><code className="rounded bg-yellow-500/20 px-1.5 py-0.5 text-yellow-600 dark:text-yellow-400">FRICTION</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Custom fields are available for fine-grained control: amount, service ID, event subtype, card token, user ID, and device flags (emulator, rooted, datacenter IP, Tor, VPN). See the <Link href="/docs/fraud-platform/api-reference">API Reference</Link> for the full schema.</p>

        <hr />

        <h2>Decision Display</h2>

        <h3>Decision Badge</h3>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent p-4 text-center">
            <div className="font-mono text-lg font-semibold text-green-600 dark:text-green-400">ALLOW</div>
            <div className="text-xs text-muted-foreground mt-1">Transaction approved</div>
          </div>
          <div className="rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent p-4 text-center">
            <div className="font-mono text-lg font-semibold text-yellow-600 dark:text-yellow-400">FRICTION</div>
            <div className="text-xs text-muted-foreground mt-1">Request verification</div>
          </div>
          <div className="rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-4 text-center">
            <div className="font-mono text-lg font-semibold text-orange-600 dark:text-orange-400">REVIEW</div>
            <div className="text-xs text-muted-foreground mt-1">Queue for manual review</div>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent p-4 text-center">
            <div className="font-mono text-lg font-semibold text-red-600 dark:text-red-400">BLOCK</div>
            <div className="text-xs text-muted-foreground mt-1">Transaction declined</div>
          </div>
        </div>

        <h3>Score Gauges</h3>

        <p>Four interactive gauge charts:</p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-gradient-to-r from-slate-500/5 to-transparent p-4">
            <div className="font-semibold mb-2">Gauge Types</div>
            <ol className="space-y-1 text-sm text-muted-foreground">
              <li>1. <strong className="text-foreground">Overall Risk</strong> - Combined risk score (0-100%)</li>
              <li>2. <strong className="text-foreground">Criminal Score</strong> - Criminal fraud probability</li>
              <li>3. <strong className="text-foreground">Friendly Fraud</strong> - Friendly fraud probability</li>
              <li>4. <strong className="text-foreground">Bot Score</strong> - Automation detection score</li>
            </ol>
          </div>
          <div className="rounded-lg border border-border bg-gradient-to-r from-slate-500/5 to-transparent p-4">
            <div className="font-semibold mb-2">Color Thresholds</div>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-muted-foreground">0-30%: Low risk</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="text-muted-foreground">30-60%: Medium risk</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <span className="text-muted-foreground">60-80%: Elevated risk</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-muted-foreground">80-100%: High risk</span>
              </li>
            </ul>
          </div>
        </div>

        <h3>Signal Details</h3>

        <p>Expandable section showing:</p>
        <ul>
          <li>Triggered detection signals</li>
          <li>Individual detector scores</li>
          <li>Feature values used in decision</li>
          <li>Policy rules that matched</li>
        </ul>

        <hr />

        <h2>Demo Scenarios</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/5 to-transparent p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">&#9989;</span>
              <span className="font-semibold text-green-600 dark:text-green-400">Scenario 1: Normal Operations</span>
            </div>
            <ol className="space-y-1 text-sm text-muted-foreground">
              <li>1. Select &quot;Normal Transaction&quot; preset</li>
              <li>2. Click &quot;Submit Transaction&quot;</li>
              <li>3. Observe <code className="rounded bg-green-500/20 px-1 py-0.5 text-green-600 dark:text-green-400">ALLOW</code> decision with low scores</li>
              <li>4. View decision in history</li>
            </ol>
          </div>

          <div className="rounded-lg border border-orange-500/30 bg-gradient-to-r from-orange-500/5 to-transparent p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">&#128179;</span>
              <span className="font-semibold text-orange-600 dark:text-orange-400">Scenario 2: Card Testing Attack</span>
            </div>
            <ol className="space-y-1 text-sm text-muted-foreground">
              <li>1. Select &quot;Card Testing Attack&quot; preset</li>
              <li>2. Submit multiple times rapidly</li>
              <li>3. Watch scores increase with each submission</li>
              <li>4. Eventually triggers <code className="rounded bg-orange-500/20 px-1 py-0.5 text-orange-600 dark:text-orange-400">REVIEW</code> then <code className="rounded bg-red-500/20 px-1 py-0.5 text-red-600 dark:text-red-400">BLOCK</code></li>
              <li>5. Demonstrates velocity detection</li>
            </ol>
          </div>

          <div className="rounded-lg border border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">&#129302;</span>
              <span className="font-semibold text-red-600 dark:text-red-400">Scenario 3: Bot Attack</span>
            </div>
            <ol className="space-y-1 text-sm text-muted-foreground">
              <li>1. Select &quot;Bot/Emulator Attack&quot; preset</li>
              <li>2. Submit transaction</li>
              <li>3. Immediate <code className="rounded bg-red-500/20 px-1 py-0.5 text-red-600 dark:text-red-400">BLOCK</code> decision</li>
              <li>4. View signals: <code className="text-xs">bot_detected</code>, <code className="text-xs">tor_exit_node</code></li>
            </ol>
          </div>

          <div className="rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/5 to-transparent p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">&#9881;</span>
              <span className="font-semibold text-purple-600 dark:text-purple-400">Scenario 4: Policy Change</span>
            </div>
            <ol className="space-y-1 text-sm text-muted-foreground">
              <li>1. Edit <code className="text-xs">config/policy.yaml</code></li>
              <li>2. Change <code className="text-xs">friction_threshold</code> from <code className="text-xs">0.35</code> to <code className="text-xs">0.25</code></li>
              <li>3. Click &quot;Reload Policy&quot; in dashboard</li>
              <li>4. Submit borderline transaction</li>
              <li>5. Observe changed decision behavior</li>
            </ol>
          </div>
        </div>

        <hr />

        <h2>Tips for Demos</h2>

        <ul>
          <li><strong>Start clean</strong> - Reset Redis counters before demos to ensure consistent behavior</li>
          <li><strong>Tell a story</strong> - Walk through attack, detection, and block progression</li>
          <li><strong>Show the numbers</strong> - Explain what scores mean and how thresholds drive decisions</li>
          <li><strong>Live reload</strong> - Demonstrate policy changes taking effect instantly</li>
          <li><strong>Show evidence</strong> - Pull up stored evidence for a blocked transaction</li>
        </ul>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/fraud-platform/getting-started"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Getting Started →</div>
            <div className="text-sm text-muted-foreground">Quick start guide</div>
          </Link>
          <Link
            href="/docs/fraud-platform/testing-performance"
            className="group rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Testing & Performance →</div>
            <div className="text-sm text-muted-foreground">Benchmarks and test scenarios</div>
          </Link>
        </div>
      </article>
    </DocsLayout>
  );
}
