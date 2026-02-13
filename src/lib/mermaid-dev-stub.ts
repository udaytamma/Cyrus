/**
 * Mermaid Dev Stub
 *
 * Replaces the 65MB mermaid npm package during development via
 * NormalModuleReplacementPlugin in next.config.ts.
 *
 * Loads Mermaid from jsdelivr CDN at runtime instead of bundling it.
 * This removes Mermaid entirely from Webpack's HMR module graph,
 * preventing memory accumulation across file-save cycles.
 *
 * Production builds are NOT affected -- they use the npm package
 * via dynamic import as usual.
 *
 * @see next.config.ts (NormalModuleReplacementPlugin)
 * @see components/MermaidDiagram.tsx (consumer via `import("mermaid")`)
 */

// Pin to the same major.minor as package.json to avoid rendering differences
const CDN_URL = "https://cdn.jsdelivr.net/npm/mermaid@11.12.2/dist/mermaid.min.js";

type MermaidAPI = typeof import("mermaid")["default"];

// Access window.mermaid safely (CDN attaches it as a global)
function getWindowMermaid(): MermaidAPI | undefined {
  if (typeof window === "undefined") return undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (window as any).mermaid as MermaidAPI | undefined;
}

// Singleton: only load the CDN script once
let loadPromise: Promise<MermaidAPI> | null = null;

function loadFromCDN(): Promise<MermaidAPI> {
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    // If already loaded by a previous call (e.g., script cached)
    const existing = getWindowMermaid();
    if (existing) {
      resolve(existing);
      return;
    }

    const script = document.createElement("script");
    script.src = CDN_URL;
    script.async = true;
    script.onload = () => {
      const m = getWindowMermaid();
      if (m) {
        resolve(m);
      } else {
        reject(new Error("Mermaid CDN loaded but window.mermaid is undefined"));
      }
    };
    script.onerror = () => {
      loadPromise = null; // Allow retry on failure
      reject(new Error(`Failed to load Mermaid from CDN: ${CDN_URL}`));
    };
    document.head.appendChild(script);
  });

  return loadPromise;
}

// Export the same shape as `import("mermaid").default`
// MermaidDiagram.tsx calls: import("mermaid").then(m => m.default)
// So the default export must be the mermaid API object itself
const stub = {
  initialize: (...args: Parameters<typeof import("mermaid")["default"]["initialize"]>) => {
    // Defer initialization until CDN is loaded
    loadFromCDN().then((m) => m.initialize(...args));
  },
  render: async (...args: Parameters<typeof import("mermaid")["default"]["render"]>) => {
    const m = await loadFromCDN();
    return m.render(...args);
  },
  parse: async (...args: Parameters<typeof import("mermaid")["default"]["parse"]>) => {
    const m = await loadFromCDN();
    return m.parse(...args);
  },
  // Passthrough for any other methods called at runtime
  run: async (...args: unknown[]) => {
    const m = await loadFromCDN();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (m as any).run(...args);
  },
};

export default stub;
