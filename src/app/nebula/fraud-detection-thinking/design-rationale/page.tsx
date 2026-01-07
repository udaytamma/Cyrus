"use client";

/**
 * Section 9: Design Rationale
 * Comprehensive "why" behind every score, threshold, and design decision
 */

import Link from "next/link";
import { ThinkingLayout } from "@/components/ThinkingLayout";

export default function DesignRationale() {
  return (
    <ThinkingLayout
      title="Design Rationale - Thinking Process"
      description="The 'why' behind every score, threshold, and design decision"
      currentSection="design-rationale"
    >
      {/* Header */}
      <div className="text-center mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
          9
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">Design Rationale</h1>
        <p className="text-muted-foreground">
          The "why" behind every score value, threshold, and architectural decision.
          This document explains the reasoning a Principal TPM needs to defend design choices.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Contents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <a href="#score-values" className="text-muted-foreground hover:text-primary transition-colors">
            1. Score Values Explained
          </a>
          <a href="#threshold-justifications" className="text-muted-foreground hover:text-primary transition-colors">
            2. Threshold Justifications
          </a>
          <a href="#aggregation-logic" className="text-muted-foreground hover:text-primary transition-colors">
            3. Aggregation Logic
          </a>
          <a href="#confidence-adjustment" className="text-muted-foreground hover:text-primary transition-colors">
            4. Confidence Adjustment
          </a>
          <a href="#false-positive-prevention" className="text-muted-foreground hover:text-primary transition-colors">
            5. False Positive Prevention
          </a>
          <a href="#policy-thresholds" className="text-muted-foreground hover:text-primary transition-colors">
            6. Policy Thresholds
          </a>
          <a href="#detector-weights" className="text-muted-foreground hover:text-primary transition-colors">
            7. Detector Weights
          </a>
          <a href="#business-tradeoffs" className="text-muted-foreground hover:text-primary transition-colors">
            8. Business Trade-offs
          </a>
        </div>
      </div>

      {/* Section 1: Score Values */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="score-values">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          1. Score Values Explained
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Every signal in the system produces a score between 0.0 and 1.0. These values are not arbitrary -
            they represent the <strong className="text-foreground">probability that this signal indicates fraud</strong>, calibrated against
            real-world false positive rates.
          </p>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Card Testing Detector Scores
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Signal</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Score</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card velocity (5+ attempts in 10min)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.8</td>
                  <td className="py-2 px-3">High velocity is a strong signal but not definitive. Could be legitimate retry after timeout, payment form resubmission, or shared card (family). Strong enough to trigger review, not strong enough to auto-block alone.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High decline rate (80%+ with 3+ attempts)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.9</td>
                  <td className="py-2 px-3">High decline rate combined with multiple attempts is very strong evidence of testing stolen cards. Legitimate users rarely have 80% decline rate. The "3+ attempts" requirement prevents false positives from single declines (insufficient funds, expired card).</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Small amount ($1-5) + velocity</td>
                  <td className="py-2 px-3 font-bold text-primary">0.6</td>
                  <td className="py-2 px-3">Small amounts alone are not suspicious (donations, subscriptions, tips). But combined with velocity pattern, it indicates testing. Lower score because many legitimate small transactions exist.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Device using 5+ cards in 1 hour</td>
                  <td className="py-2 px-3 font-bold text-primary">0.85</td>
                  <td className="py-2 px-3">Normal users have 1-3 cards. A single device cycling through 5+ cards in an hour is highly anomalous. Slightly lower than 0.9 because shared devices (kiosks, family tablets) exist but are rare.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">IP using 10+ cards in 1 hour</td>
                  <td className="py-2 px-3 font-bold text-primary">0.8</td>
                  <td className="py-2 px-3">Higher threshold than device (10 vs 5) because IPs can be shared (office, coffee shop, university). Still strong signal when exceeded.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Bot Detection Scores
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Signal</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Score</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Emulator detected</td>
                  <td className="py-2 px-3 font-bold text-primary">0.9</td>
                  <td className="py-2 px-3">Legitimate consumers do not use Android emulators for payments. This is a near-definitive fraud signal. Only reason it is not 1.0: rare edge cases like developers testing their own apps.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Rooted/jailbroken device</td>
                  <td className="py-2 px-3 font-bold text-primary">0.6</td>
                  <td className="py-2 px-3">Many legitimate power users root devices for customization. However, rooting also enables fraud tools. Medium signal - raises suspicion but should not block alone.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Datacenter IP</td>
                  <td className="py-2 px-3 font-bold text-primary">0.8</td>
                  <td className="py-2 px-3">Consumer transactions should come from residential IPs. Datacenter IPs (AWS, GCP, Digital Ocean) indicate bots or proxy services. Strong signal with low false positive rate for consumer transactions.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Tor exit node</td>
                  <td className="py-2 px-3 font-bold text-primary">0.85</td>
                  <td className="py-2 px-3">Tor is specifically designed for anonymity. While some privacy-conscious users exist, the fraud rate from Tor is extremely high. Most merchants block Tor entirely.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">VPN/Proxy</td>
                  <td className="py-2 px-3 font-bold text-primary">0.3</td>
                  <td className="py-2 px-3">Many legitimate users use VPNs for privacy or to access region-locked content. Low signal alone - only concerning when combined with other signals.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Suspicious user agent</td>
                  <td className="py-2 px-3 font-bold text-primary">0.5</td>
                  <td className="py-2 px-3">Browser/OS mismatches (Safari on Linux) indicate spoofing. Medium signal because user agent can be accidentally malformed by proxies or outdated apps.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Incomplete fingerprint</td>
                  <td className="py-2 px-3 font-bold text-primary">0.4</td>
                  <td className="py-2 px-3">Missing 3+ common fingerprint elements suggests spoofing or privacy tools. Lower score because strict privacy browsers (Brave, Firefox with protections) also limit fingerprinting.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Geographic Anomaly Scores
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Signal</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Score</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">IP country differs from card country</td>
                  <td className="py-2 px-3 font-bold text-primary">0.6</td>
                  <td className="py-2 px-3">Common for travelers, expats, and remote workers. Medium signal because legitimate mismatch is frequent. Would be higher (0.8+) if we had IP-to-billing-address mismatch.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High-risk country (Nigeria, Ghana, etc.)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.5</td>
                  <td className="py-2 px-3">Certain countries have statistically higher fraud rates. However, many legitimate users exist. Medium signal to avoid discrimination while acknowledging risk patterns.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Tor exit node (geo context)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.8</td>
                  <td className="py-2 px-3">Same as bot detection - Tor indicates intentional anonymization which correlates with fraud intent.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">VPN/Proxy (geo context)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.4</td>
                  <td className="py-2 px-3">VPN use is common for privacy. In geo context, it means we cannot trust the reported location, adding uncertainty rather than proving fraud.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Datacenter IP (geo context)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.7</td>
                  <td className="py-2 px-3">Non-residential IP in geographic context confirms the user is hiding their true location. Strong signal but not as definitive as in bot context.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Velocity Attack Scores
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Signal</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Score</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card velocity (10+ txns/hour)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.5-1.0</td>
                  <td className="py-2 px-3">Sliding scale: score = attempts / (threshold * 2). At 10 attempts = 0.5, at 20 = 1.0. Proportional scoring because severity increases with velocity.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">User transactions (20+/day)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.25</td>
                  <td className="py-2 px-3">Weighted at 50% (0.5 * 0.5) because high-transaction users exist (day traders, resellers). Raises flag but should not dominate score.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">User amount ($5000+/day)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.36</td>
                  <td className="py-2 px-3">Weighted at 60% because amount limits are softer - high spenders are valuable customers. Flag for review, not block.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card at 10+ subscriber accounts/day</td>
                  <td className="py-2 px-3 font-bold text-primary">0.25</td>
                  <td className="py-2 px-3">Weighted at 50%. For telco, this indicates the same card activating multiple subscriber accounts - a SIM farm pattern. Concerning but could be family/business accounts.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card from 3+ devices/day</td>
                  <td className="py-2 px-3 font-bold text-primary">0.36</td>
                  <td className="py-2 px-3">Weighted at 60%. Family sharing and multi-device users exist, but 3+ is unusual. Stronger signal than merchant spread.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card from 5+ IPs/day</td>
                  <td className="py-2 px-3 font-bold text-primary">0.6</td>
                  <td className="py-2 px-3">Full weight because IP diversity is harder to explain legitimately. Mobile users switch networks but rarely hit 5+ distinct IPs with transactions.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Friendly Fraud Scores
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Signal</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Score</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High chargeback rate (3%+ in 90 days)</td>
                  <td className="py-2 px-3 font-bold text-primary">0.7</td>
                  <td className="py-2 px-3">Industry chargeback rate is 0.5-1%. A 3%+ rate is 3-6x normal, indicating abuse pattern. Strong signal but customer might have legitimate disputes.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">2+ chargebacks in 90 days</td>
                  <td className="py-2 px-3 font-bold text-primary">0.6</td>
                  <td className="py-2 px-3">Absolute count matters regardless of transaction volume. Two chargebacks in 90 days suggests pattern. Lower than rate because low-volume users might have bad luck.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">5+ refunds in 90 days</td>
                  <td className="py-2 px-3 font-bold text-primary">0.4</td>
                  <td className="py-2 px-3">Refunds are less concerning than chargebacks (merchant-controlled). But high refund count suggests gaming. Medium signal.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card with prior chargebacks</td>
                  <td className="py-2 px-3 font-bold text-primary">0.5</td>
                  <td className="py-2 px-3">Card-level history matters - same card, same risk. Medium signal because card could be legitimate victim of prior fraud.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Device with 2+ chargebacks</td>
                  <td className="py-2 px-3 font-bold text-primary">0.5</td>
                  <td className="py-2 px-3">Device-level pattern indicates systematic abuse. Two chargebacks from same device is concerning pattern.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">HIGH risk tier user</td>
                  <td className="py-2 px-3 font-bold text-primary">0.6</td>
                  <td className="py-2 px-3">Pre-computed risk tier from historical behavior. HIGH tier means repeated abuse patterns confirmed.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Guest checkout for $500+</td>
                  <td className="py-2 px-3 font-bold text-primary">0.4</td>
                  <td className="py-2 px-3">High-value purchases without account create attribution difficulty for disputes. Medium signal - many legitimate guests buy expensive items.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            High-Value Transaction Scores
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Signal</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Score</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High value + new account</td>
                  <td className="py-2 px-3 font-bold text-primary">0.6</td>
                  <td className="py-2 px-3">New accounts making large purchases are high risk. Fraudsters create accounts and immediately cash out. But new customers also buy expensive items.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High value + new card</td>
                  <td className="py-2 px-3 font-bold text-primary">0.5</td>
                  <td className="py-2 px-3">First-seen card with high value is concerning. Slightly lower than new account because cards rotate legitimately (replacements, new issuances).</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High value + no 3DS</td>
                  <td className="py-2 px-3 font-bold text-primary">0.4</td>
                  <td className="py-2 px-3">Lack of strong authentication for high value is risky. Medium signal because 3DS availability varies by issuer and region.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High value + AVS mismatch</td>
                  <td className="py-2 px-3 font-bold text-primary">0.5</td>
                  <td className="py-2 px-3">Address verification failure on high value is concerning. Could indicate stolen card with wrong billing address.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High value + CVV mismatch</td>
                  <td className="py-2 px-3 font-bold text-primary">0.6</td>
                  <td className="py-2 px-3">CVV failure is stronger signal than AVS - the CVV should always be correct for card-present or legitimate card-not-present. Failure indicates the person does not possess the physical card.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 2: Threshold Justifications */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="threshold-justifications">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          2. Threshold Justifications
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Thresholds define when a pattern becomes "suspicious enough" to act on. These values balance
            fraud detection against customer friction.
          </p>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Card Testing Thresholds
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Threshold</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Value</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card attempts in 10 minutes</td>
                  <td className="py-2 px-3 font-bold text-primary">5</td>
                  <td className="py-2 px-3">Normal checkout: 1-2 attempts (initial + retry). Payment issues: 3-4 attempts. 5+ in 10 minutes exceeds any legitimate scenario. Short window (10min) catches rapid testing before fraudster moves on.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Decline ratio threshold</td>
                  <td className="py-2 px-3 font-bold text-primary">80%</td>
                  <td className="py-2 px-3">Legitimate users have decline rates of 5-15% (card limits, insufficient funds). 80%+ means most attempts fail - characteristic of testing stolen cards where most are already blocked or invalid.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Small amount threshold</td>
                  <td className="py-2 px-3 font-bold text-primary">$5</td>
                  <td className="py-2 px-3">Card testing uses small amounts to minimize detection and loss. $1-5 is typical test range. $5 threshold catches most tests while excluding small legitimate purchases (coffee, tips, subscriptions).</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Device cards (1 hour)</td>
                  <td className="py-2 px-3 font-bold text-primary">5</td>
                  <td className="py-2 px-3">Normal device: 1-2 cards (personal + spouse). Shared device: 3-4 cards. 5+ cards in 1 hour from same device is characteristic of card testing operation.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">IP cards (1 hour)</td>
                  <td className="py-2 px-3 font-bold text-primary">10</td>
                  <td className="py-2 px-3">Higher than device threshold because IPs can be shared (NAT, corporate networks). 10 distinct cards in 1 hour still exceeds any legitimate shared IP scenario.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Velocity Thresholds
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Threshold</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Value</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card attempts per hour</td>
                  <td className="py-2 px-3 font-bold text-primary">10</td>
                  <td className="py-2 px-3">Longer window than card testing (1hr vs 10min) for different attack pattern. Sustained usage of 10+ transactions/hour indicates automated abuse or account takeover cashout.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Device distinct cards (24h)</td>
                  <td className="py-2 px-3 font-bold text-primary">5</td>
                  <td className="py-2 px-3">Over 24 hours, 5+ distinct cards from one device is highly unusual. Even families with multiple cards rarely exceed 4 from same device in a day.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">IP distinct cards (1h)</td>
                  <td className="py-2 px-3 font-bold text-primary">10</td>
                  <td className="py-2 px-3">Short window + high count catches active attacks. Legitimate shared IPs rarely see 10 distinct cards in a single hour.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">User transactions per day</td>
                  <td className="py-2 px-3 font-bold text-primary">20</td>
                  <td className="py-2 px-3">Power users exist (resellers, day traders) but 20+ daily transactions is extreme. Weighted lower in scoring because legitimate high-volume users are valuable.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">User spend per day</td>
                  <td className="py-2 px-3 font-bold text-primary">$5,000</td>
                  <td className="py-2 px-3">High-value customers spend this much legitimately. Threshold triggers review, not block. Protects against sudden account takeover cashout.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card subscriber accounts per day</td>
                  <td className="py-2 px-3 font-bold text-primary">10</td>
                  <td className="py-2 px-3">For telco, 10+ subscriber accounts in a day from same card indicates SIM farm operation or coordinated fraud ring. Even family/business rarely exceeds 5 accounts.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card devices per day</td>
                  <td className="py-2 px-3 font-bold text-primary">3</td>
                  <td className="py-2 px-3">Normal: 1-2 devices (phone + laptop). 3+ suggests card shared beyond owner or compromised and used from multiple fraud devices.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card IPs per day</td>
                  <td className="py-2 px-3 font-bold text-primary">5</td>
                  <td className="py-2 px-3">Mobile users change IPs but with same device. 5+ distinct IPs with transactions suggests distributed fraud operation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Friendly Fraud Thresholds
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Threshold</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Value</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Chargeback rate</td>
                  <td className="py-2 px-3 font-bold text-primary">3%</td>
                  <td className="py-2 px-3">Industry average: 0.5-1%. Card network thresholds: 1-2%. 3% is 3x industry average - clear abuse pattern while allowing some legitimate disputes.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Chargeback count (90 days)</td>
                  <td className="py-2 px-3 font-bold text-primary">2</td>
                  <td className="py-2 px-3">One chargeback can be legitimate (fraud, merchant issue). Two chargebacks in 90 days suggests pattern regardless of transaction volume.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Refund count (90 days)</td>
                  <td className="py-2 px-3 font-bold text-primary">5</td>
                  <td className="py-2 px-3">Higher than chargebacks because refunds are merchant-controlled and less damaging. 5+ refunds in 90 days indicates gaming behavior.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Guest high-value threshold</td>
                  <td className="py-2 px-3 font-bold text-primary">$500</td>
                  <td className="py-2 px-3">Below $500, guest checkout is common for convenience purchases. Above $500, lack of account creates attribution risk for disputes.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            High-Value Threshold
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Threshold</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Value</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High-value transaction</td>
                  <td className="py-2 px-3 font-bold text-primary">$1,000</td>
                  <td className="py-2 px-3">Merchant-dependent, but $1,000 is common threshold. Above this, the cost of a false negative (fraud loss) exceeds the cost of friction (cart abandonment). Worth extra scrutiny.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">New account age</td>
                  <td className="py-2 px-3 font-bold text-primary">7 days</td>
                  <td className="py-2 px-3">Most fraud happens within first week of account creation. After 7 days, account has established some behavioral baseline. Still elevated risk until 30+ days.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 3: Aggregation Logic */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="aggregation-logic">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          3. Aggregation Logic
        </h2>
        <div className="text-muted-foreground space-y-4">
          <h3 className="text-base font-semibold text-primary mb-3">
            Why Max-Based Scoring (Not Average)?
          </h3>
          <p>
            The system uses <code className="bg-muted px-1.5 py-0.5 rounded text-sm">max(signals) + 0.05 * (n-1)</code> instead of average. Here is why:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Approach</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Formula</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Problem</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Average</td>
                  <td className="py-2 px-3"><code className="bg-muted px-1 py-0.5 rounded text-xs">sum(signals) / n</code></td>
                  <td className="py-2 px-3">A 0.9 signal with three 0.0 signals averages to 0.225 - far too low. One definitive fraud signal gets diluted by absence of other signals.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Sum</td>
                  <td className="py-2 px-3"><code className="bg-muted px-1 py-0.5 rounded text-xs">sum(signals)</code></td>
                  <td className="py-2 px-3">Unbounded. Multiple weak signals (4x 0.3) score 1.2, but none individually indicate fraud. Quantity should not replace quality.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Max</td>
                  <td className="py-2 px-3"><code className="bg-muted px-1 py-0.5 rounded text-xs">max(signals)</code></td>
                  <td className="py-2 px-3">Better, but ignores corroborating evidence. [0.8, 0.7, 0.6] is more suspicious than just [0.8].</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Max + Boost</td>
                  <td className="py-2 px-3"><code className="bg-muted px-1 py-0.5 rounded text-xs">max + 0.05*(n-1)</code></td>
                  <td className="py-2 px-3"><strong className="text-foreground">Correct approach.</strong> Takes strongest signal, adds small boost for corroboration. Respects signal strength while rewarding multiple indicators.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Why Different Boost Values?
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Detector</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Boost</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card Testing</td>
                  <td className="py-2 px-3">+0.05 per signal</td>
                  <td className="py-2 px-3">Standard boost. Card testing signals are correlated (velocity causes decline rate).</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Velocity</td>
                  <td className="py-2 px-3">+0.03 per signal</td>
                  <td className="py-2 px-3">Lower boost because velocity signals are highly correlated. High card velocity implies high user velocity. Avoid double-counting.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Bot Detection</td>
                  <td className="py-2 px-3">+0.08 per signal</td>
                  <td className="py-2 px-3">Higher boost because bot signals are independent. Emulator + datacenter IP + Tor = three separate strong signals that compound.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Geo Anomaly</td>
                  <td className="py-2 px-3">+0.05 per signal</td>
                  <td className="py-2 px-3">Standard boost. Geo signals are semi-independent.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Friendly Fraud</td>
                  <td className="py-2 px-3">+0.03 per signal</td>
                  <td className="py-2 px-3">Lower boost because friendly fraud signals are correlated (high chargebacks implies high refunds). History-based signals overlap.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Why Weighted Max for Criminal Score?
          </h3>
          <p>
            The criminal score uses weighted max of detector scores:
          </p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm my-4">
{`criminal_scores = [
    (card_testing_score, 1.0),   # Full weight - definitive signal
    (velocity_score, 0.9),       # Slightly lower - can be power users
    (geo_score, 0.7),            # Lower - VPNs, travelers create FPs
    (bot_score, 1.0),            # Full weight - bots are definitive
]
criminal_score = max(score * weight for score, weight in criminal_scores)`}
          </pre>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Detector</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Weight</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card Testing</td>
                  <td className="py-2 px-3 font-bold text-primary">1.0</td>
                  <td className="py-2 px-3">When card testing is detected, it is highly definitive. Few false positives.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Velocity</td>
                  <td className="py-2 px-3 font-bold text-primary">0.9</td>
                  <td className="py-2 px-3">Slightly lower because legitimate high-volume users exist (resellers, businesses). A 0.8 velocity score becomes 0.72 after weighting - still triggers review but not block.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Geo Anomaly</td>
                  <td className="py-2 px-3 font-bold text-primary">0.7</td>
                  <td className="py-2 px-3">Significant discount because geo has highest false positive rate. VPN users, travelers, remote workers all trigger geo signals legitimately. A 0.8 geo score becomes 0.56 - friction level, not block level.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Bot Detection</td>
                  <td className="py-2 px-3 font-bold text-primary">1.0</td>
                  <td className="py-2 px-3">Full weight because bot signals are highly reliable. Emulators and datacenter IPs have minimal false positives for consumer transactions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 4: Confidence Adjustment */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="confidence-adjustment">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          4. Confidence Adjustment
        </h2>
        <div className="text-muted-foreground space-y-4">
          <h3 className="text-base font-semibold text-primary mb-3">
            Why Compress Scores Toward 0.3 for Low Confidence?
          </h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm my-4">
{`if confidence < 0.5:
    risk_score = 0.3 + (risk_score - 0.3) * confidence * 2`}
          </pre>

          <p><strong className="text-foreground">The Problem:</strong></p>
          <p>
            A new user with no history triggers several "suspicious" signals: no card history (unknown),
            no device history (unknown), no user account (guest). Without adjustment, these unknowns
            could push the score high (0.7+), causing legitimate first-time customers to get blocked
            or experience friction. This creates a poor new customer experience and lost revenue.
          </p>

          <p><strong className="text-foreground">The Solution:</strong></p>
          <p>
            The 0.3 value is the <strong className="text-foreground">population baseline</strong> - the average fraud risk. When you
            lack data, regress toward the mean. This is Bayesian reasoning: "when uncertain, assume
            average risk, not worst case."
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Raw Score</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Confidence</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Adjusted Score</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">0.8</td>
                  <td className="py-2 px-3">1.0 (known user)</td>
                  <td className="py-2 px-3">0.8</td>
                  <td className="py-2 px-3">Block</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">0.8</td>
                  <td className="py-2 px-3">0.3 (new user)</td>
                  <td className="py-2 px-3">0.3 + (0.5 x 0.6) = 0.6</td>
                  <td className="py-2 px-3">Review</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">0.8</td>
                  <td className="py-2 px-3">0.1 (no data)</td>
                  <td className="py-2 px-3">0.3 + (0.5 x 0.2) = 0.4</td>
                  <td className="py-2 px-3">Friction</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">0.4</td>
                  <td className="py-2 px-3">0.3 (new user)</td>
                  <td className="py-2 px-3">0.3 + (0.1 x 0.6) = 0.36</td>
                  <td className="py-2 px-3">Friction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong className="text-foreground">Why 0.3 Specifically?</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Below review threshold (0.6):</strong> New users will not auto-trigger review</li>
            <li><strong className="text-foreground">Above approve threshold (~0.1):</strong> Still applies some scrutiny</li>
            <li><strong className="text-foreground">At friction threshold (0.35):</strong> New users may get 3DS/OTP verification</li>
          </ul>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Confidence Calculation Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Factor</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Weight</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">High Confidence</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Low Confidence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card history</td>
                  <td className="py-2 px-3">25%</td>
                  <td className="py-2 px-3">10+ transactions = 1.0</td>
                  <td className="py-2 px-3">New card = 0.3</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">User history</td>
                  <td className="py-2 px-3">25%</td>
                  <td className="py-2 px-3">20+ transactions = 1.0</td>
                  <td className="py-2 px-3">Guest/new = 0.3</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Device history</td>
                  <td className="py-2 px-3">25%</td>
                  <td className="py-2 px-3">5+ transactions = 1.0</td>
                  <td className="py-2 px-3">New device = 0.4</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Data completeness</td>
                  <td className="py-2 px-3">25%</td>
                  <td className="py-2 px-3">Device + Geo + Verification = 1.0</td>
                  <td className="py-2 px-3">Missing data = partial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 5: False Positive Prevention */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="false-positive-prevention">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          5. False Positive Prevention
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Every detection rule includes conditions to prevent false positives. Here are the key patterns:
          </p>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Compound Conditions (AND Logic)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rule</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Conditions</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Why Both Required</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Decline rate check</td>
                  <td className="py-2 px-3">80%+ decline rate <strong className="text-foreground">AND</strong> 3+ attempts</td>
                  <td className="py-2 px-3">A single decline (100% rate with 1 attempt) could be insufficient funds. Need multiple attempts to establish pattern.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Small amount check</td>
                  <td className="py-2 px-3">Amount &lt;= $5 <strong className="text-foreground">AND</strong> 2+ prior attempts</td>
                  <td className="py-2 px-3">Small donations, subscriptions, tips are legitimate. Only suspicious when combined with velocity.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">BIN attack check</td>
                  <td className="py-2 px-3">3+ device cards <strong className="text-foreground">AND</strong> 5+ IP cards</td>
                  <td className="py-2 px-3">Either alone could be explained (shared device, NAT). Both together indicates coordinated attack.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High-value friction</td>
                  <td className="py-2 px-3">New user <strong className="text-foreground">AND</strong> amount &gt;= $1000</td>
                  <td className="py-2 px-3">New users making small purchases are fine. High-value purchases from established users are fine. The combination is concerning.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Weighting to Reduce Impact
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Signal</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Weight</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Why Reduced?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Geo anomaly detector</td>
                  <td className="py-2 px-3">0.7x</td>
                  <td className="py-2 px-3">VPN users, travelers, expats create high false positive rate for geo signals.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">User transaction velocity</td>
                  <td className="py-2 px-3">0.5x</td>
                  <td className="py-2 px-3">Power users (resellers, businesses) legitimately transact 20+ times/day.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">User amount velocity</td>
                  <td className="py-2 px-3">0.6x</td>
                  <td className="py-2 px-3">High-value customers are valuable. Amount limits should not aggressively block.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">VPN/Proxy signal</td>
                  <td className="py-2 px-3">0.3 score</td>
                  <td className="py-2 px-3">Privacy-conscious users are common. VPN alone should not trigger action.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Triggered Threshold by Detector
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Detector</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Triggered Threshold</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card Testing</td>
                  <td className="py-2 px-3">0.5</td>
                  <td className="py-2 px-3">Standard threshold - any meaningful signal should be flagged.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Velocity</td>
                  <td className="py-2 px-3">0.4</td>
                  <td className="py-2 px-3">Lower threshold because velocity patterns have high FP rate. Want to catch early.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Geo Anomaly</td>
                  <td className="py-2 px-3">0.4</td>
                  <td className="py-2 px-3">Lower threshold for same reason - geo has high FP rate.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Bot Detection</td>
                  <td className="py-2 px-3">0.5</td>
                  <td className="py-2 px-3">Standard - bot signals are reliable.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Friendly Fraud</td>
                  <td className="py-2 px-3">0.3</td>
                  <td className="py-2 px-3">Lowest threshold because friendly fraud is about patterns over time. Want to flag early for monitoring.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 6: Policy Thresholds */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="policy-thresholds">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          6. Policy Thresholds
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Policy thresholds translate risk scores into business decisions. They are configured in
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm mx-1">config/policy.yaml</code> and can be hot-reloaded without deployment. For telco/MSP,
            these thresholds account for specific fraud patterns like SIM farm attacks, device resale
            fraud, and account takeover via SIM swap.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Score Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Block</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Review</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Friction</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Risk (overall)</td>
                  <td className="py-2 px-3">0.85</td>
                  <td className="py-2 px-3">0.60</td>
                  <td className="py-2 px-3">0.35</td>
                  <td className="py-2 px-3">Main decision driver. Balanced thresholds for general risk.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Criminal</td>
                  <td className="py-2 px-3">0.85</td>
                  <td className="py-2 px-3">0.65</td>
                  <td className="py-2 px-3">0.40</td>
                  <td className="py-2 px-3">Slightly higher review/friction thresholds because criminal fraud is more definitive when detected.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Friendly</td>
                  <td className="py-2 px-3 font-bold text-primary">0.95</td>
                  <td className="py-2 px-3">0.60</td>
                  <td className="py-2 px-3">0.40</td>
                  <td className="py-2 px-3">Much higher block threshold (0.95 vs 0.85) because you are blocking a real customer. Need very high confidence before declining.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Why Friendly Fraud Has Higher Block Threshold
          </h3>
          <p>
            Blocking for criminal fraud means stopping a thief - low regret if wrong. Blocking for
            friendly fraud means rejecting a real customer who might be abusing the system but might
            also have legitimate disputes. The cost of false positives is much higher:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Criminal FP:</strong> Legitimate customer blocked, bad experience, potential churn</li>
            <li><strong className="text-foreground">Friendly FP:</strong> Good customer who had legitimate disputes blocked, definitely churns, negative reviews, support escalation</li>
          </ul>
          <p>
            Therefore, friendly fraud requires 0.95 confidence (near certainty) before blocking,
            while criminal fraud can block at 0.85.
          </p>
        </div>
      </div>

      {/* Section 7: Detector Weights */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="detector-weights">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          7. Detector Weights
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The criminal score combines four detectors with different weights reflecting their
            reliability and false positive rates.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Detector</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Weight</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">False Positive Rate</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Card Testing</td>
                  <td className="py-2 px-3 font-bold text-primary">1.0</td>
                  <td className="py-2 px-3">Low</td>
                  <td className="py-2 px-3">Rapid card attempts with high decline rate is definitively fraudulent. Legitimate users do not behave this way.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Velocity</td>
                  <td className="py-2 px-3 font-bold text-primary">0.9</td>
                  <td className="py-2 px-3">Medium</td>
                  <td className="py-2 px-3">High-volume legitimate users exist (resellers, businesses). Slight discount to avoid penalizing power users.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Geographic</td>
                  <td className="py-2 px-3 font-bold text-primary">0.7</td>
                  <td className="py-2 px-3">High</td>
                  <td className="py-2 px-3">VPN users (privacy), travelers (country mismatch), remote workers (location mismatch) all trigger geo signals legitimately. Significant discount.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Bot Detection</td>
                  <td className="py-2 px-3 font-bold text-primary">1.0</td>
                  <td className="py-2 px-3">Very Low</td>
                  <td className="py-2 px-3">Emulators and datacenter IPs are definitively non-consumer. Almost no legitimate consumer uses these for payments.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 8: Business Trade-offs */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="business-tradeoffs">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          8. Business Trade-offs
        </h2>
        <div className="text-muted-foreground space-y-4">
          <h3 className="text-base font-semibold text-primary mb-3">
            Decision Cost Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Decision</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">If Correct</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">If Wrong (FP)</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">If Wrong (FN)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">ALLOW</td>
                  <td className="py-2 px-3">Revenue captured</td>
                  <td className="py-2 px-3">N/A</td>
                  <td className="py-2 px-3">Fraud loss + chargeback fee</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">FRICTION</td>
                  <td className="py-2 px-3">Fraud prevented, sale completed</td>
                  <td className="py-2 px-3">15-30% cart abandonment</td>
                  <td className="py-2 px-3">Fraud if user bypasses 3DS</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">REVIEW</td>
                  <td className="py-2 px-3">Fraud caught by analyst</td>
                  <td className="py-2 px-3">Delay frustrates customer</td>
                  <td className="py-2 px-3">Analyst approves fraudulent txn</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">BLOCK</td>
                  <td className="py-2 px-3">Fraud prevented, no loss</td>
                  <td className="py-2 px-3">Lost sale + angry customer + churn</td>
                  <td className="py-2 px-3">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Threshold Tuning Guidelines
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Business Priority</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Adjustment</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Trade-off</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Maximize revenue</td>
                  <td className="py-2 px-3">Raise all thresholds</td>
                  <td className="py-2 px-3">More fraud gets through</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Minimize fraud</td>
                  <td className="py-2 px-3">Lower all thresholds</td>
                  <td className="py-2 px-3">More false positives, customer friction</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">New market launch</td>
                  <td className="py-2 px-3">Lower confidence adjustment</td>
                  <td className="py-2 px-3">Accept more new user risk for growth</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">High-value segments</td>
                  <td className="py-2 px-3">Raise friendly fraud block threshold</td>
                  <td className="py-2 px-3">Accept more abuse from valuable customers</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Compliance focus</td>
                  <td className="py-2 px-3">Lower review threshold</td>
                  <td className="py-2 px-3">More manual review cost, slower processing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-primary mt-6 mb-3">
            Key Metrics to Monitor
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Block rate:</strong> % of transactions blocked. Target: 1-3% depending on risk appetite.</li>
            <li><strong className="text-foreground">Review rate:</strong> % sent to manual review. Target: 2-5% (limited by analyst capacity).</li>
            <li><strong className="text-foreground">Friction rate:</strong> % requiring 3DS/OTP. Target: 5-15%.</li>
            <li><strong className="text-foreground">False positive rate:</strong> % of blocks that were legitimate. Target: &lt;5%.</li>
            <li><strong className="text-foreground">False negative rate:</strong> % of allowed transactions that chargebacked. Target: &lt;0.5%.</li>
            <li><strong className="text-foreground">Cart abandonment:</strong> % who leave at friction. Benchmark: 15-30% for 3DS.</li>
          </ul>
        </div>
      </div>

      {/* Interview Application */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="interview-application">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked "How did you decide on those threshold values?":</p>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
              2-Minute Response
            </div>
            <div className="space-y-3 text-sm">
              <p>
                "Every threshold and score in the system is deliberately calibrated against false positive
                rates and business impact - not guessed. This calibration discipline applies to any
                decision system - fraud detection, ads bidding, content moderation, or resource allocation.
              </p>
              <p>
                For detection scores, we assign values based on signal reliability. An emulator detection
                gets 0.9 because legitimate consumers essentially never use emulators for payments - the
                false positive rate is near zero. This is especially critical for telco because emulators
                indicate SIM farm operations. But a rooted device gets only 0.6 because some power users
                legitimately root their phones. VPN usage gets just 0.3 because millions of
                privacy-conscious users rely on VPNs daily.
              </p>
              <p>
                For velocity thresholds, we start from legitimate subscriber behavior. A normal SIM
                activation or topup might have 1-2 attempts if there is a retry. Payment issues might
                cause 3-4 attempts. So we set the card testing threshold at 5 attempts in 10 minutes -
                anything beyond that exceeds legitimate scenarios. The 10-minute window is short enough
                to catch rapid testing before the fraudster moves on.
              </p>
              <p>
                For policy thresholds, we separate criminal and friendly fraud because the cost of false
                positives differs. Blocking for criminal fraud means stopping a SIM farm or device resale
                operation - low regret if wrong. Blocking for friendly fraud means rejecting a real
                subscriber who might have legitimate disputes. That is why friendly fraud requires 0.95
                confidence to block versus 0.85 for criminal.
              </p>
              <p>
                We also use weighted scoring because detector reliability varies. Geographic signals get
                0.7 weight because VPNs and travelers create high false positive rates. Bot detection gets
                full 1.0 weight because emulators and datacenter IPs are highly definitive fraud signals.
              </p>
              <p>
                Finally, for new subscribers with no history, we compress scores toward 0.3 - the population
                baseline. This is Bayesian reasoning: when uncertain, regress to the mean rather than
                assume worst case. Otherwise, every first-time subscriber would get blocked."
              </p>
            </div>
          </div>

          <p className="mt-6">When asked "How does this threshold calibration approach transfer to other domains?":</p>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
              1-Minute Response
            </div>
            <div className="space-y-3 text-sm">
              <p>
                "The calibration principles transfer directly. In ads systems, you calibrate bid multipliers
                based on conversion probability and false positive cost - showing irrelevant ads wastes budget
                and annoys users. In content moderation, you calibrate removal thresholds based on harm severity
                and censorship cost - different thresholds for spam versus harassment versus CSAM.
              </p>
              <p>
                The key insight is always asking: what is the cost of false positives versus false negatives,
                and how reliable is each signal? High-reliability signals get full weight. High-FP-rate signals
                get discounted. New entities with no history regress toward population baseline. These principles
                are invariant across domains."
              </p>
            </div>
          </div>

          <p className="mt-6">When asked "Why max-based aggregation instead of average?":</p>

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
              1-Minute Response
            </div>
            <div className="space-y-3 text-sm">
              <p>
                "Average fails because one definitive fraud signal gets diluted by absence of other signals.
                If I have a 0.9 emulator detection but three other detectors show 0.0, the average is 0.225 -
                way too low to act on.
              </p>
              <p>
                Pure max is better but ignores corroborating evidence. Three signals at 0.7, 0.6, 0.5 should
                score higher than a single 0.7.
              </p>
              <p>
                So we use max plus a small boost per additional signal: <code className="bg-muted px-1 py-0.5 rounded text-xs">max + 0.05*(n-1)</code>. This
                respects signal strength while rewarding multiple indicators. The boost is intentionally small
                because quantity should not replace quality - we want the strongest signal to dominate. This
                aggregation pattern applies to any multi-signal scoring system."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/fraud-detection-thinking/checklist"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Previous: Checklist
        </Link>
        <Link
          href="/nebula/fraud-detection-thinking/data-points"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Next: Data Points →
        </Link>
      </div>
    </ThinkingLayout>
  );
}
