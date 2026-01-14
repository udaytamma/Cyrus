"use client";

/**
 * Fraud Detection - Building Bricks
 * Technical implementation details: APIs, schemas, architecture decisions
 * Includes 20 Principal TPM interview Q&A
 */

import { useState } from "react";
import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

// Q&A Component with expand/collapse
function QAItem({
  number,
  question,
  answer,
  principalNuance,
}: {
  number: number;
  question: string;
  answer: React.ReactNode;
  principalNuance?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-gradient-to-r from-muted/30 to-transparent hover:from-muted/50 transition-colors"
      >
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
            {number}
          </div>
          <p className="text-sm text-foreground font-medium flex-1">{question}</p>
          <div className="text-muted-foreground text-lg shrink-0">
            {isOpen ? "−" : "+"}
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-border bg-background">
          <div className="mb-3">
            <div className="text-xs font-semibold text-green-500 mb-2 flex items-center gap-2">
              <span>✓</span> Principal-Level Answer
            </div>
            <div className="text-sm text-muted-foreground">{answer}</div>
          </div>
          {principalNuance && (
            <div className="p-3 bg-amber-500/5 rounded-lg border border-amber-500/30">
              <div className="text-xs font-semibold text-amber-500 mb-2 flex items-center gap-2">
                <span>★</span> Principal Nuance
              </div>
              <div className="text-sm text-muted-foreground">{principalNuance}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

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

      {/* Principal TPM Interview Q&A */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm" id="qa">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Principal TPM Interview Q&amp;A (20 Questions)
        </h2>
        <p className="text-muted-foreground mb-6">
          Top 20 questions a Principal TPM at a Mag7 company would be expected to answer about this system design.
          Click each question to reveal the answer.
        </p>

        {/* API Design & Latency */}
        <h3 className="text-base font-semibold text-purple-500 mt-6 mb-4">API Design &amp; Latency</h3>

        <QAItem
          number={1}
          question="Walk me through your latency budget allocation. Why 50ms for features, 25ms for scoring, and 5ms for policy within a 200ms SLA?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">The allocation follows the Pareto principle of latency budgets:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Features (50ms / 25%):</strong> This is the I/O-bound phase—Redis calls, potential external enrichment. Network round-trips dominate. We budget generously because Redis variance under load can spike.</li>
                <li><strong>Scoring (25ms / 12.5%):</strong> CPU-bound computation. Multiple detectors run in parallel, but aggregation and score calculation are pure math. Predictable latency.</li>
                <li><strong>Policy (5ms / 2.5%):</strong> Simple threshold comparisons and rule evaluation. If this takes more than 5ms, something is architecturally wrong.</li>
                <li><strong>Buffer (120ms / 60%):</strong> The remaining 60% is buffer for network variability, GC pauses, connection pool waits, and response serialization.</li>
              </ul>
              <p>
                This allocation ensures we hit p99 &lt;200ms even under load. The feature phase is the risk area—if Redis latency spikes to 80ms, we still have budget.
              </p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Interview Signal:</strong> A junior engineer allocates 190ms to work and 10ms buffer. A Principal knows that observed latency is the sum of all phases plus variance at each hop. You need 50%+ buffer to hit p99 SLAs. I&apos;d also instrument each phase separately so we know which to optimize when we approach the budget limit.
            </p>
          }
        />

        <QAItem
          number={2}
          question="Why did you choose REST over gRPC for a latency-sensitive fraud detection API?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">REST was chosen for operational reasons, not raw performance:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Client compatibility:</strong> Payment processors, e-commerce platforms, and telco systems universally support REST. gRPC requires specific client libraries.</li>
                <li><strong>Debugging:</strong> REST payloads are human-readable. When a merchant complains about a blocked transaction, support can curl the endpoint and see exactly what happened.</li>
                <li><strong>Infrastructure:</strong> Load balancers, API gateways, and logging systems have mature REST support. gRPC requires HTTP/2-aware infrastructure.</li>
              </ul>
              <p className="mb-2">
                <strong>The latency trade-off is minimal:</strong> gRPC saves ~5-10ms on serialization for a 1KB payload. Our 200ms budget has 120ms buffer. We&apos;re not latency-constrained by the protocol.
              </p>
              <p>
                <strong>When I&apos;d use gRPC:</strong> Internal service-to-service communication where we control both sides, need streaming, or are processing millions of requests per second where 5ms matters.
              </p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Real Answer:</strong> The fastest protocol doesn&apos;t matter if your customers can&apos;t integrate with it. A Principal TPM optimizes for total cost of ownership, not microbenchmarks. The 5ms gRPC saves is meaningless if it adds 2 weeks to every integration project.
            </p>
          }
        />

        <QAItem
          number={3}
          question="Why is the idempotency key generated by the client rather than the server?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">Client-generated keys solve the retry problem at its source:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>The core problem:</strong> Network failures happen after the server processes but before the client receives confirmation. Did the payment go through or not?</li>
                <li><strong>Client-generated solution:</strong> The client creates the key before sending. On retry, the same key is sent. The server recognizes it and returns the cached result. No duplicate processing.</li>
                <li><strong>Server-generated problem:</strong> If the server generates the key, the client doesn&apos;t know it on retry. They&apos;d send a new request, potentially creating duplicate transactions.</li>
              </ul>
              <p>
                <strong>Key requirements:</strong> UUIDv4 or similar high-entropy format. 24-hour TTL because retry loops don&apos;t last days. Store the full response, not just &quot;processed.&quot;
              </p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Edge Case:</strong> What if two different requests accidentally use the same idempotency key with different payloads? Return HTTP 409 Conflict. The key is a contract—same key must mean same intent. This catches bugs where clients reuse keys incorrectly.
            </p>
          }
        />

        {/* Caching & Data Structures */}
        <h3 className="text-base font-semibold text-purple-500 mt-8 mb-4">Caching &amp; Data Structures</h3>

        <QAItem
          number={4}
          question="Why Redis ZSETs instead of simple counters (INCR) for velocity tracking?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">ZSETs enable sliding windows; counters only support fixed windows:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>INCR problem:</strong> A counter with 1-hour TTL resets at the same time for everyone. A fraudster who hits at 59:59 gets a fresh budget at 00:00—just 1 second later.</li>
                <li><strong>ZSET solution:</strong> Each event is stored with timestamp as score. ZCOUNT from (now - 1 hour) to now gives the true sliding window count. No reset boundaries to exploit.</li>
                <li><strong>ZREMRANGEBYSCORE:</strong> Periodically clean entries older than the longest window (24h). Memory stays bounded.</li>
              </ul>
              <p className="mb-2"><strong>Performance:</strong> ZCOUNT and ZADD are O(log N). For a card with 100 transactions/day, that&apos;s sub-millisecond.</p>
              <p><strong>Memory:</strong> ~100 bytes per event. 1M active cards × 10 events avg = 1GB. Acceptable for the accuracy gain.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Alternative:</strong> Tumbling windows (count per discrete time bucket like &quot;10:00-11:00&quot;) are simpler but leak at boundaries. For fraud detection, that leak is exploitable. The 10% extra memory for ZSETs is worth the elimination of timing attacks.
            </p>
          }
        />

        <QAItem
          number={5}
          question="Why 24-hour TTL for all Redis caches? Wouldn't shorter TTLs save memory?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">24 hours is the fraud analysis window, not an arbitrary choice:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Fraud patterns:</strong> Most velocity attacks (card testing, credential stuffing) play out within 24 hours. Beyond that, the card is either blocked or the attack moved elsewhere.</li>
                <li><strong>Idempotency:</strong> Retry storms from network issues resolve within minutes. 24 hours covers even the worst outage-recovery scenario.</li>
                <li><strong>Memory math:</strong> 1M daily transactions × 500 bytes avg = 500MB idempotency cache. Redis handles this easily. The cost of shorter TTL is missed retries.</li>
              </ul>
              <p>
                <strong>The optimization opportunity:</strong> We could use 1-hour TTL for idempotency (retries are fast) and 24-hour for velocity (fraud patterns are slow). But uniform TTL simplifies operations and the memory difference is ~400MB—not worth the complexity.
              </p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Cost Calculation:</strong> Redis costs ~$0.10/GB/month on cloud. The 400MB &quot;wasted&quot; by uniform TTL costs $0.04/month. The engineering time to implement and debug multiple TTL strategies costs $500+. Simple wins.
            </p>
          }
        />

        <QAItem
          number={6}
          question="What happens when Redis is down? Walk me through the graceful degradation strategy."
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">Redis failure triggers degraded mode, not service failure:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Idempotency cache miss:</strong> Process the request normally. Risk: duplicate processing if client retries. Acceptable because it&apos;s temporary and alternatives (failing all requests) are worse.</li>
                <li><strong>Velocity features unavailable:</strong> Return 0 for all velocity scores. The other detectors (geo, device, verification) still work. We lose one signal, not all signals.</li>
                <li><strong>Health check:</strong> Report status: &quot;degraded&quot; with affected components. Alerting triggers, on-call is paged, but service continues.</li>
              </ul>
              <p className="mb-2">
                <strong>The decision logic:</strong> Never fail closed (block all transactions) or fail open (allow all). Degraded mode uses available signals and accepts slightly reduced accuracy.
              </p>
              <p><strong>Recovery:</strong> When Redis returns, idempotency cache is cold but fills naturally. Velocity counters are inaccurate for the first hour but self-correct.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Business Trade-off:</strong> During Redis outage, we might allow a few more fraudulent transactions (velocity detection disabled) but we don&apos;t block thousands of legitimate customers. False negatives cost money; false positives cost customers. In degraded mode, we accept higher false negative rate temporarily.
            </p>
          }
        />

        {/* Scoring & Decision Logic */}
        <h3 className="text-base font-semibold text-purple-500 mt-8 mb-4">Scoring &amp; Decision Logic</h3>

        <QAItem
          number={7}
          question="Explain the scoring aggregation formula: max + 0.05*(n-1). Why not simple averaging or sum?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">This formula reflects how fraud signals actually correlate:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Sum problem:</strong> If 4 detectors each return 0.3, sum = 1.2 (capped to 1.0). But low-confidence signals shouldn&apos;t create high-confidence decisions.</li>
                <li><strong>Average problem:</strong> If one detector returns 0.9 and three return 0.1, average = 0.3. We&apos;ve hidden the strong signal.</li>
                <li><strong>Max + boost:</strong> The strongest signal dominates (0.9 in above example). Additional signals add a small boost (0.05 per additional trigger), reflecting corroboration without multiplication.</li>
              </ul>
              <p className="mb-2"><strong>Example:</strong> Card testing (0.7) + velocity (0.4) + new device (0.3) = 0.7 + 0.05*(3-1) = 0.8</p>
              <p>The card testing signal dominates, but the other signals push it from &quot;high risk&quot; to &quot;very high risk.&quot;</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The ML Transition:</strong> This heuristic formula is Phase 1. With training data from chargebacks, we&apos;d learn actual signal correlations. Maybe velocity + card testing is highly predictive (correlated), so we shouldn&apos;t double-count. The simple formula is wrong but predictably wrong—easy to explain in disputes. ML is more accurate but a black box.
            </p>
          }
        />

        <QAItem
          number={8}
          question="Why four decision outcomes (ALLOW, FRICTION, REVIEW, BLOCK) instead of binary allow/deny?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">Binary decisions create a false dichotomy that hurts both security and conversion:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>ALLOW:</strong> Low risk. Process immediately. Optimizes conversion for good customers.</li>
                <li><strong>FRICTION:</strong> Medium risk, recoverable. Challenge with 3DS, OTP, or step-up auth. Legitimate users pass; fraudsters usually abandon.</li>
                <li><strong>REVIEW:</strong> Uncertain. Process but flag for human review. Post-transaction analysis can catch patterns humans recognize but rules miss.</li>
                <li><strong>BLOCK:</strong> High confidence fraud. Reject immediately. Reserved for clear signals (blocklisted card, confirmed bot).</li>
              </ul>
              <p>
                <strong>The business impact:</strong> Binary systems either block too much (lost revenue) or allow too much (fraud losses). The middle states let us calibrate the risk-conversion trade-off for different thresholds.
              </p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Threshold Math:</strong> If friction_threshold=0.4, review_threshold=0.6, block_threshold=0.85, we&apos;re saying: &quot;Challenge at 40% confidence, flag at 60%, reject at 85%.&quot; These numbers are tunable per business. A luxury brand might set friction at 0.3 (challenge more); a $5 digital good might set it at 0.7 (optimize conversion).
            </p>
          }
        />

        <QAItem
          number={9}
          question="Why rule-based detection in Phase 1 instead of launching with ML models?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">ML without training data is worse than good heuristics:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Cold start problem:</strong> ML models need labeled data (chargebacks) to train. On day 1, we have zero. Rules work immediately.</li>
                <li><strong>Interpretability:</strong> When a merchant asks &quot;why was my customer blocked?&quot;, &quot;card used 47 times in 10 minutes&quot; is actionable. &quot;Model output 0.87&quot; is not.</li>
                <li><strong>80/20 rule:</strong> Simple velocity and card testing rules catch 80% of fraud. ML adds accuracy for edge cases but the marginal gain doesn&apos;t justify the launch delay.</li>
                <li><strong>Auditability:</strong> Regulators and legal teams can review rules. &quot;The neural network decided&quot; doesn&apos;t satisfy compliance.</li>
              </ul>
              <p><strong>The ML transition plan:</strong> Capture evidence with all features. After 6 months, train on chargebacks labeled criminal/friendly/false_positive. A/B test ML against rules. Promote when ML wins.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Principal Insight:</strong> The best system isn&apos;t the most sophisticated—it&apos;s the one that ships and improves. Rules ship in 2 weeks. ML ships in 6 months (data collection + training + validation). During that 6-month gap, rules are catching fraud. The real competition isn&apos;t &quot;rules vs ML&quot;—it&apos;s &quot;rules now + ML later&quot; vs &quot;nothing for 6 months.&quot;
            </p>
          }
        />

        {/* Database & Evidence */}
        <h3 className="text-base font-semibold text-purple-500 mt-8 mb-4">Database &amp; Evidence</h3>

        <QAItem
          number={10}
          question="Why async evidence capture to PostgreSQL instead of synchronous writes?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">Evidence capture is not on the critical path:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>The critical path:</strong> Request → Features → Score → Decision → Response. This must complete in 200ms.</li>
                <li><strong>Evidence purpose:</strong> Dispute resolution (days later), ML training (months later), audit compliance (years later). None of these need sub-second writes.</li>
                <li><strong>Async benefit:</strong> A PostgreSQL insert takes 5-20ms depending on load. That&apos;s 10% of our latency budget. Fire-and-forget async write costs 0ms on the critical path.</li>
              </ul>
              <p className="mb-2"><strong>Reliability:</strong> If the async write fails, we log the error and continue. The decision was made; the evidence is nice-to-have. We can reconstruct from Redis data if needed.</p>
              <p><strong>Ordering:</strong> Evidence writes can be batched and slightly delayed. We don&apos;t need transaction_123&apos;s evidence before transaction_124&apos;s.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Dispute Risk:</strong> What if async evidence capture fails for a disputed transaction? Our response includes the decision and reasons—that&apos;s the legal evidence. PostgreSQL evidence is enrichment (full feature snapshot) for deeper analysis. The core evidence is in the API response, which the merchant has.
            </p>
          }
        />

        <QAItem
          number={11}
          question="Why is the evidence table immutable? What about GDPR right to erasure?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">Immutability serves legal requirements that supersede GDPR:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Dispute resolution:</strong> Card network rules (Visa, Mastercard) require evidence retention for 540+ days. Modifying evidence after the fact is fraud.</li>
                <li><strong>Regulatory compliance:</strong> PCI-DSS and financial regulations require audit trails. Mutable evidence is inadmissible.</li>
                <li><strong>GDPR reconciliation:</strong> GDPR has exceptions for legal obligations and dispute resolution. We can retain transaction evidence under these exceptions.</li>
              </ul>
              <p className="mb-2"><strong>What we do delete:</strong> Marketing data, analytics aggregates, and anything not legally required. The fraud evidence stays.</p>
              <p><strong>Retention policy:</strong> 7 years for financial records (legal requirement), then cryptographic deletion. We don&apos;t delete early even on GDPR request because we have a legal basis to retain.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Legal Nuance:</strong> GDPR Article 17 (right to erasure) explicitly excludes data needed for &quot;establishment, exercise or defense of legal claims.&quot; A fraud decision is exactly that. Document this in your privacy policy so users know what&apos;s retained and why.
            </p>
          }
        />

        <QAItem
          number={12}
          question="Which database indexes are critical for production, and what query patterns do they support?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">Indexes are designed for the actual query patterns, not theoretical ones:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>idx_evidence_card_token:</strong> &quot;Show me all transactions for this card&quot;—used in dispute investigation when a cardholder complains.</li>
                <li><strong>idx_evidence_captured_at:</strong> &quot;Get transactions from the last 24 hours&quot;—used for ML training data export and batch analytics.</li>
                <li><strong>idx_evidence_decision:</strong> &quot;Find all blocked transactions&quot;—used for false positive analysis and rule tuning.</li>
                <li><strong>idx_chargebacks_fraud_type:</strong> &quot;Show all friendly fraud chargebacks&quot;—used to calculate fraud type distribution for model training.</li>
              </ul>
              <p><strong>Not indexed:</strong> amount_cents (rarely queried alone), policy_version (low cardinality). Adding indexes has write cost—only index what you query.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Scaling Consideration:</strong> At 10M transactions/day, the evidence table grows 300M rows/month. Range queries on captured_at become slow without partitioning. Phase 2 would add monthly partitions, allowing us to drop old partitions (7+ years) instead of DELETE which locks the table.
            </p>
          }
        />

        {/* Policy & Operations */}
        <h3 className="text-base font-semibold text-purple-500 mt-8 mb-4">Policy &amp; Operations</h3>

        <QAItem
          number={13}
          question="Why YAML for policy configuration instead of a database-driven approach?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">YAML optimizes for the actual workflow of policy changes:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Version control:</strong> YAML files go in git. Every change has a commit message, author, and timestamp. Database changes are harder to track.</li>
                <li><strong>Code review:</strong> Policy changes can go through PR review like code. &quot;Why did you lower the block threshold?&quot; is answered in the PR discussion.</li>
                <li><strong>Rollback:</strong> Git revert + hot reload = instant rollback. Database rollback requires knowing the previous values.</li>
                <li><strong>Environment parity:</strong> Same YAML in dev, staging, prod. Database configs often drift between environments.</li>
              </ul>
              <p><strong>The hot reload mechanism:</strong> POST /policy/reload reads the YAML, validates it, and atomically swaps the in-memory policy. No restart required.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>When to use database:</strong> If non-technical users (fraud analysts) need to change rules without engineering involvement, a UI + database is better. But that requires building a policy editor, validation UI, and audit logging—a significant investment. YAML + git is the 80% solution for 20% of the effort.
            </p>
          }
        />

        <QAItem
          number={14}
          question="How do you safely roll back a bad policy change? Walk me through the process."
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">Rollback is a first-class operation, not an afterthought:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Detection:</strong> Dashboards show decision distribution. If BLOCK rate jumps from 2% to 20% after a policy change, something is wrong.</li>
                <li><strong>Immediate action:</strong> POST /policy/rollback/{"{target_version}"} reverts to a known-good version. This takes seconds, not minutes.</li>
                <li><strong>Verification:</strong> Watch the dashboard. BLOCK rate should return to baseline within the next minute (as new requests hit the old policy).</li>
                <li><strong>Post-mortem:</strong> Use GET /policy/diff/{"{v1}"}/{"{v2}"} to understand what changed. Was it a threshold typo? A rule with unintended scope?</li>
              </ul>
              <p><strong>Prevention:</strong> Policy changes should go through staging first with synthetic traffic. But sometimes bad configs slip through—fast rollback is the safety net.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Blast Radius Question:</strong> How many transactions were affected by the bad policy? If the policy was live for 5 minutes at 1000 TPS, that&apos;s 300,000 decisions. If 10% were wrongly blocked, that&apos;s 30,000 failed transactions. Calculate the revenue impact and include it in the post-mortem.
            </p>
          }
        />

        <QAItem
          number={15}
          question="Why do you validate that friction_threshold < review_threshold < block_threshold?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">This validation prevents logical contradictions in policy:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>The invariant:</strong> Higher risk should trigger more severe responses. If block=0.5 but friction=0.6, a 0.55 risk score would skip friction and go straight to block. That&apos;s incoherent.</li>
                <li><strong>The user error:</strong> Someone might type 0.8 instead of 0.08 for friction. Without validation, this silently causes 80% of transactions to be challenged.</li>
                <li><strong>The API response:</strong> Return HTTP 400 with a clear message: &quot;friction (0.8) must be less than review (0.6).&quot; Fail fast at config time, not at runtime.</li>
              </ul>
              <p><strong>Other validations:</strong> All thresholds must be 0.0-1.0. Rule actions must be valid enum values. Blocklist entries must be properly formatted. Validate everything that can be validated.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Defense in Depth:</strong> Validation happens at three levels: (1) Pydantic schema validation on API input, (2) business logic validation in the policy engine, (3) integration tests that try invalid configs. Any one layer might have bugs; all three together are robust.
            </p>
          }
        />

        {/* Metrics & Monitoring */}
        <h3 className="text-base font-semibold text-purple-500 mt-8 mb-4">Metrics &amp; Monitoring</h3>

        <QAItem
          number={16}
          question="Why these specific latency histogram buckets? How did you choose [10, 25, 50, 75, 100, 150, 200, 250, 300, 500, 1000]?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">Buckets are designed around the SLA and expected distribution:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Fine granularity below SLA (10-200ms):</strong> Most requests should be here. We need detail to see if we&apos;re trending toward the limit.</li>
                <li><strong>SLA boundary (200ms):</strong> Explicit bucket so we can calculate &quot;% of requests under SLA&quot; directly.</li>
                <li><strong>Coarse granularity above SLA (250-1000ms):</strong> If we&apos;re above 200ms, we&apos;ve already failed. We just need to know &quot;how bad&quot;—not precise measurements.</li>
                <li><strong>The formula:</strong> Buckets should roughly double. [10, 20, 40, 80, 160, 320] is a common pattern. We adjusted for the 200ms SLA boundary.</li>
              </ul>
              <p><strong>Missing buckets:</strong> No bucket at 1ms or 5ms because we&apos;ll never be that fast (network overhead alone). No bucket at 2000ms because if we&apos;re that slow, the exact number doesn&apos;t matter.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Cardinality Trade-off:</strong> More buckets = more precise percentiles but higher storage cost in Prometheus. 11 buckets for latency is standard. Going to 20 buckets doubles storage for minimal insight gain. The sweet spot is 8-15 buckets depending on SLA precision needs.
            </p>
          }
        />

        <QAItem
          number={17}
          question="Why alert on >1% error rate? How did you arrive at that threshold?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">1% balances signal quality against alert fatigue:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Baseline:</strong> Healthy systems have 0.01-0.1% error rate from client errors (bad input, expired tokens). This is noise.</li>
                <li><strong>Signal threshold:</strong> At 1%, something is likely wrong with the system, not just bad client requests. 10x above baseline is a meaningful signal.</li>
                <li><strong>Business impact:</strong> At 1000 TPS, 1% error rate = 10 failed transactions/second = 600/minute. That&apos;s noticeable to customers.</li>
                <li><strong>Alert fatigue:</strong> Setting threshold at 0.5% would trigger alerts on normal variance. On-call gets paged, investigates, finds nothing. Eventually they ignore alerts.</li>
              </ul>
              <p><strong>The escalation:</strong> Alert at 1% (warning), page at 5% (critical). 5% error rate is &quot;wake someone up at 3am&quot; territory.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Context Matters:</strong> 1% might be wrong for your business. A payment processor processing $1B/day can&apos;t tolerate 1% errors—that&apos;s $10M in failed transactions. They&apos;d alert at 0.1%. A free mobile game might tolerate 2%. The threshold should be derived from business impact, not copied from a blog post.
            </p>
          }
        />

        <QAItem
          number={18}
          question="Why target >20% cache hit rate for idempotency? That seems low."
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">20% reflects the actual retry rate in payment systems:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Normal operation:</strong> Most transactions succeed on first attempt. No idempotency cache hit expected.</li>
                <li><strong>Retry scenarios:</strong> Network timeouts, client-side errors, load balancer failovers cause retries. Industry data suggests 15-25% of requests are retries during normal operation.</li>
                <li><strong>High cache hit rate is suspicious:</strong> If we&apos;re seeing 80% cache hits, either clients are misconfigured (always retrying) or we have a bug returning success but clients think it failed.</li>
              </ul>
              <p className="mb-2"><strong>The alert logic:</strong> Alert if cache hit rate drops below 10% (cache might be broken) OR exceeds 50% (something is causing excessive retries).</p>
              <p><strong>Drill-down:</strong> Segment by client_id. One client with 90% retry rate indicates their integration is broken. Global 30% indicates our system is returning ambiguous responses.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Hidden Metric:</strong> Cache hit rate also tells you about duplicate transactions you&apos;re preventing. If 20% of requests are retries and you&apos;re returning cached responses, you&apos;ve prevented 20% potential duplicates. That&apos;s the ROI of idempotency implementation.
            </p>
          }
        />

        {/* Security & Compliance */}
        <h3 className="text-base font-semibold text-purple-500 mt-8 mb-4">Security &amp; Compliance</h3>

        <QAItem
          number={19}
          question="How does tokenization reduce PCI scope, and why don't we handle raw PANs?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">PCI scope is binary: if you touch card data, everything that can reach it is in scope:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Raw PAN handling:</strong> If our API saw &quot;4242424242424242&quot;, then our servers, databases, logs, backups, and network infrastructure all become PCI scope. Annual audits, penetration tests, quarterly scans.</li>
                <li><strong>Tokenized approach:</strong> The payment processor&apos;s iframe collects the PAN directly. We only see &quot;tok_visa_1234&quot;—a meaningless string. Our scope is minimal.</li>
                <li><strong>What we can see:</strong> card_bin (first 6-8 digits, not considered sensitive), card_last_four (insufficient for fraud), card_brand, card_country. These are metadata, not cardholder data.</li>
              </ul>
              <p><strong>The audit difference:</strong> Full PCI DSS compliance (if handling PANs) is ~$50-200K/year in audit costs. Tokenized approach qualifies for SAQ-A (~$5-20K/year).</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Scope Creep Risk:</strong> Even with tokenization, if you log the full request body for debugging and it includes a card_number field (even if the client shouldn&apos;t send it), you&apos;ve brought logging into PCI scope. Use allow-lists for logging, not block-lists. Only log explicitly safe fields.
            </p>
          }
        />

        <QAItem
          number={20}
          question="When would you recommend moving from single-region to multi-region deployment?"
          answer={
            <>
              <p className="mb-2">
                <strong className="text-foreground">Multi-region is a cost-benefit decision, not a default:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Latency requirement:</strong> If customers in EU are hitting US servers, 100ms network latency eats half our 200ms budget. Multi-region when latency SLA can&apos;t be met from one location.</li>
                <li><strong>Availability requirement:</strong> Single region gives ~99.9% (one region&apos;s availability). Multi-region active-active gives ~99.99% (both must fail simultaneously). When your SLA demands four nines.</li>
                <li><strong>Data residency:</strong> GDPR requires EU data to stay in EU. If you have EU customers, you need an EU region regardless of latency.</li>
                <li><strong>Cost threshold:</strong> Multi-region roughly doubles infrastructure cost and triples operational complexity. Worth it at ~$10M+ annual transaction value.</li>
              </ul>
              <p><strong>Our current state:</strong> Telco/MSP focus means customers and data are in one geography. Single region is appropriate. Expand when the business requires it.</p>
            </>
          }
          principalNuance={
            <p>
              <strong>The Hidden Complexity:</strong> Multi-region fraud detection has a consistency problem. If a card is used in US and EU simultaneously, which region&apos;s velocity counter is authoritative? You need either global Redis (adds latency) or regional counters with async sync (allows race conditions). The architecture changes significantly—it&apos;s not just &quot;deploy in two places.&quot;
            </p>
          }
        />

        {/* Summary */}
        <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground">20</div>
              <div className="text-xs text-muted-foreground">Questions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-xs text-muted-foreground">Topic Areas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">Mag7</div>
              <div className="text-xs text-muted-foreground">Target Level</div>
            </div>
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
