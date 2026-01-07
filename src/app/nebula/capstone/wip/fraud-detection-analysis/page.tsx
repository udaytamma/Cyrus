"use client";

import Link from "next/link";
import { CapstoneLayout } from "@/components/CapstoneLayout";

// Section component
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-8 p-6 bg-card rounded-xl border border-border">
      <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>
      <div className="space-y-4 text-muted-foreground">{children}</div>
    </section>
  );
}

// Subsection component
function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">{title}</h3>
      {children}
    </>
  );
}

// Data table component
function DataTable({ headers, rows, headerBg }: { headers: string[]; rows: (string | React.ReactNode)[][]; headerBg?: string }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2 text-left font-semibold border border-border" style={headerBg ? { background: headerBg } : { background: "var(--muted)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 border border-border">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Era table for attack evolution
function EraTable({ rows }: { rows: { era: string; characteristics: string }[] }) {
  return (
    <DataTable
      headers={["Era", "Attack Characteristics"]}
      rows={rows.map(r => [<strong key="era">{r.era}</strong>, r.characteristics])}
    />
  );
}

// Gap table for blind spots
function GapTable({ rows }: { rows: { gap: string; description: string }[] }) {
  return (
    <DataTable
      headers={["Gap", "Description"]}
      rows={rows.map(r => [<strong key="gap">{r.gap}</strong>, r.description])}
    />
  );
}

export default function FraudDetectionAnalysisPage() {
  return (
    <CapstoneLayout
      title="Fraud Detection Analysis"
      description="Telecommunications & MSP Fraud Detection: A Technical Reference - Unified Intelligence Report 2024-2025"
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <Link href="/nebula/capstone" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Capstone Projects
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Telecommunications & MSP Fraud Detection
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            A Technical Reference | Unified Intelligence Report | 2024-2025
          </p>
        </header>

        {/* Metadata */}
        <div className="flex justify-center mb-8">
          <table className="border-collapse text-sm max-w-[600px]">
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-border bg-muted font-semibold w-[160px]">Classification</td>
                <td className="px-4 py-2 border border-border">Executive Technical Briefing</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border bg-muted font-semibold">Audience</td>
                <td className="px-4 py-2 border border-border">Fraud Detection Analysts, Security Directors, VP-Level Leadership</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border bg-muted font-semibold">Prepared</td>
                <td className="px-4 py-2 border border-border">December 2025</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Document Purpose */}
        <div className="bg-muted/50 p-5 rounded-lg mb-8 border-l-4 border-primary">
          <div className="font-semibold mb-2 text-foreground">Document Purpose</div>
          <p className="text-muted-foreground m-0">
            This document consolidates authoritative intelligence from CFCA, GLF/i3Forum, GSMA, vendor technical
            documentation (Subex, Neural Technologies, LATRO, Amdocs, AB Handshake), and academic research into
            a unified technical reference. It is designed for practitioners with 10+ years of experience in
            telecom security, fraud management, and IT systems implementation.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-muted/50 p-5 rounded-lg mb-8">
          <div className="font-semibold mb-3 text-foreground">Table of Contents</div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-1.5 list-none m-0 p-0">
            {[
              { id: "executive-landscape", label: "Executive Landscape Summary" },
              { id: "irsf", label: "IRSF (International Revenue Share Fraud)" },
              { id: "sms-pumping", label: "SMS Pumping / AIT" },
              { id: "wangiri", label: "Wangiri 2.0" },
              { id: "ato-sim-swap", label: "Account Takeover & SIM Swap" },
              { id: "cli-spoofing", label: "CLI Spoofing" },
              { id: "synthetic-identity", label: "Synthetic Identity Fraud" },
              { id: "detection-algorithms", label: "Detection Algorithms & ML Models" },
              { id: "stream-processing", label: "Real-Time Stream Processing" },
              { id: "signaling-security", label: "Signaling-Layer Security" },
              { id: "digital-footprint", label: "Digital Footprint Analysis" },
              { id: "emerging-threats", label: "Emerging Threats: Gen AI & Deepfakes" },
              { id: "msp-threats", label: "MSP-Specific Threat Landscape" },
              { id: "recommendations", label: "Strategic Recommendations" },
              { id: "appendix", label: "Appendix: Vendor Solutions" },
            ].map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:underline">
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* 1. Executive Landscape Summary */}
        <Section id="executive-landscape" title="1. Executive Landscape Summary">
          <Subsection title="1.1 Financial Impact Overview">
            <p>The global telecommunications fraud crisis continues to escalate:</p>
            <DataTable
              headers={["Metric", "Value", "Source"]}
              rows={[
                [<strong key="m">Global Annual Telecom Fraud Losses</strong>, "USD $38.95 billion", "CFCA 2023"],
                ["Fraud as % of Telecom Revenues", "2.5%", "CFCA 2023"],
                ["YoY Increase (2021-2023)", "12%", "CFCA 2023"],
                [<strong key="m2">IRSF-Specific Losses</strong>, "USD $6.23 billion", "CFCA 2023"],
                ["Projected Robocall Fraud Losses (Global, 2025)", "USD $76 billion", "Industry Projections"],
                ["Carriers Classifying Fraud as \"Top Priority\"", "69% (highest ever)", "GLF 2025"],
                ["Carriers Reporting High CLI Spoofing Volumes", "55% (up from 49% in 2023)", "GLF 2024"],
                ["Carriers Planning Increased Anti-Fraud Investment", "77%", "GLF 2025"],
                [<strong key="m3">UK SIM Swap Fraud Surge (2024 vs 2023)</strong>, "1,055%", "Cifas 2025"],
                ["US Cyber/Fraud Losses (FBI IC3 2024)", "USD $16.6 billion (33% YoY)", "FBI IC3 2024"],
                ["AIT Cost to Brands (2022-2024)", "USD $2.4 billion", "Mobilesquared/MEF"],
              ]}
            />
          </Subsection>

          <Subsection title="1.2 The Paradigm Shift">
            <p><strong className="text-foreground">From Network Exploitation to Account Manipulation:</strong></p>
            <p>
              CFCA reports that 42% of top fraud methods in 2023 were related to account manipulation rather than
              purely technological network exploits - a significant shift from 2021 when spoofing, callback schemes,
              and SMS phishing dominated.
            </p>

            <p className="mt-4"><strong className="text-foreground">From Manual Attacks to AI-Accelerated Operations:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Voice cloning now requires only seconds of sample audio</li>
              <li>Real-time deepfakes can bypass live video KYC checks</li>
              <li>1 in 20 identity verification failures is now linked to deepfakes (Veriff 2025)</li>
              <li>Fraud attempts grew 21% YoY (Veriff 2025)</li>
            </ul>

            <p className="mt-4"><strong className="text-foreground">From Batch Detection to Real-Time Interdiction:</strong></p>
            <p>
              Traditional FMS systems using CDR-based post-processing take hours or days. SMS pumping, Flash IRSF,
              and low-latency attacks require sub-second detection - impossible with batch processing.
            </p>
          </Subsection>

          <Subsection title="1.3 Industry Collaboration">
            <p>
              GLF 2025 data shows peer commitment to collaboration rose from 30% (2024) to 47% (2025), with 22
              carriers now certified under the GLF Code of Conduct.
            </p>
          </Subsection>
        </Section>

        {/* 2. IRSF */}
        <Section id="irsf" title="2. International Revenue Share Fraud (IRSF)">
          <Subsection title="2.1 Mechanism & Economics">
            <p>
              <strong className="text-foreground">Definition:</strong> Fraudsters generate artificial traffic to premium-rate international
              numbers, exploiting revenue-sharing agreements to siphon proceeds from terminating carrier interconnect fees.
            </p>
            <p className="mt-3"><strong className="text-foreground">The Setup:</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Fraudsters partner with unscrupulous IPRN providers who own blocks of numbers in high-cost destinations (Somalia, satellite networks, Tunisia, Burundi, Madagascar)</li>
              <li>They hijack PBX systems, use stolen SIMs, or deploy malware-based corporate system infiltration</li>
              <li>Massive traffic volumes are pumped to these numbers</li>
              <li>The terminating carrier shares the revenue (interconnect fees) with the fraudster</li>
            </ol>
            <p className="mt-3"><strong className="text-foreground">Scale:</strong> Annual losses: USD $6.23 billion (CFCA 2023). 48% of operators report high IRSF volumes (GLF 2024).</p>
          </Subsection>

          <Subsection title="2.2 Attack Evolution">
            <EraTable rows={[
              { era: "Legacy (Pre-2018)", characteristics: "Manual PBX hacking, static premium number exploitation, easily blocked via blacklisting" },
              { era: "Intermediate (2018-2022)", characteristics: "Single PBX compromise, credential stuffing, SIP endpoint abuse" },
              { era: "Current (2023-2025)", characteristics: "AI-driven traffic generation, coordinated multi-carrier attacks, \"Sleeper\" numbers inactive for months, Flash IRSF (<2 minutes)" },
            ]} />
          </Subsection>

          <Subsection title="2.3 Detection Technologies">
            <DataTable
              headers={["Technology", "Application"]}
              rows={[
                [<strong key="t">B-Number Velocity Blocking</strong>, "Auto-terminate when destination receives impossibly high volume"],
                [<strong key="t2">Graph Neural Networks (GNN)</strong>, "Map relationships between IPs, SIMs, call patterns to block fraud rings"],
                ["Random Forest", "Anomaly scoring based on CDR features"],
                ["LSTM Networks", "Time-series sequence modeling of calling behavior"],
                ["Heuristic Analysis", "Flag patterns like exact 59-second call durations"],
                ["SS7/Diameter Signaling Firewalls", "LATRO Protocol Signature pre-call detection"],
                ["Real-time Stream Processing", "Apache Kafka + Flink for sub-second detection"],
              ]}
            />
          </Subsection>

          <Subsection title="2.4 Current Blind Spots">
            <GapTable rows={[
              { gap: "Detection Latency", description: "Hours to days with batch processing; fraud monetizes before blocks propagate" },
              { gap: "Cross-Border Coordination", description: "Complex multi-hop wholesale chains reduce visibility" },
              { gap: "Short-Stopping", description: "Fraudulent carriers intercept calls, play fake ringing, charge full duration" },
              { gap: "False Positive Rates", description: "Averaging 30% (CFCA), impacting legitimate traffic" },
              { gap: "Encrypted VoIP Opacity", description: "Limited inspection capability on encrypted traffic" },
            ]} />
          </Subsection>
        </Section>

        {/* 3. SMS Pumping / AIT */}
        <Section id="sms-pumping" title="3. SMS Pumping / Artificially Inflated Traffic (AIT)">
          <Subsection title="3.1 Mechanism & Economics">
            <p>
              <strong className="text-foreground">Definition:</strong> Exploiting SMS delivery fees by using bots to generate fake OTP/2FA
              requests at scale, inflating traffic costs for victim enterprises.
            </p>
            <p className="mt-3"><strong className="text-foreground">The Attack Flow:</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Fraudsters design bots to trigger "Send OTP" requests on legitimate websites/apps</li>
              <li>Numbers entered belong to the fraudster or a complicit carrier/aggregator</li>
              <li>Victim company pays for every SMS sent</li>
              <li>Fraudster collects share of termination fee through revenue-sharing arrangement</li>
            </ol>
            <p className="mt-3"><strong className="text-foreground">Scale:</strong> 19.8-35.7 billion fraudulent messages sent in 2023 (Enea). Twitter reported $60 million annual losses to AIT.</p>
          </Subsection>

          <Subsection title="3.2 Attack Evolution">
            <EraTable rows={[
              { era: "Legacy", characteristics: "Simple scripting, sequential number blocks, easily pattern-matched" },
              { era: "Intermediate", characteristics: "Bot-driven form submissions, automation of fake account creation" },
              { era: "Current", characteristics: "Sophisticated scripts exploiting verification workflows, MNO collusion, \"Trashing\" (triggering OTPs to innocent users), premium-rate routing" },
            ]} />
          </Subsection>

          <Subsection title="3.3 Detection Technologies">
            <DataTable
              headers={["Technology", "Application"]}
              rows={[
                [<strong key="t">Conversion Rate Monitoring</strong>, "Focus on actual login conversion - low conversion = traffic cut"],
                ["LSTM Networks", "Detect robotic intervals between requests (e.g., exactly every 2.5 seconds)"],
                ["Device Fingerprinting", "Bot farm identification via screen resolution, battery, browser fonts"],
                ["Isolation Forests", "Outlier detection for unsupervised fraud identification"],
                ["Phone Number Intelligence", "Risk scoring per number (Telesign, Twilio Lookup)"],
              ]}
            />
            <p className="mt-3"><strong className="text-foreground">Vendor Solutions:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">Twilio Verify Fraud Guard:</strong> $62.7M in explicit savings blocked (June 2022-October 2024)</li>
              <li><strong className="text-foreground">AWS SMS Protect:</strong> SMS pumping protection with configurable thresholds</li>
            </ul>
          </Subsection>
        </Section>

        {/* 4. Wangiri 2.0 */}
        <Section id="wangiri" title="4. Wangiri 2.0 (Enterprise Callback Fraud)">
          <Subsection title="4.1 Mechanism & Economics">
            <p>
              <strong className="text-foreground">Definition:</strong> Evolution of classic "one ring" fraud. Japanese: "Wan" (one) + "Giri" (cut).
            </p>
            <p className="mt-2"><strong className="text-foreground">Classic Wangiri:</strong> Short call to provoke callback to premium numbers.</p>
            <p className="mt-2">
              <strong className="text-foreground">Wangiri 2.0:</strong> Fraudsters submit fake sales inquiries via web forms with premium-rate
              callback numbers. Enterprises call back expecting customers, incurring massive charges.
            </p>
            <p className="mt-3"><strong className="text-foreground">Why 2.0 Is More Dangerous:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Higher callback rates due to sales/business motivation</li>
              <li>Only one traffic "leg" (the callback) to analyze</li>
              <li>Call centers lack fraud awareness; trained to engage callers</li>
              <li>Operators refuse refunds ("service was rendered")</li>
            </ul>
          </Subsection>

          <Subsection title="4.2 Detection Technologies">
            <DataTable
              headers={["Technology", "Application"]}
              rows={[
                [<strong key="t">STIR/SHAKEN</strong>, "Cryptographic signatures for caller ID verification"],
                ["ASR Analysis", "Monitoring Answer-Seizure Ratios near zero (fraudsters hang up)"],
                ["Unsupervised Clustering", "Detect massive spikes in short-duration calls from specific subnets"],
                ["AB Handshake", "Real-time originating-terminating verification (claims 100% protection)"],
              ]}
            />
          </Subsection>
        </Section>

        {/* 5. ATO & SIM Swap */}
        <Section id="ato-sim-swap" title="5. Account Takeover (ATO) & SIM Swap Fraud">
          <Subsection title="5.1 Mechanism & Economics">
            <p>
              <strong className="text-foreground">Account Takeover:</strong> Unauthorized access to legitimate user accounts to extract
              sensitive information or perform unauthorized transactions.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">SIM Swap Fraud:</strong> Fraudsters impersonate subscribers to convince telecom providers
              to transfer victim phone numbers to attacker-controlled SIMs, enabling interception of SMS-based 2FA codes.
            </p>
            <p className="mt-3"><strong className="text-foreground">Scale:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>ATO cases rose 13% YoY (Veriff 2025)</li>
              <li>SIM swap fraud surged 1,055% in UK (2024 vs 2023, Cifas)</li>
              <li>48% of all account takeovers involve mobile phone accounts</li>
              <li>Global ATO losses: ~$17 billion projected for 2025</li>
            </ul>
          </Subsection>

          <Subsection title="5.2 Attack Evolution">
            <EraTable rows={[
              { era: "Legacy", characteristics: "Manual social engineering to carrier helpdesks, basic credential phishing" },
              { era: "Intermediate", characteristics: "Credential stuffing automation, port-out fraud via support manipulation" },
              { era: "Current", characteristics: "AI-enhanced credential stuffing, emulator-based ATO, deepfake voice for IVR, eSIM exploitation (<5 min attack cycle), insider threats via bribed retail employees" },
            ]} />
          </Subsection>

          <Subsection title="5.3 Detection Technologies">
            <DataTable
              headers={["Technology", "Application"]}
              rows={[
                [<strong key="t">Behavioral Biometrics</strong>, "Typing cadence, mouse movements, screen pressure analysis"],
                ["Voice Biometrics + Anti-Spoofing", "Speaker verification with deepfake detection layers"],
                ["Face-Based Liveness Detection", "80% of banks adopting by 2025"],
                ["FIDO2/Passkeys", "Phishing-resistant authentication replacing SMS OTP"],
                ["GSMA CAMARA APIs", "Real-time SIM swap detection signals"],
              ]}
            />
          </Subsection>

          <Subsection title="5.4 Current Blind Spots">
            <GapTable rows={[
              { gap: "SMS 2FA Persistence", description: "Still dominant: 42% UK banks, 61% crypto exchanges" },
              { gap: "Voice Biometrics Vulnerability", description: "50% detection degradation \"in the wild\" against deepfakes" },
              { gap: "Insider Threats", description: "Bribed/coerced retail employees with legitimate credentials" },
              { gap: "Regulatory Delays", description: "FCC waived July 2024 SIM swap protection deadline" },
            ]} />
          </Subsection>
        </Section>

        {/* 6. CLI Spoofing */}
        <Section id="cli-spoofing" title="6. CLI Spoofing (Caller ID Fraud)">
          <Subsection title="6.1 Mechanism & Economics">
            <p>
              <strong className="text-foreground">Definition:</strong> Manipulation of displayed Caller Line Identity (CLI) to impersonate
              trusted entities - banks, government agencies, family members, local businesses.
            </p>
            <p className="mt-3"><strong className="text-foreground">Scale:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Now top fraud concern: 55% of carriers report high volumes (GLF 2024)</li>
              <li>76% of carriers say fraud has reduced subscriber confidence</li>
              <li>FCC issued $200M+ in fines in 2024</li>
              <li>Projected robocall losses: $76 billion globally by 2025</li>
            </ul>
          </Subsection>

          <Subsection title="6.2 The TDM Problem">
            <p>
              Legacy TDM (Time Division Multiplexing) switches strip digital data. Fraudsters route calls through
              old switches to "wash" STIR/SHAKEN signatures. Call appears "Unknown" rather than "Fake," bypassing detection.
            </p>
          </Subsection>

          <Subsection title="6.3 Detection Technologies">
            <DataTable
              headers={["Technology", "Application"]}
              rows={[
                [<strong key="t">STIR/SHAKEN PKI</strong>, "Digital signatures with A/B/C attestation levels"],
                ["Signaling Firewalls (SS7/Diameter)", "Anomalous origination pattern detection"],
                ["Traffic Pattern Analysis", "ML-based detection of spoofing campaigns"],
                ["Robocall Detection Algorithms", "Pattern matching on call characteristics"],
              ]}
            />
          </Subsection>
        </Section>

        {/* 7. Synthetic Identity */}
        <Section id="synthetic-identity" title="7. Synthetic Identity Fraud">
          <Subsection title="7.1 Mechanism & Economics">
            <p>
              <strong className="text-foreground">Definition:</strong> Creation of a fictitious identity ("Frankenstein ID") combining real
              and fabricated elements to abuse credit systems and pass validation checks.
            </p>
            <p className="mt-3"><strong className="text-foreground">The Recipe:</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">Anchor:</strong> Steal a real SSN from a child, homeless person, or inmate ("clean file")</li>
              <li><strong className="text-foreground">Mask:</strong> Attach fabricated name, DOB, and address</li>
              <li><strong className="text-foreground">Turbocharge:</strong> Pay a broker to be added as "Authorized User" on a stranger&apos;s high-limit credit card</li>
              <li><strong className="text-foreground">Result:</strong> A "person" who did not exist last week now has a 750 credit score</li>
            </ol>
          </Subsection>

          <Subsection title="7.2 The Silver Bullet: eCBSV">
            <p><strong className="text-foreground">Electronic Consent Based SSN Verification:</strong></p>
            <DataTable
              headers={["Traditional Method", "eCBSV Method"]}
              rows={[
                ["Ask Credit Bureau: \"Have you seen this SSN/Name?\"", "Ask SSA directly: \"Is this Name/DOB correct for this SSN?\""],
                ["Bureaus only see what has been reported", "Government source of truth"],
                ["Synthetic identities build history over time", "Instantly detects name-SSN mismatch"],
              ]}
            />
          </Subsection>
        </Section>

        {/* 8. Detection Algorithms */}
        <Section id="detection-algorithms" title="8. Detection Algorithms & ML Models">
          <Subsection title="8.1 Supervised Learning Models">
            <DataTable
              headers={["Algorithm", "Application", "Strengths"]}
              rows={[
                [<strong key="a">Random Forest</strong>, "Primary workhorse for rules-based migration", "Interpretability, feature importance, handles imbalanced datasets"],
                [<strong key="b">XGBoost</strong>, "NVIDIA AI Blueprint combines with GNN embeddings", "Effective for tabular transaction data"],
                ["One-Class SVM", "Unsupervised anomaly detection in sparse-label environments", "Creates boundaries around normal data"],
              ]}
            />
          </Subsection>

          <Subsection title="8.2 Deep Learning Architectures">
            <DataTable
              headers={["Architecture", "Application"]}
              rows={[
                [<strong key="a">Graph Neural Networks (GNN)</strong>, "Fraud ring detection, network-based pattern analysis. GNNs \"significantly outperform traditional methods\" (arXiv:2411.05815)"],
                [<strong key="b">LSTM Networks</strong>, "Time-series sequence modeling; detects robotic intervals and behavioral deviations"],
                ["Autoencoders", "Anomaly detection via reconstruction error"],
                ["Graph Attention Networks (GAT)", "Combined with RL controllers; 2025 research achieved AUROC of 0.872"],
                ["RoBERTa + GNN", "Hybrid text and graph analysis for improved accuracy"],
              ]}
            />
          </Subsection>

          <Subsection title="8.3 Unsupervised Clustering">
            <DataTable
              headers={["Method", "Application"]}
              rows={[
                ["K-Means Clustering", "Groups similar data points to identify outliers with unusual calling habits"],
                ["DBSCAN", "Density-based spatial clustering for anomaly detection without predefined cluster counts"],
                [<strong key="a">Isolation Forests</strong>, "Directly isolates anomalous points; excellent for minimal labeled data"],
              ]}
            />
          </Subsection>

          <Subsection title="8.4 Hybrid Architectures">
            <p><strong className="text-foreground">LSG-FD (Latent Synergy Graph Fraud Detector):</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>LSTM for sequential behavior encoding</li>
              <li>GNN for relationship mapping</li>
              <li>Combined latent space for synergistic detection</li>
            </ul>
            <p className="mt-3"><strong className="text-foreground">LLM + GNN + LSTM Combination:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>LLMs analyze text communications for fraud indicators</li>
              <li>GNNs track patterns between users and fraudsters</li>
              <li>LSTMs identify emerging fraud trends</li>
            </ul>
          </Subsection>
        </Section>

        {/* 9. Stream Processing */}
        <Section id="stream-processing" title="9. Real-Time Stream Processing Architecture">
          <Subsection title="9.1 The Latency Problem">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Traditional FMS systems using CDR-based post-processing take hours or days</li>
              <li>SMS pumping bursts require sub-second detection - impossible with batch processing</li>
              <li>Flash IRSF completes in less than 2 minutes, before batch systems react</li>
            </ul>
          </Subsection>

          <Subsection title="9.2 Apache Kafka + Flink Architecture">
            <p><strong className="text-foreground">Apache Kafka:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>High-throughput, fault-tolerant messaging system</li>
              <li>Captures real-time data from CDRs, signaling events, network telemetry</li>
              <li>Capable of processing millions of events per second</li>
            </ul>
            <p className="mt-3"><strong className="text-foreground">Apache Flink:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Stateful stream processor with microsecond-level latency</li>
              <li>Complex Event Processing (CEP) for pattern detection</li>
              <li>Dynamic rule updates without system restart</li>
            </ul>
          </Subsection>

          <Subsection title="9.3 Production Deployments">
            <DataTable
              headers={["Organization", "Use Case", "Scale"]}
              rows={[
                [<strong key="o">FREE NOW (Lyft)</strong>, "Real-time fraud detection", "150 cities, 48M users"],
                ["Grab", "GPS spoofing and payment fraud detection", "Regional scale"],
                ["PayPal", "Transaction fraud detection", "Global scale"],
                ["Capital One", "Financial fraud detection", "Enterprise scale"],
                ["Mindgate Solutions", "CBDC integration (India)", "8 billion transactions/month"],
              ]}
            />
          </Subsection>

          <Subsection title="9.4 Architecture Pattern">
            <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
              [CDRs/SMS Events/Signaling] → [Kafka (Event Ingestion)] → [Flink (Stateful Processing/CEP)] → [Automated Actions: Rate-limit, Block, Quarantine, Step-up Auth]
            </div>
          </Subsection>
        </Section>

        {/* 10. Signaling Security */}
        <Section id="signaling-security" title="10. Signaling-Layer Security">
          <Subsection title="10.1 The Legacy Protocol Challenge">
            <p><strong className="text-foreground">SS7 (Signaling System No. 7):</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Designed decades ago on "circle of trust" assumption</li>
              <li>Every accessing entity assumed to be verified, benevolent operator</li>
              <li>Now a critical liability in 2025</li>
            </ul>
            <p className="mt-3"><strong className="text-foreground">Exploitation Vectors:</strong> Unauthorized interception of voice and SMS traffic, precise location tracking, roaming fraud, "Fraud-as-a-Service" vendors.</p>
          </Subsection>

          <Subsection title="10.2 Protection Technologies">
            <DataTable
              headers={["Technology", "Application"]}
              rows={[
                [<strong key="t">SS7 Signaling Firewalls</strong>, "Filter malicious signaling traffic using GSMA FASG category 1/2/3 threat rules"],
                ["Diameter Signaling Firewalls", "Protect 4G LTE networks; support DESS Phase 1"],
                ["SEPP (Security Edge Protection Proxy)", "First point of contact for 5G HTTP/2 protocol filtering"],
                ["GTP Firewalls", "GPRS Tunneling Protocol protection"],
                [<strong key="t2">Protocol Signature (LATRO)</strong>, "Patented signaling analytics; 95% pre-call detection rate"],
              ]}
            />
          </Subsection>

          <Subsection title="10.3 5G Security Considerations">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Legacy SS7 backbone remains fundamental to global interconnection</li>
              <li>New 5G architectures introduce new attack surfaces</li>
              <li>Hybrid environments require comprehensive coverage</li>
              <li>SEPP deployment essential for HTTP/2 protocol security</li>
            </ul>
          </Subsection>
        </Section>

        {/* 11. Digital Footprint */}
        <Section id="digital-footprint" title="11. Post-Fraud Defense: Digital Footprint Analysis">
          <Subsection title="11.1 OSINT-Based Identity Verification">
            <p><strong className="text-foreground">Email Intelligence:</strong></p>
            <DataTable
              headers={["Signal", "Interpretation"]}
              rows={[
                ["Email Vintage", "Real emails have history; fake ones are new"],
                ["Tumbling Detection", "Identifying variations (j.o.h.n@gmail vs john@gmail) used to mass-apply"],
                ["Domain Age", "Recently created domains indicate synthetic identity"],
              ]}
            />
            <p className="mt-3"><strong className="text-foreground">The Dark Web Paradox:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Finding an email in a data breach is a <strong className="text-foreground">good</strong> sign (Proof of Life/History)</li>
              <li>"Ghost" users with no breaches and no social media are highly suspicious</li>
              <li>Indicates manufactured identity without real-world footprint</li>
            </ul>
          </Subsection>

          <Subsection title="11.2 Phone & IP Intelligence">
            <DataTable
              headers={["Signal", "Risk Assessment"]}
              rows={[
                ["VoIP Numbers", "Low trust (easily obtained, disposable)"],
                ["Mobile Numbers", "Higher trust (identity-linked in most jurisdictions)"],
                ["Impossible Travel", "Login in NY, transaction in London 10 mins later"],
                ["IP Geolocation Mismatch", "Device location vs. stated address"],
                ["VPN/Proxy Detection", "Attempts to mask true location"],
              ]}
            />
          </Subsection>
        </Section>

        {/* 12. Emerging Threats */}
        <Section id="emerging-threats" title="12. Emerging Threats: Generative AI & Deepfakes">
          <Subsection title="12.1 Current State (2024-2025)">
            <p><strong className="text-foreground">Deepfake Voice & Video:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Voice cloning now requires only seconds of sample audio (2025 threshold crossed)</li>
              <li>Real-time deepfakes: DeepFaceLive, Magicam, Amigo AI enable live video call manipulation</li>
              <li>46% of fraud experts have encountered synthetic identity fraud; 37% voice deepfakes</li>
              <li>50% of businesses experienced audio/video deepfake fraud in 2024 (Regula)</li>
              <li>Average deepfake-related business loss: ~$450,000</li>
            </ul>
            <p className="mt-3"><strong className="text-foreground">Loss Projections:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Deloitte projects US generative AI fraud losses: $12.3B (2023) to $40B (2027)</li>
              <li>1 in 20 verification attempts in 2024 was fraudulent (Veriff)</li>
            </ul>
          </Subsection>

          <Subsection title="12.2 Attack Applications">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">Help-Desk Attacks:</strong> Deepfake audio mimics customers, tricks staff into granting access</li>
              <li><strong className="text-foreground">Biometric Spoofing:</strong> High-quality deepfakes pass liveness detection</li>
              <li><strong className="text-foreground">Scalable Social Engineering:</strong> Cloned executive voices authorize fraudulent transactions</li>
            </ul>
          </Subsection>

          <Subsection title="12.3 Malicious AI Tools">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">FraudGPT:</strong> Automated phishing campaign generation, scam content creation</li>
              <li><strong className="text-foreground">GPT Prompt Compromise:</strong> Attackers manipulate AI system inputs</li>
              <li><strong className="text-foreground">Synthetic Document Generation:</strong> GPT-4o creates hyper-realistic forged IDs</li>
            </ul>
          </Subsection>

          <Subsection title="12.4 Defensive Countermeasures">
            <DataTable
              headers={["Defense Layer", "Technology"]}
              rows={[
                ["Liveness Detection", "Physical presence verification, injection attack detection"],
                ["Metadata Validation", "Verify media originated from device camera"],
                ["Content Analysis", "Detect deepfake artifacts and inconsistencies"],
                ["Multi-Factor Biometrics", "Combine face, voice, behavioral signals"],
                ["Continuous Verification", "Re-authenticate throughout session"],
              ]}
            />
            <p className="mt-3"><strong className="text-foreground">Industry Adoption:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>83% of fraud management professionals use biometric checks</li>
              <li>84% use MFA and biometric verification (Regula)</li>
              <li>47% use AI/ML models for facial recognition enhancement</li>
            </ul>
          </Subsection>
        </Section>

        {/* 13. MSP Threats */}
        <Section id="msp-threats" title="13. MSP-Specific Threat Landscape">
          <Subsection title="13.1 Why MSPs Are High-Value Targets">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Multi-tenant admin planes (RMM tools, UCaaS/CPaaS consoles, IAM systems)</li>
              <li>Single compromise enables cascading attacks across client bases</li>
              <li>Access to client credentials, systems, and data</li>
              <li>Trust relationships exploited for lateral movement</li>
            </ul>
          </Subsection>

          <Subsection title="13.2 2024-2025 MSP Threat Data">
            <DataTable
              headers={["Metric", "Value", "Source"]}
              rows={[
                [<strong key="m">Cyber/Fraud Losses</strong>, "$16.6 billion (33% YoY increase)", "FBI IC3 2024"],
                ["Ransomware in Breaches", "44% (up from 32%)", "ConnectWise 2025"],
                ["Third-Party Breach Involvement", "1 in 3 breaches", "Industry Analysis"],
                ["SMBs Attacked", "43%", "Guardz"],
                ["SMBs Relying on Untrained Staff", "52%", "Guardz"],
              ]}
            />
          </Subsection>

          <Subsection title="13.3 Primary Attack Vectors">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">RMM Tool Exploitation:</strong> Kaseya, ConnectWise and similar platforms targeted. Single RMM compromise provides access to all managed endpoints.</li>
              <li><strong className="text-foreground">UCaaS/CPaaS Console Attacks:</strong> VoIP/messaging infrastructure control, call routing manipulation</li>
              <li><strong className="text-foreground">IAM System Compromise:</strong> Identity provider takeover, federation abuse, privilege escalation across tenants</li>
            </ul>
          </Subsection>

          <Subsection title="13.4 MSP-Specific Recommendations">
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">Verified MFA on All Admin Consoles:</strong> Hardware tokens or FIDO2, not SMS</li>
              <li><strong className="text-foreground">RMM Tool Segmentation:</strong> Separate admin credentials per client</li>
              <li><strong className="text-foreground">Vendor Governance Framework:</strong> Third-party risk assessments</li>
              <li><strong className="text-foreground">AI-Driven Monitoring:</strong> Behavioral analysis across tenant environments</li>
              <li><strong className="text-foreground">Incident Response Playbooks:</strong> MSP-specific scenarios</li>
              <li><strong className="text-foreground">Cyber Insurance Review:</strong> Coverage adequacy for cascading breaches</li>
            </ol>
          </Subsection>
        </Section>

        {/* 14. Strategic Recommendations */}
        <Section id="recommendations" title="14. Strategic Recommendations">
          <div className="bg-muted/50 p-4 rounded-lg mb-4 border-l-4 border-primary">
            Based on GLF 2025 Fraud Report, CFCA findings, vendor technical documentation, and industry best practices.
          </div>

          <Subsection title="Recommendation 1: Transition to Real-Time Fraud Detection">
            <p><strong className="text-foreground">Requirement:</strong> Migrate from batch CDR processing to streaming architectures</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Deploy Apache Kafka for event ingestion</li>
              <li>Implement Apache Flink for stateful stream processing</li>
              <li>Target: sub-second detection latency for SMS pumping and IRSF</li>
              <li>Enable Complex Event Processing (CEP) for pattern detection</li>
            </ul>
          </Subsection>

          <Subsection title="Recommendation 2: Deploy Multi-Layer AI/ML Stack">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">GNN</strong> for fraud ring and network relationship analysis</li>
              <li><strong className="text-foreground">LSTM</strong> for behavioral sequence modeling</li>
              <li><strong className="text-foreground">Ensemble models</strong> (XGBoost + Random Forest) for transaction scoring</li>
              <li><strong className="text-foreground">Autoencoders</strong> for unsupervised anomaly detection</li>
            </ul>
          </Subsection>

          <Subsection title="Recommendation 3: Harden Identity Verification Against Deepfakes">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Deploy liveness detection with anti-spoofing layers</li>
              <li>Implement behavioral biometrics (continuous authentication)</li>
              <li>Migrate from SMS-based 2FA to FIDO2/Passkeys for high-value accounts</li>
              <li>Add metadata validation and injection attack detection</li>
            </ul>
          </Subsection>

          <Subsection title="Recommendation 4: Join Industry Collaboration Frameworks">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">GLF Code of Conduct:</strong> Join certified carrier community (22 members)</li>
              <li><strong className="text-foreground">GSMA Fraud Intelligence Sharing:</strong> Real-time threat data</li>
              <li><strong className="text-foreground">AB Handshake Call Validation:</strong> Originating-terminating verification</li>
              <li><strong className="text-foreground">CFCA Membership:</strong> Access survey data and member resources</li>
            </ul>
          </Subsection>

          <Subsection title="Recommendation 5: Implement Signaling-Layer Protection">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">SS7/Diameter/GTP Firewalls:</strong> GSMA FASG category 1/2/3 rules</li>
              <li><strong className="text-foreground">AI-Driven Signaling Analytics:</strong> LATRO Protocol Signature achieves 95% pre-call detection</li>
              <li><strong className="text-foreground">SEPP for 5G:</strong> HTTP/2 protocol security</li>
              <li>Cross-protocol correlation and monitoring</li>
            </ul>
          </Subsection>
        </Section>

        {/* 15. Appendix */}
        <Section id="appendix" title="15. Appendix: Vendor Solutions & Industry Resources">
          <Subsection title="15.1 Fraud Detection Platform Vendors">
            <DataTable
              headers={["Vendor", "Specialization"]}
              rows={[
                [<strong key="v">Subex</strong>, "360 degree fraud management, ML-based detection, signaling intelligence"],
                [<strong key="v2">Neural Technologies</strong>, "AI-driven AIT/IRSF defense, traffic pattern analysis, behavioral profiling"],
                ["Amdocs", "ML-driven self-tuning detection, near-real-time processing, Snowflake integration"],
                [<strong key="v3">LATRO</strong>, "Signaling analytics, Protocol Signature technology, SS7/Diameter protection"],
                ["AB Handshake", "Call validation, Wangiri 2.0 protection, blockchain-based verification"],
                ["Mobileum", "Revenue assurance, fraud management, risk management"],
                ["Twilio", "Verify Fraud Guard for SMS pumping protection"],
                ["Telesign", "Phone number intelligence, identity verification"],
              ]}
            />
          </Subsection>

          <Subsection title="15.2 Industry Bodies & Resources">
            <DataTable
              headers={["Organization", "Focus"]}
              rows={[
                [<strong key="o">CFCA</strong>, "Global fraud loss surveys, industry coordination (cfca.org)"],
                [<strong key="o2">GLF (Global Leaders Forum)</strong>, "Wholesale voice governance, Code of Conduct (via i3Forum)"],
                ["i3Forum", "Industry collaboration, anti-fraud initiatives (i3forum.org)"],
                [<strong key="o3">GSMA</strong>, "Mobile industry standards, FASG fraud guidance (gsma.com)"],
                ["MEF", "Messaging ecosystem, AIT mitigation (mobileecosystemforum.com)"],
              ]}
            />
          </Subsection>

          <Subsection title="15.3 Key Reports & Documentation">
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>CFCA Global Fraud Loss Survey 2023/2025</li>
              <li>GLF Fighting Fraud Report 2024 & 2025</li>
              <li>Veriff Identity Fraud Report 2025</li>
              <li>Enea/Mobilesquared AIT Analysis 2023</li>
              <li>Cifas Fraudscape Report 2025</li>
              <li>FBI IC3 Annual Report 2024</li>
              <li>ConnectWise MSP Threat Report 2024/2025</li>
              <li>NVIDIA AI Blueprint for Financial Fraud Detection (2024)</li>
              <li>arXiv:2411.05815 - Graph Neural Networks for Financial Fraud Detection Review (2024)</li>
            </ul>
          </Subsection>

          <Subsection title="15.4 Regulatory Frameworks">
            <DataTable
              headers={["Framework", "Jurisdiction", "Status"]}
              rows={[
                [<strong key="f">STIR/SHAKEN</strong>, "USA/Canada", "Mandatory"],
                ["STIR/SHAKEN", "France", "October 2024"],
                ["CLI Blocking Rules", "Belgium, Italy, Poland", "Active"],
                ["FCC Enforcement", "USA", "$200M+ fines in 2024"],
              ]}
            />
          </Subsection>
        </Section>

        {/* Document Control */}
        <section className="mt-8 pt-8 border-t-2 border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Document Control</h2>
          <DataTable
            headers={["Version", "Date", "Author", "Changes"]}
            rows={[
              ["1.0", "December 2025", "Consolidated from CFCA, GLF, Perplexity, Gemini, Opus research", "Initial unified release"],
            ]}
          />
          <p className="mt-4 text-sm text-muted-foreground italic">
            This document synthesizes intelligence from authoritative industry sources for operational use by fraud
            detection professionals. Quantitative data should be verified against primary sources for compliance
            and regulatory purposes.
          </p>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
          <Link href="/nebula/capstone" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back to Capstone Projects</Link>
          <Link href="/nebula/capstone/wip/fraud-detection-prd" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fraud Detection PRD →</Link>
        </div>
      </div>
    </CapstoneLayout>
  );
}
