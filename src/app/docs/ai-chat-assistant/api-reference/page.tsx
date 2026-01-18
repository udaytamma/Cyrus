import { AIChatAssistantDocsLayout } from "@/components/AIChatAssistantDocsLayout";

export const metadata = {
  title: "API Reference | AI Chat Assistant",
  description: "Cloudflare Worker API endpoint documentation.",
};

export default function APIReferencePage() {
  return (
    <AIChatAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>API Reference</h1>

        <p className="lead">
          The AI Chat Assistant exposes a single POST endpoint via Cloudflare Workers.
        </p>

        <hr />

        <h2>Endpoint</h2>

        <pre><code>{`POST https://uday-ai-worker.udaytamma.workers.dev`}</code></pre>

        <hr />

        <h2>Request</h2>

        <h3>Headers</h3>

        <pre><code>{`Content-Type: application/json`}</code></pre>

        <h3>Body</h3>

        <pre><code>{`{
  "message": "What is Uday's experience with AI?",
  "history": [
    {
      "role": "user",
      "parts": [{ "text": "Previous question" }]
    },
    {
      "role": "model",
      "parts": [{ "text": "Previous response" }]
    }
  ]
}`}</code></pre>

        <h3>Parameters</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Field</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Required</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">message</td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3 text-green-600">Yes</td>
                <td className="px-4 py-3 text-muted-foreground">The user&apos;s question</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">history</td>
                <td className="px-4 py-3 text-muted-foreground">Message[]</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 text-muted-foreground">Previous conversation messages</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Response</h2>

        <h3>Success (200)</h3>

        <pre><code>{`{
  "response": "Uday has extensive **production AI experience**...",
  "history": [
    { "role": "user", "parts": [{ "text": "Previous question" }] },
    { "role": "model", "parts": [{ "text": "Previous response" }] },
    { "role": "user", "parts": [{ "text": "What is Uday's experience with AI?" }] },
    { "role": "model", "parts": [{ "text": "Uday has extensive **production AI experience**..." }] }
  ]
}`}</code></pre>

        <h3>Error (4xx/5xx)</h3>

        <pre><code>{`{
  "error": "Error description",
  "details": "Additional details (if available)"
}`}</code></pre>

        <hr />

        <h2>Error Codes</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Error</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-yellow-600">400</td>
                <td className="px-4 py-3 text-muted-foreground">Message is required</td>
                <td className="px-4 py-3 text-muted-foreground">Empty or invalid message field</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-yellow-600">405</td>
                <td className="px-4 py-3 text-muted-foreground">Method not allowed</td>
                <td className="px-4 py-3 text-muted-foreground">Non-POST request</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-red-600">502</td>
                <td className="px-4 py-3 text-muted-foreground">AI service error</td>
                <td className="px-4 py-3 text-muted-foreground">Gemini API failure</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-red-600">500</td>
                <td className="px-4 py-3 text-muted-foreground">Internal server error</td>
                <td className="px-4 py-3 text-muted-foreground">Worker exception</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Data Types</h2>

        <h3>Message</h3>

        <pre><code>{`interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}`}</code></pre>

        <h3>ChatRequest</h3>

        <pre><code>{`interface ChatRequest {
  message: string;
  history?: Message[];
}`}</code></pre>

        <h3>ChatResponse</h3>

        <pre><code>{`interface ChatResponse {
  response: string;
  history: Message[];
}`}</code></pre>

        <hr />

        <h2>Gemini Configuration</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                <th className="px-4 py-3 text-left font-semibold">Value</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">model</td>
                <td className="px-4 py-3 text-muted-foreground">gemini-3-flash-preview</td>
                <td className="px-4 py-3 text-muted-foreground">Fast, cost-effective model</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">temperature</td>
                <td className="px-4 py-3 text-muted-foreground">0.7</td>
                <td className="px-4 py-3 text-muted-foreground">Balanced creativity/consistency</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">maxOutputTokens</td>
                <td className="px-4 py-3 text-muted-foreground">1024</td>
                <td className="px-4 py-3 text-muted-foreground">Maximum response length</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">topP</td>
                <td className="px-4 py-3 text-muted-foreground">0.95</td>
                <td className="px-4 py-3 text-muted-foreground">Nucleus sampling threshold</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Safety Settings</h2>

        <p>All harm categories are set to <code>BLOCK_ONLY_HIGH</code>:</p>

        <ul>
          <li>HARM_CATEGORY_HARASSMENT</li>
          <li>HARM_CATEGORY_HATE_SPEECH</li>
          <li>HARM_CATEGORY_SEXUALLY_EXPLICIT</li>
          <li>HARM_CATEGORY_DANGEROUS_CONTENT</li>
        </ul>

        <hr />

        <h2>Rate Limits</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Service</th>
                <th className="px-4 py-3 text-left font-semibold">Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Gemini API (free)</td>
                <td className="px-4 py-3 text-muted-foreground">15 requests per minute</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Cloudflare Workers (free)</td>
                <td className="px-4 py-3 text-muted-foreground">100,000 requests per day</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Example: cURL</h2>

        <pre><code>{`curl -X POST https://uday-ai-worker.udaytamma.workers.dev \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "What projects has Uday worked on?",
    "history": []
  }'`}</code></pre>

        <hr />

        <h2>Example: JavaScript</h2>

        <pre><code>{`const response = await fetch(
  "https://uday-ai-worker.udaytamma.workers.dev",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "What is Uday's experience with AI?",
      history: [],
    }),
  }
);

const data = await response.json();
console.log(data.response);`}</code></pre>
      </article>
    </AIChatAssistantDocsLayout>
  );
}
