"use client";

/**
 * Deep Dive: Compliance & Data Governance
 * Section 14 of 16
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import {
  Subsection,
  Insight,
  Pitfall,
  InterviewTip,
  BulletItem,
  DataTable,
  DeepDiveHeader,
} from "@/components/DeepDiveComponents";

export default function ComplianceGovernancePage() {
  return (
    <SystemDesignLayout
      title="Compliance & Governance"
      description="Legal requirements that dictate architecture"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={14}
        title="Compliance & Data Governance"
        subtitle="Legal requirements that dictate architecture"
        color="purple"
      />

      <Subsection title="Data Classification Framework" color="purple">
        <p className="text-sm text-muted-foreground mb-4">
          You cannot protect what you cannot label. Data Classification is the foundation of all
          security and compliance—it determines which controls apply to which data.
        </p>

        <DataTable
          headers={["Level", "Definition", "Examples", "Controls Required"]}
          rows={[
            [
              <span key="public" className="text-green-500 font-medium">Public</span>,
              "Harmless if leaked",
              "Marketing content, public APIs, job descriptions",
              "Availability & Integrity (no secrecy needed)",
            ],
            [
              <span key="internal" className="text-blue-500 font-medium">Internal</span>,
              "Business data, not sensitive",
              "Internal wikis, org charts, OKRs, Slack messages",
              "Standard SSO, VPN/Zero Trust",
            ],
            [
              <span key="confidential" className="text-amber-500 font-medium">Confidential</span>,
              "Trade secrets, business-sensitive",
              "Customer lists, pricing, source code, financials",
              "RBAC, Audit logging, Encryption at rest",
            ],
            [
              <span key="restricted" className="text-red-500 font-medium">Restricted (PII)</span>,
              "Triggers fines/harm if leaked",
              "SSNs, Credit Cards, Passwords, Health records",
              "MFA, Tokenization, Crypto-Shredding, Isolation",
            ],
          ]}
        />

        <Pitfall>
          <strong>The Toxic Log Problem:</strong> Developers write{" "}
          <code className="bg-muted px-1 rounded">log.info(userObject)</code> for debugging.
          This leaks names, emails, and IPs into Splunk/Datadog. Use <strong>Allow-Lists</strong>:
          log nothing by default, explicitly allow only safe fields. Block-lists fail when someone
          adds a new sensitive field.
        </Pitfall>

        <InterviewTip>
          &quot;When designing systems, I always ask: What is the data classification? What
          compliance regimes apply? The architecture for storing cat photos is fundamentally
          different from storing medical X-rays. Classification determines our NFRs.&quot;
        </InterviewTip>
      </Subsection>

      <Subsection title="GDPR Deep Dive" color="purple">
        <p className="text-sm text-muted-foreground mb-4">
          GDPR is not just a policy document—it is a set of{" "}
          <strong className="text-foreground">Non-Functional Requirements</strong> that dictate
          your architecture. You cannot &quot;patch&quot; GDPR compliance in later.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">Data Residency (Geo-Sharding)</h4>
        <p className="text-sm text-muted-foreground mb-3">
          &quot;German data stays in Germany&quot; is a real requirement. You cannot have a single
          global database.
        </p>
        <ul className="space-y-1 mb-4">
          <BulletItem title="Architecture">
            Cell-Based or Geo-Sharding: User A (USA) → US Data Center, User B (Germany) → EU Data Center
          </BulletItem>
          <BulletItem title="Trade-off">
            German user traveling to US? Route them back to EU (high latency) vs replicate data (illegal)
          </BulletItem>
          <BulletItem title="Cost">
            You lose economies of scale—duplicate infrastructure stacks per region
          </BulletItem>
        </ul>

        <h4 className="text-sm font-semibold text-foreground mb-2">Right to Erasure (The &quot;Forget Me&quot; Problem)</h4>
        <p className="text-sm text-muted-foreground mb-3">
          In microservices, user data is replicated across 50 services. You need an{" "}
          <strong className="text-foreground">Erasure Orchestrator</strong> that fires events
          to all services and tracks acknowledgments.
        </p>
        <ul className="space-y-1 mb-4">
          <BulletItem title="The Backup Trap">
            You cannot delete one user from an immutable S3 Glacier backup
          </BulletItem>
          <BulletItem title="Solution">
            Crypto-Shredding: Encrypt each user&apos;s data with a unique key. &quot;Delete&quot; = delete the key.
            The data becomes mathematically irretrievable garbage.
          </BulletItem>
        </ul>

        <h4 className="text-sm font-semibold text-foreground mb-2">Subject Access Requests (SAR)</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Users can request a copy of all their data. In a distributed system, this requires a
          &quot;Scatter-Gather&quot; architecture.
        </p>
        <DataTable
          headers={["Step", "Action", "Consideration"]}
          rows={[
            ["1. Fan-Out", "Orchestrator publishes SAR_REQUESTED event", "All 50 services subscribe"],
            ["2. Query", "Each service queries local DB for User_123", "Format into standard JSON"],
            ["3. Aggregate", "Orchestrator zips all responses", "What if one service is down?"],
            ["4. Deliver", "Secure, time-bombed download link", "Require MFA re-authentication"],
          ]}
        />

        <Insight title="The Imposter Attack">
          If a hacker gains access and clicks &quot;Download My Data,&quot; your system helpfully
          packages up the victim&apos;s entire history. SAR must trigger Step-Up Authentication
          (MFA) and ideally a 24-hour delay with email notification so the real user can cancel.
        </Insight>
      </Subsection>

      <Subsection title="PCI-DSS for Payment Systems" color="purple">
        <p className="text-sm text-muted-foreground mb-4">
          The goal is <strong className="text-foreground">Scope Reduction</strong>—minimize what
          systems touch credit card data. If you never see the card number, you don&apos;t need
          the audit.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">Tokenization: The Hot Potato Strategy</h4>
        <DataTable
          headers={["Approach", "Data Flow", "PCI Scope"]}
          rows={[
            [
              <span key="old" className="text-red-500 font-medium">Old (High Risk)</span>,
              "User → Your Server → Stripe",
              "Frontend, Backend, DB, Load Balancers all in scope",
            ],
            [
              <span key="new" className="text-green-500 font-medium">Hosted Fields</span>,
              "User → Stripe iframe → Token back → Your Server sees only token",
              "Just a few lines of frontend code",
            ],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Cardholder Data Environment (CDE)</h4>
        <p className="text-sm text-muted-foreground mb-3">
          If you must handle card data (banks, processors), build a fortress.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Network Isolation">
            Separate VPC/Subnet. No internet access. Only whitelisted IPs (Visa/Mastercard network).
          </BulletItem>
          <BulletItem title="Jump Box Access">
            Engineers cannot SSH directly. Must VPN through a Bastion Host that logs every keystroke.
          </BulletItem>
          <BulletItem title="Scope Creep">
            If Marketing wants to connect for &quot;just a report,&quot; say NO. That brings Marketing
            into PCI scope.
          </BulletItem>
        </ul>

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Encryption & Key Management</h4>
        <ul className="space-y-1">
          <BulletItem title="At Rest">
            AES-256 mandatory
          </BulletItem>
          <BulletItem title="In Transit">
            TLS 1.2+ minimum
          </BulletItem>
          <BulletItem title="Key Storage">
            HSM (Hardware Security Module). Keys never leave the hardware. Even with root access,
            attackers cannot steal the key.
          </BulletItem>
          <BulletItem title="Rotation">
            Annual minimum. Use Envelope Encryption to avoid re-encrypting 10M rows (see Payment Systems deep dive).
          </BulletItem>
        </ul>

        <Pitfall>
          <strong>Logging Card Numbers:</strong> Even accidentally logging a PAN brings your
          entire logging infrastructure into PCI scope. Use Allow-Lists for what to log, not
          Block-Lists. In modern systems, logs ship instantly to immutable storage (S3 WORM)—you
          literally cannot clean them once written.
        </Pitfall>
      </Subsection>

      <Subsection title="SOC 2 Trust Framework" color="purple">
        <p className="text-sm text-muted-foreground mb-4">
          SOC 2 is the entry ticket to selling to enterprise customers. Without it, banks and
          healthcare companies will not sign contracts.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">Five Trust Service Criteria</h4>
        <DataTable
          headers={["Criteria", "Promise", "TPM Focus"]}
          rows={[
            [
              <span key="sec" className="font-medium">Security (Required)</span>,
              "We stop hackers",
              "Firewalls, MFA, Offboarding checklists",
            ],
            [
              <span key="avail" className="font-medium">Availability</span>,
              "We are up when you need us",
              "Gold Metrics, DR plans, backup testing",
            ],
            [
              <span key="pi" className="font-medium">Processing Integrity</span>,
              "The data is right",
              "Idempotency, job monitoring, data validation",
            ],
            [
              <span key="conf" className="font-medium">Confidentiality</span>,
              "We protect your business secrets",
              "Encryption, access control for IP/contracts",
            ],
            [
              <span key="priv" className="font-medium">Privacy</span>,
              "We protect personal data",
              "GDPR overlap—PII handling, consent management",
            ],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Type I vs Type II</h4>
        <DataTable
          headers={["Type", "Analogy", "What It Proves", "Enterprise Value"]}
          rows={[
            [
              <span key="t1" className="text-amber-500 font-medium">Type I</span>,
              "A photograph",
              "Design of Controls (you have a process)",
              "Good for startups proving intent",
            ],
            [
              <span key="t2" className="text-green-500 font-medium">Type II</span>,
              "A security camera tape",
              "Operating Effectiveness (you followed the process for 6+ months)",
              "Required for enterprise deals",
            ],
          ]}
        />

        <Insight title="The 6-Month Lead Time">
          If a big customer asks for SOC 2 and you say &quot;starting now,&quot; you are 6 months
          away from Type II. A Principal TPM starts the &quot;Observation Period&quot; 6 months
          before Sales needs the certificate.
        </Insight>

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Evidence Collection: Compliance as Code</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Manual evidence (screenshots) does not scale. Use tools like Vanta, Drata, or Secureframe
          for continuous compliance automation.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Old Way">
            Auditor asks for proof → TPM emails IT → Screenshots pasted into Word doc
          </BulletItem>
          <BulletItem title="New Way">
            Vanta agent polls AWS API: <code className="bg-muted px-1 rounded">S3.Bucket.isEncrypted == True?</code>
            Auditor sees green checkmark dashboard. Zero manual effort.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="Architecture Implications Summary" color="purple">
        <p className="text-sm text-muted-foreground mb-4">
          Compliance requirements translate directly into system architecture. These are not
          afterthoughts—they must be designed in from day one.
        </p>

        <DataTable
          headers={["Requirement", "Architecture Impact", "Regime"]}
          rows={[
            ["Data Classification System", "Tagging taxonomy for every DB column", "All"],
            ["Consent Management Service", "Standalone service, queried before marketing actions", "GDPR"],
            ["Deletion Propagation", "Erasure Orchestrator, Crypto-Shredding capability", "GDPR"],
            ["Audit Logging", "Immutable logs for &quot;who accessed what&quot;", "SOC 2, PCI"],
            ["Regional Deployment", "Cell-based architecture, geo-routing", "GDPR"],
            ["CDE Isolation", "Separate VPC, no internet, HSM for keys", "PCI-DSS"],
          ]}
        />

        <InterviewTip>
          &quot;We are not just building plumbing; we are building sovereignty. Without this
          architecture, we cannot legally sell to 450 million customers in Europe. We trade
          short-term feature velocity for long-term market access and immunity from fines that
          can reach 4% of global revenue.&quot;
        </InterviewTip>
      </Subsection>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/deployment-strategies"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Deployment Strategies
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/payment-reliability"
          className="text-sm text-primary hover:underline"
        >
          Next: Payment Systems Reliability &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
