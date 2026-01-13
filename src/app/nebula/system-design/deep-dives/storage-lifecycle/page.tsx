"use client";

/**
 * Deep Dive: Storage Lifecycle & Data Death Rate
 * Section 5 of 12
 */

import Link from "next/link";
import { SystemDesignLayout } from "@/components/SystemDesignLayout";
import {
  Subsection,
  Pitfall,
  BulletItem,
  DataTable,
  DeepDiveHeader,
} from "@/components/DeepDiveComponents";

export default function StorageLifecyclePage() {
  return (
    <SystemDesignLayout
      title="Storage Lifecycle"
      description="Define the Death Date on Day 1"
      currentSection="deep-dives"
    >
      <Link
        href="/nebula/system-design/deep-dives"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Deep Dives
      </Link>

      <DeepDiveHeader
        number={5}
        title="Storage Lifecycle & Data Death Rate"
        subtitle="Define the Death Date on Day 1"
        color="indigo"
      />

      <Subsection title="The Principal Rule" color="indigo">
        <p className="text-sm text-muted-foreground mb-4">
          <strong className="text-foreground">Data Death Date:</strong> A mandatory expiration timestamp
          attached to an object the moment it is created. This forces an active decision to keep data
          (by tagging it with an exception) rather than passive hoarding.
        </p>

        <h4 className="text-sm font-semibold text-foreground mb-2">Standard Lifecycle Policy</h4>
        <DataTable
          headers={["Stage", "Duration", "Storage Class", "Purpose"]}
          rows={[
            ["Active", "Days 0-30", "S3 Standard", "Immediate processing, ML training"],
            ["Cooling", "Days 31-90", "S3-IA", "Monthly reporting, audit queries"],
            ["Frozen", "Days 91-365", "Glacier", "Compliance archives, rarely accessed"],
            ["Death", "Day 366+", "DELETE", "Stop the billing meter"],
          ]}
        />

        <Pitfall>
          <strong>The &quot;Laziness Tax&quot;:</strong> Keeping 1TB of log data in S3 Standard &quot;just in case&quot; costs ~$23/month.
          In Glacier Deep Archive: ~$1/month. That $22/month difference is the tax you pay for not
          defining a lifecycle policy. Over petabytes, this becomes millions of dollars.
        </Pitfall>
      </Subsection>

      <Subsection title="S3 Intelligent-Tiering" color="indigo">
        <p className="text-sm text-muted-foreground mb-4">
          Autopilot for cost savings when access patterns are unpredictable.
        </p>
        <ul className="space-y-1">
          <BulletItem title="How It Works">
            Monitors access and automatically moves objects between tiers.
            Frequent &rarr; Infrequent (30 days no access) &rarr; Archive (90 days).
          </BulletItem>
          <BulletItem title="Key Benefit">
            No retrieval fees when moving back to hot tier. Access old file instantly.
          </BulletItem>
          <BulletItem title="The Gotcha">
            Charges monitoring fee ($0.0025 per 1,000 objects).
            For millions of tiny files, manual lifecycle may be cheaper.
          </BulletItem>
        </ul>
      </Subsection>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center pt-6 border-t border-border">
        <Link
          href="/nebula/system-design/deep-dives/data-transfer"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          &larr; Previous: Data Transfer Optimization
        </Link>
        <Link
          href="/nebula/system-design/deep-dives/sla-mathematics"
          className="text-sm text-primary hover:underline"
        >
          Next: SLA Mathematics &rarr;
        </Link>
      </div>
    </SystemDesignLayout>
  );
}
