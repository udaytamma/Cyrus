"use client";

/**
 * Data Points Reference - All detection signals with sources and calculations
 * FULL content - not condensed
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export default function DataPointsReference() {
  return (
    <ThinkingLayout
      title="Data Points Reference"
      description="Complete reference of all detection signals, their real-world sources, calculations, and simulation mode"
      currentSection="data-points"
    >
      <Link
        href="/nebula/fraud-detection-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Overview
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="text-4xl font-bold text-primary/20">10</span>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Data Points Reference</h1>
          <p className="text-muted-foreground mt-1">
            Every detection signal with real-world source, calculation method, and current simulation mode
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
        <h3 className="text-sm font-semibold text-foreground mb-3">Column Reference</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li><strong className="text-foreground">Data Point</strong> - Signal name as used in code</li>
          <li><strong className="text-foreground">Real World Source</strong> - Where this data comes from in production</li>
          <li><strong className="text-foreground">Calculation</strong> - How the value is computed/derived</li>
          <li><strong className="text-foreground">Current Mode</strong> - How it arrives in simulation (Request = API body, Redis = live counters, Hardcoded = static values)</li>
        </ul>
      </div>

      {/* ================================================================== */}
      {/* CARD TESTING DETECTION */}
      {/* ================================================================== */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
          1. Card Testing Detection
        </h2>
        <p className="text-muted-foreground mb-6">
          Detects card testing/enumeration attacks where fraudsters probe stolen cards with small transactions.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Data Point</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Real World Source</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Calculation</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Current Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_attempts_10m</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis sliding window counter</td>
                <td className="p-3 border border-border text-muted-foreground">
                  ZSET increment on every transaction request for card_token.
                  <br /><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ZADD fraud:card:{"{card_token}"}:attempts {"{tx_id}"} {"{timestamp_ms}"}</code>
                  <br />Count with <code className="bg-muted px-1.5 py-0.5 rounded text-xs">ZCOUNT</code> for last 600,000ms
                </td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_declines_10m</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis sliding window counter</td>
                <td className="p-3 border border-border text-muted-foreground">
                  ZSET increment on every DECLINED transaction response.
                  <br />Separate key: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">fraud:card:{"{card_token}"}:declines</code>
                </td>
                <td className="p-3 border border-border">Redis (live) - incremented on decline response</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_decline_rate_10m</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed from Redis counters</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_declines_10m / card_attempts_10m</code>
                  <br />Returns 0.0 if attempts = 0
                </td>
                <td className="p-3 border border-border">Computed (derived)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">amount_cents</code></td>
                <td className="p-3 border border-border text-muted-foreground">Telco billing system / payment gateway</td>
                <td className="p-3 border border-border text-muted-foreground">Transaction amount in cents from payment request (topup, activation, equipment purchase)</td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">PaymentEvent.amount_cents</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_distinct_cards_1h</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis HyperLogLog or ZSET</td>
                <td className="p-3 border border-border text-muted-foreground">
                  ZSET with card_token as member, timestamp as score.
                  <br /><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ZADD fraud:device:{"{device_id}"}:distinct_cards {"{card_token}"} {"{ts}"}</code>
                  <br />Count distinct members in last 3,600,000ms
                </td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_distinct_cards_1h</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis HyperLogLog or ZSET</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Same pattern as device_distinct_cards, keyed by IP.
                  <br /><code className="bg-muted px-1.5 py-0.5 rounded text-xs">fraud:ip:{"{ip_address}"}:distinct_cards</code>
                </td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <h4 className="text-sm font-semibold text-foreground mb-2">Card Testing Thresholds (from settings.py)</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">velocity_threshold_10m</code>: 5 attempts triggers signal (0.8 score)</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">decline_ratio_threshold</code>: 80% decline rate triggers signal (0.9 score)</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">small_amount_threshold_cents</code>: $5.00 (500 cents) - amounts below this + velocity = testing pattern</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_distinct_cards</code>: 5+ cards from same device = BIN attack signal (0.85 score)</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_distinct_cards</code>: 10+ cards from same IP = BIN attack signal (0.8 score)</li>
          </ul>
        </div>
      </section>

      {/* ================================================================== */}
      {/* VELOCITY DETECTION */}
      {/* ================================================================== */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
          2. Velocity Attack Detection
        </h2>
        <p className="text-muted-foreground mb-6">
          Detects abnormal transaction velocity indicating stolen cards, account takeover, or fraud rings.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Data Point</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Real World Source</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Calculation</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Current Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_attempts_1h</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis sliding window</td>
                <td className="p-3 border border-border text-muted-foreground">
                  ZCOUNT on <code className="bg-muted px-1.5 py-0.5 rounded text-xs">fraud:card:{"{token}"}:attempts</code> for last 3,600,000ms
                </td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_distinct_cards_24h</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis ZSET distinct count</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Members = card_tokens, scores = timestamps.
                  <br />ZCOUNT for last 86,400,000ms
                </td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_distinct_cards_1h</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis ZSET distinct count</td>
                <td className="p-3 border border-border text-muted-foreground">Same pattern, keyed by IP address</td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_transactions_24h</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis sliding window</td>
                <td className="p-3 border border-border text-muted-foreground">
                  ZCOUNT on <code className="bg-muted px-1.5 py-0.5 rounded text-xs">fraud:user:{"{user_id}"}:attempts</code>
                </td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_amount_24h_cents</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis + aggregation</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Sum of amounts from transactions in 24h window.
                  <br />Could use Redis ZSET with amount as secondary data.
                </td>
                <td className="p-3 border border-border">Redis (live) or computed from transaction log</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_distinct_accounts_24h</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis ZSET distinct count</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">fraud:card:{"{token}"}:distinct_accounts</code>
                  <br />Members = subscriber_id/user_id, scores = timestamps
                  <br />Tracks how many different subscriber accounts use the same card
                </td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_distinct_devices_24h</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis ZSET distinct count</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">fraud:card:{"{token}"}:distinct_devices</code>
                  <br />Members = device_id
                </td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_distinct_ips_24h</code></td>
                <td className="p-3 border border-border text-muted-foreground">Redis ZSET distinct count</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">fraud:card:{"{token}"}:distinct_ips</code>
                  <br />Members = ip_address
                </td>
                <td className="p-3 border border-border">Redis (live)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <h4 className="text-sm font-semibold text-foreground mb-2">Velocity Thresholds (from settings.py)</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_attempts_1h</code>: 10 (default) - more than 10 txns/hour on same card</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_cards_24h</code>: 5 (default) - more than 5 different cards from same device</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_cards_1h</code>: 10 (default) - more than 10 different cards from same IP</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_amount_24h</code>: $5,000 (500,000 cents) - daily spend limit</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_transactions</code>: 20/day unusual, triggers at 0.5 weight</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_accounts</code>: 10+ subscriber accounts in 24h = SIM farm spreading pattern</li>
            <li><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_devices/ips</code>: 3+ devices or 5+ IPs = card sharing/theft</li>
          </ul>
        </div>
      </section>

      {/* ================================================================== */}
      {/* GEO ANOMALY DETECTION */}
      {/* ================================================================== */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
          3. Geographic Anomaly Detection
        </h2>
        <p className="text-muted-foreground mb-6">
          Detects geographic inconsistencies: country mismatches, high-risk regions, anonymization networks.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Data Point</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Real World Source</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Calculation</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Current Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_country_code</code></td>
                <td className="p-3 border border-border text-muted-foreground">MaxMind GeoIP2 / IP2Location</td>
                <td className="p-3 border border-border text-muted-foreground">
                  IP geolocation lookup at request time.
                  <br />Returns ISO 3166-1 alpha-2 code (US, GB, etc.)
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">GeoInfo.country_code</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_country</code></td>
                <td className="p-3 border border-border text-muted-foreground">Card network BIN database</td>
                <td className="p-3 border border-border text-muted-foreground">
                  BIN lookup from first 6-8 digits of card.
                  <br />Provided by Visa/Mastercard BIN tables.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">PaymentEvent.card_country</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_country_card_country_match</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed comparison</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_country_code == card_country</code>
                  <br />True if match, False if mismatch
                </td>
                <td className="p-3 border border-border">Computed from request fields</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_is_tor</code></td>
                <td className="p-3 border border-border text-muted-foreground">Tor Project exit node list / IP intelligence vendor</td>
                <td className="p-3 border border-border text-muted-foreground">
                  IP lookup against known Tor exit nodes.
                  <br />Updated daily from torproject.org or via vendor API.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">GeoInfo.is_tor</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_is_vpn</code></td>
                <td className="p-3 border border-border text-muted-foreground">IP intelligence vendor (IPQualityScore, MaxMind)</td>
                <td className="p-3 border border-border text-muted-foreground">
                  IP reputation lookup.
                  <br />Vendors maintain databases of VPN provider IP ranges.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">GeoInfo.is_vpn</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_is_proxy</code></td>
                <td className="p-3 border border-border text-muted-foreground">IP intelligence vendor</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Detects open proxies, web proxies, SOCKS proxies.
                  <br />Often bundled with VPN detection.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">GeoInfo.is_proxy</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_is_datacenter</code></td>
                <td className="p-3 border border-border text-muted-foreground">IP intelligence vendor / ASN database</td>
                <td className="p-3 border border-border text-muted-foreground">
                  ASN lookup to identify datacenter/cloud provider IPs.
                  <br />AWS, GCP, Azure, DigitalOcean IP ranges.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">GeoInfo.is_datacenter</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">high_risk_country</code></td>
                <td className="p-3 border border-border text-muted-foreground">Internal policy / compliance</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Lookup against hardcoded list:
                  <br />NG, GH, ID, VN, PH, UA, RU
                </td>
                <td className="p-3 border border-border">Hardcoded in <code className="bg-muted px-1.5 py-0.5 rounded text-xs">geo.py:HIGH_RISK_COUNTRIES</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <h4 className="text-sm font-semibold text-foreground mb-2">Geo Signal Scores</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><strong className="text-foreground">Country mismatch</strong>: 0.6 score - common for travelers, expats</li>
            <li><strong className="text-foreground">High-risk country</strong>: 0.5 score - legitimate users exist in these countries</li>
            <li><strong className="text-foreground">Tor exit node</strong>: 0.8 score - strong anonymization signal</li>
            <li><strong className="text-foreground">VPN/Proxy</strong>: 0.4 score - many legitimate users use VPNs</li>
            <li><strong className="text-foreground">Datacenter IP</strong>: 0.7 score - consumers rarely transact from datacenters</li>
          </ul>
        </div>
      </section>

      {/* ================================================================== */}
      {/* BOT DETECTION */}
      {/* ================================================================== */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
          4. Bot and Automation Detection
        </h2>
        <p className="text-muted-foreground mb-6">
          Detects automated fraud using device fingerprinting, network signals, and behavioral patterns.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Data Point</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Real World Source</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Calculation</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Current Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_is_emulator</code></td>
                <td className="p-3 border border-border text-muted-foreground">Device fingerprinting SDK (Fingerprint.js, SHIELD)</td>
                <td className="p-3 border border-border text-muted-foreground">
                  SDK detects: Android emulator properties, iOS simulator,
                  missing hardware sensors, generic device IDs.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">DeviceInfo.is_emulator</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_is_rooted</code></td>
                <td className="p-3 border border-border text-muted-foreground">Device fingerprinting SDK</td>
                <td className="p-3 border border-border text-muted-foreground">
                  SDK detects: su binary, Magisk, Xposed, jailbreak artifacts,
                  Cydia, unusual file permissions.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">DeviceInfo.is_rooted</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_id</code></td>
                <td className="p-3 border border-border text-muted-foreground">Device fingerprinting SDK</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Browser: Canvas hash, WebGL renderer, audio context, fonts.
                  <br />Mobile: Hardware IDs, IMEI hash, advertising ID.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">DeviceInfo.device_id</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">os</code> / <code className="bg-muted px-1.5 py-0.5 rounded text-xs">browser</code></td>
                <td className="p-3 border border-border text-muted-foreground">User-Agent parsing + fingerprinting</td>
                <td className="p-3 border border-border text-muted-foreground">
                  User-Agent string parsed for OS/browser.
                  <br />Cross-validated with JS navigator properties.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">DeviceInfo.os</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">DeviceInfo.browser</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">suspicious_user_agent</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed from device info</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Detects impossible combinations:
                  <br />- Safari on Linux (Safari only runs on Apple)
                  <br />- Windows mobile browser claiming desktop
                </td>
                <td className="p-3 border border-border">Computed from DeviceInfo fields</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">incomplete_fingerprint</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed from device info</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Missing 3+ of: OS, browser, screen_resolution, timezone, language.
                  <br />Indicates fingerprint spoofing or headless browser.
                </td>
                <td className="p-3 border border-border">Computed from DeviceInfo fields</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">screen_resolution</code></td>
                <td className="p-3 border border-border text-muted-foreground">Device fingerprinting SDK</td>
                <td className="p-3 border border-border text-muted-foreground">
                  JavaScript: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">screen.width x screen.height</code>
                  <br />Mobile: Native screen dimensions
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">DeviceInfo.screen_resolution</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">timezone</code></td>
                <td className="p-3 border border-border text-muted-foreground">Device fingerprinting SDK</td>
                <td className="p-3 border border-border text-muted-foreground">
                  JavaScript: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">Intl.DateTimeFormat().resolvedOptions().timeZone</code>
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">DeviceInfo.timezone</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <h4 className="text-sm font-semibold text-foreground mb-2">Bot Signal Scores</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><strong className="text-foreground">Emulator</strong>: 0.9 score - very strong fraud signal, legitimate users rarely use emulators</li>
            <li><strong className="text-foreground">Rooted device</strong>: 0.6 score - some power users root devices legitimately</li>
            <li><strong className="text-foreground">Datacenter IP</strong>: 0.8 score - consumers do not transact from AWS/GCP</li>
            <li><strong className="text-foreground">Tor</strong>: 0.85 score - strong anonymization intent</li>
            <li><strong className="text-foreground">VPN/Proxy</strong>: 0.3 score - many legitimate privacy-conscious users</li>
            <li><strong className="text-foreground">Suspicious UA</strong>: 0.5 score - could be testing or misconfigured client</li>
            <li><strong className="text-foreground">Incomplete fingerprint</strong>: 0.4 score - might be privacy browser</li>
          </ul>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FRIENDLY FRAUD DETECTION */}
      {/* ================================================================== */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
          5. Friendly Fraud Detection
        </h2>
        <p className="text-muted-foreground mb-6">
          Detects first-party abuse: chargebacks on legitimate transactions, refund gaming, subscription abuse.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Data Point</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Real World Source</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Calculation</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Current Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_chargeback_count_90d</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL entity profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  COUNT of chargeback events for user_id in last 90 days.
                  <br />Updated async when CHARGEBACK events arrive.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: 0)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_chargeback_rate</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed from profile + velocity</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_chargeback_count_90d / (user_transactions_24h * 30)</code>
                  <br />Rough estimate using 30-day extrapolation.
                </td>
                <td className="p-3 border border-border">Computed (derived)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_refund_count_90d</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL entity profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  COUNT of refund events for user_id in last 90 days.
                  <br />Updated async when REFUND events arrive.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: 0)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_chargeback_count</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL card profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Total chargebacks on this card_token (all time).
                  <br />Cards with prior chargebacks are high risk.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: 0)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_chargeback_count</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL device profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Total chargebacks from this device_id (all time).
                  <br />Devices associated with chargebacks are high risk.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: 0)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_risk_tier</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL user profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Tier assignment: NORMAL, ELEVATED, HIGH.
                  <br />Based on historical behavior patterns.
                  <br />Updated by batch ML model or manual review.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: "NORMAL")</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_is_guest</code></td>
                <td className="p-3 border border-border text-muted-foreground">Telco subscriber system</td>
                <td className="p-3 border border-border text-muted-foreground">
                  True if prepaid activation without existing subscriber account.
                  <br />Guest + device purchase = elevated device resale fraud risk.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">PaymentEvent.is_guest</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_account_age_days</code></td>
                <td className="p-3 border border-border text-muted-foreground">Telco subscriber database (CRM)</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">today - subscriber_activation_date</code>
                  <br />New subscribers (&lt;30 days) are higher risk for device resale fraud.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">PaymentEvent.account_age_days</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">user_is_new</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed from account age</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">account_age_days &lt; 7</code>
                </td>
                <td className="p-3 border border-border">Computed (derived)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <h4 className="text-sm font-semibold text-foreground mb-2">Friendly Fraud Thresholds</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><strong className="text-foreground">Chargeback rate</strong>: 3% threshold triggers high-risk flag (0.7 score)</li>
            <li><strong className="text-foreground">Chargeback count</strong>: 2+ chargebacks in 90 days = flag (0.6 score)</li>
            <li><strong className="text-foreground">Refund count</strong>: 5+ refunds in 90 days = potential gaming (0.4 score)</li>
            <li><strong className="text-foreground">Card chargeback</strong>: 1+ prior chargeback on card = flag (0.5 score)</li>
            <li><strong className="text-foreground">Device chargeback</strong>: 2+ prior chargebacks on device = flag (0.5 score)</li>
            <li><strong className="text-foreground">HIGH risk tier</strong>: Pre-classified high risk = 0.6 score</li>
            <li><strong className="text-foreground">Guest + high value</strong>: Guest checkout $500+ = 0.4 score</li>
          </ul>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ENTITY FEATURES (PROFILE DATA) */}
      {/* ================================================================== */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
          6. Entity Profile Features
        </h2>
        <p className="text-muted-foreground mb-6">
          Historical entity profiles stored in PostgreSQL, updated asynchronously.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Data Point</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Real World Source</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Calculation</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Current Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_age_days</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL card profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">today - first_seen_date</code>
                  <br />First time this card_token was used.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated: None = new)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_is_new</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed from card_age_days</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_age_days is None or card_age_days == 0</code>
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: True)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_total_transactions</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL card profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  COUNT of all transactions for this card_token.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: 0)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_age_days</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL device profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">today - first_seen_date</code>
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated: None)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">ip_total_transactions</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL IP profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  COUNT of transactions from this IP (all time).
                  <br />High volume IPs may be NAT/corporate.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: 0)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">card_user_match</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL card-user linkage</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Has this card been used by this user before?
                  <br />Based on historical card_token + user_id pairs.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: True)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">device_user_match</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL device-user linkage</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Has this device been used by this user before?
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: True)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">event_subtype_is_high_risk</code></td>
                <td className="p-3 border border-border text-muted-foreground">Internal policy configuration</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Event subtype lookup against high-risk telco operations:
                  <br />sim_swap (ATO risk), international_enable (IRSF risk),
                  <br />device_upgrade (resale fraud), equipment_purchase (fraud ring)
                </td>
                <td className="p-3 border border-border">Computed from PaymentEvent.event_subtype</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">service_chargeback_rate_30d</code></td>
                <td className="p-3 border border-border text-muted-foreground">PostgreSQL service profile</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Service-level chargeback rate in last 30 days.
                  <br />High-chargeback service types (e.g., prepaid topup) increase risk.
                </td>
                <td className="p-3 border border-border">EntityFeatures (simulated default: 0.0)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================================================================== */}
      {/* VERIFICATION SIGNALS */}
      {/* ================================================================== */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
          7. Card Verification Signals
        </h2>
        <p className="text-muted-foreground mb-6">
          Verification results from payment processor - critical for evidence and liability shift.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Data Point</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Real World Source</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Calculation</th>
                <th className="text-left p-3 bg-muted/50 text-foreground font-semibold border border-border">Current Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">avs_result</code></td>
                <td className="p-3 border border-border text-muted-foreground">Payment processor (Stripe, Adyen)</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Address Verification Service result code.
                  <br />Compares billing address to card issuer records.
                  <br />Codes: Y (match), N (no match), A (partial), etc.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">VerificationInfo.avs_result</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">avs_match</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed from avs_result</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">avs_result in ["Y", "X", "D", "M"]</code>
                  <br />True if address matched.
                </td>
                <td className="p-3 border border-border">FeatureSet (computed)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">cvv_result</code></td>
                <td className="p-3 border border-border text-muted-foreground">Payment processor</td>
                <td className="p-3 border border-border text-muted-foreground">
                  CVV/CVC verification result.
                  <br />M (match), N (no match), P (not processed).
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">VerificationInfo.cvv_result</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">cvv_match</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed from cvv_result</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">cvv_result == "M"</code>
                </td>
                <td className="p-3 border border-border">FeatureSet (computed)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">three_ds_result</code></td>
                <td className="p-3 border border-border text-muted-foreground">3D Secure authentication server</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Authentication result: Y (success), A (attempted), N (failed).
                  <br />Successful 3DS shifts liability to issuer.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">VerificationInfo.three_ds_result</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">has_3ds</code></td>
                <td className="p-3 border border-border text-muted-foreground">Computed from three_ds_result</td>
                <td className="p-3 border border-border text-muted-foreground">
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">three_ds_result is not None</code>
                </td>
                <td className="p-3 border border-border">PaymentEvent property (computed)</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="p-3 border border-border"><code className="bg-muted px-1.5 py-0.5 rounded text-xs">three_ds_eci</code></td>
                <td className="p-3 border border-border text-muted-foreground">3D Secure authentication server</td>
                <td className="p-3 border border-border text-muted-foreground">
                  Electronic Commerce Indicator.
                  <br />05/02 = fully authenticated, 06/01 = attempted.
                </td>
                <td className="p-3 border border-border">Request body: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">VerificationInfo.three_ds_eci</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DATA FLOW DIAGRAM */}
      {/* ================================================================== */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
          8. Data Flow Summary
        </h2>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Request Time (Synchronous)</h4>
            <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
              <MermaidDiagram
                chart={`flowchart LR
  subgraph PE[PaymentEvent - API Request Body]
    direction TB
    TX[Transaction]
    TC[Telco Context]
    SUB[Subscriber]
    DI[DeviceInfo]
    GI[GeoInfo]
    VI[VerificationInfo]
    USR[User]
  end

  TX --> TX1[amount_cents]
  TX --> TX2[currency]
  TX --> TX3[card_token]
  TX --> TX4[service_id]
  TX --> TX5[service_type]

  TC --> TC1[event_subtype]
  TC1 --> TC1A[sim_activation]
  TC1 --> TC1B[topup]
  TC1 --> TC1C[device_upgrade]

  SUB --> SUB1[phone_number]
  SUB --> SUB2[imei]
  SUB --> SUB3[sim_iccid]
  SUB --> SUB4[subscriber_id]

  DI --> DI1[device_id]
  DI --> DI2[is_emulator]
  DI --> DI3[is_rooted]
  DI --> DI4[os / browser]

  GI --> GI1[ip_address]
  GI --> GI2[country_code]
  GI --> GI3[is_vpn / is_tor]
  GI --> GI4[is_datacenter]

  VI --> VI1[avs_result]
  VI --> VI2[cvv_result]
  VI --> VI3[three_ds_result]

  USR --> USR1[user_id]
  USR --> USR2[account_age_days]
  USR --> USR3[is_guest]

  style PE fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
  style TX fill:#fef3c7,stroke:#f59e0b
  style TC fill:#fef3c7,stroke:#f59e0b
  style SUB fill:#fef3c7,stroke:#f59e0b
  style DI fill:#d1fae5,stroke:#10b981
  style GI fill:#d1fae5,stroke:#10b981
  style VI fill:#fce7f3,stroke:#ec4899
  style USR fill:#fce7f3,stroke:#ec4899`}
              />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Redis Counters (Real-time)</h4>
            <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
              <MermaidDiagram
                chart={`flowchart LR
  subgraph VF[VelocityFeatures - Redis ZSETs]
    direction TB
    CARD[Card Counters]
    DEV[Device Counters]
    IP[IP Counters]
    USER[User Counters]
    PHONE[Phone Counters]
  end

  CARD --> C1[attempts - 10m/1h/24h]
  CARD --> C2[declines - 10m/1h]
  CARD --> C3[distinct_accounts]
  CARD --> C4[distinct_devices]
  CARD --> C5[distinct_ips]

  DEV --> D1[attempts]
  DEV --> D2[distinct_cards]
  DEV --> D3[distinct_users]

  IP --> I1[attempts]
  IP --> I2[distinct_cards]

  USER --> U1[transactions]
  USER --> U2[amount_24h]

  PHONE --> P1[sim_activations]
  PHONE --> P2[device_upgrades]

  style VF fill:#fee2e2,stroke:#ef4444,stroke-width:2px
  style CARD fill:#fef3c7,stroke:#f59e0b
  style DEV fill:#d1fae5,stroke:#10b981
  style IP fill:#e0e7ff,stroke:#6366f1
  style USER fill:#fce7f3,stroke:#ec4899
  style PHONE fill:#fef3c7,stroke:#f59e0b`}
              />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">PostgreSQL Profiles (Async Updates)</h4>
            <div className="bg-muted/30 rounded-lg p-4 overflow-x-auto">
              <MermaidDiagram
                chart={`flowchart LR
  subgraph EF[EntityFeatures - PostgreSQL]
    direction TB
    CARD[Card Profile]
    DEV[Device Profile]
    USER[User/Subscriber]
    IP[IP Profile]
    SVC[Service Profile]
    PH[Phone/IMEI]
    CROSS[Cross-entity]
  end

  CARD --> CP1[age_days]
  CARD --> CP2[total_transactions]
  CARD --> CP3[chargeback_count]
  CARD --> CP4[is_new]

  DEV --> DP1[age_days]
  DEV --> DP2[chargeback_count]
  DEV --> DP3[is_emulator/is_rooted]

  USER --> UP1[account_age]
  USER --> UP2[risk_tier]
  USER --> UP3[chargeback_count_90d]
  USER --> UP4[refund_count_90d]

  IP --> IP1[total_transactions]
  IP --> IP2[is_datacenter/vpn/tor]

  SVC --> SV1[chargeback_rate_30d]
  SVC --> SV2[event_subtype_is_high_risk]

  PH --> PH1[sim_swap_count]
  PH --> PH2[activation_count]

  CROSS --> CR1[card_user_match]
  CROSS --> CR2[device_user_match]

  style EF fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
  style CARD fill:#fef3c7,stroke:#f59e0b
  style DEV fill:#d1fae5,stroke:#10b981
  style USER fill:#fce7f3,stroke:#ec4899
  style IP fill:#fee2e2,stroke:#ef4444
  style SVC fill:#fef3c7,stroke:#f59e0b
  style PH fill:#d1fae5,stroke:#10b981
  style CROSS fill:#e0e7ff,stroke:#6366f1`}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <h4 className="text-sm font-semibold text-foreground mb-2">Current Simulation Mode</h4>
          <p className="text-sm text-muted-foreground mb-3">
            In the current MVP implementation:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><strong className="text-foreground">Request fields</strong>: Sent in API body by client/dashboard (fully simulated)</li>
            <li><strong className="text-foreground">Redis counters</strong>: Live Redis instance, counters increment with each request</li>
            <li><strong className="text-foreground">EntityFeatures</strong>: Default values (new card, new user, no chargebacks)</li>
            <li><strong className="text-foreground">High-risk lists</strong>: Hardcoded in Python files</li>
            <li><strong className="text-foreground">Policy thresholds</strong>: Loaded from <code className="bg-muted px-1.5 py-0.5 rounded text-xs">config/policy.yaml</code></li>
          </ul>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INTERVIEW APPLICATION */}
      {/* ================================================================== */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Interview Application
        </h2>
        <p className="text-muted-foreground mb-6">
          When asked about data sources and architecture for real-time decision systems.
        </p>

        <p className="text-sm text-muted-foreground mb-4">When asked "Walk me through how a fraud detection system gets its data":</p>

        <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary mb-6">
          <h4 className="text-sm font-semibold text-primary mb-3">2-Minute Response</h4>
          <div className="text-sm text-muted-foreground italic space-y-3">
            <p>
              "Real-time decision systems have three distinct data paths, each with different latency
              and freshness requirements. This architecture applies to fraud detection, ads serving,
              recommendation engines, or any system making sub-second decisions.
            </p>
            <p>
              First is request-time data - everything that arrives with the request itself. For telco
              fraud, this includes transaction details like amount and service type, device fingerprinting
              data like is_emulator and is_rooted from SDKs like Fingerprint.js, geographic signals like
              IP country and VPN detection from vendors like MaxMind, and verification results like
              AVS and CVV match codes from the payment processor. This data is synchronous - it is
              in the request body and available immediately.
            </p>
            <p>
              Second is real-time velocity data stored in Redis. We use sorted sets with timestamps
              as scores to implement sliding windows. When a transaction arrives, we ZADD to increment
              counters, then ZCOUNT to get counts within time windows - like card attempts in the
              last 10 minutes or SIM activations per card in the last hour. This data is live - it
              updates with every request and is queried synchronously during scoring.
            </p>
            <p>
              Third is historical profile data in PostgreSQL. This includes entity histories like
              card age and total transactions, chargeback and refund counts, and pre-computed risk
              tiers. This data is updated asynchronously when events like chargebacks arrive - we
              do not block the payment decision waiting for a database write.
            </p>
            <p>
              The key insight is matching data freshness to its use case. Velocity attacks need
              sub-second freshness, so we use Redis. Historical patterns can tolerate staleness,
              so we use PostgreSQL. Request-time signals are the freshest but have the narrowest
              view - just this one transaction."
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">When asked "How does this data architecture transfer to other domains?":</p>

        <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary mb-6">
          <h4 className="text-sm font-semibold text-primary mb-3">1-Minute Response</h4>
          <div className="text-sm text-muted-foreground italic space-y-3">
            <p>
              "The three-tier architecture - request-time, real-time counters, and historical profiles -
              transfers directly to any real-time decision system. In ads serving, request-time data is
              the ad request context, real-time counters track impression frequency caps, and historical
              profiles store user interests. In recommendations, request-time is the current session,
              real-time counters track recent interactions, and historical profiles store long-term
              preferences.
            </p>
            <p>
              The storage choices may vary - Bigtable instead of PostgreSQL, Memcached instead of Redis -
              but the tiering principle remains constant. Match data freshness requirements to storage
              characteristics. Never block a real-time decision waiting for slow storage."
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">When asked "What telco-specific fraud patterns do you detect?":</p>

        <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
          <h4 className="text-sm font-semibold text-primary mb-3">2-Minute Response</h4>
          <div className="text-sm text-muted-foreground italic space-y-3">
            <p>
              "Telco payment fraud has distinct patterns compared to e-commerce that required domain-specific
              detection logic. Understanding these patterns demonstrates how to adapt a generic fraud
              framework to specific industry requirements.
            </p>
            <p>
              First, SIM farm attacks - fraudsters activate multiple prepaid SIMs using stolen cards to
              monetize through premium SMS, verification codes, or resale. We detect this through velocity
              patterns like multiple SIM activations from the same card, emulator detection indicating
              automated activation, and datacenter/Tor IPs suggesting non-consumer traffic.
            </p>
            <p>
              Second, device resale fraud - subscribers upgrade to subsidized devices with intent to resell,
              often defaulting on contracts. Signals include new subscriber doing immediate device upgrade,
              high-value equipment purchases from first-time cards, and mismatched device and billing profiles.
            </p>
            <p>
              Third, account takeover via SIM swap - attackers port a victim's number to hijack 2FA codes.
              We flag all SIM swap requests for review and correlate with recent failed authentication attempts.
            </p>
            <p>
              Fourth, IRSF (International Revenue Share Fraud) - enabling international calling to premium
              destinations. We apply friction (3DS verification) on international roaming enables and monitor
              for unusual destination patterns.
            </p>
            <p>
              The key telco-specific data points are event_subtype (sim_activation, device_upgrade, sim_swap,
              international_enable), subscriber identifiers (phone_number, IMEI, SIM ICCID), and service
              context (mobile vs broadband, prepaid vs postpaid). These domain-specific signals layer on
              top of the generic fraud detection framework."
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-thinking/design-rationale"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          &larr; Previous: Design Rationale
        </Link>
        <Link
          href="/nebula/fraud-detection-thinking"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Back to Overview &rarr;
        </Link>
      </div>
    </ThinkingLayout>
  );
}
