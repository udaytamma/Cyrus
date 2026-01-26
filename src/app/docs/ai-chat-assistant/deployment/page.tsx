import { AIChatAssistantDocsLayout } from "@/components/AIChatAssistantDocsLayout";

export const metadata = {
  title: "Worker Deployment | AI Chat Assistant",
  description: "Cloudflare Worker deployment and configuration guide.",
};

export default function DeploymentPage() {
  return (
    <AIChatAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Worker Deployment</h1>

        <p className="lead">
          The AI Chat Assistant backend runs as a Cloudflare Worker, deployed globally on the edge network.
        </p>

        <hr />

        <h2>Worker Configuration</h2>

        <h3>wrangler.toml</h3>

        <pre><code>{`name = "uday-ai-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"`}</code></pre>

        <h3>package.json</h3>

        <pre><code>{`{
  "name": "uday-ai-worker",
  "scripts": {
    "dev": "wrangler dev",
    "deploy": "wrangler deploy"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.x",
    "typescript": "^5.x",
    "wrangler": "^4.x"
  }
}`}</code></pre>

        <hr />

        <h2>Environment Variables</h2>

        <h3>Secrets (Encrypted)</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Secret</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">GEMINI_API_KEY</td>
                <td className="px-4 py-3 text-muted-foreground">Google AI API key for Gemini</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Setting Secrets</h3>

        <pre><code>{`# Set via CLI
cd /Users/omega/Projects/Cyrus/worker
npx wrangler secret put GEMINI_API_KEY
# Enter your API key when prompted

# Or via dashboard
# Workers & Pages > uday-ai-worker > Settings > Variables`}</code></pre>

        <hr />

        <h2>Deployment Commands</h2>

        <h3>Local Development</h3>

        <pre><code>{`cd /Users/omega/Projects/Cyrus/worker
npx wrangler dev
# Worker available at http://localhost:8787`}</code></pre>

        <h3>Production Deployment</h3>

        <pre><code>{`cd /Users/omega/Projects/Cyrus/worker
npx wrangler deploy
# Deploys to https://uday-ai-worker.udaytamma.workers.dev`}</code></pre>

        <hr />

        <h2>Deployment Workflow</h2>

        <p>When updating the AI Chat Assistant:</p>

        <ol>
          <li><strong>Update code</strong> - Modify <code>worker/src/index.ts</code></li>
          <li><strong>Test locally</strong> - Run <code>npx wrangler dev</code></li>
          <li><strong>Deploy worker</strong> - Run <code>npx wrangler deploy</code></li>
          <li><strong>Verify</strong> - Test on production site</li>
        </ol>

        <div className="not-prose my-4 rounded-lg border-l-4 border-primary bg-primary/10 p-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Worker deployment is independent of the frontend. Push Cyrus to GitHub for frontend changes, deploy worker separately.
          </p>
        </div>

        <hr />

        <h2>CORS Configuration</h2>

        <p>The worker allows cross-origin requests from any domain:</p>

        <pre><code>{`const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};`}</code></pre>

        <p>For production, consider restricting to your domain:</p>

        <pre><code>{`"Access-Control-Allow-Origin": "https://zeroleaf.dev"`}</code></pre>

        <hr />

        <h2>Monitoring</h2>

        <h3>Cloudflare Dashboard</h3>

        <p>View metrics at: <strong>Workers & Pages &gt; uday-ai-worker &gt; Metrics</strong></p>

        <ul>
          <li>Request count</li>
          <li>CPU time</li>
          <li>Error rate</li>
          <li>Latency percentiles</li>
        </ul>

        <h3>Logs</h3>

        <pre><code>{`# Stream live logs
npx wrangler tail

# View recent logs in dashboard
# Workers & Pages > uday-ai-worker > Logs`}</code></pre>

        <hr />

        <h2>Troubleshooting</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Issue</th>
                <th className="px-4 py-3 text-left font-semibold">Cause</th>
                <th className="px-4 py-3 text-left font-semibold">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">502 Bad Gateway</td>
                <td className="px-4 py-3 text-muted-foreground">Gemini API error</td>
                <td className="px-4 py-3 text-muted-foreground">Check API key, verify quota</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">CORS error</td>
                <td className="px-4 py-3 text-muted-foreground">Missing headers</td>
                <td className="px-4 py-3 text-muted-foreground">Verify corsHeaders in worker</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Timeout</td>
                <td className="px-4 py-3 text-muted-foreground">Slow Gemini response</td>
                <td className="px-4 py-3 text-muted-foreground">Check Gemini API status</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Deploy fails</td>
                <td className="px-4 py-3 text-muted-foreground">TypeScript error</td>
                <td className="px-4 py-3 text-muted-foreground">Run npx tsc to check types</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Cost & Limits</h2>

        <h3>Cloudflare Workers (Free Tier)</h3>

        <ul>
          <li>100,000 requests/day</li>
          <li>10ms CPU time/request</li>
          <li>Unlimited bandwidth</li>
        </ul>

        <h3>Gemini API (Free Tier)</h3>

        <ul>
          <li>15 requests/minute</li>
          <li>1,500 requests/day</li>
          <li>1 million tokens/month</li>
        </ul>

        <p>For higher limits, upgrade to paid tiers on either service.</p>
      </article>
    </AIChatAssistantDocsLayout>
  );
}
