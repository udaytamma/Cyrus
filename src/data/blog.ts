export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "executive-documentation",
    title: "Executive Documentation: Packaging Technical Work for Leadership",
    date: "2026-01-06",
    category: "Leadership",
    description:
      "Creating Principal TPM-level artifacts that translate deep technical implementation into VP/Director-ready communication.",
    tags: ["tpm", "leadership", "documentation", "fraud-detection"],
    content: `## Summary

- Executive communication requires tiered documentation: VP summary with deep-dive links for technical depth
- Quantify business impact explicitly: $2.05M projected annual benefit with clear ROI calculations
- Credibility comes from honest limitation acknowledgment, not just showcasing successes
- Four key artifacts: Executive Overview, TPM Execution Strategy, AI/ML Roadmap, Results & Personas

---

## Why This Matters

Technical excellence means nothing if stakeholders cannot understand it. A Principal TPM must be able to:

1. **Communicate upward** - Summarize complex systems for executives who make funding decisions
2. **Demonstrate business impact** - Connect technical metrics to financial outcomes
3. **Show execution rigor** - Present clear frameworks, not just features
4. **Be honest about limitations** - Credibility comes from acknowledging gaps

## The Four Documents

### 1. Executive Overview
A 2-3 screen document designed to "send to a VP":
- **Problem & Context**: $2.4M annual fraud loss, 18% false positives, 2-3 second latency
- **Goals & Constraints**: Target metrics with explicit constraints
- **Solution at a Glance**: Architecture diagram with latency budget breakdown
- **Phased Roadmap**: v1 (rules) to v2 (hybrid ML) to v3 (external signals)
- **Financial Impact Model**: $2.05M annual benefit projection

### 2. TPM Execution Strategy
How to drive this as a Principal TPM:
- **Stakeholder Map**: 8 key groups identified
- **RACI Matrix**: Who decides what
- **Rollout Sequencing**: Shadow to 5% to 25% to 50% to 100%
- **Fraud Governance Council**: Monthly cross-functional approval forum

### 3. AI/ML Roadmap & Current Status
What is built vs planned:
- **Current**: Rule-based detection (COMPLETE)
- **Next**: XGBoost with champion/challenger
- **Future**: Graph neural networks
- **Guardrails Against Over-Complexity**

### 4. Results, Limitations & Personas
Honest assessment with persona mapping:
- **Load Test Results**: 260 RPS at 106ms P99 (47% headroom)
- **Identified Bottleneck**: PostgreSQL at 4000 RPS
- **Three Personas**: Fraud Analyst, Risk Lead, SRE`,
  },
  {
    slug: "telco-fraud-adaptation",
    title: "Domain Adaptation: Transferable Architectural Patterns",
    date: "2026-01-05",
    category: "System Design",
    description:
      "Transforming generic e-commerce fraud detection into a telco/MSP-specific platform. Demonstrates domain adaptation and transferable architectural patterns.",
    tags: ["fraud-detection", "telecom", "system-design"],
    content: `## Summary

- Domain adaptation requires identifying transferable patterns: latency budgets, data architecture, ownership models
- Core architectural principles remain constant; domain-specific entities and fraud vectors require reimagining
- The methodology transfers across domains; the specific implementations must be tailored
- Understand what makes an industry unique while applying cross-domain expertise

---

## Why This Matters

Adapting architectural patterns to new domains while identifying transferable principles is a critical skill. Two things matter:

1. **Domain understanding**: Grasp what makes an industry unique
2. **Transferable skills**: Experience applies beyond specific context

## Key Domain Differences

| E-Commerce | Telco/MSP |
|------------|-----------|
| merchant_id | service_id (carrier, network operator) |
| Product SKU | SIM ICCID, IMEI, Phone Number |
| Card testing | SIM farm attacks |
| One-time purchase | Ongoing subscription + events |

## Telco-Specific Fraud Vectors

### 1. IRSF (International Revenue Share Fraud)
Fraudsters route calls to premium-rate international numbers, splitting revenue with the destination operator.

### 2. SIM Swap Account Takeover
Attacker convinces carrier to transfer victim's number to a new SIM, intercepting 2FA codes.

### 3. Device Subsidy Fraud
Acquiring subsidized phones with no intent to maintain service.

## Transferable Principles

Despite domain differences, these patterns transfer directly:

1. **Latency Budget Thinking** - Every millisecond matters
2. **Three-Path Data Architecture** - Request-time, real-time velocity, async enrichment
3. **Ownership Models** - Who changes what, how fast`,
  },
  {
    slug: "fraud-detection-design",
    title: "Fraud Detection: From Requirements to Architecture",
    date: "2026-01-04",
    category: "System Design",
    description:
      "A deep dive into the thinking process behind designing a real-time fraud detection platform with sub-10ms latency requirements.",
    tags: ["fraud-detection", "architecture", "system-design"],
    content: `## Summary

- Start with constraints, not features - latency budgets and business context shape every decision
- The data model follows the money - entities emerge from asking "what can be fraudulent?"
- Separate scoring from deciding - ML can iterate independently while business reacts in minutes
- Design for failure first - every component needs a fallback strategy

---

## The Thinking Process

Building a fraud detection system requires methodical thinking through constraints, scope, data models, and failure modes. This post documents the derivation process.

## 1. Start with Constraints

Before any architecture, understand the hard boundaries:
- **Latency**: Sub-10ms at P99 for payment authorization path
- **Throughput**: 150M authorizations/year (~5 RPS average, peaks at 50+ RPS)
- **Accuracy**: Cannot drop below 90% approval rate
- **Compliance**: Full audit trail for dispute resolution

## 2. Derive the Data Model

The data model emerges from following the money:
1. Trace the nouns (entities): Card, Device, IP, User, Merchant
2. Trace the arrows (events): Auth, Capture, Refund, Chargeback
3. Ask "what can be fraudulent?" at each entity

## 3. Design Detection Logic

Key insight: Separate **scoring** (ML/rules producing 0-1 scores) from **deciding** (policy converting scores to actions).

This separation means:
- Data science can iterate on models without policy changes
- Business can adjust thresholds in minutes
- A/B testing becomes straightforward

## 4. Plan for Failure

Every component needs a fallback:
- Redis down → proceed with degraded accuracy
- Model timeout → use rule-based backup
- Database saturated → circuit breaker to safe mode`,
  },
  {
    slug: "mindgames-product-decisions",
    title: "Product Decision Framework: MindGames Case Study",
    date: "2025-12-27",
    category: "Product",
    description:
      "Applying structured product thinking to a mental math training app - from user research to technical implementation.",
    tags: ["product", "decision-framework", "mindgames"],
    content: `## Summary

- User research drives feature prioritization - kid-friendly mode emerged from testing observations
- Technical constraints inform product scope - chain-based problems require careful number selection
- Incremental delivery reduces risk - MVP first, then polish based on real usage
- Cross-platform considerations affect architecture from day one

---

## Product Context

MindGames started as a simple mental math trainer but evolved through structured product thinking. This post documents the decision framework applied.

## User Research Findings

Initial testing revealed two distinct user groups:
1. **Adults** seeking cognitive training - want speed and challenge
2. **Children** using for homework practice - need encouragement and celebration

This led to the Kid/Adult profile mode feature.

## Technical Constraints Shaping Product

### Chain-Based Problem Generation
The core mechanic - answers feeding into next problems - required careful thought:
- Starting numbers must have many divisors (highly composite numbers)
- Division results must be clean integers
- Chains must feel natural, not forced

### Cross-Platform Delivery
Targeting both web and potential mobile:
- Next.js with static export for web deployment
- Component architecture supporting future React Native port
- State management via React Context (sufficient for scope)

## Prioritization Framework

| Feature | User Value | Effort | Decision |
|---------|------------|--------|----------|
| Chain problems | High | Medium | MVP |
| Operation mix | High | Low | MVP |
| Kid mode | High | Medium | v1.1 |
| Leaderboards | Medium | High | Backlog |

## Key Learnings

1. **Start with constraints** - Understanding what's hard technically informs what to promise
2. **Test with real users early** - Kid mode wasn't in the original spec
3. **Ship incrementally** - MVP validation before polish investment`,
  },
  {
    slug: "ingredient-scanner-architecture",
    title: "Multi-Agent Architecture: Orchestration and Quality Control",
    date: "2025-12-25",
    category: "Architecture",
    description:
      "Designing a multi-agent AI system with LangGraph for ingredient safety analysis - architecture decisions and quality validation patterns.",
    tags: ["ai", "langraph", "architecture", "agents"],
    content: `## Summary

- Multi-agent systems require explicit orchestration - LangGraph provides state management and routing
- Quality validation must be a first-class concern - the Critic agent gates all outputs
- External data requires fallback strategies - vector DB with search API backup
- Observability is non-negotiable - LangSmith integration from day one

---

## Architecture Overview

The Ingredient Scanner uses a multi-agent architecture where specialized agents handle different aspects of the analysis pipeline.

## Agent Responsibilities

### Supervisor Agent
Routes workflow based on state:
- Determines which agents to invoke
- Handles error states and retries
- Manages conversation context

### Research Agent
Gathers ingredient information:
- Primary: Qdrant vector search (fast, cached)
- Fallback: Google grounded search (comprehensive)
- Deduplication and normalization

### Analysis Agent
Generates safety reports:
- Gemini 2.0 Flash for generation
- Personalized based on user profile (allergies, skin type)
- Structured output with safety scores

### Critic Agent
5-gate quality validation:
1. Completeness check
2. Accuracy verification
3. Personalization validation
4. Format compliance
5. Safety claim verification

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| LangGraph over chains | Better state management, conditional routing |
| 5-gate Critic | Quality must be explicit and measurable |
| Vector + Search fallback | Balance speed with coverage |
| Centralized LLM config | Single point for model changes and tracing |

## Observability Integration

LangSmith provides:
- Trace visualization for debugging
- Latency breakdown by component
- Cost tracking per request
- Quality metrics over time`,
  },
  {
    slug: "email-assistant-automation",
    title: "Automation ROI: Email Assistant Integration Complexity",
    date: "2025-12-23",
    category: "Engineering",
    description:
      "Building an AI-powered email assistant - navigating OAuth complexity, caching strategies, and the real cost of automation.",
    tags: ["automation", "email", "ai", "integration"],
    content: `## Summary

- OAuth integration is surprisingly complex - token refresh, scope management, consent screens
- Caching is essential for LLM economics - 70% cache hit rate transforms cost structure
- Observability prevents silent failures - metrics dashboard catches categorization drift
- Personal productivity tools have hidden complexity - edge cases multiply with real usage

---

## The Problem

Email overload is real. The goal: automated categorization and daily digests that surface what matters.

## Integration Complexity

### Gmail API OAuth
What seems simple becomes complex:
- Initial consent flow
- Token refresh handling
- Scope creep (read vs modify vs send)
- Rate limit management

### Categorization Pipeline

\`\`\`
Email → Extract metadata → LLM categorization → Store result → Generate digest
\`\`\`

Each step has failure modes:
- Large emails timeout
- LLM inconsistency across runs
- Category drift over time

## Economic Considerations

### Without Caching
- ~200 emails/day
- $0.003 per categorization
- $0.60/day = $18/month

### With Caching (70% hit rate)
- 60 new categorizations/day
- $0.18/day = $5.40/month

The cache pays for itself in weeks.

## Metrics Dashboard

Key metrics tracked:
- Categorization distribution (detect drift)
- Cache hit rate
- Processing latency P50/P99
- Error rate by category

## Key Learnings

1. **OAuth is always harder** - Budget extra time for auth flows
2. **Cache everything** - LLM costs add up fast
3. **Monitor continuously** - Silent failures are the worst failures
4. **Start with your own workflow** - Personal tools reveal hidden requirements`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((post) => post.category))];
}

export function getAllTags(): string[] {
  return [...new Set(blogPosts.flatMap((post) => post.tags))];
}
