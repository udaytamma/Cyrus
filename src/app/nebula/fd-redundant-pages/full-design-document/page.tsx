"use client";

/**
 * Full Design Document - Archived from public docs
 *
 * This page was moved from /docs/fraud-platform/full-design-document
 * to Nebula because it duplicates the table of contents covered by
 * the other 10 dedicated documentation pages.
 */

import Link from "next/link";
import { AuthGate } from "@/components/AuthGate";

function FullDesignDocumentContent() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {/* Back navigation */}
        <div className="mb-6 flex items-center gap-4">
          <Link
            href="/nebula/fd-redundant-pages"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; FD Redundant Pages
          </Link>
          <span className="text-xs text-amber-600 dark:text-amber-400 rounded-full border border-amber-300 dark:border-amber-700 px-2 py-0.5">
            Archived
          </span>
        </div>

        <article className="prose prose-slate max-w-none dark:prose-invert">
          <h1>Telco Payment Fraud Detection Platform</h1>

          <blockquote>
            <p>
              <strong>Principal-Level, Production-Grade Design Document</strong>
            </p>
            <p>
              Phase 1: Real-Time <strong>Payment Fraud</strong> Decisioning for Telecom / MSP
            </p>
          </blockquote>

          <div className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/50">
            <p className="text-sm text-amber-900 dark:text-amber-200">
              <strong>Note:</strong> This page has been archived from the public documentation. The content below is a table of contents that duplicates the structure of the dedicated documentation pages. Visit{" "}
              <Link href="/docs/fraud-platform" className="text-amber-700 underline dark:text-amber-300">
                /docs/fraud-platform
              </Link>{" "}
              for the live documentation.
            </p>
          </div>

          <hr />

          <h2>Overview</h2>

          <p>
            This documentation provides a comprehensive, implementation-ready design for a <strong>Telco Payment Fraud Detection Platform</strong>. The design targets payment fraud in Telco/MSP environments including SIM farm attacks, device resale fraud, card testing, and account takeover via SIM swap. Built to survive real attackers, regulatory scrutiny, business pressure, and production failure.
          </p>

          <h3>Target Architecture</h3>

          <ul>
            <li><strong>Real-time decisioning</strong>: &lt;200ms end-to-end latency</li>
            <li><strong>Exactly-once semantics</strong>: Idempotent processing, no duplicate effects</li>
            <li><strong>Net revenue optimization</strong>: Profit-based thresholds, not just fraud blocking</li>
            <li><strong>Adversarial resilience</strong>: Probing detection, threshold rotation, safe mode</li>
            <li><strong>Governance-ready</strong>: PCI/PII boundaries, audit trails, evidence immutability</li>
          </ul>

          <hr />

          <h2>Document Structure</h2>

          <h3>Part 1: Technology Stack &amp; Architecture</h3>

          <ul>
            <li>Battle-hardened technology stack with constraint mappings</li>
            <li>System architecture diagram with data flows</li>
            <li>Event types and idempotency design</li>
            <li>Feedback loop and label hygiene</li>
            <li>Model lifecycle and rollback paths</li>
            <li>Failure and attack response controls</li>
            <li>Latency budget breakdown</li>
          </ul>

          <h3>Part 2: External Entities, Data Schemas &amp; Features</h3>

          <ul>
            <li>Entity profiling architecture (User, Device, Card, IP, Service)</li>
            <li>Redis data structures and key patterns</li>
            <li>Canonical PaymentEvent schema</li>
            <li>Complete feature catalog with formulas</li>
            <li>Streaming feature computation (Flink pseudo-code)</li>
            <li>BIN/issuer intelligence integration</li>
            <li>PII/PCI compliance boundaries</li>
            <li>Dispute network integration</li>
          </ul>

          <h3>Part 3: Detection Logic &amp; Policy Engine</h3>

          <ul>
            <li>
              Criminal fraud detection
              <ul>
                <li>Card testing / BIN attack detection</li>
                <li>Velocity attack detection</li>
                <li>Geographic anomaly detection</li>
                <li>Bot / automation detection</li>
              </ul>
            </li>
            <li>
              Friendly fraud detection
              <ul>
                <li>Historical abuse scoring</li>
                <li>Behavioral consistency analysis</li>
              </ul>
            </li>
            <li>Combined risk scoring with ML integration</li>
            <li>
              Policy engine architecture
              <ul>
                <li>YAML configuration model</li>
                <li>OPA Rego policies</li>
                <li>Profit-based threshold optimization</li>
              </ul>
            </li>
            <li>Champion/challenger framework</li>
          </ul>

          <h3>Part 4: Evidence Pipeline, Disputes &amp; Economics</h3>

          <ul>
            <li>
              Evidence vault architecture
              <ul>
                <li>Complete evidence schema</li>
                <li>Capture service implementation</li>
                <li>Immutability enforcement</li>
              </ul>
            </li>
            <li>
              Dispute pipeline
              <ul>
                <li>Chargeback ingestion and linking</li>
                <li>Representment automation</li>
                <li>Dispute outcome processing</li>
              </ul>
            </li>
            <li>
              Training data pipeline
              <ul>
                <li>Labeled dataset generation</li>
                <li>Point-in-time feature retrieval</li>
              </ul>
            </li>
            <li>
              Economic optimization service
              <ul>
                <li>Approval-loss trade-off analysis</li>
                <li>Risk budget management</li>
                <li>Business user interface (API)</li>
              </ul>
            </li>
            <li>Key performance metrics</li>
          </ul>

          <h3>Part 5: Testing, Validation, Monitoring &amp; Checklist</h3>

          <ul>
            <li>
              Offline validation and replay testing
              <ul>
                <li>Historical replay framework</li>
                <li>Model validation pipeline</li>
              </ul>
            </li>
            <li>
              Pre-production acceptance criteria
              <ul>
                <li>Sprint-1 go/no-go checklist</li>
                <li>Load testing configuration</li>
              </ul>
            </li>
            <li>
              Production monitoring and alerting
              <ul>
                <li>Grafana dashboard configuration</li>
                <li>Alert rules (Prometheus/Alertmanager)</li>
                <li>Metrics collection code</li>
              </ul>
            </li>
            <li>
              Sprint-1 implementation checklist
              <ul>
                <li>Infrastructure setup</li>
                <li>Core services</li>
                <li>Data pipelines</li>
                <li>Model and policy</li>
                <li>Monitoring and observability</li>
                <li>Testing and validation</li>
                <li>Documentation</li>
                <li>Go-live checklist</li>
              </ul>
            </li>
          </ul>

          <h3>Part 6: Sprint-1 Implementation Guide</h3>

          <ul>
            <li>
              Working MVP implementation
              <ul>
                <li>FastAPI decision endpoint</li>
                <li>Redis velocity counters</li>
                <li>PostgreSQL evidence storage</li>
              </ul>
            </li>
            <li>
              Detection scenarios covered
              <ul>
                <li>Card testing attacks</li>
                <li>Velocity attacks</li>
                <li>Geographic anomalies</li>
                <li>Bot/automation detection</li>
                <li>Friendly fraud scoring</li>
              </ul>
            </li>
            <li>
              Policy configuration
              <ul>
                <li>Score thresholds</li>
                <li>Built-in rules</li>
                <li>Blocklists and allowlists</li>
              </ul>
            </li>
            <li>
              Getting started guide
              <ul>
                <li>Docker Compose setup</li>
                <li>Environment configuration</li>
                <li>API reference</li>
              </ul>
            </li>
          </ul>

          <h3>Part 7: Demo Dashboard</h3>

          <ul>
            <li>Professional Streamlit dashboard for demos</li>
            <li>
              Transaction simulator with attack presets
              <ul>
                <li>Normal transactions</li>
                <li>Card testing attacks</li>
                <li>Velocity attacks</li>
                <li>Geographic anomalies</li>
                <li>Bot/emulator attacks</li>
                <li>Friendly fraud scenarios</li>
              </ul>
            </li>
            <li>
              Score visualization
              <ul>
                <li>Interactive gauge charts</li>
                <li>Color-coded risk levels</li>
                <li>Detailed score breakdowns</li>
              </ul>
            </li>
            <li>
              Analytics dashboard
              <ul>
                <li>Decision distribution charts</li>
                <li>Hourly volume graphs</li>
                <li>Latency monitoring</li>
              </ul>
            </li>
            <li>Decision history from PostgreSQL</li>
            <li>Policy inspector with YAML viewer</li>
          </ul>

          <hr />

          <h2>Quick Start</h2>

          <h3>Sprint-1 Scope</h3>

          <p>Sprint-1 delivers a <strong>minimal viable production design</strong> for the core payment fraud slice:</p>

          <ol>
            <li>Real-time decision API (&lt;200ms)</li>
            <li>Velocity features (card, device, IP, user)</li>
            <li>Criminal fraud detection (card testing, velocity, geo, bot)</li>
            <li>Friendly fraud scoring (historical abuse, behavioral)</li>
            <li>Configurable policy engine</li>
            <li>Immutable evidence vault</li>
            <li>Basic chargeback ingestion</li>
            <li>Production monitoring and alerting</li>
          </ol>

          <h3>Key Technologies</h3>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-semibold">Component</th>
                  <th className="px-4 py-3 text-left font-semibold">Choice</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Streaming</td>
                  <td className="px-4 py-3">Apache Kafka</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Stream Processing</td>
                  <td className="px-4 py-3">Apache Flink</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Fast State</td>
                  <td className="px-4 py-3">Redis Cluster</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Feature Store</td>
                  <td className="px-4 py-3">Feast + Delta Lake</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Policy Engine</td>
                  <td className="px-4 py-3">Open Policy Agent (OPA)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Model Serving</td>
                  <td className="px-4 py-3">Seldon Core / KServe</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Evidence Storage</td>
                  <td className="px-4 py-3">PostgreSQL + S3</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Observability</td>
                  <td className="px-4 py-3">Prometheus + Grafana</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Non-Negotiable Constraints</h3>

          <ul>
            <li><strong>Latency</strong>: &lt;200ms end-to-end (P99)</li>
            <li><strong>Idempotency</strong>: Exactly-once business effects</li>
            <li><strong>Availability</strong>: 99.9% uptime</li>
            <li><strong>PCI Compliance</strong>: No raw PAN in fraud platform</li>
          </ul>

          <hr />

          <h2>Key Metrics</h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-semibold">Metric</th>
                  <th className="px-4 py-3 text-left font-semibold">Target</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Approval Rate</td>
                  <td className="px-4 py-3">&gt;92%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Fraud Detection Rate</td>
                  <td className="px-4 py-3">&gt;70% of known fraud</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">False Positive Rate</td>
                  <td className="px-4 py-3">&lt;10% of blocks</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">P99 Latency</td>
                  <td className="px-4 py-3">&lt;200ms</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Dispute Win Rate</td>
                  <td className="px-4 py-3">&gt;50%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr />

          <h2>Phase 2 (Future)</h2>

          <ul>
            <li>IRSF (International Revenue Share Fraud) - Enhanced detection</li>
            <li>Account Takeover (ATO) - SIM swap correlation</li>
            <li>Subscription Fraud - Multi-account abuse</li>
            <li>Batch &amp; Long-Horizon Analytics</li>
            <li>Automated representment</li>
            <li>Advanced ML (graph neural networks, sequence models for fraud rings)</li>
          </ul>

          <hr />

          <h2>Author</h2>

          <p><strong>Uday Tamma</strong></p>

          <p>Principal-level design document for Telecom/MSP fraud detection platform.</p>

          <p>
            <strong>Document Version</strong>: 1.1<br />
            <strong>Last Updated</strong>: January 2026
          </p>
        </article>
      </div>
    </div>
  );
}

export default function FullDesignDocumentPage() {
  return (
    <AuthGate
      storageKey="cyrus_nebula_auth"
      title="Nebula"
      subtitle="Archived Design Document"
    >
      <FullDesignDocumentContent />
    </AuthGate>
  );
}
