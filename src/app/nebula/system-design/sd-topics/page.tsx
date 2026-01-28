"use client";

/**
 * SD Topics - Comprehensive System Design Topics Reference
 * Principal TPM interview preparation covering core knowledge, canonical designs,
 * advanced topics, and 2026-relevant implementations
 */

import Link from "next/link";
import {
  SystemDesignLayout,
  getSystemDesignNavigation,
} from "@/components/SystemDesignLayout";
import {
  Subsection,
  BulletItem,
} from "@/components/DeepDiveComponents";

export default function SDTopicsPage() {
  const nav = getSystemDesignNavigation("sd-topics");

  return (
    <SystemDesignLayout
      title="SD Topics"
      description="Comprehensive System Design Topics for Principal TPM Interviews"
      currentSection="sd-topics"
    >
      <Link
        href="/nebula/system-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-xl border border-indigo-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          8
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">SD Topics</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive system design topics organized for Principal TPM interview preparation.
          Four sections covering core technical knowledge, canonical architectures, advanced 2026 topics, and high-complexity implementations.
        </p>
      </div>

      {/* Section 1: Core Technical Knowledge */}
      <h2 className="text-xl font-bold text-foreground mb-4 mt-8">
        1. Core Technical Knowledge (Principal TPM Bar)
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        These are the foundations you must synthesize into cross-org, P&amp;L-impacting decisions.
      </p>

      <Subsection title="1.1 Distributed Architecture & Scaling" color="blue">
        <ul className="space-y-1">
          <BulletItem title="CAP Theorem vs. BASE">
            Understanding the practical trade-offs between consistency and availability in Mag7-scale systems.
          </BulletItem>
          <BulletItem title="Database Sharding & Partitioning">
            Mastery of vertical vs. horizontal partitioning, and range-based vs. hash-based sharding.
          </BulletItem>
          <BulletItem title="Replication & Consistency">
            Synchronous vs. asynchronous replication trade-offs and their impact on latency vs. consistency.
          </BulletItem>
          <BulletItem title="Load Balancing">
            Deep understanding of Layer 4 vs. Layer 7 routing and health monitoring strategies.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="1.2 Data Consistency & Integrity" color="blue">
        <ul className="space-y-1">
          <BulletItem title="ACID vs. Eventual Consistency">
            Managing transaction integrity in distributed environments.
          </BulletItem>
          <BulletItem title="↓ Optimistic vs. Pessimistic Locking">
            Strategies for handling high-concurrency resource contention.
          </BulletItem>
          <BulletItem title="Idempotency">
            Designing safe retry mechanisms for payment and order systems.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="1.3 Communication & API Design" color="blue">
        <ul className="space-y-1">
          <BulletItem title="API Protocols">
            Deconstructing REST, gRPC, and GraphQL for specific use cases (e.g., over-fetching vs. performance).
          </BulletItem>
          <BulletItem title="Messaging Patterns">
            Implementing Pub-Sub, Message Queues (Kafka), and Change Data Capture (CDC).
          </BulletItem>
          <BulletItem title="↓ Event Sourcing & CQRS">
            Decoupling read and write paths to optimize performance and auditability.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="1.4 Performance, Resilience & Security" color="blue">
        <ul className="space-y-1">
          <BulletItem title="Caching Strategy">
            Mitigating Thunder Herd, Cache Penetration, and Breakdown; cache-aside vs. write-through.
          </BulletItem>
          <BulletItem title="Disaster Recovery (DR)">
            Benchmarking RTO/RPO and selecting between Pilot Light, Warm Standby, and Multi-site strategies.
          </BulletItem>
          <BulletItem title="Security Infrastructure">
            OAuth 2.0, JWTs, SSO flows, and HMAC-based authentication.
          </BulletItem>
        </ul>
      </Subsection>

      {/* Section 2: Canonical System Designs */}
      <h2 className="text-xl font-bold text-foreground mb-4 mt-10">
        2. Canonical System Designs (Classic Mag7 Scale)
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        These are the reference architectures you should be able to deconstruct and reason about in depth.
      </p>

      <Subsection title="2.1 Social & Real-Time Interaction" color="purple">
        <ul className="space-y-1">
          <BulletItem title="↓ Twitter/X (Feed Generation)">
            High-fanout write paths and the timeline cache architecture.
          </BulletItem>
          <BulletItem title="Google Docs (Collaboration)">
            Real-time conflict resolution using Operational Transformation (OT) or CRDTs.
          </BulletItem>
          <BulletItem title="↓ Discord (Message Persistence)">
            Evolution of storage to handle trillions of messages with low latency.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.2 Content & Media Delivery" color="purple">
        <ul className="space-y-1">
          <BulletItem title="YouTube/TikTok (Live Streaming)">
            Video ingestion, transcoding pipelines, and global CDN distribution.
          </BulletItem>
          <BulletItem title="↓ Netflix (Edge & Cache)">
            Evolution from monoliths to GraphQL Federation and the use of EVCache for high availability.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.3 Commerce, Search & Notifications" color="purple">
        <ul className="space-y-1">
          <BulletItem title="↓ Search Engines (Google/Bing)">
            Crawling at scale, deduplication with Bloom filters, and indexing.
          </BulletItem>
          <BulletItem title="Payment Systems (Visa/Stripe)">
            Managing foreign exchange, reconciliation, and avoiding double-charging.
          </BulletItem>
          <BulletItem title="Notification Systems (Slack/FCM)">
            Managing device tokens, channel preferences, and priority delivery.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.4 High-Intensity Platform & Specialized Workloads" color="purple">
        <ul className="space-y-1">
          <BulletItem title="↓ Flash Sale Systems">
            Handling massive traffic spikes with high consistency and low latency.
          </BulletItem>
          <BulletItem title="↓ Stock Exchanges">
            Designing for microsecond latency with order matching engines.
          </BulletItem>
          <BulletItem title="↓ Serverless (AWS Lambda)">
            Understanding the &quot;behind the scenes&quot; isolation and execution models.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.5 ML Platform & Experimentation" color="purple">
        <ul className="space-y-1">
          <BulletItem title="ML/AI Platform Lifecycle">
            Model serving, training pipelines, A/B experimentation infrastructure, feature stores. This is non-negotiable in 2026.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.6 Data Pipeline Architecture" color="purple">
        <ul className="space-y-1">
          <BulletItem title="Data Platform / Analytics Pipeline">
            Batch + streaming architectures, data quality, lineage. Every Mag7 TPM touches this.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.7 Multi-Region DR & Resilience" color="purple">
        <ul className="space-y-1">
          <BulletItem title="Multi-Region Disaster Recovery">
            Failover orchestration, RTO/RPO trade-offs, chaos engineering coordination.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.8 Identity/Auth Systems" color="purple">
        <ul className="space-y-1">
          <BulletItem title="Identity & Access Management at Scale">
            Auth flows, zero-trust architecture, compliance (SOC2, GDPR). You will own cross-cutting programs here.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.9 API Platform Management" color="purple">
        <ul className="space-y-1">
          <BulletItem title="API Platform / Developer Experience">
            Versioning, deprecation, rate limiting, partner onboarding. TPMs frequently own these programs.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="2.10 Vendor & Partner Program Management" color="purple">
        <ul className="space-y-1">
          <BulletItem title="Vendor & Partner Program Management">
            Contract negotiations, SLA enforcement, multi-vendor orchestration, external dependency risk management. At Principal level, you will own programs with critical external dependencies.
          </BulletItem>
        </ul>
      </Subsection>

      {/* Section 3: Advanced Technical Topics (2026 Context) */}
      <h2 className="text-xl font-bold text-foreground mb-4 mt-10">
        3. Advanced Technical Topics (2026 Context)
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        These reflect the 2026 shift toward GenAI infra, FinOps, and planetary-scale reliability.
      </p>

      <Subsection title="3.1 Generative AI Infrastructure (LLMOps)" color="green">
        <ul className="space-y-1">
          <BulletItem title="Vector Databases & Retrieval">
            Architecture of RAG pipelines, handling high-dimensional vector embeddings, and semantic caching.
            <p className="text-xs italic text-muted-foreground mt-1">TPM Lens: Focus on build vs. buy trade-offs, vendor selection, latency SLAs—not embedding architecture.</p>
          </BulletItem>
          <BulletItem title="Inference Orchestration">
            Trade-offs in ↓ model quantization, ↓ speculative decoding, and GPU vs. TPU resource allocation for cost-efficient scaling.
            <p className="text-xs italic text-muted-foreground mt-1">TPM Lens: Focus on cost modeling, capacity planning, vendor negotiation leverage—not GPU/TPU allocation details.</p>
          </BulletItem>
          <BulletItem title="Evaluation Frameworks">
            Designing &quot;LLM-as-a-judge&quot; systems and guardrails for hallucination detection at the platform level.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="3.2 FinOps & Sustainability (P&L Impact)" color="green">
        <ul className="space-y-1">
          <BulletItem title="Cloud Cost Optimization">
            Managing &quot;carbon-aware&quot; computing and unit-economics of microservices (cost-per-request).
          </BulletItem>
          <BulletItem title="Spot Instance Orchestration">
            Designing for high availability on preemptible/spot hardware to drive down COGS.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="3.3 Data Sovereignty & Privacy Engineering" color="green">
        <ul className="space-y-1">
          <BulletItem title="↓ Differential Privacy">
            Implementing noise-injection at the data collection layer for Mag7-scale analytics.
          </BulletItem>
          <BulletItem title="Zero-Trust Architecture">
            Moving beyond VPNs to identity-aware proxies and micro-segmentation for internal service-to-service communication.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="3.4 Edge Intelligence" color="green">
        <ul className="space-y-1">
          <BulletItem title="On-Device AI">
            Partitioning workloads between the cloud and the edge (mobile/IoT) to reduce latency and egress costs.
          </BulletItem>
          <BulletItem title="↓ WebAssembly (Wasm)">
            Using Wasm for high-performance server-side extensions and sandboxing.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="3.5 AI-Driven Developer & Ops Tooling" color="green">
        <ul className="space-y-1">
          <BulletItem title="AI-assisted Incident Management">
            LLM-powered diagnosis, auto-runbooks, and remediation suggestions for RCA.
          </BulletItem>
          <BulletItem title="AI-enhanced Developer Workflows">
            Code review assistance, test generation, and impact analysis integrated into CI/CD.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="3.6 Modern Data & Streaming Architectures" color="green">
        <ul className="space-y-1">
          <BulletItem title="Unified Batch + Streaming">
            Lambda vs. Kappa-style architectures for analytics and real-time personalization.
          </BulletItem>
          <BulletItem title="High-throughput Event Streaming">
            Exactly-once semantics and backpressure management at planetary scale.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="3.7 AI Product Integration Patterns" color="green">
        <ul className="space-y-1">
          <BulletItem title="AI Copilots/Assistants">
            End-to-end design with telemetry loops, feedback labeling, and continuous model updates.
          </BulletItem>
          <BulletItem title="RAG vs. Fine-tuning vs. SLMs">
            Trade-offs for latency, cost, and privacy in enterprise contexts.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="3.8 Advanced Governance, Risk & Compliance" color="green">
        <ul className="space-y-1">
          <BulletItem title="AI Safety & Governance">
            Red-teaming, policy engines, audit trails for AI decisions wired into production pipelines.
          </BulletItem>
          <BulletItem title="Regulatory-aware Architecture">
            Data residency, GDPR/CCPA/AI Act compliance, and automated policy enforcement across regions.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="3.9 Organizational & Portfolio-Level Topics" color="green">
        <ul className="space-y-1">
          <BulletItem title="Portfolio-level Risk Management">
            Orchestrating multi-quarter platform bets, sunset/migration plans, and de-risking via phased rollouts and feature flags.
          </BulletItem>
          <BulletItem title="Platform Leverage Metrics">
            Frameworks for internal NPS, adoption curves, and ARR unlocked via shared platforms/tools.
          </BulletItem>
        </ul>
      </Subsection>

      {/* Section 4: Modern High-Complexity Implementations */}
      <h2 className="text-xl font-bold text-foreground mb-4 mt-10">
        4. Modern High-Complexity Implementations
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        These are the 2026 &quot;big rock&quot; designs that show Principal-level thinking.
      </p>

      <Subsection title="4.1 AI/ML Systems" color="amber">
        <ul className="space-y-1">
          <BulletItem title="Enterprise GenAI Gateway">
            A centralized proxy for multiple LLM providers handling rate-limiting, PII masking, cost tracking, and model fallback.
          </BulletItem>
          <BulletItem title="↓ Real-time Feature Stores">
            Architecture of systems like Tecton or Feast that feed sub-millisecond data into ML models for fraud detection or ranking.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="4.2 Global Infrastructure & Resilience" color="amber">
        <ul className="space-y-1">
          <BulletItem title="Multi-Cloud / Multi-Region Control Planes">
            Designing a &quot;Global Traffic Director&quot; that can evacuate an entire cloud region in under 5 minutes without data loss.
          </BulletItem>
          <BulletItem title="↓ Planetary-Scale Databases">
            Internals of Google Spanner (↓ TrueTime internals) or Amazon Aurora Global and how they push on classic CAP limits.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="4.3 Platform & Developer Productivity" color="amber">
        <ul className="space-y-1">
          <BulletItem title="Internal Developer Platforms (IDP)">
            Designing &quot;Golden Paths&quot; to automate CI/CD, security scanning, and infrastructure provisioning for 10,000+ engineers.
          </BulletItem>
          <BulletItem title="Observability 2.0">
            High-cardinality distributed tracing and automated root-cause analysis using AIOps.
            <p className="text-xs italic text-muted-foreground mt-1">TPM Lens: Focus on incident escalation, MTTR reduction programs, tooling adoption metrics—not high-cardinality tracing internals.</p>
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="4.4 Safety, Compliance & Ad-Tech" color="amber">
        <ul className="space-y-1">
          <BulletItem title="Content Moderation Pipelines">
            Real-time multi-modal (text/image/video) safety filtering using a hybrid of heuristics and ML models.
            <p className="text-xs italic text-muted-foreground mt-1">TPM Lens: Focus on policy escalation workflows, false-positive UX impact, cross-functional stakeholder management—not hybrid ML implementation.</p>
          </BulletItem>
          <BulletItem title="↓ Ad-Tech Bidding Engines">
            Designing for 10 ms response times while processing petabytes of telemetry for real-time auctioning.
          </BulletItem>
        </ul>
      </Subsection>

      {/* Bottom Navigation */}
      <div className="mt-12 pt-6 border-t border-border">
        <div className="flex justify-between items-center">
          {nav.prev && (
            <Link
              href={nav.prev.path}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span>←</span>
              <span className="text-sm">{nav.prev.title}</span>
            </Link>
          )}
          {!nav.prev && <div />}
          {nav.next && (
            <Link
              href={nav.next.path}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">{nav.next.title}</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </div>
    </SystemDesignLayout>
  );
}
