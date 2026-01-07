import { IngredientScannerDocsLayout } from "@/components/IngredientScannerDocsLayout";
import Link from "next/link";

export const metadata = {
  title: "Mobile Setup | AI Ingredient Scanner",
  description: "Getting the React Native Expo mobile app running for the AI Ingredient Scanner.",
};

export default function MobileSetupPage() {
  return (
    <IngredientScannerDocsLayout>
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>Mobile App Setup</h1>

        <p className="lead">
          The AI Ingredient Scanner mobile app is built with React Native and Expo, supporting both iOS and Android devices.
        </p>

        <hr />

        <h2>Prerequisites</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                <th className="px-4 py-3 text-left font-semibold">Version</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Node.js</td>
                <td className="px-4 py-3">18+</td>
                <td className="px-4 py-3 text-muted-foreground">JavaScript runtime</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">npm</td>
                <td className="px-4 py-3">9+</td>
                <td className="px-4 py-3 text-muted-foreground">Package manager</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Expo CLI</td>
                <td className="px-4 py-3">Latest</td>
                <td className="px-4 py-3 text-muted-foreground">Development tools</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium">Expo Go app</td>
                <td className="px-4 py-3">iOS/Android</td>
                <td className="px-4 py-3 text-muted-foreground">Device testing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Quick Start</h2>

        <h3>Step 1: Install Dependencies</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`cd mobile
npm install`}
        </pre>

        <h3>Step 2: Configure API URL</h3>

        <p>
          Find your machine&apos;s IP address:
        </p>

        <div className="not-prose my-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">macOS</div>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`ipconfig getifaddr en0`}
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Linux</div>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`hostname -I | awk '{print $1}'`}
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Windows</div>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`ipconfig | findstr IPv4`}
            </pre>
          </div>
        </div>

        <p>
          Edit <code>src/services/api.ts</code>:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`const API_BASE_URL = 'http://YOUR_IP_ADDRESS:8000';`}
        </pre>

        <div className="not-prose my-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
          <div className="font-semibold text-yellow-600 dark:text-yellow-400">Important</div>
          <p className="mt-1 text-sm">
            Do not use <code>localhost</code> - the mobile device cannot resolve it. Use your actual IP address.
          </p>
        </div>

        <h3>Step 3: Start Backend API</h3>

        <p>
          In a separate terminal:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`cd /path/to/IngredientScanner
source venv/bin/activate
uvicorn api:app --host 0.0.0.0 --port 8000`}
        </pre>

        <h3>Step 4: Launch Mobile App</h3>

        <pre className="not-prose rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`cd mobile
npx expo start`}
        </pre>

        <h3>Step 5: Connect Your Device</h3>

        <div className="not-prose my-6">
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">1</span>
              <span>Install <strong>Expo Go</strong> from App Store (iOS) or Play Store (Android)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">2</span>
              <span>Scan the QR code displayed in terminal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">3</span>
              <span>App loads on your device</span>
            </li>
          </ol>
        </div>

        <hr />

        <h2>Project Structure</h2>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`mobile/
├── App.tsx                     # App entry with Auth & Theme providers
├── app.json                    # Expo configuration
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
│
├── src/
│   ├── components/
│   │   ├── ImageCapture.tsx    # Camera & gallery interface
│   │   ├── IngredientCard.tsx  # Expandable ingredient details
│   │   ├── PrivacyPolicyModal.tsx # In-app privacy policy display
│   │   ├── ProfileAvatar.tsx   # User avatar (photo or initial)
│   │   ├── ProfileSelector.tsx # User profile, auth & theme settings
│   │   ├── ResultsHeader.tsx   # Analysis summary header
│   │   ├── RiskBadge.tsx       # Risk level indicator
│   │   ├── SafetyBar.tsx       # Safety score bar
│   │   └── SafetyMeter.tsx     # Overall safety visualization
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx      # Main app screen
│   │   └── LoginScreen.tsx     # Authentication screen
│   │
│   ├── context/
│   │   ├── ThemeContext.tsx    # Dark/Light theme state
│   │   ├── AuthContext.tsx     # Firebase authentication state
│   │   └── PreferencesContext.tsx # User preferences with Firestore sync
│   │
│   ├── config/
│   │   └── firebase.ts         # Firebase configuration
│   │
│   ├── services/
│   │   ├── api.ts              # Backend API client
│   │   └── ocr.ts              # Image processing & OCR
│   │
│   └── types/
│       └── index.ts            # TypeScript definitions
│
└── assets/
    ├── icon.png                # App icon
    ├── splash-icon.png         # Splash screen
    ├── adaptive-icon.png       # Android adaptive icon
    └── google-icon.png         # Google Sign-In button icon`}
        </pre>

        <hr />

        <h2>Development Commands</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Command</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">npx expo start</td>
                <td className="px-4 py-3">Start development server</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">npx expo start --clear</td>
                <td className="px-4 py-3">Clear cache and start</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">npx expo start --tunnel</td>
                <td className="px-4 py-3">Run with tunnel (network issues)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">npx tsc --noEmit</td>
                <td className="px-4 py-3">TypeScript type checking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Dependencies</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Package</th>
                <th className="px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">expo</td>
                <td className="px-4 py-3">Development framework</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">expo-camera</td>
                <td className="px-4 py-3">Camera access</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">expo-image-picker</td>
                <td className="px-4 py-3">Gallery selection</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">expo-auth-session</td>
                <td className="px-4 py-3">OAuth authentication flow</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">firebase</td>
                <td className="px-4 py-3">Authentication & Firestore</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">@react-native-async-storage/async-storage</td>
                <td className="px-4 py-3">Local preferences storage</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">axios</td>
                <td className="px-4 py-3">HTTP client</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Network Configuration</h2>

        <p>
          The mobile device must be on the same network as your development machine:
        </p>

        <pre className="not-prose rounded-lg bg-muted p-4 text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│                    NETWORK SETUP                             │
│                                                              │
│    ┌─────────────┐         ┌─────────────┐                  │
│    │   Mobile    │  WiFi   │   Router    │                  │
│    │   Device    │◄───────►│  (Network)  │                  │
│    └─────────────┘         └──────┬──────┘                  │
│                                   │                          │
│                              WiFi/Ethernet                   │
│                                   │                          │
│                            ┌──────▼──────┐                  │
│                            │    Dev      │                  │
│                            │   Machine   │                  │
│                            └──────┬──────┘                  │
│                                   │                          │
│                              Port 8000                       │
│                                   │                          │
│                            ┌──────▼──────┐                  │
│                            │  FastAPI    │                  │
│                            │   Server    │                  │
│                            └─────────────┘                  │
└─────────────────────────────────────────────────────────────┘`}
        </pre>

        <h3>Firewall Settings</h3>

        <p>
          If connection fails, ensure port 8000 is allowed through your firewall.
        </p>

        <div className="not-prose my-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">macOS</div>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`# Check if firewall is enabled
sudo /usr/libexec/ApplicationFirewall/\\
socketfilterfw --getglobalstate`}
            </pre>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold">Windows</div>
            <p className="text-sm text-muted-foreground">
              Open Windows Defender Firewall → Allow an app through firewall → Add Python or uvicorn
            </p>
          </div>
        </div>

        <hr />

        <h2>Troubleshooting</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">"Cannot connect to server"</div>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
              <li>Verify backend is running: <code>curl http://YOUR_IP:8000/health</code></li>
              <li>Ensure phone and computer are on same WiFi network</li>
              <li>Check IP address in <code>api.ts</code></li>
              <li>Temporarily disable firewall to test</li>
            </ol>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Camera not working</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Grant camera permission when prompted</li>
              <li><strong>iOS:</strong> Settings → Expo Go → Camera</li>
              <li><strong>Android:</strong> Settings → Apps → Expo Go → Permissions</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">OCR not extracting text</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Ensure good lighting conditions</li>
              <li>Hold camera steady</li>
              <li>Frame the ingredient list clearly</li>
              <li>Try selecting a clearer image from gallery</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 font-semibold text-red-600 dark:text-red-400">Metro bundler issues</div>
            <pre className="rounded bg-muted p-2 text-xs overflow-x-auto">
{`# Kill existing processes and restart
npx expo start --clear

# Or manually kill
lsof -i :8081 | grep LISTEN | awk '{print $2}' | xargs kill -9`}
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
            href="/docs/ingredient-scanner/authentication"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Authentication →</div>
            <div className="text-sm text-muted-foreground">Firebase Google Sign-In setup</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/ocr-translation"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">OCR & Translation →</div>
            <div className="text-sm text-muted-foreground">Multi-language support</div>
          </Link>
          <Link
            href="/docs/ingredient-scanner/theme-system"
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div className="font-semibold text-foreground">Theme System →</div>
            <div className="text-sm text-muted-foreground">Dark/Light mode implementation</div>
          </Link>
        </div>
      </article>
    </IngredientScannerDocsLayout>
  );
}
