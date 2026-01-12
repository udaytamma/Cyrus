"use client";

/**
 * Section 3: System Architecture
 * Expanded with architecture diagrams, component decisions, and interview responses
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsArchitecture() {
  const nav = getTeleOpsNavigation("architecture");

  return (
    <TeleOpsThinkingLayout
      title="System Architecture - TeleOps"
      description="Why the monolith + plane separation was chosen"
      currentSection="architecture"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl border border-yellow-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          3
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">System Architecture</h1>
        <p className="text-muted-foreground">
          Define planes to keep complexity manageable and refactor paths clear.
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
            The architecture question for TeleOps was:{" "}
            <strong className="text-foreground">
              How do we ship fast (solo contributor, time-boxed) while keeping future scale paths open?
            </strong>
          </p>
          <p>
            The answer: a <strong className="text-foreground">monolith with plane separation</strong>.
            This is not microservices (too much integration overhead) nor a tangled monolith (impossible to
            refactor). It is a structured monolith where each plane has clear responsibilities and interfaces.
          </p>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Architecture Overview
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────┐
│                    PRESENTATION PLANE                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │  Streamlit  │  │   Demo UI   │  │   Evaluation Dashboard  │ │
│  │   Console   │  │             │  │                         │ │
│  └──────┬──────┘  └──────┬──────┘  └───────────┬─────────────┘ │
└─────────┼────────────────┼─────────────────────┼───────────────┘
          │                │                     │
          ▼                ▼                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CONTROL PLANE                              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    FastAPI Router                        │   │
│  │  /generate → /correlate → /rca → /evaluate              │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
          │                │                     │
          ▼                ▼                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DATA PLANE                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │  Synthetic  │  │   Incident  │  │      SQLite/ORM         │ │
│  │  Generator  │  │  Correlator │  │   (Alerts, Incidents)   │ │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
          │                │                     │
          ▼                ▼                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                         AI PLANE                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │   RAG       │  │   LLM       │  │   Baseline RCA          │ │
│  │   Index     │  │   Adapter   │  │   (Fallback)            │ │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘`}
        </div>
      </div>

      {/* Plane Responsibilities */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/5 to-transparent rounded-xl border border-amber-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Plane Responsibilities
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Plane</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Responsibility</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Components</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Why Separate?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">Presentation</td>
                <td className="py-2 px-3">User interaction, visualization</td>
                <td className="py-2 px-3">Streamlit UI, dashboards</td>
                <td className="py-2 px-3">Can swap UI frameworks without touching business logic</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">Control</td>
                <td className="py-2 px-3">API routing, orchestration</td>
                <td className="py-2 px-3">FastAPI router, request handling</td>
                <td className="py-2 px-3">Clean API surface for external integration</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">Data</td>
                <td className="py-2 px-3">Data generation, storage, correlation</td>
                <td className="py-2 px-3">Generator, correlator, SQLite</td>
                <td className="py-2 px-3">Database can migrate to Postgres without AI changes</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-primary">AI</td>
                <td className="py-2 px-3">ML inference, RAG, RCA generation</td>
                <td className="py-2 px-3">RAG index, LLM adapter, baseline</td>
                <td className="py-2 px-3">LLM can swap (Gemini→GPT) without data layer changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Component Decisions */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Component Decisions and Rationale
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 font-semibold text-foreground">Component</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Choice</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Why This?</th>
                <th className="text-left py-2 px-3 font-semibold text-foreground">Alternative Rejected</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Framework</td>
                <td className="py-2 px-3 text-primary">FastAPI</td>
                <td className="py-2 px-3">Async support, auto-OpenAPI docs, type hints, fast iteration</td>
                <td className="py-2 px-3">Flask (no async), Django (too heavy for demo)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Database</td>
                <td className="py-2 px-3 text-primary">SQLite + SQLAlchemy</td>
                <td className="py-2 px-3">Zero setup, file-based, ORM abstracts migration path</td>
                <td className="py-2 px-3">Postgres (setup friction), raw SQL (not portable)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">UI</td>
                <td className="py-2 px-3 text-primary">Streamlit</td>
                <td className="py-2 px-3">Python-native, fast iteration, data visualization built-in</td>
                <td className="py-2 px-3">React (build time), Gradio (less customizable)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">LLM</td>
                <td className="py-2 px-3 text-primary">Gemini Flash (adapter)</td>
                <td className="py-2 px-3">Fast latency, free tier, adapter allows swapping</td>
                <td className="py-2 px-3">GPT-4 (slow, expensive), local LLM (setup friction)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">RAG</td>
                <td className="py-2 px-3 text-primary">In-memory embeddings</td>
                <td className="py-2 px-3">Simple, no external vector DB, sufficient for demo corpus</td>
                <td className="py-2 px-3">Pinecone/Chroma (external dependency), no RAG (weaker RCA)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3 font-bold text-foreground">Deployment</td>
                <td className="py-2 px-3 text-primary">Monolith</td>
                <td className="py-2 px-3">Single process, one command start, no service mesh</td>
                <td className="py-2 px-3">Microservices (integration overhead), serverless (cold start)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Monolith (Not Microservices) */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Why Monolith (Not Microservices)?
        </h2>
        <div className="text-muted-foreground space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Factor</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Microservices</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Monolith</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Dev velocity</td>
                  <td className="py-2 px-3">Slower (API contracts, deployment per service)</td>
                  <td className="py-2 px-3">Faster (single codebase, one deploy)</td>
                  <td className="py-2 px-3 text-primary font-bold">Monolith</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Local setup</td>
                  <td className="py-2 px-3">Complex (Docker Compose, service discovery)</td>
                  <td className="py-2 px-3">Simple (one command)</td>
                  <td className="py-2 px-3 text-primary font-bold">Monolith</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Debugging</td>
                  <td className="py-2 px-3">Distributed tracing required</td>
                  <td className="py-2 px-3">Single process, standard debugging</td>
                  <td className="py-2 px-3 text-primary font-bold">Monolith</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Scale independence</td>
                  <td className="py-2 px-3">Scale services independently</td>
                  <td className="py-2 px-3">Scale entire app</td>
                  <td className="py-2 px-3">Microservices</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Team size</td>
                  <td className="py-2 px-3">Better for large teams</td>
                  <td className="py-2 px-3">Better for solo/small teams</td>
                  <td className="py-2 px-3 text-primary font-bold">Monolith</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Conclusion:</strong> For a solo-contributor capstone with
            demo-first requirements, monolith wins on 4/5 factors. Scale independence does not matter
            when the demo serves one user at a time.
          </p>
        </div>
      </div>

      {/* Data Flow */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Data Flow: Alert to RCA
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground whitespace-pre overflow-x-auto">
{`1. GENERATE SCENARIO
   User selects scenario type (e.g., "bgp_flap")
   Generator creates 200+ alerts with ground truth
   Alerts stored in SQLite
        ↓
2. CORRELATE ALERTS
   Correlator groups alerts by incident tag
   Filters noise (tags != "noise")
   Creates Incident entity with alert IDs
        ↓
3. GENERATE RCA
   Incident + alerts passed to RCA module
   RAG retrieves relevant runbook chunks
   LLM generates structured JSON hypothesis
   Fallback to baseline if LLM fails
        ↓
4. EVALUATE RCA
   Compare hypothesis to ground truth
   Calculate accuracy score
   Record latency metrics
        ↓
5. DISPLAY RESULTS
   Streamlit renders RCA with confidence bars
   Evidence citations shown inline
   Comparison with baseline displayed`}
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
                  <td className="py-2 px-3 font-bold text-foreground">Monolith deployment</td>
                  <td className="py-2 px-3">Cannot scale AI plane independently</td>
                  <td className="py-2 px-3">Plane separation allows future extraction to services</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">SQLite concurrency</td>
                  <td className="py-2 px-3">Single writer, read contention under load</td>
                  <td className="py-2 px-3">SQLAlchemy ORM; swap to Postgres with config change</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">In-memory RAG</td>
                  <td className="py-2 px-3">Memory limits for large corpus</td>
                  <td className="py-2 px-3">Runbook corpus is small; scale path to vector DB documented</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Streamlit limitations</td>
                  <td className="py-2 px-3">Limited interactivity, no real-time updates</td>
                  <td className="py-2 px-3">Acceptable for demo; production would use React</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Single LLM provider</td>
                  <td className="py-2 px-3">Vendor lock-in, rate limits</td>
                  <td className="py-2 px-3">Adapter pattern; swap to GPT-4/Claude with config</td>
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
          <p>When asked &quot;Why did you choose a monolith over microservices?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;I chose a monolith with plane separation, not a tangled monolith or microservices.
                The decision was driven by three factors: team size, demo requirements, and refactor paths.
              </p>
              <p>
                First, team size. I am a solo contributor on a time-boxed project. Microservices add
                integration overhead - API contracts, service discovery, distributed tracing. For a team
                of one, that overhead directly subtracts from feature development.
              </p>
              <p>
                Second, demo requirements. The system needs to start with one command and run locally
                without external infrastructure. Microservices would require Docker Compose at minimum,
                adding setup friction that hurts demo reliability.
              </p>
              <p>
                Third, I preserved refactor paths through plane separation. The monolith has four logical
                planes: presentation, control, data, and AI. Each plane has clear interfaces. If I needed
                to extract the AI plane into a separate service - say, for GPU scaling - I could do it
                without touching the data or presentation layers.
              </p>
              <p>
                This is not &apos;monolith because I do not know better.&apos; It is monolith because I evaluated
                the trade-offs against my constraints. Microservices make sense for large teams with
                independent deployment needs. For a capstone demo, that complexity has negative ROI.&quot;
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
              Estimated time: 90-120 seconds
            </div>
          </div>

          <p className="mt-6">When asked &quot;How would you scale this system?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              1-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;The scale path is clear because of plane separation. I would address each bottleneck independently.
              </p>
              <p>
                For the data plane, SQLite swaps to Postgres with a config change - the SQLAlchemy ORM
                abstracts the database. I would add connection pooling and read replicas for query-heavy workloads.
              </p>
              <p>
                For the AI plane, I would extract LLM inference into a separate service behind a queue.
                This allows GPU instances to scale independently and handles burst traffic gracefully.
                The RAG index would migrate from in-memory to a vector database like Qdrant or Pinecone.
              </p>
              <p>
                For the presentation plane, Streamlit would become a React frontend with proper state
                management. The FastAPI backend could add horizontal scaling behind a load balancer.
              </p>
              <p>
                The key is that these changes are incremental. I do not need to rewrite the system -
                I extract and scale the bottleneck plane while keeping other planes stable.&quot;
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
