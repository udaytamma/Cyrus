"use client";

/**
 * Practice Questions Part IV: Compliance, Governance & Risk
 * Q41-60: GDPR, PCI-DSS, SOC 2, Risk Quantification, Data Classification
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import { Question, SectionHeader, PartHeader, InstructionsBox } from "@/components/PracticeQuestionComponents";

export default function ComplianceGovernancePractice() {
  return (
    <SystemDesignLayout
      title="Practice: Compliance & Governance"
      description="GDPR, PCI-DSS, SOC 2, Risk Quantification"
      currentSection="practice"
    >
      <Link
        href="/nebula/system-design/practice"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Practice Questions
      </Link>

      <PartHeader
        partNumber="IV"
        title="Compliance, Governance & Risk"
        description="GDPR, PCI-DSS, SOC 2, Risk Quantification, Data Classification"
        questionRange="Q41-60"
        color="green"
      />

      <InstructionsBox />

      {/* Section: GDPR & Data Sovereignty */}
      <SectionHeader
        title="Compliance & Data Sovereignty (GDPR)"
        description="Data residency, right to erasure, breach notification, and portability"
        color="green"
      />

      <Question
        number={41}
        category="GDPR"
        question="We are expanding our US-based SaaS platform to Germany. The engineering team proposes a simple read-replica of our US database in the EU to improve latency. How do you evaluate this?"
        answer={
          <>
            <p className="mb-3">
              <strong>Block this proposal immediately</strong> due to GDPR Data Residency requirements.
            </p>
            <p className="mb-3">
              A read-replica implies data is still mastered or replicated from the US, which violates the
              &quot;sovereignty&quot; requirement for German citizens&apos; PII.
            </p>
            <p className="mb-3"><strong>The Correct Architecture:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Cell-Based Architecture</strong> or <strong>Geo-Sharding</strong> where German user
              data is pinned to the EU region and never leaves the jurisdiction.</li>
              <li>Region-specific KMS keys&mdash;the US system cannot physically access EU encryption keys.</li>
              <li>Unified control plane for non-PII configurations only.</li>
            </ul>
            <p>
              <strong>The Principal Action:</strong> Drive a design review to split the storage layer by region,
              ensuring data sovereignty while maintaining operational efficiency.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Sovereignty Nuance:</strong> The requirement is stricter than just &quot;low latency.&quot;
              A replica still means data crosses borders, which can trigger regulatory violations depending on
              data classification.
            </p>
            <p>
              <strong>The Cost Trade-off:</strong> You lose economies of scale&mdash;duplicate infrastructure
              stacks per region. This is the &quot;GDPR tax&quot; that must be factored into EU expansion plans.
            </p>
          </>
        }
      />

      <Question
        number={42}
        category="GDPR"
        question="A user executes a 'Right to Erasure' (GDPR Article 17) request. Our architecture has 50+ microservices. How do you ensure legal compliance without manual intervention?"
        answer={
          <>
            <p className="mb-3">
              <strong>Implement Event-Driven Erasure Orchestration.</strong> Manual deletion across 50 services
              is error-prone and doesn&apos;t scale.
            </p>
            <p className="mb-3"><strong>The Architecture:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>Create a central <strong>Privacy Service</strong> that publishes a USER_DELETION_REQUESTED event.</li>
              <li>Every microservice (Orders, Analytics, Logs) subscribes, deletes local data, and publishes
              a DELETION_COMPLETE acknowledgment.</li>
              <li>The Privacy Service tracks all acknowledgments and generates an audit trail.</li>
            </ul>
            <p className="mb-3"><strong>For Immutable Storage (Backups, Logs):</strong></p>
            <p>
              Mandate <strong>Crypto-Shredding</strong>. Since we cannot edit an S3 Glacier archive, delete the
              user&apos;s unique encryption key from KMS, rendering their archived data mathematically inaccessible.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Legal Equivalence:</strong> Crypto-Shredding satisfies the legal requirement of erasure
              even when physical deletion is impossible. The data still exists but is mathematically unreadable
              without the key.
            </p>
            <p>
              <strong>The Audit Trail:</strong> You need proof of deletion for regulators. The Privacy Service
              must generate compliance reports showing which services acknowledged, when, and what was deleted.
            </p>
          </>
        }
      />

      <Question
        number={43}
        category="GDPR"
        question="We discovered a data breach involving PII 48 hours ago. The engineering team is still debugging the root cause. What is your immediate move?"
        answer={
          <>
            <p className="mb-3">
              <strong>Trigger the Breach Notification Protocol immediately.</strong> Do not wait for root cause.
            </p>
            <p className="mb-3"><strong>The Legal Requirement:</strong></p>
            <p className="mb-3">
              GDPR requires notification to regulators within <strong>72 hours of awareness</strong>, not resolution.
              We&apos;re at 48 hours&mdash;24 hours remaining. Waiting for root cause puts us at risk of massive
              fines (4% of global revenue).
            </p>
            <p className="mb-3"><strong>The Parallel Work Streams:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Stream 1 (Engineering):</strong> Containment and investigation continues.</li>
              <li><strong>Stream 2 (TPM + Legal + Comms):</strong> Draft the notification based on what we know now.</li>
            </ul>
            <p className="mt-3">
              <strong>The Principal Rule:</strong> Notify first, investigate in parallel. You can update the
              notification as you learn more.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Clock Starts Early:</strong> The 72-hour countdown begins from &quot;awareness,&quot; not
              &quot;root cause identified.&quot; Many companies have faced fines for delayed notification even when
              they were actively investigating.
            </p>
            <p>
              <strong>The Cost Comparison:</strong> Missing the notification deadline can cost more than the
              breach itself. GDPR fines can reach &euro;20M or 4% of annual global revenue, whichever is higher.
            </p>
          </>
        }
      />

      <Question
        number={44}
        category="GDPR"
        question="Product Management wants a 'Download Your Data' feature for GDPR Portability. Engineers say it will kill database performance due to massive joins across 10 years of history. How do you solve this?"
        answer={
          <>
            <p className="mb-3">
              <strong>This is an architectural mismatch.</strong> Transactional databases (OLTP) are not designed
              for analytical data dumps.
            </p>
            <p className="mb-3"><strong>The Solution: Async Scatter-Gather Architecture</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>The request triggers a <strong>background job</strong>, not a synchronous query.</li>
              <li>Query <strong>read-replicas</strong> or the <strong>Data Lake</strong> (Snowflake/Redshift),
              not the primary OLTP database.</li>
              <li>Data is aggregated, zipped, and placed in a secure S3 bucket.</li>
              <li>User receives a <strong>pre-signed URL</strong> via email (time-bombed, MFA required).</li>
            </ul>
            <p>
              <strong>The Blast Radius Benefit:</strong> This isolates the heavy query away from live production
              traffic. User gets their data, production DB stays healthy.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Security Consideration:</strong> A &quot;Download My Data&quot; feature is an attack
              vector. If a hacker gains access and clicks the button, your system helpfully packages up the
              victim&apos;s entire history.
            </p>
            <p>
              <strong>The Mitigation:</strong> SAR (Subject Access Requests) must trigger Step-Up Authentication
              (MFA) and ideally a 24-hour delay with email notification so the real user can cancel if suspicious.
            </p>
          </>
        }
      />

      {/* Section: PCI-DSS & Payment Systems */}
      <SectionHeader
        title="PCI-DSS & Payment Systems"
        description="Tokenization, scope reduction, CDE isolation, and key management"
        color="amber"
      />

      <Question
        number={45}
        category="PCI-DSS"
        question="Our Marketing team wants to log the full HTTP request body to debug checkout conversion drops. This includes the credit card field. They say it's temporary. Do you approve?"
        answer={
          <>
            <p className="mb-3">
              <strong>Absolutely not.</strong> This would instantly bring our logging infrastructure into PCI Scope.
            </p>
            <p className="mb-3"><strong>The Problem:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>Logging PAN (Primary Account Number) brings Splunk/Datadog into PCI Scope.</li>
              <li>Once PAN hits an immutable log (S3 WORM), you cannot delete it.</li>
              <li>Your logging infrastructure becomes part of PCI audit scope permanently.</li>
            </ul>
            <p className="mb-3"><strong>The Alternative:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>Implement a Sidecar Proxy or Middleware with an <strong>Allow-List</strong> (not Block-List).</li>
              <li>Explicitly log CartID, Timestamp, Amount&mdash;strictly exclude CC_Number.</li>
              <li>Use synthetic monitoring or error codes for debugging conversion issues.</li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>Why Allow-List, Not Block-List:</strong> Block-lists fail when someone adds a new sensitive
              field. Allow-lists require explicit permission for every field logged, which is safer by default.
            </p>
            <p>
              <strong>The &quot;Temporary&quot; Trap:</strong> There&apos;s no such thing as temporary in compliance.
              Once data is logged, it exists in backups, archives, and audit trails for years.
            </p>
          </>
        }
      />

      <Question
        number={46}
        category="PCI-DSS"
        question="We are designing a new payment gateway integration. How do we ensure our backend servers remain out of PCI scope?"
        answer={
          <>
            <p className="mb-3">
              <strong>Use Tokenization via Hosted Fields.</strong> The goal is Scope Reduction&mdash;never touch
              what you don&apos;t need.
            </p>
            <p className="mb-3"><strong>The Architecture:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>User&apos;s browser sends PAN directly to Payment Processor (Stripe/Adyen) via iframe.</li>
              <li>Processor returns a non-sensitive Token (tok_123) to the frontend.</li>
              <li>Frontend sends token to our backend&mdash;our servers only ever touch the token.</li>
              <li>If hackers compromise our backend, they steal useless strings.</li>
            </ul>
            <p className="mb-3"><strong>The Audit Impact:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Old approach (PAN touches server):</strong> Massive Type D audit, all infrastructure in scope.</li>
              <li><strong>Hosted Fields approach:</strong> Simpler SAQ-A, just a few lines of frontend code in scope.</li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Principal Strategy:</strong> Scope reduction is the strategy. The best way to protect
              sensitive data is to never have it. Tokenization outsources the compliance burden to specialists.
            </p>
            <p>
              <strong>The Vendor Selection:</strong> Choose processors with SOC 2 Type II and PCI Level 1
              certification. Their compliance becomes your compliance through the chain of trust.
            </p>
          </>
        }
      />

      <Question
        number={47}
        category="PCI-DSS"
        question="Define the 'Cardholder Data Environment' (CDE) for a new service and the network constraints you would enforce."
        answer={
          <>
            <p className="mb-3">
              <strong>The CDE is the isolated network zone</strong> where card data is processed, stored, or transmitted.
              Build a fortress around it.
            </p>
            <p className="mb-3"><strong>Network Constraints:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Dedicated VPC/Subnet:</strong> The CDE must be network-segmented from all other systems.</li>
              <li><strong>No Direct Internet:</strong> Inbound traffic blocked except from Load Balancer. Outbound
              whitelisted only to Payment Processor IP ranges.</li>
              <li><strong>Jump Box Access:</strong> No developer can SSH directly. Access via Bastion Host with
              MFA and full session recording.</li>
            </ul>
            <p>
              <strong>The Principal Rule:</strong> Scope Creep is the enemy. If Marketing wants to connect for
              &quot;just a report,&quot; say NO. That brings Marketing into PCI scope.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The &quot;Connected System&quot; Trap:</strong> Any system that can communicate with the CDE
              becomes a &quot;connected system&quot; and may be in scope. Network segmentation is your primary
              defense against scope expansion.
            </p>
            <p>
              <strong>The Audit Evidence:</strong> Maintain network diagrams showing data flows and segmentation.
              Auditors will ask for proof that non-CDE systems cannot reach cardholder data.
            </p>
          </>
        }
      />

      <Question
        number={48}
        category="PCI-DSS"
        question="Security requires Key Rotation for our encrypted DB every year. The team says decrypting and re-encrypting 100TB of data will cause downtime. How do you handle this?"
        answer={
          <>
            <p className="mb-3">
              <strong>Move to Envelope Encryption.</strong> This solves the rotation problem at scale with zero downtime.
            </p>
            <p className="mb-3"><strong>The Two-Key Hierarchy:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>DEK (Data Encryption Key):</strong> Encrypts the actual data. One DEK per user/batch.</li>
              <li><strong>KEK (Key Encryption Key):</strong> Encrypts the DEKs. Stored in HSM, never leaves hardware.</li>
            </ul>
            <p className="mb-3"><strong>Why This Works:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>When we &quot;rotate,&quot; we only rotate the KEK (the master key).</li>
              <li>We re-encrypt the stored DEKs, which takes milliseconds.</li>
              <li>The 100TB of actual data remains untouched&mdash;it&apos;s still encrypted by the DEK.</li>
            </ul>
            <p className="mt-3">
              <strong>The Result:</strong> Meet compliance requirement with zero downtime, no massive data migration.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Employee Offboarding Benefit:</strong> When an employee leaves, you don&apos;t re-encrypt
              data. You revoke their IAM permission to ask HSM to decrypt. Instant, no data migration.
            </p>
            <p>
              <strong>The Industry Standard:</strong> The two-key hierarchy is how AWS KMS, GCP Cloud KMS, and
              Azure Key Vault all work. If your team is proposing re-encrypting 100TB, they haven&apos;t understood
              envelope encryption.
            </p>
          </>
        }
      />

      {/* Section: SOC 2 */}
      <SectionHeader
        title="SOC 2 & Trust Framework"
        description="Type I vs Type II, trust principles, and compliance automation"
        color="purple"
      />

      <Question
        number={49}
        category="SOC 2"
        question="We are a startup targeting Enterprise banks. Sales says we need SOC 2 immediately. The CTO wants to start with Type II to save money. Is this correct?"
        answer={
          <>
            <p className="mb-3">
              <strong>No, that is strategically unsound.</strong> Type II cannot be obtained &quot;immediately&quot;&mdash;it
              requires a 6-12 month observation period.
            </p>
            <p className="mb-3"><strong>The Correct Strategy:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Phase 1:</strong> Target SOC 2 Type I (point-in-time snapshot of design). Achievable
              in weeks. This unblocks sales immediately.</li>
              <li><strong>Phase 2:</strong> Simultaneously start the Type II observation period. Deliver that
              report in 6-12 months.</li>
            </ul>
            <p className="mb-3"><strong>The Analogy:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Type I:</strong> A photograph (do you have a security system?).</li>
              <li><strong>Type II:</strong> A security camera tape (did you actually use it for 6 months?).</li>
            </ul>
            <p className="mt-3">
              You can&apos;t skip the 6-month recording period for Type II.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The 6-Month Lead Time:</strong> If a big customer asks for SOC 2 Type II and you&apos;re starting
              now, you&apos;re 6 months away. A Principal TPM starts the observation period 6 months before Sales needs
              the certificate.
            </p>
            <p>
              <strong>The Cost Calculation:</strong> Type I unblocks deals now. The opportunity cost of waiting
              6 months for Type II is often higher than doing both certifications.
            </p>
          </>
        }
      />

      <Question
        number={50}
        category="SOC 2"
        question="An auditor is asking for evidence that 'All pull requests are reviewed.' The engineering lead is taking screenshots of GitHub PRs. How do you fix this process?"
        answer={
          <>
            <p className="mb-3">
              <strong>Manual screenshots are unscalable and error-prone.</strong> Implement Compliance-as-Code.
            </p>
            <p className="mb-3"><strong>The Fix:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Enforce at Source:</strong> Configure GitHub/GitLab Branch Protection Rules to physically
              prevent merging without 1 approval.</li>
              <li><strong>Automate Evidence:</strong> Use compliance tools (Vanta, Drata, Secureframe) that hook
              into the GitHub API and automatically generate reports showing 100% of merges satisfied this rule.</li>
            </ul>
            <p className="mb-3"><strong>The Result:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Old way:</strong> A week of manual work, screenshots pasted into Word docs.</li>
              <li><strong>New way:</strong> Auditor sees a green checkmark dashboard. Zero manual effort.</li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Continuous Compliance Model:</strong> Modern compliance isn&apos;t a once-a-year audit event.
              It&apos;s continuous monitoring with automated evidence collection. This reduces audit prep from weeks to hours.
            </p>
            <p>
              <strong>The Investment:</strong> Tools like Vanta cost ~$10-30K/year. Compare to the engineering hours
              spent on manual evidence collection. The ROI is usually 3-6 months.
            </p>
          </>
        }
      />

      <Question
        number={51}
        category="SOC 2"
        question="Which SOC 2 Trust Principles would you select for a standard SaaS CRM, and which would you exclude?"
        answer={
          <>
            <p className="mb-3">
              <strong>Select carefully</strong>&mdash;excluding unnecessary criteria reduces audit scope and cost.
            </p>
            <p className="mb-3"><strong>Include:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Security:</strong> Mandatory (Common Criteria). All SOC 2 reports include this.</li>
              <li><strong>Availability:</strong> Yes, if you have an SLA. Most SaaS does.</li>
              <li><strong>Confidentiality:</strong> Yes, because you store customer business data.</li>
            </ul>
            <p className="mb-3"><strong>Exclude:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Processing Integrity:</strong> Usually for financial transaction processing, fintech.
              A CRM doesn&apos;t process transactions.</li>
              <li><strong>Privacy:</strong> Only if you specifically process PII as a data processor. Distinct
              from Confidentiality. Most CRMs don&apos;t need this.</li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Over-Certification Trap:</strong> Some startups add all 5 criteria thinking it looks
              better. It doesn&apos;t&mdash;it just increases audit cost and engineering burden for no customer benefit.
            </p>
            <p>
              <strong>The Customer Perspective:</strong> Ask your enterprise customers which criteria they require.
              Don&apos;t guess. They&apos;ll tell you exactly what they need to sign the contract.
            </p>
          </>
        }
      />

      {/* Section: Risk & Technical Debt */}
      <SectionHeader
        title="Risk & Technical Debt Quantification"
        description="Expected loss calculation, velocity tax, and migration ROI"
        color="red"
      />

      <Question
        number={52}
        category="Risk Quantification"
        question="We have a 'flaky' search service that fails 0.5% of the time. Engineers want to rewrite it (3 months work). Executives say '0.5% is fine.' How do you justify the rewrite?"
        answer={
          <>
            <p className="mb-3">
              <strong>Use Expected Loss Calculation.</strong> Translate the engineering problem into business impact.
            </p>
            <p className="mb-3"><strong>The Math:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>Daily volume: 1M searches</li>
              <li>0.5% failure rate = 5,000 failed searches/day</li>
              <li>Conversion rate: 5% → 250 lost sales/day</li>
              <li>Average order: $50 → <strong>$12,500/day lost revenue</strong></li>
              <li><strong>Annualized Loss: $4.5 Million</strong></li>
            </ul>
            <p className="mb-3"><strong>The ROI:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>Cost of Rewrite: 3 engineers &times; 3 months &asymp; $150K</li>
              <li>ROI = $4.5M / $150K = <strong>30x return</strong></li>
            </ul>
            <p className="mt-3">
              <strong>The Pitch:</strong> &quot;This &apos;minor&apos; bug is costing us $4.5M a year. A $150K
              investment yields a 30x ROI. We should fix it now.&quot;
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Executive Translation:</strong> Engineers say &quot;flaky service.&quot; Executives hear
              &quot;technical nonsense.&quot; Executives say &quot;$4.5M annual loss.&quot; That gets attention.
            </p>
            <p>
              <strong>The Caveat:</strong> Your conversion assumptions will be challenged. Have data ready. If you
              don&apos;t have conversion data, use conservative estimates and label them as such.
            </p>
          </>
        }
      />

      <Question
        number={53}
        category="Risk Quantification"
        question="A legacy monolithic service is slowing down feature development. How do you quantify the 'Velocity Tax' to get budget for a migration?"
        answer={
          <>
            <p className="mb-3">
              <strong>Measure the Interest Rate of the debt.</strong> Compare cycle times across systems.
            </p>
            <p className="mb-3"><strong>The Measurement:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>Cycle Time (code commit to deploy) in Monolith: 10 days</li>
              <li>Cycle Time in modern microservices: 5 days</li>
              <li><strong>Velocity Tax: 50%</strong>&mdash;we&apos;re half as fast in the monolith</li>
            </ul>
            <p className="mb-3"><strong>The Cost:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>20 engineers on the monolith</li>
              <li>50% tax = 10 FTE-years wasted annually</li>
              <li>At $200K fully-loaded cost per engineer: <strong>$2M/year waste</strong></li>
            </ul>
            <p className="mt-3">
              <strong>The Pitch:</strong> Frame the migration not as &quot;cleanup&quot; but as &quot;Recovering
              $2M in lost productivity annually.&quot;
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Phantom Sprint:</strong> Ask your Tech Lead: &quot;If the code was clean, how many points
              would this be?&quot; The difference is the Interest Payment. If 30-40% of sprint capacity goes to
              &quot;Unplanned Work&quot; or &quot;Bugs,&quot; that&apos;s your Velocity Tax.
            </p>
            <p>
              <strong>The Language Shift:</strong> Executives don&apos;t understand &quot;tech debt.&quot; They
              understand &quot;we&apos;re paying $2M/year for a problem we can fix for $500K.&quot;
            </p>
          </>
        }
      />

      <Question
        number={54}
        category="Risk Quantification"
        question="Explain 'Blast Radius' in the context of a Global Deployment, and how you would design the release to minimize it."
        answer={
          <>
            <p className="mb-3">
              <strong>Blast Radius is the % of users impacted by a bad change.</strong> A global &quot;Big Bang&quot;
              deployment has 100% blast radius.
            </p>
            <p className="mb-3"><strong>Cell-Based Canary Rollout:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Stage 1:</strong> Deploy to Canary Cell (internal employees). Radius: 0%.</li>
              <li><strong>Stage 2:</strong> Deploy to Region 1 / Zone A (smallest region). Radius: 5%.</li>
              <li><strong>Stage 3:</strong> Deploy to Region 1 / Zone B. Radius: 15%.</li>
              <li><strong>Stage 4:</strong> Wait for &quot;Bake Time&quot; (automated health checks).</li>
              <li><strong>Stage 5:</strong> Deploy globally if all checks pass.</li>
            </ul>
            <p className="mt-3">
              <strong>The Benefit:</strong> A catastrophic bug affects only 5% of users, and Automated Rollback
              triggers before it spreads.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Containment Strategies:</strong> Bulkhead Pattern (separate resources per service),
              Circuit Breakers (auto-cut traffic to failing service), Graceful Degradation (hide failing feature,
              don&apos;t crash the page).
            </p>
            <p>
              <strong>The Principal Mindset:</strong> Your goal isn&apos;t &quot;zero failures.&quot; It&apos;s
              &quot;small failures.&quot; Design for blast radius containment, not prevention of all failures.
            </p>
          </>
        }
      />

      {/* Section: Data Classification */}
      <SectionHeader
        title="Data Classification & Architecture"
        description="Classification frameworks and storage architecture decisions"
        color="blue"
      />

      <Question
        number={55}
        category="Data Classification"
        question="We are building a 'User Profile' service. Walk me through the data classification for the fields: Bio, Email, SSN, Internal_User_ID."
        answer={
          <>
            <p className="mb-3">
              <strong>Classification drives architecture.</strong> Each field requires different controls.
            </p>
            <p className="mb-3"><strong>The Classification:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Bio:</strong> Public (if visible on profile) or Internal. Low risk. Standard storage.</li>
              <li><strong>Internal_User_ID:</strong> Internal. No encryption needed, used for joining tables.</li>
              <li><strong>Email:</strong> Confidential/PII. Requires encryption at rest. Subject to GDPR access requests.</li>
              <li><strong>SSN:</strong> Restricted/Toxic. Must be <strong>Tokenized</strong>. Raw SSN goes into a
              secure Vault; Profile Service only stores a reference token (ssn_token_882).</li>
            </ul>
            <p className="mt-3">
              <strong>The Vault Pattern:</strong> Access to the Vault requires &quot;Break Glass&quot; privileges
              and strict audit logging. Restricted data should be isolated, not just encrypted.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Isolation Principle:</strong> For Restricted data, encryption alone isn&apos;t enough.
              Physical isolation (separate database, separate access controls, separate audit logs) is required.
            </p>
            <p>
              <strong>The Need-to-Know Test:</strong> For each field, ask: &quot;Who needs to see this?&quot; If
              the answer is &quot;almost nobody,&quot; it should be tokenized or vaulted, not just encrypted.
            </p>
          </>
        }
      />

      <Question
        number={56}
        category="Data Classification"
        question="A developer suggests using the same S3 bucket for 'Public Marketing Assets' and 'User Invoices' to simplify Terraform scripts. What is your ruling?"
        answer={
          <>
            <p className="mb-3">
              <strong>Rejected.</strong> This violates the principle of Isolation based on Classification.
            </p>
            <p className="mb-3"><strong>The Risk:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Marketing Assets:</strong> Public (read-only for world).</li>
              <li><strong>Invoices:</strong> Confidential (restricted access).</li>
              <li>Mixing them creates massive risk of misconfiguration (e.g., accidentally making Invoice
              folder public with a single IAM policy mistake).</li>
            </ul>
            <p className="mb-3"><strong>The Correct Architecture:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>Separate Buckets with distinct IAM Policies.</li>
              <li>Block Public Access setting enforced at bucket level for Invoices.</li>
              <li>Different encryption keys (if required by policy).</li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Terraform Argument:</strong> &quot;It simplifies our scripts&quot; is never a valid
              reason to mix data classifications. The Terraform complexity is trivial compared to the compliance
              and security risk.
            </p>
            <p>
              <strong>The Audit Trail:</strong> Separate buckets create cleaner audit trails. When auditors ask
              &quot;who accessed confidential data,&quot; you don&apos;t want to filter through public asset access logs.
            </p>
          </>
        }
      />

      {/* Section: General Principal Scenarios */}
      <SectionHeader
        title="General Principal TPM Scenarios"
        description="Real-world trade-offs and executive communication"
        color="cyan"
      />

      <Question
        number={57}
        category="Principal Scenarios"
        question="You identify a critical security risk (Unencrypted PII), but the Product VP refuses to prioritize it because they need to hit a Q4 revenue target. How do you handle this?"
        answer={
          <>
            <p className="mb-3">
              <strong>Do not argue on &quot;security&quot; grounds.</strong> Argue on Risk Acceptance.
            </p>
            <p className="mb-3"><strong>The Strategy:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>Formally document the risk in the <strong>Risk Register</strong>: &quot;Risk: Regulatory Fine
              of $20M + Reputation Loss. Owner: Product VP.&quot;</li>
              <li>Ask the VP to <strong>physically sign off</strong> on Accepting this risk.</li>
              <li>When an executive sees their name attached to a potential $20M loss, prioritization changes.</li>
            </ul>
            <p className="mb-3"><strong>If They Still Refuse:</strong></p>
            <p>
              Escalate to the CISO or Risk Committee with the quantified data. Never let risk go undocumented.
              Your job is to surface the risk clearly and ensure someone is accountable.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Documentation Defense:</strong> If a breach happens and the risk was documented with
              a signed acceptance, you&apos;ve done your job. If it wasn&apos;t documented, you share accountability.
            </p>
            <p>
              <strong>The Principal Skill:</strong> You&apos;re not trying to &quot;win&quot; the argument. You&apos;re
              trying to ensure the company makes an informed decision. Sometimes they&apos;ll accept the risk.
              That&apos;s their call, as long as it&apos;s documented.
            </p>
          </>
        }
      />

      <Question
        number={58}
        category="Principal Scenarios"
        question="We are planning a 'Cloud Exit' (moving from AWS to On-Prem) to save costs. What is the hidden 'Technical Debt' or risk in this calculation?"
        answer={
          <>
            <p className="mb-3">
              <strong>The hidden cost is the loss of Managed Services</strong>&mdash;the Operational Toil that
              cloud abstracts away.
            </p>
            <p className="mb-3"><strong>What Cloud Provides:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>RDS handles backups, patching, and failover automatically.</li>
              <li>S3 handles durability, replication, lifecycle management.</li>
              <li>EKS/ECS handles container orchestration, scaling, node management.</li>
            </ul>
            <p className="mb-3"><strong>On-Prem Requires:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>DBAs and SREs to handle all of the above manually.</li>
              <li>Hardware procurement, data center contracts, network engineering.</li>
              <li>Higher RTO/RPO due to less redundancy.</li>
            </ul>
            <p className="mt-3">
              <strong>The TCO Calculation:</strong> Hardware savings might be $1M, but if we need 5 new SREs
              ($1M salary) + risk of lower availability, the ROI might be negative.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Full TCO:</strong> Cloud cost isn&apos;t just compute&mdash;it&apos;s operational burden
              transfer. Always include headcount in TCO calculations. Don&apos;t just compare EC2 costs to server costs.
            </p>
            <p>
              <strong>The Repatriation Reality:</strong> Some large companies (Dropbox, Basecamp) have successfully
              repatriated. But they have dedicated platform teams and specific workload profiles. Most companies
              underestimate the operational complexity.
            </p>
          </>
        }
      />

      <Question
        number={59}
        category="Principal Scenarios"
        question="Define 'RPO' and 'RTO' for a Payment Service vs. a User Avatar Service."
        answer={
          <>
            <p className="mb-3">
              <strong>Different services require different disaster recovery targets.</strong> Not everything
              needs the same investment.
            </p>
            <p className="mb-3"><strong>Payment Service (Critical):</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>RPO (Recovery Point Objective):</strong> &asymp; 0 (Active-Active replication).
              Cannot lose any transactions.</li>
              <li><strong>RTO (Recovery Time Objective):</strong> &lt; 1 minute. Users cannot wait during checkout.</li>
              <li><strong>Cost:</strong> High, but justified by revenue impact.</li>
            </ul>
            <p className="mb-3"><strong>User Avatar Service (Non-Critical):</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>RPO:</strong> 24 hours (last backup). Losing a day of avatar changes is acceptable.</li>
              <li><strong>RTO:</strong> 4 hours. Users can live without changing profile pics during an outage.</li>
              <li><strong>Cost:</strong> Much lower infrastructure investment.</li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Tiered Approach:</strong> Differentiating these tiers saves millions in infrastructure
              costs by not over-engineering the Avatar service to payment-level reliability.
            </p>
            <p>
              <strong>The Classification Matrix:</strong> Create a service tier matrix (Tier 1: Critical,
              Tier 2: Important, Tier 3: Nice-to-have) with different RTO/RPO targets for each. Use this to
              guide infrastructure investment decisions.
            </p>
          </>
        }
      />

      <Question
        number={60}
        category="Principal Scenarios"
        question="What is the difference between 'Accidental' and 'Deliberate' Technical Debt, and which one is acceptable?"
        answer={
          <>
            <p className="mb-3">
              <strong>Technical debt comes in two forms</strong>&mdash;one is a business decision, the other is waste.
            </p>
            <p className="mb-3"><strong>Deliberate Debt (Acceptable):</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>&quot;We knowingly chose a shortcut to meet a critical deadline.&quot;</li>
              <li>Example: &quot;Hardcode the config for Black Friday, refactor in January.&quot;</li>
              <li>This is a <strong>business loan</strong> with a repayment plan.</li>
            </ul>
            <p className="mb-3"><strong>Accidental Debt (Unacceptable):</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>&quot;We wrote bad code because we didn&apos;t understand design patterns.&quot;</li>
              <li>Example: &quot;What is layering?&quot; &quot;No time for unit tests.&quot;</li>
              <li>This is <strong>waste</strong> due to lack of training or negligence.</li>
            </ul>
            <p className="mt-3">
              <strong>The Principal Rule:</strong> Tolerate Deliberate Debt if the repayment plan is credible.
              Crush Accidental Debt through better engineering guidelines and code reviews.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Debt Quadrant:</strong> Martin Fowler&apos;s quadrant adds another axis: Prudent vs Reckless.
              &quot;Deliberate & Prudent&quot; (deadline-driven with a plan) is acceptable. &quot;Deliberate & Reckless&quot;
              (no tests, just ship it) is never acceptable.
            </p>
            <p>
              <strong>The Interest-Free Loan:</strong> If Interest = $0 (you never modify that code), let the
              debt sit. It&apos;s an interest-free loan. Only pay down debt that actively slows you down.
            </p>
          </>
        }
      />

      {/* Summary */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-foreground">20</div>
            <div className="text-xs text-muted-foreground">Questions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">6</div>
            <div className="text-xs text-muted-foreground">Topic Areas</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">Mag7</div>
            <div className="text-xs text-muted-foreground">Target Level</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/practice/sla-math"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Part III: SLA Mathematics
        </Link>
        <Link
          href="/nebula/system-design/deep-dives"
          className="text-sm text-primary hover:underline"
        >
          Deep Dives &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
