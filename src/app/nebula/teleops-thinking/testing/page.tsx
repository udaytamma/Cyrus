"use client";

/**
 * Section 8: Testing & Validation
 */

import Link from "next/link";
import { TeleOpsThinkingLayout, getTeleOpsNavigation } from "@/components/TeleOpsThinkingLayout";

export default function TeleOpsTesting() {
  const nav = getTeleOpsNavigation("testing");

  return (
    <TeleOpsThinkingLayout
      title="Testing & Validation - TeleOps"
      description="Coverage, pass rate, and observability requirements"
      currentSection="testing"
    >
      <Link
        href="/nebula/teleops-thinking"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-5 transition-colors"
      >
        ← Back to Overview
      </Link>

      <div className="text-center mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
          8
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Testing & Validation</h1>
        <p className="text-muted-foreground">Proof that the system is stable and measurable.</p>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl border border-blue-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Validation Targets
        </h2>
        <ul className="text-muted-foreground space-y-2">
          <li><strong className="text-foreground">Coverage:</strong> 80%+ minimum target.</li>
          <li><strong className="text-foreground">Pass rate:</strong> 90%+ target; current runs are 100% (28/28 tests).</li>
          <li><strong className="text-foreground">Observability:</strong> tests and eval results surface in dashboard.</li>
          <li><strong className="text-foreground">LLM parsing:</strong> JSON output parse success requirement.</li>
        </ul>
      </div>

      <div className="mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Why It Matters
        </h2>
        <p className="text-muted-foreground">
          For a capstone, reliability equals credibility. A deterministic test suite and visible KPIs are
          the fastest way to earn trust in demo settings.
        </p>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl border border-green-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Pattern-Matching Baseline Tests
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The baseline RCA uses <strong className="text-foreground">11 scenario-specific pattern-matching rules</strong> instead
            of a hardcoded response. Tests verify each pattern triggers the correct hypothesis:
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <pre>{`def test_baseline_rca_pattern_matching():
    # DNS-related incident triggers DNS hypothesis
    dns_result = rca.baseline_rca("DNS servers are reporting failures")
    assert "DNS" in dns_result["hypotheses"][0]

    # BGP-related incident
    bgp_alerts = [{"alert_type": "bgp_session_flap", "message": "BGP route withdrawal"}]
    bgp_result = rca.baseline_rca("routing instability", bgp_alerts)
    assert "BGP" in bgp_result["hypotheses"][0]

    # DDoS-related incident
    ddos_alerts = [{"alert_type": "syn_flood", "message": "Traffic spike on edge"}]
    ddos_result = rca.baseline_rca("security incident", ddos_alerts)
    assert "DDoS" in ddos_result["hypotheses"][0]

    # Fiber cut incident
    fiber_alerts = [{"alert_type": "link_down", "message": "optical loss of signal"}]
    fiber_result = rca.baseline_rca("transport failure", fiber_alerts)
    assert "fiber" in fiber_result["hypotheses"][0].lower()`}</pre>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Pattern</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Keywords Matched</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Expected Hypothesis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">DNS</td>
                  <td className="py-2 px-3">dns, servfail, nx_domain, resolver</td>
                  <td className="py-2 px-3">authoritative DNS cluster outage</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">BGP</td>
                  <td className="py-2 px-3">bgp, session_flap, route_withdrawal, peering</td>
                  <td className="py-2 px-3">BGP peering instability</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">DDoS</td>
                  <td className="py-2 px-3">ddos, syn_flood, volumetric, scrubbing</td>
                  <td className="py-2 px-3">DDoS attack on edge routers</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Fiber</td>
                  <td className="py-2 px-3">fiber, optical, dwdm, los, link_down</td>
                  <td className="py-2 px-3">fiber cut in metro ring</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3 font-bold text-primary">Default</td>
                  <td className="py-2 px-3">(no specific match)</td>
                  <td className="py-2 px-3">link congestion on core router</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong className="text-foreground">Why pattern-matching over hardcoded?</strong> Pattern-matching provides
            meaningful baseline hypotheses that are scenario-appropriate, making the LLM vs baseline comparison fair.
            The LLM must beat a competent rule-based system, not a trivial placeholder.
          </p>
        </div>
      </div>

      <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/30 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
          Trade-Offs and Risks
        </h2>
        <div className="text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">Trade-off:</strong> test coverage vs velocity. Mitigation: focused tests on
            pipeline-critical components.
          </p>
          <p>
            <strong className="text-foreground">Trade-off:</strong> fast tests vs realistic LLM/RAG calls.
            Mitigation: mock most runs; run full LLM eval on demand.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 text-sm">
        {nav.prev ? <Link href={nav.prev.path} className="text-muted-foreground hover:text-primary">← {nav.prev.title}</Link> : <span />}
        {nav.next ? <Link href={nav.next.path} className="text-muted-foreground hover:text-primary">{nav.next.title} →</Link> : <span />}
      </div>
    </TeleOpsThinkingLayout>
  );
}
