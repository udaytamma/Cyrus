"use client";

/**
 * ChatGPT Project 5: AI-Powered Service Assurance
 * AI/ML TPM focus - Telecom SLA Monitoring, Predictive Maintenance
 */

import Link from "next/link";
import { CapstoneLayout, ProjectHeader } from "@/components/CapstoneLayout";

function ProjectContent() {
  return (
    <div className="max-w-[900px] mx-auto">
      <Link
        href="/nebula/capstone/chatgpt"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
      >
        ← Back to ChatGPT Projects
      </Link>

      <ProjectHeader
        title="AI-Powered Service Assurance Platform"
        tags={[
          { label: "Telecom", type: "telecom" },
          { label: "AI/ML TPM", type: "ai" },
          { label: "Infrastructure TPM", type: "infra" },
        ]}
      />

      {/* Executive Summary */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Executive Summary
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p>
            The AI-Powered Service Assurance Platform is an intelligent monitoring and predictive
            maintenance system for telecom service quality. It continuously tracks SLA compliance,
            predicts service degradations before customer impact, performs automated root cause
            analysis, and orchestrates remediation workflows to maintain 99.99%+ service availability.
          </p>
          <p>
            This project demonstrates <strong className="text-foreground">AI/ML TPM and Infrastructure TPM capabilities</strong> by
            building a production-grade system that bridges network operations and customer experience,
            using machine learning to shift from reactive to proactive service assurance.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Problem Statement & Solution
        </h2>
        <div className="text-muted-foreground space-y-4">
          <p><strong className="text-foreground">Problem:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>SLA violations discovered after customer complaints, not before impact (avg 30min delay)</li>
            <li>Service degradation patterns invisible in noisy monitoring data (1M+ metrics/min)</li>
            <li>Root cause analysis takes 2-4 hours per incident, delaying resolution</li>
            <li>Manual correlation of network metrics, application logs, customer complaints</li>
            <li>Scheduled maintenance windows too infrequent - issues detected but not addressed for weeks</li>
            <li>No predictive intelligence - equipment failures happen suddenly despite warning signs days prior</li>
          </ul>

          <p><strong className="text-foreground">Solution Architecture:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">SLA Monitoring:</strong> Real-time tracking of service quality metrics (latency, throughput, availability, error rates) against customer SLA commitments</li>
            <li><strong className="text-foreground">Predictive Analytics:</strong> ML models forecast service degradations 24-72 hours ahead using historical patterns, seasonal trends, equipment telemetry</li>
            <li><strong className="text-foreground">Anomaly Detection:</strong> Multi-variate anomaly detection on time-series data to identify subtle degradation patterns invisible to threshold-based alerts</li>
            <li><strong className="text-foreground">Automated Root Cause Analysis:</strong> Correlation engine maps customer complaints → network events → infrastructure failures in real-time</li>
            <li><strong className="text-foreground">Proactive Remediation:</strong> Automated playbooks for preventive maintenance (reroute traffic, failover, capacity scaling) before SLA breach</li>
            <li><strong className="text-foreground">Customer Impact Modeling:</strong> Predict number of affected customers and revenue impact for each potential service issue</li>
          </ul>
        </div>
      </section>

      {/* Expected Outcomes & KPIs */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Expected Outcomes & KPIs
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Baseline</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Target</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Measurement</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Service Availability (SLA)</td>
                <td className="py-3 px-4">99.9% (43 min/month)</td>
                <td className="py-3 px-4 font-semibold text-primary">99.99% (4 min/month)</td>
                <td className="py-3 px-4">Customer-impacting downtime tracking</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Proactive Issue Detection</td>
                <td className="py-3 px-4">10%</td>
                <td className="py-3 px-4 font-semibold text-primary">70%+</td>
                <td className="py-3 px-4">Issues resolved before customer complaints</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Prediction Accuracy (24hr horizon)</td>
                <td className="py-3 px-4">N/A</td>
                <td className="py-3 px-4 font-semibold text-primary">80%+ precision</td>
                <td className="py-3 px-4">Predicted degradations that occurred</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Root Cause Identification Time</td>
                <td className="py-3 px-4">2-4 hours</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;5 minutes</td>
                <td className="py-3 px-4">Time from incident to RCA completion</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">SLA Breach Reduction</td>
                <td className="py-3 px-4">12 breaches/month</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;2 breaches/month</td>
                <td className="py-3 px-4">Monthly SLA violation count</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Customer Complaint Rate</td>
                <td className="py-3 px-4">450/month</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;100/month</td>
                <td className="py-3 px-4">Service quality related support tickets</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Mean Time to Repair (MTTR)</td>
                <td className="py-3 px-4">38 minutes</td>
                <td className="py-3 px-4 font-semibold text-primary">&lt;10 minutes</td>
                <td className="py-3 px-4">Incident detection to full resolution</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: "Monitoring & Observability", items: ["Cloud Monitoring", "Prometheus", "Grafana", "OpenTelemetry"] },
            { title: "Data Platform", items: ["BigQuery", "Pub/Sub", "Dataflow", "Cloud Storage"] },
            { title: "ML & Prediction", items: ["Vertex AI", "BigQuery ML", "AutoML", "TensorFlow"] },
            { title: "Automation", items: ["Cloud Functions", "Cloud Run", "Workflows"] },
            { title: "Alerting & Incident Mgmt", items: ["PagerDuty", "ServiceNow", "Slack API"] },
            { title: "Visualization", items: ["Looker", "Data Studio"] },
          ].map((category) => (
            <div key={category.title} className="p-4 bg-muted/30 rounded-lg">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {category.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Implementation Phases
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Phase</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Duration</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Key Deliverables</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Success Criteria</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 1: Data Foundation</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">SLA monitoring dashboards, data ingestion pipelines, baseline metrics</td>
                <td className="py-3 px-4">100% SLA metrics visible in real-time</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 2: Anomaly Detection</td>
                <td className="py-3 px-4">8 weeks</td>
                <td className="py-3 px-4">ML-based anomaly detection, alert correlation, noise reduction</td>
                <td className="py-3 px-4">80% reduction in false positive alerts</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 3: Predictive Models</td>
                <td className="py-3 px-4">8 weeks</td>
                <td className="py-3 px-4">24-72hr prediction models, customer impact scoring</td>
                <td className="py-3 px-4">80%+ prediction accuracy, 70%+ proactive detection</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 4: Automation</td>
                <td className="py-3 px-4">6 weeks</td>
                <td className="py-3 px-4">Automated RCA, remediation playbooks, self-healing actions</td>
                <td className="py-3 px-4">&lt;5min RCA, &lt;10min MTTR</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Phase 5: Optimization</td>
                <td className="py-3 px-4">4 weeks</td>
                <td className="py-3 px-4">Model tuning, feedback loops, executive dashboards, production rollout</td>
                <td className="py-3 px-4">99.99% SLA, &lt;2 breaches/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Risks & Mitigation */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Risks & Mitigation Strategies
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Risk</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Severity</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Automated remediation causes unintended service disruptions</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">High</span>
                </td>
                <td className="py-3 px-4">Human-in-the-loop for critical actions; dry-run mode; blast radius limits; kill switch</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Prediction false positives lead to unnecessary maintenance</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">High confidence thresholds (0.85+); cost-benefit analysis per action; gradual automation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Data quality issues from heterogeneous monitoring sources</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Schema validation; data quality dashboards; outlier detection in ingestion pipeline</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Model drift as network topology evolves</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">Medium</span>
                </td>
                <td className="py-3 px-4">Continuous model monitoring; automated retraining; A/B testing for model updates</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Operator resistance to AI-driven decisions</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">Low</span>
                </td>
                <td className="py-3 px-4">Explainable AI (SHAP); shadow mode for 30 days; training and change management</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-muted-foreground">
          <p><strong className="text-foreground">Key Dependencies:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Network Operations for telemetry access and playbook validation</li>
            <li>Customer Experience team for complaint data and SLA definitions</li>
            <li>Platform Engineering for monitoring infrastructure and data pipelines</li>
            <li>ML Engineering for model development and production serving</li>
            <li>Change Management for operator training and adoption</li>
          </ul>
        </div>
      </section>

      {/* Professional Alignment */}
      <section className="mb-8 p-6 bg-card rounded-xl border border-border">
        <h2 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
          Alignment with TPM Career Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { text: "Telecom Domain Expertise: Deep dive into SLA management, network operations, and service quality" },
            { text: "Predictive ML at Scale: Build production prediction systems with real business impact" },
            { text: "Customer-Centric Metrics: Bridge technical operations with customer experience outcomes" },
            { text: "Operational Excellence: Target 99.99% availability through proactive operations" },
            { text: "Cross-Functional Leadership: Coordinate NOC, engineering, and customer success teams" },
            { text: "Business Value Delivery: Clear ROI through reduced SLA breaches and customer complaints" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <span className="text-green-500 flex-shrink-0">✅</span>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{item.text.split(":")[0]}:</strong>
                {item.text.split(":").slice(1).join(":")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Link
          href="/nebula/capstone/chatgpt/program-governance-hub"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          ← Previous: Governance Hub
        </Link>
        <Link
          href="/nebula/capstone/chatgpt"
          className="px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          Back to ChatGPT Projects →
        </Link>
      </div>
    </div>
  );
}

export default function AIServiceAssurancePage() {
  return (
    <CapstoneLayout
      title="AI-Powered Service Assurance Platform"
      description="ChatGPT Project 5: Predictive maintenance and SLA management for telecom services"
      currentProjectId="chatgpt/ai-service-assurance"
      currentLLM="chatgpt"
    >
      <ProjectContent />
    </CapstoneLayout>
  );
}
