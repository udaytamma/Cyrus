import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import { MermaidDiagram } from "@/components/MermaidDiagram";
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

        <MermaidDiagram
          chart={`flowchart TB
    APP["App.tsx"]
    AUTH["AuthProvider"]
    PREF["PreferencesProvider"]
    THEME["ThemeProvider"]
    STATE["{Auth State}"]
    LOGIN["LoginScreen"]
    HOME["HomeScreen"]
    AVATAR["ProfileAvatar"]
    SELECTOR["ProfileSelector"]
    PRIVACY["PrivacyPolicyModal"]
    CAPTURE["ImageCapture"]
    RESULTS["ResultsHeader"]
    RISK["RiskBadge"]
    CARD["IngredientCard"]
    SAFETY["SafetyBar"]

    APP --> AUTH
    AUTH --> PREF
    PREF --> THEME
    THEME --> STATE
    STATE --> |Not Signed In| LOGIN
    STATE --> |Signed In/Guest| HOME
    HOME --> AVATAR
    HOME --> SELECTOR
    SELECTOR --> PRIVACY
    HOME --> CAPTURE
    HOME --> RESULTS
    RESULTS --> RISK
    HOME --> CARD
    CARD --> SAFETY

    style APP fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style AUTH fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style PREF fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style THEME fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style STATE fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style LOGIN fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style HOME fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style AVATAR fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style SELECTOR fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style PRIVACY fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style CAPTURE fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style RESULTS fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style RISK fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style CARD fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style SAFETY fill:#d1fae5,stroke:#10b981,stroke-width:2px
`}
        />

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

        <MermaidDiagram
          chart={`flowchart TB
    subgraph COLLAPSED["Collapsed State"]
      direction LR
      C_HEADER["Fragrance  4/10"]
      C_BAR["Safety Bar"]
      C_DESC["Scent, masking agent"]
    end

    subgraph EXPANDED["Expanded State"]
      E_PURPOSE["PURPOSE<br/>Provides scent, masks other odors"]
      E_ORIGIN["ORIGIN<br/>Synthetic"]
      E_CONCERNS["CONCERNS<br/>Common allergen, may cause..."]
      E_REC["RECOMMENDATION<br/>CAUTION"]
      E_META["Category: Cosmetics | Allergy: High"]
      E_ALT["SAFER ALTERNATIVES<br/>fragrance-free, essential oils"]
    end

    COLLAPSED --> EXPANDED

    style COLLAPSED fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style EXPANDED fill:#d1fae5,stroke:#10b981,stroke-width:2px
    style C_HEADER fill:#fee2e2,stroke:#ef4444,stroke-width:1px
    style C_BAR fill:#fef3c7,stroke:#f59e0b,stroke-width:1px
    style C_DESC fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
    style E_PURPOSE fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
    style E_ORIGIN fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
    style E_CONCERNS fill:#fee2e2,stroke:#ef4444,stroke-width:1px
    style E_REC fill:#fef3c7,stroke:#f59e0b,stroke-width:1px
    style E_META fill:#fce7f3,stroke:#ec4899,stroke-width:1px
    style E_ALT fill:#d1fae5,stroke:#10b981,stroke-width:1px
`}
        />

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

        <MermaidDiagram
          chart={`flowchart TB
    subgraph PROFILE["Profile Selector"]
      direction TB
      HEADER["Your Profile"]

      subgraph USER["User Info"]
        AVATAR["Avatar"]
        NAME["John Doe<br/>john@example.com"]
        SIGNOUT["Sign Out"]
      end

      subgraph APPEARANCE["Appearance"]
        THEME["Light / Dark Toggle"]
      end

      subgraph ALLERGIES["Known Allergies"]
        ALLERGY_LIST["Fragrance | Sulfates | Parabens"]
      end

      subgraph SKIN["Skin Type"]
        SKIN_OPTIONS["Normal | Dry | Sensitive"]
      end

      subgraph STYLE["Explanation Style"]
        STYLE_OPTIONS["Simple (beginner)"]
      end

      PRIVACY["Privacy Policy"]

      subgraph DANGER["Danger Zone"]
        DELETE["Delete Account<br/>This will delete all your data"]
      end
    end

    HEADER --> USER
    USER --> APPEARANCE
    APPEARANCE --> ALLERGIES
    ALLERGIES --> SKIN
    SKIN --> STYLE
    STYLE --> PRIVACY
    PRIVACY --> DANGER

    style PROFILE fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style HEADER fill:#fef3c7,stroke:#f59e0b,stroke-width:1px
    style USER fill:#d1fae5,stroke:#10b981,stroke-width:1px
    style AVATAR fill:#fce7f3,stroke:#ec4899,stroke-width:1px
    style NAME fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
    style SIGNOUT fill:#fef3c7,stroke:#f59e0b,stroke-width:1px
    style APPEARANCE fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
    style THEME fill:#fef3c7,stroke:#f59e0b,stroke-width:1px
    style ALLERGIES fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
    style ALLERGY_LIST fill:#d1fae5,stroke:#10b981,stroke-width:1px
    style SKIN fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
    style SKIN_OPTIONS fill:#d1fae5,stroke:#10b981,stroke-width:1px
    style STYLE fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
    style STYLE_OPTIONS fill:#d1fae5,stroke:#10b981,stroke-width:1px
    style PRIVACY fill:#fef3c7,stroke:#f59e0b,stroke-width:1px
    style DANGER fill:#fee2e2,stroke:#ef4444,stroke-width:2px
    style DELETE fill:#fee2e2,stroke:#ef4444,stroke-width:1px
`}
        />

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

        <MermaidDiagram
          chart={`flowchart TB
    subgraph RESULTS["Results Header"]
      direction TB
      PRODUCT["CeraVe Moisturizer"]
      RISK["Overall Risk: LOW"]
      SCORE["Safety Score: 8.2/10"]
      COUNT["12 Ingredients Analyzed"]
      WARNING["Allergen Warning<br/>Fragrance matches your sensitivity"]
    end

    PRODUCT --> RISK
    RISK --> SCORE
    SCORE --> COUNT
    COUNT --> WARNING

    style RESULTS fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style PRODUCT fill:#fef3c7,stroke:#f59e0b,stroke-width:1px
    style RISK fill:#d1fae5,stroke:#10b981,stroke-width:1px
    style SCORE fill:#d1fae5,stroke:#10b981,stroke-width:1px
    style COUNT fill:#e0e7ff,stroke:#6366f1,stroke-width:1px
    style WARNING fill:#fee2e2,stroke:#ef4444,stroke-width:1px
`}
        />

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
