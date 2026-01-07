"use client";

/**
 * Gemini Project 3: Multimedia Content Safety System
 * AI/ML TPM focus - Trust & Safety at Scale
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

function ProjectContent() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Link
        href="/nebula/capstone/gemini"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to Gemini Projects
      </Link>

      <ProjectHeader
        title="Multimedia Content Safety System"
        tags={[
          { label: "Consumer AI", type: "consumer" },
          { label: "AI/ML TPM", type: "ai" },
          { label: "Trust & Safety", type: "enterprise" },
        ]}
      />

      {/* Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Executive Summary</h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Multimedia Content Safety System is a real-time AI moderation platform that automatically
            detects and quarantines unsafe user-generated content (UGC) across images, videos, and text.
            It addresses the trust and safety challenge that consumer platforms face when millions of users
            upload content daily, creating legal, brand, and user safety risks if harmful content goes live.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">AI/ML TPM capabilities</strong> by building a production-grade
            ML system that balances automated moderation with human review queues. As an AI/ML TPM, you&apos;ll
            navigate the technical complexity of multi-modal AI while addressing ethical considerations,
            regulatory compliance (COPPA, DMCA), and operational trade-offs between precision and recall
            that directly impact user experience and platform reputation.
          </p>
        </div>
      </section>

      {/* Purpose & Technical Scope */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Purpose & Technical Scope</h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem Statement:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>User-generated content uploaded at scale (100K+ images/videos daily) without pre-moderation</li>
            <li>Manual review teams cannot scale (8-hour SLA for review vs. instant publish expectation)</li>
            <li>Harmful content (violence, CSAM, hate speech, adult content) goes live before detection</li>
            <li>Legal risk from DMCA violations, copyright infringement, and regulatory non-compliance</li>
            <li>Brand damage when inappropriate content appears in public feeds or search results</li>
            <li>Inconsistent moderation decisions across human reviewers leading to user complaints</li>
          </ul>

          <p><strong className="text-foreground">Solution Scope:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Multi-Modal Detection:</strong> Analyze images (Cloud Vision API), videos (Video Intelligence API), and text (Natural Language API) in parallel</li>
            <li><strong className="text-foreground">Real-Time Processing:</strong> Sub-second analysis triggered on upload via Cloud Run with auto-scaling to handle traffic spikes</li>
            <li><strong className="text-foreground">Risk Scoring:</strong> Combine confidence scores across modalities into unified risk score (0-100) with configurable thresholds</li>
            <li><strong className="text-foreground">Automated Actions:</strong> Auto-approve safe content (&lt;20 risk), auto-reject obvious violations (&gt;80 risk), route edge cases (20-80) to human review</li>
            <li><strong className="text-foreground">Human-in-Loop:</strong> Review queue dashboard for moderators with ML explanations (bounding boxes, detected labels, transcripts)</li>
            <li><strong className="text-foreground">Audit Trail:</strong> Log all moderation decisions with versioned policies for compliance audits and appeals</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Expected Outcomes & KPIs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement Method</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Automation Rate</td>
                <td className="py-3 px-4">70% auto-moderated</td>
                <td className="py-3 px-4">Percentage of uploads requiring no human review (approved or rejected automatically)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Precision (Avoid False Positives)</td>
                <td className="py-3 px-4">95%+ accuracy</td>
                <td className="py-3 px-4">Manual audit of auto-rejected content shows true violations (minimize wrongful takedowns)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Recall (Catch Harmful Content)</td>
                <td className="py-3 px-4">98%+ detection</td>
                <td className="py-3 px-4">Red team testing and user reports to measure missed violations</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Processing Latency</td>
                <td className="py-3 px-4">&lt;2 seconds P95</td>
                <td className="py-3 px-4">Time from upload complete to moderation decision available</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Human Review Queue Reduction</td>
                <td className="py-3 px-4">60% fewer items</td>
                <td className="py-3 px-4">Compare pre/post automation: 50K manual reviews/day to 20K/day</td>
              </tr>
              <tr>
                <td className="py-3 px-4">False Positive Appeals</td>
                <td className="py-3 px-4">&lt;2% appeal rate</td>
                <td className="py-3 px-4">User appeals overturning auto-rejection decisions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Technical Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Compute</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Run</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Functions</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">GKE Autopilot</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">AI/ML APIs</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Vision API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Video Intelligence API</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Natural Language API</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Storage & Queue</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Storage</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Pub/Sub</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Firestore</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Data & Analytics</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">BigQuery</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Logging</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Dataflow</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Human Review</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React Dashboard</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Firebase Auth</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Tasks</span>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Monitoring</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Monitoring</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Cloud Trace</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Error Reporting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">High-Level Architecture</h2>
        <div className="bg-[#1a1a2e] text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-xs leading-relaxed font-mono whitespace-pre">{`┌─────────────────────────────────────────────────────────────────────────────────┐
│                   MULTIMEDIA CONTENT SAFETY SYSTEM                              │
│                  (Real-Time AI Moderation Platform)                             │
└─────────────────────────────────────────────────────────────────────────────────┘

                          USER UPLOAD FLOW
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Mobile    │  │   Web App   │  │   API       │  │   3rd Party │
│   App       │  │             │  │   Partners  │  │   Platform  │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │                │
       │ POST /upload   │                │                │
       └────────────────┴────────────────┴────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Upload API Service  │
                    │   (Cloud Run)         │
                    │   ┌─────────────────┐ │
                    │   │ - Validate      │ │◄─── File type check
                    │   │ - Resize/transc │ │     - Size limits
                    │   │ - Hash (SHA256) │ │     - Duplicate detect
                    │   └────────┬────────┘ │
                    └────────────┼──────────┘
                                 │
                                 ▼
                    ┌───────────────────────┐
                    │   Cloud Storage       │
                    │   /ugc-uploads/       │
                    │   (Private bucket)    │
                    └────────┬──────────────┘
                             │
                             │ Object Finalize Event
                             ▼
                    ┌───────────────────────┐
                    │   Pub/Sub Topic       │
                    │   content-uploaded    │
                    └────────┬──────────────┘
                             │
                             ▼
              ┌──────────────────────────────────┐
              │   Moderation Orchestrator        │
              │   (Cloud Run - Auto-scale)       │
              │   ┌────────────────────────────┐ │
              │   │ Fan-out to ML APIs         │ │
              │   │ (Parallel processing)      │ │
              │   └──────┬─────────────────────┘ │
              └──────────┼──────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│  Vision API    │ │  Video Intel   │ │  Natural Lang  │
│  (Images)      │ │  (Videos)      │ │  (Text/OCR)    │
│                │ │                │ │                │
│  Detects:      │ │  Detects:      │ │  Detects:      │
│  - Violence    │ │  - Explicit    │ │  - Hate speech │
│  - Adult       │ │  - Violence    │ │  - Profanity   │
│  - Racy        │ │  - Weapons     │ │  - Toxic lang  │
│  - Medical     │ │  - Brands      │ │  - PII         │
│  - Spoof       │ │  - Labels      │ │  - Sentiment   │
│                │ │                │ │                │
│  Returns:      │ │  Returns:      │ │  Returns:      │
│  - Likelihood  │ │  - Confidence  │ │  - Categories  │
│  - Bboxes      │ │  - Timestamps  │ │  - Entities    │
└────────┬───────┘ └────────┬───────┘ └────────┬───────┘
         │                  │                  │
         └──────────────────┼──────────────────┘
                            │
                            ▼
              ┌─────────────────────────────┐
              │   Risk Aggregator           │
              │   ┌───────────────────────┐ │
              │   │ Combine scores:       │ │
              │   │ - Weighted average    │ │
              │   │ - Max severity        │ │
              │   │ - Context rules       │ │
              │   │                       │ │
              │   │ Risk Score: 0-100    │ │
              │   └───────┬───────────────┘ │
              └───────────┼─────────────────┘
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  AUTO APPROVE   │ │  HUMAN REVIEW   │ │  AUTO REJECT    │
│  Risk < 20      │ │  Risk 20-80     │ │  Risk > 80      │
│                 │ │                 │ │                 │
│  Publish        │ │  Quarantine     │ │  Block          │
│  Make public    │ │  Enqueue        │ │  Notify user    │
│  Searchable     │ │                 │ │  Log reason     │
└────────┬────────┘ └────────┬────────┘ └────────┬────────┘
         │                   │                   │
         │                   ▼                   │
         │        ┌─────────────────────┐        │
         │        │  Human Review Queue │        │
         │        │  (Firestore)        │        │
         │        │  ┌────────────────┐ │        │
         │        │  │ - Prioritize   │ │        │
         │        │  │ - Assign       │ │        │
         │        │  │ - SLA tracking │ │        │
         │        │  └────────────────┘ │        │
         │        └──────────┬──────────┘        │
         │                   │                   │
         │                   ▼                   │
         │        ┌─────────────────────┐        │
         │        │  Moderator Portal   │        │
         │        │  (React App)        │        │
         │        │  ┌────────────────┐ │        │
         │        │  │ - View content │ │        │
         │        │  │ - ML explain   │ │        │
         │        │  │ - Approve/Deny │ │        │
         │        │  │ - Flag edge    │ │        │
         │        │  └────────────────┘ │        │
         │        └──────────┬──────────┘        │
         │                   │                   │
         └───────────────────┼───────────────────┘
                             │
                             ▼
              ┌─────────────────────────────┐
              │   Decision Logger           │
              │   (Pub/Sub → BigQuery)      │
              └──────────┬──────────────────┘
                         │
           ┌─────────────┴─────────────┐
           ▼                           ▼
┌──────────────────────┐     ┌──────────────────────┐
│   BigQuery           │     │   Monitoring         │
│   moderation_log     │     │   Dashboards         │
│   ┌────────────────┐ │     │   ┌────────────────┐ │
│   │ - Content ID   │ │     │   │ - Volume trend │ │
│   │ - Risk scores  │ │     │   │ - Precision    │ │
│   │ - Decision     │ │     │   │ - Latency P95  │ │
│   │ - Timestamp    │ │     │   │ - Queue depth  │ │
│   │ - ML version   │ │     │   │ - Appeal rate  │ │
│   │ - Moderator ID │ │     │   │ - Cost/item    │ │
│   └────────────────┘ │     │   └────────────────┘ │
└──────────────────────┘     └──────────────────────┘

                    FEEDBACK LOOPS
┌──────────────────────────────────────────────────────┐
│  Model Improvement Pipeline                          │
│  ┌────────────────────────────────────────────────┐  │
│  │ - Moderator decisions → Training data          │  │
│  │ - User appeals → Hard negative examples        │  │
│  │ - Weekly model retraining (AutoML)             │  │
│  │ - A/B testing new thresholds                   │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘

                    COMPLIANCE & AUDIT
┌──────────────────────────────────────────────────────┐
│  - COPPA: Age-gated content detection               │
│  - DMCA: Copyright claim integration                │
│  - CSAM: PhotoDNA hash matching (NCMEC)             │
│  - Export logs for legal requests                   │
└──────────────────────────────────────────────────────┘`}</pre>
        </div>
      </section>

      {/* Effort & Timeline */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Implementation Phases</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Complexity</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: MVP</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Image-only moderation (Vision API), simple risk scoring, auto-reject high-risk, basic logging to BigQuery</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Multi-Modal</td>
                <td className="py-3 px-4">5 weeks</td>
                <td className="py-3 px-4">Add video (Video Intelligence API) and text (Natural Language API), unified risk aggregation, human review queue</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Human-in-Loop</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Moderator portal dashboard, ML explainability (bounding boxes, labels), SLA tracking, appeal workflow</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-orange-500/15 text-orange-600 dark:text-orange-400 rounded text-xs">Medium-High</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Production Hardening</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">A/B testing thresholds, model retraining pipeline, compliance integrations (CSAM hashing), monitoring/alerting</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Dependencies */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Risks & Mitigation Strategies</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">High false positive rate causing user frustration and churn</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Conservative auto-reject threshold (80+), fast-track appeal process, transparent explanations to users, A/B test thresholds</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Missing harmful content (false negatives) leading to legal/brand risk</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs">High</span></td>
                <td className="py-3 px-4">Layered defenses (user reporting, red team testing, periodic manual audits), err on side of caution for CSAM/violence</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">ML API costs spiraling with upload volume growth</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Caching for duplicate content (hash-based), tiered analysis (cheap pre-filter before expensive APIs), volume discounts negotiation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Moderator burnout from exposure to harmful content</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">Rotation schedules, wellness support programs, blur/pixelate previews, session time limits, third-party vendor option</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Adversarial attacks bypassing detection (steganography, adversarial images)</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 rounded text-xs">Medium</span></td>
                <td className="py-3 px-4">User reputation scoring, rate limiting uploads, perceptual hashing, adversarial training examples in model updates</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Regulatory changes requiring model/policy updates (EU DSA, KOSA)</td>
                <td className="py-3 px-4"><span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs">Low</span></td>
                <td className="py-3 px-4">Configurable policy engine, versioned decision logs for auditability, legal review in roadmap planning</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Key Dependencies:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Trust & Safety Team:</strong> Define content policies, moderation guidelines, and acceptable risk thresholds</li>
            <li><strong className="text-foreground">Legal/Compliance:</strong> Approve moderation workflows for DMCA, COPPA, CSAM reporting requirements</li>
            <li><strong className="text-foreground">Product Team:</strong> User communication strategy for rejections and appeals to minimize friction</li>
            <li><strong className="text-foreground">Data Science:</strong> Validate risk scoring model, oversee A/B tests, and analyze false positive/negative rates</li>
            <li><strong className="text-foreground">Operations:</strong> Hire and train moderator team, establish review SLAs and escalation procedures</li>
            <li><strong className="text-foreground">Infrastructure:</strong> Cloud Run auto-scaling configuration to handle upload traffic spikes (10x during events)</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Professional Alignment for Senior TPM Role</h2>
        <div className="grid gap-4">
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Production ML Systems:</strong> Demonstrates end-to-end ML system design beyond model training - data pipelines, serving, monitoring
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Ethical AI Considerations:</strong> Balances automation with human oversight, addresses bias and fairness in moderation decisions
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Consumer Platform Expertise:</strong> Directly applicable to social media, messaging, dating apps, marketplaces requiring UGC moderation
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Operational Excellence:</strong> Showcases trade-offs between precision/recall, latency/cost, automation/human review
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Multi-Modal AI:</strong> Uses Vision, Video Intelligence, and Natural Language APIs - demonstrates breadth of ML knowledge
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
            <span className="text-green-500 text-lg">&#x2705;</span>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Risk Management:</strong> Critical for Trust & Safety roles at Mag7 companies where moderation failures have brand/legal consequences
            </span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/gemini/smart-customer-voice-dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
        >
          ← Previous: Customer Voice Dashboard
        </Link>
        <Link
          href="/nebula/capstone/gemini/rag-knowledge-bot"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
        >
          Next: RAG Knowledge Bot →
        </Link>
      </div>
    </div>
  );
}

export default function MultimediaContentSafetyPage() {
  return (
    <CapstoneLayout
      title="Multimedia Content Safety System - Gemini Projects"
      description="AI/ML TPM Capstone: Trust & Safety at Scale"
      currentLLM="gemini"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
