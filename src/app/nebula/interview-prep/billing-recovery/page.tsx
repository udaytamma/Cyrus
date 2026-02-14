"use client";

/**
 * Billing Failure Recovery Story — Tier-0 Financial Integrity Incident
 *
 * Principal TPM interview narrative built around a mid-cycle disk failure
 * on a 5M subscriber HP NonStop (Tandem) billing platform:
 * - Fault-tolerant system exceeding its failure envelope
 * - Sequential recovery pivot (15-year failure mode)
 * - Cycle-level atomicity vs transactional atomicity
 * - Financial asymmetry: $1-2M bounded delay vs $11-12M misstatement exposure
 * - Three-way reconciliation (mediation → rating → ledger)
 * - Structural governance upgrade + platform sunset acceleration
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// ─── Data ────────────────────────────────────────────────────────────────────

const recoveryTimeline = [
  { phase: "Disk replacement", duration: "~18 hours" },
  { phase: "Parallel startup attempt + sequential fallback", duration: "~18 hours" },
  { phase: "Reconciliation and rebuild", duration: "~36 hours" },
  { phase: "Re-processing and bill generation", duration: "~12 hours" },
  { phase: "Total incident-to-invoice", duration: "~3.5 days" },
];

const optionAExposure = [
  { category: "Customer Credits", calc: "100K \u00D7 $10 avg", total: "~$1M" },
  { category: "Call Center Surge", calc: "40% call rate (40K) \u00D7 $60", total: "~$2.4M" },
  { category: "Backend Recovery", calc: "100K \u00D7 $80 fully loaded", total: "~$8M" },
];

const structuralUpgrades = [
  {
    category: "Immediate Operational",
    items: [
      "Documented sequential recovery procedure as formal runbook addendum with validation checkpoints and decision tree",
      "Updated third-party vendor support contacts and escalation procedures",
    ],
  },
  {
    category: "Billing Process Governance",
    items: [
      "Mandatory mediation/rating/ledger parity gate before invoice release",
      "Ledger checkpoint snapshots pre-batch for deterministic rollback",
      "Updated RTO definitions to include financial integrity validation, not just system availability",
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BillingRecoveryPage() {
  return (
    <InterviewPrepLayout
      title="Billing Recovery"
      description="Tier-0 Financial Integrity Incident on 5M Subscriber Platform"
      currentSection="billing-recovery"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Interview Prep
      </Link>

      {/* Cross-reference */}
      <div className="mb-6 p-3 bg-muted/30 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Related:</strong>{" "}
          <Link href="/nebula/interview-prep/tandem-incident-management" className="text-primary hover:underline">
            Tandem Incident Management STAR story &rarr;
          </Link>
          {" "}&bull;{" "}
          <Link href="/nebula/interview-prep/how-billing-works" className="text-primary hover:underline">
            How Billing Works (pipeline reference) &rarr;
          </Link>
        </p>
      </div>

      {/* ── Header ── */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
            Tier-0 Incident
          </span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            Unified Narrative
          </span>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
            Financial Integrity
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Billing Failure Recovery</h1>
        <p className="text-muted-foreground leading-relaxed">
          A <strong className="text-foreground">Tier-0 financial integrity incident</strong> on a 5M subscriber HP NonStop (Tandem) billing platform.
          The system was technically available. The real risk was financial integrity.
        </p>
        <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/30">
          <p className="text-foreground font-semibold italic text-center">
            &ldquo;Integrity &gt; velocity in financial systems.&rdquo;
          </p>
        </div>
      </div>

      {/* ── Quick Nav ── */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "#system-context", label: "System Context", desc: "5M subs, HP NonStop, TMF", color: "border-blue-500/30" },
            { href: "#failure-mode", label: "The Failure Mode", desc: "Mid-cycle disk failure, unclean recovery", color: "border-red-500/30" },
            { href: "#decision-fork", label: "Decision Fork", desc: "MTTR vs financial integrity", color: "border-amber-500/30" },
            { href: "#financial-asymmetry", label: "Financial Asymmetry", desc: "$1-2M bounded vs $11-12M exposure", color: "border-emerald-500/30" },
            { href: "#cycle-atomicity", label: "Cycle Atomicity", desc: "Transaction vs batch-level guarantees", color: "border-purple-500/30" },
            { href: "#stakeholder-coordination", label: "Stakeholder Coordination", desc: "War room across 4 orgs", color: "border-cyan-500/30" },
            { href: "#structural-upgrades", label: "Structural Upgrades", desc: "5 post-incident changes", color: "border-indigo-500/30" },
            { href: "#principal-framing", label: "Principal Framing", desc: "Why this is Principal-caliber", color: "border-rose-500/30" },
            { href: "#delivery-script", label: "90-Second Delivery", desc: "Live interview script", color: "border-violet-500/30" },
            { href: "#pressure-tests", label: "Pressure Tests", desc: "Engineering + CFO panel Q&A", color: "border-red-500/30" },
          ].map((nav) => (
            <a key={nav.href} href={nav.href} className={`p-3 bg-background rounded-lg border ${nav.color} hover:opacity-80 transition-opacity`}>
              <div className="font-medium text-foreground text-sm">{nav.label}</div>
              <div className="text-xs text-muted-foreground">{nav.desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* ── 1. System Context ── */}
      <section id="system-context" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
          <h2 className="text-2xl font-bold text-foreground">System Context</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <p className="text-foreground leading-relaxed">
              This incident occurred on a <strong className="text-blue-600 dark:text-blue-400">~5M subscriber billing platform</strong> running
              on HP NonStop (Tandem) for a major cable MSO, post-integration.
            </p>
          </div>

          {/* Architecture Components */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Architecture</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: "Mediation Layer", desc: "CDR ingestion" },
                { name: "Rating Engine", desc: "Usage-to-charge" },
                { name: "Billing Ledger", desc: "Financial source of truth" },
                { name: "Invoice Pipeline", desc: "Bill generation" },
                { name: "GL Interface", desc: "Revenue posting" },
                { name: "Print/Export", desc: "Downstream systems" },
              ].map((comp) => (
                <div key={comp.name} className="p-3 bg-background rounded-lg border border-border">
                  <div className="font-semibold text-foreground text-sm">{comp.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{comp.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Billing Cycle Structure */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Billing Cycle Structure</div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-background rounded-lg border border-border text-center">
                <div className="text-lg font-bold text-foreground">5M Subscribers</div>
                <div className="text-xs text-muted-foreground mt-1">Total platform</div>
              </div>
              <div className="p-3 bg-background rounded-lg border border-border text-center">
                <div className="text-lg font-bold text-foreground">4 Billing Cycles</div>
                <div className="text-xs text-muted-foreground mt-1">~1.25M each, staggered monthly</div>
              </div>
            </div>
            <p className="text-sm text-foreground">
              Platform used <strong>TMF (Transaction Monitoring Facility)</strong> for transactional atomicity.
            </p>
          </div>

          {/* Critical Nuance */}
          <div className="p-5 bg-gradient-to-r from-red-500/10 to-transparent rounded-lg border border-red-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Critical Nuance</div>
            <p className="text-foreground font-medium italic">
              ACID guarantees applied per transaction. Billing cycles are batch constructs spanning millions of transactions.
              Transactional atomicity &ne; cycle atomicity.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. The Failure Mode ── */}
      <section id="failure-mode" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
          <h2 className="text-2xl font-bold text-foreground">The Failure Mode</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              During an active billing cycle run, a disk in the Tandem storage subsystem failed. The disk was replaced
              per standard hardware procedures. However, on system bring-up,
              <strong className="text-red-600 dark:text-red-400"> the system did not recover cleanly</strong>.
            </p>
          </div>

          {/* Why Unusual */}
          <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-3">Why This Was Unusual</div>
            <p className="text-foreground leading-relaxed mb-4">
              Tandem is <strong>fault-tolerant by design</strong> &mdash; mirrored disks, process pairs, automatic failover.
              A single disk failure should be transparent. In this case, the mirrored disk recovery did not complete properly,
              leaving volume states and TMF audit trails in an <strong>inconsistent state</strong>.
            </p>
            <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-center">
              <p className="text-sm text-foreground font-medium">
                Last occurrence: <strong className="text-red-600 dark:text-red-400">15+ years ago</strong> &mdash;
                No institutional knowledge on current team. Existing runbooks did not cover it.
              </p>
            </div>
          </div>

          {/* Recovery Problem */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">The Recovery Problem</div>
            <p className="text-foreground leading-relaxed mb-4">
              Standard bring-up procedure ran startup scripts in <strong>parallel batches</strong> &mdash;
              pathway servers, TMF, SQL environments, and application processes in coordinated waves.
              The parallel startup <strong className="text-red-600 dark:text-red-400">failed</strong>.
              Subsystems hit dependency failures and false-ready states because the unclean shutdown left
              components in a state that parallel initialization could not resolve.
            </p>
          </div>

          {/* The Pivot */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">The Pivot</div>
            <p className="text-foreground leading-relaxed mb-4">
              I made the call to <strong>abandon parallel startup</strong> and move to <strong>sequential script execution</strong> &mdash;
              bringing up each subsystem individually, validating its state before proceeding to the next.
              This eliminated the race conditions and false-ready states. It worked, but it was slow.
            </p>
          </div>

          {/* Recovery Timeline */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Recovery Timeline</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground border-b border-border">Phase</th>
                    <th className="text-right p-3 font-semibold text-foreground border-b border-border">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {recoveryTimeline.map((row, i) => (
                    <tr key={row.phase} className={`border-b border-border/50 ${i === recoveryTimeline.length - 1 ? "bg-blue-500/5 font-semibold" : ""}`}>
                      <td className="p-3 text-foreground">{row.phase}</td>
                      <td className="p-3 text-right text-foreground">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Post-Recovery State */}
          <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-3">Post-Recovery State</div>
            <p className="text-foreground leading-relaxed mb-4">
              Once online, TMF recovery ran but could not fully recover all in-flight transactions from audit trails.
              We had a <strong>gap</strong>. Billing had stopped entirely during the outage. Because we were mid-cycle:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {[
                { label: "Rating transactions", state: "Some committed, some lost" },
                { label: "Ledger writes", state: "Incomplete for ~8% of cohort" },
                { label: "Batch aggregates", state: "Tax pools, totals broken" },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-red-500/5 rounded-lg border border-red-500/20">
                  <div className="font-medium text-foreground text-sm">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.state}</div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-center">
              <p className="text-sm text-foreground font-medium">
                The system was online. No obvious crash indicators.
                But <strong className="text-red-600 dark:text-red-400">financial state was silently inconsistent</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Failure Sequence Diagram ── */}
      <section className="mb-14">
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">HP NonStop (Tandem) &mdash; Failure Sequence &amp; Recovery Flow</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/interview-prep/billing-recovery-diagram.svg"
            alt="HP NonStop Tandem failure sequence and recovery flow diagram showing 6 phases: platform architecture, disk subsystem failure, unclean state root causes, parallel startup failure, sequential recovery pivot, and post-recovery financial inconsistency state"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* ── 3. The Decision Fork ── */}
      <section id="decision-fork" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
          <h2 className="text-2xl font-bold text-foreground">The Decision Fork</h2>
        </div>

        <div className="p-4 bg-muted/30 rounded-lg border border-border mb-6">
          <p className="text-foreground text-sm">
            At system recovery, we faced two paths:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Option A */}
          <div className="rounded-xl border border-red-500/30 overflow-hidden">
            <div className="bg-red-500/10 px-6 py-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border-2 border-red-500/30 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">A</span>
              <h3 className="text-lg font-semibold text-foreground">Optimize MTTR</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2.5">
                {[
                  "Restart rating and billing batch from last checkpoint",
                  "Generate invoices for the full cycle",
                  "Reconcile the ~8% delta population post-invoice release",
                  "Minimize outage headline",
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Option B */}
          <div className="rounded-xl border border-emerald-500/30 overflow-hidden">
            <div className="bg-emerald-500/10 px-6 py-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold flex-shrink-0">B</span>
              <h3 className="text-lg font-semibold text-foreground">Optimize Financial Integrity</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2.5">
                {[
                  "Freeze invoice generation",
                  "Suspend GL posting",
                  "Run full mediation \u2192 rating \u2192 ledger three-way reconciliation",
                  "Deterministically rebuild affected accounts from mediation source events",
                  "Release invoices only after parity achieved",
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/30">
          <p className="text-foreground text-sm leading-relaxed mb-3">
            Engineering preference leaned toward Option A &mdash; faster recovery, lower outage visibility.
            Finance risk assessment pointed to Option B &mdash; protect ledger integrity.
          </p>
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
            <p className="text-foreground font-semibold">We chose Option B.</p>
          </div>
        </div>
      </section>

      {/* ── 4. Financial Asymmetry Analysis ── */}
      <section id="financial-asymmetry" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
          <h2 className="text-2xl font-bold text-foreground">Financial Asymmetry Analysis</h2>
        </div>

        {/* Impact Scope */}
        <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Cycle cohort</div>
              <div className="text-xl font-bold text-foreground">~1.25M subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Impacted population</div>
              <div className="text-xl font-bold text-red-600 dark:text-red-400">~100K accounts (8%)</div>
            </div>
          </div>
        </div>

        {/* Option A Exposure */}
        <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5 mb-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs">!</span>
            Scenario: Release Corrupted Invoices (Option A)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {optionAExposure.map((row) => (
                  <tr key={row.category} className="border-b border-border/50">
                    <td className="py-2.5 text-foreground font-medium">{row.category}</td>
                    <td className="py-2.5 text-muted-foreground text-xs">{row.calc}</td>
                    <td className="py-2.5 text-right text-red-600 dark:text-red-400 font-semibold">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-center">
            <div className="text-xs text-muted-foreground">Total modeled direct exposure</div>
            <div className="text-xl font-bold text-red-600 dark:text-red-400">&asymp; ~$11&ndash;12M</div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            Backend recovery: reconciliation labor, re-rating, QA per account, invoice reprints, correction cycles.
            Excludes revenue recognition correction complexity and reputational impact.
          </p>
        </div>

        {/* Option B Cost */}
        <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 mb-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-xs">&#10003;</span>
            Scenario: Freeze Cycle (Option B)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-background/60 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground">Invoices delayed</div>
              <div className="text-lg font-bold text-foreground">1.25M invoices, ~3&ndash;4 days</div>
              <div className="text-xs text-muted-foreground mt-1">~$150M receivables shifted temporarily</div>
            </div>
            <div className="p-4 bg-background/60 rounded-lg border border-border">
              <div className="text-sm text-muted-foreground">Late-bill inquiry calls</div>
              <div className="text-lg font-bold text-foreground">~62K short calls (~5%)</div>
              <div className="text-xs text-muted-foreground mt-1">~$750K&ndash;$1M</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
            <div className="text-xs text-muted-foreground">Total bounded operational friction</div>
            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">&asymp; ~$1&ndash;2M</div>
          </div>
        </div>

        {/* Asymmetry Summary */}
        <div className="p-5 bg-gradient-to-r from-emerald-500/10 to-red-500/10 rounded-xl border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="text-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <div className="text-xs text-muted-foreground">Option B (chosen)</div>
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">~$1&ndash;2M</div>
              <div className="text-xs text-muted-foreground">bounded delay</div>
            </div>
            <div className="text-center text-2xl text-muted-foreground font-light">vs</div>
            <div className="text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
              <div className="text-xs text-muted-foreground">Option A (rejected)</div>
              <div className="text-xl font-bold text-red-600 dark:text-red-400">~$11&ndash;12M</div>
              <div className="text-xs text-muted-foreground">modeled exposure</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Cycle-Level Atomicity Insight ── */}
      <section id="cycle-atomicity" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">5</span>
          <h2 className="text-2xl font-bold text-foreground">Cycle-Level Atomicity Insight</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              TMF protected <strong className="text-purple-600 dark:text-purple-400">transaction atomicity</strong>. It did not protect:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "Batch-level ledger aggregation",
                "Tax rollups across cohort",
                "Invoice totals",
                "GL interface consistency",
              ].map((item) => (
                <div key={item} className="p-3 bg-background/60 rounded-lg border border-purple-500/20 text-center">
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-2">Key Insight</div>
            <p className="text-foreground font-medium italic">
              Partial commits across millions of transactions created cycle-level state drift.
              This is what we detected through three-way reconciliation.
            </p>
          </div>

          {/* Reconciliation Approach */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Reconciliation Approach</div>
            <p className="text-foreground leading-relaxed mb-4">
              Three-way reconciliation: <strong>mediation input counts</strong> (CDRs ingested)
              vs <strong>rating engine completion logs</strong> vs <strong>billing ledger postings</strong>.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We used a combination of existing reconciliation reports and ad-hoc queries built specifically for this scenario &mdash;
              we could not assume existing tooling was fully valid against this failure mode, so we
              <strong> validated the tooling itself</strong> before relying on its output.
            </p>
            <p className="text-foreground leading-relaxed">
              We did not patch deltas. We <strong>rebuilt financial state from mediation source-of-truth events</strong> for
              the impacted ~100K accounts, re-rated, re-posted, and validated parity before releasing to invoice generation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. Stakeholder Coordination ── */}
      <section id="stakeholder-coordination" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">6</span>
          <h2 className="text-2xl font-bold text-foreground">Stakeholder Coordination</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5">
            <p className="text-foreground leading-relaxed">
              This was a <strong>war room incident</strong> spanning engineering, billing operations, finance, and vendor management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { team: "Engineering", role: "Drove the sequential recovery pivot and system stabilization" },
              { team: "Billing Operations", role: "Executed the three-way reconciliation and account rebuild" },
              { team: "Finance", role: "Validated the freeze-vs-release risk analysis and approved the cycle hold" },
              { team: "Vendor (HP/Tandem)", role: "Engaged for platform-level diagnostics \u2014 escalation paths were outdated (post-incident finding)" },
            ].map((item) => (
              <div key={item.team} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm">{item.team}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.role}</div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-lg border border-cyan-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400 mb-2">Alignment Challenge</div>
            <p className="text-foreground leading-relaxed">
              Convincing engineering leadership that Option B was correct despite the extended outage window.
              The <strong>financial asymmetry analysis was the deciding artifact</strong> &mdash; once the $11&ndash;12M exposure
              was modeled against the $1&ndash;2M delay cost, the decision became straightforward.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Structural Upgrades ── */}
      <section id="structural-upgrades" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">7</span>
          <h2 className="text-2xl font-bold text-foreground">Structural Upgrades</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
            <p className="text-foreground leading-relaxed">
              After recovery, we institutionalized <strong className="text-indigo-600 dark:text-indigo-400">five changes</strong>:
            </p>
          </div>

          {structuralUpgrades.map((group) => (
            <div key={group.category} className="p-6 rounded-xl border border-border bg-muted/30">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">{group.category}</div>
              <ul className="space-y-2.5">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="w-5 h-5 rounded bg-indigo-500/10 flex items-center justify-center text-xs text-indigo-500 flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Strategic Outcome */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">Strategic Outcome</div>
            <p className="text-foreground leading-relaxed">
              This incident became the <strong>primary evidence artifact for accelerating the platform sunset business case</strong>.
              The argument: we are carrying unquantified operational risk on a revenue-critical billing platform with
              failure modes that exceed current team institutional knowledge, diminishing vendor support, and no guarantee
              the next incident would be recoverable in acceptable timeframe.
            </p>
            <p className="text-foreground leading-relaxed mt-3 font-medium">
              This shifted the sunset conversation from <strong>planned modernization</strong> to <strong>active risk mitigation</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. Principal Framing ── */}
      <section id="principal-framing" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">8</span>
          <h2 className="text-2xl font-bold text-foreground">Principal-Level Framing</h2>
        </div>

        <div className="space-y-6">
          <div className="p-5 bg-rose-500/5 rounded-xl border border-rose-500/30">
            <p className="text-foreground leading-relaxed font-medium">
              The system was technically available. The real risk was <strong>financial integrity</strong>.
              We chose short-term billing delay over long-term ledger corruption and revenue misstatement exposure.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">Why This Story Is Principal-Caliber</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "5M subscriber scale with specific cycle architecture",
                "Explicit decision fork with competing stakeholder perspectives",
                "Clean financial asymmetry math that drove the decision",
                "Cycle-level atomicity nuance \u2014 operational, not textbook",
                "Revenue recognition awareness and downstream impact",
                "Stakeholder coordination across engineering, billing ops, finance, vendors",
                "Reactive recovery converted to deterministic release governance",
                "Platform sunset acceleration with economic framing",
                "Operational texture: specific timeline, tooling decisions, team roles",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs flex-shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
            <p className="text-foreground font-medium text-center leading-relaxed">
              Integrity &gt; velocity in financial systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── 90-Second Live Delivery ── */}
      <section id="delivery-script" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-violet-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
            <span className="text-sm">&#9654;</span>
          </span>
          <h2 className="text-2xl font-bold text-foreground">90-Second Live Delivery</h2>
        </div>

        <div className="p-6 rounded-xl border border-violet-500/30 bg-violet-500/5">
          <div className="text-xs font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400 mb-4">
            Speak This &mdash; Do Not Read It
          </div>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              We experienced a mid-cycle disk failure on our <strong>5M-subscriber Tandem billing platform</strong>.
              The disk was replaced, but the system did not recover cleanly &mdash; parallel startup scripts failed
              due to subsystem dependency inconsistencies from the unclean shutdown. This was a failure mode nobody
              on the team had seen in <strong>over 15 years</strong>. I made the call to pivot to sequential subsystem startup,
              which restored the system but pushed us well into the outage window.
            </p>
            <p>
              Post-recovery, reconciliation showed that about <strong>8% of the 1.25M-cycle cohort</strong> &mdash; roughly 100K accounts &mdash;
              had rating-to-ledger inconsistencies. The system was online, but financial state was not globally consistent.
              Transactional ACID guarantees held at the individual transaction level, but <strong>batch-level cycle atomicity was broken</strong>.
            </p>
            <p>
              We had a clear fork: generate invoices and reconcile later to minimize outage visibility, or freeze invoice release
              and rebuild financial state deterministically. I drove the <strong>financial asymmetry analysis</strong> that made the decision.
              Releasing corrupted invoices exposed us to roughly <strong>$11&ndash;12M</strong> in credits, call surge, and backend recovery.
              Freezing the cycle cost about <strong>$1&ndash;2M</strong> in bounded operational friction from delayed billing.
            </p>
            <p>
              We froze the cycle. Our billing operations team ran a <strong>three-way reconciliation</strong> &mdash;
              mediation inputs against rating logs against ledger postings &mdash; using a mix of existing reports
              and ad-hoc queries we built and validated for this specific scenario. We rebuilt the affected accounts
              from mediation source events, confirmed ledger parity, and released invoices.
              Total incident-to-invoice was about <strong>three and a half days</strong>.
            </p>
            <p className="font-semibold">
              Post-incident, I drove three structural changes: a mandatory financial parity gate before invoice release,
              a sequential recovery runbook with decision tree for startup failures, and critically &mdash; this incident
              became the primary evidence for accelerating the Tandem platform sunset from planned modernization to active risk mitigation.
            </p>
            <p className="font-semibold italic">
              The key insight: transactional atomicity does not guarantee cycle atomicity.
              In billing, financial integrity must override MTTR optics.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pressure Tests ── */}
      <section id="pressure-tests" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">Q</span>
          <h2 className="text-2xl font-bold text-foreground">Pressure Tests &mdash; Engineering + CFO Panel</h2>
        </div>

        {/* Engineering Questions */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">Engineering Panel</span>
          </div>

          <div className="space-y-5">
            {/* E1 */}
            <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                <h3 className="font-semibold text-foreground">&ldquo;ACID and TMF should protect consistency. Why was there drift?&rdquo;</h3>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">
                  TMF guarantees atomicity at the individual transaction level. The failure occurred mid-batch.
                  Some rating transactions committed; some ledger writes did not. Batch orchestration across millions
                  of transactions does not inherit transactional atomicity &mdash; that is a <strong>system-level boundary</strong>.
                  The drift was between committed rating records and uncommitted ledger aggregations, not a database consistency failure.
                </p>
              </div>
            </div>

            {/* E2 */}
            <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                <h3 className="font-semibold text-foreground">&ldquo;Why not release the 92% clean accounts and hold only the 8%?&rdquo;</h3>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">
                  The billing system&apos;s tax calculation and ledger aggregation was <strong>cohort-scoped by design</strong>.
                  Tax pools, cycle-level totals, and GL interface records are computed across the entire cycle population.
                  Releasing a partial population would have required manual override of aggregation boundaries,
                  which introduces its own reconciliation risk &mdash; secondary inconsistencies in tax rollups and GL postings.
                  We assessed that option and determined the risk exceeded the benefit of partial release.
                </p>
              </div>
            </div>

            {/* E3 */}
            <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                <h3 className="font-semibold text-foreground">&ldquo;Couldn&apos;t you just re-run rating without freezing?&rdquo;</h3>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">
                  Re-running rating without first performing deterministic reconciliation risks <strong>compounding the drift</strong>.
                  If ledger state is partially committed, a blind re-run could duplicate charges for accounts that had already posted,
                  or miss accounts that rated but did not post. We needed to know the exact state of every account before re-processing.
                  That required reconciliation first, then targeted rebuild from mediation source-of-truth events.
                </p>
              </div>
            </div>

            {/* E4 */}
            <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                <h3 className="font-semibold text-foreground">&ldquo;The disk failure should have been transparent on Tandem. What went wrong?&rdquo;</h3>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">
                  Correct &mdash; Tandem is designed for transparent disk failover via mirrored pairs.
                  In this case, the mirror resync after disk replacement did not complete cleanly, which left
                  volume states and TMF audit trails inconsistent. The system&apos;s designed fault tolerance was <strong>exceeded</strong>.
                  That is precisely why this was a 15-year failure mode &mdash; it falls outside the expected failure envelope for the platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CFO Questions */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">CFO / Finance Panel</span>
          </div>

          <div className="space-y-5">
            {/* F1 */}
            <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                <h3 className="font-semibold text-foreground">&ldquo;Why freeze $150M of receivables?&rdquo;</h3>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">
                  We <strong>delayed recognition by days, not lost revenue</strong>. Every dollar of receivables was eventually
                  collected on the normal payment timeline from invoice date. Releasing corrupted invoices would have created
                  ~$11&ndash;12M in modeled direct exposure plus restatement complexity if incorrect revenue had been recognized.
                  Delay was bounded and predictable. Misstatement risk was neither.
                </p>
              </div>
            </div>

            {/* F2 */}
            <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                <h3 className="font-semibold text-foreground">&ldquo;Was this near quarter close?&rdquo;</h3>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">
                  Mid-quarter. However, delayed bills shift payment timing &mdash; late payments can spill across reporting windows.
                  By freezing the cycle and releasing clean invoices, we preserved ledger correctness and avoided the risk of
                  <strong> cascading corrections across reporting periods</strong>.
                </p>
              </div>
            </div>

            {/* F3 */}
            <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                <h3 className="font-semibold text-foreground">&ldquo;How do you justify the $80/account backend recovery cost?&rdquo;</h3>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">
                  That is a <strong>fully loaded cost</strong>: individual account reconciliation and investigation, re-rating,
                  QA validation per account, invoice reprints, running special correction cycles, and customer communication
                  for accounts that received incorrect invoices. At 100K accounts, even with partial automation,
                  the per-account cost of after-the-fact correction is significantly higher than getting it right before release.
                </p>
              </div>
            </div>

            {/* F4 */}
            <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                <h3 className="font-semibold text-foreground">&ldquo;What if this happens again?&rdquo;</h3>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">
                  Three layers of protection now. First, the <strong>mandatory parity gate</strong> means corrupted invoices cannot release &mdash;
                  the failure mode we experienced is now structurally blocked at the process level. Second, the <strong>sequential recovery runbook</strong> closes
                  the operational gap. Third, the <strong>platform sunset is accelerated</strong> &mdash; this incident provided the quantified risk case
                  to move Tandem decommissioning from planned modernization to active risk mitigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
        <Link
          href="/nebula/interview-prep/migration-story"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Migration Story
        </Link>
        <Link
          href="/nebula/interview-prep/how-billing-works"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          How Billing Works &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
