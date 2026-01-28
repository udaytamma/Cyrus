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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Google (Vertex AI / internal Borg-based ML platform)</span> — End-to-end ML lifecycle: feature stores (Feast lineage), TFX-style pipelines, large-scale A/B experimentation, and integrated observability across training and serving.</li>
            <li><span className="font-medium text-foreground">Meta (FBLearner Flow)</span> — Industry benchmark for experiment velocity and large-scale personalization, with deep integration of feature stores, online/offline consistency, and auto-experimentation frameworks across products.</li>
          </ul>
        </div>
      </Subsection>

      <Subsection title="2.6 Data Pipeline Architecture" color="purple">
        <ul className="space-y-1">
          <BulletItem title="Data Platform / Analytics Pipeline">
            Batch + streaming architectures, data quality, lineage. Every Mag7 TPM touches this.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Netflix</span> — Pioneered large-scale batch + streaming data platforms (Kafka-based pipelines, real-time personalization, data quality/lineage baked into their data mesh).</li>
            <li><span className="font-medium text-foreground">Uber</span> — Robust real-time analytics and event-driven architecture with strong lineage, data quality frameworks, and both batch and streaming for pricing, ETA, and fraud.</li>
          </ul>
        </div>
      </Subsection>

      <Subsection title="2.7 Multi-Region DR & Resilience" color="purple">
        <ul className="space-y-1">
          <BulletItem title="Multi-Region Disaster Recovery">
            Failover orchestration, RTO/RPO trade-offs, chaos engineering coordination.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Amazon (AWS + Amazon.com)</span> — Multi-region architectures with orchestrated DR, tight RTO/RPO targets, and formalized chaos practices (Fault Injection Simulator, Application Recovery Controller).</li>
            <li><span className="font-medium text-foreground">Netflix</span> — Early adopters of chaos engineering (Chaos Monkey, Chaos Kong) and highly resilient multi-region, active-active architectures for streaming.</li>
          </ul>
        </div>
      </Subsection>

      <Subsection title="2.8 Identity/Auth Systems" color="purple">
        <ul className="space-y-1">
          <BulletItem title="Identity & Access Management at Scale">
            Auth flows, zero-trust architecture, compliance (SOC2, GDPR). You will own cross-cutting programs here.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Okta</span> — Market leader in cloud IAM and Zero Trust, with large-scale SSO, lifecycle management, and strong compliance (SOC2, GDPR) for thousands of enterprises.</li>
            <li><span className="font-medium text-foreground">Microsoft (Entra ID / Azure AD)</span> — Powers identity for Microsoft 365 and Azure; massive-scale enterprise and consumer auth, conditional access, zero-trust posture across hybrid and multi-cloud.</li>
          </ul>
        </div>
      </Subsection>

      <Subsection title="2.9 API Platform Management" color="purple">
        <ul className="space-y-1">
          <BulletItem title="API Platform / Developer Experience">
            Versioning, deprecation, rate limiting, partner onboarding. TPMs frequently own these programs.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Stripe</span> — Gold standard for external API platforms: clean versioning, strong backwards compatibility, rate limiting, webhooks, excellent DX, and disciplined deprecation policies.</li>
            <li><span className="font-medium text-foreground">Twilio</span> — High-scale API platform for communications with robust developer experience, partner onboarding, and global rate-limiting controls.</li>
          </ul>
        </div>
      </Subsection>

      <Subsection title="2.10 Vendor & Partner Program Management" color="purple">
        <ul className="space-y-1">
          <BulletItem title="Vendor & Partner Program Management">
            Contract negotiations, SLA enforcement, multi-vendor orchestration, external dependency risk management. At Principal level, you will own programs with critical external dependencies.
          </BulletItem>
        </ul>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Amazon (Retail + AWS Marketplace)</span> — Huge ecosystems of third-party sellers and software vendors, with rigorous SLAs, multi-vendor orchestration, and structured external dependency risk management.</li>
            <li><span className="font-medium text-foreground">Shopify</span> — Dense partner and app ecosystem with clear SLAs, app review, contract frameworks, and deep integration patterns for thousands of external vendors.</li>
          </ul>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Vector Databases & RAG / GenAI Gateway</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Microsoft (Azure AI Search + RAG)</span> — Enterprise-grade RAG with integrated vector search, RBAC, PII controls, and compliance-first design for regulated workloads.</li>
                <li><span className="font-medium text-foreground">Pinecone</span> — Widely used managed vector DB in production RAG systems; strong story on reliability, recall, and latency SLAs at enterprise scale.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Inference Orchestration</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">OpenAI / Azure OpenAI</span> — Global-scale inference with routing, model versions, and cost/performance SKUs that force real trade-offs in latency and unit economics.</li>
                <li><span className="font-medium text-foreground">AWS (Bedrock + multi-provider gateway)</span> — Reference multi-provider gateway with cost-aware model selection and centralized governance.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Evaluation & Guardrails (&quot;LLM-as-a-judge&quot;)</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Anthropic / OpenAI</span> — Leaders in using models to evaluate models (constitutional AI, LLM-as-judge patterns) and platform-level safety controls.</li>
              </ul>
            </div>
          </div>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Microsoft Azure</span> — Azure Carbon Optimization plus cost and carbon data in one view; ties FinOps directly to sustainability and unit economics.</li>
            <li><span className="font-medium text-foreground">Google Cloud</span> — Carbon Footprint integrated with spend data; aligns cost optimization with emissions reduction at scale.</li>
            <li><span className="font-medium text-foreground">AWS + Flexera</span> — Long history of spot fleets and savings plans plus third-party FinOps tools for automated optimization.</li>
          </ul>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Data Sovereignty & Privacy</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Apple</span> — Strong privacy-by-design posture (on-device processing, minimal data collection) used as a reference standard for consumer privacy.</li>
                <li><span className="font-medium text-foreground">Microsoft / Google Cloud</span> — Clear data residency controls, regionalization, and compliance tooling (GDPR/CCPA) across multi-region cloud deployments.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Zero Trust</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Google (BeyondCorp)</span> — Canonical zero-trust reference; identity-aware proxies and micro-segmentation at Google scale.</li>
                <li><span className="font-medium text-foreground">Zscaler</span> — Often cited for enterprise zero-trust rollouts and policy-driven access.</li>
              </ul>
            </div>
          </div>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">On-Device AI</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Apple</span> — On-device AI (Neural Engine, Private Relay-style thinking) for latency and privacy-sensitive workloads.</li>
                <li><span className="font-medium text-foreground">Tesla / automotive OEMs</span> — Heavy use of on-device inference with periodic cloud sync for autonomy and driver-assist features.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">WebAssembly (Wasm)</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Fastly / Cloudflare Workers</span> — Using Wasm for safe, high-performance edge extensions at global scale.</li>
              </ul>
            </div>
          </div>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">GitHub (Copilot)</span> — Flagship example of AI in the dev loop: code suggestions, test generation, and impact on velocity.</li>
            <li><span className="font-medium text-foreground">Datadog / New Relic</span> — Moving toward AI-assisted incident triage and RCA, applying LLMs over traces/logs to shorten MTTR.</li>
          </ul>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Netflix</span> — Early and loud on Lambda/Kappa-style architectures, heavy Kafka use, and real-time personalization at scale.</li>
            <li><span className="font-medium text-foreground">Uber</span> — High-throughput event streaming, exactly-once semantics, and backpressure handling in production for rides, eats, and fraud.</li>
          </ul>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">AI Copilots/Assistants</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Microsoft (M365 Copilot)</span> — Clean &quot;AI assistant layered onto existing suite&quot; story with telemetry loops, feedback labeling, and continuous model updates.</li>
                <li><span className="font-medium text-foreground">Salesforce (Einstein)</span> — Deep integration of AI into core CRM flows with clear ROI metrics and enterprise-grade feedback/control loops.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">RAG vs. Fine-tuning vs. SLMs</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">AI21 / OpenAI</span> — Public narratives on when to use retrieval, fine-tuning, or smaller models for cost/latency/privacy trade-offs.</li>
              </ul>
            </div>
          </div>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Microsoft / Google / OpenAI</span> — Publicly documented AI governance frameworks, red teaming practices, and alignment with NIST / EU AI Act expectations.</li>
            <li><span className="font-medium text-foreground">Specialized AI red-teaming firms</span> — Show how enterprises outsource/augment adversarial testing and compliance checks (backed by Big Tech partnerships).</li>
          </ul>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-foreground">Amazon</span> — Clear example of multi-year platform bets, feature flags, phased migrations, and ruthless portfolio pruning.</li>
            <li><span className="font-medium text-foreground">Spotify / Netflix</span> — Good stories around platform leverage, internal NPS, and tracking adoption curves for shared tooling (Backstage, experimentation, observability).</li>
          </ul>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Enterprise GenAI Gateway</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">AWS (Multi-Provider GenAI Gateway)</span> — Reference architecture using Bedrock, SageMaker, and LiteLLM to centralize access to multiple LLM providers with rate limiting, cost tracking, and centralized security/observability.</li>
                <li><span className="font-medium text-foreground">Grab</span> — Built an internal multi-provider AI gateway to securely access OpenAI, Azure, Bedrock, and Vertex with centralized governance and scaling.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Real-time Feature Stores</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Uber (Michelangelo)</span> — Canonical example for real-time features powering ETA, pricing, and fraud models at sub-second scale.</li>
                <li><span className="font-medium text-foreground">Tecton</span> — Commercialization of the Uber model; widely referenced as the blueprint for real-time feature stores in fraud/ranking use cases.</li>
              </ul>
            </div>
          </div>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Multi-Cloud / Multi-Region Control Planes</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Netflix</span> — Multi-region active-active, sophisticated traffic steering, and region evacuation patterns widely used as exemplars of &quot;global traffic director&quot; designs.</li>
                <li><span className="font-medium text-foreground">Amazon (AWS)</span> — Control-plane patterns for global services (Route 53, Global Accelerator, ARC) plus DR guidance on orchestrated regional failover.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Planetary-Scale Databases</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Google Spanner</span> — Poster child for globally distributed, externally consistent SQL with TrueTime, automatic sharding, and global replication.</li>
                <li><span className="font-medium text-foreground">Amazon Aurora Global Database</span> — MySQL/Postgres-compatible, multi-region read replicas and cross-region failover with low RPO/RTO.</li>
              </ul>
            </div>
          </div>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Internal Developer Platforms / Golden Paths</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Spotify (Backstage)</span> — Origin company for Backstage; widely cited for opinionated golden paths and strong internal service catalog developer experience.</li>
                <li><span className="font-medium text-foreground">Large fintech / retail case studies</span> — Documented examples where IDPs and golden paths cut service onboarding from weeks to hours and dropped incidents by ~40%.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Observability 2.0 (TPM Lens: MTTR, Adoption, Escalations)</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Uber</span> — Heavy user of high-cardinality tracing and metrics; public talks emphasize using observability to drive incident reduction and faster MTTR.</li>
                <li><span className="font-medium text-foreground">Netflix</span> — Uses advanced telemetry (tracing + chaos) to iteratively reduce blast radius and mean time to recovery across hundreds of microservices.</li>
              </ul>
            </div>
          </div>
        </div>
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
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-2">Standout Implementations:</p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Content Moderation Pipelines</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Meta (Facebook/Instagram)</span> — Industry benchmark for real-time multi-modal moderation with policy workflows, appeals processes, and high-scale safety operations.</li>
                <li><span className="font-medium text-foreground">YouTube (Google)</span> — Large-scale video moderation pipeline with hybrid ML + policy teams, regional policy nuance, and strong compliance posture.</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-1">Ad-Tech Bidding Engines</p>
              <ul className="space-y-2">
                <li><span className="font-medium text-foreground">Google Ads</span> — Canonical real-time auction engine operating at petabyte-scale telemetry with very tight latency budgets.</li>
                <li><span className="font-medium text-foreground">The Trade Desk</span> — Independent DSP known for low-latency bidding infrastructure and massive-scale RTB pipelines.</li>
              </ul>
            </div>
          </div>
        </div>
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
