"use client";

/**
 * ChatGPT Project 3: Consumer AI Assistant Platform
 * AI/ML TPM focus - Consumer Product, Personalization, Privacy
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

function ProjectContent() {
  return (
    <div className="max-w-[900px] mx-auto">
      <Link
        href="/nebula/capstone/chatgpt"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to ChatGPT Projects
      </Link>

      <ProjectHeader
        title="Consumer AI Assistant Platform"
        tags={[
          { label: "Consumer AI", type: "consumer" },
          { label: "AI/ML TPM", type: "ai" },
          { label: "Product TPM", type: "enterprise" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The Consumer AI Assistant Platform is a multi-modal, personalized AI assistant designed for
            consumer-facing applications. It combines conversational AI, visual understanding, voice
            interaction, and contextual awareness to deliver intelligent assistance across mobile, web,
            and IoT devices while maintaining privacy-first architecture and real-time personalization.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">Product TPM and AI/ML capabilities</strong> by building a
            consumer-grade AI experience that scales to millions of users, balancing cutting-edge AI
            capabilities with strict latency requirements, privacy regulations, and user trust.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Problem Statement & Solution
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Generic AI assistants lack personalization - same experience for all users regardless of preferences, history, context</li>
            <li>Single-modal interactions (text only) limit use cases - users want voice, image, video understanding</li>
            <li>Privacy concerns: users hesitant to share personal data with cloud-based AI systems</li>
            <li>High latency (2-5 seconds) for responses unacceptable in consumer apps (target: &lt;500ms)</li>
            <li>No contextual continuity across devices (mobile → web → smart home)</li>
            <li>Inability to learn user preferences over time without explicit training</li>
          </ul>

          <p><strong className="text-foreground">Solution Architecture:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Multi-Modal AI:</strong> Gemini Pro Vision for text, image, video understanding; Speech-to-Text/Text-to-Speech for voice</li>
            <li><strong className="text-foreground">Personalization Engine:</strong> User embeddings learned from interaction history; Recommendations AI for proactive suggestions</li>
            <li><strong className="text-foreground">Privacy-First Design:</strong> On-device processing for sensitive data; federated learning; user-controlled data retention</li>
            <li><strong className="text-foreground">Context Management:</strong> Firebase Realtime Database for cross-device session continuity; conversation memory with 30-day window</li>
            <li><strong className="text-foreground">Low-Latency Serving:</strong> Edge-deployed models via Cloud Run; streaming responses; predictive pre-fetching</li>
            <li><strong className="text-foreground">Adaptive Learning:</strong> Continuous fine-tuning from user feedback (thumbs up/down, corrections, usage patterns)</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes & KPIs */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Expected Outcomes & KPIs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Response Latency (P95)</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;500ms</td>
                <td className="py-3 px-4">Time from user input to first response token</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">User Engagement</td>
                <td className="py-3 px-4 font-semibold text-primary">3+ interactions/day</td>
                <td className="py-3 px-4">Daily active users with multi-turn conversations</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Task Completion Rate</td>
                <td className="py-3 px-4 font-semibold text-primary">75%+</td>
                <td className="py-3 px-4">User completes intended action without abandonment</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Personalization Effectiveness</td>
                <td className="py-3 px-4 font-semibold text-primary">60%+ relevance</td>
                <td className="py-3 px-4">User satisfaction score for recommendations</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Multi-Modal Usage</td>
                <td className="py-3 px-4 font-semibold text-primary">40%+ image/voice</td>
                <td className="py-3 px-4">Queries using image upload or voice input</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Privacy Compliance</td>
                <td className="py-3 px-4 font-semibold text-primary">100% GDPR/CCPA</td>
                <td className="py-3 px-4">User data handling audit compliance</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Cross-Device Continuity</td>
                <td className="py-3 px-4 font-semibold text-primary">80%+ sessions</td>
                <td className="py-3 px-4">Users resuming conversations on different devices</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">User Retention (D7)</td>
                <td className="py-3 px-4 font-semibold text-primary">50%+</td>
                <td className="py-3 px-4">Users active 7 days after first interaction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: "AI/ML Models", items: ["Vertex AI", "Gemini Pro Vision", "PaLM 2", "Speech-to-Text", "Text-to-Speech"] },
            { title: "Personalization", items: ["Recommendations AI", "Vector Search", "AutoML"] },
            { title: "Backend Infrastructure", items: ["Cloud Run", "Cloud Functions", "Firebase", "Firestore"] },
            { title: "Real-Time Systems", items: ["Firebase Realtime DB", "Pub/Sub", "WebSockets"] },
            { title: "Mobile/Web SDKs", items: ["Firebase SDKs", "ML Kit", "TensorFlow Lite"] },
            { title: "Analytics & Monitoring", items: ["Firebase Analytics", "Cloud Monitoring", "BigQuery"] },
          ].map((category) => (
            <div key={category.title} className="p-4 bg-muted/30 rounded-lg">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {category.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          System Architecture
        </h2>
        <div className="bg-muted/30 p-4 rounded-lg overflow-x-auto">
          <MermaidDiagram
            chart={`%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e0e7ff', 'primaryTextColor': '#1e1b4b', 'primaryBorderColor': '#6366f1', 'lineColor': '#6366f1', 'secondaryColor': '#fef3c7', 'tertiaryColor': '#d1fae5' }}}%%
flowchart TB
    subgraph CLIENT["CLIENT LAYER"]
        direction LR
        iOS["iOS App<br/>(Swift/RN)"]
        Android["Android App<br/>(Kotlin/RN)"]
        Web["Web App<br/>(React)"]
        Smart["Smart Home<br/>(IoT SDK)"]
    end

    subgraph AUTH["AUTHENTICATION"]
        Firebase["Firebase Auth<br/>+ Identity Platform<br/><i>OAuth, Social, Email</i>"]
    end

    subgraph SERVICES["PROCESSING SERVICES (Cloud Run)"]
        direction LR
        Conv["CONVERSATION<br/>ORCHESTRATOR<br/>Intent routing<br/>Context mgmt<br/>Session state"]
        Modal["MULTI-MODAL<br/>PROCESSOR<br/>Text, Image/Video<br/>Voice (audio)"]
        Person["PERSONALIZATION<br/>ENGINE<br/>Demographics<br/>Preferences<br/>Embeddings"]
    end

    subgraph AI["AI MODEL LAYER (Vertex AI)"]
        direction LR
        Gemini["GEMINI PRO VISION<br/>Image Q&A<br/>Visual search<br/>Scene detect<br/><i>Latency: 300ms</i>"]
        Palm["PALM 2 (Text)<br/>Chat<br/>Summarization<br/>Translation<br/><i>Streaming mode</i>"]
        Custom["CUSTOM MODELS<br/>Sentiment<br/>Intent class.<br/>Entity NER"]
    end

    subgraph DATA["DATA LAYER"]
        FirebaseDB["Firebase Services<br/>Realtime Database<br/>Firestore<br/>Cloud Storage"]
        BigQuery["BigQuery + ML<br/>Analytics<br/>Recommendations<br/>User embeddings"]
    end

    subgraph PRIVACY["PRIVACY & COMPLIANCE"]
        Compliance["User consent mgmt<br/>Data retention<br/>PII redaction<br/>Right to deletion<br/>On-device processing"]
    end

    iOS --> Firebase
    Android --> Firebase
    Web --> Firebase
    Smart --> Firebase
    Firebase --> Conv
    Firebase --> Modal
    Firebase --> Person
    Conv --> Gemini
    Conv --> Palm
    Conv --> Custom
    Modal --> Gemini
    Modal --> Palm
    Person --> Custom
    Gemini --> FirebaseDB
    Palm --> FirebaseDB
    Custom --> FirebaseDB
    FirebaseDB --> BigQuery
    BigQuery --> Compliance

    style CLIENT fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style AUTH fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style SERVICES fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style AI fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style DATA fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style PRIVACY fill:#fee2e2,stroke:#ef4444,stroke-width:2px
`}
            className="min-h-[400px]"
          />
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Implementation Phases
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Key Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Success Criteria</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: MVP</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Text-only chat, basic conversation management, Firebase backend</td>
                <td className="py-3 px-4">500ms P95 latency, 70% task completion</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Multi-Modal</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Image understanding, voice input/output, visual search</td>
                <td className="py-3 px-4">30% of queries use image/voice</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Personalization</td>
                <td className="py-3 px-4">7 weeks</td>
                <td className="py-3 px-4">User profiles, recommendation engine, adaptive responses</td>
                <td className="py-3 px-4">60% relevance score for recommendations</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Cross-Device</td>
                <td className="py-3 px-4">5 weeks</td>
                <td className="py-3 px-4">Session sync across devices, context continuity, smart home integration</td>
                <td className="py-3 px-4">80% cross-device session resumption</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Scale & Privacy</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Privacy controls, GDPR compliance, performance optimization, launch</td>
                <td className="py-3 px-4">1M+ users, 50% D7 retention</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Mitigation */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Risks & Mitigation Strategies
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Severity</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">User privacy concerns limit data collection for personalization</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">On-device learning where possible; transparent consent UX; federated learning for aggregated insights</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Response latency exceeds 500ms target under load</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">Edge deployment in multi-region Cloud Run; streaming responses; predictive caching; smaller models for common queries</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Low user engagement after initial novelty wears off</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Proactive assistance triggers; personalized daily summaries; gamification; continuous feature updates</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Personalization creates "filter bubble" effect</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Diversity-aware recommendations; serendipity injection (10% random); user control over personalization level</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Model hallucinations damage user trust</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Confidence scoring; &quot;I don&apos;t know&quot; responses; fact verification for critical domains; user feedback loops</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">GDPR/CCPA compliance complexity across regions</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">Low</span>
                </td>
                <td className="py-3 px-4">Data residency controls; automated compliance checks; legal review; privacy-by-design architecture</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Product Design for UX/UI across mobile, web, IoT devices</li>
            <li>ML Research for model selection, fine-tuning, and optimization</li>
            <li>Legal/Privacy for GDPR/CCPA compliance and user consent flows</li>
            <li>Mobile Engineering for iOS/Android SDK integration</li>
            <li>Data Science for recommendation algorithms and personalization models</li>
            <li>Firebase team for backend infrastructure scaling and quotas</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Alignment with TPM Career Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { text: "Consumer Product Experience: Ship AI-powered features to millions of end users" },
            { text: "Multi-Modal AI: Beyond text - vision, voice, and conversational AI integration" },
            { text: "Real-Time Systems: Sub-500ms latency requirements with streaming responses" },
            { text: "Privacy & Compliance: Navigate GDPR/CCPA while delivering personalized experiences" },
            { text: "Product Metrics: Engagement, retention, task completion - classic product TPM KPIs" },
            { text: "Mobile-First Architecture: Firebase, Cloud Run, ML Kit - modern consumer stack" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <span className="text-green-500 flex-shrink-0">✅</span>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{item.text.split(":")[0]}:</strong>
                {item.text.split(":").slice(1).join(":")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/chatgpt/ai-cost-intelligence"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Previous: AI Cost Intelligence
        </Link>
        <Link
          href="/nebula/capstone/chatgpt/program-governance-hub"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Governance Hub →
        </Link>
      </div>
    </div>
  );
}

export default function ConsumerAIAssistantPage() {
  return (
    <CapstoneLayout
      title="Consumer AI Assistant Platform"
      description="ChatGPT Project 3: Multi-modal AI assistant with personalization and privacy"
      currentProjectId="chatgpt/consumer-ai-assistant"
      currentLLM="chatgpt"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
