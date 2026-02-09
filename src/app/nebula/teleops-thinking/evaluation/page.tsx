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
          Scoring Mechanism: Semantic Cosine Similarity
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            RCA accuracy is measured using <strong className="text-foreground">sentence embeddings</strong> (all-MiniLM-L6-v2) -
            the same model used by the RAG pipeline. This replaced the original string-matching approach
            which penalized correct hypotheses that used different phrasing.
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <pre>{`from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

def similarity(hypothesis: str, ground_truth: str) -> float:
    embeddings = model.encode([hypothesis, ground_truth])
    return float(np.dot(embeddings[0], embeddings[1]) /
        (np.linalg.norm(embeddings[0]) * np.linalg.norm(embeddings[1])))

# "DNS resolution failure" vs "DNS outage" → 0.671 (semantic match)
# "BGP route flap detected" vs "BGP flap"  → 0.828 (strong match)
# "cooking recipe"         vs "DNS outage" → 0.017 (no match)`}</pre>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Why this matters:</strong> With string similarity,
            LLM scored ~44% because it was penalized for being more descriptive than ground truth.
            Semantic scoring correctly recognizes that different phrasing of the same root cause
            should score high.
          </p>
        </div>
      </div>

      {/* Decision Quality Metrics */}
      <div className="mb-8 p-6 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-xl border border-emerald-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Decision Quality Metrics
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Beyond raw accuracy, the evaluation now computes <strong className="text-foreground">decision quality metrics</strong> that
            answer the question hiring managers care about: <em>Is this AI system safe to deploy?</em>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Metric</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Definition</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Precision</td>
                  <td className="py-2 px-3">Correct identifications / total attempted</td>
                  <td className="py-2 px-3">When the system gives an answer, how often is it right?</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Recall</td>
                  <td className="py-2 px-3">Correct identifications / total scenarios</td>
                  <td className="py-2 px-3">What fraction of incidents does the system correctly diagnose?</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Wrong-but-Confident Rate</td>
                  <td className="py-2 px-3">High confidence (&gt;0.7) + wrong answer (&lt;0.5 similarity)</td>
                  <td className="py-2 px-3">The most dangerous failure mode - system is wrong but thinks it is right</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Confidence Calibration</td>
                  <td className="py-2 px-3">Avg confidence for correct vs incorrect predictions</td>
                  <td className="py-2 px-3">Does the model &quot;know what it doesn&apos;t know&quot;? Gap should be positive.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            The <strong className="text-foreground">wrong-but-confident rate</strong> is the key AI risk metric.
            A system that says &quot;I&apos;m 90% sure this is a BGP flap&quot; when it is actually a fiber cut
            is more dangerous than one that says &quot;I&apos;m 40% sure&quot; - because operators may trust the
            high-confidence answer without verification.
          </p>
        </div>
      </div>

      {/* Resolved and Remaining Limitations */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Resolved and Remaining Limitations
        </h2>
        <div className="text-muted-foreground space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Limitation</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Status</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Resolution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Paraphrase penalty</td>
                  <td className="py-2 px-3 text-green-500 font-semibold">Resolved</td>
                  <td className="py-2 px-3">Semantic cosine similarity with sentence embeddings</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Synonym blindness</td>
                  <td className="py-2 px-3 text-green-500 font-semibold">Resolved</td>
                  <td className="py-2 px-3">Embeddings capture semantic equivalence</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">No decision quality metrics</td>
                  <td className="py-2 px-3 text-green-500 font-semibold">Resolved</td>
                  <td className="py-2 px-3">Added precision, recall, wrong-but-confident rate, calibration</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Verbose hypotheses</td>
                  <td className="py-2 px-3 text-amber-500 font-semibold">Mitigated</td>
                  <td className="py-2 px-3">Embeddings handle verbosity better than string matching</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Synthetic ground truth</td>
                  <td className="py-2 px-3 text-amber-500 font-semibold">Accepted</td>
                  <td className="py-2 px-3">Documented limitation; manual label sets available for validation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Baseline advantage:</strong> The baseline RCA uses pattern-matching
            against 11 scenario-specific rules tuned to match ground truth patterns. This is fair -
            baseline represents a competent rule-based system. LLM must beat it with generalization and nuance.
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
                  <td className="py-2 px-3 text-green-500">Resolved: replaced with semantic cosine similarity</td>
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
