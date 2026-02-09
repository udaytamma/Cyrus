"use client";

import { TeleOpsThinkingLayout } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsScenarioGenerationPage() {
  return (
    <TeleOpsThinkingLayout
      title="Scenario Generation"
      description="Synthetic scenario generation strategy for network and MSP incidents"
      currentSection="scenario-generation"
    >
      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-4">Scenario Generation</h1>
        <p className="text-muted-foreground mb-6">
          TelcoOps uses a deterministic synthetic generator to simulate a catalog of network and MSP incidents. This provides
          repeatable test runs for correlation and RCA evaluation without relying on production data.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Scenario Config</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Field</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Default</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground">incident_type</td>
                <td className="px-4 py-3">network_degradation</td>
                <td className="px-4 py-3">Scenario class (11 types supported).</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground">alert_rate_per_min</td>
                <td className="px-4 py-3">20</td>
                <td className="px-4 py-3">Incident alert volume (1-100).</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground">duration_min</td>
                <td className="px-4 py-3">10</td>
                <td className="px-4 py-3">Incident duration window (1-60).</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground">noise_rate_per_min</td>
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">Unrelated alerts to simulate noise (0-50).</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground">seed</td>
                <td className="px-4 py-3">42</td>
                <td className="px-4 py-3">Deterministic randomness for repeatability.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Scenario Catalog (11 Types)</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Scenario</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Ground Truth</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Expected Alerts</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">network_degradation</td><td className="px-4 py-3">Link congestion on core-router-1</td><td className="px-4 py-3">packet_loss, high_latency</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">dns_outage</td><td className="px-4 py-3">Authoritative DNS cluster outage</td><td className="px-4 py-3">dns_timeout, servfail_spike, nx_domain_spike</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">bgp_flap</td><td className="px-4 py-3">Unstable BGP session with upstream AS</td><td className="px-4 py-3">bgp_session_flap, route_withdrawal</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">fiber_cut</td><td className="px-4 py-3">Fiber cut on metro ring segment</td><td className="px-4 py-3">link_down, loss_of_signal</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">router_freeze</td><td className="px-4 py-3">Control plane freeze on core-router-1</td><td className="px-4 py-3">cpu_spike, control_plane_hang</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">isp_peering_congestion</td><td className="px-4 py-3">Congested ISP peering link</td><td className="px-4 py-3">high_latency, packet_loss</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">ddos_edge</td><td className="px-4 py-3">Volumetric DDoS at the edge</td><td className="px-4 py-3">traffic_spike, syn_flood</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">mpls_vpn_leak</td><td className="px-4 py-3">VRF misconfiguration leaking routes</td><td className="px-4 py-3">route_leak_detected, vrf_mismatch</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">cdn_cache_stampede</td><td className="px-4 py-3">Misconfigured TTLs causing cache stampede</td><td className="px-4 py-3">cache_miss_spike, origin_latency</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">firewall_rule_misconfig</td><td className="px-4 py-3">Firewall rule blocking critical port</td><td className="px-4 py-3">blocked_port, policy_violation</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono text-foreground">database_latency_spike</td><td className="px-4 py-3">Database contention in MSP apps</td><td className="px-4 py-3">query_latency, lock_waits</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Alert Composition</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>Incident alerts target scenario-specific devices and services.</li>
          <li>Noise alerts simulate unrelated CPU, disk IO, and HTTP 5xx spikes.</li>
          <li>Each alert carries tags that drive correlation.</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Ground Truth Payload</h2>
        <p className="text-muted-foreground mb-4">
          The generator produces a ground truth object containing the incident_type, root_cause string, and remediation_steps list.
          This is used for validation during the 50-scenario evaluation runs with semantic cosine similarity scoring.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-3 pb-2 border-b border-border">Why Synthetic Generation</h2>
        <ul className="text-muted-foreground space-y-2 mb-4 list-disc pl-5">
          <li>Removes dependency on production data access.</li>
          <li>Provides repeatable scenarios for benchmarking LLM output.</li>
          <li>Allows rapid iteration on correlation and RCA logic.</li>
        </ul>
      </div>
    </TeleOpsThinkingLayout>
  );
}
