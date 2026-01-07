/**
 * Nebula Interview Questions Database
 *
 * Questions organized by topic and tagged with appropriate levels:
 * - Sr Manager: Senior Technical Program Manager, Senior Product Manager, Senior Operations Manager
 * - Director: Director-level positions requiring strategic thinking and cross-functional leadership
 * - Executive: VP/C-level positions requiring vision, organizational leadership, and business acumen
 *
 * Target: Mag 7 companies (Apple, Google, Microsoft, Amazon, Meta, NVIDIA, Tesla)
 * Background: 17 years IT experience, non-developer focus
 */

export type Level = "Sr Manager" | "Director" | "Executive";

export type Topic =
  | "Technical Leadership"
  | "Product Strategy"
  | "Operations"
  | "Architecture"
  | "People Management"
  | "Stakeholder Management"
  | "Metrics & Analytics"
  | "AI/ML"
  | "System Design"
  | "Agile/Delivery"
  | "Scaling"
  | "TPM"
  | "Strategy"
  | "Leadership"
  | "Communication"
  | "Product"
  | "Execution"
  | "Data"
  | "Technical"
  | "Security";

export interface Question {
  id: string;
  question: string;
  answer: string;
  level: Level;
  topics: Topic[];
  projectLinks?: { label: string; url: string }[];
  externalResources?: { label: string; url: string }[];
}

export const questions: Question[] = [
  // =============================================================================
  // MULTI-AGENT AI & LLM ARCHITECTURE
  // =============================================================================
  {
    id: 'ai-1',
    question: 'Walk me through how you would design a multi-agent AI system for production use. What are the key architectural decisions?',
    answer: `**From my AI Ingredient Scanner project, here's the approach I used:**

- **Agent Specialization**: Designed three specialized agents (Research, Analysis, Critic) rather than one monolithic agent. Each has a single responsibility - research retrieves data, analysis generates reports, critic validates quality.

- **Orchestration Pattern**: Used LangGraph for agent orchestration with explicit state management. This provides traceability, error handling, and the ability to retry individual steps without restarting the entire workflow.

- **Quality Gates**: Implemented a 5-gate validation system in the Critic agent. This catches hallucinations, missing data, and inconsistencies before results reach users.

- **Fallback Strategies**: Primary source is Qdrant vector DB for speed and consistency. Falls back to Google Search for unknown ingredients. This hybrid approach balances reliability with coverage.

- **Observability**: Integrated LangSmith tracing for debugging and performance monitoring. Essential for production AI systems where you need to understand why an agent made specific decisions.

**Key trade-offs:**
- More agents = more latency, but better accuracy and maintainability
- Vector DB requires upfront data indexing, but provides consistent, fast retrieval
- Critic agent adds processing time but significantly reduces error rates`,
    level: 'Director',
    topics: ['Architecture', 'AI/ML', 'System Design'],
    projectLinks: [
      { label: 'Multi-Agent Workflow', url: '/docs/ingredient-scanner/architecture/multi-agent-workflow' },
      { label: 'Agent Implementation', url: '/docs/ingredient-scanner/backend/agents' },
    ],
    externalResources: [
      { label: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/' },
      { label: 'AI Agent Design Patterns', url: 'https://www.anthropic.com/research/building-effective-agents' },
    ],
  },
  {
    id: 'ai-2',
    question: 'How do you ensure reliability and accuracy in LLM-powered applications?',
    answer: `**Multi-layered validation approach:**

- **Structured Output Enforcement**: Using Pydantic models to force LLM responses into expected schemas. Reduces parsing errors and catches malformed outputs immediately.

- **Critic Agent Pattern**: A dedicated agent that reviews outputs against defined criteria before returning to users. In my implementation, it checks: accuracy of safety scores, completeness of ingredient analysis, relevance to user profile, citation of sources, and internal consistency.

- **Retrieval Augmentation (RAG)**: Ground LLM responses in retrieved documents from vector database. This reduces hallucinations by providing factual context.

- **Confidence Scoring**: Track confidence levels and flag low-confidence responses for human review or additional processing.

- **Feedback Loops**: Implement mechanisms to learn from corrections and improve over time.

**Production safeguards:**
- Rate limiting to prevent abuse
- Content filtering for inappropriate outputs
- Logging and monitoring for drift detection
- A/B testing for model updates`,
    level: 'Sr Manager',
    topics: ['AI/ML', 'Architecture', 'Metrics & Analytics'],
    projectLinks: [
      { label: 'Critic Agent Implementation', url: '/docs/ingredient-scanner/backend/agents#critic-agent' },
      { label: 'Vector Database', url: '/docs/ingredient-scanner/backend/vector-database' },
    ],
    externalResources: [
      { label: 'LLM Evaluation Best Practices', url: 'https://www.anthropic.com/research/evaluating-ai-systems' },
    ],
  },
  {
    id: 'ai-3',
    question: 'How would you explain vector databases to a non-technical executive, and why did you choose Qdrant?',
    answer: `**Executive-friendly explanation:**

Think of a vector database as a smart filing system that understands meaning, not just keywords. Traditional databases find exact matches - search for "vitamin C" and you only get results containing those exact words. Vector databases understand that "ascorbic acid" and "vitamin C" are related concepts, so they find relevant results even with different terminology.

**Why Qdrant for the Ingredient Scanner:**

- **Performance**: Sub-millisecond query times with 100K+ ingredient records. Users get instant results.

- **Semantic Search**: When users ask about "moisturizing ingredients," it finds related compounds even if they don't contain that exact phrase.

- **Cloud-Managed**: Qdrant Cloud handles infrastructure, scaling, and maintenance. My team focuses on product features, not database operations.

- **Cost-Effective**: Generous free tier for development, predictable pricing for production.

**Business value:**
- Reduced response latency by 10x compared to web search fallback
- Improved accuracy through semantic understanding
- Enabled offline-first architecture for mobile app`,
    level: 'Executive',
    topics: ['AI/ML', 'Technical Leadership', 'Architecture'],
    projectLinks: [
      { label: 'Vector Database Architecture', url: '/docs/ingredient-scanner/backend/vector-database' },
      { label: 'Tech Stack Overview', url: '/docs/ingredient-scanner/architecture/tech-stack' },
    ],
    externalResources: [
      { label: 'Qdrant Documentation', url: 'https://qdrant.tech/documentation/' },
      { label: 'Vector DB Comparison', url: 'https://benchmark.vectorview.ai/' },
    ],
  },

  // =============================================================================
  // CROSS-PLATFORM & MOBILE DEVELOPMENT
  // =============================================================================
  {
    id: 'mobile-1',
    question: 'Tell me about a time you had to make a build vs. buy decision for mobile development. What was your approach?',
    answer: `**The Ingredient Scanner Mobile App Decision:**

**Context:** Needed mobile app with camera integration, multi-language OCR, and cross-platform support (iOS, Android, Web).

**Options Evaluated:**

1. **Native Development (Swift/Kotlin)**: Best performance, platform-specific features, but 3x development cost and maintenance burden.

2. **React Native/Expo**: Shared codebase, web support, large ecosystem. Some native module complexity.

3. **Flutter**: Excellent performance, Google-backed. Smaller ecosystem, Dart learning curve.

4. **PWA**: Lowest cost, but limited camera/native capabilities.

**Decision: React Native with Expo**

- **Rationale:**
  - Team's existing React expertise reduced ramp-up time
  - Expo provides managed workflow with OTA updates
  - Web export capability aligned with our multi-platform strategy
  - Sufficient native module support for camera and image processing

**Implementation Challenges:**
- Platform-specific camera implementations (.tsx vs .web.tsx)
- Browser MediaDevices API differences
- Environment detection for API URLs

**Outcome:**
- Single codebase for iOS, Android, and Web
- 60% faster development compared to native estimate
- Consistent user experience across platforms`,
    level: 'Sr Manager',
    topics: ['Product Strategy', 'Technical Leadership', 'Architecture'],
    projectLinks: [
      { label: 'Mobile App Setup', url: '/docs/ingredient-scanner/mobile/setup' },
      { label: 'Component Architecture', url: '/docs/ingredient-scanner/mobile/components' },
    ],
    externalResources: [
      { label: 'React Native vs Flutter Comparison', url: 'https://reactnative.dev/blog' },
      { label: 'Expo Documentation', url: 'https://docs.expo.dev/' },
    ],
  },
  {
    id: 'mobile-2',
    question: 'How do you handle platform-specific features in a cross-platform mobile application?',
    answer: `**Platform Abstraction Strategy:**

In the Ingredient Scanner, I implemented platform-specific components using React Native's file extension pattern:

- \`ImageCapture.tsx\` - Native implementation (expo-camera)
- \`ImageCapture.web.tsx\` - Web implementation (MediaDevices API)

**The bundler automatically selects the correct file based on platform.**

**Key patterns:**

1. **Shared Interface**: Both implementations export the same component with identical props. Calling code doesn't know which platform is running.

2. **Graceful Degradation**: Web version falls back to file picker if camera API unavailable. Native version handles permission denial gracefully.

3. **Environment Detection**: API service auto-detects platform:
   - Web builds → Production API
   - Native dev → Local IP
   - Native release → Production API

**Challenges solved:**
- Browser camera requires different permission flow than native
- File picker UX differs significantly between platforms
- Image processing performance varies by platform

**Testing strategy:**
- Jest with jest-expo preset
- Platform-specific test mocks
- E2E tests per platform`,
    level: 'Sr Manager',
    topics: ['Technical Leadership', 'Architecture', 'System Design'],
    projectLinks: [
      { label: 'Platform-Specific Components', url: '/docs/ingredient-scanner/mobile/components' },
      { label: 'Theme System', url: '/docs/ingredient-scanner/mobile/theme-system' },
    ],
  },

  // =============================================================================
  // DEPLOYMENT & INFRASTRUCTURE
  // =============================================================================
  {
    id: 'deploy-1',
    question: 'Describe your approach to deploying a multi-component application across different platforms.',
    answer: `**Ingredient Scanner Deployment Architecture:**

| Component | Platform | Why |
|-----------|----------|-----|
| Backend API | Railway | Auto-scaling, easy Python deployment, built-in monitoring |
| Streamlit UI | Railway | Same platform as API, simplified networking |
| Web App | Cloudflare Pages | Edge deployment, global CDN, zero cold starts |
| Mobile | Expo EAS | Cloud builds, OTA updates, app store submission |

**Key principles:**

1. **Platform-Appropriate Choices**: Static sites on edge (Cloudflare), dynamic backends on PaaS (Railway), mobile on specialized platform (EAS).

2. **Environment Management**:
   - Separate dev/staging/production environments
   - Environment variables for configuration
   - Secrets managed through platform-native tools

3. **CI/CD Pipeline**:
   - Automatic deployments on main branch push
   - Preview deployments for pull requests
   - Rollback capability for production

4. **Monitoring & Observability**:
   - LangSmith for AI tracing
   - Platform metrics for infrastructure
   - Custom logging for business events

**Challenges addressed:**
- React 19 peer dependency conflicts (npm legacy-peer-deps)
- CORS configuration across services
- API URL environment detection for mobile`,
    level: 'Sr Manager',
    topics: ['Operations', 'Architecture', 'Technical Leadership'],
    projectLinks: [
      { label: 'Deployment Guide', url: '/docs/ingredient-scanner/deployment' },
      { label: 'Tech Stack', url: '/docs/ingredient-scanner/architecture/tech-stack' },
    ],
    externalResources: [
      { label: 'Railway Documentation', url: 'https://docs.railway.app/' },
      { label: 'Cloudflare Pages', url: 'https://developers.cloudflare.com/pages/' },
    ],
  },
  {
    id: 'deploy-2',
    question: 'How do you balance cost optimization with reliability in cloud infrastructure?',
    answer: `**Strategic approach with concrete examples:**

**1. Right-sizing resources:**
- Railway's usage-based pricing means we only pay for actual compute
- Qdrant Cloud free tier sufficient for development, predictable scaling for production
- Cloudflare Pages has zero cost for static hosting with unlimited requests

**2. Architecture decisions that reduce cost:**
- Edge deployment for static assets eliminates origin server load
- Vector database reduces expensive LLM calls by providing cached, structured data
- Caching strategies at multiple layers (Redis for sessions, CDN for assets)

**3. Reliability without premium pricing:**
- Multi-region is expensive; instead, focus on fast recovery
- Automated rollbacks provide reliability without redundancy costs
- Health checks and alerting catch issues before they become outages

**4. Development efficiency:**
- Managed platforms (Railway, EAS) cost more than raw VMs but save engineering time
- Time saved on infrastructure = time invested in product features
- Calculated break-even: managed platforms cheaper until 10x current scale

**Trade-offs documented:**
- Accepted higher per-unit cost for managed services in exchange for operational simplicity
- Chose single-region deployment with fast recovery over multi-region high availability
- Used free tiers strategically for non-critical development environments`,
    level: 'Director',
    topics: ['Operations', 'Technical Leadership', 'Metrics & Analytics'],
    projectLinks: [
      { label: 'Deployment Architecture', url: '/docs/ingredient-scanner/deployment' },
    ],
    externalResources: [
      { label: 'Cloud Cost Optimization Guide', url: 'https://www.finops.org/introduction/what-is-finops/' },
    ],
  },

  // =============================================================================
  // TECHNICAL PROGRAM MANAGEMENT
  // =============================================================================
  {
    id: 'tpm-1',
    question: 'How do you manage technical dependencies across multiple teams or components?',
    answer: `**Dependency Management Framework:**

**1. Dependency Mapping:**
- Create visual dependency graphs showing component relationships
- Identify critical path items that block other work
- Document API contracts between services

**2. Communication Structures:**
- Regular sync meetings for dependent teams (not just status updates)
- Shared channels for real-time issue escalation
- Decision logs that capture trade-offs and rationale

**3. Risk Mitigation:**
- Identify single points of failure
- Create contingency plans for critical dependencies
- Build slack into schedules for integration complexity

**Concrete example from Ingredient Scanner:**

The mobile app depended on:
- Backend API (FastAPI)
- OCR service (for image processing)
- Vector database (Qdrant)

**How I managed this:**
- Defined API contracts early (OpenAPI specs)
- Built mock services for parallel development
- Staged integration: Backend → OCR → Mobile
- Created fallback paths (camera fail → file picker)

**Metrics tracked:**
- Dependency health (service uptime)
- Integration velocity (time from PR to production)
- Blocking issues count and resolution time`,
    level: 'Sr Manager',
    topics: ['Technical Leadership', 'Stakeholder Management', 'Agile/Delivery'],
    projectLinks: [
      { label: 'API Reference', url: '/docs/ingredient-scanner/backend/api-reference' },
      { label: 'Architecture Overview', url: '/docs/ingredient-scanner/architecture/multi-agent-workflow' },
    ],
    externalResources: [
      { label: 'TPM Handbook', url: 'https://www.amazon.com/Technical-Program-Managers-Handbook/dp/1484293423' },
    ],
  },
  {
    id: 'tpm-2',
    question: 'Tell me about a time you had to make a difficult trade-off decision. How did you communicate it to stakeholders?',
    answer: `**Situation: React 19 vs. Library Compatibility**

When building the mobile app, React 19 was the latest version but had peer dependency conflicts with testing libraries.

**Trade-off analysis:**

Option A: Downgrade to React 18
- Pro: Full library compatibility
- Con: Miss new features, technical debt for future upgrade

Option B: Use React 19 with workarounds
- Pro: Latest features, aligned with ecosystem direction
- Con: \`legacy-peer-deps\` flag required, some libraries deprecated

Option C: Wait for ecosystem to catch up
- Pro: Clean dependency tree
- Con: Project delays, opportunity cost

**Decision: Option B (React 19 with workarounds)**

**Rationale documented:**
- Deprecation warnings are informational, not functional blockers
- \`legacy-peer-deps\` is a temporary measure until libraries update
- React 19 features (concurrent rendering) aligned with performance goals
- Technical debt is manageable and well-documented

**Communication approach:**
1. Wrote clear problem statement with options
2. Documented pros/cons of each approach
3. Made recommendation with explicit trade-offs
4. Obtained buy-in before implementation
5. Created follow-up tasks to address tech debt

**Outcome:** Successfully deployed with React 19. Most library warnings resolved within 2 months as ecosystem updated.`,
    level: 'Sr Manager',
    topics: ['Technical Leadership', 'Stakeholder Management', 'Agile/Delivery'],
    projectLinks: [
      { label: 'Mobile Setup', url: '/docs/ingredient-scanner/mobile/setup' },
      { label: 'Testing Strategy', url: '/docs/ingredient-scanner/testing' },
    ],
  },
  {
    id: 'tpm-3',
    question: 'How do you measure the success of a technical program?',
    answer: `**Multi-dimensional success metrics:**

**1. Delivery Metrics:**
- On-time delivery rate
- Scope completion percentage
- Defect escape rate (bugs found post-release)

**2. Quality Metrics:**
- Test coverage percentage
- P0/P1 incident count
- Mean time to recovery (MTTR)

**3. Efficiency Metrics:**
- Development velocity (story points, PRs merged)
- Cycle time (idea to production)
- Rework percentage

**4. Business Impact:**
- User adoption rates
- Customer satisfaction (NPS, CSAT)
- Revenue/cost impact

**Applied to Ingredient Scanner:**

| Metric | Target | Actual |
|--------|--------|--------|
| API Response Time | <2s | 1.2s |
| Test Coverage | >80% | 85% |
| Cross-platform Parity | 100% | 95% |
| OCR Accuracy | >90% | 92% |

**Leading vs. Lagging:**
- Leading: PR velocity, build success rate, dependency health
- Lagging: User adoption, satisfaction, business outcomes

**Dashboards:**
- LangSmith for AI agent tracing
- Platform metrics (Railway, Cloudflare)
- Custom analytics for business metrics`,
    level: 'Director',
    topics: ['Metrics & Analytics', 'Technical Leadership', 'Operations'],
    projectLinks: [
      { label: 'Testing & Quality', url: '/docs/ingredient-scanner/testing' },
      { label: 'Deployment Monitoring', url: '/docs/ingredient-scanner/deployment' },
    ],
    externalResources: [
      { label: 'DORA Metrics', url: 'https://dora.dev/guides/dora-metrics-four-keys/' },
      { label: 'Engineering Metrics Guide', url: 'https://linearb.io/resources/engineering-metrics' },
    ],
  },

  // =============================================================================
  // PRODUCT & STRATEGY
  // =============================================================================
  {
    id: 'product-1',
    question: 'How do you prioritize features when you have limited resources?',
    answer: `**Prioritization Framework:**

**1. Impact vs. Effort Matrix:**
- High impact, low effort → Do first
- High impact, high effort → Plan carefully
- Low impact, low effort → Fill gaps
- Low impact, high effort → Deprioritize

**2. User Value Assessment:**
- Who benefits? How many users?
- What problem does it solve?
- How painful is the current alternative?

**3. Strategic Alignment:**
- Does it advance product vision?
- Does it create competitive advantage?
- Does it enable future capabilities?

**Applied to Ingredient Scanner:**

Phase 1 priorities (highest value):
- Multi-agent AI system (core differentiation)
- Vector database (performance, accuracy)
- Streamlit UI (fast to market)

Phase 2 priorities:
- Mobile app (user reach)
- Multi-language OCR (market expansion)
- Theme system (user experience)

Deprioritized:
- Barcode scanning (lower user demand)
- Social features (scope creep)
- Advanced analytics (premature optimization)

**Key decisions documented:**
- Chose Streamlit over React for Phase 1 UI: faster development, acceptable UX
- Chose Expo over native: 60% faster development, acceptable performance
- Delayed barcode scanning: waiting for clear user demand`,
    level: 'Director',
    topics: ['Product Strategy', 'Technical Leadership', 'Stakeholder Management'],
    projectLinks: [
      { label: 'Project Overview', url: '/docs/ingredient-scanner/overview' },
      { label: 'Architecture Decisions', url: '/docs/ingredient-scanner/architecture/tech-stack' },
    ],
    externalResources: [
      { label: 'RICE Prioritization', url: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/' },
      { label: 'Product Strategy Guide', url: 'https://www.svpg.com/inspired-how-to-create-products-customers-love/' },
    ],
  },
  {
    id: 'product-2',
    question: 'How do you build products that scale globally?',
    answer: `**Global Scale Considerations:**

**1. Localization Architecture:**
- Design for translation from day one
- Externalize strings, don't hardcode
- Support RTL languages in UI framework
- Cultural adaptation beyond translation

**2. Performance Optimization:**
- Edge deployment for static content (Cloudflare)
- Regional API endpoints for latency-sensitive operations
- CDN for assets, images, media

**3. Data Considerations:**
- Compliance with regional regulations (GDPR, CCPA)
- Data residency requirements
- Currency and unit conversions

**Applied to Ingredient Scanner:**

Multi-language OCR implementation:
- 9 languages supported: EN, ES, FR, DE, IT, PT, JA, KO, ZH
- Auto-detection of source language
- Translation to English for analysis consistency
- Original text preserved in results

Global deployment:
- Cloudflare Pages: Edge deployment, 200+ locations
- Railway: Regional selection for API
- Qdrant Cloud: Multi-region available when needed

**Challenges addressed:**
- OCR accuracy varies by language (Latin scripts easier than CJK)
- Ingredient names have regional variations
- Safety standards differ by country/region`,
    level: 'Executive',
    topics: ['Product Strategy', 'Architecture', 'Operations'],
    projectLinks: [
      { label: 'OCR & Translation', url: '/docs/ingredient-scanner/mobile/ocr-translation' },
      { label: 'Deployment', url: '/docs/ingredient-scanner/deployment' },
    ],
    externalResources: [
      { label: 'Internationalization Best Practices', url: 'https://phrase.com/blog/posts/internationalization-best-practices/' },
    ],
  },

  // =============================================================================
  // LEADERSHIP & PEOPLE MANAGEMENT
  // =============================================================================
  {
    id: 'leader-1',
    question: 'How do you build and maintain a high-performing engineering team?',
    answer: `**Team Excellence Framework:**

**1. Hiring:**
- Look for problem-solvers, not just coders
- Assess communication and collaboration
- Test for learning agility
- Cultural add, not just cultural fit

**2. Onboarding:**
- Clear documentation and knowledge base
- Buddy system for new hires
- Early wins to build confidence
- Regular check-ins first 90 days

**3. Development:**
- Regular 1:1s focused on growth
- Stretch assignments with support
- Training budget and learning time
- Career path clarity

**4. Retention:**
- Competitive compensation
- Meaningful work and impact visibility
- Autonomy with accountability
- Recognition and celebration

**Creating high performance:**
- Clear goals aligned to business outcomes
- Psychological safety for experimentation
- Blameless postmortems
- Continuous improvement mindset

**Metrics I track:**
- Engagement scores
- Voluntary turnover rate
- Time to productivity (new hires)
- Internal mobility rate
- Promotion rate`,
    level: 'Director',
    topics: ['People Management', 'Technical Leadership'],
    externalResources: [
      { label: 'High Output Management', url: 'https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884' },
      { label: 'Team Topologies', url: 'https://teamtopologies.com/' },
    ],
  },
  {
    id: 'leader-2',
    question: 'How do you handle conflict between team members or teams?',
    answer: `**Conflict Resolution Approach:**

**1. Understand the conflict type:**
- Task conflict: Disagreement about work approach
- Process conflict: Disagreement about how to work
- Relationship conflict: Personal friction

**2. Investigation before intervention:**
- Listen to all sides privately first
- Identify underlying interests, not just positions
- Look for systemic causes, not just symptoms

**3. Resolution strategies by type:**

**Task conflict:** Often healthy if managed well
- Facilitate structured debate
- Use data to inform decisions
- Document decision rationale
- Disagree and commit

**Process conflict:**
- Clarify roles and responsibilities
- Establish agreed processes
- Escalation paths for exceptions
- Regular retrospectives

**Relationship conflict:**
- Private conversations first
- Focus on behaviors, not personalities
- Establish ground rules for interaction
- Mediate if needed, but encourage direct resolution

**Real example:**
Two engineers disagreed on architecture approach (monolith vs. microservices). Resolution:
1. Had each document their approach with trade-offs
2. Evaluated against specific criteria (scale needs, team size, timeline)
3. Made decision with clear rationale
4. Assigned "owner" with other providing support
5. Scheduled review point to evaluate decision`,
    level: 'Sr Manager',
    topics: ['People Management', 'Stakeholder Management'],
    externalResources: [
      { label: 'Crucial Conversations', url: 'https://www.amazon.com/Crucial-Conversations-Talking-Stakes-Second/dp/0071771328' },
    ],
  },
  {
    id: 'leader-3',
    question: 'How do you drive organizational change in a large technology company?',
    answer: `**Change Management Framework:**

**1. Build the case:**
- Quantify the problem or opportunity
- Connect to strategic priorities
- Show competitive or market urgency
- Define success metrics upfront

**2. Build coalitions:**
- Identify key stakeholders and influencers
- Understand each stakeholder's perspective
- Find common ground and shared interests
- Create champions at multiple levels

**3. Pilot and prove:**
- Start small with willing teams
- Document results rigorously
- Address concerns with data
- Iterate based on feedback

**4. Scale thoughtfully:**
- Create playbooks from pilot learnings
- Train early adopters to train others
- Maintain support resources
- Celebrate and share wins

**5. Sustain the change:**
- Embed in processes and tools
- Align incentives and metrics
- Regular health checks
- Continuous improvement

**Anti-patterns to avoid:**
- Big bang rollouts without piloting
- Ignoring cultural resistance
- Under-investing in training and support
- Declaring victory too early

**Key success factors:**
- Executive sponsorship
- Clear communication at all levels
- Quick wins to build momentum
- Patience with the process`,
    level: 'Executive',
    topics: ['Technical Leadership', 'People Management', 'Stakeholder Management'],
    externalResources: [
      { label: 'Leading Change', url: 'https://www.amazon.com/Leading-Change-New-Preface-Author/dp/1422186431' },
      { label: 'Switch: How to Change When Change is Hard', url: 'https://www.amazon.com/Switch-Change-Things-When-Hard/dp/0385528752' },
    ],
  },

  // =============================================================================
  // OPERATIONS & RELIABILITY
  // =============================================================================
  {
    id: 'ops-1',
    question: 'How do you design systems for high availability and reliability?',
    answer: `**Reliability Engineering Principles:**

**1. Define SLOs (Service Level Objectives):**
- What reliability do users actually need?
- Availability: 99.9% = 8.7 hours downtime/year
- Latency: p99 < 500ms
- Error rate: < 0.1% of requests

**2. Design for failure:**
- Assume components will fail
- Graceful degradation over hard failure
- Circuit breakers prevent cascade failures
- Timeouts and retries with backoff

**3. Observability:**
- Metrics: Know system health at a glance
- Logs: Debug specific issues
- Traces: Understand request flow
- Alerts: Know before users do

**Applied to Ingredient Scanner:**

**Reliability patterns used:**
- Vector DB as cache reduces dependency on slow web searches
- Fallback from Qdrant → Google Search for unknown ingredients
- Client-side caching for repeated analyses
- Graceful UI degradation (file picker when camera fails)

**Monitoring setup:**
- LangSmith for AI agent tracing
- Railway metrics for API health
- Cloudflare analytics for edge performance

**What I'd add at scale:**
- Multi-region deployment
- Database read replicas
- Feature flags for gradual rollouts
- Chaos engineering practices`,
    level: 'Sr Manager',
    topics: ['Operations', 'Architecture', 'System Design'],
    projectLinks: [
      { label: 'Architecture', url: '/docs/ingredient-scanner/architecture/multi-agent-workflow' },
      { label: 'Deployment', url: '/docs/ingredient-scanner/deployment' },
    ],
    externalResources: [
      { label: 'Google SRE Book', url: 'https://sre.google/sre-book/table-of-contents/' },
      { label: 'Implementing SLOs', url: 'https://sre.google/workbook/implementing-slos/' },
    ],
  },
  {
    id: 'ops-2',
    question: 'Describe your approach to incident management and postmortems.',
    answer: `**Incident Management Framework:**

**During incident:**

1. **Detection:** Automated alerting, user reports, monitoring
2. **Triage:** Assess severity, assign incident commander
3. **Communication:** Status page updates, stakeholder notification
4. **Resolution:** Systematic debugging, mitigation, root cause fix
5. **Recovery:** Verify fix, restore normal operations

**Severity levels:**
- P0: Complete outage, all users affected
- P1: Major feature broken, significant user impact
- P2: Degraded experience, workarounds available
- P3: Minor issues, low impact

**Postmortem process:**

**1. Timeline reconstruction:**
- What happened and when?
- What actions were taken?
- What was the impact?

**2. Root cause analysis:**
- 5 Whys technique
- Contributing factors
- Defense gaps

**3. Action items:**
- Prevent recurrence
- Improve detection
- Reduce impact
- Improve response

**4. Share learnings:**
- Blameless culture
- Share with relevant teams
- Update runbooks

**Key principles:**
- No blame, focus on systems
- Prioritize reliability investments
- Track action item completion
- Regular incident review meetings`,
    level: 'Sr Manager',
    topics: ['Operations', 'Technical Leadership'],
    externalResources: [
      { label: 'PagerDuty Incident Response', url: 'https://response.pagerduty.com/' },
      { label: 'Blameless Postmortems', url: 'https://sre.google/sre-book/postmortem-culture/' },
    ],
  },

  // =============================================================================
  // EMAIL ASSISTANT PROJECT - ARCHITECTURE & DESIGN
  // =============================================================================
  {
    id: 'email-1',
    question: 'How do you design an AI system that handles sensitive user data like emails?',
    answer: `**Privacy-First Architecture:**

**1. Data minimization:**
- Process only what's necessary
- Don't store raw email content long-term
- Extract features, not full text
- Time-limited data retention

**2. Access controls:**
- OAuth2 for email access (user-controlled)
- Scoped permissions (read-only when possible)
- Token refresh and revocation
- Audit logging for all access

**3. Processing architecture:**
- Process on user's behalf, not as owner
- Clear data flow documentation
- Encryption in transit and at rest
- No sharing with third parties

**Applied to Email Assistant:**

**Design decisions:**
- OAuth2 with minimal scopes for Gmail access
- AI categorization runs on metadata when possible
- User controls what data is analyzed
- Clear privacy policy and data handling

**Security measures:**
- API keys stored in environment variables
- No email content in logs
- Rate limiting to prevent abuse
- Session management with secure cookies

**Compliance considerations:**
- GDPR: Right to deletion, data portability
- CCPA: User control over data
- SOC2: Security controls documentation`,
    level: 'Director',
    topics: ['Architecture', 'Operations', 'System Design'],
    projectLinks: [
      { label: 'Email Assistant Overview', url: '/docs/email-assistant/overview' },
      { label: 'Architecture', url: '/docs/email-assistant/technical/architecture' },
    ],
    externalResources: [
      { label: 'Google OAuth2 Best Practices', url: 'https://developers.google.com/identity/protocols/oauth2' },
      { label: 'Privacy by Design', url: 'https://www.ipc.on.ca/wp-content/uploads/Resources/7foundationalprinciples.pdf' },
    ],
  },
  {
    id: 'email-2',
    question: 'How do you implement intelligent email categorization using AI?',
    answer: `**AI Categorization System Design:**

**1. Feature extraction:**
- Sender information (domain, name, frequency)
- Subject line analysis
- Time patterns (when sent, response time)
- Thread characteristics (participants, length)
- Content signals (keywords, urgency indicators)

**2. Categorization approach:**
- Multi-label classification (email can be multiple categories)
- Hierarchical categories (Primary > Updates > Social)
- User-customizable categories
- Confidence scores for each category

**3. Learning from feedback:**
- User corrections improve model
- Personal preferences override global model
- Continuous learning with privacy preservation

**Applied to Email Assistant:**

**Categories implemented:**
- Urgent: Time-sensitive, requires action
- Primary: Important correspondence
- Updates: Status updates, notifications
- Social: Personal, social media
- Promotions: Marketing, newsletters

**Technical implementation:**
- LLM for nuanced understanding
- Rules engine for clear-cut cases
- Caching for performance
- Batch processing for efficiency

**Accuracy optimization:**
- Regular evaluation against user corrections
- A/B testing new models
- Fallback to simpler rules when uncertain`,
    level: 'Sr Manager',
    topics: ['AI/ML', 'Product Strategy', 'Technical Leadership'],
    projectLinks: [
      { label: 'AI Categorization', url: '/docs/email-assistant/features/ai-categorization' },
      { label: 'Daily Digest', url: '/docs/email-assistant/features/daily-digest' },
    ],
  },

  // =============================================================================
  // BEHAVIORAL & SITUATIONAL
  // =============================================================================
  {
    id: 'behav-1',
    question: 'Tell me about a project that failed. What did you learn?',
    answer: `**Framework for discussing failures:**

**Situation:** Describe the project and context
**Failure mode:** What specifically went wrong
**Your role:** What was your responsibility
**Learning:** What did you take away
**Application:** How you've applied the learning

**Example response structure:**

"Early in my career, I led a data migration project that missed its deadline by 3 months and exceeded budget by 40%.

**What went wrong:**
- Underestimated data complexity
- Didn't validate assumptions early
- Scope creep due to unclear requirements
- Inadequate stakeholder communication

**My responsibility:**
- I owned the project plan and timeline
- I should have pushed back on unrealistic dates
- I failed to escalate risks early enough

**What I learned:**
- Always validate assumptions with data before committing
- Build in buffer for unknown unknowns
- Communicate risks early and often
- Scope control requires continuous attention

**How I apply it now:**
- Start projects with discovery phase
- Explicit risk registers with owners
- Regular stakeholder updates, especially bad news
- Change control process for scope additions"

**Key: Be authentic, take ownership, show growth**`,
    level: 'Sr Manager',
    topics: ['Technical Leadership', 'Stakeholder Management'],
    externalResources: [
      { label: 'STAR Method Guide', url: 'https://www.themuse.com/advice/star-interview-method' },
    ],
  },
  {
    id: 'behav-2',
    question: 'How do you stay current with rapidly evolving technology?',
    answer: `**Continuous Learning Strategy:**

**1. Curated information sources:**
- Technical blogs (Anthropic, Google AI, OpenAI)
- Industry newsletters (TLDR, Changelog)
- Conference talks (recorded sessions)
- Research papers (Arxiv, arXiv-sanity)

**2. Hands-on experimentation:**
- Side projects to learn new technologies
- Proof of concepts before production adoption
- Contributing to open source
- Building portfolio projects

**3. Community engagement:**
- Technical communities (Discord, Slack)
- Meetups and conferences
- Mentoring and being mentored
- Internal tech talks

**4. Strategic depth:**
- Go deep on technologies relevant to current role
- Maintain breadth awareness of adjacent areas
- Focus on fundamentals that transcend trends

**Applied to my work:**

Recent learning applied:
- LangGraph for agent orchestration
- Vector databases for semantic search
- React Native/Expo for cross-platform
- Cloudflare Pages for edge deployment

**Time allocation:**
- 1-2 hours daily for reading/learning
- Weekend projects for deeper exploration
- Quarterly goals for skill development
- Annual learning objectives aligned with career goals`,
    level: 'Sr Manager',
    topics: ['Technical Leadership'],
    externalResources: [
      { label: 'Staff Engineer Path', url: 'https://staffeng.com/' },
      { label: 'Engineering Leadership', url: 'https://www.theengineeringmanager.com/' },
    ],
  },
  {
    id: 'behav-3',
    question: 'How do you influence without authority?',
    answer: `**Influence Framework:**

**1. Build credibility:**
- Demonstrate expertise through results
- Be reliable and follow through
- Admit what you don't know
- Help others succeed

**2. Understand stakeholders:**
- What are their goals and constraints?
- What language resonates with them?
- What are their concerns?
- Who influences them?

**3. Frame effectively:**
- Connect to their priorities
- Show benefits, address concerns
- Use data and examples
- Make it easy to say yes

**4. Build relationships:**
- Invest time before you need something
- Find common ground
- Be genuinely helpful
- Maintain trust

**Tactics that work:**

- **Pilot projects**: Prove value at small scale
- **Success stories**: Show what worked elsewhere
- **Coalition building**: Align with others who share goals
- **Incremental wins**: Build momentum through small successes
- **Written proposals**: Clear, well-reasoned arguments
- **Listening first**: Understand before persuading

**What doesn't work:**
- Escalating without trying first
- Being adversarial
- Ignoring concerns
- Overselling`,
    level: 'Director',
    topics: ['Stakeholder Management', 'People Management'],
    externalResources: [
      { label: 'Influence Without Authority', url: 'https://www.amazon.com/Influence-Without-Authority-Allan-Cohen/dp/1119347718' },
    ],
  },
  {
    id: 'behav-4',
    question: 'Describe a situation where you had to deliver results with ambiguous requirements.',
    answer: `**Handling Ambiguity:**

**My approach:**

1. **Clarify what can be clarified**: Not all ambiguity is equal. Some things can be nailed down through good questions.

2. **Make reasonable assumptions**: Document them explicitly. Share with stakeholders for validation.

3. **Build for flexibility**: Architecture that can adapt as requirements become clearer.

4. **Iterate with feedback**: Short cycles, frequent demos, continuous validation.

5. **Communicate uncertainty**: Stakeholders should understand what's certain and what's not.

**Example from Ingredient Scanner:**

Initial requirement: "Build an app that helps people understand ingredient safety"

Ambiguities:
- What types of products? (Food? Cosmetics? Both?)
- What platforms? (Web? Mobile? Both?)
- How detailed should analysis be?
- What's the user interaction model?

**How I handled it:**

1. Started with food & cosmetics (broadest interpretation)
2. Built web first (fastest), then mobile (user feedback driven)
3. Created flexible analysis depth (simple → detailed)
4. Iterated on interaction based on user testing

**Key decisions documented:**
- Why Streamlit for Phase 1 (speed > polish)
- Why mobile in Phase 2 (user demand from web users)
- Feature scope boundaries (what we won't build)

**Result:** Delivered incrementally with clear value at each stage, refined scope based on actual usage.`,
    level: 'Sr Manager',
    topics: ['Technical Leadership', 'Agile/Delivery', 'Product Strategy'],
    projectLinks: [
      { label: 'Project Overview', url: '/docs/ingredient-scanner/overview' },
    ],
  },

  // =============================================================================
  // SCALING AI APPLICATIONS
  // =============================================================================
  {
    id: 'scale-1',
    question: 'How would you scale this API to handle 10x more traffic?',
    answer: `**Three-pronged approach:**

1. **Response Caching (Redis/Memcached)**
   - Cache ingredient research data (24-72 hour TTL)
   - Cache full analysis reports by ingredient+profile hash (1-6 hour TTL)
   - Expected improvement: 5x throughput for cached requests

2. **API Key Load Balancing**
   - Pool multiple Gemini API keys
   - Implement rate-aware key selection
   - Each key has rate limits; N keys = N× capacity

3. **Async Processing with Queue**
   - Move to job queue (Celery/Redis Queue)
   - Return job ID immediately, poll for results
   - Prevents timeout issues on slow requests

**Trade-off:** Caching introduces stale data risk. Mitigation: Implement cache invalidation on safety data updates, use appropriate TTLs.`,
    level: 'Sr Manager',
    topics: ['Scaling', 'Architecture'],
    projectLinks: [
      { label: 'Architecture Overview', url: '/docs/ingredient-scanner/architecture/multi-agent-workflow' },
      { label: 'Tech Stack', url: '/docs/ingredient-scanner/architecture/tech-stack' },
    ],
    externalResources: [
      { label: 'Scaling AI Applications Blog', url: '/blog/scaling-ai-applications' },
    ],
  },
  {
    id: 'scale-2',
    question: 'Why did you choose Qdrant over other vector databases?',
    answer: `**Decision rationale:**

| Factor | Qdrant | Pinecone | Weaviate | ChromaDB |
|--------|--------|----------|----------|----------|
| Self-hosted option | Yes | No | Yes | Yes |
| Cloud managed | Yes | Yes | Yes | No |
| Filtering capability | Excellent | Good | Good | Basic |
| Python SDK | Native | Native | Native | Native |
| Cost | Free tier + pay-as-you-go | Expensive | Moderate | Free |

**Why Qdrant:**
- Qdrant Cloud offers generous free tier (1GB)
- Excellent hybrid search (vector + payload filtering)
- Can self-host later for cost optimization
- Simple REST API for debugging

**Trade-off:** Qdrant is less mature than Pinecone. Mitigation: Their active development and good documentation offset this.`,
    level: 'Director',
    topics: ['Scaling', 'Architecture', 'AI/ML'],
    projectLinks: [
      { label: 'Vector Database', url: '/docs/ingredient-scanner/backend/vector-database' },
    ],
    externalResources: [
      { label: 'Qdrant Documentation', url: 'https://qdrant.tech/documentation/' },
      { label: 'Vector DB Benchmark', url: 'https://benchmark.vectorview.ai/' },
    ],
  },
  {
    id: 'scale-3',
    question: 'How do you handle API rate limits from Gemini?',
    answer: `**Current approach:** Single key - limited capacity

**Scaled approach:** Rate-limited key pool with multiple API keys. Track requests per key in sliding window (1 minute). Rotate to available key or queue if all exhausted.

**Implementation pattern:**
- Create a key pool with multiple API keys
- Track request timestamps per key
- Clean requests older than 1 minute
- Select key with available capacity
- Return None if all keys exhausted (trigger queue/wait)

**Trade-off:** Multiple keys increase cost and complexity. Consider: Is the traffic worth the operational overhead?`,
    level: 'Sr Manager',
    topics: ['Scaling', 'Architecture'],
    projectLinks: [
      { label: 'Backend Agents', url: '/docs/ingredient-scanner/backend/agents' },
    ],
  },
  {
    id: 'scale-4',
    question: 'Why use a multi-agent architecture instead of a single LLM call?',
    answer: `**Single-call approach:**
- Pros: Faster (one LLM round-trip), simpler
- Cons: Less accurate, no self-correction, monolithic prompt

**Multi-agent approach (Research → Analysis → Critic):**
- Pros:
  - Separation of concerns (research vs analysis vs validation)
  - Self-correction loop (Critic can reject and retry)
  - Better accuracy through validation gates
  - Easier to debug and improve individual agents
- Cons: 3x LLM calls, higher latency, more complex

**Decision rationale:** For safety-critical information, accuracy trumps speed. The Critic agent catches ~15% of issues that would otherwise reach users.

**Trade-off:** Higher latency for better accuracy. Acceptable for safety-critical use case.`,
    level: 'Executive',
    topics: ['Scaling', 'Architecture', 'AI/ML'],
    projectLinks: [
      { label: 'Multi-Agent Workflow', url: '/docs/ingredient-scanner/architecture/multi-agent-workflow' },
      { label: 'Critic Agent', url: '/docs/ingredient-scanner/backend/agents#critic-agent' },
    ],
    externalResources: [
      { label: 'Building Effective Agents', url: 'https://www.anthropic.com/research/building-effective-agents' },
    ],
  },
  {
    id: 'scale-5',
    question: 'How do you ensure consistency between mobile and web clients?',
    answer: `**Architecture decisions:**

1. **Single REST API** - Both clients call the same /analyze endpoint
2. **Shared response schema** - Pydantic models define the contract
3. **API versioning** - /api/v1/analyze allows future breaking changes

**Trade-off:** Single API means both clients get same data, even if one needs less. We accept slight over-fetching for consistency and maintainability.`,
    level: 'Sr Manager',
    topics: ['Scaling', 'Architecture', 'System Design'],
    projectLinks: [
      { label: 'API Reference', url: '/docs/ingredient-scanner/backend/api-reference' },
      { label: 'Mobile Components', url: '/docs/ingredient-scanner/mobile/components' },
    ],
  },
  {
    id: 'scale-6',
    question: 'How would you add real-time updates for long-running requests?',
    answer: `**Options considered:**

| Approach | Pros | Cons |
|----------|------|------|
| Polling | Simple, works everywhere | Inefficient, delayed |
| WebSockets | Real-time, bidirectional | Complex, stateful |
| Server-Sent Events | Real-time, simple | One-way only |
| Webhooks | Decoupled | Requires client endpoint |

**Recommendation for this API: Server-Sent Events (SSE)**

Each processing stage emits a progress event. Simple implementation, works everywhere, and one-way communication is sufficient for progress updates.`,
    level: 'Director',
    topics: ['Scaling', 'Architecture', 'System Design'],
    projectLinks: [
      { label: 'API Reference', url: '/docs/ingredient-scanner/backend/api-reference' },
    ],
  },
  {
    id: 'scale-7',
    question: "What's your testing strategy for LLM-based features?",
    answer: `**Testing pyramid for LLM apps:**

1. **Unit tests** - Mock LLM responses, test business logic
2. **Integration tests** - Test agent orchestration with fixtures
3. **Contract tests** - Verify LLM output schema compliance
4. **Evaluation tests** - Test accuracy on labeled datasets
5. **Load tests** - Verify performance under stress

**Key insight:** LLM outputs are non-deterministic. Solutions:
- Use temperature=0.1 for more consistent outputs
- Test for schema compliance, not exact text matching
- Build evaluation datasets with expected categories

**Approach:** Focus on output structure and boundaries rather than exact content.`,
    level: 'Director',
    topics: ['Scaling', 'Architecture', 'AI/ML'],
    projectLinks: [
      { label: 'Testing Strategy', url: '/docs/ingredient-scanner/testing' },
    ],
    externalResources: [
      { label: 'LLM Evaluation Guide', url: 'https://www.anthropic.com/research/evaluating-ai-systems' },
    ],
  },
  {
    id: 'scale-8',
    question: 'How do you handle failures gracefully?',
    answer: `**Failure modes and handling:**

| Failure | Detection | Recovery |
|---------|-----------|----------|
| LLM timeout | Request timeout (120s) | Retry with exponential backoff |
| Rate limit | 429 response | Switch to backup API key |
| Qdrant down | Connection error | Fall back to Google Search only |
| Invalid input | Pydantic validation | Return 422 with details |
| Critic rejection | Validation loop | Retry up to 3x, then escalate |

**Key principle:** Fail gracefully with useful feedback rather than crashing. The Critic agent has built-in retry logic with escalation after max retries.`,
    level: 'Sr Manager',
    topics: ['Scaling', 'Operations', 'Architecture'],
    projectLinks: [
      { label: 'Critic Agent', url: '/docs/ingredient-scanner/backend/agents#critic-agent' },
      { label: 'Deployment', url: '/docs/ingredient-scanner/deployment' },
    ],
  },
  {
    id: 'scale-9',
    question: 'What would you do differently if starting over?',
    answer: `**Retrospective learnings:**

1. **Start with async from day one** - Easier to add concurrency later
2. **Implement caching earlier** - Would have saved development API costs
3. **Use structured outputs** - Gemini's JSON mode for reliable parsing
4. **Add observability first** - LangSmith integration should be from start
5. **Design for horizontal scaling** - Stateless API from the beginning

**Why these matter:**
- Async enables concurrent agent execution
- Caching reduces repeated LLM calls during development
- Structured outputs eliminate parsing errors
- Observability catches issues before users do
- Stateless design enables easy horizontal scaling

**Key insight:** Technical debt from early decisions compounds quickly in AI applications.`,
    level: 'Executive',
    topics: ['Scaling', 'Architecture', 'Technical Leadership'],
    projectLinks: [
      { label: 'Architecture', url: '/docs/ingredient-scanner/architecture/multi-agent-workflow' },
      { label: 'Tech Stack', url: '/docs/ingredient-scanner/architecture/tech-stack' },
    ],
  },
  {
    id: 'scale-10',
    question: 'How do you balance cost vs performance?',
    answer: `**Cost breakdown per request:**
- Gemini API: ~$0.01-0.05 (depending on tokens)
- Qdrant Cloud: Included in free tier
- Railway hosting: ~$5/month
- Google Search: Included in Gemini grounding

**Optimization strategies:**
1. **Cache common ingredients** - 80% of requests hit top 100 ingredients
2. **Use smaller models for validation** - Critic doesn't need full model
3. **Batch embeddings** - Reduce API calls for multiple ingredients
4. **Set appropriate TTLs** - Balance freshness vs cost

**Trade-off:** Aggressive caching reduces costs but may serve stale safety data. Our mitigation: 24-hour TTL with manual invalidation for critical updates.

**Summary:** The key is making intentional trade-offs based on specific requirements, then documenting the reasoning for future reference.`,
    level: 'Executive',
    topics: ['Scaling', 'Operations', 'Metrics & Analytics'],
    projectLinks: [
      { label: 'Deployment', url: '/docs/ingredient-scanner/deployment' },
    ],
    externalResources: [
      { label: 'FinOps Guide', url: 'https://www.finops.org/introduction/what-is-finops/' },
    ],
  },

  // =============================================================================
  // EXECUTIVE-LEVEL QUESTIONS
  // =============================================================================
  {
    id: 'exec-1',
    question: 'How do you think about AI strategy for a large enterprise?',
    answer: `**Enterprise AI Strategy Framework:**

**1. Value identification:**
- Where can AI create competitive advantage?
- Which processes have highest AI ROI potential?
- What data assets are underleveraged?
- What are customer/employee pain points?

**2. Capability building:**
- Build vs. buy vs. partner decisions
- Talent strategy (hire, develop, contract)
- Data infrastructure readiness
- Governance and risk frameworks

**3. Execution model:**
- Center of Excellence vs. federated approach
- Pilot selection criteria
- Scaling successful pilots
- Measuring and proving value

**4. Risk management:**
- Ethical AI principles
- Regulatory compliance
- Bias detection and mitigation
- Security and privacy

**Strategic considerations:**

**Short-term (0-12 months):**
- Quick wins with proven use cases
- Build foundational capabilities
- Establish governance framework
- Train key talent

**Medium-term (1-3 years):**
- Scale successful pilots
- Develop proprietary AI capabilities
- Integrate AI into core products/processes
- Build competitive moats

**Long-term (3+ years):**
- AI-native business models
- Platform and ecosystem plays
- Industry leadership
- Continuous innovation

**Metrics for AI programs:**
- Business impact (revenue, cost, efficiency)
- Technical performance (accuracy, latency)
- Adoption (usage, user satisfaction)
- Risk (incidents, compliance)`,
    level: 'Executive',
    topics: ['AI/ML', 'Product Strategy', 'Technical Leadership'],
    externalResources: [
      { label: 'McKinsey AI Report', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
      { label: 'Harvard Business Review on AI', url: 'https://hbr.org/topic/subject/artificial-intelligence' },
    ],
  },
  {
    id: 'exec-2',
    question: 'How do you align technology investments with business outcomes?',
    answer: `**Technology-Business Alignment Framework:**

**1. Start with business strategy:**
- What are the company's strategic priorities?
- What competitive advantages do we need?
- What constraints exist (budget, time, talent)?
- What risks must be managed?

**2. Map technology to outcomes:**
- Which technologies enable which outcomes?
- What's the investment required?
- What's the expected return?
- What's the timeline to value?

**3. Portfolio management:**
- Balance risk across investments
- Mix of short-term and long-term bets
- Core vs. innovation spending
- Build capabilities, not just projects

**4. Governance and accountability:**
- Clear ownership for outcomes
- Regular progress reviews
- Pivot or persist decisions
- Value realization tracking

**Making the business case:**

**For cost reduction:**
- Current cost baseline
- Projected savings with timeline
- Implementation costs
- Risk-adjusted NPV

**For revenue growth:**
- Market opportunity size
- Expected capture rate
- Investment required
- Time to revenue

**For risk mitigation:**
- Risk exposure quantification
- Mitigation effectiveness
- Cost of inaction
- Compliance requirements

**Communication with executives:**
- Lead with business impact
- Technology as enabler, not end goal
- Clear trade-offs and options
- Realistic timelines and constraints`,
    level: 'Executive',
    topics: ['Product Strategy', 'Technical Leadership', 'Stakeholder Management'],
    externalResources: [
      { label: 'Technology Strategy Patterns', url: 'https://www.amazon.com/Technology-Strategy-Patterns-Architecture-Analysis/dp/1492040878' },
    ],
  },
  {
    id: 'exec-3',
    question: 'How would you transform a traditional IT organization into a product-oriented technology organization?',
    answer: `**Organizational Transformation Approach:**

**Phase 1: Assessment (Months 1-3)**
- Current state analysis (structure, capabilities, culture)
- Stakeholder interviews and pain points
- Benchmark against modern practices
- Define target operating model

**Phase 2: Vision & Strategy (Months 2-4)**
- Articulate compelling vision
- Define product-oriented principles
- Identify pilot products/teams
- Build executive alignment

**Phase 3: Pilot (Months 4-9)**
- Select 2-3 pilot products
- Form cross-functional teams
- Implement new ways of working
- Measure and document results

**Phase 4: Scale (Months 9-24)**
- Apply lessons from pilots
- Roll out to additional products
- Adjust approach based on context
- Build supporting capabilities

**Key changes required:**

**Structure:**
- From projects to products
- From siloed functions to cross-functional teams
- From centralized to federated with guardrails

**Roles:**
- Product managers for all products
- Engineering leads with ownership
- Platform teams serving product teams

**Processes:**
- Agile/iterative delivery
- Continuous deployment
- Customer feedback integration
- Outcome-based metrics

**Culture:**
- Ownership and accountability
- Experimentation and learning
- Customer-centricity
- Collaboration over handoffs

**Common pitfalls:**
- Moving too fast without building buy-in
- Restructuring without changing processes
- Ignoring cultural change
- Underfunding the transformation`,
    level: 'Executive',
    topics: ['Technical Leadership', 'People Management', 'Operations'],
    externalResources: [
      { label: 'Project to Product', url: 'https://projecttoproduct.org/' },
      { label: 'Team Topologies', url: 'https://teamtopologies.com/' },
      { label: 'Accelerate', url: 'https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339' },
    ],
  },
  // =============================================================================
  // REACT/NEXT.JS & FRONTEND ARCHITECTURE (From MindGames Project)
  // =============================================================================
  {
    id: 'react-1',
    question: 'When would you use React Context vs Redux for state management? Walk me through your decision process.',
    answer: `**From my MindGames project, I chose React Context with useReducer. Here's my decision framework:**

**Choose React Context when:**
- Application state is relatively simple (single page, limited cross-component state)
- No need for middleware, dev tools, or time-travel debugging
- Team is smaller and doesn't need Redux's structured patterns
- Bundle size is a concern (Redux adds ~20KB)

**Choose Redux when:**
- Complex state with many reducers and actions
- Need middleware for side effects (Redux-Saga, Redux-Thunk)
- Large team benefits from structured patterns
- Dev tools and time-travel debugging are valuable
- State persistence or hydration is required

**MindGames context architecture:**
\`\`\`typescript
interface GameState {
  worksheet: Worksheet | null;
  session: GameSession | null;
  answers: Map<string, Answer>;
  isPlaying: boolean;
  activeChainIndex: number;
  userProfile: 'kid' | 'adult';
}

// Actions handled by useReducer
type GameAction =
  | { type: 'GENERATE_WORKSHEET' }
  | { type: 'START_SESSION' }
  | { type: 'SUBMIT_ANSWER'; problemId: string; answer: number }
  | { type: 'NEXT_CHAIN' };
\`\`\`

**Trade-offs I accepted:**
- Less structured than Redux (mitigated with TypeScript)
- No dev tools (acceptable for small app)
- Potential re-render issues (mitigated with useCallback and proper memoization)`,
    level: 'Sr Manager',
    topics: ['Architecture', 'System Design'],
    projectLinks: [
      { label: 'GameContext Implementation', url: '/docs/mindgames/architecture/technical-decisions' },
    ],
    externalResources: [
      { label: 'When to use Redux', url: 'https://redux.js.org/faq/general#when-should-i-use-redux' },
      { label: 'React Context Best Practices', url: 'https://react.dev/learn/passing-data-deeply-with-context' },
    ],
  },
  {
    id: 'react-2',
    question: 'How do you design algorithms that balance randomness with constraints? Give a concrete example.',
    answer: `**From MindGames problem generator - balancing random operation selection with chain validity:**

**The Problem:**
Users configure operation mix (e.g., 40% add, 40% subtract, 10% multiply, 10% divide). But random selection can produce invalid chains (e.g., dividing when no valid divisor exists).

**Multi-Strategy Algorithm:**

\`\`\`typescript
// Strategy 1: Weighted random (20 attempts)
for (let attempt = 0; attempt < 20; attempt++) {
  const operation = selectOperationByMix(config.operationMix);
  const problem = tryGenerateProblem(currentValue, operation, config);
  if (problem) return problem;
}

// Strategy 2: Sorted preference fallback
const sortedOps = operations.sort((a, b) =>
  config.operationMix[b] - config.operationMix[a]
);
for (const op of sortedOps) {
  const problem = tryGenerateProblem(currentValue, op, config);
  if (problem) return problem;
}

// Strategy 3: Simple add/subtract as last resort
const addProblem = tryGenerateProblem(currentValue, 'add', simpleConfig);
if (addProblem) return addProblem;
\`\`\`

**Key Design Decisions:**
1. **Weighted random first**: Respects user preferences most of the time
2. **Graceful degradation**: Ensures chain generation never fails
3. **Smart starting numbers**: For multiply/divide heavy mixes, start with highly composite numbers (12, 24, 60)
4. **Clean division**: Only allow integer results

**Trade-offs:**
- Actual distribution may differ from configured percentages
- More complex than pure random
- Division-heavy mixes harder to achieve exactly`,
    level: 'Sr Manager',
    topics: ['Architecture', 'System Design'],
    projectLinks: [
      { label: 'Problem Generator', url: '/docs/mindgames/architecture/technical-decisions' },
    ],
  },
  {
    id: 'react-3',
    question: "How do you approach testing React applications? What's your testing strategy?",
    answer: `**From MindGames - 63 tests with 100% pass rate:**

**Testing Pyramid:**
1. **Unit Tests** (problem-generator.ts): Pure functions, easy to test
2. **Integration Tests** (GameContext): State management flows
3. **Component Tests** (OperationMixSlider): UI behavior

**Testing Philosophy:**
- Test behavior, not implementation
- Use meaningful test names that describe expected behavior
- Cover edge cases explicitly

**Example - Testing State Flow:**
\`\`\`typescript
it('should calculate score on session end', () => {
  const { result } = renderHook(() => useGame(), { wrapper });

  act(() => {
    result.current.generateNewWorksheet();
    result.current.startSession();
  });

  const firstProblem = result.current.state.worksheet!.chains[0].problems[0];
  act(() => {
    result.current.submitAnswer(firstProblem.id, firstProblem.result);
  });

  act(() => {
    result.current.endSession();
  });

  expect(result.current.state.session!.score.correct).toBe(1);
  expect(result.current.state.session!.score.percentage).toBe(100);
});
\`\`\`

**Key Practices:**
- \`act()\` for state updates in hooks
- Wrapper pattern for context-dependent hooks
- Mock external dependencies (canvas-confetti, next/navigation)
- Separate test files by domain

**Coverage Thresholds:**
- 70% branches, functions, lines, statements (enforced in jest.config.js)`,
    level: 'Sr Manager',
    topics: ['Architecture', 'Agile/Delivery'],
    projectLinks: [
      { label: 'Testing Strategy', url: '/docs/mindgames/testing' },
    ],
    externalResources: [
      { label: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
      { label: 'Kent C. Dodds Testing Guide', url: 'https://kentcdodds.com/blog/write-tests' },
    ],
  },
  {
    id: 'react-4',
    question: 'How do you design features for different user segments within the same application?',
    answer: `**From MindGames - Kid vs Adult profile modes:**

**The Challenge:**
Same core functionality, but different UX expectations:
- Adults want clean, focused interface
- Kids need encouragement and celebration

**Implementation Approach:**

1. **Profile State in Context:**
\`\`\`typescript
interface GameState {
  userProfile: 'kid' | 'adult';
  lastCompletedChainIndex: number | null;
}
\`\`\`

2. **Conditional Celebrations:**
\`\`\`typescript
useEffect(() => {
  if (userProfile === 'kid' && lastCompletedChainIndex !== null) {
    const message = CHAIN_COMPLETE_MESSAGES[
      Math.floor(Math.random() * CHAIN_COMPLETE_MESSAGES.length)
    ];
    setEncourageMessage(message);

    if (isAllChainsComplete()) {
      triggerConfetti();
    }
  }
}, [lastCompletedChainIndex, userProfile]);
\`\`\`

3. **Profile-Specific Messaging:**
\`\`\`typescript
{userProfile === 'kid'
  ? session.score.percentage >= 90
    ? "You're a SUPERSTAR!"
    : "Great effort, champ!"
  : session.score.percentage >= 90
    ? 'Excellent!'
    : 'Good Effort!'}
\`\`\`

**Design Principles:**
- Same core logic, different presentation
- Profile selection is prominent (sidebar)
- No feature degradation between profiles
- Easy to extend to more profiles

**Business Value:**
- Broader appeal (kids and parents)
- Higher engagement for younger users
- Same codebase, multiple audiences`,
    level: 'Director',
    topics: ['Product Strategy', 'Architecture'],
    projectLinks: [
      { label: 'Profile Implementation', url: '/docs/mindgames/getting-started' },
    ],
  },
  {
    id: 'algo-1',
    question: 'Walk me through how you would ensure division always produces clean integer results in a math problem generator.',
    answer: `**From MindGames - Clean Division Algorithm:**

**The Challenge:**
When current value is 47, what divisors are valid?
- Must divide evenly (no remainders)
- Result must be within bounds (1 to maxResult)
- Divisor must be within configured range

**The Algorithm:**
\`\`\`typescript
const generateOperand = (operation, currentValue, config) => {
  if (operation === 'divide') {
    if (currentValue <= 0) return null;

    const validDivisors: number[] = [];
    for (let d = min; d <= Math.min(max, currentValue); d++) {
      if (currentValue % d === 0) {
        const result = currentValue / d;
        if (result >= 1 && result <= config.maxResult) {
          validDivisors.push(d);
        }
      }
    }

    if (validDivisors.length === 0) return null;
    return validDivisors[randomInt(0, validDivisors.length - 1)];
  }
};
\`\`\`

**Key Insights:**

1. **Find ALL valid divisors first**: Don't randomly pick and validate - enumerate all options
2. **Random selection from valid set**: Ensures true randomness within constraints
3. **Return null if no valid option**: Let caller handle fallback
4. **Early bounds check**: currentValue <= 0 can't be divided

**Why this matters for starting numbers:**
For divide-heavy mixes, I use highly composite numbers (12, 24, 60) that have many divisors, increasing the chance of valid operations.

**Complexity:**
- O(maxValue) time per division attempt
- Could optimize with precomputed factor tables for frequent values`,
    level: 'Sr Manager',
    topics: ['System Design', 'Architecture'],
    projectLinks: [
      { label: 'Problem Generator', url: '/docs/mindgames/architecture/technical-decisions' },
    ],
  },

  // =============================================================================
  // CAPSTONE PROJECT PORTFOLIO SELECTION (Dec 2025)
  // =============================================================================
  {
    id: 'portfolio-1',
    question: 'How do you prioritize which projects to include in your portfolio when targeting senior TPM roles at Mag7 companies?',
    answer: `**Framework I used for selecting 5 projects from 20 candidates:**

**Interview Signal Assessment:**
Evaluated each project across 4 dimensions that Mag7 interviewers typically probe:

1. **Ambiguity Navigation**: Does the project involve genuinely unclear requirements or evolving scope? Strong projects have no "right answer."

2. **Stakeholder Complexity**: How many teams/functions need to align? Best projects span engineering, product, compliance, and business.

3. **Scale Signals**: Does it involve production systems, high data volumes, real-time requirements? Mag7 cares about scale.

4. **Failure Story Potential**: Are failures visible and consequential? Rich material for "tell me about a time" questions.

**TPM Archetype Coverage:**
Ensured portfolio covers Platform TPM, Product TPM, and Ops TPM archetypes - different Mag7 teams look for different profiles.

**My Selected 5:**
1. **Fraud Detection** - Maximum breadth: real-time ML + business impact + regulated domain
2. **Ops Co-Pilot** - Crisis management, GenAI application, stakeholder orchestration
3. **Service Assurance** - Proactive vs reactive, infrastructure ownership
4. **Churn & Upsell** - Business stakeholder navigation, revenue impact
5. **Model Governance** - Aligns with industry-wide responsible AI focus

**Key insight**: Diverse portfolio > multiple variations of the same theme.`,
    level: 'Sr Manager',
    topics: ['TPM', 'Strategy', 'Leadership'],
  },
  {
    id: 'portfolio-2',
    question: 'Compare and contrast proactive vs reactive AI systems in operations. When would you choose each approach?',
    answer: `**From my capstone project analysis:**

**Proactive Systems (Service Assurance):**
- Predict issues before they cause impact
- ML models trained on historical patterns
- Requires quality historical data
- Higher upfront investment
- Value: Prevention > remediation

**Reactive Systems (Ops Co-Pilot):**
- Respond to incidents as they occur
- LLM-powered analysis and recommendations
- Works with existing incident data
- Faster to deploy
- Value: Reduced MTTR, operator augmentation

**When to choose Proactive:**
- Sufficient historical data (12+ months)
- Clear patterns in failure modes
- High cost of incidents
- Predictable failure signatures

**When to choose Reactive:**
- Novel/unpredictable failure modes
- Insufficient training data
- Need immediate operational value
- Human judgment still required

**Best answer: Both in feedback loop**
- Proactive catches known patterns
- Reactive handles exceptions
- Reactive findings feed proactive model retraining
- Complete coverage requires both approaches

**Trade-off reality:**
Proactive requires more investment upfront but scales better. Reactive delivers value faster but doesn't prevent incidents.`,
    level: 'Sr Manager',
    topics: ['Architecture', 'AI/ML', 'Operations'],
  },
  {
    id: 'portfolio-3',
    question: 'How would you approach building an AI model governance platform? What stakeholders would you need to align?',
    answer: `**Stakeholder Matrix (from my capstone analysis):**

| Stakeholder | Concern | Success Metric |
|-------------|---------|----------------|
| ML Engineers | Don't slow down deployment | <30 min approval for low-risk |
| Compliance | Regulatory adherence | 100% audit trail |
| Legal | Liability management | Clear ownership records |
| Security | Model access control | Zero unauthorized deployments |
| Product | Feature velocity | Governance not a bottleneck |
| Executives | Risk management | No compliance incidents |

**Key Governance Components:**

1. **Model Registry**: Version control, lineage tracking, metadata
2. **Approval Workflows**: Risk-tiered reviews (auto-approve low risk)
3. **Monitoring**: Drift detection, bias alerts, performance degradation
4. **Documentation**: Model cards, intended use, known limitations
5. **Access Control**: Who can deploy to which environments

**Balancing Act:**
- Too strict = teams bypass the system
- Too loose = compliance failures
- Solution: Risk-based tiering with automation for low-risk

**Why this matters for Mag7:**
Every major tech company is investing in responsible AI. Model governance demonstrates understanding of AI risk management at enterprise scale.

**Implementation approach:**
Start with high-risk models (customer-facing, financial decisions) and expand. Show value through prevented incidents.`,
    level: 'Director',
    topics: ['AI/ML', 'Stakeholder Management', 'Architecture'],
  },
  {
    id: 'portfolio-4',
    question: 'How do you evaluate interview fit for a technical project? Walk me through your assessment framework.',
    answer: `**Four-Dimension Interview Signal Framework:**

**1. Ambiguity Navigation**
- Does the project have genuinely unclear requirements?
- Are there multiple valid approaches?
- Did you need to make judgment calls without complete information?

Example questions this enables:
- "Tell me about a time you had to make a decision with incomplete data"
- "How did you handle conflicting requirements?"

**2. Stakeholder Complexity**
- How many teams needed to align?
- Were there competing priorities?
- Did you influence without authority?

Example questions this enables:
- "How did you handle pushback from engineering?"
- "Tell me about a difficult stakeholder situation"

**3. Scale Signals**
- Production system? Data volume? User base?
- Did you handle latency/throughput requirements?
- Global deployment considerations?

Example questions this enables:
- "How did you handle scale challenges?"
- "What would you do differently at 10x scale?"

**4. Failure Story Potential**
- Were failures visible and consequential?
- Did you have clear accountability?
- Can you discuss lessons learned?

Example questions this enables:
- "Tell me about a project that failed"
- "What would you do differently?"

**Rating System:**
- Strong: Natural fit, multiple stories possible
- Medium: Can discuss but requires framing
- Weak: Limited relevance to this dimension

**Ideal portfolio**: Strong in at least 3/4 dimensions for each project.`,
    level: 'Sr Manager',
    topics: ['TPM', 'Strategy', 'Communication'],
  },
  {
    id: 'portfolio-5',
    question: 'Explain the difference between Platform TPM, Product TPM, and Ops TPM. How do you position yourself for each?',
    answer: `**TPM Archetype Definitions:**

**Platform TPM:**
- Builds infrastructure used by other teams
- Success = adoption, developer experience, reliability
- Stakeholders: Engineering teams, SREs, internal customers
- Metrics: Uptime, latency, adoption rate, developer satisfaction

Example projects: Model Governance, GenAI Gateway, Developer Platform

**Product TPM:**
- Ships customer-facing features
- Success = user adoption, business metrics, market fit
- Stakeholders: Product managers, design, marketing, customers
- Metrics: DAU, conversion, revenue, NPS

Example projects: Churn & Upsell, Consumer AI Assistant, Customer Voice Dashboard

**Ops TPM:**
- Ensures systems run reliably at scale
- Success = availability, incident response, cost efficiency
- Stakeholders: NOC, SRE, engineering, vendor management
- Metrics: MTTR, incident count, automation rate, cost per transaction

Example projects: Ops Co-Pilot, Service Assurance, Network Operations

**Positioning Strategy:**

For **Platform TPM** interviews:
- Emphasize developer experience and adoption
- Discuss API design and documentation
- Show understanding of internal customer needs

For **Product TPM** interviews:
- Lead with business impact and user metrics
- Discuss market research and customer feedback
- Show cross-functional collaboration with product/design

For **Ops TPM** interviews:
- Emphasize reliability and incident response
- Discuss automation and runbook development
- Show crisis management experience

**Portfolio tip**: Have at least one strong project for each archetype.`,
    level: 'Sr Manager',
    topics: ['TPM', 'Strategy', 'Leadership'],
  },
  // =============================================================================
  // AUTHENTICATION & ACCESS CONTROL (Added 2025-12-29)
  // =============================================================================
  {
    id: 'auth-1',
    question: 'How would you implement shared authentication across multiple sections of a documentation site without a backend?',
    answer: `**From my ProjectDocs implementation:**

**Approach: Client-side localStorage with shared state**

1. **Single Auth Token**: All protected sections (Nebula, Journey, Blog) share one localStorage key ('nebula_auth'). Logging into any section grants access to all.

2. **AuthGate Component Pattern**: Each protected section has its own themed AuthGate wrapper, but they all check the same localStorage key:
   - Nebula: Purple/violet theme (interview prep)
   - Journey: Green theme (development log)
   - Blog: Blue theme (technical articles)

3. **Session Persistence**: Auth state persists across browser sessions via localStorage. User doesn't need to re-authenticate on page refresh.

4. **Centralized Secrets**: All AuthGate components import from a shared constant (VALID_SECRETS array), making password updates a single-file change.

**Trade-offs:**

| Approach | Benefit | Risk |
|----------|---------|------|
| Client-side auth | No backend needed | Secret visible in source |
| localStorage | Persists across sessions | Can be cleared by user |
| Shared auth key | Single login for all sections | All-or-nothing access |

**For production**: Would use server-side auth (OAuth, JWT) with secure session management. Client-side approach is acceptable for low-security personal content.

**Key insight for interviews**: Demonstrate understanding of the security trade-offs while being pragmatic about what's appropriate for the use case.`,
    level: 'Sr Manager',
    topics: ['Architecture', 'Technical', 'Security'],
  },
  {
    id: 'auth-2',
    question: 'How do you approach extending a framework like Docusaurus with custom authentication without breaking the existing functionality?',
    answer: `**From my Blog protection implementation:**

**Theme Swizzling Pattern**

Docusaurus uses "swizzling" - the ability to override or wrap theme components without forking the entire theme.

**Implementation approach:**
1. Create \`src/theme/BlogLayout/index.tsx\`
2. Import the original component: \`@theme-original/BlogLayout\`
3. Wrap it with AuthGate while passing through all props

\`\`\`typescript
import BlogLayout from '@theme-original/BlogLayout';
import { AuthGate } from '@site/src/components/Blog';

export default function BlogLayoutWrapper(props: Props) {
  return (
    <AuthGate>
      <BlogLayout {...props} />
    </AuthGate>
  );
}
\`\`\`

**Why this approach works:**
- Non-destructive: Original functionality preserved
- Upgrade-safe: Theme updates don't break customization
- Single responsibility: AuthGate handles auth, BlogLayout handles layout
- Testable: Each component can be tested independently

**Alternative approaches considered:**

| Approach | Pros | Cons |
|----------|------|------|
| Custom blog plugin | Full control | High maintenance |
| Route middleware | Cleaner separation | Docusaurus doesn't support |
| Theme swizzling | Minimal code | Tied to Docusaurus internals |

**TPM insight**: When extending frameworks, prefer composition over modification. This reduces upgrade friction and keeps customizations isolated.`,
    level: 'Sr Manager',
    topics: ['Architecture', 'Technical', 'System Design'],
  },
  {
    id: 'auth-3',
    question: 'You need to support multiple valid passphrases for a system. How do you design for extensibility while keeping the code simple?',
    answer: `**From my AuthGate multi-passphrase implementation:**

**Simple Array-based Approach**

Changed from:
\`\`\`typescript
const VALID_SECRET = 'secret1';
if (input === VALID_SECRET) { ... }
\`\`\`

To:
\`\`\`typescript
const VALID_SECRETS = ['secret1', 'secret2'];
if (VALID_SECRETS.includes(input.toLowerCase().trim())) { ... }
\`\`\`

**Why array over other approaches:**

| Approach | Complexity | Extensibility |
|----------|------------|---------------|
| Single string | O(1) | Poor - code change per password |
| Array | O(n) | Good - add to array |
| Map with metadata | O(1) | Excellent - can track usage/expiry |
| Database lookup | O(1)+ | Best - no code deploy for changes |

**For this use case**, array is appropriate because:
- Small number of secrets (2-3)
- No need for metadata (expiry, usage tracking)
- No backend available for database
- Changes are infrequent

**For production systems**, I'd recommend:
- Environment variables or secrets manager
- Hashed passwords, never plaintext
- Rate limiting on attempts
- Audit logging

**Key insight**: Match complexity to requirements. Over-engineering simple auth adds maintenance burden without proportional benefit.`,
    level: 'Sr Manager',
    topics: ['Architecture', 'Technical', 'System Design'],
  },
  // =============================================================================
  // PRD & PRODUCT MANAGEMENT
  // =============================================================================
  {
    id: 'prd-1',
    question: 'Walk me through how you would structure a PRD for a fraud detection platform targeting telecom/MSP domains. What sections are essential?',
    answer: `**From my Fraud Detection PRD v1.2:**

**Essential Sections:**

1. **Executive Summary** - One paragraph on what, why, and expected impact
2. **Business Context** - Industry landscape, current gaps, fraud types (subscription, ATO, invoice anomalies)
3. **Users & Personas** - Primary (Fraud Analyst, Risk Officer) and actual audience (hiring managers evaluating your work)
4. **Core Requirements (Prioritized)** - Must-have (Phase 1), Should-have (Phase 2), Nice-to-have (Phase 3)
5. **Non-Functional Requirements** - Performance targets, reliability, code quality, security
6. **Technical Stack** - Backend, frontend, database, deployment
7. **Data Model** - Schema definitions for synthetic fraud scenarios
8. **Success Criteria** - Demonstrable KPIs with specific targets (>=90% recall, <15% FP rate)
9. **Constraints & Scope** - What's explicitly NOT in scope
10. **What This Doesn't Prove** - Limitations that build credibility
11. **Risk Mitigation** - Project risks with mitigations
12. **Governance** - Compliance narrative, ADRs, documentation

**Key insight**: For portfolio projects, include a "Demo Scenarios" section with the 5-minute story you'll tell interviewers. Also include "Interview Talking Points" to prepare your narrative.

**TPM perspective**: A good PRD balances aspiration with realism. Phase 1 should be achievable and demonstrable; Phase 2/3 shows you understand the full vision.`,
    level: 'Sr Manager',
    topics: ['Product', 'TPM', 'Strategy', 'Communication'],
  },
  {
    id: 'prd-2',
    question: 'How do you prioritize requirements when building a fraud detection system as a portfolio project vs a production system?',
    answer: `**Key differences in prioritization:**

**Portfolio Project Priorities:**
1. **Demonstrable detection** - Show the system catching fraud scenarios
2. **Explainability** - Risk score breakdowns that interviewers can understand
3. **Clean code & tests** - 80%+ coverage shows engineering discipline
4. **Documentation** - ADRs, architecture diagrams, README
5. **Demo-ready at all times** - Always-deployable from Week 3

**Production System Priorities:**
1. **Real-time latency** - p95 <300ms for transaction scoring
2. **False positive management** - Customer friction vs fraud loss balance
3. **Model retraining pipeline** - Adversarial adaptation
4. **Multi-tenant isolation** - Enterprise customers
5. **Compliance** - GDPR, PCI-DSS, SOX audit trails

**My approach in the Fraud Detection PRD:**

| Phase 1 (Portfolio) | Phase 2+ (Production) |
|---------------------|----------------------|
| Batch processing | Streaming/real-time |
| Rule-based detection | ML models |
| Synthetic data | Real transaction data |
| Basic auth | OAuth/RBAC |
| Single-user | Multi-tenant |

**TPM insight**: Explicitly documenting what you're deferring shows you understand the full problem space. It's better to be intentionally scoped than accidentally incomplete.`,
    level: 'Sr Manager',
    topics: ['Product', 'Strategy', 'Execution', 'TPM'],
  },
  {
    id: 'prd-3',
    question: 'You have 8-10 weeks to build a fraud detection prototype. How do you structure the timeline to ensure you have something demo-ready for interviews?',
    answer: `**From my Fraud Detection PRD timeline approach:**

**Key principle**: Always-deployable state from Week 3.

**Week 1-2: Foundation**
- Synthetic data generation (MSP invoices, account events)
- PostgreSQL schema setup
- Basic FastAPI skeleton with health checks
- CI/CD pipeline (deploy empty app to Railway)

**Week 3-4: Core Detection**
- Rule-based detection engine with configurable thresholds
- Risk scoring (0-100 scale) with factor weights
- Alert API with pagination
- First demo checkpoint: "75k records ingested, 847 anomalies flagged"

**Week 5-6: Analyst Workflow**
- React dashboard with alert list
- Alert detail view with risk breakdown
- Disposition flow (True Positive/False Positive)
- Second demo checkpoint: Full analyst workflow

**Week 7-8: Polish**
- Trend dashboard with charts
- Ground truth capture for future ML
- Documentation, ADRs, README
- Final demo rehearsal

**Week 9-10: Buffer**
- Bug fixes, edge cases
- Interview prep with specific stories

**Risk mitigation:**
- Scope creep: Strict phase boundaries, defer ML to Phase 2
- Frontend underestimation: Use component library, prioritize function over form
- Demo deadline: Weekly milestones mean any week could be the demo

**TPM insight**: Build the demo story iteratively. Each week adds a new chapter to the narrative.`,
    level: 'Sr Manager',
    topics: ['Execution', 'TPM', 'Strategy', 'Leadership'],
  },

  // =============================================================================
  // FRAUD DETECTION SYSTEM DESIGN - THINKING PROCESS (Jan 2026)
  // =============================================================================
  {
    id: 'fraud-thinking-1',
    question: 'How do you derive a data model for a fraud detection system? Walk me through your thinking process.',
    answer: `**8-step derivation process I documented:**

**Step 1: Start with the Money Flow**
Trace where money moves: Customer -> Payment Method -> Transaction -> Merchant -> Settlement. Every noun is a candidate entity, every arrow is a candidate event.

**Step 2: Ask "What Can Be Fraudulent?"**
For each entity, identify fraud vectors:
- Card: stolen, enumerated, tested
- Device: shared across fraud rings, emulated
- IP: proxied, VPN, datacenter
- User: fake accounts, ATO, friendly fraud history

**Step 3: Ask "What Do I Need at Decision Time?"**
This gives you your feature list. For Card: velocity, past chargebacks, success rate. For Device: distinct cards in 24h, emulator flag.

**Step 4: Ask "What Events Change State?"**
Define state transitions: Authorization, Capture, Refund, Chargeback, Dispute Outcome. Each needs a schema and idempotency key.

**Steps 5-8: Define Schemas and Links**
- Canonical event schema (identifiers, entity links, verification results)
- Entity schemas in Redis (Card, Device, User with computed features)
- Feature computation (velocity in sliding windows, aggregates with atomic increments)
- ID linkage (auth_id links authorization through to dispute outcomes)

**Key insight**: The data model is DERIVED from the problem domain, not invented.`,
    level: 'Director',
    topics: ['Architecture', 'Data', 'System Design'],
    projectLinks: [
      { label: 'Data Model Thinking', url: '/nebula/fraud-detection-thinking/data-model' },
    ],
  },
  {
    id: 'fraud-thinking-2',
    question: 'Explain profit-based thresholds in fraud detection. Why are they better than fixed score cutoffs?',
    answer: `**The problem with fixed thresholds:**
"Block if fraud_score > 0.8" ignores transaction economics. A $10 transaction with 50% fraud probability is very different from a $5,000 transaction with 20% fraud probability.

**Expected Value Comparison:**
\`\`\`
Expected Loss = P(fraud) x (amount + chargeback_fee + penalty + ops_cost)
Expected Gain = P(legitimate) x (revenue from transaction)

If Expected Loss > Expected Gain x risk_tolerance -> BLOCK or FRICTION
Else -> ALLOW
\`\`\`

**Practical example:**
- $10 txn with 50% fraud: Expected Loss = $15, Expected Gain = $10 -> May ALLOW (small absolute risk)
- $5,000 txn with 20% fraud: Expected Loss = $1,100, Expected Gain = $200 -> BLOCK (large absolute risk)

**Implementation considerations:**
- Need chargeback cost per merchant category
- Penalty costs vary by card network
- Revenue is typically 2-3% of transaction amount
- risk_tolerance is a business-configurable parameter

**Why this matters for TPM:**
This ties decisions directly to business economics. You can show stakeholders the dollar impact of threshold changes, not just accuracy metrics.`,
    level: 'Sr Manager',
    topics: ['Product', 'Strategy', 'Data', 'Architecture'],
    projectLinks: [
      { label: 'Logic & Policy Thinking', url: '/nebula/fraud-detection-thinking/logic-policy' },
    ],
  },
  {
    id: 'fraud-thinking-3',
    question: 'How do you distinguish between a fraud attack and a bug when your block rate suddenly spikes?',
    answer: `**This is a critical operational question. Here are the distinguishing signals:**

| Signal | Suggests Attack | Suggests Bug |
|--------|-----------------|--------------|
| Block rate spike | Concentrated on few entities | Spread across all traffic |
| Geographic pattern | Single region/IP range | Global |
| Velocity triggers | High velocity counters | Normal velocity |
| User complaints | None (fraudsters dont complain) | Support tickets spike |
| Time pattern | Sudden start, sustained | Correlates with deployment |

**Attack response**: Hold steady, let the system work. The blocks are correct.

**Bug response**: Rollback immediately, investigate. Legitimate traffic is being harmed.

**Automated detection I would build:**
- Entity concentration metric: if >50% of blocks come from <1% of entities, likely attack
- Deployment correlation: if spike starts within 30 min of deploy, likely bug
- Support ticket integration: complaint rate is a lagging but reliable signal

**TPM insight**: During incidents, the first question is always "is this working as intended?" Having automated signals to answer this quickly prevents panic rollbacks during real attacks.`,
    level: 'Sr Manager',
    topics: ['Operations', 'Architecture', 'Execution'],
    projectLinks: [
      { label: 'Failure Modes Thinking', url: '/nebula/fraud-detection-thinking/failure-modes' },
    ],
  },
  {
    id: 'fraud-thinking-4',
    question: 'What is historical replay testing and why is it the most critical test for fraud systems?',
    answer: `**Historical replay is the highest-confidence test for fraud accuracy.**

**How it works:**
1. Take 30 days of historical transactions (you have the actual outcomes)
2. Replay them through your new pipeline
3. Compare "what we would have decided" vs "what actually happened"

**Critical detail**: Get features AS THEY WERE at transaction time. If a card has 100 transactions today but only had 5 when transaction X happened, use 5 for replay. This requires time-traveling feature stores.

**What you measure:**
- **Approval rate delta**: Did we block more or fewer legitimate transactions?
- **Fraud detection rate**: Would we have caught known fraud?
- **False positive rate**: What percentage of blocks were wrong?
- **Decision distribution**: How did ALLOW/FRICTION/BLOCK mix change?

**Why this is possible:**
Historical data includes actual outcomes. You know which transactions became chargebacks. You know which "fraud" classifications were later reversed.

**Sample validation criteria (go/no-go gate):**
- Approval rate change < 0.5% from baseline
- Fraud detection rate >= current system
- False positive rate not increased
- No single merchant impacted > 2%

**TPM insight**: This is the only test that validates accuracy against ground truth. Unit tests verify logic, load tests verify capacity, but only replay tests verify you catch fraud.`,
    level: 'Director',
    topics: ['Architecture', 'Data', 'Operations', 'AI/ML'],
    projectLinks: [
      { label: 'Testing Thinking', url: '/nebula/fraud-detection-thinking/testing' },
    ],
  },
  {
    id: 'fraud-thinking-5',
    question: 'How do you design ownership models for fraud system controls? Who should control what?',
    answer: `**Key insight: Attack response speed dictates ownership.**

| Control | Owner | Change Mechanism | Speed |
|---------|-------|------------------|-------|
| Blocklist entries | Fraud Ops | UI/API (immediate) | Seconds |
| Velocity thresholds | Fraud Ops | Config file (peer review) | Minutes |
| ML score thresholds | Fraud Strategy | Config + simulation (manager approval) | Hours |
| Profit parameters | Finance + Fraud | Config (director approval) | Days |
| ML models | Data Science | Model registry (validation pipeline) | Days to weeks |

**Why this matters:**
- Blocklists must be immediate because attacks happen in real-time
- Model changes can be slow because they need proper validation
- Mixing these up causes either: blocked attacks that should be stopped fast, or rushed model deploys that break production

**Implementation considerations:**
- Blocklist UI needs audit trail (who added what, when)
- Threshold changes need simulation preview ("this would have blocked X more transactions yesterday")
- Model changes need champion/challenger testing before full rollout

**Escalation path:**
- During active attack: Fraud Ops can unilaterally add to blocklist, notify later
- Threshold changes: Require simulation + peer review within 1 hour
- Emergency model rollback: Fraud Strategy can trigger, Data Science investigates

**TPM insight**: Define these boundaries BEFORE an incident. During the attack is not the time to debate who can change what.`,
    level: 'Sr Manager',
    topics: ['Operations', 'Leadership', 'Stakeholder Management'],
    projectLinks: [
      { label: 'Logic & Policy Thinking', url: '/nebula/fraud-detection-thinking/logic-policy' },
    ],
  },
  {
    id: 'fraud-thinking-6',
    question: 'What is PSI (Population Stability Index) and why should fraud systems monitor it?',
    answer: `**PSI measures how much feature distributions have shifted from training.**

**The problem it solves:**
ML models are trained on historical data. If the input distribution changes significantly, model accuracy will degrade - often before you see it in fraud rates (lagging indicator).

**How PSI works:**
1. Bin feature values from training data
2. Bin feature values from production data
3. Compare proportions in each bin

**Interpretation:**
| PSI Value | Interpretation |
|-----------|----------------|
| < 0.1 | No significant shift |
| 0.1 - 0.25 | Moderate shift, investigate |
| > 0.25 | Significant shift, model likely degraded |

**Alert threshold**: PSI > 0.1 for any feature triggers investigation.

**Common causes of drift:**
- Seasonality (holiday shopping patterns differ)
- Market changes (new fraud tactics)
- Upstream data issues (payment provider changed field format)
- Population shift (new merchant categories, new geographies)

**Response options:**
1. **Short-term**: Increase fallback rule weight, reduce model weight
2. **Medium-term**: Retrain model on recent data
3. **Long-term**: Investigate root cause, add to monitoring

**TPM insight**: PSI is a leading indicator. It tells you the model MAY be degraded before you see fraud rates spike. This gives you time to respond proactively.`,
    level: 'Sr Manager',
    topics: ['AI/ML', 'Data', 'Operations'],
    projectLinks: [
      { label: 'Testing Thinking', url: '/nebula/fraud-detection-thinking/testing' },
    ],
  },
  {
    id: 'fraud-thinking-7',
    question: 'How did you calibrate your fraud detection score values? Walk me through the reasoning for specific numbers.',
    answer: `**Every score is calibrated against false positive rates and signal reliability - not guessed.**

**Detection Score Principles:**

| Signal Category | Score Range | Rationale |
|-----------------|-------------|-----------|
| Emulator detected | 0.9 | Near-zero FP rate - legitimate consumers never use emulators for payments |
| Rooted device | 0.6 | Many power users root legitimately - medium signal |
| VPN usage | 0.3 | Millions of privacy-conscious users - should not trigger alone |
| Datacenter IP | 0.8 | Consumer transactions never come from AWS/GCP - strong signal |
| Card velocity 5+/10min | 0.8 | Exceeds any legitimate checkout behavior |
| 80%+ decline rate | 0.9 | Combined with attempts, nearly definitive card testing |

**Why not all 0.9 or 1.0?**
The gap between 0.3 (VPN) and 0.9 (emulator) reflects false positive risk. Blocking every VPN user would reject millions of legitimate transactions.

**Aggregation formula:**
\`max(signals) + 0.05 * (n-1)\` - takes strongest signal, adds small boost for corroboration. Average would dilute a 0.9 emulator with three 0.0s to 0.225 - useless.

**Policy threshold separation:**
- Criminal fraud block: 0.85 (stopping a thief - low regret if wrong)
- Friendly fraud block: 0.95 (rejecting a real customer - must be near-certain)

**Principal TPM insight**: These numbers are defensible because they trace back to business impact. "Why 0.8?" has a concrete answer tied to false positive rates and operational data.`,
    level: 'Director',
    topics: ['Architecture', 'Data', 'Strategy', 'Product'],
    projectLinks: [
      { label: 'Design Rationale', url: '/nebula/fraud-detection-thinking/design-rationale' },
    ],
  },
  {
    id: 'fraud-thinking-8',
    question: 'Explain your data architecture for fraud detection. Where does each data point come from and why?',
    answer: `**Three distinct data paths, each with different latency requirements:**

**Path 1: Request-Time Data (Synchronous)**
In the API request body - available immediately:
- Transaction: amount, merchant_id, card_token
- Device fingerprint: is_emulator, is_rooted, device_id (from SDK like Fingerprint.js)
- Geographic: IP country, is_vpn, is_tor, is_datacenter (from MaxMind/IPQualityScore)
- Verification: AVS result, CVV result, 3DS result (from payment processor)

**Path 2: Real-Time Velocity (Redis)**
Sliding window counters with sub-millisecond latency:
- ZSET pattern: \`ZADD fraud:card:{token}:attempts {tx_id} {timestamp}\`
- Query: \`ZCOUNT\` for time window (last 10 minutes = 600,000ms)
- Signals: card_attempts_10m, device_distinct_cards_1h, ip_distinct_cards_1h

**Path 3: Historical Profiles (PostgreSQL)**
Asynchronously updated entity data:
- Card/User/Device: age_days, total_transactions, chargeback_count
- Risk tiers: pre-computed from batch ML models
- Updated when CHARGEBACK/REFUND events arrive (seconds stale, acceptable)

**Why this separation?**
| Data Type | Freshness Need | Storage | Query Latency |
|-----------|----------------|---------|---------------|
| Velocity attacks | Sub-second | Redis | <1ms |
| Device fingerprint | Request-time | API body | 0ms |
| Historical patterns | Minutes OK | PostgreSQL | 5-10ms |

**Principal TPM insight**: Matching data freshness to use case is the key architectural decision. Over-engineering freshness (real-time historical) wastes resources. Under-engineering (batch velocity) misses attacks.`,
    level: 'Director',
    topics: ['Architecture', 'Data', 'System Design'],
    projectLinks: [
      { label: 'Data Points Reference', url: '/nebula/fraud-detection-thinking/data-points' },
      { label: 'Data Model Thinking', url: '/nebula/fraud-detection-thinking/data-model' },
    ],
  },
  {
    id: 'fraud-thinking-9',
    question: 'How do you load test a fraud detection system? What specific scenarios must you cover?',
    answer: `**Load testing fraud systems requires attack simulation, not just traffic volume.**

**Three categories of load tests:**

**1. Baseline Capacity Testing**
- Target: 2x expected peak traffic
- Measure: P50, P95, P99 latency under sustained load
- Pass criteria: P99 < 200ms, error rate < 1%
- Pattern: Steady ramp to peak, hold 10 minutes, measure degradation

**2. Attack Simulation Testing**
Fraud attacks have distinct patterns that standard load tests miss:

| Attack Type | Traffic Pattern | What Breaks |
|-------------|-----------------|-------------|
| Card testing | 1000 requests/second to same card | Redis hot key, single shard |
| BIN enumeration | Sequential card numbers, high velocity | Pattern detection latency |
| Credential stuffing | Many distinct users, same device | Device counter fan-out |
| Distributed attack | 100K IPs, one request each | IP counter cardinality |

**3. Degradation Testing**
- Redis latency injection: What happens at P99 = 50ms instead of 1ms?
- PostgreSQL connection pool exhaustion
- Network partition between services

**Critical load test scenarios:**
1. **Hot key attack**: 10K requests/sec targeting single card_token - tests Redis cluster sharding
2. **Cardinality explosion**: 1M distinct IPs - tests counter memory limits
3. **Burst after quiet**: 0 to 5K RPS in 10 seconds - tests cold-start behavior

**What you measure:**
- Decision latency (must stay under SLA during attack)
- Counter accuracy (velocity counters must increment correctly under contention)
- Fallback activation (if Redis degrades, does PostgreSQL fallback engage?)

**Principal TPM insight**: Standard load testing misses fraud system failure modes. Attackers create traffic patterns that exploit specific architectural weaknesses.`,
    level: 'Director',
    topics: ['Architecture', 'Operations', 'Technical'],
    projectLinks: [
      { label: 'Load Testing Design', url: '/nebula/fraud-detection-design/part-8' },
      { label: 'Testing Thinking', url: '/nebula/fraud-detection-thinking/testing' },
    ],
  },
  {
    id: 'fraud-thinking-10',
    question: 'What happens to your fraud system when Redis is unavailable? Walk me through the failure cascade.',
    answer: `**Redis unavailability is the most critical failure mode for real-time fraud detection.**

**What Redis provides:**
- All velocity counters (card_attempts_10m, device_distinct_cards_1h)
- Real-time feature computation
- Blocklist/allowlist lookups

**Failure cascade without mitigation:**
1. Redis timeout (100ms)
2. Velocity features return error
3. Scoring fails or uses stale data
4. Either: block all traffic (safe but revenue-killing) OR allow all (fraud loss)

**Designed fallback strategy:**

| Component | Fallback Behavior | Risk Accepted |
|-----------|-------------------|---------------|
| Velocity counters | Return 0 (no velocity signal) | Miss velocity-based attacks |
| Blocklist | Fall back to in-memory cache (5-min stale) | Recently blocked cards may get through |
| Device distinct cards | Return -1 (unknown) | Disable BIN attack detection |

**System behavior during Redis outage:**
1. Detection continues using request-time signals (device fingerprint, geo, verification)
2. Historical profiles from PostgreSQL still available
3. Policy engine applies "degraded mode" thresholds:
   - Lower friction threshold (more 3DS challenges)
   - Disable block decisions based on velocity alone
   - Alert operations for manual monitoring

**Recovery behavior:**
- Redis reconnects automatically (circuit breaker)
- Counters resume incrementing (no backfill needed - sliding windows self-heal)
- Alert cleared when latency returns to normal

**Principal TPM insight**: The key design decision is "degraded decision with partial data is better than no decision." Define this explicitly before the incident - during outage is not the time to debate risk tolerance.`,
    level: 'Sr Manager',
    topics: ['Operations', 'Architecture', 'Technical'],
    projectLinks: [
      { label: 'Failure Modes', url: '/nebula/fraud-detection-thinking/failure-modes' },
      { label: 'Data Points Reference', url: '/nebula/fraud-detection-thinking/data-points' },
    ],
  },
  // =============================================================================
  // DOMAIN ADAPTATION & TRANSFERABLE SKILLS (Jan 2026)
  // =============================================================================
  {
    id: 'domain-1',
    question: 'How would you adapt your fraud detection experience to a new domain like telecom or advertising? Walk me through your approach.',
    answer: `**5-Step Domain Adaptation Framework:**

**Step 1: Identify Core Entities**
Ask "What are the nouns in this domain?"
- E-commerce: Card, Device, IP, User, Merchant
- Telecom: SIM, IMEI, Phone Number, Subscriber, Service Provider
- Ads: Advertiser, Publisher, Campaign, Click, Impression

**Step 2: Map Fraud Vectors**
Ask "What can go wrong?" for each entity:
- Telecom: IRSF (revenue share fraud), SIM swap ATO, device subsidy fraud, SIM farms
- Ads: Click fraud, impression fraud, affiliate fraud, bot traffic

**Step 3: Adapt Velocity Windows**
Different domains have different attack timescales:
- E-commerce: 10-minute card testing bursts
- Telecom: 24-hour SIM activation patterns, 6-hour IRSF detection
- Ads: Real-time click velocity, daily impression caps

**Step 4: Add Domain-Specific Rules**
High-signal events unique to the domain:
- Telecom: SIM swap always triggers REVIEW (ATO risk), international enable triggers FRICTION (IRSF risk)
- Ads: Click from datacenter IP blocks immediately

**Step 5: Preserve Transferable Patterns**
These principles stay constant:
- Latency budget thinking (10ms target)
- Three-path data architecture (request-time, real-time velocity, historical)
- Score calibration tied to false positive rates
- Ownership model matching change speed to control type

**Principal TPM insight**: The goal is showing you can think systematically about new domains while recognizing what transfers and what must be reimagined.`,
    level: 'Director',
    topics: ['Architecture', 'Strategy', 'System Design'],
    projectLinks: [
      { label: 'Telco Adaptation Blog', url: '/blog/telco-fraud-adaptation' },
      { label: 'Fraud Detection Thinking', url: '/nebula/fraud-detection-thinking' },
    ],
  },
  {
    id: 'domain-2',
    question: 'What are the key differences between e-commerce fraud and telecom fraud detection? How do these differences affect system design?',
    answer: `**Entity and Relationship Differences:**

| E-Commerce | Telecom |
|------------|---------|
| merchant_id | service_id (carrier, MVNO) |
| Product SKU | SIM ICCID, IMEI, Phone Number |
| Card testing attacks | SIM farm attacks |
| One-time purchase | Ongoing subscription + events |
| Simple transaction | Event types (activation, swap, upgrade) |

**Fraud Vector Differences:**

**E-Commerce focused on:**
- Card-not-present fraud (stolen card data)
- Account takeover (credential stuffing)
- Friendly fraud (chargebacks)
- Bot checkout attacks

**Telecom focused on:**
- IRSF (International Revenue Share Fraud) - routing calls to premium numbers
- SIM Swap ATO - taking over phone number for 2FA bypass
- Device Subsidy Fraud - acquiring subsidized phones with no intent to pay
- SIM Farm Attacks - automated SIM use for spam/fraud

**Architectural Implications:**

**Rule Layer Enhancement:**
Telecom adds an event-based rule layer:
1. SIM swap event -> always REVIEW (ATO risk)
2. International enable -> always FRICTION (IRSF risk)
3. Device upgrade from new subscriber -> REVIEW

**Extended Entity Model:**
New entities beyond card/device/IP:
- Phone Number: velocity, line type, porting history
- IMEI: device model, blacklist status, activation count
- SIM ICCID: activation date, swap count, service plan

**Velocity Window Adjustments:**
- SIM activations: 24h window (not 1h) - slower attack pattern
- International calls: 6h window for IRSF detection
- Device changes: 30-day subscriber lifecycle context

**Principal TPM insight**: The architectural patterns transfer, but the specific implementations require domain expertise.`,
    level: 'Sr Manager',
    topics: ['Architecture', 'Technical', 'System Design'],
    projectLinks: [
      { label: 'Scope Thinking', url: '/nebula/fraud-detection-thinking/scope' },
    ],
  },
  {
    id: 'domain-3',
    question: 'How do you demonstrate transferable skills in an interview when your experience is in a different domain than the role?',
    answer: `**Framework for Domain-Agnostic Skill Demonstration:**

**1. Lead with Principles, Not Implementation**
Instead of: "I built a card testing detector"
Say: "I built velocity-based attack detection that identifies anomalous entity behavior within short time windows"

The principle (velocity-based detection) transfers. The implementation (card attempts per 10 minutes) is domain-specific.

**2. Map Your Experience to Their Domain**
Before the interview, identify:
- What entities exist in their domain?
- What fraud/abuse vectors matter?
- What are their latency/scale requirements?

Then frame your experience: "In my fraud system, we tracked card velocity. In your ads platform, you would track click velocity per publisher - same pattern, different entities."

**3. Emphasize Architectural Decisions**
These always transfer:
- "I designed for sub-10ms latency with Redis velocity counters"
- "I separated ML scoring from policy decisions for operational agility"
- "I built fallback modes for infrastructure failures"

**4. Show You Can Learn Domain Quickly**
Ask intelligent questions about their specific challenges:
- "How do you handle [specific fraud vector] in your system?"
- "What latency requirements do you have for [decision type]?"

**5. Connect to Their Pain Points**
If they mention challenges, relate back:
- "That sounds similar to when we had to balance false positives against fraud losses. We solved it with profit-based thresholds..."

**Principal TPM insight**: Interviewers want to see you can think systematically about problems in their domain, not that you already know their domain. Demonstrate the thinking process, not just the answers.`,
    level: 'Sr Manager',
    topics: ['Communication', 'Strategy', 'Leadership'],
  },
  {
    id: 'domain-4',
    question: 'Explain how "ML does not decide, ML informs. Policy decides." applies across different domains like fraud detection, content moderation, and ad ranking.',
    answer: `**Core Principle:**
ML models output probability scores. Policy engines translate those scores into business decisions. This separation is fundamental to production ML systems.

**Why This Separation Matters:**

1. **Business Agility**: Policy can react to attacks in minutes (adjust thresholds) without engineering deploys
2. **Independent Iteration**: Data science can improve models while business tunes policies
3. **A/B Testing**: Test policies without changing models
4. **Audit Trail**: Clear record of which policy version made each decision

**Application Across Domains:**

**Fraud Detection:**
- ML: criminal_fraud_score, friendly_fraud_score
- Policy: If criminal > 0.85 AND amount > $500 THEN BLOCK
- Business controls: Threshold values, amount cutoffs, merchant exceptions

**Content Moderation:**
- ML: toxicity_score, spam_score, misinformation_score
- Policy: If toxicity > 0.9 THEN REMOVE, if > 0.7 THEN HUMAN_REVIEW
- Business controls: Per-community thresholds, creator tier exceptions

**Ad Ranking:**
- ML: predicted_CTR, predicted_conversion_rate
- Policy: If advertiser_quality < threshold THEN demote_position
- Business controls: Minimum ad quality, brand safety overrides

**Ads Auction:**
- ML: bid_prediction, engagement_prediction
- Policy: Revenue = bid × quality_score, but cap frequency per user
- Business controls: Frequency caps, category exclusions

**Architecture Pattern:**

\`\`\`
ML Models (Stateless)     Policy Engine (Configurable)     Decision (Auditable)
- Scores                  - Thresholds                     - ALLOW
- Probabilities           - Rules                          - BLOCK
- Signals                 - Overrides                      - REVIEW
                          - Experiments                    - DEMOTE
\`\`\`

**Principal TPM insight**: This architecture transfers to any ML-powered decision system. The domain-specific part is what signals feed the model and what decisions are possible. The separation itself is universal.`,
    level: 'Director',
    topics: ['Architecture', 'AI/ML', 'System Design'],
    projectLinks: [
      { label: 'Logic & Policy', url: '/nebula/fraud-detection-thinking/logic-policy' },
    ],
  },
  {
    id: 'domain-5',
    question: 'How do you handle SSR (Server-Side Rendering) issues with client-side authentication in React/Next.js applications?',
    answer: `**The Problem:**
localStorage is not available during SSR. Code that directly accesses localStorage on component mount will:
1. Throw errors during server rendering
2. Cause hydration mismatches between server and client
3. Show loading spinners indefinitely

**Anti-Pattern (What Breaks):**
\`\`\`typescript
// This breaks SSR - localStorage doesn't exist on server
const [isAuth, setIsAuth] = useState(false);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const auth = localStorage.getItem('auth');
  setIsAuth(auth === 'true');
  setIsLoading(false);
}, []);

if (isLoading) return <Spinner />; // Stuck here during SSR
\`\`\`

**Solution 1: Guard with typeof window**
\`\`\`typescript
useEffect(() => {
  if (typeof window !== 'undefined') {
    const auth = localStorage.getItem('auth');
    setIsAuth(auth === 'true');
  }
  setIsLoading(false);
}, []);
\`\`\`

**Solution 2: Use dynamic import with ssr: false**
\`\`\`typescript
const AuthGate = dynamic(() => import('./AuthGate'), { ssr: false });
\`\`\`

**Solution 3: Remove auth from public content**
For content that should be publicly accessible (like a portfolio blog), remove the auth gate entirely:
- Blog posts should be public for SEO and recruiter access
- Keep auth only on truly private content (interview prep, personal notes)

**My Implementation:**
Removed AuthGate from blog entirely since:
1. Blog should be public (portfolio showcase)
2. Nebula (interview prep) stays protected
3. Journey (development log) stays protected
4. Simpler solution than fixing SSR compatibility

**Principal TPM insight**: The best solution is often removing complexity rather than adding compatibility layers. Ask "should this content be protected at all?" before engineering around the problem.`,
    level: 'Sr Manager',
    topics: ['Architecture', 'Technical', 'System Design'],
  },
];

// Helper functions for filtering
export function filterByLevel(level: string): Question[] {
  if (level === 'all') return questions;
  return questions.filter(q => q.level === level);
}

export function filterByTopic(topic: string): Question[] {
  if (topic === 'all') return questions;
  return questions.filter(q => q.topics.includes(topic as any));
}

export function getAllTopics(): string[] {
  const topics = new Set<string>();
  questions.forEach(q => q.topics.forEach(t => topics.add(t)));
  return Array.from(topics).sort();
}
