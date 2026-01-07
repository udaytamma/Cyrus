"use client";

/**
 * Part 2: Entities & Features
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function Part2() {
  return (
    <ThinkingLayout
      title="Part 2: Entities & Features"
      description="Entity profiling, Redis data structures, feature catalog"
      currentSection="part-2"
    >
      <Link
        href="/nebula/fraud-detection-design"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Design Docs
      </Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="text-4xl mb-3">2</div>
        <h1 className="text-2xl font-bold text-primary mb-2">Entities & Features</h1>
        <p className="text-muted-foreground">
          Entity profiling (User, Device, Card, IP, Service, Phone/IMEI), Redis data structures, feature
          catalog with formulas.
        </p>
      </div>

      {/* Entity Types */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Entity Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "User", icon: "👤", desc: "Account-level history, chargeback rate, tenure" },
            { name: "Device", icon: "📱", desc: "Fingerprint, fraud ring detection, shared devices" },
            { name: "Card", icon: "💳", desc: "BIN patterns, velocity, decline history" },
            { name: "IP", icon: "🌐", desc: "Geo, VPN/proxy detection, datacenter signals" },
            { name: "Service", icon: "📡", desc: "Telco-specific: plan type, activation patterns" },
            { name: "Phone/IMEI", icon: "📞", desc: "SIM farm detection, device resale patterns" },
          ].map((entity) => (
            <div key={entity.name} className="p-4 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{entity.icon}</span>
                <span className="font-semibold text-foreground">{entity.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">{entity.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Categories */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Feature Categories
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Category
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Computation
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Storage
                </th>
                <th className="text-left p-3 bg-muted/50 text-primary font-semibold border border-border">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Velocity</td>
                <td className="p-3 border border-border">Sliding window counters</td>
                <td className="p-3 border border-border">Redis ZSET</td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-primary/10 px-1 rounded">card_attempts_10m</code>
                </td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Aggregates</td>
                <td className="p-3 border border-border">Incremental updates</td>
                <td className="p-3 border border-border">Redis Hash</td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-primary/10 px-1 rounded">user_lifetime_chargebacks</code>
                </td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Historical</td>
                <td className="p-3 border border-border">Batch rollups</td>
                <td className="p-3 border border-border">Feature Store</td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-primary/10 px-1 rounded">user_chargeback_rate_90d</code>
                </td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border font-semibold">Distinct Counts</td>
                <td className="p-3 border border-border">HyperLogLog</td>
                <td className="p-3 border border-border">Redis HLL</td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-primary/10 px-1 rounded">device_distinct_cards_24h</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Key Feature Examples
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <div className="font-semibold text-foreground mb-2">Card Velocity (card_attempts_10m)</div>
            <div className="text-sm text-muted-foreground mb-2">
              Count of transaction attempts from this card in the last 10 minutes
            </div>
            <div className="bg-muted/50 rounded p-2 font-mono text-xs text-muted-foreground">
              Redis ZSET: key = "vel:card:{"{token}"}:10m", score = timestamp, value = txn_id
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <div className="font-semibold text-foreground mb-2">Device Distinct Cards (device_distinct_cards_24h)</div>
            <div className="text-sm text-muted-foreground mb-2">
              Number of unique cards used on this device in 24 hours
            </div>
            <div className="bg-muted/50 rounded p-2 font-mono text-xs text-muted-foreground">
              Redis HyperLogLog: key = "hll:device:{"{fingerprint}"}:cards:24h"
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <div className="font-semibold text-foreground mb-2">User Chargeback Rate (user_chargeback_rate_90d)</div>
            <div className="text-sm text-muted-foreground mb-2">
              Chargebacks / Total Transactions over 90 days
            </div>
            <div className="bg-muted/50 rounded p-2 font-mono text-xs text-muted-foreground">
              Batch computed daily, stored in Feature Store, synced to Redis
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-1"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Part 1: Tech Stack
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-3"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Part 3: Detection & Policy →
        </Link>
      </div>
    </ThinkingLayout>
  );
}
