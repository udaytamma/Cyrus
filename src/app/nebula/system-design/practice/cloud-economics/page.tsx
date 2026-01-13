"use client";

/**
 * System Design - Practice Questions Part II: Cloud Economics
 * Q21-30: FinOps, cost optimization, compute strategy
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import { Question, SectionHeader, PartHeader, InstructionsBox } from "@/components/PracticeQuestionComponents";

export default function CloudEconomicsQuestions() {
  return (
    <SystemDesignLayout
      title="System Design - Cloud Economics (Q21-30)"
      description="FinOps and cost optimization for Principal TPM interviews"
      currentSection="practice"
    >
      <Link
        href="/nebula/system-design/practice"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Practice Questions
      </Link>

      <PartHeader
        partNumber="II"
        title="Cloud Economics & Infrastructure"
        description="FinOps, cost optimization, compute strategy, and the financial physics that separate Principal from Senior TPM"
        questionRange="Q21-30"
        color="cyan"
      />

      <InstructionsBox />

      {/* Section: Cloud Economics */}
      <SectionHeader
        title="Cloud Economics (FinOps)"
        description="Cost optimization, compute strategy, and financial modeling"
        color="cyan"
      />

      <Question
        number={21}
        category="Cloud Economics"
        question="We have a steady-state workload of 5,000 cores that runs 24/7, plus a daily spike of 2,000 cores during business hours. A junior TPM suggests putting 100% of this on Reserved Instances to maximize the discount. How do you evaluate this proposal?"
        answer={
          <>
            <p className="mb-3">
              <strong>I would reject the 100% RI proposal</strong> because it creates financial waste during off-hours.
              If we reserve for the peak (7,000 cores), we are paying for 2,000 idle cores for 16 hours a day.
              That &quot;waste&quot; likely erodes the entire RI discount.
            </p>
            <p className="mb-3"><strong>The Principal Strategy:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Baseline (5,000 cores):</strong> Purchase Compute Savings Plans (more flexible than RIs).
                This locks in ~40% savings with zero utilization risk. Savings Plans apply to any instance type
                or region, giving engineering freedom to change architectures.
              </li>
              <li>
                <strong>Variable (2,000 cores):</strong> Cover the spike with Spot Instances (if stateless) or
                On-Demand (if stateful). Even if Spot is risky, the weighted average cost of &quot;Savings Plan + Spot&quot;
                is significantly lower than &quot;Over-provisioned RIs&quot;.
              </li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Math:</strong> Let&apos;s assume $0.10/core/hour On-Demand. At 100% RI for 7,000 cores (40% discount):
              7,000 &times; $0.06 &times; 24h = $10,080/day. With the hybrid approach: 5,000 &times; $0.06 &times; 24h + 2,000 &times; $0.02 (Spot) &times; 8h = $7,520/day.
              That&apos;s a 25% savings over &quot;maximizing the RI discount.&quot;
            </p>
            <p>
              <strong>Interview Signal:</strong> A Principal TPM treats compute capacity like a financial portfolio&mdash;not
              &quot;all stocks&quot; or &quot;all bonds&quot; but a risk-adjusted mix optimized for the specific workload pattern.
            </p>
          </>
        }
      />

      <Question
        number={22}
        category="Cloud Economics"
        question="Our storage bill for 'User Logs' is growing 20% MoM. The engineering team wants to keep them in S3 Standard for 'fast debugging'. What is your counter-proposal?"
        answer={
          <>
            <p className="mb-3">
              <strong>I would challenge the definition of &quot;fast debugging&quot;</strong> against the actual Data Access Pattern.
              Logs typically follow a <strong>Hot-Warm-Cold</strong> pattern: frequently queried for 3 days, rarely for 14 days,
              and almost never after 30 days. Keeping 6-month-old logs in S3 Standard is burning cash for zero operational value.
            </p>
            <p className="mb-3"><strong>The Fix:</strong></p>
            <p className="mb-3">
              Implement an <strong>S3 Intelligent-Tiering</strong> policy immediately. This automatically moves objects
              that haven&apos;t been accessed for 30 days to the Infrequent Access tier (40% cheaper), and after 90 days
              to Archive Instant Retrieval (68% cheaper), without requiring any code changes or latency penalties
              for the rare retrieval.
            </p>
            <p>
              <strong>Alternative:</strong> If access patterns are predictable, use explicit Lifecycle Policies:
              Standard (0-7 days) &rarr; S3-IA (7-30 days) &rarr; Glacier Instant Retrieval (30-90 days) &rarr; Glacier (90+ days).
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Laziness Tax:</strong> Keeping 100TB of logs in S3 Standard &quot;just in case&quot; costs ~$2,300/month.
              In Glacier: ~$400/month. Over a year, that&apos;s $22,800 wasted. Across an enterprise with petabytes,
              this becomes millions of dollars.
            </p>
            <p>
              <strong>The Gotcha:</strong> Glacier retrieval costs can surprise you. If you dump 1PB into Glacier and
              need to grep it during an incident, retrieval could cost $20,000+ in a single afternoon.
              Always model retrieval scenarios before archiving.
            </p>
          </>
        }
      />

      <Question
        number={23}
        category="Cloud Economics"
        question="We are designing a new Video Transcoding service. The team wants to run it in a single region (US-East-1) but serve global users to keep the architecture simple. What is the hidden cost risk?"
        answer={
          <>
            <p className="mb-3">
              <strong>The hidden risk is Internet Egress fees.</strong> Serving a 1GB video file directly from
              US-East-1 to a user in Tokyo routes traffic over the public internet backbone, charging the highest
              tier of data transfer (~$0.09/GB).
            </p>
            <p className="mb-3"><strong>The Math:</strong></p>
            <p className="mb-3">
              If we serve 1M video views/day at 500MB average: 500TB/day &times; $0.09/GB = <strong>$45,000/day in egress alone</strong>.
              That&apos;s $1.35M/month before any compute costs.
            </p>
            <p className="mb-3"><strong>The Fix:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Egress Shield:</strong> Data moves from S3 to CloudFront Edge within AWS&apos;s network (cheaper/free
                between S3 and CloudFront).
              </li>
              <li>
                <strong>Edge Delivery:</strong> We pay the CDN rate (~$0.02-0.05/GB depending on volume), not internet egress.
              </li>
              <li>
                <strong>Latency Improvement:</strong> User connects to a local Tokyo PoP, reducing latency by hundreds
                of milliseconds. Better UX AND lower cost.
              </li>
            </ul>
          </>
        }
        principalNuance={
          <p>
            <strong>The CDN Paradox:</strong> Most people think CDNs are for speed. At Principal level, you know
            they are for <strong>wallet protection</strong>. A 95% cache hit ratio means only 5% of requests hit
            the expensive origin. This is the &quot;Offload Ratio&quot;&mdash;the most important CDN metric for cost optimization.
          </p>
        }
      />

      <Question
        number={24}
        category="Cloud Economics"
        question="Explain why a microservices architecture often costs significantly more in 'Network' spend than the monolith it replaced, even if traffic is identical."
        answer={
          <>
            <p className="mb-3">
              <strong>This is the Inter-AZ Data Transfer Tax.</strong> In a monolith, function calls happen in memory (free).
              In microservices, they happen over the network. If Service A (Zone 1) calls Service B (Zone 2),
              AWS charges ~$0.01/GB.
            </p>
            <p className="mb-3"><strong>The Impact:</strong></p>
            <p className="mb-3">
              A single user request fanning out to 20 downstream services can trigger 40+ cross-zone hops.
              Assuming 3 AZs, statistically 66% of calls cross an AZ boundary. What was free (in-memory) now
              costs $0.01/GB each way. At Mag7 scale, this becomes <strong>millions of dollars annually</strong>.
            </p>
            <p className="mb-3"><strong>The Mitigation:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Zone Affinity:</strong> Configure Service Mesh (Istio/Envoy) to prefer routing to downstream
                instances in the same AZ. Only cross AZ for failover, not steady-state traffic.
              </li>
              <li>
                <strong>Data Locality:</strong> Co-locate chatty microservices in the same AZ if latency/cost
                outweighs the HA benefit of spreading across zones.
              </li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Math:</strong> 1M requests/day, each triggering 50 service calls, 10KB payload each,
              66% crossing AZ: 1M &times; 50 &times; 0.66 &times; 10KB = 330TB/month &times; $0.01 &times; 2 (bidirectional) = <strong>$6,600/month</strong>.
              This is &quot;invisible&quot; cost that doesn&apos;t show up in compute budgets.
            </p>
            <p>
              <strong>The Architecture Smell:</strong> If your network bill is growing faster than your compute bill,
              you likely have a chatty microservices problem.
            </p>
          </>
        }
      />

      <Question
        number={25}
        category="Cloud Economics"
        question="Finance is pushing for a 100% predictable monthly bill (CAPEX model), but Engineering needs auto-scaling (OPEX model). How do you bridge this gap?"
        answer={
          <>
            <p className="mb-3">
              <strong>I would bridge this using Unit Economics and Commitment Layers.</strong>
            </p>
            <p className="mb-3"><strong>The Floor (Predictable):</strong></p>
            <p className="mb-3">
              Analyze minimum baseline usage and cover 70-80% of it with a 1-Year Compute Savings Plan.
              This gives Finance a large, predictable fixed cost line item they can forecast for Wall Street.
            </p>
            <p className="mb-3"><strong>The Ceiling (Variable):</strong></p>
            <p className="mb-3">
              Frame the remaining variable spend not as &quot;cost&quot; but as <strong>Cost of Goods Sold (COGS)</strong>.
              Set up a dashboard tracking <strong>&quot;Cost Per Transaction&quot;</strong> or &quot;Cost Per Active User&quot;.
            </p>
            <p>
              If the bill goes up 10% but transactions go up 10%, I can prove to Finance that efficiency is stable,
              and the extra spend is actually <strong>revenue growth</strong>, not waste. This reframes the conversation
              from &quot;unpredictable costs&quot; to &quot;variable costs that scale with business success.&quot;
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Behavioral Shift:</strong> In CAPEX world (own your servers), 20% utilization was &quot;safe headroom.&quot;
              In OPEX world (cloud), 20% utilization is 80% waste. An engineer pushing a bad config that spins up
              1,000 extra nodes is financially identical to someone stealing $50,000 from the corporate safe.
            </p>
            <p>
              <strong>The Bridge Role:</strong> You sit between Finance (wants predictability) and Engineering (wants agility).
              Your toolkit: Commitments for the floor, Unit Economics for the ceiling, and transparency dashboards
              to build trust with both sides.
            </p>
          </>
        }
      />

      <Question
        number={26}
        category="Cloud Economics"
        question="A team wants to run a massive batch processing job on On-Demand instances because 'Spot is too flaky'. How do you argue for Spot?"
        answer={
          <>
            <p className="mb-3">
              <strong>I would argue that &quot;flakiness&quot; is an engineering problem, not a business constraint.</strong>
              Spot instances offer up to 90% discount. For a massive batch job, the savings could fund two
              full-time engineers for a year.
            </p>
            <p className="mb-3"><strong>The Solution:</strong></p>
            <p className="mb-3">We don&apos;t just &quot;try&quot; Spot. We <strong>engineer for it</strong>:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Diversification:</strong> Request a mix of c5, m5, and r5 instances. If one pool dries up,
                others may still be available. This is the &quot;Spot Fleet&quot; strategy.
              </li>
              <li>
                <strong>Checkpointing:</strong> Ensure the app saves progress to S3/Redis every few minutes.
                If a node gets the 2-minute termination warning, it creates a checkpoint and the job resumes
                on a new node with minimal loss.
              </li>
              <li>
                <strong>Graceful Shutdown:</strong> Handle SIGTERM signals&mdash;stop accepting new work, complete
                in-flight tasks, write checkpoint, and exit cleanly within 120 seconds.
              </li>
            </ul>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Math:</strong> 1,000 cores for 10 hours at On-Demand ($0.10/core/hr) = $1,000.
              Same job on Spot ($0.01/core/hr) = $100. If Spot gets interrupted twice and we restart with 10% overhead,
              we still save $800. The only scenario where On-Demand wins is if Spot interruptions exceed 90% of job time.
            </p>
            <p>
              <strong>Red Line:</strong> Never use Spot for database leaders, stateful singletons, or anything where
              the 2-minute warning causes data loss. Spot is for stateless, resumable workloads.
            </p>
          </>
        }
      />

      <Question
        number={27}
        category="Cloud Economics"
        question="We have a high-traffic service that speaks JSON over HTTP/1.1 between internal microservices. Why is this a cost problem?"
        answer={
          <>
            <p className="mb-3">
              <strong>This is a Compute and Bandwidth waste problem.</strong>
            </p>
            <p className="mb-3"><strong>Serialization Overhead:</strong></p>
            <p className="mb-3">
              JSON is text-based and bloated. Parsing it burns significant CPU cycles compared to binary formats.
              Repeated field names (<code>{`{customer_id: ...}`}</code>) consume bandwidth. A 1KB JSON payload
              might be 300 bytes in Protobuf.
            </p>
            <p className="mb-3"><strong>Connection Overhead:</strong></p>
            <p className="mb-3">
              HTTP/1.1 requires a new TCP connection for each request (or wasteful keep-alive management).
              The TLS handshake alone can be 2-3 round trips.
            </p>
            <p className="mb-3"><strong>The Fix:</strong></p>
            <p>
              Migrate high-volume internal services to <strong>gRPC (Protobuf over HTTP/2)</strong>.
              Binary serialization (smaller payload, faster CPU parsing) + HTTP/2 multiplexing (better connection reuse)
              can reduce fleet size by 20-30% and cut inter-service bandwidth by 40-60%.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>When NOT to switch:</strong> External APIs facing mobile/web clients should often stay JSON/REST.
              The benefits of ubiquitous client support and debuggability outweigh the efficiency gains.
              The ROI of gRPC is highest for high-volume, internal, server-to-server communication.
            </p>
            <p>
              <strong>The Hidden Cost:</strong> At 1B requests/day, a 300-byte savings per request = 300GB/day = ~$900/month
              in inter-AZ transfer alone. Plus CPU savings from faster parsing.
            </p>
          </>
        }
      />

      <Question
        number={28}
        category="Cloud Economics"
        question="A developer wants to connect a Lambda function in a private VPC to S3 using a NAT Gateway. Is this approved?"
        answer={
          <>
            <p className="mb-3">
              <strong>Rejected.</strong> Using a NAT Gateway to talk to S3 is a <strong>double tax</strong>.
            </p>
            <p className="mb-3"><strong>The Cost:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>NAT Gateway processing fee: ~$0.045/GB</li>
              <li>Data transfer out through NAT: ~$0.09/GB</li>
              <li>NAT Gateway hourly charge: ~$0.045/hour</li>
            </ul>
            <p className="mb-3"><strong>The Fix:</strong></p>
            <p className="mb-3">
              Use a <strong>VPC Gateway Endpoint for S3</strong>. It is <strong>free</strong>, keeps the traffic entirely
              on the private AWS network (more secure), and avoids the NAT Gateway bottleneck entirely.
            </p>
            <p>
              <strong>For other AWS services</strong> (DynamoDB, SQS, etc.), use VPC Interface Endpoints (PrivateLink).
              There&apos;s a small hourly charge (~$0.01/hour) but it&apos;s far cheaper than NAT Gateway data processing fees.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The NAT Gateway Tax:</strong> This is the most common hidden cost in AWS. A Lambda function
              processing 1TB/month through NAT to S3 costs ~$135/month in NAT fees alone. The same traffic through
              a Gateway Endpoint: $0.
            </p>
            <p>
              <strong>Audit Action:</strong> Run a Cost Explorer query filtering for NAT Gateway data processing.
              If it&apos;s significant, investigate what traffic is flowing through it. Often 80% can be moved to
              Gateway/Interface Endpoints.
            </p>
          </>
        }
      />

      <Question
        number={29}
        category="Cloud Economics"
        question="Why does 'Active-Active' Multi-Region architecture often triple the database cost?"
        answer={
          <>
            <p className="mb-3">
              <strong>It&apos;s the Replication Multiplier.</strong> In a single region, you write data once.
              In a 3-region Active-Active setup, every write must be replicated to the other two regions.
            </p>
            <p className="mb-3"><strong>The Cost Components:</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li><strong>Storage:</strong> You pay to store the data 3 times (once per region).</li>
              <li><strong>Egress:</strong> You pay Inter-Region Data Transfer fees (~$0.02/GB) to send every
              write to the other regions.</li>
              <li><strong>Compute:</strong> You need database capacity in all 3 regions to handle local reads/writes.</li>
              <li><strong>Conflict Resolution:</strong> Engineering time to handle write conflicts adds hidden cost.</li>
            </ul>
            <p className="mb-3"><strong>The Decision Framework:</strong></p>
            <p>
              Unless we have a strict regulatory requirement (data residency) or a P0 availability need
              (zero tolerance for regional outage), I would advocate for <strong>Geo-Sharding</strong>
              (store German users only in Germany) or <strong>Active-Passive</strong> (single write region)
              to avoid the cost of global synchronous replication.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Hidden Cost:</strong> Active-Active isn&apos;t just 2-3x compute/storage. It&apos;s also:
              cross-region data sync (continuous), conflict resolution complexity (engineering time),
              testing overhead (must test failover regularly), and operational complexity (runbooks, training).
              Total cost is often 2.5-3x, not 2x.
            </p>
            <p>
              <strong>Alternative:</strong> For most services, Multi-AZ in a single region with
              asynchronous replication to a DR region provides 99.99% availability at 1.3x cost, not 3x.
            </p>
          </>
        }
      />

      <Question
        number={30}
        category="Cloud Economics"
        question="Explain the 'Data Gravity' principle in the context of cost."
        answer={
          <>
            <p className="mb-3">
              <strong>Data Gravity means: &quot;Moving Compute is cheap; Moving Data is expensive.&quot;</strong>
            </p>
            <p className="mb-3"><strong>The Physics:</strong></p>
            <p className="mb-3">
              A Docker container is ~500MB. A production database is ~500TB. If we have 500TB of data in us-east-1
              and we spin up a compute cluster in us-west-2 to process it, we will incur a massive Egress Bill
              (~$0.02/GB &times; 500TB = $10,000) just to move that data across the country.
            </p>
            <p className="mb-3"><strong>The Rule:</strong></p>
            <p className="mb-3">
              <strong>Always spin up compute resources in the same region (and ideally same VPC) as the data source.</strong>
              The binary is small; the data is huge. Move the code to the data, not the data to the code.
            </p>
            <p><strong>The Optimization:</strong></p>
            <p>
              If we must move data, aggregate/filter it in place first (using tools like S3 Select, Athena, or BigQuery)
              and only transfer the tiny result set. Query 500TB in place, transfer 5GB of results.
            </p>
          </>
        }
        principalNuance={
          <>
            <p className="mb-2">
              <strong>The Cloud Lock-In Angle:</strong> Data Gravity is also why cloud providers offer free ingress
              but expensive egress. Once your 500TB is in AWS, moving it to GCP costs ~$10,000. The data&apos;s
              &quot;gravitational pull&quot; keeps you locked in.
            </p>
            <p>
              <strong>The ML/Analytics Trap:</strong> Data scientists love spinning up GPU clusters in whichever
              region has capacity. Each training run that pulls data from a different region can cost thousands
              in egress. Enforce a policy: &quot;Compute must be co-located with training data.&quot;
            </p>
          </>
        }
      />

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <Link
          href="/nebula/system-design/practice/fundamentals"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Part I: Fundamentals
        </Link>
        <Link
          href="/nebula/system-design/practice/sla-math"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Part III: SLA Math &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
