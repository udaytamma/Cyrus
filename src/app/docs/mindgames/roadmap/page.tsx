import { MindGamesDocsLayout } from "@/components/MindGamesDocsLayout";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

export const metadata = {
  title: "Roadmap | MindGames",
  description: "Future enhancements, planned features, and technical debt for MindGames mental math training application.",
};

export default function RoadmapPage() {
  return (
    <MindGamesDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Roadmap</h1>

        <p className="lead">
          This document outlines planned enhancements, feature ideas, and technical improvements for future versions of MindGames.
        </p>

        <hr />

        <h2>Enhancement Priority</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Priority</th>
                <th className="px-4 py-3 text-left font-semibold">Enhancement</th>
                <th className="px-4 py-3 text-left font-semibold">Impact</th>
                <th className="px-4 py-3 text-left font-semibold">Effort</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-red-600 dark:text-red-400">High</td>
                <td className="px-4 py-3">Local Storage Persistence</td>
                <td className="px-4 py-3">User retention</td>
                <td className="px-4 py-3">Low</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-red-600 dark:text-red-400">High</td>
                <td className="px-4 py-3">Progressive Difficulty</td>
                <td className="px-4 py-3">Engagement</td>
                <td className="px-4 py-3">Medium</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-red-600 dark:text-red-400">High</td>
                <td className="px-4 py-3">Sound Effects</td>
                <td className="px-4 py-3">User experience</td>
                <td className="px-4 py-3">Low</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-red-600 dark:text-red-400">High</td>
                <td className="px-4 py-3">PWA / Offline Support</td>
                <td className="px-4 py-3">Accessibility</td>
                <td className="px-4 py-3">Medium</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-yellow-600 dark:text-yellow-400">Medium</td>
                <td className="px-4 py-3">Streak Tracking</td>
                <td className="px-4 py-3">Engagement</td>
                <td className="px-4 py-3">Low</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-yellow-600 dark:text-yellow-400">Medium</td>
                <td className="px-4 py-3">Problem History</td>
                <td className="px-4 py-3">Learning</td>
                <td className="px-4 py-3">Medium</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-yellow-600 dark:text-yellow-400">Medium</td>
                <td className="px-4 py-3">Keyboard Shortcuts</td>
                <td className="px-4 py-3">Power users</td>
                <td className="px-4 py-3">Low</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-green-600 dark:text-green-400">Low</td>
                <td className="px-4 py-3">Multiplayer Mode</td>
                <td className="px-4 py-3">Social</td>
                <td className="px-4 py-3">High</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-green-600 dark:text-green-400">Low</td>
                <td className="px-4 py-3">Gamification</td>
                <td className="px-4 py-3">Engagement</td>
                <td className="px-4 py-3">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>High Priority Enhancements</h2>

        <h3>1. Local Storage Persistence</h3>

        <p><strong>Current State:</strong> All data is lost on page refresh.</p>

        <p><strong>Proposed Solution:</strong></p>
        <ul>
          <li>Save user preferences (profile mode, operation mix, settings)</li>
          <li>Persist statistics across sessions</li>
          <li>Store incomplete sessions for resume</li>
          <li>Cache generated worksheets</li>
        </ul>

        <CopyableCodeBlock
          title="localStorage example"
          language="typescript"
          code={`// Example implementation
useEffect(() => {
  localStorage.setItem('mindgames-config', JSON.stringify(config));
}, [config]);

// Load on mount
const savedConfig = localStorage.getItem('mindgames-config');
if (savedConfig) {
  setConfig(JSON.parse(savedConfig));
}`}
        />

        <h3>2. Progressive Difficulty</h3>

        <p><strong>Current State:</strong> Static difficulty within session.</p>

        <p><strong>Proposed Solution:</strong></p>
        <ul>
          <li>Start with easier problems, increase difficulty on correct streaks</li>
          <li>Decrease difficulty after multiple incorrect answers</li>
          <li>Track problem completion time for adaptive difficulty</li>
          <li>Build personal difficulty curve based on historical performance</li>
        </ul>

        <h3>3. Sound Effects</h3>

        <p><strong>Current State:</strong> Silent interaction.</p>

        <p><strong>Proposed Solution:</strong></p>
        <ul>
          <li><strong>Correct answer:</strong> Pleasant chime</li>
          <li><strong>Incorrect answer:</strong> Subtle error tone</li>
          <li><strong>Chain complete:</strong> Celebration sound</li>
          <li><strong>Timer warning:</strong> Tick-tock at 10 seconds remaining</li>
          <li><strong>Settings:</strong> Volume control with mute option</li>
        </ul>

        <h3>4. PWA / Offline Support</h3>

        <p><strong>Current State:</strong> Requires internet connection.</p>

        <p><strong>Proposed Solution:</strong></p>
        <ul>
          <li>Add service worker for offline caching</li>
          <li>Enable installation as native app</li>
          <li>Sync data when connection restored</li>
          <li>Push notifications for daily practice reminder (optional)</li>
        </ul>

        <hr />

        <h2>Medium Priority Enhancements</h2>

        <h3>5. Streak Tracking</h3>

        <ul>
          <li>Daily practice streak counter</li>
          <li>Visual streak calendar</li>
          <li>Streak rewards and badges</li>
          <li>Break streak warning notification</li>
        </ul>

        <h3>6. Problem History</h3>

        <ul>
          <li>Review past sessions with detailed breakdown</li>
          <li>Identify most-missed problem types</li>
          <li>Track improvement over time with graphs</li>
          <li>Export session data (CSV, JSON)</li>
        </ul>

        <h3>7. Enhanced Keyboard Shortcuts</h3>

        <p><strong>Current:</strong> Tab/Enter only.</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Shortcut</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">Space</td>
                <td className="px-4 py-3">Start/pause session</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">Escape</td>
                <td className="px-4 py-3">End session</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">R</td>
                <td className="px-4 py-3">Reset/regenerate worksheet</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">1-4</td>
                <td className="px-4 py-3">Quick select preset (Random, Basic, Advanced, Expert)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">K</td>
                <td className="px-4 py-3">Toggle kid mode</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono">D</td>
                <td className="px-4 py-3">Toggle dark mode</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>8. Print Mode</h3>

        <ul>
          <li>Generate printable PDF worksheets</li>
          <li>Include separate answer key</li>
          <li>Configurable layout (problems per page)</li>
          <li>QR code for answer checking</li>
        </ul>

        <h3>9. Accessibility Improvements</h3>

        <ul>
          <li>Screen reader support with ARIA labels</li>
          <li>High contrast mode</li>
          <li>Reduced motion option</li>
          <li>Larger click targets option</li>
          <li>Focus indicators for keyboard navigation</li>
        </ul>

        <hr />

        <h2>Low Priority / Nice to Have</h2>

        <h3>10. Multiplayer Mode</h3>

        <ul>
          <li>Race against friends in real-time</li>
          <li>Shared worksheet link</li>
          <li>Live leaderboard during session</li>
          <li>Turn-based challenges via link sharing</li>
        </ul>

        <h3>11. Gamification</h3>

        <ul>
          <li>XP and leveling system</li>
          <li>Achievement badges for milestones</li>
          <li>Daily challenges with rewards</li>
          <li>Seasonal events and themed content</li>
        </ul>

        <h3>12. Custom Themes</h3>

        <ul>
          <li>Theme color picker</li>
          <li>Multiple preset themes (Ocean, Forest, Sunset, etc.)</li>
          <li>Seasonal themes (holiday, back-to-school)</li>
          <li>User-created theme sharing</li>
        </ul>

        <h3>13. Statistics Dashboard</h3>

        <ul>
          <li>Detailed analytics with graphs</li>
          <li>Time-of-day performance patterns</li>
          <li>Operation-specific metrics</li>
          <li>Weekly and monthly reports</li>
        </ul>

        <h3>14. Problem Annotations</h3>

        <ul>
          <li>Mark difficult problems for review</li>
          <li>Add personal notes to problems</li>
          <li>Create problem collections</li>
          <li>Share problem sets with others</li>
        </ul>

        <hr />

        <h2>Technical Debt</h2>

        <h3>Code Quality</h3>

        <div className="not-prose my-6">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Add JSDoc comments to all components</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Improve TypeScript strictness (enable strict mode)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Add E2E tests with Playwright</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Performance profiling and optimization</span>
            </li>
          </ul>
        </div>

        <h3>Testing Improvements</h3>

        <div className="not-prose my-6">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Increase test coverage to 90%</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Add visual regression tests</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Add accessibility tests (axe-core)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Test edge cases more thoroughly</span>
            </li>
          </ul>
        </div>

        <h3>Documentation</h3>

        <div className="not-prose my-6">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Add API documentation (TypeDoc)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Create component Storybook</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Add architecture diagrams (Mermaid)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded border border-border"></span>
              <span>Document deployment process</span>
            </li>
          </ul>
        </div>

        <hr />

        <h2>Contributing</h2>

        <p>
          Contributions are welcome. To add a new feature:
        </p>

        <ol>
          <li>Create an issue describing the enhancement</li>
          <li>Fork the repository</li>
          <li>Create a feature branch</li>
          <li>Implement with tests</li>
          <li>Submit a pull request</li>
        </ol>

        <p>
          See the{" "}
          <a href="https://github.com/udaytamma/MindGames/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
            Contributing Guide
          </a>{" "}
          for detailed guidelines.
        </p>

        <hr />

        <h2>Back to Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <a
            href="/docs/mindgames"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">← Overview</div>
            <div className="text-sm text-muted-foreground">Back to project overview</div>
          </a>
          <a
            href="/docs/mindgames/architecture"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Architecture</div>
            <div className="text-sm text-muted-foreground">Technical decisions</div>
          </a>
        </div>
      </article>
    </MindGamesDocsLayout>
  );
}
