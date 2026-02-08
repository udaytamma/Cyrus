import { DocsLayout } from "@/components/DocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Failure Modes & Abuse Cases | Fraud Detection Platform",
  description: "Known failure modes, adversarial abuse cases, and mitigation strategies for the Telco Payment Fraud Detection Platform.",
};

export default function FailureModesPage() {
  return (
    <DocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Failure Modes &amp; Abuse Cases</h1>

        <p className="text-muted-foreground">
          <strong>Author:</strong> Uday Tamma | <strong>Document Version:</strong> 1.0 | <strong>Date:</strong> February 08, 2026 at 10:00 AM CST
        </p>

        <p className="lead">
          A fraud detection platform must defend not just against fraud, but against its own failure modes. This document catalogs what can go wrong, how attackers might exploit gaps, and the mitigations in place. Documenting known weaknesses is a Principal TPM responsibility -- it shows the team knows what it does not yet cover.
        </p>

        <hr />

        <h2>1. Policy Misconfiguration Blast Radius</h2>

        <h3>The Scenario</h3>

        <p>
          A Fraud Ops analyst updates <code>policy.yaml</code> and accidentally sets <code>block_threshold: 0.1</code> instead of <code>0.85</code>. After calling <code>POST /policy/reload</code>, the system begins blocking ~90% of legitimate transactions.
        </p>

        <h3>Blast Radius Analysis</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Time Window</th>
                <th className="px-4 py-3 text-left font-semibold">Impact at 260 RPS</th>
                <th className="px-4 py-3 text-left font-semibold">Revenue at Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="px-4 py-3">1 minute</td><td className="px-4 py-3">~14,000 false blocks</td><td className="px-4 py-3">~$1.2M annualized rate</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">5 minutes</td><td className="px-4 py-3">~70,000 false blocks</td><td className="px-4 py-3">Direct customer complaints begin</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3">30 minutes</td><td className="px-4 py-3">~420,000 false blocks</td><td className="px-4 py-3">Operational incident, possible media</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Current Mitigations</h3>

        <ul>
          <li><strong>Policy version history:</strong> Every reload writes to <code>policy_versions</code> table with SHA256 hash, enabling instant rollback via <code>POST /policy/reload?version=1.2.3</code></li>
          <li><strong>Block rate alerting:</strong> <code>fraud_decisions_total</code> metric fires when block rate exceeds 15% (Prometheus alert)</li>
          <li><strong>YAML validation:</strong> Policy is parsed and validated before activation -- malformed YAML rejects the reload</li>
        </ul>

        <h3>Gaps to Address</h3>

        <div className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Not yet implemented:</strong> Threshold range validation (rejecting block_threshold &lt; 0.5), canary deployment for policy changes (apply to 1% of traffic first), and automated rollback when block rate spikes beyond 2x baseline within 60 seconds. These are Phase 2 hardening items.
          </p>
        </div>

        <hr />

        <h2>2. Adversarial Input Crafting</h2>

        <h3>The Scenario</h3>

        <p>
          A sophisticated attacker studies the detection thresholds (or infers them from declined/approved pattern analysis) and crafts transactions that stay just below triggering thresholds.
        </p>

        <h3>Attack Patterns</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Attack</th>
                <th className="px-4 py-3 text-left font-semibold">Technique</th>
                <th className="px-4 py-3 text-left font-semibold">Current Detection</th>
                <th className="px-4 py-3 text-left font-semibold">Gap</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Threshold probing</td>
                <td className="px-4 py-3">Submit 4 transactions in 10 min (threshold is 5). Pause. Repeat.</td>
                <td className="px-4 py-3">Velocity counters track per-window. Score stays below 0.85.</td>
                <td className="px-4 py-3 text-red-700 dark:text-red-400">Cross-window pattern not correlated. Attacker exploits window resets.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">IP rotation</td>
                <td className="px-4 py-3">Use residential proxies. Each transaction from a different clean IP.</td>
                <td className="px-4 py-3">IP velocity counter sees 1 card per IP. No trigger.</td>
                <td className="px-4 py-3 text-red-700 dark:text-red-400">Card-level velocity catches it only if same card is reused rapidly.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Low-and-slow SIM farm</td>
                <td className="px-4 py-3">Activate 1 SIM per hour across 50 stolen cards. Stay below all velocity thresholds.</td>
                <td className="px-4 py-3">No single detector triggers at this rate.</td>
                <td className="px-4 py-3 text-red-700 dark:text-red-400">Requires ML anomaly detection or network graph analysis (Phase 2/3).</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Geo mismatch avoidance</td>
                <td className="px-4 py-3">Use VPN in same country as card issuer. Disable GPS.</td>
                <td className="px-4 py-3">Geo detector sees matching country. No flag.</td>
                <td className="px-4 py-3 text-red-700 dark:text-red-400">VPN/residential proxy detection is basic (datacenter IP only). Phase 2 enhancement.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Why This Is Acceptable in Phase 1</h3>

        <p>
          Every fraud system has detection gaps. The question is whether the <strong>cost of the gap</strong> exceeds the <strong>cost to close it</strong>. Low-and-slow attacks require significant attacker investment (50+ stolen cards, proxy infrastructure, time). The economics shift: at 1 SIM/hour, the attacker&apos;s hourly yield drops below minimum viable fraud profitability for most rings.
        </p>

        <p>
          Phase 2 ML and Phase 3 network graph analysis are specifically designed to close these gaps. The evidence vault captures all transactions -- including the ones that passed -- enabling retroactive analysis when new patterns emerge.
        </p>

        <hr />

        <h2>3. Signal Correlation Collapse Under Load</h2>

        <h3>The Scenario</h3>

        <p>
          During a traffic spike (holiday promotion, system recovery after outage), Redis latency increases and velocity counters return stale or incomplete data. Multiple detectors simultaneously produce low-confidence results.
        </p>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`sequenceDiagram
    participant GW as Payment Gateway
    participant API as Fraud API
    participant Redis as Redis (degraded)
    participant PG as PostgreSQL

    GW->>API: POST /decide
    API->>Redis: GET velocity counters
    Redis-->>API: Timeout (>50ms)
    Note over API: Redis degraded — use cached/default features
    API->>API: Detection with incomplete data
    Note over API: Confidence drops to 0.3-0.4
    API->>API: Confidence adjustment dampens score
    Note over API: risk_score = 0.3 + (raw - 0.3) * confidence * 2
    API->>GW: ALLOW (dampened score below thresholds)
    API->>PG: Store evidence with low-confidence flag`}
          />
        </div>

        <h3>Current Behavior</h3>

        <ul>
          <li><strong>Redis timeout:</strong> Feature engine falls back to cached features or zero-value defaults. Decision still proceeds.</li>
          <li><strong>Confidence adjustment:</strong> When data is incomplete (confidence &lt; 0.5), the scoring formula dampens extreme scores: <code>risk_score = 0.3 + (risk_score - 0.3) * confidence * 2</code>. This prevents blocking on insufficient evidence.</li>
          <li><strong>Evidence capture:</strong> All decisions are recorded with their confidence level, enabling post-hoc analysis of degraded-mode decisions.</li>
        </ul>

        <h3>Risk During Degradation</h3>

        <div className="not-prose my-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/50">
          <p className="text-sm text-red-900 dark:text-red-200">
            <strong>The trade-off:</strong> During Redis degradation, the system biases toward ALLOW to avoid blocking legitimate customers during an outage. An attacker who detects the degradation window (e.g., by monitoring response times) could exploit it. Mitigation: the <code>fraud_slow_requests_total</code> counter and <code>fraud_component_health</code> gauge trigger Ops alerts, and hard-coded rules (emulator block, Tor block) fire regardless of Redis state.
          </p>
        </div>

        <hr />

        <h2>4. False Positive Storms During Legitimate Traffic Spikes</h2>

        <h3>The Scenario</h3>

        <p>
          A promotional event (e.g., &quot;Free SIM Activation Weekend&quot;) causes 5x normal transaction volume. Velocity counters see legitimate customers hitting thresholds designed for normal traffic patterns.
        </p>

        <h3>What Happens</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Detector</th>
                <th className="px-4 py-3 text-left font-semibold">Normal Behavior</th>
                <th className="px-4 py-3 text-left font-semibold">During 5x Spike</th>
                <th className="px-4 py-3 text-left font-semibold">False Positive Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Card Testing</td>
                <td className="px-4 py-3">5 attempts/10min threshold</td>
                <td className="px-4 py-3">Legitimate retry behavior during slow checkout</td>
                <td className="px-4 py-3 text-amber-700 dark:text-amber-400">Medium - retries could trigger</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Velocity</td>
                <td className="px-4 py-3">10 card attempts/hour</td>
                <td className="px-4 py-3">Family activating 4 SIMs on same card in 20 minutes</td>
                <td className="px-4 py-3 text-red-700 dark:text-red-400">High - legitimate bulk activations flagged</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Geographic</td>
                <td className="px-4 py-3">Country mismatch check</td>
                <td className="px-4 py-3">Unaffected by volume</td>
                <td className="px-4 py-3 text-green-700 dark:text-green-400">Low - not volume-sensitive</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Bot</td>
                <td className="px-4 py-3">Emulator/Tor check</td>
                <td className="px-4 py-3">Unaffected by volume</td>
                <td className="px-4 py-3 text-green-700 dark:text-green-400">Low - not volume-sensitive</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Friendly Fraud</td>
                <td className="px-4 py-3">Historical chargeback rate</td>
                <td className="px-4 py-3">Unaffected by volume</td>
                <td className="px-4 py-3 text-green-700 dark:text-green-400">Low - based on entity history</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Mitigation Strategy</h3>

        <ul>
          <li><strong>Pre-event threshold adjustment:</strong> Fraud Ops raises velocity thresholds via YAML hot-reload before planned promotions. This is the primary reason hot-reload exists.</li>
          <li><strong>FRICTION over BLOCK:</strong> The three-tier decision model (FRICTION/REVIEW/BLOCK) means borderline cases get 3DS verification instead of outright decline. Legitimate customers pass 3DS; fraudsters fail.</li>
          <li><strong>Confidence weighting:</strong> New customers during promotions have low entity history, which lowers confidence, which dampens extreme scores.</li>
        </ul>

        <h3>Gap</h3>

        <div className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>Not yet automated:</strong> Threshold adjustment for promotions is manual. Phase 2 will add scheduled policy overrides (e.g., &quot;apply promotion thresholds from Friday 6 PM to Monday 6 AM&quot;) and dynamic baseline calculation that adjusts automatically for volume changes.
          </p>
        </div>

        <hr />

        <h2>5. Component Failure Matrix</h2>

        <p>Summary of degradation behavior when infrastructure components fail:</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">Failure Mode</th>
                <th className="px-4 py-3 text-left font-semibold">System Behavior</th>
                <th className="px-4 py-3 text-left font-semibold">Detection</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Redis</td>
                <td className="px-4 py-3">Connection timeout</td>
                <td className="px-4 py-3">Use cached features, proceed with reduced confidence</td>
                <td className="px-4 py-3"><code>fraud_component_health{"{component=\"redis\"}"}</code> = 0</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">PostgreSQL</td>
                <td className="px-4 py-3">Write failure</td>
                <td className="px-4 py-3">Queue evidence, decisions continue unblocked</td>
                <td className="px-4 py-3"><code>fraud_component_health{"{component=\"postgres\"}"}</code> = 0</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Policy file</td>
                <td className="px-4 py-3">Corrupt/missing YAML</td>
                <td className="px-4 py-3">Retain last known-good policy, reject reload</td>
                <td className="px-4 py-3"><code>fraud_errors_total{"{error_type=\"policy_load\"}"}</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Single detector</td>
                <td className="px-4 py-3">Exception during scoring</td>
                <td className="px-4 py-3">Return score=0.0 for that detector, other 4 continue</td>
                <td className="px-4 py-3"><code>fraud_errors_total{"{error_type=\"detector\"}"}</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Full API</td>
                <td className="px-4 py-3">Process crash</td>
                <td className="px-4 py-3">Gateway timeout, falls back to own rules</td>
                <td className="px-4 py-3">Health check failure, Prometheus scrape gap</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Failure Mode Summary</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    subgraph Known["Known & Mitigated"]
        direction TB
        K1["Redis timeout → cached features"]
        K2["PostgreSQL down → queued evidence"]
        K3["Bad policy → reject reload"]
        K4["Detector crash → 0.0 score, others continue"]
    end

    subgraph Monitored["Known & Monitored"]
        direction TB
        M1["Block rate spike → Prometheus alert"]
        M2["Component health → Grafana dashboard"]
        M3["Slow requests → latency alert"]
    end

    subgraph Gaps["Known Gaps (Phase 2)"]
        direction TB
        G1["Threshold range validation"]
        G2["Canary policy deployment"]
        G3["Low-and-slow attack detection"]
        G4["Automated promotion thresholds"]
        G5["Cross-window correlation"]
    end

    style Known fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style Monitored fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style Gaps fill:#fee2e2,stroke:#ef4444,stroke-width:2px`}
          />
        </div>

        <hr />

        <p className="text-sm text-muted-foreground italic">Documenting known gaps is not a weakness -- it is evidence of systematic risk management. Every gap listed here has a phase target and a mitigation strategy.</p>

      </article>
    </DocsLayout>
  );
}
