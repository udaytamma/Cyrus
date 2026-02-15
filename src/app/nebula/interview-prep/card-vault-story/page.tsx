"use client";

/**
 * Card Vault Story — Capital Allocation Under PCI Constraints
 *
 * Principal TPM interview narrative built around right-sizing payment
 * security architecture under competitive bid pressure:
 * - $1.5M/year contract, 3.5M payments/month, 2-3 competing vendors
 * - Full HSM vault (65M/month design) vs encrypted DB + key hierarchy
 * - ~30% infrastructure cost delta on a margin-sensitive competitive bid
 * - QSA pre-validation as alignment linchpin
 * - Envelope governance: 12-15M/month migration triggers
 * - Asymmetric risk: irreversible revenue loss vs reversible migration
 * - PCI DSS Level 1 assessment: zero findings on card data architecture
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

// --- Data ---

const vaultComponents = [
  "Dedicated PCI-segmented network zone",
  "2-node hardware HSM cluster",
  "Tokenization/detokenization service",
  "Additional network hop per transaction",
  "Separate key lifecycle infrastructure",
  "Dedicated crypto operations overhead",
];

const encryptedDbControls = [
  "Application-level encryption before database write (AES-256)",
  "Transparent Data Encryption (TDE) on the database",
  "Wrapped Data Encryption Keys (DEK) stored in database",
  "Master key stored in a separate external system",
  "Segmented database network zone",
  "Strict RBAC on all card data access",
  "Enforced key rotation cadence",
  "Full audit logging on all access and key operations",
];

const migrationSteps = [
  { step: "1", action: "Deploy vault cluster in parallel", detail: "No impact to live traffic" },
  { step: "2", action: "Dual-write", detail: "New transactions go to both encrypted DB and tokenized vault" },
  { step: "3", action: "Batch re-encrypt historical cards", detail: "During maintenance windows" },
  { step: "4", action: "Shift read path", detail: "From direct PAN decryption to vault detokenization" },
  { step: "5", action: "Validate parity", detail: "Confirm all active cards accessible via vault" },
  { step: "6", action: "Decommission legacy path", detail: "Remove direct PAN reads and encrypted storage" },
];

const pressureTests = [
  {
    id: "S1",
    badge: "Security Architect",
    question: "You stored full PAN instead of tokens. That's a larger exposure surface. How do you justify that?",
    response:
      "You're right \u2014 encrypted PAN in a database has a higher theoretical exposure surface than tokenized references pointing to an HSM vault. The practical risk mitigation comes from the key hierarchy. The database contains encrypted data and wrapped data encryption keys. The master key required to unwrap those DEKs is stored in a separate external system. An attacker who compromises the database gets ciphertext and wrapped keys \u2014 both useless without the master key. Add network segmentation, RBAC, enforced key rotation, and full access logging, and the practical exposure is bounded. The QSA reviewed this architecture specifically and confirmed PCI DSS compliance. Is it theoretically less secure than a full vault? Yes. Is the residual risk acceptable for a 3.5M/month workload with these controls? The QSA and our security team concluded yes.",
  },
  {
    id: "S2",
    badge: "Security Architect",
    question: "What if the master key system is compromised?",
    response:
      "Then you have a serious incident regardless of architecture \u2014 master key compromise in a vault model is equally catastrophic. The mitigation is the same in both approaches: access controls on the master key system, monitoring, rotation cadence, and incident response procedures. The key hierarchy doesn't eliminate the risk of master key compromise \u2014 it ensures that a database-level breach alone is insufficient. No architecture eliminates all risk. The question is whether the residual risk is proportionate to the workload and economics, and the QSA confirmed it was.",
  },
  {
    id: "E1",
    badge: "Engineer",
    question: "The 3-month migration estimate \u2014 walk me through it.",
    response:
      "This was based on a similar migration we executed on a different engagement, not a theoretical estimate. The major work streams are: vault cluster deployment and integration testing in parallel (no production impact, roughly 3\u20134 weeks), dual-write implementation so new transactions go to both encrypted DB and vault (2\u20133 weeks development and testing), batch re-encryption of historical card data during maintenance windows (2\u20133 weeks depending on volume, done in batches to limit blast radius), read path cutover from direct decryption to vault detokenization (phased over 1\u20132 weeks with monitoring), and decommission of legacy path after validation. The elapsed timeline is roughly 3 months with buffer. The prior migration was at comparable volume. It's not trivial, but it's not speculative either.",
  },
  {
    id: "F1",
    badge: "CFO",
    question: "You're telling me you saved 30% on infrastructure costs. What's the dollar impact?",
    response:
      "I'll be direct \u2014 I don't have the exact infrastructure dollar figures at this point. The 30% was the cost delta between the vault approach and the encrypted DB approach on the infrastructure line. On a $1.5M/year engagement, infrastructure cost directly impacts margin. In a competitive bid against 2\u20133 vendors where pricing was one of several evaluation factors, that margin flexibility contributed to winning the deal. The more defensible economic framing is: we preserved $1.5M/year in annual revenue plus downstream expansion opportunity by right-sizing the architecture, rather than over-engineering it and pricing ourselves out of competitiveness.",
  },
  {
    id: "F2",
    badge: "CFO",
    question: "Why not just absorb the cost and use the vault? Protect the margin elsewhere.",
    response:
      "On a $1.5M/year engagement, margin is already thin in a competitive bid. \"Protect the margin elsewhere\" assumes there's somewhere else to cut \u2014 and in a deal this size, there usually isn't meaningful slack. The vault overhead wasn't just hardware cost \u2014 it was ongoing operational complexity: HSM key ceremonies, firmware management, additional infrastructure redundancy, crypto ops staffing. That's annualized operational drag on a deal where the revenue doesn't justify it. If this were a $15M/year engagement, I'd have recommended the vault without hesitation. At $1.5M/year, the economics don't support 20\u00D7 over-provisioning.",
  },
  {
    id: "V1",
    badge: "VP Eng",
    question: "This sounds like you just picked the cheaper option. Where's the Principal-level thinking?",
    response:
      "The cheaper option would have been to skip encryption controls and argue for compensating controls. That's cost cutting. What we did was identify the specific workload boundary where the vault's economics become justified, define explicit triggers for migration, get QSA pre-validation, sequence stakeholder alignment across security, engineering, and sales, and document the governance envelope with annual review. The Principal contribution is the judgment framework \u2014 not \"always use the strongest architecture\" and not \"always use the cheapest.\" It's \"match architecture to workload with governed escalation when conditions change.\" Anybody can pick Option A or Option B. Defining the conditions under which you'd move from B to A, getting it pre-validated, and getting four stakeholder groups aligned \u2014 that's the work.",
  },
  {
    id: "E2",
    badge: "Engineer",
    question: "What if the client's volume had spiked to 15M/month in year one? You'd be scrambling.",
    response:
      "That's why the envelope had monitoring, not just annual review. We tracked volume trends continuously. A spike from 3.5M to 15M doesn't happen overnight \u2014 payment aggregator volume growth is gradual and forecastable. We'd have seen the trajectory months before hitting the threshold, giving us time to initiate the migration. If somehow volume quadrupled unexpectedly \u2014 which would be an extraordinary business event \u2014 the encrypted DB approach still works at that volume. The threshold isn't a technical ceiling where the system breaks. It's the point where the vault's operational benefits begin to justify its cost. We'd have had time to migrate without a crisis.",
  },
  {
    id: "V2",
    badge: "VP Sales",
    question: "Did we actually win because of the pricing, or would we have won anyway with the existing relationship?",
    response:
      "Honest answer: the existing relationship and technical capability were factors, but this was a competitive bid with 2\u20133 vendors and the client was evaluating alternatives. I can't attribute the win solely to pricing. What I can say is that the 30% infrastructure cost reduction gave us pricing flexibility that contributed to competitiveness. If we'd bid with the vault cost basis and a competitor came in lower with an equally compliant approach, we'd have been at a disadvantage. The right-sizing ensured pricing wasn't the reason we'd lose.",
  },
];

const principalCaliberItems = [
  "Clear TPM role definition \u2014 business case and stakeholder alignment, not crypto architecture",
  "Explicit about what you did and didn't do \u2014 no overclaiming technical design",
  "QSA pre-validation as the alignment linchpin \u2014 not \"trust me,\" but \"the assessor confirmed it\"",
  "Stakeholder sequencing: QSA \u2192 security \u2192 engineering \u2192 sales \u2014 deliberate, not accidental",
  "Asymmetric risk framing: irreversible revenue loss versus reversible migration effort",
  "Envelope governance with defined triggers, not open-ended cost avoidance",
  "Migration estimate grounded in prior execution, not theoretical",
  "Honest about what you don't know (exact dollar figures) while precise about what you do know",
  "Audit outcome concrete: PCI DSS Level 1 by external QSA, zero findings on card data architecture",
  "Economic framing proportionate to deal size \u2014 doesn't oversell a $1.5M deal as transformational",
];

const storyPositioning = [
  { story: "Migration", focus: "Semantic system compression under financial risk" },
  { story: "Billing Recovery", focus: "Cycle-level financial integrity under failure (two-mode architecture)" },
  { story: "Reliability", focus: "Organizational topology redesign with margin impact" },
  { story: "OpsGPT", focus: "AI autonomy under production governance with measurable improvement trajectory" },
  { story: "Card Vault", focus: "Capital allocation under compliance constraints with asymmetric risk reasoning" },
];

// --- Page ---

export default function CardVaultStoryPage() {
  return (
    <InterviewPrepLayout
      title="Card Vault Story"
      description="Capital Allocation Under PCI Constraints"
      currentSection="card-vault-story"
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
          <Link href="/nebula/interview-prep/card-vault-pci" className="text-primary hover:underline">
            Card Vault / PCI STAR Story &rarr;
          </Link>
          {" "}&bull;{" "}
          <Link href="/nebula/interview-prep/story-pivot-map" className="text-primary hover:underline">
            Story Pivot Map &rarr;
          </Link>
        </p>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="px-2.5 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
            PCI DSS
          </span>
          <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            Capital Allocation
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            $1.5M/Year Deal
          </span>
          <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full">
            Principal TPM Bar
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Card Vault &mdash; Capital Allocation Under PCI Constraints</h1>
        <p className="text-muted-foreground leading-relaxed">
          Right-sizing payment security architecture on a <strong className="text-foreground">$1.5M/year competitive bid</strong> processing
          3.5M payments/month. Full HSM vault designed for 65M/month vs encrypted DB with proper key hierarchy &mdash;
          <strong className="text-foreground"> ~30% infrastructure cost delta</strong> on a margin-sensitive deal.
        </p>
        <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/30">
          <p className="text-foreground font-semibold italic text-center">
            &ldquo;Right-sizing is harder than over-building. It requires you to take a position, defend it with evidence, and own the bounded risk.&rdquo;
          </p>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "#context", label: "Context", desc: "3.5M payments, $1.5M deal, 2-3 bidders", color: "border-blue-500/30" },
            { href: "#proposal", label: "What I Proposed", desc: "Encrypted DB + key hierarchy", color: "border-emerald-500/30" },
            { href: "#decision-fork", label: "Decision Fork", desc: "Full vault vs right-sized architecture", color: "border-amber-500/30" },
            { href: "#envelope", label: "Envelope Definition", desc: "12-15M/month migration triggers", color: "border-purple-500/30" },
            { href: "#economic-framing", label: "Economic Framing", desc: "30% cost delta, margin impact", color: "border-indigo-500/30" },
            { href: "#reversibility", label: "Reversibility", desc: "6-step migration plan, ~3 months", color: "border-cyan-500/30" },
            { href: "#stakeholder-alignment", label: "Stakeholder Alignment", desc: "QSA, security, eng, sales", color: "border-rose-500/30" },
            { href: "#my-role", label: "My Role", desc: "Analytical influence, not technical authority", color: "border-violet-500/30" },
            { href: "#principal-framing", label: "Principal Framing", desc: "Capital allocation judgment", color: "border-red-500/30" },
            { href: "#delivery-script", label: "90-Second Delivery", desc: "Live interview script", color: "border-violet-500/30" },
            { href: "#pressure-tests", label: "Pressure Tests", desc: "8 hostile panel Q&As", color: "border-red-500/30" },
          ].map((nav) => (
            <a key={nav.href} href={nav.href} className={`p-3 bg-background rounded-lg border ${nav.color} hover:opacity-80 transition-opacity`}>
              <div className="font-medium text-foreground text-sm">{nav.label}</div>
              <div className="text-xs text-muted-foreground">{nav.desc}</div>
            </a>
          ))}
        </div>
      </div>

      {/* 1. Context */}
      <section id="context" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
          <h2 className="text-2xl font-bold text-foreground">Context &mdash; Workload Misalignment</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <p className="text-foreground leading-relaxed">
              We were bidding on a scope expansion with an existing payment aggregator client &mdash;
              approximately <strong className="text-blue-600 dark:text-blue-400">$1.5M/year contract value</strong>,
              handling <strong className="text-blue-600 dark:text-blue-400">~3.5M payments/month</strong>. This was a
              competitive bid with 2&ndash;3 other vendors.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-3">The Problem</div>
            <p className="text-foreground leading-relaxed mb-4">
              The default internal proposal reused our existing hardware HSM-backed vault architecture
              originally built for a <strong>65M/month workload</strong> on another engagement.
              Architecturally clean. Proven at scale. <strong className="text-red-600 dark:text-red-400">Severely overbuilt</strong> for
              a 3.5M/month workload &mdash; infrastructure designed for roughly 20&times; the expected volume.
            </p>
          </div>

          {/* What the vault included */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Original Vault Architecture</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vaultComponents.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-center">
              <p className="text-sm text-foreground font-medium">
                Cost delta: approximately <strong className="text-red-600 dark:text-red-400">30% higher annual operating cost</strong> for
                the vault approach versus the alternative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What I Identified and Proposed */}
      <section id="proposal" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
          <h2 className="text-2xl font-bold text-foreground">What I Identified and Proposed</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <p className="text-foreground leading-relaxed">
              My role was not designing the cryptographic architecture &mdash; that was engineering and security.
              My role was <strong>identifying the cost-to-workload misalignment</strong>, reframing the internal discussion
              from &ldquo;default to our strongest architecture&rdquo; to &ldquo;right-size the architecture to the
              workload envelope,&rdquo; and driving alignment across engineering, security, sales, and the QSA.
            </p>
          </div>

          {/* Alternative Architecture */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Engineering&apos;s Proposed Alternative: Encrypted DB + Key Hierarchy</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              {encryptedDbControls.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Key Hierarchy */}
          <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-3">Key Hierarchy</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { key: "DEK", desc: "Wrapped and stored in database \u2014 used for per-record encryption" },
                { key: "Master Key", desc: "Held externally \u2014 required to unwrap DEKs" },
                { key: "Result", desc: "Compromise of database alone does not expose usable PAN" },
              ].map((item) => (
                <div key={item.key} className="p-3 bg-background/60 rounded-lg border border-border">
                  <div className="font-semibold text-foreground text-sm">{item.key}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* QSA Validation */}
          <div className="p-5 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg border border-emerald-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">QSA Pre-Validation</div>
            <p className="text-foreground leading-relaxed">
              Before committing to this approach, we had our <strong>QSA (Qualified Security Assessor)</strong> review and confirm
              that the proposed architecture met PCI DSS requirements. This was not &ldquo;we built it and hoped it passed.&rdquo;
              The QSA validated the approach before we included it in the proposal, which meant we went into the bid and
              subsequent audit with confidence that the architecture was defensible.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Decision Fork */}
      <section id="decision-fork" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
          <h2 className="text-2xl font-bold text-foreground">Explicit Fork</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Option A */}
          <div className="rounded-xl border border-red-500/30 overflow-hidden">
            <div className="bg-red-500/10 px-6 py-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border-2 border-red-500/30 text-red-600 dark:text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0">A</span>
              <h3 className="text-lg font-semibold text-foreground">Reuse Full HSM Vault</h3>
            </div>
            <div className="p-6">
              <div className="mb-3 text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Pros</div>
              <ul className="space-y-2 mb-4">
                {[
                  "Maximum security posture and optics",
                  "Built and proven for 65M/month scale",
                  "Familiar to internal platform and security teams",
                  "No additional risk acceptance needed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="text-emerald-500 flex-shrink-0 mt-0.5 text-xs">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-3 text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400">Cons</div>
              <ul className="space-y-2">
                {[
                  "~30% higher annual operating cost",
                  "2 additional HSM nodes to procure, configure, maintain",
                  "Additional crypto operations overhead",
                  "Higher cost basis reduces margin on competitive bid",
                  "Overbuilt by ~20\u00D7 for actual workload",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="text-red-500 flex-shrink-0 mt-0.5 text-xs">&#10005;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Option B */}
          <div className="rounded-xl border border-emerald-500/30 overflow-hidden">
            <div className="bg-emerald-500/10 px-6 py-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold flex-shrink-0">B</span>
              <h3 className="text-lg font-semibold text-foreground">Encrypted DB + Segmented Key Hierarchy</h3>
            </div>
            <div className="p-6">
              <div className="mb-3 text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Pros</div>
              <ul className="space-y-2 mb-4">
                {[
                  "~30% lower annual run cost",
                  "Lower operational complexity",
                  "Competitive pricing on margin-sensitive bid",
                  "QSA pre-validated as PCI-compliant",
                  "Explicit migration triggers defined for scale-up",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="text-emerald-500 flex-shrink-0 mt-0.5 text-xs">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-3 text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400">Cons</div>
              <ul className="space-y-2">
                {[
                  "Migration required if volume exceeds envelope (~3 months)",
                  "Higher exposure surface vs tokenization",
                  "Requires documented risk acceptance for non-default architecture",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="text-red-500 flex-shrink-0 mt-0.5 text-xs">&#10005;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-5 bg-emerald-500/5 rounded-xl border border-emerald-500/30">
          <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
            <p className="text-foreground font-semibold">We chose Option B.</p>
          </div>
        </div>
      </section>

      {/* 4. Envelope Definition */}
      <section id="envelope" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
          <h2 className="text-2xl font-bold text-foreground">Envelope Definition</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-3">
              This separates &ldquo;we cut costs&rdquo; from &ldquo;we right-sized with governance.&rdquo;
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-background/60 rounded-lg border border-border text-center">
                <div className="text-lg font-bold text-foreground">3.5M</div>
                <div className="text-xs text-muted-foreground">Current payments/month</div>
              </div>
              <div className="p-3 bg-background/60 rounded-lg border border-border text-center">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">12&ndash;15M</div>
                <div className="text-xs text-muted-foreground">Migration trigger threshold</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Explicit Migration Triggers</div>
            <ul className="space-y-2.5">
              {[
                "Sustained volume exceeding 12\u201315M payments/month",
                "Sustained QPS approaching crypto throughput comfort zone of the DB-level encryption path",
                "New enterprise RFP requirement specifying token abstraction or vault-based architecture",
                "Audit findings or QSA feedback indicating the approach was no longer sufficient",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Documented Governance</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Annual volume review", desc: "Part of account governance cadence" },
                { label: "Crypto throughput monitoring", desc: "Continuous threshold tracking" },
                { label: "Pre-scoped migration plan", desc: "With effort estimate ready" },
              ].map((item) => (
                <div key={item.label} className="p-3 bg-background/60 rounded-lg border border-border text-center">
                  <div className="font-semibold text-foreground text-sm">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/30">
            <p className="text-foreground font-medium italic text-center">
              Bounded risk with pre-defined escalation logic, not open-ended cost avoidance.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Economic Framing */}
      <section id="economic-framing" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">5</span>
          <h2 className="text-2xl font-bold text-foreground">Economic Framing</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-3">Deal Dynamics</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-background/60 rounded-lg border border-border text-center">
                <div className="text-lg font-bold text-foreground">$1.5M/yr</div>
                <div className="text-xs text-muted-foreground">Contract value</div>
              </div>
              <div className="p-3 bg-background/60 rounded-lg border border-border text-center">
                <div className="text-lg font-bold text-foreground">2&ndash;3</div>
                <div className="text-xs text-muted-foreground">Competing bidders</div>
              </div>
              <div className="p-3 bg-background/60 rounded-lg border border-border text-center">
                <div className="text-lg font-bold text-red-600 dark:text-red-400">~30%</div>
                <div className="text-xs text-muted-foreground">Vault cost premium</div>
              </div>
            </div>
            <p className="text-foreground leading-relaxed text-sm">
              The vault approach would have increased our infrastructure cost basis by approximately 30%,
              directly compressing margin on a deal where pricing was a competitive factor.
              That margin compression could have been the difference between a winning and losing bid.
            </p>
          </div>

          {/* Outcome */}
          <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-3">Outcome</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Won the bid against 2\u20133 competitors",
                "Processed 3.5M/month at launch",
                "Scaled to ~5M/month within defined envelope",
                "PCI DSS Level 1 assessment: zero findings on card data architecture",
                "Margin preserved on the engagement",
                "Client relationship strengthened, enabling downstream revenue expansion",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs flex-shrink-0 mt-0.5">&#10003;</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Reversibility Mechanics */}
      <section id="reversibility" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">6</span>
          <h2 className="text-2xl font-bold text-foreground">Reversibility Mechanics</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5">
            <div className="text-xs font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400 mb-3">
              If Volume Crossed 12&ndash;15M/Month
            </div>
            <div className="space-y-3">
              {migrationSteps.map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{s.step}</span>
                  <div>
                    <span className="font-semibold text-foreground text-sm">{s.action}</span>
                    <span className="text-sm text-muted-foreground"> &mdash; {s.detail}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 text-center">
              <p className="text-sm text-foreground">
                Estimated effort: <strong className="text-cyan-600 dark:text-cyan-400">~3 months</strong> &mdash; based on a prior migration
                we executed on a different engagement, not a theoretical planning number.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-lg border border-cyan-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400 mb-2">Asymmetric Risk</div>
            <p className="text-foreground font-medium italic">
              Losing the bid was irreversible. The $1.5M/year in annual revenue plus downstream expansion
              opportunity would have gone to a competitor permanently. The migration, if ever needed, was
              a plannable 3-month effort. This was asymmetric risk calibration: accept bounded, reversible
              migration risk to avoid irreversible revenue loss.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Stakeholder Alignment */}
      <section id="stakeholder-alignment" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-rose-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">7</span>
          <h2 className="text-2xl font-bold text-foreground">Stakeholder Alignment</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-rose-500/30 bg-rose-500/5">
            <p className="text-foreground leading-relaxed">
              This required alignment across <strong>four groups with different incentive structures</strong>.
              My contribution was orchestrating this alignment &mdash; bringing the right people into the discussion
              in the right sequence.
            </p>
          </div>

          {[
            {
              team: "Security Team",
              position: "Default position was the vault \u2014 maximum protection, minimum career risk.",
              resolution: "Aligned after QSA confirmation and formal documentation of controls. Having the external assessor confirm PCI compliance carried more weight than the business case alone.",
              color: "border-red-500/30",
            },
            {
              team: "Engineering Team",
              position: "Preferred the simpler approach \u2014 less operational overhead, no HSM key ceremonies.",
              resolution: "Proposed the encrypted DB architecture. Concern was the migration plan \u2014 having the prior migration as a reference point addressed feasibility.",
              color: "border-blue-500/30",
            },
            {
              team: "Sales Team",
              position: "Wanted the most competitive pricing possible.",
              resolution: "Didn't care about architecture \u2014 cared about cost basis and win probability. The 30% cost reduction gave them pricing flexibility.",
              color: "border-amber-500/30",
            },
            {
              team: "QSA",
              position: "Independent assessor reviewing compliance.",
              resolution: "Reviewed the proposed architecture, confirmed PCI DSS compliance, identified specific required controls. Their pre-commitment validation was the linchpin.",
              color: "border-emerald-500/30",
            },
          ].map((item) => (
            <div key={item.team} className={`p-5 rounded-xl border ${item.color} bg-muted/30`}>
              <div className="font-semibold text-foreground text-sm mb-2">{item.team}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                <strong className="text-foreground">Position:</strong> {item.position}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Resolution:</strong> {item.resolution}
              </p>
            </div>
          ))}

          <div className="p-5 bg-gradient-to-r from-rose-500/10 to-transparent rounded-lg border border-rose-500/30">
            <div className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-400 mb-2">Sequencing</div>
            <p className="text-foreground leading-relaxed text-sm">
              <strong>QSA first</strong> (establish compliance credibility) &rarr; <strong>Security</strong> (independent validation overcame default objection) &rarr;
              <strong> Engineering</strong> (feasibility confirmed) &rarr; <strong>Sales</strong> (pricing flexibility).
              Deliberate, not accidental.
            </p>
          </div>
        </div>
      </section>

      {/* 8. My Specific Role */}
      <section id="my-role" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-violet-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">8</span>
          <h2 className="text-2xl font-bold text-foreground">My Specific Role</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-violet-500/30 bg-violet-500/5">
            <p className="text-foreground leading-relaxed font-medium">
              I did not design the cryptographic architecture, select encryption algorithms, configure TDE,
              or build the key management infrastructure. Engineering and security owned that.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              "Identified the workload-to-architecture misalignment inflating our cost basis",
              "Reframed the internal discussion from \"default to strongest\" to \"right-size to workload with governed escalation\"",
              "Brought the QSA into the decision process pre-commitment to establish compliance credibility",
              "Sequenced stakeholder alignment (QSA \u2192 security \u2192 engineering \u2192 sales)",
              "Defined the envelope thresholds and migration triggers",
              "Documented the governance framework for annual review",
              "Presented the economic case to leadership and got approval for the non-default approach",
              "Owned the risk framing: bounded reversible risk (migration) versus unbounded irreversible risk (lost bid)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border">
                <span className="w-5 h-5 rounded bg-violet-500/10 flex items-center justify-center text-violet-500 text-xs flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-5 bg-gradient-to-r from-violet-500/10 to-transparent rounded-lg border border-violet-500/30">
            <p className="text-foreground font-medium italic text-center">
              This was analytical influence and cross-functional alignment, not technical authority.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Principal-Level Framing */}
      <section id="principal-framing" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">9</span>
          <h2 className="text-2xl font-bold text-foreground">Principal-Level Framing</h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <p className="text-foreground leading-relaxed">
              The default organizational behavior was to reuse the strongest architecture regardless of workload fit.
              Nobody gets blamed for over-engineering security. People <strong>do</strong> get blamed for under-engineering it.
            </p>
            <p className="text-foreground leading-relaxed mt-3">
              The Principal contribution was challenging that default with a structured argument: quantified cost delta,
              QSA-validated compliance, defined migration envelope, and asymmetric risk framing.
              Then driving the alignment across groups with conflicting incentive structures to get to a decision
              that was <strong>collectively owned, not unilaterally imposed</strong>.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/30">
            <p className="text-foreground font-semibold italic text-center">
              Right-sizing is harder than over-building. It requires you to take a position, defend it with evidence,
              and own the bounded risk. That&apos;s capital allocation judgment, not cost cutting.
            </p>
          </div>

          {/* Why Principal-Caliber */}
          <div className="p-6 rounded-xl border border-border bg-muted/30">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">Why This Story Is Principal-Caliber</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {principalCaliberItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs flex-shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Story Positioning */}
          <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">Positioning vs. Your Other Stories</div>
            <div className="space-y-2">
              {storyPositioning.map((s) => (
                <div key={s.story} className="flex items-center gap-3 text-sm">
                  <span className={`font-semibold text-foreground w-32 flex-shrink-0 ${s.story === "Card Vault" ? "text-primary" : ""}`}>{s.story}</span>
                  <span className="text-muted-foreground">&rarr;</span>
                  <span className={`text-foreground ${s.story === "Card Vault" ? "font-medium" : ""}`}>{s.focus}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3 italic">
              Five stories covering architecture, financial integrity, org design, AI governance, and capital allocation.
              That&apos;s Principal breadth across the full scope of what a Principal TPM gets asked about.
            </p>
          </div>
        </div>
      </section>

      {/* 90-Second Live Delivery */}
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
              We were bidding on a scope expansion with an existing payment aggregator client &mdash;
              about <strong>$1.5M annually</strong>, processing <strong>3.5M payments per month</strong>, competing against 2&ndash;3 other
              vendors. The default internal proposal reused our hardware HSM vault architecture built for
              a 65M/month workload. Proven, but approximately <strong>30% more expensive</strong> to operate &mdash;
              overbuilt by about 20&times; for this workload.
            </p>
            <p>
              I identified the misalignment and reframed the discussion. PCI compliance doesn&apos;t require a full
              HSM vault &mdash; it requires appropriate cryptographic controls. Engineering proposed encrypted PAN at rest
              with a proper key hierarchy: data keys wrapped in the database, master key stored externally.
              Compromise of the database alone doesn&apos;t expose usable card data.
            </p>
            <p>
              Before committing, I brought our <strong>QSA</strong> in to validate that the approach met PCI DSS requirements.
              That confirmation was the linchpin &mdash; it gave security the independent validation they needed to align
              on a non-default posture.
            </p>
            <p>
              We defined explicit migration triggers at <strong>12&ndash;15M payments per month</strong>. If volume crossed that
              threshold, we had a pre-scoped 3-month migration plan to full vault, based on a similar migration
              we&apos;d executed before on another engagement. Bounded, reversible risk.
            </p>
            <p className="font-semibold">
              The asymmetric framing: losing the bid was irreversible &mdash; $1.5M/year plus downstream expansion
              gone permanently. The migration, if ever needed, was a plannable 3-month effort.
            </p>
            <p className="font-semibold">
              We won the bid, scaled to about 5M/month within envelope, passed <strong>PCI DSS Level 1 assessment
              with zero findings</strong> on the card data architecture, and preserved margin. The decision wasn&apos;t
              about cutting security corners. It was about right-sizing capital allocation to workload under
              compliance constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Pressure Tests */}
      <section id="pressure-tests" className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center text-lg font-bold flex-shrink-0">Q</span>
          <h2 className="text-2xl font-bold text-foreground">Pressure Tests &mdash; Hostile Panel</h2>
        </div>

        <div className="space-y-5">
          {pressureTests.map((q) => (
            <div key={q.id} className="p-5 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {q.id}
                </span>
                <div>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full mr-2 ${
                    q.badge === "Security Architect" ? "bg-red-500/10 text-red-600 dark:text-red-400" :
                    q.badge === "Engineer" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" :
                    q.badge === "CFO" ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" :
                    q.badge === "VP Eng" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400" :
                    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  }`}>
                    {q.badge}
                  </span>
                  <h3 className="font-semibold text-foreground inline">&ldquo;{q.question}&rdquo;</h3>
                </div>
              </div>
              <div className="ml-10 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 mb-2">Response</div>
                <p className="text-sm text-foreground leading-relaxed">{q.response}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
        <Link
          href="/nebula/interview-prep/apm"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; APM
        </Link>
        <Link
          href="/nebula/interview-prep/migration-story"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Migration Story &rarr;
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
