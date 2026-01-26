import { AIChatAssistantDocsLayout } from "@/components/AIChatAssistantDocsLayout";
import Link from "next/link";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "AI Chat Assistant | Conversational AI for Portfolio",
  description: "Conversational AI assistant powered by Gemini 3 Flash, deployed as a Cloudflare Worker with session persistence and markdown rendering.",
};

export default function AIChatAssistantOverviewPage() {
  return (
    <AIChatAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>AI Chat Assistant</h1>

        <p className="lead">
          Conversational AI assistant embedded in the portfolio website, powered by Google Gemini 3 Flash and deployed as a serverless Cloudflare Worker.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/?openChat=true"
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <span className="text-2xl">💬</span>
            <div>
              <div className="font-semibold text-foreground">Live Demo</div>
              <div className="text-sm text-muted-foreground">Try the assistant now</div>
            </div>
          </Link>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="font-semibold text-foreground">Edge Deployed</div>
              <div className="text-sm text-muted-foreground">Cloudflare Workers</div>
            </div>
          </div>
        </div>

        <hr />

        <h2>What It Does</h2>

        <p>
          The AI Chat Assistant provides visitors with an interactive way to learn about professional background:
        </p>

        <ul>
          <li><strong>Answers questions</strong> about work experience, skills, and achievements</li>
          <li><strong>Explains projects</strong> with technical details and metrics</li>
          <li><strong>Provides contact info</strong> and availability for recruiters</li>
          <li><strong>Maintains context</strong> throughout the conversation session</li>
        </ul>

        <hr />

        <h2>Key Features</h2>

        <h3>Core Capabilities</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Gemini 3 Flash</div>
            <p className="text-sm text-muted-foreground">Latest Google AI model for fast, accurate responses</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Session Persistence</div>
            <p className="text-sm text-muted-foreground">Chat history maintained via sessionStorage</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Markdown Rendering</div>
            <p className="text-sm text-muted-foreground">Rich formatting with headings, lists, links</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Follow-up Questions</div>
            <p className="text-sm text-muted-foreground">AI suggests relevant next questions</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Responsive Design</div>
            <p className="text-sm text-muted-foreground">Full-screen mobile, modal on desktop</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Edge Deployment</div>
            <p className="text-sm text-muted-foreground">Cloudflare Workers for global low latency</p>
          </div>
        </div>

        <hr />

        <h2>Architecture Preview</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    Browser["Browser"]
    Modal["ChatModal.tsx"]
    Context["ChatContext.tsx"]
    Worker["Cloudflare Worker"]
    Gemini["Gemini 3 Flash"]
    Storage["sessionStorage"]

    Browser --> Modal
    Modal --> Context
    Modal --> Worker
    Modal --> Storage
    Worker --> Gemini

    style Browser fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style Modal fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style Context fill:#fce7f3,stroke:#ec4899
    style Worker fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style Gemini fill:#fee2e2,stroke:#ef4444
    style Storage fill:#f3f4f6,stroke:#9ca3af`}
          />
        </div>

        <hr />

        <h2>Tech Stack</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Layer</th>
                <th className="px-4 py-3 text-left font-semibold">Technology</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Frontend</td>
                <td className="px-4 py-3 text-muted-foreground">Next.js 15, React 19</td>
                <td className="px-4 py-3 text-muted-foreground">UI framework</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Styling</td>
                <td className="px-4 py-3 text-muted-foreground">Tailwind CSS 4</td>
                <td className="px-4 py-3 text-muted-foreground">Component styling</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Backend</td>
                <td className="px-4 py-3 text-muted-foreground">Cloudflare Workers</td>
                <td className="px-4 py-3 text-muted-foreground">Serverless API</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">AI</td>
                <td className="px-4 py-3 text-muted-foreground">Gemini 3 Flash</td>
                <td className="px-4 py-3 text-muted-foreground">Response generation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Storage</td>
                <td className="px-4 py-3 text-muted-foreground">sessionStorage</td>
                <td className="px-4 py-3 text-muted-foreground">Chat history</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Project Metrics</h2>

        <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">&lt;2s</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">Edge</div>
            <div className="text-sm text-muted-foreground">Deployment</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">~8KB</div>
            <div className="text-sm text-muted-foreground">Bundle Size</div>
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
            href="/docs/ai-chat-assistant/getting-started"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Getting Started →</div>
            <div className="text-sm text-muted-foreground">Setup and deployment guide</div>
          </Link>
          <Link
            href="/docs/ai-chat-assistant/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">System design and data flow</div>
          </Link>
          <Link
            href="/docs/ai-chat-assistant/api-reference"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Reference →</div>
            <div className="text-sm text-muted-foreground">Worker endpoint documentation</div>
          </Link>
          <Link
            href="/docs/ai-chat-assistant/chat-interface"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Chat Interface →</div>
            <div className="text-sm text-muted-foreground">UI components and state management</div>
          </Link>
        </div>
      </article>
    </AIChatAssistantDocsLayout>
  );
}
