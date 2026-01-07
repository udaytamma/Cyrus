"use client";

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

export default function NetworkVoCHubPage() {
  return (
    <CapstoneLayout
      title="Network Voice of Customer Hub"
      description="Perplexity Project 4: Link customer feedback to network KPIs by geography"
      currentLLM="perplexity"
      currentProjectId="perplexity/network-voc-hub"
    >
      <ProjectHeader
        title="Perplexity Project 4: Network Voice of Customer Hub"
        tags={[
          { label: "Telecom Operations", type: "telecom" },
          { label: "Customer Experience", type: "consumer" },
          { label: "AI/ML", type: "ai" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Executive Summary
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            The Network Voice of Customer (VoC) Hub is a data platform that bridges the gap between customer
            complaints and network performance metrics. In telecom, customers report issues ("slow data in
            downtown Seattle," "dropped calls in my neighborhood") via call centers, app reviews, and NPS surveys,
            but these complaints live in CRM systems disconnected from network operations. Meanwhile, network
            teams monitor cell site KPIs (throughput, latency, tower outages) in siloed dashboards.
          </p>
          <p>
            This hub ingests call center transcripts (via speech-to-text), NPS survey responses, app store reviews,
            and social media mentions, uses Vertex AI to extract structured complaints (issue type, location,
            severity). It then correlates these with BigQuery-stored network KPIs (cell site performance, fiber
            utilization) by geography and time, surfacing patterns like "200 complaints about slow data in ZIP
            98101 coincide with 40% throughput drop on towers SEA-101, SEA-102."
          </p>
          <p>
            <strong className="text-foreground">Impact:</strong> Enables proactive network remediation by linking customer pain to specific
            infrastructure issues. Reduces complaint resolution time by 50% and improves NPS by 10-15 points in
            targeted geos.
          </p>
        </div>
      </section>

      {/* Purpose & Technical Scope */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Purpose & Technical Scope
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Customer complaints about network quality are unstructured (free text, voice calls)</li>
            <li>Network ops teams lack visibility into customer-reported issues—rely on proactive monitoring only</li>
            <li>Correlation between complaints and infrastructure problems is manual, takes days</li>
            <li>Siloed data: CRM (Salesforce), call center (Five9), network metrics (Prometheus/BigQuery)</li>
            <li>No geographic mapping: hard to identify regional hotspots (e.g., "SF Bay Area has 3x complaint rate")</li>
          </ul>

          <p className="mt-4"><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong className="text-foreground">Voice of Customer Ingestion:</strong> Speech-to-text (Cloud Speech API) for call center recordings; Fivetran for NPS surveys, app reviews</li>
            <li><strong className="text-foreground">Complaint Structuring:</strong> Vertex AI Gemini to extract: issue_type (slow_data, dropped_call, no_signal), location (ZIP, city), severity (1-5)</li>
            <li><strong className="text-foreground">Network KPI Pipeline:</strong> Ingest cell site metrics from Prometheus/SNMP into BigQuery (throughput, latency, outage events)</li>
            <li><strong className="text-foreground">Geo-Correlation:</strong> Join complaints and network KPIs by ZIP code + timestamp; flag anomalies (spike in complaints + degraded KPIs)</li>
            <li><strong className="text-foreground">Looker Dashboards:</strong> Map view (heat map of complaint density), drill-down by geo (top issues, correlated cell sites), trend analysis</li>
            <li><strong className="text-foreground">Auto-Ticketing:</strong> For high-severity clusters, auto-create Jira tickets for network ops team</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes & KPIs */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Expected Outcomes & KPIs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Complaint Resolution Time</td>
                <td className="py-3 px-4">50% reduction</td>
                <td className="py-3 px-4">Avg days from complaint to network fix (pre vs. post)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">NPS Improvement</td>
                <td className="py-3 px-4">+10-15 points</td>
                <td className="py-3 px-4">NPS score in targeted geos with proactive fixes</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Correlation Accuracy</td>
                <td className="py-3 px-4">80% precision</td>
                <td className="py-3 px-4">% of flagged correlations confirmed as real network issues</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Coverage</td>
                <td className="py-3 px-4">90% of complaints processed</td>
                <td className="py-3 px-4">% of call center transcripts successfully parsed</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Ops Adoption</td>
                <td className="py-3 px-4">100% of regional network teams</td>
                <td className="py-3 px-4">Weekly Looker dashboard usage by NOC/field ops</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Platform</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">BigQuery</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Storage</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Dataflow</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">AI/ML</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Vertex AI Gemini</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Speech-to-Text</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Natural Language API</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data Ingestion</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Fivetran</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Pub/Sub</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Functions</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Analytics</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Looker</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">BigQuery GIS</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Integration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Salesforce API</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Five9 API</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Jira API</span>
            </div>
          </div>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Orchestration</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Composer</span>
              <span className="px-2 py-1 bg-card text-foreground text-xs rounded">Cloud Scheduler</span>
            </div>
          </div>
        </div>
      </section>

      {/* High-Level Architecture */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          High-Level Architecture
        </h2>
        <div className="overflow-x-auto">
          <pre className="text-xs text-muted-foreground font-mono whitespace-pre bg-background p-4 rounded-lg border border-border">
{`┌─────────────────────────────────────────────────────────────────────────────────┐
│                       NETWORK VOICE OF CUSTOMER HUB ARCHITECTURE                │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────── CUSTOMER FEEDBACK SOURCES ───────────────────────────────┐
│                                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │ Call Center │  │ NPS Surveys │  │ App Reviews │  │ Social      │           │
│  │ (Five9)     │  │ (Qualtrics) │  │ (iOS/Android│  │ (Twitter/FB)│           │
│  │ - Voice     │  │ - Feedback  │  │  Store)     │  │ - Mentions  │           │
│  │ - Chat logs │  │ - Scores    │  │ - Ratings   │  │ - Hashtags  │           │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘           │
│         │                │                │                │                   │
└─────────┼────────────────┼────────────────┼────────────────┼───────────────────┘
          │                │                │                │
          ▼                ▼                ▼                ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ Cloud Speech    │  │  Fivetran       │  │  Custom API     │
│ (Voice→Text)    │  │  Connectors     │  │  Scrapers       │
│ - Transcribe    │  │  - Qualtrics    │  │  - App Store    │
│ - Diarization   │  │  - Salesforce   │  │  - Social APIs  │
│ - Timestamps    │  │  - Zendesk      │  │                 │
└────────┬────────┘  └────────┬────────┘  └────────┬────────┘
         │                    │                    │
         └────────────────────┴────────────────────┘
                              │
                              ▼
                  ┌───────────────────────┐
                  │  Cloud Storage        │◄─── Raw feedback (text, JSON)
                  │  (Staging Bucket)     │
                  └───────────┬───────────┘
                              │
                              ▼
                  ┌───────────────────────┐
                  │  Dataflow Pipeline    │
                  │  (ETL)                │
                  │  - Dedupe             │
                  │  - Normalize format   │
                  │  - Enrich w/ metadata │
                  └───────────┬───────────┘
                              │
                              ▼
              ┌───────────────────────────────────┐
              │  BigQuery Raw Layer               │
              │  - feedback_raw                   │
              │    • customer_id                  │
              │    • text (complaint)             │
              │    • timestamp                    │
              │    • source (call/nps/app/social) │
              │    • raw_json                     │
              └───────────────┬───────────────────┘
                              │
                              ▼
              ┌───────────────────────────────────┐
              │  Vertex AI Gemini Pro             │
              │  (Complaint Extraction)           │
              │                                   │
              │  Prompt:                          │
              │  "Extract structured data:        │
              │   - issue_type: slow_data |       │
              │     dropped_call | no_signal |    │
              │     billing | other               │
              │   - location: ZIP, city, address  │
              │   - severity: 1-5                 │
              │   - keywords: tags"               │
              │                                   │
              │  Input: {complaint_text}          │
              │  Output: JSON                     │
              └───────────────┬───────────────────┘
                              │
                              ▼
              ┌───────────────────────────────────┐
              │  BigQuery Structured Layer        │
              │  - complaints_structured          │
              │    • complaint_id                 │
              │    • issue_type                   │
              │    • location (ZIP, lat/lon)      │
              │    • severity                     │
              │    • keywords[]                   │
              │    • timestamp                    │
              │    • customer_id                  │
              └───────────────┬───────────────────┘
                              │
                              │
┌─────────────────────────────┼─────────────────────────────────────────────────┐
│                             │         NETWORK DATA PIPELINE                   │
│                             │                                                 │
│  ┌─────────────┐  ┌─────────┴──────┐  ┌─────────────┐                        │
│  │ Prometheus  │  │ SNMP Traps     │  │ Cell Site   │                        │
│  │ (Metrics)   │  │ (Alarms)       │  │ Logs        │                        │
│  │ - Throughput│  │ - Outages      │  │ - Events    │                        │
│  │ - Latency   │  │ - Degradation  │  │ - Config    │                        │
│  └──────┬──────┘  └──────┬─────────┘  └──────┬──────┘                        │
│         │                │                   │                                │
│         └────────────────┴───────────────────┘                                │
│                          │                                                    │
│                          ▼                                                    │
│              ┌───────────────────────┐                                        │
│              │  Cloud Composer       │◄─── Hourly ETL                        │
│              │  (Network Metrics DAG)│                                        │
│              └───────────┬───────────┘                                        │
│                          │                                                    │
│                          ▼                                                    │
│              ┌───────────────────────────────────┐                            │
│              │  BigQuery Network KPI Layer       │                            │
│              │  - cell_site_metrics              │                            │
│              │    • site_id (e.g., SEA-101)      │                            │
│              │    • zip_code                     │                            │
│              │    • lat/lon                      │                            │
│              │    • throughput_mbps              │                            │
│              │    • latency_ms                   │                            │
│              │    • outage_minutes               │                            │
│              │    • timestamp (hourly)           │                            │
│              └───────────┬───────────────────────┘                            │
└──────────────────────────┼─────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌───────────────────────────────────┐
              │  BigQuery Correlation Engine      │
              │  (SQL Query)                      │
              │                                   │
              │  SELECT                           │
              │    c.zip_code,                    │
              │    COUNT(c.complaint_id),         │
              │    AVG(n.throughput_mbps),        │
              │    SUM(n.outage_minutes)          │
              │  FROM complaints_structured c     │
              │  LEFT JOIN cell_site_metrics n    │
              │    ON c.zip_code = n.zip_code     │
              │    AND TIMESTAMP_DIFF(...) < 24h  │
              │  GROUP BY c.zip_code              │
              │  HAVING COUNT(c.*) > 10           │◄─── Threshold: 10+ complaints
              │    AND AVG(n.throughput_mbps)<50  │◄─── KPI degradation
              └───────────────┬───────────────────┘
                              │
                              ▼
              ┌───────────────────────────────────┐
              │  BigQuery Insights Table          │
              │  - voc_network_correlations       │
              │    • zip_code                     │
              │    • complaint_count              │
              │    • top_issue_types[]            │
              │    • affected_cell_sites[]        │
              │    • avg_throughput_drop_pct      │
              │    • outage_hours                 │
              │    • severity_score (1-10)        │
              │    • auto_ticket_id (Jira)        │
              └───────────────┬───────────────────┘
                              │
              ┌───────────────┴───────────────┐
              │                               │
              ▼                               ▼
┌─────────────────────────┐       ┌─────────────────────────┐
│  Looker Dashboards      │       │  Jira Auto-Ticketing    │
│  ┌───────────────────┐  │       │  ┌───────────────────┐  │
│  │ Map View          │  │       │  │ Trigger Rules     │  │
│  │ - Heat map of     │  │       │  │ - severity > 7    │  │
│  │   complaint       │  │       │  │ - complaint > 50  │  │
│  │   density         │  │       │  │                   │  │
│  │ - Color by        │  │       │  └─────────┬─────────┘  │
│  │   severity        │  │       │            │             │
│  └───────────────────┘  │       │  ┌─────────▼─────────┐  │
│  ┌───────────────────┐  │       │  │ Create Ticket     │  │
│  │ Geo Drill-Down    │  │       │  │ - Assign region   │  │
│  │ - Select ZIP      │  │       │  │ - Attach data     │  │
│  │ - View complaints │  │       │  │ - Priority: P1    │  │
│  │ - See correlated  │  │       │  └───────────────────┘  │
│  │   cell sites      │  │       └─────────────────────────┘
│  │ - KPI charts      │  │
│  └───────────────────┘  │
│  ┌───────────────────┐  │
│  │ Trend Analysis    │  │
│  │ - Week-over-week  │  │
│  │ - Top issues      │  │
│  │ - Resolution rate │  │
│  └───────────────────┘  │
└─────────────────────────┘

┌────────────────────────── FEEDBACK LOOP ─────────────────────────────────────┐
│                                                                               │
│  Network Ops fixes issue → Complaints drop in affected ZIP → Update Looker   │
│  → Track resolution time → Feed back to NPS survey → Measure NPS improvement │
└───────────────────────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>
      </section>

      {/* Estimated Effort */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Estimated Effort
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Complexity</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: VoC Data Ingestion</td>
                <td className="py-3 px-4">Speech-to-text pipeline, Fivetran connectors, raw BigQuery schema</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Complaint Structuring</td>
                <td className="py-3 px-4">Gemini prompt engineering, issue taxonomy, location extraction (geocoding)</td>
                <td className="py-3 px-4">Medium-High</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Network KPI Pipeline</td>
                <td className="py-3 px-4">Prometheus/SNMP ingestion, cell site metadata mapping, hourly ETL</td>
                <td className="py-3 px-4">High</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Correlation Logic</td>
                <td className="py-3 px-4">SQL joins (geo + time), anomaly detection rules, severity scoring</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Dashboards & Auto-Ticketing</td>
                <td className="py-3 px-4">Looker map views, drill-downs, Jira integration, ops team training</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Risks & Dependencies
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Speech-to-text accuracy poor for accents/dialects</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Use enhanced models (Cloud Speech v2); manual review sample (10%)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Location extraction fails (vague: "my neighborhood")</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">High</span>
                </td>
                <td className="py-3 px-4">Fallback to customer billing address; prompt users for ZIP in surveys</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">False correlations (unrelated complaint spike)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Require statistical significance (p-value &lt; 0.05); manual ops review</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Network ops ignore auto-tickets (alert fatigue)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">High</span>
                </td>
                <td className="py-3 px-4">Start with high-severity only (severity &gt; 7); show ROI via NPS lift</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">PII leakage in transcripts shared with non-CX teams</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Medium</span>
                </td>
                <td className="py-3 px-4">Redact PII (names, phone #s) in processing; RBAC on BigQuery tables</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>Access to call center recordings (legal/privacy approval for transcription)</li>
            <li>Five9/Qualtrics API credentials for NPS and voice data</li>
            <li>Network team for cell site metadata (site_id to ZIP mapping, lat/lon)</li>
            <li>Prometheus/SNMP access for real-time network KPIs</li>
            <li>Customer support team to validate complaint taxonomy (issue types)</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Alignment with Professional Goals
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Telecom Network Expertise:</strong> Deep understanding of RAN KPIs, cell site operations, and customer experience
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Cross-Domain Integration:</strong> Bridges customer experience (CX) and network operations (NOC)—two siloed orgs
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">AI for Unstructured Data:</strong> Practical NLP application (speech-to-text, complaint extraction) at scale
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Measurable CX Impact:</strong> +10-15 NPS point lift provides direct customer satisfaction ROI
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Geo-Spatial Analytics:</strong> Demonstrates BigQuery GIS capabilities for location-based insights
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Proactive Operations:</strong> Shifts NOC from reactive (wait for outage) to proactive (fix before customers churn)
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/perplexity/ai-tpm-control-tower"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Previous: AI TPM Control Tower
        </Link>
        <Link
          href="/nebula/capstone/perplexity/genai-experimentation-platform"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Next: GenAI Experimentation Platform →
        </Link>
      </div>
    </CapstoneLayout>
  );
}
