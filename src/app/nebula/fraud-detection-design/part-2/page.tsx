"use client";

/**
 * Part 2: Entities & Features
 * Visual upgrade with gradient backgrounds, colored borders, styled numbered steps
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
      <div className="flex items-start gap-4 mb-8">
        <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
          2
        </span>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Entities & Features</h1>
          <p className="text-muted-foreground mt-1">
            Entity profiling (User, Device, Card, IP, Service, Phone/IMEI), Redis data structures, feature
            catalog with formulas.
          </p>
        </div>
      </div>

      {/* Entity Types */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Entity Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "User", icon: "👤", desc: "Account-level history, chargeback rate, tenure", color: "purple" },
            { name: "Device", icon: "📱", desc: "Fingerprint, fraud ring detection, shared devices", color: "blue" },
            { name: "Card", icon: "💳", desc: "BIN patterns, velocity, decline history", color: "green" },
            { name: "IP", icon: "🌐", desc: "Geo, VPN/proxy detection, datacenter signals", color: "orange" },
            { name: "Service", icon: "📡", desc: "Telco-specific: plan type, activation patterns", color: "pink" },
            { name: "Phone/IMEI", icon: "📞", desc: "SIM farm detection, device resale patterns", color: "cyan" },
          ].map((entity) => (
            <div
              key={entity.name}
              className={`p-4 bg-gradient-to-r from-${entity.color}-500/10 to-transparent rounded-lg border border-${entity.color}-500/20 hover:border-${entity.color}-500/40 transition-colors`}
            >
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
      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Feature Categories
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Category
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Computation
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Storage
                </th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-semibold">Velocity</td>
                <td className="p-3 border border-border text-muted-foreground">Sliding window counters</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs font-medium">Redis ZSET</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-primary/10 px-2 py-0.5 rounded font-mono">card_attempts_10m</code>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-semibold">Aggregates</td>
                <td className="p-3 border border-border text-muted-foreground">Incremental updates</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs font-medium">Redis Hash</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-primary/10 px-2 py-0.5 rounded font-mono">user_lifetime_chargebacks</code>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-semibold">Historical</td>
                <td className="p-3 border border-border text-muted-foreground">Batch rollups</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-green-500/15 text-green-600 dark:text-green-400 rounded text-xs font-medium">Feature Store</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-primary/10 px-2 py-0.5 rounded font-mono">user_chargeback_rate_90d</code>
                </td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="p-3 border border-border font-semibold">Distinct Counts</td>
                <td className="p-3 border border-border text-muted-foreground">HyperLogLog</td>
                <td className="p-3 border border-border">
                  <span className="px-2 py-1 bg-red-500/15 text-red-600 dark:text-red-400 rounded text-xs font-medium">Redis HLL</span>
                </td>
                <td className="p-3 border border-border">
                  <code className="text-xs bg-primary/10 px-2 py-0.5 rounded font-mono">device_distinct_cards_24h</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Key Feature Examples
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-amber-500/5 to-transparent rounded-lg border border-amber-500/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-sm font-bold">1</span>
              <span className="font-semibold text-foreground">Card Velocity (card_attempts_10m)</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2 ml-11">
              Count of transaction attempts from this card in the last 10 minutes
            </div>
            <div className="bg-muted/50 rounded p-3 font-mono text-xs text-muted-foreground ml-11">
              Redis ZSET: key = &quot;vel:card:{"{token}"}:10m&quot;, score = timestamp, value = txn_id
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-500/5 to-transparent rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">2</span>
              <span className="font-semibold text-foreground">Device Distinct Cards (device_distinct_cards_24h)</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2 ml-11">
              Number of unique cards used on this device in 24 hours
            </div>
            <div className="bg-muted/50 rounded p-3 font-mono text-xs text-muted-foreground ml-11">
              Redis HyperLogLog: key = &quot;hll:device:{"{fingerprint}"}:cards:24h&quot;
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-500/5 to-transparent rounded-lg border border-green-500/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">3</span>
              <span className="font-semibold text-foreground">User Chargeback Rate (user_chargeback_rate_90d)</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2 ml-11">
              Chargebacks / Total Transactions over 90 days
            </div>
            <div className="bg-muted/50 rounded p-3 font-mono text-xs text-muted-foreground ml-11">
              Batch computed daily, stored in Feature Store, synced to Redis
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-design/part-1"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">← Part 1: Tech Stack</span>
        </Link>
        <Link
          href="/nebula/fraud-detection-design/part-3"
          className="group px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <span className="group-hover:text-primary">Part 3: Detection & Policy →</span>
        </Link>
      </div>
    </ThinkingLayout>
  );
}
