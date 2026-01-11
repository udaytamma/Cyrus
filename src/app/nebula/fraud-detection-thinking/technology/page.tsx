"use client";

/**
 * Section 3: Technology Selection
 */

import Link from "next/link";
import { ThinkingLayout, getNavigation } from "@/components/ThinkingLayout";

export default function TechnologySelection() {
  const nav = getNavigation("technology");

  return (
    <ThinkingLayout
      title="Technology Selection - Thinking Process"
      description="Systematic technology evaluation using CREST framework"
      currentSection="technology"
    >
      <Link
        href="/nebula/fraud-detection-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl border border-yellow-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          3
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Technology Selection</h1>
        <p className="text-muted-foreground">
          For each constraint, what tech choices survive? Document trade-offs explicitly.
        </p>
      </div>

      {/* CREST Framework */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          Thinking Process: CREST Framework
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Use the <strong className="text-foreground">CREST</strong> framework to structure technology
            decisions systematically:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                    Letter
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                    Meaning
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                    What You Demonstrate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border font-bold text-yellow-600 dark:text-yellow-400">C</td>
                  <td className="p-3 border border-border">Constraints</td>
                  <td className="p-3 border border-border">You start with requirements, not solutions</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border font-bold text-yellow-600 dark:text-yellow-400">R</td>
                  <td className="p-3 border border-border">Risks & Trade-offs</td>
                  <td className="p-3 border border-border">You understand nothing is free</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border font-bold text-yellow-600 dark:text-yellow-400">E</td>
                  <td className="p-3 border border-border">Evaluation</td>
                  <td className="p-3 border border-border">You compared alternatives systematically</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border font-bold text-yellow-600 dark:text-yellow-400">S</td>
                  <td className="p-3 border border-border">Selection</td>
                  <td className="p-3 border border-border">You made a defensible choice</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 border border-border font-bold text-yellow-600 dark:text-yellow-400">T</td>
                  <td className="p-3 border border-border">Testing/Validation</td>
                  <td className="p-3 border border-border">You know how to verify the choice works</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Apply this to every major technology decision. The output is a decision matrix that shows{" "}
            <strong className="text-foreground">why alternatives were rejected</strong>, not just why the
            winner was selected.
          </p>
        </div>
      </div>

      {/* Key Stack Choices */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </span>
          Decision Context: Key Stack Choices
        </h2>
        <div className="text-muted-foreground space-y-6">
          <p>For the Fraud Detection Platform, each component was evaluated against constraints:</p>

          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/30">
              <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs font-bold">1</span>
                Event Streaming: Kafka
              </h3>
              <ul className="space-y-2 ml-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span><strong className="text-foreground">Constraint:</strong> Exactly-once semantics, ordered processing per card, replay capability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span><strong className="text-foreground">Why Kafka wins:</strong> Idempotent producers, partition-by-key ordering, log retention for replay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">-</span>
                  <span><strong className="text-foreground">Why Kinesis fails:</strong> At-least-once only, 7-day max retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">~</span>
                  <span><strong className="text-foreground">Trade-off accepted:</strong> Operational complexity (requires expertise)</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/30">
              <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-xs font-bold">2</span>
                Stream Processing: Flink
              </h3>
              <ul className="space-y-2 ml-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span><strong className="text-foreground">Constraint:</strong> &lt;200ms latency, sliding window aggregations, stateful processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span><strong className="text-foreground">Why Flink wins:</strong> True event-by-event processing, native sliding windows, checkpoint recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">-</span>
                  <span><strong className="text-foreground">Why Spark Streaming fails:</strong> Micro-batch latency too high</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">~</span>
                  <span><strong className="text-foreground">Trade-off accepted:</strong> JVM complexity, learning curve</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg border border-purple-500/30">
              <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 text-xs font-bold">3</span>
                Fast State Store: Redis Cluster
              </h3>
              <ul className="space-y-2 ml-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span><strong className="text-foreground">Constraint:</strong> Feature assembly under 50ms, atomic counters, sliding window expiration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span><strong className="text-foreground">Why Redis wins:</strong> &lt;5ms reads, ZSET for sliding windows, HyperLogLog for distinct counts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">-</span>
                  <span><strong className="text-foreground">Why DynamoDB fails:</strong> 10-20ms latency blows the budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">~</span>
                  <span><strong className="text-foreground">Trade-off accepted:</strong> Memory cost (expensive at scale)</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-lg border border-indigo-500/30">
              <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 text-xs font-bold">4</span>
                Policy Engine: OPA + Custom Wrapper
              </h3>
              <ul className="space-y-2 ml-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span><strong className="text-foreground">Constraint:</strong> Business tunes thresholds without deploys, audit trail, A/B testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span><strong className="text-foreground">Why OPA wins:</strong> Hot-reloadable Rego policies, version-controlled, readable by non-engineers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">-</span>
                  <span><strong className="text-foreground">Why custom code fails:</strong> No hot-reload, no audit trail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">~</span>
                  <span><strong className="text-foreground">Trade-off accepted:</strong> Rego learning curve, wrapper needed for profit logic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Derivation Path
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap overflow-x-auto">
          {`1. CONSTRAINT FILTER
   Does it meet latency requirements?
   Does it provide required guarantees (exactly-once, durability)?
   Does it satisfy compliance needs?
        ↓
2. EVALUATION MATRIX
   For each option, score against constraints
   Identify hard failures (eliminates option)
   Identify soft trade-offs (acceptable with mitigation)
        ↓
3. OPERATIONAL FILTER
   Can our team operate it?
   Is there ecosystem support (docs, community, tools)?
   What is the failure mode?
        ↓
4. COST FILTER
   What is the total cost at 10x scale?
   What is the migration cost if we are wrong?
        ↓
5. LOCK-IN FILTER
   Can we switch if needed?
   Are we betting on a dying technology?
        ↓
6. DOCUMENT DECISION
   Selected technology and why
   Rejected alternatives and why
   Trade-offs accepted and mitigations`}
        </div>
      </div>

      {/* Interview Response */}
      <div className="mb-8 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "Walk me through how you chose your streaming architecture":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                "Before evaluating any technology, I anchored on four non-negotiable constraints: less than
                200ms end-to-end latency, exactly-once business effects, ordered processing per card for
                velocity features, and historical replay capability for testing.
              </p>
              <p>
                I evaluated four options: Kafka plus Flink, Kinesis plus Lambda, Pub/Sub plus Dataflow, and
                Kafka Streams. Kinesis failed on exactly-once - that is a hard constraint, so it is eliminated
                regardless of other benefits. Pub/Sub requires significant configuration for ordering and
                still does not guarantee exactly-once.
              </p>
              <p>
                I selected Kafka for streaming and Flink for processing. Kafka gives exactly-once with
                idempotent producers, partitioning by card token for ordering, and log retention for replay.
                Flink gives native sliding windows and checkpoint recovery for stateful processing.
              </p>
              <p>
                The trade-off I accepted is operational complexity - both require expertise. I mitigated this
                with managed offerings where possible and invested in runbooks and monitoring from day one."
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
              Estimated time: 90-120 seconds
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
            <span className="group-hover:text-primary transition-colors">← {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">{nav.next.title} →</span>
          </Link>
        )}
      </div>
    </ThinkingLayout>
  );
}
