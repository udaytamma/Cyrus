"use client";

/**
 * Migration Story - Semantic Compression Under Hard Sunset Pressure
 *
 * Unified Principal-level narrative built around cross-engine semantic drift
 * under aggressive SOC compression and CORP remapping:
 * - SOC Compression risk (~150K -> ~32K canonical constructs)
 * - Cross-engine behavioral analysis (retention override ordering, rounding drift)
 * - Jurisdiction remap implications (CORP determines tax, franchise, regulatory)
 * - Deterministic validation rationale (~10M behavioral comparisons per wave)
 * - Throughput redesign under legacy constraints (ETL sharding, not DB rewrite)
 * - Controlled economic tradeoff ($2M bounded vs $9-10M modeled)
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
      "Resolve semantic compression drift pre-cutover",
      "Accept schedule slip (~6 weeks)",
      "Incur ~$2M total overrun",
    ],
  },
];

const modeledDownside = [
  { category: "Customer Credits", calc: "80K x $10 goodwill credit", total: "~$800K" },
  { category: "Call Center Surge", calc: "40% call rate (32K) x $60 Tier 2", total: "~$1.9M" },
  { category: "Backend Recovery", calc: "80K x $80 fully loaded (reconciliation, re-rating, QA, reprints)", total: "~$6.4M" },
];

const principalSignals = [
  { signal: "Semantic compression risk", detail: "Identified cross-engine behavioral divergence under SOC compression" },
  { signal: "Cross-engine behavioral analysis", detail: "Operator precedence, rounding shifts, bundle collapse drift" },
  { signal: "Jurisdiction remap implications", detail: "CORP determines tax, franchise fees, regulatory surcharges" },
  { signal: "Deterministic validation rationale", detail: "Why sampling fails under clustered semantic drift" },
  { signal: "Throughput redesign under legacy constraints", detail: "ETL sharding without mainframe modification" },
  { signal: "Controlled economic tradeoff", detail: "$2M bounded overrun vs $9-10M modeled exposure" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MigrationStoryPage() {
  return (
    <InterviewPrepLayout
      title="Migration Story"
      description="Semantic Compression Under Hard Sunset Pressure - Principal-level narrative"
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
            7 Stress Tests
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Semantic Compression Under Hard Sunset Pressure</h1>
        <p className="text-muted-foreground leading-relaxed">
          This is not a data quality story. It is a <strong className="text-foreground">systems architecture</strong> story
          about cross-engine behavioral drift under aggressive SOC compression and CORP remapping.
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
            { href: "#architecture", label: "Context & Architecture", desc: "Hard sunset, 50 CORPs, 6 waves", color: "border-blue-500/30" },
            { href: "#structural-risk", label: "Structural Risk", desc: "SOC compression + CORP remap", color: "border-orange-500/30" },
            { href: "#behavioral-drift", label: "Behavioral Drift", desc: "Wave 2 cross-engine detection", color: "border-amber-500/30" },
            { href: "#deterministic-validation", label: "Deterministic Validation", desc: "~10M behavioral comparisons", color: "border-purple-500/30" },
            { href: "#throughput-redesign", label: "Throughput Redesign", desc: "ETL sharding strategy", color: "border-teal-500/30" },
            { href: "#the-fork", label: "The Decision", desc: "Velocity vs stop-the-line", color: "border-red-500/30" },
            { href: "#asymmetry", label: "Modeled Exposure", desc: "$2M bounded vs $9-10M modeled", color: "border-emerald-500/30" },
            { href: "#commercial-resolution", label: "Commercial Resolution", desc: "SOC compression edge cases", color: "border-cyan-500/30" },
            { href: "#cfo-synergy", label: "CFO & Recovery", desc: "Timeline recovery", color: "border-indigo-500/30" },
            { href: "#not-cautious", label: "Principal Framing", desc: "Asymmetric risk management", color: "border-rose-500/30" },
            { href: "#delivery-script", label: "90-Second Delivery", desc: "Live interview script", color: "border-violet-500/30" },
            { href: "#stress-tests", label: "Stress Tests", desc: "7 hostile PE challenges", color: "border-red-500/30" },
          ].map((nav) => (
            <a key={nav.href} href={nav.href} className={`p-3 bg-background rounded-lg border ${nav.color} hover:opacity-80 transition-opacity`}>
              <div className="font-medium text-foreground text-sm">{nav.label}</div>
              <div className="text-xs text-muted-foreground">{nav.desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Core Framing ── */}
      <div className="mb-10 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs">&#10003;</span>
          Why This Is a Systems Architecture Story
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { hole: "SOC compression risk", fix: "~150K legacy combinations compressed to ~32K canonical constructs" },
            { hole: "Behavioral divergence", fix: "Cross-engine semantic drift: operator precedence, rounding, bundle collapse" },
            { hole: "Jurisdiction remap", fix: "CORP determines tax, franchise fees, regulatory surcharges, revenue reporting" },
            { hole: "Sampling invalidation", fix: "Clustered semantic drift makes statistical sampling structurally unsafe" },
            { hole: "Throughput under constraints", fix: "ETL sharding without mainframe modification" },
            { hole: "Controlled tradeoff", fix: "$2M bounded overrun vs $9-10M modeled exposure" },
          ].map((item) => (
            <div key={item.hole} className="p-3 bg-background/60 rounded-lg border border-border">
              <div className="font-medium text-foreground text-sm">{item.hole}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.fix}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 1-2. Context & Architecture ── */}
      <section id="architecture" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
          <h2 className="text-2xl font-bold text-foreground">Context &amp; Architecture</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              We were migrating 1.6M Suddenlink subscribers from legacy ICOMS (IBM i) to the Altice BSS stack.
              Mid-program, the vendor enforced a <strong className="text-blue-600 dark:text-blue-400">hard termination clause</strong>:
            </p>
            <ul className="space-y-1.5 mb-4 ml-1">
              {[
                "6 months to complete migration",
                "$1.2M per month dual-run penalty beyond that date",
                "No extension",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Execution Model */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Execution Model</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {[
                { label: "50 CORPs", sub: "Operating regions" },
                { label: "4 Billing Cycles", sub: "A / B / C / D per month" },
                { label: "6 Waves", sub: "~250K subscribers each" },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-background rounded-lg border border-border text-center">
                  <div className="text-lg font-bold text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground">
              Each wave defined by <strong>CORP &times; billing-cycle cohort</strong>. Each subscriber bills once per month within a cycle.
            </p>
            <p className="text-sm text-muted-foreground mt-2 italic">
              There was no buffer. Any delay would immediately push into overage.
              Early waves intentionally included mixed customer types (residential, SMB, high-tenure legacy bundles) to surface structural defects early.
            </p>
          </div>

          {/* Architecture Components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Dual Mediation", desc: "Network usage fed to both systems simultaneously" },
              { name: "Shadow Billing", desc: "New BSS generated parallel invoices for comparison" },
              { name: "100% Deterministic Reconciliation", desc: "Every account compared, not sampled" },
              { name: "Cycle-Aligned Cutover Logic", desc: "Clean handoff without billing gaps" },
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
              Each wave (~250K subscribers) ran for a full billing cycle in shadow mode before cutover.
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
              <div className="px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30 text-foreground font-medium">Quantitative Gate</div>
              <span className="text-muted-foreground">&darr;</span>
              <div className="px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/30 text-foreground font-medium">Cycle-Aligned Cutover</div>
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
              <p className="text-sm text-foreground font-semibold mt-2 italic">
                Executives did not approve dates. They approved metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Structural Risk: Semantic Compression + Jurisdiction Remap ── */}
      <section id="structural-risk" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
          <h2 className="text-2xl font-bold text-foreground">The Structural Risk: Semantic Compression + Jurisdiction Remap</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-orange-500/30 bg-orange-500/5">
            <p className="text-foreground leading-relaxed">
              This was not a data quality problem. It was a <strong className="text-orange-600 dark:text-orange-400">systems architecture</strong> problem:
              two billing engines processing the same customer base under different semantic models.
            </p>
          </div>

          {/* A. SOC Compression */}
          <div className="p-6 rounded-xl border border-orange-500/30 bg-muted/30">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full">A</span>
              <h3 className="font-semibold text-foreground text-lg">SOC Compression</h3>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Legacy ICOMS carried <strong className="text-orange-600 dark:text-orange-400">~150,000 SOC (Service Order Code) combinations</strong> &mdash;
              accumulated over 15 years of retention offers, regional bundles, retired promotions, and one-off CSR overrides.
            </p>
            <p className="text-foreground leading-relaxed mb-5">
              The target BSS compressed these into <strong>~32,000 canonical constructs</strong>.
              That compression was architecturally necessary but introduced semantic risk vectors:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { vector: "Discount stacking precedence", desc: "Which discount applies first when multiple overlap" },
                { vector: "Retention override ordering", desc: "Legacy vs target engine apply overrides in different sequence" },
                { vector: "Bundle collapse logic", desc: "How multi-service bundles decompose into billing components" },
                { vector: "Rounding behavior", desc: "Per-line rounding (legacy) vs invoice-level rounding (target)" },
                { vector: "Tax computation boundaries", desc: "Where tax calculation triggers differ between engines" },
              ].map((item) => (
                <div key={item.vector} className="p-3 bg-background/60 rounded-lg border border-orange-500/20">
                  <div className="font-medium text-foreground text-sm">{item.vector}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* B. Zipcode → CORP Remapping */}
          <div className="p-6 rounded-xl border border-orange-500/30 bg-muted/30">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full">B</span>
              <h3 className="font-semibold text-foreground text-lg">Zipcode &rarr; CORP Remapping</h3>
            </div>
            <p className="text-foreground leading-relaxed mb-5">
              Each subscriber&apos;s <strong>CORP (Community Operating Region/Plant)</strong> determines far more than billing address.
              The migration required remapping every subscriber&apos;s jurisdiction assignment, which affected:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { impact: "Tax jurisdiction", desc: "State, county, city tax computation" },
                { impact: "Franchise fees", desc: "Municipal franchise fee rates" },
                { impact: "Regulatory surcharges", desc: "FCC, state PUC fees" },
                { impact: "Revenue reporting", desc: "Which business unit books the revenue" },
                { impact: "Operational routing", desc: "Dispatch, NOC, and escalation paths" },
              ].map((item) => (
                <div key={item.impact} className="p-3 bg-background/60 rounded-lg border border-orange-500/20">
                  <div className="font-medium text-foreground text-sm">{item.impact}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insight */}
          <div className="p-5 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg border border-orange-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-2">Key Insight</div>
            <p className="text-foreground font-medium italic">
              The risk was not missing data. It was <strong>behavioral divergence</strong> &mdash;
              two engines interpreting the same customer record through different semantic models.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Wave 2: Behavioral Drift Detected ── */}
      <section id="behavioral-drift" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
          <h2 className="text-2xl font-bold text-foreground">Wave 2: Behavioral Drift Detected</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              By Wave 2, shadow billing revealed not missing codes, but <strong className="text-amber-600 dark:text-amber-400">cross-engine semantic drift under compression</strong>.
            </p>
            <p className="text-foreground leading-relaxed">
              The commercial catalog had been validated. What had <strong>not</strong> been validated was <strong>behavioral parity</strong> &mdash;
              how two different engines interpreted the same subscriber through compressed SOC constructs and remapped CORPs.
            </p>
          </div>

          {/* Match Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/30 text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">~85%</div>
              <div className="text-sm text-muted-foreground mt-1">Behavioral parity confirmed</div>
            </div>
            <div className="p-5 bg-red-500/5 rounded-xl border border-red-500/30 text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">~15%</div>
              <div className="text-sm text-muted-foreground mt-1">Semantic compression edge cases</div>
            </div>
            <div className="p-5 bg-amber-500/5 rounded-xl border border-amber-500/30 text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">5%</div>
              <div className="text-sm text-muted-foreground mt-1">Wave 2 variance trend</div>
            </div>
          </div>

          {/* Drift Example */}
          <div className="p-6 rounded-xl border border-amber-500/30 bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-3">Example: How Drift Manifests</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-background/60 rounded-lg border border-red-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Legacy Engine (ICOMS)</div>
                <ul className="space-y-1.5 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                    Applies retention override <strong>before</strong> bundle normalization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                    Uses <strong>per-line rounding</strong>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-background/60 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Target Engine (BSS)</div>
                <ul className="space-y-1.5 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                    Applies canonical bundle <strong>first</strong>, then retention overlay
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                    Uses <strong>invoice-level rounding</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-center">
              <p className="text-sm text-foreground">
                Result: <strong>$1&ndash;$2 per account variance</strong>, clustered in high-tenure legacy segments
              </p>
            </div>
          </div>

          {/* Statistical Reasoning */}
          <div className="p-5 bg-red-500/5 rounded-xl border border-red-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Why Sampling Was Structurally Unsafe</div>
            <p className="text-foreground leading-relaxed">
              <strong>Sampling failed because semantic drift was clustered, not uniform.</strong> Variances concentrated
              in long-tail legacy segments (high-tenure customers with stacked retention offers, retired bundles, non-standard SOC overrides).
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              At 1.6M scale, 5% error propagation was material. We detected this early in Wave 2 &mdash;
              before scaling to later CORPs. That was not hypothetical risk. It was <strong className="text-foreground">trend-backed exposure</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Deterministic Validation Becomes Mandatory ── */}
      <section id="deterministic-validation" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
          <h2 className="text-2xl font-bold text-foreground">Deterministic Validation Becomes Mandatory</h2>
        </div>

        <div className="space-y-6">
          {/* Problem Statement */}
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              Once we identified clustered semantic drift, sampling was no longer a valid validation strategy.
              We needed <strong className="text-purple-600 dark:text-purple-400">~10 million behavioral comparisons per wave</strong> &mdash;
              not structural mapping checks, but behavioral parity validation.
            </p>
            <div className="p-4 bg-background/60 rounded-lg border border-border">
              <p className="text-sm text-foreground">
                In ICOMS, invoice details existed as <strong>bill artifacts</strong>, not analytic tables.
                The serialized bill-artifact extraction job became the bottleneck.
                Reconciliation window expanded to <strong>~4 days</strong>.
              </p>
            </div>
          </div>

          {/* Scale Detail */}
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-3">Scale Impact</div>

            {/* Sampling vs Deterministic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-background/60 rounded-lg border border-border">
                <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Under Sampling Mode</div>
                <ul className="space-y-1.5">
                  {[
                    "Extracted ~250 bill artifacts",
                    "Parsed and compared a limited set",
                    "Latency was trivial",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-background/60 rounded-lg border border-red-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Under Deterministic Validation</div>
                <ul className="space-y-1.5">
                  {[
                    "Extract and parse ~250,000 bill artifacts per wave",
                    "Each artifact expanded into ~40 atomic charge components (base plan, bundles, discounts, taxes, proration, fees)",
                    "~10 million comparison operations per wave in reconciliation engine",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="p-5 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-2">Key Insight</div>
            <p className="text-foreground font-medium italic">
              Cross-engine semantic drift under aggressive SOC compression cannot be safely validated via sampling.
              Only deterministic, population-scale behavioral comparison catches clustered drift.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Throughput Redesign (Without Rewriting Mainframe) ── */}
      <section id="throughput-redesign" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-teal-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">5</span>
          <h2 className="text-2xl font-bold text-foreground">Throughput Redesign (Without Rewriting Mainframe)</h2>
        </div>

        <div className="space-y-6">
          {/* Bottleneck Callout */}
          <div className="p-5 bg-amber-500/5 rounded-xl border border-amber-500/30">
            <div className="flex items-start gap-2.5">
              <span className="text-amber-500 text-sm flex-shrink-0 mt-0.5">&#9888;</span>
              <div>
                <p className="text-foreground text-sm leading-relaxed">
                  <strong>The bottleneck was not compute.</strong> It was serialized bill-artifact extraction from ICOMS.
                  The existing extract job iterated account-by-account in a single thread, which was acceptable
                  for sampling but not for population-scale behavioral validation.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">
              Solution: Application-Side Workload Sharding
            </div>
            <p className="text-sm text-muted-foreground mb-5 italic">
              We did not modify the mainframe or re-architect ICOMS. Instead, we redesigned the extraction strategy externally.
            </p>

            {/* Orchestration Steps */}
            <div className="space-y-2.5 mb-6">
              {[
                "Introduced an external ETL orchestration layer",
                "Partitioned the 250K account-cycle workload into 20 logical shards (account-range based)",
                "Ran throttled concurrent extraction workers",
                "Executed during controlled maintenance windows (2 AM\u20134 AM)",
                "Implemented backpressure controls to prevent table locks or interactive system impact",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center text-xs text-emerald-500 flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>

            {/* Worker Detail */}
            <div className="p-4 bg-background/60 rounded-lg border border-border mb-5">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Each Worker</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Pulled bill artifacts",
                  "Parsed into canonical charge components",
                  "Passed normalized payload to reconciliation engine",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Optimization */}
            <div className="p-4 bg-background/60 rounded-lg border border-border">
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Comparison Strategy Optimization</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                  <div className="font-medium text-foreground text-sm">Tier 1: Fast Totals Parity</div>
                  <div className="text-xs text-muted-foreground mt-1">Quick total-amount check per account</div>
                </div>
                <div className="p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
                  <div className="font-medium text-foreground text-sm">Tier 2: Deep Line-Item Comparison</div>
                  <div className="text-xs text-muted-foreground mt-1">Only triggered on Tier 1 mismatches</div>
                </div>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-xl border border-border">
            <div className="text-center flex-1">
              <div className="text-2xl font-bold text-red-500">~4 days</div>
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
              This was not a database rewrite. It was a <strong>workload orchestration redesign</strong> that
              converted serialized extract throughput into controlled parallelism while protecting production stability.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. The Decision ── */}
      <section id="the-fork" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">6</span>
          <h2 className="text-2xl font-bold text-foreground">The Decision</h2>
        </div>

        <div className="p-4 bg-muted/30 rounded-lg border border-border mb-6">
          <p className="text-foreground text-sm">
            We faced two options:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

        {/* Outcome */}
        <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/30">
          <p className="text-foreground text-sm leading-relaxed mb-3">
            <strong>We chose Option B.</strong> The 6-week delay pushed us beyond the 6-month contractual window.
          </p>
          <div className="p-3 bg-background/60 rounded-lg border border-border">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Net Overrun Impact</div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              Dual-run penalty exposure + extended migration burn
            </div>
            <div className="mt-2 text-right">
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">&asymp; ~$2M</span>
              <span className="text-xs text-muted-foreground ml-2">total incremental cost</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Modeled Exposure ── */}
      <section id="asymmetry" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">7</span>
          <h2 className="text-2xl font-bold text-foreground">Modeled Exposure If We Proceeded</h2>
        </div>

        {/* Impact Scope */}
        <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5 mb-6">
          <p className="text-foreground leading-relaxed">
            5% of 1.6M subscribers = <strong className="text-red-600 dark:text-red-400">80,000 impacted accounts</strong>
          </p>
        </div>

        {/* Cost Breakdown Table */}
        <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5 mb-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs">!</span>
            Modeled Cost (Option A)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {modeledDownside.map((row) => (
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
            <div className="text-xl font-bold text-red-600 dark:text-red-400">&asymp; ~$9&ndash;10M</div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            Excluding churn or brand impact.
          </p>
        </div>

        {/* Asymmetry Summary */}
        <div className="p-5 bg-gradient-to-r from-emerald-500/10 to-red-500/10 rounded-xl border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="text-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <div className="text-xs text-muted-foreground">Option B (chosen)</div>
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">~$2M</div>
              <div className="text-xs text-muted-foreground">bounded overrun</div>
            </div>
            <div className="text-center text-2xl text-muted-foreground font-light">vs</div>
            <div className="text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
              <div className="text-xs text-muted-foreground">Option A (rejected)</div>
              <div className="text-xl font-bold text-red-600 dark:text-red-400">~$9&ndash;10M</div>
              <div className="text-xs text-muted-foreground">modeled exposure</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Commercial Resolution ── */}
      <section id="commercial-resolution" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">8</span>
          <h2 className="text-2xl font-bold text-foreground">Commercial Resolution</h2>
        </div>

        <div className="space-y-6">
          <div className="p-5 bg-cyan-500/5 rounded-xl border border-cyan-500/30">
            <p className="text-foreground leading-relaxed">
              Detection alone wasn&apos;t enough. For <strong>SOC compression edge cases</strong> &mdash;
              legacy plans where the compressed canonical construct produced behavioral drift &mdash; we built:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Legal-Approved Best Fit Mapping", desc: "Migration to modern equivalent plan via pre-approved commercial equivalents" },
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
                { label: "No pricing shock", icon: "&#10003;" },
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
              Industry flash-cut baseline: <strong>2&ndash;3%</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. CFO & Synergy Timeline ── */}
      <section id="cfo-synergy" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">9</span>
          <h2 className="text-2xl font-bold text-foreground">CFO &amp; Timeline Recovery</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
            <p className="text-foreground leading-relaxed mb-4">
              The 6-week delay <strong className="text-indigo-600 dark:text-indigo-400">immediately triggered overage exposure</strong>.
            </p>
            <p className="text-foreground leading-relaxed">
              However:
            </p>
          </div>

          {/* Recovery Steps */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">Recovery</div>
            <ul className="space-y-2.5">
              {[
                "After deterministic validation stabilized the pipeline,",
                "We compressed later waves,",
                "Preserved overall synergy realization,",
                "And completed migration with controlled risk.",
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
            <p className="text-sm text-foreground text-center leading-relaxed">
              The <strong>$2M overrun was a bounded cost</strong>.
              The alternative was a <strong>~$10M modeled exposure</strong> event with potential reputational escalation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. Principal Framing ── */}
      <section id="not-cautious" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">10</span>
          <h2 className="text-2xl font-bold text-foreground">Principal Framing</h2>
        </div>

        <div className="space-y-6">
          <div className="p-5 bg-rose-500/5 rounded-xl border border-rose-500/30">
            <p className="text-foreground leading-relaxed font-medium">
              This was not operational caution. It was <strong>asymmetric risk management under contractual pressure</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { step: "1", action: "Detected clustered defect risk in Wave 2" },
              { step: "2", action: "Quantified exposure before failure" },
              { step: "3", action: "Slowed tactically" },
              { step: "4", action: "Re-engineered throughput" },
              { step: "5", action: "Resumed migration at higher velocity" },
              { step: "6", action: "Institutionalized deterministic validation as enterprise standard" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border border-border">
                <span className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </span>
                <span className="text-sm text-foreground">{item.action}</span>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
            <p className="text-foreground font-medium text-center leading-relaxed">
              We accepted ~$2M in bounded cost to prevent a ~$10M modeled exposure
              and permanently upgraded migration governance.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final Framing ── */}
      <section id="final-framing" className="mb-14">
        <div className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl border border-primary/30">
          <div className="text-xs font-bold uppercase tracking-wide text-primary mb-4">Final Framing</div>
          <p className="text-lg text-foreground font-semibold text-center leading-relaxed mb-4">
            Cross-engine semantic drift under aggressive SOC compression and CORP remapping
            cannot be safely validated via sampling.
          </p>
          <p className="text-foreground text-center leading-relaxed">
            We accepted ~$2M in bounded cost to prevent a ~$10M modeled exposure
            and permanently upgraded migration governance.
          </p>
        </div>

        {/* Principal Signals */}
        <div className="mt-6 p-6 rounded-xl border border-primary/30 bg-primary/5">
          <div className="text-xs font-bold uppercase tracking-wide text-primary mb-4">This Story Demonstrates</div>
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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-3">It Is Not</div>
            <p className="text-foreground italic">
              &ldquo;We found bad data and cleaned it up.&rdquo;
            </p>
          </div>
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">It Is</div>
            <p className="text-foreground italic leading-relaxed">
              &ldquo;We identified cross-engine behavioral divergence under SOC compression,
              built deterministic validation at scale, and contained economic exposure
              under hard contractual pressure.&rdquo;
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
              We were migrating 1.6 million cable subscribers from a legacy billing platform to a modern BSS stack
              under a <strong>hard vendor sunset</strong> &mdash; six months, six waves, with a $1.2M/month dual-run penalty
              and no extension clause.
            </p>
            <p>
              The core challenge was <strong>semantic compression</strong>. The legacy system carried about 150,000 SOC combinations &mdash;
              fifteen years of retention offers, regional bundles, CSR overrides. The target system compressed those
              into roughly 32,000 canonical constructs. That compression was architecturally necessary, but it introduced
              <strong>behavioral divergence</strong>: the two engines interpreted the same subscriber record differently.
            </p>
            <p>
              We caught this in <strong>Wave 2</strong> &mdash; not missing data, but <strong>cross-engine semantic drift</strong>.
              Differences in operator precedence, rounding behavior, discount stacking. Small per-account variances,
              but clustered in long-tail segments. At 1.6M scale, 5% propagation was material.
            </p>
            <p>
              I made the call to <strong>stop the line</strong> and build deterministic validation &mdash;
              roughly 10 million behavioral comparisons per wave. The throughput bottleneck was serialized extraction
              from the mainframe, so we designed an external ETL sharding layer without modifying the legacy system.
              Took reconciliation from four days to under four hours.
            </p>
            <p>
              The 6-week delay cost us about <strong>$2M</strong> in dual-run overrun.
              The modeled exposure if we&apos;d pushed through was <strong>$9&ndash;10M</strong> &mdash;
              credits, call center surge, backend recovery.
            </p>
            <p className="font-semibold">
              We accepted $2M in bounded cost to prevent $10M in modeled exposure
              and permanently upgraded the migration governance framework.
            </p>
          </div>
        </div>
      </section>

      {/* ── Hostile Principal Engineer Stress Tests ── */}
      <section id="stress-tests" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">7</span>
          <h2 className="text-2xl font-bold text-foreground">Hostile Principal Engineer Stress Tests</h2>
        </div>

        <div className="space-y-5">
          {/* Challenge 1 */}
          <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <h3 className="font-semibold text-foreground">&ldquo;You&apos;re calling it semantic compression, but isn&apos;t this just a data migration bug?&rdquo;</h3>
            </div>
            <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
              <p className="text-sm text-foreground leading-relaxed">
                A data migration bug implies missing or corrupted records. This was structurally different:
                both engines had the correct data, but they <strong>interpreted it through different semantic models</strong>.
                Legacy applied retention overrides before bundle normalization with per-line rounding.
                The target applied canonical bundles first with invoice-level rounding. Same input, different behavioral output.
                That&apos;s not a data bug &mdash; it&apos;s an <strong>architectural divergence</strong> that only surfaces under compression.
              </p>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <h3 className="font-semibold text-foreground">&ldquo;Why didn&apos;t you catch this in Wave 1?&rdquo;</h3>
            </div>
            <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
              <p className="text-sm text-foreground leading-relaxed">
                Wave 1 was intentionally structured as a controlled cohort &mdash; lower complexity CORPs
                with predominantly standard residential plans. The semantic drift concentrated in
                <strong> high-tenure legacy segments</strong> with stacked retention offers and retired bundles.
                Those segments had higher density in the Wave 2 CORP mix.
                The architecture was designed to surface this progressively &mdash; and it did.
              </p>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <h3 className="font-semibold text-foreground">&ldquo;$2M for a 6-week delay feels like a failure, not a win.&rdquo;</h3>
            </div>
            <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
              <p className="text-sm text-foreground leading-relaxed">
                The $2M was a <strong>bounded, predictable cost</strong> &mdash; dual-run penalty plus extended burn.
                The alternative was pushing through with known 5% semantic drift propagating across 1.6M subscribers.
                Modeled exposure: $800K in credits, $1.9M in call center surge, $6.4M in backend recovery &mdash;
                roughly <strong>$9&ndash;10M</strong>, excluding churn and brand damage.
                The $2M was not a failure. It was a <strong>controlled economic decision</strong>.
              </p>
            </div>
          </div>

          {/* Challenge 4 */}
          <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
              <h3 className="font-semibold text-foreground">&ldquo;10 million comparisons sounds like overkill. Why not sample smarter?&rdquo;</h3>
            </div>
            <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
              <p className="text-sm text-foreground leading-relaxed">
                Smarter sampling assumes <strong>uniform defect distribution</strong>.
                Our data showed the opposite: variances clustered in long-tail segments defined by specific
                SOC compression artifacts. You can&apos;t stratify a sample for defect patterns you haven&apos;t
                characterized yet. The only safe approach was population-scale behavioral comparison,
                which is why we built the tiered validation &mdash; fast totals parity first,
                deep line-item comparison only on mismatches. Efficient determinism, not brute force.
              </p>
            </div>
          </div>

          {/* Challenge 5 */}
          <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
              <h3 className="font-semibold text-foreground">&ldquo;You sharded the extraction but didn&apos;t touch the mainframe. How is that not fragile?&rdquo;</h3>
            </div>
            <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
              <p className="text-sm text-foreground leading-relaxed">
                That was the constraint. Modifying the mainframe required a change control cycle longer than
                our migration window. The ETL sharding layer was <strong>application-side orchestration</strong> &mdash;
                account-range partitioning, throttled concurrent workers, backpressure controls, maintenance-window execution.
                We moved from serialized single-thread extraction to controlled parallelism
                without touching ICOMS internals. That&apos;s not fragile &mdash; that&apos;s <strong>operating within real constraints</strong>.
              </p>
            </div>
          </div>

          {/* Challenge 6 */}
          <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</span>
              <h3 className="font-semibold text-foreground">&ldquo;What would you do differently if you ran this again?&rdquo;</h3>
            </div>
            <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
              <p className="text-sm text-foreground leading-relaxed">
                I would have pushed for <strong>behavioral parity validation from Wave 1</strong>, not just structural
                catalog mapping. We validated that the commercial catalog translated correctly, but we didn&apos;t
                validate how the engines <em>computed</em> under compression until shadow billing surfaced the drift.
                If I&apos;d insisted on deterministic comparison from the first wave, we would have caught the
                semantic divergence earlier and potentially avoided the 6-week stop.
              </p>
            </div>
          </div>

          {/* Challenge 7 */}
          <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">7</span>
              <h3 className="font-semibold text-foreground">&ldquo;How do you know the $9&ndash;10M model isn&apos;t inflated to justify your decision?&rdquo;</h3>
            </div>
            <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
              <p className="text-sm text-foreground leading-relaxed">
                Every input is independently verifiable. The 5% impact rate came from <strong>observed Wave 2 variance</strong>,
                not projection. The $10 credit is standard goodwill policy. The 40% call rate is based on
                industry billing-error escalation benchmarks. The $80 fully-loaded recovery cost
                (reconciliation, re-rating, QA, reprints) was validated by the finance team.
                We presented this model to the CFO and ExecComm <em>before</em> making the call &mdash;
                not after. The model drove the decision, not the other way around.
              </p>
            </div>
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
          href="/nebula/interview-prep/billing-recovery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Billing Recovery &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
