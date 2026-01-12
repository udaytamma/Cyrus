import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import Link from "next/link";

export const metadata = {
  title: "AI Ingredient Scanner | Multi-Agent Safety Analyzer",
  description: "A multi-agent AI system for analyzing food and cosmetic ingredient safety with mobile app, camera scanning, and multi-language OCR.",
};

export default function IngredientScannerOverviewPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>AI Ingredient Scanner</h1>

        <p className="lead">
          A multi-agent AI system for analyzing food and cosmetic ingredient safety. Features a Streamlit web interface, React Native mobile app, and RESTful API powered by Google Gemini 2.0 Flash and LangGraph orchestration.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="https://github.com/udaytamma/AiIngredientScanner"
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
            <span className="text-2xl">📱</span>
            <div>
              <div className="font-semibold text-foreground">Mobile App</div>
              <div className="text-sm text-muted-foreground">React Native + Expo</div>
            </div>
          </div>
        </div>

        <hr />

        <h2>What It Does</h2>

        <p>
          The AI Ingredient Safety Analyzer helps users understand product ingredient safety by:
        </p>

        <ul>
          <li><strong>Parsing ingredient lists</strong> from any food or cosmetic product</li>
          <li><strong>Researching each ingredient</strong> via vector database and Google Search</li>
          <li><strong>Generating personalized safety reports</strong> based on user allergies and skin type</li>
          <li><strong>Providing actionable recommendations</strong> (SAFE / CAUTION / AVOID)</li>
        </ul>

        <hr />

        <h2>Key Features</h2>

        <h3>Core Capabilities</h3>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Personalized Analysis</div>
            <p className="text-sm text-muted-foreground">Safety reports tailored to your allergies and skin type</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Beginner/Expert Modes</div>
            <p className="text-sm text-muted-foreground">Simple or technical explanations based on preference</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Allergen Matching</div>
            <p className="text-sm text-muted-foreground">Prominent AVOID warnings for matched allergens</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Quality Validation</div>
            <p className="text-sm text-muted-foreground">5-gate critic agent with automatic retry loop</p>
          </div>
        </div>

        <h3>Mobile App (Phase 2)</h3>

        <ul>
          <li><strong>Native camera integration</strong> for label scanning</li>
          <li><strong>Multi-language OCR</strong> with auto-translation (9+ languages)</li>
          <li><strong>Dark/Light theme toggle</strong></li>
          <li><strong>Expandable ingredient cards</strong> with detailed safety metrics</li>
        </ul>

        <h3>Authentication & User Management (Phase 3)</h3>

        <ul>
          <li><strong>Google Sign-In</strong> with Firebase Authentication</li>
          <li><strong>User profile</strong> with ProfileAvatar (photo or initial)</li>
          <li><strong>PreferencesContext</strong> with Firestore sync (debounced)</li>
          <li><strong>Guest mode</strong> with AsyncStorage fallback</li>
          <li><strong>In-app Privacy Policy modal</strong></li>
          <li><strong>Collapsible Danger Zone</strong> for account deletion</li>
        </ul>

        <h3>Supported OCR Languages</h3>

        <div className="not-prose my-6 flex flex-wrap gap-2">
          {["English", "French", "Spanish", "German", "Italian", "Korean", "Japanese", "Chinese", "Portuguese"].map((lang) => (
            <span key={lang} className="rounded-full bg-muted px-3 py-1 text-sm">
              {lang}
            </span>
          ))}
        </div>

        <hr />

        <h2>Architecture Preview</h2>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph WORKFLOW["Multi-Agent Workflow"]
      UI["User Input"]
      SUP["Supervisor Agent"]
      RES["Research Agent"]
      ANA["Analysis Agent"]
      CRI["Critic Agent"]
      DB["Qdrant + Web Search"]
      OUT["APPROVED / REJECTED / ESCALATED"]

      UI --> SUP
      SUP --> RES
      SUP --> ANA
      SUP --> CRI
      RES --> DB
      CRI --> OUT
    end

    style UI fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style SUP fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style RES fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style ANA fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style CRI fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style DB fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style OUT fill:#fce7f3,stroke:#ec4899,stroke-width:2px
`}
        />

        <hr />

        <h2>Project Metrics</h2>

        <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">191</div>
            <div className="text-sm text-muted-foreground">Tests</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">83%</div>
            <div className="text-sm text-muted-foreground">Coverage</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">9+</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">v3.1</div>
            <div className="text-sm text-muted-foreground">Version</div>
          </div>
        </div>

        <hr />

        <h2>Version History</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Version</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">v3.1.0</td>
                <td className="px-4 py-3">ProfileAvatar, PreferencesContext, Danger Zone, Privacy Modal</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">v3.0.0</td>
                <td className="px-4 py-3">Firebase Authentication, user profiles, premium login UI</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">v2.0.0</td>
                <td className="px-4 py-3">Mobile app, REST API, multi-language OCR</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">v1.0.0</td>
                <td className="px-4 py-3">Initial release with Streamlit web interface</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/getting-started"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Getting Started →</div>
            <div className="text-sm text-muted-foreground">Setup and installation guide</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture →</div>
            <div className="text-sm text-muted-foreground">Multi-agent workflow and tech stack</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/api-reference"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">API Reference →</div>
            <div className="text-sm text-muted-foreground">REST endpoints for mobile integration</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/mobile-setup"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Mobile App →</div>
            <div className="text-sm text-muted-foreground">React Native setup and components</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
