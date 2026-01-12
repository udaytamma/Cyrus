"use client";

/**
 * System Design Guide - Principal TPM Deep Dive
 * Comprehensive system design knowledge for Mag7 interviews
 * Goes beyond the competency matrix with detailed explanations and trade-offs
 */

import Link from "next/link";
import { SystemDesignLayout, getSystemDesignNavigation } from "@/components/SystemDesignLayout";

// Subsection component for consistent styling
function Subsection({
  title,
  children,
  color = "blue",
}: {
  title: string;
  children: React.ReactNode;
  color?: "blue" | "green" | "amber" | "purple" | "indigo" | "pink" | "cyan" | "red" | "teal" | "orange";
}) {
  const colorClasses: Record<string, string> = {
    blue: "from-blue-500/5 border-blue-500/30 text-blue-500",
    green: "from-green-500/5 border-green-500/30 text-green-500",
    amber: "from-amber-500/5 border-amber-500/30 text-amber-500",
    purple: "from-purple-500/5 border-purple-500/30 text-purple-500",
    indigo: "from-indigo-500/5 border-indigo-500/30 text-indigo-500",
    pink: "from-pink-500/5 border-pink-500/30 text-pink-500",
    cyan: "from-cyan-500/5 border-cyan-500/30 text-cyan-500",
    red: "from-red-500/5 border-red-500/30 text-red-500",
    teal: "from-teal-500/5 border-teal-500/30 text-teal-500",
    orange: "from-orange-500/5 border-orange-500/30 text-orange-500",
  };

  const classes = colorClasses[color];
  const [gradientClass, borderClass, textClass] = classes.split(" ");

  return (
    <div className={`mb-6 p-5 bg-gradient-to-r ${gradientClass} to-transparent rounded-xl border ${borderClass}`}>
      <h3 className={`text-lg font-semibold text-foreground mb-3 ${textClass}`}>{title}</h3>
      {children}
    </div>
  );
}

// Deep dive box for extended explanations
function DeepDive({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 p-4 bg-muted/30 rounded-lg border border-border">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-amber-500">&#9733;</span>
        <span className="text-base font-semibold text-foreground">{title}</span>
      </div>
      <div className="text-base text-muted-foreground">{children}</div>
    </div>
  );
}

// Warning/pitfall box
function Pitfall({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 p-4 bg-red-500/5 rounded-lg border border-red-500/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-500">&#9888;</span>
        <span className="text-base font-semibold text-red-500">Common Pitfall</span>
      </div>
      <div className="text-base text-muted-foreground">{children}</div>
    </div>
  );
}

// Interview tip box
function InterviewTip({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 p-4 bg-green-500/5 rounded-lg border border-green-500/30">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-green-500">&#128161;</span>
        <span className="text-base font-semibold text-green-500">Interview Tip</span>
      </div>
      <div className="text-base text-muted-foreground">{children}</div>
    </div>
  );
}

// Bullet item component
function BulletItem({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 mb-2">
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 shrink-0"></span>
      <span className="text-base text-muted-foreground">
        {title && <strong className="text-foreground">{title}:</strong>} {children}
      </span>
    </li>
  );
}

// Code block component
function CodeBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <pre className="mb-4 p-3 bg-muted/50 rounded-lg border border-border overflow-x-auto">
      <code className="text-sm text-muted-foreground font-mono">{children}</code>
    </pre>
  );
}

export default function SystemDesignGuide() {
  const nav = getSystemDesignNavigation("guide");

  return (
    <SystemDesignLayout
      title="System Design Guide"
      description="Principal TPM Deep Dive for Mag7 Interviews"
      currentSection="guide"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &#8592; Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          2
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Principal TPM System Design Guide</h1>
        <p className="text-muted-foreground">
          Deep-dive reference for Mag7 interviews - No sugarcoating, full depth
        </p>
      </div>

      {/* Intro Note */}
      <div className="mb-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
        <p className="text-base text-muted-foreground">
          This guide goes beyond surface-level explanations. At the Principal TPM level, you are expected to understand
          <strong className="text-foreground"> why </strong> systems are designed a certain way, articulate
          <strong className="text-foreground"> trade-offs </strong> with precision, and connect technical decisions to
          <strong className="text-foreground"> business outcomes</strong>. Memorizing definitions is not enough.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mb-10 p-5 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Table of Contents</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <a href="#part-1" className="text-base font-medium text-blue-500 hover:underline">Part I: Strategy &amp; Business Physics</a>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>1.1 Cloud Economics (FinOps)</li>
              <li>1.2 SLA Mathematics &amp; Reliability</li>
              <li>1.3 Compliance &amp; Data Sovereignty</li>
              <li>1.4 Risk Quantification</li>
            </ul>
          </div>
          <div>
            <a href="#part-2" className="text-base font-medium text-green-500 hover:underline">Part II: Core Infrastructure</a>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>2.1 Scaling Architecture</li>
              <li>2.2 Database Deep Dive</li>
              <li>2.3 Caching Architecture</li>
              <li>2.4 Migration Patterns</li>
              <li>2.5 Communication Patterns</li>
            </ul>
          </div>
          <div>
            <a href="#part-3" className="text-base font-medium text-purple-500 hover:underline">Part III: Advanced &amp; AI</a>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>3.1 Distributed Consensus</li>
              <li>3.2 Global Architecture</li>
              <li>3.3 Resiliency Patterns</li>
              <li>3.4 AI/ML Infrastructure</li>
              <li>3.5 Observability</li>
              <li>3.6 Security Architecture</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* PART 1: STRATEGY & BUSINESS PHYSICS */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}

      <div id="part-1" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
          <div className="w-12 h-12 rounded-lg bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
            I
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Part I: Strategy &amp; Business Physics</h2>
            <p className="text-base text-muted-foreground">The TPM differentiator - connecting technical decisions to business outcomes</p>
          </div>
        </div>

        {/* 1.1 Cloud Economics (FinOps) - Deep Dive */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
              1.1
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Cloud Economics (FinOps)</h2>
              <p className="text-sm text-muted-foreground">Understanding the financial mechanics of cloud infrastructure</p>
            </div>
          </div>

          <Subsection title="Cost Model Fundamentals" color="blue">
            <p className="text-sm text-muted-foreground mb-4">
              Cloud costs are not linear. Understanding the cost curves is essential for capacity planning.
            </p>
            <ul className="space-y-1">
              <BulletItem title="Compute">
                On-Demand (baseline, predictable workloads), Reserved Instances (1-3 year commitment, 30-72% savings),
                Spot/Preemptible (up to 90% savings, but can be terminated with 2-minute notice). At Mag7 scale, even 5% optimization
                can mean millions in annual savings.
              </BulletItem>
              <BulletItem title="Storage">
                Hot storage (SSD, frequent access) vs. Cold storage (HDD, archival). Understand tiering: S3 Standard → S3-IA → Glacier.
                The retrieval cost on cold storage is often overlooked - Glacier Deep Archive charges ~$0.02/GB for retrieval.
              </BulletItem>
              <BulletItem title="Network (Egress)">
                Data transfer OUT of cloud is expensive (~$0.09/GB). Inter-AZ traffic within same region costs money (~$0.01/GB each way).
                Cross-region replication multiplies this. At Netflix scale, video egress is the dominant cost driver.
              </BulletItem>
            </ul>
            <DeepDive title="The Hidden Cost of Micro-services">
              Each service-to-service call that crosses availability zones incurs network cost. A single user request that
              fans out to 50 microservices, each making 3 downstream calls across AZs, can cost 150x the single-service
              equivalent in network transfer. This is why service mesh architectures often co-locate services with high
              affinity, and why companies like Google use regional pods.
            </DeepDive>
          </Subsection>

          <Subsection title="Reserved vs. Spot Strategy" color="blue">
            <ul className="space-y-1">
              <BulletItem title="Reserved Instances">
                Best for: Baseline load that runs 24/7. Calculate your steady-state utilization first. If a service consistently
                uses 100 instances but spikes to 500, reserve 100 and use on-demand/spot for the delta.
              </BulletItem>
              <BulletItem title="Spot Instances">
                Best for: Stateless workloads, batch processing, CI/CD runners, ML training. Implement graceful shutdown handlers.
                Use diversified instance types to reduce termination risk.
              </BulletItem>
              <BulletItem title="Savings Plans">
                AWS-specific: Commit to $/hour spend rather than specific instance types. More flexible than RIs but requires
                understanding your spend patterns.
              </BulletItem>
            </ul>
            <InterviewTip>
              When asked about cost optimization, do not just list techniques. Frame it as: &quot;For this workload profile
              (batch/interactive/stateful), I would use X because Y, accepting the trade-off of Z.&quot;
            </InterviewTip>
          </Subsection>

          <Subsection title="Data Transfer Optimization" color="blue">
            <ul className="space-y-1">
              <BulletItem title="CDN for Static Assets">
                Serve from edge, not origin. CloudFront, Akamai, Fastly. Reduces egress from your infrastructure.
              </BulletItem>
              <BulletItem title="Compression">
                gzip/Brotli for text, efficient codecs for media. HTTP/2 multiplexing reduces overhead.
              </BulletItem>
              <BulletItem title="Data Locality">
                Process data where it lives. Do not move 1TB to compute; move compute to data. This is why BigQuery
                and Snowflake charge for data scanned, not data stored.
              </BulletItem>
              <BulletItem title="Private Connectivity">
                AWS PrivateLink, GCP Private Service Connect. Keeps traffic off public internet, often cheaper and faster.
              </BulletItem>
            </ul>
            <Pitfall>
              Multi-region active-active sounds great for availability, but doubles (or more) your data sync costs.
              A poorly designed multi-region architecture can 3x your cloud bill. Always calculate the cost of consistency.
            </Pitfall>
          </Subsection>

          <Subsection title="CAPEX vs. OPEX Mental Model" color="blue">
            <p className="text-sm text-muted-foreground mb-4">
              The shift from CAPEX (buying hardware) to OPEX (paying for consumption) changes how organizations think about cost.
            </p>
            <ul className="space-y-1">
              <BulletItem title="CAPEX Era">
                Buy servers, depreciate over 3-5 years. Overprovisioning was cheap insurance. Utilization of 20% was normal.
              </BulletItem>
              <BulletItem title="OPEX Era">
                Pay per second/hour. Idle resources = waste. Rightsizing is continuous. Finance teams want predictable monthly bills,
                but workloads are spiky.
              </BulletItem>
              <BulletItem title="TPM Implication">
                You must bridge engineering (wants flexibility) and finance (wants predictability). Reserved capacity commitments,
                budget alerts, and showback/chargeback models are your tools.
              </BulletItem>
            </ul>
          </Subsection>
        </div>

        {/* 1.2 SLA Mathematics & Reliability */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
              1.2
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">SLA Mathematics &amp; Reliability</h2>
              <p className="text-sm text-muted-foreground">Quantifying reliability and making data-driven trade-offs</p>
            </div>
          </div>

          <Subsection title="SLO/SLA/SLI - Precision Matters" color="blue">
            <ul className="space-y-1">
              <BulletItem title="SLI (Service Level Indicator)">
                The actual measurement. Example: &quot;Request latency at p99&quot; or &quot;Error rate as percentage of total requests.&quot;
                Must be precisely defined - what counts as a request? What counts as an error?
              </BulletItem>
              <BulletItem title="SLO (Service Level Objective)">
                The internal target. Example: &quot;p99 latency &lt; 200ms for 99.9% of requests.&quot; Set based on user expectations
                and technical feasibility. This is what engineering optimizes for.
              </BulletItem>
              <BulletItem title="SLA (Service Level Agreement)">
                The contractual commitment to customers. Always set LOWER than SLO to provide buffer. If SLO is 99.9%,
                SLA might be 99.5%. Breaking SLA triggers credits/penalties.
              </BulletItem>
            </ul>
            <DeepDive title="The SLO Pyramid">
              Google SRE practice: Your SLO should be achievable but not trivially so. If you are always at 100%, your SLO
              is too loose and you are probably over-investing in reliability. If you are constantly missing SLO, it is
              too aggressive. The &quot;error budget&quot; concept emerges from this - the gap between 100% and your SLO is your
              budget for taking risks (deployments, experiments).
            </DeepDive>
          </Subsection>

          <Subsection title="Composite SLA Calculation" color="blue">
            <p className="text-sm text-muted-foreground mb-4">
              For serial dependencies, multiply availabilities. For parallel (redundant), calculate 1 - (failure probability).
            </p>
            <CodeBlock>
{`Serial: A → B → C
System = A × B × C = 0.999 × 0.999 × 0.999 = 0.997 (99.7%)

Parallel: A || B (either works)
System = 1 - (1-A)(1-B) = 1 - (0.001)(0.001) = 0.999999 (99.9999%)`}
            </CodeBlock>
            <ul className="space-y-1">
              <BulletItem title="Real-World Implication">
                A request that touches 10 services, each at 99.9%, yields 99% system availability (87 hours downtime/year).
                This is why reducing critical path dependencies is crucial.
              </BulletItem>
              <BulletItem title="Human Factor">
                SLAs assume no human error. But deployments, config changes, and manual interventions are where most
                outages originate. Factor in MTTR (Mean Time To Recovery) not just MTBF (Mean Time Between Failures).
              </BulletItem>
            </ul>
            <Pitfall>
              Do not quote AWS/GCP SLAs as your SLAs. Their 99.99% compute SLA is for their infrastructure.
              Your application running on it will have additional failure modes (bugs, misconfig, dependencies).
            </Pitfall>
          </Subsection>

          <Subsection title="Error Budgets - Practical Application" color="blue">
            <p className="text-sm text-muted-foreground mb-4">
              Error budget = (1 - SLO) × time period. If SLO is 99.9% monthly, error budget is 43.2 minutes of downtime.
            </p>
            <ul className="space-y-1">
              <BulletItem title="Budget Consumption">
                Track how much budget you have consumed. 50% consumed in first week? Slow down risky changes.
                80% remaining at month end? You can afford to ship that risky feature.
              </BulletItem>
              <BulletItem title="Burn Rate">
                How fast are you consuming budget? A burn rate of 10x means you will exhaust monthly budget in 3 days.
                Use burn rate alerts for early warning.
              </BulletItem>
              <BulletItem title="Negotiation Tool">
                When product wants to ship faster and SRE wants stability, error budget is the objective arbiter.
                &quot;We have budget, let us ship&quot; or &quot;Budget is exhausted, reliability work first.&quot;
              </BulletItem>
            </ul>
            <InterviewTip>
              When discussing reliability vs. velocity trade-offs, reference error budgets. This shows you understand
              how to make data-driven decisions rather than religious arguments about stability.
            </InterviewTip>
          </Subsection>

          <Subsection title="Availability Tiers - Reality Check" color="blue">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-muted-foreground mb-4">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-foreground">Availability</th>
                    <th className="text-left py-2 text-foreground">Downtime/Year</th>
                    <th className="text-left py-2 text-foreground">Typical Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2">99% (two 9s)</td>
                    <td className="py-2">3.65 days</td>
                    <td className="py-2">Internal tools, dev environments</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">99.9% (three 9s)</td>
                    <td className="py-2">8.76 hours</td>
                    <td className="py-2">Most SaaS products, APIs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">99.99% (four 9s)</td>
                    <td className="py-2">52.6 minutes</td>
                    <td className="py-2">Core infrastructure, payments</td>
                  </tr>
                  <tr>
                    <td className="py-2">99.999% (five 9s)</td>
                    <td className="py-2">5.26 minutes</td>
                    <td className="py-2">911 systems, nuclear safety</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              Going from 99.9% to 99.99% is not 10x harder - it is often 100x more expensive.
              Each additional nine requires exponentially more redundancy, testing, and operational discipline.
            </p>
          </Subsection>
        </div>

        {/* 1.3 Compliance & Data Sovereignty */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
              1.3
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Compliance &amp; Data Sovereignty</h2>
              <p className="text-sm text-muted-foreground">Regulatory constraints that shape architecture</p>
            </div>
          </div>

          <Subsection title="GDPR - What You Must Know" color="blue">
            <ul className="space-y-1">
              <BulletItem title="Data Residency">
                EU personal data must stay in EU or approved jurisdictions. This forces multi-region architecture decisions.
                &quot;German data stays in Germany&quot; is a real requirement.
              </BulletItem>
              <BulletItem title="Right to Erasure">
                Users can request deletion. Your architecture must support identifying and deleting all data about a user
                across all systems - including backups, logs, and analytics. This is harder than it sounds.
              </BulletItem>
              <BulletItem title="Data Portability">
                Users can request their data in machine-readable format. You need export functionality.
              </BulletItem>
              <BulletItem title="Breach Notification">
                72-hour notification window to regulators. Requires robust incident detection and response processes.
              </BulletItem>
            </ul>
            <DeepDive title="Architecture Implications">
              GDPR compliance often requires: (1) Data classification system to know what is personal data, (2) Consent
              management service, (3) Deletion propagation across microservices, (4) Audit logging for data access,
              (5) Regional deployment isolation. These are not afterthoughts - they must be designed in.
            </DeepDive>
          </Subsection>

          <Subsection title="PCI-DSS for Payment Systems" color="blue">
            <ul className="space-y-1">
              <BulletItem title="Scope Reduction">
                The goal is to minimize what systems are &quot;in scope&quot; for PCI compliance. Use tokenization - send card data
                directly to payment processor, store only tokens. Your systems never see real card numbers.
              </BulletItem>
              <BulletItem title="Network Segmentation">
                Cardholder data environment (CDE) must be isolated. Separate VPCs/VLANs, strict firewall rules,
                no direct internet access.
              </BulletItem>
              <BulletItem title="Encryption Requirements">
                Encryption at rest and in transit. Key management becomes critical - who can decrypt? How are keys rotated?
              </BulletItem>
            </ul>
            <Pitfall>
              Logging card numbers (even accidentally) brings your logging infrastructure into PCI scope.
              Mask sensitive data at the source. Use allow-lists for what to log, not block-lists.
            </Pitfall>
          </Subsection>

          <Subsection title="SOC 2 - Trust Framework" color="blue">
            <ul className="space-y-1">
              <BulletItem title="Five Trust Principles">
                Security (protection against unauthorized access), Availability (system is operational as committed),
                Processing Integrity (accurate processing), Confidentiality (data protection), Privacy (personal info handling).
              </BulletItem>
              <BulletItem title="Type I vs. Type II">
                Type I: Point-in-time assessment. Type II: Assessment over a period (usually 6-12 months). Enterprise
                customers usually require Type II.
              </BulletItem>
              <BulletItem title="Evidence Collection">
                Requires automated evidence - access logs, change management records, incident response documentation.
                Manual processes do not scale.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Data Classification Framework" color="blue">
            <ul className="space-y-1">
              <BulletItem title="Public">
                Marketing content, public APIs. No special handling.
              </BulletItem>
              <BulletItem title="Internal">
                Business data, internal docs. Basic access controls.
              </BulletItem>
              <BulletItem title="Confidential">
                Customer data, financial records. Encryption, audit logging, need-to-know access.
              </BulletItem>
              <BulletItem title="Restricted">
                PII, credentials, payment data. Maximum controls, isolation, retention limits.
              </BulletItem>
            </ul>
            <InterviewTip>
              When designing systems, always ask: &quot;What is the data classification? What compliance regimes apply?&quot;
              This shows you think beyond just technical requirements.
            </InterviewTip>
          </Subsection>
        </div>

        {/* 1.4 Risk Quantification */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
              1.4
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Risk Quantification</h2>
              <p className="text-sm text-muted-foreground">Translating technical risk into business language</p>
            </div>
          </div>

          <Subsection title="Expected Loss Calculation" color="blue">
            <p className="text-sm text-muted-foreground mb-4">
              Risk = Probability × Impact. This simple formula lets you compare unlike risks.
            </p>
            <CodeBlock>
{`Example: E-commerce checkout failure
- Probability: 0.1% of requests fail (10 per 10,000)
- Impact: $50 average order value
- Daily requests: 100,000
- Expected daily loss: 100,000 × 0.001 × $50 = $5,000/day = $1.8M/year

Investment to reduce failure rate to 0.01%:
- New expected loss: $500/day = $182K/year
- Savings: $1.62M/year
- If fix costs $500K, ROI = 224%`}
            </CodeBlock>
            <p className="text-sm text-muted-foreground">
              This is how you justify reliability investments to executives. Not &quot;we should improve uptime&quot; but
              &quot;this investment yields 224% ROI through reduced revenue loss.&quot;
            </p>
          </Subsection>

          <Subsection title="Blast Radius Analysis" color="blue">
            <ul className="space-y-1">
              <BulletItem title="Definition">
                How much of the system/users are affected when a component fails? A database failure might have 100%
                blast radius. A regional outage might have 33% (if three regions).
              </BulletItem>
              <BulletItem title="Containment Strategies">
                Isolation boundaries, graceful degradation, circuit breakers. Each reduces blast radius.
              </BulletItem>
              <BulletItem title="TPM Application">
                When planning migrations or deployments, always assess: &quot;What is the worst-case blast radius?
                What is the rollback plan?&quot;
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Technical Debt Quantification" color="blue">
            <ul className="space-y-1">
              <BulletItem title="Interest Metaphor">
                Tech debt is not just &quot;messy code.&quot; It is future cost. Interest = additional time spent on every
                feature due to the debt. A 20% velocity tax on a 50-engineer team is 10 FTE-years wasted annually.
              </BulletItem>
              <BulletItem title="Principal vs. Interest">
                Principal = cost to fix. Interest = ongoing cost of not fixing. When interest &gt; principal repayment time,
                fix it now.
              </BulletItem>
              <BulletItem title="Categorization">
                Deliberate (accepted trade-off) vs. Accidental (poor decisions). Prudent (understood at time) vs.
                Reckless (ignored). Only deliberate-prudent debt is acceptable.
              </BulletItem>
            </ul>
          </Subsection>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* PART 2: CORE INFRASTRUCTURE & MIGRATION */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}

      <div id="part-2" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6 p-4 bg-green-500/10 rounded-xl border border-green-500/30">
          <div className="w-12 h-12 rounded-lg bg-green-500 text-white flex items-center justify-center text-xl font-bold">
            II
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Part II: Core Infrastructure &amp; Migration</h2>
            <p className="text-base text-muted-foreground">The building blocks and how to evolve them safely</p>
          </div>
        </div>

        {/* 2.1 Scaling Architecture */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
              2.1
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Scaling Architecture</h2>
              <p className="text-sm text-muted-foreground">Understanding when and how systems must scale</p>
            </div>
          </div>

          <Subsection title="Vertical Scaling Limits" color="green">
            <ul className="space-y-1">
              <BulletItem title="Hardware Ceiling">
                Largest EC2 instance (u-24tb1.112xlarge): 448 vCPU, 24TB RAM. Sounds massive, but a viral moment can
                exceed any single machine. Cost scales superlinearly at the top end.
              </BulletItem>
              <BulletItem title="Lock Contention">
                Single-machine DBs hit lock contention before CPU limits. Concurrent writes to same rows serialize.
              </BulletItem>
              <BulletItem title="When Vertical Works">
                Development/staging, read-heavy workloads with good caching, vertical scaling buys time while you build
                horizontal architecture.
              </BulletItem>
            </ul>
            <DeepDive title="The Scaling Decision Framework">
              Ask: (1) What is the current bottleneck - CPU, memory, I/O, network? (2) Will more of the same resource
              help, or am I hitting contention? (3) What is the 10x scenario - can vertical handle it? (4) What is the
              cost difference between vertical and horizontal at target scale?
            </DeepDive>
          </Subsection>

          <Subsection title="Horizontal Scaling Patterns" color="green">
            <ul className="space-y-1">
              <BulletItem title="Stateless Services">
                The easiest to scale. Any instance can handle any request. Load balancer distributes. Scale in/out with
                demand. AWS Auto Scaling Groups, Kubernetes HPA.
              </BulletItem>
              <BulletItem title="Stateful Services">
                Harder. State must be externalized (database, cache, object store) or partitioned. Leader election for
                coordination. Kubernetes StatefulSets provide stable network identities.
              </BulletItem>
              <BulletItem title="Cattle vs. Pets">
                Pets: Named servers, carefully maintained, failure is a crisis. Cattle: Numbered instances, easily
                replaced, failure is routine. Scale requires cattle mentality.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Auto-scaling Strategies" color="green">
            <ul className="space-y-1">
              <BulletItem title="Reactive (Threshold-based)">
                Scale when CPU &gt; 70% for 5 minutes. Simple but slow - load already high when scaling starts.
                Works for predictable, gradual load changes.
              </BulletItem>
              <BulletItem title="Predictive">
                Use historical patterns to pre-scale. Monday morning traffic spike? Scale up at 7 AM, not when users
                see latency. Requires ML or manual scheduling.
              </BulletItem>
              <BulletItem title="Queue-based">
                Scale based on queue depth. 1000 messages waiting? Add workers. Queue empty? Scale down. Good for async
                workloads with variable processing time.
              </BulletItem>
            </ul>
            <Pitfall>
              Cold start latency kills reactive auto-scaling for spiky traffic. If instances take 60 seconds to boot
              and traffic spikes in 10 seconds, you will drop requests. Pre-warming, predictive scaling, or over-provisioning
              are your options.
            </Pitfall>
          </Subsection>
        </div>

        {/* 2.2 Database Deep Dive */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
              2.2
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Database Deep Dive</h2>
              <p className="text-sm text-muted-foreground">Choosing and operating data stores at scale</p>
            </div>
          </div>

          <Subsection title="SQL vs. NoSQL - The Real Trade-offs" color="green">
            <ul className="space-y-1">
              <BulletItem title="SQL Strengths">
                ACID guarantees, complex queries (JOINs, aggregations), mature tooling, well-understood. Works until
                single-node limits hit (~10-100K TPS depending on workload).
              </BulletItem>
              <BulletItem title="SQL Weaknesses">
                Schema changes can be painful at scale (100M+ rows). Sharding is manual and complex. Geographic
                distribution is hard.
              </BulletItem>
              <BulletItem title="NoSQL Strengths">
                Horizontal scalability built-in, flexible schema, designed for specific access patterns (key-value,
                document, wide-column, graph).
              </BulletItem>
              <BulletItem title="NoSQL Weaknesses">
                Limited query flexibility, eventual consistency models require application-level handling, data modeling
                is access-pattern driven (get it wrong and you pay).
              </BulletItem>
            </ul>
            <InterviewTip>
              Never say &quot;SQL does not scale.&quot; Say &quot;SQL scaling requires sharding which adds complexity.
              NoSQL trades query flexibility for built-in horizontal scaling.&quot; Show you understand nuance.
            </InterviewTip>
          </Subsection>

          <Subsection title="CAP Theorem - Practical Understanding" color="green">
            <p className="text-sm text-muted-foreground mb-4">
              In a distributed system experiencing a network partition, you must choose between Consistency and Availability.
              This is not a design choice - it is physics.
            </p>
            <ul className="space-y-1">
              <BulletItem title="CP Systems">
                Prioritize consistency. During partition, reject writes/reads to prevent inconsistent data. Examples:
                Zookeeper, etcd, HBase. Use for: configuration, leader election, inventory counts.
              </BulletItem>
              <BulletItem title="AP Systems">
                Prioritize availability. During partition, allow operations but accept potential inconsistency. Examples:
                Cassandra, DynamoDB. Use for: user sessions, activity feeds, metrics.
              </BulletItem>
              <BulletItem title="CA Myth">
                &quot;CA&quot; only exists in single-node systems. Any distributed system will have partitions (network is not
                reliable), so you must choose C or A during partitions.
              </BulletItem>
            </ul>
            <DeepDive title="PACELC - The Full Picture">
              CAP only describes behavior during partitions. PACELC extends: &quot;If Partition, choose A or C; Else
              (normal operation), choose Latency or Consistency.&quot; DynamoDB is PA/EL - available during partitions,
              low latency normally. Spanner is PC/EC - consistent always but higher latency.
            </DeepDive>
          </Subsection>

          <Subsection title="Database Sharding Strategies" color="green">
            <ul className="space-y-1">
              <BulletItem title="Range-based">
                Shard by ID range (1-1M on shard 1, 1M-2M on shard 2). Simple to understand. Problem: Hot spots if
                recent IDs are most active. Uneven shard sizes over time.
              </BulletItem>
              <BulletItem title="Hash-based">
                hash(key) mod N = shard number. Even distribution. Problem: Resharding is painful - adding shard N+1
                requires redistributing data from all shards.
              </BulletItem>
              <BulletItem title="Consistent Hashing">
                Keys map to positions on a ring. Each shard owns a range on the ring. Adding a shard only affects
                adjacent ranges. Used by Cassandra, DynamoDB.
              </BulletItem>
              <BulletItem title="Directory-based">
                Lookup service maps keys to shards. Maximum flexibility but adds latency and single point of failure.
              </BulletItem>
            </ul>
            <Pitfall>
              Cross-shard queries (JOINs, aggregations) become scatter-gather operations. A query hitting all 100 shards
              takes as long as the slowest shard. Design your shard key to keep related data together.
            </Pitfall>
          </Subsection>

          <Subsection title="Replication Patterns" color="green">
            <ul className="space-y-1">
              <BulletItem title="Leader-Follower (Primary-Replica)">
                Writes go to leader, replicated to followers. Followers serve reads. Simple, well-understood. Leader is
                bottleneck for writes. Failover required if leader dies.
              </BulletItem>
              <BulletItem title="Multi-Leader">
                Multiple nodes accept writes, sync with each other. Better write availability. Conflict resolution is
                hard - last-write-wins, vector clocks, or custom merge logic.
              </BulletItem>
              <BulletItem title="Leaderless (Quorum)">
                Any node accepts writes/reads. Quorum determines success. Write to W nodes, read from R nodes, ensure
                W + R &gt; N for consistency. Cassandra, DynamoDB.
              </BulletItem>
            </ul>
            <DeepDive title="Replication Lag Reality">
              Async replication has lag - milliseconds to seconds. Reading from replica might return stale data.
              Solutions: (1) Read-your-writes guarantee by routing user to same node, (2) Monotonic reads by pinning
              user to a replica, (3) Strong consistency for critical reads (hits latency).
            </DeepDive>
          </Subsection>
        </div>

        {/* 2.3 Caching Architecture */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
              2.3
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Caching Architecture</h2>
              <p className="text-sm text-muted-foreground">Reducing latency and load through strategic caching</p>
            </div>
          </div>

          <Subsection title="Cache Layers - Full Stack" color="green">
            <p className="text-sm text-muted-foreground mb-4">
              Effective caching uses multiple layers, each serving different purposes:
            </p>
            <ul className="space-y-1">
              <BulletItem title="Browser Cache">
                HTTP cache headers (Cache-Control, ETag). Zero latency for repeat requests. Limited by user device storage.
              </BulletItem>
              <BulletItem title="CDN Cache">
                Edge servers worldwide. Caches static assets and sometimes dynamic content. Reduces origin load, improves
                global latency.
              </BulletItem>
              <BulletItem title="API Gateway Cache">
                Cache entire API responses by URL/params. Good for read-heavy public APIs. Be careful with user-specific
                data.
              </BulletItem>
              <BulletItem title="Application Cache">
                Local (in-memory, same process) or Remote (Redis, Memcached). Local is faster but not shared. Remote is
                shared but has network latency.
              </BulletItem>
              <BulletItem title="Database Cache">
                Query cache (MySQL), buffer pool. Let the database optimize, but do not rely solely on it.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Caching Patterns" color="green">
            <ul className="space-y-1">
              <BulletItem title="Cache-Aside (Lazy Loading)">
                App checks cache first. Miss? Fetch from DB, store in cache, return. Simple, works for reads. Cache can
                have stale data until TTL or explicit invalidation.
              </BulletItem>
              <BulletItem title="Write-Through">
                App writes to cache, cache writes to DB synchronously. Data always consistent. Higher write latency.
              </BulletItem>
              <BulletItem title="Write-Behind (Write-Back)">
                App writes to cache, cache writes to DB asynchronously. Fast writes. Risk of data loss if cache fails
                before persistence.
              </BulletItem>
              <BulletItem title="Write-Around">
                Write directly to DB, invalidate/skip cache. Useful when written data is not immediately read. Prevents
                cache pollution.
              </BulletItem>
            </ul>
            <InterviewTip>
              Match the pattern to the access pattern. Read-heavy with tolerance for staleness? Cache-aside with TTL.
              Read-after-write required? Write-through. High write volume? Write-behind with durability guarantees.
            </InterviewTip>
          </Subsection>

          <Subsection title="Cache Invalidation Strategies" color="green">
            <p className="text-sm text-muted-foreground mb-4">
              &quot;There are only two hard things in Computer Science: cache invalidation and naming things.&quot; - Phil Karlton
            </p>
            <ul className="space-y-1">
              <BulletItem title="TTL (Time-To-Live)">
                Simple, bounded staleness. Good enough for many use cases. Set based on data change frequency and
                staleness tolerance.
              </BulletItem>
              <BulletItem title="Event-Driven Invalidation">
                Publish cache-invalidation events on data change. Immediate consistency. Requires event infrastructure.
                What if invalidation event is lost?
              </BulletItem>
              <BulletItem title="Version-Based">
                Include version in cache key. New version = new key. Old entries eventually expire. No explicit
                invalidation needed. Cache space grows temporarily.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Cache Problems - The Gotchas" color="green">
            <ul className="space-y-1">
              <BulletItem title="Thundering Herd">
                Popular item expires, 1000 requests simultaneously hit DB. Solutions: Lock and load (one request
                fetches, others wait), probabilistic early expiration, background refresh.
              </BulletItem>
              <BulletItem title="Cache Penetration">
                Requests for non-existent data always miss cache, hit DB. Solutions: Cache negative results with short
                TTL, Bloom filter to reject impossible keys.
              </BulletItem>
              <BulletItem title="Cache Avalanche">
                Many keys expire simultaneously, overwhelming DB. Solutions: Add jitter to TTL, pre-warm cache before
                expiration waves.
              </BulletItem>
              <BulletItem title="Hot Keys">
                Single key receives disproportionate traffic. Solutions: Local caching, key replication across cache
                nodes, rate limiting.
              </BulletItem>
            </ul>
            <Pitfall>
              Do not cache user-specific data in shared caches without proper key namespacing. User A seeing User B
              data is a security incident, not just a bug.
            </Pitfall>
          </Subsection>
        </div>

        {/* 2.4 Migration Patterns */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
              2.4
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Migration Patterns</h2>
              <p className="text-sm text-muted-foreground">Moving massive systems without breaking them</p>
            </div>
          </div>

          <Subsection title="Strangler Fig Pattern" color="green">
            <p className="text-sm text-muted-foreground mb-4">
              Named after the strangler fig tree that gradually envelops and replaces its host.
            </p>
            <ul className="space-y-1">
              <BulletItem title="Mechanism">
                Place a facade in front of the legacy system. Gradually route traffic for specific features to new
                implementations. Legacy system shrinks as new system grows.
              </BulletItem>
              <BulletItem title="Implementation">
                API gateway or reverse proxy decides routing. Feature flags control traffic split. Start with
                low-risk, low-traffic features.
              </BulletItem>
              <BulletItem title="Exit Criteria">
                When all traffic is routed to new system and legacy has been validated as unused for sufficient time
                (weeks, not days), decommission legacy.
              </BulletItem>
            </ul>
            <DeepDive title="TPM Orchestration">
              As TPM, you track: (1) Migration percentage by feature, (2) Error rates new vs. legacy, (3) Dependencies
              between migrated and unmigrated features, (4) Timeline pressure vs. risk. Create a migration scorecard
              reviewed weekly with stakeholders.
            </DeepDive>
          </Subsection>

          <Subsection title="Dual-Write / Dual-Read Pattern" color="green">
            <p className="text-sm text-muted-foreground mb-4">
              For data store migrations where you cannot afford downtime.
            </p>
            <CodeBlock>
{`Phase 1: Dual-Write
└── Writes go to OLD and NEW
└── Reads come from OLD only

Phase 2: Backfill Historical Data
└── Migrate existing data from OLD to NEW
└── Verify parity

Phase 3: Shadow Reads
└── Reads go to both, compare results
└── Log discrepancies, fix issues

Phase 4: Switch Reads
└── Reads come from NEW
└── Writes still go to both

Phase 5: Decommission
└── Stop writes to OLD
└── Validate, then delete OLD`}
            </CodeBlock>
            <Pitfall>
              Dual-write is not atomic. If write to OLD succeeds and write to NEW fails, you have inconsistency.
              Solutions: Outbox pattern, change data capture (CDC), or accepting small inconsistency windows with
              reconciliation.
            </Pitfall>
          </Subsection>

          <Subsection title="Change Data Capture (CDC)" color="green">
            <ul className="space-y-1">
              <BulletItem title="Concept">
                Capture changes from database transaction log (binlog, WAL) and stream to other systems. Changes are
                in order, guaranteed, low overhead.
              </BulletItem>
              <BulletItem title="Tools">
                Debezium (open source), AWS DMS, Oracle GoldenGate. Connect to Kafka or directly to target.
              </BulletItem>
              <BulletItem title="Use Cases">
                Database migration, cache invalidation, building read replicas, event sourcing reconstruction,
                analytics pipeline population.
              </BulletItem>
            </ul>
            <InterviewTip>
              CDC is often the answer to &quot;how do you keep X and Y in sync without dual-write complexity?&quot;
              Mention it when discussing data consistency across systems.
            </InterviewTip>
          </Subsection>

          <Subsection title="Deployment Strategies Comparison" color="green">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-muted-foreground mb-4">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-foreground">Strategy</th>
                    <th className="text-left py-2 text-foreground">Rollback Speed</th>
                    <th className="text-left py-2 text-foreground">Resource Cost</th>
                    <th className="text-left py-2 text-foreground">Blast Radius</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Rolling</td>
                    <td className="py-2">Minutes</td>
                    <td className="py-2">Low</td>
                    <td className="py-2">Gradual</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Blue/Green</td>
                    <td className="py-2">Seconds</td>
                    <td className="py-2">2x during deploy</td>
                    <td className="py-2">100%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Canary</td>
                    <td className="py-2">Seconds</td>
                    <td className="py-2">Low</td>
                    <td className="py-2">Controlled (1-10%)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Shadow</td>
                    <td className="py-2">N/A (no production)</td>
                    <td className="py-2">2x (full duplicate)</td>
                    <td className="py-2">0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Subsection>
        </div>

        {/* 2.5 Communication Patterns */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
              2.5
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Communication Patterns</h2>
              <p className="text-sm text-muted-foreground">How services talk to each other</p>
            </div>
          </div>

          <Subsection title="Synchronous: REST vs. gRPC vs. GraphQL" color="green">
            <ul className="space-y-1">
              <BulletItem title="REST">
                HTTP-based, resource-oriented, human-readable (JSON). Universal support, easy debugging. Overhead
                from HTTP headers, text parsing. Best for: Public APIs, browser clients.
              </BulletItem>
              <BulletItem title="gRPC">
                Binary protocol (Protocol Buffers), HTTP/2 multiplexing, bi-directional streaming. 10x faster than
                REST for internal calls. Requires code generation. Best for: Service-to-service, high-volume internal traffic.
              </BulletItem>
              <BulletItem title="GraphQL">
                Client specifies exact data shape. Reduces over-fetching and under-fetching. Complexity in server
                implementation, caching is harder. Best for: Diverse clients with varying data needs.
              </BulletItem>
            </ul>
            <DeepDive title="The gRPC Decision">
              At Mag7 scale, converting REST to gRPC between internal services can save significant CPU and bandwidth.
              The overhead of JSON parsing at 1M QPS is substantial. But gRPC debugging is harder - binary format needs
              tooling. Trade-off: efficiency vs. operability.
            </DeepDive>
          </Subsection>

          <Subsection title="Asynchronous: Queues vs. Pub/Sub" color="green">
            <ul className="space-y-1">
              <BulletItem title="Message Queues (Point-to-Point)">
                One producer, one consumer (or competing consumers). Message consumed once. RabbitMQ, SQS, ActiveMQ.
                Use for: Task distribution, work queues, request buffering.
              </BulletItem>
              <BulletItem title="Pub/Sub (Broadcast)">
                One publisher, many subscribers. Each subscriber gets every message. Kafka, SNS, Google Pub/Sub.
                Use for: Event notification, log aggregation, real-time feeds.
              </BulletItem>
              <BulletItem title="Event Streaming (Kafka)">
                Pub/Sub with persistence. Messages retained for configurable time. Consumers can replay from any offset.
                Use for: Event sourcing, analytics pipelines, data integration.
              </BulletItem>
            </ul>
            <Pitfall>
              Async introduces complexity: message ordering, duplicate delivery, poison messages, dead letter queues.
              Do not use async &quot;because microservices.&quot; Use it when you need decoupling, buffering, or broadcast.
            </Pitfall>
          </Subsection>

          <Subsection title="Real-Time: Polling vs. WebSockets" color="green">
            <ul className="space-y-1">
              <BulletItem title="Short Polling">
                Client requests every N seconds. Simple but wastes resources when nothing changed. OK for low-frequency
                updates where simplicity trumps efficiency.
              </BulletItem>
              <BulletItem title="Long Polling">
                Client request held open until data available or timeout. Reduces requests vs. short polling. Still
                HTTP overhead on reconnect. Good middle ground.
              </BulletItem>
              <BulletItem title="WebSockets">
                Persistent bidirectional connection. True real-time push. Requires connection state management,
                complicates horizontal scaling (sticky sessions or connection routing). Use for: Chat, gaming, live collaboration.
              </BulletItem>
              <BulletItem title="Server-Sent Events (SSE)">
                Server-to-client push only. Simpler than WebSockets, HTTP-based, auto-reconnect. Use when you only
                need server push without client-to-server real-time.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Idempotency - Critical Concept" color="green">
            <p className="text-sm text-muted-foreground mb-4">
              An operation is idempotent if executing it multiple times has the same effect as executing it once.
              Essential for reliability in distributed systems.
            </p>
            <ul className="space-y-1">
              <BulletItem title="Why It Matters">
                Network failures cause retries. Without idempotency, retry = duplicate action. Customer charged twice,
                order placed twice, etc.
              </BulletItem>
              <BulletItem title="Implementation">
                Client provides idempotency key (usually UUID). Server checks if key was seen before. If yes, return
                cached result. If no, execute and store result.
              </BulletItem>
              <BulletItem title="Storage">
                Idempotency keys must be stored durably. TTL based on retry window (24-48 hours typical). Redis with
                persistence or dedicated database.
              </BulletItem>
            </ul>
            <CodeBlock>
{`POST /payments
Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000

First request: Process payment, store result with key, return success
Retry request: Find key, return stored result (no reprocessing)`}
            </CodeBlock>
          </Subsection>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* PART 3: ADVANCED SYSTEMS, AI & OBSERVABILITY */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}

      <div id="part-3" className="mb-12 scroll-mt-4">
        <div className="flex items-center gap-3 mb-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
          <div className="w-12 h-12 rounded-lg bg-purple-500 text-white flex items-center justify-center text-xl font-bold">
            III
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Part III: Advanced Systems, AI &amp; Observability</h2>
            <p className="text-base text-muted-foreground">Differentiation topics for Principal TPM interviews</p>
          </div>
        </div>

        {/* 3.1 Distributed Consensus */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              3.1
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Distributed Consensus</h2>
              <p className="text-sm text-muted-foreground">How distributed systems agree on truth</p>
            </div>
          </div>

          <Subsection title="The Consensus Problem" color="purple">
            <p className="text-sm text-muted-foreground mb-4">
              In a distributed system, multiple nodes must agree on a value even when some nodes fail or messages are
              lost. This is harder than it sounds.
            </p>
            <ul className="space-y-1">
              <BulletItem title="FLP Impossibility">
                Proven in 1985: No deterministic consensus algorithm can guarantee termination in an asynchronous
                system with even one faulty process. Practical systems work around this with timeouts (bounded async).
              </BulletItem>
              <BulletItem title="Byzantine vs. Crash Failures">
                Crash: Node stops responding (easier to handle). Byzantine: Node behaves arbitrarily, possibly
                maliciously (much harder). Most systems assume crash failures only.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Paxos and Raft" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Paxos">
                The original consensus algorithm (Lamport, 1989). Notoriously difficult to understand and implement.
                Multi-Paxos used for replicated state machines.
              </BulletItem>
              <BulletItem title="Raft">
                Designed for understandability (2014). Same guarantees as Paxos, easier to implement. Used in etcd,
                Consul, CockroachDB. Leader election + log replication.
              </BulletItem>
              <BulletItem title="Quorum">
                Both require majority (quorum) to make progress. 3 nodes tolerate 1 failure. 5 nodes tolerate 2.
                More nodes = more fault tolerance but higher latency.
              </BulletItem>
            </ul>
            <DeepDive title="The Cross-Region Penalty">
              Consensus requires round-trips between nodes. With nodes in US-East, US-West, and EU, every write
              must wait for at least 2 of 3 to acknowledge. That is ~100ms+ latency minimum. This is why global
              strong consistency is expensive. Google Spanner uses atomic clocks to reduce this; others accept
              eventual consistency.
            </DeepDive>
          </Subsection>

          <Subsection title="Leader Election" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Purpose">
                Many systems designate one node as leader for writes to avoid conflicts. Followers replicate.
                If leader fails, new election needed.
              </BulletItem>
              <BulletItem title="Split-Brain">
                Network partition causes both sides to elect leaders. Two leaders accept conflicting writes.
                Prevention: Fencing tokens, quorum-based lease renewal.
              </BulletItem>
              <BulletItem title="Implementation">
                Often delegated to Zookeeper or etcd. They handle the consensus complexity so your app does not.
              </BulletItem>
            </ul>
            <Pitfall>
              Do not implement your own leader election unless you truly understand the failure modes. Use established
              tools. The edge cases will bite you.
            </Pitfall>
          </Subsection>
        </div>

        {/* 3.2 Global Architecture */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              3.2
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Global Architecture</h2>
              <p className="text-sm text-muted-foreground">Building for worldwide scale</p>
            </div>
          </div>

          <Subsection title="Multi-Region Patterns" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Active-Active">
                All regions serve traffic. Data replicated between regions. Complexity: Conflict resolution, write
                routing. Benefit: Load distributed, any region can absorb others on failure.
              </BulletItem>
              <BulletItem title="Active-Passive">
                Primary region serves traffic. Secondary on standby for failover. Simpler but: Failover is not instant
                (DNS TTL, connection draining), secondary may be cold.
              </BulletItem>
              <BulletItem title="Follow-the-Sun">
                Different regions primary at different times. Avoids cross-region latency during business hours.
                Data migration or eventual consistency between shifts.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Latency Physics" color="purple">
            <p className="text-sm text-muted-foreground mb-4">
              Speed of light is ~200km/ms in fiber. You cannot beat physics.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-muted-foreground mb-4">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-foreground">Route</th>
                    <th className="text-left py-2 text-foreground">Distance</th>
                    <th className="text-left py-2 text-foreground">RTT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Same AZ</td>
                    <td className="py-2">&lt;1ms</td>
                    <td className="py-2">&lt;1ms</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Same Region (cross-AZ)</td>
                    <td className="py-2">~2-3ms</td>
                    <td className="py-2">~2-3ms</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">US East to US West</td>
                    <td className="py-2">~4,000km</td>
                    <td className="py-2">~60-80ms</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">US to Europe</td>
                    <td className="py-2">~6,000km</td>
                    <td className="py-2">~80-120ms</td>
                  </tr>
                  <tr>
                    <td className="py-2">US to Asia-Pacific</td>
                    <td className="py-2">~12,000km</td>
                    <td className="py-2">~150-200ms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              These numbers constrain architecture. Synchronous replication from US to Singapore adds 150ms to every
              write. Accept that or go eventual consistency.
            </p>
          </Subsection>

          <Subsection title="Geo-Routing" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Geo-DNS">
                DNS resolver location determines which datacenter IP is returned. Route 53 Geolocation, CloudFlare Geo
                Steering. Limitation: DNS caching can route users to wrong region.
              </BulletItem>
              <BulletItem title="Anycast">
                Same IP announced from multiple locations. BGP routing sends users to nearest. Used by CDNs, DNS providers.
                Fast failover as routing updates in seconds.
              </BulletItem>
              <BulletItem title="Application-Level">
                Load balancer or API gateway makes routing decision based on user metadata, latency probes, or
                explicit region affinity.
              </BulletItem>
            </ul>
            <InterviewTip>
              When asked &quot;how do you ensure users hit the nearest datacenter?&quot; - start with Geo-DNS, mention
              Anycast for edge services, and note that application-level routing gives most control but adds complexity.
            </InterviewTip>
          </Subsection>
        </div>

        {/* 3.3 Resiliency Patterns */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              3.3
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Resiliency Patterns</h2>
              <p className="text-sm text-muted-foreground">Building systems that survive failures</p>
            </div>
          </div>

          <Subsection title="Circuit Breaker" color="purple">
            <p className="text-sm text-muted-foreground mb-4">
              Like an electrical circuit breaker - opens when downstream service fails, preventing cascade failures.
            </p>
            <CodeBlock>
{`States:
CLOSED → Normal operation, requests pass through
OPEN   → Downstream failed, requests fail fast (don't even try)
HALF-OPEN → Testing if downstream recovered

Transitions:
CLOSED → OPEN: Failure rate exceeds threshold (e.g., >50% in last 10 requests)
OPEN → HALF-OPEN: After timeout (e.g., 30 seconds)
HALF-OPEN → CLOSED: Probe request succeeds
HALF-OPEN → OPEN: Probe request fails`}
            </CodeBlock>
            <ul className="space-y-1">
              <BulletItem title="Implementation">
                Hystrix (Netflix, deprecated), resilience4j (Java), Polly (.NET), custom. Service meshes (Istio) provide
                this at infrastructure level.
              </BulletItem>
              <BulletItem title="Tuning">
                Thresholds and timeouts are critical. Too sensitive = flapping. Too lenient = slow failure detection.
                Tune based on normal failure rates.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Bulkhead Pattern" color="purple">
            <p className="text-sm text-muted-foreground mb-4">
              Named after ship bulkheads that contain flooding. Isolate failures to prevent ship-wide sinking.
            </p>
            <ul className="space-y-1">
              <BulletItem title="Thread Pool Isolation">
                Dedicate separate thread pools per dependency. Dependency A exhausting threads does not starve
                dependency B.
              </BulletItem>
              <BulletItem title="Connection Pool Isolation">
                Separate connection pools per downstream service. Database connection exhaustion does not affect
                cache connections.
              </BulletItem>
              <BulletItem title="Service Isolation">
                Critical services on separate clusters/infrastructure. Payment processing separate from
                recommendation engine.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Retry Strategies" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Immediate Retry">
                Retry once immediately. Good for transient network blips. But if service is overloaded, immediate
                retry makes it worse.
              </BulletItem>
              <BulletItem title="Exponential Backoff">
                Wait 1s, 2s, 4s, 8s... between retries. Gives service time to recover. Max retries and max wait
                prevent infinite retry.
              </BulletItem>
              <BulletItem title="Jitter">
                Add randomness to backoff. Without jitter, all clients retry at same time (thundering herd). With
                jitter: 1s ± 500ms.
              </BulletItem>
            </ul>
            <CodeBlock>
{`def retry_with_backoff(max_retries=5, base_delay=1.0):
    for attempt in range(max_retries):
        try:
            return make_request()
        except TransientError:
            if attempt == max_retries - 1:
                raise
            delay = base_delay * (2 ** attempt)  # Exponential
            jitter = random.uniform(0, delay * 0.5)  # Up to 50% jitter
            time.sleep(delay + jitter)`}
            </CodeBlock>
          </Subsection>

          <Subsection title="Backpressure" color="purple">
            <p className="text-sm text-muted-foreground mb-4">
              When downstream cannot keep up, signal upstream to slow down rather than buffer infinitely or drop.
            </p>
            <ul className="space-y-1">
              <BulletItem title="Reactive Streams">
                Consumer signals demand (request(N)). Producer only sends N items. TCP flow control works similarly.
              </BulletItem>
              <BulletItem title="Rate Limiting">
                Reject excess requests with 429 (Too Many Requests). Clear signal to caller to slow down.
              </BulletItem>
              <BulletItem title="Load Shedding">
                Intentionally drop low-priority requests under load. Better to serve 80% of requests well than 100%
                poorly.
              </BulletItem>
            </ul>
            <Pitfall>
              Unbounded queues are a reliability anti-pattern. If producer is faster than consumer, queue grows until
              memory exhaustion. Always set queue size limits and handle overflow.
            </Pitfall>
          </Subsection>

          <Subsection title="Chaos Engineering" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Concept">
                Proactively inject failures to discover weaknesses before production incidents reveal them. Netflix
                Chaos Monkey pioneered this.
              </BulletItem>
              <BulletItem title="Types of Chaos">
                Instance termination, network latency injection, DNS failure, region evacuation, clock skew, disk
                filling. Start small, in non-production.
              </BulletItem>
              <BulletItem title="Game Days">
                Scheduled chaos exercises with engineering teams ready. Run failure scenario, observe behavior, fix
                issues discovered. Build muscle memory.
              </BulletItem>
            </ul>
            <InterviewTip>
              Mentioning chaos engineering shows you think about reliability proactively, not just reactively. Describe
              how you would introduce it: start with steady-state hypothesis, inject small failure, measure impact,
              improve, repeat.
            </InterviewTip>
          </Subsection>
        </div>

        {/* 3.4 AI/ML Infrastructure */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              3.4
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">AI/ML Infrastructure</h2>
              <p className="text-sm text-muted-foreground">Understanding modern AI systems architecture</p>
            </div>
          </div>

          <Subsection title="Training vs. Inference" color="purple">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-muted-foreground mb-4">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-foreground">Aspect</th>
                    <th className="text-left py-2 text-foreground">Training</th>
                    <th className="text-left py-2 text-foreground">Inference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Objective</td>
                    <td className="py-2">Maximize throughput (examples/sec)</td>
                    <td className="py-2">Minimize latency (ms/request)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Batching</td>
                    <td className="py-2">Large batches (hundreds)</td>
                    <td className="py-2">Small batches (1-8)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Hardware</td>
                    <td className="py-2">GPU clusters, TPUs</td>
                    <td className="py-2">GPUs, edge devices, custom ASICs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2">Scale Pattern</td>
                    <td className="py-2">Data parallelism, model parallelism</td>
                    <td className="py-2">Horizontal scaling behind LB</td>
                  </tr>
                  <tr>
                    <td className="py-2">Cost Profile</td>
                    <td className="py-2">High compute, periodic</td>
                    <td className="py-2">Lower per-request, continuous</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Subsection>

          <Subsection title="Vector Databases and RAG" color="purple">
            <p className="text-sm text-muted-foreground mb-4">
              Retrieval-Augmented Generation (RAG) combines LLMs with external knowledge retrieval.
            </p>
            <ul className="space-y-1">
              <BulletItem title="Embedding">
                Convert text/images to dense vectors (e.g., 768 or 1536 dimensions). Similar content = similar vectors
                (cosine similarity).
              </BulletItem>
              <BulletItem title="Vector Database">
                Specialized DB for approximate nearest neighbor (ANN) search. Pinecone, Weaviate, Qdrant, Milvus,
                pgvector. Index structures: HNSW, IVF.
              </BulletItem>
              <BulletItem title="RAG Pipeline">
                Query → Embed query → Search vector DB for relevant documents → Concatenate documents with query →
                Send to LLM → Generate response with context.
              </BulletItem>
            </ul>
            <DeepDive title="Why RAG Matters">
              LLMs have knowledge cutoff dates and hallucinate. RAG grounds responses in your actual data. For enterprise
              applications (support, search, Q&A), RAG is often the architecture. Understanding chunking strategies,
              embedding model selection, and retrieval quality metrics is increasingly relevant.
            </DeepDive>
          </Subsection>

          <Subsection title="LLM Serving Considerations" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Latency Profile">
                LLM inference is slow (seconds, not milliseconds). Streaming responses improves perceived latency.
                First token time matters.
              </BulletItem>
              <BulletItem title="GPU Memory">
                Large models require multiple GPUs. 70B parameter model needs ~140GB at fp16. Model parallelism splits
                across devices.
              </BulletItem>
              <BulletItem title="Batching">
                Continuous batching combines requests for efficiency. But batch size limited by memory and latency
                targets.
              </BulletItem>
              <BulletItem title="Caching">
                KV-cache stores attention state. Can be reused for follow-up queries with same prefix. Prompt caching
                reduces cost for repeated contexts.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="MLOps Pipeline" color="purple">
            <CodeBlock>
{`Data Ingestion → Feature Engineering → Training → Validation → Deployment → Monitoring
     ↑                                                                           |
     └─────────────────── Retraining Trigger ──────────────────────────────────┘

Key Components:
- Feature Store: Consistent features for training and inference
- Model Registry: Version control for models (MLflow, Weights & Biases)
- A/B Testing: Gradual rollout of new models
- Monitoring: Data drift detection, model performance degradation`}
            </CodeBlock>
          </Subsection>
        </div>

        {/* 3.5 Observability */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              3.5
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Observability</h2>
              <p className="text-sm text-muted-foreground">Understanding system behavior through data</p>
            </div>
          </div>

          <Subsection title="The Three Pillars - Deep Dive" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Metrics">
                Numeric time-series data. Aggregatable (sum, average, percentiles). Prometheus, DataDog, CloudWatch.
                Good for: Dashboards, alerting, capacity planning. Limitations: No context on individual requests.
              </BulletItem>
              <BulletItem title="Logs">
                Discrete events with context. Structured (JSON) vs. unstructured (text). ELK stack, Splunk, CloudWatch
                Logs. Good for: Debugging, audit trails, forensics. Limitations: Expensive at scale, hard to correlate.
              </BulletItem>
              <BulletItem title="Traces">
                Request flow across services. Jaeger, Zipkin, AWS X-Ray. Spans represent operations, linked by trace
                ID. Good for: Finding latency bottlenecks, understanding dependencies. Limitations: Sampling needed at
                scale, instrumentation overhead.
              </BulletItem>
            </ul>
            <DeepDive title="Correlation is Key">
              Individual pillars are useful but correlation is powerful. A spike in error metrics → drill into logs for
              that time window → find trace IDs in error logs → view full trace to find failing service. Tooling that
              links these (e.g., Grafana to Loki to Tempo) dramatically speeds debugging.
            </DeepDive>
          </Subsection>

          <Subsection title="The Golden Signals (Google SRE)" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Latency">
                Time to service a request. Track p50, p95, p99. Distinguish successful vs. failed request latency
                (failed requests might be fast).
              </BulletItem>
              <BulletItem title="Traffic">
                Demand on your system. Requests/second, transactions/minute. Understand normal patterns to detect
                anomalies.
              </BulletItem>
              <BulletItem title="Errors">
                Rate of failed requests. HTTP 5xx, application errors, timeout errors. Track by error type.
              </BulletItem>
              <BulletItem title="Saturation">
                How &quot;full&quot; your service is. CPU, memory, disk, connection pool utilization. Predicts future problems
                before they cause errors.
              </BulletItem>
            </ul>
            <InterviewTip>
              If asked &quot;how would you monitor this system?&quot; - start with the golden signals. Then add domain-specific
              metrics. This shows you have a framework, not random metric selection.
            </InterviewTip>
          </Subsection>

          <Subsection title="Alerting Best Practices" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Symptom-Based">
                Alert on user-facing symptoms (errors, latency), not causes (CPU high). High CPU that does not affect
                users is not page-worthy.
              </BulletItem>
              <BulletItem title="Actionable">
                Every alert should have a clear action. If you cannot do anything at 3 AM, it should not page you at
                3 AM. Tune or delete noisy alerts.
              </BulletItem>
              <BulletItem title="Leading vs. Lagging">
                Lagging: Errors happening now. Leading: Saturation approaching limits. Lead indicators give time to
                react before impact.
              </BulletItem>
              <BulletItem title="Error Budget Alerts">
                Alert when burn rate suggests you will exhaust error budget before month end. This ties reliability
                to business commitment.
              </BulletItem>
            </ul>
            <Pitfall>
              Alert fatigue is real. If on-call ignores 90% of alerts as noise, they will miss the real ones. Ruthlessly
              prune alerts. Target: every page should be investigated, most should result in action.
            </Pitfall>
          </Subsection>

          <Subsection title="Distributed Tracing Architecture" color="purple">
            <CodeBlock>
{`Request arrives → Generate trace ID (if none)
                → Create root span
                → Propagate trace ID to downstream calls (headers)
                → Each service creates child spans
                → Spans sent to collector (async)
                → Collector aggregates, stores
                → Query UI reconstructs request flow

Sampling Strategies:
- Head-based: Decide at ingress whether to trace (random %)
- Tail-based: Decide after request completes (trace all errors/slow requests)
- Adaptive: Adjust sampling rate based on traffic/cost`}
            </CodeBlock>
          </Subsection>
        </div>

        {/* 3.6 Security Architecture */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              3.6
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Security Architecture</h2>
              <p className="text-sm text-muted-foreground">Defense in depth for distributed systems</p>
            </div>
          </div>

          <Subsection title="Authentication vs. Authorization" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Authentication (AuthN)">
                Verifying identity. &quot;Who are you?&quot; Methods: Password, MFA, SSO, certificates, API keys. Standard
                protocols: OAuth 2.0 (authorization framework often used for auth), OIDC (authentication layer on OAuth),
                SAML (enterprise SSO).
              </BulletItem>
              <BulletItem title="Authorization (AuthZ)">
                Verifying permissions. &quot;What can you do?&quot; Models: RBAC (Role-Based), ABAC (Attribute-Based), ReBAC
                (Relationship-Based, e.g., Google Zanzibar). Evaluate at API gateway or within service.
              </BulletItem>
              <BulletItem title="JWT (JSON Web Tokens)">
                Self-contained tokens with claims. Signed (integrity) or encrypted (confidentiality). Stateless
                verification. Revocation is hard (use short expiry + refresh tokens).
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Zero Trust Architecture" color="purple">
            <p className="text-sm text-muted-foreground mb-4">
              &quot;Never trust, always verify.&quot; Assumes breach, verifies every request regardless of network location.
            </p>
            <ul className="space-y-1">
              <BulletItem title="Principles">
                Verify explicitly (every request authenticated and authorized). Least privilege access. Assume breach
                (segment networks, limit blast radius).
              </BulletItem>
              <BulletItem title="Implementation">
                Service mesh with mTLS (mutual TLS). Service identity certificates. Fine-grained authorization policies.
                No implicit trust based on network location.
              </BulletItem>
              <BulletItem title="BeyondCorp (Google)">
                Google internal implementation. All services treated as internet-facing. Access based on user/device
                trust, not network.
              </BulletItem>
            </ul>
          </Subsection>

          <Subsection title="Encryption Strategy" color="purple">
            <ul className="space-y-1">
              <BulletItem title="In Transit">
                TLS everywhere. Internal services too (mTLS). Certificate management is critical - rotation, revocation,
                chain of trust.
              </BulletItem>
              <BulletItem title="At Rest">
                Encrypt all persistent data. Disk-level (transparent), database-level (column/field), application-level
                (before storage). Key management is the hard part.
              </BulletItem>
              <BulletItem title="Key Management">
                HSMs for root keys. KMS (AWS KMS, GCP KMS, HashiCorp Vault) for key hierarchy. Key rotation without
                downtime. Audit access to keys.
              </BulletItem>
            </ul>
            <DeepDive title="Envelope Encryption">
              Do not encrypt data directly with master key. Use envelope encryption: Master Key encrypts Data Encryption
              Key (DEK). DEK encrypts data. Store encrypted DEK with data. This allows key rotation without re-encrypting
              all data - just re-encrypt the DEKs.
            </DeepDive>
          </Subsection>

          <Subsection title="API Security" color="purple">
            <ul className="space-y-1">
              <BulletItem title="Rate Limiting">
                Prevent abuse and DoS. Per-user, per-IP, per-endpoint limits. 429 response with Retry-After header.
              </BulletItem>
              <BulletItem title="Input Validation">
                Validate and sanitize all input. Prevent injection (SQL, NoSQL, command, XSS). Use parameterized queries,
                escape output.
              </BulletItem>
              <BulletItem title="API Gateway">
                Centralized enforcement of authentication, rate limiting, logging. AWS API Gateway, Kong, Apigee.
              </BulletItem>
              <BulletItem title="Secrets Management">
                Never hardcode secrets. Use secrets manager (Vault, AWS Secrets Manager). Rotate credentials regularly.
                Audit secret access.
              </BulletItem>
            </ul>
          </Subsection>
        </div>
      </div>

      {/* Final Summary */}
      <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
        <h2 className="text-xl font-bold text-foreground mb-4">Principal TPM Mindset Summary</h2>
        <ul className="space-y-2">
          <BulletItem>
            <strong>Trade-offs over absolutes.</strong> There is rarely a &quot;best&quot; answer. Articulate the trade-offs.
            &quot;We chose X accepting Y because Z.&quot;
          </BulletItem>
          <BulletItem>
            <strong>Business context always.</strong> Technical decisions have cost, risk, and timeline implications.
            Connect to business outcomes.
          </BulletItem>
          <BulletItem>
            <strong>Quantify when possible.</strong> &quot;Improves latency&quot; is weak. &quot;Reduces p99 from 500ms to 50ms, improving
            conversion by estimated 2%&quot; is strong.
          </BulletItem>
          <BulletItem>
            <strong>Failure is the default.</strong> Design for failure. What happens when this component fails? What is
            the blast radius? How do we detect and recover?
          </BulletItem>
          <BulletItem>
            <strong>Depth shows expertise.</strong> Anyone can say &quot;use caching.&quot; Discussing cache invalidation
            strategies, thundering herd mitigation, and cache-aside vs. write-through shows mastery.
          </BulletItem>
        </ul>
      </div>

      {/* Target Companies */}
      <div className="p-6 bg-muted/30 rounded-xl border border-border">
        <div className="text-center">
          <div className="text-sm font-semibold text-muted-foreground mb-2">Target: Mag7</div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Google", "Meta", "Apple", "Amazon", "Microsoft", "Netflix", "Nvidia"].map((company) => (
              <span
                key={company}
                className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground border border-border"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">&#8592; {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">{nav.next.title} &#8594;</span>
          </Link>
        )}
      </div>
    </SystemDesignLayout>
  );
}
