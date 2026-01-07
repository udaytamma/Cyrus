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
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">3</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Technology Selection</h1>
        <p className="text-muted-foreground">
          For each constraint, what tech choices survive? Document trade-offs explicitly.
        </p>
      </div>

      {/* CREST Framework */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
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
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Letter
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Meaning
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    What You Demonstrate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-bold text-primary">C</td>
                  <td className="p-3 border border-border">Constraints</td>
                  <td className="p-3 border border-border">You start with requirements, not solutions</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-bold text-primary">R</td>
                  <td className="p-3 border border-border">Risks & Trade-offs</td>
                  <td className="p-3 border border-border">You understand nothing is free</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-bold text-primary">E</td>
                  <td className="p-3 border border-border">Evaluation</td>
                  <td className="p-3 border border-border">You compared alternatives systematically</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-bold text-primary">S</td>
                  <td className="p-3 border border-border">Selection</td>
                  <td className="p-3 border border-border">You made a defensible choice</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-bold text-primary">T</td>
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
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Decision Context: Key Stack Choices
        </h2>
        <div className="text-muted-foreground space-y-6">
          <p>For the Fraud Detection Platform, each component was evaluated against constraints:</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-primary mb-3">Event Streaming: Kafka</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong className="text-foreground">Constraint:</strong> Exactly-once semantics, ordered
                  processing per card, replay capability
                </li>
                <li>
                  <strong className="text-foreground">Why Kafka wins:</strong> Idempotent producers,
                  partition-by-key ordering, log retention for replay
                </li>
                <li>
                  <strong className="text-foreground">Why Kinesis fails:</strong> At-least-once only, 7-day max
                  retention
                </li>
                <li>
                  <strong className="text-foreground">Trade-off accepted:</strong> Operational complexity
                  (requires expertise)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-primary mb-3">Stream Processing: Flink</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong className="text-foreground">Constraint:</strong> &lt;200ms latency, sliding window
                  aggregations, stateful processing
                </li>
                <li>
                  <strong className="text-foreground">Why Flink wins:</strong> True event-by-event processing,
                  native sliding windows, checkpoint recovery
                </li>
                <li>
                  <strong className="text-foreground">Why Spark Streaming fails:</strong> Micro-batch latency
                  too high
                </li>
                <li>
                  <strong className="text-foreground">Trade-off accepted:</strong> JVM complexity, learning
                  curve
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-primary mb-3">Fast State Store: Redis Cluster</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong className="text-foreground">Constraint:</strong> Feature assembly under 50ms, atomic
                  counters, sliding window expiration
                </li>
                <li>
                  <strong className="text-foreground">Why Redis wins:</strong> &lt;5ms reads, ZSET for sliding
                  windows, HyperLogLog for distinct counts
                </li>
                <li>
                  <strong className="text-foreground">Why DynamoDB fails:</strong> 10-20ms latency blows the
                  budget
                </li>
                <li>
                  <strong className="text-foreground">Trade-off accepted:</strong> Memory cost (expensive at
                  scale)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-primary mb-3">Policy Engine: OPA + Custom Wrapper</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong className="text-foreground">Constraint:</strong> Business tunes thresholds without
                  deploys, audit trail, A/B testing
                </li>
                <li>
                  <strong className="text-foreground">Why OPA wins:</strong> Hot-reloadable Rego policies,
                  version-controlled, readable by non-engineers
                </li>
                <li>
                  <strong className="text-foreground">Why custom code fails:</strong> No hot-reload, no audit
                  trail
                </li>
                <li>
                  <strong className="text-foreground">Trade-off accepted:</strong> Rego learning curve, wrapper
                  needed for profit logic
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
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
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "Walk me through how you chose your streaming architecture":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
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
            className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            ← {nav.prev.title}
          </Link>
        ) : (
          <div />
        )}
        {nav.next && (
          <Link
            href={nav.next.path}
            className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            {nav.next.title} →
          </Link>
        )}
      </div>
    </ThinkingLayout>
  );
}
