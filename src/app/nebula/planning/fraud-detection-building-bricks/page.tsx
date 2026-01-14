"use client";

/**
 * Fraud Detection - Building Bricks
 * Technical implementation details: APIs, schemas, architecture decisions
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function BuildingBricks() {
  return (
    <ThinkingLayout
      title="Building Bricks - Fraud Detection"
      description="Technical implementation details and architecture decisions"
      currentSection="building-bricks"
    >
      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
          9
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">Building Bricks</h1>
        <p className="text-muted-foreground">
          Technical implementation details: APIs, schemas, database design,
          caching strategies, and architectural trade-offs.
        </p>
      </div>

      {/* Project Specifications */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm" id="specifications">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
          Project Specifications
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Specification</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Value</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Target Latency</td>
                <td className="py-2 px-3 font-bold text-primary">&lt;200ms E2E</td>
                <td className="py-2 px-3 text-muted-foreground">Feature: &lt;50ms, Scoring: &lt;25ms, Policy: &lt;5ms</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">API Type</td>
                <td className="py-2 px-3 font-bold text-primary">REST (FastAPI)</td>
                <td className="py-2 px-3 text-muted-foreground">Async Python with Pydantic validation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Authentication</td>
                <td className="py-2 px-3 font-bold text-primary">None (MVP)</td>
                <td className="py-2 px-3 text-muted-foreground">Production would use API keys or JWT</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Rate Limiting</td>
                <td className="py-2 px-3 font-bold text-primary">Via Velocity Detection</td>
                <td className="py-2 px-3 text-muted-foreground">Fraud patterns serve as implicit rate limiting</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Versioning</td>
                <td className="py-2 px-3 font-bold text-primary">URL path (implicit)</td>
                <td className="py-2 px-3 text-muted-foreground">v1.0.0 in API title, future: /v1/decide</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Geographic</td>
                <td className="py-2 px-3 font-bold text-primary">Single Region</td>
                <td className="py-2 px-3 text-muted-foreground">Telco/MSP focused, extensible to multi-region</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Complete Endpoint List */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="endpoints">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          Complete Endpoint List
        </h2>

        <h3 className="text-base font-semibold text-primary mt-4 mb-3">Core Decision Endpoints</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Method</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Endpoint</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-green-500/20 text-green-700 dark:text-green-400 rounded text-xs font-mono">POST</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/decide</td>
                <td className="py-2 px-3 text-muted-foreground">Primary fraud decision endpoint (&lt;200ms SLA)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-blue-500/20 text-blue-700 dark:text-blue-400 rounded text-xs font-mono">GET</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/health</td>
                <td className="py-2 px-3 text-muted-foreground">Health check with component status</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold text-primary mt-6 mb-3">Policy Management Endpoints</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Method</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Endpoint</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-blue-500/20 text-blue-700 dark:text-blue-400 rounded text-xs font-mono">GET</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy</td>
                <td className="py-2 px-3 text-muted-foreground">Get current active policy configuration</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-blue-500/20 text-blue-700 dark:text-blue-400 rounded text-xs font-mono">GET</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/version</td>
                <td className="py-2 px-3 text-muted-foreground">Get current policy version and hash</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-blue-500/20 text-blue-700 dark:text-blue-400 rounded text-xs font-mono">GET</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/versions</td>
                <td className="py-2 px-3 text-muted-foreground">List all policy versions (paginated)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-blue-500/20 text-blue-700 dark:text-blue-400 rounded text-xs font-mono">GET</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/versions/{"{version}"}</td>
                <td className="py-2 px-3 text-muted-foreground">Get specific policy version details</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-green-500/20 text-green-700 dark:text-green-400 rounded text-xs font-mono">POST</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/reload</td>
                <td className="py-2 px-3 text-muted-foreground">Hot-reload policy from YAML file</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 rounded text-xs font-mono">PUT</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/thresholds</td>
                <td className="py-2 px-3 text-muted-foreground">Update score thresholds (validated)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-green-500/20 text-green-700 dark:text-green-400 rounded text-xs font-mono">POST</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/rules</td>
                <td className="py-2 px-3 text-muted-foreground">Add a new policy rule</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 rounded text-xs font-mono">PUT</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/rules/{"{rule_id}"}</td>
                <td className="py-2 px-3 text-muted-foreground">Update an existing policy rule</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-red-500/20 text-red-700 dark:text-red-400 rounded text-xs font-mono">DELETE</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/rules/{"{rule_id}"}</td>
                <td className="py-2 px-3 text-muted-foreground">Delete a policy rule</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-green-500/20 text-green-700 dark:text-green-400 rounded text-xs font-mono">POST</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/lists/{"{list_type}"}</td>
                <td className="py-2 px-3 text-muted-foreground">Add value to blocklist/allowlist</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-red-500/20 text-red-700 dark:text-red-400 rounded text-xs font-mono">DELETE</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/lists/{"{list_type}"}/{"{value}"}</td>
                <td className="py-2 px-3 text-muted-foreground">Remove value from blocklist/allowlist</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-green-500/20 text-green-700 dark:text-green-400 rounded text-xs font-mono">POST</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/rollback/{"{target_version}"}</td>
                <td className="py-2 px-3 text-muted-foreground">Rollback to previous policy version</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="px-2 py-0.5 bg-blue-500/20 text-blue-700 dark:text-blue-400 rounded text-xs font-mono">GET</span></td>
                <td className="py-2 px-3 font-mono text-foreground">/policy/diff/{"{v1}"}/{"{v2}"}</td>
                <td className="py-2 px-3 text-muted-foreground">Compare two policy versions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Request/Response Schemas */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="schemas">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </span>
          Request/Response Schemas
        </h2>

        <h3 className="text-base font-semibold text-primary mt-4 mb-3">POST /decide - Request (PaymentEvent)</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`{
  // Identifiers (required)
  "transaction_id": "txn_abc123",        // Unique from payment processor
  "idempotency_key": "idem_xyz789",      // For exactly-once processing
  "event_type": "authorization",          // authorization|capture|refund|chargeback

  // Transaction (required)
  "amount_cents": 4999,                   // Amount in cents (no floats)
  "currency": "USD",                      // ISO 4217

  // Card (required, tokenized for PCI)
  "card_token": "tok_visa_1234",          // Tokenized, not raw PAN
  "card_bin": "424242",                   // First 6-8 digits (optional)
  "card_last_four": "4242",               // Last 4 (optional)
  "card_brand": "Visa",                   // Optional
  "card_country": "US",                   // Issuing country (optional)

  // Service Info (Telco-specific)
  "service_id": "mobile_prepaid_001",     // Service identifier
  "service_type": "mobile",               // mobile|broadband
  "event_subtype": "topup",               // sim_activation|sim_swap|device_upgrade|topup|...

  // User/Subscriber
  "user_id": "user_12345",                // Optional
  "subscriber_id": "sub_67890",           // Telco subscriber ID
  "account_age_days": 365,                // Days since account creation
  "is_guest": false,                      // Guest checkout flag

  // Device Fingerprint (optional but recommended)
  "device": {
    "device_id": "fp_abc123",
    "device_type": "mobile",
    "os": "iOS",
    "os_version": "17.2",
    "is_emulator": false,
    "is_rooted": false
  },

  // Geographic Info (optional)
  "geo": {
    "ip_address": "203.0.113.45",
    "country_code": "US",
    "city": "San Francisco",
    "is_vpn": false,
    "is_datacenter": false,
    "is_tor": false
  },

  // Verification Results (from processor)
  "verification": {
    "avs_result": "Y",
    "cvv_result": "M",
    "three_ds_result": "Y",
    "three_ds_version": "2.2"
  }
}`}
        </pre>

        <h3 className="text-base font-semibold text-primary mt-6 mb-3">POST /decide - Response (FraudDecisionResponse)</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`{
  // Identifiers
  "transaction_id": "txn_abc123",
  "idempotency_key": "idem_xyz789",

  // Decision
  "decision": "ALLOW",                    // ALLOW|FRICTION|REVIEW|BLOCK
  "reasons": [
    {
      "code": "VELOCITY_CARD_1H",
      "description": "Card used 3 times in last hour",
      "severity": "LOW",
      "triggered_by": "velocity_detector",
      "value": "3",
      "threshold": "10"
    }
  ],

  // Risk Scores
  "scores": {
    "risk_score": 0.25,                   // Overall (0.0-1.0)
    "criminal_score": 0.15,               // Criminal fraud
    "friendly_fraud_score": 0.10,         // Friendly fraud
    "confidence": 0.85,                   // Data confidence
    "card_testing_score": 0.0,            // Detector scores
    "velocity_score": 0.20,
    "geo_score": 0.05,
    "bot_score": 0.0
  },

  // Friction (if decision=FRICTION)
  "friction_type": null,                  // 3DS|OTP|STEP_UP|CAPTCHA
  "friction_message": null,

  // Review (if decision=REVIEW)
  "review_priority": null,                // LOW|MEDIUM|HIGH|URGENT
  "review_notes": null,

  // Timing (for SLA monitoring)
  "timestamp": "2026-01-13T10:30:00Z",
  "processing_time_ms": 45.2,             // Total E2E
  "feature_time_ms": 28.1,                // Feature computation
  "scoring_time_ms": 12.4,                // Risk scoring
  "policy_time_ms": 2.3,                  // Policy evaluation

  // Metadata
  "policy_version": "1.2.4",
  "is_cached": false                      // Idempotency cache hit
}`}
        </pre>
      </div>

      {/* Error Handling Patterns */}
      <div className="mb-8 p-6 bg-gradient-to-r from-red-500/5 to-transparent rounded-xl border border-red-500/30 shadow-sm" id="errors">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </span>
          Error Handling Patterns
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Status</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Condition</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-mono text-green-600">200</td>
                <td className="py-2 px-3 text-muted-foreground">Successful decision</td>
                <td className="py-2 px-3 text-muted-foreground">FraudDecisionResponse with decision</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-mono text-yellow-600">400</td>
                <td className="py-2 px-3 text-muted-foreground">Validation error</td>
                <td className="py-2 px-3 text-muted-foreground">{`{"detail": "Validation error message"}`}</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-mono text-yellow-600">400</td>
                <td className="py-2 px-3 text-muted-foreground">Policy validation failed</td>
                <td className="py-2 px-3 text-muted-foreground">{`{"detail": "friction < review < block required"}`}</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-mono text-orange-600">404</td>
                <td className="py-2 px-3 text-muted-foreground">Policy version not found</td>
                <td className="py-2 px-3 text-muted-foreground">{`{"detail": "Version 'x.x.x' not found"}`}</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-mono text-red-600">500</td>
                <td className="py-2 px-3 text-muted-foreground">Internal error</td>
                <td className="py-2 px-3 text-muted-foreground">{`{"detail": "Error description"}`}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold text-primary mt-6 mb-3">Graceful Degradation</h3>
        <div className="text-muted-foreground space-y-2">
          <p>The system continues operating in degraded mode when components fail:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Redis down:</strong> No idempotency cache, no velocity features (defaults to 0), continues with scoring</li>
            <li><strong className="text-foreground">PostgreSQL down:</strong> No evidence capture, health check shows degraded status</li>
            <li><strong className="text-foreground">Policy file missing:</strong> Uses DEFAULT_POLICY constants from code</li>
          </ul>
        </div>
      </div>

      {/* Database Schema */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="database">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </span>
          Database Schema
        </h2>

        <h3 className="text-base font-semibold text-primary mt-4 mb-3">Core Tables (PostgreSQL)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Table</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Purpose</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Key Columns</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-mono text-foreground">transaction_evidence</td>
                <td className="py-2 px-3 text-muted-foreground">Immutable evidence for disputes</td>
                <td className="py-2 px-3 text-muted-foreground">transaction_id, card_token, risk_score, decision, features_snapshot</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-mono text-foreground">chargebacks</td>
                <td className="py-2 px-3 text-muted-foreground">Links chargebacks to transactions</td>
                <td className="py-2 px-3 text-muted-foreground">chargeback_id, transaction_id, fraud_type, status</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-mono text-foreground">policy_versions</td>
                <td className="py-2 px-3 text-muted-foreground">Immutable policy version history</td>
                <td className="py-2 px-3 text-muted-foreground">version, policy_content, policy_hash, is_active</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-mono text-foreground">decision_metrics</td>
                <td className="py-2 px-3 text-muted-foreground">Hourly aggregated metrics</td>
                <td className="py-2 px-3 text-muted-foreground">bucket_start, allowed_count, blocked_count, latency_p95</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold text-primary mt-6 mb-3">Key Indexes</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`-- Evidence lookups (for disputes and training)
idx_evidence_card_token    ON transaction_evidence(card_token)
idx_evidence_user_id       ON transaction_evidence(user_id)
idx_evidence_captured_at   ON transaction_evidence(captured_at)
idx_evidence_decision      ON transaction_evidence(decision)

-- Chargeback queries
idx_chargebacks_transaction_id  ON chargebacks(transaction_id)
idx_chargebacks_fraud_type      ON chargebacks(fraud_type)

-- Policy audit
idx_policy_versions_is_active   ON policy_versions(is_active)
idx_policy_versions_version     ON policy_versions(version)`}
        </pre>
      </div>

      {/* Caching Strategy */}
      <div className="mb-8 p-6 bg-gradient-to-r from-orange-500/5 to-transparent rounded-xl border border-orange-500/30 shadow-sm" id="caching">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          Caching Strategy
        </h2>

        <h3 className="text-base font-semibold text-primary mt-4 mb-3">Redis Usage</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Use Case</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Key Pattern</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">TTL</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Data Structure</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Idempotency Cache</td>
                <td className="py-2 px-3 font-mono text-muted-foreground">fraud:idempotency:{"{key}"}</td>
                <td className="py-2 px-3 text-muted-foreground">24 hours</td>
                <td className="py-2 px-3 text-muted-foreground">String (JSON)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Velocity Counters</td>
                <td className="py-2 px-3 font-mono text-muted-foreground">fraud:card:{"{id}"}:attempts</td>
                <td className="py-2 px-3 text-muted-foreground">24 hours</td>
                <td className="py-2 px-3 text-muted-foreground">ZSET (score=timestamp)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Distinct Counts</td>
                <td className="py-2 px-3 font-mono text-muted-foreground">fraud:device:{"{id}"}:distinct_cards</td>
                <td className="py-2 px-3 text-muted-foreground">24 hours</td>
                <td className="py-2 px-3 text-muted-foreground">ZSET (member=value)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Decline Tracking</td>
                <td className="py-2 px-3 font-mono text-muted-foreground">fraud:card:{"{id}"}:declines</td>
                <td className="py-2 px-3 text-muted-foreground">24 hours</td>
                <td className="py-2 px-3 text-muted-foreground">ZSET (score=timestamp)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold text-primary mt-6 mb-3">Why ZSETs for Velocity?</h3>
        <div className="text-muted-foreground space-y-2">
          <p>Redis Sorted Sets (ZSETs) are optimal for sliding window counters because they allow:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Efficient range queries:</strong> ZCOUNT for counting events within any time window</li>
            <li><strong className="text-foreground">Automatic deduplication:</strong> Same transaction_id can not be counted twice</li>
            <li><strong className="text-foreground">Easy cleanup:</strong> ZREMRANGEBYSCORE removes expired entries</li>
            <li><strong className="text-foreground">Atomic operations:</strong> Pipeline for ZADD + EXPIRE is atomic</li>
          </ul>
        </div>

        <h3 className="text-base font-semibold text-primary mt-6 mb-3">Velocity Windows</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`# Window configurations (from settings.py)
velocity_window_10m_seconds: 600      # Card testing detection
velocity_window_1h_seconds: 3600      # Velocity attack detection
velocity_window_24h_seconds: 86400    # Daily limits and patterns`}
        </pre>
      </div>

      {/* Architecture Trade-offs */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="tradeoffs">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </span>
          Architecture Trade-offs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Decision</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Choice</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Trade-off</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Why This Choice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Feature Store</td>
                <td className="py-2 px-3 text-primary">Redis ZSETs</td>
                <td className="py-2 px-3 text-muted-foreground">Memory cost vs. dedicated feature store</td>
                <td className="py-2 px-3 text-muted-foreground">Sub-5ms latency required; Redis proven at scale</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">ML Scoring</td>
                <td className="py-2 px-3 text-primary">Rule-based (Phase 1)</td>
                <td className="py-2 px-3 text-muted-foreground">Detection accuracy vs. time to market</td>
                <td className="py-2 px-3 text-muted-foreground">Rules catch 80% of patterns; ML added later with training data</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Evidence Store</td>
                <td className="py-2 px-3 text-primary">PostgreSQL (async)</td>
                <td className="py-2 px-3 text-muted-foreground">Consistency vs. latency</td>
                <td className="py-2 px-3 text-muted-foreground">Evidence capture does not block decision; async write</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Policy Engine</td>
                <td className="py-2 px-3 text-primary">YAML + Hot Reload</td>
                <td className="py-2 px-3 text-muted-foreground">Flexibility vs. schema enforcement</td>
                <td className="py-2 px-3 text-muted-foreground">Business needs to tune thresholds without deployments</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Idempotency</td>
                <td className="py-2 px-3 text-primary">Redis cache (24h TTL)</td>
                <td className="py-2 px-3 text-muted-foreground">Exactly-once vs. storage cost</td>
                <td className="py-2 px-3 text-muted-foreground">Prevents duplicate decisions on retries</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-medium text-foreground">Scoring Aggregation</td>
                <td className="py-2 px-3 text-primary">max + 0.05*(n-1)</td>
                <td className="py-2 px-3 text-muted-foreground">Simplicity vs. signal correlation modeling</td>
                <td className="py-2 px-3 text-muted-foreground">Strongest signal dominates; corroboration adds small boost</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Prometheus Metrics */}
      <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border border-cyan-500/30 shadow-sm" id="metrics">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </span>
          Prometheus Metrics
        </h2>

        <h3 className="text-base font-semibold text-primary mt-4 mb-3">SLA Monitoring</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-4">
{`# Latency histograms (buckets in ms)
fraud_e2e_latency_ms        [10, 25, 50, 75, 100, 150, 200, 250, 300, 500, 1000]
fraud_feature_latency_ms    [5, 10, 20, 30, 40, 50, 75, 100]
fraud_scoring_latency_ms    [5, 10, 15, 20, 25, 35, 50]
fraud_policy_latency_ms     [1, 2, 5, 10, 15, 20]

# Counters
fraud_requests_total{endpoint="/decide"}
fraud_decisions_total{decision="ALLOW|BLOCK|FRICTION|REVIEW"}
fraud_slow_requests_total       # Exceeds 200ms SLA
fraud_cache_hits_total
fraud_errors_total{error_type="..."}
fraud_detector_triggers_total{detector="..."}`}
        </pre>

        <h3 className="text-base font-semibold text-primary mt-6 mb-3">Key Dashboards</h3>
        <div className="text-muted-foreground space-y-2">
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Latency:</strong> p50, p95, p99 of e2e_latency_ms with 200ms threshold line</li>
            <li><strong className="text-foreground">Decision Distribution:</strong> Stacked area chart of decisions_total by type</li>
            <li><strong className="text-foreground">Error Rate:</strong> errors_total / requests_total with alerting at &gt;1%</li>
            <li><strong className="text-foreground">Cache Hit Rate:</strong> cache_hits / (cache_hits + requests) target &gt;20%</li>
          </ul>
        </div>
      </div>

      {/* Interview Application */}
      <div className="mb-8 p-6 bg-primary/5 rounded-xl border border-primary/30 shadow-sm" id="interview">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Interview Application
        </h2>

        <p className="text-muted-foreground mb-4">When asked "Walk me through your API design for this system":</p>

        <div className="p-4 bg-card rounded-lg border border-border">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
            2-Minute Response
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              "The API is designed around a single critical path: the POST /decide endpoint with a strict
              200ms SLA. Everything else is secondary.
            </p>
            <p>
              <strong className="text-foreground">Request design:</strong> We use PaymentEvent with required
              identifiers (transaction_id, idempotency_key) for exactly-once processing. Amounts are in cents
              to avoid floating-point issues. Card data is tokenized for PCI compliance - we never see raw PANs.
              Device and geo info are optional but improve detection accuracy.
            </p>
            <p>
              <strong className="text-foreground">Response design:</strong> We return the decision (ALLOW, FRICTION,
              REVIEW, BLOCK) with reasons that are both machine-readable (code) and human-readable (description).
              We include all scores for transparency and debugging. Timing breakdown helps identify bottlenecks.
            </p>
            <p>
              <strong className="text-foreground">Caching strategy:</strong> Redis ZSETs for velocity counters
              because we need sub-5ms lookups. ZSET scores are timestamps, so we can count events in any sliding
              window with ZCOUNT. Idempotency cache prevents duplicate decisions on retries.
            </p>
            <p>
              <strong className="text-foreground">Error handling:</strong> The system degrades gracefully. If Redis
              is down, velocity features default to 0 and we continue with scoring. If PostgreSQL is down, evidence
              capture is skipped but decisions continue. We never fail open or closed inappropriately.
            </p>
            <p>
              <strong className="text-foreground">Policy management:</strong> Separate endpoints for hot-reloading
              thresholds without deployment. Version history for audit. Diff endpoint for comparing changes.
              Rollback capability for quick recovery from bad policy changes."
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-8"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Part 8: Load Testing
        </Link>
        <Link
          href="/nebula/fraud-detection-design"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Design Index →
        </Link>
      </div>
    </ThinkingLayout>
  );
}
