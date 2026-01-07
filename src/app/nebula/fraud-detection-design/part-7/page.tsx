"use client";

/**
 * Part 7: Demo Dashboard
 * Professional-grade Streamlit dashboard for demonstrating and testing the fraud detection system
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function Part7Page() {
  return (
    <ThinkingLayout
      title="Part 7: Demo Dashboard"
      description="Professional-grade Streamlit dashboard for demonstrating and testing the fraud detection system"
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
        <span className="text-4xl font-bold text-primary/20">7</span>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Demo Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Professional-grade Streamlit dashboard for demonstrating and testing the fraud detection system.
          </p>
          <p className="text-sm text-muted-foreground mt-2"><strong>URL:</strong> http://localhost:8501</p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Overview</h2>
        <p className="text-muted-foreground mb-4">The demo dashboard provides a visual interface for:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Real-time transaction testing with attack simulation presets</li>
          <li>Score visualization with interactive gauges</li>
          <li>Analytics and decision history</li>
          <li>Policy inspection</li>
        </ul>
      </section>

      {/* Dashboard Sections */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Dashboard Sections</h2>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">System Status (Sidebar)</h3>
        <p className="text-muted-foreground mb-4">The sidebar displays real-time system health:</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Indicator</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">System Status</td>
                <td className="p-3 border border-border text-muted-foreground">Overall health (Healthy/Degraded/Down)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Redis</td>
                <td className="p-3 border border-border text-muted-foreground">Velocity counter store status</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">PostgreSQL</td>
                <td className="p-3 border border-border text-muted-foreground">Evidence storage status</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Policy</td>
                <td className="p-3 border border-border text-muted-foreground">Policy engine loaded status</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Policy Version</td>
                <td className="p-3 border border-border text-muted-foreground">Current policy version number</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">Also shows API endpoint information and last decision summary.</p>
      </section>

      {/* Transaction Simulator */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Transaction Simulator</h2>
        <p className="text-muted-foreground mb-4">Interactive form for submitting test transactions with pre-configured attack scenarios.</p>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Attack Presets</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Preset</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Expected Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Normal Transaction</td>
                <td className="p-3 border border-border text-muted-foreground">Typical legitimate $50 transaction</td>
                <td className="p-3 border border-border text-green-600">ALLOW</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Card Testing Attack</td>
                <td className="p-3 border border-border text-muted-foreground">Small $1 amount with datacenter IP</td>
                <td className="p-3 border border-border text-orange-600">REVIEW/BLOCK</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Velocity Attack</td>
                <td className="p-3 border border-border text-muted-foreground">High-value $1500 from new account</td>
                <td className="p-3 border border-border text-yellow-600">FRICTION/REVIEW</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Geographic Anomaly</td>
                <td className="p-3 border border-border text-muted-foreground">US card transacting from Nigeria</td>
                <td className="p-3 border border-border text-orange-600">REVIEW</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Bot/Emulator Attack</td>
                <td className="p-3 border border-border text-muted-foreground">Emulated device via Tor exit node</td>
                <td className="p-3 border border-border text-red-600">BLOCK</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-medium">Friendly Fraud Risk</td>
                <td className="p-3 border border-border text-muted-foreground">High-value from dispute-prone profile</td>
                <td className="p-3 border border-border text-yellow-600">FRICTION</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Customizable Fields</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Amount (dollars)</li>
          <li>Service ID (telco service identifier)</li>
          <li>Event Subtype (sim_activation, topup, device_upgrade, sim_swap)</li>
          <li>Card Token</li>
          <li>User ID / Subscriber ID</li>
          <li>Phone Number and IMEI (telco-specific)</li>
          <li>Device flags (Emulator, Rooted)</li>
          <li>Network flags (Tor, Datacenter, VPN)</li>
        </ul>
      </section>

      {/* Decision Result Display */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Decision Result Display</h2>
        <p className="text-muted-foreground mb-4">When a transaction is submitted, the dashboard shows:</p>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Decision Badge</h3>
        <p className="text-muted-foreground mb-4">Large colored badge indicating the decision:</p>
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold">ALLOW</span>
          <span className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold">FRICTION</span>
          <span className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold">REVIEW</span>
          <span className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold">BLOCK</span>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Score Gauges</h3>
        <p className="text-muted-foreground mb-4">Four interactive gauges showing:</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Gauge</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Color Scale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Overall Risk</td>
                <td className="p-3 border border-border text-muted-foreground">Combined risk score (0-100%)</td>
                <td className="p-3 border border-border text-muted-foreground">Green to Red</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Criminal</td>
                <td className="p-3 border border-border text-muted-foreground">Criminal fraud probability</td>
                <td className="p-3 border border-border text-muted-foreground">Green to Red</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Friendly Fraud</td>
                <td className="p-3 border border-border text-muted-foreground">Friendly fraud probability</td>
                <td className="p-3 border border-border text-muted-foreground">Green to Red</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Bot Score</td>
                <td className="p-3 border border-border text-muted-foreground">Automation/bot probability</td>
                <td className="p-3 border border-border text-muted-foreground">Green to Red</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-muted/30 rounded-lg border border-border mb-6">
          <h4 className="font-semibold text-foreground mb-2">Color Thresholds</h4>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
            <li><span className="text-green-600 font-medium">0-30%:</span> Green (low risk)</li>
            <li><span className="text-yellow-600 font-medium">30-60%:</span> Yellow (medium risk)</li>
            <li><span className="text-orange-600 font-medium">60-80%:</span> Orange (elevated risk)</li>
            <li><span className="text-red-600 font-medium">80-100%:</span> Red (high risk)</li>
          </ul>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Triggered Reasons</h3>
        <p className="text-muted-foreground mb-4">Each risk factor that contributed to the decision is displayed as a card:</p>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`[CRITICAL] BOT_EMULATOR
Device appears to be an emulator

[HIGH] BOT_TOR_EXIT
Transaction from Tor exit node`}</pre>
        <p className="text-sm text-muted-foreground mt-2">Severity levels: CRITICAL, HIGH, MEDIUM, LOW</p>
      </section>

      {/* Analytics Dashboard */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Analytics Dashboard</h2>
        <p className="text-muted-foreground mb-4">Visual analytics for the last 24 hours of transactions.</p>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Key Metrics Row</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Metric</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Total Transactions</td>
                <td className="p-3 border border-border text-muted-foreground">Count of decisions made</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Avg Risk Score</td>
                <td className="p-3 border border-border text-muted-foreground">Mean risk score</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">P95 Risk Score</td>
                <td className="p-3 border border-border text-muted-foreground">95th percentile risk score</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Avg Latency</td>
                <td className="p-3 border border-border text-muted-foreground">Mean processing time</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">P99 Latency</td>
                <td className="p-3 border border-border text-muted-foreground">99th percentile processing time</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Charts</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Decision Distribution Chart:</strong> Donut chart showing breakdown of decisions (ALLOW green, FRICTION yellow, REVIEW orange, BLOCK red)</li>
          <li><strong className="text-foreground">Hourly Transaction Volume:</strong> Bar chart showing transaction count per hour</li>
          <li><strong className="text-foreground">Latency Over Time:</strong> Line chart showing average latency per hour with 200ms target line</li>
        </ul>
      </section>

      {/* Decision History */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Decision History</h2>
        <p className="text-muted-foreground mb-4">Query historical decisions from PostgreSQL evidence table.</p>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Filters</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Limit: 25, 50, 100, or 250 records</li>
          <li>Decision type: Multi-select ALLOW/FRICTION/REVIEW/BLOCK</li>
        </ul>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Table Columns</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Column</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Transaction ID</td>
                <td className="p-3 border border-border text-muted-foreground">Unique transaction identifier</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Decision</td>
                <td className="p-3 border border-border text-muted-foreground">ALLOW/FRICTION/REVIEW/BLOCK</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Amount</td>
                <td className="p-3 border border-border text-muted-foreground">Transaction amount in dollars</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Risk Score</td>
                <td className="p-3 border border-border text-muted-foreground">Overall risk percentage</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Latency</td>
                <td className="p-3 border border-border text-muted-foreground">Processing time in milliseconds</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Time</td>
                <td className="p-3 border border-border text-muted-foreground">Timestamp of decision</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Summary Statistics</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Approval Rate (% ALLOW decisions)</li>
          <li>Block Rate (% BLOCK decisions)</li>
          <li>Avg Risk Score</li>
          <li>Avg Latency</li>
        </ul>
      </section>

      {/* Policy Inspector */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Policy Inspector</h2>
        <p className="text-muted-foreground mb-4">View the current policy configuration without editing.</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Policy Overview</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
              <li>Version number</li>
              <li>Default action</li>
              <li>Description</li>
            </ul>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Score Thresholds</h4>
            <p className="text-sm text-muted-foreground">Display of threshold configuration for each score type: Risk, Criminal, Friendly</p>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Active Rules</h4>
            <p className="text-sm text-muted-foreground">Expandable list of all enabled rules showing rule name, priority, description, action, and conditions</p>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Lists Summary</h4>
            <p className="text-sm text-muted-foreground">Count of entries in Blocklists (Cards, Devices, IPs, Users) and Allowlists (Cards, Users, Services)</p>
          </div>
        </div>
      </section>

      {/* Policy Settings */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Policy Settings (v1.1)</h2>
        <p className="text-muted-foreground mb-4">Edit policy configuration with full version control and audit trail.</p>

        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2">Current Version Info</h4>
          <p className="text-sm text-muted-foreground">Displays at the top: Current Version (semantic: MAJOR.MINOR.PATCH), Last Changed By, Last Updated timestamp, Policy Hash (for integrity)</p>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Thresholds Tab</h3>
        <p className="text-muted-foreground mb-2">Interactive sliders for each score type (Risk, Criminal, Friendly):</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
          <li>Friction Threshold (green zone)</li>
          <li>Review Threshold (yellow zone)</li>
          <li>Block Threshold (red zone)</li>
        </ul>
        <p className="text-sm text-muted-foreground"><strong>Validation:</strong> Ensures friction &lt; review &lt; block. Invalid configurations are blocked.</p>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Rules Tab</h3>
        <p className="text-muted-foreground mb-2"><strong>Existing Rules Display:</strong></p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
          <li>Sorted by priority (lower = higher priority)</li>
          <li>Status indicators (enabled/disabled)</li>
          <li>Expandable details with conditions JSON</li>
          <li>Delete button for each rule</li>
        </ul>
        <p className="text-muted-foreground mb-2"><strong>Add New Rule Form:</strong></p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Rule ID and Name</li>
          <li>Description</li>
          <li>Priority (1-1000)</li>
          <li>Enabled toggle</li>
          <li>Action (ALLOW, FRICTION, REVIEW, BLOCK)</li>
          <li>Friction Type (3DS, OTP, STEP_UP, CAPTCHA)</li>
          <li>Review Priority (LOW, MEDIUM, HIGH, URGENT)</li>
          <li>Conditions (JSON editor)</li>
        </ul>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Blocklists Tab</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">List Type</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Card Tokens</td>
                <td className="p-3 border border-border text-muted-foreground">Permanently block specific cards</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Device IDs</td>
                <td className="p-3 border border-border text-muted-foreground">Block compromised devices</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">IP Addresses</td>
                <td className="p-3 border border-border text-muted-foreground">Block malicious IPs</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">User IDs</td>
                <td className="p-3 border border-border text-muted-foreground">Block fraudulent users</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Allowlists Tab</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">List Type</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Card Tokens</td>
                <td className="p-3 border border-border text-muted-foreground">VIP or corporate cards</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">User IDs</td>
                <td className="p-3 border border-border text-muted-foreground">Verified trusted subscribers</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border">Service IDs</td>
                <td className="p-3 border border-border text-muted-foreground">Whitelisted telco services</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Version History Tab</h3>
        <p className="text-muted-foreground mb-2">View complete policy change history:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Version number with active indicator</li>
          <li>Change type (threshold, rule_add, rule_delete, rollback, etc.)</li>
          <li>Change summary</li>
          <li>Changed by (user)</li>
          <li>Created at timestamp</li>
          <li><strong className="text-foreground">Rollback button</strong> for non-active versions</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-2">Rollback creates a new version from old content (immutable history).</p>
      </section>

      {/* Running the Dashboard */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Running the Dashboard</h2>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Prerequisites</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Fraud API running on port 8000</li>
          <li>Redis running on port 6379</li>
          <li>PostgreSQL running on port 5432</li>
        </ul>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Start Command</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto font-mono text-muted-foreground">{`cd /Users/omega/Projects/FraudDetection
streamlit run dashboard.py --server.port 8501`}</pre>

        <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Environment Variables</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Variable</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Default</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">FRAUD_API_URL</code></td>
                <td className="p-3 border border-border text-muted-foreground">http://localhost:8000</td>
                <td className="p-3 border border-border text-muted-foreground">Fraud API endpoint</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1 rounded text-xs">POSTGRES_URL</code></td>
                <td className="p-3 border border-border text-muted-foreground text-xs">postgresql://fraud_user:fraud_pass@localhost:5432/fraud_detection</td>
                <td className="p-3 border border-border text-muted-foreground">Database URL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Demo Workflow */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">Recommended Demo Sequence</h2>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-4">
          <li>
            <strong className="text-foreground">Start with Normal Transaction</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
              <li>Show ALLOW decision</li>
              <li>Point out low risk scores</li>
              <li>Highlight fast latency (&lt;10ms)</li>
            </ul>
          </li>
          <li>
            <strong className="text-foreground">Card Testing Attack</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
              <li>Show detection of small amount + datacenter IP</li>
              <li>Explain velocity counter concept</li>
            </ul>
          </li>
          <li>
            <strong className="text-foreground">Geographic Anomaly</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
              <li>Show country mismatch detection</li>
              <li>Explain geo-risk scoring</li>
            </ul>
          </li>
          <li>
            <strong className="text-foreground">Bot/Emulator Attack</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
              <li>Show BLOCK decision</li>
              <li>Walk through multiple triggered reasons</li>
              <li>Point out CRITICAL severity flags</li>
            </ul>
          </li>
          <li>
            <strong className="text-foreground">Analytics Dashboard</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
              <li>Show decision distribution</li>
              <li>Highlight latency performance</li>
              <li>Explain 200ms target</li>
            </ul>
          </li>
          <li>
            <strong className="text-foreground">Decision History</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
              <li>Filter by BLOCK decisions</li>
              <li>Show evidence capture for disputes</li>
            </ul>
          </li>
          <li>
            <strong className="text-foreground">Policy Inspector</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
              <li>Explain threshold configuration</li>
              <li>Show rule priority system</li>
              <li>Demonstrate hot-reload capability</li>
            </ul>
          </li>
          <li>
            <strong className="text-foreground">Policy Settings (v1.1)</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
              <li>Adjust a threshold slider (show validation)</li>
              <li>Add a test rule (show version increment)</li>
              <li>View version history</li>
              <li>Demonstrate rollback capability</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Footer */}
      <div className="p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
        <p><strong>Dashboard Version:</strong> 1.1</p>
        <p><strong>Last Updated:</strong> January 3, 2026 - Added Policy Settings tab with version control</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-6"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          &larr; Previous: Sprint-1 Implementation
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-8"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Load Testing &rarr;
        </Link>
      </div>
    </ThinkingLayout>
  );
}
