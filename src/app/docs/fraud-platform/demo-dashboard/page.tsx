import { DocsLayout } from "@/components/DocsLayout";

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

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`# Ensure the API is running first
uvicorn src.api.main:app --reload --port 8000

# Start the dashboard
streamlit run dashboard.py --server.port 8501`}
        </pre>

        <p>Open <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer">http://localhost:8501</a> in your browser.</p>

        <h2>Dashboard Layout</h2>

        <h3>Sidebar: System Status</h3>

        <p>Real-time health indicators:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Indicator</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">System Status</td>
                <td className="px-4 py-3">Overall health (Healthy/Degraded/Down)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Redis</td>
                <td className="px-4 py-3">Velocity counter store connection</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">PostgreSQL</td>
                <td className="px-4 py-3">Evidence storage connection</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Policy</td>
                <td className="px-4 py-3">Policy engine status</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Policy Version</td>
                <td className="px-4 py-3">Current active policy version</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Main Area: Transaction Simulator</h3>

        <h4>Attack Presets</h4>

        <p>One-click presets to demonstrate different fraud scenarios:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Preset</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-left font-semibold">Expected Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Normal Transaction</td>
                <td className="px-4 py-3">Typical $50 purchase</td>
                <td className="px-4 py-3"><code>ALLOW</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Card Testing Attack</td>
                <td className="px-4 py-3">Small $1 amount from datacenter IP</td>
                <td className="px-4 py-3"><code>REVIEW</code> or <code>BLOCK</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Velocity Attack</td>
                <td className="px-4 py-3">$1500 from new account</td>
                <td className="px-4 py-3"><code>FRICTION</code> or <code>REVIEW</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Geographic Anomaly</td>
                <td className="px-4 py-3">US card transacting from Nigeria</td>
                <td className="px-4 py-3"><code>REVIEW</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Bot/Emulator Attack</td>
                <td className="px-4 py-3">Emulated device via Tor</td>
                <td className="px-4 py-3"><code>BLOCK</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Friendly Fraud Risk</td>
                <td className="px-4 py-3">High-value from dispute-prone user</td>
                <td className="px-4 py-3"><code>FRICTION</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Custom Transaction Fields</h4>

        <p>Fine-tune transaction parameters:</p>

        <ul>
          <li><strong>Amount</strong> - Transaction value in USD</li>
          <li><strong>Service ID</strong> - Telco service identifier</li>
          <li><strong>Event Subtype</strong> - sim_activation, topup, device_upgrade, sim_swap, etc.</li>
          <li><strong>Card Token</strong> - Tokenized card reference</li>
          <li><strong>User ID</strong> - Customer identifier</li>
          <li><strong>Device Emulator</strong> - Toggle emulated device flag</li>
          <li><strong>Device Rooted</strong> - Toggle rooted/jailbroken flag</li>
          <li><strong>IP Datacenter</strong> - Toggle datacenter IP flag</li>
          <li><strong>IP Tor</strong> - Toggle Tor exit node flag</li>
          <li><strong>IP VPN</strong> - Toggle VPN flag</li>
        </ul>

        <h2>Decision Display</h2>

        <h3>Decision Badge</h3>

        <p>Large colored badge showing the decision:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Decision</th>
                <th className="px-4 py-3 text-left font-semibold">Color</th>
                <th className="px-4 py-3 text-left font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">ALLOW</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">Green</td>
                <td className="px-4 py-3">Transaction approved</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">FRICTION</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">Yellow</td>
                <td className="px-4 py-3">Request additional verification</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">REVIEW</td>
                <td className="px-4 py-3 text-orange-600 dark:text-orange-400">Orange</td>
                <td className="px-4 py-3">Queue for manual review</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">BLOCK</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">Red</td>
                <td className="px-4 py-3">Transaction declined</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Score Gauges</h3>

        <p>Four interactive gauge charts:</p>

        <ol>
          <li><strong>Overall Risk</strong> - Combined risk score (0-100%)</li>
          <li><strong>Criminal Score</strong> - Criminal fraud probability</li>
          <li><strong>Friendly Fraud</strong> - Friendly fraud probability</li>
          <li><strong>Bot Score</strong> - Automation detection score</li>
        </ol>

        <p>Color thresholds:</p>
        <ul>
          <li>0-30%: Green (low risk)</li>
          <li>30-60%: Yellow (medium risk)</li>
          <li>60-80%: Orange (elevated risk)</li>
          <li>80-100%: Red (high risk)</li>
        </ul>

        <h3>Signal Details</h3>

        <p>Expandable section showing:</p>
        <ul>
          <li>Triggered detection signals</li>
          <li>Individual detector scores</li>
          <li>Feature values used in decision</li>
          <li>Policy rules that matched</li>
        </ul>

        <h2>Analytics Tab</h2>

        <h3>Decision Distribution</h3>

        <p>Pie chart showing decision breakdown:</p>
        <ul>
          <li>Percentage of ALLOW vs FRICTION vs REVIEW vs BLOCK</li>
          <li>Updated in real-time as transactions are processed</li>
        </ul>

        <h3>Hourly Volume</h3>

        <p>Bar chart showing:</p>
        <ul>
          <li>Transaction volume per hour</li>
          <li>Decision distribution over time</li>
          <li>Useful for identifying attack patterns</li>
        </ul>

        <h3>Latency Metrics</h3>

        <p>Line chart displaying:</p>
        <ul>
          <li>P50 latency (median)</li>
          <li>P95 latency</li>
          <li>P99 latency</li>
          <li>Target threshold line (10ms)</li>
        </ul>

        <h2>Decision History Tab</h2>

        <p>Table showing recent decisions:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Column</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Timestamp</td>
                <td className="px-4 py-3">When decision was made</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Transaction ID</td>
                <td className="px-4 py-3">Unique identifier</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Amount</td>
                <td className="px-4 py-3">Transaction value</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Decision</td>
                <td className="px-4 py-3">ALLOW/FRICTION/REVIEW/BLOCK</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Overall Risk</td>
                <td className="px-4 py-3">Combined risk score</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Signals</td>
                <td className="px-4 py-3">Triggered detectors</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Latency</td>
                <td className="px-4 py-3">Processing time</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Features:</p>
        <ul>
          <li>Sort by any column</li>
          <li>Filter by decision type</li>
          <li>Export to CSV</li>
          <li>Click row for full details</li>
        </ul>

        <h2>Policy Inspector Tab</h2>

        <h3>Current Policy</h3>

        <p>Displays the active policy configuration:</p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`version: "1.0"

thresholds:
  block: 80
  review: 60
  friction: 40

rules:
  - name: high_value_new_user
    condition: amount > 500 AND user_age_days < 7
    action: FRICTION`}
        </pre>

        <h3>Policy Actions</h3>

        <ul>
          <li><strong>View Full YAML</strong> - See complete policy file</li>
          <li><strong>Reload Policy</strong> - Hot-reload from disk</li>
          <li><strong>Version History</strong> - See previous policy versions</li>
        </ul>

        <h2>Demo Scenarios</h2>

        <h3>Scenario 1: Normal Operations</h3>

        <ol>
          <li>Select &quot;Normal Transaction&quot; preset</li>
          <li>Click &quot;Submit Transaction&quot;</li>
          <li>Observe <code>ALLOW</code> decision with low scores</li>
          <li>View decision in history</li>
        </ol>

        <h3>Scenario 2: Card Testing Attack</h3>

        <ol>
          <li>Select &quot;Card Testing Attack&quot; preset</li>
          <li>Submit multiple times rapidly</li>
          <li>Watch scores increase with each submission</li>
          <li>Eventually triggers <code>REVIEW</code> then <code>BLOCK</code></li>
          <li>Demonstrates velocity detection</li>
        </ol>

        <h3>Scenario 3: Bot Attack</h3>

        <ol>
          <li>Select &quot;Bot/Emulator Attack&quot; preset</li>
          <li>Submit transaction</li>
          <li>Immediate <code>BLOCK</code> decision</li>
          <li>View signals: <code>bot_detected</code>, <code>tor_exit_node</code></li>
        </ol>

        <h3>Scenario 4: Policy Change</h3>

        <ol>
          <li>Edit <code>config/policy.yaml</code></li>
          <li>Change <code>friction</code> threshold from 40 to 30</li>
          <li>Click &quot;Reload Policy&quot; in dashboard</li>
          <li>Submit borderline transaction</li>
          <li>Observe changed decision behavior</li>
        </ol>

        <h2>Keyboard Shortcuts</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Shortcut</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">Enter</td>
                <td className="px-4 py-3">Submit transaction</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">R</td>
                <td className="px-4 py-3">Reload policy</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">C</td>
                <td className="px-4 py-3">Clear form</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">H</td>
                <td className="px-4 py-3">Toggle history panel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Tips for Demos</h2>

        <ol>
          <li><strong>Start clean</strong> - Reset Redis counters before demos</li>
          <li><strong>Tell a story</strong> - Walk through attack - detection - block</li>
          <li><strong>Show the numbers</strong> - Explain what scores mean</li>
          <li><strong>Live reload</strong> - Demonstrate policy changes take effect instantly</li>
          <li><strong>Show evidence</strong> - Pull up stored evidence for a blocked transaction</li>
        </ol>
      </article>
    </DocsLayout>
  );
}
