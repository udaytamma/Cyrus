import { AIChatAssistantDocsLayout } from "@/components/AIChatAssistantDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Architecture | AI Chat Assistant",
  description: "System architecture and data flow for the AI Chat Assistant.",
};

export default function ArchitecturePage() {
  return (
    <AIChatAssistantDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Architecture</h1>

        <p className="lead">
          The AI Chat Assistant uses a serverless architecture with edge deployment for low-latency responses globally.
        </p>

        <hr />

        <h2>System Overview</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`flowchart TB
    subgraph Frontend["Frontend (Cloudflare Pages)"]
        Browser["Browser"]
        Modal["ChatModal.tsx"]
        Context["ChatContext.tsx"]
        Session["sessionStorage"]
    end

    subgraph Backend["Backend (Cloudflare Workers)"]
        Worker["index.ts"]
        CORS["CORS Handler"]
        Validation["Request Validation"]
        Prompt["System Prompt"]
    end

    subgraph AI["AI Service"]
        Gemini["Gemini 3 Flash"]
        Safety["Safety Filters"]
    end

    Browser --> Modal
    Modal <--> Context
    Modal <--> Session
    Modal --> |"HTTPS POST"| Worker
    Worker --> CORS
    CORS --> Validation
    Validation --> Prompt
    Prompt --> Gemini
    Gemini --> Safety
    Safety --> |"Response"| Worker
    Worker --> |"JSON"| Modal

    style Frontend fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style Backend fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style AI fill:#fef3c7,stroke:#f59e0b,stroke-width:2px`}
          />
        </div>

        <hr />

        <h2>Component Breakdown</h2>

        <h3>Frontend Components</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Component</th>
                <th className="px-4 py-3 text-left font-semibold">File</th>
                <th className="px-4 py-3 text-left font-semibold">Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ChatModal</td>
                <td className="px-4 py-3 text-muted-foreground">ChatModal.tsx</td>
                <td className="px-4 py-3 text-muted-foreground">UI rendering, API calls, markdown formatting</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ChatContext</td>
                <td className="px-4 py-3 text-muted-foreground">ChatContext.tsx</td>
                <td className="px-4 py-3 text-muted-foreground">Global modal state (open/close)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">ChatProvider</td>
                <td className="px-4 py-3 text-muted-foreground">ChatContext.tsx</td>
                <td className="px-4 py-3 text-muted-foreground">React context provider wrapper</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Backend (Worker)</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Function</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">fetch()</td>
                <td className="px-4 py-3 text-muted-foreground">Main request handler, CORS preflight</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">SYSTEM_PROMPT</td>
                <td className="px-4 py-3 text-muted-foreground">Knowledge base and response guidelines</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">corsHeaders</td>
                <td className="px-4 py-3 text-muted-foreground">Cross-origin request configuration</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Data Flow</h2>

        <div className="not-prose my-6">
          <MermaidDiagram
            chart={`sequenceDiagram
    participant U as User
    participant M as ChatModal
    participant S as sessionStorage
    participant W as Worker
    participant G as Gemini API

    U->>M: Type message
    M->>M: Add to local state
    M->>S: Persist history
    M->>W: POST {message, history}
    W->>W: Validate request
    W->>G: generateContent()
    G-->>W: Response text
    W-->>M: {response, history}
    M->>M: Render markdown
    M->>M: Extract follow-ups
    M->>S: Update history
    M-->>U: Display response`}
          />
        </div>

        <hr />

        <h2>State Management</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">State</th>
                <th className="px-4 py-3 text-left font-semibold">Location</th>
                <th className="px-4 py-3 text-left font-semibold">Persistence</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Modal open/close</td>
                <td className="px-4 py-3 text-muted-foreground">ChatContext</td>
                <td className="px-4 py-3 text-muted-foreground">None (resets on reload)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Conversation messages</td>
                <td className="px-4 py-3 text-muted-foreground">ChatModal useState</td>
                <td className="px-4 py-3 text-muted-foreground">sessionStorage</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Input field</td>
                <td className="px-4 py-3 text-muted-foreground">ChatModal useState</td>
                <td className="px-4 py-3 text-muted-foreground">None</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Loading/Error</td>
                <td className="px-4 py-3 text-muted-foreground">ChatModal useState</td>
                <td className="px-4 py-3 text-muted-foreground">None</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Key Design Decisions</h2>

        <h3>Why Cloudflare Workers?</h3>

        <ul>
          <li><strong>Edge deployment</strong> - Low latency globally without managing servers</li>
          <li><strong>Free tier</strong> - 100,000 requests/day at no cost</li>
          <li><strong>Secrets management</strong> - Secure API key storage</li>
          <li><strong>Same platform</strong> - Pages + Workers for unified deployment</li>
        </ul>

        <h3>Why sessionStorage?</h3>

        <ul>
          <li><strong>Tab isolation</strong> - Each tab has independent conversation</li>
          <li><strong>Privacy</strong> - Clears automatically on tab close</li>
          <li><strong>No server storage</strong> - No database needed</li>
          <li><strong>Cross-page persistence</strong> - History survives navigation within session</li>
        </ul>

        <h3>Why Gemini 3 Flash?</h3>

        <ul>
          <li><strong>Speed</strong> - Optimized for low-latency responses</li>
          <li><strong>Cost</strong> - More affordable than larger models</li>
          <li><strong>Quality</strong> - Sufficient for Q&A about professional background</li>
          <li><strong>Safety</strong> - Built-in content filtering</li>
        </ul>
      </article>
    </AIChatAssistantDocsLayout>
  );
}
