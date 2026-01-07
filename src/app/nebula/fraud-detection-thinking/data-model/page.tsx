"use client";

/**
 * Section 4: Data Model
 */

import Link from "next/link";
import { ThinkingLayout, getNavigation } from "@/components/ThinkingLayout";

export default function DataModel() {
  const nav = getNavigation("data-model");

  return (
    <ThinkingLayout
      title="Data Model - Thinking Process"
      description="Derive entities from money flow, define events and features"
      currentSection="data-model"
    >
      <Link
        href="/nebula/fraud-detection-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">4</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Data Model</h1>
        <p className="text-muted-foreground">
          What entities exist? What events flow through? What features are computed?
        </p>
      </div>

      {/* Thinking Process */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Thinking Process
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The data model is not invented - it is{" "}
            <strong className="text-foreground">derived from the problem domain</strong>. Here is how to arrive
            at it systematically.
          </p>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">Step 1: Start with the Money Flow</h3>
          <p>
            Fraud systems protect money. Trace where money moves. Every noun in that flow is a candidate
            entity. Every arrow is a candidate event.
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre overflow-x-auto my-4">
            {`Subscriber → Payment Method → Transaction → Telco Service → Activation
              ↓                 ↓                              ↓
           Disputes ←←←←← Chargebacks                    SIM/Device/Topup`}
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 2: Ask "What Can Be Fraudulent?"
          </h3>
          <p>
            For each entity, ask: <strong className="text-foreground">"Can a fraudster exploit this?"</strong>{" "}
            If yes, you need to track it.
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Entity
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Fraud Vector
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Why It Is an Entity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">Card</td>
                  <td className="p-3 border border-border">Stolen, enumerated, tested</td>
                  <td className="p-3 border border-border">Primary payment instrument</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">Device</td>
                  <td className="p-3 border border-border">Shared across fraud rings, emulated, spoofed</td>
                  <td className="p-3 border border-border">Links seemingly unrelated transactions</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">IP</td>
                  <td className="p-3 border border-border">Proxied, VPN, datacenter, geo-mismatch</td>
                  <td className="p-3 border border-border">Network-level risk signal</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">User/Account</td>
                  <td className="p-3 border border-border">Fake accounts, ATO, friendly fraud history</td>
                  <td className="p-3 border border-border">Behavioral history lives here</td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">Phone/IMEI</td>
                  <td className="p-3 border border-border">SIM farm operations, device resale</td>
                  <td className="p-3 border border-border">Telco-specific fraud ring detection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Step 3: Ask "What Do I Need to Know at Decision Time?"
          </h3>
          <p>
            For each entity, ask:{" "}
            <strong className="text-foreground">"What historical context helps me decide?"</strong> This gives
            you your feature list.
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Entity
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    What History Matters
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Example Features
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">Card</td>
                  <td className="p-3 border border-border">Velocity, past chargebacks, success rate</td>
                  <td className="p-3 border border-border">
                    <code className="text-xs bg-primary/10 px-1 rounded">card_attempts_10m</code>,{" "}
                    <code className="text-xs bg-primary/10 px-1 rounded">card_chargeback_rate_90d</code>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">Device</td>
                  <td className="p-3 border border-border">How many cards used, how many users, known bad?</td>
                  <td className="p-3 border border-border">
                    <code className="text-xs bg-primary/10 px-1 rounded">device_distinct_cards_24h</code>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">IP</td>
                  <td className="p-3 border border-border">Velocity, geo, proxy/VPN, datacenter?</td>
                  <td className="p-3 border border-border">
                    <code className="text-xs bg-primary/10 px-1 rounded">ip_distinct_cards_1h</code>,{" "}
                    <code className="text-xs bg-primary/10 px-1 rounded">ip_is_datacenter</code>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border font-semibold">User</td>
                  <td className="p-3 border border-border">Account age, dispute history, refund rate</td>
                  <td className="p-3 border border-border">
                    <code className="text-xs bg-primary/10 px-1 rounded">user_account_age_days</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Feature Computation */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Feature Computation Strategy
        </h2>
        <div className="text-muted-foreground space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Category
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Computation
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Storage
                  </th>
                  <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Velocity (real-time)</td>
                  <td className="p-3 border border-border">Sliding window counters</td>
                  <td className="p-3 border border-border">Redis ZSET</td>
                  <td className="p-3 border border-border">
                    <code className="text-xs bg-primary/10 px-1 rounded">card_attempts_10m</code>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Aggregates (near real-time)</td>
                  <td className="p-3 border border-border">Incremental updates</td>
                  <td className="p-3 border border-border">Redis Hash</td>
                  <td className="p-3 border border-border">
                    <code className="text-xs bg-primary/10 px-1 rounded">user_chargeback_count</code>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-3 border border-border">Historical (batch)</td>
                  <td className="p-3 border border-border">Daily/weekly rollups</td>
                  <td className="p-3 border border-border">Feature Store</td>
                  <td className="p-3 border border-border">
                    <code className="text-xs bg-primary/10 px-1 rounded">user_chargeback_rate_90d</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            <strong className="text-foreground">Velocity features</strong> use sliding windows. For{" "}
            <code className="text-xs bg-primary/10 px-1 rounded">card_attempts_10m</code>, each event adds the
            current timestamp to a sorted set. On query, count entries in the last 10 minutes.
          </p>
          <p>
            <strong className="text-foreground">Aggregate features</strong> use atomic increments. For{" "}
            <code className="text-xs bg-primary/10 px-1 rounded">user_chargeback_count</code>, on each
            chargeback event, increment the counter. On query, read the value directly.
          </p>
          <p>
            <strong className="text-foreground">Historical features</strong> use batch computation. A daily
            batch job calculates chargebacks divided by transactions over 90 days, stores in the Feature Store,
            and syncs to Redis for online serving.
          </p>
        </div>
      </div>

      {/* Derivation Path */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Derivation Path
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap overflow-x-auto">
          {`1. MONEY FLOW
   Where does money move?
   → Entities and events emerge
        ↓
2. FRAUD VECTORS
   What can be exploited?
   → Confirms entity list
        ↓
3. DECISION NEEDS
   What context helps decide?
   → Features emerge
        ↓
4. STATE TRANSITIONS
   What events change state?
   → Event types emerge
        ↓
5. CANONICAL SCHEMA
   What is the contract?
   → PaymentEvent schema
        ↓
6. FEATURE COMPUTATION
   How are features maintained?
   → Velocity, aggregates, batch`}
        </div>
      </div>

      {/* Interview Response */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "How did you design the data model?":</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                "I derive data models from the problem domain rather than inventing them. The process is
                systematic and transfers across domains.
              </p>
              <p>
                I started by tracing the money flow in telco - subscriber to card to transaction to service
                activation. Every noun became a candidate entity, every transition became an event type.
              </p>
              <p>
                Then I asked: what can a fraudster exploit? That confirmed card, device, IP, user, and service
                as key entities. For telco specifically, we added phone number and IMEI as first-class
                entities because SIM farm operations use one card to activate many SIMs.
              </p>
              <p>
                For each entity, I asked: what historical context helps at decision time? That gave me the
                feature list. Features fall into three computation tiers: velocity features use sliding
                windows in Redis with sub-millisecond latency, aggregates use incremental updates, and
                historical features use daily batch rollups."
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
