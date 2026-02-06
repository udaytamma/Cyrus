"use client";

/**
 * Card Vault / PCI - STAR Story
 * Killing architectural purity for business reality with deliberate scope-down
 */

import Link from "next/link";
import { InterviewPrepLayout } from "@/components/InterviewPrepLayout";

export default function CardVaultPCIPage() {
  return (
    <InterviewPrepLayout
      title="Card Vault / PCI"
      description="STAR story for scope-down and risk ownership behavioral questions"
      currentSection="card-vault-pci"
    >
      <Link
        href="/nebula/interview-prep"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Interview Prep
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
            STAR Format
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium rounded-full">
            Kill / Scope-Down Decision
          </span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Card Vault / PCI</h1>
        <p className="text-muted-foreground">
          Deliberately killing a &quot;gold-standard&quot; architecture that senior leaders wanted, reframing the problem around business reality, and owning the long-term consequences.
        </p>
      </div>

      {/* Situation */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
            S
          </span>
          <h2 className="text-xl font-semibold text-foreground">Situation</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              We were asked to re-review a proposal for a new payment aggregator platform handling ~3.5M payments per month. The original design reused a full card-vault architecture already deployed for a much larger customer processing ~65M payments monthly.
            </p>
            <p>
              That design was architecturally clean, PCI-safe, and familiar to platform and security teams. But it came with significantly higher operational cost and latency, and at this scale would have made our bid uncompetitive — risking the loss of the project and the downstream account growth that came with it.
            </p>
          </div>
        </div>
      </section>

      {/* Task */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
            T
          </span>
          <h2 className="text-xl font-semibold text-foreground">Task</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              I was accountable for ensuring the proposed solution was PCI-compliant, operationally viable, and commercially competitive. The decision that had to be made immediately was whether to ship a &quot;gold-standard&quot; architecture that was safe but expensive, or deliberately scope down the design to fit the business envelope without violating compliance.
            </p>
            <p>
              If no one pushed back, we would have submitted the existing vault-based design as-is and almost certainly lost the bid.
            </p>
          </div>
        </div>
      </section>

      {/* Conflict */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center text-lg font-bold">
            C
          </span>
          <h2 className="text-xl font-semibold text-foreground">Conflict</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              Security and compliance strongly favored the full card-vault model because it was proven and minimized audit risk. Platform architects preferred reusing an existing design to avoid introducing new operational patterns.
            </p>
            <p>
              Business and sales were concerned that applying a 65M-scale architecture to a 3.5M-payment workload would price us out of the deal. Formal approval rested with sales, but mandate alone wouldn&apos;t work because every group had defensible, data-backed arguments.
            </p>
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg font-bold">
            A
          </span>
          <h2 className="text-xl font-semibold text-foreground">Action</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              I deliberately reframed the discussion from &quot;Which architecture is best?&quot; to &quot;What does this workload actually require to remain PCI-compliant and competitive?&quot; I separated the idea of <strong>needing PCI compliance</strong> from <strong>needing a full card vault</strong>, and forced that distinction into the decision.
            </p>
            <p>
              I proposed explicitly killing the full vault design for this use case and replacing it with a lower-cost model: encrypted card storage at the database layer with strong key management, combined with secure in-transit encryption. I was explicit about the long-term downsides — more complex key rotation, potential re-encrypt cycles at higher scale, and a future migration if volumes exceeded defined thresholds.
            </p>
            <p>
              We documented those risks, set envelope limits, and agreed this was a conscious tradeoff to win the deal and establish customer stickiness.
            </p>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
            R
          </span>
          <h2 className="text-xl font-semibold text-foreground">Result</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed space-y-4">
            <p>
              We shipped the scoped-down, PCI-compliant payment platform, won the bid, and successfully handled ~3.5M payments per month. The account later grew to ~5M payments while staying within the defined envelope.
            </p>
            <p>
              Operational costs were materially lower than the vault-based design, audits passed cleanly, and the platform&apos;s success helped us win additional managed services work over subsequent years. We reviewed the tradeoffs annually during planning and used automation to keep operational overhead contained.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-lg bg-cyan-500 text-white flex items-center justify-center text-lg font-bold">
            +
          </span>
          <h2 className="text-xl font-semibold text-foreground">Reflection</h2>
        </div>

        <div className="p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30">
          <div className="prose prose-sm max-w-none dark:prose-invert text-foreground leading-relaxed">
            <p>
              A less-senior TPM would have defaulted to the proven vault architecture to avoid risk and pushback. That would have optimized for internal comfort, not customer value, and likely cost us the deal and long-term account growth.
            </p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Key Themes Demonstrated</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Killing Architectural Purity</div>
            <div className="text-sm text-muted-foreground">
              Deliberately rejecting the &quot;clean&quot; solution for business reality
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Problem Reframing</div>
            <div className="text-sm text-muted-foreground">
              Separating compliance requirements from implementation choices
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Risk Ownership</div>
            <div className="text-sm text-muted-foreground">
              Accepting and governing long-term operational complexity
            </div>
          </div>
          <div className="p-3 bg-background rounded-lg border border-border">
            <div className="font-medium text-foreground mb-1">Scale Economics</div>
            <div className="text-sm text-muted-foreground">
              Matching architecture to workload, not internal comfort
            </div>
          </div>
        </div>
      </section>

      {/* Use This Story For */}
      <section className="mb-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Use This Story For</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Tell me about a time you had to make a difficult technical tradeoff&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Describe a situation where you pushed back on the safe choice&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;How do you balance technical best practices with business constraints?&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>&quot;Tell me about a time you owned long-term risk for short-term gain&quot;</span>
          </li>
        </ul>
      </section>

      {/* Hardening Pack Divider */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="px-4 py-2 bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-semibold rounded-full">
          Hardening Pack
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30">
        <p className="text-muted-foreground">
          At principal bar, this story is <strong className="text-foreground">not</strong> about the payment architecture.
          It&apos;s about killing a technically &quot;clean&quot; solution that senior architects preferred, reframing the problem around business reality, and owning the long-term consequences instead of deferring them.
        </p>
      </div>

      {/* 30-Second Compressed Version */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold">1</span>
          30-Second Compressed Version
        </h2>
        <p className="text-muted-foreground mb-4">Memorize this for time-tight situations.</p>

        <div className="p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30">
          <blockquote className="text-foreground leading-relaxed space-y-3">
            <p>
              &quot;We were proposing a payment platform for ~3.5M payments/month, and the default design reused a full card vault built for a 65M-payment customer. It was clean and safe, but far too expensive at that scale.
            </p>
            <p>
              I killed the vault design, reframed the problem around PCI requirements instead of architectural purity, and pushed a lower-cost encrypted storage model with explicit growth limits. We won the bid, passed audits, and the account later scaled beyond initial volumes without blowing up cost or latency.&quot;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Hardened Answers */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">2</span>
          Hardened Follow-up Answers
        </h2>
        <p className="text-muted-foreground mb-6">Expect these questions. Use verbatim if needed.</p>

        <div className="space-y-6">
          {/* Answer A */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">A. &quot;Didn&apos;t this increase long-term risk?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Yes — and that was an explicit, documented tradeoff. We accepted higher long-term operational complexity to stay competitive at the current scale, but we bounded that risk with clear envelope limits, audit guarantees, and a revisit mechanism so it wouldn&apos;t become invisible or accidental.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;So you just deferred the problem?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;The higher risk would have been shipping an overbuilt solution that priced us out of the deal. That would have eliminated both near-term revenue and any chance to revisit the architecture later.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              <strong>Signal:</strong> Conscious risk ownership, not denial.
            </p>
          </div>

          {/* Answer B */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">B. &quot;Why not standardize on one architecture?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because standardization that ignores scale economics destroys competitiveness. We standardized on compliance guarantees and security outcomes, not on a single implementation. The architecture had to fit the workload envelope, not the other way around.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;Doesn&apos;t that create operational burden?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;Using a 65M-payment architecture for a 3.5M-payment workload optimizes for internal comfort, not customer value.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              <strong>Signal:</strong> Platform judgment over dogma.
            </p>
          </div>

          {/* Answer C */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">C. &quot;What would have triggered a move to a vault later?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Defined thresholds: sustained volume growth crossing the envelope, key-rotation and re-encryption costs exceeding acceptable run-rate, or audit overhead becoming non-linear. We reviewed those signals annually as part of planning.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;How did you avoid drift?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg">
              <p className="text-foreground italic text-sm">
                &quot;The trigger wasn&apos;t &apos;feels risky,&apos; it was when the cost and risk curves crossed — and that was intentional.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              <strong>Signal:</strong> Metrics-driven governance, not intuition.
            </p>
          </div>

          {/* Answer D */}
          <div className="p-5 bg-muted/30 rounded-xl border border-border">
            <h4 className="font-semibold text-foreground mb-3">D. &quot;Why is this Principal-level?&quot;</h4>
            <blockquote className="pl-4 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-3">
              <p className="text-foreground italic">
                &quot;Because the hard part wasn&apos;t the design — it was killing a technically &apos;clean&apos; solution that senior architects preferred, reframing the problem around business reality, and owning the long-term consequences instead of deferring them. That required judgment, not just execution.&quot;
              </p>
            </blockquote>
            <p className="text-sm text-muted-foreground mb-2">If they push: &quot;Couldn&apos;t anyone have made that call?&quot;</p>
            <blockquote className="pl-4 border-l-4 border-muted bg-muted/30 p-3 rounded-r-lg mb-3">
              <p className="text-foreground italic text-sm">
                &quot;A less-senior leader would have defaulted to the safest internal option and called it done. I optimized for the business outcome and put guardrails around the risk.&quot;
              </p>
            </blockquote>
            <div className="mt-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <p className="text-sm text-amber-600 dark:text-amber-400">
                <strong>This is the strongest answer. Memorize it.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Delivery Rule */}
        <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Quick rule for delivering these answers:</strong> Keep them calm and short. If they want details, they&apos;ll pull.
          </p>
        </div>
      </section>

      {/* Final Calibration Check */}
      <section className="mb-10 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30">
        <h3 className="text-lg font-semibold text-foreground mb-4">Final Calibration Check</h3>
        <p className="text-muted-foreground mb-4">If an interviewer walks away thinking:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;This person doesn&apos;t hide behind best practices&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They understand scale economics&quot;</span>
          </li>
          <li className="flex items-start gap-2 text-foreground">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>&quot;They can say no to the &apos;right&apos; answer for the right reason&quot;</span>
          </li>
        </ul>
        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-600 dark:text-green-400 font-semibold text-center">
            You passed.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/interview-prep/soc-audit-automation"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← SOC Audit Automation
        </Link>
        <Link
          href="/nebula/interview-prep"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Back to Interview Prep →
        </Link>
      </div>
    </InterviewPrepLayout>
  );
}
