"use client";

/**
 * Deep Dive: Data Transfer Optimization
 * Section 4 of 12
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import {
  Subsection,
  Insight,
  BulletItem,
  DeepDiveHeader,
} from "@/components/DeepDiveComponents";

export default function DataTransferPage() {
  return (
    <SystemDesignLayout
      title="Data Transfer Optimization"
      description="Reducing egress and protecting gross margin"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={4}
        title="Data Transfer Optimization"
        subtitle="Reducing egress and protecting gross margin"
        color="purple"
      />

      <Subsection title="CDN: The Egress Shield" color="purple">
        <p className="text-sm text-muted-foreground mb-4">
          Most people think CDNs are for speed. At Principal level, you know they are for wallet protection.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Origin Egress">
            Serving 1MB image directly from S3/EC2 costs ~$0.09/GB (high egress rate)
          </BulletItem>
          <BulletItem title="CDN Egress">
            Via CloudFront/Fastly, you pay lower negotiated rate. Data moves within cloud network (often free).
          </BulletItem>
          <BulletItem title="Offload Ratio">
            Critical metric. If CDN has 95% cache hit ratio, only 5% hits expensive origin.
          </BulletItem>
        </ul>

        <Insight title="Tiered Caching">
          Don&apos;t just use one Edge location. Use a Regional Edge Cache (mid-tier).
          If Edge misses, it checks Regional Cache before hitting Origin.
          This protects your database from Thundering Herd.
        </Insight>
      </Subsection>

      <Subsection title="Compression & Serialization" color="purple">
        <p className="text-sm text-muted-foreground mb-4">
          The fastest data transfer is the one you don&apos;t send.
        </p>
        <ul className="space-y-1">
          <BulletItem title="Text (JS/CSS/HTML)">
            Gzip is standard. Brotli is 20-30% smaller but uses more CPU.
            Pre-compress static assets in build pipeline&mdash;don&apos;t compress on every request.
          </BulletItem>
          <BulletItem title="Images">
            Never serve raw JPEG/PNG. Use WebP or AVIF.
            Consider Just-in-Time optimization (Cloudinary, Lambda@Edge).
          </BulletItem>
          <BulletItem title="Internal Traffic">
            JSON is bloated (repeating field names).
            For high-volume internal services, mandate gRPC (Protobuf)&mdash;reduces traffic 40-60%.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="Data Locality" color="purple">
        <p className="text-sm text-muted-foreground mb-4">
          Moving compute is cheap (binary is small). Moving data is expensive (database is huge).
        </p>
        <ul className="space-y-1">
          <BulletItem title="Push Down Queries">
            Don&apos;t download 10TB of logs to EC2 to filter. Use BigQuery/Athena to query in place.
            Pay for &quot;Data Scanned&quot; (internal), not data transfer.
          </BulletItem>
          <BulletItem title="S3 Select">
            Instead of downloading entire files, use S3 Select to filter at source.
          </BulletItem>
        </ul>
      </Subsection>

      <Subsection title="Private Connectivity" color="purple">
        <p className="text-sm text-muted-foreground mb-4">
          The NAT Gateway Tax is the most common hidden cost in AWS.
        </p>
        <ul className="space-y-1">
          <BulletItem title="The Trap">
            Private subnets use NAT Gateway for internet access.
            AWS charges ~$0.045/GB processing fee for every byte through NAT, plus transfer cost.
          </BulletItem>
          <BulletItem title="The Fix">
            Use VPC Peering or PrivateLink. Traffic stays on provider backbone.
            Lower latency, higher security, significantly lower cost (~$0.01/GB).
          </BulletItem>
        </ul>
      </Subsection>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/network-costs"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Network Costs
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/storage-lifecycle"
          className="text-sm text-primary hover:underline"
        >
          Next: Storage Lifecycle &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
