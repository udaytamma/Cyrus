import { AIChatAssistantDocsLayout } from "@/components/AIChatAssistantDocsLayout";

export const metadata = {
  title: "Getting Started | AI Chat Assistant",
  description: "Setup and deployment guide for the AI Chat Assistant.",
};

export default function GettingStartedPage() {
  return (
    <AIChatAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Getting Started</h1>

        <p className="lead">
          Set up and deploy the AI Chat Assistant in your development environment.
        </p>

        <hr />

        <h2>Prerequisites</h2>

        <ul>
          <li>Node.js 18+</li>
          <li>npm or yarn</li>
          <li>Cloudflare account (free tier works)</li>
          <li>Google AI API key (Gemini)</li>
        </ul>

        <hr />

        <h2>Project Structure</h2>

        <pre><code>{`Cyrus/
├── src/
│   ├── components/
│   │   └── ChatModal.tsx        # Chat UI component
│   └── context/
│       └── ChatContext.tsx      # Global modal state
└── worker/
    ├── src/
    │   └── index.ts             # Cloudflare Worker
    ├── wrangler.toml            # Worker config
    └── package.json             # Worker dependencies`}</code></pre>

        <hr />

        <h2>Local Development</h2>

        <h3>Frontend</h3>

        <pre><code>{`cd /Users/omega/Projects/Cyrus
npm install
npm run dev
# Open http://localhost:4001`}</code></pre>

        <h3>Worker (API)</h3>

        <pre><code>{`cd /Users/omega/Projects/Cyrus/worker
npm install
npx wrangler dev
# Worker runs at http://localhost:8787`}</code></pre>

        <hr />

        <h2>Environment Setup</h2>

        <h3>Configure Gemini API Key</h3>

        <p>
          The Cloudflare Worker needs access to your Gemini API key. Store it securely using Wrangler secrets:
        </p>

        <pre><code>{`cd /Users/omega/Projects/Cyrus/worker
npx wrangler secret put GEMINI_API_KEY
# Enter your Google AI API key when prompted`}</code></pre>

        <h3>Update Worker URL (if needed)</h3>

        <p>
          If deploying to a different Cloudflare account, update the worker URL in <code>ChatModal.tsx</code>:
        </p>

        <pre><code>{`// src/components/ChatModal.tsx
const WORKER_URL = "https://your-worker.your-account.workers.dev";`}</code></pre>

        <hr />

        <h2>Deployment</h2>

        <h3>Frontend (Cloudflare Pages)</h3>

        <p>
          The frontend auto-deploys via GitHub integration:
        </p>

        <pre><code>{`git push origin main
# Cloudflare Pages auto-deploys from main branch`}</code></pre>

        <h3>Worker (Manual)</h3>

        <pre><code>{`cd /Users/omega/Projects/Cyrus/worker
npx wrangler deploy
# Deploys to uday-ai-worker.udaytamma.workers.dev`}</code></pre>

        <hr />

        <h2>Verify Deployment</h2>

        <ol>
          <li>Open <a href="https://zeroleaf.dev">zeroleaf.dev</a></li>
          <li>Click the chat button in the bottom-right corner</li>
          <li>Ask a question like &quot;What is Uday&apos;s experience with AI?&quot;</li>
          <li>Verify you receive a formatted response within 2 seconds</li>
        </ol>

        <hr />

        <h2>Troubleshooting</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Issue</th>
                <th className="px-4 py-3 text-left font-semibold">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">CORS errors</td>
                <td className="px-4 py-3 text-muted-foreground">Check worker CORS headers allow your domain</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">502 errors</td>
                <td className="px-4 py-3 text-muted-foreground">Verify GEMINI_API_KEY secret is set</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Slow responses</td>
                <td className="px-4 py-3 text-muted-foreground">Check Gemini API quotas and rate limits</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Chat not opening</td>
                <td className="px-4 py-3 text-muted-foreground">Ensure ChatProvider wraps the app in layout.tsx</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </AIChatAssistantDocsLayout>
  );
}
