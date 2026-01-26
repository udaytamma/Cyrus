import { EmailAssistantDocsLayout } from "@/components/EmailAssistantDocsLayout";
import Link from "next/link";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Email Assistant | AI-Powered Email Management",
  description: "Professional email management system with AI-powered categorization, daily digests, and comprehensive observability.",
};

export default function EmailAssistantOverviewPage() {
  return (
    <EmailAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Email Assistant</h1>

        <p className="lead">
          Professional email management system with AI-powered categorization, daily digests, and comprehensive observability through a beautiful web dashboard.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="https://github.com/udaytamma/AiEmailAssistant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <span className="text-2xl">📦</span>
            <div>
              <div className="font-semibold text-foreground">Source Code</div>
              <div className="text-sm text-muted-foreground">GitHub Repository</div>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <span className="text-2xl">🌐</span>
            <div>
              <div className="font-semibold text-foreground">Web Dashboard</div>
              <div className="text-sm text-muted-foreground">Flask + Responsive UI</div>
            </div>
          </div>
        </div>

        <hr />

        <h2>What It Does</h2>

        <p>
          The AI Email Executive Assistant helps manage your inbox by:
        </p>

        <ul>
          <li><strong>Categorizing emails</strong> intelligently using Gemini AI</li>
          <li><strong>Generating daily digests</strong> with consolidated summaries</li>
          <li><strong>Tracking metrics</strong> for email processing and API usage</li>
          <li><strong>Providing observability</strong> through a beautiful web dashboard</li>
        </ul>

        <hr />

        <h2>Key Features</h2>

        <h3>Core Capabilities</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Gmail Integration</div>
            <p className="text-sm text-muted-foreground">OAuth 2.0 authentication with Gmail API</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">AI Categorization</div>
            <p className="text-sm text-muted-foreground">Gemini 2.5 Flash Lite for intelligent sorting</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Daily Digest</div>
            <p className="text-sm text-muted-foreground">Newsletter highlights and email summaries</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Metrics Dashboard</div>
            <p className="text-sm text-muted-foreground">Comprehensive tracking with SQLite storage</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">LRU Caching</div>
            <p className="text-sm text-muted-foreground">30 emails cached with 24h expiry</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">JSON Configuration</div>
            <p className="text-sm text-muted-foreground">Flexible settings without code changes</p>
          </div>
        </div>

        <h3>Email Categories</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Category</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-red-600 dark:text-red-400">Need-Action</td>
                <td className="px-4 py-3 text-muted-foreground">Emails requiring your response or action</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-blue-600 dark:text-blue-400">FYI</td>
                <td className="px-4 py-3 text-muted-foreground">Informational emails, no action needed</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-green-600 dark:text-green-400">Newsletter</td>
                <td className="px-4 py-3 text-muted-foreground">Subscriptions and periodic updates</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-yellow-600 dark:text-yellow-400">Promotional</td>
                <td className="px-4 py-3 text-muted-foreground">Marketing emails and offers</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-purple-600 dark:text-purple-400">Social</td>
                <td className="px-4 py-3 text-muted-foreground">Social network notifications</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Architecture Preview</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    Gmail["Gmail API"]
    EP["Email Processor"]
    Gemini["Gemini AI"]
    SQLite[("SQLite Metrics")]
    Cat["Categorizer"]
    Digest["Digest Generator"]
    Web["Web Dashboard"]

    Gmail --> EP
    EP --> Gemini
    EP --> SQLite
    Gemini --> Cat
    Cat --> Digest
    Digest --> Web

    style Gmail fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style EP fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style Gemini fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style Cat fill:#fce7f3,stroke:#ec4899
    style Digest fill:#fee2e2,stroke:#ef4444
    style Web fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style SQLite fill:#f3f4f6,stroke:#9ca3af`}
          />
        </div>

        <hr />

        <h2>Tracked Metrics</h2>

        <p>
          The system tracks <strong>12+ comprehensive metrics</strong> for complete observability:
        </p>

        <div className="not-prose my-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">1</div>
            <div className="text-xs text-muted-foreground">Total Emails Processed</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">2</div>
            <div className="text-xs text-muted-foreground">Cache Hit Rate</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">3</div>
            <div className="text-xs text-muted-foreground">API Calls Made</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">4</div>
            <div className="text-xs text-muted-foreground">Avg Execution Time</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">5</div>
            <div className="text-xs text-muted-foreground">Emails by Category</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">6</div>
            <div className="text-xs text-muted-foreground">Success Rate</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">7</div>
            <div className="text-xs text-muted-foreground">Script Run Count</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">8</div>
            <div className="text-xs text-muted-foreground">Error Count</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">9</div>
            <div className="text-xs text-muted-foreground">Avg API Response Time</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">10</div>
            <div className="text-xs text-muted-foreground">Estimated API Cost</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">11</div>
            <div className="text-xs text-muted-foreground">Cache Utilization</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-3 text-center">
            <div className="text-lg font-bold text-primary">12</div>
            <div className="text-xs text-muted-foreground">Recent Errors</div>
          </div>
        </div>

        <hr />

        <h2>Project Metrics</h2>

        <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">v2.1</div>
            <div className="text-sm text-muted-foreground">Version</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">3.11+</div>
            <div className="text-sm text-muted-foreground">Python</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">55+</div>
            <div className="text-sm text-muted-foreground">Tests</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">Prod</div>
            <div className="text-sm text-muted-foreground">Status</div>
          </div>
        </div>

        <hr />

        <h2>Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/email-assistant/getting-started"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Getting Started →</div>
            <div className="text-sm text-muted-foreground">Setup and installation guide</div>
          </Link>
          <Link
            href="/docs/email-assistant/ai-categorization"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">AI Categorization →</div>
            <div className="text-sm text-muted-foreground">How email classification works</div>
          </Link>
          <Link
            href="/docs/email-assistant/daily-digest"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Daily Digest →</div>
            <div className="text-sm text-muted-foreground">Email summaries and highlights</div>
          </Link>
          <Link
            href="/docs/email-assistant/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">System design and tech stack</div>
          </Link>
        </div>
      </article>
    </EmailAssistantDocsLayout>
  );
}
