"use client";

/**
 * How Billing Works - Cable MSO Billing Pipeline on HP NonStop (Tandem)
 *
 * Educational reference page explaining the end-to-end billing pipeline:
 * Source Systems → Mediation → Rating → Billing Ledger → Invoice/GL
 *
 * Also covers what Tandem actually does (platform vs application distinction),
 * data residency and retention policies (what lives on Tandem and for how long),
 * and ties each pipeline stage back to the Billing Recovery incident (#17).
 *
 * Related: Billing Recovery (#17), Tandem Incident Management (#2)
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// ─── Data ────────────────────────────────────────────────────────────────────

const sourceSystemCards = [
  {
    name: "Provisioning / Service Mgmt",
    desc: "System of record for subscriber services. Every service order flows through here: installs, upgrades, downgrades, disconnects, equipment swaps. Maintains active service profile per subscriber — video tier, internet speed, set-top boxes, phone service.",
    output: "Service configurations, effective dates, one-time charges",
    feed: "Real-time service order events or nightly snapshot",
  },
  {
    name: "Voice Switch (Telephony)",
    desc: "For subscribers with landline service, the voice switch generates CDRs. Actual usage records — call origination, termination, duration, long-distance flags. The one component that behaves like traditional telecom billing.",
    output: "Call Detail Records (CDRs)",
    feed: "Usage events that need rating",
  },
  {
    name: "VOD / Pay-Per-View",
    desc: "Video-on-demand and pay-per-view system generates purchase events. Movie orders, series rentals. Transactional usage events with timestamps, content IDs, and price points.",
    output: "Billable purchase transactions",
    feed: "Event-based records with price tier",
  },
  {
    name: "Equipment Management",
    desc: "Tracks physical devices assigned to each subscriber — set-top boxes, cable modems, DVRs, routers. Drives equipment rental charges. May be part of provisioning or a separate inventory system.",
    output: "Equipment rental charges",
    feed: "Device adds/swaps/returns",
  },
];

const mediationFunctions = [
  { step: "Collect", desc: "Ingest raw events from all four source systems via file transfer, message queues, or direct feeds" },
  { step: "Validate", desc: "Check mandatory fields, reject malformed records, flag duplicates, identify orphan events that don\u2019t match a known subscriber" },
  { step: "Normalize", desc: "Convert heterogeneous formats into a standard billing event format \u2014 regardless of whether the source was a CDR or a PPV purchase" },
  { step: "Deduplicate", desc: "Detect and eliminate duplicate events (same call processed twice, same order submitted twice)" },
  { step: "Correlate", desc: "Match related events \u2014 e.g., service order effective date against billing cycle date to determine proration" },
];

const ratingFunctions = [
  { step: "Rate Plan Lookup", desc: "Match subscriber to their active rate plan, package, and promotional pricing agreement" },
  { step: "Usage Pricing", desc: "Apply per-unit rates (per minute, per event, per GB) to usage quantities from mediation" },
  { step: "Proration", desc: "Calculate partial-month charges for mid-cycle activations, changes, or disconnects" },
  { step: "Discount Application", desc: "Apply bundle discounts, loyalty credits, promotional rates, and multi-service packaging logic" },
  { step: "Tax Determination", desc: "Calculate applicable taxes based on jurisdiction, service type, and tax rules \u2014 often via external engine (Vertex, CSC)" },
];

const tandemLayers = [
  {
    layer: "Mediation",
    provides: "Pathway (TP monitor) manages server processes for event ingestion and normalization. ENSCRIBE or SQL/MP stores event files and staging tables. TMF guarantees each event ingestion is atomic. Fault tolerance (process pairs, mirrored disks) enables 24/7 operation without planned downtime.",
  },
  {
    layer: "Rating",
    provides: "Rating engine runs as an application on Pathway. Reads from mediation staging tables, applies pricing logic, writes rated transactions. TMF wraps each individual rating transaction \u2014 subscriber charge calculation is atomic. The batch process orchestrates millions of these across multiple processors.",
  },
  {
    layer: "Billing Ledger",
    provides: "Ledger is a set of ENSCRIBE files or SQL/MP tables on Tandem. TMF protects every individual ledger posting \u2014 debit account, credit GL code, update balance. Cycle-level aggregation (totals, tax pools) is computed by the billing application, not by Tandem.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HowBillingWorksPage() {
  return (
    <InterviewPrepLayout
      title="How Billing Works"
      description="End-to-end cable MSO billing pipeline on HP NonStop (Tandem)"
      currentSection="how-billing-works"
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
          <Link href="/nebula/interview-prep/billing-recovery" className="text-primary hover:underline">
            View Billing Recovery incident story &rarr;
          </Link>
        </p>
      </div>

      {/* ── Header ── */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium rounded-full">
            Educational
          </span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            Reference
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            Billing Pipeline
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Cable MSO
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">How Billing Works</h1>
        <p className="text-muted-foreground leading-relaxed">
          End-to-end billing pipeline for a <strong className="text-foreground">cable MSO on HP NonStop (Tandem)</strong>.
          Understanding this pipeline is essential context for the{" "}
          <Link href="/nebula/interview-prep/billing-recovery" className="text-primary hover:underline">
            Billing Recovery incident story
          </Link>.
        </p>
        <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/30">
          <p className="text-foreground font-semibold italic text-center">
            Source Systems &rarr; Mediation &rarr; Rating &rarr; Billing Ledger &rarr; Invoice / GL
          </p>
        </div>
      </div>

      {/* ── Quick Nav ── */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "#source-systems", label: "Source Systems", desc: "4 upstream data producers", color: "border-blue-500/30" },
            { href: "#mediation", label: "Mediation Layer", desc: "Collect, validate, normalize, dedup", color: "border-amber-500/30" },
            { href: "#rating", label: "Rating Engine", desc: "Usage-to-charge pricing calculator", color: "border-emerald-500/30" },
            { href: "#billing-ledger", label: "Billing Ledger", desc: "Financial source of truth", color: "border-purple-500/30" },
            { href: "#outputs", label: "Invoice & GL Posting", desc: "Customer + finance output", color: "border-rose-500/30" },
            { href: "#what-tandem-does", label: "What Tandem Does", desc: "Platform vs application distinction", color: "border-cyan-500/30" },
            { href: "#data-residency", label: "Data Residency", desc: "What lives on Tandem and for how long", color: "border-teal-500/30" },
            { href: "#why-this-matters", label: "Why This Matters", desc: "Connection to the incident", color: "border-red-500/30" },
          ].map((nav) => (
            <a key={nav.href} href={nav.href} className={`p-3 bg-background rounded-lg border ${nav.color} hover:opacity-80 transition-opacity`}>
              <div className="font-medium text-foreground text-sm">{nav.label}</div>
              <div className="text-xs text-muted-foreground">{nav.desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* ── 1. Source Systems ── */}
      <section id="source-systems" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
          <h2 className="text-2xl font-bold text-foreground">Source Systems</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <p className="text-foreground leading-relaxed">
              Four source systems feed into the billing pipeline. Each generates different types of billing events.
              The bulk of billing events for a cable MSO come from <strong className="text-blue-600 dark:text-blue-400">recurring service charges and equipment</strong>,
              not usage-based CDRs. Telephony CDRs from the voice switch are a subset of the total billing event population.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sourceSystemCards.map((sys) => (
              <div key={sys.name} className="p-5 rounded-xl border border-border bg-muted/30">
                <h3 className="font-semibold text-foreground mb-2">{sys.name}</h3>
                <p className="text-sm text-foreground leading-relaxed mb-3">{sys.desc}</p>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2 text-xs">
                    <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">OUTPUT:</span>
                    <span className="text-muted-foreground">{sys.output}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">FEED:</span>
                    <span className="text-muted-foreground">{sys.feed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Mediation Layer ── */}
      <section id="mediation" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
          <h2 className="text-2xl font-bold text-foreground">Mediation Layer</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">The Normalizer</div>
            <p className="text-foreground leading-relaxed">
              Mediation sits between the source systems and the rating engine. Its job is to collect, validate,
              normalize, and deduplicate billing events from all source systems into a consistent format that
              the rating engine can consume. It also handles event correlation &mdash; for example, matching a
              service order effective date against the billing cycle date to determine proration.
            </p>
          </div>

          <div className="space-y-3">
            {mediationFunctions.map((fn, i) => (
              <div key={fn.step} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30">
                <span className="w-7 h-7 rounded bg-amber-500/10 flex items-center justify-center text-xs text-amber-600 dark:text-amber-400 font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <span className="font-semibold text-foreground">{fn.step}</span>
                  <span className="text-sm text-muted-foreground"> &mdash; {fn.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-gradient-to-r from-amber-500/10 to-transparent rounded-lg border border-amber-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">Output &amp; Checkpoint</div>
            <p className="text-foreground leading-relaxed mb-3">
              A clean, validated, deduplicated population of billing events ready for rating.
              This is the <strong>source of truth for what should be billed</strong>.
            </p>
            <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-center">
              <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                Reconciliation Checkpoint 1 &mdash; Event counts &amp; source totals
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                If mediation says 1.25M subscribers generated X billing events, that&apos;s the baseline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Rating Engine ── */}
      <section id="rating" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
          <h2 className="text-2xl font-bold text-foreground">Rating Engine</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">The Pricing Calculator</div>
            <p className="text-foreground leading-relaxed">
              The rating engine takes normalized billing events from mediation and applies pricing logic.
              Each event gets a dollar amount attached. The rating engine&apos;s completion logs tell you how many
              events were rated and the total dollar value &mdash; this is the second reconciliation checkpoint.
            </p>
          </div>

          <div className="space-y-3">
            {ratingFunctions.map((fn, i) => (
              <div key={fn.step} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/30">
                <span className="w-7 h-7 rounded bg-emerald-500/10 flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-400 font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <span className="font-semibold text-foreground">{fn.step}</span>
                  <span className="text-sm text-muted-foreground"> &mdash; {fn.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg border border-emerald-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Output &amp; Checkpoint</div>
            <p className="text-foreground leading-relaxed mb-3">
              Rated transactions with pricing, tax, and discount detail. These are financial records ready
              to post to the ledger.
            </p>
            <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Reconciliation Checkpoint 2 &mdash; Rated transaction counts &amp; dollar totals
              </p>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-2">Key Property</div>
            <p className="text-foreground font-medium italic">
              Rating is deterministic &mdash; same input with same rate plan produces the same output.
              This property is what made the Billing Recovery rebuild possible: re-rate from mediation
              source events, get correct charges.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Billing Ledger ── */}
      <section id="billing-ledger" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
          <h2 className="text-2xl font-bold text-foreground">Billing Ledger</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-2">Financial Source of Truth</div>
            <p className="text-foreground leading-relaxed">
              The ledger receives rated transactions from the rating engine and commits them as the
              subscriber&apos;s financial record. It maintains the running balance, aggregates charges into
              cycle-level totals, and serves as the authoritative financial record for invoice generation,
              GL posting, and revenue recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { fn: "Post Charges", desc: "Write rated charges to subscriber accounts" },
              { fn: "Maintain Balances", desc: "Previous balance + new charges - payments - adjustments = current balance" },
              { fn: "Aggregate", desc: "Roll up charges into cycle-level totals, tax pools, and summary buckets" },
              { fn: "Tax Pool Mgmt", desc: "Accumulate taxes by jurisdiction for remittance reporting" },
            ].map((item) => (
              <div key={item.fn} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="font-semibold text-foreground text-sm">{item.fn}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-2">Output &amp; Checkpoint</div>
            <p className="text-foreground leading-relaxed mb-3">
              The committed financial state for each subscriber in the cycle. Ledger totals are
              the third reconciliation checkpoint.
            </p>
            <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center">
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                Reconciliation Checkpoint 3 &mdash; Ledger postings vs rated totals vs mediation counts
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                When all three match, you have financial parity.
              </p>
            </div>
          </div>

          {/* Critical Nuance */}
          <div className="p-5 bg-gradient-to-r from-red-500/10 to-transparent rounded-lg border border-red-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Critical Nuance</div>
            <p className="text-foreground font-medium italic">
              The ledger uses <strong>batch-level aggregation</strong>. Tax pools and cycle totals are computed
              across the entire billing cycle cohort. This is why partial release of invoices was not viable
              during the Billing Recovery incident &mdash; aggregation boundaries are cohort-scoped.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Invoice Generation & GL Posting ── */}
      <section id="outputs" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">5</span>
          <h2 className="text-2xl font-bold text-foreground">Invoice Generation &amp; GL Posting</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Invoice Generation */}
          <div className="p-6 rounded-xl border border-rose-500/30 bg-rose-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-400 mb-3">Customer-Facing Output</div>
            <h3 className="font-semibold text-foreground mb-3">Invoice Generation</h3>
            <p className="text-sm text-foreground leading-relaxed mb-4">
              Takes the committed ledger state and produces the actual bill. Formats each subscriber&apos;s
              charges into a readable invoice, applies statement-level presentation logic, generates print
              files for physical mail and digital files for electronic billing.
            </p>
            <div className="space-y-2">
              {["Format: line items, charges, credits, taxes, totals", "Present: branding, layout, regulatory disclosures", "Deliver: print vendor, email, online portal"].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* GL Posting */}
          <div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-3">Finance-Facing Output</div>
            <h3 className="font-semibold text-foreground mb-3">GL Posting Interface</h3>
            <p className="text-sm text-foreground leading-relaxed mb-4">
              Runs in parallel with or immediately after invoice generation. Translates billing ledger entries
              into general ledger journal entries. Posts revenue by category and interfaces with the enterprise
              financial system (SAP, Oracle Financials, etc.).
            </p>
            <div className="space-y-2">
              {["Journal entries: debit/credit per revenue category", "Revenue categories: video, data, voice, equipment", "Reconciliation: GL totals must match ledger totals"].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Both invoice generation and GL posting read from the ledger.
            If ledger state is inconsistent, invoices will be incorrect and the company reports incorrect revenue.
            This is the <strong className="text-foreground">$11&ndash;12M exposure</strong> referenced in the Billing Recovery decision.
          </p>
        </div>
      </section>

      {/* ── Pipeline Diagram ── */}
      <section className="mb-14">
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">
            Cable MSO Billing Pipeline &mdash; Source to Settlement
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/interview-prep/how-billing-works-diagram.svg"
            alt="End-to-end cable MSO billing pipeline diagram showing flow from 4 source systems (Provisioning, Voice Switch, VOD/PPV, Equipment) through Mediation Layer, Rating Engine, Billing Ledger, to Invoice Generation and GL Posting, with three reconciliation checkpoints and failure zone callout between rating and ledger"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* ── 6. What Tandem Actually Does ── */}
      <section id="what-tandem-does" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">6</span>
          <h2 className="text-2xl font-bold text-foreground">What Tandem Actually Does</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5">
            <p className="text-foreground leading-relaxed">
              Tandem (HP NonStop) is <strong className="text-cyan-600 dark:text-cyan-400">not the mediation, rating, or billing application</strong>.
              Tandem is the platform &mdash; the operating system, hardware, and infrastructure layer that the billing
              applications run on. Think of it this way: Tandem is to billing what Linux is to a web application.
              Nobody says &ldquo;Linux processes the payments.&rdquo; Linux provides the operating system, file system,
              process management, and fault tolerance. The application sitting on top of it does the business logic.
            </p>
          </div>

          {/* What Tandem Provides to Each Layer */}
          <div className="space-y-4">
            {tandemLayers.map((item) => (
              <div key={item.layer} className="p-5 rounded-xl border border-border bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold rounded">
                    For {item.layer}
                  </span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">{item.provides}</p>
              </div>
            ))}
          </div>

          {/* The Critical Distinction */}
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-3">The Critical Distinction</div>
            <p className="text-foreground leading-relaxed mb-4">
              Tandem guarantees <strong>individual transaction integrity</strong> through TMF. Each billing event ingestion,
              each rating calculation, each ledger posting is atomic.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But the billing cycle &mdash; the batch process that orchestrates millions of these individual transactions
              across 1.25M subscribers &mdash; is an <strong>application-level construct</strong> running on top of Tandem.
              Tandem doesn&apos;t know what a &ldquo;billing cycle&rdquo; is. It just sees millions of individual transactions.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              That&apos;s why the failure mode existed. TMF did its job &mdash; every individual transaction that committed
              was consistent. But the batch orchestration that ties them all together into a cohesive cycle was interrupted
              mid-flight. Some transactions committed, some didn&apos;t, and Tandem had no mechanism to roll back an entire
              cycle because a cycle isn&apos;t a TMF transaction &mdash; it&apos;s millions of them.
            </p>
          </div>

          {/* Interview Answer */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">
              If Asked: &ldquo;What does Tandem do in the billing stack?&rdquo;
            </div>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
              <p className="text-foreground italic leading-relaxed">
                &ldquo;Tandem is the platform, not the application. It provides the fault-tolerant infrastructure &mdash;
                process pairs for high availability, mirrored disks for storage resilience, TMF for transactional atomicity,
                and Pathway as the TP monitor. The billing applications &mdash; mediation, rating, ledger management &mdash;
                run on top of Tandem. TMF guarantees that each individual billing transaction is atomic.
                What it does not guarantee is batch-level cycle consistency, because a billing cycle is an application
                construct spanning millions of individual TMF transactions. That&apos;s the gap our incident exposed.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-3">
              <strong>Signal:</strong> Understands the platform at an architectural level, not just as a buzzword.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Data Residency & Retention ── */}
      <section id="data-residency" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-teal-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">7</span>
          <h2 className="text-2xl font-bold text-foreground">Data Residency &amp; Retention</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-teal-500/30 bg-teal-500/5">
            <p className="text-foreground leading-relaxed">
              Not everything lives on the NonStop platform. Understanding what&apos;s on Tandem versus what isn&apos;t &mdash;
              and how long each data type is retained &mdash; is essential for understanding both the blast radius of
              a storage failure and the recovery options available.
            </p>
          </div>

          {/* Where Data Resides */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-teal-600 dark:text-teal-400 mb-4 pl-1">
              Where Data Resides
            </div>

            <div className="space-y-4">
              {/* Source Systems - NOT on Tandem */}
              <div className="p-5 rounded-xl border border-border bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-gray-500/10 text-gray-600 dark:text-gray-400 text-xs font-bold rounded">
                    NOT on Tandem
                  </span>
                  <span className="font-semibold text-foreground text-sm">Source Systems</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  The provisioning platform, voice switch, VOD/PPV system, and equipment management system are their
                  own platforms. Provisioning might be on a Unix/Linux stack running CSG or Amdocs service management
                  software. The voice switch is a Nortel/Lucent/Cisco telephony platform &mdash; completely separate hardware.
                  VOD is typically a Motorola/Arris or SeaChange platform. These systems generate billing events and
                  push them to Tandem. They don&apos;t live on the NonStop platform.
                </p>
              </div>

              {/* Mediation Staging - ON Tandem */}
              <div className="p-5 rounded-xl border border-teal-500/30 bg-teal-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold rounded">
                    ON Tandem
                  </span>
                  <span className="font-semibold text-foreground text-sm">Mediation Staging</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Once billing events arrive on the Tandem platform, they land in mediation staging. This is where
                  ENSCRIBE files or SQL/MP tables hold the validated, normalized events waiting for rating. These are
                  the input records &mdash; the <strong>source of truth for &ldquo;what should be billed.&rdquo;</strong>
                </p>
              </div>

              {/* Rated Transactions - ON Tandem */}
              <div className="p-5 rounded-xl border border-teal-500/30 bg-teal-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold rounded">
                    ON Tandem
                  </span>
                  <span className="font-semibold text-foreground text-sm">Rated Transactions</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  After the rating engine processes each event, the rated transactions (now with dollar amounts, tax,
                  discounts applied) are stored in SQL/MP tables or ENSCRIBE files on the Tandem storage subsystem.
                  These are intermediate records between rating and ledger posting.
                </p>
              </div>

              {/* Billing Ledger - ON Tandem */}
              <div className="p-5 rounded-xl border border-teal-500/30 bg-teal-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold rounded">
                    ON Tandem
                  </span>
                  <span className="font-semibold text-foreground text-sm">Billing Ledger</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  The committed financial records &mdash; subscriber balances, charge details, payment history, cycle
                  aggregates, tax pools. This is the core financial data store. Everything invoice generation and
                  GL posting reads from.
                </p>
              </div>

              {/* Invoice Files - OFF Tandem */}
              <div className="p-5 rounded-xl border border-border bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-gray-500/10 text-gray-600 dark:text-gray-400 text-xs font-bold rounded">
                    OFF Tandem
                  </span>
                  <span className="font-semibold text-foreground text-sm">Invoice Files &amp; Print Output</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Once invoices are generated, the print files usually get transferred to a downstream print vendor
                  system or a separate file server. The Tandem platform generates the invoice data but the bulk
                  print/export files don&apos;t stay on NonStop long-term &mdash; that&apos;s not what you&apos;d use
                  expensive fault-tolerant storage for.
                </p>
              </div>

              {/* GL Posting Data - OFF Tandem */}
              <div className="p-5 rounded-xl border border-border bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-gray-500/10 text-gray-600 dark:text-gray-400 text-xs font-bold rounded">
                    OFF Tandem
                  </span>
                  <span className="font-semibold text-foreground text-sm">GL Posting Data</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Journal entries get pushed to whatever enterprise financial system the MSO runs &mdash; SAP, Oracle
                  Financials, PeopleSoft. Once posted, GL data lives in the financial system, not on Tandem.
                </p>
              </div>
            </div>
          </div>

          {/* Retention Policies */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-teal-600 dark:text-teal-400 mb-4 pl-1">
              Retention &mdash; How Long Data Stays on Tandem
            </div>
            <p className="text-sm text-muted-foreground mb-4 pl-1">
              Tandem storage is expensive &mdash; NonStop disk subsystems cost significantly more per terabyte than
              commodity Linux/SAN storage. So you don&apos;t keep everything forever.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-muted/30">
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded flex-shrink-0 mt-0.5">
                  60&ndash;90 days
                </span>
                <div>
                  <div className="font-semibold text-foreground text-sm">Mediation Staging Events</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Retained through the current billing cycle plus one or two cycles for reconciliation purposes.
                    Once the cycle closes cleanly and reconciliation confirms parity, mediation staging data can be
                    purged or archived.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-muted/30">
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded flex-shrink-0 mt-0.5">
                  60&ndash;90 days
                </span>
                <div>
                  <div className="font-semibold text-foreground text-sm">Rated Transactions</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Similar to mediation &mdash; retained through cycle close and reconciliation. Once ledger postings
                    are confirmed and invoices are released, rated transaction detail is either archived off-platform
                    or purged.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-teal-500/30 bg-teal-500/5">
                <span className="px-2 py-0.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold rounded flex-shrink-0 mt-0.5">
                  Persistent
                </span>
                <div>
                  <div className="font-semibold text-foreground text-sm">Billing Ledger (Current State)</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    The active ledger &mdash; current balances, open charges, recent payment history &mdash; stays on
                    Tandem as long as the subscriber is active. This is the working financial dataset the billing
                    application needs for real-time account inquiry, payment processing, and the next billing cycle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-muted/30">
                <span className="px-2 py-0.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold rounded flex-shrink-0 mt-0.5">
                  18&ndash;24 mo
                </span>
                <div>
                  <div className="font-semibold text-foreground text-sm">Billing Ledger (Historical Detail)</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Detailed transaction history beyond the current and prior cycle typically gets archived to a
                    cheaper storage tier &mdash; often an off-platform data warehouse or archive system. Needed for
                    customer disputes, regulatory compliance, and audit trail. 18&ndash;24 months on accessible archive,
                    with 7+ years on deep archive for regulatory compliance depending on jurisdiction and service type.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                <span className="px-2 py-0.5 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold rounded flex-shrink-0 mt-0.5">
                  Hours&ndash;Days
                </span>
                <div>
                  <div className="font-semibold text-foreground text-sm">TMF Audit Trails</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    The transaction logs TMF uses for recovery. They&apos;re circular &mdash; the system overwrites old
                    audit trail files as new ones fill. Once transactions are committed and checkpointed, the audit
                    trail data for those transactions is no longer needed for recovery. This is directly relevant to
                    the incident &mdash; the TMF audit trail gap meant that in-flight transactions during the failure
                    window couldn&apos;t be recovered because the audit data for those specific transactions was incomplete.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why This Matters for the Story */}
          <div className="p-6 rounded-xl border border-teal-500/30 bg-gradient-to-r from-teal-500/10 to-transparent">
            <div className="text-xs font-bold uppercase tracking-wide text-teal-600 dark:text-teal-400 mb-3">
              Why This Matters for Your Incident
            </div>
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                <strong>First:</strong> when you say &ldquo;we rebuilt from mediation source-of-truth events,&rdquo;
                you&apos;re saying you went back to the mediation staging data that was still on-platform and reprocessed
                through rating and ledger for the affected population. This works because mediation data was retained
                and intact &mdash; the disk failure affected the rating-to-ledger pipeline, not the mediation staging files
                (they were already committed before the failure).
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Second:</strong> the storage subsystem failure that triggered the incident was on this same
                Tandem disk infrastructure that holds all this data. That&apos;s why it was Tier-0 &mdash; you
                weren&apos;t just losing compute capacity, you were risking the financial data store for 5M subscribers.
              </p>
            </div>
          </div>

          {/* Interview Pocket Answer */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">
              If Asked: &ldquo;Why was this Tier-0 severity?&rdquo;
            </div>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
              <p className="text-foreground italic leading-relaxed">
                &ldquo;The billing ledger for 5M subscribers lives on this storage subsystem. A disk failure that
                doesn&apos;t recover cleanly isn&apos;t just a service interruption &mdash; it&apos;s a threat to
                the financial record of truth.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-3">
              <strong>Signal:</strong> Understands that storage failures on financial platforms have fundamentally
              different severity than compute failures.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. Why This Matters ── */}
      <section id="why-this-matters" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">8</span>
          <h2 className="text-2xl font-bold text-foreground">Why This Matters for Your Incident</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <p className="text-foreground leading-relaxed">
              The failure happened <strong className="text-red-600 dark:text-red-400">between rating and ledger</strong>.
              Mediation had done its job &mdash; billing events were generated and validated.
              Rating had partially completed &mdash; some subscribers&apos; charges were priced and ready.
              But the disk failure interrupted the ledger posting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5">
              <div className="font-semibold text-foreground">Mediation</div>
              <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1">Complete</div>
              <div className="text-xs text-muted-foreground mt-1">Knew what should be billed</div>
            </div>
            <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/5">
              <div className="font-semibold text-foreground">Rating</div>
              <div className="text-sm font-bold text-amber-600 dark:text-amber-400 mt-1">Partial</div>
              <div className="text-xs text-muted-foreground mt-1">Some rated, some not</div>
            </div>
            <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
              <div className="font-semibold text-foreground">Ledger</div>
              <div className="text-sm font-bold text-red-600 dark:text-red-400 mt-1">Inconsistent</div>
              <div className="text-xs text-muted-foreground mt-1">Some posted, aggregates broken</div>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg border border-emerald-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Why Three-Way Reconciliation Works</div>
            <p className="text-foreground leading-relaxed">
              You compare <strong>mediation event counts</strong> against <strong>rating completion logs</strong> against
              <strong> ledger postings</strong>, and the deltas tell you precisely which accounts are in what state.
              The rebuild starts from mediation (source of truth) and re-processes through rating and ledger
              for the affected population only.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/30">
            <p className="text-foreground font-medium text-center leading-relaxed">
              Understanding the pipeline is what makes the Billing Recovery decision legible.
              Without knowing how mediation, rating, and ledger interact, the three-way reconciliation
              approach and the financial asymmetry analysis would be opaque.
            </p>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg border border-border text-center">
            <Link href="/nebula/interview-prep/billing-recovery" className="text-primary hover:underline font-medium">
              Read the full Billing Recovery incident story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
        <Link
          href="/nebula/interview-prep/billing-recovery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Billing Recovery
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
