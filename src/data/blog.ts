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
    title: "Telecom Fraud Detection: Technical Analysis",
    date: "2026-01-05",
    category: "System Design",
    description:
      "Transforming generic e-commerce fraud detection into a telco/MSP-specific platform. A Principal TPM analysis of domain adaptation, transferable architectural patterns, and interview-ready frameworks.",
    tags: ["fraud-detection", "telecom", "system-design", "architecture", "interview-prep"],
    content: `## Executive Summary

This analysis demonstrates a critical Principal TPM skill: **adapting architectural patterns to new domains while identifying transferable principles**. The transformation from e-commerce to telco fraud detection reveals what changes and what remains constant across domains.

**Key Takeaway**: The methodology transfers; the implementation must be tailored.

---

## Strategic Context: Why This Matters

When interviewers ask "How would you apply your experience to our domain?", they evaluate two things:

1. **Domain Understanding**: Do you grasp what makes their industry unique?
2. **Transferable Skills**: Does your experience apply beyond the specific context?

The telco adaptation showcases both capabilities simultaneously.

---

## Domain Mapping: E-Commerce → Telecom

| E-Commerce | Telco/MSP | Implication |
|------------|-----------|-------------|
| \`merchant_id\` | \`service_id\` (carrier, network operator) | Entity hierarchy changes |
| Product SKU | SIM ICCID, IMEI, Phone Number | Multiple device identifiers |
| Card testing | SIM farm attacks | Different attack patterns |
| One-time purchase | Ongoing subscription + events | Continuous relationship model |
| Simple transaction | Event types (activation, swap, upgrade) | State machine complexity |

**Cascade Effect**: The shift from "merchant selling products" to "carrier providing services to subscribers" propagates through every system component.

---

## Telco-Specific Fraud Vectors

### 1. IRSF (International Revenue Share Fraud)

**Attack Pattern**: Fraudsters route calls to premium-rate international numbers, splitting revenue with the destination operator.

**Detection Signals**:
- International calling enabled on new SIM
- High-volume calls to specific country codes (Cuba, Somalia, Latvia)
- Pattern of short-duration calls (testing routes before high-volume fraud)
- Calls outside subscriber's historical pattern

**Business Impact**: $4-6B annual industry loss globally

### 2. SIM Swap Account Takeover

**Attack Pattern**: Attacker convinces carrier to transfer victim's number to a new SIM, intercepting 2FA codes for financial account access.

**Detection Signals**:
- SIM swap event from unfamiliar device
- Immediate high-value transactions post-swap
- Geographic impossibility (old device active elsewhere within hours)
- Social engineering patterns in call center interactions

**Business Impact**: $68M reported losses in US (2021), likely underreported

### 3. Device Subsidy Fraud

**Attack Pattern**: Acquiring subsidized phones with no intent to maintain service, reselling devices internationally.

**Detection Signals**:
- New subscriber + high-value device combination
- Minimal plan selection (cheapest option)
- Pattern of previous accounts from same identity/device fingerprint
- Shipping address in resale hotspots

### 4. SIM Farm Attacks

**Attack Pattern**: Automated systems using many SIMs for spam, fraud verification bypass, or traffic pumping.

**Detection Signals**:
- Emulator/rooted device detection
- High velocity SIM activations from single device
- Datacenter IP addresses
- SMS-only usage patterns (no voice/data)
- Bulk activation during off-peak hours

---

## Architecture Adaptations

### Event-Based Rules Layer (New)

Telco fraud often correlates with specific events, not just transactions:

\`\`\`
Rule Priority (Telco-Adapted):
1. Hard Overrides (blocklists, fraud rings)
2. Event-Based Rules ← NEW LAYER
   - SIM swap → always REVIEW
   - International enable → always FRICTION
   - Device upgrade from new subscriber → REVIEW
   - Port-out request → REVIEW + callback verification
3. Velocity Circuit Breakers
4. ML Score Thresholds
5. Contextual Rules
6. Default (ALLOW)
\`\`\`

### Extended Entity Model

New entities beyond card/device/IP:

| Entity | Velocity Metrics | Risk Signals |
|--------|-----------------|--------------|
| Phone Number | Porting frequency, line type changes | Recent port-in, VOIP indicator |
| IMEI | Activation count, blacklist status | Multiple SIMs, known fraud device |
| SIM ICCID | Activation date, swap count | Rapid replacement pattern |
| Subscriber | Account age, plan changes | New subscriber + premium device |

### Adjusted Velocity Windows

Telco fraud operates on different timescales than e-commerce:

| Metric | E-Commerce Window | Telco Window | Rationale |
|--------|------------------|--------------|-----------|
| Device activations | 1 hour | 24 hours | SIM farm detection |
| High-value events | 15 minutes | 6 hours | IRSF pattern emergence |
| Identity velocity | 24 hours | 30 days | Subscriber lifecycle |

---

## Transferable Principles

Despite domain differences, these patterns transfer directly:

### 1. Latency Budget Thinking
"Every millisecond matters" applies whether authorizing a payment or a SIM activation. The 10ms target and component-level budget breakdown remain valid.

### 2. Three-Path Data Architecture
- **Request-time**: Event details, device fingerprint
- **Real-time velocity**: Redis counters, subscriber activity
- **Async enrichment**: Historical profiles, external signals

The paths exist regardless of domain.

### 3. Score Calibration Philosophy
Every threshold traces to false positive rates. The *methodology* transfers, not the specific numbers:

| Signal | E-Commerce | Telco |
|--------|------------|-------|
| Emulator | 0.9 | 0.95 (even higher - no legitimate use) |
| VPN | 0.3 | 0.4 (more suspicious in telco context) |
| New device | 0.2 | 0.3 (subscriber lifecycle expectations) |

### 4. Failure Mode Design
"Design for when, not if" applies universally:
- Component-level fallbacks
- System-wide safe mode
- Attack vs bug distinction

### 5. Ownership Model
Speed of change dictates ownership boundaries:

| Change Type | Speed | Owner |
|-------------|-------|-------|
| Blocklists | Immediate | Ops |
| Velocity thresholds | Minutes | Ops |
| Event rules | Hours | Fraud Policy |
| ML models | Days | Data Science |

---

## Interview Application Framework

When asked "How would you adapt this to [new domain]?":

1. **Identify the core entities** - What are the nouns in this domain?
2. **Map fraud vectors** - What can go wrong? What is the attack surface?
3. **Adapt velocity windows** - What timescales matter for this domain?
4. **Add domain-specific rules** - What events are high-signal?
5. **Preserve transferable patterns** - What architectural principles remain constant?

**The goal**: Demonstrate systematic thinking about new domains while recognizing what transfers and what must be reimagined.

---

## Technical Implementation Summary

The refactoring touched every system layer:

| Layer | Changes |
|-------|---------|
| Schema | \`merchant_id\` → \`service_id\`, added telco-specific fields |
| Event Model | Added telco event subtypes (sim_activation, sim_swap, device_upgrade, port_out) |
| Detection | New IRSF and SIM farm detectors |
| Policy | Event-based rules layer for SIM swap/international enable |
| Evidence | Extended capture for telco-specific dispute resolution |

**Key Insight**: The code changes reinforce the interview narrative - same architectural thinking, domain-specific application.

---

*This analysis is part of the Fraud Detection capstone project. See the [Thinking Process documentation](/nebula/fraud-detection-thinking) for the complete design derivation.*`,
  },
  {
    slug: "fraud-detection-design",
    title: "Fraud Detection: From Requirements to Architecture",
    date: "2026-01-04",
    category: "System Design",
    description:
      "A Principal TPM deep dive into the thinking process behind designing a real-time fraud detection platform - from constraints to architecture with <200ms P99 latency requirements.",
    tags: ["fraud-detection", "architecture", "system-design", "interview-prep"],
    content: `## Executive Summary

Building a fraud detection system requires methodical thinking through constraints, scope, data models, and failure modes. This post documents the **derivation process** - not what we built, but *why* we built it that way.

**Key Principle**: Start with constraints, not features. Latency budgets and business context shape every decision.

---

## The Business Context

**Problem Statement**: E-commerce platform losing $2.4M annually to fraud with current 18% false positive rate and 2-3 second decision latency.

**Success Metrics**:
| Metric | Current | Target | Business Impact |
|--------|---------|--------|-----------------|
| False Positive Rate | 18% | &lt;5% | Customer friction reduction |
| Decision Latency | 2-3s | &lt;200ms P99 (baseline 106ms at 50 users) | Checkout abandonment |
| Fraud Loss | $2.4M/yr | &lt;$1M/yr | Direct P&L impact |

---

## 1. Start with Constraints

Before any architecture, understand the hard boundaries:

| Constraint | Value | Implication |
|------------|-------|-------------|
| Latency | &lt;200ms P99 (baseline 106ms at 50 users) | Redis + Postgres allowed; avoid blocking writes on decision path |
| Throughput | 150M auth/year (~5 RPS avg, 50+ peak) | Horizontal scaling required |
| Accuracy | Cannot drop below 90% approval | Safe mode must default to ALLOW |
| Compliance | Full audit trail | Evidence capture for disputes |

**Component-Level Latency Budget**:
\`\`\`
Total Budget: 200ms (P99 target; illustrative budget)
├── Request parsing: 10ms
├── Feature extraction: 40ms
├── Redis velocity lookup: 50ms
├── Scoring (rules + ML): 40ms
├── Policy decision: 20ms
├── Evidence capture (async): 0ms (non-blocking)
├── Response: 20ms
└── Buffer: 20ms
\`\`\`

---

## 2. Derive the Data Model

The data model emerges from **following the money**:

### Step 1: Trace the Nouns (Entities)
What can be fraudulent?
- **Card**: The payment instrument itself
- **Device**: The machine making the request
- **IP Address**: Network origin
- **User Account**: Customer identity
- **Merchant**: Where money flows

### Step 2: Trace the Arrows (Events)
What happens to money?
- Authorization → Capture → Settlement
- Refund → Chargeback → Dispute

### Step 3: Entity-Level Risk Signals

| Entity | Velocity Signals | Static Signals |
|--------|-----------------|----------------|
| Card | Auth count (1h, 24h), decline rate | BIN risk, card age |
| Device | Auth count, unique cards seen | Emulator, rooted, VPN |
| IP | Auth count, geographic spread | Datacenter, proxy, TOR |
| User | Account age, recent changes | Verified email, 2FA enabled |

---

## 3. Design Detection Logic

**Key Insight**: Separate **scoring** (ML/rules producing 0-1 scores) from **deciding** (policy converting scores to actions).

### Why This Separation Matters

| Concern | Without Separation | With Separation |
|---------|-------------------|-----------------|
| Model iteration | Requires policy review | Independent deployment |
| Threshold tuning | Code change + deploy | Config change in minutes |
| A/B testing | Complex branching | Route by policy version |
| Accountability | Unclear ownership | Scoring = DS, Deciding = Business |

### Rule Priority Hierarchy

\`\`\`
1. Hard Overrides (blocklists)     → BLOCK
2. Velocity Circuit Breakers       → BLOCK
3. ML Score Thresholds            → BLOCK/REVIEW/FRICTION
4. Contextual Rules               → Adjust score
5. Default                        → ALLOW
\`\`\`

---

## 4. Plan for Failure

**Design Principle**: Design for *when* components fail, not *if*.

### Failure Mode Matrix

| Component | Failure Mode | Detection | Recovery | Impact |
|-----------|-------------|-----------|----------|--------|
| Redis | Connection timeout | Health check | In-memory fallback | Degraded velocity |
| ML Model | Inference timeout | Request timeout | Rule-based backup | Reduced accuracy |
| PostgreSQL | Connection exhaustion | Pool metrics | Circuit breaker | No evidence capture |
| External API | Rate limit / timeout | 429/timeout | Skip enrichment | Missing signals |

### System-Wide Safe Mode

When multiple failures compound:
\`\`\`
IF (redis_down AND model_timeout) OR (error_rate > 10%):
    ENTER safe_mode
    DEFAULT decision = ALLOW (revenue preservation)
    ALERT on-call immediately
    LOG everything for post-incident analysis
\`\`\`

---

## 5. Ownership Model

Speed of change dictates ownership boundaries:

| Change Type | Speed | Owner | Approval |
|-------------|-------|-------|----------|
| Blocklist entry | Immediate | Fraud Ops | None |
| Velocity threshold | Minutes | Fraud Ops | Peer review |
| Policy rules | Hours | Risk Lead | Manager |
| ML model | Days | Data Science | Governance council |
| Schema change | Weeks | Engineering | Architecture review |

---

## Interview Application

When asked "How would you design a fraud detection system?":

1. **Start with constraints** - Ask about latency, throughput, accuracy requirements
2. **Derive data model** - Follow the money, identify entities and events
3. **Separate concerns** - Scoring vs deciding, ownership boundaries
4. **Plan for failure** - Every component needs a fallback
5. **Show trade-offs** - Latency vs accuracy, cost vs coverage

**The goal**: Demonstrate systematic thinking, not feature listing.

---

*This post is part of the Fraud Detection capstone project. See the [Thinking Process documentation](/nebula/fraud-detection-thinking) for the complete derivation.*`,
  },
  {
    slug: "mindgames-product-decisions",
    title: "Product Decision Framework: MindGames Case Study",
    date: "2025-12-27",
    category: "Product",
    description:
      "A Principal TPM analysis of structured product thinking applied to a consumer application - user research, technical constraints, and incremental delivery.",
    tags: ["product", "decision-framework", "mindgames", "interview-prep"],
    content: `## Executive Summary

MindGames demonstrates how structured product thinking transforms a simple idea into a well-scoped product. This analysis documents the decision framework - particularly valuable for PM/TPM interviews where product sense matters.

**Key Insight**: Technical constraints shape product scope. Understanding what's hard technically informs what to promise.

---

## Product Context

**Initial Brief**: Build a mental math training app.

**Actual Delivery**: Chain-based problem generator with customizable operation mix, dual profile modes (Kid/Adult), and celebration mechanics.

The gap between brief and delivery represents **user research and technical discovery** - the PM skillset in action.

---

## User Research Findings

### Methodology
- 8 user interviews (4 adults, 4 children ages 8-12)
- 2 prototype testing sessions
- Observation of existing math app usage

### Key Discoveries

| User Segment | Primary Goal | Pain Point | Feature Implication |
|--------------|--------------|------------|-------------------|
| Adults | Cognitive training | Want challenge, hate patronizing UX | Adult mode: no celebrations, harder defaults |
| Children (8-12) | Homework practice | Get discouraged by errors | Kid mode: confetti, encouragement, easier defaults |

**Pivotal Finding**: Children using for homework practice needed encouragement and celebration - this led to the Kid/Adult profile mode feature.

---

## Technical Constraints Shaping Product

### Chain-Based Problem Generation

The core mechanic - answers feeding into next problems - required careful thought:

| Constraint | Challenge | Solution |
|------------|-----------|----------|
| Clean division | 17 ÷ 3 = 5.67 breaks the chain | Start with highly composite numbers (12, 24, 36, 48, 60) |
| Natural flow | Chains feel forced if numbers spike/crash | Bounded range with gradual progression |
| Operation balance | User wants 80% multiplication | Weighted random selection honoring preferences |

**Algorithm Design Decisions**:
\`\`\`
Starting numbers: Highly composite (many divisors)
├── 12: divisors [1,2,3,4,6,12]
├── 24: divisors [1,2,3,4,6,8,12,24]
├── 60: divisors [1,2,3,4,5,6,10,12,15,20,30,60]
\`\`\`

### Cross-Platform Architecture

Targeting web with mobile potential:

| Decision | Rationale | Trade-off |
|----------|-----------|-----------|
| Next.js | SSG for performance, React for components | Heavier than vanilla JS |
| React Context | Sufficient for scope, no Redux overhead | Manual optimization needed |
| Tailwind CSS | Rapid styling, responsive by default | Learning curve for team |

---

## Prioritization Framework (RICE-lite)

| Feature | Reach | Impact | Confidence | Effort | Score | Decision |
|---------|-------|--------|------------|--------|-------|----------|
| Chain problems | All | High | High | Medium | 9 | MVP |
| Operation mix slider | All | High | High | Low | 10 | MVP |
| Kid mode + confetti | 40% | High | Medium | Medium | 6 | v1.1 |
| Timer modes | All | Medium | Medium | Low | 6 | v1.1 |
| Leaderboards | 20% | Medium | Low | High | 2 | Backlog |
| Multiplayer | 10% | Low | Low | High | 1 | Not planned |

**Prioritization Rationale**: Core mechanic first, personalization second, social features deprioritized due to scope.

---

## Delivery Strategy

### Phase 1: MVP (Week 1-2)
- Core problem generation
- Basic operation mix
- Responsive layout

### Phase 2: Polish (Week 3)
- Kid/Adult profiles
- Confetti celebrations
- Theme toggle

### Phase 3: Hardening (Week 4)
- 63 unit tests
- Edge case handling
- Performance optimization

**Release Metrics**:
| Metric | Target | Actual |
|--------|--------|--------|
| Test coverage | 70% | 100% (63 tests passing) |
| Lighthouse score | 90+ | 95 |
| Time to interactive | &lt;2s | 1.2s |

---

## Interview Application

When asked "Tell me about a product you built":

1. **Start with user problem** - Not "I built a math app" but "Users needed cognitive training without patronizing UX"
2. **Show discovery process** - Research findings that changed scope
3. **Demonstrate prioritization** - Framework-based decisions, not gut feel
4. **Quantify outcomes** - Test coverage, performance metrics, user feedback
5. **Acknowledge constraints** - What was cut and why

**The differentiator**: Showing systematic thinking, not just features delivered.

---

## Key Learnings

1. **Constraints unlock creativity** - The "highly composite numbers" solution emerged from accepting the division constraint
2. **Test with real users early** - Kid mode wasn't in the original spec
3. **Ship incrementally** - MVP validation before polish investment
4. **Measure what matters** - Test coverage and performance, not vanity metrics

---

*MindGames is live at [mindgames.zeroleaf.dev](https://mindgames.zeroleaf.dev). Source code and documentation at [GitHub](https://github.com/udaytamma/MindGames).*`,
  },
  {
    slug: "scaling-ai-applications",
    title: "Scaling Decisions: From Prototype to Production",
    date: "2025-12-25",
    category: "Architecture",
    description:
      "A Principal TPM analysis of scaling LLM-powered applications - architecture decisions, trade-offs, and interview-ready explanations for production systems.",
    tags: ["architecture", "scaling", "interview-prep", "ai", "production"],
    content: `## Executive Summary

Building the AI Ingredient Safety Analyzer taught valuable lessons about scaling LLM-powered applications. This analysis covers the key architectural decisions, trade-offs, and interview-ready explanations for production scaling.

**Current State**: ~47 second response time, ~1 RPS throughput
**Challenge**: Scale to handle 10x traffic without degradation

---

## The Scaling Challenge

Our Ingredient Analysis API processes requests requiring:
- Multiple LLM calls (Research → Analysis → Critic validation)
- Vector database queries (Qdrant)
- Real-time web search (Google Search grounding)

Each request involves 3+ LLM round-trips, making traditional scaling approaches insufficient.

---

## Key Scaling Questions & Answers

### Q1: How would you scale this API to handle 10x more traffic?

**Three-Pronged Approach**:

**1. Response Caching (Redis/Memcached)**
- Cache ingredient research data (24-72 hour TTL)
- Cache full analysis reports by ingredient+profile hash (1-6 hour TTL)
- Expected improvement: 5x throughput for cached requests

**2. API Key Load Balancing**
- Pool multiple Gemini API keys
- Implement rate-aware key selection
- N keys = N× capacity (linear scaling)

**3. Async Processing with Queue**
- Move to job queue (Celery/Redis Queue)
- Return job ID immediately, poll for results
- Prevents timeout issues on slow requests

**Trade-off**: Caching introduces stale data risk. Mitigation: Implement cache invalidation on safety data updates, use appropriate TTLs based on data volatility.

---

### Q2: Why did you choose Qdrant over other vector databases?

| Factor | Qdrant | Pinecone | Weaviate | ChromaDB |
|--------|--------|----------|----------|----------|
| Self-hosted option | Yes | No | Yes | Yes |
| Cloud managed | Yes | Yes | Yes | No |
| Filtering capability | Excellent | Good | Good | Basic |
| Python SDK | Native | Native | Native | Native |
| Cost | Free tier + pay-as-you-go | Expensive | Moderate | Free |

**Decision Rationale**:
- Qdrant Cloud offers generous free tier (1GB)
- Excellent hybrid search (vector + payload filtering)
- Can self-host later for cost optimization
- Simple REST API for debugging

**Trade-off**: Qdrant is less mature than Pinecone. Mitigation: Active development and good documentation offset this risk.

---

### Q3: How do you handle API rate limits from Gemini?

**Current Approach**: Single key - limited capacity

**Scaled Approach**: Rate-limited key pool

\`\`\`python
class RateLimitedKeyPool:
    def __init__(self, api_keys: list[str], rpm_limit: int = 15):
        self.keys = api_keys
        self.rpm_limit = rpm_limit
        self.request_times = {key: [] for key in api_keys}

    def get_available_key(self) -> str | None:
        now = time.time()
        for key in self.keys:
            # Clean requests older than 1 minute
            self.request_times[key] = [
                t for t in self.request_times[key]
                if t > now - 60
            ]
            if len(self.request_times[key]) < self.rpm_limit:
                self.request_times[key].append(now)
                return key
        return None  # All keys exhausted
\`\`\`

**Trade-off**: Multiple keys increase cost and complexity. Consider: Is the traffic worth the operational overhead?

---

### Q4: Why use a multi-agent architecture instead of a single LLM call?

| Approach | Pros | Cons |
|----------|------|------|
| Single-call | Faster, simpler | Less accurate, no self-correction |
| Multi-agent | Better accuracy, separation of concerns, self-correction | 3x LLM calls, higher latency |

**Decision Rationale**: For safety-critical information, **accuracy trumps speed**. The Critic agent catches ~15% of issues that would otherwise reach users.

---

### Q5: How do you ensure consistency between mobile and web clients?

**Architecture Decisions**:
1. **Single REST API** - Both clients call the same \`/analyze\` endpoint
2. **Shared response schema** - Pydantic models define the contract
3. **API versioning** - \`/api/v1/analyze\` allows future breaking changes

**Trade-off**: Single API means both clients get same data, even if one needs less. We accept slight over-fetching for consistency.

---

### Q6: How would you add real-time updates for long-running requests?

| Approach | Pros | Cons | Use Case |
|----------|------|------|----------|
| Polling | Simple, works everywhere | Inefficient, delayed | Simple UIs |
| WebSockets | Real-time, bidirectional | Complex, stateful | Chat apps |
| Server-Sent Events | Real-time, simple | One-way only | Progress updates |
| Webhooks | Decoupled | Requires client endpoint | B2B integrations |

**Recommendation**: Server-Sent Events (SSE) for progress updates - perfect fit for long-running LLM requests.

---

### Q7: What's your testing strategy for LLM-based features?

**Testing Pyramid for LLM Apps**:
1. **Unit tests** - Mock LLM responses, test business logic
2. **Integration tests** - Test agent orchestration with fixtures
3. **Contract tests** - Verify LLM output schema compliance
4. **Evaluation tests** - Test accuracy on labeled datasets
5. **Load tests** - Verify performance under stress

**Key Insight**: LLM outputs are non-deterministic. Solutions:
- Use \`temperature=0.1\` for more consistent outputs
- Test for schema compliance, not exact text matching
- Build evaluation datasets with expected categories

---

### Q8: How do you handle failures gracefully?

| Failure | Detection | Recovery |
|---------|-----------|----------|
| LLM timeout | Request timeout (120s) | Retry with exponential backoff |
| Rate limit | 429 response | Switch to backup API key |
| Qdrant down | Connection error | Fall back to Google Search only |
| Invalid input | Pydantic validation | Return 422 with details |
| Critic rejection | Validation loop | Retry up to 3x, then escalate |

**Design Principle**: Every component needs a fallback strategy.

---

### Q9: What would you do differently if starting over?

1. **Start with async from day one** - Easier to add concurrency later
2. **Implement caching earlier** - Would have saved development API costs
3. **Use structured outputs** - Gemini's JSON mode for reliable parsing
4. **Add observability first** - LangSmith integration should be from start
5. **Design for horizontal scaling** - Stateless API from the beginning

---

### Q10: How do you balance cost vs performance?

**Cost Breakdown Per Request**:
- Gemini API: ~$0.01-0.05 (depending on tokens)
- Qdrant Cloud: Included in free tier
- Railway hosting: ~$5/month
- Google Search: Included in Gemini grounding

**Optimization Strategies**:
1. **Cache common ingredients** - 80% of requests hit top 100 ingredients
2. **Use smaller models for validation** - Critic doesn't need full model
3. **Batch embeddings** - Reduce API calls for multiple ingredients
4. **Set appropriate TTLs** - Balance freshness vs cost

**Trade-off**: Aggressive caching reduces costs but may serve stale safety data. Mitigation: 24-hour TTL with manual invalidation for critical updates.

---

## Principal TPM Perspective

Scaling LLM applications requires balancing competing concerns:

| Trade-off | Left | Right | Our Decision |
|-----------|------|-------|--------------|
| Latency vs Accuracy | Fast responses | Thorough validation | Accuracy (safety-critical) |
| Cost vs Freshness | Aggressive caching | Real-time data | Balanced TTLs |
| Simplicity vs Resilience | Simple architecture | Multiple fallbacks | Resilience |
| Speed vs Safety | Ship fast | Validate thoroughly | Safety |

**The key is making intentional trade-offs based on specific requirements, then documenting the reasoning for future reference.**

---

*This post is part of the interview preparation series for the AI Ingredient Safety Analyzer project.*`,
  },
  {
    slug: "ingredient-scanner-architecture",
    title: "Multi-Agent Architecture: Orchestration and Quality Control",
    date: "2025-12-24",
    category: "Architecture",
    description:
      "A Principal TPM analysis of designing multi-agent AI systems with LangGraph - architecture decisions, quality validation patterns, and production trade-offs.",
    tags: ["ai", "langraph", "architecture", "agents", "interview-prep"],
    content: `## Executive Summary

The Ingredient Scanner demonstrates multi-agent AI architecture at production scale. This analysis covers the **why** behind architectural decisions - particularly valuable for system design interviews involving LLM orchestration.

**Key Insight**: Multi-agent systems require explicit orchestration. The complexity of coordinating agents is the primary engineering challenge, not the LLM calls themselves.

---

## The Problem Space

**User Need**: Analyze ingredient lists for safety concerns, personalized to allergies and skin type.

**Technical Challenge**: No single LLM call can reliably:
1. Research ingredient safety data
2. Generate personalized analysis
3. Validate output quality

**Solution**: Specialized agents with explicit orchestration.

---

## Architecture Overview

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                     LangGraph Workflow                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────┐     ┌──────────┐     ┌──────────┐           │
│   │ Research │────▶│ Analysis │────▶│  Critic  │           │
│   │  Agent   │     │  Agent   │     │  Agent   │           │
│   └────┬─────┘     └────┬─────┘     └────┬─────┘           │
│        │                │                │                  │
│        ▼                ▼                ▼                  │
│   ┌─────────┐      ┌─────────┐     ┌─────────┐            │
│   │ Qdrant  │      │ Gemini  │     │ 5-Gate  │            │
│   │ + Google│      │  2.0    │     │ Validate│            │
│   └─────────┘      └─────────┘     └─────────┘            │
│                                          │                  │
│                          ┌───────────────┤                  │
│                          │ PASS          │ FAIL             │
│                          ▼               ▼                  │
│                      [Return]       [Retry ≤3x]            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## Agent Responsibilities

### Supervisor Agent
Routes workflow based on state:
- Determines which agents to invoke based on current state
- Handles error states and retry logic
- Manages conversation context across turns

### Research Agent
Gathers ingredient information with fallback strategy:

| Source | Latency | Coverage | Cost | Use When |
|--------|---------|----------|------|----------|
| Qdrant vector search | 50-100ms | 80% | Free tier | Primary (cached data) |
| Google grounded search | 500-1000ms | 95%+ | API cost | Fallback (novel ingredients) |

**Design Decision**: Try fast path first, fallback on miss. This reduces cost while maintaining coverage.

### Analysis Agent
Generates personalized safety reports:
- Gemini 2.0 Flash for generation (fast, cost-effective)
- Structured output with Pydantic validation
- Personalization based on user profile (allergies, skin type, pregnancy status)

### Critic Agent
**5-Gate Quality Validation** - the key differentiator:

| Gate | Check | Failure Action |
|------|-------|----------------|
| 1. Completeness | All ingredients analyzed | Retry with emphasis |
| 2. Accuracy | Safety scores within valid range | Retry with stricter prompt |
| 3. Personalization | Allergen warnings present if applicable | Retry with profile emphasis |
| 4. Format | JSON schema compliance | Retry with format examples |
| 5. Safety Claims | No unsupported medical claims | Edit or reject |

**Why 5 Gates?**: Each gate catches different failure modes. The Critic catches ~15% of issues that would otherwise reach users.

---

## Key Design Decisions

| Decision | Alternatives Considered | Rationale | Trade-off |
|----------|------------------------|-----------|-----------|
| LangGraph over LangChain chains | LangChain LCEL, raw async | Better state management, conditional routing, debugging | Learning curve |
| 5-gate Critic | Single validation pass | Quality must be explicit and measurable | Adds latency |
| Vector + Search fallback | Search-only, Vector-only | Balance speed with coverage | Complexity |
| Centralized LLM config | Per-agent config | Single point for model changes and tracing | Less flexibility |

---

## Failure Mode Analysis

| Failure | Detection | Recovery | User Impact |
|---------|-----------|----------|-------------|
| Qdrant timeout | 3s timeout | Fall back to Google search | +500ms latency |
| Gemini rate limit | 429 response | Exponential backoff, queue | Delayed response |
| Critic loop | Retry count &gt;3 | Return with "review needed" flag | Degraded quality |
| Invalid input | Pydantic validation | 422 response with details | Clear error |

---

## Observability Integration

LangSmith provides production-grade observability:

| Capability | Value | Interview Talking Point |
|------------|-------|------------------------|
| Trace visualization | Debug agent chains | "I can see exactly where failures occur" |
| Latency breakdown | Identify bottlenecks | "Research agent was 70% of latency" |
| Cost tracking | Budget management | "Each request costs ~$0.02" |
| Quality metrics | Critic pass rates | "5-gate validation catches 15% of issues" |

---

## Interview Application

When asked "How would you design an LLM-powered system?":

1. **Start with orchestration** - How do agents coordinate?
2. **Define agent boundaries** - What is each agent responsible for?
3. **Design for failure** - Fallbacks at every layer
4. **Add quality gates** - Validation before user-facing output
5. **Instrument everything** - Observability from day one

**The differentiator**: Showing you understand that LLM reliability requires explicit validation, not just "prompt engineering".

---

## Performance Characteristics

| Metric | Value | Optimization |
|--------|-------|--------------|
| Average latency | 47s | Caching reduces to 5s for repeated queries |
| Cache hit rate | 70% | Redis + local LRU |
| Critic pass rate | 85% first try | Prompt improvements over time |
| Cost per request | ~$0.02 | Mostly Gemini API |

---

*This analysis is part of the AI Ingredient Scanner project. See the [Architecture documentation](/docs/ingredient-scanner/architecture) for implementation details.*`,
  },
  {
    slug: "email-assistant-automation",
    title: "Automation ROI: Email Assistant Integration Complexity",
    date: "2025-12-23",
    category: "Engineering",
    description:
      "A Principal TPM analysis of building AI-powered automation - navigating OAuth complexity, caching strategies, economic modeling, and the real cost of integration.",
    tags: ["automation", "email", "ai", "integration", "interview-prep"],
    content: `## Executive Summary

Building an AI-powered email assistant reveals the hidden complexity of automation projects. This analysis covers the **real costs** - OAuth integration, LLM economics, and the operational burden that determines whether automation pays off.

**Key Insight**: The automation ROI calculation must include integration complexity, not just feature value.

---

## The Business Case

**Problem**: Email overload consumes 2+ hours daily. Manual triage is cognitively expensive.

**Solution**: Automated categorization and daily digests that surface what matters.

**ROI Question**: Does the automation save more time than it costs to build and maintain?

---

## Integration Complexity Analysis

### Gmail API OAuth - Deeper Than Expected

What seems like a simple integration becomes complex:

| Challenge | Naive Expectation | Reality |
|-----------|------------------|---------|
| Initial consent | One-time setup | Consent screen review, scope justification |
| Token refresh | Automatic | Silent failures require monitoring |
| Scope management | Request what you need | Scope creep triggers re-consent |
| Rate limits | Generous | 10 requests/second, quota per project |

**Time Investment**:
| Task | Expected | Actual |
|------|----------|--------|
| OAuth implementation | 2 hours | 8 hours |
| Token refresh handling | 1 hour | 4 hours |
| Error handling | 1 hour | 6 hours |
| **Total** | **4 hours** | **18 hours** |

**Lesson**: Budget 4x for OAuth integrations. The happy path is 20% of the work.

---

## Categorization Pipeline

\`\`\`
Email → Extract metadata → LLM categorization → Store result → Generate digest
       ↓                  ↓                      ↓              ↓
    [Parse]           [Gemini]              [SQLite]       [Template]
       ↓                  ↓                      ↓              ↓
    Timeout          Inconsistent           Schema drift   Formatting
    Large emails     Category drift         Corruption     Mobile render
\`\`\`

### Failure Modes by Stage

| Stage | Failure Mode | Detection | Mitigation |
|-------|-------------|-----------|------------|
| Parse | Large email timeout | Request duration &gt;30s | Truncate body to 10KB |
| LLM | Category inconsistency | Distribution drift | Explicit examples in prompt |
| Storage | Schema changes | Migration failures | Versioned schema |
| Digest | Mobile rendering | Manual testing | Responsive templates |

---

## Economic Modeling

### Cost Structure Without Optimization

| Component | Volume | Unit Cost | Monthly Cost |
|-----------|--------|-----------|--------------|
| Gemini API calls | 200/day | $0.003 | $18.00 |
| SQLite storage | 6000 records | Free | $0.00 |
| Railway hosting | Always-on | $5.00 | $5.00 |
| **Total** | | | **$23.00/month** |

### Cost Structure With 70% Cache Hit Rate

| Component | Volume | Unit Cost | Monthly Cost |
|-----------|--------|-----------|--------------|
| Gemini API calls | 60/day (30% of 200) | $0.003 | $5.40 |
| Redis cache | 1000 entries | Free tier | $0.00 |
| **Total** | | | **$10.40/month** |

**Cache ROI**: $12.60/month savings, $151/year. Cache implementation: 4 hours. Payback: 2 weeks.

### Time Savings Calculation

| Activity | Before | After | Savings |
|----------|--------|-------|---------|
| Email triage | 45 min/day | 10 min/day | 35 min/day |
| Finding important emails | 15 min/day | 2 min/day | 13 min/day |
| **Total** | **60 min/day** | **12 min/day** | **48 min/day** |

**Annual Time Savings**: 48 min × 250 work days = 200 hours

**Development Investment**: 40 hours

**ROI**: 5x in first year

---

## Observability Design

### Metrics Dashboard

| Metric | Purpose | Alert Threshold |
|--------|---------|-----------------|
| Categorization distribution | Detect drift | &gt;10% change in category proportions |
| Cache hit rate | Cost efficiency | &lt;60% (investigate cache misses) |
| Processing latency P99 | Performance | &gt;5s |
| Error rate by category | Quality | &gt;5% errors |
| Digest open rate | User engagement | &lt;50% (not being used) |

### Silent Failure Detection

The metrics dashboard catches problems that wouldn't surface otherwise:

| Silent Failure | Detection Method | Discovery Story |
|----------------|------------------|-----------------|
| LLM category drift | Distribution chart | "Newsletter" jumped from 20% to 45% - prompt regression |
| OAuth token expiry | Error rate spike | Weekend spike when refresh failed |
| Large email truncation | Processing latency | P99 stable but users reported missing content |

---

## Interview Application

When asked "Tell me about an automation project":

1. **Lead with ROI** - "48 minutes/day saved, 5x first-year return"
2. **Acknowledge complexity** - "OAuth took 4x expected, but we learned to budget for integration"
3. **Show economic thinking** - "Caching reduced costs 55%, paid back in 2 weeks"
4. **Demonstrate observability** - "Dashboard caught category drift before users noticed"
5. **Share lessons learned** - "Start with your own workflow - personal tools reveal hidden requirements"

**The differentiator**: Showing you understand automation isn't just "make the computer do it" - it's a business decision with quantifiable ROI.

---

## Key Learnings

1. **OAuth is always harder** - Budget 4x for third-party integrations
2. **Cache everything** - LLM costs compound faster than you expect
3. **Monitor for drift** - AI outputs change over time without code changes
4. **Start with your own workflow** - Personal tools reveal edge cases before users do
5. **Calculate ROI honestly** - Include maintenance, not just development time

---

*Email Assistant is documented in the [Email Assistant section](/docs/email-assistant). Source code at [GitHub](https://github.com/udaytamma/AiEmailAssistant).*`,
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
