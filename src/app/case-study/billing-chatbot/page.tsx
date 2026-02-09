import Link from "next/link";

export const metadata = {
  title: "Case Study: Billing Chatbot Hallucination | Uday Tamma",
  description:
    "How I saved a GenAI program from shutdown after a visible hallucination failure - retrieval-gated responses, confidence thresholds, and stakeholder reframing.",
};

export default function BillingChatbotCaseStudy() {
  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12 sm:mb-16">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
            Case Study
          </span>
          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            GenAI
          </span>
          <span className="text-xs text-muted-foreground">Principal TPM</span>
        </div>
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          When the Billing Chatbot Hallucinated Customer Data
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          A customer-facing AI fabricated a promotion explanation. The CX VP wanted full shutdown. Legal flagged liability. I had to choose between killing a program that was deflecting 30% of call volume or fighting to keep it alive knowing a second failure would end it permanently.
        </p>
      </header>

      {/* Key Metrics Banner */}
      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:mb-16">
        <div className="rounded-2xl border border-border bg-card p-5 text-center">
          <div className="text-2xl font-bold text-primary sm:text-3xl">30%</div>
          <div className="mt-1 text-sm text-muted-foreground">Call deflection at stake</div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 text-center">
          <div className="text-2xl font-bold text-primary sm:text-3xl">1 week</div>
          <div className="mt-1 text-sm text-muted-foreground">Time to implement fix</div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 text-center">
          <div className="text-2xl font-bold text-primary sm:text-3xl">0</div>
          <div className="mt-1 text-sm text-muted-foreground">Hallucinations after fix</div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 text-center">
          <div className="text-2xl font-bold text-primary sm:text-3xl">6 mo</div>
          <div className="mt-1 text-sm text-muted-foreground">Clean operation window</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl space-y-12 sm:space-y-16">
        {/* Situation */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">1</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">The Situation</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Three weeks after launching a customer-facing Billing Chatbot, an incident occurred: the chatbot hallucinated a plausible but entirely fabricated promotion explanation to a customer asking about a billing discrepancy.
            </p>
            <p>
              The customer escalated. The CX VP flagged it as &quot;AI giving customers false information.&quot; Legal raised liability concerns: if fabricated explanations led customers to make financial decisions based on false data, the company could face regulatory action.
            </p>
            <p>
              Pressure mounted to shut down the chatbot entirely. The broader GenAI credibility within the org was on the line &mdash; this was one of the first customer-facing AI deployments, and a visible failure threatened to kill appetite for future AI initiatives.
            </p>
          </div>
        </section>

        {/* What Broke */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
              <span className="text-lg font-bold text-red-600 dark:text-red-400">2</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">What Broke</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Root cause diagnosis revealed a fundamental architecture flaw: the chatbot was generating responses from pattern-matching on training data, not retrieving actual billing records. When a customer asked about a specific promotion, the LLM pattern-matched against similar billing scenarios from training and fabricated a plausible-sounding explanation.
            </p>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">Root Cause</h3>
              <p className="text-sm text-muted-foreground">
                The chatbot generated from language patterns, not from retrieved billing data. There was no retrieval gate &mdash; the LLM would answer any billing question whether or not it had access to the actual customer record.
              </p>
            </div>
          </div>
        </section>

        {/* What Everyone Disagreed On */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
              <span className="text-lg font-bold text-amber-600 dark:text-amber-400">3</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">What Everyone Disagreed On</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              The stakeholder landscape was fractured:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="mb-2 font-semibold text-red-600 dark:text-red-400">Shut It Down</h3>
                <p className="text-sm text-muted-foreground">
                  CX VP and Legal. Eliminate all risk. &quot;We can&apos;t have AI lying to customers.&quot; Better to lose the capability than face regulatory exposure.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <h3 className="mb-2 font-semibold text-emerald-600 dark:text-emerald-400">Keep It Running</h3>
                <p className="text-sm text-muted-foreground">
                  Operations team. The chatbot was deflecting 30% of billing calls. Shutting down meant immediately re-hiring seasonal staff and losing the efficiency gains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Call I Made */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <span className="text-lg font-bold text-primary">4</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">The Call I Made</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I decided to fight for guardrails over shutdown. The failure was diagnosable and boundable &mdash; this wasn&apos;t a systemic reliability issue, it was a missing retrieval gate.
            </p>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3">
              <h3 className="font-semibold text-foreground">Three-part fix implemented in one week:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">1</span>
                  <span><strong className="text-foreground">Retrieval gate:</strong> Only generate a response if the actual billing record was retrieved. If not, escalate to human agent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">2</span>
                  <span><strong className="text-foreground">Confidence threshold:</strong> 90% confidence required. Below that, route to human review queue rather than generate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">3</span>
                  <span><strong className="text-foreground">Stakeholder reframe:</strong> Presented the tradeoff explicitly &mdash; shutdown eliminates hallucination risk but also kills 30% call deflection. The question isn&apos;t &quot;is AI safe?&quot; but &quot;can we make it safe enough?&quot;</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Risk I Accepted */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
              <span className="text-lg font-bold text-purple-600 dark:text-purple-400">5</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">The Risk I Accepted</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              The guardrail approach meant accepting that a second hallucination incident &mdash; if it happened &mdash; would kill not just this program, but the organization&apos;s appetite for GenAI for the next 12-18 months. I was betting my professional credibility that the root cause was correctly diagnosed and the fix was sufficient.
            </p>
            <p>
              I also accepted that call deflection would drop from 30% to ~25% because the confidence gating would route more edge cases to humans. That was the price of safety.
            </p>
          </div>
        </section>

        {/* The Outcome */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">6</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">The Outcome</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              CX VP approved the guardrailed approach. The fix was implemented and deployed within one week. The chatbot resumed full operation.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-2xl font-bold text-primary">Zero</div>
                <div className="text-sm text-muted-foreground">Hallucination incidents in the following 6 months</div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-2xl font-bold text-primary">25%</div>
                <div className="text-sm text-muted-foreground">Stable call deflection rate (down from 30%, by design)</div>
              </div>
            </div>
            <p>
              The incident became a case study in handling GenAI failures constructively. The CX VP and Legal, who initially pushed for shutdown, became supporters of the program. More importantly, the organization&apos;s confidence in deploying GenAI to other use cases was preserved rather than destroyed.
            </p>
          </div>
        </section>

        {/* Key Judgment Calls */}
        <section className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-foreground">Key Judgment Calls</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 font-semibold text-foreground">&quot;Why not just shut it down to be safe?&quot;</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Because the failure was diagnosable and boundable. Shutting down would have reinforced the narrative that GenAI is unreliable. By fixing it, we demonstrated that failures can be addressed &mdash; which built confidence for future initiatives rather than undermining them.
              </p>
            </div>
            <hr className="border-border" />
            <div>
              <h3 className="mb-1 font-semibold text-foreground">&quot;What if the fix didn&apos;t work?&quot;</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Then I was wrong about the root cause, and the correct call would have been shutdown. I owned that risk explicitly with stakeholders. The difference between a bad call and a good one isn&apos;t whether it works &mdash; it&apos;s whether the analysis was sound and the risk was communicated.
              </p>
            </div>
            <hr className="border-border" />
            <div>
              <h3 className="mb-1 font-semibold text-foreground">&quot;Why accept 25% deflection instead of 30%?&quot;</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Because the 30% included responses the model wasn&apos;t confident about. Keeping those in would have been optimizing for efficiency at the cost of safety. The 5% drop was the explicit price of the confidence gate, and it was the right trade.
              </p>
            </div>
          </div>
        </section>

        {/* Back to home */}
        <div className="pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-background px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
