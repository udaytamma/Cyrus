import { MindGamesDocsLayout } from "@/components/MindGamesDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata = {
  title: "Architecture | MindGames",
  description: "Technical architecture, design decisions, and trade-offs in MindGames mental math training application.",
};

export default function ArchitecturePage() {
  return (
    <MindGamesDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Architecture &amp; Technical Decisions</h1>

        <p className="lead">
          This document outlines the architecture, key technical decisions, and design trade-offs made during MindGames development.
        </p>

        <hr />

        <h2>System Architecture</h2>

        <p>
          MindGames follows a clean separation between UI components, state management, and business logic:
        </p>

        <MermaidDiagram
          chart={`flowchart TB
    subgraph UI["UI Layer"]
        style UI fill:#e0e7ff,stroke:#6366f1
        CD["ChainDisplay"]
        OS["OperationSlider"]
        TM["Timer"]
    end

    subgraph SM["State Management"]
        style SM fill:#fef3c7,stroke:#f59e0b
        GC["GameContext<br/>- worksheet<br/>- answers<br/>- session<br/>- configuration"]
        TC["ThemeContext<br/>- theme (light/dark)<br/>- profile (kid/adult)"]
    end

    subgraph BL["Business Logic"]
        style BL fill:#d1fae5,stroke:#10b981
        PG["problem-generator.ts<br/>- generateChain()<br/>- generateWorksheet()<br/>- selectOperationByMix()<br/>- getSmartStartingNumber()"]
    end

    UI --> SM
    SM --> BL

    style CD fill:#e0e7ff,stroke:#6366f1
    style OS fill:#e0e7ff,stroke:#6366f1
    style TM fill:#e0e7ff,stroke:#6366f1
    style GC fill:#fef3c7,stroke:#f59e0b
    style TC fill:#fef3c7,stroke:#f59e0b
    style PG fill:#d1fae5,stroke:#10b981`}
        />

        <hr />

        <h2>State Management</h2>

        <h3>Decision: React Context with useReducer</h3>

        <p>
          The application uses React Context with useReducer instead of external state libraries like Redux or Zustand.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Factor</th>
                <th className="px-4 py-3 text-left font-semibold">Reasoning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">State Complexity</td>
                <td className="px-4 py-3">Relatively simple (worksheet, answers, session) - no need for Redux middleware</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Bundle Size</td>
                <td className="px-4 py-3">Zero additional dependencies - Context is built into React</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Application Scope</td>
                <td className="px-4 py-3">Single-page application with no complex data flows</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">DevTools</td>
                <td className="px-4 py-3">React DevTools sufficient for debugging state</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Trade-offs:</strong></p>
        <ul>
          <li>Less structured than Redux actions/reducers pattern</li>
          <li>No time-travel debugging</li>
          <li>Potential re-render issues with large state (mitigated with memoization)</li>
        </ul>

        <hr />

        <h2>Problem Generation Algorithm</h2>

        <h3>Decision: Generate All Chains Upfront</h3>

        <p>
          When a user clicks &quot;Generate,&quot; the entire worksheet (all chains and problems) is created at once rather than generating problems on-demand.
        </p>

        <p><strong>Reasoning:</strong></p>
        <ul>
          <li>Allows progress tracking across entire worksheet</li>
          <li>Enables consistent session timing</li>
          <li>Simplifies state management (single source of truth)</li>
          <li>Better UX - no loading between chains</li>
        </ul>

        <p><strong>Trade-offs:</strong></p>
        <ul>
          <li>Initial generation takes slightly longer</li>
          <li>All problems stored in memory</li>
          <li>Cannot dynamically adjust difficulty mid-session</li>
        </ul>

        <h3>Operation Mix Algorithm</h3>

        <p>
          The algorithm uses weighted random selection with fallback strategies to ensure chain generation always succeeds:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Primary: Random selection based on percentages
const operation = selectOperationByMix(config.operationMix);

// Fallback 1: Try operations in order of percentage
const sortedOps = operations.sort((a, b) =>
  config.operationMix[b] - config.operationMix[a]
);

// Fallback 2: Simple add/subtract with small numbers
// Ensures chain generation never fails`}
        </pre>

        <p>
          This approach respects user preferences while handling edge cases like small maxResult values or limited divisors.
        </p>

        <h3>Smart Starting Numbers</h3>

        <p>
          When multiply/divide operations are 50% or more of the mix, the algorithm uses <strong>highly composite numbers</strong> (12, 24, 36, 60, etc.) as starting values.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Number</th>
                <th className="px-4 py-3 text-left font-semibold">Divisors</th>
                <th className="px-4 py-3 text-left font-semibold">Why Useful</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">12</td>
                <td className="px-4 py-3">1, 2, 3, 4, 6, 12</td>
                <td className="px-4 py-3 text-muted-foreground">6 divisors for clean division</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">24</td>
                <td className="px-4 py-3">1, 2, 3, 4, 6, 8, 12, 24</td>
                <td className="px-4 py-3 text-muted-foreground">8 divisors, very flexible</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">36</td>
                <td className="px-4 py-3">1, 2, 3, 4, 6, 9, 12, 18, 36</td>
                <td className="px-4 py-3 text-muted-foreground">9 divisors, perfect square</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">60</td>
                <td className="px-4 py-3">1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60</td>
                <td className="px-4 py-3 text-muted-foreground">12 divisors, most flexible</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Trade-off:</strong> Starting numbers become predictable in multiply/divide heavy modes, but this significantly improves generation success rate.</p>

        <hr />

        <h2>Division Validation</h2>

        <h3>Decision: Only Allow Clean Divisions</h3>

        <p>
          Division operations only produce problems with integer results. Decimal results are rejected and alternative operations are attempted.
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`if (operation === 'divide' && !Number.isInteger(result)) {
  return null; // Reject and try another operation
}`}
        </pre>

        <p><strong>Reasoning:</strong></p>
        <ul>
          <li>Mental math with decimals is significantly harder</li>
          <li>Keeps focus on core arithmetic skills</li>
          <li>Matches typical educational approach for mental math</li>
          <li>Avoids rounding confusion</li>
        </ul>

        <p><strong>Trade-off:</strong> Limits available division problems and may repeat similar divisor patterns. Not suitable for decimal practice.</p>

        <hr />

        <h2>UI/UX Decisions</h2>

        <h3>Tab Navigation Flow</h3>

        <p>
          Pressing Tab submits the current answer AND moves focus to the next input field.
        </p>

        <p><strong>Reasoning:</strong></p>
        <ul>
          <li>Matches user expectation from form behavior</li>
          <li>Single keypress for the most common action</li>
          <li>Enter also works for those who prefer it</li>
          <li>Reduces friction in rapid-fire practice sessions</li>
        </ul>

        <p><strong>Trade-off:</strong> Cannot tab without submitting. Accidental tab submits partial answers.</p>

        <h3>Expand/Collapse Chain UI</h3>

        <p>
          The active chain is expanded while inactive chains are collapsed, showing only their completion status.
        </p>

        <p><strong>Reasoning:</strong></p>
        <ul>
          <li>Focuses attention on the current problem</li>
          <li>Reduces cognitive overload</li>
          <li>Shows progress at a glance</li>
          <li>Allows many chains to fit on screen</li>
        </ul>

        <h3>Wide Desktop Layout (1600px)</h3>

        <p>
          The application expands to 1600px on large screens, wider than the typical 1200px max-width.
        </p>

        <p><strong>Reasoning:</strong></p>
        <ul>
          <li>Math chains can be long horizontally</li>
          <li>Modern monitors are wider than traditional designs assume</li>
          <li>Settings sidebar does not compete for space with main content</li>
          <li>Better utilization of available screen real estate</li>
        </ul>

        <hr />

        <h2>Configuration Constraints</h2>

        <h3>Minimum 10% Per Operation</h3>

        <p>
          Each operation type must have at least 10% allocation in the operation mix. Users cannot set an operation to 0%.
        </p>

        <p><strong>Reasoning:</strong></p>
        <ul>
          <li>Ensures variety in every session</li>
          <li>Prevents single-operation monotony</li>
          <li>Balanced skill development</li>
          <li>Avoids edge cases with 0% operations</li>
        </ul>

        <p><strong>Trade-off:</strong> Cannot practice pure addition or multiplication. Limits customization for users wanting specific focus areas.</p>

        <hr />

        <h2>Kid Mode Celebrations</h2>

        <p>
          When Kid Mode is active and all chains are completed, a 3-second confetti burst animates on screen using the <code>canvas-confetti</code> library.
        </p>

        <p><strong>Reasoning:</strong></p>
        <ul>
          <li>Provides dopamine hit for positive reinforcement</li>
          <li>Makes math practice feel rewarding</li>
          <li>Clear session boundary marker</li>
          <li>Appeals to younger users</li>
        </ul>

        <p><strong>Trade-off:</strong> May distract focused users (hence Adult mode exists). Adds canvas-confetti dependency. Brief performance impact during animation.</p>

        <hr />

        <h2>Known Limitations</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Limitation</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Potential Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No persistence</td>
                <td className="px-4 py-3">Data lost on refresh</td>
                <td className="px-4 py-3 text-muted-foreground">Add localStorage support</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No offline support</td>
                <td className="px-4 py-3">Requires internet</td>
                <td className="px-4 py-3 text-muted-foreground">Add PWA service worker</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No user accounts</td>
                <td className="px-4 py-3">No cross-device sync</td>
                <td className="px-4 py-3 text-muted-foreground">Add authentication</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">No problem history</td>
                <td className="px-4 py-3">Cannot review past sessions</td>
                <td className="px-4 py-3 text-muted-foreground">Add session storage</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Limited accessibility</td>
                <td className="px-4 py-3">Screen reader support incomplete</td>
                <td className="px-4 py-3 text-muted-foreground">Add ARIA labels</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Next Steps</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="/docs/mindgames/testing"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Testing →</div>
            <div className="text-sm text-muted-foreground">Test suite and coverage</div>
          </a>
          <a
            href="/docs/mindgames/roadmap"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Roadmap →</div>
            <div className="text-sm text-muted-foreground">Planned enhancements</div>
          </a>
        </div>
      </article>
    </MindGamesDocsLayout>
  );
}
