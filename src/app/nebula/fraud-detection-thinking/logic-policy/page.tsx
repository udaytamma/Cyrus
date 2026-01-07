"use client";

/**
 * Section 5: Logic & Policy
 */

import Link from "next/link";
import { ThinkingLayout, getNavigation } from "@/components/ThinkingLayout";

export default function LogicPolicy() {
  const nav = getNavigation("logic-policy");

  return (
    <ThinkingLayout
      title="Logic & Policy - Thinking Process"
      description="How ML scores become business decisions"
      currentSection="logic-policy"
    >
      <Link
        href="/nebula/fraud-detection-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">5</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Logic & Policy</h1>
        <p className="text-muted-foreground">
          What rules apply? Who controls them? How do ML scores become business decisions?
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Thinking Process
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The core insight:{" "}
            <strong className="text-foreground">ML does not decide, ML informs. Policy decides.</strong> This
            separation is non-negotiable for production fraud systems.
          </p>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 1: Enumerate the Decision Space
          </h3>
          <p>
            Start by asking: <strong className="text-foreground">"What decisions can the system make?"</strong>{" "}
            Each decision is a business trade-off, not a technical choice.
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Decision
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Business Meaning
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Trade-off
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">ALLOW</td>
                  <td className="p-3 border border-border">Proceed with transaction</td>
                  <td className="p-3 border border-border">Revenue captured, fraud risk accepted</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">FRICTION</td>
                  <td className="p-3 border border-border">Request additional verification</td>
                  <td className="p-3 border border-border">Some cart abandonment, reduced fraud</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">REVIEW</td>
                  <td className="p-3 border border-border">Hold for manual review</td>
                  <td className="p-3 border border-border">Delay, human cost, higher accuracy</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">BLOCK</td>
                  <td className="p-3 border border-border">Decline transaction</td>
                  <td className="p-3 border border-border">Zero fraud risk, lost revenue if legitimate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 2: Separate Scoring from Deciding
          </h3>
          <p>
            ML models should be <strong className="text-foreground">stateless scoring functions</strong>{" "}
            (features in, scores out). The policy engine should be{" "}
            <strong className="text-foreground">configurable business logic</strong>.
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs text-muted-foreground whitespace-pre overflow-x-auto my-4">
            {`┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   ML MODELS     │────▶│  POLICY ENGINE  │────▶│    DECISION     │
│                 │     │                 │     │                 │
│ - Scores        │     │ - Thresholds    │     │ - ALLOW         │
│ - Probabilities │     │ - Rules         │     │ - FRICTION      │
│ - Signals       │     │ - Overrides     │     │ - REVIEW        │
│                 │     │ - Experiments   │     │ - BLOCK         │
└─────────────────┘     └─────────────────┘     └─────────────────┘
     Stateless              Configurable            Auditable
     Engineers own          Business owns           Logged always`}
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 3: Design the Rule Hierarchy
          </h3>
          <p>
            Higher priority rules should short-circuit - once a blocklist match fires, do not bother checking
            ML scores.
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <strong className="text-foreground">Hard Overrides</strong> - Blocklists and allowlists.
              Immediate decision, no further evaluation.
            </li>
            <li>
              <strong className="text-foreground">Telco Event-Based Rules</strong> - SIM swap triggers REVIEW,
              international_enable requires 3DS.
            </li>
            <li>
              <strong className="text-foreground">Velocity Circuit Breakers</strong> - Card testing detection,
              SIM farm detection (emulator + velocity).
            </li>
            <li>
              <strong className="text-foreground">ML Score Thresholds</strong> - Criminal fraud score, friendly
              fraud score.
            </li>
            <li>
              <strong className="text-foreground">Contextual Rules</strong> - Combinations like "high value AND
              new subscriber".
            </li>
            <li>
              <strong className="text-foreground">Default Decision</strong> - ALLOW. Optimizing for revenue.
            </li>
          </ol>
        </div>
      </div>

      {/* Ownership Model */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Ownership Model
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Ask: <strong className="text-foreground">"Who controls what, and how do they change it?"</strong>{" "}
            Different controls require different approval levels.
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Control
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Owner
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Change Mechanism
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Speed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Blocklist entries</td>
                  <td className="p-3 border border-border">Fraud Ops</td>
                  <td className="p-3 border border-border">UI/API (immediate)</td>
                  <td className="p-3 border border-border">Seconds</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Velocity thresholds</td>
                  <td className="p-3 border border-border">Fraud Ops</td>
                  <td className="p-3 border border-border">Config file (peer review)</td>
                  <td className="p-3 border border-border">Minutes</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">ML score thresholds</td>
                  <td className="p-3 border border-border">Fraud Strategy</td>
                  <td className="p-3 border border-border">Config + simulation</td>
                  <td className="p-3 border border-border">Hours</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">ML models</td>
                  <td className="p-3 border border-border">Data Science</td>
                  <td className="p-3 border border-border">Model registry (validation)</td>
                  <td className="p-3 border border-border">Days to weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The key insight:{" "}
            <strong className="text-foreground">attack response speed dictates ownership</strong>. Blocklists
            must be immediate. Model changes can be slow.
          </p>
        </div>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Derivation Path
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap overflow-x-auto">
          {`1. DECISION SPACE
   Enumerate possible decisions: ALLOW, FRICTION, REVIEW, BLOCK
   Each is a business trade-off
        ↓
2. SEPARATION OF CONCERNS
   ML models: stateless scoring
   Policy engine: business-configurable logic
        ↓
3. RULE HIERARCHY
   Design priority order for rule evaluation
   Higher priority rules short-circuit
        ↓
4. THRESHOLD DESIGN
   Better: profit-based expected value comparison
        ↓
5. OWNERSHIP MODEL
   Define who controls what
   Define change mechanisms and approvals
        ↓
6. AUDIT TRAIL
   Every decision logged with full context`}
        </div>
      </div>

      {/* Interview Response */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "How do ML scores become business decisions?":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                "I designed a strict separation between ML scoring and policy decisions. ML models output
                probability scores - they are stateless: features in, scores out. The policy engine consumes
                those scores along with velocity signals and transaction context.
              </p>
              <p>
                Rules evaluate in priority order: blocklists first, then telco-specific event rules, then
                velocity circuit breakers, then ML thresholds. Higher priority rules short-circuit.
              </p>
              <p>
                Critically, the policy engine is configurable without code deployment. Fraud ops can adjust
                thresholds through YAML configuration with hot-reload. This lets the business react to attacks
                in minutes, not days.
              </p>
              <p>
                Everything is auditable. Every decision records what rules triggered, what scores were used,
                and what policy version was active."
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
