---
title: "SD TPM Lexicon"
generated_at: "January 25, 2026 at 10:30 AM CST"
source: Claude Code
---

# SD TPM Lexicon

Principal TPM vocabulary for system design interviews at Mag7 companies. Each term passes the test: *"Would this impress a VP of Engineering or distinguish a Principal from a Senior?"*

---

## Global Principal TPM Lexicon

### Reliability & SLA Engineering

- **Composite SLA** – System availability calculated by multiplying serial dependencies. Ten services at 99.9% each = 99.0% system SLA. This math drives architectural decisions like removing synchronous hops.

- **Error Budget** – The allowed failure margin (100% - SLO). When budget is exhausted, feature velocity freezes until reliability improves. Operationalizes the velocity-vs-reliability trade-off.

- **Burn Rate** – How fast you're consuming error budget relative to the budget period. A 2x burn rate means you'll exhaust a 30-day budget in 15 days. Triggers escalation thresholds (2x = page, 10x = incident).

- **SLI/SLO/SLA Pipeline** – SLI (what you measure) → SLO (internal target) → SLA (external commitment with penalties). Principal TPMs own the gap between SLO and SLA as safety margin.

- **Critical User Journey (CUJ)** – End-to-end user flows that define success. SLOs are set per-CUJ, not per-service. "Checkout completes in &lt;3s for P99" vs. "Cart service has 99.9% availability."

- **Gray Failure** – Partial degradation where a system isn't fully down but isn't healthy—increased latency, elevated error rates, or inconsistent behavior. Harder to detect than binary failures.

- **MTTR vs MTTF Trade-off** – Mean Time To Recovery vs Mean Time To Failure. Modern systems optimize for fast recovery (low MTTR) rather than preventing all failures (high MTTF). Design for failure.

- **Multi-Window Alerting** – Alert when error budget burn rate exceeds thresholds across multiple time windows (5min for spikes, 6hr for trends). Prevents both alert fatigue and missed degradations.

### Architectural Strategy

- **Blast Radius** – The scope of impact when a component fails. Principal TPMs drive architectural decisions (sharding, cell architecture, bulkheads) specifically to reduce blast radius.

- **Cell-Based Architecture** – Isolating users/tenants into independent cells where failures don't propagate. Each cell has complete stack. Limits blast radius to ~1-5% of users per cell failure.

- **Strangler Fig Pattern** – Incrementally replacing legacy systems by routing traffic to new implementations piece by piece. Enables zero-downtime migrations of critical systems.

- **Expand-Contract Pattern** – Database migration strategy: (1) expand schema to support both old and new, (2) migrate data, (3) contract by removing old schema. Prevents breaking changes.

- **Bulkhead Pattern** – Isolating components so failure in one doesn't cascade. Like ship compartments—a leak sinks one section, not the whole vessel. Implemented via separate thread pools, connection pools, or services.

- **Architectural Runway** – The amount of existing architecture that can support planned features without redesign. When runway depletes, velocity drops sharply. Principal TPMs track this metric.

- **N+1 Redundancy** – Having one more instance than required for peak load. N+2 means two extra. Critical for rolling deployments and failure tolerance without capacity reduction.

### Data & Consistency

- **Consistent Hashing** – Distributing data across nodes where adding/removing nodes only remaps ~1/n of keys. Essential for cache clusters and sharded databases. Know the virtual node optimization.

- **Hot Partition (Celebrity Problem)** – When one shard receives disproportionate traffic (celebrity user, viral product). Solutions: composite keys, dedicated shards, or caching layers.

- **Scatter-Gather** – Query pattern where requests fan out to multiple shards and results are aggregated. Each added shard increases latency variance. Know when to avoid (high-cardinality queries).

- **Vector Clock** – Mechanism for tracking causality in distributed systems without synchronized clocks. Each node maintains a vector of logical timestamps. Used in eventually consistent systems.

- **Quorum (W+R>N)** – Configuring write replicas (W) and read replicas (R) such that reads always see latest writes when W+R exceeds total replicas (N). Tunable consistency.

- **SAGA Pattern** – Managing distributed transactions through a sequence of local transactions with compensating actions for rollback. Alternative to two-phase commit that maintains availability.

### Program Execution & Risk

- **Fix-Forward vs Rollback** – Decision framework for incidents. Rollback when cause is deployment-related and rollback is fast/safe. Fix-forward when rollback is risky or would cause data issues.

- **Dark Deployment** – Deploying code to production without exposing it to users. Combined with feature flags, enables testing in production environment before release.

- **Progressive Delivery** – Releasing to expanding user segments: canary (1%) → beta (10%) → GA (100%). Each stage has bake time and success criteria before expansion.

- **Bake Time** – Mandatory waiting period after deployment to observe for latent issues. Typically 15-30 minutes for canary, longer for higher-risk changes.

- **Feature Flag Taxonomy** – Release flags (short-lived, enable features), Ops flags (circuit breakers), Experiment flags (A/B tests), Permission flags (entitlements). Each has different lifecycle and ownership.

- **Flag Debt** – Accumulation of stale feature flags that should have been removed. Creates cognitive overhead and potential bugs. Principal TPMs enforce flag cleanup SLOs.

- **Go/No-Go Criteria** – Explicit, measurable criteria for proceeding with migrations, launches, or cutovers. Removes ambiguity from high-stakes decisions.

### Cloud Economics & FinOps

- **Unit Economics** – Cost per meaningful business unit (cost per transaction, cost per user, cost per GB processed). The metric that connects infrastructure to margin.

- **Commitment Coverage** – Percentage of baseline compute covered by reserved instances or savings plans. Target: 70-80% for predictable workloads. Under-coverage wastes money; over-coverage creates stranded capacity.

- **Stranded Capacity** – Reserved/committed resources sitting unused. Often caused by over-provisioning or workload migration. Direct hit to unit economics.

- **Cost Iceberg** – The visible compute cost is tip of iceberg. Hidden costs: data transfer (especially egress), storage IOPS, API calls, support tiers, observability. Total cost often 2-3x compute.

- **Network Egress Tax** – Cross-region and internet egress costs are significant at scale. $0.01/GB sounds small until you're moving petabytes. Architectural decisions (data locality, CDN placement) directly impact this.

- **Chargeback vs Showback** – Chargeback: teams pay for resources from their budget. Showback: visibility without financial transfer. Chargeback drives accountability but adds friction.

- **TCO (Total Cost of Ownership)** – Full cost including not just cloud spend but engineering time, operational overhead, migration costs, and opportunity costs. The real metric for build-vs-buy.

### Incident Management

- **Incident Commander (IC)** – Single decision-maker during incidents. Owns communication cadence, resource allocation, and go/no-go on fixes. Not necessarily the most senior person—the most available qualified person.

- **Severity Matrix** – Objective criteria for Sev1/Sev2/Sev3 classification based on user impact, revenue impact, and blast radius. Removes subjectivity from escalation decisions.

- **Blameless Postmortem** – Root cause analysis focused on systemic factors, not individual fault. "What conditions allowed this to happen?" not "Who made the mistake?" Psychological safety enables learning.

- **5 Whys + Swiss Cheese** – 5 Whys identifies causal chain; Swiss Cheese Model shows how multiple defense layers failed simultaneously. Combining both yields actionable systemic improvements.

- **COE (Correction of Error)** – Amazon's formal mechanism for documenting incidents with root cause, customer impact, and action items. Reviewed by leadership. Similar: Google's PIR (Postmortem Incident Review).

- **Action Item Governance** – Tracking postmortem action items to completion with ownership, deadlines, and escalation. Without governance, postmortems become theater.

### Organizational Design

- **Conway's Law** – Systems mirror the communication structure of the organization that builds them. Not a suggestion—an observation. Architecture and org design are coupled.

- **Inverse Conway Maneuver** – Deliberately structuring teams to produce desired architecture. Want microservices? Create small, independent teams with clear service ownership.

- **Team Topologies** – Four team types: Stream-aligned (deliver value), Platform (reduce cognitive load), Enabling (capability building), Complicated-subsystem (specialist domains). Principal TPMs map programs to topologies.

- **Cognitive Load** – The mental effort required to work with a system or domain. When cognitive load exceeds team capacity, quality and velocity suffer. Platform teams exist to reduce cognitive load.

- **Thinnest Viable Platform (TVP)** – The minimum platform capabilities that enable stream-aligned teams to deliver autonomously. Avoid premature platformization that adds overhead without value.

- **KTLO Ratio** – Keep The Lights On work as percentage of team capacity. Healthy: &lt;20%. Concerning: 30-40%. Crisis: >50% (operationally bankrupt). Principal TPMs track and drive this down.

### Technical Debt & Governance

- **Fowler's Debt Quadrant** – Deliberate-Prudent (strategic trade-off), Inadvertent-Prudent (learned something), Deliberate-Reckless (shortcut taken knowingly), Inadvertent-Reckless (didn't know better). Each requires different response.

- **Velocity Tax** – The ongoing cost of debt measured in slower delivery. A 30% velocity tax means the team delivers 30% less than they could with clean code.

- **Toil** – Manual, repetitive, automatable work that scales with service size. Distinct from overhead. SRE target: &lt;50% toil. When toil exceeds 50%, the team is operationally bankrupt.

- **20% Tax Rule** – Sustainable debt repayment rate. Dedicating 20% of sprint capacity to debt reduction prevents accumulation while maintaining feature velocity.

- **Pain Index** – Quantifying debt by combining frequency of occurrence, severity of impact, and remediation cost. Enables objective prioritization of debt repayment.

---

## Per-Page Term Index

### Agile at Scale & Program Governance
1. Program Increment (PI)
2. Dependency Board
3. Scrum of Scrums
4. Release Train Engineer
5. Big Room Planning

### Alerting Best Practices
1. Signal-to-Noise Ratio
2. Alert Fatigue
3. Multi-Window Burn Rate
4. Symptom vs Cause Alerting
5. Actionable Alerts
6. Page vs Ticket Threshold

### API Lifecycle Management
1. API Versioning Strategy
2. Deprecation Policy
3. Breaking vs Non-Breaking Changes
4. API Gateway
5. Consumer-Driven Contracts
6. API Sunset Period

### API Security
1. OAuth 2.0 / OIDC
2. JWT Claims Validation
3. Rate Limiting
4. API Key Rotation
5. OWASP API Top 10

### Async: Queues vs Pub/Sub
1. Point-to-Point vs Fan-out
2. Message Durability
3. At-Least-Once Delivery
4. Dead Letter Queue
5. Consumer Groups
6. Backpressure Propagation

### Authentication vs Authorization
1. AuthN vs AuthZ
2. RBAC vs ABAC
3. Claims-Based Identity
4. Token Introspection
5. Least Privilege Principle

### Auto-Scaling Strategies
1. Horizontal Pod Autoscaler
2. Predictive vs Reactive Scaling
3. Scale-In Delay
4. Custom Metrics Scaling
5. Vertical Pod Autoscaler
6. Cluster Autoscaler

### Availability Tiers - Reality Check
1. Two Nines (99%)
2. Three Nines (99.9%)
3. Four Nines (99.99%)
4. Five Nines (99.999%)
5. Downtime Budget Translation
6. Tier-to-Architecture Mapping

### Backpressure
1. Flow Control
2. Token Bucket
3. Leaky Bucket
4. Admission Control
5. Load Shedding Priority

### Blast Radius Analysis
1. Failure Domain Mapping
2. Cell Architecture
3. Swimlanes
4. Bulkhead Boundaries
5. Dependency Impact Analysis
6. Cascade Prevention

### Bloom Filters
1. Probabilistic Data Structure
2. False Positive Rate
3. Space-Time Trade-off
4. Membership Testing
5. Cache Miss Prevention

### Branch by Abstraction
1. Parallel Implementation
2. Abstraction Layer
3. Runtime Switching
4. Feature Flag Integration
5. Legacy Deprecation Path

### Bulkhead Pattern
1. Resource Isolation
2. Thread Pool Separation
3. Connection Pool Limits
4. Service Mesh Sidecars
5. Failure Containment

### CAP Theorem - Practical Understanding
1. Consistency vs Availability
2. Partition Tolerance
3. CP vs AP Systems
4. PACELC Extension
5. Real-World Trade-offs

### Capacity Planning
1. Load Testing Baselines
2. Growth Modeling
3. Headroom Buffer
4. Capacity Cliff
5. Seasonal Adjustment
6. Lead Time Calculation

### CapEx vs OpEx Mental Model
1. Capital Expenditure
2. Operational Expenditure
3. Cloud Shift Implications
4. Depreciation Schedules
5. CFO Communication

### Change Data Capture (CDC)
1. Log-Based CDC
2. Debezium
3. Outbox Pattern
4. Event Sourcing Bridge
5. Schema Evolution Handling

### Chaos Engineering
1. Steady State Hypothesis
2. Blast Radius Control
3. GameDay Exercises
4. Failure Injection
5. Mean Time to Detection

### Chaos Engineering & Resilience
1. Resilience Testing
2. Fault Injection Scope
3. Production Chaos
4. Automated Recovery Verification
5. Resilience Score

### CI/CD & Release Engineering
1. Build vs Deploy vs Release
2. Immutable Artifact
3. Feature Flag Lifecycle
4. Trunk-Based Development
5. Progressive Delivery
6. Golden Path
7. Release Train

### Circuit Breaker
1. Closed/Open/Half-Open States
2. Failure Threshold
3. Recovery Timeout
4. Fallback Strategy
5. Cascading Failure Prevention
6. Hystrix Pattern

### Cloud Economics & FinOps
1. Unit Economics
2. Cost Attribution
3. Reserved Instance Strategy
4. Spot Instance Tolerance
5. FinOps Maturity Model
6. Cost Anomaly Detection

### Compliance & Data Sovereignty
1. Data Residency
2. Cross-Border Transfer
3. Sovereignty Requirements
4. Compliance Boundary
5. Audit Trail

### Composite SLA Calculation
1. Serial Multiplication
2. Parallel Redundancy Math
3. Dependency Chain Analysis
4. SLA Budgeting
5. Critical Path Identification

### Content Delivery Networks (CDN)
1. Edge Caching
2. Cache Hit Ratio
3. Origin Shield
4. Purge Strategy
5. TTL Optimization
6. Geographic Distribution

### Cost Model Fundamentals
1. Compute Pricing Models
2. Storage Tiers
3. Network Transfer Costs
4. API Call Pricing
5. Support Tier Costs

### Count-Min Sketch
1. Frequency Estimation
2. Stream Processing
3. Heavy Hitters Detection
4. Space-Accuracy Trade-off
5. Hash Function Selection

### Data Architecture Patterns
1. Data Lake vs Data Warehouse
2. Lambda Architecture
3. Kappa Architecture
4. Data Mesh
5. Medallion Architecture

### Data Classification Framework
1. Public/Internal/Confidential/Restricted
2. PII Identification
3. Data Labeling
4. Access Control Mapping
5. Retention Policies

### Data Governance & Privacy
1. Data Lineage
2. Consent Management
3. Right to Erasure
4. Data Minimization
5. Privacy by Design
6. Data Processing Agreements

### Data Transfer Optimization
1. Compression Strategies
2. Protocol Selection
3. Batching vs Streaming
4. Regional Affinity
5. Egress Minimization

### Database Sharding Strategies
1. Consistent Hashing
2. Range Partitioning
3. Hash Partitioning
4. Shard Key Selection
5. Cross-Shard Query Tax
6. Rebalancing Strategy

### Distributed Tracing Architecture
1. Trace Context Propagation
2. Span Relationships
3. Sampling Strategies
4. Trace ID Correlation
5. Latency Attribution

### DNS Architecture
1. DNS Resolution Chain
2. TTL Strategy
3. GeoDNS
4. DNS Failover
5. Record Types (A, CNAME, ALIAS)

### Dual-Write / Dual-Read Pattern
1. Consistency Window
2. Write Verification
3. Read Comparison
4. Cutover Strategy
5. Rollback Safety

### Encryption Strategy
1. Encryption at Rest
2. Encryption in Transit
3. Key Management
4. Envelope Encryption
5. HSM Integration

### Error Budgets - Practical Application
1. Budget Allocation
2. Burn Rate Thresholds
3. Policy Enforcement
4. Budget Reset Period
5. Stakeholder Communication

### Expected Loss Calculation
1. Annual Loss Expectancy
2. Risk Quantification
3. Control Effectiveness
4. Cost-Benefit Analysis
5. Risk Register

### Experimentation Platforms
1. A/B Test Statistical Rigor
2. Sample Size Calculation
3. Guardrail Metrics
4. Feature Flag Integration
5. Experiment Velocity
6. Metric Sensitivity

### FinOps & Cost Engineering
1. Cloud Unit Economics
2. Cost Allocation Tags
3. Commitment Strategy
4. Waste Identification
5. FinOps Operating Model
6. Cost Forecasting

### GDPR - What You Must Know
1. Lawful Basis
2. Data Subject Rights
3. Controller vs Processor
4. Cross-Border Transfer Mechanisms
5. Breach Notification (72hr)
6. DPA Requirements

### Geo-Routing
1. Latency-Based Routing
2. Geolocation Routing
3. Failover Routing
4. Weighted Routing
5. Health Check Integration

### Horizontal Scaling Patterns
1. Stateless Service Design
2. Session Externalization
3. Load Balancer Algorithms
4. Connection Draining
5. Scale-Out vs Scale-Up Trade-off

### HyperLogLog (HLL)
1. Cardinality Estimation
2. Memory Efficiency
3. Union Operations
4. Error Bounds
5. Streaming Analytics

### Idempotency - Critical Concept
1. Idempotency Keys
2. At-Least-Once Safety
3. Deduplication Window
4. Retry Safety
5. State Machine Idempotency

### Incident Management & Postmortems
1. Incident Commander (IC)
2. Severity Classification
3. Blameless Postmortem
4. 5 Whys / Swiss Cheese
5. Action Item Governance
6. Fix-Forward vs Rollback

### Latency Physics
1. Speed of Light Limits
2. Round-Trip Time
3. Tail Latency (P99)
4. Latency Percentiles
5. Geographic Impact

### Leader Election
1. Consensus-Based Election
2. Lease-Based Leadership
3. Split-Brain Prevention
4. Fencing Tokens
5. Leader Failover

### LLM Serving Considerations
1. Token Throughput
2. Inference Latency
3. Model Sharding
4. Batching Strategies
5. GPU Utilization
6. Cost Per Token

### Load Balancing Deep Dive
1. L4 vs L7 Load Balancing
2. Health Check Strategies
3. Connection Pooling
4. Sticky Sessions Trade-off
5. Weighted Distribution

### MLOps Pipeline
1. Model Registry
2. Feature Store
3. Training Pipeline
4. Model Versioning
5. A/B Model Testing
6. Model Drift Detection

### Multi-Region Architecture
1. Active-Active vs Active-Passive
2. Data Replication Lag
3. Conflict Resolution
4. Regional Failover
5. Global Load Balancing
6. Consistency Trade-offs

### Multi-Region Patterns
1. Follow-the-Sun
2. Read Local / Write Global
3. Regional Isolation
4. Cross-Region Latency Budget
5. Disaster Recovery RTO/RPO

### Paxos and Raft
1. Consensus Algorithm
2. Leader-Based Consensus
3. Log Replication
4. Term/Epoch Numbers
5. Membership Changes

### PCI DSS for Payment Systems
1. Cardholder Data Environment
2. Network Segmentation
3. Tokenization
4. SAQ vs ROC
5. Compensating Controls

### Protocol Fundamentals
1. TCP vs UDP Trade-offs
2. HTTP/2 Multiplexing
3. HTTP/3 QUIC
4. gRPC Streaming
5. WebSocket Use Cases

### Real-Time: Polling vs WebSockets
1. Connection Overhead
2. Server Push
3. Long Polling
4. SSE (Server-Sent Events)
5. Scale Implications

### Replication Patterns
1. Synchronous vs Asynchronous
2. Leader-Follower
3. Multi-Leader
4. Leaderless (Quorum)
5. Replication Lag Handling

### Reserved vs Spot Strategy
1. On-Demand Baseline
2. Reserved Coverage Ratio
3. Spot Interruption Tolerance
4. Savings Plan Flexibility
5. Instance Family Mix

### Retry Strategies
1. Exponential Backoff
2. Jitter Implementation
3. Retry Budgets
4. Circuit Breaker Integration
5. Idempotency Requirements

### Risk Quantification
1. Risk Matrix
2. Impact Assessment
3. Probability Estimation
4. Risk Appetite
5. Mitigation Cost Analysis

### Scaling Architecture
1. Horizontal vs Vertical
2. Stateless Design
3. Database Scaling Patterns
4. Cache Layer Scaling
5. CDN Scaling

### SLA Mathematics & Reliability
1. Nines Calculation
2. Composite SLA Math
3. Dependency Chain Impact
4. Availability Targets
5. Downtime Translation

### SLO/SLA/SLI - Precision Matters
1. SLI Selection Criteria
2. SLO Target Setting
3. SLA Penalty Structure
4. Error Budget Derivation
5. Measurement Methodology

### SOC 2 - Trust Framework
1. Trust Service Criteria
2. Type I vs Type II
3. Control Objectives
4. Evidence Collection
5. Continuous Compliance

### SQL vs NoSQL - Real Trade-offs
1. ACID vs BASE
2. Schema Flexibility
3. Query Patterns
4. Scaling Characteristics
5. Operational Complexity

### Strangler Fig Pattern
1. Incremental Migration
2. Facade Layer
3. Event Interception
4. Traffic Routing
5. Legacy Decommission

### Sync: REST vs gRPC vs GraphQL
1. Contract Definition
2. Payload Efficiency
3. Streaming Support
4. Tooling Ecosystem
5. Use Case Mapping

### Team Topologies & Conway's Law
1. Stream-Aligned Teams
2. Platform Teams
3. Enabling Teams
4. Complicated-Subsystem Teams
5. Inverse Conway Maneuver
6. Cognitive Load Management

### Technical Debt Quantification
1. Fowler's Debt Quadrant
2. Velocity Tax Measurement
3. Toil Calculation
4. KTLO Ratio
5. Pain Index
6. 20% Tax Rule

### Technical Strategy & RFC Process
1. RFC Lifecycle
2. Design Review Board
3. ADR (Architecture Decision Records)
4. Technical Roadmap
5. Strategy Alignment

### The Consensus Problem
1. FLP Impossibility
2. Byzantine Fault Tolerance
3. Safety vs Liveness
4. Consensus Latency
5. Membership Changes

### The Golden Signals (Google SRE)
1. Latency
2. Traffic
3. Errors
4. Saturation
5. Signal Correlation

### The Three Pillars - Deep Dive
1. Logs (Events)
2. Metrics (Aggregates)
3. Traces (Requests)
4. Pillar Correlation
5. Observability Maturity

### Trade-offs Summary
1. CAP Trade-offs
2. Cost vs Performance
3. Consistency vs Availability
4. Complexity vs Flexibility
5. Build vs Buy

### Training vs Inference
1. GPU vs CPU Workloads
2. Batch vs Real-Time
3. Cost Profile Differences
4. Scaling Characteristics
5. Hardware Selection

### Vector Databases and RAG
1. Embedding Dimensions
2. Similarity Search
3. Index Types (HNSW, IVF)
4. Chunking Strategy
5. Retrieval Quality Metrics

### Vertical Scaling Limits
1. Moore's Law Constraints
2. Single-Point-of-Failure Risk
3. Instance Size Ceilings
4. Upgrade Downtime
5. Cost Curve Inflection

### Zero Trust Architecture
1. Never Trust, Always Verify
2. Micro-Segmentation
3. Identity-Based Access
4. Continuous Verification
5. Least Privilege Enforcement
