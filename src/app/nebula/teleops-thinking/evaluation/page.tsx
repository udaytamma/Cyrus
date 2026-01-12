"use client";

/**
 * Section 6: Evaluation Strategy
 * Expanded with metrics details, scoring rationale, and interview responses
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsEvaluation() {
  const nav = getTeleOpsNavigation("evaluation");

  return (
    <TeleOpsThinkingLayout
      title="Evaluation Strategy - TeleOps"
      description="Deterministic evaluation for baseline vs LLM"
      currentSection="evaluation"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          6
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Evaluation Strategy</h1>
        <p className="text-muted-foreground">
          Quantify improvement with repeatable, defensible metrics.
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          Thinking Process
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The evaluation question was:{" "}
            <strong className="text-foreground">
              How do we prove LLM RCA is better than baseline with credible, repeatable evidence?
            </strong>
          </p>
          <p>
            The answer: <strong className="text-foreground">synthetic scenarios with known ground truth</strong>
            + deterministic scoring. Without ground truth, we cannot measure accuracy. Without determinism,
            results are not reproducible.
          </p>
        </div>
      </div>

      {/* Metrics Table */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Metrics: What Gets Measured and Why
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Metric</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Target</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Why This Target</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">How Measured</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">RCA accuracy</td>
                <td className="py-2 px-3">&gt;70%</td>
                <td className="py-2 px-3">7/10 correct is operationally useful. Better than human avg under time pressure.</td>
                <td className="py-2 px-3">String similarity of top hypothesis vs ground truth</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">LLM vs baseline delta</td>
                <td className="py-2 px-3">&gt;10%</td>
                <td className="py-2 px-3">LLM must justify its complexity. 10% improvement is meaningful.</td>
                <td className="py-2 px-3">Accuracy difference between LLM and baseline RCA</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">P50 latency</td>
                <td className="py-2 px-3">&lt;3s</td>
                <td className="py-2 px-3">Demo-friendly response time. Operators expect near-instant.</td>
                <td className="py-2 px-3">Median RCA generation time across scenarios</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">P95 latency</td>
                <td className="py-2 px-3">&lt;10s</td>
                <td className="py-2 px-3">Tail latency matters for UX. Beyond 10s feels broken.</td>
                <td className="py-2 px-3">95th percentile RCA generation time</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">JSON validity</td>
                <td className="py-2 px-3">&gt;95%</td>
                <td className="py-2 px-3">Invalid JSON triggers fallback. Should be rare exception.</td>
                <td className="py-2 px-3">% of LLM responses that parse correctly</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">Unsafe suggestion rate</td>
                <td className="py-2 px-3">0%</td>
                <td className="py-2 px-3">Safety is non-negotiable. Any hallucinated command is failure.</td>
                <td className="py-2 px-3">Manual review for risky/executable commands in output</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Deterministic Scenarios */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Why Deterministic Scenarios (Not Real Data)
        </h2>
        <div className="text-muted-foreground space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Approach</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Pros</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Real NOC data</td>
                  <td className="py-2 px-3">Maximum realism, actual edge cases</td>
                  <td className="py-2 px-3">PII concerns, no ground truth, not reproducible</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Public datasets</td>
                  <td className="py-2 px-3">Accessible, some ground truth</td>
                  <td className="py-2 px-3">Wrong domain (not telecom), outdated formats</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Synthetic generation (chosen)</td>
                  <td className="py-2 px-3">Known ground truth, reproducible, no PII</td>
                  <td className="py-2 px-3">May miss real-world complexity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Decision:</strong> Synthetic data with deterministic seed.
            The generator produces the same alerts every run (seed=42), enabling reproducible evaluation.
            Ground truth is generated alongside alerts - we know the exact root cause.
          </p>
        </div>
      </div>

      {/* Scoring Mechanism */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Scoring Mechanism: String Similarity
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            RCA accuracy is measured by comparing the top hypothesis to ground truth using
            Python&apos;s SequenceMatcher (similar to Levenshtein distance).
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <pre>{`from difflib import SequenceMatcher

def score_hypothesis(hypothesis: str, ground_truth: str) -> float:
    return SequenceMatcher(None, hypothesis.lower(), ground_truth.lower()).ratio()

# Example:
# Ground truth: "link congestion on core-router-1 causing packet loss"
# Hypothesis:   "link congestion on core-router-1"
# Score: 0.72 (partial match)`}</pre>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Score Range</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">0.8 - 1.0</td>
                  <td className="py-2 px-3">Excellent match. Minor wording differences.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">0.6 - 0.8</td>
                  <td className="py-2 px-3">Good match. Correct root cause, different phrasing.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">0.4 - 0.6</td>
                  <td className="py-2 px-3">Partial match. Related but imprecise.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">0.0 - 0.4</td>
                  <td className="py-2 px-3">Poor match. Wrong hypothesis.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Known Limitations */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Known Limitations: Why LLM May Score Lower
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            String similarity has known limitations that may under-credit LLM performance:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Limitation</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Example</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Mitigation (Phase 2)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Paraphrase penalty</td>
                  <td className="py-2 px-3">&quot;congested link&quot; vs &quot;link congestion&quot; score lower than identical strings</td>
                  <td className="py-2 px-3">Semantic similarity with embeddings</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Verbose hypotheses</td>
                  <td className="py-2 px-3">LLM adds context that dilutes string match</td>
                  <td className="py-2 px-3">Extract key terms before scoring</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Synonym blindness</td>
                  <td className="py-2 px-3">&quot;failure&quot; vs &quot;outage&quot; penalized despite same meaning</td>
                  <td className="py-2 px-3">WordNet or embedding-based matching</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Generic hypotheses</td>
                  <td className="py-2 px-3">LLM with thin RAG corpus produces generic output</td>
                  <td className="py-2 px-3">Scenario-specific runbooks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Baseline advantage:</strong> The baseline RCA uses pattern-matching
            against 11 scenario-specific rules (DNS, BGP, fiber cut, DDoS, etc.) that are tuned to match
            ground truth patterns. This is fair - baseline represents a competent rule-based system.
            LLM must beat it with generalization and nuance.
          </p>
        </div>
      </div>

      {/* Trade-Offs and Risks */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Trade-Offs and Risks
        </h2>
        <div className="text-muted-foreground space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Trade-Off</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Risk</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Mitigation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">String similarity scoring</td>
                  <td className="py-2 px-3">Under-credits semantically correct paraphrases</td>
                  <td className="py-2 px-3">Document limitation; add semantic scoring in Phase 2</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Synthetic ground truth</td>
                  <td className="py-2 px-3">Not validated by real operators</td>
                  <td className="py-2 px-3">Explicit non-goal; manual label sets planned</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Single-run evaluation</td>
                  <td className="py-2 px-3">LLM output varies; single run may not represent average</td>
                  <td className="py-2 px-3">Multiple runs with aggregated stats</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Binary pass/fail for safety</td>
                  <td className="py-2 px-3">Missing nuance in &quot;risky&quot; classification</td>
                  <td className="py-2 px-3">Manual review; rubric for edge cases</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Interview Application */}
      <div className="mb-8 p-6 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-xl border border-indigo-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked &quot;How do you evaluate AI system quality?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;AI evaluation needs ground truth, reproducibility, and meaningful comparison.
                For TeleOps, I addressed all three.
              </p>
              <p>
                Ground truth comes from synthetic data generation. Each scenario - BGP flap, fiber cut,
                DNS outage - is generated with a known root cause. The generator produces alerts and
                simultaneously records what the correct RCA should be. This is not guessing - the
                ground truth is deterministic.
              </p>
              <p>
                Reproducibility comes from seeded random generation. The same seed produces the same
                alerts every time. I can run evaluation today and get the same results tomorrow.
                This enables A/B testing of prompt changes or model upgrades.
              </p>
              <p>
                Meaningful comparison comes from the baseline RCA. If I only measured LLM accuracy,
                I would not know if 70% is good. By comparing to rule-based baseline, I can prove
                LLM adds value. The target is 10% improvement - LLM must justify its complexity.
              </p>
              <p>
                I also track latency (p50, p95), JSON validity rate, and safety metrics. An accurate
                RCA that takes 30 seconds is useless in a NOC. A fast RCA that suggests dangerous
                commands is worse than useless. The evaluation covers quality, speed, and safety.&quot;
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
              Estimated time: 90-120 seconds
            </div>
          </div>

          <p className="mt-6">When asked &quot;What are the limitations of your evaluation approach?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              1-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;The main limitation is string similarity scoring. When the LLM outputs
                &apos;congested link on router&apos; and ground truth is &apos;link congestion on router&apos;,
                the score is lower than it should be. They mean the same thing but the strings differ.
              </p>
              <p>
                This under-credits LLM performance compared to baseline, which is hardcoded to match
                ground truth phrasing. Phase 2 would add semantic similarity using embeddings - compare
                meaning, not characters.
              </p>
              <p>
                The second limitation is synthetic ground truth. Real operators might disagree with
                my labels. I documented this as a known limitation and planned manual label sets where
                domain experts validate a subset of scenarios.
              </p>
              <p>
                These limitations are acceptable for MVP because I documented them. The evaluation
                proves the concept works - LLM can generate useful RCAs. Production would need
                more sophisticated evaluation, but MVP needs to ship.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">&larr; {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">{nav.next.title} &rarr;</span>
          </Link>
        )}
      </div>
    </TeleOpsThinkingLayout>
  );
}
