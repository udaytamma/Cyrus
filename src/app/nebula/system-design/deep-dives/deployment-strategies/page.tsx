"use client";

/**
 * Deep Dive: Deployment Strategies & Release Engineering
 * Section 13 of 16
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
import { MermaidDiagram } from "@/components/MermaidDiagram";

export default function DeploymentStrategiesPage() {
  return (
    <SystemDesignLayout
      title="Deployment Strategies"
      description="Limiting blast radius and forcing MTTR toward zero"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={13}
        title="Deployment Strategies & Release Engineering"
        subtitle="Limiting blast radius and forcing MTTR toward zero"
        color="green"
      />

      <Subsection title="Canary Deployments: The Risk Reduction Strategy" color="green">
        <p className="text-sm text-muted-foreground mb-4">
          A Canary Deployment releases a new version to a small percentage of users before rolling
          it out to everyone. The primary goal is to limit the <strong className="text-foreground">Blast Radius</strong> of
          a failure.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
  S1[1%<br/>Canary] --> S2[10%]
  S2 --> S3[50%]
  S3 --> S4[100%<br/>Stable]
  S1 -.->|Rollback| R[Revert]
  S2 -.->|Rollback| R
  style S1 fill:#fef3c7,stroke:#d97706
  style S4 fill:#dcfce7,stroke:#16a34a
  style R fill:#fee2e2,stroke:#dc2626`}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2">The Traffic Split Workflow</h4>
        <DataTable
          headers={["Stage", "Traffic Split", "Action", "Duration"]}
          rows={[
            ["Stage 1", "1% Canary / 99% Stable", "Monitor Gold metrics for Canary", "15-30 min"],
            ["Stage 2", "10% Canary / 90% Stable", "Expand if Stage 1 healthy", "1-2 hours"],
            ["Stage 3", "50% Canary / 50% Stable", "Continue monitoring", "2-4 hours"],
            ["Stage 4", "100% new version", "Canary becomes Stable", "Complete"],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Automated Rollback Tripwires</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Configure your deployment pipeline (Spinnaker, ArgoCD, Harness) to watch Gold metrics
          and auto-revert if thresholds are breached.
        </p>
        <ul className="space-y-1">
          <BulletItem title="The Crash Wire (Error Rate)">
            If HTTP 500 errors in Canary &gt; 1%, rollback immediately
          </BulletItem>
          <BulletItem title="The Lag Wire (Latency)">
            If Canary P99 Latency &gt; 500ms (or 10% higher than Stable), rollback
          </BulletItem>
          <BulletItem title="The Business Wire (Data Integrity)">
            If successful transactions drop &gt; 5% vs historical average, rollback
          </BulletItem>
        </ul>

        <Insight title="Relative Monitoring, Not Absolute">
          Don&apos;t alert on absolute errors. Compare Canary vs Stable deviation. If both have
          1% errors (shared database issue), the Canary is fine—don&apos;t rollback. Only rollback
          if Canary_Error_Rate &gt;&gt; Stable_Error_Rate.
        </Insight>
      </Subsection>

      <Subsection title="Feature Flags: Decoupling Deploy from Release" color="green">
        <p className="text-sm text-muted-foreground mb-4">
          Feature Flags decouple <strong className="text-foreground">code deployment</strong> from{" "}
          <strong className="text-foreground">feature release</strong>. You deploy code to 100% of
          servers, but the feature is hidden behind a flag that you can toggle for specific users.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">How the 1% User Targeting Works</h4>
        <p className="text-sm text-muted-foreground mb-3">
          It is <strong className="text-foreground">not random</strong>—that would cause users to toggle between
          versions on refresh. It uses <strong className="text-foreground">Deterministic Hashing</strong>.
        </p>

        <div className="bg-muted/30 p-4 rounded-lg mb-4 font-mono text-sm">
          <p className="text-muted-foreground mb-2">{"// Pseudo-code logic"}</p>
          <p className="text-foreground">{"user_hash = hash(user_id) % 100  // Returns 0 to 99"}</p>
          <p className="text-foreground mt-2">if (user_hash &lt; 1) {"{"}</p>
          <p className="text-foreground pl-4">{"show_new_feature()  // 1% of users"}</p>
          <p className="text-foreground">{"}"} else {"{"}</p>
          <p className="text-foreground pl-4">{"show_old_feature()  // 99% of users"}</p>
          <p className="text-foreground">{"}"}</p>
        </div>

        <DataTable
          headers={["Aspect", "Feature Flags", "Canary Deployment"]}
          rows={[
            ["Where it lives", "Application code (if/else logic)", "Infrastructure (Load Balancer)"],
            ["Granularity", "High (target specific users, regions)", "Low (% of random traffic)"],
            ["Main use case", "Releasing specific UI/algorithm changes", "Releasing new container versions"],
            ["Who controls it", "Product Managers & Developers", "DevOps & SREs"],
          ]}
        />

        <Pitfall>
          <strong>The Zombie Flag Problem:</strong> Every active feature flag doubles the number of
          code pathways. 20 flags = 1 million unique pathways. You cannot test them all.
          Implement a TTL policy: flags older than 90 days trigger alerts. A Principal TPM enforces
          cleanup governance, not just flag creation.
        </Pitfall>
      </Subsection>

      <Subsection title="Database Migration Patterns: The N-1 Rule" color="green">
        <p className="text-sm text-muted-foreground mb-4">
          You <strong className="text-foreground">cannot</strong> canary a database schema change.
          The column either exists or it doesn&apos;t. The solution is the{" "}
          <strong className="text-foreground">Expand and Contract</strong> pattern—your database must
          always support two versions of application code (N and N-1) simultaneously.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">
          Example: Splitting &quot;Name&quot; into &quot;First_Name&quot; + &quot;Last_Name&quot;
        </h4>

        <DataTable
          headers={["Phase", "Action", "DB State", "App State", "Risk"]}
          rows={[
            [
              <span key="p1" className="text-blue-500 font-medium">1. Expand</span>,
              "ADD new columns (nullable)",
              "Name + First_Name + Last_Name",
              "V1 reads/writes Name only",
              "Zero (V1 ignores new columns)",
            ],
            [
              <span key="p2" className="text-amber-500 font-medium">2. Dual Write</span>,
              "Deploy V2 to Canary (1%)",
              "Same",
              "V2 writes BOTH, reads old",
              "Low (Canary rollback safe)",
            ],
            [
              <span key="p3" className="text-cyan-500 font-medium">3. Backfill</span>,
              "Background script migrates history",
              "All columns synced",
              "100% on V2 Dual Write",
              "Low (async process)",
            ],
            [
              <span key="p4" className="text-green-500 font-medium">4. Switch Read</span>,
              "V3 reads from new columns",
              "Same",
              "V3 reads new, writes both",
              "Medium (Canary this!)",
            ],
            [
              <span key="p5" className="text-red-500 font-medium">5. Contract</span>,
              "DROP old Name column",
              "First_Name + Last_Name only",
              "V4 uses new schema",
              "Zero (cleanup)",
            ],
          ]}
        />

        <InterviewTip>
          &quot;I never sync DB migrations with code deployments. We use Expand and Contract:
          first make the DB compatible with both versions, then Canary the code, then clean up.
          Any PR with DROP COLUMN or RENAME COLUMN is blocked until we verify N-1 compatibility.&quot;
        </InterviewTip>
      </Subsection>

      <Subsection title="Replication Lag: The Speed of Light Problem" color="green">
        <p className="text-sm text-muted-foreground mb-4">
          In Master-Replica architectures, replication is not instant. If a user writes to Master
          and immediately reads from a Replica, they may see stale data—causing{" "}
          <strong className="text-foreground">&quot;I just saved this, where did it go?&quot;</strong> bugs.
        </p>

        <DataTable
          headers={["Strategy", "How It Works", "Trade-off"]}
          rows={[
            [
              <strong key="pin">Read-Your-Own-Writes (Pinning)</strong>,
              "If user just wrote, pin them to Master for 5 seconds",
              "Higher Master load, but user sees their updates",
            ],
            [
              <strong key="token">Write Token</strong>,
              "Client sends last_write_timestamp; server waits for Replica to catch up",
              "Slight latency on reads, but consistent",
            ],
            [
              <strong key="critical">Critical Path Isolation</strong>,
              "Checkout page always reads Master; Social Feed reads Replica",
              "More complex routing, tuned per use case",
            ],
          ]}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2 mt-4">Why This Kills Canary Monitoring</h4>
        <p className="text-sm text-muted-foreground mb-3">
          If your Canary improves write speed, it may outpace replication—causing &quot;data missing&quot;
          alerts that aren&apos;t the Canary&apos;s fault.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Fix">
            Use relative metrics (Canary vs Stable deviation), not absolute error counts
          </BulletItem>
          <BulletItem title="Advanced">
            Spin up a dedicated Canary Replica isolated from Stable traffic
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="Circuit Breakers: Preventing Cascading Failures" color="green">
        <p className="text-sm text-muted-foreground mb-4">
          A Circuit Breaker automatically cuts off traffic to a failing service to prevent the
          caller from dying too.
        </p>

        <MermaidDiagram
          chart={`flowchart LR
  Closed[CLOSED<br/>Normal] -->|Failures exceed threshold| Open[OPEN<br/>Fail Fast]
  Open -->|Timeout expires| Half[HALF-OPEN<br/>Test]
  Half -->|Success| Closed
  Half -->|Failure| Open
  style Closed fill:#dcfce7,stroke:#16a34a
  style Open fill:#fee2e2,stroke:#dc2626
  style Half fill:#fef3c7,stroke:#d97706`}
        />

        <h4 className="text-sm font-semibold text-foreground mb-2">The Retry Storm Anti-Pattern</h4>
        <p className="text-sm text-muted-foreground mb-3">
          <strong className="text-foreground">Bad:</strong> Service A calls Service B. B is slow
          (5% errors). Engineer adds 5x immediate retries &quot;to hide errors from users.&quot;
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          <strong className="text-red-500">Result:</strong> You just turned 10,000 requests into
          50,000 requests in 1 second. You DDoS&apos;d yourself. Service B collapses completely.
        </p>

        <DataTable
          headers={["Pattern", "Behavior", "When to Use"]}
          rows={[
            [
              <strong key="breaker">Circuit Breaker</strong>,
              "If B fails N times, stop calling for 5 minutes",
              "Service-to-service calls",
            ],
            [
              <strong key="backoff">Exponential Backoff</strong>,
              "Retry after 1s, then 2s, then 4s, then 8s",
              "Any retry scenario",
            ],
            [
              <strong key="jitter">Jitter</strong>,
              "Add randomness to retry timing",
              "Prevent synchronized retry waves",
            ],
            [
              <strong key="bulkhead">Bulkhead</strong>,
              "Isolate thread pools per downstream service",
              "Prevent one slow service from starving others",
            ],
          ]}
        />

        <InterviewTip>
          &quot;I would block that PR. Immediate retries on a failing service guarantee a total
          outage. We need Exponential Backoff with Jitter, plus a Circuit Breaker to fail fast
          when B is unrecoverable. The user sees a graceful error instead of a cascade.&quot;
        </InterviewTip>
      </Subsection>

      <Subsection title="The Zero MTTR Trinity" color="green">
        <p className="text-sm text-muted-foreground mb-4">
          These three tools work together to force Mean Time To Recovery toward zero.
        </p>

        <DataTable
          headers={["Tool", "Role", "MTTR Contribution"]}
          rows={[
            [
              <strong key="canary">Canary Deployment</strong>,
              "The Strategy",
              "Limits blast radius—only 1% of users suffer",
            ],
            [
              <strong key="rollback">Automated Rollbacks</strong>,
              "The Safety Net",
              "Removes human latency—recovery is instant",
            ],
            [
              <strong key="flags">Feature Flags</strong>,
              "The Precision Tool",
              "Flip the flag off—no redeploy needed",
            ],
          ]}
        />

        <Insight title="The Principal TPM Mindset">
          Failures are inevitable in distributed systems. A Junior PM focuses on preventing all
          failures (MTBF). A Principal TPM focuses on making failures small and recoveries instant (MTTR).
          Canary deployments turn a potential outage into a minor glitch that most users never notice.
        </Insight>
      </Subsection>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/k8s-economics"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Kubernetes Economics
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/compliance-governance"
          className="text-sm text-primary hover:underline"
        >
          Next: Compliance & Data Governance &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
