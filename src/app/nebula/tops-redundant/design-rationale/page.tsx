"use client";

/**
 * Section 10: Design Rationale
 * Comprehensive "why" behind every parameter, threshold, and design decision
 */

import Link from "next/link";
import { TOpsRedundantLayout, getTOpsRedundantNavigation } from "@/components/TOpsRedundantLayout";

export default function TeleOpsDesignRationale() {
  const nav = getTOpsRedundantNavigation("design-rationale");

  return (
    <TOpsRedundantLayout
      title="Design Rationale - TeleOps (Archived)"
      description="The 'why' behind every parameter, threshold, and design decision"
      currentSection="design-rationale"
    >
      <Link
        href="/nebula/tops-redundant"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        &larr; Back to Archive</Link>

      {/* Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-cyan-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          10
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Design Rationale</h1>
        <p className="text-muted-foreground">
          The &quot;why&quot; behind every parameter value, threshold, and architectural decision.
          This document explains the reasoning a Principal TPM needs to defend design choices.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Contents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <a href="#correlation-parameters" className="text-muted-foreground hover:text-primary transition-colors">
            1. Correlation Parameters
          </a>
          <a href="#scenario-design" className="text-muted-foreground hover:text-primary transition-colors">
            2. Scenario Design Decisions
          </a>
          <a href="#alert-generation" className="text-muted-foreground hover:text-primary transition-colors">
            3. Alert Generation Rationale
          </a>
          <a href="#llm-parameters" className="text-muted-foreground hover:text-primary transition-colors">
            4. LLM &amp; RAG Parameters
          </a>
          <a href="#baseline-rca" className="text-muted-foreground hover:text-primary transition-colors">
            5. Baseline RCA Design
          </a>
          <a href="#confidence-scoring" className="text-muted-foreground hover:text-primary transition-colors">
            6. Confidence Scoring
          </a>
          <a href="#data-model-choices" className="text-muted-foreground hover:text-primary transition-colors">
            7. Data Model Choices
          </a>
          <a href="#evaluation-metrics" className="text-muted-foreground hover:text-primary transition-colors">
            8. Evaluation Metrics
          </a>
        </div>
      </div>

      {/* Section 1: Correlation Parameters */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="correlation-parameters">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          1. Correlation Parameters
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The incident correlator groups alerts into incidents using time windows and count thresholds.
            These values are not arbitrary - they reflect telecom operations realities.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Parameter</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Value</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">window_minutes</td>
                  <td className="py-2 px-3 font-bold text-primary">15</td>
                  <td className="py-2 px-3">
                    Network incidents typically cascade within 5-15 minutes. A BGP flap propagates in seconds,
                    but downstream effects (DNS failures, application timeouts) take minutes to manifest.
                    15 minutes captures the full incident timeline without grouping unrelated events.
                    <strong className="text-foreground"> Trade-off:</strong> Shorter windows (5 min) would miss slow cascades;
                    longer windows (30 min) would merge distinct incidents.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">min_alerts</td>
                  <td className="py-2 px-3 font-bold text-primary">10</td>
                  <td className="py-2 px-3">
                    Real network incidents generate alert storms - a fiber cut triggers 100+ alerts.
                    Single alerts or small bursts (3-5) are typically transient issues or monitoring noise.
                    10 alerts is the threshold where operator attention is warranted.
                    <strong className="text-foreground"> Trade-off:</strong> Lower threshold (5) creates too many low-signal incidents;
                    higher threshold (20) misses smaller but real outages.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">noise_rate_per_min</td>
                  <td className="py-2 px-3 font-bold text-primary">5</td>
                  <td className="py-2 px-3">
                    Production NOCs see constant background noise: CPU spikes, transient packet loss, scheduled jobs.
                    5 noise alerts/minute (vs 20 incident alerts/minute) creates a 4:1 signal-to-noise ratio.
                    This tests the correlator&apos;s ability to filter noise while capturing real signals.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">alert_rate_per_min</td>
                  <td className="py-2 px-3 font-bold text-primary">20</td>
                  <td className="py-2 px-3">
                    Major incidents generate 10-50 alerts/minute from affected devices.
                    20/minute for 10 minutes = 200 alerts, which is realistic for a regional outage.
                    This rate also stress-tests the correlation engine without overwhelming the demo.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">duration_min</td>
                  <td className="py-2 px-3 font-bold text-primary">10</td>
                  <td className="py-2 px-3">
                    Average MTTR for network incidents is 15-45 minutes. 10-minute synthetic duration
                    represents the detection + initial diagnosis phase, not full resolution.
                    This focuses evaluation on RCA quality, not incident management workflow.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
            Why Tag-Based Correlation (Not Time-Window Only)?
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Approach</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Problem</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Time-window only</td>
                  <td className="py-2 px-3">
                    Two concurrent incidents (fiber cut + unrelated database issue) would merge into one.
                    This is a common correlation failure in production systems.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Host-based grouping</td>
                  <td className="py-2 px-3">
                    A single router failure affects many downstream hosts. Grouping by host would create
                    dozens of separate incidents instead of one root cause incident.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Tag-based (chosen)</td>
                  <td className="py-2 px-3">
                    Synthetic data generator tags alerts with their incident type. This ensures deterministic
                    evaluation - we know exactly which alerts belong to which incident. In production,
                    this would be replaced by topology-aware correlation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 2: Scenario Design Decisions */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="scenario-design">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          2. Scenario Design Decisions
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            TeleOps supports 11 scenario types. Each was chosen to represent a distinct failure mode
            that requires different RCA reasoning.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Scenario</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Why Included</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">RCA Challenge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">network_degradation</td>
                  <td className="py-2 px-3">Most common incident type. Tests basic correlation.</td>
                  <td className="py-2 px-3">Distinguish congestion from hardware failure</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">dns_outage</td>
                  <td className="py-2 px-3">High business impact, cascading failures.</td>
                  <td className="py-2 px-3">Identify authoritative vs resolver failure</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">bgp_flap</td>
                  <td className="py-2 px-3">Routing instability affects entire AS.</td>
                  <td className="py-2 px-3">Distinguish internal vs external peer issue</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">fiber_cut</td>
                  <td className="py-2 px-3">Physical layer - different remediation.</td>
                  <td className="py-2 px-3">Identify segment and reroute options</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">router_freeze</td>
                  <td className="py-2 px-3">Control plane vs data plane distinction.</td>
                  <td className="py-2 px-3">Distinguish software hang from hardware failure</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">isp_peering_congestion</td>
                  <td className="py-2 px-3">External dependency - limited remediation.</td>
                  <td className="py-2 px-3">Identify peer and traffic engineering options</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">ddos_edge</td>
                  <td className="py-2 px-3">Security incident - different workflow.</td>
                  <td className="py-2 px-3">Distinguish DDoS from legitimate traffic spike</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">mpls_vpn_leak</td>
                  <td className="py-2 px-3">Configuration error - common in enterprise.</td>
                  <td className="py-2 px-3">Identify VRF and route target misconfiguration</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">cdn_cache_stampede</td>
                  <td className="py-2 px-3">Application-layer, MSP-relevant.</td>
                  <td className="py-2 px-3">Distinguish TTL issue from origin failure</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">firewall_rule_misconfig</td>
                  <td className="py-2 px-3">Change-related incident - most common cause.</td>
                  <td className="py-2 px-3">Identify specific rule and rollback path</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">database_latency_spike</td>
                  <td className="py-2 px-3">Application-layer for MSP customers.</td>
                  <td className="py-2 px-3">Distinguish query contention from resource exhaustion</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
            Why These Specific Hosts?
          </h3>
          <p>
            Host names follow telecom naming conventions to increase realism:
          </p>
          <ul className="space-y-2">
            <li>
              <strong className="text-foreground">core-router-1/2:</strong> Core routers handle backbone traffic.
              Naming convention indicates role (core) and redundancy (1/2).
            </li>
            <li>
              <strong className="text-foreground">edge-router-3:</strong> Edge routers connect to customers/peers.
              Higher number suggests larger deployment.
            </li>
            <li>
              <strong className="text-foreground">agg-switch-2:</strong> Aggregation layer between core and edge.
            </li>
            <li>
              <strong className="text-foreground">pe-core-1/2:</strong> Provider Edge routers for MPLS VPN services.
            </li>
            <li>
              <strong className="text-foreground">dns-auth-1, dns-rec-1:</strong> Authoritative vs recursive DNS separation.
            </li>
          </ul>
          <p className="mt-4">
            <strong className="text-foreground">Trade-off:</strong> Generic names (host-1, host-2) would be simpler
            but would not demonstrate domain knowledge. Production-like names show understanding of
            telecom architecture without requiring actual network topology.
          </p>
        </div>
      </div>

      {/* Section 3: Alert Generation Rationale */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="alert-generation">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          3. Alert Generation Rationale
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Each scenario generates alerts with specific types and severity. These choices reflect
            what monitoring systems actually emit for each failure mode.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Alert Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Scenarios</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Why This Alert?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">packet_loss</td>
                  <td className="py-2 px-3">network_degradation, isp_peering</td>
                  <td className="py-2 px-3">Universal symptom of congestion or failure. SNMP traps report this.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">high_latency</td>
                  <td className="py-2 px-3">network_degradation, isp_peering</td>
                  <td className="py-2 px-3">Companion to packet loss. Often detected before loss via synthetic monitoring.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">bgp_session_flap</td>
                  <td className="py-2 px-3">bgp_flap</td>
                  <td className="py-2 px-3">Direct indicator of routing instability. BGP speakers emit this on session state change.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">route_withdrawal</td>
                  <td className="py-2 px-3">bgp_flap</td>
                  <td className="py-2 px-3">Consequence of BGP flap. Routes disappear causing reachability issues.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">link_down</td>
                  <td className="py-2 px-3">fiber_cut</td>
                  <td className="py-2 px-3">Physical layer alert. Triggered by loss of carrier/signal.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">loss_of_signal</td>
                  <td className="py-2 px-3">fiber_cut</td>
                  <td className="py-2 px-3">Optical layer alert. More specific than link_down for fiber issues.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">cpu_spike</td>
                  <td className="py-2 px-3">router_freeze, noise</td>
                  <td className="py-2 px-3">Precursor to control plane hang. Also common noise alert.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">control_plane_hang</td>
                  <td className="py-2 px-3">router_freeze</td>
                  <td className="py-2 px-3">Specific alert for software hang. Distinguishes from data plane issues.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">traffic_spike, syn_flood</td>
                  <td className="py-2 px-3">ddos_edge</td>
                  <td className="py-2 px-3">DDoS indicators. Traffic spike alone could be legitimate; SYN flood confirms attack.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
            Why &quot;critical&quot; Severity for Incident Alerts?
          </h3>
          <p>
            All incident-related alerts are generated as &quot;critical&quot; severity because:
          </p>
          <ul className="space-y-2">
            <li>
              <strong className="text-foreground">Simplifies evaluation:</strong> No need to weight alerts by severity
              for MVP. All alerts in an incident are equally relevant.
            </li>
            <li>
              <strong className="text-foreground">Matches production pattern:</strong> During real incidents,
              critical alerts dominate. Warning/info are filtered out by operators.
            </li>
            <li>
              <strong className="text-foreground">Extension point:</strong> Severity-weighted correlation can be
              added in Phase 2 without changing data model.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 4: LLM & RAG Parameters */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="llm-parameters">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          4. LLM &amp; RAG Parameters
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The LLM RCA pipeline has several configuration choices that affect quality and latency.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Parameter</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Value</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">alerts_sample</td>
                  <td className="py-2 px-3 font-bold text-primary">20 alerts</td>
                  <td className="py-2 px-3">
                    Incidents may have 200+ alerts. Sending all would exceed context limits and add noise.
                    20 alerts (10% sample) provides sufficient signal without overwhelming the LLM.
                    <strong className="text-foreground"> Trade-off:</strong> Sampling may miss important alerts.
                    Mitigation: sample includes alerts from each unique host.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">output_format</td>
                  <td className="py-2 px-3 font-bold text-primary">JSON only</td>
                  <td className="py-2 px-3">
                    Structured JSON enables programmatic parsing, UI rendering, and automated evaluation.
                    Free-form text would require NLP extraction and be harder to validate.
                    <strong className="text-foreground"> Trade-off:</strong> Less natural language nuance.
                    Mitigation: JSON schema includes free-text fields for explanations.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">rag_context_chunks</td>
                  <td className="py-2 px-3 font-bold text-primary">Top 3-5</td>
                  <td className="py-2 px-3">
                    Too few chunks miss relevant context. Too many add noise and latency.
                    3-5 chunks typically capture the relevant runbook section without dilution.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">constraints</td>
                  <td className="py-2 px-3 font-bold text-primary">No commands</td>
                  <td className="py-2 px-3">
                    LLM is explicitly told not to invent remediation commands. This is a safety guardrail -
                    hallucinated commands could cause outages if copy-pasted.
                    Commands should come from vetted runbooks, not LLM generation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
            Why Gemini Flash (Not GPT-4 or Claude)?
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Consideration</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Gemini Flash</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">GPT-4</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Claude</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Latency</td>
                  <td className="py-2 px-3">~1-2s (fast)</td>
                  <td className="py-2 px-3">~3-5s</td>
                  <td className="py-2 px-3">~2-4s</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Cost</td>
                  <td className="py-2 px-3">Low</td>
                  <td className="py-2 px-3">High</td>
                  <td className="py-2 px-3">Medium</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">JSON reliability</td>
                  <td className="py-2 px-3">Good</td>
                  <td className="py-2 px-3">Good</td>
                  <td className="py-2 px-3">Good</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Free tier</td>
                  <td className="py-2 px-3">Yes</td>
                  <td className="py-2 px-3">No</td>
                  <td className="py-2 px-3">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Decision:</strong> Gemini Flash for MVP due to latency and cost.
            The adapter pattern allows swapping to GPT-4/Claude without code changes if needed.
          </p>
        </div>
      </div>

      {/* Section 5: Baseline RCA Design */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="baseline-rca">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          5. Baseline RCA Design
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The baseline RCA is a rule-based system that produces deterministic output. It serves
            multiple purposes in the architecture.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-3">
            Why Have a Baseline at All?
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Purpose</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Fallback</td>
                  <td className="py-2 px-3">
                    If LLM fails (timeout, rate limit, invalid JSON), baseline ensures operator
                    always gets an RCA. Production systems cannot have single points of failure.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Comparison</td>
                  <td className="py-2 px-3">
                    Baseline provides a benchmark. If LLM RCA is not better than simple rules,
                    the complexity is not justified. This is the &quot;elevator pitch&quot; for AI value.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Determinism</td>
                  <td className="py-2 px-3">
                    Baseline output is identical every time. This enables reproducible evaluation
                    and debugging. LLM output varies, making baseline essential for stable testing.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Speed</td>
                  <td className="py-2 px-3">
                    Baseline returns in milliseconds vs seconds for LLM. For time-critical
                    incidents, operators may prefer fast-but-basic over slow-but-detailed.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
            Why 0.55 Confidence for Baseline?
          </h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm my-4">
{`"confidence_scores": {"link congestion...": 0.55}`}
          </pre>
          <ul className="space-y-2">
            <li>
              <strong className="text-foreground">Above 0.5:</strong> Indicates the hypothesis is more likely
              than not - baseline is not just guessing.
            </li>
            <li>
              <strong className="text-foreground">Below 0.7:</strong> Leaves room for LLM to demonstrate
              higher confidence with better reasoning.
            </li>
            <li>
              <strong className="text-foreground">Not 0.5 exactly:</strong> Exact 0.5 implies &quot;coin flip&quot;
              which is not the intent. 0.55 says &quot;probably right but uncertain.&quot;
            </li>
          </ul>
        </div>
      </div>

      {/* Section 6: Confidence Scoring */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="confidence-scoring">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          6. Confidence Scoring
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Confidence scores are critical for operator trust. They indicate how certain the
            system is about each hypothesis.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Score Range</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Interpretation</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Operator Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">0.8 - 1.0</td>
                  <td className="py-2 px-3">High confidence. Strong evidence alignment.</td>
                  <td className="py-2 px-3">Proceed with remediation. Minimal additional validation.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">0.6 - 0.8</td>
                  <td className="py-2 px-3">Medium confidence. Good hypothesis but some uncertainty.</td>
                  <td className="py-2 px-3">Verify with additional diagnostics before acting.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">0.4 - 0.6</td>
                  <td className="py-2 px-3">Low confidence. One of several possibilities.</td>
                  <td className="py-2 px-3">Investigate further. Consider alternative hypotheses.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">0.0 - 0.4</td>
                  <td className="py-2 px-3">Very low confidence. Speculation.</td>
                  <td className="py-2 px-3">Do not act on this alone. Gather more data.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
            Why Multiple Hypotheses with Scores?
          </h3>
          <p>
            The system returns multiple hypotheses (not just one) because:
          </p>
          <ul className="space-y-2">
            <li>
              <strong className="text-foreground">Real incidents are ambiguous:</strong> Symptoms often match
              multiple root causes. A single hypothesis oversimplifies.
            </li>
            <li>
              <strong className="text-foreground">Operators need options:</strong> If the top hypothesis is
              wrong, the second or third might be right. This avoids dead ends.
            </li>
            <li>
              <strong className="text-foreground">Confidence distribution matters:</strong> [0.8, 0.1, 0.1]
              means &quot;pretty sure.&quot; [0.4, 0.35, 0.25] means &quot;investigate all three.&quot;
            </li>
          </ul>
        </div>
      </div>

      {/* Section 7: Data Model Choices */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="data-model-choices">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          7. Data Model Choices
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The data model has three core entities: Alert, Incident, and RCAArtifact. Each field
            choice is deliberate.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-3">
            Alert Entity
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Field</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Why This Field?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">source_system</td>
                  <td className="py-2 px-3">String(64)</td>
                  <td className="py-2 px-3">Identifies the monitoring source (SNMP, Syslog, APM). Essential for provenance.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">host</td>
                  <td className="py-2 px-3">String(128)</td>
                  <td className="py-2 px-3">The affected device. Core correlation dimension.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">service</td>
                  <td className="py-2 px-3">String(128)</td>
                  <td className="py-2 px-3">Logical service (DNS, BGP, CDN). Enables service-level correlation.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">tags</td>
                  <td className="py-2 px-3">JSON</td>
                  <td className="py-2 px-3">Flexible metadata. Includes incident tag for synthetic data correlation.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">raw_payload</td>
                  <td className="py-2 px-3">JSON</td>
                  <td className="py-2 px-3">Original alert data. Preserves information for deep-dive debugging.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">tenant_id</td>
                  <td className="py-2 px-3">String(64), nullable</td>
                  <td className="py-2 px-3">Multi-tenancy hook for MSP scenarios. Optional for single-tenant deployments.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
            Why JSON Fields Instead of Strict Schema?
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Approach</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Pros</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Strict schema</td>
                  <td className="py-2 px-3">Type safety, query optimization</td>
                  <td className="py-2 px-3">Schema migrations, limited flexibility</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">JSON fields (chosen)</td>
                  <td className="py-2 px-3">Flexible, no migrations, schema evolution</td>
                  <td className="py-2 px-3">Weaker validation, query complexity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Decision:</strong> JSON for tags, raw_payload, evidence, and
            hypotheses. These fields vary by scenario and should not require schema changes.
            Core fields (host, service, timestamp) remain typed for query performance.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
            Why SQLite (Not Postgres)?
          </h3>
          <ul className="space-y-2">
            <li>
              <strong className="text-foreground">Local-first:</strong> No external database dependency.
              Demo runs with a single command.
            </li>
            <li>
              <strong className="text-foreground">Sufficient for MVP:</strong> 1000s of alerts fit in SQLite.
              Production would use Postgres, but the SQLAlchemy ORM abstracts this.
            </li>
            <li>
              <strong className="text-foreground">Zero configuration:</strong> No connection strings, no
              Docker compose, no database startup time.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 8: Evaluation Metrics */}
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm" id="evaluation-metrics">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          8. Evaluation Metrics
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            Evaluation metrics determine whether the system is working. Each metric is chosen
            to measure a specific aspect of RCA quality.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Metric</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">What It Measures</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Target</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Why This Target?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">RCA accuracy</td>
                  <td className="py-2 px-3">% of hypotheses matching ground truth</td>
                  <td className="py-2 px-3 font-bold text-primary">&gt;70%</td>
                  <td className="py-2 px-3">70% means 7/10 incidents get correct RCA. This is operationally useful - better than human average in time-pressured situations.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">LLM vs baseline delta</td>
                  <td className="py-2 px-3">Accuracy improvement over baseline</td>
                  <td className="py-2 px-3 font-bold text-primary">&gt;10%</td>
                  <td className="py-2 px-3">LLM should be at least 10% better than simple rules to justify complexity and cost.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">P50 latency</td>
                  <td className="py-2 px-3">Median time to generate RCA</td>
                  <td className="py-2 px-3 font-bold text-primary">&lt;3s</td>
                  <td className="py-2 px-3">Operators expect near-instant response. 3s is acceptable for AI-powered analysis.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">P95 latency</td>
                  <td className="py-2 px-3">95th percentile RCA time</td>
                  <td className="py-2 px-3 font-bold text-primary">&lt;10s</td>
                  <td className="py-2 px-3">Tail latency matters for UX. Beyond 10s feels broken.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">JSON validity</td>
                  <td className="py-2 px-3">% of LLM responses that parse correctly</td>
                  <td className="py-2 px-3 font-bold text-primary">&gt;95%</td>
                  <td className="py-2 px-3">Invalid JSON triggers baseline fallback. Should be rare.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-foreground">Unsafe suggestion rate</td>
                  <td className="py-2 px-3">% of RCAs with risky commands</td>
                  <td className="py-2 px-3 font-bold text-primary">0%</td>
                  <td className="py-2 px-3">Safety is non-negotiable. Any hallucinated command is a failure.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
            Why String Similarity (Not Semantic Matching)?
          </h3>
          <p>
            MVP uses string similarity (SequenceMatcher) to compare hypotheses to ground truth:
          </p>
          <ul className="space-y-2">
            <li>
              <strong className="text-foreground">Simplicity:</strong> No external embedding model required.
              Keeps evaluation deterministic and fast.
            </li>
            <li>
              <strong className="text-foreground">Good enough for MVP:</strong> Ground truth strings are short
              and specific. &quot;link congestion on core-router-1&quot; will match variations.
            </li>
            <li>
              <strong className="text-foreground">Known limitation:</strong> Paraphrases score lower. &quot;congested
              link&quot; vs &quot;link congestion&quot; may not match well. Semantic scoring is a Phase 2 improvement.
            </li>
          </ul>
        </div>
      </div>

      {/* Interview Application */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Interview Application
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>When asked &quot;How did you decide on those parameter values?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              2-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;Every parameter in TeleOps is derived from telecom operations reality, not guessed.
                This discipline applies whether I am building an AIOps platform, a fraud detection system,
                or any ML-augmented decision system.
              </p>
              <p>
                For correlation parameters, I started with incident timelines. Network failures cascade
                within 5-15 minutes - a BGP flap triggers downstream DNS failures which cause application
                timeouts. The 15-minute correlation window captures this cascade without merging
                unrelated incidents. The 10-alert minimum filters transient noise - real incidents
                generate alert storms, not single alerts.
              </p>
              <p>
                For LLM parameters, I balanced quality against demo constraints. 20 alerts in the context
                is enough signal without overwhelming the model. JSON-only output enables programmatic
                parsing and automated evaluation. The explicit constraint against generating commands is
                a safety guardrail - hallucinated CLI commands could cause outages.
              </p>
              <p>
                For the baseline RCA, I set 0.55 confidence - above 0.5 to indicate it is better than
                random, but below 0.7 to leave room for LLM to demonstrate improvement. The baseline
                exists for three reasons: fallback if LLM fails, comparison benchmark to prove AI value,
                and deterministic output for reproducible testing.
              </p>
              <p>
                The key insight is that parameters should be defensible - I can explain why 15 minutes
                not 10, why 10 alerts not 5, why 0.55 confidence not 0.6. This traceability is what
                distinguishes engineering from tinkering.&quot;
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
              Estimated time: 90-120 seconds
            </div>
          </div>

          <p className="mt-6">When asked &quot;Why did you choose rule-based correlation over ML?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              1-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;For MVP, rule-based correlation is the right choice because it is deterministic,
                explainable, and does not require training data. When I correlate alerts by incident
                tag within a 15-minute window, I can explain exactly why alerts were grouped.
              </p>
              <p>
                ML-based correlation - using graph neural networks or clustering - would require
                labeled training data that I do not have. It would also make evaluation harder since
                the correlation itself would be probabilistic. For a capstone, I want to prove RCA
                value, not correlation accuracy.
              </p>
              <p>
                The architecture supports ML correlation in Phase 2. The correlator is a module with
                a clean interface - swap implementations without changing upstream or downstream code.
                But for MVP, simple rules that work beat complex ML that might not.&quot;
              </p>
            </div>
          </div>

          <p className="mt-6">When asked &quot;How would you improve evaluation beyond string matching?&quot;:</p>

          <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg">
            <div className="text-xs font-bold uppercase tracking-wide text-primary mb-3">
              1-Minute Response
            </div>
            <div className="text-sm italic space-y-3">
              <p>
                &quot;String matching is a known limitation - &apos;congested link&apos; and &apos;link congestion&apos;
                may score differently despite being semantically identical.
              </p>
              <p>
                Phase 2 would add semantic similarity using embeddings. Embed both the hypothesis and
                ground truth with a sentence transformer, then compute cosine similarity. This handles
                paraphrases and synonyms. I would also add a rubric-based evaluation where domain
                experts score RCAs on dimensions: root cause accuracy, evidence quality, actionability.
              </p>
              <p>
                The key is that MVP evaluation is good enough to prove the concept. Better evaluation
                improves measurement precision but does not change the fundamental value proposition.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        {nav.prev ? (
          <Link
            href={nav.prev.path}
            className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
          >
            <span className="group-hover:text-primary transition-colors">&larr; {nav.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        <Link
          href="/nebula/tops-redundant"
          className="group px-4 py-2 bg-gradient-to-r from-muted/50 to-transparent border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 transition-all"
        >
          <span className="group-hover:text-primary transition-colors">Back to Archive &rarr;</span>
        </Link>
      </div>
    </TOpsRedundantLayout>
  );
}
