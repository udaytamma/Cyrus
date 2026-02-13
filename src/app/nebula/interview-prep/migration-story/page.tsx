"use client";

/**
 * Migration Story - Hardened End-to-End SDL Migration Narrative
 *
 * Unified Principal-level narrative that closes 5 hostile-panel holes:
 * - "Magical sharding" (query strategy, not DB rewrite)
 * - Zombie SOC resolution (Best Fit mapping with legal wrapper)
 * - Synergy timing (fiscal year-end quarterly reporting)
 * - Probability calibration (clustered defects, not uniform sampling)
 * - "Overly cautious operator" (slowed tactically to accelerate structurally)
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// ─── Data ────────────────────────────────────────────────────────────────────

const quantitativeGates = [
  { metric: "Reconciliation variance", threshold: "&lt; 0.5%" },
  { metric: "MTTR", threshold: "&lt; 24 hours" },
  { metric: "Rollback capability", threshold: "&lt; 6 hours" },
  { metric: "Fallout rate", threshold: "&lt; 2%" },
];

const forkOptions = [
  {
    id: "option-a",
    label: "A",
    title: "Maintain Velocity",
    color: { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/30" },
    bullets: [
      "Continue statistical sampling",
      "Accept 5% variance as \"correctable\"",
      "Avoid dual-run penalty",
      "Fix forward post-cutover",
    ],
  },
  {
    id: "option-b",
    label: "B",
    title: "Stop the Line",
    color: { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/30" },
    bullets: [
      "Build deterministic validator",
      "Resolve catalog gaps pre-cutover",
      "Accept 6-week delay",
      "Pay ~$1.4M penalty",
    ],
  },
];

const modeledDownside = [
  { category: "Customer Credits", calc: "1.6M x $15 blanket credit", total: "~$24M" },
  { category: "Support Surge", calc: "20% call rate x $45 Tier 2", total: "~$14.4M" },
  { category: "Technical Recovery", calc: "External tiger team + overtime", total: "~$2M" },
];

const principalSignals = [
  { signal: "Technical realism", detail: "No magical mainframe rewrite" },
  { signal: "Statistical reasoning", detail: "Clustered defect explanation" },
  { signal: "Commercial resolution", detail: "Best Fit mapping with legal wrapper" },
  { signal: "CFO-level framing", detail: "Synergy reporting impact" },
  { signal: "Quantified asymmetry", detail: "Capped vs modeled downside" },
  { signal: "Institutional upgrade", detail: "Shadow-First governance standard" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MigrationStoryPage() {
  return (
    <InterviewPrepLayout
      title="Migration Story"
      description="Hardened end-to-end SDL migration narrative for hostile Principal-level panels"
      currentSection="migration-story"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Interview Prep
      </Link>

      {/* Cross-reference to original */}
      <div className="mb-6 p-3 bg-muted/30 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">STAR version:</strong>{" "}
          <Link href="/nebula/interview-prep/sdl-migration" className="text-primary hover:underline">
            View 3-story STAR format &rarr;
          </Link>
        </p>
      </div>

      {/* ── Header ── */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            Unified Narrative
          </span>
          <span className="px-2.5 py-1 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
            Hostile Panel Ready
          </span>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
            5 Holes Closed
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Migration Story &mdash; Hardened Narrative</h1>
        <p className="text-muted-foreground leading-relaxed">
          This is not defensive Q&amp;A. It is a coherent, end-to-end story built as a unified Principal narrative.
          Each section builds on the previous one. The throughline:
        </p>
        <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/30">
          <p className="text-foreground font-semibold italic text-center">
            &ldquo;We slowed tactically to accelerate structurally.&rdquo;
          </p>
        </div>
      </div>

      {/* ── Quick Nav ── */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "#architecture", label: "Architecture & Control", desc: "Rolling wave + dual mediation", color: "border-blue-500/30" },
            { href: "#structural-break", label: "The Structural Break", desc: "Installed base reality", color: "border-amber-500/30" },
            { href: "#reconciliation-fix", label: "Reconciliation Latency", desc: "ETL sharding strategy", color: "border-purple-500/30" },
            { href: "#the-fork", label: "The Fork", desc: "Velocity vs stop-the-line", color: "border-red-500/30" },
            { href: "#asymmetry", label: "The Asymmetry", desc: "$1.5M capped vs $40M modeled", color: "border-emerald-500/30" },
            { href: "#zombie-socs", label: "Zombie SOC Resolution", desc: "Best Fit mapping", color: "border-cyan-500/30" },
            { href: "#cfo-synergy", label: "CFO & Synergy", desc: "Fiscal year-end alignment", color: "border-indigo-500/30" },
            { href: "#not-cautious", label: "Not Cautious", desc: "Tactical slow, structural fast", color: "border-rose-500/30" },
            { href: "#principal-scrutiny", label: "Principal Scrutiny", desc: "Why this holds", color: "border-primary/30" },
            { href: "#areas-to-tighten", label: "Areas to Tighten", desc: "6 holes to close", color: "border-amber-500/30" },
          ].map((nav) => (
            <a key={nav.href} href={nav.href} className={`p-3 bg-background rounded-lg border ${nav.color} hover:opacity-80 transition-opacity`}>
              <div className="font-medium text-foreground text-sm">{nav.label}</div>
              <div className="text-xs text-muted-foreground">{nav.desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Holes Closed ── */}
      <div className="mb-10 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs">&#10003;</span>
          Holes Closed by This Version
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { hole: "Magical sharding", fix: "Query strategy redesign via external ETL, not DB rewrite" },
            { hole: "Zombie SOC resolution", fix: "Best Fit mapping with legal wrapper + price-match discount" },
            { hole: "Synergy timing", fix: "Fiscal year-end quarterly reporting, not just wave optics" },
            { hole: "Probability calibration", fix: "Clustered defect distribution invalidates statistical sampling" },
            { hole: "Overly cautious operator", fix: "Slowed tactically, resumed at higher velocity, institutionalized validator" },
          ].map((item) => (
            <div key={item.hole} className="p-3 bg-background/60 rounded-lg border border-border">
              <div className="font-medium text-foreground text-sm">{item.hole}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.fix}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 1. End-to-End Architecture & Control Model ── */}
      <section id="architecture" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
          <h2 className="text-2xl font-bold text-foreground">End-to-End Architecture &amp; Control Model</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              We were migrating 1.6M Suddenlink subscribers from legacy ICOMS to the Altice BSS stack
              under a hard vendor sunset with a <strong className="text-blue-600 dark:text-blue-400">$1.2M/month dual-run penalty</strong>.
            </p>
            <p className="text-foreground leading-relaxed">
              To avoid Big Bang risk, I architected a <strong>Rolling Wave Migration</strong> supported by:
            </p>
          </div>

          {/* Architecture Components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Dual Mediation", desc: "Network usage fed to both systems simultaneously" },
              { name: "Shadow Billing", desc: "New BSS generated parallel invoices for comparison" },
              { name: "100% Deterministic Reconciliation", desc: "Every account compared, not sampled" },
              { name: "Mid-Cycle Cutover Logic", desc: "Clean handoff without billing gaps" },
            ].map((comp) => (
              <div key={comp.name} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm">{comp.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{comp.desc}</div>
              </div>
            ))}
          </div>

          {/* Key Principle */}
          <div className="p-5 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg border border-blue-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">Key Principle</div>
            <p className="text-foreground font-medium italic">
              Financial exposure must remain decoupled from technical migration velocity.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Each wave (~160k subscribers) ran for a full billing cycle in shadow mode before cutover.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="p-6 bg-background rounded-xl border border-border">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">Migration Flow</div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <div className="px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/30 text-foreground font-medium">Network Usage</div>
              <span className="text-muted-foreground">&darr;</span>
              <div className="px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/30 text-foreground font-medium">Dual Mediation</div>
              <div className="flex items-center gap-6 mt-1">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-muted-foreground">&darr;</span>
                  <div className="px-3 py-1.5 bg-amber-500/10 rounded-lg border border-amber-500/30 text-foreground text-xs font-medium">Legacy ICOMS</div>
                  <span className="text-muted-foreground">&darr;</span>
                  <div className="px-3 py-1.5 bg-muted/50 rounded-lg border border-border text-muted-foreground text-xs">Actual Bill</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-muted-foreground">&darr;</span>
                  <div className="px-3 py-1.5 bg-emerald-500/10 rounded-lg border border-emerald-500/30 text-foreground text-xs font-medium">Target BSS</div>
                  <span className="text-muted-foreground">&darr;</span>
                  <div className="px-3 py-1.5 bg-muted/50 rounded-lg border border-border text-muted-foreground text-xs">Shadow Bill</div>
                </div>
              </div>
              <span className="text-muted-foreground mt-1">&darr;</span>
              <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/30 text-foreground font-medium">Deterministic Reconciliation</div>
              <span className="text-muted-foreground">&darr;</span>
              <div className="px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30 text-foreground font-medium">Go / No-Go Gate</div>
              <span className="text-muted-foreground">&darr;</span>
              <div className="px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/30 text-foreground font-medium">Mid-Cycle Cutover</div>
            </div>
          </div>

          {/* Quantitative Gates */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">Quantitative Gates</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {quantitativeGates.map((gate) => (
                <div key={gate.metric} className="p-3 bg-background rounded-lg border border-border text-center">
                  <div className="text-xs text-muted-foreground">{gate.metric}</div>
                  <div className="text-lg font-bold text-foreground mt-1" dangerouslySetInnerHTML={{ __html: gate.threshold }} />
                </div>
              ))}
            </div>
            <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20 text-center">
              <p className="text-sm text-foreground font-medium">
                No subjective approvals. Only quantitative clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Structural Break ── */}
      <section id="structural-break" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
          <h2 className="text-2xl font-bold text-foreground">The Structural Break: Installed Base Reality</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              By Wave 3, shadow billing exposed a <strong className="text-amber-600 dark:text-amber-400">Catalog Parity Gap</strong>.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We had validated the Commercial Catalog (current products). We had <strong>not</strong> validated the
              Installed Base Catalog &mdash; 15 years of retention offers, retired SOCs, manual overrides.
            </p>
          </div>

          {/* Match Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/30 text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">85%</div>
              <div className="text-sm text-muted-foreground mt-1">Matched cleanly</div>
            </div>
            <div className="p-5 bg-red-500/5 rounded-xl border border-red-500/30 text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">15%</div>
              <div className="text-sm text-muted-foreground mt-1">Undocumented &ldquo;Zombie SOCs&rdquo;</div>
            </div>
            <div className="p-5 bg-amber-500/5 rounded-xl border border-amber-500/30 text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">5%</div>
              <div className="text-sm text-muted-foreground mt-1">Wave 3 variance trend</div>
            </div>
          </div>

          {/* Statistical Reasoning */}
          <div className="p-5 bg-red-500/5 rounded-xl border border-red-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Why Sampling Was Unsafe</div>
            <p className="text-foreground leading-relaxed">
              <strong>Sampling assumes uniform error distribution.</strong> Legacy billing errors cluster in long-tail segments.
              Errors were concentrated in older markets with undocumented retention offers.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Wave 3 showed a 5% variance trend in that market. Extrapolated across remaining 35 CORPs,
              that was not hypothetical risk &mdash; it was <strong className="text-foreground">trend-backed exposure</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Reconciliation Latency Failure ── */}
      <section id="reconciliation-fix" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
          <h2 className="text-2xl font-bold text-foreground">The Reconciliation Latency Failure</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <p className="text-foreground leading-relaxed">
              When we switched from sample audits to full-population validation (~8M comparison points per wave),
              reconciliation latency <strong className="text-purple-600 dark:text-purple-400">exploded from hours to 4 days</strong>.
            </p>
            <div className="mt-4 p-4 bg-background/60 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Root Cause</div>
              <p className="text-sm text-foreground">
                ICOMS extract engine was single-threaded. Designed for sampling, not full parity validation.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">
              Solution: Application-Side Sharding
            </div>
            <p className="text-sm text-muted-foreground mb-4 italic">
              We did not re-architect the mainframe.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "External ETL orchestration (not database rewrite)",
                "20 concurrent account-range-based extraction jobs",
                "Executed during 2 AM\u20134 AM maintenance windows",
                "Saturated I/O without table locks or call center impact",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center text-xs text-emerald-500 flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-xl border border-border">
            <div className="text-center flex-1">
              <div className="text-2xl font-bold text-red-500">4 days</div>
              <div className="text-xs text-muted-foreground">Before</div>
            </div>
            <div className="text-2xl text-muted-foreground">&rarr;</div>
            <div className="text-center flex-1">
              <div className="text-2xl font-bold text-emerald-500" dangerouslySetInnerHTML={{ __html: "&lt;4 hours" }} />
              <div className="text-xs text-muted-foreground">After</div>
            </div>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-foreground italic text-center">
              This was a <strong>query strategy redesign</strong>, not a database rewrite.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. The Fork ── */}
      <section id="the-fork" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
          <h2 className="text-2xl font-bold text-foreground">The Fork</h2>
        </div>

        <div className="p-4 bg-muted/30 rounded-lg border border-border mb-6">
          <p className="text-foreground text-sm">
            The fork was not rollback vs no rollback. It was:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forkOptions.map((opt) => (
            <div key={opt.id} className={`rounded-xl border ${opt.color.border} overflow-hidden`}>
              <div className={`${opt.color.bg} px-6 py-4 flex items-center gap-3`}>
                <span className={`w-8 h-8 rounded-full border-2 ${opt.color.border} ${opt.color.text} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {opt.label}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{opt.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5">
                  {opt.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${opt.label === "A" ? "bg-red-500" : "bg-emerald-500"} flex-shrink-0 mt-1.5`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. The Asymmetry ── */}
      <section id="asymmetry" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">5</span>
          <h2 className="text-2xl font-bold text-foreground">The Asymmetry</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Bounded Downside */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-xs">&#10003;</span>
              Bounded Downside (Option B)
            </h3>
            <ul className="space-y-2.5">
              {[
                "$1.4M dual-run penalty",
                "~$120k incremental rework",
                "Temporary schedule slip",
                "No structural fiscal year breach (recovered later)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
              <div className="text-xs text-muted-foreground">Total capped exposure</div>
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">~$1.5M</div>
            </div>
          </div>

          {/* Modeled Downside */}
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs">!</span>
              Modeled Downside (Option A)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  {modeledDownside.map((row) => (
                    <tr key={row.category} className="border-b border-border/50">
                      <td className="py-2 text-foreground font-medium">{row.category}</td>
                      <td className="py-2 text-muted-foreground text-xs">{row.calc}</td>
                      <td className="py-2 text-right text-red-600 dark:text-red-400 font-semibold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-center">
              <div className="text-xs text-muted-foreground">Total modeled direct cost</div>
              <div className="text-xl font-bold text-red-600 dark:text-red-400">~$40M</div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Excludes churn and reputational exposure.
            </p>
          </div>
        </div>

        <div className="p-5 bg-muted/30 rounded-xl border border-border">
          <p className="text-foreground text-sm leading-relaxed">
            This was <strong>not worst-case stacking</strong>. It was modeled off observed variance trend.
            We presented this explicitly to the Executive Committee.
          </p>
        </div>
      </section>

      {/* ── 6. Resolving Zombie SOCs ── */}
      <section id="zombie-socs" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">6</span>
          <h2 className="text-2xl font-bold text-foreground">Resolving Zombie SOCs (Product Realism)</h2>
        </div>

        <div className="space-y-6">
          <div className="p-5 bg-cyan-500/5 rounded-xl border border-cyan-500/30">
            <p className="text-foreground leading-relaxed">
              Detection alone does not fix catalog gaps. For legacy plans with no direct equivalent, we implemented:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Best Fit Mapping Logic", desc: "Pre-approved commercial equivalents" },
              { label: "Legal-Reviewed Wrapper", desc: "Contractual coverage for plan changes" },
              { label: "Auto-Migration", desc: "Automatic upgrade to modern equivalent plan" },
              { label: "Price-Match Discount", desc: "Permanent discount preserving bill parity" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Customer Experience */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">Customer Experience</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Same effective price", icon: "&#10003;" },
                { label: "Improved product tier", icon: "&#9733;" },
                { label: "No manual intervention", icon: "&#10003;" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 p-3 bg-background/60 rounded-lg border border-border">
                  <span className="text-emerald-500" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-foreground">
              The <strong>0.6% fallout rate</strong> reflected only technical provisioning issues &mdash; not catalog gaps.
              That is apples-to-apples with industry definitions.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. CFO & Synergy Timeline ── */}
      <section id="cfo-synergy" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">7</span>
          <h2 className="text-2xl font-bold text-foreground">CFO &amp; Synergy Timeline</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              The issue was not $28k cost of capital. It was <strong className="text-indigo-600 dark:text-indigo-400">Quarterly Synergy Realization</strong>.
            </p>
            <p className="text-foreground leading-relaxed">
              Delaying Wave 4 threatened pushing the final wave past fiscal year-end, which would have
              impacted reported M&amp;A synergy targets.
            </p>
          </div>

          {/* Mitigation */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">Mitigation Strategy</div>
            <ul className="space-y-2.5">
              {[
                "Compressed final two waves into concurrent execution",
                "Recovered schedule post-validator deployment",
                "Protected annual synergy reporting timeline",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center text-xs text-emerald-500 flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-indigo-500/5 rounded-lg border border-indigo-500/20">
            <p className="text-sm text-foreground italic text-center">
              This was <strong>portfolio-level financial alignment</strong> &mdash; not wave-level optics.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. Why This Was Not "Cautious Leadership" ── */}
      <section id="not-cautious" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">8</span>
          <h2 className="text-2xl font-bold text-foreground">Why This Was Not &ldquo;Cautious Leadership&rdquo;</h2>
        </div>

        <div className="space-y-6">
          <div className="p-5 bg-rose-500/5 rounded-xl border border-rose-500/30">
            <p className="text-foreground leading-relaxed font-medium">
              We did not slow migration permanently. We:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { step: "1", action: "Diagnosed clustered defect risk" },
              { step: "2", action: "Re-engineered extract latency" },
              { step: "3", action: "Institutionalized deterministic validation" },
              { step: "4", action: "Resumed migration at higher velocity" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border border-border">
                <span className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </span>
                <span className="text-sm text-foreground">{item.action}</span>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">Results</div>
            <p className="text-foreground leading-relaxed mb-4">
              Remaining 40 CORPs migrated with <strong>0.6% fallout</strong> vs 2&ndash;3% industry norm.
            </p>
            <p className="text-foreground leading-relaxed">
              The validator became <strong>enterprise standard</strong> for:
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Future acquisitions", "Product launches", "Data parity audits"].map((item) => (
                <span key={item} className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
            <p className="text-foreground font-semibold italic text-center text-lg">
              &ldquo;We slowed tactically to accelerate structurally.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. Why This Holds Under Principal Scrutiny ── */}
      <section id="principal-scrutiny" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">9</span>
          <h2 className="text-2xl font-bold text-foreground">Why This Holds Under Principal Scrutiny</h2>
        </div>

        <div className="space-y-6">
          {/* Principal Signals */}
          <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-4">This Story Shows</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {principalSignals.map((item) => (
                <div key={item.signal} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs flex-shrink-0 mt-0.5">&#10003;</span>
                  <div>
                    <span className="text-sm font-medium text-foreground">{item.signal}</span>
                    <span className="text-sm text-muted-foreground"> &mdash; {item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Not This / It Is This */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-3">It Is Not</div>
              <p className="text-foreground italic">
                &ldquo;We improved governance.&rdquo;
              </p>
            </div>
            <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">It Is</div>
              <p className="text-foreground italic leading-relaxed">
                &ldquo;We converted a $1.5M capped premium into protection against a $40M modeled exposure,
                preserved M&amp;A synergy targets, and permanently upgraded migration standards.&rdquo;
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/30">
            <p className="text-foreground font-semibold text-center leading-relaxed">
              That is Principal-level judgment under economic and architectural tension.
            </p>
          </div>
        </div>
      </section>

      {/* ── Areas to Tighten ── */}
      <section id="areas-to-tighten" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">!</span>
          <h2 className="text-2xl font-bold text-foreground">Obvious Holes / Areas to Tighten</h2>
        </div>

        <div className="space-y-5">
          {/* Hole 1 */}
          <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <h3 className="font-semibold text-foreground">Missing: &ldquo;Who opposed you?&rdquo;</h3>
            </div>
            <p className="text-sm text-foreground leading-relaxed ml-10">
              The narrative describes the fork and the ExecComm presentation but never names a specific
              adversary or stakeholder who pushed back. Principal interviews probe <strong>interpersonal tension</strong>,
              not just analytical tension. Add a 2&ndash;3 sentence moment where someone (VP of Ops? CFO directly?)
              pushed for Option A and how you navigated that specific person.
            </p>
          </div>

          {/* Hole 2 */}
          <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <h3 className="font-semibold text-foreground">Missing: Personal failure/learning moment</h3>
            </div>
            <p className="text-sm text-foreground leading-relaxed ml-10">
              Every section ends with &ldquo;we did the right thing and it worked.&rdquo; Principal panels
              will ask: &ldquo;What would you do differently?&rdquo; or &ldquo;What did you get wrong?&rdquo;
              There&apos;s no vulnerability anchor. Even something like &ldquo;I should have validated the
              Installed Base Catalog from Wave 1 instead of discovering it at Wave 3&rdquo; would add credibility.
            </p>
          </div>

          {/* Hole 3 */}
          <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <h3 className="font-semibold text-foreground">The $40M model needs a confidence qualifier</h3>
            </div>
            <p className="text-sm text-foreground leading-relaxed ml-10">
              You say &ldquo;not worst-case stacking&rdquo; and &ldquo;modeled off observed variance trend,&rdquo;
              but a sharp interviewer will ask: &ldquo;What was your confidence interval?&rdquo; or &ldquo;How
              did you validate the $15 blanket credit assumption?&rdquo; Right now it reads as a point estimate
              without bounds. Even adding &ldquo;based on 3 data points from Waves 1&ndash;3 extrapolated at
              the observed growth rate&rdquo; would strengthen it.
            </p>
          </div>

          {/* Hole 4 */}
          <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
              <h3 className="font-semibold text-foreground">Section 7 (CFO &amp; Synergy) is thin compared to the rest</h3>
            </div>
            <p className="text-sm text-foreground leading-relaxed ml-10">
              It&apos;s the shortest section and the synergy argument is stated but not demonstrated. How did
              you know the fiscal year-end was at risk? What was the specific quarterly target? How did compressing
              two waves into concurrent execution actually work operationally (resource contention? risk of
              double-failure?)? This is the section most likely to get &ldquo;tell me more&rdquo; and it
              currently doesn&apos;t have enough depth.
            </p>
          </div>

          {/* Hole 5 */}
          <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
              <h3 className="font-semibold text-foreground">No 30-second executive version</h3>
            </div>
            <p className="text-sm text-foreground leading-relaxed ml-10">
              The existing SDL Migration page (#5) has a 30-second version for each story. This unified
              narrative doesn&apos;t have one. You&apos;ll need a 60&ndash;90 second version of this full arc
              for when an interviewer says &ldquo;give me the quick version.&rdquo;
            </p>
          </div>

          {/* Hole 6 */}
          <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</span>
              <h3 className="font-semibold text-foreground">Zombie SOC resolution could be probed harder</h3>
            </div>
            <p className="text-sm text-foreground leading-relaxed ml-10">
              &ldquo;Best Fit Mapping&rdquo; is clean, but what about customers who didn&apos;t want the modern
              equivalent? Was there an opt-out? What was the complaint rate? The 0.6% fallout is strong, but
              a Product-minded interviewer will ask about customer choice and consent.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
        <Link
          href="/nebula/interview-prep/the-1-percent-difference"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; The 1% Difference
        </Link>
        <Link
          href="/nebula/interview-prep"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          All Sections &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
