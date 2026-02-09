"use client";

/**
 * Section 4: Data Model
 * Expanded with schema details, field rationale, and interview responses
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsDataModel() {
  const nav = getTeleOpsNavigation("data-model");

  return (
    <TeleOpsThinkingLayout
      title="Data Model - TeleOps"
      description="Entities that preserve traceability and evaluation"
      currentSection="data-model"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          4
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Data Model</h1>
        <p className="text-muted-foreground">
          Model what the operator needs to trust and trace the RCA.
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
            The data model question was:{" "}
            <strong className="text-foreground">
              What entities does an operator need to trace from alert → incident → RCA → ground truth?
            </strong>
          </p>
          <p>
            The answer: <strong className="text-foreground">three core entities</strong> with
            flexible JSON fields for extensibility. More entities (CMDB, topology, asset management)
            would add complexity without adding value for MVP evaluation.
          </p>
        </div>
      </div>

      {/* Entity Relationship Diagram */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Entity Relationships
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre overflow-x-auto">
{`┌─────────────────┐         ┌─────────────────┐
│     Alert       │◄────────│    Incident     │
├─────────────────┤  N:1    ├─────────────────┤
│ id              │         │ id              │
│ timestamp       │         │ start_time      │
│ source_system   │         │ end_time        │
│ host            │         │ severity        │
│ service         │         │ status          │
│ severity        │         │ related_alert_ids│──► [alert_id, ...]
│ alert_type      │         │ summary         │
│ message         │         │ suspected_root  │
│ tags (JSON)     │         │ impact_scope    │
│ raw_payload     │         │ tenant_id       │
│ tenant_id       │         └────────┬────────┘
└─────────────────┘                  │
                                     │ 1:1
                                     ▼
                          ┌─────────────────────┐
                          │    RCAArtifact      │
                          ├─────────────────────┤
                          │ id                  │
                          │ incident_id (FK)    │
                          │ incident_summary    │
                          │ hypotheses (JSON)   │
                          │ confidence_scores   │
                          │ evidence (JSON)     │
                          │ generated_at        │
                          │ model               │
                          │ duration_ms (Float) │
                          │ status              │
                          │ reviewed_by         │
                          │ reviewed_at         │
                          └─────────────────────┘`}
        </div>
      </div>

      {/* Alert Entity Schema */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Alert Entity: Field-by-Field Rationale
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Field</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Why This Field?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">id</td>
                <td className="py-2 px-3">UUID</td>
                <td className="py-2 px-3">Unique identifier for deduplication and correlation. UUID avoids sequence collisions.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">timestamp</td>
                <td className="py-2 px-3">DateTime</td>
                <td className="py-2 px-3">When the alert fired. Essential for time-window correlation and incident timeline.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">source_system</td>
                <td className="py-2 px-3">String(64)</td>
                <td className="py-2 px-3">Which monitoring system (SNMP, Syslog, APM). Enables provenance and source filtering.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">host</td>
                <td className="py-2 px-3">String(128)</td>
                <td className="py-2 px-3">The affected device. Primary dimension for grouping and topology reasoning.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">service</td>
                <td className="py-2 px-3">String(128)</td>
                <td className="py-2 px-3">Logical service (DNS, BGP, CDN). Enables service-level impact assessment.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">severity</td>
                <td className="py-2 px-3">String(32)</td>
                <td className="py-2 px-3">Critical/warning/info. Used for prioritization (MVP uses critical only for incidents).</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">alert_type</td>
                <td className="py-2 px-3">String(64)</td>
                <td className="py-2 px-3">Specific alert category (packet_loss, bgp_flap). Key signal for RCA hypothesis.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">message</td>
                <td className="py-2 px-3">Text</td>
                <td className="py-2 px-3">Human-readable description. Used for display and LLM context.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">tags</td>
                <td className="py-2 px-3">JSON</td>
                <td className="py-2 px-3">Flexible metadata including incident tag for synthetic data correlation.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">raw_payload</td>
                <td className="py-2 px-3">JSON</td>
                <td className="py-2 px-3">Original alert data. Preserves full context for deep-dive debugging.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">tenant_id</td>
                <td className="py-2 px-3">String(64), nullable</td>
                <td className="py-2 px-3">Multi-tenancy hook for MSP scenarios. Optional for single-tenant.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Incident Entity Schema */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Incident Entity: Field-by-Field Rationale
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Field</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Why This Field?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">related_alert_ids</td>
                <td className="py-2 px-3">JSON (array)</td>
                <td className="py-2 px-3">List of alert UUIDs comprising this incident. Enables traceability - every RCA traces back to source alerts.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">start_time / end_time</td>
                <td className="py-2 px-3">DateTime</td>
                <td className="py-2 px-3">Incident boundaries from earliest/latest correlated alerts. Used for MTTR calculation.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">severity</td>
                <td className="py-2 px-3">String(32)</td>
                <td className="py-2 px-3">Incident-level severity (may differ from individual alert severity). MVP uses &quot;critical&quot;.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">status</td>
                <td className="py-2 px-3">String(32)</td>
                <td className="py-2 px-3">Lifecycle state: open/investigating/resolved. MVP uses &quot;open&quot; for all.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">summary</td>
                <td className="py-2 px-3">Text</td>
                <td className="py-2 px-3">Auto-generated description of correlated alerts. Human-readable for operator dashboard.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">suspected_root_cause</td>
                <td className="py-2 px-3">Text, nullable</td>
                <td className="py-2 px-3">Placeholder for post-RCA enrichment. Links incident to RCA output.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">impact_scope</td>
                <td className="py-2 px-3">String(64)</td>
                <td className="py-2 px-3">Blast radius: network/region/service. Used for prioritization and escalation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* RCAArtifact Entity */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          RCAArtifact Entity: Field-by-Field Rationale
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Field</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Why This Field?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">hypotheses</td>
                <td className="py-2 px-3">JSON (array)</td>
                <td className="py-2 px-3">List of root cause hypotheses. Multiple allows operator to explore alternatives if top hypothesis is wrong.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">confidence_scores</td>
                <td className="py-2 px-3">JSON (dict)</td>
                <td className="py-2 px-3">Maps hypothesis → confidence (0-1). Signals certainty level for operator decision-making.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">evidence</td>
                <td className="py-2 px-3">JSON</td>
                <td className="py-2 px-3">Supporting data: alert patterns, RAG citations, metrics. Enables operator verification.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">model</td>
                <td className="py-2 px-3">String(64)</td>
                <td className="py-2 px-3">Which model generated this: &quot;baseline-rules&quot; or &quot;gemini-flash&quot;. Essential for comparison.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">generated_at</td>
                <td className="py-2 px-3">DateTime</td>
                <td className="py-2 px-3">Timestamp of RCA generation. Used for latency calculation and audit trail.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">duration_ms</td>
                <td className="py-2 px-3">Float, nullable</td>
                <td className="py-2 px-3">Wall-clock time for RCA generation (milliseconds). Enables time-to-context measurement vs manual benchmark (15-30 min).</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">status</td>
                <td className="py-2 px-3">String(32)</td>
                <td className="py-2 px-3">Review state: pending_review (default), accepted, rejected. Human-in-the-loop gate - no RCA is final without operator decision.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">reviewed_by</td>
                <td className="py-2 px-3">String(128), nullable</td>
                <td className="py-2 px-3">Reviewer identifier. Populated on accept/reject. Enables accountability in audit trail.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">reviewed_at</td>
                <td className="py-2 px-3">DateTime, nullable</td>
                <td className="py-2 px-3">Timestamp of review decision. Used for review latency tracking and SLO measurement.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Why JSON Fields */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Why JSON Fields (Not Strict Schema)?
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
                  <td className="py-2 px-3">Strict relational schema</td>
                  <td className="py-2 px-3">Type safety, query optimization, referential integrity</td>
                  <td className="py-2 px-3">Schema migrations for every change, limited flexibility</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">JSON fields (chosen)</td>
                  <td className="py-2 px-3">Schema evolution, flexible evidence, no migrations</td>
                  <td className="py-2 px-3">Weaker validation, complex queries on nested fields</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Decision:</strong> JSON for tags, raw_payload, evidence,
            and hypotheses. These fields vary by scenario and should not require schema changes.
            Core fields (host, timestamp, severity) remain typed for query performance and indexing.
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
                  <td className="py-2 px-3 font-bold text-foreground">Flexible JSON fields</td>
                  <td className="py-2 px-3">Weaker validation, schema drift</td>
                  <td className="py-2 px-3">Pydantic models for validation at API boundary</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Minimal entity count</td>
                  <td className="py-2 px-3">Shallow RCA without topology/CMDB</td>
                  <td className="py-2 px-3">Explicit non-goal; extension points documented</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">SQLite storage</td>
                  <td className="py-2 px-3">Concurrency limits, no JSON operators</td>
                  <td className="py-2 px-3">SQLAlchemy ORM; migrate to Postgres with config</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Alert ID array (not FK)</td>
                  <td className="py-2 px-3">No referential integrity</td>
                  <td className="py-2 px-3">Application-level validation; simpler queries</td>
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
          <p>When asked &quot;Walk me through your data model design&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;I started with the question: what does an operator need to trace from an alert to
                a root cause analysis? The answer drove three core entities: Alert, Incident, and RCAArtifact.
              </p>
              <p>
                Alert captures the raw signal: what fired, when, on which host, from which monitoring system.
                I kept mandatory fields typed - host, timestamp, severity - for query performance. But I
                added JSON fields for tags and raw payload because alert formats vary across sources.
              </p>
              <p>
                Incident is the correlated view - a set of related alerts grouped by time and incident type.
                The key field is related_alert_ids, an array of alert UUIDs. This preserves full traceability -
                every incident links back to its source alerts.
              </p>
              <p>
                RCAArtifact is the AI output: hypotheses, confidence scores, and evidence. I made hypotheses
                an array, not a single value, because real incidents have multiple possible root causes.
                The model field records whether baseline rules or LLM generated this RCA - essential for
                comparing approaches.
              </p>
              <p>
                What I deliberately excluded: CMDB, topology, asset management. These would add complexity
                without adding value for MVP evaluation. The schema is extensible - I can add a Topology
                entity later without changing existing tables.&quot;
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
              Estimated time: 90-120 seconds
            </div>
          </div>

          <p className="mt-6">When asked &quot;Why JSON fields instead of normalized tables?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              1-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;JSON fields are a deliberate trade-off. The alternative - fully normalized tables for
                every evidence type, every tag, every hypothesis - would require schema migrations
                whenever I add a new scenario type or evidence format.
              </p>
              <p>
                For MVP, schema stability matters more than query optimization. I am not running
                analytical queries on JSON fields - I am storing structured output for display and
                comparison. The JSON gets validated at the API boundary with Pydantic models, so
                I get type safety where it matters.
              </p>
              <p>
                The risk is query complexity if I need to filter by nested JSON fields. The mitigation:
                for MVP, those queries do not exist. If they become necessary, I would add denormalized
                columns or migrate to Postgres which has proper JSON operators.&quot;
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
