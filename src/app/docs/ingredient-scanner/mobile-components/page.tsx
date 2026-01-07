import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Mobile Components | AI Ingredient Scanner",
  description: "React Native component reference for the AI Ingredient Scanner mobile app.",
};

export default function MobileComponentsPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Mobile Components</h1>

        <p className="lead">
          The mobile app uses a set of reusable React Native components for a consistent user experience across iOS and Android.
        </p>

        <hr />

        <h2>Component Hierarchy</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`App.tsx
├── AuthProvider
│   └── PreferencesProvider
│       └── ThemeProvider
│           └── {Auth State}
│               ├── [Not Signed In] → LoginScreen
│               └── [Signed In/Guest] → HomeScreen
│                   ├── ProfileAvatar
│                   ├── ProfileSelector
│                   │   └── PrivacyPolicyModal
│                   ├── ImageCapture
│                   ├── ResultsHeader
│                   │   └── RiskBadge
│                   └── IngredientCard
│                       └── SafetyBar`}
        </pre>

        <hr />

        <h2>ImageCapture</h2>

        <p>
          Camera interface for capturing ingredient labels with real-time preview and gallery selection.
        </p>

        <h3>Usage</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`<ImageCapture
  onCapture={(base64Image) => handleCapture(base64Image)}
  onCancel={() => setShowCamera(false)}
/>`}
        </pre>

        <h3>Props</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Prop</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">onCapture</td>
                <td className="px-4 py-3 font-mono text-xs">(base64: string) =&gt; void</td>
                <td className="px-4 py-3 text-muted-foreground">Called with captured image</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">onCancel</td>
                <td className="px-4 py-3 font-mono text-xs">() =&gt; void</td>
                <td className="px-4 py-3 text-muted-foreground">Called when user cancels</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Features</h3>

        <ul>
          <li>Real-time camera viewfinder</li>
          <li>Tap-to-capture</li>
          <li>Gallery image selection</li>
          <li>Automatic orientation handling</li>
          <li>Base64 image encoding</li>
        </ul>

        <h3>Implementation</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// Camera capture
const takePicture = async () => {
  if (cameraRef.current) {
    const photo = await cameraRef.current.takePictureAsync({
      base64: true,
      quality: 0.8,
    });
    onCapture(photo.base64);
  }
};

// Gallery selection
const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    base64: true,
    quality: 0.8,
  });

  if (!result.canceled && result.assets[0].base64) {
    onCapture(result.assets[0].base64);
  }
};`}
        </pre>

        <hr />

        <h2>IngredientCard</h2>

        <p>
          Expandable card showing ingredient safety details with visual indicators.
        </p>

        <h3>Usage</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`<IngredientCard ingredient={ingredientDetail} />`}
        </pre>

        <h3>Visual Design</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────┐
│ ⚠️ Fragrance               4/10 ◐  │  ← Collapsed
│ ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│ Scent, masking agent           ▼   │
├─────────────────────────────────────┤
│ PURPOSE                             │  ← Expanded
│ Provides scent, masks other odors   │
│                                     │
│ ORIGIN                              │
│ Synthetic                           │
│                                     │
│ CONCERNS                            │
│ Common allergen, may cause...       │
│                                     │
│ RECOMMENDATION                      │
│ [CAUTION]                           │
│                                     │
│ Category: Cosmetics  Allergy: High  │
│                                     │
│ SAFER ALTERNATIVES                  │
│ [fragrance-free] [essential oils]   │
└─────────────────────────────────────┘`}
        </pre>

        <h3>Score Visualization</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Score</th>
                <th className="px-4 py-3 text-left font-semibold">Color</th>
                <th className="px-4 py-3 text-left font-semibold">Indicator</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">8-10</td>
                <td className="px-4 py-3"><span className="inline-block h-3 w-3 rounded" style={{ backgroundColor: '#22c55e' }}></span> Green</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">6-7</td>
                <td className="px-4 py-3"><span className="inline-block h-3 w-3 rounded" style={{ backgroundColor: '#84cc16' }}></span> Light Green</td>
                <td className="px-4 py-3">●</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">4-5</td>
                <td className="px-4 py-3"><span className="inline-block h-3 w-3 rounded" style={{ backgroundColor: '#f59e0b' }}></span> Amber</td>
                <td className="px-4 py-3">◐</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">1-3</td>
                <td className="px-4 py-3"><span className="inline-block h-3 w-3 rounded" style={{ backgroundColor: '#ef4444' }}></span> Red</td>
                <td className="px-4 py-3">!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>ProfileAvatar</h2>

        <p>
          Displays user&apos;s Google profile picture or a colored initial fallback.
        </p>

        <h3>Usage</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`<ProfileAvatar
  user={user}
  size={48}
  onPress={() => setCurrentScreen('profile')}
/>`}
        </pre>

        <h3>Props</h3>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Prop</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">user</td>
                <td className="px-4 py-3 font-mono text-xs">User | null</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3 text-muted-foreground">Firebase user object</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">size</td>
                <td className="px-4 py-3 font-mono text-xs">number</td>
                <td className="px-4 py-3">40</td>
                <td className="px-4 py-3 text-muted-foreground">Avatar diameter in pixels</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">onPress</td>
                <td className="px-4 py-3 font-mono text-xs">() =&gt; void</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3 text-muted-foreground">Optional tap handler</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Behavior</h3>

        <ul>
          <li><strong>Authenticated with photo:</strong> Displays Google profile picture</li>
          <li><strong>Authenticated without photo:</strong> Shows first initial with colored background</li>
          <li><strong>Guest mode:</strong> Shows "G" with colored background</li>
        </ul>

        <h3>Color Generation</h3>

        <p>
          Background color is generated from a hash of the user&apos;s UID or email for consistent colors:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const getColorFromString = (str: string): string => {
  const colors = [
    '#ef4444', '#f97316', '#f59e0b', '#84cc16',
    '#22c55e', '#14b8a6', '#06b6d4', '#3b82f6',
    '#8b5cf6', '#a855f7', '#ec4899',
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};`}
        </pre>

        <hr />

        <h2>ProfileSelector</h2>

        <p>
          User profile configuration with authentication, preferences, and account management.
        </p>

        <h3>Features</h3>

        <ul>
          <li><strong>User Profile Display:</strong> ProfileAvatar, name, and email for authenticated users</li>
          <li><strong>Dark/Light mode toggle:</strong> Theme switching with persistence</li>
          <li><strong>Known allergies:</strong> Multi-select (Fragrance, Sulfates, Parabens, etc.)</li>
          <li><strong>Skin type:</strong> Single select (Normal, Dry, Oily, Combination, Sensitive)</li>
          <li><strong>Explanation style:</strong> Simple (beginner) or Technical (expert)</li>
          <li><strong>Privacy Policy:</strong> In-app modal viewer</li>
          <li><strong>Account Management:</strong> Sign out and delete account options</li>
        </ul>

        <h3>UI Layout</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────┐
│ Your Profile                    ✕   │
├─────────────────────────────────────┤
│ [Avatar] John Doe                   │
│          john@example.com           │
│                        [Sign Out]   │
├─────────────────────────────────────┤
│ Appearance                          │
│ ☀️ Light          🌙 Dark  [●━━━○]  │
├─────────────────────────────────────┤
│ Known Allergies                     │
│ [Fragrance ✓] [Sulfates] [Parabens] │
├─────────────────────────────────────┤
│ Skin Type                           │
│ ○ Normal  ○ Dry  ● Sensitive        │
├─────────────────────────────────────┤
│ Explanation Style                   │
│ ● Simple (beginner)                 │
├─────────────────────────────────────┤
│ [Privacy Policy]                    │
├─────────────────────────────────────┤
│ ▼ Danger Zone                       │
│ ┌─────────────────────────────────┐ │
│ │ [Delete Account]                │ │
│ │ This will delete all your data  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘`}
        </pre>

        <h3>Danger Zone</h3>

        <p>
          Account deletion is protected by a collapsible section to prevent accidental clicks:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const [showDangerZone, setShowDangerZone] = useState(false);

const toggleDangerZone = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setShowDangerZone(!showDangerZone);
};`}
        </pre>

        <hr />

        <h2>ResultsHeader</h2>

        <p>
          Analysis summary with overall risk assessment and allergen warnings.
        </p>

        <h3>Usage</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`<ResultsHeader
  productName="CeraVe Moisturizer"
  overallRisk="low"
  averageSafetyScore={8.2}
  ingredientCount={12}
  allergenWarnings={[]}
/>`}
        </pre>

        <h3>Visual Design</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────┐
│ CeraVe Moisturizer                  │
│                                     │
│ Overall Risk: LOW                   │
│ ████████████████░░░░  8.2/10        │
│                                     │
│ 12 Ingredients Analyzed             │
│                                     │
│ ⚠️ 1 Allergen Warning               │
│ Fragrance matches your sensitivity  │
└─────────────────────────────────────┘`}
        </pre>

        <hr />

        <h2>SafetyBar &amp; RiskBadge</h2>

        <h3>SafetyBar</h3>

        <p>
          Horizontal safety score visualization:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`<SafetyBar score={8} maxScore={10} />

// Color mapping
const getScoreColor = (score: number): string => {
  if (score >= 8) return '#22c55e'; // Green
  if (score >= 6) return '#84cc16'; // Light green
  if (score >= 4) return '#f59e0b'; // Amber
  if (score >= 2) return '#f97316'; // Orange
  return '#ef4444'; // Red
};`}
        </pre>

        <h3>RiskBadge</h3>

        <p>
          Risk level indicator badge:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`<RiskBadge level="low" />
<RiskBadge level="medium" />
<RiskBadge level="high" />`}
        </pre>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Level</th>
                <th className="px-4 py-3 text-left font-semibold">Background</th>
                <th className="px-4 py-3 text-left font-semibold">Text</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Low</td>
                <td className="px-4 py-3 font-mono text-xs">#dcfce7</td>
                <td className="px-4 py-3 font-mono text-xs">#166534</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Medium</td>
                <td className="px-4 py-3 font-mono text-xs">#fef9c3</td>
                <td className="px-4 py-3 font-mono text-xs">#854d0e</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">High</td>
                <td className="px-4 py-3 font-mono text-xs">#fee2e2</td>
                <td className="px-4 py-3 font-mono text-xs">#991b1b</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Type Definitions</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`// types/index.ts

export interface UserProfile {
  allergies: string[];
  skinType: SkinType;
  expertise: ExpertiseLevel;
}

export type SkinType = 'normal' | 'dry' | 'oily' | 'combination' | 'sensitive';
export type ExpertiseLevel = 'beginner' | 'expert';
export type ThemeMode = 'light' | 'dark';
export type RiskLevel = 'low' | 'medium' | 'high';

export interface IngredientDetail {
  name: string;
  purpose: string;
  safety_score: number;
  risk_level: RiskLevel;
  concerns: string;
  recommendation: string;
  origin: string;
  category: string;
  allergy_risk: string;
  is_allergen_match: boolean;
  alternatives: string[];
}`}
        </pre>

        <hr />

        <h2>Related Documentation</h2>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/docs/ingredient-scanner/authentication"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Authentication →</div>
            <div className="text-sm text-muted-foreground">Firebase Google Sign-In setup</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/theme-system"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Theme System →</div>
            <div className="text-sm text-muted-foreground">Dark/Light mode implementation</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/mobile-setup"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Setup Guide →</div>
            <div className="text-sm text-muted-foreground">Getting the app running</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/ocr-translation"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">OCR & Translation →</div>
            <div className="text-sm text-muted-foreground">Multi-language support</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
