import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Theme System | AI Ingredient Scanner",
  description: "Dark/Light mode implementation with React Context for the AI Ingredient Scanner mobile app.",
};

export default function ThemeSystemPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Theme System</h1>

        <p className="lead">
          The mobile app supports dark and light themes using React Context, providing a seamless visual experience across all components with preference persistence.
        </p>

        <hr />

        <h2>Architecture</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│                    THEME ARCHITECTURE                        │
│                                                              │
│           ┌─────────────────┐                                │
│           │  ThemeProvider  │ ← User Toggle                  │
│           └────────┬────────┘                                │
│                    │                                         │
│                    ▼                                         │
│           ┌─────────────────┐                                │
│           │  ThemeContext   │                                │
│           └────────┬────────┘                                │
│                    │                                         │
│                    ▼                                         │
│           ┌─────────────────┐                                │
│           │  useTheme Hook  │                                │
│           └────────┬────────┘                                │
│                    │                                         │
│     ┌──────────────┼──────────────┬──────────────┐          │
│     ▼              ▼              ▼              ▼          │
│ ┌──────────┐ ┌──────────────┐ ┌──────────────┐ ┌─────────┐ │
│ │HomeScreen│ │IngredientCard│ │ProfileSelector│ │ Results │ │
│ └──────────┘ └──────────────┘ └──────────────┘ └─────────┘ │
└─────────────────────────────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>Usage</h2>

        <h3>Access Theme in Components</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { theme, themeMode, toggleTheme } = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.textPrimary }}>
        Hello World
      </Text>
      <Button onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </View>
  );
}`}
        </pre>

        <h3>ThemeContext API</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`interface ThemeContextType {
  theme: Theme;              // Current color scheme object
  themeMode: ThemeMode;      // 'light' | 'dark'
  toggleTheme: () => void;   // Switch between modes
  setThemeMode: (mode: ThemeMode) => void;  // Set specific mode
}`}
        </pre>

        <hr />

        <h2>Color Schemes</h2>

        <h3>Light Theme</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`export const lightTheme = {
  mode: 'light',
  colors: {
    // Backgrounds
    background: '#f8fafc',
    card: '#ffffff',
    cardBorder: '#e5e7eb',
    inputBackground: '#f9fafb',

    // Text
    textPrimary: '#1f2937',
    textSecondary: '#6b7280',
    textMuted: '#9ca3af',

    // Accent colors
    primary: '#6366f1',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#3b82f6',

    // UI elements
    divider: '#e5e7eb',
    shadow: '#000000',
    overlay: 'rgba(0,0,0,0.5)',
  },
};`}
        </pre>

        <h3>Dark Theme</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`export const darkTheme = {
  mode: 'dark',
  colors: {
    // Backgrounds
    background: '#0f172a',
    card: '#1e293b',
    cardBorder: '#334155',
    inputBackground: '#1e293b',

    // Text
    textPrimary: '#f1f5f9',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',

    // Accent colors
    primary: '#818cf8',
    success: '#4ade80',
    warning: '#fbbf24',
    danger: '#f87171',
    info: '#60a5fa',

    // UI elements
    divider: '#334155',
    shadow: '#000000',
    overlay: 'rgba(0,0,0,0.7)',
  },
};`}
        </pre>

        <h3>Color Comparison</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Token</th>
                <th className="px-4 py-3 text-left font-semibold">Light</th>
                <th className="px-4 py-3 text-left font-semibold">Dark</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">background</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#f8fafc' }}></span> #f8fafc</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#0f172a' }}></span> #0f172a</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">card</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#ffffff' }}></span> #ffffff</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#1e293b' }}></span> #1e293b</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">textPrimary</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#1f2937' }}></span> #1f2937</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#f1f5f9' }}></span> #f1f5f9</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">primary</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#6366f1' }}></span> #6366f1</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#818cf8' }}></span> #818cf8</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">success</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#22c55e' }}></span> #22c55e</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#4ade80' }}></span> #4ade80</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">danger</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#ef4444' }}></span> #ef4444</td>
                <td className="px-4 py-3"><span className="inline-block h-4 w-4 rounded border" style={{ backgroundColor: '#f87171' }}></span> #f87171</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Implementation</h2>

        <h3>ThemeProvider</h3>

        <p>
          Wrap your app with <code>ThemeProvider</code>:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// App.tsx
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}`}
        </pre>

        <h3>ThemeContext Source</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// context/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeMode } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}`}
        </pre>

        <hr />

        <h2>Styling Patterns</h2>

        <h3>Dynamic Styles</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`function Card() {
  const { theme } = useTheme();

  return (
    <View style={[
      styles.card,
      {
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.cardBorder,
      }
    ]}>
      <Text style={{ color: theme.colors.textPrimary }}>
        Content
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});`}
        </pre>

        <h3>StatusBar Integration</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`import { StatusBar } from 'expo-status-bar';

function App() {
  const { themeMode } = useTheme();

  return (
    <>
      <StatusBar style={themeMode === 'dark' ? 'light' : 'dark'} />
      <HomeScreen />
    </>
  );
}`}
        </pre>

        <hr />

        <h2>Best Practices</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">1. Use Semantic Tokens</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`// ✅ Good - semantic meaning
<Text style={{ color: theme.colors.textPrimary }}>Title</Text>
<Text style={{ color: theme.colors.textSecondary }}>Subtitle</Text>

// ❌ Bad - hardcoded colors
<Text style={{ color: '#1f2937' }}>Title</Text>`}
            </pre>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">2. Extract Theme in Component Root</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`// ✅ Good - single hook call
function MyComponent() {
  const { theme } = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.textPrimary }}>...</Text>
    </View>
  );
}

// ❌ Bad - multiple hook calls in render
function MyComponent() {
  return (
    <View style={{ backgroundColor: useTheme().theme.colors.background }}>
      <Text style={{ color: useTheme().theme.colors.textPrimary }}>...</Text>
    </View>
  );
}`}
            </pre>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">3. Consistent Shadows</div>
            <pre className="rounded bg-muted p-3 text-xs overflow-x-auto">
{`const getShadow = (theme: Theme) => ({
  shadowColor: theme.colors.shadow,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: theme.mode === 'dark' ? 0.3 : 0.1,
  shadowRadius: 8,
  elevation: 3,
});`}
            </pre>
          </div>
        </div>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/mobile-components"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Components →</div>
            <div className="text-sm text-muted-foreground">UI component documentation</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/mobile-setup"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Setup Guide →</div>
            <div className="text-sm text-muted-foreground">Getting the app running</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/authentication"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Authentication →</div>
            <div className="text-sm text-muted-foreground">Firebase Google Sign-In setup</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
