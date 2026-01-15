import { ProfessorGeminiDocsLayout } from "@/components/ProfessorGeminiDocsLayout";

export const metadata = {
  title: "Theme System | Professor Gemini",
  description: "Light and dark theme support in Professor Gemini Streamlit UI.",
};

export default function ThemePage() {
  return (
    <ProfessorGeminiDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Theme System</h1>

        <p className="lead">
          Professor Gemini features a professional theme system with light, dark, and system-preference modes.
        </p>

        <hr />

        <h2>Theme Modes</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="mb-2 text-2xl">🌙</div>
            <div className="font-semibold">Dark Mode</div>
            <p className="mt-1 text-sm text-muted-foreground">Low-light optimized</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="mb-2 text-2xl">☀️</div>
            <div className="font-semibold">Light Mode</div>
            <p className="mt-1 text-sm text-muted-foreground">Bright environment</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="mb-2 text-2xl">💻</div>
            <div className="font-semibold">System</div>
            <p className="mt-1 text-sm text-muted-foreground">Follows OS preference</p>
          </div>
        </div>

        <hr />

        <h2>Color Palette</h2>

        <h3>Dark Mode Colors</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Value</th>
                <th className="px-4 py-3 text-left font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">bg_primary</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded" style={{ backgroundColor: "#0d0d0d" }}></span>
                    #0d0d0d
                  </span>
                </td>
                <td className="px-4 py-3">Main background</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">bg_secondary</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded" style={{ backgroundColor: "#1a1a1a" }}></span>
                    #1a1a1a
                  </span>
                </td>
                <td className="px-4 py-3">Sidebar, cards</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">accent</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded" style={{ backgroundColor: "#DAA520" }}></span>
                    #DAA520
                  </span>
                </td>
                <td className="px-4 py-3">Goldenrod accent</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">text_primary</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded border" style={{ backgroundColor: "#e8eaed" }}></span>
                    #e8eaed
                  </span>
                </td>
                <td className="px-4 py-3">Primary text</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Light Mode Colors</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Variable</th>
                <th className="px-4 py-3 text-left font-semibold">Value</th>
                <th className="px-4 py-3 text-left font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">bg_primary</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded border" style={{ backgroundColor: "#ffffff" }}></span>
                    #ffffff
                  </span>
                </td>
                <td className="px-4 py-3">Main background</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">bg_secondary</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded border" style={{ backgroundColor: "#f8f9fa" }}></span>
                    #f8f9fa
                  </span>
                </td>
                <td className="px-4 py-3">Sidebar, cards</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">accent</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded" style={{ backgroundColor: "#b8860b" }}></span>
                    #b8860b
                  </span>
                </td>
                <td className="px-4 py-3">Darker goldenrod for contrast</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">text_primary</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded" style={{ backgroundColor: "#202124" }}></span>
                    #202124
                  </span>
                </td>
                <td className="px-4 py-3">Primary text</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Theme Toggle</h2>

        <p>The theme toggle is located in the sidebar and cycles through modes:</p>

        <pre><code>{`Dark → Light → System → Dark ...`}</code></pre>

        <h3>Implementation</h3>

        <pre><code>{`# Theme state in session
if "theme" not in st.session_state:
    st.session_state.theme = "dark"

# Toggle button
if st.button("🌙" if theme == "dark" else "☀️" if theme == "light" else "💻"):
    themes = ["dark", "light", "system"]
    current = themes.index(st.session_state.theme)
    st.session_state.theme = themes[(current + 1) % 3]
    st.rerun()`}</code></pre>

        <hr />

        <h2>CSS Variables</h2>

        <p>Themes are implemented using CSS custom properties:</p>

        <pre><code>{`:root {
    --bg-primary: #0d0d0d;
    --bg-secondary: #1a1a1a;
    --text-primary: #e8eaed;
    --accent: #DAA520;
    --border: #3c4043;
    /* ... */
}`}</code></pre>

        <hr />

        <h2>Styled Components</h2>

        <p>Key Streamlit components are styled for both themes:</p>

        <ul>
          <li><strong>Sidebar</strong> - Navigation and settings</li>
          <li><strong>Buttons</strong> - Primary and secondary actions</li>
          <li><strong>Inputs</strong> - Text fields and selects</li>
          <li><strong>Expanders</strong> - Collapsible sections</li>
          <li><strong>Alerts</strong> - Info, success, warning, error</li>
          <li><strong>Progress</strong> - Pipeline status indicators</li>
          <li><strong>Code blocks</strong> - Syntax highlighted content</li>
        </ul>

        <hr />

        <h2>Design Principles</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Google-Inspired</div>
            <p className="text-sm text-muted-foreground">Clean, minimal design following Material Design principles</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Accessible Contrast</div>
            <p className="text-sm text-muted-foreground">WCAG-compliant color contrast ratios</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Consistent Branding</div>
            <p className="text-sm text-muted-foreground">Goldenrod accent matches Cyrus portfolio theme</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Reduced Eye Strain</div>
            <p className="text-sm text-muted-foreground">Optimized for extended use in both modes</p>
          </div>
        </div>
      </article>
    </ProfessorGeminiDocsLayout>
  );
}
